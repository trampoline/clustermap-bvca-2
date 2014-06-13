// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17279 = {};return obj17279;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17283 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17283 = (function (evt,f,create_listener_function,meta17284){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17284 = meta17284;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17283.cljs$lang$type = true;
domina.events.t17283.cljs$lang$ctorStr = "domina.events/t17283";
domina.events.t17283.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t17283");
});
domina.events.t17283.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17283.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t17283.prototype.domina$events$Event$ = true;
domina.events.t17283.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17283.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17283.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17283.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17283.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17283.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17285){var self__ = this;
var _17285__$1 = this;return self__.meta17284;
});
domina.events.t17283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17285,meta17284__$1){var self__ = this;
var _17285__$1 = this;return (new domina.events.t17283(self__.evt,self__.f,self__.create_listener_function,meta17284__$1));
});
domina.events.__GT_t17283 = (function __GT_t17283(evt__$1,f__$1,create_listener_function__$1,meta17284){return (new domina.events.t17283(evt__$1,f__$1,create_listener_function__$1,meta17284));
});
}
return (new domina.events.t17283(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__17290(s__17291){return (new cljs.core.LazySeq(null,(function (){var s__17291__$1 = s__17291;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17291__$1);if(temp__4092__auto__)
{var s__17291__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17291__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__17291__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__17293 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__17292 = 0;while(true){
if((i__17292 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__17292);cljs.core.chunk_append.call(null,b__17293,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17294 = (i__17292 + 1);
i__17292 = G__17294;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17293),iter__17290.call(null,cljs.core.chunk_rest.call(null,s__17291__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17293),null);
}
} else
{var node = cljs.core.first.call(null,s__17291__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17290.call(null,cljs.core.rest.call(null,s__17291__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__17303 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17304 = null;var count__17305 = 0;var i__17306 = 0;while(true){
if((i__17306 < count__17305))
{var node = cljs.core._nth.call(null,chunk__17304,i__17306);goog.events.removeAll(node);
{
var G__17311 = seq__17303;
var G__17312 = chunk__17304;
var G__17313 = count__17305;
var G__17314 = (i__17306 + 1);
seq__17303 = G__17311;
chunk__17304 = G__17312;
count__17305 = G__17313;
i__17306 = G__17314;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17303);if(temp__4092__auto__)
{var seq__17303__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17303__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17303__$1);{
var G__17315 = cljs.core.chunk_rest.call(null,seq__17303__$1);
var G__17316 = c__4189__auto__;
var G__17317 = cljs.core.count.call(null,c__4189__auto__);
var G__17318 = 0;
seq__17303 = G__17315;
chunk__17304 = G__17316;
count__17305 = G__17317;
i__17306 = G__17318;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17303__$1);goog.events.removeAll(node);
{
var G__17319 = cljs.core.next.call(null,seq__17303__$1);
var G__17320 = null;
var G__17321 = 0;
var G__17322 = 0;
seq__17303 = G__17319;
chunk__17304 = G__17320;
count__17305 = G__17321;
i__17306 = G__17322;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17307 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17308 = null;var count__17309 = 0;var i__17310 = 0;while(true){
if((i__17310 < count__17309))
{var node = cljs.core._nth.call(null,chunk__17308,i__17310);goog.events.removeAll(node,type__$1);
{
var G__17323 = seq__17307;
var G__17324 = chunk__17308;
var G__17325 = count__17309;
var G__17326 = (i__17310 + 1);
seq__17307 = G__17323;
chunk__17308 = G__17324;
count__17309 = G__17325;
i__17310 = G__17326;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17307);if(temp__4092__auto__)
{var seq__17307__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17307__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17307__$1);{
var G__17327 = cljs.core.chunk_rest.call(null,seq__17307__$1);
var G__17328 = c__4189__auto__;
var G__17329 = cljs.core.count.call(null,c__4189__auto__);
var G__17330 = 0;
seq__17307 = G__17327;
chunk__17308 = G__17328;
count__17309 = G__17329;
i__17310 = G__17330;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17307__$1);goog.events.removeAll(node,type__$1);
{
var G__17331 = cljs.core.next.call(null,seq__17307__$1);
var G__17332 = null;
var G__17333 = 0;
var G__17334 = 0;
seq__17307 = G__17331;
chunk__17308 = G__17332;
count__17309 = G__17333;
i__17310 = G__17334;
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
var G__17335 = parent;
var G__17336 = cljs.core.cons.call(null,parent,so_far);
n = G__17335;
so_far = G__17336;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17345_17353 = cljs.core.seq.call(null,ancestors);var chunk__17346_17354 = null;var count__17347_17355 = 0;var i__17348_17356 = 0;while(true){
if((i__17348_17356 < count__17347_17355))
{var n_17357 = cljs.core._nth.call(null,chunk__17346_17354,i__17348_17356);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17357;
goog.events.fireListeners(n_17357,evt.type,true,evt);
}
{
var G__17358 = seq__17345_17353;
var G__17359 = chunk__17346_17354;
var G__17360 = count__17347_17355;
var G__17361 = (i__17348_17356 + 1);
seq__17345_17353 = G__17358;
chunk__17346_17354 = G__17359;
count__17347_17355 = G__17360;
i__17348_17356 = G__17361;
continue;
}
} else
{var temp__4092__auto___17362 = cljs.core.seq.call(null,seq__17345_17353);if(temp__4092__auto___17362)
{var seq__17345_17363__$1 = temp__4092__auto___17362;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17345_17363__$1))
{var c__4189__auto___17364 = cljs.core.chunk_first.call(null,seq__17345_17363__$1);{
var G__17365 = cljs.core.chunk_rest.call(null,seq__17345_17363__$1);
var G__17366 = c__4189__auto___17364;
var G__17367 = cljs.core.count.call(null,c__4189__auto___17364);
var G__17368 = 0;
seq__17345_17353 = G__17365;
chunk__17346_17354 = G__17366;
count__17347_17355 = G__17367;
i__17348_17356 = G__17368;
continue;
}
} else
{var n_17369 = cljs.core.first.call(null,seq__17345_17363__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17369;
goog.events.fireListeners(n_17369,evt.type,true,evt);
}
{
var G__17370 = cljs.core.next.call(null,seq__17345_17363__$1);
var G__17371 = null;
var G__17372 = 0;
var G__17373 = 0;
seq__17345_17353 = G__17370;
chunk__17346_17354 = G__17371;
count__17347_17355 = G__17372;
i__17348_17356 = G__17373;
continue;
}
}
} else
{}
}
break;
}
var seq__17349_17374 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17350_17375 = null;var count__17351_17376 = 0;var i__17352_17377 = 0;while(true){
if((i__17352_17377 < count__17351_17376))
{var n_17378 = cljs.core._nth.call(null,chunk__17350_17375,i__17352_17377);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17378;
goog.events.fireListeners(n_17378,evt.type,false,evt);
}
{
var G__17379 = seq__17349_17374;
var G__17380 = chunk__17350_17375;
var G__17381 = count__17351_17376;
var G__17382 = (i__17352_17377 + 1);
seq__17349_17374 = G__17379;
chunk__17350_17375 = G__17380;
count__17351_17376 = G__17381;
i__17352_17377 = G__17382;
continue;
}
} else
{var temp__4092__auto___17383 = cljs.core.seq.call(null,seq__17349_17374);if(temp__4092__auto___17383)
{var seq__17349_17384__$1 = temp__4092__auto___17383;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17349_17384__$1))
{var c__4189__auto___17385 = cljs.core.chunk_first.call(null,seq__17349_17384__$1);{
var G__17386 = cljs.core.chunk_rest.call(null,seq__17349_17384__$1);
var G__17387 = c__4189__auto___17385;
var G__17388 = cljs.core.count.call(null,c__4189__auto___17385);
var G__17389 = 0;
seq__17349_17374 = G__17386;
chunk__17350_17375 = G__17387;
count__17351_17376 = G__17388;
i__17352_17377 = G__17389;
continue;
}
} else
{var n_17390 = cljs.core.first.call(null,seq__17349_17384__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17390;
goog.events.fireListeners(n_17390,evt.type,false,evt);
}
{
var G__17391 = cljs.core.next.call(null,seq__17349_17384__$1);
var G__17392 = null;
var G__17393 = 0;
var G__17394 = 0;
seq__17349_17374 = G__17391;
chunk__17350_17375 = G__17392;
count__17351_17376 = G__17393;
i__17352_17377 = G__17394;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17401_17407 = cljs.core.seq.call(null,evt_map);var chunk__17402_17408 = null;var count__17403_17409 = 0;var i__17404_17410 = 0;while(true){
if((i__17404_17410 < count__17403_17409))
{var vec__17405_17411 = cljs.core._nth.call(null,chunk__17402_17408,i__17404_17410);var k_17412 = cljs.core.nth.call(null,vec__17405_17411,0,null);var v_17413 = cljs.core.nth.call(null,vec__17405_17411,1,null);(evt[k_17412] = v_17413);
{
var G__17414 = seq__17401_17407;
var G__17415 = chunk__17402_17408;
var G__17416 = count__17403_17409;
var G__17417 = (i__17404_17410 + 1);
seq__17401_17407 = G__17414;
chunk__17402_17408 = G__17415;
count__17403_17409 = G__17416;
i__17404_17410 = G__17417;
continue;
}
} else
{var temp__4092__auto___17418 = cljs.core.seq.call(null,seq__17401_17407);if(temp__4092__auto___17418)
{var seq__17401_17419__$1 = temp__4092__auto___17418;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17401_17419__$1))
{var c__4189__auto___17420 = cljs.core.chunk_first.call(null,seq__17401_17419__$1);{
var G__17421 = cljs.core.chunk_rest.call(null,seq__17401_17419__$1);
var G__17422 = c__4189__auto___17420;
var G__17423 = cljs.core.count.call(null,c__4189__auto___17420);
var G__17424 = 0;
seq__17401_17407 = G__17421;
chunk__17402_17408 = G__17422;
count__17403_17409 = G__17423;
i__17404_17410 = G__17424;
continue;
}
} else
{var vec__17406_17425 = cljs.core.first.call(null,seq__17401_17419__$1);var k_17426 = cljs.core.nth.call(null,vec__17406_17425,0,null);var v_17427 = cljs.core.nth.call(null,vec__17406_17425,1,null);(evt[k_17426] = v_17427);
{
var G__17428 = cljs.core.next.call(null,seq__17401_17419__$1);
var G__17429 = null;
var G__17430 = 0;
var G__17431 = 0;
seq__17401_17407 = G__17428;
chunk__17402_17408 = G__17429;
count__17403_17409 = G__17430;
i__17404_17410 = G__17431;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17432_SHARP_){return goog.events.getListeners(p1__17432_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map