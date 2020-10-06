import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import { useRouter } from 'next/router';

const SelectRegioes = (props) => {
	const { query } = useRouter();

	const [chapas, setChapas] = useState([]);

	useEffect(() => {
		fetch(`/api/chapas?regiao=${query.regiao}`).then((data) => data.json().then(setChapas));
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>CMDUA</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Selecione a chapa</h1>

			<div className={styles.form}>
				{chapas.map((chapa) => (
					<Link href={`/delegados/${chapa.codigo}`}>
						<div className={styles[chapa.codigo]}>{chapa.nome}</div>
					</Link>
				))}
			</div>

			<div className={styles.buttons}>
				<Link href="/select-regioes">
					<button type="button" className={styles.cancel}>
						Cancelar
					</button>
				</Link>
			</div>
		</div>
	);
};

SelectRegioes.propTypes = {};

export default SelectRegioes;
