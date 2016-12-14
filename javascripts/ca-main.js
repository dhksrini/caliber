//isotop initialize

$( function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };
  // bind filter button click
  $('.filters-button-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked yellow');
      $( this ).addClass('is-checked yellow');
    });
  });
  
});


$('.best-Seller .card-image').append( $( '<a href="#!" class="hoverEffect1"></a><a href="#!" class="hoverEffect1-invert"></a>' ) );




//for materialize init
$(document).ready(function() {

  $('select').material_select();

  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
  });

  $('.collapsible').collapsible({
    accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  });

  $('.materialboxed').materialbox();

  $('.modal-trigger').leanModal();

  $('.parallax').parallax();

  $(".button-collapse").sideNav();

  $('ul.tabs').tabs('select_tab', 'tab_id');


  var options = [
      {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
      {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
      {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
      {selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' }
  ];
  Materialize.scrollFire(options);

  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      //hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
      }
  );

  
  $('.tooltipped').tooltip({delay: 50});

  $('#nav-fixed .ca-invert-nav').pushpin({ top: $('#nav-fixed').offset().top });

  $('.scrollspy').scrollSpy();


  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      items: 1,
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
      }
  })


  //init niceScroll here
  $("html").niceScroll({
    cursorcolor:"#fec107",
    cursorminheight: 70,
    horizrailenabled: false
  });

});


