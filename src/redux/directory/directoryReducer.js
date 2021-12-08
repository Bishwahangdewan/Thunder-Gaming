const INITIAL_STATE = {
    sections: [
        { id: 0, title: "Newest", img: "https://oceansofgamess.com/wp-content/uploads/2021/11/InfraSpace-Free-Download-5.jpg", linkto: '/newest' },
        { id: 1, title: "Most Popular", img: "https://oceansofgamess.com/wp-content/uploads/2020/08/Call-Of-Duty-Modern-Warfare-2-Campaign-Remastered-Free-Download-2.jpg", linkto: '/mostpopular' }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default directoryReducer;