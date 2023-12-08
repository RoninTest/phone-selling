import {ProductModel} from "./product.model";

export class SimpleDataSourceModel {
  private products!: ProductModel[];

  constructor() {
    this.products = new Array<ProductModel>(
      new ProductModel(1, "Samsung S5", "Yenilenmiş Telefon", "1.jpg", 1250),
      new ProductModel(2, "Samsung S6", "Yenilenmiş Telefon", "1.jpg", 1250),
      new ProductModel(3, "Samsung S7", "Yenilenmiş Telefon", "1.jpg", 1250),
      new ProductModel(4, "Samsung S8", "Yenilenmiş Telefon", "1.jpg", 1250),
      new ProductModel(5, "Samsung S9", "Yenilenmiş Telefon", "1.jpg", 1250),
    );
  }

  getProduct(): ProductModel[] {
    return this.products;
  }
}
