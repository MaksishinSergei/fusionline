export const initialState = {
    count: 1,
    type: 0,
    selectedProducts: {
        radiator: false,
        towel: false
    },
    selectedCallback: {
        telegram: false,
        phone: false
    },
    selectedOptions: {},
    name: "",
    other: "",
    phone: "",
    formSale: {}
};

export function questionsReducer(state, action){
    switch (action.type){
        case "SET_COUNT":
            return {...state, count: action.payload};
        case "SET_TYPE":
            return {...state, type: action.payload};
        case "SET_SELECT_PRODUCTS":
            const productType = action.payload;
            return {...state, selectedProducts: {
                radiator: productType === "radiator",
                towel: productType === "towel"
            },
            type: productType === "radiator" ? 0 : 1
        };
        case "SET_SELECT_CALLBACK":
            const callbackType = action.payload;
            return {...state, selectedCallback: {
                telegram: callbackType === "telegram",
                phone: callbackType === "phone"
            }};
        case "SET_OPTIONS":
            const optionsValue = action.payload;
            return {
                ...state,
                selectedOptions: {
                ...state.selectedOptions,
                [state.count]: optionsValue
                }
            };
        case "SET_OTHER":
            return {
                ...state,
                other: action.payload,
                selectedOptions: action.payload.trim() !== "" ? {
                ...state.selectedOptions,
                [state.count]: " Другое..."
                } : state.selectedOptions
            };
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_PHONE':
            return { ...state, phone: action.payload };
        case 'SET_FORM':
            return { ...state, formSale: action.payload };
        case 'NEXT_QUESTION':
            return { 
                ...state, 
                count: state.count < 6 ? state.count + 1 : state.count 
            };
        case 'PREV_QUESTION':
            return { 
                ...state, 
                count: state.count > 1 ? state.count - 1 : state.count 
            };
        case 'RESET_OTHER':
            return { ...state, other: "" };
        default:
            return state;
    };
};