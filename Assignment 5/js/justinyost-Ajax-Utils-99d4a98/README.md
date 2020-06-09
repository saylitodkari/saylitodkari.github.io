#Ajax Utility jQuery Plugins#
	
##About##

jquery.replace_location - replaces a location with data loaded via an AJAX request initiated by a click or change JavaScript action on a DOM element

##Background##
	
##Requirements##

jQuery 1.7 &ndash; Tested jQuery 1.7+

##Installation##

1. Manual
	1. Download this: https://github.com/jtyost2/Ajax-Utils/zipball/master
	2. Unzip that download.
	3. Copy the resulting folder to your JavaScript Directory
	4. Rename the folder you just copied to @ajax-utils@

2. Git Submodule
	1. In your JavaScript directory type:
	2. `git submodule add git://github.com/jtyost2/Ajax-Utils.git ajax-utils`
	3. `git submodule init`
	4. `git submodule update`

3. Git Clone
	1 . In your JavaScript directory type
	2.`git clone git://github.com/jtyost2/Ajax-Utils.git ajax-utils`

##Usage##

Include a link to the jQuery Plugin in your HTML files
`$(objectsToUsePluginOn).replace_location();`

##Options##

1. `replaceLocation`: Data Attribute to load the location to replace with data from the AJAX request, default is `repleace-location`
2. `ajaxType`: Type of AJAX request to send, default is `POST`
3. `replaceLocationURLAttr`: Attribute to use as the url of the AJAX request, default is `href`
4. `replaceLocationURLFormAttr`: Attribute to use as the url of the AJAX request on submit event handlers, ie for  forms, default is `action`
	
##ToDo##

1. Build Unit Tests