import React from 'react'
import {
FaFacebook,
FaTwitter,
FaLinkedin
} from 'react-icons/fa'


const LSidebar = () => (
    <>
    <div className="sidebar">
      <section>
                  {/**<p className="mb-2">Phone</p>
                   <p className="mb-2"><a href="tel:#">760-555-5555</a></p>**/}
                  <h4 className="followus">Email</h4>
                  <p className="followus">
                    <a href="mailto:info@salemaziel.com">
                    info@salemaziel.com
                    </a>
                  </p>
                <h4 className="followus">Follow Us</h4>
                <div className="followus">
                  <a href="https://twitter.com" rel="nofollow noreferrer" target="_blank">
                    <FaTwitter />
                  </a>
                  <a href="https://linkedin.com" rel="nofollow noreferrer" target="_blank">
                    <FaLinkedin />
                  </a>
                  <a href="https://facebook.com" rel="nofollow noreferrer" target="_blank">
                    <FaFacebook />
                  </a>
                </div>
        <footer>

        </footer>
      </section>
      <hr />

    </div>
    </>
)

export default LSidebar