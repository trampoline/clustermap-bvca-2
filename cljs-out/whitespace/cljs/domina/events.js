// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj46274 = {};return obj46274;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t46278 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t46278 = (function (evt,f,create_listener_function,meta46279){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta46279 = meta46279;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t46278.cljs$lang$type = true;
domina.events.t46278.cljs$lang$ctorStr = "domina.events/t46278";
domina.events.t46278.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t46278");
});
domina.events.t46278.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t46278.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t46278.prototype.domina$events$Event$ = true;
domina.events.t46278.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t46278.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t46278.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t46278.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t46278.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t46278.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t46278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46280){var self__ = this;
var _46280__$1 = this;return self__.meta46279;
});
domina.events.t46278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46280,meta46279__$1){var self__ = this;
var _46280__$1 = this;return (new domina.events.t46278(self__.evt,self__.f,self__.create_listener_function,meta46279__$1));
});
domina.events.__GT_t46278 = (function __GT_t46278(evt__$1,f__$1,create_listener_function__$1,meta46279){return (new domina.events.t46278(evt__$1,f__$1,create_listener_function__$1,meta46279));
});
}
return (new domina.events.t46278(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__46285(s__46286){return (new cljs.core.LazySeq(null,(function (){var s__46286__$1 = s__46286;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__46286__$1);if(temp__4092__auto__)
{var s__46286__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46286__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__46286__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__46288 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__46287 = 0;while(true){
if((i__46287 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__46287);cljs.core.chunk_append.call(null,b__46288,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__46289 = (i__46287 + 1);
i__46287 = G__46289;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46288),iter__46285.call(null,cljs.core.chunk_rest.call(null,s__46286__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46288),null);
}
} else
{var node = cljs.core.first.call(null,s__46286__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__46285.call(null,cljs.core.rest.call(null,s__46286__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__46298 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46299 = null;var count__46300 = 0;var i__46301 = 0;while(true){
if((i__46301 < count__46300))
{var node = cljs.core._nth.call(null,chunk__46299,i__46301);goog.events.removeAll(node);
{
var G__46306 = seq__46298;
var G__46307 = chunk__46299;
var G__46308 = count__46300;
var G__46309 = (i__46301 + 1);
seq__46298 = G__46306;
chunk__46299 = G__46307;
count__46300 = G__46308;
i__46301 = G__46309;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46298);if(temp__4092__auto__)
{var seq__46298__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46298__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__46298__$1);{
var G__46310 = cljs.core.chunk_rest.call(null,seq__46298__$1);
var G__46311 = c__4015__auto__;
var G__46312 = cljs.core.count.call(null,c__4015__auto__);
var G__46313 = 0;
seq__46298 = G__46310;
chunk__46299 = G__46311;
count__46300 = G__46312;
i__46301 = G__46313;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__46298__$1);goog.events.removeAll(node);
{
var G__46314 = cljs.core.next.call(null,seq__46298__$1);
var G__46315 = null;
var G__46316 = 0;
var G__46317 = 0;
seq__46298 = G__46314;
chunk__46299 = G__46315;
count__46300 = G__46316;
i__46301 = G__46317;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__46302 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__46303 = null;var count__46304 = 0;var i__46305 = 0;while(true){
if((i__46305 < count__46304))
{var node = cljs.core._nth.call(null,chunk__46303,i__46305);goog.events.removeAll(node,type__$1);
{
var G__46318 = seq__46302;
var G__46319 = chunk__46303;
var G__46320 = count__46304;
var G__46321 = (i__46305 + 1);
seq__46302 = G__46318;
chunk__46303 = G__46319;
count__46304 = G__46320;
i__46305 = G__46321;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__46302);if(temp__4092__auto__)
{var seq__46302__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46302__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__46302__$1);{
var G__46322 = cljs.core.chunk_rest.call(null,seq__46302__$1);
var G__46323 = c__4015__auto__;
var G__46324 = cljs.core.count.call(null,c__4015__auto__);
var G__46325 = 0;
seq__46302 = G__46322;
chunk__46303 = G__46323;
count__46304 = G__46324;
i__46305 = G__46325;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__46302__$1);goog.events.removeAll(node,type__$1);
{
var G__46326 = cljs.core.next.call(null,seq__46302__$1);
var G__46327 = null;
var G__46328 = 0;
var G__46329 = 0;
seq__46302 = G__46326;
chunk__46303 = G__46327;
count__46304 = G__46328;
i__46305 = G__46329;
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
var G__46330 = parent;
var G__46331 = cljs.core.cons.call(null,parent,so_far);
n = G__46330;
so_far = G__46331;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__46340_46348 = cljs.core.seq.call(null,ancestors);var chunk__46341_46349 = null;var count__46342_46350 = 0;var i__46343_46351 = 0;while(true){
if((i__46343_46351 < count__46342_46350))
{var n_46352 = cljs.core._nth.call(null,chunk__46341_46349,i__46343_46351);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46352;
goog.events.fireListeners(n_46352,evt.type,true,evt);
}
{
var G__46353 = seq__46340_46348;
var G__46354 = chunk__46341_46349;
var G__46355 = count__46342_46350;
var G__46356 = (i__46343_46351 + 1);
seq__46340_46348 = G__46353;
chunk__46341_46349 = G__46354;
count__46342_46350 = G__46355;
i__46343_46351 = G__46356;
continue;
}
} else
{var temp__4092__auto___46357 = cljs.core.seq.call(null,seq__46340_46348);if(temp__4092__auto___46357)
{var seq__46340_46358__$1 = temp__4092__auto___46357;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46340_46358__$1))
{var c__4015__auto___46359 = cljs.core.chunk_first.call(null,seq__46340_46358__$1);{
var G__46360 = cljs.core.chunk_rest.call(null,seq__46340_46358__$1);
var G__46361 = c__4015__auto___46359;
var G__46362 = cljs.core.count.call(null,c__4015__auto___46359);
var G__46363 = 0;
seq__46340_46348 = G__46360;
chunk__46341_46349 = G__46361;
count__46342_46350 = G__46362;
i__46343_46351 = G__46363;
continue;
}
} else
{var n_46364 = cljs.core.first.call(null,seq__46340_46358__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46364;
goog.events.fireListeners(n_46364,evt.type,true,evt);
}
{
var G__46365 = cljs.core.next.call(null,seq__46340_46358__$1);
var G__46366 = null;
var G__46367 = 0;
var G__46368 = 0;
seq__46340_46348 = G__46365;
chunk__46341_46349 = G__46366;
count__46342_46350 = G__46367;
i__46343_46351 = G__46368;
continue;
}
}
} else
{}
}
break;
}
var seq__46344_46369 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__46345_46370 = null;var count__46346_46371 = 0;var i__46347_46372 = 0;while(true){
if((i__46347_46372 < count__46346_46371))
{var n_46373 = cljs.core._nth.call(null,chunk__46345_46370,i__46347_46372);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46373;
goog.events.fireListeners(n_46373,evt.type,false,evt);
}
{
var G__46374 = seq__46344_46369;
var G__46375 = chunk__46345_46370;
var G__46376 = count__46346_46371;
var G__46377 = (i__46347_46372 + 1);
seq__46344_46369 = G__46374;
chunk__46345_46370 = G__46375;
count__46346_46371 = G__46376;
i__46347_46372 = G__46377;
continue;
}
} else
{var temp__4092__auto___46378 = cljs.core.seq.call(null,seq__46344_46369);if(temp__4092__auto___46378)
{var seq__46344_46379__$1 = temp__4092__auto___46378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46344_46379__$1))
{var c__4015__auto___46380 = cljs.core.chunk_first.call(null,seq__46344_46379__$1);{
var G__46381 = cljs.core.chunk_rest.call(null,seq__46344_46379__$1);
var G__46382 = c__4015__auto___46380;
var G__46383 = cljs.core.count.call(null,c__4015__auto___46380);
var G__46384 = 0;
seq__46344_46369 = G__46381;
chunk__46345_46370 = G__46382;
count__46346_46371 = G__46383;
i__46347_46372 = G__46384;
continue;
}
} else
{var n_46385 = cljs.core.first.call(null,seq__46344_46379__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_46385;
goog.events.fireListeners(n_46385,evt.type,false,evt);
}
{
var G__46386 = cljs.core.next.call(null,seq__46344_46379__$1);
var G__46387 = null;
var G__46388 = 0;
var G__46389 = 0;
seq__46344_46369 = G__46386;
chunk__46345_46370 = G__46387;
count__46346_46371 = G__46388;
i__46347_46372 = G__46389;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__46396_46402 = cljs.core.seq.call(null,evt_map);var chunk__46397_46403 = null;var count__46398_46404 = 0;var i__46399_46405 = 0;while(true){
if((i__46399_46405 < count__46398_46404))
{var vec__46400_46406 = cljs.core._nth.call(null,chunk__46397_46403,i__46399_46405);var k_46407 = cljs.core.nth.call(null,vec__46400_46406,0,null);var v_46408 = cljs.core.nth.call(null,vec__46400_46406,1,null);(evt[k_46407] = v_46408);
{
var G__46409 = seq__46396_46402;
var G__46410 = chunk__46397_46403;
var G__46411 = count__46398_46404;
var G__46412 = (i__46399_46405 + 1);
seq__46396_46402 = G__46409;
chunk__46397_46403 = G__46410;
count__46398_46404 = G__46411;
i__46399_46405 = G__46412;
continue;
}
} else
{var temp__4092__auto___46413 = cljs.core.seq.call(null,seq__46396_46402);if(temp__4092__auto___46413)
{var seq__46396_46414__$1 = temp__4092__auto___46413;if(cljs.core.chunked_seq_QMARK_.call(null,seq__46396_46414__$1))
{var c__4015__auto___46415 = cljs.core.chunk_first.call(null,seq__46396_46414__$1);{
var G__46416 = cljs.core.chunk_rest.call(null,seq__46396_46414__$1);
var G__46417 = c__4015__auto___46415;
var G__46418 = cljs.core.count.call(null,c__4015__auto___46415);
var G__46419 = 0;
seq__46396_46402 = G__46416;
chunk__46397_46403 = G__46417;
count__46398_46404 = G__46418;
i__46399_46405 = G__46419;
continue;
}
} else
{var vec__46401_46420 = cljs.core.first.call(null,seq__46396_46414__$1);var k_46421 = cljs.core.nth.call(null,vec__46401_46420,0,null);var v_46422 = cljs.core.nth.call(null,vec__46401_46420,1,null);(evt[k_46421] = v_46422);
{
var G__46423 = cljs.core.next.call(null,seq__46396_46414__$1);
var G__46424 = null;
var G__46425 = 0;
var G__46426 = 0;
seq__46396_46402 = G__46423;
chunk__46397_46403 = G__46424;
count__46398_46404 = G__46425;
i__46399_46405 = G__46426;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__46427_SHARP_){return goog.events.getListeners(p1__46427_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
