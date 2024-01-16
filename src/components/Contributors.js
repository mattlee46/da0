import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ContributorsContainer = styled.div`
  text-align: center;
  margin-bottom: 5%;

  @media (max-width: 500px) {
    margin-bottom: 10%;
  }
`;

const Line = styled.div`
  color: ${(props) => props.color};
  margin-bottom: 3%;
  font-weight: 400;
  font-size: 1.5em;

  @media (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1.5%;



  p {
    color: #1e1e1e;
    font-weight: 600;
    font-size: 1em;
    margin: 0;
  }

  @media (max-width: 500px) {
    p {
      font-size: 1em;
    }
  }
`;

const Contributors = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://fast-tor-89558-791aa0ffeee6.herokuapp.com/api/json/users/by-id/U04FCLTTECE/epic002')
      .then((response) => response.json())
      .then((data) => {
        // Extract the epic002 array from the response data
        const epic002 = data.epic002 || [];
        // Create an object to store the counts of each user name
        const userCounts = {};
        // Iterate over the epic002 array and count user names
        epic002.forEach((item) => {
          // Extract user names from text using regular expression
          const regex = /<(?!#)(?!https?:\/\/)(?!www\.)([^<>|]*)>/g; // Match anything between "<" and ">" that does not contain "#", "http://", "https://" or "www." at the beginning
          
          const matches = item.text.match(regex);
          if (matches) {
            matches.forEach((match) => {
              const userName = match.slice(1, -1); // Remove "<" and ">" from the match
              if (userCounts[userName]) {
                userCounts[userName]++;
              } else {
                userCounts[userName] = 1;
              }
            });
          }
        });
        // Convert the userCounts object to an array of objects
        const sortedUsers = Object.entries(userCounts).map(([name, count]) => ({ name, count }));
        // Sort the array based on the count in descending order
        sortedUsers.sort((a, b) => b.count - a.count);
        // Set the sortedUsers array in state
        setUsers(sortedUsers);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ContributorsContainer>
      <Line color="#757575">prominent contributors</Line>
      {users.map((user) => (
        <TextContainer key={user.name} color="#1e1e1e" >
          <p>{user.name}</p>
          
        </TextContainer>
      ))}
    </ContributorsContainer>
  );
};

export default Contributors;

