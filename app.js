const bi_num = document.getElementById("bi_input");
const deci_num = document.getElementById("deci_input");
const oct_num = document.getElementById("oct_input");
const hex_num = document.getElementById("hex_input");


const hello = ()=>{
    bi_num.value = deci_num.value;
    console.log(bi_num.value + " " + deci_num.value + " " +oct_num.value + " " + hex_num.value)
}

