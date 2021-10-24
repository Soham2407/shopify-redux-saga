import axios from "axios";

export const getProducts = async () => {
  const response = await axios
    .get("https://fakestoreapi.com/products")
    .then((err) => err);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((err) => err);
  return response.data;
};
