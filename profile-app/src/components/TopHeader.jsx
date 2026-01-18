import React from 'react'

const TopHeader = () => {
  return (
    <header className='topHeader'>
        <div className="topHeaderInner">
            <div className="avatarRing">
                <div className="avatarCircle avatarImageApper">
                    <img src={avatarImage} alt={name} className='avatar1' />
                </div>
            </div>
            <div className="topHeaderContent">
                <h1 className='profileName'>{name}</h1>
                <p className='profileHandle'>{username}</p>
                <div className="topHeaderButtons">
                    <button className='btnHeader primary'>Edit profile</button>
                    <button className='btnHeader ghost'>Sign Out</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default TopHeader
