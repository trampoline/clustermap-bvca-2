$('#nav .search > a').on 'click', (e)->
  e.preventDefault()
  $(this).parent().toggleClass('open')
  $('#search').toggle()

$('#nav .map > a, #nav .lists > a').on 'click', (e)->
  e.preventDefault()
  li = $(this).parent()
  li.addClass('active').siblings('.active').removeClass('active')
  if li.is('.map')
    $('body').removeClass().addClass('view-map')
  else
    $('body').removeClass().addClass('view-lists')

$('#search button').on 'click', ()->
  $('#search input').val('').focus()

$('#map-report > a').on 'click', (e)->
  e.preventDefault()
  map = $('#map-report')
  if map.hasClass('open')
    $('#map-report').animate {right: '-270px'}, 400, ()->
      $(this).removeClass('open')
  else
    $('#map-report').animate {right: '0'}, 400, ()->
      $(this).addClass('open')
