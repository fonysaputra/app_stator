import React, { useState, useEffect, useRef } from 'react'

function Register() {
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState('')

  const [type, setType] = useState('password')
  const [icon, setIcon] = useState('fa fa-eye')
  const [loading, setLoading] = useState(false)

  const refInputusername = useRef(null)

  //   const actionRegister = () => {
  //     //console.log(Validateusername())
  //     if (!username || !password) {
  //       setWarning('username Atau Password Kosong')
  //     } else {
  //       if (!Validateusername()) {
  //         setWarning('masukkan username yg benar')
  //       } else {
  //         setLoading(true)
  //         setWarning('')
  //         requestRegister(username, password)
  //       }
  //     }
  //   }

  //   const Validateusername = () => {
  //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  //     if (username.match(mailformat)) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }

  const handlingShowPassword = () => {
    if (type === 'password') {
      setType('text'), setIcon('fa fa-eye-slash')
    } else {
      setType('password'), setIcon('fa fa-eye')
    }
  }

  return (
    <div className="bg-login">
      <div className="container mt-5 ">
        <div className="text-center judul-login">
          <h3>STATOR WILITY</h3>
          <span>Stability Detector for Weight Ideality</span>
        </div>
        <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
          <form
            className="sign-wrapper mg-lg-l-50 mg-xl-l-60 bg-white p-4 col-md-5"
            style={{ borderRadius: 10 }}
            action="/login"
          >
            <div className="wd-100p">
              <h3 className="tx-color-01 mg-b-5  text-center">Form Register</h3>

              <div className="form-group">
                <label>Nama Lengkap</label>
                <input
                  required="required"
                  type="text"
                  className="form-control"
                  placeholder="Masukkan Nama Kamu"
                />
              </div>

              <div className="form-group">
                <label>Username</label>
                <input
                  ref={refInputusername}
                  required="required"
                  type="username"
                  className="form-control"
                  placeholder="Masukkan Username Kamu"
                />
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-between mg-b-5">
                  <label className="mg-b-0-f">Password</label>
                  {/* <a href="/forgot-password" className="tx-13">
                    Lupa password?
                  </a> */}
                </div>
                <div className="input-group">
                  <input
                    className="form-control "
                    placeholder="Masukkan Password Kamu"
                    autoComplete="current-password"
                    required="required"
                    onChange={(e) => setPassword(e.target.value)}
                    data-toggle="password"
                    type={type}
                  />
                  <div className="input-group-append">
                    <span
                      onClick={() => {
                        handlingShowPassword()
                      }}
                      className="input-group-text"
                      htmlFor="iconpassword"
                      style={{ backgroundColor: 'white' }}
                    >
                      <i
                        style={{ fontSize: 20 }}
                        className={icon}
                        id="iconpassword"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="d-flex justify-content-between mg-b-5">
                  <label className="mg-b-0-f">Confirm Password</label>
                  {/* <a href="/forgot-password" className="tx-13">
                    Lupa password?
                  </a> */}
                </div>
                <div className="input-group">
                  <input
                    className="form-control "
                    placeholder="Masukkan Password Kamu"
                    autoComplete="current-password"
                    required="required"
                    onChange={(e) => setPassword(e.target.value)}
                    data-toggle="password"
                    type={type}
                  />
                  <div className="input-group-append">
                    <span
                      onClick={() => {
                        handlingShowPassword()
                      }}
                      className="input-group-text"
                      htmlFor="iconpassword"
                      style={{ backgroundColor: 'white' }}
                    >
                      <i
                        style={{ fontSize: 20 }}
                        className={icon}
                        id="iconpassword"
                      ></i>
                    </span>
                  </div>
                </div>
              </div>

              <p>{warning}</p>

              {loading ? (
                <div className="text-center">
                  <div
                    className="spinner-border text-primary"
                    role="status"
                  ></div>
                  <span className="sr-only"></span> <p>Loading... </p>
                </div>
              ) : (
                <button
                  onClick={() => {}}
                  className="btn btn-block bg-green btn-success"
                >
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
