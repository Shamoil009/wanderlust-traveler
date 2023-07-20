import React from 'react'

function Contact() {
  return (
    <>
      <h1 className='text-center'>Contact us</h1>
      <div className='container ' style={{ width: "60%" }}>
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="email" class="form-control" placeholder="Enter your name" />
        </div>
        <div class="mb-3">
          <label class="form-label">Contact</label>
          <input type="email" class="form-control" placeholder="Contact No" />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input type="email" class="form-control" placeholder="name@example.com" />
        </div>

        <div class="mb-3">
          <label class="form-label">Feedback(Optional)</label>
          <textarea class="form-control" rows="3"></textarea>
        </div>
        <button className='btn btn-primary mb-3'>Submit</button>
      </div>
    </>
  )
}

export default Contact