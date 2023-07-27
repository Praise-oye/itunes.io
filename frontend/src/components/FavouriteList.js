import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

// Component: FavouriteList
// Description: Renders the list of favorite items
const FavouriteList = (props) => {
  return (
    <Container className="favouriteListContainer">
      <Table striped bordered hover className="customTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kind</th>
            <th>Artwork</th>
            <th>Artist Name</th>
            <th>Track Name</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.favourite.id}>
            <td>{props.favourite.id}</td>
            <td>{props.favourite.kind}</td>
            <td>
              <img src={props.favourite.artwork} alt={props.favourite.trackName} />
            </td>
            <td>{props.favourite.artistName}</td>
            <td>{props.favourite.trackName}</td>
            {/* Remove button to delete the favorite item, triggers a function sent from the Search component */}
            <td>
              <button className="removeButton" onClick={() => props.removeFavourite(props.favourite.id)}>
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default FavouriteList;
