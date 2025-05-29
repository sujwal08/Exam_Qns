// Function to capitalize the first letter of each word
function capitalizeWords(str){
    return str 
    .split(" ")
    .map(word=> word.charAt(0) .toUpperCase() + word.slice(1))
    .join(" ");

}
console.log(capitalizeWords("hello world"));