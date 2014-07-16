// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj30341 = {};return obj30341;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t30345 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t30345 = (function (evt,f,create_listener_function,meta30346){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta30346 = meta30346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t30345.cljs$lang$type = true;
domina.events.t30345.cljs$lang$ctorStr = "domina.events/t30345";
domina.events.t30345.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t30345");
});
domina.events.t30345.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t30345.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t30345.prototype.domina$events$Event$ = true;
domina.events.t30345.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t30345.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t30345.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t30345.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t30345.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t30345.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t30345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30347){var self__ = this;
var _30347__$1 = this;return self__.meta30346;
});
domina.events.t30345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30347,meta30346__$1){var self__ = this;
var _30347__$1 = this;return (new domina.events.t30345(self__.evt,self__.f,self__.create_listener_function,meta30346__$1));
});
domina.events.__GT_t30345 = (function __GT_t30345(evt__$1,f__$1,create_listener_function__$1,meta30346){return (new domina.events.t30345(evt__$1,f__$1,create_listener_function__$1,meta30346));
});
}
return (new domina.events.t30345(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__30352(s__30353){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__30353__$1 = s__30353;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__30353__$1);if(temp__4126__auto__)
{var s__30353__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__30353__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__30353__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__30355 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__30354 = (0);while(true){
if((i__30354 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__30354);cljs.core.chunk_append.call(null,b__30355,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__30356 = (i__30354 + (1));
i__30354 = G__30356;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30355),iter__30352.call(null,cljs.core.chunk_rest.call(null,s__30353__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30355),null);
}
} else
{var node = cljs.core.first.call(null,s__30353__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__30352.call(null,cljs.core.rest.call(null,s__30353__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__30365 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30366 = null;var count__30367 = (0);var i__30368 = (0);while(true){
if((i__30368 < count__30367))
{var node = cljs.core._nth.call(null,chunk__30366,i__30368);goog.events.removeAll(node);
{
var G__30373 = seq__30365;
var G__30374 = chunk__30366;
var G__30375 = count__30367;
var G__30376 = (i__30368 + (1));
seq__30365 = G__30373;
chunk__30366 = G__30374;
count__30367 = G__30375;
i__30368 = G__30376;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30365);if(temp__4126__auto__)
{var seq__30365__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30365__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30365__$1);{
var G__30377 = cljs.core.chunk_rest.call(null,seq__30365__$1);
var G__30378 = c__4299__auto__;
var G__30379 = cljs.core.count.call(null,c__4299__auto__);
var G__30380 = (0);
seq__30365 = G__30377;
chunk__30366 = G__30378;
count__30367 = G__30379;
i__30368 = G__30380;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30365__$1);goog.events.removeAll(node);
{
var G__30381 = cljs.core.next.call(null,seq__30365__$1);
var G__30382 = null;
var G__30383 = (0);
var G__30384 = (0);
seq__30365 = G__30381;
chunk__30366 = G__30382;
count__30367 = G__30383;
i__30368 = G__30384;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__30369 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30370 = null;var count__30371 = (0);var i__30372 = (0);while(true){
if((i__30372 < count__30371))
{var node = cljs.core._nth.call(null,chunk__30370,i__30372);goog.events.removeAll(node,type__$1);
{
var G__30385 = seq__30369;
var G__30386 = chunk__30370;
var G__30387 = count__30371;
var G__30388 = (i__30372 + (1));
seq__30369 = G__30385;
chunk__30370 = G__30386;
count__30371 = G__30387;
i__30372 = G__30388;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30369);if(temp__4126__auto__)
{var seq__30369__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30369__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__30369__$1);{
var G__30389 = cljs.core.chunk_rest.call(null,seq__30369__$1);
var G__30390 = c__4299__auto__;
var G__30391 = cljs.core.count.call(null,c__4299__auto__);
var G__30392 = (0);
seq__30369 = G__30389;
chunk__30370 = G__30390;
count__30371 = G__30391;
i__30372 = G__30392;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__30369__$1);goog.events.removeAll(node,type__$1);
{
var G__30393 = cljs.core.next.call(null,seq__30369__$1);
var G__30394 = null;
var G__30395 = (0);
var G__30396 = (0);
seq__30369 = G__30393;
chunk__30370 = G__30394;
count__30371 = G__30395;
i__30372 = G__30396;
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
var G__30397 = parent;
var G__30398 = cljs.core.cons.call(null,parent,so_far);
n = G__30397;
so_far = G__30398;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__30407_30415 = cljs.core.seq.call(null,ancestors);var chunk__30408_30416 = null;var count__30409_30417 = (0);var i__30410_30418 = (0);while(true){
if((i__30410_30418 < count__30409_30417))
{var n_30419 = cljs.core._nth.call(null,chunk__30408_30416,i__30410_30418);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30419;
goog.events.fireListeners(n_30419,evt.type,true,evt);
}
{
var G__30420 = seq__30407_30415;
var G__30421 = chunk__30408_30416;
var G__30422 = count__30409_30417;
var G__30423 = (i__30410_30418 + (1));
seq__30407_30415 = G__30420;
chunk__30408_30416 = G__30421;
count__30409_30417 = G__30422;
i__30410_30418 = G__30423;
continue;
}
} else
{var temp__4126__auto___30424 = cljs.core.seq.call(null,seq__30407_30415);if(temp__4126__auto___30424)
{var seq__30407_30425__$1 = temp__4126__auto___30424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30407_30425__$1))
{var c__4299__auto___30426 = cljs.core.chunk_first.call(null,seq__30407_30425__$1);{
var G__30427 = cljs.core.chunk_rest.call(null,seq__30407_30425__$1);
var G__30428 = c__4299__auto___30426;
var G__30429 = cljs.core.count.call(null,c__4299__auto___30426);
var G__30430 = (0);
seq__30407_30415 = G__30427;
chunk__30408_30416 = G__30428;
count__30409_30417 = G__30429;
i__30410_30418 = G__30430;
continue;
}
} else
{var n_30431 = cljs.core.first.call(null,seq__30407_30425__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30431;
goog.events.fireListeners(n_30431,evt.type,true,evt);
}
{
var G__30432 = cljs.core.next.call(null,seq__30407_30425__$1);
var G__30433 = null;
var G__30434 = (0);
var G__30435 = (0);
seq__30407_30415 = G__30432;
chunk__30408_30416 = G__30433;
count__30409_30417 = G__30434;
i__30410_30418 = G__30435;
continue;
}
}
} else
{}
}
break;
}
var seq__30411_30436 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__30412_30437 = null;var count__30413_30438 = (0);var i__30414_30439 = (0);while(true){
if((i__30414_30439 < count__30413_30438))
{var n_30440 = cljs.core._nth.call(null,chunk__30412_30437,i__30414_30439);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30440;
goog.events.fireListeners(n_30440,evt.type,false,evt);
}
{
var G__30441 = seq__30411_30436;
var G__30442 = chunk__30412_30437;
var G__30443 = count__30413_30438;
var G__30444 = (i__30414_30439 + (1));
seq__30411_30436 = G__30441;
chunk__30412_30437 = G__30442;
count__30413_30438 = G__30443;
i__30414_30439 = G__30444;
continue;
}
} else
{var temp__4126__auto___30445 = cljs.core.seq.call(null,seq__30411_30436);if(temp__4126__auto___30445)
{var seq__30411_30446__$1 = temp__4126__auto___30445;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30411_30446__$1))
{var c__4299__auto___30447 = cljs.core.chunk_first.call(null,seq__30411_30446__$1);{
var G__30448 = cljs.core.chunk_rest.call(null,seq__30411_30446__$1);
var G__30449 = c__4299__auto___30447;
var G__30450 = cljs.core.count.call(null,c__4299__auto___30447);
var G__30451 = (0);
seq__30411_30436 = G__30448;
chunk__30412_30437 = G__30449;
count__30413_30438 = G__30450;
i__30414_30439 = G__30451;
continue;
}
} else
{var n_30452 = cljs.core.first.call(null,seq__30411_30446__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_30452;
goog.events.fireListeners(n_30452,evt.type,false,evt);
}
{
var G__30453 = cljs.core.next.call(null,seq__30411_30446__$1);
var G__30454 = null;
var G__30455 = (0);
var G__30456 = (0);
seq__30411_30436 = G__30453;
chunk__30412_30437 = G__30454;
count__30413_30438 = G__30455;
i__30414_30439 = G__30456;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__30463_30469 = cljs.core.seq.call(null,evt_map);var chunk__30464_30470 = null;var count__30465_30471 = (0);var i__30466_30472 = (0);while(true){
if((i__30466_30472 < count__30465_30471))
{var vec__30467_30473 = cljs.core._nth.call(null,chunk__30464_30470,i__30466_30472);var k_30474 = cljs.core.nth.call(null,vec__30467_30473,(0),null);var v_30475 = cljs.core.nth.call(null,vec__30467_30473,(1),null);(evt[k_30474] = v_30475);
{
var G__30476 = seq__30463_30469;
var G__30477 = chunk__30464_30470;
var G__30478 = count__30465_30471;
var G__30479 = (i__30466_30472 + (1));
seq__30463_30469 = G__30476;
chunk__30464_30470 = G__30477;
count__30465_30471 = G__30478;
i__30466_30472 = G__30479;
continue;
}
} else
{var temp__4126__auto___30480 = cljs.core.seq.call(null,seq__30463_30469);if(temp__4126__auto___30480)
{var seq__30463_30481__$1 = temp__4126__auto___30480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30463_30481__$1))
{var c__4299__auto___30482 = cljs.core.chunk_first.call(null,seq__30463_30481__$1);{
var G__30483 = cljs.core.chunk_rest.call(null,seq__30463_30481__$1);
var G__30484 = c__4299__auto___30482;
var G__30485 = cljs.core.count.call(null,c__4299__auto___30482);
var G__30486 = (0);
seq__30463_30469 = G__30483;
chunk__30464_30470 = G__30484;
count__30465_30471 = G__30485;
i__30466_30472 = G__30486;
continue;
}
} else
{var vec__30468_30487 = cljs.core.first.call(null,seq__30463_30481__$1);var k_30488 = cljs.core.nth.call(null,vec__30468_30487,(0),null);var v_30489 = cljs.core.nth.call(null,vec__30468_30487,(1),null);(evt[k_30488] = v_30489);
{
var G__30490 = cljs.core.next.call(null,seq__30463_30481__$1);
var G__30491 = null;
var G__30492 = (0);
var G__30493 = (0);
seq__30463_30469 = G__30490;
chunk__30464_30470 = G__30491;
count__30465_30471 = G__30492;
i__30466_30472 = G__30493;
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
return (function (p1__30494_SHARP_){return goog.events.getListeners(p1__30494_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
