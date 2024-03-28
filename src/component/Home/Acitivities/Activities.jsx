import React from 'react';

function Activities() {
  const imageUrls = [
    // Replace these placeholders with your actual image URLs
    'https://via.placeholder.com/250x300',
    'https://via.placeholder.com/250x300',
    'https://via.placeholder.com/250x300',
    'https://via.placeholder.com/250x300',
    'https://via.placeholder.com/250x300',
    'https://via.placeholder.com/250x300',
    'https://via.placeholder.com/250x300'
  ];

  return (
    <>
    <div className='mx-28 p-8'>
      <div className="text-center mb-3">
        <h1 className="mb-1 [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-green-500 font-serif font-medium text-xl sm:text-2xl lg:text-4xl tracking-widest mt-8 my-8">
          ACTIVITIES
        </h1>
        <p className='py-6'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2500 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.</p>
      </div>

      
      <div className="">
        <div className="flex  gap-16  justify-center flex-wrap">
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index} 
              src={imageUrl}
              alt={`Activity Image ${index + 1}`} 
              className="w-64 h-auto rounded-lg object-cover shadow-md" 
            />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Activities;
