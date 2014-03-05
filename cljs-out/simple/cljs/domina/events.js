// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17363 = {};return obj17363;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17367 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17367 = (function (evt,f,create_listener_function,meta17368){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17368 = meta17368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17367.cljs$lang$type = true;
domina.events.t17367.cljs$lang$ctorStr = "domina.events/t17367";
domina.events.t17367.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t17367");
});
domina.events.t17367.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17367.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t17367.prototype.domina$events$Event$ = true;
domina.events.t17367.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17367.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17367.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17367.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17367.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17367.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17369){var self__ = this;
var _17369__$1 = this;return self__.meta17368;
});
domina.events.t17367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17369,meta17368__$1){var self__ = this;
var _17369__$1 = this;return (new domina.events.t17367(self__.evt,self__.f,self__.create_listener_function,meta17368__$1));
});
domina.events.__GT_t17367 = (function __GT_t17367(evt__$1,f__$1,create_listener_function__$1,meta17368){return (new domina.events.t17367(evt__$1,f__$1,create_listener_function__$1,meta17368));
});
}
return (new domina.events.t17367(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__17374(s__17375){return (new cljs.core.LazySeq(null,(function (){var s__17375__$1 = s__17375;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17375__$1);if(temp__4092__auto__)
{var s__17375__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17375__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17375__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17377 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17376 = 0;while(true){
if((i__17376 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__17376);cljs.core.chunk_append.call(null,b__17377,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17378 = (i__17376 + 1);
i__17376 = G__17378;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17377),iter__17374.call(null,cljs.core.chunk_rest.call(null,s__17375__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17377),null);
}
} else
{var node = cljs.core.first.call(null,s__17375__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17374.call(null,cljs.core.rest.call(null,s__17375__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__17387 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17388 = null;var count__17389 = 0;var i__17390 = 0;while(true){
if((i__17390 < count__17389))
{var node = cljs.core._nth.call(null,chunk__17388,i__17390);goog.events.removeAll(node);
{
var G__17395 = seq__17387;
var G__17396 = chunk__17388;
var G__17397 = count__17389;
var G__17398 = (i__17390 + 1);
seq__17387 = G__17395;
chunk__17388 = G__17396;
count__17389 = G__17397;
i__17390 = G__17398;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17387);if(temp__4092__auto__)
{var seq__17387__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17387__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17387__$1);{
var G__17399 = cljs.core.chunk_rest.call(null,seq__17387__$1);
var G__17400 = c__4189__auto__;
var G__17401 = cljs.core.count.call(null,c__4189__auto__);
var G__17402 = 0;
seq__17387 = G__17399;
chunk__17388 = G__17400;
count__17389 = G__17401;
i__17390 = G__17402;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17387__$1);goog.events.removeAll(node);
{
var G__17403 = cljs.core.next.call(null,seq__17387__$1);
var G__17404 = null;
var G__17405 = 0;
var G__17406 = 0;
seq__17387 = G__17403;
chunk__17388 = G__17404;
count__17389 = G__17405;
i__17390 = G__17406;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17391 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17392 = null;var count__17393 = 0;var i__17394 = 0;while(true){
if((i__17394 < count__17393))
{var node = cljs.core._nth.call(null,chunk__17392,i__17394);goog.events.removeAll(node,type__$1);
{
var G__17407 = seq__17391;
var G__17408 = chunk__17392;
var G__17409 = count__17393;
var G__17410 = (i__17394 + 1);
seq__17391 = G__17407;
chunk__17392 = G__17408;
count__17393 = G__17409;
i__17394 = G__17410;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17391);if(temp__4092__auto__)
{var seq__17391__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17391__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17391__$1);{
var G__17411 = cljs.core.chunk_rest.call(null,seq__17391__$1);
var G__17412 = c__4189__auto__;
var G__17413 = cljs.core.count.call(null,c__4189__auto__);
var G__17414 = 0;
seq__17391 = G__17411;
chunk__17392 = G__17412;
count__17393 = G__17413;
i__17394 = G__17414;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17391__$1);goog.events.removeAll(node,type__$1);
{
var G__17415 = cljs.core.next.call(null,seq__17391__$1);
var G__17416 = null;
var G__17417 = 0;
var G__17418 = 0;
seq__17391 = G__17415;
chunk__17392 = G__17416;
count__17393 = G__17417;
i__17394 = G__17418;
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
var G__17419 = parent;
var G__17420 = cljs.core.cons.call(null,parent,so_far);
n = G__17419;
so_far = G__17420;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17429_17437 = cljs.core.seq.call(null,ancestors);var chunk__17430_17438 = null;var count__17431_17439 = 0;var i__17432_17440 = 0;while(true){
if((i__17432_17440 < count__17431_17439))
{var n_17441 = cljs.core._nth.call(null,chunk__17430_17438,i__17432_17440);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17441;
goog.events.fireListeners(n_17441,evt.type,true,evt);
}
{
var G__17442 = seq__17429_17437;
var G__17443 = chunk__17430_17438;
var G__17444 = count__17431_17439;
var G__17445 = (i__17432_17440 + 1);
seq__17429_17437 = G__17442;
chunk__17430_17438 = G__17443;
count__17431_17439 = G__17444;
i__17432_17440 = G__17445;
continue;
}
} else
{var temp__4092__auto___17446 = cljs.core.seq.call(null,seq__17429_17437);if(temp__4092__auto___17446)
{var seq__17429_17447__$1 = temp__4092__auto___17446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17429_17447__$1))
{var c__4189__auto___17448 = cljs.core.chunk_first.call(null,seq__17429_17447__$1);{
var G__17449 = cljs.core.chunk_rest.call(null,seq__17429_17447__$1);
var G__17450 = c__4189__auto___17448;
var G__17451 = cljs.core.count.call(null,c__4189__auto___17448);
var G__17452 = 0;
seq__17429_17437 = G__17449;
chunk__17430_17438 = G__17450;
count__17431_17439 = G__17451;
i__17432_17440 = G__17452;
continue;
}
} else
{var n_17453 = cljs.core.first.call(null,seq__17429_17447__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17453;
goog.events.fireListeners(n_17453,evt.type,true,evt);
}
{
var G__17454 = cljs.core.next.call(null,seq__17429_17447__$1);
var G__17455 = null;
var G__17456 = 0;
var G__17457 = 0;
seq__17429_17437 = G__17454;
chunk__17430_17438 = G__17455;
count__17431_17439 = G__17456;
i__17432_17440 = G__17457;
continue;
}
}
} else
{}
}
break;
}
var seq__17433_17458 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17434_17459 = null;var count__17435_17460 = 0;var i__17436_17461 = 0;while(true){
if((i__17436_17461 < count__17435_17460))
{var n_17462 = cljs.core._nth.call(null,chunk__17434_17459,i__17436_17461);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17462;
goog.events.fireListeners(n_17462,evt.type,false,evt);
}
{
var G__17463 = seq__17433_17458;
var G__17464 = chunk__17434_17459;
var G__17465 = count__17435_17460;
var G__17466 = (i__17436_17461 + 1);
seq__17433_17458 = G__17463;
chunk__17434_17459 = G__17464;
count__17435_17460 = G__17465;
i__17436_17461 = G__17466;
continue;
}
} else
{var temp__4092__auto___17467 = cljs.core.seq.call(null,seq__17433_17458);if(temp__4092__auto___17467)
{var seq__17433_17468__$1 = temp__4092__auto___17467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17433_17468__$1))
{var c__4189__auto___17469 = cljs.core.chunk_first.call(null,seq__17433_17468__$1);{
var G__17470 = cljs.core.chunk_rest.call(null,seq__17433_17468__$1);
var G__17471 = c__4189__auto___17469;
var G__17472 = cljs.core.count.call(null,c__4189__auto___17469);
var G__17473 = 0;
seq__17433_17458 = G__17470;
chunk__17434_17459 = G__17471;
count__17435_17460 = G__17472;
i__17436_17461 = G__17473;
continue;
}
} else
{var n_17474 = cljs.core.first.call(null,seq__17433_17468__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17474;
goog.events.fireListeners(n_17474,evt.type,false,evt);
}
{
var G__17475 = cljs.core.next.call(null,seq__17433_17468__$1);
var G__17476 = null;
var G__17477 = 0;
var G__17478 = 0;
seq__17433_17458 = G__17475;
chunk__17434_17459 = G__17476;
count__17435_17460 = G__17477;
i__17436_17461 = G__17478;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17485_17491 = cljs.core.seq.call(null,evt_map);var chunk__17486_17492 = null;var count__17487_17493 = 0;var i__17488_17494 = 0;while(true){
if((i__17488_17494 < count__17487_17493))
{var vec__17489_17495 = cljs.core._nth.call(null,chunk__17486_17492,i__17488_17494);var k_17496 = cljs.core.nth.call(null,vec__17489_17495,0,null);var v_17497 = cljs.core.nth.call(null,vec__17489_17495,1,null);(evt[k_17496] = v_17497);
{
var G__17498 = seq__17485_17491;
var G__17499 = chunk__17486_17492;
var G__17500 = count__17487_17493;
var G__17501 = (i__17488_17494 + 1);
seq__17485_17491 = G__17498;
chunk__17486_17492 = G__17499;
count__17487_17493 = G__17500;
i__17488_17494 = G__17501;
continue;
}
} else
{var temp__4092__auto___17502 = cljs.core.seq.call(null,seq__17485_17491);if(temp__4092__auto___17502)
{var seq__17485_17503__$1 = temp__4092__auto___17502;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17485_17503__$1))
{var c__4189__auto___17504 = cljs.core.chunk_first.call(null,seq__17485_17503__$1);{
var G__17505 = cljs.core.chunk_rest.call(null,seq__17485_17503__$1);
var G__17506 = c__4189__auto___17504;
var G__17507 = cljs.core.count.call(null,c__4189__auto___17504);
var G__17508 = 0;
seq__17485_17491 = G__17505;
chunk__17486_17492 = G__17506;
count__17487_17493 = G__17507;
i__17488_17494 = G__17508;
continue;
}
} else
{var vec__17490_17509 = cljs.core.first.call(null,seq__17485_17503__$1);var k_17510 = cljs.core.nth.call(null,vec__17490_17509,0,null);var v_17511 = cljs.core.nth.call(null,vec__17490_17509,1,null);(evt[k_17510] = v_17511);
{
var G__17512 = cljs.core.next.call(null,seq__17485_17503__$1);
var G__17513 = null;
var G__17514 = 0;
var G__17515 = 0;
seq__17485_17491 = G__17512;
chunk__17486_17492 = G__17513;
count__17487_17493 = G__17514;
i__17488_17494 = G__17515;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17516_SHARP_){return goog.events.getListeners(p1__17516_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
