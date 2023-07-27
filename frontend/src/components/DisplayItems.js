import React from 'react';
import { Card } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

// Component: DisplayItems
// Description: Renders the items retrieved from search results
const DisplayItems = (props) => {
  return (
    <div className="displayItems">
      <Card className='customCard'>
        <Card.Img variant="top" src={props.item.artworkUrl100} alt={props.item.trackName} className="cardImg" />
        <Card.Body>
          <Card.Title>{props.item.trackName}</Card.Title>
          <Card.Text>{props.item.artistName}</Card.Text>
          {/* Clickable star icon to add item to favorites
              The information is passed back to the Search component for handling */}
          <div className="addToFavorites" onClick={() => props.handleFavourites(
            props.item.trackId,
            props.item.kind,
            props.item.artistName,
            props.item.trackName,
            props.item.artworkUrl100,
          )}>
            <FaHeart className='starIcon' />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default DisplayItems;
