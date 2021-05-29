import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import styles from './Profile.module.css';

const Profile = (props) => {
	
	return (
		<div className={styles.profile}>
			<ProfileInfo />
			<MyPosts postsData={props.state.postsData} />
		</div>
	)
}

export default Profile;