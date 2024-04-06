import React, { useState } from 'react';

const faqs = [
    {
        id: 1,
        question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
        answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
        id: 2,
        question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
        answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
        answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
];

const Faq = () => {
    const [openedId, setOpenedId] = useState(null);

    const toggleAnswer = (id) => {
        setOpenedId(openedId === id ? null : id);
    };

    return (
        <div className='max-w-[846px] h-auto mx-auto py-16 px-4'>
            <div>
                <h3 className='text-primary text-[27px] text-center font-secondary font-semibold'>Frequently asked questions</h3>
                <div className='gap-[15px] flex flex-col mt-[15px]'>
                    {faqs.map((faq) => (
                        <div key={faq.id} className='bg-[#FAF8FF] p-[24px]'>
                            <div className='flex items-center justify-between'>
                                <h4 className={`text-${openedId === faq.id ? 'primary' : 'black'} text-[22px] font-primary font-medium`}>{faq.question}</h4>
                                <button className='text-[28px] font-normal font-primary' onClick={() => toggleAnswer(faq.id)}>
                                    {openedId === faq.id ? "-" : "+"}
                                </button>
                            </div>
                            {openedId === faq.id && (
                                <p className='text-[#6F6C90] leading-[30px] text-[18px]'>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
