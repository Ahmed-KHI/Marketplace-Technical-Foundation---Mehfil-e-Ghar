export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    { name: 'name', type: 'string', title: 'Product Name' },
    { name: 'price', type: 'number', title: 'Price' },
    { name: 'material', type: 'string', title: 'Material' },
    { name: 'dimensions', type: 'string', title: 'Dimensions' },
    { name: 'image', type: 'image', title: 'Product Image' },
    { name: 'stock', type: 'number', title: 'Stock Quantity' },
    {
      name: 'customizationOptions',
      type: 'array',
      title: 'Customization Options',
      of: [{ type: 'string' }],
    },
    { name: 'leasingAvailability', type: 'boolean', title: 'Available for Leasing' },
    { name: 'category', type: 'string', title: 'Category' },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'arModelUrl', type: 'url', title: 'AR Model URL' }, // For AR integration
  ],
};
