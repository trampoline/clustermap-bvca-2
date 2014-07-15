// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj29319 = {};return obj29319;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t29323 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t29323 = (function (evt,f,create_listener_function,meta29324){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta29324 = meta29324;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t29323.cljs$lang$type = true;
domina.events.t29323.cljs$lang$ctorStr = "domina.events/t29323";
domina.events.t29323.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t29323");
});
domina.events.t29323.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t29323.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t29323.prototype.domina$events$Event$ = true;
domina.events.t29323.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t29323.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t29323.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t29323.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t29323.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t29323.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t29323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29325){var self__ = this;
var _29325__$1 = this;return self__.meta29324;
});
domina.events.t29323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29325,meta29324__$1){var self__ = this;
var _29325__$1 = this;return (new domina.events.t29323(self__.evt,self__.f,self__.create_listener_function,meta29324__$1));
});
domina.events.__GT_t29323 = (function __GT_t29323(evt__$1,f__$1,create_listener_function__$1,meta29324){return (new domina.events.t29323(evt__$1,f__$1,create_listener_function__$1,meta29324));
});
}
return (new domina.events.t29323(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__29330(s__29331){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__29331__$1 = s__29331;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29331__$1);if(temp__4126__auto__)
{var s__29331__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29331__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__29331__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__29333 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__29332 = (0);while(true){
if((i__29332 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__29332);cljs.core.chunk_append.call(null,b__29333,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__29334 = (i__29332 + (1));
i__29332 = G__29334;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29333),iter__29330.call(null,cljs.core.chunk_rest.call(null,s__29331__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29333),null);
}
} else
{var node = cljs.core.first.call(null,s__29331__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__29330.call(null,cljs.core.rest.call(null,s__29331__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__29343 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29344 = null;var count__29345 = (0);var i__29346 = (0);while(true){
if((i__29346 < count__29345))
{var node = cljs.core._nth.call(null,chunk__29344,i__29346);goog.events.removeAll(node);
{
var G__29351 = seq__29343;
var G__29352 = chunk__29344;
var G__29353 = count__29345;
var G__29354 = (i__29346 + (1));
seq__29343 = G__29351;
chunk__29344 = G__29352;
count__29345 = G__29353;
i__29346 = G__29354;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29343);if(temp__4126__auto__)
{var seq__29343__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29343__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__29343__$1);{
var G__29355 = cljs.core.chunk_rest.call(null,seq__29343__$1);
var G__29356 = c__4299__auto__;
var G__29357 = cljs.core.count.call(null,c__4299__auto__);
var G__29358 = (0);
seq__29343 = G__29355;
chunk__29344 = G__29356;
count__29345 = G__29357;
i__29346 = G__29358;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__29343__$1);goog.events.removeAll(node);
{
var G__29359 = cljs.core.next.call(null,seq__29343__$1);
var G__29360 = null;
var G__29361 = (0);
var G__29362 = (0);
seq__29343 = G__29359;
chunk__29344 = G__29360;
count__29345 = G__29361;
i__29346 = G__29362;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__29347 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29348 = null;var count__29349 = (0);var i__29350 = (0);while(true){
if((i__29350 < count__29349))
{var node = cljs.core._nth.call(null,chunk__29348,i__29350);goog.events.removeAll(node,type__$1);
{
var G__29363 = seq__29347;
var G__29364 = chunk__29348;
var G__29365 = count__29349;
var G__29366 = (i__29350 + (1));
seq__29347 = G__29363;
chunk__29348 = G__29364;
count__29349 = G__29365;
i__29350 = G__29366;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__29347);if(temp__4126__auto__)
{var seq__29347__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29347__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__29347__$1);{
var G__29367 = cljs.core.chunk_rest.call(null,seq__29347__$1);
var G__29368 = c__4299__auto__;
var G__29369 = cljs.core.count.call(null,c__4299__auto__);
var G__29370 = (0);
seq__29347 = G__29367;
chunk__29348 = G__29368;
count__29349 = G__29369;
i__29350 = G__29370;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__29347__$1);goog.events.removeAll(node,type__$1);
{
var G__29371 = cljs.core.next.call(null,seq__29347__$1);
var G__29372 = null;
var G__29373 = (0);
var G__29374 = (0);
seq__29347 = G__29371;
chunk__29348 = G__29372;
count__29349 = G__29373;
i__29350 = G__29374;
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
var G__29375 = parent;
var G__29376 = cljs.core.cons.call(null,parent,so_far);
n = G__29375;
so_far = G__29376;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__29385_29393 = cljs.core.seq.call(null,ancestors);var chunk__29386_29394 = null;var count__29387_29395 = (0);var i__29388_29396 = (0);while(true){
if((i__29388_29396 < count__29387_29395))
{var n_29397 = cljs.core._nth.call(null,chunk__29386_29394,i__29388_29396);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29397;
goog.events.fireListeners(n_29397,evt.type,true,evt);
}
{
var G__29398 = seq__29385_29393;
var G__29399 = chunk__29386_29394;
var G__29400 = count__29387_29395;
var G__29401 = (i__29388_29396 + (1));
seq__29385_29393 = G__29398;
chunk__29386_29394 = G__29399;
count__29387_29395 = G__29400;
i__29388_29396 = G__29401;
continue;
}
} else
{var temp__4126__auto___29402 = cljs.core.seq.call(null,seq__29385_29393);if(temp__4126__auto___29402)
{var seq__29385_29403__$1 = temp__4126__auto___29402;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29385_29403__$1))
{var c__4299__auto___29404 = cljs.core.chunk_first.call(null,seq__29385_29403__$1);{
var G__29405 = cljs.core.chunk_rest.call(null,seq__29385_29403__$1);
var G__29406 = c__4299__auto___29404;
var G__29407 = cljs.core.count.call(null,c__4299__auto___29404);
var G__29408 = (0);
seq__29385_29393 = G__29405;
chunk__29386_29394 = G__29406;
count__29387_29395 = G__29407;
i__29388_29396 = G__29408;
continue;
}
} else
{var n_29409 = cljs.core.first.call(null,seq__29385_29403__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29409;
goog.events.fireListeners(n_29409,evt.type,true,evt);
}
{
var G__29410 = cljs.core.next.call(null,seq__29385_29403__$1);
var G__29411 = null;
var G__29412 = (0);
var G__29413 = (0);
seq__29385_29393 = G__29410;
chunk__29386_29394 = G__29411;
count__29387_29395 = G__29412;
i__29388_29396 = G__29413;
continue;
}
}
} else
{}
}
break;
}
var seq__29389_29414 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__29390_29415 = null;var count__29391_29416 = (0);var i__29392_29417 = (0);while(true){
if((i__29392_29417 < count__29391_29416))
{var n_29418 = cljs.core._nth.call(null,chunk__29390_29415,i__29392_29417);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29418;
goog.events.fireListeners(n_29418,evt.type,false,evt);
}
{
var G__29419 = seq__29389_29414;
var G__29420 = chunk__29390_29415;
var G__29421 = count__29391_29416;
var G__29422 = (i__29392_29417 + (1));
seq__29389_29414 = G__29419;
chunk__29390_29415 = G__29420;
count__29391_29416 = G__29421;
i__29392_29417 = G__29422;
continue;
}
} else
{var temp__4126__auto___29423 = cljs.core.seq.call(null,seq__29389_29414);if(temp__4126__auto___29423)
{var seq__29389_29424__$1 = temp__4126__auto___29423;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29389_29424__$1))
{var c__4299__auto___29425 = cljs.core.chunk_first.call(null,seq__29389_29424__$1);{
var G__29426 = cljs.core.chunk_rest.call(null,seq__29389_29424__$1);
var G__29427 = c__4299__auto___29425;
var G__29428 = cljs.core.count.call(null,c__4299__auto___29425);
var G__29429 = (0);
seq__29389_29414 = G__29426;
chunk__29390_29415 = G__29427;
count__29391_29416 = G__29428;
i__29392_29417 = G__29429;
continue;
}
} else
{var n_29430 = cljs.core.first.call(null,seq__29389_29424__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_29430;
goog.events.fireListeners(n_29430,evt.type,false,evt);
}
{
var G__29431 = cljs.core.next.call(null,seq__29389_29424__$1);
var G__29432 = null;
var G__29433 = (0);
var G__29434 = (0);
seq__29389_29414 = G__29431;
chunk__29390_29415 = G__29432;
count__29391_29416 = G__29433;
i__29392_29417 = G__29434;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__29441_29447 = cljs.core.seq.call(null,evt_map);var chunk__29442_29448 = null;var count__29443_29449 = (0);var i__29444_29450 = (0);while(true){
if((i__29444_29450 < count__29443_29449))
{var vec__29445_29451 = cljs.core._nth.call(null,chunk__29442_29448,i__29444_29450);var k_29452 = cljs.core.nth.call(null,vec__29445_29451,(0),null);var v_29453 = cljs.core.nth.call(null,vec__29445_29451,(1),null);(evt[k_29452] = v_29453);
{
var G__29454 = seq__29441_29447;
var G__29455 = chunk__29442_29448;
var G__29456 = count__29443_29449;
var G__29457 = (i__29444_29450 + (1));
seq__29441_29447 = G__29454;
chunk__29442_29448 = G__29455;
count__29443_29449 = G__29456;
i__29444_29450 = G__29457;
continue;
}
} else
{var temp__4126__auto___29458 = cljs.core.seq.call(null,seq__29441_29447);if(temp__4126__auto___29458)
{var seq__29441_29459__$1 = temp__4126__auto___29458;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29441_29459__$1))
{var c__4299__auto___29460 = cljs.core.chunk_first.call(null,seq__29441_29459__$1);{
var G__29461 = cljs.core.chunk_rest.call(null,seq__29441_29459__$1);
var G__29462 = c__4299__auto___29460;
var G__29463 = cljs.core.count.call(null,c__4299__auto___29460);
var G__29464 = (0);
seq__29441_29447 = G__29461;
chunk__29442_29448 = G__29462;
count__29443_29449 = G__29463;
i__29444_29450 = G__29464;
continue;
}
} else
{var vec__29446_29465 = cljs.core.first.call(null,seq__29441_29459__$1);var k_29466 = cljs.core.nth.call(null,vec__29446_29465,(0),null);var v_29467 = cljs.core.nth.call(null,vec__29446_29465,(1),null);(evt[k_29466] = v_29467);
{
var G__29468 = cljs.core.next.call(null,seq__29441_29459__$1);
var G__29469 = null;
var G__29470 = (0);
var G__29471 = (0);
seq__29441_29447 = G__29468;
chunk__29442_29448 = G__29469;
count__29443_29449 = G__29470;
i__29444_29450 = G__29471;
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
return (function (p1__29472_SHARP_){return goog.events.getListeners(p1__29472_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
