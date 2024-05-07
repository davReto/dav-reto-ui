export interface ILoginBody {
  userName: string;
  password: string;
}

export interface IResponseUser {
  id: string;
  name: string;
  typeIdentification: string;
  numberIdentification: string;
  otp: string;
  product: Product;
  word: Word;
}

export interface Product {
  id: string;
  numberProduct: string;
  numberIdentification: string;
}

export interface Word {
  id: string;
  word: string;
  phrase: string;
  key: string;
}
