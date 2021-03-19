require('dotenv').config();
const snoowrap = require('snoowrap');

// Authentication Setup
const r = new snoowrap({
  userAgent: 'A random string.',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOEKN,
});

// Get Personal Info
// r.getMe().then((data) => {
//   console.log(JSON.stringify(data, null, 2));
// });

// Getting Overview of an User
// r.getUser('ChoicePurpose').getOverview().then(console.log);

// Get Other User Details
// r.getUser('jeffbarr')
//   .fetch()
//   .then((user) => {
//     let newUser = {};
//     newUser.name = user.name;
//     newUser.karma = user.total_karma;
//     newUser.icon = user.icon_img;
//     newUser.description = user.subreddit.display_name.public_description;
//     console.log(newUser);
//   });

// Getting Subreddits I am Subscribed to
// r.getSubscriptions().then((details) => {
//   details.forEach((detail) => {
//     console.log(detail.display_name);
//   });
// });

//returns description, name, banner image url, header title, public description, advertiser_category,subsribers and a lot
// r.getSubreddit('uptoTech').fetch().then(console.log);

// Getting Posts
// Types of Posts that can be fetched -> hot, new, top, controversial, rising, spam(removed Items), and more
r.getSubreddit('uptoTech')
  .getHot()
  .then((posts) => {
    posts.forEach((post) => {
      let postObj = {};
      postObj.subreddit = post.subreddit.display_name;
      postObj.author = post.author.name;
      postObj.title = post.title;
      postObj.upvote = post.ups;
      postObj.awards = post.total_awards_received;
      postObj.link = post.url;
      postObj.id = post.id;
      postObj.createdUtc = post.created_utc;
      // console.log(postObj);
    });
  }); // Public Subreddit

// Getting Comments of a Submission
// r.getSubmission('m8dw99')
//   .expandReplies({ limit: Infinity, depth: Infinity })
//   .then((data) => {
//     console.log(data.title, data.selftext, data.comments);
//   });
