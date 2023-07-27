import React from 'react';
import axios from 'axios';
import { Container, Form, Button, FormControl, DropdownButton, Dropdown } from 'react-bootstrap';
import DisplayItems from './DisplayItems';
import HelpModal from './HelpModal';
import FavouriteList from './FavouriteList';
import logo from "../images/logo.png"

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchItem: '',
      searchItemEdited: '',
      category: '',
      data: [],
      favourites: [],
    };
  }

  // Handler for selecting a category from the dropdown menu
  handleCategorySelect = (eventKey, value) => {
    this.setState({ category: eventKey });
  };

  // Handler for changing the search input
  handleSearchChange = (event) => {
    this.setState({ searchItem: event.target.value });
    const searchItemEdited = event.target.value.split(' ').join('+');
    this.setState({ searchItemEdited: searchItemEdited });
  };

  // Show search button once a category is selected
  showButton = () => {
    if (this.state.category !== '') {
      return (
        <Button className="btn btn-info" onClick={this.handleSubmit}>
          Search {this.state.category.toUpperCase()}
        </Button>
      );
    }
  };

  // Handler for submitting the search form
  handleSubmit = () => {
    const query = this.state.searchItemEdited;
    const type = this.state.category;
    axios
      .get(`/search/${query}/${type}`)
      .then((res) => {
        this.setState({ data: res.data.results });
        if (res.data.results.length === 0) {
          alert('Unfortunately no results were found!');
        }
      });
  };

  // Show "No results" message if no search results are available
  showNoResults = () => {
    if (this.state.data.length === 0) {
      return <h1 id="noResults">Itunes Web Store Search</h1>;
    }
  };

  // Show "No favourites" message if no favourites are available
  showNoFavourites = () => {
    const { searchItemEdited, category, data, favourites } = this.state;
    if (favourites.length === 0 && searchItemEdited !== '' && category !== '' && data.length !== 0) {
      return <h3 className="lead text-center">Click the star on an item to view your favourites here!</h3>;
    }
  };

  // Handler for adding an item to favourites
  handleFavourites = (id, kind, artistName, trackName, artwork) => {
    const { favourites } = this.state;
    if (favourites.find((item) => item.id === id)) {
      alert('This item has already been added to your favourites list!');
    } else {
      this.setState({
        favourites: [
          ...favourites,
          {
            id: id,
            kind: kind,
            artistName: artistName,
            trackName: trackName,
            artwork: artwork,
          },
        ],
      });
      alert('Added to your favourites list, scroll down to view!');
    }
  };

  // Handler for removing an item from favourites
  removeFavourite = (id) => {
    const { favourites } = this.state;
    const newFavourites = favourites.filter((item) => item.id !== id);
    this.setState({ favourites: newFavourites });
    alert('Removed from favourites list');
  };

  render() {
    const { searchItemEdited, category, data, favourites } = this.state;
    return (
        <div>
            <div className='logo'>
                        <img src={logo} className='img' alt='itunes'></img>
                        <h1>Itunes Store</h1>
                    </div>
      <Container>
      
        <div className="header">
          <Form onChange={this.handleSearchChange}>
            <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
          </Form>
          <DropdownButton title="Categories" variant="btn btn-info" id="dropdown-basic-button" onSelect={this.handleCategorySelect}>
            {/* Dropdown items for different categories */}
            <Dropdown.Item eventKey="movie">Movie</Dropdown.Item>
            <Dropdown.Item eventKey="podcast">Podcast</Dropdown.Item>
            <Dropdown.Item eventKey="music">Music</Dropdown.Item>
            <Dropdown.Item eventKey="audiobook">Audiobook</Dropdown.Item>
            <Dropdown.Item eventKey="shortFilm">Short Film</Dropdown.Item>
            <Dropdown.Item eventKey="tvShow">TV Show</Dropdown.Item>
            <Dropdown.Item eventKey="software">Software</Dropdown.Item>
            <Dropdown.Item eventKey="ebook">Ebook</Dropdown.Item>
            <Dropdown.Item eventKey="all">All</Dropdown.Item>
          </DropdownButton>
          {/* Show search button once a category is selected */}
          <div className="searchButton">{this.showButton()}</div>
          {/* Help modal with instructions */}
          <HelpModal className="modalButton btn btn-info" />
        </div>
        <Container className="cardsContainer">
          {/* Display search results */}
          {data.length !== 0 ? (
            data.map((item, index) => {
              return (
                <DisplayItems key={index} item={item} handleFavourites={this.handleFavourites} />
              );
            })
          ) : (
            <div className="noResults">{this.showNoResults()}</div>
          )}
        </Container>
        <Container className="favouritesContainer">
          {/* Display favourites list */}
          {favourites.length !== 0 ? (
            favourites.map((favourite, index) => {
              return (
                <FavouriteList key={index} favourite={favourite} removeFavourite={this.removeFavourite} />
              );
            })
          ) : (
            <div className="noFavourites">{this.showNoFavourites()}</div>
          )}
        </Container>
      </Container>
      </div>
    );
  }

}

export default Search;
