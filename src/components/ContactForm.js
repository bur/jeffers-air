import React from 'react';
import _ from 'lodash';

export default class ContactForm extends React.Component {
    render() {
        return (
            <section className="wrapper">
                <div className="inner">
                <h4>Contact Us</h4>
                            <form name="contact" netlify="true" action="/contact-thank-you">
                                <div className="row gtr-uniform gtr-50">
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="contact-us-name" id="contact-us-name" placeholder="Name" />
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="email" name="contact-us-email" id="contact-us-email" placeholder="Email" />
                                    </div>
                                    <div className="col-6 col-12-xsmall">
                                        <input type="text" name="contact-us-phone" id="contact-us-phone" placeholder="Phone" />
                                    </div>
                                    <div className="col-12">
                                        <select name="contact-us-contact-method" id="contact-us-contact-method">
                                            <option value="">- Preferred Contact -</option>
                                            <option value="1">Phone Call</option>
                                            <option value="1">Text</option>
                                            <option value="1">Email</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <select name="contact-us-category" id="contact-us-category">
                                            <option value="">- What can we do for you? -</option>
                                            <option value="1">Repair</option>
                                            <option value="1">Tune-up</option>
                                            <option value="1">New Installations</option>
                                            <option value="1">Other</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea name="contact-us-message" id="contact-us-message" placeholder="Enter your message" rows="6" />
                                    </div>
                                    <div className="col-12">
                                        <ul className="actions">
                                            <li><input type="submit" value="Send Message" className="primary" /></li>
                                            <li><input type="reset" value="Reset" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </form>
                </div>
                            
                        </section>
        );
    }
}
