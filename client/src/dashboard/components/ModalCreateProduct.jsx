import {
  Modal,
  Button,
  Label,
  TextInput,
  Textarea,
  Select,
  FileInput,
  Radio,
} from 'flowbite-react';
import { Toaster } from 'react-hot-toast';

import { useState, useEffect } from 'react';
import { useProduct } from '../context/ProductContext';
import { useCategory } from '../context/CategoryContext';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';

export default function ModalCreateProduct({ show }) {
  const { createProduct } = useProduct();
  const { getCategories, categories } = useCategory();
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const { register, handleSubmit, control } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'images' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const childrenCategories = categories.filter((category) => category.parent);

  const onSubmit = (data) => {};

  const uploadImages = async (files) => {
    setLoading(true);
    try {
      for (let file of files) {
        const fileName = `${uuidv4()}`;
        const folder = 'product_images';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'epukkowo');
        formData.append('public_id', `${folder}/${fileName}`);

        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dsfoscdww/image/upload',
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
      const apiSecret = 'aPV3K4iVy2JBjVcFAA3aRBKrSuU';
      const stringToSign = `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
      const signature = CryptoJS.SHA256(stringToSign).toString();

      const formData = new FormData();
      formData.append('public_id', publicId);
      formData.append('signature', signature);
      formData.append('api_key', '826282682856161');
      formData.append('timestamp', timestamp);

      await axios.post(
        `https://api.cloudinary.com/v1_1/dsfoscdww/image/destroy`,
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
      <Toaster />
      <Button color='purple' onClick={() => setOpenModal(show)}>
        Agregar producto
      </Button>
      <Modal show={openModal} size='2xl' onClose={() => setOpenModal(false)}>
        <Modal.Header>Crear un nuevo producto</Modal.Header>

        <Modal.Body>
          <form>
            <div className='w-full flex justify-start items-center flex-wrap gap-5'>
              <div className='w-64'>
                <Label value='Nombre' htmlFor='name' />
                <TextInput
                  id='name'
                  type='text'
                  placeholder='Nombre del producto'
                  {...register('name')}
                />
              </div>

              <div className='w-64'>
                <Label value='Marca' htmlFor='brand' />
                <TextInput
                  id='brand'
                  type='text'
                  placeholder='Marca del producto'
                  {...register('brand')}
                />
              </div>

              <div className='w-64'>
                <Label value='Categoría' htmlFor='category' />
                <Select id='category' defaultValue='' {...register('category')}>
                  <option value=''>Elige la categoría</option>
                  {childrenCategories.map((category) => (
                    <option
                      value={category._id}
                      key={category._id}
                      onClick={() => setSelectedCategory(category._id)}
                    >
                      {category.name}
                    </option>
                  ))}
                </Select>
              </div>

              {selectedCategory && selectedCategory.properties.length > 0 && (
                <div className='w-64'>
                  <Label value='Propiedades' htmlFor='properties' />
                  {selectedCategory.properties.map((property) => (
                    <div key={property.name}>
                      <Label
                        value={property.name}
                        htmlFor={`properties.${property.name}`}
                      />
                      <Select {...register(`properties.${property.name}`)}>
                        <option value=''>Elige un valor</option>
                        {property.values.map((value, index) => (
                          <option value={value} key={index}>
                            {value}
                          </option>
                        ))}
                      </Select>
                    </div>
                  ))}
                </div>
              )}

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
                    <Label
                      htmlFor={`images[${index}]`}
                      value={`Imagen ${index + 1}`}
                    />
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

              <div className='w-64'>
                <Label value='Precio' htmlFor='price' />
                <TextInput
                  id='price'
                  type='number'
                  placeholder='Precio del producto'
                  {...register('price')}
                />
              </div>

              <div className='w-full'>
                <Label value='Descripción' htmlFor='description' />
                <Textarea
                  id='description'
                  type='text'
                  placeholder='Descripción del producto...'
                  maxLength='800'
                  rows={5}
                  className='resize-none'
                  {...register('description')}
                />
              </div>

              <div className='w-64'>
                <Label
                  value='¿Este es un producto destacado?'
                  className='block mb-2'
                />
                <div className='flex items-center gap-2'>
                  <Radio value={true} {...register('isFeatured')} />
                  <Label value='Si' />
                </div>
                <div className='flex items-center gap-2'>
                  <Radio
                    value={false}
                    defaultChecked
                    {...register('isFeatured')}
                  />
                  <Label value='No' />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color='purple' type='submit'>
            Crear producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
