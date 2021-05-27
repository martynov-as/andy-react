import React from "react";
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png' />
		</header>
	)
}

export default Header;