import { connect, Dispatch } from 'react-redux';
import { AppState } from '../types/index';
import { CoinAction } from '../actions/index';
import { toggleCoin } from '../actions/creators';
import CoinOverviewContainer from '../components/CoinOverview/index';

interface CoinOverviewFilterProps { id: string; name: string; }

const mapStateToProps = ({ availableCoins, selectedCoins }: AppState, ownProps: CoinOverviewFilterProps) => {
  return {
    id: ownProps.id,
    name: ownProps.name,
    selected: selectedCoins.indexOf(ownProps.id) !== -1
  };
};

const mapDispatchToProps = (dispatch: Dispatch<CoinAction>, ownProps: CoinOverviewFilterProps) => {
  return {
    onClick: () => dispatch(toggleCoin(ownProps.id)),
  };
};

const CoinOverviewFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinOverviewContainer);

export default CoinOverviewFilter;
