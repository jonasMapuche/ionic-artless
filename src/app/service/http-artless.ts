import axios from "axios";
import { Artless } from "../model/artless";

const BaseURL = axios.create({
    baseURL: "http://api.stomach.com.br:8889/artless",
   });
   
export default BaseURL;

const getArtless = () => BaseURL.get("/all");

const postArtless = (obj: any[]) => BaseURL.post("/all", obj);

export { getArtless, postArtless };


