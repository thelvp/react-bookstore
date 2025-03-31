import { BookList } from './components/BookList';
import { Navbar } from './components/Navbar';
import './styles/App.css';

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
