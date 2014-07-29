// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj55309 = {};return obj55309;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t55313 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t55313 = (function (evt,f,create_listener_function,meta55314){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta55314 = meta55314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t55313.cljs$lang$type = true;
domina.events.t55313.cljs$lang$ctorStr = "domina.events/t55313";
domina.events.t55313.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t55313");
});
domina.events.t55313.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t55313.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t55313.prototype.domina$events$Event$ = true;
domina.events.t55313.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t55313.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t55313.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t55313.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t55313.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t55313.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t55313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55315){var self__ = this;
var _55315__$1 = this;return self__.meta55314;
});
domina.events.t55313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55315,meta55314__$1){var self__ = this;
var _55315__$1 = this;return (new domina.events.t55313(self__.evt,self__.f,self__.create_listener_function,meta55314__$1));
});
domina.events.__GT_t55313 = (function __GT_t55313(evt__$1,f__$1,create_listener_function__$1,meta55314){return (new domina.events.t55313(evt__$1,f__$1,create_listener_function__$1,meta55314));
});
}
return (new domina.events.t55313(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__55320(s__55321){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__55321__$1 = s__55321;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__55321__$1);if(temp__4126__auto__)
{var s__55321__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__55321__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__55321__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__55323 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__55322 = (0);while(true){
if((i__55322 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__55322);cljs.core.chunk_append.call(null,b__55323,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__55324 = (i__55322 + (1));
i__55322 = G__55324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55323),iter__55320.call(null,cljs.core.chunk_rest.call(null,s__55321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__55323),null);
}
} else
{var node = cljs.core.first.call(null,s__55321__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__55320.call(null,cljs.core.rest.call(null,s__55321__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__55333 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55334 = null;var count__55335 = (0);var i__55336 = (0);while(true){
if((i__55336 < count__55335))
{var node = cljs.core._nth.call(null,chunk__55334,i__55336);goog.events.removeAll(node);
{
var G__55341 = seq__55333;
var G__55342 = chunk__55334;
var G__55343 = count__55335;
var G__55344 = (i__55336 + (1));
seq__55333 = G__55341;
chunk__55334 = G__55342;
count__55335 = G__55343;
i__55336 = G__55344;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55333);if(temp__4126__auto__)
{var seq__55333__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55333__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__55333__$1);{
var G__55345 = cljs.core.chunk_rest.call(null,seq__55333__$1);
var G__55346 = c__4299__auto__;
var G__55347 = cljs.core.count.call(null,c__4299__auto__);
var G__55348 = (0);
seq__55333 = G__55345;
chunk__55334 = G__55346;
count__55335 = G__55347;
i__55336 = G__55348;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__55333__$1);goog.events.removeAll(node);
{
var G__55349 = cljs.core.next.call(null,seq__55333__$1);
var G__55350 = null;
var G__55351 = (0);
var G__55352 = (0);
seq__55333 = G__55349;
chunk__55334 = G__55350;
count__55335 = G__55351;
i__55336 = G__55352;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__55337 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55338 = null;var count__55339 = (0);var i__55340 = (0);while(true){
if((i__55340 < count__55339))
{var node = cljs.core._nth.call(null,chunk__55338,i__55340);goog.events.removeAll(node,type__$1);
{
var G__55353 = seq__55337;
var G__55354 = chunk__55338;
var G__55355 = count__55339;
var G__55356 = (i__55340 + (1));
seq__55337 = G__55353;
chunk__55338 = G__55354;
count__55339 = G__55355;
i__55340 = G__55356;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55337);if(temp__4126__auto__)
{var seq__55337__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55337__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__55337__$1);{
var G__55357 = cljs.core.chunk_rest.call(null,seq__55337__$1);
var G__55358 = c__4299__auto__;
var G__55359 = cljs.core.count.call(null,c__4299__auto__);
var G__55360 = (0);
seq__55337 = G__55357;
chunk__55338 = G__55358;
count__55339 = G__55359;
i__55340 = G__55360;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__55337__$1);goog.events.removeAll(node,type__$1);
{
var G__55361 = cljs.core.next.call(null,seq__55337__$1);
var G__55362 = null;
var G__55363 = (0);
var G__55364 = (0);
seq__55337 = G__55361;
chunk__55338 = G__55362;
count__55339 = G__55363;
i__55340 = G__55364;
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
var G__55365 = parent;
var G__55366 = cljs.core.cons.call(null,parent,so_far);
n = G__55365;
so_far = G__55366;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__55375_55383 = cljs.core.seq.call(null,ancestors);var chunk__55376_55384 = null;var count__55377_55385 = (0);var i__55378_55386 = (0);while(true){
if((i__55378_55386 < count__55377_55385))
{var n_55387 = cljs.core._nth.call(null,chunk__55376_55384,i__55378_55386);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55387;
goog.events.fireListeners(n_55387,evt.type,true,evt);
}
{
var G__55388 = seq__55375_55383;
var G__55389 = chunk__55376_55384;
var G__55390 = count__55377_55385;
var G__55391 = (i__55378_55386 + (1));
seq__55375_55383 = G__55388;
chunk__55376_55384 = G__55389;
count__55377_55385 = G__55390;
i__55378_55386 = G__55391;
continue;
}
} else
{var temp__4126__auto___55392 = cljs.core.seq.call(null,seq__55375_55383);if(temp__4126__auto___55392)
{var seq__55375_55393__$1 = temp__4126__auto___55392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55375_55393__$1))
{var c__4299__auto___55394 = cljs.core.chunk_first.call(null,seq__55375_55393__$1);{
var G__55395 = cljs.core.chunk_rest.call(null,seq__55375_55393__$1);
var G__55396 = c__4299__auto___55394;
var G__55397 = cljs.core.count.call(null,c__4299__auto___55394);
var G__55398 = (0);
seq__55375_55383 = G__55395;
chunk__55376_55384 = G__55396;
count__55377_55385 = G__55397;
i__55378_55386 = G__55398;
continue;
}
} else
{var n_55399 = cljs.core.first.call(null,seq__55375_55393__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55399;
goog.events.fireListeners(n_55399,evt.type,true,evt);
}
{
var G__55400 = cljs.core.next.call(null,seq__55375_55393__$1);
var G__55401 = null;
var G__55402 = (0);
var G__55403 = (0);
seq__55375_55383 = G__55400;
chunk__55376_55384 = G__55401;
count__55377_55385 = G__55402;
i__55378_55386 = G__55403;
continue;
}
}
} else
{}
}
break;
}
var seq__55379_55404 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__55380_55405 = null;var count__55381_55406 = (0);var i__55382_55407 = (0);while(true){
if((i__55382_55407 < count__55381_55406))
{var n_55408 = cljs.core._nth.call(null,chunk__55380_55405,i__55382_55407);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55408;
goog.events.fireListeners(n_55408,evt.type,false,evt);
}
{
var G__55409 = seq__55379_55404;
var G__55410 = chunk__55380_55405;
var G__55411 = count__55381_55406;
var G__55412 = (i__55382_55407 + (1));
seq__55379_55404 = G__55409;
chunk__55380_55405 = G__55410;
count__55381_55406 = G__55411;
i__55382_55407 = G__55412;
continue;
}
} else
{var temp__4126__auto___55413 = cljs.core.seq.call(null,seq__55379_55404);if(temp__4126__auto___55413)
{var seq__55379_55414__$1 = temp__4126__auto___55413;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55379_55414__$1))
{var c__4299__auto___55415 = cljs.core.chunk_first.call(null,seq__55379_55414__$1);{
var G__55416 = cljs.core.chunk_rest.call(null,seq__55379_55414__$1);
var G__55417 = c__4299__auto___55415;
var G__55418 = cljs.core.count.call(null,c__4299__auto___55415);
var G__55419 = (0);
seq__55379_55404 = G__55416;
chunk__55380_55405 = G__55417;
count__55381_55406 = G__55418;
i__55382_55407 = G__55419;
continue;
}
} else
{var n_55420 = cljs.core.first.call(null,seq__55379_55414__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_55420;
goog.events.fireListeners(n_55420,evt.type,false,evt);
}
{
var G__55421 = cljs.core.next.call(null,seq__55379_55414__$1);
var G__55422 = null;
var G__55423 = (0);
var G__55424 = (0);
seq__55379_55404 = G__55421;
chunk__55380_55405 = G__55422;
count__55381_55406 = G__55423;
i__55382_55407 = G__55424;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__55431_55437 = cljs.core.seq.call(null,evt_map);var chunk__55432_55438 = null;var count__55433_55439 = (0);var i__55434_55440 = (0);while(true){
if((i__55434_55440 < count__55433_55439))
{var vec__55435_55441 = cljs.core._nth.call(null,chunk__55432_55438,i__55434_55440);var k_55442 = cljs.core.nth.call(null,vec__55435_55441,(0),null);var v_55443 = cljs.core.nth.call(null,vec__55435_55441,(1),null);(evt[k_55442] = v_55443);
{
var G__55444 = seq__55431_55437;
var G__55445 = chunk__55432_55438;
var G__55446 = count__55433_55439;
var G__55447 = (i__55434_55440 + (1));
seq__55431_55437 = G__55444;
chunk__55432_55438 = G__55445;
count__55433_55439 = G__55446;
i__55434_55440 = G__55447;
continue;
}
} else
{var temp__4126__auto___55448 = cljs.core.seq.call(null,seq__55431_55437);if(temp__4126__auto___55448)
{var seq__55431_55449__$1 = temp__4126__auto___55448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55431_55449__$1))
{var c__4299__auto___55450 = cljs.core.chunk_first.call(null,seq__55431_55449__$1);{
var G__55451 = cljs.core.chunk_rest.call(null,seq__55431_55449__$1);
var G__55452 = c__4299__auto___55450;
var G__55453 = cljs.core.count.call(null,c__4299__auto___55450);
var G__55454 = (0);
seq__55431_55437 = G__55451;
chunk__55432_55438 = G__55452;
count__55433_55439 = G__55453;
i__55434_55440 = G__55454;
continue;
}
} else
{var vec__55436_55455 = cljs.core.first.call(null,seq__55431_55449__$1);var k_55456 = cljs.core.nth.call(null,vec__55436_55455,(0),null);var v_55457 = cljs.core.nth.call(null,vec__55436_55455,(1),null);(evt[k_55456] = v_55457);
{
var G__55458 = cljs.core.next.call(null,seq__55431_55449__$1);
var G__55459 = null;
var G__55460 = (0);
var G__55461 = (0);
seq__55431_55437 = G__55458;
chunk__55432_55438 = G__55459;
count__55433_55439 = G__55460;
i__55434_55440 = G__55461;
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
return (function (p1__55462_SHARP_){return goog.events.getListeners(p1__55462_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map