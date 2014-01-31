// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36312 = {};return obj36312;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36316 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36316 = (function (evt,f,create_listener_function,meta36317){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36317 = meta36317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36316.cljs$lang$type = true;
domina.events.t36316.cljs$lang$ctorStr = "domina.events/t36316";
domina.events.t36316.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36316");
});
domina.events.t36316.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36316.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36316.prototype.domina$events$Event$ = true;
domina.events.t36316.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36316.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36316.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36316.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36316.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36316.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36318){var self__ = this;
var _36318__$1 = this;return self__.meta36317;
});
domina.events.t36316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36318,meta36317__$1){var self__ = this;
var _36318__$1 = this;return (new domina.events.t36316(self__.evt,self__.f,self__.create_listener_function,meta36317__$1));
});
domina.events.__GT_t36316 = (function __GT_t36316(evt__$1,f__$1,create_listener_function__$1,meta36317){return (new domina.events.t36316(evt__$1,f__$1,create_listener_function__$1,meta36317));
});
}
return (new domina.events.t36316(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36323(s__36324){return (new cljs.core.LazySeq(null,(function (){var s__36324__$1 = s__36324;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36324__$1);if(temp__4092__auto__)
{var s__36324__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36324__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36324__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36326 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36325 = 0;while(true){
if((i__36325 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36325);cljs.core.chunk_append.call(null,b__36326,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36327 = (i__36325 + 1);
i__36325 = G__36327;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36326),iter__36323.call(null,cljs.core.chunk_rest.call(null,s__36324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36326),null);
}
} else
{var node = cljs.core.first.call(null,s__36324__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36323.call(null,cljs.core.rest.call(null,s__36324__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36336 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36337 = null;var count__36338 = 0;var i__36339 = 0;while(true){
if((i__36339 < count__36338))
{var node = cljs.core._nth.call(null,chunk__36337,i__36339);goog.events.removeAll(node);
{
var G__36344 = seq__36336;
var G__36345 = chunk__36337;
var G__36346 = count__36338;
var G__36347 = (i__36339 + 1);
seq__36336 = G__36344;
chunk__36337 = G__36345;
count__36338 = G__36346;
i__36339 = G__36347;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36336);if(temp__4092__auto__)
{var seq__36336__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36336__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36336__$1);{
var G__36348 = cljs.core.chunk_rest.call(null,seq__36336__$1);
var G__36349 = c__4148__auto__;
var G__36350 = cljs.core.count.call(null,c__4148__auto__);
var G__36351 = 0;
seq__36336 = G__36348;
chunk__36337 = G__36349;
count__36338 = G__36350;
i__36339 = G__36351;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36336__$1);goog.events.removeAll(node);
{
var G__36352 = cljs.core.next.call(null,seq__36336__$1);
var G__36353 = null;
var G__36354 = 0;
var G__36355 = 0;
seq__36336 = G__36352;
chunk__36337 = G__36353;
count__36338 = G__36354;
i__36339 = G__36355;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36340 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36341 = null;var count__36342 = 0;var i__36343 = 0;while(true){
if((i__36343 < count__36342))
{var node = cljs.core._nth.call(null,chunk__36341,i__36343);goog.events.removeAll(node,type__$1);
{
var G__36356 = seq__36340;
var G__36357 = chunk__36341;
var G__36358 = count__36342;
var G__36359 = (i__36343 + 1);
seq__36340 = G__36356;
chunk__36341 = G__36357;
count__36342 = G__36358;
i__36343 = G__36359;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36340);if(temp__4092__auto__)
{var seq__36340__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36340__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36340__$1);{
var G__36360 = cljs.core.chunk_rest.call(null,seq__36340__$1);
var G__36361 = c__4148__auto__;
var G__36362 = cljs.core.count.call(null,c__4148__auto__);
var G__36363 = 0;
seq__36340 = G__36360;
chunk__36341 = G__36361;
count__36342 = G__36362;
i__36343 = G__36363;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36340__$1);goog.events.removeAll(node,type__$1);
{
var G__36364 = cljs.core.next.call(null,seq__36340__$1);
var G__36365 = null;
var G__36366 = 0;
var G__36367 = 0;
seq__36340 = G__36364;
chunk__36341 = G__36365;
count__36342 = G__36366;
i__36343 = G__36367;
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
var G__36368 = parent;
var G__36369 = cljs.core.cons.call(null,parent,so_far);
n = G__36368;
so_far = G__36369;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36378_36386 = cljs.core.seq.call(null,ancestors);var chunk__36379_36387 = null;var count__36380_36388 = 0;var i__36381_36389 = 0;while(true){
if((i__36381_36389 < count__36380_36388))
{var n_36390 = cljs.core._nth.call(null,chunk__36379_36387,i__36381_36389);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36390;
goog.events.fireListeners(n_36390,evt.type,true,evt);
}
{
var G__36391 = seq__36378_36386;
var G__36392 = chunk__36379_36387;
var G__36393 = count__36380_36388;
var G__36394 = (i__36381_36389 + 1);
seq__36378_36386 = G__36391;
chunk__36379_36387 = G__36392;
count__36380_36388 = G__36393;
i__36381_36389 = G__36394;
continue;
}
} else
{var temp__4092__auto___36395 = cljs.core.seq.call(null,seq__36378_36386);if(temp__4092__auto___36395)
{var seq__36378_36396__$1 = temp__4092__auto___36395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36378_36396__$1))
{var c__4148__auto___36397 = cljs.core.chunk_first.call(null,seq__36378_36396__$1);{
var G__36398 = cljs.core.chunk_rest.call(null,seq__36378_36396__$1);
var G__36399 = c__4148__auto___36397;
var G__36400 = cljs.core.count.call(null,c__4148__auto___36397);
var G__36401 = 0;
seq__36378_36386 = G__36398;
chunk__36379_36387 = G__36399;
count__36380_36388 = G__36400;
i__36381_36389 = G__36401;
continue;
}
} else
{var n_36402 = cljs.core.first.call(null,seq__36378_36396__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36402;
goog.events.fireListeners(n_36402,evt.type,true,evt);
}
{
var G__36403 = cljs.core.next.call(null,seq__36378_36396__$1);
var G__36404 = null;
var G__36405 = 0;
var G__36406 = 0;
seq__36378_36386 = G__36403;
chunk__36379_36387 = G__36404;
count__36380_36388 = G__36405;
i__36381_36389 = G__36406;
continue;
}
}
} else
{}
}
break;
}
var seq__36382_36407 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36383_36408 = null;var count__36384_36409 = 0;var i__36385_36410 = 0;while(true){
if((i__36385_36410 < count__36384_36409))
{var n_36411 = cljs.core._nth.call(null,chunk__36383_36408,i__36385_36410);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36411;
goog.events.fireListeners(n_36411,evt.type,false,evt);
}
{
var G__36412 = seq__36382_36407;
var G__36413 = chunk__36383_36408;
var G__36414 = count__36384_36409;
var G__36415 = (i__36385_36410 + 1);
seq__36382_36407 = G__36412;
chunk__36383_36408 = G__36413;
count__36384_36409 = G__36414;
i__36385_36410 = G__36415;
continue;
}
} else
{var temp__4092__auto___36416 = cljs.core.seq.call(null,seq__36382_36407);if(temp__4092__auto___36416)
{var seq__36382_36417__$1 = temp__4092__auto___36416;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36382_36417__$1))
{var c__4148__auto___36418 = cljs.core.chunk_first.call(null,seq__36382_36417__$1);{
var G__36419 = cljs.core.chunk_rest.call(null,seq__36382_36417__$1);
var G__36420 = c__4148__auto___36418;
var G__36421 = cljs.core.count.call(null,c__4148__auto___36418);
var G__36422 = 0;
seq__36382_36407 = G__36419;
chunk__36383_36408 = G__36420;
count__36384_36409 = G__36421;
i__36385_36410 = G__36422;
continue;
}
} else
{var n_36423 = cljs.core.first.call(null,seq__36382_36417__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36423;
goog.events.fireListeners(n_36423,evt.type,false,evt);
}
{
var G__36424 = cljs.core.next.call(null,seq__36382_36417__$1);
var G__36425 = null;
var G__36426 = 0;
var G__36427 = 0;
seq__36382_36407 = G__36424;
chunk__36383_36408 = G__36425;
count__36384_36409 = G__36426;
i__36385_36410 = G__36427;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36434_36440 = cljs.core.seq.call(null,evt_map);var chunk__36435_36441 = null;var count__36436_36442 = 0;var i__36437_36443 = 0;while(true){
if((i__36437_36443 < count__36436_36442))
{var vec__36438_36444 = cljs.core._nth.call(null,chunk__36435_36441,i__36437_36443);var k_36445 = cljs.core.nth.call(null,vec__36438_36444,0,null);var v_36446 = cljs.core.nth.call(null,vec__36438_36444,1,null);(evt[k_36445] = v_36446);
{
var G__36447 = seq__36434_36440;
var G__36448 = chunk__36435_36441;
var G__36449 = count__36436_36442;
var G__36450 = (i__36437_36443 + 1);
seq__36434_36440 = G__36447;
chunk__36435_36441 = G__36448;
count__36436_36442 = G__36449;
i__36437_36443 = G__36450;
continue;
}
} else
{var temp__4092__auto___36451 = cljs.core.seq.call(null,seq__36434_36440);if(temp__4092__auto___36451)
{var seq__36434_36452__$1 = temp__4092__auto___36451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36434_36452__$1))
{var c__4148__auto___36453 = cljs.core.chunk_first.call(null,seq__36434_36452__$1);{
var G__36454 = cljs.core.chunk_rest.call(null,seq__36434_36452__$1);
var G__36455 = c__4148__auto___36453;
var G__36456 = cljs.core.count.call(null,c__4148__auto___36453);
var G__36457 = 0;
seq__36434_36440 = G__36454;
chunk__36435_36441 = G__36455;
count__36436_36442 = G__36456;
i__36437_36443 = G__36457;
continue;
}
} else
{var vec__36439_36458 = cljs.core.first.call(null,seq__36434_36452__$1);var k_36459 = cljs.core.nth.call(null,vec__36439_36458,0,null);var v_36460 = cljs.core.nth.call(null,vec__36439_36458,1,null);(evt[k_36459] = v_36460);
{
var G__36461 = cljs.core.next.call(null,seq__36434_36452__$1);
var G__36462 = null;
var G__36463 = 0;
var G__36464 = 0;
seq__36434_36440 = G__36461;
chunk__36435_36441 = G__36462;
count__36436_36442 = G__36463;
i__36437_36443 = G__36464;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36465_SHARP_){return goog.events.getListeners(p1__36465_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
