# implements static JSONP with a promises interface

idDeferreds = {}

request = (id, url, options={})->
  throw new Error("no id") if !id

  deferred = $.Deferred()
  idDeferreds[id] = deferred

  requestOpts =
    crossDomain: true
    dataType: 'jsonp'
    cache: if _.has(options, 'cache') then options.cache else true
    jsonp: false
    jsonpCallback: ''

  console.log "JSONP: requesting: #{id} from: #{url}"
  try
    $.ajax url, requestOpts

    # JSONP has no error callback, so timeout after options.timeout or 30s
    setTimeout (()->
      if deferred.state()=='pending'
        console.log "JSONP: timing out request id: #{id}, url: #{url}"
        deferred.reject()
      idDeferreds[id] = null if idDeferreds[id] == deferred),
      options.timeout || 30000
  catch error
    console.log error
    deferred.reject()
    idDeferreds[id] = null if idDeferreds[id] == deferred


  deferred.promise()

response = (id, data)->
  deferred = idDeferreds[id]
  idDeferreds[id] = null

  if deferred
    deferred.resolve(data)
    deferred.promise()
  else
    console.log "JSONP: response for id: #{id} received,
      but no deferred registered"

exports.request = request
exports.response = response

window.staticJsonpResponse = response
