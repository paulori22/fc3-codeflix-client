'use client';
import React from 'react';

type AuthFormProps = {
  formType: 'login' | 'register';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const AuthForm: React.FC = () => {
  return <div></div>;
};
