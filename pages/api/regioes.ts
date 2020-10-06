import { NextApiResponse, NextApiRequest } from 'next/';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = 200;
	res.json([
		{
			_id: '11111',
			nome: 'Região Sul',
			codigo: 's',
			dataVotacao: '26/10/2020',
		},
		{
			_id: '22222',
			nome: 'Região Norte',
			codigo: 'n',
			dataVotacao: '27/10/2020',
		},
		{
			_id: '33333',
			nome: 'Região Sudeste',
			codigo: 'se',
			dataVotacao: '28/10/2020',
		},
		{
			_id: '44444',
			nome: 'Região Nordeste',
			codigo: 'ne',
			dataVotacao: '29/10/2020',
		},
		{
			_id: '55555',
			nome: 'Região Centro-Oeste',
			codigo: 'ce',
			dataVotacao: '30/10/2020',
		},
	]);
};
