import {environment} from '../../environments/environment.development';

const domain = environment.Domain;

export const API_URL ={
  login: `${domain}Auth/login`,
  register: `${domain}Auth/register`,
  GetProducts: `${domain}Product/GetAllProduct`,
  CreateProduct: `${domain}Product/AddProduct`,
  DeleteProduct: `${domain}Product/DeleteProduct`,
  EditProduct: `${domain}Product/UpdateProduct`,
  GetProductById  : `${domain}Product/GetProductById`,
}
