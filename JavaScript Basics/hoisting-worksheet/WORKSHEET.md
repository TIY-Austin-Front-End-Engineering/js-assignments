# JavaScript Hoisting Worksheet

## Instructions
1. Review each code snippet below.
2. Fill in what will be output to the console.
3. Run the code to see if you were correct.
4. Describe why the code behaved as it did.
5. Re-write the code snippet to maintain the same output, but to avoid hoisting.

```js
var myvar = 'my value'; 
  
(function() { 
	console.log(myvar);
	var myvar = 'local value'; 
})();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-
> rewrite without hoisting
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-

```js
var flag = true; 
  
function test() {
	if(flag) {
		var flag = false;
		console.log('Switch flag from true to false');
	}
	else {
		flag = true;
		console.log('Switch flag from false to true');
	}
}
test();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-
> rewrite without hoisting
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-


```js
var message = 'Hello world'; 
  
function saySomething() {
	console.log(message);
	var message = 'Foo bar';
}
saySomething();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-
> rewrite without hoisting
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-

```js
var message = 'Hello world'; 
  
function saySomething() {
	console.log(message);
	message = 'Foo bar';
}
saySomething();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-


```js
function test() {
	console.log(a);
	console.log(foo());

	var a = 1;
	function foo() {
		return 2;
	}
}
 
test();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-
> rewrite without hoisting
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-

```js
(function() {
	console.log(bar);
	foo();

	function foo() {
		console.log('aloha');
	}

	var bar = 1;
	baz = 2;
})();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-
> rewrite without hoisting
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-

```js
var run = false;

function fancy(arg1, arg2) {
	if(run) {
		console.log('I can run');
	}
	else {
		console.log('I can\'t run');
	}

	function run() {
		console.log('Will I run?');
	}
}
fancy();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-
> rewrite without hoisting
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-

```js
var run = false;

function fancy(arg1, arg2) {
	if(run) {
		console.log('I can run');
	}
	else {
		console.log('I can\'t run');
	}

	var run = function() {
		console.log('Will I run?');
	}
}
fancy();
```

> output:
>-
>-
>-
> why?
>-
>-
>-
>-
>-
>-
> rewrite without hoisting
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-
>-