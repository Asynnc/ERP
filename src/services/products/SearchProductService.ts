import { getRepository } from "typeorm";
import { Product } from "../../models/Product";

class SearchProductsService {

  public async search(): Promise<Product[]> {

    const productRepository = getRepository(Product);

    const products = await productRepository.find();

    return products;
  }
}

export { SearchProductsService }
