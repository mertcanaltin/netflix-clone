

import Footer from '../../components/footer'

import './index.scss'

export default function Sign() {
    return (
        
        <div>
            <div className='showcase'>
        <div className="logo">
          <a href="/">
            <img src="https://i.ibb.co/r5krrdz/logo.png" />
            </a>
        </div>
        <div className="showcase-content">
          <div className="formm">
            <form>
              <h3>Sign In</h3>
              <div className="info">
                <input className="email" type="email" placeholder="Email or phone number" /> <br />
                <input className="email" type="password" placeholder="Password" />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit">Sign In</button>
              </div>
              <div className="help">
                <div>
                  <input defaultValue="true" type="checkbox" /><label>Remember me</label>
                </div>
                <a href="https://www.netflix.com/dz-en/LoginHelp">Need Help ?</a>
              </div>
            </form>
          </div>
          <div className="fcbk">
            <a href="https://facebook.com">
              <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
            </a>
            <p>Login with Facebook</p>
          </div>
          <div className="signup">
            <p>New to Netflix ?</p>
            <a href="https://www.netflix.com/dz-en/">Sign up now</a>
          </div>
          <div className="more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
            <Footer/>
            
        </div>
    )
}
