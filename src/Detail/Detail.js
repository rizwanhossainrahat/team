import React from 'react';

import './Detail.css';

const Detail = (props) => {
    // console.log(props)
    const details = props.detail
    const { name, email, salary, img } = props.detail

    // let total=0
    // // let playerDetail=[]
    // for (let i = 0; i < details; i++) {
    //     const player =details[i]
    //     total=total+player.salary
    //     // console.log(player.salary)
    //     // console.log(player)
    //     // playerDetail=player
    // }
    return (
        <div className='add-player'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='detail'>
                <h4>name:{name}</h4>
                <p><small>email:{email}</small></p>
                <h5>Monthly salary:{salary}</h5>
            </div>

        </div>
    );
};

export default Detail;