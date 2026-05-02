// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let error = document.getElementById("error")

function errorLogMsg() {
    let errorInfo = "Something went wrong, please try again"
    error.textContent = errorInfo
}