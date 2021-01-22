import axios from "axios";
import { GET_CONTACTS } from "../constants/actionTypes";
export const getContacts = () => (dispatch) => {
  axios
    .get("/api/contacts/")
    // .then(res=>  console.log(res.data) )
    .then((res) => dispatch({ type: GET_CONTACTS, payload: res.data }))
    // payload:{ msg: "data fetched", contacts }
    .catch((err) => console.log(err));
};

export const addContact = (newContact) => (dispatch) => {
  axios
    .post("/api/contacts/add", newContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
export const deleteContact = (idContact) => (dispatch) => {
  axios
    .delete(`/api/contacts/delete/${idContact}`)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
export const editContact = (idContact, editedContact) => (dispatch) => {
  axios
    .put(`/api/contacts/edit/${idContact}`, editedContact)
    .then((res) => dispatch(getContacts()))
    .catch((err) => console.log(err));
};
