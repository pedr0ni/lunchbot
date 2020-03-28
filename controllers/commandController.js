module.exports = app => {
    
    app.get('/command', (req, res) => {
        res.send({result: 'success'})
    })

}