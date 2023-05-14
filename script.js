// This function checks if the given word is a palindrome or not.
function checkPalindrome() {
    // Get the user's input from the input field with the ID "inputWord".
    const inputWord = document.getElementById("inputWord").value;
    // Get the result paragraph element with the ID "result".
    const result = document.getElementById("result");

    // Check if the input word is a palindrome by comparing it to its reversed version.
    if (inputWord === inputWord.split("").reverse().join("")) {
        // If the input is a palindrome, set the result text and apply the green-result class.
        result.textContent = "It's a palindrome!";
        result.classList.remove("red-result");
        result.classList.add("green-result");
    } else {
        // If the input is not a palindrome, set the result text and apply the red-result class.
        result.textContent = "It's not a palindrome.";
        result.classList.remove("green-result");
        result.classList.add("red-result");
    }
}
