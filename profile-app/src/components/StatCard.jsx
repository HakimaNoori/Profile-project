const StatCard = ({ title, bigValue, footerText, icon }) => {
  return (
    <div className='card statCard'>
      <div className='statTop'>
        <p className="statTitle">{title}</p>
        {icon ? <span className='statIcon'>{icon}</span> : null}
      </div>
      {bigValue ? <span className='statValue'>{bigValue}</span> : null}
      <p className='statFooter'>{footerText}</p>
    </div>
  )
}

export default StatCard
