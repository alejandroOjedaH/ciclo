window.onload  = () =>{
    let prueba =document.getElementById("prueba");
    let querystring = window.location.search;
    let params = new URLSearchParams(querystring);


    iniProject();
    function iniProject(){
        prueba.innerText = params.get("c");

        if(params.get("c") == null){
            navigation.navigate("./index.html?c=0");
        }else{
            prueba.innerText = params.get("c"); 
        }
    }
}