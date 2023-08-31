import { getParam } from "./get-param.js";
import { userService } from "./users.js";




const id = parseInt(getParam("id"));





(async () => {
    const user = await userService.fetchById(id);
    console.log(user);
  })();