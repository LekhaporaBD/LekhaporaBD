import React from 'react'
import Header from '../../components/utils/header'
import InboxElem from '../../components/Inbox/InboxElem'


const Inbox = () => {
    return (
        <div>
            <Header data={'Inbox'} />

            <div style={{ boxShadow : 'inset 2px 2px 5px #BABECC, inset -5px -5px 10px #FFF' ,
                            padding : '15px 15px 0px' ,
                            background:'#ebecf0 !important'}}>
                <InboxElem />
            </div>

        </div>
    )
}

export default Inbox
