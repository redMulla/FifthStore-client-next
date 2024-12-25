'use client';
import { Button, Label, Modal, Select, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { api, useApiInterceptor } from '@/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import SuccessToast from './SuccessToast';

interface ChildComponentProps {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewProduct: React.FC<ChildComponentProps> = ({
  isEnabled,
  setIsEnabled,
}) => {
  useApiInterceptor();
  //   const [openModal, setOpenModal] = useState(isEnabled);
  const [product, setProduct] = useState({
    name: '',
    price: {
      price: '',
      currency: 'BIF',
    },
    stock_qty: '',
  });

  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMesagge] = useState(false);

  useEffect(() => {
    if (success) {
      setShowSuccessMesagge(true);
      const timeoutId = setTimeout(() => {
        setShowSuccessMesagge(false);
      }, 10000);

      return () => clearTimeout(timeoutId);
    }
  }, [success]);

  function onCloseModal() {
    setIsEnabled(false);
    isEnabled = false;

    setProduct({
      name: '',
      price: {
        price: '',
        currency: 'BIF',
      },
      stock_qty: '',
    });
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    api
      .post('/products', product)
      .then((res) => {
        console.log('Product created successfully:', res.data);
        setSuccess(true);
        setLoading(false);
        onCloseModal();
      })
      .catch((err) => {
        // const { status, data } = err.response;
        console.error('Error:', err);
        setLoading(false);
      });
  };

  return (
    <>
      <Modal show={isEnabled} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <div className="space-y-6 font-primary">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Create New Product
              </h3>
              <div>
                <TextInput
                  id="name"
                  placeholder="Name"
                  value={product.name}
                  onChange={(event) =>
                    setProduct({ ...product, name: event.target.value })
                  }
                  required
                />
              </div>
              <div>
                <TextInput
                  id="category"
                  type="text"
                  placeholder="Category"
                  disabled
                />
              </div>

              <div className="w-full flex justify-between">
                <div className="w-[65%]">
                  <TextInput
                    placeholder="Price"
                    id="price"
                    type="number"
                    value={product.price.price}
                    onChange={(event) =>
                      setProduct({
                        ...product,
                        price: {
                          ...product.price,
                          price: event.target.value,
                        },
                      })
                    }
                  />
                </div>

                <div className="w-[30%]">
                  <Select
                    id="currency"
                    required
                    value={product.price.currency}
                    onChange={(event) =>
                      setProduct({
                        ...product,
                        price: {
                          ...product.price,
                          currency: event.target.value,
                        },
                      })
                    }
                  >
                    <option disabled selected>
                      Currency
                    </option>
                    <option value="BIF">BIF</option>
                    <option value="USD" disabled>
                      $
                    </option>
                  </Select>
                </div>
              </div>

              <div className="w-full flex flex-row gap-5 items-center">
                <Label
                  htmlFor="stock_qty"
                  className="dark:text-gray-50 text-gray-900"
                >
                  Stock
                </Label>
                <TextInput
                  id="stock_qty"
                  type="number"
                  className="flex-grow"
                  value={product.stock_qty}
                  onChange={(event) =>
                    setProduct({
                      ...product,
                      stock_qty: event.target.value,
                    })
                  }
                />
              </div>

              <div className="w-full flex justify-center">
                <Button disabled={isLoading} type="submit">
                  {isLoading ? (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      className="fa-spin"
                      size="lg"
                    />
                  ) : (
                    'Create'
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {showSuccessMessage ? (
        <SuccessToast message="Product created successfully" />
      ) : null}
    </>
  );
};

export default NewProduct;
