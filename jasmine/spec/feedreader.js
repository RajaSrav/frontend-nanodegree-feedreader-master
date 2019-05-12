// strict method is used for detecting undeclared variables and code should be run in strict mode.
'use strict';
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
  // This suite is all about the RSS feeds definitions, the allFeeds variable in our application.

  describe('RSS Feeds', function() {
    // in this we are tryint to find allFeeds variable is defined or not and also findng empty or not
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    // here we are finding allFeeds must have URL fealds and also not empty toBeTruthyis is checking the both the conditions
    it("URL Defined", () => {
      for (var feed of allFeeds) {
        expect(feed.url).toBeTruthy();
      }
    });
    // here we are finding allFeeds must have Name fealds and also not empty toBeTruthyis is checking the both the conditions
    it("Name Defined", () => {
      for (var feed in allFeeds) {
        expect(allFeeds[feed].name).toBeTruthy();
      }
    });
  });
  // This is the testing suite for The Menu
  describe("The Menu", () => {
    //
    it("The menu hiding/showing", () => {
      var body = document.querySelector('body');
      expect(body.classList.contains("menu-hidden")).toBe(true);
    });
    it("the menu icon is clicked", () => {
      var body = document.querySelector('body');
      var menu = document.querySelector(".menu-icon-link");
      menu.click();
      expect(body.classList.contains("menu-hidden")).not.toBe(true);
      var body = document.querySelector('body');
      menu.click();
      var menu = document.querySelector(".menu-icon-link");
      expect(body.classList.contains("menu-hidden")).toBe(true);
    });
  });
  // This is the testing suite for Initial Entries
  describe("Initial Entries", () => {
    beforeEach((done) => {
      loadFeed(0, done);
    });
    it("completes its work", () => {
      var feed = document.querySelector(".feed .entry");
      expect(feed.children.length > 0).toBe(true);
    })
  });
  // This is the testing suite for New Feed Selection
  describe("New Feed Selection", () => {

    var first;
    var second;
    beforeEach(function(done) {

      // For loading old data
      loadFeed(0, function() {
        first = document.querySelector('.feed').innerHTML;

        // For loading new data
        loadFeed(1, function() {
          second = document.querySelector('.feed').innerHTML;
          done();
        });
      });

    });

    // Test case to compare new data with old data
    it('new feed different from old feed', function() {

      // Checking old data not be new data.
      expect(second).not.toBe(first);
    });
  });
}());
