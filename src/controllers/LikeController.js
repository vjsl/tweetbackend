const Tweet = require('../models/Tweet');

module.exports = {
    async store(req, res){
        const tweet = await Tweet.findById(req.params.id);
        
        tweet.set({
            likes: tweet.likes + 1
        });

        await tweet.save();

        req.io.emit("likes", tweet);

        return res.json(tweet);
    },
};