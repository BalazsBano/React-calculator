import axios from "axios";

const url: string = "http://localhost:4000/";
const user: number = 1;

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
  console.log('post', value)
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