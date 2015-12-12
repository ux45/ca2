jQuery(document).ready(function() 
  { 
    jQuery("a.menu-218").wrapInner("<span></span>").prepend("<i class='entypo-home'></i> ");
    jQuery("a.menu-776").wrapInner("<span></span>").prepend("<i class='entypo-info-circled' data-text='info-circled'></i> ");
    jQuery("a.menu-616").wrapInner("<span></span>").prepend(" <i class='entypo-doc-text' data-text='doc-text'></i> ");
    jQuery("a.menu-962").wrapInner("<span></span>").prepend(" <i class='entypo-flashlight' data-text='flashlight'></i> ");
    jQuery("a.menu-777").wrapInner("<span></span>").prepend(" <i class='entypo-book' data-text='book'></i> ");
     jQuery("#block-views-term-browser-block-1 .block-title").wrapInner("<span></span>").append(" <i class='toggle entypo-down-open'></i>");
     jQuery("#block-views-term-browser-block-1 .block-title").click(function(){
       jQuery("#block-views-term-browser-block-1 .block-title .toggle").toggleClass("entypo-down-open");
       jQuery("#block-views-term-browser-block-1 .block-title .toggle").toggleClass("entypo-up-open");
       jQuery("#block-views-term-browser-block-1 .view-id-term_browser").toggle();
    });
    jQuery('.form-item-field-geofield-distance-origin.form-group').addClass("input-group");
    jQuery('.form-item-field-geofield-distance-origin.form-group').append("<div class='input-group-addon'>, Chicago IL</div>");
    jQuery("#views-exposed-form-geosearchaddy-page").submit(function( event ) {
      var addressQuery = jQuery('#edit-field-geofield-distance-origin').val();
      jQuery('#edit-field-geofield-distance-origin').val(addressQuery + ", Chicago IL");
      jQuery('.form-item-field-geofield-distance-origin .input-group-addon').empty();
    });
  } 
); 
