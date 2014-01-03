// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj49261 = {};return obj49261;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t49265 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t49265 = (function (evt,f,create_listener_function,meta49266){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta49266 = meta49266;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t49265.cljs$lang$type = true;
domina.events.t49265.cljs$lang$ctorStr = "domina.events/t49265";
domina.events.t49265.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t49265");
});
domina.events.t49265.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t49265.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t49265.prototype.domina$events$Event$ = true;
domina.events.t49265.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t49265.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t49265.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t49265.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t49265.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t49265.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t49265.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49267){var self__ = this;
var _49267__$1 = this;return self__.meta49266;
});
domina.events.t49265.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49267,meta49266__$1){var self__ = this;
var _49267__$1 = this;return (new domina.events.t49265(self__.evt,self__.f,self__.create_listener_function,meta49266__$1));
});
domina.events.__GT_t49265 = (function __GT_t49265(evt__$1,f__$1,create_listener_function__$1,meta49266){return (new domina.events.t49265(evt__$1,f__$1,create_listener_function__$1,meta49266));
});
}
return (new domina.events.t49265(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__49272(s__49273){return (new cljs.core.LazySeq(null,(function (){var s__49273__$1 = s__49273;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49273__$1);if(temp__4092__auto__)
{var s__49273__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49273__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__49273__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__49275 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__49274 = 0;while(true){
if((i__49274 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__49274);cljs.core.chunk_append.call(null,b__49275,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__49276 = (i__49274 + 1);
i__49274 = G__49276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49275),iter__49272.call(null,cljs.core.chunk_rest.call(null,s__49273__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49275),null);
}
} else
{var node = cljs.core.first.call(null,s__49273__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__49272.call(null,cljs.core.rest.call(null,s__49273__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__49285 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49286 = null;var count__49287 = 0;var i__49288 = 0;while(true){
if((i__49288 < count__49287))
{var node = cljs.core._nth.call(null,chunk__49286,i__49288);goog.events.removeAll(node);
{
var G__49293 = seq__49285;
var G__49294 = chunk__49286;
var G__49295 = count__49287;
var G__49296 = (i__49288 + 1);
seq__49285 = G__49293;
chunk__49286 = G__49294;
count__49287 = G__49295;
i__49288 = G__49296;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__49285);if(temp__4092__auto__)
{var seq__49285__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49285__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__49285__$1);{
var G__49297 = cljs.core.chunk_rest.call(null,seq__49285__$1);
var G__49298 = c__4015__auto__;
var G__49299 = cljs.core.count.call(null,c__4015__auto__);
var G__49300 = 0;
seq__49285 = G__49297;
chunk__49286 = G__49298;
count__49287 = G__49299;
i__49288 = G__49300;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__49285__$1);goog.events.removeAll(node);
{
var G__49301 = cljs.core.next.call(null,seq__49285__$1);
var G__49302 = null;
var G__49303 = 0;
var G__49304 = 0;
seq__49285 = G__49301;
chunk__49286 = G__49302;
count__49287 = G__49303;
i__49288 = G__49304;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__49289 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49290 = null;var count__49291 = 0;var i__49292 = 0;while(true){
if((i__49292 < count__49291))
{var node = cljs.core._nth.call(null,chunk__49290,i__49292);goog.events.removeAll(node,type__$1);
{
var G__49305 = seq__49289;
var G__49306 = chunk__49290;
var G__49307 = count__49291;
var G__49308 = (i__49292 + 1);
seq__49289 = G__49305;
chunk__49290 = G__49306;
count__49291 = G__49307;
i__49292 = G__49308;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__49289);if(temp__4092__auto__)
{var seq__49289__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49289__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__49289__$1);{
var G__49309 = cljs.core.chunk_rest.call(null,seq__49289__$1);
var G__49310 = c__4015__auto__;
var G__49311 = cljs.core.count.call(null,c__4015__auto__);
var G__49312 = 0;
seq__49289 = G__49309;
chunk__49290 = G__49310;
count__49291 = G__49311;
i__49292 = G__49312;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__49289__$1);goog.events.removeAll(node,type__$1);
{
var G__49313 = cljs.core.next.call(null,seq__49289__$1);
var G__49314 = null;
var G__49315 = 0;
var G__49316 = 0;
seq__49289 = G__49313;
chunk__49290 = G__49314;
count__49291 = G__49315;
i__49292 = G__49316;
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
var G__49317 = parent;
var G__49318 = cljs.core.cons.call(null,parent,so_far);
n = G__49317;
so_far = G__49318;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__49327_49335 = cljs.core.seq.call(null,ancestors);var chunk__49328_49336 = null;var count__49329_49337 = 0;var i__49330_49338 = 0;while(true){
if((i__49330_49338 < count__49329_49337))
{var n_49339 = cljs.core._nth.call(null,chunk__49328_49336,i__49330_49338);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_49339;
goog.events.fireListeners(n_49339,evt.type,true,evt);
}
{
var G__49340 = seq__49327_49335;
var G__49341 = chunk__49328_49336;
var G__49342 = count__49329_49337;
var G__49343 = (i__49330_49338 + 1);
seq__49327_49335 = G__49340;
chunk__49328_49336 = G__49341;
count__49329_49337 = G__49342;
i__49330_49338 = G__49343;
continue;
}
} else
{var temp__4092__auto___49344 = cljs.core.seq.call(null,seq__49327_49335);if(temp__4092__auto___49344)
{var seq__49327_49345__$1 = temp__4092__auto___49344;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49327_49345__$1))
{var c__4015__auto___49346 = cljs.core.chunk_first.call(null,seq__49327_49345__$1);{
var G__49347 = cljs.core.chunk_rest.call(null,seq__49327_49345__$1);
var G__49348 = c__4015__auto___49346;
var G__49349 = cljs.core.count.call(null,c__4015__auto___49346);
var G__49350 = 0;
seq__49327_49335 = G__49347;
chunk__49328_49336 = G__49348;
count__49329_49337 = G__49349;
i__49330_49338 = G__49350;
continue;
}
} else
{var n_49351 = cljs.core.first.call(null,seq__49327_49345__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_49351;
goog.events.fireListeners(n_49351,evt.type,true,evt);
}
{
var G__49352 = cljs.core.next.call(null,seq__49327_49345__$1);
var G__49353 = null;
var G__49354 = 0;
var G__49355 = 0;
seq__49327_49335 = G__49352;
chunk__49328_49336 = G__49353;
count__49329_49337 = G__49354;
i__49330_49338 = G__49355;
continue;
}
}
} else
{}
}
break;
}
var seq__49331_49356 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__49332_49357 = null;var count__49333_49358 = 0;var i__49334_49359 = 0;while(true){
if((i__49334_49359 < count__49333_49358))
{var n_49360 = cljs.core._nth.call(null,chunk__49332_49357,i__49334_49359);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_49360;
goog.events.fireListeners(n_49360,evt.type,false,evt);
}
{
var G__49361 = seq__49331_49356;
var G__49362 = chunk__49332_49357;
var G__49363 = count__49333_49358;
var G__49364 = (i__49334_49359 + 1);
seq__49331_49356 = G__49361;
chunk__49332_49357 = G__49362;
count__49333_49358 = G__49363;
i__49334_49359 = G__49364;
continue;
}
} else
{var temp__4092__auto___49365 = cljs.core.seq.call(null,seq__49331_49356);if(temp__4092__auto___49365)
{var seq__49331_49366__$1 = temp__4092__auto___49365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49331_49366__$1))
{var c__4015__auto___49367 = cljs.core.chunk_first.call(null,seq__49331_49366__$1);{
var G__49368 = cljs.core.chunk_rest.call(null,seq__49331_49366__$1);
var G__49369 = c__4015__auto___49367;
var G__49370 = cljs.core.count.call(null,c__4015__auto___49367);
var G__49371 = 0;
seq__49331_49356 = G__49368;
chunk__49332_49357 = G__49369;
count__49333_49358 = G__49370;
i__49334_49359 = G__49371;
continue;
}
} else
{var n_49372 = cljs.core.first.call(null,seq__49331_49366__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_49372;
goog.events.fireListeners(n_49372,evt.type,false,evt);
}
{
var G__49373 = cljs.core.next.call(null,seq__49331_49366__$1);
var G__49374 = null;
var G__49375 = 0;
var G__49376 = 0;
seq__49331_49356 = G__49373;
chunk__49332_49357 = G__49374;
count__49333_49358 = G__49375;
i__49334_49359 = G__49376;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__49383_49389 = cljs.core.seq.call(null,evt_map);var chunk__49384_49390 = null;var count__49385_49391 = 0;var i__49386_49392 = 0;while(true){
if((i__49386_49392 < count__49385_49391))
{var vec__49387_49393 = cljs.core._nth.call(null,chunk__49384_49390,i__49386_49392);var k_49394 = cljs.core.nth.call(null,vec__49387_49393,0,null);var v_49395 = cljs.core.nth.call(null,vec__49387_49393,1,null);(evt[k_49394] = v_49395);
{
var G__49396 = seq__49383_49389;
var G__49397 = chunk__49384_49390;
var G__49398 = count__49385_49391;
var G__49399 = (i__49386_49392 + 1);
seq__49383_49389 = G__49396;
chunk__49384_49390 = G__49397;
count__49385_49391 = G__49398;
i__49386_49392 = G__49399;
continue;
}
} else
{var temp__4092__auto___49400 = cljs.core.seq.call(null,seq__49383_49389);if(temp__4092__auto___49400)
{var seq__49383_49401__$1 = temp__4092__auto___49400;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49383_49401__$1))
{var c__4015__auto___49402 = cljs.core.chunk_first.call(null,seq__49383_49401__$1);{
var G__49403 = cljs.core.chunk_rest.call(null,seq__49383_49401__$1);
var G__49404 = c__4015__auto___49402;
var G__49405 = cljs.core.count.call(null,c__4015__auto___49402);
var G__49406 = 0;
seq__49383_49389 = G__49403;
chunk__49384_49390 = G__49404;
count__49385_49391 = G__49405;
i__49386_49392 = G__49406;
continue;
}
} else
{var vec__49388_49407 = cljs.core.first.call(null,seq__49383_49401__$1);var k_49408 = cljs.core.nth.call(null,vec__49388_49407,0,null);var v_49409 = cljs.core.nth.call(null,vec__49388_49407,1,null);(evt[k_49408] = v_49409);
{
var G__49410 = cljs.core.next.call(null,seq__49383_49401__$1);
var G__49411 = null;
var G__49412 = 0;
var G__49413 = 0;
seq__49383_49389 = G__49410;
chunk__49384_49390 = G__49411;
count__49385_49391 = G__49412;
i__49386_49392 = G__49413;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__49414_SHARP_){return goog.events.getListeners(p1__49414_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
