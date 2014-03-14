// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17323 = {};return obj17323;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17327 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17327 = (function (evt,f,create_listener_function,meta17328){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17328 = meta17328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17327.cljs$lang$type = true;
domina.events.t17327.cljs$lang$ctorStr = "domina.events/t17327";
domina.events.t17327.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t17327");
});
domina.events.t17327.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17327.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t17327.prototype.domina$events$Event$ = true;
domina.events.t17327.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17327.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17327.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17327.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17327.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17327.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17329){var self__ = this;
var _17329__$1 = this;return self__.meta17328;
});
domina.events.t17327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17329,meta17328__$1){var self__ = this;
var _17329__$1 = this;return (new domina.events.t17327(self__.evt,self__.f,self__.create_listener_function,meta17328__$1));
});
domina.events.__GT_t17327 = (function __GT_t17327(evt__$1,f__$1,create_listener_function__$1,meta17328){return (new domina.events.t17327(evt__$1,f__$1,create_listener_function__$1,meta17328));
});
}
return (new domina.events.t17327(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__17334(s__17335){return (new cljs.core.LazySeq(null,(function (){var s__17335__$1 = s__17335;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17335__$1);if(temp__4092__auto__)
{var s__17335__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17335__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17335__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17337 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17336 = 0;while(true){
if((i__17336 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__17336);cljs.core.chunk_append.call(null,b__17337,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17338 = (i__17336 + 1);
i__17336 = G__17338;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17337),iter__17334.call(null,cljs.core.chunk_rest.call(null,s__17335__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17337),null);
}
} else
{var node = cljs.core.first.call(null,s__17335__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17334.call(null,cljs.core.rest.call(null,s__17335__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__17347 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17348 = null;var count__17349 = 0;var i__17350 = 0;while(true){
if((i__17350 < count__17349))
{var node = cljs.core._nth.call(null,chunk__17348,i__17350);goog.events.removeAll(node);
{
var G__17355 = seq__17347;
var G__17356 = chunk__17348;
var G__17357 = count__17349;
var G__17358 = (i__17350 + 1);
seq__17347 = G__17355;
chunk__17348 = G__17356;
count__17349 = G__17357;
i__17350 = G__17358;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17347);if(temp__4092__auto__)
{var seq__17347__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17347__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17347__$1);{
var G__17359 = cljs.core.chunk_rest.call(null,seq__17347__$1);
var G__17360 = c__4189__auto__;
var G__17361 = cljs.core.count.call(null,c__4189__auto__);
var G__17362 = 0;
seq__17347 = G__17359;
chunk__17348 = G__17360;
count__17349 = G__17361;
i__17350 = G__17362;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17347__$1);goog.events.removeAll(node);
{
var G__17363 = cljs.core.next.call(null,seq__17347__$1);
var G__17364 = null;
var G__17365 = 0;
var G__17366 = 0;
seq__17347 = G__17363;
chunk__17348 = G__17364;
count__17349 = G__17365;
i__17350 = G__17366;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17351 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17352 = null;var count__17353 = 0;var i__17354 = 0;while(true){
if((i__17354 < count__17353))
{var node = cljs.core._nth.call(null,chunk__17352,i__17354);goog.events.removeAll(node,type__$1);
{
var G__17367 = seq__17351;
var G__17368 = chunk__17352;
var G__17369 = count__17353;
var G__17370 = (i__17354 + 1);
seq__17351 = G__17367;
chunk__17352 = G__17368;
count__17353 = G__17369;
i__17354 = G__17370;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17351);if(temp__4092__auto__)
{var seq__17351__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17351__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17351__$1);{
var G__17371 = cljs.core.chunk_rest.call(null,seq__17351__$1);
var G__17372 = c__4189__auto__;
var G__17373 = cljs.core.count.call(null,c__4189__auto__);
var G__17374 = 0;
seq__17351 = G__17371;
chunk__17352 = G__17372;
count__17353 = G__17373;
i__17354 = G__17374;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17351__$1);goog.events.removeAll(node,type__$1);
{
var G__17375 = cljs.core.next.call(null,seq__17351__$1);
var G__17376 = null;
var G__17377 = 0;
var G__17378 = 0;
seq__17351 = G__17375;
chunk__17352 = G__17376;
count__17353 = G__17377;
i__17354 = G__17378;
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
var G__17379 = parent;
var G__17380 = cljs.core.cons.call(null,parent,so_far);
n = G__17379;
so_far = G__17380;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17389_17397 = cljs.core.seq.call(null,ancestors);var chunk__17390_17398 = null;var count__17391_17399 = 0;var i__17392_17400 = 0;while(true){
if((i__17392_17400 < count__17391_17399))
{var n_17401 = cljs.core._nth.call(null,chunk__17390_17398,i__17392_17400);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17401;
goog.events.fireListeners(n_17401,evt.type,true,evt);
}
{
var G__17402 = seq__17389_17397;
var G__17403 = chunk__17390_17398;
var G__17404 = count__17391_17399;
var G__17405 = (i__17392_17400 + 1);
seq__17389_17397 = G__17402;
chunk__17390_17398 = G__17403;
count__17391_17399 = G__17404;
i__17392_17400 = G__17405;
continue;
}
} else
{var temp__4092__auto___17406 = cljs.core.seq.call(null,seq__17389_17397);if(temp__4092__auto___17406)
{var seq__17389_17407__$1 = temp__4092__auto___17406;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17389_17407__$1))
{var c__4189__auto___17408 = cljs.core.chunk_first.call(null,seq__17389_17407__$1);{
var G__17409 = cljs.core.chunk_rest.call(null,seq__17389_17407__$1);
var G__17410 = c__4189__auto___17408;
var G__17411 = cljs.core.count.call(null,c__4189__auto___17408);
var G__17412 = 0;
seq__17389_17397 = G__17409;
chunk__17390_17398 = G__17410;
count__17391_17399 = G__17411;
i__17392_17400 = G__17412;
continue;
}
} else
{var n_17413 = cljs.core.first.call(null,seq__17389_17407__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17413;
goog.events.fireListeners(n_17413,evt.type,true,evt);
}
{
var G__17414 = cljs.core.next.call(null,seq__17389_17407__$1);
var G__17415 = null;
var G__17416 = 0;
var G__17417 = 0;
seq__17389_17397 = G__17414;
chunk__17390_17398 = G__17415;
count__17391_17399 = G__17416;
i__17392_17400 = G__17417;
continue;
}
}
} else
{}
}
break;
}
var seq__17393_17418 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17394_17419 = null;var count__17395_17420 = 0;var i__17396_17421 = 0;while(true){
if((i__17396_17421 < count__17395_17420))
{var n_17422 = cljs.core._nth.call(null,chunk__17394_17419,i__17396_17421);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17422;
goog.events.fireListeners(n_17422,evt.type,false,evt);
}
{
var G__17423 = seq__17393_17418;
var G__17424 = chunk__17394_17419;
var G__17425 = count__17395_17420;
var G__17426 = (i__17396_17421 + 1);
seq__17393_17418 = G__17423;
chunk__17394_17419 = G__17424;
count__17395_17420 = G__17425;
i__17396_17421 = G__17426;
continue;
}
} else
{var temp__4092__auto___17427 = cljs.core.seq.call(null,seq__17393_17418);if(temp__4092__auto___17427)
{var seq__17393_17428__$1 = temp__4092__auto___17427;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17393_17428__$1))
{var c__4189__auto___17429 = cljs.core.chunk_first.call(null,seq__17393_17428__$1);{
var G__17430 = cljs.core.chunk_rest.call(null,seq__17393_17428__$1);
var G__17431 = c__4189__auto___17429;
var G__17432 = cljs.core.count.call(null,c__4189__auto___17429);
var G__17433 = 0;
seq__17393_17418 = G__17430;
chunk__17394_17419 = G__17431;
count__17395_17420 = G__17432;
i__17396_17421 = G__17433;
continue;
}
} else
{var n_17434 = cljs.core.first.call(null,seq__17393_17428__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17434;
goog.events.fireListeners(n_17434,evt.type,false,evt);
}
{
var G__17435 = cljs.core.next.call(null,seq__17393_17428__$1);
var G__17436 = null;
var G__17437 = 0;
var G__17438 = 0;
seq__17393_17418 = G__17435;
chunk__17394_17419 = G__17436;
count__17395_17420 = G__17437;
i__17396_17421 = G__17438;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17445_17451 = cljs.core.seq.call(null,evt_map);var chunk__17446_17452 = null;var count__17447_17453 = 0;var i__17448_17454 = 0;while(true){
if((i__17448_17454 < count__17447_17453))
{var vec__17449_17455 = cljs.core._nth.call(null,chunk__17446_17452,i__17448_17454);var k_17456 = cljs.core.nth.call(null,vec__17449_17455,0,null);var v_17457 = cljs.core.nth.call(null,vec__17449_17455,1,null);(evt[k_17456] = v_17457);
{
var G__17458 = seq__17445_17451;
var G__17459 = chunk__17446_17452;
var G__17460 = count__17447_17453;
var G__17461 = (i__17448_17454 + 1);
seq__17445_17451 = G__17458;
chunk__17446_17452 = G__17459;
count__17447_17453 = G__17460;
i__17448_17454 = G__17461;
continue;
}
} else
{var temp__4092__auto___17462 = cljs.core.seq.call(null,seq__17445_17451);if(temp__4092__auto___17462)
{var seq__17445_17463__$1 = temp__4092__auto___17462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17445_17463__$1))
{var c__4189__auto___17464 = cljs.core.chunk_first.call(null,seq__17445_17463__$1);{
var G__17465 = cljs.core.chunk_rest.call(null,seq__17445_17463__$1);
var G__17466 = c__4189__auto___17464;
var G__17467 = cljs.core.count.call(null,c__4189__auto___17464);
var G__17468 = 0;
seq__17445_17451 = G__17465;
chunk__17446_17452 = G__17466;
count__17447_17453 = G__17467;
i__17448_17454 = G__17468;
continue;
}
} else
{var vec__17450_17469 = cljs.core.first.call(null,seq__17445_17463__$1);var k_17470 = cljs.core.nth.call(null,vec__17450_17469,0,null);var v_17471 = cljs.core.nth.call(null,vec__17450_17469,1,null);(evt[k_17470] = v_17471);
{
var G__17472 = cljs.core.next.call(null,seq__17445_17463__$1);
var G__17473 = null;
var G__17474 = 0;
var G__17475 = 0;
seq__17445_17451 = G__17472;
chunk__17446_17452 = G__17473;
count__17447_17453 = G__17474;
i__17448_17454 = G__17475;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17476_SHARP_){return goog.events.getListeners(p1__17476_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
