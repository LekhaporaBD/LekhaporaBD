import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import Modal from 'react-modal';

import { TextField, Button, Avatar } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Menu from '../../components/utils/Menu';

import useHideOnClickOutside from '../../hooks/useHideOnClickOutside';

import styles from './PostList.module.scss';
import Comments from './Comments';
import axios from '../../config/axios';

const customStyles = {
  content: {
    top: '50%',
    left: '60%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
  },
};

const Post = ({ serial, post, posts, setPosts }) => {
  const [showId, setShowId] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState(post.body);
  const picSrc = localStorage.getItem('profile_pic')


  const userType = useSelector(({ ui }) => ui.userType);
  const profile = useSelector(({ ui }) => ui.profile);

  function closeModal() {
    setIsOpen(false);
    setShowId('');
  }

  const onEdit = () => {  console.log(post)
    setBody(post.body)
    setIsOpen(true);
  };

  const onDelete = () => {
    // axios.delete(
    //   `https://as.mutualempressa.com/lekapora/public/api/${userType}/post/${post.postId}`,
    // );
    setShowId('');
    const newPosts = posts
      .reverse()
      .filter((item) => item.postId !== post.postId);
    setPosts(newPosts);
  };

  const menuBtnRef = useHideOnClickOutside(() => {
    if (showId !== '') {
      setShowId('');
    }
  });

  return (
    <Fragment>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Post"
      >
        <div className={styles.modalWrapper}>
          <TextField
            id="outlined-multiline-static"
            label="Announce something to your Class"
            multiline
            rows={4}
            variant="filled"
            className={styles.textField}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div className={styles.buttonWrapper}>
            <div>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.buttonAdd}
                  startIcon={<CloudUploadIcon />}
                >
                  Add
                </Button>
              </label>
            </div>
            <div>
              <Button
                variant="contained"
                className={styles.buttonCancel}
                size="large"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                className={styles.buttonPost}
                size="large"
                color="primary"
                onClick={() => {
                  // axios.put(
                  //   `https://as.mutualempressa.com/lekapora/public/api/${userType}/post/${post.postId}`,
                  //   {
                  //     body,
                  //   },
                  // );
                  const newPosts = [...posts];
                  const newPost = newPosts.find(
                    (item) => post.postId === item.postId,
                  );
                  newPost.body = body;
                  setPosts(newPosts.reverse());
                  setShowId('');
                  setIsOpen(false);
                  setBody('');
                }}
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </Modal>
      <div className={styles.postWrapper} key={post.id}>
        <div className={styles.post}>
          <div className={styles.postInfo}>
            <div style={{ display: 'flex', flexGrow: 1 }}>
              <Avatar
                alt={'facultyName'}
                src={post?.profilePicture || picSrc}
              />
              <div className={styles.slug}>
                <h5>{post?.userName || 'Unknown'}</h5>
                <h6> {format(new Date(post?.createdAt), 'do MMMM, yyyy')}</h6>
              </div>
            </div>
            {post.userId === profile.id && (
              <Menu
                ref={menuBtnRef}
                show="left"
                showDropdown={post.Id === showId}
                onClick={() => {
                  setShowId(post.Id);
                }}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            )}
          </div>
          <p className={styles.postContent}>{post.body}</p>
        </div>
        <Comments
          serial={serial}
          post={post}
          posts={posts}
          setPosts={setPosts}
        />
      </div>
    </Fragment>
  );
};

const PostList = ({ posts, setPosts }) => { 
  return posts?.reverse()?.map((post, idx) => {
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
