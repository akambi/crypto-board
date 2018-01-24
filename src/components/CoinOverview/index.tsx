import * as React from 'react';
import { GdaxService }  from '../../services/GdaxService';
import CoinOverview from './CoinOverview'; // <-- that's the presentational component
import { GdaxProduct24HrStatsWithName } from '../../types/index';
import { ToggleCoin } from '../../actions/index';

const gdaxService = new GdaxService();

interface CoinOverviewContainerProps {
  id: string;
  name: string;
  selected: boolean;
  onClick: () => ToggleCoin;
}

export default class CoinOverviewContainer extends React.Component<CoinOverviewContainerProps,
   GdaxProduct24HrStatsWithName> {
  constructor(props: CoinOverviewContainerProps) {
    super(props);
  }

  render() {
    return this.state ? 
        <CoinOverview {...this.state} onclick={this.props.onClick} /> : '';
  }

  componentDidMount() {
    this.initCoinData();
  }

  componentWillReceiveProps() {
    this.initCoinData();
  }

  initCoinData() {
    gdaxService.getProduct24HrStats(this.props.id).then(product => {
        this.setState(() => ({
          ...product,
          id: this.props.id,
          name: this.props.name,
          selected: this.props.selected
        }));
    })
    .catch(error => window.console.log(error.message));
  }
}
