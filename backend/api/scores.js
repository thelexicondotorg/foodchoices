
const makeEntityProperties = (obj) => {
    return Object.entries(obj).map(([name, value]) => {
        return {
            name,
            value
        };
    })
};

exports.init = (req, res, next) => {
    const { datastore } = req.app.locals;
    const { session, time } = req.params;
    datastore.insert({
        key: datastore.key('record'),
        data: makeEntityProperties({
            sessionId: session,
            firstPing: parseInt(time, 10)
        })
    })
    .then(() => {
        res.status(200).end();
    })
    .catch(e => {
        res.status(503).end();
    });
};

exports.ping = async (req, res, next) => {
    const { datastore } = req.app.locals;
    const { session, time } = req.params;
    try {
        const query = datastore.createQuery('record').filter('sessionId', "=", session);
        const [results, info] = await datastore.runQuery(query)
        const readKey = results[0][datastore.KEY];
        const id = Number(readKey.id);
        const transaction = datastore.transaction();
        const writeKey = datastore.key(['record', id]);
        await transaction.run();
        const [entry] = await transaction.get(writeKey);
        entry.lastPing = parseInt(time, 10);
        transaction.save({
            key: writeKey,
            data: entry,
          });
        await transaction.commit();
        res.status(200).end();
    } catch(e) {
        console.error(e.toString());
        res.status(503).end();
    }    
};

exports.submit = async (req, res, next) => {
    const { datastore } = req.app.locals;
    const { session, region, character, answers, outcome } = req.body;
    try {
        const query = datastore.createQuery('record').filter('sessionId', "=", session);
        const [results, info] = await datastore.runQuery(query)
        const readKey = results[0][datastore.KEY];
        const id = Number(readKey.id);
        const transaction = datastore.transaction();
        const writeKey = datastore.key(['record', id]);
        await transaction.run();
        const [entry] = await transaction.get(writeKey);
        entry.region = region;
        entry.character = character;
        entry.answers = answers;
        entry.outcome = outcome;
        transaction.save({
            key: writeKey,
            data: entry,
          });
        await transaction.commit();
        res.status(200).end();
    } catch(e) {
        console.error(e.toString());
        res.status(503).end();
    }    
};

exports.outcomesClicked = async (req, res, next) => {
    const { datastore } = req.app.locals;
    const { session, outcomes } = req.body;
    try {
        const query = datastore.createQuery('record').filter('sessionId', "=", session);
        const [results, info] = await datastore.runQuery(query)
        const readKey = results[0][datastore.KEY];
        const id = Number(readKey.id);
        const transaction = datastore.transaction();
        const writeKey = datastore.key(['record', id]);
        await transaction.run();
        const [entry] = await transaction.get(writeKey);
        entry.clickedOutcomes = outcomes;
        transaction.save({
            key: writeKey,
            data: entry,
          });
        await transaction.commit();
        res.status(200).end();
    } catch(e) {
        console.error(e.toString());
        res.status(503).end();
    }    
};

exports.yesNo = (req, res, next) => {
    const { gamelet } = req.params;
    const { datastore } = req.app.locals;
    const query = datastore.createQuery('record');
    datastore.runQuery(query)
        .then(([results, info]) => {
            const allAnswers = results
                .reduce((prev, cur) => {
                    if (!cur.answers) {
                        return prev;
                    }
                    return prev.concat(cur.answers.filter(a => a.gamelet === gamelet));
                }, []);
            let yesCount = 0;
            let noCount = 0;
            allAnswers.forEach(a => {
                if (a.answer === "Yes") {
                    ++yesCount;
                } else {
                    ++noCount;
                }
            });
            const answerCount = Math.max(allAnswers.length, 1);
            const reply = {
                Yes: yesCount / answerCount,
                No: noCount / answerCount,
            };
            res.json(reply);
        })
        .catch(e => {
            console.error(e.message);
            res.status(503).end();
        });
};

exports.getAll = (req, res, next) => {
    const { datastore } = req.app.locals;
    const query = datastore.createQuery('record');
    datastore.runQuery(query)
        .then(([results, info]) => {
            const toDate = timestamp => {
                const d = new Date(timestamp);
                return `${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
            };

            const lines = results
                .sort((a, b) => b.session - a.session)
                .map(r => (
                    `${toDate(r.session)},${r.country},${r.character},${r.outcome.health},${r.outcome.healthcare},${r.outcome.environment},${r.outcome.cultural},${r.outcome.climate}`
                ));

            // console.log(JSON.stringify(results, null, 2));
            res.set('Content-Type', 'text/csv');
            res.set('Content-Disposition', `inline; filename="foodplay-answers-${toDate(Date.now())}.csv"`);
            res.send([
                "Date,Country,Character,Health,Healthcare,Environment,Cultural,Climate",
                ...lines
            ].join("\n"));
        })
        .catch(e => {
            console.error(e.message);
            res.status(503).end();
        });
};
