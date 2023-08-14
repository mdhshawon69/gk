import React from 'react';

import { BoardMemberDetail } from '@/components/BoardMember';
import { useFetch } from '@/shared/hook';
import { IBoardMember } from '@/shared/types/boardMember';

const BoardMemberDetails = async ({ params }: { params: { memberDetail: string } }) => {
  const id = Number(params.memberDetail);
  const boardMember = await useFetch({ url: '/members', revalidateIn: 86400 });
<<<<<<< HEAD
  const detailData = boardMember && boardMember.data.find((data: IBoardMember) => (data.id === id));
=======
  const detailData = boardMember?.data?.find((data: IBoardMember) => (data.id === id));
>>>>>>> master

  return (
    <>
      <BoardMemberDetail data={detailData}/>
    </>
  );
};

export default BoardMemberDetails;
