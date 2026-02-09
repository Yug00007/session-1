function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}


const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3




console.group()
console.log("var start")
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.debug(i);
  }, 1000);
}
// 3, 3, 3
console.log("var end")
console.groupEnd()


for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.info(i);
  }, 1000);
}
// 0, 1, 2


// for git:-
// https://learngitbranching.js.org/