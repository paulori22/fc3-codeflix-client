import Image from 'next/image';
import React from 'react';

export const UserProfile = () => {
  return (
    <div className='flex items-center space-x-4'>
      <p className='hidden cursor-not-allowed lg:inline'> Profile</p>
      <Image
        src='/user_profile.png'
        alt='Profile'
        width={40}
        height={40}
        className='cursor-pointer rounded'
      />
    </div>
  );
};
