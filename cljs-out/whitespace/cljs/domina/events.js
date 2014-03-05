// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj50342 = {};return obj50342;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t50346 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50346 = (function (evt,f,create_listener_function,meta50347){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50347 = meta50347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50346.cljs$lang$type = true;
domina.events.t50346.cljs$lang$ctorStr = "domina.events/t50346";
domina.events.t50346.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t50346");
});
domina.events.t50346.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t50346.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t50346.prototype.domina$events$Event$ = true;
domina.events.t50346.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50346.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50346.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50346.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50346.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50346.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50348){var self__ = this;
var _50348__$1 = this;return self__.meta50347;
});
domina.events.t50346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50348,meta50347__$1){var self__ = this;
var _50348__$1 = this;return (new domina.events.t50346(self__.evt,self__.f,self__.create_listener_function,meta50347__$1));
});
domina.events.__GT_t50346 = (function __GT_t50346(evt__$1,f__$1,create_listener_function__$1,meta50347){return (new domina.events.t50346(evt__$1,f__$1,create_listener_function__$1,meta50347));
});
}
return (new domina.events.t50346(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__50353(s__50354){return (new cljs.core.LazySeq(null,(function (){var s__50354__$1 = s__50354;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__50354__$1);if(temp__4092__auto__)
{var s__50354__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50354__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__50354__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__50356 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__50355 = 0;while(true){
if((i__50355 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__50355);cljs.core.chunk_append.call(null,b__50356,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__50357 = (i__50355 + 1);
i__50355 = G__50357;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50356),iter__50353.call(null,cljs.core.chunk_rest.call(null,s__50354__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50356),null);
}
} else
{var node = cljs.core.first.call(null,s__50354__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__50353.call(null,cljs.core.rest.call(null,s__50354__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__50366 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50367 = null;var count__50368 = 0;var i__50369 = 0;while(true){
if((i__50369 < count__50368))
{var node = cljs.core._nth.call(null,chunk__50367,i__50369);goog.events.removeAll(node);
{
var G__50374 = seq__50366;
var G__50375 = chunk__50367;
var G__50376 = count__50368;
var G__50377 = (i__50369 + 1);
seq__50366 = G__50374;
chunk__50367 = G__50375;
count__50368 = G__50376;
i__50369 = G__50377;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50366);if(temp__4092__auto__)
{var seq__50366__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50366__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50366__$1);{
var G__50378 = cljs.core.chunk_rest.call(null,seq__50366__$1);
var G__50379 = c__4189__auto__;
var G__50380 = cljs.core.count.call(null,c__4189__auto__);
var G__50381 = 0;
seq__50366 = G__50378;
chunk__50367 = G__50379;
count__50368 = G__50380;
i__50369 = G__50381;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50366__$1);goog.events.removeAll(node);
{
var G__50382 = cljs.core.next.call(null,seq__50366__$1);
var G__50383 = null;
var G__50384 = 0;
var G__50385 = 0;
seq__50366 = G__50382;
chunk__50367 = G__50383;
count__50368 = G__50384;
i__50369 = G__50385;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__50370 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50371 = null;var count__50372 = 0;var i__50373 = 0;while(true){
if((i__50373 < count__50372))
{var node = cljs.core._nth.call(null,chunk__50371,i__50373);goog.events.removeAll(node,type__$1);
{
var G__50386 = seq__50370;
var G__50387 = chunk__50371;
var G__50388 = count__50372;
var G__50389 = (i__50373 + 1);
seq__50370 = G__50386;
chunk__50371 = G__50387;
count__50372 = G__50388;
i__50373 = G__50389;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50370);if(temp__4092__auto__)
{var seq__50370__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50370__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50370__$1);{
var G__50390 = cljs.core.chunk_rest.call(null,seq__50370__$1);
var G__50391 = c__4189__auto__;
var G__50392 = cljs.core.count.call(null,c__4189__auto__);
var G__50393 = 0;
seq__50370 = G__50390;
chunk__50371 = G__50391;
count__50372 = G__50392;
i__50373 = G__50393;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50370__$1);goog.events.removeAll(node,type__$1);
{
var G__50394 = cljs.core.next.call(null,seq__50370__$1);
var G__50395 = null;
var G__50396 = 0;
var G__50397 = 0;
seq__50370 = G__50394;
chunk__50371 = G__50395;
count__50372 = G__50396;
i__50373 = G__50397;
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
var G__50398 = parent;
var G__50399 = cljs.core.cons.call(null,parent,so_far);
n = G__50398;
so_far = G__50399;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__50408_50416 = cljs.core.seq.call(null,ancestors);var chunk__50409_50417 = null;var count__50410_50418 = 0;var i__50411_50419 = 0;while(true){
if((i__50411_50419 < count__50410_50418))
{var n_50420 = cljs.core._nth.call(null,chunk__50409_50417,i__50411_50419);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50420;
goog.events.fireListeners(n_50420,evt.type,true,evt);
}
{
var G__50421 = seq__50408_50416;
var G__50422 = chunk__50409_50417;
var G__50423 = count__50410_50418;
var G__50424 = (i__50411_50419 + 1);
seq__50408_50416 = G__50421;
chunk__50409_50417 = G__50422;
count__50410_50418 = G__50423;
i__50411_50419 = G__50424;
continue;
}
} else
{var temp__4092__auto___50425 = cljs.core.seq.call(null,seq__50408_50416);if(temp__4092__auto___50425)
{var seq__50408_50426__$1 = temp__4092__auto___50425;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50408_50426__$1))
{var c__4189__auto___50427 = cljs.core.chunk_first.call(null,seq__50408_50426__$1);{
var G__50428 = cljs.core.chunk_rest.call(null,seq__50408_50426__$1);
var G__50429 = c__4189__auto___50427;
var G__50430 = cljs.core.count.call(null,c__4189__auto___50427);
var G__50431 = 0;
seq__50408_50416 = G__50428;
chunk__50409_50417 = G__50429;
count__50410_50418 = G__50430;
i__50411_50419 = G__50431;
continue;
}
} else
{var n_50432 = cljs.core.first.call(null,seq__50408_50426__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50432;
goog.events.fireListeners(n_50432,evt.type,true,evt);
}
{
var G__50433 = cljs.core.next.call(null,seq__50408_50426__$1);
var G__50434 = null;
var G__50435 = 0;
var G__50436 = 0;
seq__50408_50416 = G__50433;
chunk__50409_50417 = G__50434;
count__50410_50418 = G__50435;
i__50411_50419 = G__50436;
continue;
}
}
} else
{}
}
break;
}
var seq__50412_50437 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__50413_50438 = null;var count__50414_50439 = 0;var i__50415_50440 = 0;while(true){
if((i__50415_50440 < count__50414_50439))
{var n_50441 = cljs.core._nth.call(null,chunk__50413_50438,i__50415_50440);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50441;
goog.events.fireListeners(n_50441,evt.type,false,evt);
}
{
var G__50442 = seq__50412_50437;
var G__50443 = chunk__50413_50438;
var G__50444 = count__50414_50439;
var G__50445 = (i__50415_50440 + 1);
seq__50412_50437 = G__50442;
chunk__50413_50438 = G__50443;
count__50414_50439 = G__50444;
i__50415_50440 = G__50445;
continue;
}
} else
{var temp__4092__auto___50446 = cljs.core.seq.call(null,seq__50412_50437);if(temp__4092__auto___50446)
{var seq__50412_50447__$1 = temp__4092__auto___50446;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50412_50447__$1))
{var c__4189__auto___50448 = cljs.core.chunk_first.call(null,seq__50412_50447__$1);{
var G__50449 = cljs.core.chunk_rest.call(null,seq__50412_50447__$1);
var G__50450 = c__4189__auto___50448;
var G__50451 = cljs.core.count.call(null,c__4189__auto___50448);
var G__50452 = 0;
seq__50412_50437 = G__50449;
chunk__50413_50438 = G__50450;
count__50414_50439 = G__50451;
i__50415_50440 = G__50452;
continue;
}
} else
{var n_50453 = cljs.core.first.call(null,seq__50412_50447__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50453;
goog.events.fireListeners(n_50453,evt.type,false,evt);
}
{
var G__50454 = cljs.core.next.call(null,seq__50412_50447__$1);
var G__50455 = null;
var G__50456 = 0;
var G__50457 = 0;
seq__50412_50437 = G__50454;
chunk__50413_50438 = G__50455;
count__50414_50439 = G__50456;
i__50415_50440 = G__50457;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__50464_50470 = cljs.core.seq.call(null,evt_map);var chunk__50465_50471 = null;var count__50466_50472 = 0;var i__50467_50473 = 0;while(true){
if((i__50467_50473 < count__50466_50472))
{var vec__50468_50474 = cljs.core._nth.call(null,chunk__50465_50471,i__50467_50473);var k_50475 = cljs.core.nth.call(null,vec__50468_50474,0,null);var v_50476 = cljs.core.nth.call(null,vec__50468_50474,1,null);(evt[k_50475] = v_50476);
{
var G__50477 = seq__50464_50470;
var G__50478 = chunk__50465_50471;
var G__50479 = count__50466_50472;
var G__50480 = (i__50467_50473 + 1);
seq__50464_50470 = G__50477;
chunk__50465_50471 = G__50478;
count__50466_50472 = G__50479;
i__50467_50473 = G__50480;
continue;
}
} else
{var temp__4092__auto___50481 = cljs.core.seq.call(null,seq__50464_50470);if(temp__4092__auto___50481)
{var seq__50464_50482__$1 = temp__4092__auto___50481;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50464_50482__$1))
{var c__4189__auto___50483 = cljs.core.chunk_first.call(null,seq__50464_50482__$1);{
var G__50484 = cljs.core.chunk_rest.call(null,seq__50464_50482__$1);
var G__50485 = c__4189__auto___50483;
var G__50486 = cljs.core.count.call(null,c__4189__auto___50483);
var G__50487 = 0;
seq__50464_50470 = G__50484;
chunk__50465_50471 = G__50485;
count__50466_50472 = G__50486;
i__50467_50473 = G__50487;
continue;
}
} else
{var vec__50469_50488 = cljs.core.first.call(null,seq__50464_50482__$1);var k_50489 = cljs.core.nth.call(null,vec__50469_50488,0,null);var v_50490 = cljs.core.nth.call(null,vec__50469_50488,1,null);(evt[k_50489] = v_50490);
{
var G__50491 = cljs.core.next.call(null,seq__50464_50482__$1);
var G__50492 = null;
var G__50493 = 0;
var G__50494 = 0;
seq__50464_50470 = G__50491;
chunk__50465_50471 = G__50492;
count__50466_50472 = G__50493;
i__50467_50473 = G__50494;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__50495_SHARP_){return goog.events.getListeners(p1__50495_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
