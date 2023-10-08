<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `ReferenceError: greetign is not defined`.

<i>There's a typo, and greetign is not declared as a variable using let, const, or var. As a result, when you try to assign an empty object to greetign, JavaScript will not recognize it as a variable and will throw a ReferenceError because greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: `"12"`.

<i>When you call sum(1, "2"),,,,JavaScript will attempt to perform type coercion and convert the number 1 and the string "2" to a common type so that it can perform the addition. In this case, it will convert the number 1 to a string and then concatenate the two strings, resulting in "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`.

<i> you change the value of info.favoriteFood to "🍝".this change does not affect the food array. Modifying the value of info.favoriteFood does not alter the original array in any way. Therefore, when you log the food array, it remains unchanged, and the output will be ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`.

<i>In the code, you have a function sayHi that expects one parameter, name. However, when you call sayHi() in console.log(sayHi());, you don't provide any argument, so name is not assigned a value.So, the output will be Hi there, undefined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: 3 .

<i>For num = 0, which is falsy, the if (num) condition evaluates to false, so count is not incremented.For num = 1, num = 2, and num = 3, which are all truthy, the if (num) condition evaluates to true, so count is incremented by 1 for each of these numbers.Therefore, the final value of count is 3</i>

</p>
</details>
