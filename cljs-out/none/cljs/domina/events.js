// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28348 = {};return obj28348;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.prevent_default[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.prevent_default["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.current_target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.current_target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.event_type[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.event_type["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.raw_event[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.raw_event["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28352 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28352 = (function (evt,f,create_listener_function,meta28353){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28353 = meta28353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28352.cljs$lang$type = true;
domina.events.t28352.cljs$lang$ctorStr = "domina.events/t28352";
domina.events.t28352.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t28352");
});
domina.events.t28352.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28352.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t28352.prototype.domina$events$Event$ = true;
domina.events.t28352.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28352.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28352.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28352.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28352.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28352.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28354){var self__ = this;
var _28354__$1 = this;return self__.meta28353;
});
domina.events.t28352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28354,meta28353__$1){var self__ = this;
var _28354__$1 = this;return (new domina.events.t28352(self__.evt,self__.f,self__.create_listener_function,meta28353__$1));
});
domina.events.__GT_t28352 = (function __GT_t28352(evt__$1,f__$1,create_listener_function__$1,meta28353){return (new domina.events.t28352(evt__$1,f__$1,create_listener_function__$1,meta28353));
});
}
return (new domina.events.t28352(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__28359(s__28360){return (new cljs.core.LazySeq(null,(function (){var s__28360__$1 = s__28360;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28360__$1);if(temp__4092__auto__)
{var s__28360__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28360__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28360__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28362 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28361 = 0;while(true){
if((i__28361 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__28361);cljs.core.chunk_append.call(null,b__28362,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28363 = (i__28361 + 1);
i__28361 = G__28363;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28362),iter__28359.call(null,cljs.core.chunk_rest.call(null,s__28360__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28362),null);
}
} else
{var node = cljs.core.first.call(null,s__28360__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28359.call(null,cljs.core.rest.call(null,s__28360__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__28372 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28373 = null;var count__28374 = 0;var i__28375 = 0;while(true){
if((i__28375 < count__28374))
{var node = cljs.core._nth.call(null,chunk__28373,i__28375);goog.events.removeAll(node);
{
var G__28380 = seq__28372;
var G__28381 = chunk__28373;
var G__28382 = count__28374;
var G__28383 = (i__28375 + 1);
seq__28372 = G__28380;
chunk__28373 = G__28381;
count__28374 = G__28382;
i__28375 = G__28383;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28372);if(temp__4092__auto__)
{var seq__28372__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28372__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28372__$1);{
var G__28384 = cljs.core.chunk_rest.call(null,seq__28372__$1);
var G__28385 = c__4189__auto__;
var G__28386 = cljs.core.count.call(null,c__4189__auto__);
var G__28387 = 0;
seq__28372 = G__28384;
chunk__28373 = G__28385;
count__28374 = G__28386;
i__28375 = G__28387;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28372__$1);goog.events.removeAll(node);
{
var G__28388 = cljs.core.next.call(null,seq__28372__$1);
var G__28389 = null;
var G__28390 = 0;
var G__28391 = 0;
seq__28372 = G__28388;
chunk__28373 = G__28389;
count__28374 = G__28390;
i__28375 = G__28391;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28376 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28377 = null;var count__28378 = 0;var i__28379 = 0;while(true){
if((i__28379 < count__28378))
{var node = cljs.core._nth.call(null,chunk__28377,i__28379);goog.events.removeAll(node,type__$1);
{
var G__28392 = seq__28376;
var G__28393 = chunk__28377;
var G__28394 = count__28378;
var G__28395 = (i__28379 + 1);
seq__28376 = G__28392;
chunk__28377 = G__28393;
count__28378 = G__28394;
i__28379 = G__28395;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28376);if(temp__4092__auto__)
{var seq__28376__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28376__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28376__$1);{
var G__28396 = cljs.core.chunk_rest.call(null,seq__28376__$1);
var G__28397 = c__4189__auto__;
var G__28398 = cljs.core.count.call(null,c__4189__auto__);
var G__28399 = 0;
seq__28376 = G__28396;
chunk__28377 = G__28397;
count__28378 = G__28398;
i__28379 = G__28399;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28376__$1);goog.events.removeAll(node,type__$1);
{
var G__28400 = cljs.core.next.call(null,seq__28376__$1);
var G__28401 = null;
var G__28402 = 0;
var G__28403 = 0;
seq__28376 = G__28400;
chunk__28377 = G__28401;
count__28378 = G__28402;
i__28379 = G__28403;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__28404 = parent;
var G__28405 = cljs.core.cons.call(null,parent,so_far);
n = G__28404;
so_far = G__28405;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28414_28422 = cljs.core.seq.call(null,ancestors);var chunk__28415_28423 = null;var count__28416_28424 = 0;var i__28417_28425 = 0;while(true){
if((i__28417_28425 < count__28416_28424))
{var n_28426 = cljs.core._nth.call(null,chunk__28415_28423,i__28417_28425);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28426;
goog.events.fireListeners(n_28426,evt.type,true,evt);
}
{
var G__28427 = seq__28414_28422;
var G__28428 = chunk__28415_28423;
var G__28429 = count__28416_28424;
var G__28430 = (i__28417_28425 + 1);
seq__28414_28422 = G__28427;
chunk__28415_28423 = G__28428;
count__28416_28424 = G__28429;
i__28417_28425 = G__28430;
continue;
}
} else
{var temp__4092__auto___28431 = cljs.core.seq.call(null,seq__28414_28422);if(temp__4092__auto___28431)
{var seq__28414_28432__$1 = temp__4092__auto___28431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28414_28432__$1))
{var c__4189__auto___28433 = cljs.core.chunk_first.call(null,seq__28414_28432__$1);{
var G__28434 = cljs.core.chunk_rest.call(null,seq__28414_28432__$1);
var G__28435 = c__4189__auto___28433;
var G__28436 = cljs.core.count.call(null,c__4189__auto___28433);
var G__28437 = 0;
seq__28414_28422 = G__28434;
chunk__28415_28423 = G__28435;
count__28416_28424 = G__28436;
i__28417_28425 = G__28437;
continue;
}
} else
{var n_28438 = cljs.core.first.call(null,seq__28414_28432__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28438;
goog.events.fireListeners(n_28438,evt.type,true,evt);
}
{
var G__28439 = cljs.core.next.call(null,seq__28414_28432__$1);
var G__28440 = null;
var G__28441 = 0;
var G__28442 = 0;
seq__28414_28422 = G__28439;
chunk__28415_28423 = G__28440;
count__28416_28424 = G__28441;
i__28417_28425 = G__28442;
continue;
}
}
} else
{}
}
break;
}
var seq__28418_28443 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28419_28444 = null;var count__28420_28445 = 0;var i__28421_28446 = 0;while(true){
if((i__28421_28446 < count__28420_28445))
{var n_28447 = cljs.core._nth.call(null,chunk__28419_28444,i__28421_28446);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28447;
goog.events.fireListeners(n_28447,evt.type,false,evt);
}
{
var G__28448 = seq__28418_28443;
var G__28449 = chunk__28419_28444;
var G__28450 = count__28420_28445;
var G__28451 = (i__28421_28446 + 1);
seq__28418_28443 = G__28448;
chunk__28419_28444 = G__28449;
count__28420_28445 = G__28450;
i__28421_28446 = G__28451;
continue;
}
} else
{var temp__4092__auto___28452 = cljs.core.seq.call(null,seq__28418_28443);if(temp__4092__auto___28452)
{var seq__28418_28453__$1 = temp__4092__auto___28452;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28418_28453__$1))
{var c__4189__auto___28454 = cljs.core.chunk_first.call(null,seq__28418_28453__$1);{
var G__28455 = cljs.core.chunk_rest.call(null,seq__28418_28453__$1);
var G__28456 = c__4189__auto___28454;
var G__28457 = cljs.core.count.call(null,c__4189__auto___28454);
var G__28458 = 0;
seq__28418_28443 = G__28455;
chunk__28419_28444 = G__28456;
count__28420_28445 = G__28457;
i__28421_28446 = G__28458;
continue;
}
} else
{var n_28459 = cljs.core.first.call(null,seq__28418_28453__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28459;
goog.events.fireListeners(n_28459,evt.type,false,evt);
}
{
var G__28460 = cljs.core.next.call(null,seq__28418_28453__$1);
var G__28461 = null;
var G__28462 = 0;
var G__28463 = 0;
seq__28418_28443 = G__28460;
chunk__28419_28444 = G__28461;
count__28420_28445 = G__28462;
i__28421_28446 = G__28463;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3429__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3429__auto__))
{return o.dispatchEvent;
} else
{return and__3429__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28470_28476 = cljs.core.seq.call(null,evt_map);var chunk__28471_28477 = null;var count__28472_28478 = 0;var i__28473_28479 = 0;while(true){
if((i__28473_28479 < count__28472_28478))
{var vec__28474_28480 = cljs.core._nth.call(null,chunk__28471_28477,i__28473_28479);var k_28481 = cljs.core.nth.call(null,vec__28474_28480,0,null);var v_28482 = cljs.core.nth.call(null,vec__28474_28480,1,null);(evt[k_28481] = v_28482);
{
var G__28483 = seq__28470_28476;
var G__28484 = chunk__28471_28477;
var G__28485 = count__28472_28478;
var G__28486 = (i__28473_28479 + 1);
seq__28470_28476 = G__28483;
chunk__28471_28477 = G__28484;
count__28472_28478 = G__28485;
i__28473_28479 = G__28486;
continue;
}
} else
{var temp__4092__auto___28487 = cljs.core.seq.call(null,seq__28470_28476);if(temp__4092__auto___28487)
{var seq__28470_28488__$1 = temp__4092__auto___28487;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28470_28488__$1))
{var c__4189__auto___28489 = cljs.core.chunk_first.call(null,seq__28470_28488__$1);{
var G__28490 = cljs.core.chunk_rest.call(null,seq__28470_28488__$1);
var G__28491 = c__4189__auto___28489;
var G__28492 = cljs.core.count.call(null,c__4189__auto___28489);
var G__28493 = 0;
seq__28470_28476 = G__28490;
chunk__28471_28477 = G__28491;
count__28472_28478 = G__28492;
i__28473_28479 = G__28493;
continue;
}
} else
{var vec__28475_28494 = cljs.core.first.call(null,seq__28470_28488__$1);var k_28495 = cljs.core.nth.call(null,vec__28475_28494,0,null);var v_28496 = cljs.core.nth.call(null,vec__28475_28494,1,null);(evt[k_28495] = v_28496);
{
var G__28497 = cljs.core.next.call(null,seq__28470_28488__$1);
var G__28498 = null;
var G__28499 = 0;
var G__28500 = 0;
seq__28470_28476 = G__28497;
chunk__28471_28477 = G__28498;
count__28472_28478 = G__28499;
i__28473_28479 = G__28500;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__28501_SHARP_){return goog.events.getListeners(p1__28501_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map