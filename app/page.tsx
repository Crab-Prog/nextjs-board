import { prisma } from '~/src/db/prisma';
import { BoardCard } from '~/src/components/board/BoardCard';
import { Button } from '~/src/components/form/Bouton';
import BoardForm from '~/app/boards/new/BoardForm';

export default async function Home() {
  const boards = await prisma.board.findMany()
  return (
    <div className="flex flex-col">
      <h2 className="text-3xl mb-4">Créer une nouvelle question: </h2>
      <BoardForm />
      <hr className="my-8" />
      <h2 className="text-3xl mb-8">Les propositions des participants:</h2>
      <ul>
        {boards.map((board) => (<BoardCard key={board.id} board={board} />))}
      </ul>
    </div>);
}
