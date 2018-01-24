import * as React from 'react';
import CoinOverviewList from '../../containers/CoinOverviewList';
import SelectedCoinList from '../../containers/SelectedCoinList';
import './Layout.css';

export interface LayoutProps {
}

export class Layout extends React.Component<LayoutProps, {}> {
    render() {
      return (
        <div className="container-fluid">
        <div className="hello">
          <header style={{ marginBottom: 10 }}>
            <h1 className="text-center">CRYPTO DASHBOARD</h1>
            <div className="row">
                <div className="col text-center">
                Written by <a className="link" href="https://akambi-fagbohoun.com">
               <img src="https://s2.coinmarketcap.com/static/cloud/img/twitter.png" alt="Twitter" />
               @afagbohoun</a>.
               Powered by <a target="_blank" href="https://www.gdax.com/">GDAX</a>.
                </div>
            </div>
          </header>
          <hr/>
          <div className="container select-container">
            <span style={{ fontSize: 18, fontFamily: 'Bungee' }}> Select your currency: </span>
            <div className="row">
              <div className="col-md-9 mx-auto">
                <CoinOverviewList />
              </div>
            </div>
          </div>
          <hr/>
          <div className="chart-body">
            <SelectedCoinList />
          </div>
        </div>
        </div>
      );
    }
}
