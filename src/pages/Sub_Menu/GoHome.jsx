import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeMenuType } from "../../store/ui";

const NoticeBoard = () => {
  const history = useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeMenuType({menuType: 'main'}))
    history.push(`/dashboard`);
  }, [history, dispatch])
  return (
    <div>
    </div>
  )
}

export default NoticeBoard

