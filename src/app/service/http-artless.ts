import axios from "axios";

const BaseURL = axios.create({
    baseURL: "http://localhost:8889/artless"
    //baseURL: "http://api.stomach.com.br:8889/artless"
   });
   
export default BaseURL;

const getArtless = async () => await BaseURL.get("/all");

const getName = (id: any) => BaseURL.get("/name/" + id);

const postArtless = (obj: any[]) => BaseURL.post("/all", obj);

const postRange = (obj: any[]) => BaseURL.post("/range", obj);

export { getArtless, postArtless, getName, postRange };


