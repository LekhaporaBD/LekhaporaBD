import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../components/utils/header';
import Event from '../../components/Events/Event';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from '../../config/axios';

const Events = () => {
  const [upEvents, setUpEvents] = useState([]);
  const [recents, setRecents] = useState([]);

  const userType = useSelector(({ ui }) => ui.userType);

  useEffect(() => {
    axios.get(`${userType}/events`).then((res) => { 
      const upcoming = res.data.events.map((event) => ({
        date: event.date,
        title: event.title,
        post: event.body,
      }));
      setUpEvents(upcoming.concat(upcoming));
      setRecents(upcoming.concat(upcoming).reverse());
    }).catch(err => console.log(err.msg));
  }, [userType]);
  return (
    <div>
      <Header data={'Events'} />
      <Event upEvents={upEvents} recents={recents} />
    </div>
  );
};

export default Events;
