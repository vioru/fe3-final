export const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_THEME":
        return {...state,
            theme: state.theme === "" ? "dark" : "" };
      case "GET_DATA":
        return {...state, data: action.payload };
      case "GET_DETAIL":
        return {...state, detail: action.payload };
        ;
        case "GET_ID_DETAIL":
        return {...state, id: action.payload };
      default:
        throw new Error("Acción no existente");
    }
  };
  