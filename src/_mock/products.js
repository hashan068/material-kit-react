import { sample, faker } from 'lodash';
import { faker as fakerJs } from '@faker-js/faker';

const PRODUCT_NAME = [
  // ...
];

const PRODUCT_COLOR = [
  // ...
];

function getRandomColors(arr, count) {
  return arr.slice(0, count || arr.length);
}

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  const name = PRODUCT_NAME[index];
  const price = fakerJs.commerce.price();
  const priceSale = setIndex % 3 ? null : fakerJs.commerce.price({ min: price - 20, max: price - 10 });
  const colors = getRandomColors(PRODUCT_COLOR, setIndex === 4 ? 3 : undefined);
  const status = fakerJs.random.arrayElement(['sale', 'new', '', '']);

  return {
    id: fakerJs.string.uuid(),
    cover: `/assets/images/products/product_${setIndex}.jpg`,
    name,
    price,
    priceSale,
    colors,
    status: status === 'sale' && !priceSale ? null : status,
  };
});

export default products;
