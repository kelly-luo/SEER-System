const leftCustomValue = (state = {items: []}, action) => {
    switch(action.type){
        case 'ADD_LEFT_DROPDOWN':
            return { items: [...state.items, action.payload] };
        case 'RESET_LIST':
            return {
                items: [],
            };
        default:
            return state;
    }
}

export default leftCustomValue;