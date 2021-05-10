export const ADD = "ADD";
export const EDIT = "EDIT";

export const add = (name, company, email, country, phone) => {
  return { type: ADD, user: { name, company, email, country, phone } };
};

export const edit = (id, name, company, email, country, phone) => {
  return { type: EDIT, useri: { id, name, company, email, country, phone } };
};
