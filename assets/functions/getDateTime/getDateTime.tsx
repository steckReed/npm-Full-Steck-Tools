/*
  Purpose is to continually get the date, time, and wish [Morning/Afternoon/Evening]

  @Use:
   // Specify required ret
   - const { time } = fstGetDateTime();

   // Will continually update the following p tag
   <p>{time}</p>

  @Ret:
    - date,
    - time,
    - wish,
*/

import React from 'react';

export const fstGetDateTime = () => {
  const [initialRenderComplete, setInitialRenderComplete] = React.useState(false); // <- To Prevent Hydration Error
  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
    const timer = setInterval(() => { setDate(new Date()); }, 5000); 
    setInitialRenderComplete(true);

    return () => { clearInterval(timer); }
  }, []);

  if (!initialRenderComplete) { return { date:null, time:null, wish:null } } // <- To Prevent Hydration Error
  else {
    const day  = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    return {
      date,
      time,
      wish,
    };
  }
};
