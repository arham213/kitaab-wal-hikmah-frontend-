function Login(){
    return(
        <section class="bg-light py-3 py-md-5 py-xl-8">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div class="mb-5">
                <h4 class="text-center mb-4">Login</h4>
                <div class="text-center">
                  <a href="#!" class="btn bsb-btn-2xl btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <span class="ms-2 fs-6">Sign in with Google</span>
                  </a>
                </div>
              </div>
              <div class="card border border-light-subtle rounded-4">
                <div class="card-body p-3 p-md-4 p-xl-5">
                  <form action="#!">
                    <p class="text-center mb-4">Or Login using email</p>
                    <div class="row gy-3 overflow-hidden">
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com" required></input>
                          <label for="email" class="form-label">Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" name="password" id="password" value="" placeholder="Password" required></input>
                          <label for="password" class="form-label">Password</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button class="btn btn-primary btn-lg" type="submit">Login</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-4">
                <p class="m-0 text-secondary text-center">Forgot Password? <a href="#!" class="link-primary text-decoration-none">Click Here</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Login;