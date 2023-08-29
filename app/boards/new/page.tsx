import BoardForm from '~/app/boards/new/BoardForm';
import React from 'react';

export default function CreateBoardPage() {
  return(
    <div>
      <h2 className="text-2xl">Create a new board</h2>
      <BoardForm />
    </div>);
}
