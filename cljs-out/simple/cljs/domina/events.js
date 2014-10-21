// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj42320 = {};return obj42320;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.prevent_default[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.prevent_default["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.current_target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.current_target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.event_type[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.event_type["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.raw_event[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.raw_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t42324 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t42324 = (function (evt,f,create_listener_function,meta42325){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta42325 = meta42325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t42324.cljs$lang$type = true;
domina.events.t42324.cljs$lang$ctorStr = "domina.events/t42324";
domina.events.t42324.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"domina.events/t42324");
});
domina.events.t42324.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t42324.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t42324.prototype.domina$events$Event$ = true;
domina.events.t42324.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t42324.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t42324.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t42324.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t42324.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t42324.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t42324.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42326){var self__ = this;
var _42326__$1 = this;return self__.meta42325;
});
domina.events.t42324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42326,meta42325__$1){var self__ = this;
var _42326__$1 = this;return (new domina.events.t42324(self__.evt,self__.f,self__.create_listener_function,meta42325__$1));
});
domina.events.__GT_t42324 = (function __GT_t42324(evt__$1,f__$1,create_listener_function__$1,meta42325){return (new domina.events.t42324(evt__$1,f__$1,create_listener_function__$1,meta42325));
});
}
return (new domina.events.t42324(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__42331(s__42332){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__42332__$1 = s__42332;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42332__$1);if(temp__4126__auto__)
{var s__42332__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__42332__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__42332__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__42334 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__42333 = (0);while(true){
if((i__42333 < size__4374__auto__))
{var node = cljs.core._nth.call(null,c__4373__auto__,i__42333);cljs.core.chunk_append.call(null,b__42334,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__42335 = (i__42333 + (1));
i__42333 = G__42335;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42334),iter__42331.call(null,cljs.core.chunk_rest.call(null,s__42332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42334),null);
}
} else
{var node = cljs.core.first.call(null,s__42332__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__42331.call(null,cljs.core.rest.call(null,s__42332__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4375__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__42344 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42345 = null;var count__42346 = (0);var i__42347 = (0);while(true){
if((i__42347 < count__42346))
{var node = cljs.core._nth.call(null,chunk__42345,i__42347);goog.events.removeAll(node);
{
var G__42352 = seq__42344;
var G__42353 = chunk__42345;
var G__42354 = count__42346;
var G__42355 = (i__42347 + (1));
seq__42344 = G__42352;
chunk__42345 = G__42353;
count__42346 = G__42354;
i__42347 = G__42355;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__42344);if(temp__4126__auto__)
{var seq__42344__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42344__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__42344__$1);{
var G__42356 = cljs.core.chunk_rest.call(null,seq__42344__$1);
var G__42357 = c__4406__auto__;
var G__42358 = cljs.core.count.call(null,c__4406__auto__);
var G__42359 = (0);
seq__42344 = G__42356;
chunk__42345 = G__42357;
count__42346 = G__42358;
i__42347 = G__42359;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__42344__$1);goog.events.removeAll(node);
{
var G__42360 = cljs.core.next.call(null,seq__42344__$1);
var G__42361 = null;
var G__42362 = (0);
var G__42363 = (0);
seq__42344 = G__42360;
chunk__42345 = G__42361;
count__42346 = G__42362;
i__42347 = G__42363;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__42348 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__42349 = null;var count__42350 = (0);var i__42351 = (0);while(true){
if((i__42351 < count__42350))
{var node = cljs.core._nth.call(null,chunk__42349,i__42351);goog.events.removeAll(node,type__$1);
{
var G__42364 = seq__42348;
var G__42365 = chunk__42349;
var G__42366 = count__42350;
var G__42367 = (i__42351 + (1));
seq__42348 = G__42364;
chunk__42349 = G__42365;
count__42350 = G__42366;
i__42351 = G__42367;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__42348);if(temp__4126__auto__)
{var seq__42348__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42348__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__42348__$1);{
var G__42368 = cljs.core.chunk_rest.call(null,seq__42348__$1);
var G__42369 = c__4406__auto__;
var G__42370 = cljs.core.count.call(null,c__4406__auto__);
var G__42371 = (0);
seq__42348 = G__42368;
chunk__42349 = G__42369;
count__42350 = G__42370;
i__42351 = G__42371;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__42348__$1);goog.events.removeAll(node,type__$1);
{
var G__42372 = cljs.core.next.call(null,seq__42348__$1);
var G__42373 = null;
var G__42374 = (0);
var G__42375 = (0);
seq__42348 = G__42372;
chunk__42349 = G__42373;
count__42350 = G__42374;
i__42351 = G__42375;
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
var G__42376 = parent;
var G__42377 = cljs.core.cons.call(null,parent,so_far);
n = G__42376;
so_far = G__42377;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__42386_42394 = cljs.core.seq.call(null,ancestors);var chunk__42387_42395 = null;var count__42388_42396 = (0);var i__42389_42397 = (0);while(true){
if((i__42389_42397 < count__42388_42396))
{var n_42398 = cljs.core._nth.call(null,chunk__42387_42395,i__42389_42397);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42398;
goog.events.fireListeners(n_42398,evt.type,true,evt);
}
{
var G__42399 = seq__42386_42394;
var G__42400 = chunk__42387_42395;
var G__42401 = count__42388_42396;
var G__42402 = (i__42389_42397 + (1));
seq__42386_42394 = G__42399;
chunk__42387_42395 = G__42400;
count__42388_42396 = G__42401;
i__42389_42397 = G__42402;
continue;
}
} else
{var temp__4126__auto___42403 = cljs.core.seq.call(null,seq__42386_42394);if(temp__4126__auto___42403)
{var seq__42386_42404__$1 = temp__4126__auto___42403;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42386_42404__$1))
{var c__4406__auto___42405 = cljs.core.chunk_first.call(null,seq__42386_42404__$1);{
var G__42406 = cljs.core.chunk_rest.call(null,seq__42386_42404__$1);
var G__42407 = c__4406__auto___42405;
var G__42408 = cljs.core.count.call(null,c__4406__auto___42405);
var G__42409 = (0);
seq__42386_42394 = G__42406;
chunk__42387_42395 = G__42407;
count__42388_42396 = G__42408;
i__42389_42397 = G__42409;
continue;
}
} else
{var n_42410 = cljs.core.first.call(null,seq__42386_42404__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42410;
goog.events.fireListeners(n_42410,evt.type,true,evt);
}
{
var G__42411 = cljs.core.next.call(null,seq__42386_42404__$1);
var G__42412 = null;
var G__42413 = (0);
var G__42414 = (0);
seq__42386_42394 = G__42411;
chunk__42387_42395 = G__42412;
count__42388_42396 = G__42413;
i__42389_42397 = G__42414;
continue;
}
}
} else
{}
}
break;
}
var seq__42390_42415 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__42391_42416 = null;var count__42392_42417 = (0);var i__42393_42418 = (0);while(true){
if((i__42393_42418 < count__42392_42417))
{var n_42419 = cljs.core._nth.call(null,chunk__42391_42416,i__42393_42418);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42419;
goog.events.fireListeners(n_42419,evt.type,false,evt);
}
{
var G__42420 = seq__42390_42415;
var G__42421 = chunk__42391_42416;
var G__42422 = count__42392_42417;
var G__42423 = (i__42393_42418 + (1));
seq__42390_42415 = G__42420;
chunk__42391_42416 = G__42421;
count__42392_42417 = G__42422;
i__42393_42418 = G__42423;
continue;
}
} else
{var temp__4126__auto___42424 = cljs.core.seq.call(null,seq__42390_42415);if(temp__4126__auto___42424)
{var seq__42390_42425__$1 = temp__4126__auto___42424;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42390_42425__$1))
{var c__4406__auto___42426 = cljs.core.chunk_first.call(null,seq__42390_42425__$1);{
var G__42427 = cljs.core.chunk_rest.call(null,seq__42390_42425__$1);
var G__42428 = c__4406__auto___42426;
var G__42429 = cljs.core.count.call(null,c__4406__auto___42426);
var G__42430 = (0);
seq__42390_42415 = G__42427;
chunk__42391_42416 = G__42428;
count__42392_42417 = G__42429;
i__42393_42418 = G__42430;
continue;
}
} else
{var n_42431 = cljs.core.first.call(null,seq__42390_42425__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_42431;
goog.events.fireListeners(n_42431,evt.type,false,evt);
}
{
var G__42432 = cljs.core.next.call(null,seq__42390_42425__$1);
var G__42433 = null;
var G__42434 = (0);
var G__42435 = (0);
seq__42390_42415 = G__42432;
chunk__42391_42416 = G__42433;
count__42392_42417 = G__42434;
i__42393_42418 = G__42435;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3625__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3625__auto__))
{return o.dispatchEvent;
} else
{return and__3625__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__42442_42448 = cljs.core.seq.call(null,evt_map);var chunk__42443_42449 = null;var count__42444_42450 = (0);var i__42445_42451 = (0);while(true){
if((i__42445_42451 < count__42444_42450))
{var vec__42446_42452 = cljs.core._nth.call(null,chunk__42443_42449,i__42445_42451);var k_42453 = cljs.core.nth.call(null,vec__42446_42452,(0),null);var v_42454 = cljs.core.nth.call(null,vec__42446_42452,(1),null);(evt[k_42453] = v_42454);
{
var G__42455 = seq__42442_42448;
var G__42456 = chunk__42443_42449;
var G__42457 = count__42444_42450;
var G__42458 = (i__42445_42451 + (1));
seq__42442_42448 = G__42455;
chunk__42443_42449 = G__42456;
count__42444_42450 = G__42457;
i__42445_42451 = G__42458;
continue;
}
} else
{var temp__4126__auto___42459 = cljs.core.seq.call(null,seq__42442_42448);if(temp__4126__auto___42459)
{var seq__42442_42460__$1 = temp__4126__auto___42459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__42442_42460__$1))
{var c__4406__auto___42461 = cljs.core.chunk_first.call(null,seq__42442_42460__$1);{
var G__42462 = cljs.core.chunk_rest.call(null,seq__42442_42460__$1);
var G__42463 = c__4406__auto___42461;
var G__42464 = cljs.core.count.call(null,c__4406__auto___42461);
var G__42465 = (0);
seq__42442_42448 = G__42462;
chunk__42443_42449 = G__42463;
count__42444_42450 = G__42464;
i__42445_42451 = G__42465;
continue;
}
} else
{var vec__42447_42466 = cljs.core.first.call(null,seq__42442_42460__$1);var k_42467 = cljs.core.nth.call(null,vec__42447_42466,(0),null);var v_42468 = cljs.core.nth.call(null,vec__42447_42466,(1),null);(evt[k_42467] = v_42468);
{
var G__42469 = cljs.core.next.call(null,seq__42442_42460__$1);
var G__42470 = null;
var G__42471 = (0);
var G__42472 = (0);
seq__42442_42448 = G__42469;
chunk__42443_42449 = G__42470;
count__42444_42450 = G__42471;
i__42445_42451 = G__42472;
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
return (function (p1__42473_SHARP_){return goog.events.getListeners(p1__42473_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
