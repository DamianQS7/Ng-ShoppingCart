export interface Theme {
  image: string;
  bgColor: string;
  btnColor: string;
  navColor: string;
}

export type DatabaseItems = [string, {item: string; category: Category}][];
export type Category = 'groceries' | 'veggies' | 'pharmacy';