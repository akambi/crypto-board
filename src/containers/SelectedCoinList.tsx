
import { connect, Dispatch } from 'react-redux';
import CoinChartContainer from '../components/CoinChart/index';
import { CoinAction } from '../actions/';
import { AppState, Coin } from '../types/index';

const getSelectedCoins = (coins: Coin[], selectedCoins: string[]) => {
  return coins.filter((coin) => (selectedCoins.indexOf(coin.id) !== -1));
};

export function mapStateToProps({ availableCoins, selectedCoins }: AppState) {
  return {
    coins: getSelectedCoins(availableCoins.items, selectedCoins)
  };
}

export function mapDispatchToProps(dispatch: Dispatch<CoinAction>): {} {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinChartContainer);
