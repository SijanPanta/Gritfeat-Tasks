console.log("3x3 Multiplication Table:\n");

for (let i = 1; i <= 12; i++) {
    let row = "";
    for (let j = 1; j <= 12; j++) {
        row += (i * j).toString().padStart(4, " ");
    }
    console.log(row);
}
