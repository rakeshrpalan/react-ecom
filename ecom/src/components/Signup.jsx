import { useRef, useState, useEffect } from "react";

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };
  return (
    <div>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="register d-grid gap-2 col-6 mx-auto my-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="form-control mb-3"
                  id="userName"
                  aria-describedby="userName"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                />
                <label htmlFor="phone" className="form-label">
                  Contact No.
                </label>
                <input
                  required
                  type="tel"
                  className="form-control mb-3"
                  id="phone"
                  aria-describedby="phone"
                />
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  required
                  type="password"
                  className="form-control mb-3"
                  id="exampleInputPassword1"
                />
                <label
                  htmlFor="exampleConfirmtPassword1"
                  className="form-label"
                >
                  Confirm Password
                </label>
                <input
                  required
                  type="confirm-password"
                  className="form-control"
                  id="exampleConfirm    Password1"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                  checked
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Login once registered
                </label>
              </div>
              <button type="submit" className="btn btn-secondary btn-lg">
                Submit
              </button>
            </form>
          </div>
        </section>
      )}
    </div>
  );
}

export default Register;
