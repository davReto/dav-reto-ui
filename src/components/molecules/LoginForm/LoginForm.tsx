'use client';
import { sendLogin } from '@/apis';
import { IResponseUser } from '@/apis/sendLogin/login.interface';
import { Input, Button } from '@/components/atoms';

import React, { useState } from 'react';

interface FormData {
  usuario: string;
  clave: string;
}

interface ILoginForm {
  getUser: (user: IResponseUser) => void;
}

export const LoginForm: React.FC<ILoginForm> = ({ getUser }) => {
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
    clave: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    const reponse = await sendLogin({
      password: formData.clave,
      userName: formData.usuario,
    });
    getUser(reponse);
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <Input name="usuario" placeholder="Usuario" onChange={handleChange} />
      <Input
        type="password"
        name="clave"
        placeholder="Clave"
        onChange={handleChange}
      />
      <Button type="submit" styleType="primary">
        Aceptar
      </Button>
      <Button
        type="button"
        styleType="secondary"
        onClick={() => console.log('Cancelled')}
      >
        Cancelar
      </Button>
    </form>
  );
};
