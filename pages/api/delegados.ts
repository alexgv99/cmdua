import { NextApiResponse, NextApiRequest } from 'next/';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req: NextApiRequest, res: NextApiResponse) => {
	res.statusCode = 200;
	const delegados = [
		{
			_id: '11111',
			nome: "D'Alessandro",
			chapa: 'colorados',
		},
		{
			_id: '22222',
			nome: 'Lomba',
			chapa: 'colorados',
		},
		{
			_id: '33333',
			nome: 'Galhardo',
			chapa: 'colorados',
		},
		{
			_id: '44444',
			nome: 'Pepê',
			chapa: 'gremistas',
		},
		{
			_id: '55555',
			nome: 'Mathes Henrique',
			chapa: 'gremistas',
		},
		{
			_id: '66666',
			nome: 'Diego Souza',
			chapa: 'gremistas',
		},
	];
	if (req.query.chapa) {
		res.json(delegados.filter((delegado) => delegado.chapa === req.query.chapa));
	} else if (req.query.id) {
		res.json(delegados.find((delegado) => delegado._id === req.query.id));
	} else {
		res.json(delegados);
	}
};
