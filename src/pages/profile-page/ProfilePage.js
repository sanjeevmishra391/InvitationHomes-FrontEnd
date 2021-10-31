import React from 'react'
import './profile-page-style.css'

const ProfilePage = ({user}) => {
    return (
        <div className='profile'>
            <div className='container'>
                <section className='top-block'>
                    <div className='top-block-bg'>
                    </div>
                    <div className='top-block-bg-second'>
                    </div>
                    <div className='user-data-primary'>
                        <div className='user-image'>
                            <img src='https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png' alt='user profile'/>
                        </div>
                        <div>
                            <p className='user-name'>{user.name}</p>
                        </div>
                    </div>
                </section>
                <section className='information-block'>
                    <div className=''>
                        <p><span className='bold'>Email: </span>{user.email}</p>
                        <p><span className='bold'>Phone Number: </span>{user.phoneNumber}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProfilePage;