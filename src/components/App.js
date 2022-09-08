import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem"
import api from "../Api/Api";
import axios from "axios"
  
 
class App extends Component {
   state = {
     picGallery: [],
     inputValue: "",
     error: null,
     isLoading: false,
   };
  
  handleChange = evt => {
    this.setState({inputValue: evt.target.value})
   }
  
   handleSubmit = evt => {
     evt.preventDefault();
     this.fetchApi()
     console.log(this.state)
  }
  

  async fetchApi() {
    try {
      const gallery = await api.fetchPictures(this.state.inputValue);
      this.setState({ picGallery: gallery.data.hits });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }


  render() {
    const {picGallery, inputValue} = this.state
    return (
    <div className="App">
       <header className="searchbar">
            <form className="form" onSubmit={this.handleSubmit}>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>
                <input
                    className="input"
                    type="text"
                    value={inputValue}
                    onChange={this.handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        <ImageGallery>
          <ImageGalleryItem picItems={picGallery}/>
      </ImageGallery>
    </div>
  );
  }
}

export default App;



 