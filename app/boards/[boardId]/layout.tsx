import React, { PropsWithChildren } from 'react';
import { notFound } from 'next/navigation';
import { prisma } from '~/src/db/prisma';

const LayoutBoard = async ({ params, children }: PropsWithChildren<{
  params: { boardId: string }
}>) => {
  const boardId = Number(params.boardId)

  if (isNaN(boardId)) {
    return notFound()
  }

  const board = await prisma.board.findUniqueOrThrow({ where: { id: boardId } })
  return (
    <div>
      <h2 className="text-3xl mb-4">{board.title}</h2>
      {children}
    </div>
  );
}
export default LayoutBoard;