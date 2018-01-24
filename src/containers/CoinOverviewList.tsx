import { connect, Dispatch } from 'react-redux';
import { AppState } from '../types/index';
import { CoinAction } from '../actions';
import CoinOverviewListContainer from '../components/CoinOverviewList/index';

const mapStateToProps = ({ availableCoins, selectedCoins }: AppState) => {
  return {
    coins: [...availableCoins.items]
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CoinAction>) => {
  return {};
};

const CoinOverviewList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinOverviewListContainer);

export default CoinOverviewList;
