import React from 'react'
import"./work.css"
import Works from './Works'

const Work = () => {
  return (
    <div className='mak'>
      <section className="work section" id='portfolio'>
        <h2 className="section__title">Project</h2>
        <span className="section__subtitle">
            Most recent works
        </span>
        <Works />
      </section>
    </div>
  )
}

export default Work
