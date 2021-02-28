import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={'About Me'} span={'About Me'} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          {/* <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.700327595181!2d-0.13858868403737226!3d50.836714467337785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585104ec1fe1b%3A0x28b5349b15ce0c4d!2sLondon%20Road%20(Brighton)%20Train%20Station%20-%20Southern%20Railway!5e0!3m2!1sen!2suk!4v1611468671158!5m2!1sen!2suk"
            src=""
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29017.24014224146!2d89.7914783405019!3d24.61834150167965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd9188158c3df7%3A0xbd12c3d0d3cb66f9!2sPingna!5e0!3m2!1sen!2sbd!4v1614479356073!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabIndex="0"
            // loading="lazy"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={'+88016 2737 2413'}
            text2={'+88013 1731 3216'}
            title={'Phone'}
          />
          <ContactItem
            icon={email}
            text1={'jahangir.devs@.com'}
            text2={'jahangir.droid@gmail.com'}
            title={'Email'}
          />
          <ContactItem
            icon={location}
            text1={'Pingna, Jamalpur, Dhaka'}
            text2={'Bangladesh'}
            title={'Address'}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;