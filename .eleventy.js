module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("toISOString", function(date) {
    return date.toISOString().split('T')[0];
  });
    // Folders to copy into output.
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("css");

    // If we use Netlify and has the _redirects file.
    eleventyConfig.addPassthroughCopy("_redirects");
    
    eleventyConfig.addCollection("lastThreeTasks", function(collection) {
    return collection.getFilteredByTag('posts').slice().reverse().slice(0, 3)
  });
     eleventyConfig.addShortcode("lastPostTitle", function(collection) {
    return collection[collection.length-1].data.title
  });

}
