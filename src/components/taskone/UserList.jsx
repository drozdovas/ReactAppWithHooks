import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border: 1px solid #000;
  padding: 20px;
  
  span {
    display: block;
    margin-bottom: 5px;
  }
`;

const UserInfo = styled.div`
  border-right: 1px solid #000;
  text-align: left;
  width: 260px;
`;

const Users = styled.div`
  max-height: 300px;
  overflow: scroll;
  margin-top: 15px;
`;

const UserList = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [value, setValue] = useState('');

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://jsonplaceholder.typicode.com/users${filter ? `?username=${encodeURIComponent(filter)}` : ''}`).then(async (response) => {
        const result = await response.json();
        setData(result);
      });
    };

    fetchData();
  }, [filter]);

  const debounce = (func, wait = 5000) => {
    let timeout = null;

    return (...args) => {
      if (timeout) clearTimeout(timeout);

      const newFunc = () => {
        func(...args);
      };

      timeout = setTimeout(newFunc, wait);
    };
  };

  const filterData = (event) => {
    setValue(event.target.value);
    const debounceFn = debounce((debounceEvent) => {
      setFilter(debounceEvent.target.value);
    });

    debounceFn(event);
  };

  return (
    <div>
      <div>
        Filter:
        <input
          type="text"
          onChange={filterData}
          value={value}
          placeholder="Enter username"
        />
      </div>
      <Users>
        {data.map((user) => (
          <Row key={user.id}>
            <UserInfo>
              <span>{`Name: ${user.name}`}</span>
              <span>{`Username: ${user.username}`}</span>
            </UserInfo>
            <div>
              <div>
                <span>{user.address.street}</span>
                <span>{user.address.suite}</span>
                <span>{user.address.city}</span>
                <span>{user.address.zipcode}</span>
              </div>
              <div>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
            </div>
          </Row>
        ))}
      </Users>
    </div>
  );
};

export default UserList;
