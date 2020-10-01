const rightCustomValue = (state = {items: []}, action) => {
    switch(action.type){
        case 'ADD':
            return { items: [...state.items, action.payload] };
        case 'RESET_LIST':
            return {
                items: [...state.items, []],
            };
        default:
            return state;
    }
}

export default rightCustomValue;