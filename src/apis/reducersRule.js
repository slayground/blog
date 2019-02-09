let state;

// Mutate: Modify element in an array/object // bad
// We should create a new array/object instead // good

// Removing an element from an array
state.pop() // bad
state.filter(element => element != "bar") // good

// Adding an element to an array
state.push("foo") // bad
[...state, "bar"] // good

// Replacing an element in  an array
state[2] = "foo" // bad
state.map(el => el === 'foo' ? 'bar' : el) // good

// Updating a property in an object
state.name = 'foo' // bad
{...state, name: 'bar'} // good

// Adding a property to an object
state.age = 23 // bad
{...state, age: 23} // good

// Removing a property from an object
delete state.name // bad
{...state, name: undefined} // good
_.omit(profile, 'name') // optimal