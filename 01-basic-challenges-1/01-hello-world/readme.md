## Challenge: Hello World Sample Challenge

This is a practice challenge to show you how things are set up and how to test, etc.

## Instructions

Write a function called `helloWorld` that returns a string of 'Hello World!'.

### Function Signature

```plaintext
/**
 * Returns a string containing 'Hello World!'.
 * @returns {string} - The string 'Hello World!'.
 */
function helloWorld(): string;
```

### Examples

```plaintext
helloWorld() // 'Hello World!'
```

### Constraints

I will put any constraints here. They will vary depending on the challenge.

*   The function must return a string

### Hints

*   I will put a couple hints here. You can choose to use them or not.

## Solutions

Click For Solution

```plaintext
function printHelloWorld() {
  return 'Hello World!';
}
```

### Explanation

I will put the explanation to the solution here. The length and depth of the explanation will vary depending on the challenge.

### Test Cases

The Jest tests will go here. They are already included in the course files. You just need to run `npm test`. Sometimes I will also put manual tests here.

```plaintext
test("Returning 'Hello, World!' as a string", () =&gt; {
  const result = helloWorld();
  expect(result).toBe('Hello World!');
});
```