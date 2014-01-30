// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16364 = {};return obj16364;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.prevent_default[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.prevent_default["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.target[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.target["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.current_target[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.current_target["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.event_type[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.event_type["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3394__auto__ = evt;if(and__3394__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3394__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4027__auto__ = (((evt == null))?null:evt);return (function (){var or__3406__auto__ = (domina.events.raw_event[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.events.raw_event["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16368 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16368 = (function (evt,f,create_listener_function,meta16369){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16369 = meta16369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16368.cljs$lang$type = true;
domina.events.t16368.cljs$lang$ctorStr = "domina.events/t16368";
domina.events.t16368.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16368");
});
domina.events.t16368.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16368.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16368.prototype.domina$events$Event$ = true;
domina.events.t16368.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16368.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16368.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16368.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16368.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16368.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16370){var self__ = this;
var _16370__$1 = this;return self__.meta16369;
});
domina.events.t16368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16370,meta16369__$1){var self__ = this;
var _16370__$1 = this;return (new domina.events.t16368(self__.evt,self__.f,self__.create_listener_function,meta16369__$1));
});
domina.events.__GT_t16368 = (function __GT_t16368(evt__$1,f__$1,create_listener_function__$1,meta16369){return (new domina.events.t16368(evt__$1,f__$1,create_listener_function__$1,meta16369));
});
}
return (new domina.events.t16368(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16375(s__16376){return (new cljs.core.LazySeq(null,(function (){var s__16376__$1 = s__16376;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16376__$1);if(temp__4092__auto__)
{var s__16376__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16376__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16376__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16378 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16377 = 0;while(true){
if((i__16377 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16377);cljs.core.chunk_append.call(null,b__16378,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16379 = (i__16377 + 1);
i__16377 = G__16379;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16378),iter__16375.call(null,cljs.core.chunk_rest.call(null,s__16376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16378),null);
}
} else
{var node = cljs.core.first.call(null,s__16376__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16375.call(null,cljs.core.rest.call(null,s__16376__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__16388 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16389 = null;var count__16390 = 0;var i__16391 = 0;while(true){
if((i__16391 < count__16390))
{var node = cljs.core._nth.call(null,chunk__16389,i__16391);goog.events.removeAll(node);
{
var G__16396 = seq__16388;
var G__16397 = chunk__16389;
var G__16398 = count__16390;
var G__16399 = (i__16391 + 1);
seq__16388 = G__16396;
chunk__16389 = G__16397;
count__16390 = G__16398;
i__16391 = G__16399;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16388);if(temp__4092__auto__)
{var seq__16388__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16388__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16388__$1);{
var G__16400 = cljs.core.chunk_rest.call(null,seq__16388__$1);
var G__16401 = c__4148__auto__;
var G__16402 = cljs.core.count.call(null,c__4148__auto__);
var G__16403 = 0;
seq__16388 = G__16400;
chunk__16389 = G__16401;
count__16390 = G__16402;
i__16391 = G__16403;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16388__$1);goog.events.removeAll(node);
{
var G__16404 = cljs.core.next.call(null,seq__16388__$1);
var G__16405 = null;
var G__16406 = 0;
var G__16407 = 0;
seq__16388 = G__16404;
chunk__16389 = G__16405;
count__16390 = G__16406;
i__16391 = G__16407;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16392 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16393 = null;var count__16394 = 0;var i__16395 = 0;while(true){
if((i__16395 < count__16394))
{var node = cljs.core._nth.call(null,chunk__16393,i__16395);goog.events.removeAll(node,type__$1);
{
var G__16408 = seq__16392;
var G__16409 = chunk__16393;
var G__16410 = count__16394;
var G__16411 = (i__16395 + 1);
seq__16392 = G__16408;
chunk__16393 = G__16409;
count__16394 = G__16410;
i__16395 = G__16411;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16392);if(temp__4092__auto__)
{var seq__16392__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16392__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16392__$1);{
var G__16412 = cljs.core.chunk_rest.call(null,seq__16392__$1);
var G__16413 = c__4148__auto__;
var G__16414 = cljs.core.count.call(null,c__4148__auto__);
var G__16415 = 0;
seq__16392 = G__16412;
chunk__16393 = G__16413;
count__16394 = G__16414;
i__16395 = G__16415;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16392__$1);goog.events.removeAll(node,type__$1);
{
var G__16416 = cljs.core.next.call(null,seq__16392__$1);
var G__16417 = null;
var G__16418 = 0;
var G__16419 = 0;
seq__16392 = G__16416;
chunk__16393 = G__16417;
count__16394 = G__16418;
i__16395 = G__16419;
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
var G__16420 = parent;
var G__16421 = cljs.core.cons.call(null,parent,so_far);
n = G__16420;
so_far = G__16421;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16430_16438 = cljs.core.seq.call(null,ancestors);var chunk__16431_16439 = null;var count__16432_16440 = 0;var i__16433_16441 = 0;while(true){
if((i__16433_16441 < count__16432_16440))
{var n_16442 = cljs.core._nth.call(null,chunk__16431_16439,i__16433_16441);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16442;
goog.events.fireListeners(n_16442,evt.type,true,evt);
}
{
var G__16443 = seq__16430_16438;
var G__16444 = chunk__16431_16439;
var G__16445 = count__16432_16440;
var G__16446 = (i__16433_16441 + 1);
seq__16430_16438 = G__16443;
chunk__16431_16439 = G__16444;
count__16432_16440 = G__16445;
i__16433_16441 = G__16446;
continue;
}
} else
{var temp__4092__auto___16447 = cljs.core.seq.call(null,seq__16430_16438);if(temp__4092__auto___16447)
{var seq__16430_16448__$1 = temp__4092__auto___16447;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16430_16448__$1))
{var c__4148__auto___16449 = cljs.core.chunk_first.call(null,seq__16430_16448__$1);{
var G__16450 = cljs.core.chunk_rest.call(null,seq__16430_16448__$1);
var G__16451 = c__4148__auto___16449;
var G__16452 = cljs.core.count.call(null,c__4148__auto___16449);
var G__16453 = 0;
seq__16430_16438 = G__16450;
chunk__16431_16439 = G__16451;
count__16432_16440 = G__16452;
i__16433_16441 = G__16453;
continue;
}
} else
{var n_16454 = cljs.core.first.call(null,seq__16430_16448__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16454;
goog.events.fireListeners(n_16454,evt.type,true,evt);
}
{
var G__16455 = cljs.core.next.call(null,seq__16430_16448__$1);
var G__16456 = null;
var G__16457 = 0;
var G__16458 = 0;
seq__16430_16438 = G__16455;
chunk__16431_16439 = G__16456;
count__16432_16440 = G__16457;
i__16433_16441 = G__16458;
continue;
}
}
} else
{}
}
break;
}
var seq__16434_16459 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16435_16460 = null;var count__16436_16461 = 0;var i__16437_16462 = 0;while(true){
if((i__16437_16462 < count__16436_16461))
{var n_16463 = cljs.core._nth.call(null,chunk__16435_16460,i__16437_16462);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16463;
goog.events.fireListeners(n_16463,evt.type,false,evt);
}
{
var G__16464 = seq__16434_16459;
var G__16465 = chunk__16435_16460;
var G__16466 = count__16436_16461;
var G__16467 = (i__16437_16462 + 1);
seq__16434_16459 = G__16464;
chunk__16435_16460 = G__16465;
count__16436_16461 = G__16466;
i__16437_16462 = G__16467;
continue;
}
} else
{var temp__4092__auto___16468 = cljs.core.seq.call(null,seq__16434_16459);if(temp__4092__auto___16468)
{var seq__16434_16469__$1 = temp__4092__auto___16468;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16434_16469__$1))
{var c__4148__auto___16470 = cljs.core.chunk_first.call(null,seq__16434_16469__$1);{
var G__16471 = cljs.core.chunk_rest.call(null,seq__16434_16469__$1);
var G__16472 = c__4148__auto___16470;
var G__16473 = cljs.core.count.call(null,c__4148__auto___16470);
var G__16474 = 0;
seq__16434_16459 = G__16471;
chunk__16435_16460 = G__16472;
count__16436_16461 = G__16473;
i__16437_16462 = G__16474;
continue;
}
} else
{var n_16475 = cljs.core.first.call(null,seq__16434_16469__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16475;
goog.events.fireListeners(n_16475,evt.type,false,evt);
}
{
var G__16476 = cljs.core.next.call(null,seq__16434_16469__$1);
var G__16477 = null;
var G__16478 = 0;
var G__16479 = 0;
seq__16434_16459 = G__16476;
chunk__16435_16460 = G__16477;
count__16436_16461 = G__16478;
i__16437_16462 = G__16479;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3394__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3394__auto__))
{return o.dispatchEvent;
} else
{return and__3394__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16486_16492 = cljs.core.seq.call(null,evt_map);var chunk__16487_16493 = null;var count__16488_16494 = 0;var i__16489_16495 = 0;while(true){
if((i__16489_16495 < count__16488_16494))
{var vec__16490_16496 = cljs.core._nth.call(null,chunk__16487_16493,i__16489_16495);var k_16497 = cljs.core.nth.call(null,vec__16490_16496,0,null);var v_16498 = cljs.core.nth.call(null,vec__16490_16496,1,null);(evt[k_16497] = v_16498);
{
var G__16499 = seq__16486_16492;
var G__16500 = chunk__16487_16493;
var G__16501 = count__16488_16494;
var G__16502 = (i__16489_16495 + 1);
seq__16486_16492 = G__16499;
chunk__16487_16493 = G__16500;
count__16488_16494 = G__16501;
i__16489_16495 = G__16502;
continue;
}
} else
{var temp__4092__auto___16503 = cljs.core.seq.call(null,seq__16486_16492);if(temp__4092__auto___16503)
{var seq__16486_16504__$1 = temp__4092__auto___16503;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16486_16504__$1))
{var c__4148__auto___16505 = cljs.core.chunk_first.call(null,seq__16486_16504__$1);{
var G__16506 = cljs.core.chunk_rest.call(null,seq__16486_16504__$1);
var G__16507 = c__4148__auto___16505;
var G__16508 = cljs.core.count.call(null,c__4148__auto___16505);
var G__16509 = 0;
seq__16486_16492 = G__16506;
chunk__16487_16493 = G__16507;
count__16488_16494 = G__16508;
i__16489_16495 = G__16509;
continue;
}
} else
{var vec__16491_16510 = cljs.core.first.call(null,seq__16486_16504__$1);var k_16511 = cljs.core.nth.call(null,vec__16491_16510,0,null);var v_16512 = cljs.core.nth.call(null,vec__16491_16510,1,null);(evt[k_16511] = v_16512);
{
var G__16513 = cljs.core.next.call(null,seq__16486_16504__$1);
var G__16514 = null;
var G__16515 = 0;
var G__16516 = 0;
seq__16486_16492 = G__16513;
chunk__16487_16493 = G__16514;
count__16488_16494 = G__16515;
i__16489_16495 = G__16516;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16517_SHARP_){return goog.events.getListeners(p1__16517_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map