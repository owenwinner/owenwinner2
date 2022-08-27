out_str = ""
for(let i = 1; i<=12; i++){
    for(let j = 1; j<=12; j++){
        out_str += i.toString() + "x" + j.toString() + "=" + (i*j).toString() + "\n";
    } 
    out_str += "\n";
}
console.log(out_str);




out_str = ""
for(let i = 1; i<=12; i++){
    for(let j = 1; j<=12; j++){
        out_str += j.toString() + "x" + i.toString() + "=" + (i*j).toString() + "\t";
    } 
    out_str += "\n";
}
console.log(out_str);