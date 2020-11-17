const router = require('express').Router()


router.get('/', (req, res) => {
    res.send("You have just hit the home page")
})


module.exports = router