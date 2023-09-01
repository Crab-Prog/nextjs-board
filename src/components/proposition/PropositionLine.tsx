'use client'
import { UpVote } from './UpVote';
import { useRouter } from 'next/navigation';

type PropositionLineProps = {
  title: string;
  id: number;
  voteCount: number
  boardId: number
};

// @ts-ignore
export const Proposition = ({ title, id, voteCount, boardId }: PropositionLineProps) => {
  const router = useRouter();
  const propositionId = id;
  return (
    <div className="p-6 flex justify-between items-center rounded-lg shadow bg-gray-800 border-gray-700 gap-2 w-full">
      <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
      <UpVote voteCount={voteCount} propositionId={id} />
      <button
        onClick={async (e) => {
          e.preventDefault()
          await fetch(`/api/boards/${boardId}/${propositionId}/deleteboard`, {
            method: 'DELETE',
          }).then(() =>
            router.refresh());
        }}
      >Supprimer
      </button>
    </div>
  );
};
