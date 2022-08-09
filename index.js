const axios = require('axios');
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

async function byCurrency(currency){
    let data = await axios.get(`https://restcountries.com/v3.1/currency/${currency}`);
    for(let i = 0; i < data.data.length; i++){
        console.log(data.data[i].name.official ? data.data[i].name.official : undefined )
        console.log(data.data[i].continents[i] ? data.data[i].continents[0] : undefined)
        console.log(data.data[i].independent ? data.data[i].independent : undefined)
        console.log(data.data[i].unMember ? data.data[i].unMember : undefined)
        console.log(data.data[i].currencies ? data.data[i].currencies : undefined)
        console.log(data.data[i].capital[i] ? data.data[i].capital[i] : undefined)
        console.log(data.data[i].languages ? data.data[i].languages : undefined)
        console.log(data.data[i].population ? data.data[i].population : undefined )
        console.log(data.data[i].car.side ? data.data[i].car.side : undefined )
        console.log(data.data[i].borders ? data.data[i].borders : undefined )
        console.log(data.data[i].area ? data.data[i].area : undefined )
        console.log(data.data[i].landlocked ? data.data[i].landlocked : undefined )
        console.log("-----------------------------------------------")
    }
    
}

async function byLang(language){
    let data = await axios.get(`https://restcountries.com/v3.1/lang/${language}`);   
    for(let i = 0; i < data.data.length; i++){
        console.log(data.data[i].name.official ? data.data[i].name.official : undefined )
        console.log(data.data[i].continents[i] ? data.data[i].continents[0] : undefined)
        console.log(data.data[i].independent ? data.data[i].independent : undefined)
        console.log(data.data[i].unMember ? data.data[i].unMember : undefined)
        console.log(data.data[i].currencies ? data.data[i].currencies : undefined)
        console.log(data.data[i].capital[i] ? data.data[i].capital[i] : undefined)
        console.log(data.data[i].languages ? data.data[i].languages : undefined)
        console.log(data.data[i].population ? data.data[i].population : undefined )
        console.log(data.data[i].car.side ? data.data[i].car.side : undefined )
        console.log(data.data[i].borders ? data.data[i].borders : undefined )
        console.log(data.data[i].area ? data.data[i].area : undefined )
        console.log(data.data[i].landlocked ? data.data[i].landlocked : undefined )
        console.log("-----------------------------------------------")
    }
}

byName('united states')
byCurrency('dollar')
byLang('english')
