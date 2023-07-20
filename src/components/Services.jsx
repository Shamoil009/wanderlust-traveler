import React from 'react'
import Card from './Card'
import * as data from './data'

function Services() {
  return (
    <div>
      <h1 className='text-center'>Meet our Team</h1>
      <div className='container'>
        <div className='row'>
          {data.Team.map((values) => {
            return <Card
              title={values.name}
              image={values.images}
              description={values.description}
            />
          })}
        </div>
      </div>
    </div>
  )
}

export default Services