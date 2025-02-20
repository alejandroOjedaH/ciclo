window.onload  = () =>{
    let titulo = document.getElementById("titulo");
    let cortoVideo = document.getElementById("cortoVideo");
    let curiosidades = document.getElementById("curiosidades");
    let icons = document.getElementsByClassName("cicloIcon");
    let querystring = window.location.search;
    let params = new URLSearchParams(querystring);
    let jsonCortos = loadJson();

    function loadJson(){
        return  [
            {
                "titulo":"Pinga",
                "embedId": "jNQXAC9IVRw",
                "curiosidades":"En este corto Diego se saca la pinga, como forma de expresión de lo que le parecio el juego del calamar",
            },
            {
                "titulo":"Abre",
                "embedId": "vnsN6Nm4C28",
                "curiosidades":"Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor Lore Ipsum Dolor ",
            },
            {
                "titulo":"Chiste 1",
                "embedId": "2yJgwwDcgV8",
                "curiosidades":"Este chiste en realidad no era muy gracioso",
            },
            {
                "titulo":"Prueba de titulo largo a ver que tal",
                "embedId": "2yJgwwDcgV8",
                "curiosidades":"Esto tiene un nombre exageradamente largo, no se si he escrito esa palabra bien",
            },
        ]
    }

    iniProject();
    function iniProject(){
        if(params.get("c") == null || !jsonCortos.find((corto) => params.get("c") === corto.titulo)){
            window.location.href = "./index.html?c="+jsonCortos[Math.floor(Math.random() * jsonCortos.length)].titulo;
        }else{
            loadContent();
            checkLocalStorage();
            toMainPage();
        }
    }

    function checkLocalStorage(){
        if(!localStorage.getItem("currentProject")){
            localStorage.setItem("currentProject","0");
        }

        titulo.onclick = () => {
            window.location.href = "../index.html?p="+localStorage.getItem("currentProject");
        }
    }

    function toMainPage(){
        for (let icon of icons) {
            icon.onclick = () => {
                window.location.href = "../../index.html";
            }
        }
    }

    function loadContent(){
        let currentCorto = jsonCortos.find((corto) => params.get("c") === corto.titulo);

        // titulo.innerText = currentCorto.titulo;
        cortoVideo.src = "https://www.youtube.com/embed/"+currentCorto.embedId;
        curiosidades.innerText = currentCorto.curiosidades;
    }
}