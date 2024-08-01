function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            alert('It is not a palindrome');
            start();
        }
    }
    return alert('It is a palindrome');
    
}
function start(){
    const string = prompt('Enter a string: ');
    const isPalindrome = checkPalindrome(string);
    if(ispalindrome){
        alert("It is a palindrome");
    } else{
        alert("It is not a palindrome")
    }
    }
