import {
  NextApiRequest,
  NextApiResponse,
} from 'next';
import {
  Proposition,
} from '@prisma/client';
import { z } from 'zod';
import { prisma } from '~/src/db/prisma';

type Data = {
  proposition: Proposition;
}

const QueryScheme = z.object({
  propositionId: z.string().transform((id) => Number(id)),
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    res.status(405).end();
    return;
  }

  const query = QueryScheme.parse(req.query);

  const proposition = await prisma.proposition.delete({
    where: {
      id: query.propositionId,
    },
  })
  res.status(204).json({ proposition })
}