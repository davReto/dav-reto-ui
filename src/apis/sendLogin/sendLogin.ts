import { msApiLogin } from '../msApiLogin';

export interface ILoginBody {
  userName: string;
  password: string;
}

export const sendLogin = async (body: ILoginBody) => {
  try {
    const { data } = await msApiLogin().post<boolean>('/login', body);
    return data;
  } catch (errorApi) {
    throw new Error('Error in login', errorApi as Error);
  }
};
