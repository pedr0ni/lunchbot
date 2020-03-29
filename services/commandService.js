const commands = [
    {
        command: '/lunch',
        description: 'Enter the lunch mode',
        response: 'You have entered the lunch mode',
        execute: (args) => {

        }
    }
]

module.exports = {

    getCommandByString: (command) => {
        let query = commands.filter(c => c.command.toLowerCase() == command.toLowerCase())
        if (query.length > 0) {
            return query[0];
        }
        return null;
    }

}