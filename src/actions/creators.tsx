import { ToggleCoin, RequestAvailableCoins, ReceiveAvailableCoins, CoinAction } from './index';
import { Coin } from '../types/index';
import { keyBy } from 'lodash';
import { VALID_CURRENCIES } from '../constants/index';
import { CurrencyInfo, ProductInfo } from 'gdax';
import { GdaxService }  from '../services/GdaxService';
import * as constants from '../constants';
import { Dispatch } from 'react-redux';

export const toggleCoin = (coinId: string): ToggleCoin => {
    return {
        type: constants.TOGGLE_COIN,
        coinId
    };
};

function requestAvailableCoins(): RequestAvailableCoins {
  return { type: constants.REQUEST_AVAILABLE_COINS };
}

function receiveAvailableCoins(coins: Array<Coin>): ReceiveAvailableCoins {
  return {
    type: constants.RECEIVE_AVAILABLE_COINS,
    coins,
    receivedAt: Date.now()
  };
}

const mapToCoins = (currencies: CurrencyInfo[], products: ProductInfo[]): Coin[] => {
    const currenciesById = keyBy(currencies, 'id');
    return products.map(product => ({
        ...product,
        name: currenciesById[product.base_currency].name
    }));
};

const gdaxService = new GdaxService();

export function fetchAvailableCoins() {
  return (dispatch: Dispatch<CoinAction>) => {
    dispatch(requestAvailableCoins());

    return Promise.all([
      gdaxService.getCurrencies() as Promise<CurrencyInfo[]>,
      gdaxService.getProducts() as Promise<ProductInfo[]>
    ]).then(([currencies, products]) => {
      const coins: Array<Coin> = mapToCoins(
        currencies.filter((currency: CurrencyInfo) => (VALID_CURRENCIES.indexOf(currency.id) !== -1)),
        products.filter((product: ProductInfo) => (VALID_CURRENCIES.indexOf(product.base_currency) !== -1)
                                                  && product.quote_currency === constants.DEFAULT_QUOTE_CURRENCY)
      );

      dispatch(receiveAvailableCoins(coins));
      dispatch(toggleCoin(coins[0].id));

    })
    .catch(error => window.console.log(error.message));
  };
}
