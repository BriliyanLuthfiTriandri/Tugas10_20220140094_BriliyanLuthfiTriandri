import './App.css';
import photo from './photo.png';
import buttonSound from './button_click.mp3'; 

function App() {
  const playButtonClickSound = () => {
    const audio = new Audio(buttonSound);
    audio.play();
  };

  const handleButtonClick = () => {
    playButtonClickSound(); 
    window.location.href = "https://ttte.fandom.com/wiki/Gordon_(T%26F)"; 
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>❤️Gordon Edition❤️</h1>
        <div className="container">
          <div className="photo-container">
            <img src={photo} className="App-photo" alt="centered" />
          </div>
          <h2>
            Gordon is a big blue tender engine who lives and works on the Island of Sodor, and is the North Western Railway's number 4 engine. He is Flying Scotsman's brother and Spencer's cousin. Gordon works on the Main Line and pulls the Express, a duty which he shares with Rebecca from the twenty-second series onwards.
          </h2>
          <button className="redirect-button" onClick={handleButtonClick}>
           MORE 🚂
          </button>
        </div>
      </header>

      <footer role="contentinfo" aria-label="Footer" className="footer-index">
        <div className="container-footer">
          <p><b>THANK YOU FOR VISITING</b></p>
          <p><b>copyright &copy; 1991</b></p>
        </div>
      </footer>

      {/* Elemen audio untuk memainkan suara */}
      <audio src={buttonSound} id="button-sound" />
    </div>
  );
}

export default App;
