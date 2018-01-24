import * as React from 'react';
import { GdaxProduct24HrStatsWithName } from '../../types/index';
import './CoinOverview.css';
import { ToggleCoin } from '../../actions/index';

const formatNumber = (value: number) => {
  return Number(value).toFixed(2);
};

interface CoinOverviewProps extends GdaxProduct24HrStatsWithName {
  onclick: () => ToggleCoin;
}

export default function CoinOverview(
  { id, name, selected, high, last, low, open, volume, volume_30day, onclick }: CoinOverviewProps
   ) {
  const priceMove = ((Number(last) - Number(open)) * 100) / Number(open);

  return (
    <div className="col-sm mx-auto">
      <div className={'card coin-box' + (selected === true ? ' card-outline-primary' : '')} onClick={onclick}>
      <h4 className="coin-title">
        <span className="coin-name text-uppercase">{name}</span>
        <small className="coin-move">
          <span className="percent-move">{formatNumber(priceMove)}%</span>
          <span className="indicator">
            <i className={'fa ' + (priceMove < 0 ? 'fa-caret-down text-danger' : 'fa-caret-up text-success')} />
          </span>
        </small>
        <span className="latest-price pull-right"><span className="symbol">$</span>{formatNumber(last)}</span>
      </h4>

      <div className="stats"><i className="fa fa-history" /> Today's stats<br/>
      <ul className="stats-24h">
        <li>
          <span className="open-price">Open<br/>${formatNumber(open)}</span>
        </li>
        <li>
          <span className="high-price">High<br/>${formatNumber(high)}</span>
        </li>
        <li>
          <span className="low-price">Low<br/>${formatNumber(low)}</span>
        </li>
      </ul>
      </div>
      <p className="volume-24h">
        <small>VOLUME 24h</small><span className="font-weight-bold pull-right"><b>{formatNumber(volume)}</b></span>
      </p>
      <p className="volume-30d">
        <small>VOLUME 30d</small><span className="font-weight-bold pull-right">{formatNumber(volume_30day)}</span>
      </p>
      </div>
    </div>
  );
}
