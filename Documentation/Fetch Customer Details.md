const query = `*[_type == "customer" && email == $email] {
  name, email, phone, loyaltyPoints, orderHistory
}`;
const params = { email: 'customer@example.com' };
const customer = await sanityClient.fetch(query, params);
