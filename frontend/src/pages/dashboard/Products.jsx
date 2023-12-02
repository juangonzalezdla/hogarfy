import DashboardLayout from "./DashboardLayout.jsx";
import { useProduct } from "../../context/ProductContext.jsx";
import { Table, Button, Modal, Label, TextInput, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { createProductSchema, updateProductSchema } from "../../schemas/product.js";

function Products() {
  const { products, getProducts, getProduct, productData, createProduct } = useProduct();

  useEffect(() => {
    getProducts();
    //getProduct();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductSchema),
  });

  const onSubmit = async (data) => await createProduct(data);

  const [openModal, setOpenModal] = useState();

  function uploadImages(ev) {
    console.log(ev)
  }

  return (
    <DashboardLayout>
      <h1 className="text-azul font-poppins text-xl font-bold mb-5 text-center">
        Productos
      </h1>

      <Button color="blue" className="flex items-center justify-center" onClick={() => setOpenModal('form-elements')}>
        <i className="bx bx-plus text-[20px] mr-1"></i>
        Agregar producto
      </Button>

      <Modal
        size="xl"
        show={openModal === "form-elements"}
        onClose={() => setOpenModal()}
      >
        <Modal.Header>Agregar producto</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-5">
              <Label
                htmlFor="name"
                value="Nombre"
                className="mb-2 block cursor-pointer"
              />
              <TextInput
                id="name"
                placeholder="Nombre de producto"
                type="text"
                {...register("name")}
              />
              {errors.name?.message && (
                <p className="text-red-500 font-semibold">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <Label
                htmlFor="brand"
                value="Marca"
                className="mb-2 block"
              />
              <TextInput
                id="brand"
                placeholder="Marca del producto"
                type="text"
                {...register("brand")}
              />
              {errors.brand?.message && (
                <p className="text-red-500 font-semibold">
                  {errors.brand?.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <Label
                htmlFor="description"
                value="Descricion"
                className="mb-2 block"
              />
              <Textarea
                id="description"
                placeholder="Descripcion del producto..."
                type="text"
                maxLength="200"
                rows={4}
                {...register("description")}
              />
              {errors.description?.message && (
                <p className="text-red-500 font-semibold">
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className="mb-5">
              <Label 
                value="Cargar imagenes"
              />
              <div>
                <label className="cursor-pointer">
                  <i className='bx bx-cloud-upload text-[50px]'></i>
                  <div>
                    Cargar imagen
                  </div>

                  <input
                  type="file"
                  onChange={uploadImages}
                  className="hidden"
                  {...register("images")}
                />
                </label>
                {/*{!productData.images?.length && (
                  <div>Ho hay imagenes en este producto</div>
                )}*/}
              </div>
            </div>

            <Button className="mt-6" type="submit" color="blue">
              Agregar nuevo producto
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      

      <Table striped>
        <Table.Head>
          <Table.HeadCell>Nombre producto</Table.HeadCell>
          <Table.HeadCell>Marca</Table.HeadCell>
          <Table.HeadCell>Categoria</Table.HeadCell>
          <Table.HeadCell>precio</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product) => (
            <Table.Row
              key={product._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="font-medium text-gray-900">
                {product.name}
              </Table.Cell>
              <Table.Cell>{product.brand}</Table.Cell>
              <Table.Cell>{product?.category?.name}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </DashboardLayout>
  );
}

export default Products;
