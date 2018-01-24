import * as React from 'react';
import CoinChart from './CoinChart'; // <-- that's the presentational component
import { Coin } from '../../types/index';
import { GdaxService } from '../../services/GdaxService';

interface CoinChartProps {
  coins: Coin[];
}

const gdaxService = new GdaxService();

export default class CoinChartContainer extends React.Component<CoinChartProps, { name: string;
   seriesOptions: { name?: string; data: number[][] }[] }> {
  constructor(props: CoinChartProps) {
    super(props);
  }

  render() {
    return <CoinChart {...this.state} />;
  }

  componentWillReceiveProps(nextProps: CoinChartProps) {
    this.initCoinData(nextProps);
  }

  componentDidMount() {
    this.initCoinData();
  }

  initCoinData(nextProps?: CoinChartProps) {
    nextProps = nextProps || this.props;
    if (!nextProps.coins || !nextProps.coins.length) {
      this.setState({
        name: '',
        seriesOptions: []
      });
      return;
    }

    Promise.all(nextProps.coins.map(coin => gdaxService.getProductHistoricRates(coin.id, 3600)
      .then(historicRates => ({
        name: coin.name, 
        data: historicRates.map(historicRate => [historicRate[0], historicRate[4]])
      }))
    )).then(allHistoricRates => {
        this.setState(() => ({
          seriesOptions: allHistoricRates,
          name: allHistoricRates.map(historicRate => historicRate.name).join(' vs ')
        }));
    })
    .catch(error => window.console.log(error.message));
  }
}
