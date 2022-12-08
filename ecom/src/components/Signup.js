import React from 'react'

export default function Signup() {
  return (
    <div className='form my-5'> 
      <h1>Signup</h1>
      <div class="form-floating mb-3 mx-5 d-grid gap-2 col-6 mx-auto">
        <input type="text" class="form-control" id="floatingInput" placeholder="name" />
        <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating mb-3 mx-5 d-grid gap-2 col-6 mx-auto">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3 mx-5 d-grid gap-2 col-6 mx-auto">
        <input type="number" class="form-control" id="floatingInput" placeholder="phonenumber" />
        <label for="floatingInput">Phone number</label>
      </div>
      <div class="form-floating mx-5 d-grid gap-2 col-6 mx-auto">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
        <label for="floatingPassword">Password</label>
      </div> <br />
      <div className='d-grid gap-2 col-6 mx-auto'>
        <button type="submit" class="btn btn-secondary btn-lg">Create</button>
      </div>
    </div>
  )
}
