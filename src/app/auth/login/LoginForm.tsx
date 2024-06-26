'use client';
import React, { useState } from 'react';
import { AuthForm } from '@/components/AuthForm';
import { useRouter } from 'next/router';

type ServerError = {
  message: string;
};

export default function LoginForm() {
  const route = useRouter();
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log('submit');
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        route.push('/');
        return;
      }

      const payload: ServerError[] = await response.json();
      setErrors(payload.map((error) => error.message));
    } catch (error) {
      console.error(error);
      setErrors(['n unkown error occurred']);
    }
  };
  return <AuthForm formType='login' onSubmit={handleSubmit} />;
}
