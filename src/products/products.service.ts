import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
  products: Product[] = [];

  insertProduct = (title: string, desc: string, price: number) => {
    const prodId = Math.floor(Math.random() * 100).toString();
    const newProduct = new Product(prodId, title, desc, price);
    this.products.push(newProduct);
    return prodId;
  };

  getProducts = () => {
    return [...this.products];
  };

  getProductById = (id: string) => {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return { ...product };
  };

  updateProductById = (
    id: string,
    title: string,
    desc: string,
    price: number,
  ) => {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex < 0) {
      throw new NotFoundException('Could not find product');
    }
    const updatedDetails = this.products[productIndex];
    if (title) {
      updatedDetails.title = title;
    }
    if (desc) {
      updatedDetails.desc = desc;
    }
    if (price && price > 0) {
      updatedDetails.price = price;
    }
    this.products.splice(productIndex, 1, {
      ...updatedDetails,
    });
    return this.products[productIndex];
  };

  deleteProductById = (id: string) => {
    const productIndex = this.products.findIndex((item) => item.id === id);
    if (productIndex < 0) {
      throw new NotFoundException('Could not find product');
    }
    this.products.splice(productIndex, 1);
    return null;
  };
}
