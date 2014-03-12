// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17335 = {};return obj17335;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17339 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17339 = (function (evt,f,create_listener_function,meta17340){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17340 = meta17340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17339.cljs$lang$type = true;
domina.events.t17339.cljs$lang$ctorStr = "domina.events/t17339";
domina.events.t17339.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t17339");
});
domina.events.t17339.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17339.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t17339.prototype.domina$events$Event$ = true;
domina.events.t17339.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17339.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17339.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17339.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17339.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17339.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17341){var self__ = this;
var _17341__$1 = this;return self__.meta17340;
});
domina.events.t17339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17341,meta17340__$1){var self__ = this;
var _17341__$1 = this;return (new domina.events.t17339(self__.evt,self__.f,self__.create_listener_function,meta17340__$1));
});
domina.events.__GT_t17339 = (function __GT_t17339(evt__$1,f__$1,create_listener_function__$1,meta17340){return (new domina.events.t17339(evt__$1,f__$1,create_listener_function__$1,meta17340));
});
}
return (new domina.events.t17339(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__17346(s__17347){return (new cljs.core.LazySeq(null,(function (){var s__17347__$1 = s__17347;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17347__$1);if(temp__4092__auto__)
{var s__17347__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17347__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17347__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17349 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17348 = 0;while(true){
if((i__17348 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__17348);cljs.core.chunk_append.call(null,b__17349,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17350 = (i__17348 + 1);
i__17348 = G__17350;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17349),iter__17346.call(null,cljs.core.chunk_rest.call(null,s__17347__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17349),null);
}
} else
{var node = cljs.core.first.call(null,s__17347__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17346.call(null,cljs.core.rest.call(null,s__17347__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__17359 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17360 = null;var count__17361 = 0;var i__17362 = 0;while(true){
if((i__17362 < count__17361))
{var node = cljs.core._nth.call(null,chunk__17360,i__17362);goog.events.removeAll(node);
{
var G__17367 = seq__17359;
var G__17368 = chunk__17360;
var G__17369 = count__17361;
var G__17370 = (i__17362 + 1);
seq__17359 = G__17367;
chunk__17360 = G__17368;
count__17361 = G__17369;
i__17362 = G__17370;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17359);if(temp__4092__auto__)
{var seq__17359__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17359__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17359__$1);{
var G__17371 = cljs.core.chunk_rest.call(null,seq__17359__$1);
var G__17372 = c__4189__auto__;
var G__17373 = cljs.core.count.call(null,c__4189__auto__);
var G__17374 = 0;
seq__17359 = G__17371;
chunk__17360 = G__17372;
count__17361 = G__17373;
i__17362 = G__17374;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17359__$1);goog.events.removeAll(node);
{
var G__17375 = cljs.core.next.call(null,seq__17359__$1);
var G__17376 = null;
var G__17377 = 0;
var G__17378 = 0;
seq__17359 = G__17375;
chunk__17360 = G__17376;
count__17361 = G__17377;
i__17362 = G__17378;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17363 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17364 = null;var count__17365 = 0;var i__17366 = 0;while(true){
if((i__17366 < count__17365))
{var node = cljs.core._nth.call(null,chunk__17364,i__17366);goog.events.removeAll(node,type__$1);
{
var G__17379 = seq__17363;
var G__17380 = chunk__17364;
var G__17381 = count__17365;
var G__17382 = (i__17366 + 1);
seq__17363 = G__17379;
chunk__17364 = G__17380;
count__17365 = G__17381;
i__17366 = G__17382;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17363);if(temp__4092__auto__)
{var seq__17363__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17363__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17363__$1);{
var G__17383 = cljs.core.chunk_rest.call(null,seq__17363__$1);
var G__17384 = c__4189__auto__;
var G__17385 = cljs.core.count.call(null,c__4189__auto__);
var G__17386 = 0;
seq__17363 = G__17383;
chunk__17364 = G__17384;
count__17365 = G__17385;
i__17366 = G__17386;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17363__$1);goog.events.removeAll(node,type__$1);
{
var G__17387 = cljs.core.next.call(null,seq__17363__$1);
var G__17388 = null;
var G__17389 = 0;
var G__17390 = 0;
seq__17363 = G__17387;
chunk__17364 = G__17388;
count__17365 = G__17389;
i__17366 = G__17390;
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
var G__17391 = parent;
var G__17392 = cljs.core.cons.call(null,parent,so_far);
n = G__17391;
so_far = G__17392;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17401_17409 = cljs.core.seq.call(null,ancestors);var chunk__17402_17410 = null;var count__17403_17411 = 0;var i__17404_17412 = 0;while(true){
if((i__17404_17412 < count__17403_17411))
{var n_17413 = cljs.core._nth.call(null,chunk__17402_17410,i__17404_17412);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17413;
goog.events.fireListeners(n_17413,evt.type,true,evt);
}
{
var G__17414 = seq__17401_17409;
var G__17415 = chunk__17402_17410;
var G__17416 = count__17403_17411;
var G__17417 = (i__17404_17412 + 1);
seq__17401_17409 = G__17414;
chunk__17402_17410 = G__17415;
count__17403_17411 = G__17416;
i__17404_17412 = G__17417;
continue;
}
} else
{var temp__4092__auto___17418 = cljs.core.seq.call(null,seq__17401_17409);if(temp__4092__auto___17418)
{var seq__17401_17419__$1 = temp__4092__auto___17418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17401_17419__$1))
{var c__4189__auto___17420 = cljs.core.chunk_first.call(null,seq__17401_17419__$1);{
var G__17421 = cljs.core.chunk_rest.call(null,seq__17401_17419__$1);
var G__17422 = c__4189__auto___17420;
var G__17423 = cljs.core.count.call(null,c__4189__auto___17420);
var G__17424 = 0;
seq__17401_17409 = G__17421;
chunk__17402_17410 = G__17422;
count__17403_17411 = G__17423;
i__17404_17412 = G__17424;
continue;
}
} else
{var n_17425 = cljs.core.first.call(null,seq__17401_17419__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17425;
goog.events.fireListeners(n_17425,evt.type,true,evt);
}
{
var G__17426 = cljs.core.next.call(null,seq__17401_17419__$1);
var G__17427 = null;
var G__17428 = 0;
var G__17429 = 0;
seq__17401_17409 = G__17426;
chunk__17402_17410 = G__17427;
count__17403_17411 = G__17428;
i__17404_17412 = G__17429;
continue;
}
}
} else
{}
}
break;
}
var seq__17405_17430 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17406_17431 = null;var count__17407_17432 = 0;var i__17408_17433 = 0;while(true){
if((i__17408_17433 < count__17407_17432))
{var n_17434 = cljs.core._nth.call(null,chunk__17406_17431,i__17408_17433);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17434;
goog.events.fireListeners(n_17434,evt.type,false,evt);
}
{
var G__17435 = seq__17405_17430;
var G__17436 = chunk__17406_17431;
var G__17437 = count__17407_17432;
var G__17438 = (i__17408_17433 + 1);
seq__17405_17430 = G__17435;
chunk__17406_17431 = G__17436;
count__17407_17432 = G__17437;
i__17408_17433 = G__17438;
continue;
}
} else
{var temp__4092__auto___17439 = cljs.core.seq.call(null,seq__17405_17430);if(temp__4092__auto___17439)
{var seq__17405_17440__$1 = temp__4092__auto___17439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17405_17440__$1))
{var c__4189__auto___17441 = cljs.core.chunk_first.call(null,seq__17405_17440__$1);{
var G__17442 = cljs.core.chunk_rest.call(null,seq__17405_17440__$1);
var G__17443 = c__4189__auto___17441;
var G__17444 = cljs.core.count.call(null,c__4189__auto___17441);
var G__17445 = 0;
seq__17405_17430 = G__17442;
chunk__17406_17431 = G__17443;
count__17407_17432 = G__17444;
i__17408_17433 = G__17445;
continue;
}
} else
{var n_17446 = cljs.core.first.call(null,seq__17405_17440__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17446;
goog.events.fireListeners(n_17446,evt.type,false,evt);
}
{
var G__17447 = cljs.core.next.call(null,seq__17405_17440__$1);
var G__17448 = null;
var G__17449 = 0;
var G__17450 = 0;
seq__17405_17430 = G__17447;
chunk__17406_17431 = G__17448;
count__17407_17432 = G__17449;
i__17408_17433 = G__17450;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17457_17463 = cljs.core.seq.call(null,evt_map);var chunk__17458_17464 = null;var count__17459_17465 = 0;var i__17460_17466 = 0;while(true){
if((i__17460_17466 < count__17459_17465))
{var vec__17461_17467 = cljs.core._nth.call(null,chunk__17458_17464,i__17460_17466);var k_17468 = cljs.core.nth.call(null,vec__17461_17467,0,null);var v_17469 = cljs.core.nth.call(null,vec__17461_17467,1,null);(evt[k_17468] = v_17469);
{
var G__17470 = seq__17457_17463;
var G__17471 = chunk__17458_17464;
var G__17472 = count__17459_17465;
var G__17473 = (i__17460_17466 + 1);
seq__17457_17463 = G__17470;
chunk__17458_17464 = G__17471;
count__17459_17465 = G__17472;
i__17460_17466 = G__17473;
continue;
}
} else
{var temp__4092__auto___17474 = cljs.core.seq.call(null,seq__17457_17463);if(temp__4092__auto___17474)
{var seq__17457_17475__$1 = temp__4092__auto___17474;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17457_17475__$1))
{var c__4189__auto___17476 = cljs.core.chunk_first.call(null,seq__17457_17475__$1);{
var G__17477 = cljs.core.chunk_rest.call(null,seq__17457_17475__$1);
var G__17478 = c__4189__auto___17476;
var G__17479 = cljs.core.count.call(null,c__4189__auto___17476);
var G__17480 = 0;
seq__17457_17463 = G__17477;
chunk__17458_17464 = G__17478;
count__17459_17465 = G__17479;
i__17460_17466 = G__17480;
continue;
}
} else
{var vec__17462_17481 = cljs.core.first.call(null,seq__17457_17475__$1);var k_17482 = cljs.core.nth.call(null,vec__17462_17481,0,null);var v_17483 = cljs.core.nth.call(null,vec__17462_17481,1,null);(evt[k_17482] = v_17483);
{
var G__17484 = cljs.core.next.call(null,seq__17457_17475__$1);
var G__17485 = null;
var G__17486 = 0;
var G__17487 = 0;
seq__17457_17463 = G__17484;
chunk__17458_17464 = G__17485;
count__17459_17465 = G__17486;
i__17460_17466 = G__17487;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17488_SHARP_){return goog.events.getListeners(p1__17488_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
