// import { fetchUsers } from "./users.js";

// (async () => {
//   const users = await fetchUsers();
//   console.log(users);
// })();

import { userService } from "./users.js";

(async () => {
  const users = await userService.fetchUsers();
  const user = await userService.fetchById(1);
  console.log(users);
  console.log(user);
})();
