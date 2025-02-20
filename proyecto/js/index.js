window.onload  = () =>{
    let proyectos = document.getElementById("proyectos");
    let menu = document.getElementById("menu");
    let titulo = document.getElementById("thisCiclo");
    let cortos = document.getElementById("content");
    let menuArrow = document.getElementById("menuArrow");
    let icons = document.getElementsByClassName("cicloIcon");
    let querystring = window.location.search;
    let params = new URLSearchParams(querystring);
    let jsonProyectos = loadJson();

    iniProject();

    function loadJson(){
        return  [
        {
            "name":"DEL <del>AÑO</del> CICLO",
            "cortos":[
                {
                    "img":"./img/gala.png",
                    "titulo":"Pinga",
                    "autor":"Diego",
                },
                {
                    "img":"./img/ciclo_header.png",
                    "titulo":"Abre",
                    "autor":"Sergio",
                },
                {
                    "img":"./img/gala.png",
                    "titulo":"Prueba de titulo largo a ver que tal",
                    "autor":"Prueba",
                },
                {
                    "img":"./img/ciclo_header.png",
                    "titulo":"Chiste 1",
                    "autor":"Txema",
                },
            ]
    },
    {
        "name":"ciclo 1",
        "cortos":[
            {
                "img":"./img/gala.png",
                "titulo":"Pinga",
                "autor":"Prueba3",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"2",
                "autor":"3",
            },
            {
                "img":"./img/gala.png",
                "titulo":"4",
                "autor":"5",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"6",
                "autor":"7",
            },
        ]
    },
    {
        "name":"ciclo 2",
        "cortos":[
            {
                "img":"./img/gala.png",
                "titulo":"Pinga",
                "autor":"Pingenson",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"sus",
                "autor":"Amon",
            },
            {
                "img":"./img/gala.png",
                "titulo":"Gala",
                "autor":"Ciclo",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"Prueba",
                "autor":"Cisco",
            },
        ]
    },
    {
        "name":"ciclo 3",
        "cortos":[
            {
                "img":"./img/gala.png",
                "titulo":"Pinga",
                "autor":"Pingenson",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"sus",
                "autor":"Amon",
            },
            {
                "img":"./img/gala.png",
                "titulo":"Gala",
                "autor":"Ciclo",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"Prueba",
                "autor":"Cisco",
            },
        ]
    },
]
    }

    function iniProject(){
        if(params.get("p") == null || jsonProyectos.length-1 < params.get("p") || 0 > params.get("p")){
            window.location.href = "./index.html?p=0";
        }else{
            loadContent(params.get("p"));
            setLocalStorage(params.get("p"));
            toMainPage();
        }
    }

    function setLocalStorage(currentProject){
        localStorage.setItem("currentProject",currentProject);
    }

    function toMainPage(){
        for (let icon of icons) {
            icon.onclick = () => {
                window.location.href = "../index.html";
            }
        }
    }

    function loadContent(projectNumber){
        proyecto = jsonProyectos[projectNumber];
        titulo.innerHTML = proyecto.name;

        proyecto.cortos.forEach(corto => {
            // console.log(corto.autor)
            let cortoContainer = document.createElement("div");
            let imagenCorto = document.createElement("img");
            let tituloCorto = document.createElement("div");
            let etiquetaTitulo = document.createElement("h1");
            let autorCorto = document.createElement("div");

            cortoContainer.classList.add("cortoContainer");
            imagenCorto.classList.add("imgCorto");

            cortoContainer.classList.add("pointer");
            imagenCorto.src= corto.img;
            tituloCorto.append(etiquetaTitulo);
            etiquetaTitulo.innerHTML= corto.titulo;
            autorCorto.innerHTML= corto.autor;

            cortoContainer.append(imagenCorto,tituloCorto,autorCorto);
            cortoContainer.onclick = () => {
                window.location.href = "./corto/index.html?c="+corto.titulo;
            };

            cortos.appendChild(cortoContainer);
        });
    }

    menu.onclick = () =>{        
        let menuPopUp = document.createElement("div");
        let menuFondo = document.createElement("div");

        menuPopUp.id = "menuPopUp";
        menuFondo.id = "menuBackground";

        for(let i = 0; jsonProyectos.length>i; i++){
            let ciclo = jsonProyectos[i];

            let newElementList = document.createElement("div");
            newElementList.innerHTML = ciclo.name;

            newElementList.onclick = () => {
                window.location.href = "./index.html?p="+i;
            };

            menuPopUp.append(newElementList);
        }

        menuFondo.onclick = () => {
            document.body.style.overflowY = 'auto';
            menuPopUp.remove();
            menuFondo.remove();

            arrowClose();
        };

        document.body.style.overflowY = 'hidden';
        proyectos.append(menuFondo);
        menu.append(menuPopUp);

        arrowOpen();
    };

    function arrowOpen(){
        menuArrow.classList.remove("arrowClose");
        menuArrow.classList.add("arrowOpen");
    }
    function arrowClose(){
        menuArrow.classList.remove("arrowOpen");
        menuArrow.classList.add("arrowClose");
    }
}