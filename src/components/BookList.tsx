import { books } from '@/mockdata/books';
import { BookItem } from './BookItem';

export const BookList = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};
