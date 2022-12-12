import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ForgotModal from './forgotPass/forgotPass'


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    top:'40%',
    left: '35%',
    transform : `translate(-${40}%, -${45}%)`
  },
}));

export default function SimpleModal({openModal , setOpenModal }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(openModal);


  const handleClose = () => {
    setOpen(false);
    setOpenModal(false);
  };

  const body = (
    <div className={classes.paper}>
      {/* <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p> */}
      {/* <SimpleModal /> */}

      <ForgotModal handleClose={handleClose}  />
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
        {/* <ForgotModal /> */}
      </Modal>
    </div>
  );
}
