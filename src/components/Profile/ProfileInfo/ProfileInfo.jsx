import React from "react";
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div className={styles.profileInfo}>
			<img src='https://i.ytimg.com/vi/PaVFMGUo9Hk/maxresdefault.jpg' />
			<div>
				ava + description
			</div>
		</div>
	)
}

export default ProfileInfo;