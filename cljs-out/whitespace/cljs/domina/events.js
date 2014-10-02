// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19328 = {};return obj19328;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19332 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19332 = (function (evt,f,create_listener_function,meta19333){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19333 = meta19333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19332.cljs$lang$type = true;
domina.events.t19332.cljs$lang$ctorStr = "domina.events/t19332";
domina.events.t19332.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t19332");
});
domina.events.t19332.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19332.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t19332.prototype.domina$events$Event$ = true;
domina.events.t19332.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19332.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19332.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19332.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19332.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19332.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19334){var self__ = this;
var _19334__$1 = this;return self__.meta19333;
});
domina.events.t19332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19334,meta19333__$1){var self__ = this;
var _19334__$1 = this;return (new domina.events.t19332(self__.evt,self__.f,self__.create_listener_function,meta19333__$1));
});
domina.events.__GT_t19332 = (function __GT_t19332(evt__$1,f__$1,create_listener_function__$1,meta19333){return (new domina.events.t19332(evt__$1,f__$1,create_listener_function__$1,meta19333));
});
}
return (new domina.events.t19332(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__19339(s__19340){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19340__$1 = s__19340;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19340__$1);if(temp__4126__auto__)
{var s__19340__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19340__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19340__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19342 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19341 = (0);while(true){
if((i__19341 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__19341);cljs.core.chunk_append.call(null,b__19342,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19343 = (i__19341 + (1));
i__19341 = G__19343;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19342),iter__19339.call(null,cljs.core.chunk_rest.call(null,s__19340__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19342),null);
}
} else
{var node = cljs.core.first.call(null,s__19340__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19339.call(null,cljs.core.rest.call(null,s__19340__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19352 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19353 = null;var count__19354 = (0);var i__19355 = (0);while(true){
if((i__19355 < count__19354))
{var node = cljs.core._nth.call(null,chunk__19353,i__19355);goog.events.removeAll(node);
{
var G__19360 = seq__19352;
var G__19361 = chunk__19353;
var G__19362 = count__19354;
var G__19363 = (i__19355 + (1));
seq__19352 = G__19360;
chunk__19353 = G__19361;
count__19354 = G__19362;
i__19355 = G__19363;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19352);if(temp__4126__auto__)
{var seq__19352__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19352__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19352__$1);{
var G__19364 = cljs.core.chunk_rest.call(null,seq__19352__$1);
var G__19365 = c__4314__auto__;
var G__19366 = cljs.core.count.call(null,c__4314__auto__);
var G__19367 = (0);
seq__19352 = G__19364;
chunk__19353 = G__19365;
count__19354 = G__19366;
i__19355 = G__19367;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19352__$1);goog.events.removeAll(node);
{
var G__19368 = cljs.core.next.call(null,seq__19352__$1);
var G__19369 = null;
var G__19370 = (0);
var G__19371 = (0);
seq__19352 = G__19368;
chunk__19353 = G__19369;
count__19354 = G__19370;
i__19355 = G__19371;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19356 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19357 = null;var count__19358 = (0);var i__19359 = (0);while(true){
if((i__19359 < count__19358))
{var node = cljs.core._nth.call(null,chunk__19357,i__19359);goog.events.removeAll(node,type__$1);
{
var G__19372 = seq__19356;
var G__19373 = chunk__19357;
var G__19374 = count__19358;
var G__19375 = (i__19359 + (1));
seq__19356 = G__19372;
chunk__19357 = G__19373;
count__19358 = G__19374;
i__19359 = G__19375;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19356);if(temp__4126__auto__)
{var seq__19356__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19356__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19356__$1);{
var G__19376 = cljs.core.chunk_rest.call(null,seq__19356__$1);
var G__19377 = c__4314__auto__;
var G__19378 = cljs.core.count.call(null,c__4314__auto__);
var G__19379 = (0);
seq__19356 = G__19376;
chunk__19357 = G__19377;
count__19358 = G__19378;
i__19359 = G__19379;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19356__$1);goog.events.removeAll(node,type__$1);
{
var G__19380 = cljs.core.next.call(null,seq__19356__$1);
var G__19381 = null;
var G__19382 = (0);
var G__19383 = (0);
seq__19356 = G__19380;
chunk__19357 = G__19381;
count__19358 = G__19382;
i__19359 = G__19383;
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
var G__19384 = parent;
var G__19385 = cljs.core.cons.call(null,parent,so_far);
n = G__19384;
so_far = G__19385;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19394_19402 = cljs.core.seq.call(null,ancestors);var chunk__19395_19403 = null;var count__19396_19404 = (0);var i__19397_19405 = (0);while(true){
if((i__19397_19405 < count__19396_19404))
{var n_19406 = cljs.core._nth.call(null,chunk__19395_19403,i__19397_19405);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19406;
goog.events.fireListeners(n_19406,evt.type,true,evt);
}
{
var G__19407 = seq__19394_19402;
var G__19408 = chunk__19395_19403;
var G__19409 = count__19396_19404;
var G__19410 = (i__19397_19405 + (1));
seq__19394_19402 = G__19407;
chunk__19395_19403 = G__19408;
count__19396_19404 = G__19409;
i__19397_19405 = G__19410;
continue;
}
} else
{var temp__4126__auto___19411 = cljs.core.seq.call(null,seq__19394_19402);if(temp__4126__auto___19411)
{var seq__19394_19412__$1 = temp__4126__auto___19411;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19394_19412__$1))
{var c__4314__auto___19413 = cljs.core.chunk_first.call(null,seq__19394_19412__$1);{
var G__19414 = cljs.core.chunk_rest.call(null,seq__19394_19412__$1);
var G__19415 = c__4314__auto___19413;
var G__19416 = cljs.core.count.call(null,c__4314__auto___19413);
var G__19417 = (0);
seq__19394_19402 = G__19414;
chunk__19395_19403 = G__19415;
count__19396_19404 = G__19416;
i__19397_19405 = G__19417;
continue;
}
} else
{var n_19418 = cljs.core.first.call(null,seq__19394_19412__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19418;
goog.events.fireListeners(n_19418,evt.type,true,evt);
}
{
var G__19419 = cljs.core.next.call(null,seq__19394_19412__$1);
var G__19420 = null;
var G__19421 = (0);
var G__19422 = (0);
seq__19394_19402 = G__19419;
chunk__19395_19403 = G__19420;
count__19396_19404 = G__19421;
i__19397_19405 = G__19422;
continue;
}
}
} else
{}
}
break;
}
var seq__19398_19423 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19399_19424 = null;var count__19400_19425 = (0);var i__19401_19426 = (0);while(true){
if((i__19401_19426 < count__19400_19425))
{var n_19427 = cljs.core._nth.call(null,chunk__19399_19424,i__19401_19426);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19427;
goog.events.fireListeners(n_19427,evt.type,false,evt);
}
{
var G__19428 = seq__19398_19423;
var G__19429 = chunk__19399_19424;
var G__19430 = count__19400_19425;
var G__19431 = (i__19401_19426 + (1));
seq__19398_19423 = G__19428;
chunk__19399_19424 = G__19429;
count__19400_19425 = G__19430;
i__19401_19426 = G__19431;
continue;
}
} else
{var temp__4126__auto___19432 = cljs.core.seq.call(null,seq__19398_19423);if(temp__4126__auto___19432)
{var seq__19398_19433__$1 = temp__4126__auto___19432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19398_19433__$1))
{var c__4314__auto___19434 = cljs.core.chunk_first.call(null,seq__19398_19433__$1);{
var G__19435 = cljs.core.chunk_rest.call(null,seq__19398_19433__$1);
var G__19436 = c__4314__auto___19434;
var G__19437 = cljs.core.count.call(null,c__4314__auto___19434);
var G__19438 = (0);
seq__19398_19423 = G__19435;
chunk__19399_19424 = G__19436;
count__19400_19425 = G__19437;
i__19401_19426 = G__19438;
continue;
}
} else
{var n_19439 = cljs.core.first.call(null,seq__19398_19433__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19439;
goog.events.fireListeners(n_19439,evt.type,false,evt);
}
{
var G__19440 = cljs.core.next.call(null,seq__19398_19433__$1);
var G__19441 = null;
var G__19442 = (0);
var G__19443 = (0);
seq__19398_19423 = G__19440;
chunk__19399_19424 = G__19441;
count__19400_19425 = G__19442;
i__19401_19426 = G__19443;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19450_19456 = cljs.core.seq.call(null,evt_map);var chunk__19451_19457 = null;var count__19452_19458 = (0);var i__19453_19459 = (0);while(true){
if((i__19453_19459 < count__19452_19458))
{var vec__19454_19460 = cljs.core._nth.call(null,chunk__19451_19457,i__19453_19459);var k_19461 = cljs.core.nth.call(null,vec__19454_19460,(0),null);var v_19462 = cljs.core.nth.call(null,vec__19454_19460,(1),null);(evt[k_19461] = v_19462);
{
var G__19463 = seq__19450_19456;
var G__19464 = chunk__19451_19457;
var G__19465 = count__19452_19458;
var G__19466 = (i__19453_19459 + (1));
seq__19450_19456 = G__19463;
chunk__19451_19457 = G__19464;
count__19452_19458 = G__19465;
i__19453_19459 = G__19466;
continue;
}
} else
{var temp__4126__auto___19467 = cljs.core.seq.call(null,seq__19450_19456);if(temp__4126__auto___19467)
{var seq__19450_19468__$1 = temp__4126__auto___19467;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19450_19468__$1))
{var c__4314__auto___19469 = cljs.core.chunk_first.call(null,seq__19450_19468__$1);{
var G__19470 = cljs.core.chunk_rest.call(null,seq__19450_19468__$1);
var G__19471 = c__4314__auto___19469;
var G__19472 = cljs.core.count.call(null,c__4314__auto___19469);
var G__19473 = (0);
seq__19450_19456 = G__19470;
chunk__19451_19457 = G__19471;
count__19452_19458 = G__19472;
i__19453_19459 = G__19473;
continue;
}
} else
{var vec__19455_19474 = cljs.core.first.call(null,seq__19450_19468__$1);var k_19475 = cljs.core.nth.call(null,vec__19455_19474,(0),null);var v_19476 = cljs.core.nth.call(null,vec__19455_19474,(1),null);(evt[k_19475] = v_19476);
{
var G__19477 = cljs.core.next.call(null,seq__19450_19468__$1);
var G__19478 = null;
var G__19479 = (0);
var G__19480 = (0);
seq__19450_19456 = G__19477;
chunk__19451_19457 = G__19478;
count__19452_19458 = G__19479;
i__19453_19459 = G__19480;
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
return (function (p1__19481_SHARP_){return goog.events.getListeners(p1__19481_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
