from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from rembg import remove
from PIL import Image
import io
import os
from tempfile import NamedTemporaryFile
from fastapi.responses import FileResponse
from fastapi import File, UploadFile

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Update with your frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/remove-bg")
async def remove_bg(image: UploadFile = File(...)):
    contents = await image.read()
    input_image = Image.open(io.BytesIO(contents))

    # Remove the background
    output_image = remove(input_image)

    # Save the output image to a temporary file
    with NamedTemporaryFile(delete=False, suffix=".png") as tmp:
        output_image.save(tmp, format="PNG")
        tmp_path = tmp.name

    # Return the image as a file response
    return FileResponse(tmp_path, media_type="image/png", filename="processed-image.png")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
