console.log("It's just a game of guessing a number in your mind.");
console.log("Let's try it...");

let numbers = [
  9, 1, 8, 2, 7, 3, 6, 4, 5, 10, 11, 20, 19, 12, 18, 13, 17, 14, 16, 15, 21,
];

function splitIntoRows(arr) {
  let a = [],
    b = [],
    c = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 3 === 0) a.push(arr[i]);
    else if (i % 3 === 1) b.push(arr[i]);
    else c.push(arr[i]);
  }
  return [a, b, c];
}

function guessNumber(numbers) {
  let rows = splitIntoRows(numbers);
  console.log("Select your row number:");
  console.log("1:", rows[0]);
  console.log("2:", rows[1]);
  console.log("3:", rows[2]);

  let s1 = parseInt(prompt("Enter your row number (1, 2, or 3):")) - 1;
  let newOrder = [rows[(s1 + 1) % 3], rows[s1], rows[(s1 + 2) % 3]];
  rows = splitIntoRows(newOrder.flat().reverse());

  console.log("Select your row number again:");
  console.log("1:", rows[0]);
  console.log("2:", rows[1]);
  console.log("3:", rows[2]);

  let s2 = parseInt(prompt("Enter your row number (1, 2, or 3):")) - 1;
  newOrder = [rows[(s2 + 1) % 3], rows[s2], rows[(s2 + 2) % 3]];
  rows = splitIntoRows(newOrder.flat().reverse());

  console.log("Select your row number one last time:");
  console.log("1:", rows[0]);
  console.log("2:", rows[1]);
  console.log("3:", rows[2]);

  let s3 = parseInt(prompt("Enter your row number (1, 2, or 3):")) - 1;
  console.log("Your guessed number is:", rows[s3][3]);
  console.log("Am I correct?");
}

guessNumber(numbers);
