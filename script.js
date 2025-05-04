function toggleTheme(){
    document.body.classList.toggle("dark")
}

function updateClock(){
    const timeEL = document.getElementById("time");
const now = new Date()
timeEL.textContent = now.toLocaleTimeString()
}

setInterval(updateClock, 1000);

fetch("https://api.weatherapi.com/v1/current.json?key=537e34532be34dc6bab164914251004&q=Dhaka").then((resp) => resp.json()).then((data) => {document.getElementById("setweather").textContent = `${data.location.name} ${data.current.temp_c} deg C, ${data.current.condition.text}`}).catch(err => {
    document.getElementById("setweather").textContent = "give proper name"
});


function addtodo(){
    const input = document.getElementById("todoinput");
    const list = document.getElementById("todolist");
    const li =document.createElement("li");
    li.textContent =input.value;
    li.addEventListener("click", ()=> li.remove())
    list.appendChild(li);
    input.value = ""
}

function savenote(){
    const note = document.getElementById("notearea").value
    localStorage.setItem("note",note);
    displaynote();
}

function displaynote(){
    const note = localStorage.getItem("note");
    document.getElementById("shownote").textContent = note;
}
displaynote();

document.getElementById("contactform").addEventListener("submit", (event)=>{
    event.preventDefault();
    const formdata = new FormData(event.target);
    const entries = [...formdata.entries()].reduce((acc,[k,v])=>{
        acc[k] = v;
        return acc;
    }, {})
    
    console.log(entries)
    event.target.reset()
})
