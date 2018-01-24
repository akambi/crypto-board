
import { ProductInfo } from 'gdax';

export interface Coin extends ProductInfo { name: string; }

export interface AppState {
  availableCoins: {
    isFetching: boolean;
    items: Coin[];
  };
  selectedCoins: string[];
}

export interface GdaxProduct24HrStats {
  high: number;
  last: number;
  low: number;
  open: number;
  volume: number;
  volume_30day: number;
}

export interface GdaxCurrency {
  id: number;
  name: number;
}

export interface GdaxProduct24HrStatsWithName extends GdaxProduct24HrStats {
  id: string;
  name: string;
  selected: boolean;
}