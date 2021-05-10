const inquirer=require("inquirer");
const fs=require("fs");
//Imported files
const Employee=require("./lib/employee");
const Engineer=require("./lib/engineer");
const Manager=require("./lib/manager");
const Intern=require("./lib/intern");

let myTeam=[];

//Starting message to set team name
function start(){
    inquirer.prompt([
        {
            type:"input",
            name:"teamName",
            message:"What is the name of your team?"
        }
    ]).then(result=>{
        const {teamName}=result;
        myTeam.push(teamName);
        addManager();
    })
}
//First team member added will always be a manager
function addManager(){
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is your team manager's name?"
        },{
            type:"input",
            name:"email",
            message:"What is your team manager's email?"
        },{
            type:"number",
            name:"officeNumber",
            message:"What is your team manager's office number?"
        }
    ]).then(result=>{
        const {name,email,officeNumber}=result;
        const id=1;
        const teamMember=new Manager(name,id,email,officeNumber);
        myTeam.push(teamMember);
        addMoreMembers();
    });
}

//Function to determine if there needs to be more employees added:engineer, manager or intern.
function addMoreMembers(){
    inquirer.prompt([
        {
            type:"list",
            name:"newMember",
            message:"Add a new team member:",
            choices:["Engineer","Manager","Intern","No, team is complete."]
        }
    ]).then(result=>{
        switch(result.newMember){
            case "Engineer": addEngineer();
            break;

            case "Manager": addManager();
            break;

            case "Intern": addIntern();
            break;

            case "No, team is complete.": teamCompleted();
            break;
        }
    });
}

//Add an engineer to the team
function addEngineer(){
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is your team Engineer's name?"
        },{
            type:"input",
            name:"email",
            message: "What is your team Engineer's email?"
        },{
            type:"input",
            name:"github",
            message:"What is your team Engineer's GitHub?"
        }
    ]).then(result=>{
        const {name,email,github}=result;
        const id=myTeam.length;
        const teamMember=new Engineer(name,id,email,github);
        myTeam.push(teamMember);
        addMoreMembers();
    });
}

//Add an intern to the team
function addIntern(){
    inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"What is your team Intern's name?"
        },{
            type:"input",
            name:"email",
            message: "What is your team Intern's email?"
        },{
            type:"input",
            name:"school",
            message:"Where does the team Intern go to school?"
        }
    ]).then(result=>{
        const {name,email,school}=result;
        const id=myTeam.length;
        const teamMember=new Intern(name,id,email,school);
        myTeam.push(teamMember);
        addMoreMembers();
    });
}

//If team is completed html will be built
function teamCompleted(){
    const html=[];
    const startOfHtml=
    `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Team Profile Generator</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">
            <script src="https://kit.fontawesome.com/9087df0b86.js" crossorigin="anonymous"></script>
        </head>
        <body>
        <header class="d-flex justify-content-center bg-danger bg-gradient py-3 mb-4"><h1 class="fs-1 text-white">${myTeam[0]}</h1></header>
        <div class="d-flex justify-content-center">`

        html.push(startOfHtml);

        for(let i=1;i<myTeam.length;i++){
            let teamInfo=
            `<div class="card m-2" style="width: 18rem;">
            <div class="card-header bg-primary">
                <h5 class="card-title text-white name">${myTeam[i].name}</h5>
                `
                if(myTeam[i].officeNumber){
                    teamInfo +=
                    `<h6 class="card-subtitle text-white mb-2 role"><i class="fas fa-mug-hot"></i> ${myTeam[i].role}</h6>
                    </div>
                    <div class="card-body">
                        <li class="list-group-item id">ID: ${myTeam[i].id}</li>
                        <li class="list-group-item email">Email: ${myTeam[i].email}</li>
                        <li class="list-group-item office-number">Office Number: ${myTeam[i].officeNumber}</li>  
                    </div>
                </div>`
                } else if(myTeam[i].github){
                    teamInfo +=
                    `<h6 class="card-subtitle text-white mb-2 role"><i class="fas fa-glasses"></i> ${myTeam[i].role}</h6>
                    </div>
                    <div class="card-body">
                        <li class="list-group-item id">ID: ${myTeam[i].id}</li>
                        <li class="list-group-item email">Email: ${myTeam[i].email}</li>
                    <li class="list-group-item github">GitHub: ${myTeam[i].github}</li>  
                    </div>
                </div>`
                } else if(myTeam[i].school){
                    teamInfo +=
                    `<h6 class="card-subtitle text-white mb-2 role"><i class="fas fa-user-graduate"></i> ${myTeam[i].role}</h6>
                    </div>
                    <div class="card-body">
                        <li class="list-group-item id">ID: ${myTeam[i].id}</li>
                        <li class="list-group-item email">Email: ${myTeam[i].email}</li>
                    <li class="list-group-item school">School: ${myTeam[i].school}</li>  
                    </div>
                </div>`
                }

                html.push(teamInfo);
        }
        const endOfHtml=
        `</div>
        </body>
        </html>`

        html.push(endOfHtml);

        fs.writeFile("index.html",html.join(""),function(error){
            if(error){
                console.log("There was an error writing your file: ", error);
            }
        })
}


start();