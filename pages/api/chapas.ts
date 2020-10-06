import { NextApiResponse, NextApiRequest } from 'next/';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = 200;

	const chapas = [
		{
			_id: '11111',
			nome: 'Chapa Colorados',
			codigo: 'colorados',
			regiao: 's',
		},
		{
			_id: '22222',
			nome: 'Chapa Gremistas',
			codigo: 'gremistas',
			regiao: 's',
		},
	];
	res.json(chapas.filter((chapa) => chapa.regiao === req.query.regiao));
};
