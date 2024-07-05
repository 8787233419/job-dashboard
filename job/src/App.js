import './App.css';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Register from './Loginpage/Register';
function App() {
  return (
    <div className="App">
        <h1>App Component</h1>
        <Register />
    </div>
  );
}

export default App;
