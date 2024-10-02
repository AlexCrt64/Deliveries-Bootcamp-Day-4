function createCity(country, cityName) {
    let city = country.find(c => c[0] === cityName)
    if (city) {
        console.log(`La ville ${cityName} existe déjà.`)
        return
    }
    country.push([cityName, []])
}
function createHousing(country, cityName, housingName) {
    let city = country.find(c => c[0] === cityName)
    if (!city) {
        console.log(`Échec de la création du logement : la ville ${cityName} n'existe pas.`)
        return
    }
    let housing = city[1].find(h => h[0] === housingName)
    if (housing) {
        console.log(`Le logement ${housingName} existe déjà dans ${cityName}.`)
        return
    }
    city[1].push([housingName, []])
}
function addCharacteristics(country, cityName, housingName, ...characteristics) {
    let city = country.find(c => c[0] === cityName)
    if (!city) {
        console.log(`Échec de l'ajout des caractéristiques : la ville ${cityName} n'existe pas.`)
        return
    }
    let housing = city[1].find(h => h[0] === housingName)
    if (!housing) {
        console.log(`Échec de l'ajout des caractéristiques : le logement ${housingName} n'existe pas.`)
        return
    }
    housing[1].push(...characteristics)
}
function getCityOfCountry(country, cityName) {
    let city = country.find(c => c[0] === cityName)
    if (!city) {
        console.log(`Échec de l'obtention de la ville : la ville ${cityName} n'existe pas.`)
        return null
    }
    return city
}
function getCharacteristicsOfHousing(country, cityName, housingName) {
    let city = country.find(c => c[0] === cityName)
    if (!city) {
        console.log(`Échec de l'obtention des caractéristiques : la ville ${cityName} n'existe pas.`)
        return null
    }
    let housing = city[1].find(h => h[0] === housingName)
    if (!housing) {
        console.log(`Échec de l'obtention des caractéristiques : le logement ${housingName} n'existe pas.`)
        return null
    }
    return housing[1]
}
