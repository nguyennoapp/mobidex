import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { colors } from '../../styles';

export default class PageRoot extends Component {
  render() {
    let { style } = this.props;
    return (
      <SafeAreaView
        {...this.props}
        style={[
          {
            backgroundColor: colors.background,
            height: '100%',
            width: '100%'
          },
          style
        ]}
      >
        {this.props.children}
      </SafeAreaView>
    );
  }
}
