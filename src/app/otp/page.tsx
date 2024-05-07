'use client';
import { OtpForm } from '@/components/molecules/OtpForm/OtpForm';

export default function OtpPage() {
  const onVerifyOtp = (otp: string) => {
    console.log('Verifying OTP:', otp);
  };

  const onResendOtp = () => {
    console.log('Resending OTP');
  };
  return (
    <main>
      <div>
        <OtpForm onVerifyOtp={onVerifyOtp} onResendOtp={onResendOtp} />
      </div>
    </main>
  );
}
