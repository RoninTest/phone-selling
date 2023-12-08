import {SimpleDataSourceModel} from "./datasource.model";
import {ProductModel} from "./product.model";

export class RepoModel {
  private dataSource!: SimpleDataSourceModel;
  private products!: ProductModel[];

  constructor() {
    this.dataSource = new SimpleDataSourceModel();
    this.products = new Array<ProductModel>;
    this.dataSource.getProduct().forEach(m => this.products.push(m));
  }

}
