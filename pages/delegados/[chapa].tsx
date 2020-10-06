import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import { useRouter } from 'next/router';

const SelectDelegados = (props) => {
	const { query } = useRouter();

	const [delegados, setDelegados] = useState([]);

	useEffect(() => {
		fetch(`/api/delegados?chapa=${query.chapa}`).then((data) => data.json().then(setDelegados));
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>CMDUA</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Selecione o delegado</h1>

			<div className={styles.form}>
				{delegados.map((delegado) => (
					<Link href={`/obrigado/${delegado._id}`}>
						<div className={styles.regiao}>{delegado.nome}</div>
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

SelectDelegados.propTypes = {};

export default SelectDelegados;
