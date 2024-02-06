'use client';

import Image from "next/image";
import minus from "../../public/minus-circle.svg";
import plus from "../../public/plus-circle.svg";
import React, { useState } from "react";

interface Faq {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const FAQ = ({ id, question, answer, isOpen, onToggle }: Faq) => {
  const handleToggle = () => {
    onToggle(id);
  };

  return (
    <section
      className={`faq ${
        isOpen
          ? "open bg-gray-50 border-gray-200 rounded-md dark:bg-transparent"
          : "closed bg-white border-gray-200 dark:bg-transparent"
      } transition-all ease-in-out duration-300 p-4 mb-2`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">{question}</h2>
        <button
          onClick={handleToggle}
          className="transition-all ease-in-out duration-300 "
        >
          {isOpen ? (
            <Image src={minus} alt="" className="w-8 h-8" />
          ) : (
            <Image src={plus} alt="" className="w-8 h-8" />
          )}
        </button>
      </div>
      {isOpen && <p className="mt-2 text-gray-600 dark:text-slate-200">{answer}</p>}
    </section>
  );
};

interface FAQListProps {
  faqs: Faq[];
}

const FAQList = ({ faqs }: FAQListProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div>
      {faqs.map((faq) => (
        <FAQ key={faq.id} {...faq} isOpen={faq.id === openId} onToggle={handleToggle} />
      ))}
    </div>
  );
};

export default FAQList;
