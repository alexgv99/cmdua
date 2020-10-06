import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.scss';

export default function Resultados() {
	return (
		<div className={styles.container}>
			<Head>
				<title>CMDUA</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h3>Ainda não implementada</h3>

			<div className={styles.buttons}>
				<Link href="/select-regioes">
					<button type="button" className={styles.cancel}>
						Cancelar
					</button>
				</Link>
			</div>
		</div>
	);
}
