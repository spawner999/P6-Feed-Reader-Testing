# Project Overview

This projects tests the behaviour of a Feed-Reader website, using Jasmine (http://jasmine.github.io/)


## Usage

* Clone this repo or download it in a Zip file
* Open index.html in a browser of your choice
* Look at the bottom of the page to inspect test results

## Test Description

1. loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
2. loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
3. ensures the menu element is hidden by default.
4. ensures the menu changes visibility when the menu icon is clicked. This test should has two expectations: does the menu display when clicked and does it hide when clicked again.
5. ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
6. ensures when a new feed is loaded by the loadFeed function that the content actually changes.
