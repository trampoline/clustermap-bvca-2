# functions for the JSON API

ajax = require 'lib/ajax'

get = (url, success, error=null)->
  d = $.Deferred()

  ajax.getJSON url,
    ((response)->d.resolve response.data),
    (()->d.reject())

  d

exports.get = get
