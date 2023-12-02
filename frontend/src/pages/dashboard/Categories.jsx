import DashboardLayout from "./DashboardLayout.jsx";
import { useCategory } from "../../context/CategoryContext.jsx";
import { Table, Button, Label, TextInput, Select, Dropdown } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Categories() {
  const { categories, getCategories, createCategory, deleteCategory } = useCategory();
  const [showEditCategory, setShowEditCategory] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await createCategory(data);
    
    getCategories();
    reset();
  };

  return (
    <DashboardLayout>
      <h1 className="text-azul font-poppins text-xl font-bold mb-5 text-center">
        Categorias
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[600px]] flex items-end gap-5 mb-10">
          <div className="max-w-[200px]">
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value="Nueva categoria"
              />
            </div>
            <TextInput
              id="name"
              placeholder="Nombre de la categoria"
              type="text"
              defaultValue=''
              {...register("name")}
            />
          </div>

          <div className="max-w-[200px]">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Categoria padre" />
            </div>
            <Select defaultValue='' {...register("parent")} required>
              <option value="">Elige categoria padre</option>
              {categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>

          <Button type="submit" color="blue">Guardar</Button>
        </div>
      </form>

      <Table striped>
        <Table.Head>
          <Table.HeadCell className="bg-azul text-white">
            Nombre categoria
          </Table.HeadCell>
          <Table.HeadCell className="bg-azul text-white">
            Categoria padre
          </Table.HeadCell>
          <Table.HeadCell className="bg-azul"></Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {categories.map((category) => (
            <Table.Row
              key={category._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="font-medium text-gray-900">
                {category.name}
              </Table.Cell>
              <Table.Cell>{category?.parent?.name}</Table.Cell>
              <Table.Cell>
                <Dropdown
                  renderTrigger={() => (
                    <i className="bx bx-dots-horizontal-rounded text-[25px] cursor-pointer p-2 rounded-full hover:text-gray-800 hover:bg-gris-claro"></i>
                  )}
                  className="p-2 rounded-md"
                >
                  <Dropdown.Item
                    className="text-base font-medium rounded-md flex items-center gap-2"
                    
                  >
                    <i class="bx bx-edit text-[20px]"></i>
                    Editar
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item  className="text-base text-red-700 font-medium rounded-md flex items-center gap-2">
                    <i class="bx bxs-trash text-[20px]"></i>
                    Eliminar
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </DashboardLayout>
  );
}

export default Categories;