import { ofetch } from "ofetch";

const instance = (function () {
  const fetcher = ofetch.create({
    baseURL: "https://fakestoreapi.com",
  });

  return fetcher;
})();

export default instance;
