function addUpTo(n) {
  let total = 0;
  for(let i = 1; i<= n; i++) {
      total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 100000000} seconds.`);

function addUpToSecond(n) {
  return n * (n + 1) / 2;
}

//addUpToFirst는 연산 개수가 5n+2로, n과 비례하여 경과 시간이 증가한다.
//addUpToSecond는 연산 개수가 3개 뿐이고 n의 영향을 받지 않는다. => 훨씬 빠른 코드