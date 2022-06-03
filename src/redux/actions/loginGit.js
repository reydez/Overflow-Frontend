import axios from "axios";

export const loginGit =
  (user) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/users`,
        user
      );
      let obje = {
            data: [response.data],
            headers: [response.headers]
      }
      console.log(obje)

      dispatch({ type: "LOGIN_GIT", payload: obje });
    } catch (error) {
      console.log(error);
    }
  };