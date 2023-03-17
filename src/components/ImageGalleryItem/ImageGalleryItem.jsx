import css from "components/ImageGalleryItem/ImageGalleryItem.module.css"
import { Modal } from "components/Modal/Modal"
import { Component } from "react"

export class ImageGalleryItem extends Component {
      
    state = {
        largeImage: "",
        tags:""
    }
    

    setImage=(el, tags)=>{
        this.setState({
            largeImage: el,
            tags:tags
        })     
    }


    render() {
        const { images, showModal, toggleModal } = this.props
        const{largeImage, tags}=this.state
        
        return (
        images.map(el => (
            <li key={el.id}  className={css.ImageGalleryItem} >
                <img id={el.id} onClick={() => { this.setImage(el.largeImage, el.tags); toggleModal() }}
                    className={css.image} src={el.smallImage} alt={el.tags} />
                
                {showModal &&
                    <Modal onClose={toggleModal}>
                        <img src={largeImage} alt={tags} />
            
                    </Modal>}
        </li>
        ))
        
    )
    }
}
