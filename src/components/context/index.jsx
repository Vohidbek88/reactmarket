import { createContext, useReducer } from "react";

const initalValue = {
  data: [],
  opcls: false,
  buyproduct: [],
};

export const Context = createContext();

const reducer = (state = initalValue, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_DATA":
      return { ...state, data: payload };
    case "OP_CS":
      return { ...state, opcls: !state.opcls };
    case "BUY_PUSH":
      return { ...state, buyproduct: [...state.buyproduct, payload] };
     case 'INCR':
      return {...state,buyproduct:[...state.buyproduct.map(item=>{
if(item.id==payload){
  return{...item,quanity:item.quanity+1}
}else{
  return item
}
      })]};
      case 'DECR':
        return {...state,buyproduct:[...state.buyproduct.map(item=>{
          if(item.id==payload){
            return{...item,quanity:item.quanity>1 ? item.quanity-1:1}
          }else{
            return item
          }
                })]};
                case 'DEL':
                  return{...state,buyproduct:[...state.buyproduct.filter(item=>item.id!==payload)]};
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalValue);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
