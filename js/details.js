import { getParam } from "./get-param.js";
import { userService } from "./users.js";




const id = parseInt(getParam("id"));





(async () => {
    const user = await userService.fetchById(id);
    console.log(user);



    
    const image = document.querySelector("#image");
    image.innerHTML = `<img src="https://robohash.org/${user.id}" alt="image_utilisateur" />`;


    const name = document.querySelector("#name");
    name.innerHTML = user.name;
    const email = document.querySelector("#email");
    email.innerHTML = "Email : "+user.email;
    const phone = document.querySelector("#phone");
    phone.innerHTML = "Phone : "+user.phone;




  })();





  const boutonPrecedent = document.querySelector("#boutonPrecedent");

  boutonPrecedent.addEventListener("click", function() {
    window.location.href = `/pages/homepage.html`;
  });