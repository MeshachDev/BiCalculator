const bi_num = document.getElementById("bi_input");
const deci_num = document.getElementById("deci_input");
const oct_num = document.getElementById("oct_input");
const hex_num = document.getElementById("hex_input");
const btn = document.getElementById("btn")
var binary = "";
const hello = ()=>{
    var bi = bi_num.value.split('')
    const binum = bi.map((i) => Number(i));

    for (let index = 0; index < binum.length; index++) {
        if((binum[index] == 1) || (binum[index] == 0) || (binum[index] == '.')){
            
        }
        else{
            bi_num.value = "Please Enter only 0 and 1"
        }
    }

    var deci = parseFloat(deci_num.value)
    for(var i = 0; deci<=1; i++){
        binary += (deci%2).toString;
        deci=Math.floor(deci/2);
        bi_num.value = binary.toString();
}
}


const clearAll = () =>{
    bi_num.value = null;
    deci_num.value = null;
    oct_num.value = null;
    hex_num.value = null;
}

