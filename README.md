# Reddit API Calls with Snoowrap

### How an App can be integrated to Reddit?

To access data of reddit, reddit OAuth is used.

Apps can be integrated to users. Not specific to subreddits.(need more info)

Apps has to be created using [https://ssl.reddit.com/prefs/apps/](https://ssl.reddit.com/prefs/apps/)

Reddit has 3 types of communities

- Public (Anyone can view, post, and comment to this community)
- Private (Only approved users can view and submit to this community)
- Restricted (Anyone can view this community, but only approved users can post)

NPM has a popular package called `snoowrap`([https://not-an-aardvark.github.io/snoowrap/](https://not-an-aardvark.github.io/snoowrap/)) to talk with the Reddit API.

Snoowrap can list posts for **hour, day, week, month, year** and **all** for subreddits.

- Personal user details can be fetched using `getMe` method.
- Public user details can be fetched using `r.getUser('jeffbarr')`
  - Can't find a way to get the email
  - Cant find the subreddits he/she is part of
- To get subreddits I am part of `r.getSubscriptions()`
- To get posts from any public subreddit `r.getSubreddit('AskReddit').getNew()`, will return the latest posts. Other methods are also available like `getHot` and others.
- To get the replies of a thread `r.getSubmission('ID').expandReplies({ limit: Infinity, depth: Infinity })` can be used, where `ID` is the ID of the post.

> `Clients connecting via OAuth2 may make up to 60 requests per minute. Monitor the following response headers to ensure that you're not exceeding the limits: X-Ratelimit-Used: Approximate number of requests used in this period X-Ratelimit-Remaining: Approximate number of requests left to use X-Ratelimit-Reset: Approximate number of seconds to end of period`
> (https://github.com/reddit-archive/reddit/wiki/API#rules)
