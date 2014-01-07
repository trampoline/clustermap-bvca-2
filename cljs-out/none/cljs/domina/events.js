// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14254 = {};return obj14254;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14258 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14258 = (function (evt,f,create_listener_function,meta14259){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14259 = meta14259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14258.cljs$lang$type = true;
domina.events.t14258.cljs$lang$ctorStr = "domina.events/t14258";
domina.events.t14258.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14258");
});
domina.events.t14258.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14258.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14258.prototype.domina$events$Event$ = true;
domina.events.t14258.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14258.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14258.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14258.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14258.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14258.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14260){var self__ = this;
var _14260__$1 = this;return self__.meta14259;
});
domina.events.t14258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14260,meta14259__$1){var self__ = this;
var _14260__$1 = this;return (new domina.events.t14258(self__.evt,self__.f,self__.create_listener_function,meta14259__$1));
});
domina.events.__GT_t14258 = (function __GT_t14258(evt__$1,f__$1,create_listener_function__$1,meta14259){return (new domina.events.t14258(evt__$1,f__$1,create_listener_function__$1,meta14259));
});
}
return (new domina.events.t14258(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14265(s__14266){return (new cljs.core.LazySeq(null,(function (){var s__14266__$1 = s__14266;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14266__$1);if(temp__4092__auto__)
{var s__14266__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14266__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14266__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14268 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14267 = 0;while(true){
if((i__14267 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14267);cljs.core.chunk_append.call(null,b__14268,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14269 = (i__14267 + 1);
i__14267 = G__14269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14268),iter__14265.call(null,cljs.core.chunk_rest.call(null,s__14266__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14268),null);
}
} else
{var node = cljs.core.first.call(null,s__14266__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14265.call(null,cljs.core.rest.call(null,s__14266__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14278 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14279 = null;var count__14280 = 0;var i__14281 = 0;while(true){
if((i__14281 < count__14280))
{var node = cljs.core._nth.call(null,chunk__14279,i__14281);goog.events.removeAll(node);
{
var G__14286 = seq__14278;
var G__14287 = chunk__14279;
var G__14288 = count__14280;
var G__14289 = (i__14281 + 1);
seq__14278 = G__14286;
chunk__14279 = G__14287;
count__14280 = G__14288;
i__14281 = G__14289;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14278);if(temp__4092__auto__)
{var seq__14278__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14278__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14278__$1);{
var G__14290 = cljs.core.chunk_rest.call(null,seq__14278__$1);
var G__14291 = c__4148__auto__;
var G__14292 = cljs.core.count.call(null,c__4148__auto__);
var G__14293 = 0;
seq__14278 = G__14290;
chunk__14279 = G__14291;
count__14280 = G__14292;
i__14281 = G__14293;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14278__$1);goog.events.removeAll(node);
{
var G__14294 = cljs.core.next.call(null,seq__14278__$1);
var G__14295 = null;
var G__14296 = 0;
var G__14297 = 0;
seq__14278 = G__14294;
chunk__14279 = G__14295;
count__14280 = G__14296;
i__14281 = G__14297;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14282 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14283 = null;var count__14284 = 0;var i__14285 = 0;while(true){
if((i__14285 < count__14284))
{var node = cljs.core._nth.call(null,chunk__14283,i__14285);goog.events.removeAll(node,type__$1);
{
var G__14298 = seq__14282;
var G__14299 = chunk__14283;
var G__14300 = count__14284;
var G__14301 = (i__14285 + 1);
seq__14282 = G__14298;
chunk__14283 = G__14299;
count__14284 = G__14300;
i__14285 = G__14301;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14282);if(temp__4092__auto__)
{var seq__14282__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14282__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14282__$1);{
var G__14302 = cljs.core.chunk_rest.call(null,seq__14282__$1);
var G__14303 = c__4148__auto__;
var G__14304 = cljs.core.count.call(null,c__4148__auto__);
var G__14305 = 0;
seq__14282 = G__14302;
chunk__14283 = G__14303;
count__14284 = G__14304;
i__14285 = G__14305;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14282__$1);goog.events.removeAll(node,type__$1);
{
var G__14306 = cljs.core.next.call(null,seq__14282__$1);
var G__14307 = null;
var G__14308 = 0;
var G__14309 = 0;
seq__14282 = G__14306;
chunk__14283 = G__14307;
count__14284 = G__14308;
i__14285 = G__14309;
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
var G__14310 = parent;
var G__14311 = cljs.core.cons.call(null,parent,so_far);
n = G__14310;
so_far = G__14311;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14320_14328 = cljs.core.seq.call(null,ancestors);var chunk__14321_14329 = null;var count__14322_14330 = 0;var i__14323_14331 = 0;while(true){
if((i__14323_14331 < count__14322_14330))
{var n_14332 = cljs.core._nth.call(null,chunk__14321_14329,i__14323_14331);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14332;
goog.events.fireListeners(n_14332,evt.type,true,evt);
}
{
var G__14333 = seq__14320_14328;
var G__14334 = chunk__14321_14329;
var G__14335 = count__14322_14330;
var G__14336 = (i__14323_14331 + 1);
seq__14320_14328 = G__14333;
chunk__14321_14329 = G__14334;
count__14322_14330 = G__14335;
i__14323_14331 = G__14336;
continue;
}
} else
{var temp__4092__auto___14337 = cljs.core.seq.call(null,seq__14320_14328);if(temp__4092__auto___14337)
{var seq__14320_14338__$1 = temp__4092__auto___14337;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14320_14338__$1))
{var c__4148__auto___14339 = cljs.core.chunk_first.call(null,seq__14320_14338__$1);{
var G__14340 = cljs.core.chunk_rest.call(null,seq__14320_14338__$1);
var G__14341 = c__4148__auto___14339;
var G__14342 = cljs.core.count.call(null,c__4148__auto___14339);
var G__14343 = 0;
seq__14320_14328 = G__14340;
chunk__14321_14329 = G__14341;
count__14322_14330 = G__14342;
i__14323_14331 = G__14343;
continue;
}
} else
{var n_14344 = cljs.core.first.call(null,seq__14320_14338__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14344;
goog.events.fireListeners(n_14344,evt.type,true,evt);
}
{
var G__14345 = cljs.core.next.call(null,seq__14320_14338__$1);
var G__14346 = null;
var G__14347 = 0;
var G__14348 = 0;
seq__14320_14328 = G__14345;
chunk__14321_14329 = G__14346;
count__14322_14330 = G__14347;
i__14323_14331 = G__14348;
continue;
}
}
} else
{}
}
break;
}
var seq__14324_14349 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14325_14350 = null;var count__14326_14351 = 0;var i__14327_14352 = 0;while(true){
if((i__14327_14352 < count__14326_14351))
{var n_14353 = cljs.core._nth.call(null,chunk__14325_14350,i__14327_14352);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14353;
goog.events.fireListeners(n_14353,evt.type,false,evt);
}
{
var G__14354 = seq__14324_14349;
var G__14355 = chunk__14325_14350;
var G__14356 = count__14326_14351;
var G__14357 = (i__14327_14352 + 1);
seq__14324_14349 = G__14354;
chunk__14325_14350 = G__14355;
count__14326_14351 = G__14356;
i__14327_14352 = G__14357;
continue;
}
} else
{var temp__4092__auto___14358 = cljs.core.seq.call(null,seq__14324_14349);if(temp__4092__auto___14358)
{var seq__14324_14359__$1 = temp__4092__auto___14358;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14324_14359__$1))
{var c__4148__auto___14360 = cljs.core.chunk_first.call(null,seq__14324_14359__$1);{
var G__14361 = cljs.core.chunk_rest.call(null,seq__14324_14359__$1);
var G__14362 = c__4148__auto___14360;
var G__14363 = cljs.core.count.call(null,c__4148__auto___14360);
var G__14364 = 0;
seq__14324_14349 = G__14361;
chunk__14325_14350 = G__14362;
count__14326_14351 = G__14363;
i__14327_14352 = G__14364;
continue;
}
} else
{var n_14365 = cljs.core.first.call(null,seq__14324_14359__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14365;
goog.events.fireListeners(n_14365,evt.type,false,evt);
}
{
var G__14366 = cljs.core.next.call(null,seq__14324_14359__$1);
var G__14367 = null;
var G__14368 = 0;
var G__14369 = 0;
seq__14324_14349 = G__14366;
chunk__14325_14350 = G__14367;
count__14326_14351 = G__14368;
i__14327_14352 = G__14369;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14376_14382 = cljs.core.seq.call(null,evt_map);var chunk__14377_14383 = null;var count__14378_14384 = 0;var i__14379_14385 = 0;while(true){
if((i__14379_14385 < count__14378_14384))
{var vec__14380_14386 = cljs.core._nth.call(null,chunk__14377_14383,i__14379_14385);var k_14387 = cljs.core.nth.call(null,vec__14380_14386,0,null);var v_14388 = cljs.core.nth.call(null,vec__14380_14386,1,null);(evt[k_14387] = v_14388);
{
var G__14389 = seq__14376_14382;
var G__14390 = chunk__14377_14383;
var G__14391 = count__14378_14384;
var G__14392 = (i__14379_14385 + 1);
seq__14376_14382 = G__14389;
chunk__14377_14383 = G__14390;
count__14378_14384 = G__14391;
i__14379_14385 = G__14392;
continue;
}
} else
{var temp__4092__auto___14393 = cljs.core.seq.call(null,seq__14376_14382);if(temp__4092__auto___14393)
{var seq__14376_14394__$1 = temp__4092__auto___14393;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14376_14394__$1))
{var c__4148__auto___14395 = cljs.core.chunk_first.call(null,seq__14376_14394__$1);{
var G__14396 = cljs.core.chunk_rest.call(null,seq__14376_14394__$1);
var G__14397 = c__4148__auto___14395;
var G__14398 = cljs.core.count.call(null,c__4148__auto___14395);
var G__14399 = 0;
seq__14376_14382 = G__14396;
chunk__14377_14383 = G__14397;
count__14378_14384 = G__14398;
i__14379_14385 = G__14399;
continue;
}
} else
{var vec__14381_14400 = cljs.core.first.call(null,seq__14376_14394__$1);var k_14401 = cljs.core.nth.call(null,vec__14381_14400,0,null);var v_14402 = cljs.core.nth.call(null,vec__14381_14400,1,null);(evt[k_14401] = v_14402);
{
var G__14403 = cljs.core.next.call(null,seq__14376_14394__$1);
var G__14404 = null;
var G__14405 = 0;
var G__14406 = 0;
seq__14376_14382 = G__14403;
chunk__14377_14383 = G__14404;
count__14378_14384 = G__14405;
i__14379_14385 = G__14406;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__14407_SHARP_){return goog.events.getListeners(p1__14407_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map