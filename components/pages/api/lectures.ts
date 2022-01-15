// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const mockCategory = {
  id: 0,
  name: '프로그래밍',
};

const mockTags = [
  { id: 0, name: '평생소장' },
  { id: 1, name: 'AWS' },
  { id: 2, name: 'DevOps' },
];
const lecturesData = {
  lecturelist: [
    {
      id: 0,
      category: mockCategory,
      title: '초격차 패키지',
      tags: mockTags,
      description:
        '시간당 1천원 대 수강료 한 번 결제로 평생소장 | 프론트엔드 공부, 뭐부터 시작해야 하지? 더 이상 고민하지 마세요! 프론트엔드 개발자가',
      thumb: '/thumb.jpg',
      isHot: true,
      isNew: true,
    },
  ],
};

type lecturesData = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(lecturesData);
}
