const houses = ['Serpentard', 'Griffondor', 'Serdaigle', 'Pouffsoufle'];

const reducer = (state = { houses, selectedHouse: houses[Math.floor(Math.random() * 4)] }, action) => {
  switch (action.type) {
    case 'UPDATE_CHOICE_WITH_MY_INDEX':
      return { ...state, selectedHouse: state.houses[action.indexSelected] };
    default:
      return state;
  }
};

export default reducer;
