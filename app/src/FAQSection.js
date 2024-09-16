import React, { useState } from 'react';
import './FAQSection.css';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'; 

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null); 

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); 
  };

  const faqs = [
    { question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can I change my plan later?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "What is your cancellation policy?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "How does billing work?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." },
    { question: "How do I change my account email?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible." }
  ];

  return (
    <section className="faq-section">
     
      <div className="faq-intro">
        <h2>Frequently asked questions</h2>
        <p>Everything you need to know about the product and billing.</p>
      </div>

    
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              {openFAQ === index ? <FaMinusCircle className="icon" /> : <FaPlusCircle className="icon" />}
            </div>
            {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>


      <div className="faq-contact">
        <img  src={require('./assets/images/Avatar group.png')}  alt="Still have questions?" className="faq-image" />
        <h3>Still have questions?</h3>
        <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
        <button className="get-in-touch-button">Get in touch</button>
      </div>
    </section>
  );
};

export default FAQSection;
