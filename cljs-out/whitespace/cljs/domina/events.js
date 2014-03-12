// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj50326 = {};return obj50326;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.prevent_default[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.prevent_default["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.current_target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.current_target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.event_type[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.event_type["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.raw_event[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.raw_event["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t50330 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50330 = (function (evt,f,create_listener_function,meta50331){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50331 = meta50331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50330.cljs$lang$type = true;
domina.events.t50330.cljs$lang$ctorStr = "domina.events/t50330";
domina.events.t50330.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t50330");
});
domina.events.t50330.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t50330.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t50330.prototype.domina$events$Event$ = true;
domina.events.t50330.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50330.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50330.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50330.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50330.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50330.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50332){var self__ = this;
var _50332__$1 = this;return self__.meta50331;
});
domina.events.t50330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50332,meta50331__$1){var self__ = this;
var _50332__$1 = this;return (new domina.events.t50330(self__.evt,self__.f,self__.create_listener_function,meta50331__$1));
});
domina.events.__GT_t50330 = (function __GT_t50330(evt__$1,f__$1,create_listener_function__$1,meta50331){return (new domina.events.t50330(evt__$1,f__$1,create_listener_function__$1,meta50331));
});
}
return (new domina.events.t50330(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__50337(s__50338){return (new cljs.core.LazySeq(null,(function (){var s__50338__$1 = s__50338;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__50338__$1);if(temp__4092__auto__)
{var s__50338__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50338__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__50338__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__50340 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__50339 = 0;while(true){
if((i__50339 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__50339);cljs.core.chunk_append.call(null,b__50340,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__50341 = (i__50339 + 1);
i__50339 = G__50341;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50340),iter__50337.call(null,cljs.core.chunk_rest.call(null,s__50338__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50340),null);
}
} else
{var node = cljs.core.first.call(null,s__50338__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__50337.call(null,cljs.core.rest.call(null,s__50338__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__50350 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50351 = null;var count__50352 = 0;var i__50353 = 0;while(true){
if((i__50353 < count__50352))
{var node = cljs.core._nth.call(null,chunk__50351,i__50353);goog.events.removeAll(node);
{
var G__50358 = seq__50350;
var G__50359 = chunk__50351;
var G__50360 = count__50352;
var G__50361 = (i__50353 + 1);
seq__50350 = G__50358;
chunk__50351 = G__50359;
count__50352 = G__50360;
i__50353 = G__50361;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50350);if(temp__4092__auto__)
{var seq__50350__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50350__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50350__$1);{
var G__50362 = cljs.core.chunk_rest.call(null,seq__50350__$1);
var G__50363 = c__4189__auto__;
var G__50364 = cljs.core.count.call(null,c__4189__auto__);
var G__50365 = 0;
seq__50350 = G__50362;
chunk__50351 = G__50363;
count__50352 = G__50364;
i__50353 = G__50365;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50350__$1);goog.events.removeAll(node);
{
var G__50366 = cljs.core.next.call(null,seq__50350__$1);
var G__50367 = null;
var G__50368 = 0;
var G__50369 = 0;
seq__50350 = G__50366;
chunk__50351 = G__50367;
count__50352 = G__50368;
i__50353 = G__50369;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__50354 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50355 = null;var count__50356 = 0;var i__50357 = 0;while(true){
if((i__50357 < count__50356))
{var node = cljs.core._nth.call(null,chunk__50355,i__50357);goog.events.removeAll(node,type__$1);
{
var G__50370 = seq__50354;
var G__50371 = chunk__50355;
var G__50372 = count__50356;
var G__50373 = (i__50357 + 1);
seq__50354 = G__50370;
chunk__50355 = G__50371;
count__50356 = G__50372;
i__50357 = G__50373;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50354);if(temp__4092__auto__)
{var seq__50354__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50354__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50354__$1);{
var G__50374 = cljs.core.chunk_rest.call(null,seq__50354__$1);
var G__50375 = c__4189__auto__;
var G__50376 = cljs.core.count.call(null,c__4189__auto__);
var G__50377 = 0;
seq__50354 = G__50374;
chunk__50355 = G__50375;
count__50356 = G__50376;
i__50357 = G__50377;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50354__$1);goog.events.removeAll(node,type__$1);
{
var G__50378 = cljs.core.next.call(null,seq__50354__$1);
var G__50379 = null;
var G__50380 = 0;
var G__50381 = 0;
seq__50354 = G__50378;
chunk__50355 = G__50379;
count__50356 = G__50380;
i__50357 = G__50381;
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
var G__50382 = parent;
var G__50383 = cljs.core.cons.call(null,parent,so_far);
n = G__50382;
so_far = G__50383;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__50392_50400 = cljs.core.seq.call(null,ancestors);var chunk__50393_50401 = null;var count__50394_50402 = 0;var i__50395_50403 = 0;while(true){
if((i__50395_50403 < count__50394_50402))
{var n_50404 = cljs.core._nth.call(null,chunk__50393_50401,i__50395_50403);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50404;
goog.events.fireListeners(n_50404,evt.type,true,evt);
}
{
var G__50405 = seq__50392_50400;
var G__50406 = chunk__50393_50401;
var G__50407 = count__50394_50402;
var G__50408 = (i__50395_50403 + 1);
seq__50392_50400 = G__50405;
chunk__50393_50401 = G__50406;
count__50394_50402 = G__50407;
i__50395_50403 = G__50408;
continue;
}
} else
{var temp__4092__auto___50409 = cljs.core.seq.call(null,seq__50392_50400);if(temp__4092__auto___50409)
{var seq__50392_50410__$1 = temp__4092__auto___50409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50392_50410__$1))
{var c__4189__auto___50411 = cljs.core.chunk_first.call(null,seq__50392_50410__$1);{
var G__50412 = cljs.core.chunk_rest.call(null,seq__50392_50410__$1);
var G__50413 = c__4189__auto___50411;
var G__50414 = cljs.core.count.call(null,c__4189__auto___50411);
var G__50415 = 0;
seq__50392_50400 = G__50412;
chunk__50393_50401 = G__50413;
count__50394_50402 = G__50414;
i__50395_50403 = G__50415;
continue;
}
} else
{var n_50416 = cljs.core.first.call(null,seq__50392_50410__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50416;
goog.events.fireListeners(n_50416,evt.type,true,evt);
}
{
var G__50417 = cljs.core.next.call(null,seq__50392_50410__$1);
var G__50418 = null;
var G__50419 = 0;
var G__50420 = 0;
seq__50392_50400 = G__50417;
chunk__50393_50401 = G__50418;
count__50394_50402 = G__50419;
i__50395_50403 = G__50420;
continue;
}
}
} else
{}
}
break;
}
var seq__50396_50421 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__50397_50422 = null;var count__50398_50423 = 0;var i__50399_50424 = 0;while(true){
if((i__50399_50424 < count__50398_50423))
{var n_50425 = cljs.core._nth.call(null,chunk__50397_50422,i__50399_50424);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50425;
goog.events.fireListeners(n_50425,evt.type,false,evt);
}
{
var G__50426 = seq__50396_50421;
var G__50427 = chunk__50397_50422;
var G__50428 = count__50398_50423;
var G__50429 = (i__50399_50424 + 1);
seq__50396_50421 = G__50426;
chunk__50397_50422 = G__50427;
count__50398_50423 = G__50428;
i__50399_50424 = G__50429;
continue;
}
} else
{var temp__4092__auto___50430 = cljs.core.seq.call(null,seq__50396_50421);if(temp__4092__auto___50430)
{var seq__50396_50431__$1 = temp__4092__auto___50430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50396_50431__$1))
{var c__4189__auto___50432 = cljs.core.chunk_first.call(null,seq__50396_50431__$1);{
var G__50433 = cljs.core.chunk_rest.call(null,seq__50396_50431__$1);
var G__50434 = c__4189__auto___50432;
var G__50435 = cljs.core.count.call(null,c__4189__auto___50432);
var G__50436 = 0;
seq__50396_50421 = G__50433;
chunk__50397_50422 = G__50434;
count__50398_50423 = G__50435;
i__50399_50424 = G__50436;
continue;
}
} else
{var n_50437 = cljs.core.first.call(null,seq__50396_50431__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50437;
goog.events.fireListeners(n_50437,evt.type,false,evt);
}
{
var G__50438 = cljs.core.next.call(null,seq__50396_50431__$1);
var G__50439 = null;
var G__50440 = 0;
var G__50441 = 0;
seq__50396_50421 = G__50438;
chunk__50397_50422 = G__50439;
count__50398_50423 = G__50440;
i__50399_50424 = G__50441;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3429__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3429__auto__))
{return o.dispatchEvent;
} else
{return and__3429__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__50448_50454 = cljs.core.seq.call(null,evt_map);var chunk__50449_50455 = null;var count__50450_50456 = 0;var i__50451_50457 = 0;while(true){
if((i__50451_50457 < count__50450_50456))
{var vec__50452_50458 = cljs.core._nth.call(null,chunk__50449_50455,i__50451_50457);var k_50459 = cljs.core.nth.call(null,vec__50452_50458,0,null);var v_50460 = cljs.core.nth.call(null,vec__50452_50458,1,null);(evt[k_50459] = v_50460);
{
var G__50461 = seq__50448_50454;
var G__50462 = chunk__50449_50455;
var G__50463 = count__50450_50456;
var G__50464 = (i__50451_50457 + 1);
seq__50448_50454 = G__50461;
chunk__50449_50455 = G__50462;
count__50450_50456 = G__50463;
i__50451_50457 = G__50464;
continue;
}
} else
{var temp__4092__auto___50465 = cljs.core.seq.call(null,seq__50448_50454);if(temp__4092__auto___50465)
{var seq__50448_50466__$1 = temp__4092__auto___50465;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50448_50466__$1))
{var c__4189__auto___50467 = cljs.core.chunk_first.call(null,seq__50448_50466__$1);{
var G__50468 = cljs.core.chunk_rest.call(null,seq__50448_50466__$1);
var G__50469 = c__4189__auto___50467;
var G__50470 = cljs.core.count.call(null,c__4189__auto___50467);
var G__50471 = 0;
seq__50448_50454 = G__50468;
chunk__50449_50455 = G__50469;
count__50450_50456 = G__50470;
i__50451_50457 = G__50471;
continue;
}
} else
{var vec__50453_50472 = cljs.core.first.call(null,seq__50448_50466__$1);var k_50473 = cljs.core.nth.call(null,vec__50453_50472,0,null);var v_50474 = cljs.core.nth.call(null,vec__50453_50472,1,null);(evt[k_50473] = v_50474);
{
var G__50475 = cljs.core.next.call(null,seq__50448_50466__$1);
var G__50476 = null;
var G__50477 = 0;
var G__50478 = 0;
seq__50448_50454 = G__50475;
chunk__50449_50455 = G__50476;
count__50450_50456 = G__50477;
i__50451_50457 = G__50478;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__50479_SHARP_){return goog.events.getListeners(p1__50479_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
