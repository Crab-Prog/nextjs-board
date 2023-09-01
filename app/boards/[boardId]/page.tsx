import React from 'react';
import { prisma } from '~/src/db/prisma';
import { notFound } from 'next/navigation';
import { Proposition } from '~/src/components/proposition/PropositionLine';
import PropositionForm from '~/app/boards/[boardId]/PropositionForm';

const BoardPage = async ({ params }: { params: { boardId: string } }) => {
  const boardId = Number(params.boardId)

  if (isNaN(boardId)) {
    return notFound()
  }

  const propositions = await prisma.proposition.findMany({
    where: {
      boardId: boardId,
    },
    orderBy: {
      vote: {
        _count: 'desc',
      },
    },
    select: {
      title: true,
      id: true,
      _count: {
        select: {
          vote: true,
        },
      },
    },
  })
  return (
    <div>
      <PropositionForm boardId={boardId} />
      {
        propositions.length > 0
          ? (
            <div>
              <h3 className="font-bold mb-4">Les propositions sont : </h3>
              <ul className="flex flex-wrap gap-1">
                {propositions.map((p) =>
                  <Proposition key={p.id} voteCount={p._count.vote} boardId={boardId} {...p} />,
                )}
              </ul>
            </div>
          )
          : ''
      }
    </div>
  );
}
export default BoardPage;