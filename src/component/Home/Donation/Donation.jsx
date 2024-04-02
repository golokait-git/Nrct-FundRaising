import React, { useState } from 'react';
import { donationRightImage } from '../../../assets';
function Donation() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    console.log(`Selected option: ${option}`);
  };

  const handleTypeClick = (type) => {
    setSelectedType(type);
    console.log(`Selected Type: ${type}`);
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    console.log(`Selected amount: ${amount}`);
  };

  const handleCustomAmountChange = (e) => {
    setSelectedAmount(null);
    setCustomAmount(e.target.value);
  };

  const handleDonate = () => {
    const donationData = {
      selectedOption,
      selectedType,
      selectedAmount: selectedAmount ? selectedAmount : customAmount,
    };
    console.log('Donation Data:', donationData);
    // You can perform further actions like sending this data to a backend server here
  };

  const options = [
    { id: 1, name: 'Goshala', icon: '' },
    { id: 2, name: 'Vandevi Mata Mandir', icon: '' },
    { id: 3, name: 'Divine Nature Park', icon: '' },
    { id: 4, name: 'Organic Farm', icon: '' },
    { id: 5, name: 'Meditation', icon: '' },
    { id: 6, name: 'Yoga Centre', icon: '' },
    { id: 7, name: 'Naturopathy', icon: '' },
  ];

  return (
    <div className="mt-10 w-full h-full">
      <div className="text-center mb-3">
        <h1 className="mb-1 font-serif font-medium text-4xl tracking-widest [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-green-500">
          DONATION CAMPAIGN
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full md:h-4/5 w-4/5 md:w-4/5">
          <div className="flex h-[calc(100vh/1.3)]">
            <div className="w-7/12  bg-gray-200">
              <div className="mt-8 ml-5">
                <h1 className="mb-1 font-sans font-extrabold text-xl tracking-widest">
                  Where would you like to Donate?
                </h1>
                {options.map((option) => (
  <div key={option.id} className="mb-4 inline-block">
    <button
      className={`py-2 px-4 m-2 rounded-lg ${
        selectedOption === option.name ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
      }`}
      onClick={() => handleOptionClick(option.name)}
    >
      {option.name}
    </button>
  </div>
))}


                <h1 className="mb-1 font-sans font-extrabold text-xl tracking-widest">
                Donating Option:
     
                </h1>
                <div className='flex'>
                  <div className="mb-4 my-4">
                    <button
                      className={`mr-2 px-8 py-2 rounded-3xl border-[#007935] border-2 ${
                        selectedType === 'one time' ? 'bg-[#007935] text-white' : 'bg-white text-[#007935]'
                      }`}
                      onClick={() => handleTypeClick('one time')}
                    >
                      One time
                    </button>
                  </div>
                  <div className="mb-4 my-4">
                    <button
                      className={`mr-2 px-8 py-2 rounded-3xl border-[#007935] border-2 ${
                        selectedType === 'monthly' ? 'bg-[#007935] text-white' : 'bg-white text-[#007935]'
                      }`}
                      onClick={() => handleTypeClick('monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
                <h1 className="mb-1 font-sans font-extrabold text-xl tracking-widest">
                I would like to donate: 
                </h1>

                <div className="flex mb-4 gap-4">
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 500 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(500)}
        >
          500
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 1000 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(1000)}
        >
          1000
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 1500 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(1500)}
        >
          1500
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedAmount === 2000 ? 'bg-[#007935] text-white' : 'bg-white text-[#007935] font-semibold'
          }`}
          onClick={() => handleAmountClick(2000)}
        >
          2000
        </button> <span>or</span>
        <input
  type="number"
  className="border border-gray-300 px-2 py-2 rounded-lg mr-4 w-36 focus:outline-none appearance-none"
  placeholder="Enter amount"
  value={customAmount}
  onChange={handleCustomAmountChange}
/>

      </div>

      <div className="flex items-center">
      
    
      </div>

                <button className='bg-[#007935] text-white py-2 px-4 rounded-full my-4'onClick={handleDonate}>Donate Now</button>
              </div>
              {/* Content on the left side */}
            </div>
            <div className="w-5/12 relative">
  {/* Image container */}
  <div className="h-[85vh]">
    <img
      className="object-fill h-full w-full"
      src={donationRightImage}
      alt="Image"
    />
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Donation;
