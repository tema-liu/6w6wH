function validateImageFile(file: File): Promise<string | true> {
  return new Promise((resolve) => {
    if (!file || !(file instanceof File)) {
      resolve("This file is not a valid image");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result as string;
      image.onload = () => resolve(true);
      image.onerror = () => resolve("This file is not a valid image");
    };
    reader.onerror = () => resolve("This file is not a valid image");
    reader.readAsDataURL(file);
  });
}

export default validateImageFile;
