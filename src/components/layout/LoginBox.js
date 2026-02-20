"use client";

import { useState } from "react";

export default function LoginBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`login-box ${isOpen ? "open" : ""}`}>
      <a
        className="close-login"
        href="#"
        // onClick={(e) => {
        //   e.preventDefault();
        //   setIsOpen(false);
        // }}
      >
        <i className="fa fa-times"></i>
      </a>
      <div className="container">
        <form
          name="loginform"
          id="loginform"
          action="/wp-login.php"
          method="post"
        >
          <div className="login-controls">
            <div className="skew-25 input-box left">
              <input
                title="User name Or Email"
                className="txt-box skew25 no-border"
                type="text"
                size="20"
                placeholder="User name Or Email"
                tabIndex="10"
                name="log"
                id="user_login"
              />
            </div>
            <div className="skew-25 input-box left">
              <input
                title="Password"
                className="txt-box skew25 no-border"
                placeholder="Password"
                type="password"
                size="20"
                tabIndex="20"
                name="pwd"
                id="user_pass"
              />
            </div>
            <div className="left-btn skew-25 main-bg">
              <input
                name="wp-submit"
                id="wp-submit"
                value="Login"
                tabIndex="100"
                type="submit"
                className="btn skew25"
              />
            </div>
            <div className="check-box-box">
              <input
                title="rememberme"
                name="rememberme"
                id="rememberme"
                value="forever"
                tabIndex="90"
                className="check-box"
                type="checkbox"
              />
              <label>Remember me !</label>
            </div>
            <input name="redirect_to" value="/wp-admin/" type="hidden" />
            <input name="testcookie" value="1" type="hidden" />
          </div>
        </form>
      </div>
    </div>
  );
}
