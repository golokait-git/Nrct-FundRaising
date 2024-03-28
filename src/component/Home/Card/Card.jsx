import React, { useState } from 'react';

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg w-full  shadow-md p-4">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const SliderContainer = ({ cardsData }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevSlide = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextSlide = () => {
    setStartIndex((prevIndex) => Math.min(cardsData.length - 3, prevIndex + 1));
  };

  return (
    <div className="relative ">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center -m-8 mt-32 z-10 ">
        <button onClick={handlePrevSlide} className="text-white bg-[#007935] rounded-full p-1 
        focus:outline-none">
          &lt;
        </button>
        <button onClick={handleNextSlide} className="text-white bg-[#007935] rounded-full p-1  focus:outline-none">
          &gt;
        </button>
      </div>

      <div className="flex justify-center">
        <div className="container mx-auto bg-[#ECFFEA] p-4 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 justify-center ">
            {cardsData.slice(startIndex, startIndex + 3).map((card, index) => (
              <div key={index} className=''>
                <Card imageUrl={card.imageUrl} title={card.title} description={card.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SliderCard = () => {
  // Sample data for cards
  const cardsData = [
    {
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageUrl: 'https://via.placeholder.com/300x200',
      title: 'Card 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
    {
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Card 2',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        imageUrl: 'https://via.placeholder.com/300x200',
        title: 'Card 3',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      },
  ];

  return (
    <div className="App">
      <SliderContainer cardsData={cardsData} />
    </div>
  );
};

export default SliderCard;
