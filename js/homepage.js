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
    for (let i = 1; i < this.users.length; i++) {
      const user = document.createElement("div");
      let randomNumber = Math.floor(Math.random() * 100);
      user.innerHTML = `
      <div class="card text-bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header"></div>
        <div class="card-body d-flex flex-column align-items-center">
          <img src="https://robohash.org/${randomNumber}" alt="image_utilisateur" />
          <p class="card-text d-flex flex-column align-items-center">
            <span>${this.users[i].name}</span>
            <span>${this.users[i].email}</span>
          </p>
        </div>
      </div>`;

      this.list.innerHTML += user.innerHTML;
      console.log(this.list.innerHTML);
    }
  }
}

const homePage = new HomePage(userService);

homePage.render();
