export default {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    { name: 'orderId', type: 'string', title: 'Order ID' },
    { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
    { name: 'products', type: 'array', title: 'Products', of: [{ type: 'reference', to: [{ type: 'product' }] }] },
    { name: 'totalPrice', type: 'number', title: 'Total Price' },
    { name: 'status', type: 'string', title: 'Order Status', options: { list: ['Pending', 'Processing', 'Completed', 'Cancelled'] } },
    { name: 'paymentMethod', type: 'string', title: 'Payment Method' },
    { name: 'createdAt', type: 'datetime', title: 'Order Date' },
  ],
};
