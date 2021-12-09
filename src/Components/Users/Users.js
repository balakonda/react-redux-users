import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { editUser, getUser } from '../../Store/User/UserActions';
import UserList from './UserList';
import ManageUser from './ManageUser';

const Users = () => {
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    const initialData = state.users;
    return initialData.map((item) => ({
      id: item.id,
      name: item.name,
      email: item.email,
      city: item.address.city,
      phone: item.phone,
      website: item.website,
      company_name: item.company.name,
    }));
  }, shallowEqual);

  const [inputField, setInputField] = useState({
    id: '',
    name: '',
    email: '',
    city: '',
    phone: '',
    website: '',
    company_name: '',
  });

  const submitEvent = (item) => {
    dispatch(editUser({ ...item }));
    setShowUser(false);
  };

  const editUserEvent = (item) => {
    setInputField({
      ...item,
    });
    setShowUser(true);
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <UserList list={users} editUser={editUserEvent} />
      <ManageUser
        inputsData={inputField}
        submit={submitEvent}
        show={showUser}
      />
    </>
  );
};

export default Users;
