// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28356 = {};return obj28356;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28360 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28360 = (function (evt,f,create_listener_function,meta28361){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28361 = meta28361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28360.cljs$lang$type = true;
domina.events.t28360.cljs$lang$ctorStr = "domina.events/t28360";
domina.events.t28360.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t28360");
});
domina.events.t28360.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28360.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t28360.prototype.domina$events$Event$ = true;
domina.events.t28360.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28360.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28360.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28360.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28360.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28360.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28362){var self__ = this;
var _28362__$1 = this;return self__.meta28361;
});
domina.events.t28360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28362,meta28361__$1){var self__ = this;
var _28362__$1 = this;return (new domina.events.t28360(self__.evt,self__.f,self__.create_listener_function,meta28361__$1));
});
domina.events.__GT_t28360 = (function __GT_t28360(evt__$1,f__$1,create_listener_function__$1,meta28361){return (new domina.events.t28360(evt__$1,f__$1,create_listener_function__$1,meta28361));
});
}
return (new domina.events.t28360(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__28367(s__28368){return (new cljs.core.LazySeq(null,(function (){var s__28368__$1 = s__28368;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28368__$1);if(temp__4092__auto__)
{var s__28368__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28368__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28368__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28370 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28369 = 0;while(true){
if((i__28369 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__28369);cljs.core.chunk_append.call(null,b__28370,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28371 = (i__28369 + 1);
i__28369 = G__28371;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28370),iter__28367.call(null,cljs.core.chunk_rest.call(null,s__28368__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28370),null);
}
} else
{var node = cljs.core.first.call(null,s__28368__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28367.call(null,cljs.core.rest.call(null,s__28368__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__28380 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28381 = null;var count__28382 = 0;var i__28383 = 0;while(true){
if((i__28383 < count__28382))
{var node = cljs.core._nth.call(null,chunk__28381,i__28383);goog.events.removeAll(node);
{
var G__28388 = seq__28380;
var G__28389 = chunk__28381;
var G__28390 = count__28382;
var G__28391 = (i__28383 + 1);
seq__28380 = G__28388;
chunk__28381 = G__28389;
count__28382 = G__28390;
i__28383 = G__28391;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28380);if(temp__4092__auto__)
{var seq__28380__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28380__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28380__$1);{
var G__28392 = cljs.core.chunk_rest.call(null,seq__28380__$1);
var G__28393 = c__4189__auto__;
var G__28394 = cljs.core.count.call(null,c__4189__auto__);
var G__28395 = 0;
seq__28380 = G__28392;
chunk__28381 = G__28393;
count__28382 = G__28394;
i__28383 = G__28395;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28380__$1);goog.events.removeAll(node);
{
var G__28396 = cljs.core.next.call(null,seq__28380__$1);
var G__28397 = null;
var G__28398 = 0;
var G__28399 = 0;
seq__28380 = G__28396;
chunk__28381 = G__28397;
count__28382 = G__28398;
i__28383 = G__28399;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28384 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28385 = null;var count__28386 = 0;var i__28387 = 0;while(true){
if((i__28387 < count__28386))
{var node = cljs.core._nth.call(null,chunk__28385,i__28387);goog.events.removeAll(node,type__$1);
{
var G__28400 = seq__28384;
var G__28401 = chunk__28385;
var G__28402 = count__28386;
var G__28403 = (i__28387 + 1);
seq__28384 = G__28400;
chunk__28385 = G__28401;
count__28386 = G__28402;
i__28387 = G__28403;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28384);if(temp__4092__auto__)
{var seq__28384__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28384__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28384__$1);{
var G__28404 = cljs.core.chunk_rest.call(null,seq__28384__$1);
var G__28405 = c__4189__auto__;
var G__28406 = cljs.core.count.call(null,c__4189__auto__);
var G__28407 = 0;
seq__28384 = G__28404;
chunk__28385 = G__28405;
count__28386 = G__28406;
i__28387 = G__28407;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28384__$1);goog.events.removeAll(node,type__$1);
{
var G__28408 = cljs.core.next.call(null,seq__28384__$1);
var G__28409 = null;
var G__28410 = 0;
var G__28411 = 0;
seq__28384 = G__28408;
chunk__28385 = G__28409;
count__28386 = G__28410;
i__28387 = G__28411;
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
var G__28412 = parent;
var G__28413 = cljs.core.cons.call(null,parent,so_far);
n = G__28412;
so_far = G__28413;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28422_28430 = cljs.core.seq.call(null,ancestors);var chunk__28423_28431 = null;var count__28424_28432 = 0;var i__28425_28433 = 0;while(true){
if((i__28425_28433 < count__28424_28432))
{var n_28434 = cljs.core._nth.call(null,chunk__28423_28431,i__28425_28433);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28434;
goog.events.fireListeners(n_28434,evt.type,true,evt);
}
{
var G__28435 = seq__28422_28430;
var G__28436 = chunk__28423_28431;
var G__28437 = count__28424_28432;
var G__28438 = (i__28425_28433 + 1);
seq__28422_28430 = G__28435;
chunk__28423_28431 = G__28436;
count__28424_28432 = G__28437;
i__28425_28433 = G__28438;
continue;
}
} else
{var temp__4092__auto___28439 = cljs.core.seq.call(null,seq__28422_28430);if(temp__4092__auto___28439)
{var seq__28422_28440__$1 = temp__4092__auto___28439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28422_28440__$1))
{var c__4189__auto___28441 = cljs.core.chunk_first.call(null,seq__28422_28440__$1);{
var G__28442 = cljs.core.chunk_rest.call(null,seq__28422_28440__$1);
var G__28443 = c__4189__auto___28441;
var G__28444 = cljs.core.count.call(null,c__4189__auto___28441);
var G__28445 = 0;
seq__28422_28430 = G__28442;
chunk__28423_28431 = G__28443;
count__28424_28432 = G__28444;
i__28425_28433 = G__28445;
continue;
}
} else
{var n_28446 = cljs.core.first.call(null,seq__28422_28440__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28446;
goog.events.fireListeners(n_28446,evt.type,true,evt);
}
{
var G__28447 = cljs.core.next.call(null,seq__28422_28440__$1);
var G__28448 = null;
var G__28449 = 0;
var G__28450 = 0;
seq__28422_28430 = G__28447;
chunk__28423_28431 = G__28448;
count__28424_28432 = G__28449;
i__28425_28433 = G__28450;
continue;
}
}
} else
{}
}
break;
}
var seq__28426_28451 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28427_28452 = null;var count__28428_28453 = 0;var i__28429_28454 = 0;while(true){
if((i__28429_28454 < count__28428_28453))
{var n_28455 = cljs.core._nth.call(null,chunk__28427_28452,i__28429_28454);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28455;
goog.events.fireListeners(n_28455,evt.type,false,evt);
}
{
var G__28456 = seq__28426_28451;
var G__28457 = chunk__28427_28452;
var G__28458 = count__28428_28453;
var G__28459 = (i__28429_28454 + 1);
seq__28426_28451 = G__28456;
chunk__28427_28452 = G__28457;
count__28428_28453 = G__28458;
i__28429_28454 = G__28459;
continue;
}
} else
{var temp__4092__auto___28460 = cljs.core.seq.call(null,seq__28426_28451);if(temp__4092__auto___28460)
{var seq__28426_28461__$1 = temp__4092__auto___28460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28426_28461__$1))
{var c__4189__auto___28462 = cljs.core.chunk_first.call(null,seq__28426_28461__$1);{
var G__28463 = cljs.core.chunk_rest.call(null,seq__28426_28461__$1);
var G__28464 = c__4189__auto___28462;
var G__28465 = cljs.core.count.call(null,c__4189__auto___28462);
var G__28466 = 0;
seq__28426_28451 = G__28463;
chunk__28427_28452 = G__28464;
count__28428_28453 = G__28465;
i__28429_28454 = G__28466;
continue;
}
} else
{var n_28467 = cljs.core.first.call(null,seq__28426_28461__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28467;
goog.events.fireListeners(n_28467,evt.type,false,evt);
}
{
var G__28468 = cljs.core.next.call(null,seq__28426_28461__$1);
var G__28469 = null;
var G__28470 = 0;
var G__28471 = 0;
seq__28426_28451 = G__28468;
chunk__28427_28452 = G__28469;
count__28428_28453 = G__28470;
i__28429_28454 = G__28471;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28478_28484 = cljs.core.seq.call(null,evt_map);var chunk__28479_28485 = null;var count__28480_28486 = 0;var i__28481_28487 = 0;while(true){
if((i__28481_28487 < count__28480_28486))
{var vec__28482_28488 = cljs.core._nth.call(null,chunk__28479_28485,i__28481_28487);var k_28489 = cljs.core.nth.call(null,vec__28482_28488,0,null);var v_28490 = cljs.core.nth.call(null,vec__28482_28488,1,null);(evt[k_28489] = v_28490);
{
var G__28491 = seq__28478_28484;
var G__28492 = chunk__28479_28485;
var G__28493 = count__28480_28486;
var G__28494 = (i__28481_28487 + 1);
seq__28478_28484 = G__28491;
chunk__28479_28485 = G__28492;
count__28480_28486 = G__28493;
i__28481_28487 = G__28494;
continue;
}
} else
{var temp__4092__auto___28495 = cljs.core.seq.call(null,seq__28478_28484);if(temp__4092__auto___28495)
{var seq__28478_28496__$1 = temp__4092__auto___28495;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28478_28496__$1))
{var c__4189__auto___28497 = cljs.core.chunk_first.call(null,seq__28478_28496__$1);{
var G__28498 = cljs.core.chunk_rest.call(null,seq__28478_28496__$1);
var G__28499 = c__4189__auto___28497;
var G__28500 = cljs.core.count.call(null,c__4189__auto___28497);
var G__28501 = 0;
seq__28478_28484 = G__28498;
chunk__28479_28485 = G__28499;
count__28480_28486 = G__28500;
i__28481_28487 = G__28501;
continue;
}
} else
{var vec__28483_28502 = cljs.core.first.call(null,seq__28478_28496__$1);var k_28503 = cljs.core.nth.call(null,vec__28483_28502,0,null);var v_28504 = cljs.core.nth.call(null,vec__28483_28502,1,null);(evt[k_28503] = v_28504);
{
var G__28505 = cljs.core.next.call(null,seq__28478_28496__$1);
var G__28506 = null;
var G__28507 = 0;
var G__28508 = 0;
seq__28478_28484 = G__28505;
chunk__28479_28485 = G__28506;
count__28480_28486 = G__28507;
i__28481_28487 = G__28508;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__28509_SHARP_){return goog.events.getListeners(p1__28509_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map