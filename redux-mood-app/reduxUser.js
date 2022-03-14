const emoji = document.querySelector("#emoji");

const INITIAL_STATE = { face: `ヽ(　￣д￣)ノ`}

function emojiReducer(state=INITIAL_STATE, action) {
    switch(action.type){
        case "SLEEPY":
            return {...state, face: `( ु⁎ᴗᵨᴗ⁎)ु.zZ`};
        case "ANGRY":
            return {...state, face: `(╯°益°)╯彡┻━┻`};
        case "HAPPY":
            return {...state, face: `◦°˚\\(*❛‿❛)/˚°◦`};
        case "SAD":
            return {...state, face: `(ಥ﹏ಥ)`};

        default:
            return state;
  
}
}

function changeFaces() {
    const currentFace = store.getState().face;
    emoji.innerHTML = currentFace;
}


const store = Redux.createStore(emojiReducer);
emoji.innerHTML = store.getState().face;
store.subscribe(changeFaces);



document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", (e) => {
        const id = e.target.id;
        store.dispatch({type: id})
    })
})
