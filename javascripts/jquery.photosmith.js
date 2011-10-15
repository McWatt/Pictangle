(function ($) {
    $.fn.photosmith = function (options) {
        //json should look like this 
        var dummy = {
            "sets" : [
                {
                    "src" : "path/to/some/picture-01.jpg",
                    "title" : "Some awesome pic I took last summer",
                    "caption" : "Some awesome pic I took last summer.",
                    "set" : "summer pictures"
                }
            ]
        };
        var settings = {
            'template': '#photosmithTemplate',
            'hideHoverClass': 'mouseover',
            'dataSpace': dummy,
            'photoHeight': 'auto',
            'photoWidth': 'auto',
            'preloadNext': false,
            'customClass': ''
        };

        var $this = this;
            
        return this.each(function () {
            // If options exist, lets merge them with our default settings
            if (options) { 
                $.extend(settings, options);
            }

            var current = 1;
            var dataSet = settings.dataSpace['sets'];
            var dataSetZL = dataSet.length;

            function updateTemplate(current) {
                
                $this.empty();
                $(settings["template"]).tmpl(dataSet[current-1], {
                    current: current,
                    hideHoverClass: settings.hideHoverClass,
                    dataSet: dataSet,
                    photoHeight: settings.photoHeight,
                    photoWidth: settings.photoWidth
                } ).appendTo($this);
            }

            $this.addClass(settings.customClass);

            //console.log($this);

            $this.bind('click mouseenter mouseleave', function (event) {
                var $this = $(this);
                
                var $target = $(event.target);
                
                if (event.type === 'mouseenter' && settings.hideHoverClass) {
                    $this.find('.' + settings.hideHoverClass).css('display', 'block');
                }
                if (event.type === 'mouseleave' && settings.hideHoverClass) {
                    $this.find('.' + settings.hideHoverClass).css('display', 'none');
                }
                
                if ($target.hasClass('next') && event.type === 'click') {
                    
                    //return if already on last picture
                    if (current === dataSetZL){return};
                    
                    //increase index to next picture
                    current = current + 1;
                    
                    // check to see if the next picture is the last picture
                    //if (current === dataSetZL) {
                    //    updateTemplate(current);
                    //    $this.find('.next').addClass('disabled');
                    //    return;
                    //}
                    // move to the next picture
                    if (current <= dataSetZL) {
                        
                        updateTemplate(current);
                             
                        //activate prev button
                        $this.find('.prev').removeClass('disabled');
                        
                        // if last, disable next and return
                        if(current === dataSetZL){
                            $this.find('.next').addClass('disabled');
                            return;
                        }
                        
                        // preload next image
                        if(settings.preloadNext && current != dataSetZL){
                            //var preloadme = current + 1;
                            var preloadme = current;
                            imgPreload = new Image();
                            imgPreload.src = dataSet[preloadme].src;
                        }
                    }
                }
                
                if ($target.hasClass('prev') && event.type === 'click') {
                    if (current > 1) {
                        current = current - 1;
                        updateTemplate(current);
                        $this.find('.prev').removeClass('disabled');
                    }
                    if (current === 1) {
                        $this.find('.prev').addClass('disabled');
                    }
                }
                
            });
            
            // load initial template
            updateTemplate(current);

        });
    };
})(jQuery);
