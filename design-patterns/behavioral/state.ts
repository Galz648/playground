/*
State Pattern
- Allows an object to alter its behavior when its internal state changes
- Makes state-specific behavior explicit and easier to maintain
- Eliminates large conditional statements for state-specific behavior
*/

class VendingMachine {
    state: State


    constructor(state: State) {
        this.state = state
    }

    
}
abstract class State {
    abstract transition()
}


class InitialState extends State {
    transition() {
        console.log("initialState: transition")
    }

}

class finalState extends State {
    transition() {
        console.log("finalState: transition")
    }
}


(() => {
    // input string
    const pattern = ""
    const input_str = ""
    const agent = RegexAgent()


})
