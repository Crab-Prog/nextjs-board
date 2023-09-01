'use client'
import { Button } from '~/src/components/form/Button';
import { Input } from '~/src/components/form/Input';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const BoardForm = () => {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get('title'));
    console.log(title)
    fetch(`/api/boards`, {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
    }).then((res) => res.json())
      .then((data) => {
        //router.push('/')
        router.refresh();
      })
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/2  mb-8 bg-gray-800 p-2">
      <Input label="Ma question" name="title" />
      <Button type="submit">Ajouter</Button>
    </form>
  );
}
export default BoardForm;