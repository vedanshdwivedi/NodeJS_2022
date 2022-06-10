import fetch from 'cross-fetch';

const promise = new Promise((resolve, reject) => {
	if (true) {
		resolve("It Worked");	
	}else{
		reject("It Failed");	
	}
});


const promise2 = new Promise((resolve, reject) => {
	setTimeout(resolve, 1000, "Hi")	
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "Hi there")	
});

const promise4 = new Promise((resolve, reject) => {
	setTimeout(resolve, 3000, "Hi there handsome")	
});


// promise.then(result => result + '!').then(result1 => {
// 	throw Error;
// 	console.log(result1);
// }).catch(()=>console.log("Promise Failed"));

// Promise.all([promise, promise2, promise3, promise4]).then(values => {console.log(values)})

var urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
	return fetch(url).then(resp => resp.json())
})).then(results => {
	console.log(results[0])
	console.log(results[1])
	console.log(results[2])
}).catch(()=>console.log("Error Occured in one of the URLs"))