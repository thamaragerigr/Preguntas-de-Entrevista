# Ejercicos Prácticos

1. **'Primero y último'**: Crea una función que dada un _string_, remueva el primer y último caracter.

_Ejemplo:_

    remuevePrimerYUltimoCaracter('hola') // "ol"

_Solución:_

    const remuevePrimerYUltimoCaracter = (str) => str.slice(1, -1)

[Fuente aquí](https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0)

2. **Encuentra el más pequeño**: Dado un array de números, haz que la función devuelva el más pequeño entre ellos.

_Ejemplo:_

    const arr = [ 33, 2, 12, 65 ]
    encuentraElMasPequeño(arr) // 2

_Solución:_

    const encuentraElMasPequeño = (arr) =>  Math.min.apply(null, arr)

> Nota: _Math.min_ no acepta matrices, por lo que se le debe agregar _apply_. El primer argumento de apply hace referencia al _this_ dentro de esa función. Pero como en este caso no es necesario usarlo, se puede pasar `null` o `undefined` y actuará igual.

[Fuente aquí](https://www.codewars.com/kata/55a2d7ebe362935a210000b2)

3. **Sumando**: Escribe una función que encuentre el resultado de sumar cada número del 1 al parámetro dado.

_Ejemplo:_

    sumando(2) -> 3
    1 + 2

_Solución:_

    const sumando = (num) =>  {
        let result = 0;
        for (let i = 1; i <= num; i++) result += i
        return result;
    }

[Fuente aquí](https://www.codewars.com/kata/55d24f55d7dd296eb9000030)

4. **Siglo**: Escribe una función que devuelva el siglo del año dado.

_Ejemplo:_

    sigloDeAño(1900)  returns (19)

_Solución:_

    const sigloDeAño = año =>  Math.ceil(año/100)

> Nota: _Math.ceil_ lo que hace es redondear el número dado, luego lo dividimos entre 100 para que nos de el siglo

[Fuente aquí](https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097)

5. **Contando ovejas**: Dado un array, escribe un programa que devuelva el número de ovejas presentes (true).

_Ejemplo:_

    [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

_Solución:_

    const contandoOvejas = rebaño => rebaño.filter(Boolean).length

> Nota: Usamos la palabra `Boolean` para preguntar si es un `true`, el filter nos devuelve un array nuevo excluyendo los `false` y finalmente `.length` para saber la cantidad de ovejas presentes.

[Fuente aquí](https://www.codewars.com/kata/54edbc7200b811e956000556)

6. **Operaiones simples**: Crea una función que acepte dos valores y un símbolo para ejecutar las operaciones matemáticas básicas.

_Ejemplo:_

    operacionBasica('*', 5, 5) //  25

_Solución 1:_

    const operacionBasica = (operacion, valor1, valor2) => {
        switch (operacion) {
            case '+':
            return valor1 + valor2
             break;
            case '-':
            return valor1 - valor2
             break;
            case '*':
            return valor1 * valor2
             break;
            case '/':
            return valor1 / valor2
             break;
            default: return valor1 + valor2
        }
    }

_Solución 2:_

    const operacionBasica = (operacion, valor1, valor2) => eval(valor1+operacion+valor2)

> La función _eval_ evalúa un string y lo ejecuta.

[Fuente aquí](https://www.codewars.com/kata/57356c55867b9b7a60000bd7)

7. **Es divisible**: Crea una función que chequee si un número es divisible entre los parametro x, y dados.

_Ejemplo:_

    n =  12, x = 2, y = 6 =>  true // porque  12 es divisible entre 2 y 6

_Solución:_

    const esDivisible = ( num, x, y ) => ( num % x === 0 && num % y === 0 ) ? true : false

[Fuente aquí](https://www.codewars.com/kata/5545f109004975ea66000086)

8. **Par o impar**: Crea una función devuelva si un número es par o impar

_Ejemplo:_

     parOimpar(3) //Impar

_Solución:_

    const parOimpar = num => ( num % 2 === 0 ) ? 'Par' : 'Impar'

[Fuente aquí](https://www.codewars.com/kata/53da3dbb4a5168369a0000fe)

9. **Palabras reversas**: Implementa una función que acepte un _string_ como parámetro y devuelva todas las palabras del string en reverso, respetando los espacios.

_Ejemplo:_

     "¡Esto es un ejemplo!" ==> "¡otsE se nu !olpmeje"

_Solución:_

    const invertirPalabras = str => {
        return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
    }

[Fuente aquí](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)

10. **FizzBuzz**: Escribe un programa imprima todos los números del 1 a 100, con dos excepciones. Para números divisibles por 3, imprima "Fizz" en lugar del número, y para los números divisibles entre 5 (y no 3), imprima "Buzz" en su lugar. Cuando lo tengas funcionando, modifica tu programa para imprimir "FizzBuzz", para los números que son divisibles entre 3 y 5

_Solución 1:_

    const FizzBuzz = () => {
        for (i = 1; i <= 100; i++) {
            let mensaje = ''
            if(i % 3 === 0 && i % 5 === 0) {
                mensaje = 'FizzBuzz'
            } else if (i % 3 === 0) {
                mensaje = 'Fizz'
            } else if (i % 5 === 0) {
                mensaje = 'Buzz'
            } else {
               mensaje = i
            }
            console.log(mensaje)
        }
    }

_Solución 2:_

    const FizzBuzz = () => {
        for (i = 1; i <= 100; i++) {
            let mensaje = ''
            switch (true) {
                case (i % 3 === 0 && i % 5 === 0):
                mensaje = 'FizzBuzz'
                break;

                case (i % 3 === 0):
                mensaje = 'Fizz'
                break;

                case (i % 5 === 0):
                mensaje = 'Buzz'
                break;

                default:
                mensaje = i
            }
            console.log(mensaje)
        }
    }

_Solución 3:_

> Esta es la opción más mantenible, ya que permite que puedas agregar más posibles casos en un futuro.

    const isMultiple = (num, mod) => num % mod === 0

    const FizzBuzz = () => {
        for (i = 1; i <= 100; i++) {
            let mensaje = ''
            switch (true) {
                case isMultiple(i, 15):
                mensaje = 'FizzBuzz'
                break;

                case isMultiple(i, 3):
                mensaje = 'Fizz'
                break;

                case isMultiple(i, 5):
                mensaje = 'Buzz'
                break;

                default:
                mensaje = i
            }
            console.log(mensaje)
        }
    }

[Fuente aquí](https://www.hackdoor.io/articles/96Nn4Q4E/about-coding-the-fizzbuzz-interview-question)

<!-- 1. **esPrimo** - Crea una función que devuelva `true`o `false` dependiendo del número que pases como parámetro. Ejemplo:

        isPrime(0)                          // false
        isPrime(1)                          // false
        isPrime(17)                         // true
        isPrime(10000000000000)             // false

**Solución:**

        const esPrimo = (num) => {
            for(i = 0; i <= num; i++) {
              num % i === 0 ? false : true
            }
        } -->
