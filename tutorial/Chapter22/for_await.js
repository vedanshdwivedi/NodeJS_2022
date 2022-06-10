import fetch from 'cross-fetch';

var urls = [
	'https://jsonplaceholder.typicode.com/users',
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function(){
	try{
		const [user, posts, albums] = await Promise.all(urls.map(async function(url){
			const response = await fetch(url);
			return response.json()
		}))
	} catch (err) {
		console.log("Some Error Occurred", err)
	}
}

const loopThroughUrls = url => {
	for (url of urls){
		console.log(url)
	}
}

const getData2 = async function(){
	const arrayOfPromises = urls.map(url => fetch(url));
	for await (let req of arrayOfPromises) {
		const data = await req.json();
		console.log(data);
	}
}

// loopThroughUrls();
getData2()