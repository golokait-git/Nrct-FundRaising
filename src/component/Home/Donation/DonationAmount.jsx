import React, { useState } from 'react';

const DonationAmount = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Reset custom amount input
    // Add logic for handling donation amount selection
    console.log(`Selected amount: ${amount}`);
  };

  const handleCustomAmountChange = (e) => {
    setSelectedAmount(null); // Clear selected amount when custom amount is entered
    setCustomAmount(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="mb-4 text-xl font-semibold">I would like to donate:</h1>

      <div className="flex mb-4 gap-4">
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 500 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(500)}
        >
          $500
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 1000 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(1000)}
        >
          $1000
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 1500 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(1500)}
        >
          $1500
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 2000 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(2000)}
        >
          $2000
        </button>
      </div>

      <div className="flex items-center">
        <input
          type="number"
          className="border border-gray-300 px-4 py-2 rounded-lg mr-4 w-32"
          placeholder="Enter amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
        />
        <button
          className="py-2 px-4 bg-[#007935] text-white rounded-lg"
          onClick={() => handleAmountClick(parseInt(customAmount))}
          disabled={!customAmount}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default DonationAmount;
