// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16334 = {};return obj16334;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16338 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16338 = (function (evt,f,create_listener_function,meta16339){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16339 = meta16339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16338.cljs$lang$type = true;
domina.events.t16338.cljs$lang$ctorStr = "domina.events/t16338";
domina.events.t16338.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16338");
});
domina.events.t16338.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16338.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16338.prototype.domina$events$Event$ = true;
domina.events.t16338.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16338.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16338.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16338.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16338.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16338.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16340){var self__ = this;
var _16340__$1 = this;return self__.meta16339;
});
domina.events.t16338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16340,meta16339__$1){var self__ = this;
var _16340__$1 = this;return (new domina.events.t16338(self__.evt,self__.f,self__.create_listener_function,meta16339__$1));
});
domina.events.__GT_t16338 = (function __GT_t16338(evt__$1,f__$1,create_listener_function__$1,meta16339){return (new domina.events.t16338(evt__$1,f__$1,create_listener_function__$1,meta16339));
});
}
return (new domina.events.t16338(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16345(s__16346){return (new cljs.core.LazySeq(null,(function (){var s__16346__$1 = s__16346;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16346__$1);if(temp__4092__auto__)
{var s__16346__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16346__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16346__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16348 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16347 = 0;while(true){
if((i__16347 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16347);cljs.core.chunk_append.call(null,b__16348,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16349 = (i__16347 + 1);
i__16347 = G__16349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16348),iter__16345.call(null,cljs.core.chunk_rest.call(null,s__16346__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16348),null);
}
} else
{var node = cljs.core.first.call(null,s__16346__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16345.call(null,cljs.core.rest.call(null,s__16346__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16358 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16359 = null;var count__16360 = 0;var i__16361 = 0;while(true){
if((i__16361 < count__16360))
{var node = cljs.core._nth.call(null,chunk__16359,i__16361);goog.events.removeAll(node);
{
var G__16366 = seq__16358;
var G__16367 = chunk__16359;
var G__16368 = count__16360;
var G__16369 = (i__16361 + 1);
seq__16358 = G__16366;
chunk__16359 = G__16367;
count__16360 = G__16368;
i__16361 = G__16369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16358);if(temp__4092__auto__)
{var seq__16358__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16358__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16358__$1);{
var G__16370 = cljs.core.chunk_rest.call(null,seq__16358__$1);
var G__16371 = c__4148__auto__;
var G__16372 = cljs.core.count.call(null,c__4148__auto__);
var G__16373 = 0;
seq__16358 = G__16370;
chunk__16359 = G__16371;
count__16360 = G__16372;
i__16361 = G__16373;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16358__$1);goog.events.removeAll(node);
{
var G__16374 = cljs.core.next.call(null,seq__16358__$1);
var G__16375 = null;
var G__16376 = 0;
var G__16377 = 0;
seq__16358 = G__16374;
chunk__16359 = G__16375;
count__16360 = G__16376;
i__16361 = G__16377;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16363 = null;var count__16364 = 0;var i__16365 = 0;while(true){
if((i__16365 < count__16364))
{var node = cljs.core._nth.call(null,chunk__16363,i__16365);goog.events.removeAll(node,type__$1);
{
var G__16378 = seq__16362;
var G__16379 = chunk__16363;
var G__16380 = count__16364;
var G__16381 = (i__16365 + 1);
seq__16362 = G__16378;
chunk__16363 = G__16379;
count__16364 = G__16380;
i__16365 = G__16381;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16362);if(temp__4092__auto__)
{var seq__16362__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16362__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16362__$1);{
var G__16382 = cljs.core.chunk_rest.call(null,seq__16362__$1);
var G__16383 = c__4148__auto__;
var G__16384 = cljs.core.count.call(null,c__4148__auto__);
var G__16385 = 0;
seq__16362 = G__16382;
chunk__16363 = G__16383;
count__16364 = G__16384;
i__16365 = G__16385;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16362__$1);goog.events.removeAll(node,type__$1);
{
var G__16386 = cljs.core.next.call(null,seq__16362__$1);
var G__16387 = null;
var G__16388 = 0;
var G__16389 = 0;
seq__16362 = G__16386;
chunk__16363 = G__16387;
count__16364 = G__16388;
i__16365 = G__16389;
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
var G__16390 = parent;
var G__16391 = cljs.core.cons.call(null,parent,so_far);
n = G__16390;
so_far = G__16391;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16400_16408 = cljs.core.seq.call(null,ancestors);var chunk__16401_16409 = null;var count__16402_16410 = 0;var i__16403_16411 = 0;while(true){
if((i__16403_16411 < count__16402_16410))
{var n_16412 = cljs.core._nth.call(null,chunk__16401_16409,i__16403_16411);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16412;
goog.events.fireListeners(n_16412,evt.type,true,evt);
}
{
var G__16413 = seq__16400_16408;
var G__16414 = chunk__16401_16409;
var G__16415 = count__16402_16410;
var G__16416 = (i__16403_16411 + 1);
seq__16400_16408 = G__16413;
chunk__16401_16409 = G__16414;
count__16402_16410 = G__16415;
i__16403_16411 = G__16416;
continue;
}
} else
{var temp__4092__auto___16417 = cljs.core.seq.call(null,seq__16400_16408);if(temp__4092__auto___16417)
{var seq__16400_16418__$1 = temp__4092__auto___16417;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16400_16418__$1))
{var c__4148__auto___16419 = cljs.core.chunk_first.call(null,seq__16400_16418__$1);{
var G__16420 = cljs.core.chunk_rest.call(null,seq__16400_16418__$1);
var G__16421 = c__4148__auto___16419;
var G__16422 = cljs.core.count.call(null,c__4148__auto___16419);
var G__16423 = 0;
seq__16400_16408 = G__16420;
chunk__16401_16409 = G__16421;
count__16402_16410 = G__16422;
i__16403_16411 = G__16423;
continue;
}
} else
{var n_16424 = cljs.core.first.call(null,seq__16400_16418__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16424;
goog.events.fireListeners(n_16424,evt.type,true,evt);
}
{
var G__16425 = cljs.core.next.call(null,seq__16400_16418__$1);
var G__16426 = null;
var G__16427 = 0;
var G__16428 = 0;
seq__16400_16408 = G__16425;
chunk__16401_16409 = G__16426;
count__16402_16410 = G__16427;
i__16403_16411 = G__16428;
continue;
}
}
} else
{}
}
break;
}
var seq__16404_16429 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16405_16430 = null;var count__16406_16431 = 0;var i__16407_16432 = 0;while(true){
if((i__16407_16432 < count__16406_16431))
{var n_16433 = cljs.core._nth.call(null,chunk__16405_16430,i__16407_16432);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16433;
goog.events.fireListeners(n_16433,evt.type,false,evt);
}
{
var G__16434 = seq__16404_16429;
var G__16435 = chunk__16405_16430;
var G__16436 = count__16406_16431;
var G__16437 = (i__16407_16432 + 1);
seq__16404_16429 = G__16434;
chunk__16405_16430 = G__16435;
count__16406_16431 = G__16436;
i__16407_16432 = G__16437;
continue;
}
} else
{var temp__4092__auto___16438 = cljs.core.seq.call(null,seq__16404_16429);if(temp__4092__auto___16438)
{var seq__16404_16439__$1 = temp__4092__auto___16438;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16404_16439__$1))
{var c__4148__auto___16440 = cljs.core.chunk_first.call(null,seq__16404_16439__$1);{
var G__16441 = cljs.core.chunk_rest.call(null,seq__16404_16439__$1);
var G__16442 = c__4148__auto___16440;
var G__16443 = cljs.core.count.call(null,c__4148__auto___16440);
var G__16444 = 0;
seq__16404_16429 = G__16441;
chunk__16405_16430 = G__16442;
count__16406_16431 = G__16443;
i__16407_16432 = G__16444;
continue;
}
} else
{var n_16445 = cljs.core.first.call(null,seq__16404_16439__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16445;
goog.events.fireListeners(n_16445,evt.type,false,evt);
}
{
var G__16446 = cljs.core.next.call(null,seq__16404_16439__$1);
var G__16447 = null;
var G__16448 = 0;
var G__16449 = 0;
seq__16404_16429 = G__16446;
chunk__16405_16430 = G__16447;
count__16406_16431 = G__16448;
i__16407_16432 = G__16449;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16456_16462 = cljs.core.seq.call(null,evt_map);var chunk__16457_16463 = null;var count__16458_16464 = 0;var i__16459_16465 = 0;while(true){
if((i__16459_16465 < count__16458_16464))
{var vec__16460_16466 = cljs.core._nth.call(null,chunk__16457_16463,i__16459_16465);var k_16467 = cljs.core.nth.call(null,vec__16460_16466,0,null);var v_16468 = cljs.core.nth.call(null,vec__16460_16466,1,null);(evt[k_16467] = v_16468);
{
var G__16469 = seq__16456_16462;
var G__16470 = chunk__16457_16463;
var G__16471 = count__16458_16464;
var G__16472 = (i__16459_16465 + 1);
seq__16456_16462 = G__16469;
chunk__16457_16463 = G__16470;
count__16458_16464 = G__16471;
i__16459_16465 = G__16472;
continue;
}
} else
{var temp__4092__auto___16473 = cljs.core.seq.call(null,seq__16456_16462);if(temp__4092__auto___16473)
{var seq__16456_16474__$1 = temp__4092__auto___16473;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16456_16474__$1))
{var c__4148__auto___16475 = cljs.core.chunk_first.call(null,seq__16456_16474__$1);{
var G__16476 = cljs.core.chunk_rest.call(null,seq__16456_16474__$1);
var G__16477 = c__4148__auto___16475;
var G__16478 = cljs.core.count.call(null,c__4148__auto___16475);
var G__16479 = 0;
seq__16456_16462 = G__16476;
chunk__16457_16463 = G__16477;
count__16458_16464 = G__16478;
i__16459_16465 = G__16479;
continue;
}
} else
{var vec__16461_16480 = cljs.core.first.call(null,seq__16456_16474__$1);var k_16481 = cljs.core.nth.call(null,vec__16461_16480,0,null);var v_16482 = cljs.core.nth.call(null,vec__16461_16480,1,null);(evt[k_16481] = v_16482);
{
var G__16483 = cljs.core.next.call(null,seq__16456_16474__$1);
var G__16484 = null;
var G__16485 = 0;
var G__16486 = 0;
seq__16456_16462 = G__16483;
chunk__16457_16463 = G__16484;
count__16458_16464 = G__16485;
i__16459_16465 = G__16486;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16487_SHARP_){return goog.events.getListeners(p1__16487_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map