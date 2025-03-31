import { Book } from '@/models/book';

export const BookItem = ({ book }: { book: Book }) => {
  return (
    <div className='m-2 rounded-lg bg-white p-2 shadow-md'>
      <img src={book.coverImageUrl} className='object-fit max-w-[200px]' />
      <div>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p className='text-right font-bold text-green-700'>{book.price}</p>
      </div>
    </div>
  );
};
