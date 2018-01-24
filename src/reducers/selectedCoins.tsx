import { CoinAction } from '../actions';
import { TOGGLE_COIN } from '../constants/index';

const toggleCoin = (prevSselectedCoins: string[], toggledCoinId: string) => {
  const index = prevSselectedCoins.indexOf(toggledCoinId);
  if (index > -1) {
    prevSselectedCoins.splice(index, 1);    
  } else {
    prevSselectedCoins.push(toggledCoinId);
  }
  return [ ...prevSselectedCoins ];
};

const selectedCoins = (state = [], action: CoinAction) => {
  switch (action.type) {
    case TOGGLE_COIN:
      return toggleCoin(state, action.coinId);
    default:
      return state;
  }
};

export default selectedCoins;
