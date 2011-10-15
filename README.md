#PhotoSmith beta

**PhotoSmith** is a simple plugin for adding a templated image slideshow. The plugin is in beta as it was simply a way for me to learn about jQuery plugin construction.

## Future features and improvements

 * picture animation
 * upgrade to mustache.js templating engine (or something comparable that is still supported)

## Code examples

### Common usage

    $('#photography').photosmith({
        dataSpace: photographObject,
        photoWidth: '397px',
        photoHeight: '297px',
        hideHoverClass:'mouseover',
        preloadNext: true
    });

## Options

 * **template** Default "PhotoSmithDefault". Pass the id of the jQuery Template plugin here.
 * **hideHoverClass** Default "mouseover". This is the class that will show, via CSS, elements such as picture navigation on hover. It is recommended to leave it as the default.
 * **dataSpace** Default "dummy". Pass an object literal or JSON object. See photo data for more inor.
 * **photoHeight** Default "auto". It is recommended to serve up the images at size to minimize bandwidth and wait time.
 * **photoWidth**  Default "auto".
 * **preloadNext** Default "false". The next image in the object gets pre-loaded to minimize lag.
 * **customClass** Default "". For custom styling.

## Photo data

    var myPhotoData = {
        "sets" : [
            {
                "src" : "path/to/some/picture-01.jpg",
                "title" : "Some awesome pic I took last summer",
                "caption" : "Some awesome pic I took last summer.",
                "set" : "summer pictures"
            },
            {
                "src" : "path/to/some/picture-02.jpg",
                "title" : "Some other awesome pic I took last summer",
                "caption" : "Some other awesome pic I took last summer.",
                "set" : "summer pictures"
            }
        ]
    };
