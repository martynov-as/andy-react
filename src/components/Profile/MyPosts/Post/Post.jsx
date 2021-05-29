import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
	return (
		<div className={styles.item}>
			<div>{props.message}</div>
			<div>{props.likesCount}</div>
		</div>
	)
}

export default Post;