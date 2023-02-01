# CURSO TYPESCRIPT

## ESPACIO DE TRABAJO

- Ejecutar npm init -y para crear package.json
- Ejecutar npm install typescript
- crear archivo de configuracion: tsc --init

## Tipos  de datos

> Tipos Primitivos y básicos

```typescript
let nameUser: string // "rommer" | 'rommer' | `rommer` | `${rommer}`
let isAdult: boolean; // true | false
let phone: number | // numeros enteros y con decimales
let hexadecimal: number = 0xf00d // Type: Number, hexadecimal
let binario: number = 0b1010 // Type: Number, binario
let octal: number = 0o755 // Type: Number, octal

let undefined: undefined
let null: null
// por lo genereal deberia usar undefined y no null

```

> tipos compuestos

```typescript
//  Arreglos
let course: any[] = [ 'rommer', 38, true, {}, [], undefined, null ]
let course: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
let course: string[] = ['java', 'c#']
let course: string[] | number[] = ["typescript"]
let course: string[] | number[] = [77]

const data: (string[] | number[])[] = [["a"], [1]]
const otherData: any[][] = [[{}], [{name: 'rommer'}]]
const otherData3: any[][] = [["a"], [1]]

// Arreglos con Generics
let course: Array<string> = ['java', 'c#']
let course: Array<number> = [ 0, 1, 2, 3, ]
```

> tipos especiales de typescript

- TUPLAS

las tuplas me pueden permitir definir arrays que tengan un conjunto de datos

```typescript
type User = [string, number]
const user: User = ['rommer', 31] 

const curso: [string] = ['typescript'] 
const profesot: [string, string] = ['abrill', 'Go'] 
const numeroUno: [number, string] = [1, 'uno']
```

Tipo: Null y Undefined
por lo genereal deberia usar undefined y no null
let varUndefined: undefined = undefined;
let varNull: null = null;

- ANY

any significa que acepto cualquier tipo de valor, el tipo any es el más utilizado cuando queremos saltarnos las validaciones de typescript, OJO aunque es una mala practica colocar todo con any

```typescript
const name: any = 'rommer'
const age: any = 31
const isAdult: any = true
```

- UNKNOW

unknown se refiere a que el valor es desconocido: es un valor que puede cambiar de tipo, pero puedo conrtolar preguntaondo
por el tipo de valor que posee

```typescript
let data: unknown
```

- VOID

El tipo de dato void significa que una funciona no tiene un tipo de retorno,  ejecuta una acción pero no devuelve nada

```typescript
function nameUser(params?:unknown): void {
  if (params !== undefined) {
    console.log(params)
  }
}
```

- NEVER

El tipo de dato never significa que mi funcion nunca retornara un valor valido

```typescript
function returnErr(error: string): never {
    throw new Error('error: ' + error);
    // nunca retorna un valor
}
```

- TYPE  7  Alias para tipos de datos

La idea de los alias para tipos de datos es poder agrupar un conjunto de tipos para poder tener mayor flexibilidad a la hora de definir nuestras variables.

O en otros terminos ( type ) me permite crear tipos de datos personalizados 

```typescript
type NumeroPares = 2 | 4 | 6 | 8 | 10
type N = number
type name = string
type email = string
type edad = number | string

type Couse = string | number
let users: Couse[] = [ 1, 1, "asd", 5]
// y puedo mesclar los tipos de datos que yo desee
```
- ENUMS

Los enums me sirve para agrupar las constantes como en objetos, Ejemplos:

Otas definicones: 
Nos permite definir un set reducido de datos 
Nos permite definir nuestros propios tipos de datos

```typescript
enum Paises {
  BOL = 'BOL',
  CHI = 'CHI',
  ARG = 'ARG'
}
enum EmailOK {
  gmail = 'gmail.com',
  hotmail = 'hotmail.com',
  yahoo = 'yahoo.com'
}
```

## FUNCIONES

> PARAMETROS OPCIONALES Ó POR DEFECTO

Para configurar un parametro como opcional en una funcion solo debe agregar el sgino ? al lado de parametro.

Se recomienda colocar los parametros opcionales ó por defecto al final para que el codigo no muera.

```typescript
type Auth = { jwt: string, id?: number, role: string }

const auth = (jwt: string, id?: number, role = 'customer'): Auth => ({
    jwt,
    id: id ?? 10
  })
Auth("token")
```

> PARAMETROS REST

usamos el spriOperator para convertir todos los parametros a un array

