import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Theme from '../../Constants/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/core';
import {ShareData} from '../../Constants/ShareData';
import {getInvoices} from '../../api/userApis';
import ListItem from '../../Component/ListItem';

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getInvoicesList();
  }, []);

  const getInvoicesList = () => {
    let requestData = {
      onSuccess: d => {
        setData(d.data);
      },
      onError: e => {},
    };
    getInvoices(requestData);
  };

  return (
    <SafeAreaView style={styles.container}>
     
      <TextInput
        value={search}
        style={styles.input}
        placeholder="Search"
        onChangeText={t => setSearch(t)}
      />
      <FlatList
        data={data.filter(itm => `${itm.referenceNo}`.includes(search))}
        renderItem={({item, index}) => <ListItem item={item} />}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() =>
          navigation.navigate('AddInvoice', {onGoBack: getInvoicesList})
        }>
        <Text style={styles.floatingText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.lightWhite,
  },
  floatingButton: {
    height: 70,
    width: 70,
    borderRadius: 100,
    backgroundColor: '#69003d',
    opacity: 0.95,
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  input: {
    borderWidth: 1,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 15,
  },
  floatingText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 7,
  },
});

export default HomeScreen;
