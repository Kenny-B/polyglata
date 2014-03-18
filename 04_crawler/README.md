
# Crawling bot

This kata should focus on IO manipulation. You're going to implement a web crawler which dumps the retrieved data to a local file. 

## Assignment

Implement a single method on your `Crawler`: `crawl(url, exportfile)`. This should

* Scrape the HTTP source of the url
* Write the buffer to the local exportfile

That's it! Shouldn't be too difficult, right? That depends on the language and the built-in library juice (batteries included, right Python?) :-)

## Possible addons

Since you'll be writing unit tests, you'll need a reliable url you don't have direct control of (google?). That's generally speaking not a good idea as an integration test. Solution? Write a **stub HTTP web server** which serves a single HTML file for you to crawl on. That way, your test controls the data. 

* Stub HTTP web server
* follow links - this is the actual "crawling", the above is just a simple scraper from a single web URL.
