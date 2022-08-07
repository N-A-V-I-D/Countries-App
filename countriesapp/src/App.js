import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import {Second} from './Second.js'
function App() {
 
  return (
    <div className="App">
      <div id='top'>
        <input type="text" id="inputField" placeholder='Country Name' ></input>
        <input type='submit' id='button'></input>
      </div> 
      <div id='bottom'>
       <p>
         What can you do?
       </p>
       <p>
        You can enter a country name, a currency, or a language to find the country or ones that use your chosen currency or language.
        You will recieve back pictures of the country as well as statistics such as it's capital, population, borders, and more.
        You can also enter in your own fun facts about the country! No account required!
       </p>
      </div>  
    </div>
  );
}

export default App;

let name;
window.onload=function(){
  var form = document.getElementById('button')
  form.addEventListener('click', function(event){
    event.preventDefault()
    name = document.getElementById('inputField').value
    console.log(name);
    // <Route path='./Second' element={<Second/>} />
  })
}

