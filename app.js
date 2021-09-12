const bi_num = document.getElementById("bi_input");
const deci_num = document.getElementById("deci_input");
const oct_num = document.getElementById("oct_input");
const hex_num = document.getElementById("hex_input");
const btn = document.getElementById("btn")

const binary= ()=>{
    if((bi_num.value === ""))
    {
        bi_num.value = "Please enter a valid number"
    }
    else{
        bi_num.value = parseInt(bi_num.value, 2).toString(2);
        deci_num.value = parseInt(bi_num.value, 2).toString(10);
        oct_num.value = parseInt(bi_num.value, 2).toString(8);
        hex_num.value = parseInt(bi_num.value, 2).toString(14).toUpperCase();
    }
   
}
const deci = ()=>{
    if((deci_num.value === "" ))
    {
        deci_num.value = "Please enter a valid number"
    }
    else{
    bi_num.value = parseInt(deci_num.value).toString(2);
    deci_num.value = parseInt(deci_num.value).toString(10);
    oct_num.value = parseInt(deci_num.value).toString(8);
    hex_num.value = parseInt(deci_num.value).toString(14).toUpperCase();
}
}
const oct = ()=>{
    if((oct_num.value === ""))
    {
        oct_num.value = "Please enter a valid number"
    }
    else{
    bi_num.value = parseInt(oct_num.value).toString(2);
    deci_num.value = parseInt(oct_num.value).toString(10);
    hex_num.value = parseInt(oct_num.value).toString(14).toUpperCase();
}
}
const hex = ()=>{
    if((hex_num.value === "" ))
    {
        hex_num.value = "Please enter a valid number"
    }
    else{
    bi_num.value = (parseInt(hex_num.value, 16).toString(2))
    deci_num.value =(parseInt(hex_num.value, 16)).toString(10);
    oct_num.value =(parseInt(hex_num.value, 16)).toString(8);
    hex_num.value =(hex_num.value).toString(14).toUpperCase();
}
}
const clearAll = () =>{
    bi_num.value = null;
    deci_num.value = null;
    oct_num.value = null;
    hex_num.value = null;
}