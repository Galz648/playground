/*
Command Pattern
- Encapsulates a request as an object, letting you parameterize clients with different requests
- Supports undoable operations and queueing of requests
- Useful for implementing features like transaction management, undo/redo functionality
*/

class Invoker {
    command: Command

    setCommand(command: Command) {
        this.command = command
    }
    executeCommand() {
        this.command.execute()
    }
}

abstract class Command {
    abstract receiver: Receiver

    constructor(r: Receiver) {
        
    }
    execute(action: Receiver) {
        Receiver
    }
}

class Command1 extends Command {
    receiver: Receiver
    constructor(r: Receiver) {
        super(r)
        this.receiver = r
    }
    execute() {
        this.receiver.action1()
    }
}
class Client {
    constructor() {
        const r = new Receiver()
        const cmd1 = new Command1()
        // const cmd2 = new Command2()
        const i = new Invoker()
        i.setCommand(cmd1)
        i.executeCommand()

    }
}
class Receiver {
    action1() { }
    action2() { }
}
