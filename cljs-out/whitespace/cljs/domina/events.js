// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36252 = {};return obj36252;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36256 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36256 = (function (evt,f,create_listener_function,meta36257){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36257 = meta36257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36256.cljs$lang$type = true;
domina.events.t36256.cljs$lang$ctorStr = "domina.events/t36256";
domina.events.t36256.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36256");
});
domina.events.t36256.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36256.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36256.prototype.domina$events$Event$ = true;
domina.events.t36256.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36256.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36256.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36256.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36256.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36256.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36258){var self__ = this;
var _36258__$1 = this;return self__.meta36257;
});
domina.events.t36256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36258,meta36257__$1){var self__ = this;
var _36258__$1 = this;return (new domina.events.t36256(self__.evt,self__.f,self__.create_listener_function,meta36257__$1));
});
domina.events.__GT_t36256 = (function __GT_t36256(evt__$1,f__$1,create_listener_function__$1,meta36257){return (new domina.events.t36256(evt__$1,f__$1,create_listener_function__$1,meta36257));
});
}
return (new domina.events.t36256(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36263(s__36264){return (new cljs.core.LazySeq(null,(function (){var s__36264__$1 = s__36264;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36264__$1);if(temp__4092__auto__)
{var s__36264__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36264__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36264__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36266 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36265 = 0;while(true){
if((i__36265 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36265);cljs.core.chunk_append.call(null,b__36266,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36267 = (i__36265 + 1);
i__36265 = G__36267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36266),iter__36263.call(null,cljs.core.chunk_rest.call(null,s__36264__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36266),null);
}
} else
{var node = cljs.core.first.call(null,s__36264__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36263.call(null,cljs.core.rest.call(null,s__36264__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36276 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36277 = null;var count__36278 = 0;var i__36279 = 0;while(true){
if((i__36279 < count__36278))
{var node = cljs.core._nth.call(null,chunk__36277,i__36279);goog.events.removeAll(node);
{
var G__36284 = seq__36276;
var G__36285 = chunk__36277;
var G__36286 = count__36278;
var G__36287 = (i__36279 + 1);
seq__36276 = G__36284;
chunk__36277 = G__36285;
count__36278 = G__36286;
i__36279 = G__36287;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36276);if(temp__4092__auto__)
{var seq__36276__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36276__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36276__$1);{
var G__36288 = cljs.core.chunk_rest.call(null,seq__36276__$1);
var G__36289 = c__4148__auto__;
var G__36290 = cljs.core.count.call(null,c__4148__auto__);
var G__36291 = 0;
seq__36276 = G__36288;
chunk__36277 = G__36289;
count__36278 = G__36290;
i__36279 = G__36291;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36276__$1);goog.events.removeAll(node);
{
var G__36292 = cljs.core.next.call(null,seq__36276__$1);
var G__36293 = null;
var G__36294 = 0;
var G__36295 = 0;
seq__36276 = G__36292;
chunk__36277 = G__36293;
count__36278 = G__36294;
i__36279 = G__36295;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36280 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36281 = null;var count__36282 = 0;var i__36283 = 0;while(true){
if((i__36283 < count__36282))
{var node = cljs.core._nth.call(null,chunk__36281,i__36283);goog.events.removeAll(node,type__$1);
{
var G__36296 = seq__36280;
var G__36297 = chunk__36281;
var G__36298 = count__36282;
var G__36299 = (i__36283 + 1);
seq__36280 = G__36296;
chunk__36281 = G__36297;
count__36282 = G__36298;
i__36283 = G__36299;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36280);if(temp__4092__auto__)
{var seq__36280__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36280__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36280__$1);{
var G__36300 = cljs.core.chunk_rest.call(null,seq__36280__$1);
var G__36301 = c__4148__auto__;
var G__36302 = cljs.core.count.call(null,c__4148__auto__);
var G__36303 = 0;
seq__36280 = G__36300;
chunk__36281 = G__36301;
count__36282 = G__36302;
i__36283 = G__36303;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36280__$1);goog.events.removeAll(node,type__$1);
{
var G__36304 = cljs.core.next.call(null,seq__36280__$1);
var G__36305 = null;
var G__36306 = 0;
var G__36307 = 0;
seq__36280 = G__36304;
chunk__36281 = G__36305;
count__36282 = G__36306;
i__36283 = G__36307;
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
var G__36308 = parent;
var G__36309 = cljs.core.cons.call(null,parent,so_far);
n = G__36308;
so_far = G__36309;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36318_36326 = cljs.core.seq.call(null,ancestors);var chunk__36319_36327 = null;var count__36320_36328 = 0;var i__36321_36329 = 0;while(true){
if((i__36321_36329 < count__36320_36328))
{var n_36330 = cljs.core._nth.call(null,chunk__36319_36327,i__36321_36329);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36330;
goog.events.fireListeners(n_36330,evt.type,true,evt);
}
{
var G__36331 = seq__36318_36326;
var G__36332 = chunk__36319_36327;
var G__36333 = count__36320_36328;
var G__36334 = (i__36321_36329 + 1);
seq__36318_36326 = G__36331;
chunk__36319_36327 = G__36332;
count__36320_36328 = G__36333;
i__36321_36329 = G__36334;
continue;
}
} else
{var temp__4092__auto___36335 = cljs.core.seq.call(null,seq__36318_36326);if(temp__4092__auto___36335)
{var seq__36318_36336__$1 = temp__4092__auto___36335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36318_36336__$1))
{var c__4148__auto___36337 = cljs.core.chunk_first.call(null,seq__36318_36336__$1);{
var G__36338 = cljs.core.chunk_rest.call(null,seq__36318_36336__$1);
var G__36339 = c__4148__auto___36337;
var G__36340 = cljs.core.count.call(null,c__4148__auto___36337);
var G__36341 = 0;
seq__36318_36326 = G__36338;
chunk__36319_36327 = G__36339;
count__36320_36328 = G__36340;
i__36321_36329 = G__36341;
continue;
}
} else
{var n_36342 = cljs.core.first.call(null,seq__36318_36336__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36342;
goog.events.fireListeners(n_36342,evt.type,true,evt);
}
{
var G__36343 = cljs.core.next.call(null,seq__36318_36336__$1);
var G__36344 = null;
var G__36345 = 0;
var G__36346 = 0;
seq__36318_36326 = G__36343;
chunk__36319_36327 = G__36344;
count__36320_36328 = G__36345;
i__36321_36329 = G__36346;
continue;
}
}
} else
{}
}
break;
}
var seq__36322_36347 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36323_36348 = null;var count__36324_36349 = 0;var i__36325_36350 = 0;while(true){
if((i__36325_36350 < count__36324_36349))
{var n_36351 = cljs.core._nth.call(null,chunk__36323_36348,i__36325_36350);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36351;
goog.events.fireListeners(n_36351,evt.type,false,evt);
}
{
var G__36352 = seq__36322_36347;
var G__36353 = chunk__36323_36348;
var G__36354 = count__36324_36349;
var G__36355 = (i__36325_36350 + 1);
seq__36322_36347 = G__36352;
chunk__36323_36348 = G__36353;
count__36324_36349 = G__36354;
i__36325_36350 = G__36355;
continue;
}
} else
{var temp__4092__auto___36356 = cljs.core.seq.call(null,seq__36322_36347);if(temp__4092__auto___36356)
{var seq__36322_36357__$1 = temp__4092__auto___36356;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36322_36357__$1))
{var c__4148__auto___36358 = cljs.core.chunk_first.call(null,seq__36322_36357__$1);{
var G__36359 = cljs.core.chunk_rest.call(null,seq__36322_36357__$1);
var G__36360 = c__4148__auto___36358;
var G__36361 = cljs.core.count.call(null,c__4148__auto___36358);
var G__36362 = 0;
seq__36322_36347 = G__36359;
chunk__36323_36348 = G__36360;
count__36324_36349 = G__36361;
i__36325_36350 = G__36362;
continue;
}
} else
{var n_36363 = cljs.core.first.call(null,seq__36322_36357__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36363;
goog.events.fireListeners(n_36363,evt.type,false,evt);
}
{
var G__36364 = cljs.core.next.call(null,seq__36322_36357__$1);
var G__36365 = null;
var G__36366 = 0;
var G__36367 = 0;
seq__36322_36347 = G__36364;
chunk__36323_36348 = G__36365;
count__36324_36349 = G__36366;
i__36325_36350 = G__36367;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36374_36380 = cljs.core.seq.call(null,evt_map);var chunk__36375_36381 = null;var count__36376_36382 = 0;var i__36377_36383 = 0;while(true){
if((i__36377_36383 < count__36376_36382))
{var vec__36378_36384 = cljs.core._nth.call(null,chunk__36375_36381,i__36377_36383);var k_36385 = cljs.core.nth.call(null,vec__36378_36384,0,null);var v_36386 = cljs.core.nth.call(null,vec__36378_36384,1,null);(evt[k_36385] = v_36386);
{
var G__36387 = seq__36374_36380;
var G__36388 = chunk__36375_36381;
var G__36389 = count__36376_36382;
var G__36390 = (i__36377_36383 + 1);
seq__36374_36380 = G__36387;
chunk__36375_36381 = G__36388;
count__36376_36382 = G__36389;
i__36377_36383 = G__36390;
continue;
}
} else
{var temp__4092__auto___36391 = cljs.core.seq.call(null,seq__36374_36380);if(temp__4092__auto___36391)
{var seq__36374_36392__$1 = temp__4092__auto___36391;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36374_36392__$1))
{var c__4148__auto___36393 = cljs.core.chunk_first.call(null,seq__36374_36392__$1);{
var G__36394 = cljs.core.chunk_rest.call(null,seq__36374_36392__$1);
var G__36395 = c__4148__auto___36393;
var G__36396 = cljs.core.count.call(null,c__4148__auto___36393);
var G__36397 = 0;
seq__36374_36380 = G__36394;
chunk__36375_36381 = G__36395;
count__36376_36382 = G__36396;
i__36377_36383 = G__36397;
continue;
}
} else
{var vec__36379_36398 = cljs.core.first.call(null,seq__36374_36392__$1);var k_36399 = cljs.core.nth.call(null,vec__36379_36398,0,null);var v_36400 = cljs.core.nth.call(null,vec__36379_36398,1,null);(evt[k_36399] = v_36400);
{
var G__36401 = cljs.core.next.call(null,seq__36374_36392__$1);
var G__36402 = null;
var G__36403 = 0;
var G__36404 = 0;
seq__36374_36380 = G__36401;
chunk__36375_36381 = G__36402;
count__36376_36382 = G__36403;
i__36377_36383 = G__36404;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36405_SHARP_){return goog.events.getListeners(p1__36405_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