```typescript
const parametrosMatriz = (...args: any[]): any[] => {
  console.log(args)
  // [ 'rommer', 31, 'mundoenweb@gmail.com' ]
  return args
} 
parametrosMatriz("rommer", 31, "mundoenweb@gmail.com")

type User = { name: string, age: number, email: string }

const parametrosObject = (...args: any): User => {
  console.log(args)
  // [ { name: 'rommer', age: 31, email: 'mundoenweb@gmail.com' } ]
  return args
} 
parametrosObject({
  name: "rommer", 
  age: 31,
  email: "mundoenweb@gmail.com"
})
```
> SOBRECARGA

sobrecargamos la funcion de la siguiente de la siguiente forma para poder trabajar con el resultado de la función, de esta forma sabremos si el resultado es un numero o un string.

OJO esto no sirve con funciones flecha

```typescript
type Arg = number | string

function transformNum (num: number): number;
function transformNum (num: string): string;

function transformNum (num: Arg): Arg {
  return num
}

const result: Arg = transformNum(1)
console.log(result.toFixed(2))

const result2: Arg = transformNum("uno")
console.log(result2.toUpperCase())
```

## INTERFACES
 
Tiene que ver mas que todo con el paradigma de programación orientado objetos

Sin embargo, en typescript es habitual usar las interfaces como un agrupador de tipos de datos

type es igual a una iterface pero no del todo Es recomendable usar types para datos simples. Y usar interfaces para datos complejos como los objetos

```typescript
interface User {
  name: string
  email: string
  age: number
}

const user: User = {
  name: "rommer",
  email: "mundoenweb@gmail.com",
  age: 31
}
```

> EXTENDIENDO INTERFACES
 
la ventaja que tenemos sobre los types es que podemos extender de otra interface

```typescript
interface base {
  id: number
}
interface Persona extends base {
  name: string
  age: number
  phone?: string
}
interface User extends Persona {
  email: string
}

const user: User = {
  id: 1,
  name: "rommer",
  email: "mundoenweb@gmail.com",
  age: 31,
}
```

## TIPOS AVANZADOS

> POO

Ejemplo básico:

```typescript
class User {
  // atributos
  public name: string // variable publica
  public age: number // variable publica
  private email: string //// variable privada
  private readonly password: string //// atributos de solo lectura

  // funcion que nos permite crear objetos
  constructor(name: string, email: string, age: number){
    this.name = name
    this.email = email
    this.age = age
  }

  // metodo para obtener el email privado
  getEmail(): string { // metodo para obtener el email privado
    return this.email
  }
  // metodo para setear el email privado
  setEmail(email: string): void { 
    this.email = email
  }
}
```
> UNIONS y GUARDS

```typescript
class ErrorResponse {
  code: number = 404

}
class SuccessResponse {
  code: number = 200
  message: string = ''
}

type TRequest = ErrorResponse | SuccessResponse

const get = async (req: TRequest): Promise<any> => {
  try {
    const data = await fetch('https://.....') 
    if (req instanceof SuccessResponse) {
      return {
        data,
        code: req.code,
        message: req.message
      }
    }     
  } catch (error) {
    if (req instanceof ErrorResponse) {
      return {
        error,
        code: req.code,
      }
    } 
  }
}
```

> INTERSECCIONES

```typescript
type alfanumerico = string | number
type numerico = number | undefined

type Key = alfanumerico | numerico
// Key = string | number undefine

type Key2 = alfanumerico & numerico
// Key2 = number
```

> CAST

```typescript
const canvas = <HTMLCanvasElement>document.getElementById('canvas')
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement
const canvas3: HTMLElement | null = document.getElementById('canvas')

canvas.after("hola")
canvas2.before("chao")
canvas3?.remove()
```

> OPTIONAL CHAINING  ?

Agrega el simbolo ? por si es null o undefined el elemento

```typescript
const boton = document.getElementById('btn')
boton?.addEventListener('click')
```

> DECORADORES

Un decorador es una funcion que recibe un target; este puede ser cualquier objeto, el cual ayuda a extender funcionalidad del mismo

Se debe descomentar la opción experimentalDecorators en el tsconfig.json

```typescript
function Decorator(tarjet: any) {
  tarjet.prototype.email = 'rommer@gmail.com'
}

interface User {
  name: string
  ega: number
  email: string
}

@Decorator
class User {
  name: string
  age: number

  constructor() {
    this.name = ''
    this.age = 0
  }
}
```

> FUNCIONES GENÉRICAS

```typescript
interface Ping<T, U> {
  host: T
  post: U
  active: any
}

const Network: Ping<string, number> = {
  host: '127.0.0.1',
  post: 443,
  active: true
}
```
