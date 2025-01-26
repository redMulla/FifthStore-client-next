import { Checkbox, Modal, Table } from 'flowbite-react';
import React, { useState } from 'react';

import { ProductModel, products } from '@/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';

const ProductsTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductModel | null>(
    null,
  );

  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  };
  return (
    <div className="">
      <Table className="font-primary rounded-none" hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products.map((product) => (
            <Table.Row
              key={product.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="p-4">
                <Checkbox />
              </Table.Cell>
              <Table.Cell
                className="whitespace-nowrap font-medium text-gray-900 dark:text-white dark:hover:text-blue-400 hover:text-blue-500 cursor-pointer"
                onClick={() => handleOpenModal(product)}
              >
                {product.name}
              </Table.Cell>
              <Table.Cell>{product.color}</Table.Cell>
              <Table.Cell>{product.category}</Table.Cell>
              <Table.Cell>
                {product.price}
                {product.currency}
              </Table.Cell>
              <Table.Cell>
                <a
                  href="#"
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Modal
        show={isOpen}
        onClose={handleCloseModal}
        className="text-blue-950 dark:text-blue-200 font-primary"
      >
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div className="flex flex-row justify-center gap-20">
              <div
                className={` rounded-lg overflow-hidden w-40 flex justify-center bg-gray-200 dark:bg-gray-800 p-2 ${
                  selectedProduct.img
                    ? 'max-w-40 max-h-40'
                    : 'size-40 text-gray-400'
                }`}
              >
                {selectedProduct.img ? (
                  <img className="size-auto" src={selectedProduct.img} alt="" />
                ) : (
                  <div className="m-auto text-5xl">
                    <FontAwesomeIcon icon={faMountainSun} />
                  </div>
                )}
              </div>
              <div className=" my-auto">
                <p>
                  <span className="font-bold">Name:</span>{' '}
                  {selectedProduct.name}
                </p>
                <p>
                  <span className="font-bold">Color:</span>{' '}
                  {selectedProduct.color}
                </p>
                <p>
                  <span className="font-bold">Category:</span>{' '}
                  {selectedProduct.category}
                </p>
                <p>
                  <span className="font-bold">Price:</span>{' '}
                  {selectedProduct.price} {selectedProduct.currency}
                </p>
              </div>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-outline-secondary font-bold bg-blue-200 px-6 py-2 rounded-lg hover:bg-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductsTable;
