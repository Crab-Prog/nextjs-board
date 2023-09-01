'use client'
import React from 'react';
import { Input } from '~/src/components/form/Input';
import { Button } from '~/src/components/form/Button';

const LoginForm = () => {
  return (
    <div className="mb-6 w-1/2 p-4 bg-gray-600 flex flex-col justify-center">
      <label
        htmlFor="default-input"
        className="block mb-2 text-lg font-medium  text-black text-center"
      >
        Identifiant
      </label>
      <input
        type="text"
        id="default-input"
        className="border  text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"

      />
      <label
        htmlFor="default-input"
        className="block mb-2 text-lg font-medium  text-black text-center"
      >
        Mot de passe
      </label>
      <input
        type="text"
        id="default-input"
        className="border mb-4 text-sm rounded-lg block w-full p-2.5 bg-gray-200 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"

      />
      <Button>Connexion</Button>
    </div>
  );
}
export default LoginForm;