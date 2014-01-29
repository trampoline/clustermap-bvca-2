// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16345 = {};return obj16345;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16349 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16349 = (function (evt,f,create_listener_function,meta16350){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16350 = meta16350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16349.cljs$lang$type = true;
domina.events.t16349.cljs$lang$ctorStr = "domina.events/t16349";
domina.events.t16349.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16349");
});
domina.events.t16349.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16349.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16349.prototype.domina$events$Event$ = true;
domina.events.t16349.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16349.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16349.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16349.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16349.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16349.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16349.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16351){var self__ = this;
var _16351__$1 = this;return self__.meta16350;
});
domina.events.t16349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16351,meta16350__$1){var self__ = this;
var _16351__$1 = this;return (new domina.events.t16349(self__.evt,self__.f,self__.create_listener_function,meta16350__$1));
});
domina.events.__GT_t16349 = (function __GT_t16349(evt__$1,f__$1,create_listener_function__$1,meta16350){return (new domina.events.t16349(evt__$1,f__$1,create_listener_function__$1,meta16350));
});
}
return (new domina.events.t16349(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16356(s__16357){return (new cljs.core.LazySeq(null,(function (){var s__16357__$1 = s__16357;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16357__$1);if(temp__4092__auto__)
{var s__16357__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16357__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16357__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16359 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16358 = 0;while(true){
if((i__16358 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16358);cljs.core.chunk_append.call(null,b__16359,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16360 = (i__16358 + 1);
i__16358 = G__16360;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16359),iter__16356.call(null,cljs.core.chunk_rest.call(null,s__16357__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16359),null);
}
} else
{var node = cljs.core.first.call(null,s__16357__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16356.call(null,cljs.core.rest.call(null,s__16357__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16370 = null;var count__16371 = 0;var i__16372 = 0;while(true){
if((i__16372 < count__16371))
{var node = cljs.core._nth.call(null,chunk__16370,i__16372);goog.events.removeAll(node);
{
var G__16377 = seq__16369;
var G__16378 = chunk__16370;
var G__16379 = count__16371;
var G__16380 = (i__16372 + 1);
seq__16369 = G__16377;
chunk__16370 = G__16378;
count__16371 = G__16379;
i__16372 = G__16380;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16369);if(temp__4092__auto__)
{var seq__16369__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16369__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16369__$1);{
var G__16381 = cljs.core.chunk_rest.call(null,seq__16369__$1);
var G__16382 = c__4148__auto__;
var G__16383 = cljs.core.count.call(null,c__4148__auto__);
var G__16384 = 0;
seq__16369 = G__16381;
chunk__16370 = G__16382;
count__16371 = G__16383;
i__16372 = G__16384;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16369__$1);goog.events.removeAll(node);
{
var G__16385 = cljs.core.next.call(null,seq__16369__$1);
var G__16386 = null;
var G__16387 = 0;
var G__16388 = 0;
seq__16369 = G__16385;
chunk__16370 = G__16386;
count__16371 = G__16387;
i__16372 = G__16388;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16373 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16374 = null;var count__16375 = 0;var i__16376 = 0;while(true){
if((i__16376 < count__16375))
{var node = cljs.core._nth.call(null,chunk__16374,i__16376);goog.events.removeAll(node,type__$1);
{
var G__16389 = seq__16373;
var G__16390 = chunk__16374;
var G__16391 = count__16375;
var G__16392 = (i__16376 + 1);
seq__16373 = G__16389;
chunk__16374 = G__16390;
count__16375 = G__16391;
i__16376 = G__16392;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16373);if(temp__4092__auto__)
{var seq__16373__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16373__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16373__$1);{
var G__16393 = cljs.core.chunk_rest.call(null,seq__16373__$1);
var G__16394 = c__4148__auto__;
var G__16395 = cljs.core.count.call(null,c__4148__auto__);
var G__16396 = 0;
seq__16373 = G__16393;
chunk__16374 = G__16394;
count__16375 = G__16395;
i__16376 = G__16396;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16373__$1);goog.events.removeAll(node,type__$1);
{
var G__16397 = cljs.core.next.call(null,seq__16373__$1);
var G__16398 = null;
var G__16399 = 0;
var G__16400 = 0;
seq__16373 = G__16397;
chunk__16374 = G__16398;
count__16375 = G__16399;
i__16376 = G__16400;
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
var G__16401 = parent;
var G__16402 = cljs.core.cons.call(null,parent,so_far);
n = G__16401;
so_far = G__16402;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16411_16419 = cljs.core.seq.call(null,ancestors);var chunk__16412_16420 = null;var count__16413_16421 = 0;var i__16414_16422 = 0;while(true){
if((i__16414_16422 < count__16413_16421))
{var n_16423 = cljs.core._nth.call(null,chunk__16412_16420,i__16414_16422);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16423;
goog.events.fireListeners(n_16423,evt.type,true,evt);
}
{
var G__16424 = seq__16411_16419;
var G__16425 = chunk__16412_16420;
var G__16426 = count__16413_16421;
var G__16427 = (i__16414_16422 + 1);
seq__16411_16419 = G__16424;
chunk__16412_16420 = G__16425;
count__16413_16421 = G__16426;
i__16414_16422 = G__16427;
continue;
}
} else
{var temp__4092__auto___16428 = cljs.core.seq.call(null,seq__16411_16419);if(temp__4092__auto___16428)
{var seq__16411_16429__$1 = temp__4092__auto___16428;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16411_16429__$1))
{var c__4148__auto___16430 = cljs.core.chunk_first.call(null,seq__16411_16429__$1);{
var G__16431 = cljs.core.chunk_rest.call(null,seq__16411_16429__$1);
var G__16432 = c__4148__auto___16430;
var G__16433 = cljs.core.count.call(null,c__4148__auto___16430);
var G__16434 = 0;
seq__16411_16419 = G__16431;
chunk__16412_16420 = G__16432;
count__16413_16421 = G__16433;
i__16414_16422 = G__16434;
continue;
}
} else
{var n_16435 = cljs.core.first.call(null,seq__16411_16429__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16435;
goog.events.fireListeners(n_16435,evt.type,true,evt);
}
{
var G__16436 = cljs.core.next.call(null,seq__16411_16429__$1);
var G__16437 = null;
var G__16438 = 0;
var G__16439 = 0;
seq__16411_16419 = G__16436;
chunk__16412_16420 = G__16437;
count__16413_16421 = G__16438;
i__16414_16422 = G__16439;
continue;
}
}
} else
{}
}
break;
}
var seq__16415_16440 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16416_16441 = null;var count__16417_16442 = 0;var i__16418_16443 = 0;while(true){
if((i__16418_16443 < count__16417_16442))
{var n_16444 = cljs.core._nth.call(null,chunk__16416_16441,i__16418_16443);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16444;
goog.events.fireListeners(n_16444,evt.type,false,evt);
}
{
var G__16445 = seq__16415_16440;
var G__16446 = chunk__16416_16441;
var G__16447 = count__16417_16442;
var G__16448 = (i__16418_16443 + 1);
seq__16415_16440 = G__16445;
chunk__16416_16441 = G__16446;
count__16417_16442 = G__16447;
i__16418_16443 = G__16448;
continue;
}
} else
{var temp__4092__auto___16449 = cljs.core.seq.call(null,seq__16415_16440);if(temp__4092__auto___16449)
{var seq__16415_16450__$1 = temp__4092__auto___16449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16415_16450__$1))
{var c__4148__auto___16451 = cljs.core.chunk_first.call(null,seq__16415_16450__$1);{
var G__16452 = cljs.core.chunk_rest.call(null,seq__16415_16450__$1);
var G__16453 = c__4148__auto___16451;
var G__16454 = cljs.core.count.call(null,c__4148__auto___16451);
var G__16455 = 0;
seq__16415_16440 = G__16452;
chunk__16416_16441 = G__16453;
count__16417_16442 = G__16454;
i__16418_16443 = G__16455;
continue;
}
} else
{var n_16456 = cljs.core.first.call(null,seq__16415_16450__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16456;
goog.events.fireListeners(n_16456,evt.type,false,evt);
}
{
var G__16457 = cljs.core.next.call(null,seq__16415_16450__$1);
var G__16458 = null;
var G__16459 = 0;
var G__16460 = 0;
seq__16415_16440 = G__16457;
chunk__16416_16441 = G__16458;
count__16417_16442 = G__16459;
i__16418_16443 = G__16460;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16467_16473 = cljs.core.seq.call(null,evt_map);var chunk__16468_16474 = null;var count__16469_16475 = 0;var i__16470_16476 = 0;while(true){
if((i__16470_16476 < count__16469_16475))
{var vec__16471_16477 = cljs.core._nth.call(null,chunk__16468_16474,i__16470_16476);var k_16478 = cljs.core.nth.call(null,vec__16471_16477,0,null);var v_16479 = cljs.core.nth.call(null,vec__16471_16477,1,null);(evt[k_16478] = v_16479);
{
var G__16480 = seq__16467_16473;
var G__16481 = chunk__16468_16474;
var G__16482 = count__16469_16475;
var G__16483 = (i__16470_16476 + 1);
seq__16467_16473 = G__16480;
chunk__16468_16474 = G__16481;
count__16469_16475 = G__16482;
i__16470_16476 = G__16483;
continue;
}
} else
{var temp__4092__auto___16484 = cljs.core.seq.call(null,seq__16467_16473);if(temp__4092__auto___16484)
{var seq__16467_16485__$1 = temp__4092__auto___16484;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16467_16485__$1))
{var c__4148__auto___16486 = cljs.core.chunk_first.call(null,seq__16467_16485__$1);{
var G__16487 = cljs.core.chunk_rest.call(null,seq__16467_16485__$1);
var G__16488 = c__4148__auto___16486;
var G__16489 = cljs.core.count.call(null,c__4148__auto___16486);
var G__16490 = 0;
seq__16467_16473 = G__16487;
chunk__16468_16474 = G__16488;
count__16469_16475 = G__16489;
i__16470_16476 = G__16490;
continue;
}
} else
{var vec__16472_16491 = cljs.core.first.call(null,seq__16467_16485__$1);var k_16492 = cljs.core.nth.call(null,vec__16472_16491,0,null);var v_16493 = cljs.core.nth.call(null,vec__16472_16491,1,null);(evt[k_16492] = v_16493);
{
var G__16494 = cljs.core.next.call(null,seq__16467_16485__$1);
var G__16495 = null;
var G__16496 = 0;
var G__16497 = 0;
seq__16467_16473 = G__16494;
chunk__16468_16474 = G__16495;
count__16469_16475 = G__16496;
i__16470_16476 = G__16497;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16498_SHARP_){return goog.events.getListeners(p1__16498_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map