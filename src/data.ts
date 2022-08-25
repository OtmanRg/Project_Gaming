import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Kingdom Home',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy'],
    stars: 4.5,
    imageUrl: 'assets/1.jpg',
    tags: ['Play'],
  },
  {
    id:'2',
    name: 'Sea of Thieves',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: ['persia', 'middle east', 'china'],
    stars: 4.7,
    imageUrl: 'assets/2.jpg',
    tags: ['Play'],
  },
  {
    id:'3',
    name: 'Assassin Creed',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/3.jpg',
    tags: ['Strategy'],
  },
  {
    id:'4',
    name: 'GTA',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/4.jpg',
    tags: ['Industry'],
  },
  {
    id:'5',
    name: 'Fatal Bullet',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india', 'asia'],
    stars: 3.0,
    imageUrl: 'assets/6.jpg',
    tags: ['Strategy'],
  },
  {
    id:'6',
    name: 'Call of Duty',
    price: 9,
    cookTime: '40-50',
    favorite: false,
    origins: ['italy'],
    stars: 4.0,
    imageUrl: 'assets/7.jpeg',
    tags: ['FightGame'],
  },
  {
    id:'7',
    name: 'Rad Rodgers',
    price: 12,
    cookTime: '20-30',
    favorite: false,
    origins: ['Indian'],
    stars: 4.0,
    imageUrl: 'assets/8.jpg',
    tags: ['FightGame','Industry'],
  },
  {
    id:'8',
    name: 'Nintendo',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['indian'],
    stars: 4.0,
    imageUrl: 'assets/9.jpeg',
    tags: ['Apstore','FightGame'],
  },
  {
    id:'9',
    name: 'Play 5',
    price: 12,
    cookTime: '20-30',
    favorite: false,
    origins: ['Indian'],
    stars: 4.0,
    imageUrl: 'assets/5.jpeg',
    tags: ['Play'],
  },
  {
    id:'10',
    name: 'Control',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['indian'],
    stars: 4.0,
    imageUrl: 'assets/10.jpg',
    tags: ['Play'],
  },
  {
    id:'11',
    name: 'Minimilitia',
    price: 9,
    cookTime: '45-50',
    favorite: false,
    origins: ['indian'],
    stars: 4.0,
    imageUrl: 'assets/11.jpeg',
    tags: ['Apstore'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 11 },
  { name: 'Play', count: 4 },
  { name: 'Apstore', count: 3 },
  { name: 'FightGame', count: 3 },
  { name: 'Industry', count: 2 },
  { name: 'Strategy', count: 2 },

]