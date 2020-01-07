const PokeReducer = (state, action) => {
    switch (action.type) {
        case 'KANTO_POKEMON':
            return [...state, {
                id: action.payload.id,
                name: action.payload.name,
                img: action.payload.img
            }]
        default:
            return state
    }
}

export default PokeReducer