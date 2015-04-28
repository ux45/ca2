jQuery(document).ready(function() 
  { 
    jQuery(".view-id-showpointsbyterm .views-table").addClass("tablesorter");
    jQuery(".view-id-showpointsbyterm .views-table").tablesorter( {sortList: [[0,0], [1,0]]} ); 
    jQuery(".view-id-points_base_1 .views-table").tablesorter( {sortList: [[0,0], [1,0]]} ); 
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

jQuery(function() {

  // NOTE: $.tablesorter.theme.bootstrap is ALREADY INCLUDED in the jquery.tablesorter.widgets.js
  // file; it is included here to show how you can modify the default classes
  jQuery.tablesorter.themes.bootstrap = {
    // these classes are added to the table. To see other table classes available,
    // look here: http://getbootstrap.com/css/#tables
    table      : 'table table-bordered',
    caption    : 'caption',
    header     : 'bootstrap-header', // give the header a gradient background
    footerRow  : '',
    footerCells: '',
    icons      : '', // add "icon-white" to make them white; this icon class is added to the <i> in the header
    sortNone   : 'bootstrap-icon-unsorted',
    sortAsc    : 'icon-chevron-up glyphicon glyphicon-chevron-up',     // includes classes for Bootstrap v2 & v3
    sortDesc   : 'icon-chevron-down glyphicon glyphicon-chevron-down', // includes classes for Bootstrap v2 & v3
    active     : '', // applied when column is sorted
    hover      : '', // use custom css here - bootstrap class may not override it
    filterRow  : '', // filter row class
    even       : '', // odd row zebra striping
    odd        : ''  // even row zebra striping
  };

  // call the tablesorter plugin and apply the uitheme widget
  jQuery(".views-table").tablesorter({
    // this will apply the bootstrap theme if "uitheme" widget is included
    // the widgetOptions.uitheme is no longer required to be set
    theme : "bootstrap",

    widthFixed: true,

    headerTemplate : '{content} {icon}', // new in v2.7. Needed to add the bootstrap icon!

    // widget code contained in the jquery.tablesorter.widgets.js file
    // use the zebra stripe widget if you plan on hiding any rows (filter widget)
    widgets : [ "uitheme", "filter", "zebra" ],

    widgetOptions : {
      // using the default zebra striping class name, so it actually isn't included in the theme variable above
      // this is ONLY needed for bootstrap theming if you are using the filter widget, because rows are hidden
      zebra : ["even", "odd"],

      // reset filters button
      filter_reset : ".reset"

      // set the uitheme widget to use the bootstrap theme class names
      // this is no longer required, if theme is set
      // ,uitheme : "bootstrap"

    }
  })
});