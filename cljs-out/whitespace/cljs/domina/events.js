// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36291 = {};return obj36291;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36295 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36295 = (function (evt,f,create_listener_function,meta36296){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36296 = meta36296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36295.cljs$lang$type = true;
domina.events.t36295.cljs$lang$ctorStr = "domina.events/t36295";
domina.events.t36295.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36295");
});
domina.events.t36295.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36295.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36295.prototype.domina$events$Event$ = true;
domina.events.t36295.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36295.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36295.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36295.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36295.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36295.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36297){var self__ = this;
var _36297__$1 = this;return self__.meta36296;
});
domina.events.t36295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36297,meta36296__$1){var self__ = this;
var _36297__$1 = this;return (new domina.events.t36295(self__.evt,self__.f,self__.create_listener_function,meta36296__$1));
});
domina.events.__GT_t36295 = (function __GT_t36295(evt__$1,f__$1,create_listener_function__$1,meta36296){return (new domina.events.t36295(evt__$1,f__$1,create_listener_function__$1,meta36296));
});
}
return (new domina.events.t36295(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36302(s__36303){return (new cljs.core.LazySeq(null,(function (){var s__36303__$1 = s__36303;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36303__$1);if(temp__4092__auto__)
{var s__36303__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36303__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36303__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36305 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36304 = 0;while(true){
if((i__36304 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36304);cljs.core.chunk_append.call(null,b__36305,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36306 = (i__36304 + 1);
i__36304 = G__36306;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36305),iter__36302.call(null,cljs.core.chunk_rest.call(null,s__36303__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36305),null);
}
} else
{var node = cljs.core.first.call(null,s__36303__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36302.call(null,cljs.core.rest.call(null,s__36303__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36315 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36316 = null;var count__36317 = 0;var i__36318 = 0;while(true){
if((i__36318 < count__36317))
{var node = cljs.core._nth.call(null,chunk__36316,i__36318);goog.events.removeAll(node);
{
var G__36323 = seq__36315;
var G__36324 = chunk__36316;
var G__36325 = count__36317;
var G__36326 = (i__36318 + 1);
seq__36315 = G__36323;
chunk__36316 = G__36324;
count__36317 = G__36325;
i__36318 = G__36326;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36315);if(temp__4092__auto__)
{var seq__36315__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36315__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36315__$1);{
var G__36327 = cljs.core.chunk_rest.call(null,seq__36315__$1);
var G__36328 = c__4148__auto__;
var G__36329 = cljs.core.count.call(null,c__4148__auto__);
var G__36330 = 0;
seq__36315 = G__36327;
chunk__36316 = G__36328;
count__36317 = G__36329;
i__36318 = G__36330;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36315__$1);goog.events.removeAll(node);
{
var G__36331 = cljs.core.next.call(null,seq__36315__$1);
var G__36332 = null;
var G__36333 = 0;
var G__36334 = 0;
seq__36315 = G__36331;
chunk__36316 = G__36332;
count__36317 = G__36333;
i__36318 = G__36334;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36319 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36320 = null;var count__36321 = 0;var i__36322 = 0;while(true){
if((i__36322 < count__36321))
{var node = cljs.core._nth.call(null,chunk__36320,i__36322);goog.events.removeAll(node,type__$1);
{
var G__36335 = seq__36319;
var G__36336 = chunk__36320;
var G__36337 = count__36321;
var G__36338 = (i__36322 + 1);
seq__36319 = G__36335;
chunk__36320 = G__36336;
count__36321 = G__36337;
i__36322 = G__36338;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36319);if(temp__4092__auto__)
{var seq__36319__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36319__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36319__$1);{
var G__36339 = cljs.core.chunk_rest.call(null,seq__36319__$1);
var G__36340 = c__4148__auto__;
var G__36341 = cljs.core.count.call(null,c__4148__auto__);
var G__36342 = 0;
seq__36319 = G__36339;
chunk__36320 = G__36340;
count__36321 = G__36341;
i__36322 = G__36342;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36319__$1);goog.events.removeAll(node,type__$1);
{
var G__36343 = cljs.core.next.call(null,seq__36319__$1);
var G__36344 = null;
var G__36345 = 0;
var G__36346 = 0;
seq__36319 = G__36343;
chunk__36320 = G__36344;
count__36321 = G__36345;
i__36322 = G__36346;
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
var G__36347 = parent;
var G__36348 = cljs.core.cons.call(null,parent,so_far);
n = G__36347;
so_far = G__36348;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36357_36365 = cljs.core.seq.call(null,ancestors);var chunk__36358_36366 = null;var count__36359_36367 = 0;var i__36360_36368 = 0;while(true){
if((i__36360_36368 < count__36359_36367))
{var n_36369 = cljs.core._nth.call(null,chunk__36358_36366,i__36360_36368);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36369;
goog.events.fireListeners(n_36369,evt.type,true,evt);
}
{
var G__36370 = seq__36357_36365;
var G__36371 = chunk__36358_36366;
var G__36372 = count__36359_36367;
var G__36373 = (i__36360_36368 + 1);
seq__36357_36365 = G__36370;
chunk__36358_36366 = G__36371;
count__36359_36367 = G__36372;
i__36360_36368 = G__36373;
continue;
}
} else
{var temp__4092__auto___36374 = cljs.core.seq.call(null,seq__36357_36365);if(temp__4092__auto___36374)
{var seq__36357_36375__$1 = temp__4092__auto___36374;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36357_36375__$1))
{var c__4148__auto___36376 = cljs.core.chunk_first.call(null,seq__36357_36375__$1);{
var G__36377 = cljs.core.chunk_rest.call(null,seq__36357_36375__$1);
var G__36378 = c__4148__auto___36376;
var G__36379 = cljs.core.count.call(null,c__4148__auto___36376);
var G__36380 = 0;
seq__36357_36365 = G__36377;
chunk__36358_36366 = G__36378;
count__36359_36367 = G__36379;
i__36360_36368 = G__36380;
continue;
}
} else
{var n_36381 = cljs.core.first.call(null,seq__36357_36375__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36381;
goog.events.fireListeners(n_36381,evt.type,true,evt);
}
{
var G__36382 = cljs.core.next.call(null,seq__36357_36375__$1);
var G__36383 = null;
var G__36384 = 0;
var G__36385 = 0;
seq__36357_36365 = G__36382;
chunk__36358_36366 = G__36383;
count__36359_36367 = G__36384;
i__36360_36368 = G__36385;
continue;
}
}
} else
{}
}
break;
}
var seq__36361_36386 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36362_36387 = null;var count__36363_36388 = 0;var i__36364_36389 = 0;while(true){
if((i__36364_36389 < count__36363_36388))
{var n_36390 = cljs.core._nth.call(null,chunk__36362_36387,i__36364_36389);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36390;
goog.events.fireListeners(n_36390,evt.type,false,evt);
}
{
var G__36391 = seq__36361_36386;
var G__36392 = chunk__36362_36387;
var G__36393 = count__36363_36388;
var G__36394 = (i__36364_36389 + 1);
seq__36361_36386 = G__36391;
chunk__36362_36387 = G__36392;
count__36363_36388 = G__36393;
i__36364_36389 = G__36394;
continue;
}
} else
{var temp__4092__auto___36395 = cljs.core.seq.call(null,seq__36361_36386);if(temp__4092__auto___36395)
{var seq__36361_36396__$1 = temp__4092__auto___36395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36361_36396__$1))
{var c__4148__auto___36397 = cljs.core.chunk_first.call(null,seq__36361_36396__$1);{
var G__36398 = cljs.core.chunk_rest.call(null,seq__36361_36396__$1);
var G__36399 = c__4148__auto___36397;
var G__36400 = cljs.core.count.call(null,c__4148__auto___36397);
var G__36401 = 0;
seq__36361_36386 = G__36398;
chunk__36362_36387 = G__36399;
count__36363_36388 = G__36400;
i__36364_36389 = G__36401;
continue;
}
} else
{var n_36402 = cljs.core.first.call(null,seq__36361_36396__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36402;
goog.events.fireListeners(n_36402,evt.type,false,evt);
}
{
var G__36403 = cljs.core.next.call(null,seq__36361_36396__$1);
var G__36404 = null;
var G__36405 = 0;
var G__36406 = 0;
seq__36361_36386 = G__36403;
chunk__36362_36387 = G__36404;
count__36363_36388 = G__36405;
i__36364_36389 = G__36406;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36413_36419 = cljs.core.seq.call(null,evt_map);var chunk__36414_36420 = null;var count__36415_36421 = 0;var i__36416_36422 = 0;while(true){
if((i__36416_36422 < count__36415_36421))
{var vec__36417_36423 = cljs.core._nth.call(null,chunk__36414_36420,i__36416_36422);var k_36424 = cljs.core.nth.call(null,vec__36417_36423,0,null);var v_36425 = cljs.core.nth.call(null,vec__36417_36423,1,null);(evt[k_36424] = v_36425);
{
var G__36426 = seq__36413_36419;
var G__36427 = chunk__36414_36420;
var G__36428 = count__36415_36421;
var G__36429 = (i__36416_36422 + 1);
seq__36413_36419 = G__36426;
chunk__36414_36420 = G__36427;
count__36415_36421 = G__36428;
i__36416_36422 = G__36429;
continue;
}
} else
{var temp__4092__auto___36430 = cljs.core.seq.call(null,seq__36413_36419);if(temp__4092__auto___36430)
{var seq__36413_36431__$1 = temp__4092__auto___36430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36413_36431__$1))
{var c__4148__auto___36432 = cljs.core.chunk_first.call(null,seq__36413_36431__$1);{
var G__36433 = cljs.core.chunk_rest.call(null,seq__36413_36431__$1);
var G__36434 = c__4148__auto___36432;
var G__36435 = cljs.core.count.call(null,c__4148__auto___36432);
var G__36436 = 0;
seq__36413_36419 = G__36433;
chunk__36414_36420 = G__36434;
count__36415_36421 = G__36435;
i__36416_36422 = G__36436;
continue;
}
} else
{var vec__36418_36437 = cljs.core.first.call(null,seq__36413_36431__$1);var k_36438 = cljs.core.nth.call(null,vec__36418_36437,0,null);var v_36439 = cljs.core.nth.call(null,vec__36418_36437,1,null);(evt[k_36438] = v_36439);
{
var G__36440 = cljs.core.next.call(null,seq__36413_36431__$1);
var G__36441 = null;
var G__36442 = 0;
var G__36443 = 0;
seq__36413_36419 = G__36440;
chunk__36414_36420 = G__36441;
count__36415_36421 = G__36442;
i__36416_36422 = G__36443;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36444_SHARP_){return goog.events.getListeners(p1__36444_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
