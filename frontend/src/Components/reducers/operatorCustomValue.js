const operatorCustomValue = (state = {items: []}, action) => {
    switch(action.type){
        case 'ADD_MIDDLE_DROPDOWN':
            return { items: [...state.items, action.payload] };
        case 'RESET_LIST':
            return {
                items: [...state.items, []],
            };
        default:
            return state;
    }
}

export default operatorCustomValue;