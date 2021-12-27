/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { forwardRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Menu = forwardRef((props, ref) => {
  const { show, showDropdown, onClick, onEdit, onDelete } = props;
  return (
    <div className="dropdown" ref={ref}>
      <IconButton aria-label="delete" onClick={onClick}>
        <MoreVertIcon fontSize="large" />
      </IconButton>
      <div
        className={`dropdown__menu ${
          show === 'left' ? 'show-left' : 'show-right'
        }`}
        style={{ transform: showDropdown ? 'scale(1)' : 'scale(0)' }}
      >
        <ul>
          <li style={{ cursor: 'pointer' }}>
            <a
              onClick={(e) => {
                e.preventDefault();
                onEdit();
              }}
            >
              <EditIcon fontSize="large" />
              Edit
            </a>
          </li>
          <li style={{ cursor: 'pointer' }}>
            <a
              style={{ color: '#ff8909' }}
              onClick={(e) => {
                e.preventDefault();
                onDelete();
              }}
            >
              <DeleteIcon fontSize="large" style={{ color: '#ff8909' }} />
              Delete
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});

Menu.defaultProps = {
  show: 'right',
};

export default Menu;
