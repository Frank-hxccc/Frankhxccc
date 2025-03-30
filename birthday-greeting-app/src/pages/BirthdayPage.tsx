// filepath: /birthday-greeting-app/birthday-greeting-app/src/pages/BirthdayPage.tsx
import React from 'react';
import BirthdayCard from '../components/BirthdayCard';

const BirthdayPage: React.FC = () => {
  const greetings = [
    { name: 'Alice', message: 'Happy Birthday, Alice! Wishing you a wonderful year ahead!' },
    { name: 'Bob', message: 'Happy Birthday, Bob! Enjoy your special day!' },
    { name: 'Charlie', message: 'Happy Birthday, Charlie! May all your wishes come true!' },
  ];

  return (
    <div>
      <h1>Birthday Greetings</h1>
      {greetings.map((greeting, index) => (
        <BirthdayCard key={index} name={greeting.name} message={greeting.message} />
      ))}
    </div>
  );
};

export default BirthdayPage;