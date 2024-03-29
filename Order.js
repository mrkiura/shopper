import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class OrderRow extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Text style={styles.orderText}>{this.props.order.description}</Text>
        <Text>{this.props.order.quantity}</Text>
        <Text>{this.props.order.unitOfMeasure}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  orderText: {
    fontSize: 20,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#E7E7E7',
    padding: 12,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
});

OrderRow.propTypes = {
  order: React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    quantity: React.PropTypes.string.isRequired,
    unitOfMeasure: React.PropTypes.string.isRequired
  }),
};
