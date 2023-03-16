import css from "components/ImageGalleryItem/ImageGalleryItem.module.css"
import { Modal } from "components/Modal/Modal"

export const ImageGalleryItem = ({images, toggleModal, showModal}) => {
      
    const ivent = (evt) => {
        console.log(evt.target)
           console.log(evt.currentTarget)
        console.log(evt)
    
        toggleModal()
    }

    return (

        images.map(el => (
            <li key={el.id} className={css.ImageGalleryItem} onClick={ivent}>
                <img  className={css.image} src={el.smallImage} alt="" />
                
                {showModal &&
                    <Modal onClose={toggleModal}>
                        <img src={el.largeImage} alt="" />
            
                    </Modal>}
        </li>
        ))
        
    )
}
