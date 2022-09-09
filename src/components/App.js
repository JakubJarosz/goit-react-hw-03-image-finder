import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import Button from "./Button/Button";
import api from "../Api/Api";
import { Audio } from "react-loader-spinner"

  

class App extends Component {
   state = {
     picGallery: [],
     inputValue: "",
     error: null,
     isLoading: false,
     page: 1,
     picPerPage: 12,
     showModal: false,
     bigPic: '',
     isLoading: false,
   };
  
 

  
  handlePicClick = (ev) => {
    this.setState({ showModal: true, bigPic: this.state.picGallery.filter(el => el.id == ev.target.id).map(url => url.largeImageURL)})
  }
  
  handleOverlayClose = () => {
    this.setState({showModal: false})
  }

  handleChange = evt => {
    this.setState({inputValue: evt.target.value})
   }
  
   handleSubmit = evt => {
     evt.preventDefault();
     this.setState({ page: 1 }, () => {
       this.fetchApi();
     })
  }
  

  async fetchApi() {
    this.setState({isLoading: true})
    try {
      const gallery = await api.fetchPictures(this.state.inputValue, this.state.page, this.state.picPerPage);
      this.setState({ picGallery: gallery.data.hits });
      console.log(gallery.data.hits)
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleMoreClick = () => {
    this.setState({ page: this.state.page + 1, picPerPage: this.state.picPerPage + 12 }, () => {
      this.fetchApi();
    });
   
  }
   


  render() {
    const {picGallery, inputValue, showModal, bigPic, isLoading} = this.state
    return (
    <div className="App">
        <Searchbar handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={inputValue}
/>
        <ImageGallery>
          <ImageGalleryItem
            picItems={picGallery}
            clickHandler={this.handlePicClick}
          />
        </ImageGallery>
        <Button
          handleClick={this.handleMoreClick}
          picGallery={picGallery} 
        />
        <Loader>
                {isLoading === true && (
                 <Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
     )}
     </Loader>
        {showModal === true && (
          <Modal
            bigPic={bigPic}
            handleOverlay={this.handleOverlayClose}
          />
        )}
    </div>
  );
  }
}

export default App;



 