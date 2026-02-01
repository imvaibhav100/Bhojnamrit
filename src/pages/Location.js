import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Location.css';

const Location = () => {
  const { language } = useLanguage();

  const content = {
    hindi: {
      title: 'हमारा स्थान',
      subtitle: 'हमसे मिलें या संपर्क करें',
      addressTitle: 'हमारा पता',
      address1: 'उत्कर्ष अचार वाले',
      address2: 'मुख्य बाजार, शहर का नाम',
      address3: 'जिला, राज्य - 000000',
      contactTitle: 'संपर्क करें',
      phone: 'फोन',
      email: 'ईमेल',
      timingTitle: 'खुलने का समय',
      timingDays: 'सोमवार - शनिवार',
      timingHours: 'सुबह 9:00 - शाम 8:00',
      sunday: 'रविवार: बंद',
      mapTitle: 'हमें खोजें',
      mapText: 'गूगल मैप्स स्थान',
      mapSubtext: 'यहाँ Google Maps का iframe embed किया जा सकता है',
      mapButton: 'गूगल मैप्स में खोलें',
      directionsTitle: 'कैसे पहुंचें',
      byCar: 'कार से',
      carDesc: 'मुख्य सड़क से 5 मिनट की दूरी पर स्थित है। पार्किंग की सुविधा उपलब्ध है।',
      byBus: 'बस से',
      busDesc: 'नजदीकी बस स्टॉप से 500 मीटर की दूरी पर। मुख्य बाजार में स्थित है।',
      byTrain: 'ट्रेन से',
      trainDesc: 'रेलवे स्टेशन से 2 किलोमीटर की दूरी पर। ऑटो/टैक्सी आसानी से उपलब्ध है।',
      contactFormTitle: 'हमसे संपर्क करें',
      contactFormDesc: 'थोक ऑर्डर, कस्टम आवश्यकताओं या किसी भी प्रश्न के लिए, हमसे संपर्क करें',
      method1Title: 'कॉल या व्हाट्सएप करें',
      method2Title: 'हमें ईमेल करें',
      method3Title: 'हमारी दुकान पर आएं',
      method3Desc: 'सोमवार - शनिवार: सुबह 9:00 - शाम 8:00'
    },
    english: {
      title: 'Our Location',
      subtitle: 'Visit Us or Contact',
      addressTitle: 'Our Address',
      address1: 'Bhojnamrit',
      address2: 'Main Market, City Name',
      address3: 'District, State - 000000',
      contactTitle: 'Contact Us',
      phone: 'Phone',
      email: 'Email',
      timingTitle: 'Opening Hours',
      timingDays: 'Monday - Saturday',
      timingHours: '9:00 AM - 8:00 PM',
      sunday: 'Sunday: Closed',
      mapTitle: 'Find Us',
      mapText: 'Google Maps Location',
      mapSubtext: 'Google Maps iframe can be embedded here',
      mapButton: 'Open in Google Maps',
      directionsTitle: 'How to Reach',
      byCar: 'By Car',
      carDesc: 'Located 5 minutes from the main road. Parking facility available.',
      byBus: 'By Bus',
      busDesc: '500 meters from the nearest bus stop. Located in the main market.',
      byTrain: 'By Train',
      trainDesc: '2 kilometers from the railway station. Auto/Taxi easily available.',
      contactFormTitle: 'Contact Us',
      contactFormDesc: 'For bulk orders, custom requirements, or any queries, feel free to reach out to us',
      method1Title: 'Call or WhatsApp',
      method2Title: 'Email Us',
      method3Title: 'Visit Our Store',
      method3Desc: 'Mon - Sat: 9:00 AM - 8:00 PM'
    }
  };

  const currentContent = content[language];

  return (
    <div className="location-page">
      <div className="location-header">
        <h1 className="location-title fade-in">{currentContent.title}</h1>
        <p className="location-subtitle fade-in">{currentContent.subtitle}</p>
      </div>

      <div className="location-content container">
        <div className="location-info-section">
          <div className="info-card slide-in">
            <div className="info-icon">📍</div>
            <h3>{currentContent.addressTitle}</h3>
            <p className="address-text">
              {currentContent.address1}<br />
              {currentContent.address2}<br />
              {currentContent.address3}
            </p>
          </div>

          <div className="info-card slide-in">
            <div className="info-icon">📞</div>
            <h3>{currentContent.contactTitle}</h3>
            <div className="contact-details">
              <p><strong>{currentContent.phone}:</strong> +91 XXXXX XXXXX</p>
              <p><strong>WhatsApp:</strong> +91 XXXXX XXXXX</p>
              <p><strong>{currentContent.email}:</strong> bhojnamrit@example.com</p>
            </div>
          </div>

          <div className="info-card slide-in">
            <div className="info-icon">🕐</div>
            <h3>{currentContent.timingTitle}</h3>
            <div className="timing-details">
              <p><strong>{currentContent.timingDays}</strong></p>
              <p>{currentContent.timingHours}</p>
              <p className="closed"><strong>{currentContent.sunday}</strong></p>
            </div>
          </div>
        </div>

        <div className="map-section">
          <h2 className="section-heading">{currentContent.mapTitle}</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p className="map-text">{currentContent.mapText}</p>
              <p className="map-subtext">
                {currentContent.mapSubtext}
              </p>
              <button className="map-button">{currentContent.mapButton}</button>
            </div>
          </div>
        </div>

        <div className="directions-section">
          <h2 className="section-heading">{currentContent.directionsTitle}</h2>
          <div className="directions-grid">
            <div className="direction-card">
              <div className="direction-icon">🚗</div>
              <h4>{currentContent.byCar}</h4>
              <p>{currentContent.carDesc}</p>
            </div>
            <div className="direction-card">
              <div className="direction-icon">🚌</div>
              <h4>{currentContent.byBus}</h4>
              <p>{currentContent.busDesc}</p>
            </div>
            <div className="direction-card">
              <div className="direction-icon">🚉</div>
              <h4>{currentContent.byTrain}</h4>
              <p>{currentContent.trainDesc}</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2 className="section-heading">{currentContent.contactFormTitle}</h2>
          <p className="form-description">
            {currentContent.contactFormDesc}
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <span className="method-icon">📱</span>
              <div className="method-details">
                <h4>{currentContent.method1Title}</h4>
                <p>+91 XXXXX XXXXX</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="method-icon">✉️</span>
              <div className="method-details">
                <h4>{currentContent.method2Title}</h4>
                <p>bhojnamrit@example.com</p>
              </div>
            </div>
            <div className="contact-method">
              <span className="method-icon">💬</span>
              <div className="method-details">
                <h4>{currentContent.method3Title}</h4>
                <p>{currentContent.method3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
