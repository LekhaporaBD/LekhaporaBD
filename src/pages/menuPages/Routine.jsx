import React from 'react'


const neumorphism = {
    width : '85%',
    height : '80vh',
    borderRadius: 50,
    background: '#ffffff',
    boxShadow: "5px 5px 10px #e0e0e0, \n             -5px -5px 10px #ffffff"
}
const Routine = () => {
    return (
        <div>
            <div className="container" style={{width:'100%' , height: '100vh' , backgroundColor:'#8c8c8c'}}>
                <div className="routine" style={neumorphism}>
                </div>
            </div>
        </div>
    )
}

export default Routine
