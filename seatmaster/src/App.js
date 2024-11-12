import logo from './logo.svg';
import './App.css';

function ViewPort(){
  return(
    <div className='viewPort'>
      <table></table>
    </div>
  )
}
function InputBox({ title, type, backtext, inputprops}){
  return(
    <label htmlFor={title} className="inputBox">
        <span>{title}</span>
        <input id={title} type={type} placeholder={backtext} {...inputprops}/>
    </label>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
