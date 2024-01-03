import axios from "axios";

const BaseUrl = "https://issa-backend.vercel.app/api/v1/";

export const getTopBanner = async () => {
  try {
    const res = await axios.get(`${BaseUrl}Banner/getTopBanner`);
  } catch (error) {
    console.log(error);
  }
};
