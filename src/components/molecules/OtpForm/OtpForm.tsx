'use client';
import React, { useState } from 'react';

import { Input, Button } from '@/components/atoms';

interface OtpFormData {
  otp: string;
}

interface IOtpForm {
  onVerifyOtp: (otp: string) => void;
  onResendOtp: () => void;
}

export const OtpForm: React.FC<IOtpForm> = ({ onVerifyOtp, onResendOtp }) => {
  const [formData, setFormData] = useState<OtpFormData>({ otp: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ otp: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onVerifyOtp(formData.otp);
  };

  return (
    <form onSubmit={handleSubmit} className="otpForm">
      <Input name="otp" placeholder="OTP" onChange={handleChange} />
      <Button type="submit" styleType="primary">
        Aceptar
      </Button>
      <Button type="button" styleType="secondary" onClick={onResendOtp}>
        Reenviar
      </Button>
    </form>
  );
};
