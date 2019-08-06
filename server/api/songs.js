const router = require('express').Router()

// https://prod-heroku.s3.amazonaws.com/temp_uploads/data/003/592/170/original/songs.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4XFBRPLS5JRSO6GI%2F20190802%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20190802T154108Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=b00f77660eaebc7cf1d6c522a07d6863a686bc82502ef92726f4ec530a5d2243

router.get('/', async (req, res, next) => {
  try{

  }
  catch(err){
    next(err)
  }
})


router.get('/:id', async (req, res, next) => {
  try {

    })
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
