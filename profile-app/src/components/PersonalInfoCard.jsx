import React from 'react'
import Row from './Row'

const PersonalInfoCard = ({info}) => {
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

export default PersonalInfoCard