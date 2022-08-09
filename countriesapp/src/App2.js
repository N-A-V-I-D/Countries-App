
import './App.css';
import axios from 'axios'
import { useState } from 'react';
import { history } from './index.js';
import {Link} from 'react-router-dom'
function App2(){

    const [name,setName] = useState('');

    async function handleSubmit(event){
        event.preventDefault()
        //console.log(history);
        await byName(name);
        history.push('/results')
        console.log(history.location)

    }

    async function nameChange(event){
        // console.log(event.target.value);
        setName(event.target.value)
    }

    async function byName(country){
    let data = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    console.log(data.data[0].name.official ? data.data[0].name.official : undefined )
    console.log(data.data[0].continents[0] ? data.data[0].continents[0] : undefined)
    console.log(data.data[0].independent ? data.data[0].independent : undefined)
    console.log(data.data[0].unMember ? data.data[0].unMember : undefined)
    console.log(data.data[0].currencies ? data.data[0].currencies : undefined)
    console.log(data.data[0].capital[0] ? data.data[0].capital[0] : undefined)
    console.log(data.data[0].languages ? data.data[0].languages : undefined)
    console.log(data.data[0].population ? data.data[0].population : undefined )
    console.log(data.data[0].car.side ? data.data[0].car.side : undefined )
    console.log(data.data[0].borders ? data.data[0].borders : undefined )
    console.log(data.data[0].area ? data.data[0].area : undefined )
    console.log(data.data[0].landlocked ? data.data[0].landlocked : undefined )
    }

    return(
        <div className="App">
        <div id='top'>
            <input type="text" id="inputField" placeholder='Country Name' onChange={nameChange}></input>
            <input type='submit' id='button' onClick={handleSubmit} ></input>
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
    )

    
}

export default App2;
// window.onload=function(){
//   var form = document.getElementById('button')
//   form.addEventListener('click', async function(event){
//     event.preventDefault()
//     name = document.getElementById('inputField').value
//     console.log(name);
//     console.log(window);
//     await byName(name);
   
//   })
// }


// async function byCurrency(currency){
//   let data = await axios.get(`https://restcountries.com/v3.1/currency/${currency}`);
//   for(let i = 0; i < data.data.length; i++){
//       console.log(data.data[i].name.official ? data.data[i].name.official : undefined )
//       console.log(data.data[i].continents[i] ? data.data[i].continents[0] : undefined)
//       console.log(data.data[i].independent ? data.data[i].independent : undefined)
//       console.log(data.data[i].unMember ? data.data[i].unMember : undefined)
//       console.log(data.data[i].currencies ? data.data[i].currencies : undefined)
//       console.log(data.data[i].capital[i] ? data.data[i].capital[i] : undefined)
//       console.log(data.data[i].languages ? data.data[i].languages : undefined)
//       console.log(data.data[i].population ? data.data[i].population : undefined )
//       console.log(data.data[i].car.side ? data.data[i].car.side : undefined )
//       console.log(data.data[i].borders ? data.data[i].borders : undefined )
//       console.log(data.data[i].area ? data.data[i].area : undefined )
//       console.log(data.data[i].landlocked ? data.data[i].landlocked : undefined )
//       console.log("-----------------------------------------------")
//   }  
// }

// async function byLang(language){
//   let data = await axios.get(`https://restcountries.com/v3.1/lang/${language}`);   
//   for(let i = 0; i < data.data.length; i++){
//       console.log(data.data[i].name.official ? data.data[i].name.official : undefined )
//       console.log(data.data[i].continents[i] ? data.data[i].continents[0] : undefined)
//       console.log(data.data[i].independent ? data.data[i].independent : undefined)
//       console.log(data.data[i].unMember ? data.data[i].unMember : undefined)
//       console.log(data.data[i].currencies ? data.data[i].currencies : undefined)
//       console.log(data.data[i].capital[i] ? data.data[i].capital[i] : undefined)
//       console.log(data.data[i].languages ? data.data[i].languages : undefined)
//       console.log(data.data[i].population ? data.data[i].population : undefined )
//       console.log(data.data[i].car.side ? data.data[i].car.side : undefined )
//       console.log(data.data[i].borders ? data.data[i].borders : undefined )
//       console.log(data.data[i].area ? data.data[i].area : undefined )
//       console.log(data.data[i].landlocked ? data.data[i].landlocked : undefined )
//       console.log("-----------------------------------------------")
//   }
// }



