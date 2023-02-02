import './App.css';
import Test from './Test';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename='/fourth'>
      <Test />
    </BrowserRouter>
  );
}

export default App;
