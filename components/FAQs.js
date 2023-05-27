import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: 'Do I need money to start?',
    answer: 'No. We will teach you how to start with $0. The only money you need is for the subscription.'
  },
  {
    question: 'Do I need to know how to edit?',
    answer: 'We will teach you how to edit if you have an editing software, if not you can always use an AI video editor which requires no editing on your end.'
  },
  {
    question: 'Does my age matter?',
    answer: 'Of course not, we believe that age should never be a barrier to learning and pursuing your passions. Whether you are a teenager or an adult our program is designed to cater to learners of all ages.'
  },
  {
    question: 'How quickly will I get views?',
    answer: 'The quicker you implement the lessons we teach the sooner you will see results, that coupled with the effort you put in.'
  },
  {
    question: 'I do not have a lot of time available, can I still join?',
    answer: 'Absolutely! We understand everyone has different time constraints and we considered this when making the program therefore we can work with the hours you have.'
  },
  {
    question: 'I live in X country, is it a problem?',
    answer: 'We welcome participants from all countries, including your country! Our course is designed to be accessible and beneficial to individuals worldwide. Regardless of your location, the results will be the same'
  }
];

export default function FAQs() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpanded = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when entering the viewport
});  

const QuestionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scaleY(1)' : 'scaleY(0)',
});  

  return (
    <div className='w-full'>
      {faqs.map((faq, index) => (
        <animated.div ref={ref} style={QuestionAnimation} key={index} className='bg-[#2B2B2C] my-4 p-4 rounded-2xl'>
          <button className='font-bold md:font-medium text-[14px] md:text-2xl flex justify-between w-full items-center' onClick={() => toggleExpanded(index)}>
            {faq.question}
            <div className={`icon ${expandedIndex === index ? 'up' : 'down'}`}>
              {expandedIndex === index ? <BiChevronUp /> : <BiChevronDown />}
            </div>
          </button>
          <div className={`answer-container ${expandedIndex === index ? 'expanded' : ''}`}>
            <p className='my-3 text-[#858585]'>{faq.answer}</p>
          </div>
        </animated.div>
      ))}
    </div>
  );
}