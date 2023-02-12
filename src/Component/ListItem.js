import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const ListItem = ({item}) => {
  const {referenceNo, numberOfDocuments, totalAmount, description} = item;
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{}}>
          <Text>Reference No.:</Text>
          <Text>Qty.:</Text>
          <Text>Amount.:</Text>
          <Text>Description.:</Text>
        </View>
        <View style={{flex: 1, marginStart: 10}}>
          <Text>{referenceNo}</Text>
          <Text>{numberOfDocuments}</Text>
          <Text>{totalAmount}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default ListItem;
