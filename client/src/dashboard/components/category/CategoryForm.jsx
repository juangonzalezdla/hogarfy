import { Button, Label, TextInput, Select } from 'flowbite-react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';
import { useCategory } from '../../../contexts/CategoryContext';
import ValidationForm from '../../../components/ValidationForm';
import { categorySchema } from '../../../schemas/category';
import { zodResolver } from '@hookform/resolvers/zod';

export default function CategoryForm({ onSubmit, category }) {
  const { getCategories, categories } = useCategory();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(categorySchema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'properties',
  });

  useEffect(() => {
    getCategories();
    if (category) {
      reset({
        name: category.name,
        parentId: category.parent?._id || '',
        properties: category.properties.map((property) => ({
          name: property.name,
          values: property.values.join(', '),
        })),
      });
    }
  }, [category]);

  const parentCategories = categories.filter((category) => !category.parent);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full flex justify-start items-start flex-wrap gap-5'>
        <div className='w-64 max-sm:w-full'>
          <Label htmlFor='name' value='Nombre' />
          <div className='relative'>
            <TextInput
              id='name'
              type='text'
              placeholder='Nombre de la categoria'
              {...register('name')}
            />
            {errors.name?.message && (
              <ValidationForm message={errors.name?.message} />
            )}
          </div>
        </div>

        <div className='w-64 max-sm:w-full'>
          <Label htmlFor='parent-category' value='Categoria padre' />
          <div className='relative'>
            <Select
              defaultValue=''
              id='parent-category'
              {...register('parentId')}
            >
              <option value=''>Elige categoria padre</option>
              {parentCategories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div className='w-64'>
          <Label value='Propiedades' />
          <Button
            onClick={() => append({ name: '', values: '' })}
            type='button'
            size='sm'
          >
            Agregar propiedad
          </Button>
        </div>

        {fields.map((field, index) => (
          <div
            key={field.id}
            className='w-full flex justify-start items-start gap-2'
          >
            <div className='w-64 max-sm:w-full'>
              <Label htmlFor='propertyName' value='Nombre' />
              <div className='relative'>
                <TextInput
                  id='propertyName'
                  placeholder='Ej: Color'
                  {...register(`properties.${index}.name`)}
                />
                {errors.properties?.[index]?.name && (
                  <ValidationForm
                    message={errors.properties[index].name.message}
                  />
                )}
              </div>
            </div>

            <div className='w-64 max-sm:w-full'>
              <Label htmlFor='propertyValues' value='Valores' />
              <div className='relative'>
                <TextInput
                  id='propertyValues'
                  placeholder='Ej: Blanco, Rojo, Negro'
                  {...register(`properties.${index}.values`)}
                />
                {errors.properties?.[index]?.values && (
                  <ValidationForm
                    message={errors.properties[index].values.message}
                  />
                )}
              </div>
            </div>

            <Button
              onClick={() => remove(index)}
              type='button'
              color='failure'
              size='xs'
            >
              Eliminar
            </Button>
          </div>
        ))}
      </div>

      <Button className='mt-5' color='purple' type='submit'>
        {category ? 'Actualizar categoría' : 'Crear categoría'}
      </Button>
    </form>
  );
}
