async function* numbers() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(r => setTimeout(r, 1000));
    yield i;
  }
}

async function run() {
  for await (const n of numbers()) {
    console.log(n);
  }
}

run();

// async function test() {
//   console.log(1);
//   await Promise.resolve();
//   console.log(2);
// }

// test();
// console.log(3);
