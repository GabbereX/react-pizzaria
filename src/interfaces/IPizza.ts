export interface IPizza {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  types: Array<number>;
  sizes: Array<number>;
  prise: number;
  category: number;
  rating: number;
}
