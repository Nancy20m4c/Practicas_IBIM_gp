/*class NewProject extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML=
       
        `
        <style>

        button{
            background-color:gainsboro;
            border: solid 1pt black;
        }
        button:hover{
            background-color: aliceblue;
        }
        button:active{
            background-color: black;
            color:white;
        }
        #form{
            display: none ;
        }
        form{
            width:350px;
            height: auto;
            padding: 15px;
            border-radius: 10px;
            background-color:gainsboro;
            position:relative;
        }
        #hideForm{
            background-color: gainsboro;
            border: 0;
            position:absolute ;
            right: 25px;
            top: 25px;
            
          
            
        }
        form button:hover{
            background-color: aliceblue;
        }
        form button:active{
            background-color: black;
            color: white;
        }
        form label{
            width:250px;
            font-weight: bold;
           
        }
        #projectName, #projectCode, #clientCode, #projectDescription{
            width: 300px;
            padding: 3px 10px;
            background-color: white;
            border: 1px solid black;
            border-radius: 3px;
            margin: 8px 0px ;
        }
        form input[type="submit"]{
            width: 100%;
            padding: 8px 16px;
            margin-bottom: 20px;
        }
        form input[type="submit"]:hover{
            cursor: pointer;
        }
        textarea{
            width: 100%;
            height: 100px;
        }

    </style>

    <button id="addProject" onclick="show();">+</button>

    <div id="form">

        <form>
        <button id="hideForm" onclick="hide();">x</button>
        <br><br>
        <label for="projectName">Nombre</label>
        <input type = "text" id= "projectName" placeholder= "Nombre del proyecto">
        <br><br>
        <label for="projectCode">Código proyecto</label>
        <input type = "text" id= "projectCode" placeholder = "Código del proyecto">
        <br><br>
        <label for="clientCode">Código cliente</label>
        <input type = "text" id= "clientCode" placeholder= "Código del cliente">
        <br><br>
        <label for="projectDescription">Descripción</label>
        <textarea id="projectDescription" placeholder = "Descripción del proyecto"></textarea>
        <br><br>
        <input type = "submit" value = "Agregar Proyecto">
        </form>

        </div>


        <script>
             function show(){
            document.getElementById("form").style.display = "block";
        };

        function hide(){
            document.getElementById("form").style.display = "none";
        };
        </script>

        `
    
        function show(){
        document.getElementById("form").style.display = "block";
        };

        function hide(){
        document.getElementById("form").style.display = "none";
        };
   
        
    }

}
window.customElements.define("new-project",NewProject); */




let projects = [];

const addProject = (e) => {
    e.preventDefault(); //para que no recargue la pagina

    let project = {
        name: document.getElementById("projectName").value,
        projectCode: document.getElementById("projectCode").value,
        clientCode: document.getElementById("clientCode").value,
        description: document.getElementById("projectDescription").value
    }

    projects.push(project);   
    

    let data = document.querySelector("#msg data");
    data.textContent = JSON.stringify(projects) //para que la informacion se convierta en una cadena de texto JSON

    

}

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("addNewProject").addEventListener("click", addProject);
});