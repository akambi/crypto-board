import { CoinAction } from '../actions';
import { REQUEST_AVAILABLE_COINS, RECEIVE_AVAILABLE_COINS } from '../constants/index';

const availableCoins = (
  state = {
    isFetching: false,
    items: []
  },
  action: CoinAction) => {
  switch (action.type) {
    case REQUEST_AVAILABLE_COINS:
      return { ...state, isFetching: true };
    case RECEIVE_AVAILABLE_COINS:
      return {
        ...state,
        ...{
          isFetching: false,
          items: action.coins,
          lastUpdated: action.receivedAt
        }
      };
    default:
      return state;
  }
};

export default availableCoins;
