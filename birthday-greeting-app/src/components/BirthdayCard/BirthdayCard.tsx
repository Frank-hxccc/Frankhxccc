// filepath: /birthday-greeting-app/birthday-greeting-app/src/components/BirthdayCard/BirthdayCard.tsx
import React from 'react';

interface BirthdayCardProps {
  recipient: string;
  message: string;
}

const BirthdayCard: React.FC<BirthdayCardProps> = ({ recipient, message }) => {
  return (
    <div className="birthday-card">
      <h2>生日快乐, {recipient}!</h2>
      <p>{message}</p>
    </div>
  );
};

export default BirthdayCard;