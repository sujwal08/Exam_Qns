let rows =parseInt(prompt("Enter the number of rows: "));

for (let i=1; i<=rows;i++){
    let output = '';
    for(let j=1;j<=i;j++){
        output +='*';
    }
console.log(output);
}
