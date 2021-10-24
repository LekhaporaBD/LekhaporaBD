import React from 'react';
import { format } from 'date-fns';
import { Avatar } from '@material-ui/core';

import teacher3 from '../../assets/teachers/teacher-3.webp';
import styles from './PostList.module.scss';
import Comments from './Comments';

const Post = ({ serial, post, posts, setPosts }) => {
  console.log(post);
  return (
    <div className={styles.postWrapper} key={post.id}>
      <div className={styles.post}>
        <div className={styles.postInfo}>
          <Avatar alt={'facultyName'} src={teacher3} />
          <div className={styles.slug}>
            <h5>{post?.user?.profile?.name || 'Rehnuma Tasnim'}</h5>
            <h6> {format(new Date(post.created_at), 'do MMMM, yyyy')}</h6>
          </div>
        </div>
        <p className={styles.postContent}>{post.body}</p>
      </div>
      <Comments serial={serial} post={post} posts={posts} setPosts={setPosts} />
    </div>
  );
};

const PostList = ({ posts, setPosts }) => {
  return posts.map((post, idx) => {
    return (
      <Post
        key={idx}
        serial={idx}
        post={post}
        posts={posts}
        setPosts={setPosts}
      />
    );
  });
};

export default PostList;
