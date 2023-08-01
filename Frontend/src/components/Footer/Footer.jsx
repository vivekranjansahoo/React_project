
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="topfooter">
            <ul className='ul'>
                <li className='li'>
                    <div>
                        <img src="https://images.crateandbarrel.com/is/image/Crate/png-icon-CustomerService-white?fmt=png-alpha" id='im' alt="" />
                    </div>
                    <div className='t'>
                        <h2>Contact Us</h2>
                        <span>Text: 312-779-1979</span><br />
                        <span>Mon - Fri: 8 am - 8 pm CT</span><br />
                        <span>Sat - Sun: 8 am - 7 pm CT</span>
                    </div>
                </li>
                <li className='li'>
                    <div>
                        <img src="https://images.crateandbarrel.com/is/image/Crate/png-icon-CustomerService-white?fmt=png-alpha" id='im' alt="" />
                    </div>
                    <div className='t'>
                        <h2>Crate and Barrel Credit Card</h2>
                        <span>Earn Reward Dollars every time you <br /> shop* (excluding special financing <br /> purchases), plus get access to <br /> special offers and events.</span><br />
                        <span>Apply Now</span> <br />
                        <span>Mannage Your Account</span>
                    </div>
                </li>
                <li className='li'>
                    <div>
                        <img src="https://images.crateandbarrel.com/is/image/Crate/png-icon-CustomerService-white?fmt=png-alpha" id='im' alt="" />
                    </div>
                    <div className='t'>
                        <h2>Order Tracking & Schedule Delivery</h2>
                        <span>Find out when your online purchase <br /> will arrive or schedule a delivery.</span><br />
                        <span>Track Your Order</span> <br />
                        <span>Schudele Delivery</span>
                    </div>
                </li>
                <li>
                    <div className='im'>
                        <img src="https://images.crateandbarrel.com/is/image/Crate/CB-logo-GR_ampersand-white?fmt=png-alpha&wid=250&hei=419" alt="" />
                    </div>
                </li>
                
            </ul>

            <hr/>


        </div>


        <div className="topfooter">
            <ul className='ul'>
                <li className='li'>
                    <div className='t'>
                        <h2>Our Company</h2>
                        <span>About Us</span><br />
                        <span>Careers</span><br />
                        <span>Responsible Design</span><br/>
                        <span>Store Locations and Events</span>
                    </div>
                </li>
                <li className='li'>
                    <div className='t'>
                        <h2>Resources</h2>
                        <span>Customer Service</span><br />
                        <span>Account</span> <br />
                        <span>Return Policy</span><br/>
                        <span>Shipping Information</span> <br />
                        <span>Email and Text Preferences</span> <br />
                        <span>Gift CArds</span> <br />
                        <span>Catalogs</span> <br />
                        <span>Product Recalls</span> <br />
                        <span>Accessibility Statement</span> <br />
                        <span>CA SUpply Chains Act</span> <br />
                        <span>Dot Sell or share My personal Information</span> <br />
                        <span>Cookie Settings</span> <br />
                    </div>
                </li>
                <li className='li'>
                    <div className='t'>
                        <h2>Shopping App</h2>
                        <span>Trey Our view in Your room <br /> Feature manage registries and <br/> save payment info.</span><br />
                        <span id="apple"><img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" id='im' alt="" /> </span> <br />
                        
                    </div>
                </li>
                <li>
                <div className='t'>
                        <h2>Social Media</h2>
                        <span>Show us your look with: <br/>
                              #CrateStyle<br/>
                              #CrateKidsStyle<br/>
                        </span>
                        
                    </div>
                </li>
                
            </ul>

            <hr/>
            </div>

            <div className="lasttext">
                <div className='am'>
                        <h1>Crate&Barrel</h1>
                </div>
                <div className='an'>
                    <span>©2023 Crate and Barrel. All rights reserved. | Terms of Use Privacy | Site Index | Ad Choices <br/>
If you are using a screen reader and are having problems using this website, please call (800) 967-6696 for assistance.</span>
                </div>
            </div>
    </div>
  )
}

export default Footer