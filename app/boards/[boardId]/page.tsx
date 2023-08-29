import React, { PropsWithChildren } from 'react';

const BoardPage = ({ params, searchParams }: {
  params: { boardId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  return (
    <div className="p-4">
      <h3>BoardPage ({params.boardId})</h3>
      {JSON.stringify(searchParams)}
    </div>
  );
}
export default BoardPage;