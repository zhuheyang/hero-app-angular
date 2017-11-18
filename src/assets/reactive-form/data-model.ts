// Address与Hero类定义应用的数据模型(data model)
// heroesdata与states常量则提供测试数据
export class Herodata {
  id = 0;
  name = '';
  addresses: Address[];
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export const heroesdata: Herodata[] = [
  {
    id : 1,
    name: 'Whirwind',
    addresses: [
      {street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801'},
      {street: '456 Simple', city: 'Somewhere', state: 'VA', zip: '23226'},
    ]
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501'},
    ]
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: []
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];
