import * as _ from "lodash";
import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { Card, Text, Overlay, List, ListItem } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { connect } from "react-redux";

class TradingInfo extends Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
          <TokenDropdown
              title="Base Token"
              tokens={this.props.baseTokens}
              token={this.props.baseToken}
              show={this.state.base}
              onPress={this.onPress("base")}
              onSelect={this.onSelect("base")} />
        </View>
      </View>
    );
  }
}

const styles = {
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  datum: {
    textAlign: "center",
    flex: 1
  },
  header: {
    textAlign: "center",
    color: "gray",
    flex: 1,
    fontSize: 10
  }
};

export default connect(state => ({ ...state.device.layout }), dispatch => ({ dispatch }))(TradingInfo);
