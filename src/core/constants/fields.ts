export interface IField {
  key: string;
  type: string;
  label: string;
  labelVisibility: boolean;
  marginRight: string;
  width: string;
  globalState: boolean;
}

export const searchField: IField = {
  key: 'search',
  type: 'text',
  label: 'Поиск',
  labelVisibility: false,
  marginRight: '10px',
  width: '100%',
  globalState: true,
};
