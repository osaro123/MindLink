import React, { useState } from 'react'
import {FaMinus, FaPlus} from "react-icons/fa"

const faqData = [
    {
      id: 1,
      question: "How does Paula connect patients with mental health professionals?",
      answer: "Our platform facilitates connections between patients and mental health professionals through live chat and video conferencing. After signing up, users can browse through qualified experts, choose a suitable professional, and initiate consultations."
    },
    {
      id: 2,
      question: "Is my information kept confidential on the platform?",
      answer: "Yes, confidentiality is a top priority. All interactions, including consultations and community discussions, are conducted in a secure and private environment. We adhere to strict privacy policies to ensure the protection of user data."
    },
    {
      id: 3,
      question: "What types of mental health conditions does [Your Application Name] address?",
      answer: "Our platform is designed to support individuals facing various mental health challenges, including but not limited to depression and anxiety. Our diverse team of professionals is equipped to provide assistance for a wide range of conditions."
    },
    {
      id: 4,  
      question: "How can I join the community support feature?",
      answer: "To join our supportive community, simply create an account and navigate to the community section. There, you can share your experiences, offer encouragement to others, and engage in discussions with fellow users who may be going through similar situations."
    },
    {
      id: 5,
      question: "What measures are in place to ensure the safety of users?",
      answer: "We prioritize the safety and well-being of our users. Our platform includes features such as admin oversight, content moderation, and reporting mechanisms to maintain a secure environment. If you have any concerns, our support team is readily available to assist you."
    },
  ];

  
const Faq = () => {
const [openStates, setOpenStates] = useState(Array(faqData.length).fill(false));

const toggleOpenState = (index) => {
    const newOpenStates = openStates.map((state, i) => (i === index ? !state : false));
    setOpenStates(newOpenStates);
};

return (
    <div className="sm:px-20 px-8 py-16">
        <div className="custom-grid">
            <h2 className="text-[2rem] pb-8 font-bold">Frequently asked questions</h2>
            <div>
            {faqData.map((faq, index) => (
                <div className={` bg-[#E7F2EC] p-6 rounded-md flex items-center justify-between mb-4 `} key={faq.id}>
                <div className="max-w-[750px]">
                    <h3 className="text-[1rem] pb-2 font-semibold">{faq.question}</h3>
                    {openStates[index] && <p className="text-[.8rem]">{faq.answer}</p>}
                </div>
                <button className='text-[#82C2A6]' onClick={() => toggleOpenState(index)}>
                    {openStates[index] ? <FaMinus /> : <FaPlus />}
                </button>
                </div>
            ))}
            </div>
        </div>
    </div>
);
};

export default Faq;
  
