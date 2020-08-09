# Preguntas-de-Entrevista: JavaScript

## ¿Qué significa 'event delegation'?

### ¿Qué definimos como evento?

Cosas que le ocurren a un elemento de HTML. Esto puede ser detonado por:

- **change**: Un cambio en el elemento
- **click**: Cuando el usuario hace click en el elemento
- **mouseover**: El usuario mueve el mouse sobre el elemento
- **mouseout**: El usuario mueve el mouse fuera el elemento
- **keydown**: Cuando se presiona una letra del teclado
- **load**: Cuando el navegador termina de cargar la página

Significa **_añadir un event listener a un elemento padre_**, en lugar de añadirlo a sus descendientes. El evento será detonado cuando sea 'triggered' en los elementos descendientes. Se usa porque:

- Solo se **_necesita un 'handler' en el elemento padre_**, en lugar de añadir uno a cada descendiente.
- No hay necesidad de **_desconectar el 'handler'_** si algun elemento descendiente es eliminado.

```
<ul class=”characters”>
</ul>
<script>
  function toggleDone (event) {
    console.log(event.target)
  }
  const characterList = document.querySelector('.characters')
  characterList.addEventListener('click', toggleDone)
</script>
```

> ⛔ Se le añade un event listener al padre para los elementos que serán añadidos después de que la página carge

[What is event delegation?](https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983)

## ¿Cómo funciona el 'this'?

**El objeto contexto de JavaScript en el cual se está ejecutando el código actual.** Su valor dependerá de como sea llamada la función.

Se puede generalizar su uso bajo las siguientes reglas:

1. Si la palabra `new`es usada para llamar una función, el `this` dentro de la función es un nuevo objeto.

```
function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}
new ConstructorExample();
// -> {}
// -> { value: 10 }
```

2. Si `apply`,`call` o `bind` son usados para llamar a una función, el `this` dentro de ella es un objeto que es pasado como argumento.

```
function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
fn.call(obj);  // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }
```

3. Si una función es llamada como un método usando 'dot notation', el `this` hará referencia al objeto que tiene esa función como propiedad.

```
var obj = {
    value: 5,
    printThis: function() {
        console.log(this);
    }
};
obj.printThis(); // -> { value: 5, printThis: ƒ }
```

> ⛔ Se puede decir que cuando hay un punto al lado izquierdo de la función (cuando se invoca), el `this` es el objeto a la izquierda del punto.

4. Si una función es invocada como una función libre, es decir, de ninguna de las manera previamente mencionadas, el `this` es el objeto global. En el navegador es `window`.

```
function fn() {
    console.log(this);
}
// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}
```

> ⛔ Esta regla se diferencia de la nº 3 ya que una función que no es declarada como método automaticamente se convierte en propiedad del objeto global `window`. Esto es por ende, una invocación de un método implícito. Cuando llamamos a fn (), se interpreta como window.fn(), entonces `this` es `window`. 

    console.log(fn === window.fn); // -> true

5. Si más de uno de las anteriores se combinan, la que sea major es la que determinará el valor de `this`.

6. Si se habla de una función flecha, se ignoran todas las reglas anteriores y el `this` recibe el valor de su scope en el momento de su creación

```
const obj = {
    value: 'abc',
    createArrowFn: function() {
        return () => console.log(this);
    }
};
const arrowFn = obj.createArrowFn();
arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }
```
Fuente: [The Simple Rules to ‘this’ in Javascript](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3)

## Diferencias entre `null`, `undefiend` y undeclared

- `null:` posee el valor explícito de nulo. Representa que no tiene valor, que a diferencia de undefined que no ha sigo definida.

```jsx
var foo = null;
console.log(foo === null); // true
console.log(typeof foo === 'object'); // true

console.log(foo == undefined); // true. Wrong, don't use this to check!
(type coertion)
```

- `undefined:` Ha sido declarada pero no se le ha asignado ningun valor.

```jsx
var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === "undefined"); // true

console.log(foo == null); // true. Wrong, don't use this to check!

function bar() {}
var baz = bar();
console.log(baz); // undefined
```

- undeclared: son variables que han sido creadas sin identificador (let, var, const)

```jsx
function foo() {
  x = 1; // Throws a ReferenceError in strict mode
}

foo();
console.log(x); // 1
```

## Explica cómo funciona la herencia de prototipos

Todos los objetos en JS poseen una propiedad `_proto_`, la cual hace referencia a otro objeto, el cual es llamado el prototipo del objeto. Cuando se accede a una propiedad a través de un objeto y no es encontrada, se buscará en el `_proto_` del objeto hasta conseguir lo que esta buscando.

<!-- ## ¿Qué son `closures`? ¿Por qué y para qué usarlas? -->

<!-- 
## Diferencia entre clase y funcion

## Funciones normales vs de flecha

## Async vs defer

## == vs ===

## setTimeout vs setInterval

##  different DOM API’s

## DOM vs Virtual DOM

## ¿Cómo funciona el event loop?

## Difference between call, bind and apply

## Explain Promise

## What is variable hoisting

## Difference between document.ready(){} and window.onload(){}

## Callback vs Promise

## Prototypal inheritance

## Write polyfill for Filter, Reduce, Promise

## CORS

## Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?

## What's a typical use case for anonymous functions?

## Difference between: function Person(){}, var person = Person(), and var person = new Person()?

## Explain Ajax in as much detail as possible.

## What are the advantages and disadvantages of using Ajax?

## SEO

## What are the pros and cons of using Promises instead of callbacks?

## Explain the difference between synchronous and asynchronous functions.

## What is the definition of a higher-order function?

## Can you name two programming paradigms important for JavaScript app developers?

## What is functional programming?

## What is the difference between classical inheritance and prototypal inheritance?

##  When is classical inheritance an appropriate choice?

## When is prototypal inheritance an appropriate choice?

## What are two-way data binding and one-way data flow, and how are they different?

## What are the pros and cons of monolithic vs microservice architectures?

## What is asynchronous programming, and why is it important in JavaScript?

-----
#### What kind of SQL statement retrieves data from a table
#### Why is caching used to increase read performance?
#### Which of the following HTTP request methods should not alter the state of the server?
#### Which type of testing would best measure which version of a landing page results in more sing-ups?
####  -->
