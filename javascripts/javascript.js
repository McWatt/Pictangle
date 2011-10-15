

//begin dom ready javascript
$(document).ready(function () {
    
    
    //photosmith example #1
    $('#psPhotography').photosmith({
        dataSpace: photographObject,
        photoWidth: '397px',
        photoHeight: '297px',
        hideHoverClass:'mouseover',
        preloadNext: true
    });
    //photosmith example #2
    $('#psPhotographySmall').photosmith({
        dataSpace: photographObject,
        photoWidth: '146px',
        photoHeight: '109px',
        customClass: 'small',
        hideHoverClass: '',
        preloadNext: false
    });
});

//begin js object literal
var photographObject = {
    "sets" : [
        {
            "src" : "images/photos/photo-01.jpg",
            "title" : "Ac feugiat est quis mi erat dis suscipit dictumst et sem nonummy pellentesque enim donec ridiculus elit quam",
            "caption" : "Erat non quis ornare sit lorem wisi maecenas arcu est eget mauris libero non class praesent libero tincidunt erat proin libero aliquam pede quam.",
            "set" : "Litora taciti consectetuer"
        },
        {
            "src" : "images/photos/photo-02.jpg",
            "title" : "Dui mauris euismod",
            "caption" : "In urna ullamcorper. Quam ultrices sed integer viverra faucibus. Condimentum porta fusce. Non odio quisque nam porta massa eu ad justo.",
            "set" : "Litora taciti consectetuer"
        },
        {
            "src" : "images/photos/photo-03.jpg",
            "title" : "Mauris accumsan maecenas nec fringilla phasellus vitae neque aliquam",
            "caption" : "Massa dolor elementum.",
            "set" : "Litora taciti consectetuer"
        },
        {
            "src" : "images/photos/photo-04.jpg",
            "title" : "Id et volutpat",
            "caption" : "Senectus litora malesuada maecenas ex ut non erat a est in commodo.",
            "set" : "Litora taciti consectetuer"
        },
        {
            "src" : "images/photos/photo-05.jpg",
            "title" : "Erat elit neque erat qui risus ultricies elit in",
            "caption" : "Dapibus ac doloremque sodales tellus vestibulum purus quis eu. Magna vero penatibus.",
            "set" : "Litora taciti consectetuer"
        },
        {
            "src" : "images/photos/photo-06.jpg",
            "title" : "Suspendisse massa ornare",
            "caption" : "Per orci per.",
            "set" : "Suscipit pharetra"
        },
        {
            "src" : "images/photos/photo-07.jpg",
            "title" : "Porttitor sem quam sed integer leo velit sodales wisi",
            "caption" : "Pellentesque ac taciti.",
            "set" : "Suscipit pharetra"
        },
        {
            "src" : "images/photos/photo-08.jpg",
            "title" : "Aenean metus in",
            "caption" : "Risus purus pellentesque sit aliquam metus. Lorem eget pellentesque.",
            "set" : "Suscipit pharetra"
        },
        {
            "src" : "images/photos/photo-09.jpg",
            "title" : "Felis purus maecenas pretium lacus non accusantium bibendum diam",
            "caption" : "Pharetra ipsum mauris eget duis nec leo.",
            "set" : "Suscipit pharetra"
        },
        {
            "src" : "images/photos/photo-10.jpg",
            "title" : "Mauris lorem et",
            "caption" : "Turpis qui nisl",
            "set" : "liquam in arcu molestie urna tempus lorem leo lacus dui quis augue"
        }
    ]
}

/*
Sem sem dignissim sem massa sit erat eros cum eget molestie ut quisque morbi lectus. Wisi consectetuer risus praesent eleifend at. Odio nisl amet ultrices scelerisque quisque. Magna hendrerit adipiscing. Magna nullam quis. Viverra aute et.

Lectus est congue rutrum nulla platea.  Morbi auctor scelerisque lorem sem aliquam. Sagittis lectus eget. Amet quis sed. Tellus arcu lacinia elit velit ut lacus torquent ut justo magna a mi nunc mattis. Non nullam nullam. Venenatis eros erat. Tempor per sapien. In at ante orci tellus nibh. Pellentesque metus mauris. Fringilla rhoncus justo a sed ante. Est magna commodo. Arcu euismod tincidunt est ac pede ipsum porta eget per suspendisse lacinia et ut velit. Euismod vel luctus velit nulla taciti. Iaculis at pretium. Sollicitudin dapibus non. Pellentesque quis felis interdum orci amet. Tincidunt ipsum eget. Ut aliquam vestibulum adipiscing malesuada praesent. Ipsum dolor sed. Sed class vestibulum. Pede aenean sed.

Neque nam eget vel tortor donec cras pede purus. Leo euismod ut per sed rutrum sed ut mauris. Vivamus interdum arcu sapien neque consectetuer. Dui vitae porta tellus dolor cras. Odio bibendum felis fringilla ac sapien sociis nonummy tortor. Erat hendrerit malesuada. Error quisque eleifend. Curabitur phasellus eu cum viverra nisi aliquam nec faucibus. In aliquet wisi. Dictum euismod volutpat. Porta tincidunt nulla pellentesque vel blandit. Integer enim ipsum eget arcu vestibulum. Non elit dapibus. Nulla in dignissim sodales vel.
*/