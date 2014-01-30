// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16358 = {};return obj16358;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16362 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16362 = (function (evt,f,create_listener_function,meta16363){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16363 = meta16363;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16362.cljs$lang$type = true;
domina.events.t16362.cljs$lang$ctorStr = "domina.events/t16362";
domina.events.t16362.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16362");
});
domina.events.t16362.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16362.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16362.prototype.domina$events$Event$ = true;
domina.events.t16362.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16362.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16362.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16362.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16362.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16362.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16364){var self__ = this;
var _16364__$1 = this;return self__.meta16363;
});
domina.events.t16362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16364,meta16363__$1){var self__ = this;
var _16364__$1 = this;return (new domina.events.t16362(self__.evt,self__.f,self__.create_listener_function,meta16363__$1));
});
domina.events.__GT_t16362 = (function __GT_t16362(evt__$1,f__$1,create_listener_function__$1,meta16363){return (new domina.events.t16362(evt__$1,f__$1,create_listener_function__$1,meta16363));
});
}
return (new domina.events.t16362(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16369(s__16370){return (new cljs.core.LazySeq(null,(function (){var s__16370__$1 = s__16370;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16370__$1);if(temp__4092__auto__)
{var s__16370__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16370__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16370__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16372 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16371 = 0;while(true){
if((i__16371 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16371);cljs.core.chunk_append.call(null,b__16372,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16373 = (i__16371 + 1);
i__16371 = G__16373;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16372),iter__16369.call(null,cljs.core.chunk_rest.call(null,s__16370__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16372),null);
}
} else
{var node = cljs.core.first.call(null,s__16370__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16369.call(null,cljs.core.rest.call(null,s__16370__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16382 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16383 = null;var count__16384 = 0;var i__16385 = 0;while(true){
if((i__16385 < count__16384))
{var node = cljs.core._nth.call(null,chunk__16383,i__16385);goog.events.removeAll(node);
{
var G__16390 = seq__16382;
var G__16391 = chunk__16383;
var G__16392 = count__16384;
var G__16393 = (i__16385 + 1);
seq__16382 = G__16390;
chunk__16383 = G__16391;
count__16384 = G__16392;
i__16385 = G__16393;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16382);if(temp__4092__auto__)
{var seq__16382__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16382__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16382__$1);{
var G__16394 = cljs.core.chunk_rest.call(null,seq__16382__$1);
var G__16395 = c__4148__auto__;
var G__16396 = cljs.core.count.call(null,c__4148__auto__);
var G__16397 = 0;
seq__16382 = G__16394;
chunk__16383 = G__16395;
count__16384 = G__16396;
i__16385 = G__16397;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16382__$1);goog.events.removeAll(node);
{
var G__16398 = cljs.core.next.call(null,seq__16382__$1);
var G__16399 = null;
var G__16400 = 0;
var G__16401 = 0;
seq__16382 = G__16398;
chunk__16383 = G__16399;
count__16384 = G__16400;
i__16385 = G__16401;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16387 = null;var count__16388 = 0;var i__16389 = 0;while(true){
if((i__16389 < count__16388))
{var node = cljs.core._nth.call(null,chunk__16387,i__16389);goog.events.removeAll(node,type__$1);
{
var G__16402 = seq__16386;
var G__16403 = chunk__16387;
var G__16404 = count__16388;
var G__16405 = (i__16389 + 1);
seq__16386 = G__16402;
chunk__16387 = G__16403;
count__16388 = G__16404;
i__16389 = G__16405;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16386);if(temp__4092__auto__)
{var seq__16386__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16386__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16386__$1);{
var G__16406 = cljs.core.chunk_rest.call(null,seq__16386__$1);
var G__16407 = c__4148__auto__;
var G__16408 = cljs.core.count.call(null,c__4148__auto__);
var G__16409 = 0;
seq__16386 = G__16406;
chunk__16387 = G__16407;
count__16388 = G__16408;
i__16389 = G__16409;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16386__$1);goog.events.removeAll(node,type__$1);
{
var G__16410 = cljs.core.next.call(null,seq__16386__$1);
var G__16411 = null;
var G__16412 = 0;
var G__16413 = 0;
seq__16386 = G__16410;
chunk__16387 = G__16411;
count__16388 = G__16412;
i__16389 = G__16413;
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
var G__16414 = parent;
var G__16415 = cljs.core.cons.call(null,parent,so_far);
n = G__16414;
so_far = G__16415;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16424_16432 = cljs.core.seq.call(null,ancestors);var chunk__16425_16433 = null;var count__16426_16434 = 0;var i__16427_16435 = 0;while(true){
if((i__16427_16435 < count__16426_16434))
{var n_16436 = cljs.core._nth.call(null,chunk__16425_16433,i__16427_16435);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16436;
goog.events.fireListeners(n_16436,evt.type,true,evt);
}
{
var G__16437 = seq__16424_16432;
var G__16438 = chunk__16425_16433;
var G__16439 = count__16426_16434;
var G__16440 = (i__16427_16435 + 1);
seq__16424_16432 = G__16437;
chunk__16425_16433 = G__16438;
count__16426_16434 = G__16439;
i__16427_16435 = G__16440;
continue;
}
} else
{var temp__4092__auto___16441 = cljs.core.seq.call(null,seq__16424_16432);if(temp__4092__auto___16441)
{var seq__16424_16442__$1 = temp__4092__auto___16441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16424_16442__$1))
{var c__4148__auto___16443 = cljs.core.chunk_first.call(null,seq__16424_16442__$1);{
var G__16444 = cljs.core.chunk_rest.call(null,seq__16424_16442__$1);
var G__16445 = c__4148__auto___16443;
var G__16446 = cljs.core.count.call(null,c__4148__auto___16443);
var G__16447 = 0;
seq__16424_16432 = G__16444;
chunk__16425_16433 = G__16445;
count__16426_16434 = G__16446;
i__16427_16435 = G__16447;
continue;
}
} else
{var n_16448 = cljs.core.first.call(null,seq__16424_16442__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16448;
goog.events.fireListeners(n_16448,evt.type,true,evt);
}
{
var G__16449 = cljs.core.next.call(null,seq__16424_16442__$1);
var G__16450 = null;
var G__16451 = 0;
var G__16452 = 0;
seq__16424_16432 = G__16449;
chunk__16425_16433 = G__16450;
count__16426_16434 = G__16451;
i__16427_16435 = G__16452;
continue;
}
}
} else
{}
}
break;
}
var seq__16428_16453 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16429_16454 = null;var count__16430_16455 = 0;var i__16431_16456 = 0;while(true){
if((i__16431_16456 < count__16430_16455))
{var n_16457 = cljs.core._nth.call(null,chunk__16429_16454,i__16431_16456);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16457;
goog.events.fireListeners(n_16457,evt.type,false,evt);
}
{
var G__16458 = seq__16428_16453;
var G__16459 = chunk__16429_16454;
var G__16460 = count__16430_16455;
var G__16461 = (i__16431_16456 + 1);
seq__16428_16453 = G__16458;
chunk__16429_16454 = G__16459;
count__16430_16455 = G__16460;
i__16431_16456 = G__16461;
continue;
}
} else
{var temp__4092__auto___16462 = cljs.core.seq.call(null,seq__16428_16453);if(temp__4092__auto___16462)
{var seq__16428_16463__$1 = temp__4092__auto___16462;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16428_16463__$1))
{var c__4148__auto___16464 = cljs.core.chunk_first.call(null,seq__16428_16463__$1);{
var G__16465 = cljs.core.chunk_rest.call(null,seq__16428_16463__$1);
var G__16466 = c__4148__auto___16464;
var G__16467 = cljs.core.count.call(null,c__4148__auto___16464);
var G__16468 = 0;
seq__16428_16453 = G__16465;
chunk__16429_16454 = G__16466;
count__16430_16455 = G__16467;
i__16431_16456 = G__16468;
continue;
}
} else
{var n_16469 = cljs.core.first.call(null,seq__16428_16463__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16469;
goog.events.fireListeners(n_16469,evt.type,false,evt);
}
{
var G__16470 = cljs.core.next.call(null,seq__16428_16463__$1);
var G__16471 = null;
var G__16472 = 0;
var G__16473 = 0;
seq__16428_16453 = G__16470;
chunk__16429_16454 = G__16471;
count__16430_16455 = G__16472;
i__16431_16456 = G__16473;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16480_16486 = cljs.core.seq.call(null,evt_map);var chunk__16481_16487 = null;var count__16482_16488 = 0;var i__16483_16489 = 0;while(true){
if((i__16483_16489 < count__16482_16488))
{var vec__16484_16490 = cljs.core._nth.call(null,chunk__16481_16487,i__16483_16489);var k_16491 = cljs.core.nth.call(null,vec__16484_16490,0,null);var v_16492 = cljs.core.nth.call(null,vec__16484_16490,1,null);(evt[k_16491] = v_16492);
{
var G__16493 = seq__16480_16486;
var G__16494 = chunk__16481_16487;
var G__16495 = count__16482_16488;
var G__16496 = (i__16483_16489 + 1);
seq__16480_16486 = G__16493;
chunk__16481_16487 = G__16494;
count__16482_16488 = G__16495;
i__16483_16489 = G__16496;
continue;
}
} else
{var temp__4092__auto___16497 = cljs.core.seq.call(null,seq__16480_16486);if(temp__4092__auto___16497)
{var seq__16480_16498__$1 = temp__4092__auto___16497;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16480_16498__$1))
{var c__4148__auto___16499 = cljs.core.chunk_first.call(null,seq__16480_16498__$1);{
var G__16500 = cljs.core.chunk_rest.call(null,seq__16480_16498__$1);
var G__16501 = c__4148__auto___16499;
var G__16502 = cljs.core.count.call(null,c__4148__auto___16499);
var G__16503 = 0;
seq__16480_16486 = G__16500;
chunk__16481_16487 = G__16501;
count__16482_16488 = G__16502;
i__16483_16489 = G__16503;
continue;
}
} else
{var vec__16485_16504 = cljs.core.first.call(null,seq__16480_16498__$1);var k_16505 = cljs.core.nth.call(null,vec__16485_16504,0,null);var v_16506 = cljs.core.nth.call(null,vec__16485_16504,1,null);(evt[k_16505] = v_16506);
{
var G__16507 = cljs.core.next.call(null,seq__16480_16498__$1);
var G__16508 = null;
var G__16509 = 0;
var G__16510 = 0;
seq__16480_16486 = G__16507;
chunk__16481_16487 = G__16508;
count__16482_16488 = G__16509;
i__16483_16489 = G__16510;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16511_SHARP_){return goog.events.getListeners(p1__16511_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map