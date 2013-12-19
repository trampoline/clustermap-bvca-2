visited = $.cookie('visited')

if !visited
  $('#firsttimer').modal(show: true)

$('#firsttimer .close').on 'click', ()->
  $('#firsttimer').hide 200, ()->
    $.cookie('visited', expires: 365)
