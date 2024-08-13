import { useState, useEffect } from 'react';
import css from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import BarLoader from 'react-spinners/BarLoader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {fetchImagesByTopic} from "../../images-api"
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';
import {IResultItem} from "../../types"

function App() {
  const [listImages, setlistImages] = useState<IResultItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [topic, setTopic] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [schowBtn, setSchowBtn] = useState<boolean>(false);

  const handleTopic = async (newTopic:string): Promise<void> => {
    if (topic === newTopic) {
      toast.error(
        'You set the same search request. If you want to see more pictures on your request, click the button "Load more" or set new search request.',
        { duration: 10000 }
      );
      return;
    }
    setTopic(newTopic);
    setlistImages([]);
    setCurrentPage(1);
    setSchowBtn(false);
  };

  const handleLoadMore = (): void => {
    setCurrentPage(currentPage + 1);
  };


  //  modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [selectedAlt, setSelectedAlt] = useState<string>('');
  const [selectedImgLikes, setSelectedImgLikes] = useState<number>(0);
  const [selectedUserName, setSelectedUserName] = useState<string>('');


  const openModal = (image:string, alt: string, likes:number, userName: string): void => {
    setSelectedImage(image);
    setIsOpen(true);
    setSelectedAlt(alt);
    setSelectedImgLikes(likes);
    setSelectedUserName(userName);
  };

  const closeModal = (): void => {
    setIsOpen(false);
    setSelectedImage('');
    setSelectedAlt('');
    setSelectedImgLikes(0);
    setSelectedUserName('');
  };

  useEffect(() => {
    if (topic === '') {
      return;
    }
    const getImages = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetchImagesByTopic(topic, currentPage);

        const data = response.results;

        if (currentPage >= response.total_pages) {
          setSchowBtn(true);

          toast.success('We can find  no more pictures for this search request', {
            duration: 1600,
          });
        }

        // setlistImages(previousData => {
        //   return [...previousData, ...data];
        // });

          setlistImages(listImages => {
          return [...listImages, ...data];
        });

      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [topic, currentPage]);

  return (
    <div className={css.appWraper}>
      <SearchBar onInput={handleTopic} />

      {error && <ErrorMessage />}

      {listImages.length > 0 && (
        <ImageGallery array={listImages} onImageClick={openModal} />
      )}
      {loading && (
        <div className={css.barLoader}>
          {' '}
          <BarLoader />
        </div>
      )}

      {listImages.length > 0 && !loading && !schowBtn && (
        <LoadMoreBtn onHandle={handleLoadMore} />
      )}

      <ImageModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
        alt={selectedAlt}
        likes={selectedImgLikes}
        userName={selectedUserName}
      />
      <Toaster />
    </div>
  );
}

export default App;

