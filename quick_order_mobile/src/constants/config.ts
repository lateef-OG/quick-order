import Constants from "expo-constants";

const ip = Constants.expoConfig?.hostUri?.split(":").shift();
export const BASE_URL = `http://${ip}:5001/api`;
