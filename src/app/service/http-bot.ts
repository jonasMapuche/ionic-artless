import axios from "axios";
import { Artless } from "../model/artless";

const BaseURL = axios.create({
    baseURL: "http://api.stomach.com.br:8885",
   });
   
export default BaseURL;

const getBot = () => BaseURL.get("/");

const postBot = (obj: any[]) => BaseURL.post("/", obj);

const postBotGo = (obj: any[]) => BaseURL.post("/Go", obj);

export { getBot, postBot, postBotGo };

