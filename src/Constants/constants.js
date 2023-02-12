export const BASE_URL = 'https://sandbox.101digital.io';

export const GET_TOKEN = '/token';
export const GET_INVOICES = '/invoice-service/1.0.0/invoices';

export const CLIENT_ID = 'oO8BMTesSg9Vl3_jAyKpbOd2fIEa';
export const CLIENT_SECRET = '0Exp4dwqmpON_ezyhfm0o_Xkowka';

export const TEST_USERNAME = 'dung+octopus4@101digital.io';
export const TEST_PASSWORD = 'Abc@123456';

export const COLORS = {
  primary: '#000',
  secondary: '#000',
  white: '#fff',
  gradiantBottom: '#00021f',
  textDiscription: '#5d607d',
  textDiscription: '#719ac0',
};

export const ADD_INVOICE_JSON = {
  bankAccount: {
    bankId: '',
    sortCode: '09-01-01',
    accountNumber: '12345678',
    accountName: 'John Terry',
  },
  customer: {
    firstName: 'Nguyen',
    lastName: 'Dung 2',
    contact: {
      email: 'nguyendung2@101digital.io',
      mobileNumber: '+6597594971',
    },
    addresses: [
      {
        premise: 'CT11',
        countryCode: 'VN',
        postcode: '1000',
        county: 'hoangmai',
        city: 'hanoi',
      },
    ],
  },
  documents: [
    {
      documentId: '96ea7d60-89ed-4c3b-811c-d2c61f5feab2',
      documentName: 'Bill',
      documentUrl: 'http://url.com/#123',
    },
  ],
  invoiceReference: '#123456',
  invoiceNumber: 'INV123456701',
  currency: 'GBP',
  invoiceDate: '2021-05-27',
  dueDate: '2021-06-04',
  description: 'Invoice is issued to Akila Jayasinghe',
  customFields: [
    {
      key: 'invoiceCustomField',
      value: 'value',
    },
  ],
  extensions: [
    {
      addDeduct: 'ADD',
      value: 10,
      type: 'PERCENTAGE',
      name: 'tax',
    },
    {
      addDeduct: 'DEDUCT',
      type: 'FIXED_VALUE',
      value: 10,
      name: 'discount',
    },
  ],
  items: [
    {
      itemReference: `INVC${Math.floor(Math.random() * 101)}${new Date().getTime()}`,
      description: 'kkjkjsnsn',
      quantity: 10,
      rate: 10,
      itemName: 'Honda Motor',
      itemUOM: 'KG',
      customFields: [
        {
          key: 'taxiationAndDiscounts_Name',
          value: 'VAT',
        },
      ],
      extensions: [
        {
          addDeduct: 'ADD',
          value: 10,
          type: 'FIXED_VALUE',
          name: 'tax',
        },
        {
          addDeduct: 'DEDUCT',
          value: 10,
          type: 'PERCENTAGE',
          name: 'tax',
        },
      ],
    },
  ],
};
