# Preguntas-de-Entrevista 💅

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

[What is event delegation?](https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983)

## ¿Cómo funciona el 'this'?

**El objeto contexto de JavaScript en el cual se está ejecutando el código actual.** Su valor dependerá de como sea llamada la función.

1. If the `new` keyword is used when calling the function, `this` inside the function is a **brand new object.**
2. If `apply`, `call`, or `bind` are used to call/create a function, `this` inside the function is **the object that is passed in as the argument.**
3. If a function is called as a method, such as `obj.method()` — `this` is the **object that the function is a property of**.
4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, `this` is the **global object**. In a browser, it is the `window` object. If in strict mode (`'use strict'`), `this` will be `undefined` instead of the global object.
5. If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.
6. **If the function is an ES2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.**

## Diferencias entre `null`, `undefiend` y undeclared

- `null:` posee el valor explicito de nulo. Representa que no tiene valor, que a diferencia de undefined que no ha sigo definida.

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
