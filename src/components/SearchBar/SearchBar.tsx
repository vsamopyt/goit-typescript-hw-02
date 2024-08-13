import { IoSearchOutline } from 'react-icons/io5';
import { FormEvent } from 'react';
import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';

interface ISearchBarProps {
  onInput: (newTopic:string)=> Promise<void>
}

export default function SearchBar({ onInput }:ISearchBarProps) {

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const form = event.target ;
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const topicValue = formData.get('topic')?.toString().trim();

    if (!topicValue) {
      toast.error('Please fill the search field.', { duration: 1600 });
      form.reset();
      return;
    } else {
      onInput(topicValue);
    }
  };

 
  return (
    <header className={css.searchBarHeader}>
      <div className={css.searchBarWraper}>
        <form className={css.searchBarForm} onSubmit={handleSubmit}>
          <input
            className={css.searchBarInput}
            type="text"
            name="topic"
            placeholder="Search images and photos"
            autoFocus
          />
          <button className={css.searchBarButton}>
            <IoSearchOutline className={css.searchBarButtonIcon} />
          </button>
        </form>
      </div>
      <Toaster />
    </header>
  );
}

