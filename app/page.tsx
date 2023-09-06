import { prisma } from '~/src/db/prisma';
import { BoardCard } from '~/src/components/board/BoardCard';
import BoardForm from '~/app/boards/new/BoardForm';
import { GET } from '~/src/api/apiService';

type Category = {
  id: number;
  name: string;
}
export default async function Home() {
  const boards = await prisma.board.findMany();
  const data = await GET();

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl mb-4">Créer une nouvelle question: </h2>
      <BoardForm />
      <hr className="my-8" />
      <h2 className="text-3xl mb-8">Les questions des participants:</h2>
      <ul>
        {boards.map((board) => (<BoardCard key={board.id} board={board} />))}
      </ul>

      <div>
        <h2 className="text-3xl mb-8">
          La liste des catégories de films qui proviennent de l'API du back
        </h2>
        {data.length > 0 && data.map((category: Category) => <li key={category.id}>{category.name}</li>)}
      </div>
    </div>);
}
