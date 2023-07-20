import React from 'react'


export default function About() {
  return (
    <>
      <div className='container'>
        <div className='row my-4 d-flex align-items-center'>
          <div className='col-xs-12 col-md-6'>
            <p>
              Welcome to <b>Wanderlust Travel Agency</b>, where we believe that travel
              is not just a way to escape, but it's an opportunity to connect
              with the world and create unforgettable experiences. Our team of
              travel experts is passionate about crafting unique and personalized
              travel experiences that cater to the individual needs and preferences of our clients.
            </p>
            <p>
              We believe that every journey should be tailored to your interests and budget,
              which is why we offer a wide range of destinations, accommodations, and
              activities to choose from. Whether you are looking for a relaxing beach
              getaway, a cultural adventure, or a thrilling safari, we have something
              to suit every taste.
            </p>
            <p>
              At Wanderlust Travel Agency, we strive to create meaningful
              connections between our clients and the destinations they visit.
              We work with local guides and partners to provide an authentic and
              immersive experience that goes beyond the surface.
            </p>
            <p>
              We understand that planning a trip can be overwhelming,
              which is why we are here to help every step of the way. From
              finding the best deals on flights and accommodations to creating
              customized itineraries, our team is committed to making your travel
              dreams a reality.
            </p>
            <p>
              Thank you for considering Wanderlust Travel Agency for your
              next adventure. We look forward to helping you create memories
              that will last a lifetime.
            </p>
          </div>
          <div className='col-xs-12 col-md-6'>
            <img src={process.env.PUBLIC_URL + 'carousel/wooden-bridge.jpg'} style={{ width: "80%" }} alt="wooden bridge"/>
          </div>
        </div>
      </div>
    </>
  )
}

