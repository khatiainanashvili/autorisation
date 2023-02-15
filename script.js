const modal = document.getElementById("modal");
let userName = document.getElementById("username");
let pass = document.getElementById("password");
const submit = document.getElementById("sbm");
const container = document.querySelector('.container')
const autorisation = document.querySelector("#btn")
const registration = document.querySelector('#btn2')
const closee = document.querySelectorAll(".close")
const menuItem = document.querySelectorAll('.menu-item')
const navigation = document.querySelector('ul')

navigation.addEventListener('click', () => {
  menuItem.forEach(e => {
    e.classList.toggle('show')
  });
  navigation.classList.toggle('nav-show')
})

autorisation.addEventListener("click", () => {
    modal.style.display = "block"
})
registration.addEventListener('click', ()=>{
  modalreg.style.display = "block"
}
)
closee.forEach(el => {
  el.addEventListener("click", () => {
    modal.style.display = "none";
    modalreg.style.display = "none"
}
)
});

async function users() {
       const resp = await fetch("https://jsonplaceholder.typicode.com/users");
       const user = await resp.json();
       const label = document.getElementById("label")
   function keyPressEvent() {  
        const userEnter = userName.value;
        const userPass = pass.value;
        let auth = false;
        user.forEach((element) => {
            if (userEnter == element.username && userPass == 123) {
                auth = true;
                document.body.innerHTML = `
              <div class="user-page">
              <div class="header-top">
              <a href="./index.html" >
              <div class="logo">
                  <img src="./img/Untitled-Artwork (19).png" alt="">
              </div>
             </a>
             </div>
            
                   <div class ="user-profile"> 
                      <div class="avatar-image">
                        <img src="https://cdn3.iconfinder.com/data/icons/people-avatars-11/595/PEOPLE_AVATAR-0${element.id}-512.png" alt="">
            
                      </div>
                   <h2> Hello ${element.username}</h2>
                     </div>
              </div>
              `
            }

        });
        if (!auth) {
            console.log("nooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
            userName.style.borderColor = "red";
            pass.style.borderColor = "red";
            label.style.display = "block"

        }
}
      submit.addEventListener("click" , keyPressEvent)
      container.addEventListener("keypress", (ev)=>{ if (ev.keyCode === 13) { keyPressEvent() }})
}

users()
window.onclick = function(event) {
  if (event.target == modal || event.target == modalreg) {
    modal.style.display = "none";
    modalreg.style.display = "none";
  }
}

