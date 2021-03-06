import { assetDataUtils } from '0x.js';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as AssetService from '../../services/AssetService';
import * as WalletService from '../../services/WalletService';

export default class TokenLockByAssetData extends Component {
  static propTypes = {
    assetData: PropTypes.string.isRequired
  };

  static defaultProps = {
    showSymbol: true
  };

  render() {
    const { assetData } = this.props;
    const asset =
      assetData !== null
        ? AssetService.findAssetByData(assetData)
        : AssetService.getWETHAsset();

    if (!asset) {
      return <Icon color="white" {...this.props} name="lock" size={20} />;
    }

    const isUnlocked = WalletService.isUnlockedByAddress(
      assetDataUtils.decodeERC20AssetData(asset.assetData).tokenAddress
    );

    if (isUnlocked) {
      return <Icon color="white" {...this.props} name="unlock" size={20} />;
    } else {
      return <Icon color="white" {...this.props} name="lock" size={20} />;
    }
  }
}
