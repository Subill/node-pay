'use strict';

var root = '/refund';

module.exports = {

  /*
  Create Refund
  */
  create: {
      method: 'post',
      endpoint: root,
      params: ['transaction*', 'amount', 'currency', 'customer_note', 'merchant_note']
    },

  /*
  List refund
  */
  disable: {
      method: 'get',
      endpoint: root,
      params: ['reference', 'currency']
    },

  /*
  Get refund
  */
  get: {
      method: 'get',
      endpoint: [root, '/{TRANS_ID}'].join(''),
      args: ['TRANS_ID']
  },

};
