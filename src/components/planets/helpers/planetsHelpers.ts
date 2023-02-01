import { Planets } from "../planetsModel"

const helperCreatePlanet = (data: any): any =>{
    const planet = new Planets(data)
    planet.save()
    .then(_response => {return true})
    .catch(_err => {return false})
}

export {
    helperCreatePlanet
}