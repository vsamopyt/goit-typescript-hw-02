
import css from './ImageCard.module.css';
import {IResultItem} from "../../types";

interface IImageCardProps {
  item: IResultItem;
  onImageClick: (urls: string, alt_description: string, likes: number, user:string)=>void;
}

export default function ImageCard({ item, onImageClick }:IImageCardProps) {
  const { urls, alt_description, likes, user } = item;
  return (
    <div className={css.imageCardWraper}>
      <img
        className={css.imageCardImg}
        src={urls.regular}
        alt={alt_description}
        data-likes={likes}
        data-name={user.name}
        onClick={() =>
          onImageClick(urls.regular, alt_description, likes, user.name)
        }
      />
    </div>
  );
}
