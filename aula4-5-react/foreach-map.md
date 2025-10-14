# Diferença entre `forEach` e `map` no JavaScript

Executar online: https://runjs.app/play

- **`forEach`** → itera pelo array, **ignora o retorno do callback** sempre retornando `undefined`.
- **`map`** → cria um **novo array** a partir do retorno do callback.
- **`callback`** → função adicionada a outra função como uma propriedade.

### Estória: Pedido de pizza.

---

## 1. Exemplo com `forEach`

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});

// Retorno
Element at index 0: 1
Element at index 1: 2
Element at index 2: 3
Element at index 3: 4
Element at index 4: 5
```

## 2. Exemplo com `map`

```js
const numbers = [1, 2, 3, 4, 5];

numbers.map((number, index) => {
  console.log(`Element at index ${index}: ${number}`);
});

// Retorno
Element at index 0: 1
Element at index 1: 2
Element at index 2: 3
Element at index 3: 4
Element at index 4: 5
[ undefined, undefined, undefined, undefined, undefined ]
```

## 3. Uso correto `map`

```js
const numbers = [1, 2, 3, 4, 5];

const newArrayCallback = numbers.map((number) => {
  return number * 2;
});

console.log(newArrayCallback);

// Retorno
[2, 4, 6, 8, 10];
```

## 4. Exemplo React `map`

```jsx
<div>
  <ul>
    {array.map((item) => (
      <li key={item.id}>{item.title}</li>
    ))}
  </ul>
</div>

// <ul> recebe um array de <li>
```

| ID                                   | Title      | Description | isCompleted |
| ------------------------------------ | ---------- | ----------- | ----------- |
| 8f7a9356-18b0-4506-8bbf-f092b736f8c5 | JavaScript | Descrição   | false       |
| 1f4f762a-ed6a-4e8c-a576-2e197a83af00 | React      | Descrição   | false       |
| 7019ac75-aee2-4ec9-89d3-f5bde3e0cd53 | Tailwind   | Descrição   | false       |
