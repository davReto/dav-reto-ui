'use client';
import { sendLogin } from '@/apis';
import { Input, Button } from '@/components/atoms';
import React, { useState } from 'react';

interface FormData {
  usuario: string;
  clave: string;
}

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    usuario: '',
    clave: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    sendLogin({
      password: formData.clave,
      userName: formData.usuario,
    });
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
