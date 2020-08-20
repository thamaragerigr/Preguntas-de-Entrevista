# Ejercicos Prácticos

1. **'Primero y último'**: Crea una función que dada un _string_, remueva el primer y último caracter.

_Ejemplo:_

    remuevePrimerYUltimoCaracter('hola') // "ol"
    
<details>
   <summary>Solución:</summary>
   <p>
            
        ```
        const remuevePrimerYUltimoCaracter = (str) => str.slice(1, -1)
        ```
        
   </p>     
</details>

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

11. **Suma de múltiplos**: Crea una función devuelva sla suma de todos los múltiplos de 3 y 5, contando desde el parámetro dado

_Ejemplo:_

    findSum(5) // 8 (3 + 5)

_Solución 1:_

    const findSum = (n) => {
    let result = 0
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
        result = result + i
        }
    }
    return result
    }

_Solución 2:_

> Más mantenible a largo plazo porque podemos agregar más casos en un futuro de manera mas fácil.

    const isMultiple = (num, mod) => num % mod === 0

    const findSum = (n) => {
    let result = 0
    for (let i = 0; i <= n; i++) {
        switch (true) {
        case isMultiple(i, 3):
            result = result + i
            break;
        case isMultiple(i, 5):
            result = result + i
            break;
        default: result = result
        }
    }
    return result
    }

[Fuente aquí](https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript)

12. **Duplicado**: Dado un array, crea una función que devuelva el mismo duplicado.

_Ejemplo:_

     duplica([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

_Solución:_

    const duplica = arr => {
        result = arr
        arr.map( item => {{
            result.push(item)
        }})
        return result
    }

[Fuente aquí](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/src/questions/javascript-questions.md)

13. **Variable global accidental**: ¿Cuál es el resultado de `typeof a` y `typeof b` de acuerdo con el siguiente código?

_Código:_

     function foo() {
        let a = b = 0;
        a++;
        return a;
    }

    foo();
    typeof a; // => ???
    typeof b; // => ???

_Solución:_

    typeof a;        // => 'undefined'
    typeof window.b; // => 'number'

- `let a = b = 0` declara una variable local _a_, pero también una global con _b_.
- Como no hemos declarado explicitamente la variable _b_, JavaScript lo interpreta `b = 0` como `window.b = 0`, por lo que su scope es global.
- Como resultado esto es lo que se interpreta:

```
function foo() {
    let a;
    window.b = 0;
    a = window.b;
    a++;
    return a;
}
```

- Por lo tanto, `typeof a` es `undefined`. `a` existe dentro del scope de foo() y no esta disponible fuera de ella. En cambio `b`, al ser una variable global, devuelve `'number'`.

[Fuente aquí](https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/)

14. **Array length**: Cual es el valor de ropa[0]:

_Código:_

    const ropa = ['chaqueta', 'camiseta'];
    ropa.length = 0;

    ropa[0]; // => ???

_Solución:_
ropa[0] es igual a `undefined` ya que cuando se ejecuta `ropa.length = 0` se eliminan todos los elementos del array.

[Fuente aquí](https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/)

15. **Ojo de águila**: Cuál es el contenido de `numbers`:

_Código:_

    const length = 4;
    const numbers = [];
    for (var i = 0; i < length; i++);{
        numbers.push(i + 1);
    }

    numbers; // => ???

_Solución:_

El `;` que va después de `for (var i = 0; i < length; i++)` provoca que el for loop sea nulo, por lo que no se ejecuta `numbers.push(i + 1);`

    const length = 4;
    const numbers = [];
    var i;
    for (i = 0; i < length; i++) {
         // does nothing
    }
    { 
        // a simple block
        numbers.push(i + 1);
    }

    numbers; // => [5]

Lo que en realidad sucede es que `i` aumenta 4 veces y luego se pasa a la parte del código en donde se agrega al array de `numbers`, resultando en 5.

[Fuente aquí](https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/)

16. **Semicoma automática**: ¿Qué devuelve esta función?:

_Código:_

    function arrayFromValue(item) {
        return
            [item];
    }

    arrayFromValue(10); // => ???

_Solución:_

La función devuelve `undefined` porque  `[item];`esta en la siguiente línea, por lo que JavaScript entiende:

    function arrayFromValue(item) {
        return;
        [item];
    }

    arrayFromValue(10); // => undefined
    
[Fuente aquí](https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/)

17. **Pangrama**: Un pangrama es una oración que contiene cada letra del alfabeto al menos una vez. Por ejemplo, la oración "El zorro marrón rápido salta sobre el perro perezoso" es un pangrama, porque usa las letras A-Z al menos una vez (el caso es irrelevante).

Dada una cadena, detecta si es o no un pangrama. Devuelve True si es así, False si no. Ignorar números y puntuación.

_Solución 1:_

    function isPangram(string){
       const alphabeth = ('abcdefghijklmnopqrstuvwxyz').split('')
       return alphabeth.every(x => string.toLowerCase().includes(x))
    }
    
_Solución 2:_

    const abc = 'abcdefghijklmnopqrstuvwxyz'

    const isPangram = (string) => {
        const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')
        console.log(abc===processedString)
    }

    
[Fuente aquí](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)


18. **esPrimo** - Crea una función que devuelva `true`o `false` dependiendo del número que pases como parámetro. Ejemplo:

        esPrimo(0)                          // false
        esPrimo(1)                          // false
        esPrimo(17)                         // true
        esPrimo(10000000000000)             // false

**Solución:**

        const esPrimo = (num) => {
           for (let i = 2; i < num; i++) {
               if (num % i === 0) {
               return false; 
            }
            return true;
        }  

19. **Producto de elementos adyacentes** - Crea una función que devuelva el mayor producto de dos elementos adyacentes en el array dado. Ejemplo:

        inputArray = [3, 6, -2, -5, 7, 3]
        adjacentElementsProduct(inputArray) = 21
        //7 y 3 producen el producto más mayor.

**Solución:**

        function adjacentElementsProduct(arr) {
          return Math.max( ...arr.slice(1).map(( x, i ) => [ x * arr[i]]))
        }

20. **Letra repetida** - Encuentra la primera letra que se repita dado una cadena de texto, si no se repite ninguna devuelve `-1`:

        firstRepeat("Gandalf") ➞ "a"

**Solución:**

        function firstRepeat(str) {
          for (i = 1; i < str.length; i++) {
                if (str.slice(0,i).includes(str[i])) {
                    return str[i]
                }
            }
            return '-1'
        }

[Fuente aquí](https://edabit.com/challenge/aMyRSjKakeDauFfkX)
