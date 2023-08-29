import { prisma } from '~/src/db/prisma';
import { BoardCard } from '~/src/components/board/BoardCard';
import { Button } from '~/src/components/form/Bouton';
import BoardForm from '~/app/boards/new/BoardForm';

export default async function Home() {
  const boards = await prisma.board.findMany()
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl">Board list</h1>
      {/*<Button as="a" href="/boards/new" className="self-end">*/}
      {/*  Create board*/}
      {/*</Button>*/}
      <BoardForm />
      <ul>
        {boards.map((board) => (<BoardCard key={board.id} board={board} />))}
      </ul>
    </div>);
}
