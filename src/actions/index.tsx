import * as constants from '../constants';
import { Coin } from '../types/index';

// UI Actions
export interface ToggleCoin {
    type: constants.TOGGLE_COIN;
    coinId: string;
}

// App Actions
export interface FetchAvailableCoins {
    type: constants.FETCH_AVAILABLE_COINS;
}

export interface RequestAvailableCoins {
    type: constants.REQUEST_AVAILABLE_COINS;
}

export interface ReceiveAvailableCoins {
    type: constants.RECEIVE_AVAILABLE_COINS;
    coins: Array<Coin>;
    receivedAt: Number;
}

export type CoinAction = ToggleCoin | FetchAvailableCoins | RequestAvailableCoins | ReceiveAvailableCoins;
