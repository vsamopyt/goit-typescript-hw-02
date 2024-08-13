import ReactModal from 'react-modal';
import css from './ImageModal.module.css';

interface IImageModalProps {
  isOpen: boolean;
  onRequestClose: ()=>void;
  imageUrl: string;
  alt: string;
  likes: number;
  userName: string,
}

const ImageModal = ({
  isOpen,
  onRequestClose,
  imageUrl,
  alt,
  likes,
  userName,
}: IImageModalProps) => (
  <ReactModal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={modalStyles}
    contentLabel="Image Modal"
    ariaHideApp={false}
  >
    <button className={css.imageModalBtn} onClick={onRequestClose}>
      &times;
    </button>
    <h3>{alt}</h3>
    {/* <CloseButton onClick={onRequestClose}>&times;</CloseButton> */}
    <img src={imageUrl} alt="Selected" style={{ width: '100%', aspectRatio: "16/10"}} />
    <div className={css.imageModalDesc}>
      <div>
        {' '}
        <span>Author: </span>
        <span>{userName}</span>
      </div>
      <div>
        {' '}
        <span>Likes: </span>
        <span>{likes}</span>
      </div>
    </div>
  </ReactModal>
);

const modalStyles = {
  content: {
    maxWidth:"1000px",
    height: "auto",
    // height:"auto",
    top: '55%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'black',
    padding: '0',
    border: 'none',
    borderRadius: '10px',
    overflow: 'hidden',
    // overflow: "scroll"
    // z-index: "10"
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

export default ImageModal;
