import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to the Authentication</h1>
        <p>Please register or log in below</p>
      </header>
      <main className='App-content'>
        <Registration />
      </main>
      <footer className='App-footer'>
        <p>&copy; 2023 Authentication App. All rights, reserved</p>
      </footer>
    </div>
  );
}

export default App;
