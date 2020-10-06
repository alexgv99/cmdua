import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className={styles.container}>
			<Head>
				<title>CMDUA</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Login</h1>

			<div className={styles.form}>
				<label>
					email:
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="aaa@bbb.net" />
				</label>
				<label>
					senha:
					<input type="email" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="********" />
				</label>

				<div className={styles.buttons}>
					<Link href="/select-regioes">
						<button type="button" className={styles.primary}>
							Entrar
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
