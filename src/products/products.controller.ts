import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    // @Body() completeBody: { title: string; desc: string; price: number },
    @Body('title') productTitle: string,
    @Body('desc') productDesc: string,
    @Body('price') productPrice: number,
  ): any {
    const id = this.productsService.insertProduct(
      productTitle,
      productDesc,
      productPrice,
    );
    return { id };
  }

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body('title') productTitle: string,
    @Body('desc') productDesc: string,
    @Body('price') productPrice: number,
  ) {
    return this.productsService.updateProductById(
      id,
      productTitle,
      productDesc,
      productPrice,
    );
  }

  @Delete(':id')
  deleteProductById(@Param('id') id: string) {
    return this.productsService.deleteProductById(id);
  }
}
