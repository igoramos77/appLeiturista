const convertBlobToBase64 = (blob: any): Promise<any> => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };

    return reader.readAsDataURL(blob);
});

export default convertBlobToBase64;
