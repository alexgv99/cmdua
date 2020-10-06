import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Resultados() {
	const { query } = useRouter();

	const [delegado, setDelegado] = useState(null);

	useEffect(() => {
		fetch(`/api/delegados?id=${query.delegado}`).then((data) => data.json().then(setDelegado));
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>CMDUA</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{delegado ? (
				<>
					<h3>Obrigado por participar da eleição</h3>
					<p>
						Seu voto foi computado para {delegado.nome} da chapa dos {delegado.chapa}.
					</p>
				</>
			) : (
				<h4>Aguarde... computando voto.</h4>
			)}

			<div className={styles.buttons}>
				<Link href="/select-regioes">
					<button type="button" className={styles.cancel}>
						Reiniciar
					</button>
				</Link>
			</div>
		</div>
	);
}
