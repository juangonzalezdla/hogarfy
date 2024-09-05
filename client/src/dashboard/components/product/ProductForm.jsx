import { Button, Label, TextInput, Textarea, Select, Checkbox } from 'flowbite-react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useCategory } from '../../../contexts/CategoryContext';
import { useState, useEffect } from 'react';
import ImageUploader from './ImageUploader';
import ValidationForm from '../../../components/ValidationForm';
import { productSchema } from '../../../schemas/product';
import { zodResolver } from '@hookform/resolvers/zod';

export default function ProductForm({ onSubmit, product }) {
  const { getCategories, categories } = useCategory();
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({ resolver: zodResolver(productSchema) });
  const { fields, append, remove } = useFieldArray({ control, name: 'images' });
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getCategories();
    if (product) {
      reset({
        name: product.name,
        brand: product.brand,
        category: product.category?._id,
        images: product.images.map((image) => ({
          url: image.url,
          publicId: image.publicId,
        })),
        price: product.price,
        description: product.description,
        isFeatured: product.isFeatured,
      });
      const selectedCat = categories.find(
        (category) => category._id === product.category?._id
      );
      setSelectedCategory(selectedCat);
    } else {
      // Si es un producto nuevo, establece el valor predeterminado de isFeatured
      reset({
        isFeatured: false,
      });
    }
  }, [product]);

  const childrenCategories = categories.filter((category) => category.parent);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full flex justify-start items-center flex-wrap gap-5'>
        <div className='w-64 max-sm:w-full'>
          <Label value='Nombre' htmlFor='name' />
          <TextInput
            id='name'
            type='text'
            placeholder='Nombre del producto'
            {...register('name')}
          />
          {errors.name?.message && (
            <ValidationForm message={errors.name?.message} />
          )}
        </div>

        <div className='w-64 max-sm:w-full'>
          <Label value='Marca' htmlFor='brand' />
          <TextInput
            id='brand'
            type='text'
            placeholder='Marca del producto'
            {...register('brand')}
          />
          {errors.brand?.message && (
            <ValidationForm message={errors.brand?.message} />
          )}
        </div>

        <div className='w-64 max-sm:w-full'>
          <Label value='Categoría' htmlFor='category' />
          <Select
            id='category'
            defaultValue=''
            {...register('category')}
            onChange={(e) => {
              const selectedCat = categories.find(
                (category) => category._id === e.target.value
              );
              setSelectedCategory(selectedCat);
            }}
          >
            <option value='' disabled>
              Elige la categoría
            </option>
            {childrenCategories.map((category) => (
              <option value={category._id} key={category._id}>
                {category.name}
              </option>
            ))}
          </Select>
          {selectedCategory === null && errors.category?.message && (
            <ValidationForm message={errors.category.message} />
          )}
        </div>

        {selectedCategory && selectedCategory.properties?.length > 0 && (
          <div className='w-64 max-sm:w-full'>
            {selectedCategory.properties.map((property) => (
              <div key={property.name}>
                <Label
                  value={`Propiedad - ${property.name}`}
                  htmlFor={`properties.${property.name}`}
                />
                <Select {...register(`properties.${property.name}`)}>
                  <option value='' disabled>
                    Elige un valor
                  </option>
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

        <div className='w-64 max-sm:w-full'>
          <Label value='Precio' htmlFor='price' />
          <TextInput
            defaultValue={0}
            id='price'
            type='number'
            placeholder='Precio del producto'
            {...register('price', { valueAsNumber: true })}
          />
          {errors.price?.message && (
            <ValidationForm message={errors.price?.message} />
          )}
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
          {errors.description?.message && (
            <ValidationForm message={errors.description?.message} />
          )}
        </div>

        <div className='w-64'>
          <div className='flex items-center gap-2'>
            <Checkbox id='isFeatured' {...register('isFeatured')} />

            <Label
              htmlFor='isFeatured'
              value='¿Este es un producto destacado?'
              className='block'
            />
          </div>
        </div>
      </div>

      <Button className='mt-5' color='purple' type='submit'>
        {product ? 'Actualizar producto' : 'Crear producto'}
      </Button>
    </form>
  );
}
