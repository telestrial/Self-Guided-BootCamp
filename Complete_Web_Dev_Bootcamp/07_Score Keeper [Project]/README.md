# Score Keeper Project
This is small project that mimics a score card for a game of ping pong. It uses event listeners to increment score on button clicks. You can set the "winning" score and, once either side reaches it, the color of the scores are changed and no other points are allowed to be input. This was a fun one! 

After the smoothness of previous sections, I felt that this would be a piece of cake. For the most part, I was right. However, one challenge I ran into that I remember over a month later now was replacing innerText vs. replacing innerHTML. I was trying to change color but didn't realize that the entire title tag that contained these stores was being replaced, leaving out the spans with classes that I was using to apply the win or lose colors. This was a great opportunity to open the google dev tools and take a look directly at the source while the code was running to understand what was going wrong. I've used that trick many, many times since when diagnosing a front-end/display problem.