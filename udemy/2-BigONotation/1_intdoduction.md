# Big O Notation

### Big O 란?

> 알고리즘의 성능을 수학적으로 나타내주는 표기법. 알고리즘의 시간, 공간 복잡도를 표현할 수 있다.

<br/>

### Big O는 왜 필요할까?

- 코드 성능에 대해 이야기할 때 정확한 단위를 사용할 수 있다.
- 서로 다른 접근방식들간의 장단점을 논의할 때 유용하다.
- 코드가 느릴 때 어떤 부분이 문제인지 알아낼 수 있다.

<br/>

### Example - 더 좋은 코드란?

1부터 N까지 모든 숫자를 더하는 코드를 짤 때, for문으로 모든 숫자를 더한 코드와 n \* (n+1) /2 로 합을 구한 코드중에 더 좋은 코드는?<br/>
더 빠른 코드를 구별하기 위해서 performance.now() 같은 함수를 사용해 걸린 시간을 계산할 수도 있다.
하지만 기계마다, 케이스마다 다른 시간이 기록될 수 있다. 따라서 시간 계산법은 그렇게 정확한 방법이 아니다. 그렇기 때문에 Big O 표기법을 사용해 정형화된 표기를 한다.

<br/>

### Big O 공식

Big O 공식을 사용하여 <U>_알고리즘이 O(f(n))의 시간 복잡도를 가진다._</U> 라고 표현할 수 있다.
f(n)은 내가 만든 알고리즘의 시간 효율성(running time)을 의미한다.

- O(1) : 언제나 일정한 시간이 걸리는 알고리즘
  <pre><code>
    function addUpTo(n) {
      return n * (n+1) / 2;
    }
  </pre></code>

- O(n) : 입력 데이터에 비례해서 처리 시간이 늘어나는 알고리즘
  <pre><code>
    function addUpTo(n) {
      let total = 0;
      for(let i=1;i<=n;i++) {
        total+=i;
      }
      return total;
    }
  </pre></code>

- O(n²)
  <pre><code>
    function f(n) {
      for(let i=1;i<=n; i++) {
        for(let j=1;j<=n; j++) {
          console.log(i+j);
        }
      }
    }
  </pre></code>

- O(nm)
  <pre><code>
  function f(n, m) {
      for(let i=1;i<=n; i++) {
        for(let j=1;j<=m; j++) {
          console.log(i+j);
        }
      }
    }
  </pre></code>

- O(2ⁿ)<br/>
  피보나치
  <pre><code>
  function f(n, r) {
    if(n <= 0) return 0;
    else if(n === 1) retunr r[n] = 1;
    return r[n] = f(n - 1, r) + f(n - 2, r);
  }
  </pre></code>

- O(log n)<br/>
  2진검색(binary search)
  <pre><code>
  </pre></code>
