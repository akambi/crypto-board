import * as React from 'react';
import CoinOverviewFilter from '../../containers/CoinOverviewFilter';
import { Coin } from '../../types/index';

const CoinOverviewListContainer = ({ coins }: { coins: Array<Coin>}) => (
  <div className="row coin-list">
      {coins.map((coin, i) =>
        <CoinOverviewFilter key={'coin-' + i} id={coin.id} name={coin.name} />
      )}
  </div>
);

export default CoinOverviewListContainer;
