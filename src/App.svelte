<script lang="ts">
    let selectedFile: File | null = null;
    let processedImageUrl: string | null = null;

    const handleFileUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('image', selectedFile);

        const response = await fetch('https://elianrenteria.me/api/remove-bg', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const blob = await response.blob();
            processedImageUrl = URL.createObjectURL(blob);
        } else {
            alert('Failed to process image');
        }
    };

    const onFileChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            selectedFile = input.files[0];
        }
    };

    const downloadImage = () => {
        const link = document.createElement('a');
        link.href = processedImageUrl!;
        link.download = 'processed-image.png';
        link.click();
    };
</script>

<main class="container">
    <h1>Background Remover</h1>
    <input type="file" accept="image/*" on:change={onFileChange} />
    <button on:click={handleFileUpload}>Upload and Remove Background</button>

    {#if processedImageUrl}
        <div class="result">
            <img src={processedImageUrl} alt="Processed Image" />
            <button on:click={downloadImage}>Download Image</button>
        </div>
    {/if}
</main>

<style>
    h1 {
        font-weight: 300;
        text-align: center;
        margin-top: 1.5rem;
    }

    .container {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }

    input[type="file"] {
        margin-top: 1rem;
    }

    button {
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;
    }

    .result {
        margin-top: 1rem;
    }

    img {
        max-width: 100%;
        height: auto;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 5px;
    }
</style>
