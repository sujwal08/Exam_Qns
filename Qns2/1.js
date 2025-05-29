// Returns the string in reverse order. Input and convert the string to uppercase
function reverseAndUppercase(str){
    return str.toUpperCase().split("").reverse().join("");
}
console.log(reverseAndUppercase("hello"));