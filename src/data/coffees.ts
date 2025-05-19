import { Coffee } from '../types';

export const coffees: Coffee[] = [
  {
    id: '1',
    name: 'Ethiopian Yirgacheffe',
    origin: 'Yirgacheffe, Ethiopia',
    description: 'Sourced from the highlands of Ethiopia, this coffee offers bright acidity with floral and citrus notes. The beans are carefully hand-picked by local farmers who have perfected their craft over generations.',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4820714/pexels-photo-4820714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    roastLevel: 'Light',
    flavor: ['Floral', 'Citrus', 'Honey']
  },
  {
    id: '2',
    name: 'Colombian Supremo',
    origin: 'Huila, Colombia',
    description: 'Grown in the rich volcanic soils of Colombia\'s Huila region, this coffee presents a perfect balance of sweetness and acidity. Each cup delivers caramel and nutty undertones with a smooth, clean finish.',
    price: 16.99,
    image: 'https://images.pexels.com/photos/2074122/pexels-photo-2074122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    roastLevel: 'Medium',
    flavor: ['Caramel', 'Nutty', 'Chocolate']
  },
  {
    id: '3',
    name: 'Sumatra Mandheling',
    origin: 'Sumatra, Indonesia',
    description: 'This extraordinary coffee from the western shores of Sumatra is known for its full body and earthy profile. The traditional wet-hulling process creates a uniquely rich taste with herbaceous and woody notes.',
    price: 19.99,
    image: 'https://images.pexels.com/photos/7429347/pexels-photo-7429347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    roastLevel: 'Dark',
    flavor: ['Earthy', 'Herbal', 'Spicy']
  },
  {
    id: '4',
    name: 'Costa Rica Tarrazu',
    origin: 'Tarrazu, Costa Rica',
    description: 'Cultivated in Costa Rica\'s premier coffee-growing region, these beans are grown at high altitudes to develop complex flavors. Expect bright acidity, a medium body, and delightful notes of ripe fruit and honey.',
    price: 17.99,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    roastLevel: 'Medium',
    flavor: ['Fruity', 'Honey', 'Brown Sugar']
  },
  {
    id: '5',
    name: 'Jamaican Blue Mountain',
    origin: 'Blue Mountains, Jamaica',
    description: 'One of the world\'s most sought-after coffees, grown in Jamaica\'s misty Blue Mountains. This exceptional coffee offers remarkable smoothness with minimal bitterness and delicate floral and nutty undertones.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/7429366/pexels-photo-7429366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    roastLevel: 'Medium-Dark',
    flavor: ['Floral', 'Nutty', 'Sweet']
  }
];