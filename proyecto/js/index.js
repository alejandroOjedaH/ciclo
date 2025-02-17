window.onload  = () =>{
    let proyectos = document.getElementById("proyectos");
    let menu = document.getElementById("menu");
    let titulo = document.getElementById("thisCiclo");
    let cortos = document.getElementById("content");
    let menuArrow = document.getElementById("menuArrow");
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
                    "titulo":"<h1>Pinga</h1>",
                    "autor":"Diego",
                },
                {
                    "img":"./img/ciclo_header.png",
                    "titulo":"<h1>Abre</h1>",
                    "autor":"Sergio",
                },
                {
                    "img":"./img/gala.png",
                    "titulo":"<h1>xD</h1>",
                    "autor":"Prueba",
                },
                {
                    "img":"./img/ciclo_header.png",
                    "titulo":"<h1>Chiste 1</h1>",
                    "autor":"Txema",
                },
            ]
    },
    {
        "name":"ciclo 1",
        "cortos":[
            {
                "img":"./img/gala.png",
                "titulo":"<h1>Pinga</h1>",
                "autor":"Prueba3",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"<h1>2</h1>",
                "autor":"3",
            },
            {
                "img":"./img/gala.png",
                "titulo":"<h1>4</h1>",
                "autor":"5",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"<h1>6</h1>",
                "autor":"7",
            },
        ]
    },
    {
        "name":"ciclo 2",
        "cortos":[
            {
                "img":"./img/gala.png",
                "titulo":"<h1>Pinga</h1>",
                "autor":"Pingenson",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"<h1>sus</h1>",
                "autor":"Amon",
            },
            {
                "img":"./img/gala.png",
                "titulo":"<h1>Gala</h1>",
                "autor":"Ciclo",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"<h1>Prueba</h1>",
                "autor":"Cisco",
            },
        ]
    },
    {
        "name":"ciclo 3",
        "cortos":[
            {
                "img":"./img/gala.png",
                "titulo":"<h1>Pinga</h1>",
                "autor":"Pingenson",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"<h1>sus</h1>",
                "autor":"Amon",
            },
            {
                "img":"./img/gala.png",
                "titulo":"<h1>Gala</h1>",
                "autor":"Ciclo",
            },
            {
                "img":"./img/ciclo_header.png",
                "titulo":"<h1>Prueba</h1>",
                "autor":"Cisco",
            },
        ]
    },
]
    }

    function iniProject(){
        if(params.get("p") == null || jsonProyectos.length-1 < params.get("p") || 0 > params.get("p")){
            navigation.navigate("./index.html?p=0");
        }else{
            loadContent(params.get("p"));
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
            let autorCorto = document.createElement("div");

            cortoContainer.classList.add("cortoContainer");
            imagenCorto.classList.add("imgCorto");

            imagenCorto.src= corto.img;
            tituloCorto.innerHTML= corto.titulo;
            autorCorto.innerHTML= corto.autor;

            cortoContainer.append(imagenCorto,tituloCorto,autorCorto);
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
                navigation.navigate("./index.html?p="+i);
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