function input(num) {
    var input=document.getElementById("inputArea");
    input.value+=num;
}
function calculate() {
    var input=document.getElementById("inputArea");
    var result=math.evaluate(input.value);
    input.value+='\n='+result;
}
function blank() {
    var input=document.getElementById("inputArea");
    input.value='';
}