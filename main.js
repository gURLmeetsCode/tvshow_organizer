const app = require('./server');
const PORT = process.env.PORT || 3030;

const init = async () => {
  app.listen(PORT, () => console.log(`==> 🌎 Listening at http://localhost:${PORT}`))
}

init();
