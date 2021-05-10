import { ADD, EDIT } from "../actions/users";
import data from "../../data/data.json";

const initialState = {
  users: data,
};
const createData = (id, name, company, email, country, phone) => ({
  id,
  name,
  company,
  email,
  country,
  phone,
  isEditMode: false,
});
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const user = createData(
        action.user.name,
        action.user.name,
        action.user.company,
        action.user.email,
        action.user.country,
        action.user.phone
      );

      return {
        ...state,
        users: state.users.concat(user),
      };

    case EDIT:
      const userIndex = state.users.findIndex(
        (usr) => usr.id === action.useri.id
      );
      const EditUser = createData(
        state.users[userIndex].id,
        action.useri.name,
        action.useri.company,
        action.useri.email,
        action.useri.country,
        action.useri.phone
      );
      console.log("action", action.useri.name);
      const updatedUsers = [...state.users];
      updatedUsers[userIndex] = EditUser;
      console.log("ss", updatedUsers[userIndex]);
      return {
        ...state,
        users: updatedUsers,
      };
  }
  return state;
};
