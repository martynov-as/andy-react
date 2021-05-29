import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
	
	let postsElements = props.postsData.map( post => <Post message={post.message} likesCount={post.likesCount}/> )

	return (
		<div className={styles.myPosts}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={styles.posts}>
				{postsElements}
			</div>
		</div>
	)
}

export default MyPosts;