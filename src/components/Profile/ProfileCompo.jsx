import React,{useState} from 'react'
import { Avatar } from "@material-ui/core";
import {DropzoneDialog} from 'material-ui-dropzone'
import styles from './Profile.module.scss'
import { useDispatch , useSelector} from 'react-redux' 


const studentDetails = {
  name : 'Nazrul Islam',
  id : '171-054-042',
  email : 'rakibpaucse@gmail.com',
  phone : '01521333799',
  batch : '171',
  section : 'A',
  sgpa : '4.00',
  cgpa : '3.84',
  CreditEarned : '135',
  CourseCompleted : '57'
}

const ProfileCompo = () => {

  const dispatch = useDispatch()
  const picSrc = useSelector(({profilePicReducer}) => (profilePicReducer.img))
  const [open, setOpen] = useState(false);
  

    return (
      
      <div  className={`${styles.container} ${styles.center}`} >
      
              <div className={styles.tagline} style={{justifyContent:'start'}}>
                  <h2 > ProFile Picture. </h2>
                  <div style={{background:'#d5d5d5', flexGrow:1 , height:2 , marginLeft:20 }}></div>
              </div>

          <div className={`${styles.upload} ${styles.center}`}>
            <div className={styles.profilePicHolder}>
              <Avatar alt="Student ProfilePic" src={picSrc} className={styles.profileAvatar}/>
            </div>

              <div className={styles.imgSetting}>
                <button className={styles.btn} onClick={ e => dispatch({type:'DEFAULT_IMG'})}> Remove photo </button>
                <button className={styles.btn} onClick={() => setOpen(true)}> Change photo </button>

                {/*  */}
                <DropzoneDialog
                            acceptedFiles={['image/*']}
                            cancelButtonText={"cancel"}
                            submitButtonText={"UpLoad Your Photo"}
                            maxFileSize={5000000}
                            filesLimit={1}
                            open={open}
                            onClose={() => setOpen(false)}

                            onSave={(files) => {

                                         const reader = new FileReader();
                                         reader.onload = () =>{
                                           if(reader.readyState === 2){
                                            dispatch({type:'CHANGE_IMG' , payload : reader.result})  
                                           }
                                     }
                                         reader.readAsDataURL(files[0])
                                                                                                  
                                setOpen(false);
                            }}

                            showPreviews={true}
                            showFileNamesInPreview={true}
                />
                {/*  */}
              </div>

          </div>

              
            <div className={styles.info}>

              <div >
                <div className={styles.tagline}>
                  <h2 > PerSonal Info. </h2>
                  <div style={{background:'#d5d5d5', flexGrow:1 , height:2, marginLeft:20 }}></div>
                </div>

                <div style={{width : '80%' , margin : '0 auto'}}>

                  <div className={styles.infoBlock}>
                    <div className={styles.infoHolder}>
                      <h2> Name : </h2>
                      <h3> {studentDetails.name} </h3>
                    </div>
  
                    <div className={styles.infoHolder}>
                      <h2> ID : </h2>
                      <h3> {studentDetails.id} </h3>
                    </div>
                  </div>
  
                  <div className={styles.infoHolder}>
                    <h2> Email : </h2>
                    <h3> {studentDetails.email} </h3>
                  </div>

                  <div className={styles.infoBlock}>
                  <div className={styles.infoHolder}>
                    <h2>  Batch: </h2>
                    <h3> {studentDetails.batch} </h3>
                  </div>

                  <div className={styles.infoHolder}>
                    <h2> Phone : </h2>
                    <h3> {studentDetails.phone} </h3>
                  </div>
                  </div>

                  <div className={styles.infoBlock}>
                  <div className={styles.infoHolder}>
                    <h2> SGPA : </h2>
                    <h3> {studentDetails.sgpa} </h3>
                  </div>

                  <div className={styles.infoHolder}>
                    <h2> Credit Earned : </h2>
                    <h3> {studentDetails.CreditEarned} </h3>
                  </div>
                  </div>

                  <div className={styles.infoBlock}> 

                  <div className={styles.infoHolder}>
                    <h2> CGPA : </h2>
                    <h3> {studentDetails.cgpa} </h3>
                    </div>

                    <div className={styles.infoHolder}>
                      <h2> Course Completed : </h2>
                    <h3> {studentDetails.CourseCompleted} </h3>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
    )
}

export default ProfileCompo
