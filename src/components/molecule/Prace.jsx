import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/css/Prace.css'

function Prace({plan, cost, text, url, icon}) {
  return (
    <article className='prace'>
      <div>
          <img src={icon}></img>
          <section>
            <h4>{plan}</h4>
            <p>{cost}</p>
          </section>
      </div>
      <section>
        <a href={url}>{text}</a> 
      </section>    
    </article>
  )
}

Prace.propTypes = {
  plan: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
    
}

export default Prace
