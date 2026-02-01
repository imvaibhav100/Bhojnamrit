import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

const Home = () => {
  const { language } = useLanguage();

  const content = {
    hindi: {
      title: 'Bhojnamrit',
      subtitle: 'प्रामाणिक घर के अचार का असली स्वाद',
      description: 'पारंपरिक विधि से बनाए गए घर के अचार',
      ctaButton: 'हमारे उत्पाद देखें',
      whyChooseTitle: 'क्यों चुनें हमें?',
      features: [
        {
          icon: '🌿',
          title: '100% शुद्ध सामग्री',
          desc: 'बिना किसी रसायन के प्राकृतिक सामग्री'
        },
        {
          icon: '👨‍🍳',
          title: 'पारंपरिक विधि',
          desc: 'पुरानी पारिवारिक रेसिपी से बनाया गया'
        },
        {
          icon: '🏠',
          title: 'घर जैसा स्वाद',
          desc: 'हर कौर में असली घर का स्वाद'
        },
        {
          icon: '✨',
          title: 'ताज़ा और स्वादिष्ट',
          desc: 'नियमित रूप से ताज़ा बैच तैयार'
        }
      ],
      specialityTitle: 'हमारी विशेषता',
      specialityText: 'उत्कर्ष अचार वाले में हम पीढ़ियों से चली आ रही पारंपरिक विधि से अचार बनाते हैं। हर अचार में घर का प्यार और देसी मसालों का खास मिश्रण होता है। हमारे अचार आपके खाने का स्वाद दोगुना कर देंगे!'
    },
    english: {
      title: 'Bhojnamrit',
      subtitle: 'Authentic Homemade Pickle Taste',
      description: 'Traditional homemade pickles made with love and authentic recipes',
      ctaButton: 'View Our Products',
      whyChooseTitle: 'Why Choose Us?',
      features: [
        {
          icon: '🌿',
          title: '100% Pure Ingredients',
          desc: 'Natural ingredients without preservatives'
        },
        {
          icon: '👨‍🍳',
          title: 'Traditional Method',
          desc: 'Made using traditional family recipes'
        },
        {
          icon: '🏠',
          title: 'Homemade Taste',
          desc: 'Authentic homemade taste in every bite'
        },
        {
          icon: '✨',
          title: 'Fresh and Delicious',
          desc: 'Fresh batches made regularly'
        }
      ],
      specialityTitle: 'Our Specialty',
      specialityText: 'At Bhojnamrit, we make pickles using traditional methods passed down through generations. Every pickle contains home-made love and a special blend of Indian spices. Our pickles will double the taste of your meals!'
    }
  };

  const currentContent = content[language];

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content fade-in">
          <h1 className="hero-title">
            <span className="hindi-title">{currentContent.title}</span>
          </h1>
          <p className="hero-subtitle">
            {currentContent.subtitle}
          </p>
          <p className="hero-description">
            {currentContent.description}
          </p>
          <Link to="/products" className="cta-button">
            {currentContent.ctaButton}
          </Link>
        </div>
        <div className="hero-image fade-in">
          <div className="pickle-jar">🫙</div>
        </div>
      </div>

      <div className="features-section container">
        <h2 className="section-title">{currentContent.whyChooseTitle}</h2>
        <div className="features-grid">
          {currentContent.features.map((feature, index) => (
            <div key={index} className="feature-card slide-in">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="speciality-section">
        <div className="container">
          <h2 className="section-title">{currentContent.specialityTitle}</h2>
          <div className="speciality-content">
            <p className="speciality-text">
              {currentContent.specialityText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
