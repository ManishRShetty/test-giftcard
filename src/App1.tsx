import { useState } from 'react';

// Helper component for the FAQ items in the "Need to Know" section
const FaqItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="mb-4">
    <h4 className="font-bold text-gray-800">• {question}</h4>
    <p className="text-gray-600 pl-4">{answer}</p>
  </div>
);

// Helper component for the gift card options
const GiftCardOption = ({ title, selected, onClick }: { title: string; selected: boolean; onClick: () => void; }) => {
  const baseClasses = "rounded-2xl p-8 h-32 flex items-center justify-center text-center cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1";
  const selectedClasses = "bg-red-100 border-2 border-red-400 text-red-700 shadow-lg";
  const defaultClasses = "bg-gray-200 text-gray-700 hover:shadow-md";

  return (
    <div
      className={`${baseClasses} ${selected ? selectedClasses : defaultClasses}`}
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};


// Main App Component
const App = () => {
  const [selectedCard, setSelectedCard] = useState<string>('Customise your gift card');
  const cardOptions = ["Happy Birthday", "Happy Anniversary", "Happy Valentine's day", "Customise your gift card"];

  return (
    <div className="bg-white font-sans p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">Buy A Gift Card</h1>
          <p className="text-lg text-gray-600">The Perfect Gift for Any Occasion</p>
        </header>

        <main>
          {/* Intro Text */}
          <p className="text-center max-w-4xl mx-auto text-gray-700 mb-10">
            Give the gift of choice with a Sparkorama gift card. From a relaxing massage to a stylish new haircut, let them choose the perfect beauty or wellness experience.
          </p>

          {/* Gift Card Options Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {cardOptions.map(option => (
               <GiftCardOption
                 key={option}
                 title={option}
                 selected={selectedCard === option}
                 onClick={() => setSelectedCard(option)}
               />
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-gray-800">

            {/* Column 1: How It Works */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">How It Works:</h2>
              <ol className="list-none space-y-3">
                <li><strong className="text-gray-900">1. Choose Your Amount:</strong> Select a value for your gift card.</li>
                <li><strong className="text-gray-900">2. Add a Personal Touch:</strong> Write a custom message for the recipient.</li>
                <li><strong className="text-gray-900">3. Send Instantly:</strong> The gift card is delivered directly to their email, ready to use.</li>
              </ol>
            </div>

            {/* Column 2: The Ultimate Gift & Purchase Button */}
            <div className="lg:col-span-1 text-center lg:text-left">
               <h2 className="text-2xl font-bold mb-4">The Ultimate Beauty & Wellness Gift</h2>
               <p className="text-gray-600 mb-8">
                 A Sparkorama gift card unlocks access to hundreds of top-rated salons, spas, and barbers. It's the perfect way to let someone you care about discover and book their next moment of self-care, their way.
               </p>
               <button className="bg-[#ffc404] text-gray-900 font-bold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105">
                 "Purchase a Gift Card" Button
               </button>
            </div>


            {/* Column 3: Need to Know */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Need to Know</h2>
                <FaqItem
                    question="How can the gift card be used?"
                    answer="The gift card balance can be used to book any service available on the Sparkorama app or website."
                />
                <FaqItem
                    question="Do the gift cards expire?"
                    answer="Our gift cards are valid for one year from the date of purchase, giving them plenty of time to choose their perfect experience."
                />
                <FaqItem
                    question="Can I use the gift card for multiple appointments?"
                    answer="Yes, the balance can be used across multiple bookings until it runs out."
                />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
