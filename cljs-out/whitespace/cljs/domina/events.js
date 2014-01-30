// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36342 = {};return obj36342;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36346 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36346 = (function (evt,f,create_listener_function,meta36347){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36347 = meta36347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36346.cljs$lang$type = true;
domina.events.t36346.cljs$lang$ctorStr = "domina.events/t36346";
domina.events.t36346.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36346");
});
domina.events.t36346.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36346.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36346.prototype.domina$events$Event$ = true;
domina.events.t36346.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36346.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36346.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36346.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36346.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36346.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36348){var self__ = this;
var _36348__$1 = this;return self__.meta36347;
});
domina.events.t36346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36348,meta36347__$1){var self__ = this;
var _36348__$1 = this;return (new domina.events.t36346(self__.evt,self__.f,self__.create_listener_function,meta36347__$1));
});
domina.events.__GT_t36346 = (function __GT_t36346(evt__$1,f__$1,create_listener_function__$1,meta36347){return (new domina.events.t36346(evt__$1,f__$1,create_listener_function__$1,meta36347));
});
}
return (new domina.events.t36346(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36353(s__36354){return (new cljs.core.LazySeq(null,(function (){var s__36354__$1 = s__36354;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36354__$1);if(temp__4092__auto__)
{var s__36354__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36354__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36354__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36356 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36355 = 0;while(true){
if((i__36355 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36355);cljs.core.chunk_append.call(null,b__36356,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36357 = (i__36355 + 1);
i__36355 = G__36357;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36356),iter__36353.call(null,cljs.core.chunk_rest.call(null,s__36354__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36356),null);
}
} else
{var node = cljs.core.first.call(null,s__36354__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36353.call(null,cljs.core.rest.call(null,s__36354__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36366 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36367 = null;var count__36368 = 0;var i__36369 = 0;while(true){
if((i__36369 < count__36368))
{var node = cljs.core._nth.call(null,chunk__36367,i__36369);goog.events.removeAll(node);
{
var G__36374 = seq__36366;
var G__36375 = chunk__36367;
var G__36376 = count__36368;
var G__36377 = (i__36369 + 1);
seq__36366 = G__36374;
chunk__36367 = G__36375;
count__36368 = G__36376;
i__36369 = G__36377;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36366);if(temp__4092__auto__)
{var seq__36366__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36366__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36366__$1);{
var G__36378 = cljs.core.chunk_rest.call(null,seq__36366__$1);
var G__36379 = c__4148__auto__;
var G__36380 = cljs.core.count.call(null,c__4148__auto__);
var G__36381 = 0;
seq__36366 = G__36378;
chunk__36367 = G__36379;
count__36368 = G__36380;
i__36369 = G__36381;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36366__$1);goog.events.removeAll(node);
{
var G__36382 = cljs.core.next.call(null,seq__36366__$1);
var G__36383 = null;
var G__36384 = 0;
var G__36385 = 0;
seq__36366 = G__36382;
chunk__36367 = G__36383;
count__36368 = G__36384;
i__36369 = G__36385;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36370 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36371 = null;var count__36372 = 0;var i__36373 = 0;while(true){
if((i__36373 < count__36372))
{var node = cljs.core._nth.call(null,chunk__36371,i__36373);goog.events.removeAll(node,type__$1);
{
var G__36386 = seq__36370;
var G__36387 = chunk__36371;
var G__36388 = count__36372;
var G__36389 = (i__36373 + 1);
seq__36370 = G__36386;
chunk__36371 = G__36387;
count__36372 = G__36388;
i__36373 = G__36389;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36370);if(temp__4092__auto__)
{var seq__36370__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36370__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36370__$1);{
var G__36390 = cljs.core.chunk_rest.call(null,seq__36370__$1);
var G__36391 = c__4148__auto__;
var G__36392 = cljs.core.count.call(null,c__4148__auto__);
var G__36393 = 0;
seq__36370 = G__36390;
chunk__36371 = G__36391;
count__36372 = G__36392;
i__36373 = G__36393;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36370__$1);goog.events.removeAll(node,type__$1);
{
var G__36394 = cljs.core.next.call(null,seq__36370__$1);
var G__36395 = null;
var G__36396 = 0;
var G__36397 = 0;
seq__36370 = G__36394;
chunk__36371 = G__36395;
count__36372 = G__36396;
i__36373 = G__36397;
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
var G__36398 = parent;
var G__36399 = cljs.core.cons.call(null,parent,so_far);
n = G__36398;
so_far = G__36399;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36408_36416 = cljs.core.seq.call(null,ancestors);var chunk__36409_36417 = null;var count__36410_36418 = 0;var i__36411_36419 = 0;while(true){
if((i__36411_36419 < count__36410_36418))
{var n_36420 = cljs.core._nth.call(null,chunk__36409_36417,i__36411_36419);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36420;
goog.events.fireListeners(n_36420,evt.type,true,evt);
}
{
var G__36421 = seq__36408_36416;
var G__36422 = chunk__36409_36417;
var G__36423 = count__36410_36418;
var G__36424 = (i__36411_36419 + 1);
seq__36408_36416 = G__36421;
chunk__36409_36417 = G__36422;
count__36410_36418 = G__36423;
i__36411_36419 = G__36424;
continue;
}
} else
{var temp__4092__auto___36425 = cljs.core.seq.call(null,seq__36408_36416);if(temp__4092__auto___36425)
{var seq__36408_36426__$1 = temp__4092__auto___36425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36408_36426__$1))
{var c__4148__auto___36427 = cljs.core.chunk_first.call(null,seq__36408_36426__$1);{
var G__36428 = cljs.core.chunk_rest.call(null,seq__36408_36426__$1);
var G__36429 = c__4148__auto___36427;
var G__36430 = cljs.core.count.call(null,c__4148__auto___36427);
var G__36431 = 0;
seq__36408_36416 = G__36428;
chunk__36409_36417 = G__36429;
count__36410_36418 = G__36430;
i__36411_36419 = G__36431;
continue;
}
} else
{var n_36432 = cljs.core.first.call(null,seq__36408_36426__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36432;
goog.events.fireListeners(n_36432,evt.type,true,evt);
}
{
var G__36433 = cljs.core.next.call(null,seq__36408_36426__$1);
var G__36434 = null;
var G__36435 = 0;
var G__36436 = 0;
seq__36408_36416 = G__36433;
chunk__36409_36417 = G__36434;
count__36410_36418 = G__36435;
i__36411_36419 = G__36436;
continue;
}
}
} else
{}
}
break;
}
var seq__36412_36437 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36413_36438 = null;var count__36414_36439 = 0;var i__36415_36440 = 0;while(true){
if((i__36415_36440 < count__36414_36439))
{var n_36441 = cljs.core._nth.call(null,chunk__36413_36438,i__36415_36440);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36441;
goog.events.fireListeners(n_36441,evt.type,false,evt);
}
{
var G__36442 = seq__36412_36437;
var G__36443 = chunk__36413_36438;
var G__36444 = count__36414_36439;
var G__36445 = (i__36415_36440 + 1);
seq__36412_36437 = G__36442;
chunk__36413_36438 = G__36443;
count__36414_36439 = G__36444;
i__36415_36440 = G__36445;
continue;
}
} else
{var temp__4092__auto___36446 = cljs.core.seq.call(null,seq__36412_36437);if(temp__4092__auto___36446)
{var seq__36412_36447__$1 = temp__4092__auto___36446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36412_36447__$1))
{var c__4148__auto___36448 = cljs.core.chunk_first.call(null,seq__36412_36447__$1);{
var G__36449 = cljs.core.chunk_rest.call(null,seq__36412_36447__$1);
var G__36450 = c__4148__auto___36448;
var G__36451 = cljs.core.count.call(null,c__4148__auto___36448);
var G__36452 = 0;
seq__36412_36437 = G__36449;
chunk__36413_36438 = G__36450;
count__36414_36439 = G__36451;
i__36415_36440 = G__36452;
continue;
}
} else
{var n_36453 = cljs.core.first.call(null,seq__36412_36447__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36453;
goog.events.fireListeners(n_36453,evt.type,false,evt);
}
{
var G__36454 = cljs.core.next.call(null,seq__36412_36447__$1);
var G__36455 = null;
var G__36456 = 0;
var G__36457 = 0;
seq__36412_36437 = G__36454;
chunk__36413_36438 = G__36455;
count__36414_36439 = G__36456;
i__36415_36440 = G__36457;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36464_36470 = cljs.core.seq.call(null,evt_map);var chunk__36465_36471 = null;var count__36466_36472 = 0;var i__36467_36473 = 0;while(true){
if((i__36467_36473 < count__36466_36472))
{var vec__36468_36474 = cljs.core._nth.call(null,chunk__36465_36471,i__36467_36473);var k_36475 = cljs.core.nth.call(null,vec__36468_36474,0,null);var v_36476 = cljs.core.nth.call(null,vec__36468_36474,1,null);(evt[k_36475] = v_36476);
{
var G__36477 = seq__36464_36470;
var G__36478 = chunk__36465_36471;
var G__36479 = count__36466_36472;
var G__36480 = (i__36467_36473 + 1);
seq__36464_36470 = G__36477;
chunk__36465_36471 = G__36478;
count__36466_36472 = G__36479;
i__36467_36473 = G__36480;
continue;
}
} else
{var temp__4092__auto___36481 = cljs.core.seq.call(null,seq__36464_36470);if(temp__4092__auto___36481)
{var seq__36464_36482__$1 = temp__4092__auto___36481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36464_36482__$1))
{var c__4148__auto___36483 = cljs.core.chunk_first.call(null,seq__36464_36482__$1);{
var G__36484 = cljs.core.chunk_rest.call(null,seq__36464_36482__$1);
var G__36485 = c__4148__auto___36483;
var G__36486 = cljs.core.count.call(null,c__4148__auto___36483);
var G__36487 = 0;
seq__36464_36470 = G__36484;
chunk__36465_36471 = G__36485;
count__36466_36472 = G__36486;
i__36467_36473 = G__36487;
continue;
}
} else
{var vec__36469_36488 = cljs.core.first.call(null,seq__36464_36482__$1);var k_36489 = cljs.core.nth.call(null,vec__36469_36488,0,null);var v_36490 = cljs.core.nth.call(null,vec__36469_36488,1,null);(evt[k_36489] = v_36490);
{
var G__36491 = cljs.core.next.call(null,seq__36464_36482__$1);
var G__36492 = null;
var G__36493 = 0;
var G__36494 = 0;
seq__36464_36470 = G__36491;
chunk__36465_36471 = G__36492;
count__36466_36472 = G__36493;
i__36467_36473 = G__36494;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36495_SHARP_){return goog.events.getListeners(p1__36495_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
