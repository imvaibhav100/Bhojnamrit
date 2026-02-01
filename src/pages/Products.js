import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Products.css';

const Products = () => {
  const { language } = useLanguage();

  const content = {
    hindi: {
      title: 'हमारे उत्पाद',
      subtitle: 'हमारा प्रीमियम अचार संग्रह',
      orderButton: 'ऑर्डर करें',
      perWeight: 'प्रति 500 ग्राम',
      contactTitle: 'अपना ऑर्डर बुक करें',
      contactText: 'थोक ऑर्डर या पूछताछ के लिए, कृपया हमसे संपर्क करें',
      products: [
        {
          name: 'मिक्स अचार',
          description: 'मौसमी सब्जियों और सुगंधित मसालों का एक स्वादिष्ट मिश्रण'
        },
        {
          name: 'कटहल का अचार',
          description: 'प्रामाणिक मसालों के साथ पारंपरिक कच्चे कटहल का अचार'
        },
        {
          name: 'आंवला का अचार',
          description: 'विटामिन सी से भरपूर खट्टा भारतीय आंवले का अचार'
        },
        {
          name: 'आम का अचार',
          description: 'कच्चे आम से बना पारंपरिक तीखा और स्वादिष्ट अचार'
        },
        {
          name: 'लाल भरवां मिर्च अचार',
          description: 'सुगंधित मसाला मिश्रण से भरी तीखी लाल मिर्च'
        },
        {
          name: 'हरी मिर्च का अचार',
          description: 'सरसों के तेल और मसालों के साथ ताज़ी हरी मिर्च का अचार'
        }
      ]
    },
    english: {
      title: 'Our Products',
      subtitle: 'Our Premium Pickle Collection',
      orderButton: 'Order Now',
      perWeight: 'per 500g',
      contactTitle: 'Book Your Order',
      contactText: 'For bulk orders or inquiries, please contact us',
      products: [
        {
          name: 'Mix Pickle',
          description: 'A delightful blend of seasonal vegetables and aromatic spices'
        },
        {
          name: 'Jackfruit Pickle',
          description: 'Traditional raw jackfruit pickle with authentic spices'
        },
        {
          name: 'Amla Pickle',
          description: 'Tangy Indian gooseberry pickle rich in Vitamin C'
        },
        {
          name: 'Mango Pickle',
          description: 'Traditional raw mango pickle with spicy and tangy flavors'
        },
        {
          name: 'Red Stuffed Chili Pickle',
          description: 'Spicy red chili stuffed with aromatic spice mix'
        },
        {
          name: 'Green Chili Pickle',
          description: 'Fresh green chili pickle with mustard oil and spices'
        }
      ]
    }
  };

  const products = [
    {
      id: 1,
      image: '/mix-pickle.jpg',
      price: '₹180'
    },
    {
      id: 2,
      image: '/kathal-achar.jpg',
      price: '₹200'
    },
    {
      id: 3,
      image: '/aawla-achar.jpg',
      price: '₹150'
    },
    {
      id: 4,
      image: '/mango-pickle.jpg',
      price: '₹190'
    },
    {
      id: 5,
      image: '/bharwa-mirch.jpg',
      price: '₹220'
    },
    {
      id: 6,
      image: '/mirch-achar.jpg',
      price: '₹160'
    }
  ];

  const currentContent = content[language];

  return (
    <div className="products-page">
      <div className="products-header">
        <h1 className="products-title fade-in">{currentContent.title}</h1>
        <p className="products-subtitle fade-in">{currentContent.subtitle}</p>
      </div>

      <div className="products-container container">
        <div className="products-grid">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={currentContent.products[index].name}
                  className="product-image"
                />
                <div className="product-overlay">
                  <button className="order-button">{currentContent.orderButton}</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name-main">{currentContent.products[index].name}</h3>
                <p className="product-description">{currentContent.products[index].description}</p>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <span className="product-weight">{currentContent.perWeight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-section">
        <div className="container">
          <h2>{currentContent.contactTitle}</h2>
          <p className="contact-text">
            {currentContent.contactText}
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>bhojnamrit@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
