const commandService = require('../services/commandService')

module.exports = app => {
    
    app.post('/command', (req, res) => {
        let body = req.body;
        let command = commandService.getCommandByString(body.command)
        
        if (command == null) {
            res.send({
                replace_original: true,
                text: "This command isn't configured yet."
            })
            return
        }

        console.log(`Executed: ${command.command}`)
        command.execute()
        res.send({
            replace_original: true,
            text: command.response
        })
    })

}