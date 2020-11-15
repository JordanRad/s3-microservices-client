import React from 'react';
import { render } from '@testing-library/react';
import ProductFragment from './components/fragments/ProductFragment';

test('renders available ProductFragment', () => {
  let item = {
    name:"TestProduct",
    description:"TestDescription",
    id:1,
    price:19.99,
    quantity:1
  };
  const { getByText } = render(<ProductFragment
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        key={item.id+100}
                        id={item.id}
                        available={item.quantity >= 1} />);
  const productName = getByText(/TestProduct/i);
  const productDescription = getByText(/TestDescription/i);
  const productId = getByText(/1/i);
  const productQuantity= getByText(/Available/i);
  expect(productName).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
  expect(productId).toBeInTheDocument();
  expect(productQuantity).toBeInTheDocument();
});

test('renders unavailable ProductFragment', () => {
  let item = {
    name:"TestProduct",
    description:"TestDescription",
    id:1,
    price:19.99,
    quantity:0
  };
  const { getByText } = render(<ProductFragment
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        key={item.id+100}
                        id={item.id}
                        available={item.quantity >= 1} />);
  const productName = getByText(/TestProduct/i);
  const productDescription = getByText(/TestDescription/i);
  const productId = getByText(/1/i);
  const productQuantity= getByText(/Available/i);
  expect(productName).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
  expect(productId).toBeInTheDocument();
  expect(productQuantity).toBeInTheDocument();
});
