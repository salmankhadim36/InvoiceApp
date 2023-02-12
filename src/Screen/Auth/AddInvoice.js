import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Theme from '../../Constants/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/core';
import {addInvoice} from '../../api/userApis';

const AddInvoice = ({navigation, route}) => {
  const isFocused = useIsFocused();
  const [referenceNo, setReferenceNo] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    refreshForm();
    return route.params.onGoBack;
  }, []);

  const refreshForm = () => {
    setReferenceNo(generateRandomRefNo());
    setQuantity('0');
    setAmount('0');
    setDescription('');
  };

  const generateRandomRefNo = () =>
    `INVC${Math.floor(Math.random() * 101)}${new Date().getTime()}`;

  const onAddPress = () => {
    let requestData = {
      onSuccess: d => {
        alert('Invoice Added Successfully');
        refreshForm();
      },
      onError: e => {
        alert('Failed to add invoice, try again later.');
      },
      invoiceData: {
        itemReference: referenceNo,
        description: description,
        quantity: parseInt(quantity),
        rate: parseInt(amount),
      },
    };
    addInvoice(requestData);
  };

  return (
    <SafeAreaView style={styles.container}>
       <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Image
          style={{height: 30, width: 30}}
          source={require('../../assets/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.inputTitle}>Reference No.</Text>
      <TextInput
        value={referenceNo}
        style={{...styles.input, backgroundColor: 'rgba(0,0,0,0.1)'}}
        editable={false}
        onChangeText={t => setReferenceNo(t)}
      />
      <Text style={styles.inputTitle}>Quantity</Text>
      <TextInput
        value={quantity}
        style={styles.input}
        keyboardType={'numeric'}
        selectTextOnFocus={true}
        onChangeText={t => setQuantity(t)}
      />
      <Text style={styles.inputTitle}>Amount</Text>
      <TextInput
        value={amount}
        style={styles.input}
        keyboardType={'numeric'}
        selectTextOnFocus={true}
        onChangeText={t => setAmount(t)}
      />
      <Text style={styles.inputTitle}>Description</Text>
      <TextInput
        multiline
        value={description}
        style={[styles.input, {height: 85}]}
        onChangeText={t => setDescription(t)}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={onAddPress}>
        <Text style={styles.btnText}>ADD</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.lightWhite,
  },
  backButton: {
    height: 40,
    width: 40,
    marginStart: 10,
    borderRadius: 100,
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
  inputTitle: {marginStart: 10, marginBottom: 2, marginTop: 10},
  btnAdd: {
    height: 50,
    // width: 70,
    borderRadius: 10,
    backgroundColor: '#69003d',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddInvoice;
