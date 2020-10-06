import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.scss';
import { size } from 'lodash';

const SelectRegioes = (props) => {
	const { query } = useRouter();

	const [regioes, setRegioes] = useState([]);
	const [regiao, setRegiao] = useState(null);

	useEffect(() => {
		fetch('/api/regioes').then((data) => data.json().then(setRegioes));
	}, []);

	useEffect(() => {
		if (size(regioes) > 0) {
			setRegiao(regioes.find((regiao) => regiao.codigo === query.regiao));
		}
	}, [regioes]);

	return (
		<div className={styles.container}>
			<Head>
				<title>CMDUA</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{regiao ? (
				<>
					{' '}
					<h1>Região {regiao.nome}</h1>
					<h4>Data de votação: {regiao.dataVotacao}</h4>
					<div className={styles.buttons}>
						<Link href="/select-regioes">
							<button type="button" className={styles.cancel}>
								Voltar
							</button>
						</Link>
						<Link href="/resultados">
							<button type="button" className={styles.secondary}>
								Resultados
							</button>
						</Link>
					</div>
					{query.regiao === 's' ? (
						<div className={styles.buttons}>
							<Link href="/chapas/s">
								<button type="button" className={styles.principal}>
									Quero votar nesta região
								</button>
							</Link>
						</div>
					) : (
						<h3>Só há chapas na Região Sul</h3>
					)}
				</>
			) : (
				<h4>Carregando região selecionada</h4>
			)}{' '}
		</div>
	);
};

SelectRegioes.propTypes = {};

export default SelectRegioes;
