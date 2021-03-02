import React, { useReducer } from 'react';
import firebase from '../firebase'

export const filmContext = React.createContext()

const INIT_STATE = {
  serials: []
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_SERIALS":
      return { ...state, serials: action.payload }
    default:
      return { ...state }
  }
}

const FilmContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE)

  const getSerials = async () => {
    const db = firebase.firestore()
    const obj = await db.collection("serials").get()
    let serials = await obj.docs.map(item => ({ ...item.data(), id: item.id }))
    dispatch({
      type: "GET_SERIALS",
      payload: serials
    })
  }


  return (
    <filmContext.Provider value={{
      serials: state.serials,
      getSerials
    }}>
      {children}
    </filmContext.Provider>
  );
};

export default FilmContextProvider;