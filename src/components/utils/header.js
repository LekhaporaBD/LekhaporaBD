import React from 'react'

const style = {
    display : 'inline',
    padding : '3px 40px' ,
    color : 'white',
    background : '#2f4bc6',
    borderTopRightRadius : 200,
    borderBottomRightRadius : 200,
    fontSize : 30,
}


const Header = ({data}) => {
    return (
        <h1 style={style}>
            {`${data.toUpperCase()} .`}
        </h1>
    )
}

export default Header
