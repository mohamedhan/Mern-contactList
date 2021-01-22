import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../redux/actions/contactActions";
import ContactCard from "./ContactCard";
const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  const contacts = useSelector((state) => state.contacts.contacts);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "20px" }}>
      {contacts &&
        contacts.map((contact) => (
          <ContactCard key={contact._id} contact={contact} />
        ))}
    </div>
  );
};

export default ContactList;
