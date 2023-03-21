import { sendDataToRedux, showingError } from "../../Helpers/functionHelper";
import Api from "../../Helpers/Api";
import { toast } from "react-toastify";

export const getAllPosts = async (dispatch) => {
  try {
    const config = {
      headers: {
        "app-id": "6415b00a63ce64641a5fe670",
      },
    };

    const resp = await Api.get("data/v1/post", config);
    sendDataToRedux(dispatch, "GETALLPOST", resp.data.data);
  } catch (error) {
    showingError(error);
  }
};
export const getAllUser = async (dispatch) => {
  try {
    const config = {
      headers: {
        "app-id": "6415b00a63ce64641a5fe670",
      },
    };

    const resp = await Api.get("data/v1/user", config);
    sendDataToRedux(dispatch, "GETALLUser", resp.data.data);
  } catch (error) {
    showingError(error);
  }
};
export const getUserById = async (dispatch, id) => {
  try {
    const config = {
      headers: {
        "app-id": "6415b00a63ce64641a5fe670",
      },
    };
    const resp = await Api.get(`data/v1/user/${id}`, config);

    sendDataToRedux(dispatch, "GETSINGLEUSER", resp.data);
  } catch (error) {
    showingError(error);
  }
};
export const handlePost = async (body) => {
  try {
    const config = {
      headers: {
        "app-id": "6415b00a63ce64641a5fe670",
      },
    };

    await Api.post("data/v1/user/create", body, config);
    toast.success("User created Successfully");
  } catch (error) {
    showingError(error);
  }
};
