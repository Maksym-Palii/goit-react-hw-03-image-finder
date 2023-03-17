import React, { Component } from "react";

import toast, { Toaster } from 'react-hot-toast'

import { fetchImg } from "api/api";

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Button } from "components/Button/Button"
import{Loader} from "components/Loader/Loader"

import css from "components/App.module.css"




export class App extends Component {
  state = {
    images: [],
    searcImages:"",
    page: 1,
    showModal: false,
    showLoader: false,
    error:null,
  }
  
  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searcImages !== this.state.searcImages ||
      PrevState.page !== this.state.page) {
      this.search()
    }
  }

  toggleModal = () => {
    this.setState({showModal:!this.state.showModal })
  }
  
  toggleLoader = () => {
    this.setState({showLoader:!this.state.showLoader})
  }

  hendleFormSubmit = (searchQuery) => {
    this.setState({
      images: [],
      searcImages: searchQuery,
      page: 1,
      error:null,
    })
  }

  // Пошук зображень

  search = async () => { 
    const { searcImages, page, } = this.state
    try {
          this.toggleLoader();
    const response = await fetchImg(searcImages, page)
      if (response.length === 0) { 
        toast.error(`Sorry, no images for this request ${searcImages}`)
        return Promise.reject(new Error(`Sorry no images for this request ${searcImages}`))
      }
    const data = await response.map(el => ({
      id: el.id,
      smallImage: el.webformatURL,
      largeImage: el.largeImageURL,
     tags: el.tags,
    }))
        
    this.setState(prevState=>({
      images: [...prevState.images, ...data]
    }));
    }
    // catch не ловить помилки
    catch (error) {
      this.setState({ error: error.mesage })
    } finally {
      this.toggleLoader()
   }
  }

  nextPage = () => {      
    this.setState(prevState => ({
    page: prevState.page + 1,
    }))
  }
 
  render() {
      const{images,showModal, error} =this.state
    return (
      
      <div className={css.app}>
        <Searchbar submit={this.hendleFormSubmit} />
         {error && <h1>{error}</h1>}
        <Loader showLoader={ this.state.showLoader} />
        <ImageGallery images={images} toggleModal={this.toggleModal} showModal={showModal} />
        <Button nextPage={this.nextPage} showBtn={images.length} />
        <Toaster toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          }
        }} />


    </div>
  );
  }
};
