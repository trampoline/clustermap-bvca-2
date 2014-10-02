// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32326 = {};return obj32326;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32330 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32330 = (function (evt,f,create_listener_function,meta32331){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32331 = meta32331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32330.cljs$lang$type = true;
domina.events.t32330.cljs$lang$ctorStr = "domina.events/t32330";
domina.events.t32330.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t32330");
});
domina.events.t32330.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32330.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t32330.prototype.domina$events$Event$ = true;
domina.events.t32330.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32330.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32330.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32330.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32330.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32330.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32332){var self__ = this;
var _32332__$1 = this;return self__.meta32331;
});
domina.events.t32330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32332,meta32331__$1){var self__ = this;
var _32332__$1 = this;return (new domina.events.t32330(self__.evt,self__.f,self__.create_listener_function,meta32331__$1));
});
domina.events.__GT_t32330 = (function __GT_t32330(evt__$1,f__$1,create_listener_function__$1,meta32331){return (new domina.events.t32330(evt__$1,f__$1,create_listener_function__$1,meta32331));
});
}
return (new domina.events.t32330(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__32337(s__32338){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__32338__$1 = s__32338;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32338__$1);if(temp__4126__auto__)
{var s__32338__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32338__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32338__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32340 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32339 = (0);while(true){
if((i__32339 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__32339);cljs.core.chunk_append.call(null,b__32340,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32341 = (i__32339 + (1));
i__32339 = G__32341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32340),iter__32337.call(null,cljs.core.chunk_rest.call(null,s__32338__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32340),null);
}
} else
{var node = cljs.core.first.call(null,s__32338__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32337.call(null,cljs.core.rest.call(null,s__32338__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__32350 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32351 = null;var count__32352 = (0);var i__32353 = (0);while(true){
if((i__32353 < count__32352))
{var node = cljs.core._nth.call(null,chunk__32351,i__32353);goog.events.removeAll(node);
{
var G__32358 = seq__32350;
var G__32359 = chunk__32351;
var G__32360 = count__32352;
var G__32361 = (i__32353 + (1));
seq__32350 = G__32358;
chunk__32351 = G__32359;
count__32352 = G__32360;
i__32353 = G__32361;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32350);if(temp__4126__auto__)
{var seq__32350__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32350__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32350__$1);{
var G__32362 = cljs.core.chunk_rest.call(null,seq__32350__$1);
var G__32363 = c__4314__auto__;
var G__32364 = cljs.core.count.call(null,c__4314__auto__);
var G__32365 = (0);
seq__32350 = G__32362;
chunk__32351 = G__32363;
count__32352 = G__32364;
i__32353 = G__32365;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32350__$1);goog.events.removeAll(node);
{
var G__32366 = cljs.core.next.call(null,seq__32350__$1);
var G__32367 = null;
var G__32368 = (0);
var G__32369 = (0);
seq__32350 = G__32366;
chunk__32351 = G__32367;
count__32352 = G__32368;
i__32353 = G__32369;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32354 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32355 = null;var count__32356 = (0);var i__32357 = (0);while(true){
if((i__32357 < count__32356))
{var node = cljs.core._nth.call(null,chunk__32355,i__32357);goog.events.removeAll(node,type__$1);
{
var G__32370 = seq__32354;
var G__32371 = chunk__32355;
var G__32372 = count__32356;
var G__32373 = (i__32357 + (1));
seq__32354 = G__32370;
chunk__32355 = G__32371;
count__32356 = G__32372;
i__32357 = G__32373;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32354);if(temp__4126__auto__)
{var seq__32354__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32354__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32354__$1);{
var G__32374 = cljs.core.chunk_rest.call(null,seq__32354__$1);
var G__32375 = c__4314__auto__;
var G__32376 = cljs.core.count.call(null,c__4314__auto__);
var G__32377 = (0);
seq__32354 = G__32374;
chunk__32355 = G__32375;
count__32356 = G__32376;
i__32357 = G__32377;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32354__$1);goog.events.removeAll(node,type__$1);
{
var G__32378 = cljs.core.next.call(null,seq__32354__$1);
var G__32379 = null;
var G__32380 = (0);
var G__32381 = (0);
seq__32354 = G__32378;
chunk__32355 = G__32379;
count__32356 = G__32380;
i__32357 = G__32381;
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
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__32382 = parent;
var G__32383 = cljs.core.cons.call(null,parent,so_far);
n = G__32382;
so_far = G__32383;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32392_32400 = cljs.core.seq.call(null,ancestors);var chunk__32393_32401 = null;var count__32394_32402 = (0);var i__32395_32403 = (0);while(true){
if((i__32395_32403 < count__32394_32402))
{var n_32404 = cljs.core._nth.call(null,chunk__32393_32401,i__32395_32403);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32404;
goog.events.fireListeners(n_32404,evt.type,true,evt);
}
{
var G__32405 = seq__32392_32400;
var G__32406 = chunk__32393_32401;
var G__32407 = count__32394_32402;
var G__32408 = (i__32395_32403 + (1));
seq__32392_32400 = G__32405;
chunk__32393_32401 = G__32406;
count__32394_32402 = G__32407;
i__32395_32403 = G__32408;
continue;
}
} else
{var temp__4126__auto___32409 = cljs.core.seq.call(null,seq__32392_32400);if(temp__4126__auto___32409)
{var seq__32392_32410__$1 = temp__4126__auto___32409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32392_32410__$1))
{var c__4314__auto___32411 = cljs.core.chunk_first.call(null,seq__32392_32410__$1);{
var G__32412 = cljs.core.chunk_rest.call(null,seq__32392_32410__$1);
var G__32413 = c__4314__auto___32411;
var G__32414 = cljs.core.count.call(null,c__4314__auto___32411);
var G__32415 = (0);
seq__32392_32400 = G__32412;
chunk__32393_32401 = G__32413;
count__32394_32402 = G__32414;
i__32395_32403 = G__32415;
continue;
}
} else
{var n_32416 = cljs.core.first.call(null,seq__32392_32410__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32416;
goog.events.fireListeners(n_32416,evt.type,true,evt);
}
{
var G__32417 = cljs.core.next.call(null,seq__32392_32410__$1);
var G__32418 = null;
var G__32419 = (0);
var G__32420 = (0);
seq__32392_32400 = G__32417;
chunk__32393_32401 = G__32418;
count__32394_32402 = G__32419;
i__32395_32403 = G__32420;
continue;
}
}
} else
{}
}
break;
}
var seq__32396_32421 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32397_32422 = null;var count__32398_32423 = (0);var i__32399_32424 = (0);while(true){
if((i__32399_32424 < count__32398_32423))
{var n_32425 = cljs.core._nth.call(null,chunk__32397_32422,i__32399_32424);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32425;
goog.events.fireListeners(n_32425,evt.type,false,evt);
}
{
var G__32426 = seq__32396_32421;
var G__32427 = chunk__32397_32422;
var G__32428 = count__32398_32423;
var G__32429 = (i__32399_32424 + (1));
seq__32396_32421 = G__32426;
chunk__32397_32422 = G__32427;
count__32398_32423 = G__32428;
i__32399_32424 = G__32429;
continue;
}
} else
{var temp__4126__auto___32430 = cljs.core.seq.call(null,seq__32396_32421);if(temp__4126__auto___32430)
{var seq__32396_32431__$1 = temp__4126__auto___32430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32396_32431__$1))
{var c__4314__auto___32432 = cljs.core.chunk_first.call(null,seq__32396_32431__$1);{
var G__32433 = cljs.core.chunk_rest.call(null,seq__32396_32431__$1);
var G__32434 = c__4314__auto___32432;
var G__32435 = cljs.core.count.call(null,c__4314__auto___32432);
var G__32436 = (0);
seq__32396_32421 = G__32433;
chunk__32397_32422 = G__32434;
count__32398_32423 = G__32435;
i__32399_32424 = G__32436;
continue;
}
} else
{var n_32437 = cljs.core.first.call(null,seq__32396_32431__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32437;
goog.events.fireListeners(n_32437,evt.type,false,evt);
}
{
var G__32438 = cljs.core.next.call(null,seq__32396_32431__$1);
var G__32439 = null;
var G__32440 = (0);
var G__32441 = (0);
seq__32396_32421 = G__32438;
chunk__32397_32422 = G__32439;
count__32398_32423 = G__32440;
i__32399_32424 = G__32441;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32448_32454 = cljs.core.seq.call(null,evt_map);var chunk__32449_32455 = null;var count__32450_32456 = (0);var i__32451_32457 = (0);while(true){
if((i__32451_32457 < count__32450_32456))
{var vec__32452_32458 = cljs.core._nth.call(null,chunk__32449_32455,i__32451_32457);var k_32459 = cljs.core.nth.call(null,vec__32452_32458,(0),null);var v_32460 = cljs.core.nth.call(null,vec__32452_32458,(1),null);(evt[k_32459] = v_32460);
{
var G__32461 = seq__32448_32454;
var G__32462 = chunk__32449_32455;
var G__32463 = count__32450_32456;
var G__32464 = (i__32451_32457 + (1));
seq__32448_32454 = G__32461;
chunk__32449_32455 = G__32462;
count__32450_32456 = G__32463;
i__32451_32457 = G__32464;
continue;
}
} else
{var temp__4126__auto___32465 = cljs.core.seq.call(null,seq__32448_32454);if(temp__4126__auto___32465)
{var seq__32448_32466__$1 = temp__4126__auto___32465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32448_32466__$1))
{var c__4314__auto___32467 = cljs.core.chunk_first.call(null,seq__32448_32466__$1);{
var G__32468 = cljs.core.chunk_rest.call(null,seq__32448_32466__$1);
var G__32469 = c__4314__auto___32467;
var G__32470 = cljs.core.count.call(null,c__4314__auto___32467);
var G__32471 = (0);
seq__32448_32454 = G__32468;
chunk__32449_32455 = G__32469;
count__32450_32456 = G__32470;
i__32451_32457 = G__32471;
continue;
}
} else
{var vec__32453_32472 = cljs.core.first.call(null,seq__32448_32466__$1);var k_32473 = cljs.core.nth.call(null,vec__32453_32472,(0),null);var v_32474 = cljs.core.nth.call(null,vec__32453_32472,(1),null);(evt[k_32473] = v_32474);
{
var G__32475 = cljs.core.next.call(null,seq__32448_32466__$1);
var G__32476 = null;
var G__32477 = (0);
var G__32478 = (0);
seq__32448_32454 = G__32475;
chunk__32449_32455 = G__32476;
count__32450_32456 = G__32477;
i__32451_32457 = G__32478;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__32479_SHARP_){return goog.events.getListeners(p1__32479_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
