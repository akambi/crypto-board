/*
import { CoinAction } from '../actions';
*/
import { combineReducers } from 'redux';
import availableCoins from './availableCoins';
import selectedCoins from './selectedCoins';
import { AppState } from '../types/index';

const coinApp = combineReducers<AppState>({
  availableCoins,
  selectedCoins
});

export default coinApp;
