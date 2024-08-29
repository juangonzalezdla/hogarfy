import { useCart } from '../../contexts/CartContext';
import { Button, Table } from 'flowbite-react';
import formatPrice from '../../utils/formatPrice';

export default function CartTable() {
  const { cartProducts, removeFromCart, addToCart, decreaseFromCart } =
    useCart();

  const increaseProduct = (_id) => {
    addToCart(_id);
  };

  const decreaseProduct = (_id) => {
    decreaseFromCart(_id);
  };

  return (
    <>
      {cartProducts.length != 0 ? (
        <Table>
          <Table.Head>
            <Table.HeadCell className='bg-light-gray px-3'>
              Producto
            </Table.HeadCell>
            <Table.HeadCell className='bg-light-gray px-3'>
              Cantidad
            </Table.HeadCell>
            <Table.HeadCell className='bg-light-gray px-3'>
              Precio
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className='divide-y text-black font-semibold'>
            {cartProducts.map((product) => (
              <Table.Row className='mb-5' key={product._id}>
                <Table.Cell className='px-3 py-2'>
                  <div className='flex flex-col items-start gap-2'>
                    <img
                      className='w-20 h-20'
                      src={product.images[0].url}
                      alt='Imagen del producto'
                    />
                    {product.name}
                    <Button
                      color='dark'
                      size='xs'
                      onClick={() => removeFromCart(product._id)}
                      className='mb-2'
                    >
                      Quitar
                    </Button>
                  </div>
                </Table.Cell>
                <Table.Cell className='px-3 py-2'>
                  <div className='flex items-center justify-center gap-2'>
                    <button
                      className='bg-dark-gray w-7 text-lg text-white font-bold rounded-md'
                      onClick={() => decreaseProduct(product._id)}
                    >
                      -
                    </button>
                    {product.quantity}
                    <button
                      className='bg-dark-gray w-7 text-lg text-white font-bold rounded-md'
                      onClick={() => increaseProduct(product._id)}
                    >
                      +
                    </button>
                  </div>
                </Table.Cell>
                <Table.Cell className='px-3 py-2'>
                  {formatPrice(product.price * product.quantity)}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div className='text-center text-lg font-semibold'>
          El carrito está vacío
        </div>
      )}
    </>
  );
}
