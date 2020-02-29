# Frontend Engineering assessment 👨‍💻

Develop a JavaScript web application that fetches a relevantly-sized list of posts from the mock GraphQL API and displays a histogram representing the number of posts created in each month of 2019.


## Steps

1. Created the empty app using [create-react-app](https://github.com/facebook/create-react-app)
2. Added the logic required to fetch API data in App.js
3. Created the MonthlyPostsHistogram component, which deals with formatting the data and showing the histogram
4. Built the actual Histogram using VX


## Design Choices
- The API data is fetched in App.js using the ```graphql-request``` package and is passed to the other components as "props"
- The MonthlyPostsHistogram has been created to hide the logic behind the posts' data formatting and creation of the VX histogram. It can be used as a black-box that receives the below information and shows the histogram:

```js
<MonthlyPostsHistogram posts={this.state.posts} width={1000} height={500} year={2019}/>
```

## Challenges
- Issues in converting the fetched timestamp to an actual valid date slowed down the third of the steps listed above, mainly due to initial confusion on how the fetched data was structured.
- During the fourth step, a good portion of the time was spent on reading about VX and how it works, as it was the first time I used it.