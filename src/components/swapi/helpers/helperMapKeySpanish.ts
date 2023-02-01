import { schemas } from '../schema/schemas'

export const helperMapKeySpanish = (data: any, resource: any): any => {
  const arr: any[] = []
  const swapi: any = {}
  const newResults: any[] = []

  // varios resultados [{},{},{}]
  if (data.results !== undefined) {
    swapi.total = data.count
    swapi.siguiente = data.next
    swapi.anterior = data.previous
    arr.push(...data.results)
  } else {
    // retorna un solo object {}
    arr.push(data)
  }

  for (const object of arr) {
    const newObject: any = {}
    let i = 0
    for (const key in object) {
      const valor = object[key]
      const newKey = schemas[resource][i]
      newObject[newKey] = valor
      i++
    }
    newResults.push(newObject)
  }

  if (newResults.length > 1) {
    swapi.resultados = newResults
    return swapi
  }

  return newResults[0]
}
