// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj54301 = {};return obj54301;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t54305 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t54305 = (function (evt,f,create_listener_function,meta54306){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta54306 = meta54306;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t54305.cljs$lang$type = true;
domina.events.t54305.cljs$lang$ctorStr = "domina.events/t54305";
domina.events.t54305.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t54305");
});
domina.events.t54305.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t54305.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t54305.prototype.domina$events$Event$ = true;
domina.events.t54305.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t54305.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t54305.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t54305.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t54305.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t54305.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t54305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_54307){var self__ = this;
var _54307__$1 = this;return self__.meta54306;
});
domina.events.t54305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_54307,meta54306__$1){var self__ = this;
var _54307__$1 = this;return (new domina.events.t54305(self__.evt,self__.f,self__.create_listener_function,meta54306__$1));
});
domina.events.__GT_t54305 = (function __GT_t54305(evt__$1,f__$1,create_listener_function__$1,meta54306){return (new domina.events.t54305(evt__$1,f__$1,create_listener_function__$1,meta54306));
});
}
return (new domina.events.t54305(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__54312(s__54313){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__54313__$1 = s__54313;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__54313__$1);if(temp__4126__auto__)
{var s__54313__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__54313__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__54313__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__54315 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__54314 = (0);while(true){
if((i__54314 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__54314);cljs.core.chunk_append.call(null,b__54315,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__54316 = (i__54314 + (1));
i__54314 = G__54316;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54315),iter__54312.call(null,cljs.core.chunk_rest.call(null,s__54313__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54315),null);
}
} else
{var node = cljs.core.first.call(null,s__54313__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__54312.call(null,cljs.core.rest.call(null,s__54313__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__54325 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54326 = null;var count__54327 = (0);var i__54328 = (0);while(true){
if((i__54328 < count__54327))
{var node = cljs.core._nth.call(null,chunk__54326,i__54328);goog.events.removeAll(node);
{
var G__54333 = seq__54325;
var G__54334 = chunk__54326;
var G__54335 = count__54327;
var G__54336 = (i__54328 + (1));
seq__54325 = G__54333;
chunk__54326 = G__54334;
count__54327 = G__54335;
i__54328 = G__54336;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54325);if(temp__4126__auto__)
{var seq__54325__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54325__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__54325__$1);{
var G__54337 = cljs.core.chunk_rest.call(null,seq__54325__$1);
var G__54338 = c__4299__auto__;
var G__54339 = cljs.core.count.call(null,c__4299__auto__);
var G__54340 = (0);
seq__54325 = G__54337;
chunk__54326 = G__54338;
count__54327 = G__54339;
i__54328 = G__54340;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__54325__$1);goog.events.removeAll(node);
{
var G__54341 = cljs.core.next.call(null,seq__54325__$1);
var G__54342 = null;
var G__54343 = (0);
var G__54344 = (0);
seq__54325 = G__54341;
chunk__54326 = G__54342;
count__54327 = G__54343;
i__54328 = G__54344;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__54329 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__54330 = null;var count__54331 = (0);var i__54332 = (0);while(true){
if((i__54332 < count__54331))
{var node = cljs.core._nth.call(null,chunk__54330,i__54332);goog.events.removeAll(node,type__$1);
{
var G__54345 = seq__54329;
var G__54346 = chunk__54330;
var G__54347 = count__54331;
var G__54348 = (i__54332 + (1));
seq__54329 = G__54345;
chunk__54330 = G__54346;
count__54331 = G__54347;
i__54332 = G__54348;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__54329);if(temp__4126__auto__)
{var seq__54329__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54329__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__54329__$1);{
var G__54349 = cljs.core.chunk_rest.call(null,seq__54329__$1);
var G__54350 = c__4299__auto__;
var G__54351 = cljs.core.count.call(null,c__4299__auto__);
var G__54352 = (0);
seq__54329 = G__54349;
chunk__54330 = G__54350;
count__54331 = G__54351;
i__54332 = G__54352;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__54329__$1);goog.events.removeAll(node,type__$1);
{
var G__54353 = cljs.core.next.call(null,seq__54329__$1);
var G__54354 = null;
var G__54355 = (0);
var G__54356 = (0);
seq__54329 = G__54353;
chunk__54330 = G__54354;
count__54331 = G__54355;
i__54332 = G__54356;
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
var G__54357 = parent;
var G__54358 = cljs.core.cons.call(null,parent,so_far);
n = G__54357;
so_far = G__54358;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__54367_54375 = cljs.core.seq.call(null,ancestors);var chunk__54368_54376 = null;var count__54369_54377 = (0);var i__54370_54378 = (0);while(true){
if((i__54370_54378 < count__54369_54377))
{var n_54379 = cljs.core._nth.call(null,chunk__54368_54376,i__54370_54378);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_54379;
goog.events.fireListeners(n_54379,evt.type,true,evt);
}
{
var G__54380 = seq__54367_54375;
var G__54381 = chunk__54368_54376;
var G__54382 = count__54369_54377;
var G__54383 = (i__54370_54378 + (1));
seq__54367_54375 = G__54380;
chunk__54368_54376 = G__54381;
count__54369_54377 = G__54382;
i__54370_54378 = G__54383;
continue;
}
} else
{var temp__4126__auto___54384 = cljs.core.seq.call(null,seq__54367_54375);if(temp__4126__auto___54384)
{var seq__54367_54385__$1 = temp__4126__auto___54384;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54367_54385__$1))
{var c__4299__auto___54386 = cljs.core.chunk_first.call(null,seq__54367_54385__$1);{
var G__54387 = cljs.core.chunk_rest.call(null,seq__54367_54385__$1);
var G__54388 = c__4299__auto___54386;
var G__54389 = cljs.core.count.call(null,c__4299__auto___54386);
var G__54390 = (0);
seq__54367_54375 = G__54387;
chunk__54368_54376 = G__54388;
count__54369_54377 = G__54389;
i__54370_54378 = G__54390;
continue;
}
} else
{var n_54391 = cljs.core.first.call(null,seq__54367_54385__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_54391;
goog.events.fireListeners(n_54391,evt.type,true,evt);
}
{
var G__54392 = cljs.core.next.call(null,seq__54367_54385__$1);
var G__54393 = null;
var G__54394 = (0);
var G__54395 = (0);
seq__54367_54375 = G__54392;
chunk__54368_54376 = G__54393;
count__54369_54377 = G__54394;
i__54370_54378 = G__54395;
continue;
}
}
} else
{}
}
break;
}
var seq__54371_54396 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__54372_54397 = null;var count__54373_54398 = (0);var i__54374_54399 = (0);while(true){
if((i__54374_54399 < count__54373_54398))
{var n_54400 = cljs.core._nth.call(null,chunk__54372_54397,i__54374_54399);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_54400;
goog.events.fireListeners(n_54400,evt.type,false,evt);
}
{
var G__54401 = seq__54371_54396;
var G__54402 = chunk__54372_54397;
var G__54403 = count__54373_54398;
var G__54404 = (i__54374_54399 + (1));
seq__54371_54396 = G__54401;
chunk__54372_54397 = G__54402;
count__54373_54398 = G__54403;
i__54374_54399 = G__54404;
continue;
}
} else
{var temp__4126__auto___54405 = cljs.core.seq.call(null,seq__54371_54396);if(temp__4126__auto___54405)
{var seq__54371_54406__$1 = temp__4126__auto___54405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54371_54406__$1))
{var c__4299__auto___54407 = cljs.core.chunk_first.call(null,seq__54371_54406__$1);{
var G__54408 = cljs.core.chunk_rest.call(null,seq__54371_54406__$1);
var G__54409 = c__4299__auto___54407;
var G__54410 = cljs.core.count.call(null,c__4299__auto___54407);
var G__54411 = (0);
seq__54371_54396 = G__54408;
chunk__54372_54397 = G__54409;
count__54373_54398 = G__54410;
i__54374_54399 = G__54411;
continue;
}
} else
{var n_54412 = cljs.core.first.call(null,seq__54371_54406__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_54412;
goog.events.fireListeners(n_54412,evt.type,false,evt);
}
{
var G__54413 = cljs.core.next.call(null,seq__54371_54406__$1);
var G__54414 = null;
var G__54415 = (0);
var G__54416 = (0);
seq__54371_54396 = G__54413;
chunk__54372_54397 = G__54414;
count__54373_54398 = G__54415;
i__54374_54399 = G__54416;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__54423_54429 = cljs.core.seq.call(null,evt_map);var chunk__54424_54430 = null;var count__54425_54431 = (0);var i__54426_54432 = (0);while(true){
if((i__54426_54432 < count__54425_54431))
{var vec__54427_54433 = cljs.core._nth.call(null,chunk__54424_54430,i__54426_54432);var k_54434 = cljs.core.nth.call(null,vec__54427_54433,(0),null);var v_54435 = cljs.core.nth.call(null,vec__54427_54433,(1),null);(evt[k_54434] = v_54435);
{
var G__54436 = seq__54423_54429;
var G__54437 = chunk__54424_54430;
var G__54438 = count__54425_54431;
var G__54439 = (i__54426_54432 + (1));
seq__54423_54429 = G__54436;
chunk__54424_54430 = G__54437;
count__54425_54431 = G__54438;
i__54426_54432 = G__54439;
continue;
}
} else
{var temp__4126__auto___54440 = cljs.core.seq.call(null,seq__54423_54429);if(temp__4126__auto___54440)
{var seq__54423_54441__$1 = temp__4126__auto___54440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__54423_54441__$1))
{var c__4299__auto___54442 = cljs.core.chunk_first.call(null,seq__54423_54441__$1);{
var G__54443 = cljs.core.chunk_rest.call(null,seq__54423_54441__$1);
var G__54444 = c__4299__auto___54442;
var G__54445 = cljs.core.count.call(null,c__4299__auto___54442);
var G__54446 = (0);
seq__54423_54429 = G__54443;
chunk__54424_54430 = G__54444;
count__54425_54431 = G__54445;
i__54426_54432 = G__54446;
continue;
}
} else
{var vec__54428_54447 = cljs.core.first.call(null,seq__54423_54441__$1);var k_54448 = cljs.core.nth.call(null,vec__54428_54447,(0),null);var v_54449 = cljs.core.nth.call(null,vec__54428_54447,(1),null);(evt[k_54448] = v_54449);
{
var G__54450 = cljs.core.next.call(null,seq__54423_54441__$1);
var G__54451 = null;
var G__54452 = (0);
var G__54453 = (0);
seq__54423_54429 = G__54450;
chunk__54424_54430 = G__54451;
count__54425_54431 = G__54452;
i__54426_54432 = G__54453;
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
return (function (p1__54454_SHARP_){return goog.events.getListeners(p1__54454_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map