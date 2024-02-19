function getNum(){
    num = Number(document.getElementById("num").value) ;
    len = document.getElementById("len").value.split(",").length ;
    output = [];
    function checkNum(){
        if(num > 1000 || num < -1000){
            alert("Please enter a valid number");
        }else{
            function counter(){
                output.push(num)
            }
            for( var i = 0 ; i < len ; i++){
                counter()
                num ++;
            }   
        }
        console.log(output)
    }
    checkNum()
}
