'use strict';

var root = '/paymentrequest';

module.exports = {

  /*
  Create invoice
  */
  create: {
      method: 'post',
      endpoint: root,
      params: ['description', 'line_items', 'customer*', 'tax', 'amount*', 'currency',' due_date*', 'metadata', 'send_notification', 'draft', 'has_invoice', 'invoice_number']
    },

  /*
  View invoice
  */
  get: {
      method: 'get',
      endpoint: [root, '/{invoice_id_or_code}'].join(''),
      args: ['invoice_id_or_code']
  },

  /*
  List invoice
  */
  list: {
      method: 'get',
      endpoint: root
    },

  /*
  Update invoice
  */
  update: {
      method: 'put',
      endpoint: [root, '/{id_or_code}'].join(''),
      params: ['description', 'line_items', 'customer*', 'tax', 'amount*', 'currency',' due_date*', 'metadata', 'send_notification', 'draft', 'has_invoice', 'invoice_number'],
      args: ['id_or_code']
    }
};
