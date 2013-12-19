# functions to GET JSON

getJSON = (url, success, error=null) ->
  console.log("getJSON: #{url}")
  $.ajax
    dataType: "json",
    url: url,
    success: success
    error: error

getDeferredJSON = (url, opts={} )->
  d = $.Deferred()
  getJSON url,
    ((data)->
      if opts.post_fn
        d.resolve opts.post_fn(data)
      else
        d.resolve data),
    (()->d.reject())
  d.promise()

exports.getJSON = getJSON
exports.getDeferredJSON = getDeferredJSON
