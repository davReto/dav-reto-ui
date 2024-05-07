import { msApiLogin } from '../msApiLogin';
import { ILoginBody, IResponseUser } from './login.interface';

export const sendLogin = async (body: ILoginBody) => {
  try {
    const { data } = await msApiLogin().post<IResponseUser>('/login', body);
    return data;
  } catch (errorApi) {
    throw new Error('Error in login', errorApi as Error);
  }
};
