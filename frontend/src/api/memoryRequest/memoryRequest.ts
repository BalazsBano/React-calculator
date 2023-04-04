import axios from "axios";
import { API_URL, USER } from "../../configuration/env";

const url: string = API_URL || "";
const user: number = Number(USER || "");

export async function memoryGetRequest() {
  try {
    const data = await axios({
      method: 'get',
      url: url,
    });
    if (typeof data.data !== "object") {
      return { data: "Intentional error", status: 500 };
    } else {
      return { data: data.data, status: data.status };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return { data: error.message, status: 500 };
    } else {
      console.log("unexpected error: ", error);
      return { data: "An unexpected error occured", status: 500 };
    }
  }
}

export async function memoryPostRequest(value: number) {
  let dataObject = { user: user, number: value}
  try {
    const res = await axios({
      method: 'post',
      data: dataObject,
      url: url,
    });
    if (typeof res.data !== "object") {
      return { data: "Intentional error", status: 500 };
    } else {
      return { data: res.data, status: res.status };
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return { data: error.message, status: 500 };
    } else {
      console.log("unexpected error: ", error);
      return { data: "An unexpected error occured", status: 500 };
    }
  }
}