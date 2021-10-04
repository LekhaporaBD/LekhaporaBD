import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const CreateClass = () => {
  let query = useQuery();

  return (
    <div>
      <Link to={`/class/web-technology/?meeting=${uuid()}`}>Go to Meeting</Link>
    </div>
  );
};

export default CreateClass;
