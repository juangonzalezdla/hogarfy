import DashboardLayout from "./DashboardLayout.jsx";
import { Table, Button, Label, TextInput, Select, Dropdown, Modal } from "flowbite-react";
import { Toaster } from "react-hot-toast";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { useCategory } from "../../context/CategoryContext.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function Categories() {
  const { categories, getCategories, createCategory, updateCategory, deleteCategory } = useCategory();
  const { register, handleSubmit, setValue, reset } = useForm();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showEditCategory, setShowEditCategory] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    document.title = "Dashboard | Categorias";
    getCategories();
  }, []);

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setShowEditCategory(true);
    setValue("name", category.name);
    setValue("parent", category.parent ? category.parent._id : "");
  };

  const onSubmit = async (data) => {
    if (selectedCategory) {
      data._id = selectedCategory._id;
      await updateCategory(data);
    } else {
      await createCategory(data);
    }
    reset();
    setSelectedCategory(null);
    setShowEditCategory(false);
    getCategories();
  };

  return (
    <DashboardLayout>
      <Toaster />
      <h1 className="text-azul font-poppins text-xl font-bold mb-5 text-center">
        Categorias
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[700px]] flex items-end gap-5 mb-5">
          <div className="max-w-[250px]">
            <div className="mb-2 block">
              <Label
                htmlFor="name"
                value={showEditCategory
                  ? `Editar categoria ${selectedCategory.name}`
                  : "Nueva categoria"
                }
              />
            </div>
            <TextInput
              id="name"
              placeholder="Nombre de la categoria"
              type="text"
              defaultValue=""
              {...register("name")}
            />
          </div>

          <div className="max-w-[250px]">
            <div className="mb-2 block">
              <Label htmlFor="parent-category" value="Categoria padre" />
            </div>
            <Select defaultValue="" {...register("parent")} required>
              <option value="">Elige categoria padre</option>
              {categories.map((category) => (
                <option value={category._id} key={category._id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </div>

          <Button type="submit" color="blue">
            Guardar
          </Button>
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
            <Table.Row key={category._id} className="bg-white">
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
                    onClick={() => handleCategory(category)}
                    className="text-base font-medium rounded-md flex items-center gap-2"
                  >
                    <i className="bx bx-edit text-[20px]"></i>
                    Editar
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    onClick={() => {
                      handleCategory(category);
                      setOpenModal(true);
                    }}
                    className="text-base text-red-700 font-medium rounded-md flex items-center gap-2"
                  >
                    <i className="bx bxs-trash text-[20px]"></i>
                    Eliminar
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gris-oscuro" />
            <h3 className="mb-5 text-lg font-normal text-gris-oscuro">
              {`¿Estás seguro de que quieres eliminar la categoria ${selectedCategory?.name}?`}
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => {
                  deleteCategory(selectedCategory._id);
                  setOpenModal(false);
                }}
              >
                Si, Estoy seguro
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </DashboardLayout>
  );
}

export default Categories;