// import { fetchUsers } from "./users.js";

import { userService } from "./users.js";

// (async () => {
//   const users = await userService.fetchUsers();
//   const user = await userService.fetchById(1);
// })();

class Favoris {
  constructor(userService) {
    this.userService = userService;
    this.favoris = [];
    this.list = document.querySelector("#favorisList");
  }

  async render() {
    this.favoris = await this.userService.fetchFavoris();

    for (let i = 0; i < this.favoris.length; i++) {
      const user = document.createElement("div");
      let randomNumber = Math.floor(Math.random() * 100);
      user.innerHTML = `

      <a href="/pages/details.html?id=${this.favoris[i].id}">

      <div class="card text-bg-light mb-3 cardUser"  style="max-width: 18rem;">
        <div class="card-header">
          <div class="custom-control custom-checkbox ">
            <input type="checkbox" class="custom-control-input" id="heartCheckbox" >
              <label class="custom-control-label" for="heartCheckbox">
                <span class="heart-icon" id ="${this.favoris[i].id}"></span>
              </label>
          </div>

        </div>
        <div class="card-body d-flex flex-column align-items-center">
          <img src="https://robohash.org/${randomNumber}" alt="image_utilisateur" />
          <p class="card-text d-flex flex-column align-items-center">
            <span>${this.favoris[i].name}</span>
            <span>${this.favoris[i].email}</span>
          </p>
        </div>
      </div></>`;

      this.list.innerHTML += user.innerHTML;
    }

    const coeurs = document.querySelectorAll(".heart-icon");
    console.log(coeurs);

    coeurs.forEach((coeur) => {
      coeur.addEventListener("click", (e) => {
        e.stopPropagation();
        this.newFavoris = this.userService.patchFavorite(coeur.id);
      });
    });
  }
}
// document.body.addEventListener("click", (e) => {
//   if (e.target.classList.contains("heart-icon")) {
//     alert("coeur");
//     e.stopPropagation();
//   }
// });
const favoris = new Favoris(userService);

favoris.render();
