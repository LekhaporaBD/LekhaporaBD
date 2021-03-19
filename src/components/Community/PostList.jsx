import React from 'react'

const posts = [
  {
    postId: 1,
    classId: 1,
    userId: 1,
    timeStamp: 'Sep 26, 2020',
    postBody: {
      content: `Please check out the assignment.
                Instructions:
                1. Last date of submission: 9 October, 2020 (within 11.59 pm).
                2. Summarize the paper in 2 pages (Times new roman, font size 11) and prepare a presentation of 10-12 slides.
                3. Give at least 2 reference at the end of your summary.
                4. Name of your files should be your student id.
                5. Mail your files to mariaafnan6@gmail.com  (subject of your mail should be CSE 421_assignment_student id.)`,
      files: []
    },
    comments: [
      {
        commentId: 1,
        userId: 2,
        timeStamp: 'Sep 26, 2020',
        content: `Maam i don't have a laptop or webcam,Since i use desktop but i can use my mobiles  camera but it's barely visible on the camera.Just to let you know maam.`
      },
      {
        commentId: 2,
        userId: 3,
        timeStamp: 'Sep 21, 2020',
        content: `mam google meet e amar camera on hoy na...`
      },
    ]
  }
]
const PostList = () => {
  return (
    <div>
      <div>
        <Avatar
          alt={'facultyName'}
          src={profilePhoto}
          className={styles.profileAvatar}
        />
      </div>
      <div>
        <h5>Maria Afnan</h5>
        <h6>Oct 4, 2020</h6>
      </div>
      <p>
        Please check out the assignment.
          Instructions:
          1. Last date of submission: 9 October, 2020 (within 11.59 pm).
          2. Summarize the paper in 2 pages (Times new roman, font size 11) and prepare a presentation of 10-12 slides.
          3. Give at least 2 reference at the end of your summary.
          4. Name of your files should be your student id.
          5. Mail your files to mariaafnan6@gmail.com  (subject of your mail should be CSE 421_assignment_student id.)
      </p>
    </div>
  )
}

export default PostList
