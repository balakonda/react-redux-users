import React from 'react';

const UserList = ({ list, editUser }) => {
  return (
    <section className="userList">
      {list.map((item) => (
        <div
          key={item.id}
          className="userItem"
          onDoubleClick={() => {
            editUser(item);
          }}
        >
          <header>{item.name}</header>
          <div>
            <p>{item.email}</p>
            <p>{item.city}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.company_name}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
export default React.memo(UserList);
