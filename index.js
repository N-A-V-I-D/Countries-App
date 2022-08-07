const axios = require('axios');
async function byName(country){
    let data = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
     console.log(data.data[0]) 
    // console.log(data.data[0].name.official)
    // console.log(data.data[0].continents[0])
    // console.log(data.data[0].independent)
    // console.log(data.data[0].unMember)
    // console.log(data.data[0].currencies)
    // console.log(data.data[0].capital[0])
    // console.log(data.data[0].languages)
    // console.log(data.data[0].population)
    // console.log(data.data[0].car.side)
    // console.log(data.data[0].borders)
    // console.log(data.data[0].area)
    // console.log(data.data[0].landlocked)

}

async function byCurrency(currency){
    let data = await axios.get(`https://restcountries.com/v3.1/currency/${currency}`);
    console.log(data.data);   
    for(let i = 0; i < data.data.length; i++){
        console.log(data.data[i].name.official)
        console.log(data.data[i].continents[0])
        console.log(data.data[i].independent)
        console.log(data.data[i].unMember)
        console.log(data.data[i].currencies)
        console.log(data.data[i].capital[0])
        console.log(data.data[i].languages)
        console.log(data.data[i].population)
        console.log(data.data[i].car.side)
        console.log(data.data[i].borders)
        console.log(data.data[i].area)
        console.log(data.data[i].landlocked)
        console.log("-----------------------------------------------")
    }
    
}

async function byLang(language){
    let data = await axios.get(`https://restcountries.com/v3.1/lang/${language}`);
    console.log(data.data);   
    for(let i = 0; i < data.data.length; i++){
        console.log(data.data[i].name.official)
        console.log(data.data[i].continents[0])
        console.log(data.data[i].independent)
        console.log(data.data[i].unMember)
        console.log(data.data[i].currencies)
        console.log(data.data[i].capital ? data.data[i].capital[0] : undefined)
        console.log(data.data[i].languages)
        console.log(data.data[i].population)
        console.log(data.data[i].car.side)
        console.log(data.data[i].borders)
        console.log(data.data[i].area)
        console.log(data.data[i].landlocked)
        console.log("-----------------------------------------------")
    }
}

//byName('Heard Island and McDonald Islands')
//byCurrency('dollar')
//byLang('english')
