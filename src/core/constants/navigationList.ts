interface ILinks {
  path: string;
  text: string;
}

export const linksList: ILinks[] = [
  { path: '/', text: 'Главная' },
  { path: '/aboutus', text: 'О нас' },
  { path: '/#check-pizza', text: 'Выбрать пиццу' },
  { path: '/payment', text: 'Оплата' },
  { path: '/delivery', text: 'Доставка' },
  { path: '/contacts', text: 'Контакты' },
];