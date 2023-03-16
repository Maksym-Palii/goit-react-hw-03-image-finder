import React, { Component } from "react";
// import axios from "axios"
import { fetchImg } from "api/api";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button"






export class App extends Component {
  state = {
    images: [],
    searcImages:"",
    page: 1,
    showModal:false,
  }
  
  toggleModal = () => {
    this.setState({showModal:!this.state.showModal })
}

  hendleFormSubmit = (searchQuery) => {
    this.setState({
      images: [],
      searcImages: searchQuery,
      page: 1,
    })
    
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searcImages !== this.state.searcImages ||
      PrevState.page !== this.state.page) {
      this.search()
    }
   
  }

  search = async () => { 
    const { searcImages, page } = this.state
    const response = await fetchImg(searcImages, page)
    const data = await response.map(el => ({
      id: el.id,
      smallImage: el.webformatURL,
      largeImage: el.largeImageURL
     
    }))
     
    this.setState(prexState=>({
      images: [...prexState.images, ...data]
    }))
  }

  nextPage = () => {
          
    this.setState(prevState => ({
    page: prevState.page + 1,
    }))
  }
 


  render() {
      const{images,showModal } =this.state
    return (
      
    <div>
      <Searchbar submit={this.hendleFormSubmit} />
        <ImageGallery images={images} toggleModal={this.toggleModal} showModal={showModal} />
        <Button nextPage={this.nextPage} showBtn={images.length} />
        
          
    </div>
  );
  }
};
