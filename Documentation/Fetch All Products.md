import client from '@sanity/client';

const sanityClient = client({
  projectId: '<your_project_id>',
  dataset: 'production',
  apiVersion: '2021-03-25', // use a date before your latest dataset update
  useCdn: true,
});

async function getProducts() {
  const query = `*[_type == "product"]`;
  const products = await sanityClient.fetch(query);
  return products;
}
