// Setup axios with baseurl

/*import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3001"
});*/

// Different fetch operations go in here!

const blogPosts = [
  {
    id: "1",
    title: "Test Post!",
    description:
      "It is always important to test all features properly! This is a test blog post with lorem ipsum content",
    thumbnailImageUrl: "/blog3.jpg",
    headerImageUrl: "/blog3.jpg",
    timeStamp: new Date().toDateString(),
    categories: "AI, Python",
    series: {
      seriesId: "",
      numberInSeries: "",
      prePostInSeries: "",
      nextPostInSeries: ""
    },
    blogContentUrl: "/blogPosts/id.html"
  }
];

const fetchBlogPostsAsync = (page, pageSize) => {
  let posts = [...blogPosts];

  return posts;
};

const fetchBlogPostAsync = id => {
  for (let i = 0; i < blogPosts.length; i++) {
    if (blogPosts[i].id === id) {
      return blogPosts[i];
    }
  }
  return null;
};

export { fetchBlogPostsAsync, fetchBlogPostAsync };