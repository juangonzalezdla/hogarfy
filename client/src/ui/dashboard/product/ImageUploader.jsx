import { Button, Label, FileInput } from 'flowbite-react';
import { useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';

export default function ImageUploader({ fields, append, remove }) {
  const [loading, setLoading] = useState(false);

  const uploadImages = async (files) => {
    setLoading(true);
    try {
      for (let file of files) {
        const fileName = `${uuidv4()}`;
        const folder = 'product_images';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET);
        formData.append('public_id', `${folder}/${fileName}`);

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUD_NAME
          }/image/upload`,
          formData
        );
        const imageUrl = response.data.secure_url;
        const publicId = response.data.public_id;

        append({ url: imageUrl, publicId: publicId });
      }
    } catch (error) {
      console.error('Error uploading images:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (publicId, index) => {
    setLoading(true);
    try {
      const timestamp = Math.floor(Date.now() / 1000);
      const apiSecret = import.meta.env.VITE_API_SECRET;
      const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
      const signature = CryptoJS.SHA256(stringToSign).toString();

      const formData = new FormData();
      formData.append('public_id', publicId);
      formData.append('signature', signature);
      formData.append('api_key', import.meta.env.VITE_API_KEY);
      formData.append('timestamp', timestamp);

      await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUD_NAME
        }/image/destroy`,
        formData
      );
      remove(index);
    } catch (error) {
      console.error('Error deleting image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='w-full'>
        <Label value='Imagenes' htmlFor='images' />
        <FileInput
          id='images'
          accept='image/*'
          multiple
          onChange={(e) => uploadImages(e.target.files)}
          disabled={loading}
        />
      </div>

      <div className='w-full flex flex-wrap gap-3'>
        {fields.map((field, index) => (
          <div
            className='flex flex-col justify-center items-start gap-2 bg-light-gray p-2 rounded-lg'
            key={field.id}
          >
            <Label value={`Imagen ${index + 1}`} />
            <img
              className='w-28 h-28'
              src={field.url}
              alt={`Imagen ${index + 1}`}
            />
            <Button
              color='failure'
              type='button'
              onClick={() => deleteImage(field.publicId, index)}
              size='xs'
            >
              Eliminar
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
