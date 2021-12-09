import React from 'react';
import { useInput } from '../Common/InputHook';
import Modal from '../Common/Modal';

const ManageUser = ({ show, submit, inputsData }) => {
  if (!show) return null;
  const { value: name, bind: bindName } = useInput(inputsData.name);
  const { value: email, bind: bindEmail } = useInput(inputsData.email);
  const { value: city, bind: bindCity } = useInput(inputsData.city);
  const { value: phone, bind: bindPhone } = useInput(inputsData.phone);
  const { value: company_name, bind: bindCompanyName } = useInput(
    inputsData.company_name
  );
  const { value: website, bind: bindWebsite } = useInput(inputsData.website);

  const handleSubmit = (e) => {
    e.preventDefault();
    submit({
      id: inputsData.id,
      name,
      email,
      city,
      phone,
      website,
      company_name,
    });
  };
  return (
    <Modal isOpen={show}>
      <div className="miniPopup">
        <div className="card-body">
          <div className="card-title">Edit User</div>
          <form onSubmit={handleSubmit}>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="name"
                {...bindName}
              />
            </div>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="email"
                {...bindEmail}
              />
            </div>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="city"
                {...bindCity}
              />
            </div>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="phone"
                {...bindPhone}
              />
            </div>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="website"
                {...bindWebsite}
              />
            </div>
            <div className="">
              <input
                className="form-control"
                type="text"
                name="company_name"
                {...bindCompanyName}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
};
export default ManageUser;
