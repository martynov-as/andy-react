import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import styles from './Profile.module.css';

const Profile = () => {
	return (
		<div className={styles.profile}>
			<img src='https://i.ytimg.com/vi/PaVFMGUo9Hk/maxresdefault.jpg' />
			<div>
				ava + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;