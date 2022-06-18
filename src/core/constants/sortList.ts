interface ISortList {
  text: string;
  param: string;
}

export const sortList: ISortList[] = [
  {
    text: 'популярности',
    param: 'rating',
  },
  {
    text: 'цене',
    param: 'price',
  },
  {
    text: 'алфавиту',
    param: 'title',
  },
];
