// Inverted Triangle
const rows = parseInt(prompt("Enter the number of rows"));
for(let i=rows; i>=1; i--){
    let output = '';
for(let j=1 ;j<=i;j++){
    output+='*';
}
console.log(output);
}