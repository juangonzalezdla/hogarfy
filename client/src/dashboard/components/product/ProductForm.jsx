import {
  Button,
  Label,
  TextInput,
  Textarea,
  Select,
  Radio,
} from 'flowbite-react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useCategory } from '../../../contexts/CategoryContext';
import { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';

export default function ProductForm({ onSubmit, product }) {
  const { getCategories, categories } = useCategory();
  const { register, handleSubmit, control, reset } = useForm();
  const { fields, append, remove } = useFieldArray({ control, name: 'images' });
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getCategories();
    if (product) {
      reset({
        name: product.name,
        brand: product.brand,
        category: product.category._id,
        images: product.images.map((image) => ({
          url: image.url,
          publicId: image.publicId
        })),
        price: product.price,
        description: product.description,
        isFeatured: product.isFeatured,
      });
      setSelectedCategory(product.category);
    }
  }, [product]);

  const childrenCategories = categories.filter((category) => category.parent);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

        <ImageUploader fields={fields} append={append} remove={remove} />

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
            <Radio value={false} defaultChecked {...register('isFeatured')} />
            <Label value='No' />
          </div>
        </div>
      </div>

      <Button className='mt-5' color='purple' type='submit'>
        {product ? 'Actualizar producto' : 'Crear producto'}
      </Button>
    </form>
  );
}
