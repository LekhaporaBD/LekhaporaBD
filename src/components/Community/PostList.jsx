import React, { useState, Fragment } from 'react';
import { format } from 'date-fns';
import { TextField, Button, Avatar } from '@material-ui/core';
import Modal from 'react-modal';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import Menu from '../../components/utils/Menu';

import useHideOnClickOutside from '../../hooks/useHideOnClickOutside';

import defaultAvatar from '../../assets/defaultAvatar.png';

import styles from './PostList.module.scss';
import Comments from './Comments';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onEdit = () => {
    setIsOpen(true);
  };

  const onDelete = () => {};

  const menuBtnRef = useHideOnClickOutside(() => {
    if (showId !== '') {
      setShowId('');
    }
  });

  return (
    <Fragment>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
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
            // onChange={(e) => setBody(e.target.value)}
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
                size="large"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                size="large"
                color="primary"
                onClick={() => {
                  // setAnnounceClicked(false);
                  // axios.post(`${userType}/course/${courseId}/post`, {
                  //   body,
                  // });
                  // const newPosts = [
                  //   ...posts,
                  //   {
                  //     body,
                  //     comments: [],
                  //   },
                  // ];
                  // setPosts(newPosts);
                  // setBody('');
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
                src={post?.user?.profile?.profile_picture || defaultAvatar}
              />
              <div className={styles.slug}>
                <h5>{post?.user?.profile?.name || 'Rehnuma Tasnim'}</h5>
                <h6> {format(new Date(post.created_at), 'do MMMM, yyyy')}</h6>
              </div>
            </div>
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
