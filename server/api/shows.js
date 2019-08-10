const router = require('express').Router()
const { Show } = require('../db/models/index')


router.get('/', async (req, res, next) => {
  try{

  }
  catch(err){
    next(err)
  }
})


router.get('/:id', async (req, res, next) => {
  try {

  }
  catch(err){
    next(err)
  }
})


// POST ROUTES || CREATE


router.post('/', async (req, res, next) => {
  try {

  }
  catch (e) {
    next(e)
  }
})




// PUT ROUTES || UPDATE
router.put('/:id', async (req, res, next) => {
  try {

  }
  catch (err) {
    next(err)
  }
})



// DELETE ROUTES || DESTROY
router.delete('/:id', async (req, res, next) => {
  try {

  }
  catch (err) {
    next(err)
  }
})


module.exports = router
