// inline caching.
function findUser(user) {
	return `found ${user.firstName} ${user.lastName}`
}

const userData = {
	firstName: 'Vedansh',
	lastName: 'Dwivedi'
}

console.log(findUser(userData))
