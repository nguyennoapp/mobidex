import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState = {
  network: 1,
  // ethereumNodeEndpoint: 'http://mobidex.io:8545',
  ethereumNodeEndpoint:
    'https://mainnet.infura.io/v3/9c07eacbc58e42fa9a5b5b19d8992787',
  // ethereumNodeEndpoint: 'http://mobidex.io:9545',
  // ethereumNodeEndpoint: 'https://kovan.infura.io/',
  relayerEndpoint: 'https://mobidex.io/relayer/v2',
  // relayerEndpoint: 'https://mobidex.io:8443/relayer/v2',
  // relayerEndpoint: 'https://mobidex.io:9443/relayer/v2',
  relayerWSS: 'wss://mobidex.io/relayer/v2/',
  inf0xEndpoint: 'https://mobidex.io/inf0x/2.0/',
  // inf0xEndpoint: 'https://mobidex.io:8443/inf0x',
  // inf0xEndpoint: 'https://mobidex.io:9443/inf0x',
  inf0xWSS: 'wss://mobidex.io/inf0x/2.0/',
  forexCurrency: 'USD',
  quoteSymbol: 'WETH',
  feeSymbol: 'ZRX',
  showForexPrices: false,
  gasPrice: 3000000000,
  gasLimit: 8000029000,
  minimumBalance: 10 ** 16
};

export default handleActions(
  {
    [Actions.TOGGLE_SHOW_FOREX]: state => {
      return { ...state, showForexPrices: !state.showForexPrices };
    },
    [Actions.SET_FOREX_CURRENCY]: (state, action) => {
      return { ...state, forexCurrency: action.payload };
    },
    [Actions.SET_NETWORK]: (state, action) => {
      return { ...state, network: action.payload };
    }
  },
  initialState
);
