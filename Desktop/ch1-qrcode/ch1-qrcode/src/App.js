import './App.css';
import img from '../src/image-qr-code.png'

function App() {
  return (
    <div className="App">
    <div className="header">     
        <img className='qr' src={img}/>
      <div className='footer'>
        <h1 className='title'>Improve your Front-End skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
    </div>
  );
}

export default App;
