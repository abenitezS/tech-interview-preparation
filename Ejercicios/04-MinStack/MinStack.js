function Node (val) {
  // Your code here:
  this.value = val
  this.next = null
  this.min = null
}

function MinStack () {
  // Your code here:
  this.top = null
}

MinStack.prototype.push = function(val){
  const previousTop = this.top
  this.top = new Node(val)
  this.top.next = previousTop
  if(!previousTop) this.top.min = val
  else if(val < previousTop.min) this.top.min = val
  else this.top.min = previousTop.min
}

MinStack.prototype.pop = function(){
  const popped = this.top.value
  this.top = this.top.next
  return popped
}

MinStack.prototype.peek = function(){
  return this.top.value
}

MinStack.prototype.min = function(){
  return this.top.min
}

module.exports = {
  Node,
  MinStack
}

const node = new Node(4)
console.log(node);

const minStack = new MinStack()
minStack.push(1)
console.log(minStack);
minStack.push(1000)
console.log(minStack);
minStack.push(0.5)
console.log(minStack);
minStack.push(5000)
console.log(minStack);
minStack.push(0.1)

console.log(minStack.min())
minStack.pop()
console.log(minStack.min())
minStack.pop()
minStack.pop()
console.log(minStack.min())
minStack.pop()
console.log(minStack.min())
