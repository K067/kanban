import { useState } from 'react';
import profile from '../../img/icon/user-avatar.svg'
import arrow from '../../img/icon/arrow.svg'
import './User.css'
    ;

export const User = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='user' onClick={() => setOpen(!open)}>
            <img src={profile} alt="profile" />
            <img src={arrow} alt="arrow"
                style={{
                    transition: "all 200ms linear",
                    transform: open ? "scaleY(-1)" : null
                }} />

            {open && <div className="profile">
                <p>Profile</p>
                <p>Log Out</p>
            </div>}
        </div>
    )
}