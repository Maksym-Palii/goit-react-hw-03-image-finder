import css from "components/ImageGallery/ImageGallery.module.css"
import {ImageGalleryItem} from "components/ImageGalleryItem/ImageGalleryItem"

export const ImageGallery = ({images}) => {
    return (
        <ul className={css.imageGallery}>
            <ImageGalleryItem images={ images} />
        </ul>
    )
}