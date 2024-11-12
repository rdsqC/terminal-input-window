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
  );
}

export default App;
