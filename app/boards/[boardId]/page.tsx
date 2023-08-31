import React, { PropsWithChildren } from 'react';
import { prisma } from '~/src/db/prisma';
import { notFound } from 'next/navigation';
import { Proposition } from '~/src/components/proposition/PropositionLine';
import PropositionForm from '~/app/boards/[boardId]/PropositionForm';

const BoardPage = async ({ params, searchParams }: {
  params: { boardId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
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
    <div className="p-4">
      <PropositionForm boardId={boardId} />
      {
        propositions.length > 0
          ? (
            <div>
              <h3 className="font-bold">Les propositions sont : </h3>
              <ul className="flex gap-1">
                {propositions.map((p) =>
                  <Proposition key={p.id} voteCount={p._count.vote} {...p} />,
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