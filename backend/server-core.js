
const express = require('express');
const compression = require('compression');
const compressible = require('compressible');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const { Datastore } = require('@google-cloud/datastore');
const serveStatic = require('serve-static');

const JSON_FILE_LIMIT = "1mb";
const jsonParser = bodyParser.json({ limit: JSON_FILE_LIMIT });

function shouldCompress(req, res) {
  const type = res.get("Content-Type");
  if (type === undefined || !compressible(type)) {
    return false;
  }
  // console.log('should compress: ', req.originalUrl)
  return true;
}

app.use(compression({ filter: shouldCompress }));

const yes = require('yes-https');
app.use(yes());

// Serve current directory
// app.use(express.static('.'));
app.use(serveStatic('.', {
  maxAge: 3600,
  setHeaders: (res, path) => {
    // TODO webpack - generate bundle with unique name
    // console.log(path);
    if (serveStatic.mime.lookup(path) === 'text/html') {
      // Custom Cache-Control for HTML files
      res.setHeader('Cache-Control', 'public, max-age=0')
    } else {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

// API
const apiRouter = express.Router();
const scores = require("./api/scores.js");

apiRouter.get('/scores/init/:session/:time', scores.init);
apiRouter.get('/scores/ping/:session/:time', scores.ping);
apiRouter.post('/scores/submit', jsonParser, scores.submit);
apiRouter.post('/scores/outcomesClicked', jsonParser, scores.outcomesClicked);

apiRouter.get('/scores/yesNo/:gamelet', scores.yesNo);

apiRouter.get('/scores/getAll', scores.getAll);

app.use('/api', apiRouter);

// If no request matches, set status to 404 and send the index file
app.use((req, res, next) => {
  res.status(404).sendFile('index.html', { root: '.' });
});

exports.start = function (port) {
  
  const env = {
    "GOOGLE_APPLICATION_CREDENTIALS": "./foodskills-251802-a0fbd80f9b3a.json",
    "GOOGLE_CLOUD_PROJECT": "foodskills-251802"
  };

  const datastore = new Datastore(
    // Only enable in dev!!
    // {projectId: env.GOOGLE_CLOUD_PROJECT, keyFilename: env.GOOGLE_APPLICATION_CREDENTIALS}
  );
  app.locals.datastore = datastore;
  console.log(`Starting server..`)
  app.listen(port, () => console.log(`Server started at port ${port}`));
}
