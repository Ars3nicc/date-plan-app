import React, { useState, useEffect } from 'react';
// ...existing code...

const PostMessage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchDate = async () => {
      const response = await fetch('http://localhost:5000/get-date');
      if (response.ok) {
        const data = await response.json();
        setSelectedDate(data.selectedDate);
      } else {
        console.error('Failed to fetch date');
      }
    };

    fetchDate();
  }, []);

  // ...existing code...

  return (
    <div>
      test
      {selectedDate && <p>Selected Date: {selectedDate}</p>}
      
    </div>
  );
};

// ...existing code...
export default PostMessage;
