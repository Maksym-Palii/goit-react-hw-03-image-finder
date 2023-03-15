import css from "components/ImageGalleryItem/ImageGalleryItem.module.css"

export const ImageGalleryItem = ({images}) => {
    
    return (

        images.map(el => (
        <li key={el.id} className={css.ImageGalleryItem}>
            <img className={css.image} src={el.smallImage} alt="" />
        </li>
        ))
        
    )
}
