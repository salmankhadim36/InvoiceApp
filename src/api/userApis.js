import axios from 'axios';
import {
  CLIENT_ID,
  CLIENT_SECRET,
  TEST_USERNAME,
  TEST_PASSWORD,
  BASE_URL,
  GET_TOKEN,
  GET_INVOICES,
  ADD_INVOICE_JSON,
} from '../Constants/constants';
import {ShareData} from '../Constants/ShareData';
var qs = require('qs');

export const getUserToken = requestData => {
  const {onSuccess, onError} = requestData;
  var data = qs.stringify({
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    grant_type: 'password',
    scope: 'openid',
    username: TEST_USERNAME,
    password: TEST_PASSWORD,
  });
  var config = {
    method: 'post',
    url: BASE_URL + GET_TOKEN,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: data,
  };
  axios(config)
    .then(response => {
      if (response.status === 200) {
        ShareData.getInstance().setLoginData(response.data);
        onSuccess(response.data);
      } else onError(e);
    })
    .catch(e => {
      onError(e);
    });
};

export const getInvoices = (
  requestData = {onSuccess: d => {}, onError: d => {}},
) => {
  const {onSuccess, onError} = requestData;
  var config = {
    method: 'get',
    url:
      BASE_URL +
      GET_INVOICES +
      '?pageNum=1&pageSize=10&dateType=INVOICE_DATE&sortBy=CREATED_DATE&ordering=ASCENDING',
    headers: {
      Authorization: `Bearer ${ShareData.getInstance().accessToken}`,
    },
  };

  axios(config)
    .then(response => {
      onSuccess(response.data);
    })
    .catch(e => {
      onError(e);
    });
};

export const addInvoice = (
  requestData = {onSuccess: d => {}, onError: d => {}},
) => {
  const {onSuccess, onError, invoiceData} = requestData;

  let formData = ADD_INVOICE_JSON;
  formData.items[0] = {...formData.items[0], ...invoiceData};

  var data = JSON.stringify({
    listOfInvoices: [formData],
  });

  var config = {
    method: 'post',
    url: BASE_URL + '/invoice-service/2.0.0/invoices',
    headers: {
      Authorization: `Bearer ${ShareData.getInstance().accessToken}`,
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.status === 200) {
        onSuccess(response.data);
      } else onError();
    })
    .catch(function (error) {
      onError(error);
    });
};
