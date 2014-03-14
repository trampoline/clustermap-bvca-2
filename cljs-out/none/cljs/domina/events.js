// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28308 = {};return obj28308;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28312 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28312 = (function (evt,f,create_listener_function,meta28313){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28313 = meta28313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28312.cljs$lang$type = true;
domina.events.t28312.cljs$lang$ctorStr = "domina.events/t28312";
domina.events.t28312.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t28312");
});
domina.events.t28312.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28312.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t28312.prototype.domina$events$Event$ = true;
domina.events.t28312.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28312.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28312.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28312.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28312.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28312.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28314){var self__ = this;
var _28314__$1 = this;return self__.meta28313;
});
domina.events.t28312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28314,meta28313__$1){var self__ = this;
var _28314__$1 = this;return (new domina.events.t28312(self__.evt,self__.f,self__.create_listener_function,meta28313__$1));
});
domina.events.__GT_t28312 = (function __GT_t28312(evt__$1,f__$1,create_listener_function__$1,meta28313){return (new domina.events.t28312(evt__$1,f__$1,create_listener_function__$1,meta28313));
});
}
return (new domina.events.t28312(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__28319(s__28320){return (new cljs.core.LazySeq(null,(function (){var s__28320__$1 = s__28320;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28320__$1);if(temp__4092__auto__)
{var s__28320__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28320__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28320__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28322 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28321 = 0;while(true){
if((i__28321 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__28321);cljs.core.chunk_append.call(null,b__28322,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28323 = (i__28321 + 1);
i__28321 = G__28323;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28322),iter__28319.call(null,cljs.core.chunk_rest.call(null,s__28320__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28322),null);
}
} else
{var node = cljs.core.first.call(null,s__28320__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28319.call(null,cljs.core.rest.call(null,s__28320__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__28332 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28333 = null;var count__28334 = 0;var i__28335 = 0;while(true){
if((i__28335 < count__28334))
{var node = cljs.core._nth.call(null,chunk__28333,i__28335);goog.events.removeAll(node);
{
var G__28340 = seq__28332;
var G__28341 = chunk__28333;
var G__28342 = count__28334;
var G__28343 = (i__28335 + 1);
seq__28332 = G__28340;
chunk__28333 = G__28341;
count__28334 = G__28342;
i__28335 = G__28343;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28332);if(temp__4092__auto__)
{var seq__28332__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28332__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28332__$1);{
var G__28344 = cljs.core.chunk_rest.call(null,seq__28332__$1);
var G__28345 = c__4189__auto__;
var G__28346 = cljs.core.count.call(null,c__4189__auto__);
var G__28347 = 0;
seq__28332 = G__28344;
chunk__28333 = G__28345;
count__28334 = G__28346;
i__28335 = G__28347;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28332__$1);goog.events.removeAll(node);
{
var G__28348 = cljs.core.next.call(null,seq__28332__$1);
var G__28349 = null;
var G__28350 = 0;
var G__28351 = 0;
seq__28332 = G__28348;
chunk__28333 = G__28349;
count__28334 = G__28350;
i__28335 = G__28351;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28337 = null;var count__28338 = 0;var i__28339 = 0;while(true){
if((i__28339 < count__28338))
{var node = cljs.core._nth.call(null,chunk__28337,i__28339);goog.events.removeAll(node,type__$1);
{
var G__28352 = seq__28336;
var G__28353 = chunk__28337;
var G__28354 = count__28338;
var G__28355 = (i__28339 + 1);
seq__28336 = G__28352;
chunk__28337 = G__28353;
count__28338 = G__28354;
i__28339 = G__28355;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28336);if(temp__4092__auto__)
{var seq__28336__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28336__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28336__$1);{
var G__28356 = cljs.core.chunk_rest.call(null,seq__28336__$1);
var G__28357 = c__4189__auto__;
var G__28358 = cljs.core.count.call(null,c__4189__auto__);
var G__28359 = 0;
seq__28336 = G__28356;
chunk__28337 = G__28357;
count__28338 = G__28358;
i__28339 = G__28359;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28336__$1);goog.events.removeAll(node,type__$1);
{
var G__28360 = cljs.core.next.call(null,seq__28336__$1);
var G__28361 = null;
var G__28362 = 0;
var G__28363 = 0;
seq__28336 = G__28360;
chunk__28337 = G__28361;
count__28338 = G__28362;
i__28339 = G__28363;
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
var G__28364 = parent;
var G__28365 = cljs.core.cons.call(null,parent,so_far);
n = G__28364;
so_far = G__28365;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28374_28382 = cljs.core.seq.call(null,ancestors);var chunk__28375_28383 = null;var count__28376_28384 = 0;var i__28377_28385 = 0;while(true){
if((i__28377_28385 < count__28376_28384))
{var n_28386 = cljs.core._nth.call(null,chunk__28375_28383,i__28377_28385);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28386;
goog.events.fireListeners(n_28386,evt.type,true,evt);
}
{
var G__28387 = seq__28374_28382;
var G__28388 = chunk__28375_28383;
var G__28389 = count__28376_28384;
var G__28390 = (i__28377_28385 + 1);
seq__28374_28382 = G__28387;
chunk__28375_28383 = G__28388;
count__28376_28384 = G__28389;
i__28377_28385 = G__28390;
continue;
}
} else
{var temp__4092__auto___28391 = cljs.core.seq.call(null,seq__28374_28382);if(temp__4092__auto___28391)
{var seq__28374_28392__$1 = temp__4092__auto___28391;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28374_28392__$1))
{var c__4189__auto___28393 = cljs.core.chunk_first.call(null,seq__28374_28392__$1);{
var G__28394 = cljs.core.chunk_rest.call(null,seq__28374_28392__$1);
var G__28395 = c__4189__auto___28393;
var G__28396 = cljs.core.count.call(null,c__4189__auto___28393);
var G__28397 = 0;
seq__28374_28382 = G__28394;
chunk__28375_28383 = G__28395;
count__28376_28384 = G__28396;
i__28377_28385 = G__28397;
continue;
}
} else
{var n_28398 = cljs.core.first.call(null,seq__28374_28392__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28398;
goog.events.fireListeners(n_28398,evt.type,true,evt);
}
{
var G__28399 = cljs.core.next.call(null,seq__28374_28392__$1);
var G__28400 = null;
var G__28401 = 0;
var G__28402 = 0;
seq__28374_28382 = G__28399;
chunk__28375_28383 = G__28400;
count__28376_28384 = G__28401;
i__28377_28385 = G__28402;
continue;
}
}
} else
{}
}
break;
}
var seq__28378_28403 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28379_28404 = null;var count__28380_28405 = 0;var i__28381_28406 = 0;while(true){
if((i__28381_28406 < count__28380_28405))
{var n_28407 = cljs.core._nth.call(null,chunk__28379_28404,i__28381_28406);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28407;
goog.events.fireListeners(n_28407,evt.type,false,evt);
}
{
var G__28408 = seq__28378_28403;
var G__28409 = chunk__28379_28404;
var G__28410 = count__28380_28405;
var G__28411 = (i__28381_28406 + 1);
seq__28378_28403 = G__28408;
chunk__28379_28404 = G__28409;
count__28380_28405 = G__28410;
i__28381_28406 = G__28411;
continue;
}
} else
{var temp__4092__auto___28412 = cljs.core.seq.call(null,seq__28378_28403);if(temp__4092__auto___28412)
{var seq__28378_28413__$1 = temp__4092__auto___28412;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28378_28413__$1))
{var c__4189__auto___28414 = cljs.core.chunk_first.call(null,seq__28378_28413__$1);{
var G__28415 = cljs.core.chunk_rest.call(null,seq__28378_28413__$1);
var G__28416 = c__4189__auto___28414;
var G__28417 = cljs.core.count.call(null,c__4189__auto___28414);
var G__28418 = 0;
seq__28378_28403 = G__28415;
chunk__28379_28404 = G__28416;
count__28380_28405 = G__28417;
i__28381_28406 = G__28418;
continue;
}
} else
{var n_28419 = cljs.core.first.call(null,seq__28378_28413__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28419;
goog.events.fireListeners(n_28419,evt.type,false,evt);
}
{
var G__28420 = cljs.core.next.call(null,seq__28378_28413__$1);
var G__28421 = null;
var G__28422 = 0;
var G__28423 = 0;
seq__28378_28403 = G__28420;
chunk__28379_28404 = G__28421;
count__28380_28405 = G__28422;
i__28381_28406 = G__28423;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28430_28436 = cljs.core.seq.call(null,evt_map);var chunk__28431_28437 = null;var count__28432_28438 = 0;var i__28433_28439 = 0;while(true){
if((i__28433_28439 < count__28432_28438))
{var vec__28434_28440 = cljs.core._nth.call(null,chunk__28431_28437,i__28433_28439);var k_28441 = cljs.core.nth.call(null,vec__28434_28440,0,null);var v_28442 = cljs.core.nth.call(null,vec__28434_28440,1,null);(evt[k_28441] = v_28442);
{
var G__28443 = seq__28430_28436;
var G__28444 = chunk__28431_28437;
var G__28445 = count__28432_28438;
var G__28446 = (i__28433_28439 + 1);
seq__28430_28436 = G__28443;
chunk__28431_28437 = G__28444;
count__28432_28438 = G__28445;
i__28433_28439 = G__28446;
continue;
}
} else
{var temp__4092__auto___28447 = cljs.core.seq.call(null,seq__28430_28436);if(temp__4092__auto___28447)
{var seq__28430_28448__$1 = temp__4092__auto___28447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28430_28448__$1))
{var c__4189__auto___28449 = cljs.core.chunk_first.call(null,seq__28430_28448__$1);{
var G__28450 = cljs.core.chunk_rest.call(null,seq__28430_28448__$1);
var G__28451 = c__4189__auto___28449;
var G__28452 = cljs.core.count.call(null,c__4189__auto___28449);
var G__28453 = 0;
seq__28430_28436 = G__28450;
chunk__28431_28437 = G__28451;
count__28432_28438 = G__28452;
i__28433_28439 = G__28453;
continue;
}
} else
{var vec__28435_28454 = cljs.core.first.call(null,seq__28430_28448__$1);var k_28455 = cljs.core.nth.call(null,vec__28435_28454,0,null);var v_28456 = cljs.core.nth.call(null,vec__28435_28454,1,null);(evt[k_28455] = v_28456);
{
var G__28457 = cljs.core.next.call(null,seq__28430_28448__$1);
var G__28458 = null;
var G__28459 = 0;
var G__28460 = 0;
seq__28430_28436 = G__28457;
chunk__28431_28437 = G__28458;
count__28432_28438 = G__28459;
i__28433_28439 = G__28460;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__28461_SHARP_){return goog.events.getListeners(p1__28461_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map