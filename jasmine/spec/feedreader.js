/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This helper function checks if the url
        * of a given element is defined and not empty
        */
        function checkUrl(element){
            return(element.url !== '' && typeof element.url === 'string');
        }
        /* This helper function checks if the name
        * of a given element is defined and not empty
        */
        function checkName(element){
            return(element.name !== '' && typeof element.name === 'string');
        }
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have defined URLs', function() {
            expect(allFeeds.every(checkUrl)).toBeTruthy();
         });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have defined names', function() {
            expect(allFeeds.every(checkName)).toBeTruthy();
         });
    });


    /* New test suite named "The menu" */
    describe('The menu', function() {
        /* Variable declaration, these are used to store DOM elements references */
        var body;
        var hiddenMenu;
        var menuIcon;
        /* This helper function checks if the .menu-hidden class is visible in the DOM */
        function checkVisibility(){
            return body.hasClass(hiddenMenu);
        }
        /* This functions assigns values to previously declared variables before the tests start */
        beforeEach(function() {
            body = $('body');
            hiddenMenu = 'menu-hidden';
            menuIcon = $('.menu-icon-link');
        });
        /* This test ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(checkVisibility()).toBeTruthy();
        });
         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * has two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('changes visibility on click', function(){
            menuIcon.trigger('click');
            expect(checkVisibility()).toBeFalsy();
            menuIcon.trigger('click');
            expect(checkVisibility()).toBeTruthy();
        });
    });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* This variable will contain the number of entries */
        var entriesLength;
        /* Load first Feed */
        beforeEach(function(done) {
            loadFeed(0,done);
        });
        /* This Test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * LoadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('have at least one entry', function(done){
           entriesLength = $('.entry').length;
           expect(entriesLength).toBeGreaterThan(0);
           done();
         });
    });

    /* New test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* This variable will contain the entry's HTML to compare */
        var entry0Html;
        var entry1Html;
       /* Load first Feed and get entry's HTML */
        beforeEach(function(done) {
            loadFeed(0, function(){
                entry0Html = $('.entry').html();
                done();
            });
        });
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * LoadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('changes content', function(done){
            loadFeed(1, function(){
                entry1Html = $('.entry').html();
                expect(entry0Html).not.toBe(entry1Html);
                done();
            });

        });
    });
}());
