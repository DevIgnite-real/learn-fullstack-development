// What are greeting and name? They are parameters because they are inside the function
// What are "Howdy" and "James"? They are arguments because they are outside the function
// What are num1 and num2? They are parameters because they are inside the function
// What are 3 and 4? They are arguments because they are outside the function


//.                parameters
function greetUser(greeting, name) { 
    welcomeEl.textContent = `${greeting}, ${name} 👋`
}

//.        arguments
let hi = "Howdy"
greetUser(hi, "James")


function add(num1, num2) {
    return num1 + num2
}

add(3, 4)