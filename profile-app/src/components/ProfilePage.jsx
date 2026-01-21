import React from 'react'
import TopHeader from './TopHeader'
import StatCard from './StatCard'
import AccountDetailsCard from "./AccountDetailsCard"
import PersonalInfoCard from './personalInfoCard'


const ProfilePage = ({user}) => {
  return (
    <div className='layout'>
      <TopHeader name={user.name} username={user.username} avatarImage={user.avatarImage} />
      <div className='statsGrid'>
        <StatCard title="Experience Points" bigValue={user.xp} 
        footerText={`Last Active: ${user.lastActive}`}
        />

        <StatCard title="STREAK" bigValue={`${user.streakDays} days`}
        footerText={`Longest Streak: ${user.lastActive} days`}
        icon="🔥"
        />
        
        <StatCard title="RECENT BADGES" bigValue=""
        footerText={user.recentBadgesText}
        icon="✨"
        />
      </div>

      <div className="bottomGrid">
        <PersonalInfoCard info={user.personalInfo}/>
        <AccountDetailsCard details={user.accountDetails}/>
      </div>
    </div>
  
  )
}

export default ProfilePage
