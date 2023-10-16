const textbutton = document.getElementById("enter-message"); 
const nameinput = document.getElementById("name-here")
const textinput = document.getElementById("type-here"); 

textbutton.addEventListener('click', () => {
    var div = document.getElementById("messages"); 
    if (nameinput.value != "") {
        if (textinput.value != "") {
            div.innerHTML +=
        `<p class="post"> User ${nameinput.value} says: ${textinput.value} </p>`;
        nameinput.value = "";
        textinput.value = ""; 
        }
        else {
            alert("Please input a message!")
        }
    }
    else {
        alert("Please input your name!")
    }
}
)

setTimeout(() => alert('hello'), 20000);
setTimeout(() => alert('im a ghost'), 30000);
setTimeout(() => alert('boo'), 45000);
setTimeout(() => alert('Im in your walls :D'), 65000);

const colorbutton = document.querySelector('.color-command');
const colorinput = document.querySelector('.color-input');

colorbutton.addEventListener('click', () => 
    document.getElementById("messages").style.backgroundColor = colorinput.value
);
