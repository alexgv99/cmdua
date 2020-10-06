import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const SelectRegioes = (props) => {
	const [regioes, setRegioes] = useState([]);

	useEffect(() => {
		fetch('/api/regioes').then((data) => data.json().then(setRegioes));
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>CMDUA</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Selecione a regiao</h1>

			<div className={styles.form}>
				{regioes.map((regiao) => (
					<Link href={`/regioes/${regiao.codigo}`}>
						<div className={styles.regiao}>{regiao.nome}</div>
					</Link>
				))}
			</div>
		</div>
	);
};

SelectRegioes.propTypes = {};

export default SelectRegioes;
