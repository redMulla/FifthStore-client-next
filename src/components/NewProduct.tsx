import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import React, { useState } from 'react';

interface ChildComponentProps {
  isEnabled: boolean;
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewProduct: React.FC<ChildComponentProps> = ({
  isEnabled,
  setIsEnabled,
}) => {
  //   const [openModal, setOpenModal] = useState(isEnabled);
  const [name, setName] = useState('');

  function onCloseModal() {
    setIsEnabled(false);
    isEnabled = false;

    setName('');
  }

  return (
    <>
      <Modal show={isEnabled} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Create New Product
            </h3>
            <div>
              {/* <div className="mb-2 block">
                <Label htmlFor="name" value="Product name" />
              </div> */}
              <TextInput
                id="name"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              {/* <div className="mb-2 block">
                <Label htmlFor="category" value="Category" />
              </div> */}
              <TextInput
                id="category"
                type="text"
                placeholder="Category"
                required
              />
            </div>

            <div className="w-full">
              <Button>Log in to your account</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Create account
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewProduct;
