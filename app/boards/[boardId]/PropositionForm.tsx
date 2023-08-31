'use client'
import { Button } from '~/src/components/form/Bouton';
import { Input } from '~/src/components/form/Input';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

type PropositionFormProps = {
  boardId: number;
}
const PropositionForm = ({ boardId }: PropositionFormProps) => {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = String(formData.get('title'));

    fetch(`/api/boards/${boardId}/propositions`, {
      method: 'POST',
      body: JSON.stringify({
        title,
      }),
    }).then((res) => res.json())
      .then((data) => {
        router.refresh();
      })
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-1/2">
      <Input label="Ma proposition" name="title" />
      <Button type="submit">Ajouter une nouvelle proposition</Button>
    </form>
  );
}
export default PropositionForm;