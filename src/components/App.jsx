import React, { Component } from "react";
// import axios from "axios"
import { fetchImg } from "api/api";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";




export class App extends Component {
  state = {
    images: [],
    page: 1,
  }
  

  searc = async (searchQuery) => { 
    const response = await fetchImg(`${searchQuery}`, 1)
    const data = await response.map(el => ({
      id: el.id,
      smallImage: el.webformatURL,
      largeImage: el.largeImageURL
    }))
    this.setState({
      images: data
    })
  }

 
  render() {
      
    return (
      
    <div>
      <Searchbar submit={this.searc} />
      <ImageGallery images={this.state.images} />
    </div>
  );
  }
};
