import { PublicClient } from 'gdax';

const publicClient = new PublicClient();

export class GdaxService {    

  getProductTicker(productId: string) {
    return publicClient.getProductTicker(productId);
  }

  getProduct24HrStats(productId: string) {
    return publicClient.getProduct24HrStats(productId);
  }

  getProducts() {
    return publicClient.getProducts();
  }

  getCurrencies() {
    return publicClient.getCurrencies();
  }

  getProductTrades(productId: string) {
    return publicClient.getProductTrades(productId);
  }

  getProductHistoricRates(productId: string, granularity: number) {
    return publicClient.getProductHistoricRates(productId, {granularity});
  }
}
