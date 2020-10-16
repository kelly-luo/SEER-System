const rightCustomValue = (state = {items: []}, action) => {
    switch(action.type){
        case 'ADD_RIGHT_DROPDOWN':
            return { items: [...state.items, action.payload] };
        case 'RESET_LIST':
            return {
                items: [],
            };
        default:
            return state;
    }
}

export default rightCustomValue;