import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Notes from './components/Notes';

function App() {
  return (
    <div className='flex flex-col h-screen place-items-center bg-gray-200'>
      <Header />
      <Form />
      <Notes />
    </div>
  );
}

export default App;
