import ImageCard from '../ImageCard/ImageCard';
import css from "./ImageGallery.module.css";
import {IResultItem} from "../../types"
 
interface IImageGalleryProps {
  array: IResultItem[];
  onImageClick: (urls: string, alt_description: string, likes: number, user:string)=>void;

}

export default function ImageGallery({ array, onImageClick }:IImageGalleryProps) {
  return (
    <section className={css.imageGallery}>
      <div className={css.imageGalleryWraper}>
        <ul className={css.imageGalleryList}>
          {array.map(item => {
            return (
              <li key={item.id}>
                <ImageCard item={item}
                onImageClick ={onImageClick}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
