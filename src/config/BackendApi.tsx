import axios from 'axios';

const baseUrl = 'https://backend-practice.euriskomobility.me/';

const api = axios.create({
  baseURL: baseUrl,
});

export interface IUser {
  email: string;
  password: string;
}

export const loginUser = async ({email, password}: IUser) => {
  try {
    const user = {
      email: email,
      password: password,
    };
    const response = await api.post('/login', user);

    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const signUpUser = async ({email, password}: IUser) => {
  try {
    const user = {
      email: email,
      password: password,
    };
    const response = await api.post('/signup', user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
