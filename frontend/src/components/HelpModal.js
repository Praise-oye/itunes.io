import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// Component: HelpModal
// Description: Displays the help modal with information about the application
const HelpModal = () => {
  // Set the state to control the visibility of the modal
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the modal
  const showModal = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="helpModal">
      <Button variant="btn btn-info" onClick={showModal}>
        Help
      </Button>

      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Instructions:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <h2 className="text">Search for your favorite content!</h2>
            </li>
            <li>
              <h3 className="text">Enter a search term and select a category.</h3>
            </li>
            <li>
              <h3 className="text">Click 'Search' to view the results!</h3>
            </li>
            <li>
              <h3 className="text">
                To add an item to your favorites, click the 'Heart' icon on the item's card.
              </h3>
            </li>
          </ul>
          <h3 className="text text-center">And finally... Enjoy!</h3>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal}>Return</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HelpModal;
