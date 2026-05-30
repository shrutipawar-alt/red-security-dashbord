


/* Loading */

setTimeout(()=>{
document.getElementById("loader").style.display="none";
document.getElementById("loginScreen").style.display="flex";
},3000);

/* Terminal Effect */

const terminalLines=[
"> Initializing AI...",
"> Connecting CCTV Network...",
"> Loading Threat Database...",
"> Security Protocol Active...",
"> Access Ready..."
];

let terminal=document.getElementById("terminalText");
let i=0;

function typeLine(){
if(i<terminalLines.length){
terminal.innerHTML += terminalLines[i] + "<br>";
i++;
setTimeout(typeLine,700);
}
}
setTimeout(typeLine,3200);

/* Login */

function login(){

const user=document.getElementById("username").value;
const pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

document.getElementById("loginScreen").style.display="none";
document.getElementById("dashboard").style.display="block";

}else{
alert("Invalid Credentials");
}
}

/* Clock */

function updateClock(){
document.getElementById("clock").innerHTML=
new Date().toLocaleString();
}

setInterval(updateClock,1000);
updateClock();

/* Logs */

const logs=[
"[INFO] AI Monitoring Active",
"[INFO] Camera Network Online",
"[WARNING] Motion Detected",
"[INFO] Threat Scan Complete",
"[ALERT] Unknown Activity Flagged",
"[INFO] Security Protocol Running"
];

function addLog(){

const container=document.getElementById("logContainer");

const div=document.createElement("div");

div.className="log";

div.textContent=
logs[Math.floor(Math.random()*logs.length)];

container.prepend(div);

if(container.children.length>15){
container.removeChild(container.lastChild);
}
}

setInterval(addLog,2500);

