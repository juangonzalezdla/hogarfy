import { Button, Label, TextInput, Select } from 'flowbite-react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useEffect } from 'react';
import { useCategory } from '../../context/CategoryContext';

export default function CategoryForm({ onSubmit, category }) {
  const { getCategories, categories } = useCategory();
  const { register, handleSubmit, control, reset } = useForm();
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
          values: property.values.join(', ')
        })),
      });
    }
  }, [category]);

  const parentCategories = categories.filter((category) => !category.parent);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='w-full flex justify-start items-center flex-wrap gap-5'>
        <div className='w-64'>
          <Label htmlFor='name' value='Nombre' />
          <TextInput
            id='name'
            type='text'
            placeholder='Nombre de la categoria'
            {...register('name')}
          />
        </div>

        <div className='w-64'>
          <Label htmlFor='parent-category' value='Categoria padre' />
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

        <div className='w-64'>
          <Label value='Propiedades' />
          <Button
            onClick={() => append({ name: '', values: '' })}
            type='button'
            size='sm'
          >
            Agregar propiedad
          </Button>

          {fields.map((field, index) => (
            <div key={field.id} className='flex justify-start items-end flex-row gap-2 mt-3'>
              <div>
                <Label>Nombre</Label>
                <TextInput
                  className='w-60'
                  placeholder='Ej: Color'
                  {...register(`properties.${index}.name`)}
                />
              </div>
              <div>
                <Label>Valores</Label>
                <TextInput
                  className='w-60'
                  placeholder='Ej: Blanco, Rojo, Negro'
                  {...register(`properties.${index}.values`)}
                />
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
      </div>

      <Button className='mt-5' color='purple' type='submit'>
        {category ? 'Actualizar categoría' : 'Crear categoría'}
      </Button>
    </form>
  );
}
