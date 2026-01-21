import React from 'react'
import './App.css'
import userImage from './assets/user.jpg'
import ProfilePage from './components/profilePage'

const App = () => {
  const user = {
    name: 'Hakima',
    username: '@hakimanoori',
    userImage: userImage,
    xp: 100,
    lastActive: '2 hours ago',
    streakDays: 5,
    longestStreak: 10,
    recentBadgesText: 'NO Badges',
    personalInfo: {
      email: 'hakima@example.com',  
      Gender: "Female",
      Country: "Afghanistan",
      'province/State': "Herat",
      'City': "Herat City",
      'Date of Birth': "01-01-2001",
      'Onlin Profile': "www.hakima.com",
      'linkedIn': "www.linkedin.com/in/hakima",
      languages: 'English, Dari',
      Bio: 'Passionate developer and lifelong learner.',    
    },
    accountDetails: {
      Role: 'Student',
      Status: 'Active',
      Verification: 'Verified',
    }

  }
  return (
    <div className='page'>
      <ProfilePage user={user} />
    </div>
  )
}

export default App
