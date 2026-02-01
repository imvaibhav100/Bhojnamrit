import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
  const { language } = useLanguage();

  const content = {
    hindi: {
      title: 'हमारे बारे में',
      subtitle: 'उत्कर्ष अचार वाले के बारे में',
      storyTitle: 'हमारी कहानी',
      storyPara1: 'उत्कर्ष अचार वाले की शुरुआत एक सपने से हुई - हर घर तक पहुंचे असली घर के अचार का स्वाद। हमारे परिवार में पीढ़ियों से चली आ रही पारंपरिक विधि से हम सबसे बेहतरीन अचार बनाते हैं।',
      storyPara2: 'हमारी यात्रा एक सरल मिशन के साथ शुरू हुई: हर घर में घर के बने अचार का असली स्वाद लाना। पीढ़ियों से चली आ रही पारंपरिक पारिवारिक रेसिपी का उपयोग करते हुए, हम हर अचार को देखभाल और समर्पण के साथ बनाते हैं।',
      valuesTitle: 'हमारे मूल्य',
      values: [
        { icon: '🌱', title: 'शुद्धता', desc: 'केवल प्राकृतिक सामग्री, कोई कृत्रिम परिरक्षक या रंग नहीं' },
        { icon: '❤️', title: 'गुणवत्ता', desc: 'प्रीमियम गुणवत्ता वाली सब्जियां और प्रामाणिक भारतीय मसाले' },
        { icon: '🎯', title: 'परंपरा', desc: 'पारंपरिक रेसिपी प्रामाणिक स्वाद बनाए रखती हैं' },
        { icon: '🤝', title: 'विश्वास', desc: 'लगातार गुणवत्ता और स्वाद के माध्यम से विश्वास बनाना' }
      ],
      whyChooseTitle: 'क्यों हम खास हैं?',
      features: [
        { title: 'हाथ से चुनी गई सामग्री', desc: 'हम सब्जियों और मसालों का चयन बहुत सावधानी से करते हैं' },
        { title: 'पारंपरिक तरीके', desc: 'पारंपरिक तरीके से बनाए गए अचार में घर का स्वाद' },
        { title: 'स्वच्छता मानक', desc: 'स्वच्छता का पूरा ध्यान रखते हुए तैयार किया गया' },
        { title: 'ताज़ा बैच', desc: 'ताज़ा बनाए गए अचार की गारंटी' }
      ],
      missionTitle: 'हमारा उद्देश्य',
      missionText: '"हमारा उद्देश्य है कि हर भारतीय परिवार घर बैठे प्रामाणिक और स्वादिष्ट अचार का आनंद ले सके। हम चाहते हैं कि हमारे अचार से आपके खाने का स्वाद और भी बढ़ जाए।"'
    },
    english: {
      title: 'About Us',
      subtitle: 'About Bhojnamrit',
      storyTitle: 'Our Story',
      storyPara1: 'Bhojnamrit began with a dream - to bring the authentic taste of homemade pickles to every home. Using traditional methods passed down through generations in our family, we make the finest pickles.',
      storyPara2: 'Our journey began with a simple mission: to bring the authentic taste of homemade pickles to every household. Using traditional family recipes passed down through generations, we craft each pickle with care and dedication.',
      valuesTitle: 'Our Values',
      values: [
        { icon: '🌱', title: 'Purity', desc: 'Only natural ingredients, no artificial preservatives or colors' },
        { icon: '❤️', title: 'Quality', desc: 'Premium quality vegetables and authentic Indian spices' },
        { icon: '🎯', title: 'Tradition', desc: 'Traditional recipes maintaining authentic flavors' },
        { icon: '🤝', title: 'Trust', desc: 'Building trust through consistent quality and taste' }
      ],
      whyChooseTitle: 'Why Are We Special?',
      features: [
        { title: 'Hand-Picked Ingredients', desc: 'We carefully select vegetables and spices with great care' },
        { title: 'Traditional Methods', desc: 'Homemade taste in pickles made using traditional methods' },
        { title: 'Hygiene Standards', desc: 'Prepared with complete attention to cleanliness' },
        { title: 'Fresh Batches', desc: 'Guarantee of freshly made pickles' }
      ],
      missionTitle: 'Our Mission',
      missionText: '"Our mission is to deliver authentic, delicious pickles to every household, enhancing your meals with traditional flavors and quality you can trust."'
    }
  };

  const currentContent = content[language];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1 className="about-title fade-in">{currentContent.title}</h1>
        <p className="about-subtitle fade-in">{currentContent.subtitle}</p>
      </div>

      <div className="about-content container">
        <div className="about-story">
          <div className="story-text slide-in">
            <h2>{currentContent.storyTitle}</h2>
            <p>{currentContent.storyPara1}</p>
            <p>{currentContent.storyPara2}</p>
          </div>
          <div className="story-image slide-in">
            <div className="image-placeholder">
              <span className="placeholder-icon">🏺</span>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h2 className="section-heading">{currentContent.valuesTitle}</h2>
          <div className="values-grid">
            {currentContent.values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="why-choose-section">
          <h2 className="section-heading">{currentContent.whyChooseTitle}</h2>
          <div className="features-list">
            {currentContent.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <span className="feature-bullet">✓</span>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mission-section">
          <div className="mission-content">
            <h2>{currentContent.missionTitle}</h2>
            <p className="mission-text">
              {currentContent.missionText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
