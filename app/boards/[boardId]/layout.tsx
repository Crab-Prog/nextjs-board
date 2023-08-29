import React, { PropsWithChildren } from 'react';

const LayoutBoard = ({ params, children }: PropsWithChildren<{
  params: { boardId: string }
}>) => {
  return (
    <div><h2>LayoutBoard ({params.boardId})</h2>
      {children}</div>
  );
}
export default LayoutBoard;