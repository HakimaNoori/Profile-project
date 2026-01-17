import React from 'react'
import Row from './Row'

const PersonalCard = ({info}) => {
  return (
    <div className='card infoCard'>
      <h2 className='cardTitle'>Personal Information</h2>
     <div className='rows'>
        {
            Object.keys(info).map((label) => (
                <Row label={label} value={info[label]} />
            ))
        }
     </div>
    </div>
  )
}

export default PersonalCard
