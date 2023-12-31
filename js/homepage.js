// import { fetchUsers } from "./users.js";

import { userService } from "./users.js";

// (async () => {
//   const users = await userService.fetchUsers();
//   const user = await userService.fetchById(1);
// })();

class HomePage {
  constructor(userService) {
    this.userService = userService;
    this.users = [];
    this.list = document.querySelector("#usersList");
  }

  async render() {
    this.users = await this.userService.fetchUsers();

    for (let i = 0; i < this.users.length; i++) {
      const user = document.createElement("div");
      let randomNumber = Math.floor(Math.random() * 100);
      user.innerHTML = `

      <a href="/pages/details.html?id=${this.users[i].id}">

      <div class="card text-bg-light mb-3 cardUser"  style="max-width: 18rem;">
        <div class="card-header">
          <div class="custom-control custom-checkbox ">
            <input type="checkbox" class="custom-control-input checked" id="heartCheckbox" >
              <label class="custom-control-label" for="heartCheckbox" >
                <span class="heart-icon" id ="${this.users[i].id}"></span>
              </label>
          </div>

        </div>
        <div class="card-body d-flex flex-column align-items-center">
          <img src="https://robohash.org/${randomNumber}" alt="image_utilisateur" />
          <p class="card-text d-flex flex-column align-items-center">
            <span>${this.users[i].name}</span>
            <span>${this.users[i].email}</span>
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

const homePage = new HomePage(userService);

homePage.render();
