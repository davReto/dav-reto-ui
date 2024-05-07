'use client';
import { IResponseUser } from '@/apis/sendLogin/login.interface';
import { LoginForm } from '@/components/molecules';

export default function OtpPage() {
  const getUser = (user: IResponseUser) => {
    console.log(user);
  };
  return (
    <main>
      <div>
        <LoginForm getUser={getUser} />
      </div>
    </main>
  );
}
