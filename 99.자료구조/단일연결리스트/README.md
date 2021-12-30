# 부가적인 설명

```js

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    // pop은 현재 tail을 제거하기 때문에 새로운 tail을 지정해줘야 한다
    while (current.next) {
      // 이렇게 되면 newTail은 언제나 current 보다 하나 뒤에 있다
      // 그 이유는 아래에서 current = current.next가 되기 때문
      newTail = current;
      current = current.next;
    }

    // 위의 조건문을 다 돌고나면 current엔 가장 마지막 값(내가 pop할 값)이 들어있게 됨

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    // 마지막에 insert 할 경우 그냥 push 메소드를 호출하면 된다
    if (index === this.length) {
      return !!this.push(val);
    }

    // 첫번째에 insert 할 경우 unshift 메소드를 호출하면 된다
    if (index === 0) {
      return !!this.unshift(val);
    }

    const newNode = new Node(val);
    const prev = this.get(index - 1);
    const temp = prev.next;

    prev.next = newNode;
    newNode.next = temp;
    this.length += 1;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    // 맨 처음 요소를 삭제한다는 의미는 shift와 동일하다
    if (index === 0) {
      return this.shift();
    }

    // 맨 마지막 요소를 삭제한다는 의미는 pop과 동일하다
    if (index === this.length - 1) {
      return this.pop();
    }

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;

    previousNode.next = removed.next;
    this.length -= 1;

    return removed;
  }
}
```