import axios from "https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/esm/axios.min.js";
//import axios from "axios";
const key = "apiKey=566ec7fa-471e-11ee-be56-0242ac120002";
const apiUrl = `https://api-zabibu-training-project.up.railway.app/api/users`;

// const usersData = axios
//   .get(apiUrl)
//   .then((response) => {
//     const users = response.data;
//     console.log(users);
//   })
//   .catch((error) => {
//     console.error("Une erreur s'est produite lors de la requête :", error);
//   });
class UserService {
  constructor(axios) {
    this.client = axios;
  }
  async fetchUsers() {
    const response = await this.client.get(`?${key}`);
    return response.data;
  }

  async fetchById(id) {
    const response = await this.client.get(`/${id}` + `?${key}`);
    return response.data;
  }

  
  async fetchFavoris() {
    const response = await this.client.get(`/favorites` + `?${key}`);
    // const response = await this.client.get(`https://api-zabibu-training-project.up.railway.app/favorites` + `?${key}`);
    
    return response.data;
  }
}

export const userService = new UserService(axios.create({ baseURL: apiUrl }));
