// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj58322 = {};return obj58322;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t58326 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t58326 = (function (evt,f,create_listener_function,meta58327){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta58327 = meta58327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t58326.cljs$lang$type = true;
domina.events.t58326.cljs$lang$ctorStr = "domina.events/t58326";
domina.events.t58326.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t58326");
});
domina.events.t58326.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t58326.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t58326.prototype.domina$events$Event$ = true;
domina.events.t58326.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t58326.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t58326.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t58326.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t58326.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t58326.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t58326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58328){var self__ = this;
var _58328__$1 = this;return self__.meta58327;
});
domina.events.t58326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58328,meta58327__$1){var self__ = this;
var _58328__$1 = this;return (new domina.events.t58326(self__.evt,self__.f,self__.create_listener_function,meta58327__$1));
});
domina.events.__GT_t58326 = (function __GT_t58326(evt__$1,f__$1,create_listener_function__$1,meta58327){return (new domina.events.t58326(evt__$1,f__$1,create_listener_function__$1,meta58327));
});
}
return (new domina.events.t58326(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__58333(s__58334){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__58334__$1 = s__58334;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58334__$1);if(temp__4126__auto__)
{var s__58334__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58334__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58334__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58336 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58335 = (0);while(true){
if((i__58335 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__58335);cljs.core.chunk_append.call(null,b__58336,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__58337 = (i__58335 + (1));
i__58335 = G__58337;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58336),iter__58333.call(null,cljs.core.chunk_rest.call(null,s__58334__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58336),null);
}
} else
{var node = cljs.core.first.call(null,s__58334__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__58333.call(null,cljs.core.rest.call(null,s__58334__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__58346 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__58347 = null;var count__58348 = (0);var i__58349 = (0);while(true){
if((i__58349 < count__58348))
{var node = cljs.core._nth.call(null,chunk__58347,i__58349);goog.events.removeAll(node);
{
var G__58354 = seq__58346;
var G__58355 = chunk__58347;
var G__58356 = count__58348;
var G__58357 = (i__58349 + (1));
seq__58346 = G__58354;
chunk__58347 = G__58355;
count__58348 = G__58356;
i__58349 = G__58357;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__58346);if(temp__4126__auto__)
{var seq__58346__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58346__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__58346__$1);{
var G__58358 = cljs.core.chunk_rest.call(null,seq__58346__$1);
var G__58359 = c__4314__auto__;
var G__58360 = cljs.core.count.call(null,c__4314__auto__);
var G__58361 = (0);
seq__58346 = G__58358;
chunk__58347 = G__58359;
count__58348 = G__58360;
i__58349 = G__58361;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__58346__$1);goog.events.removeAll(node);
{
var G__58362 = cljs.core.next.call(null,seq__58346__$1);
var G__58363 = null;
var G__58364 = (0);
var G__58365 = (0);
seq__58346 = G__58362;
chunk__58347 = G__58363;
count__58348 = G__58364;
i__58349 = G__58365;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__58350 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__58351 = null;var count__58352 = (0);var i__58353 = (0);while(true){
if((i__58353 < count__58352))
{var node = cljs.core._nth.call(null,chunk__58351,i__58353);goog.events.removeAll(node,type__$1);
{
var G__58366 = seq__58350;
var G__58367 = chunk__58351;
var G__58368 = count__58352;
var G__58369 = (i__58353 + (1));
seq__58350 = G__58366;
chunk__58351 = G__58367;
count__58352 = G__58368;
i__58353 = G__58369;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__58350);if(temp__4126__auto__)
{var seq__58350__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58350__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__58350__$1);{
var G__58370 = cljs.core.chunk_rest.call(null,seq__58350__$1);
var G__58371 = c__4314__auto__;
var G__58372 = cljs.core.count.call(null,c__4314__auto__);
var G__58373 = (0);
seq__58350 = G__58370;
chunk__58351 = G__58371;
count__58352 = G__58372;
i__58353 = G__58373;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__58350__$1);goog.events.removeAll(node,type__$1);
{
var G__58374 = cljs.core.next.call(null,seq__58350__$1);
var G__58375 = null;
var G__58376 = (0);
var G__58377 = (0);
seq__58350 = G__58374;
chunk__58351 = G__58375;
count__58352 = G__58376;
i__58353 = G__58377;
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
var G__58378 = parent;
var G__58379 = cljs.core.cons.call(null,parent,so_far);
n = G__58378;
so_far = G__58379;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__58388_58396 = cljs.core.seq.call(null,ancestors);var chunk__58389_58397 = null;var count__58390_58398 = (0);var i__58391_58399 = (0);while(true){
if((i__58391_58399 < count__58390_58398))
{var n_58400 = cljs.core._nth.call(null,chunk__58389_58397,i__58391_58399);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_58400;
goog.events.fireListeners(n_58400,evt.type,true,evt);
}
{
var G__58401 = seq__58388_58396;
var G__58402 = chunk__58389_58397;
var G__58403 = count__58390_58398;
var G__58404 = (i__58391_58399 + (1));
seq__58388_58396 = G__58401;
chunk__58389_58397 = G__58402;
count__58390_58398 = G__58403;
i__58391_58399 = G__58404;
continue;
}
} else
{var temp__4126__auto___58405 = cljs.core.seq.call(null,seq__58388_58396);if(temp__4126__auto___58405)
{var seq__58388_58406__$1 = temp__4126__auto___58405;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58388_58406__$1))
{var c__4314__auto___58407 = cljs.core.chunk_first.call(null,seq__58388_58406__$1);{
var G__58408 = cljs.core.chunk_rest.call(null,seq__58388_58406__$1);
var G__58409 = c__4314__auto___58407;
var G__58410 = cljs.core.count.call(null,c__4314__auto___58407);
var G__58411 = (0);
seq__58388_58396 = G__58408;
chunk__58389_58397 = G__58409;
count__58390_58398 = G__58410;
i__58391_58399 = G__58411;
continue;
}
} else
{var n_58412 = cljs.core.first.call(null,seq__58388_58406__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_58412;
goog.events.fireListeners(n_58412,evt.type,true,evt);
}
{
var G__58413 = cljs.core.next.call(null,seq__58388_58406__$1);
var G__58414 = null;
var G__58415 = (0);
var G__58416 = (0);
seq__58388_58396 = G__58413;
chunk__58389_58397 = G__58414;
count__58390_58398 = G__58415;
i__58391_58399 = G__58416;
continue;
}
}
} else
{}
}
break;
}
var seq__58392_58417 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__58393_58418 = null;var count__58394_58419 = (0);var i__58395_58420 = (0);while(true){
if((i__58395_58420 < count__58394_58419))
{var n_58421 = cljs.core._nth.call(null,chunk__58393_58418,i__58395_58420);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_58421;
goog.events.fireListeners(n_58421,evt.type,false,evt);
}
{
var G__58422 = seq__58392_58417;
var G__58423 = chunk__58393_58418;
var G__58424 = count__58394_58419;
var G__58425 = (i__58395_58420 + (1));
seq__58392_58417 = G__58422;
chunk__58393_58418 = G__58423;
count__58394_58419 = G__58424;
i__58395_58420 = G__58425;
continue;
}
} else
{var temp__4126__auto___58426 = cljs.core.seq.call(null,seq__58392_58417);if(temp__4126__auto___58426)
{var seq__58392_58427__$1 = temp__4126__auto___58426;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58392_58427__$1))
{var c__4314__auto___58428 = cljs.core.chunk_first.call(null,seq__58392_58427__$1);{
var G__58429 = cljs.core.chunk_rest.call(null,seq__58392_58427__$1);
var G__58430 = c__4314__auto___58428;
var G__58431 = cljs.core.count.call(null,c__4314__auto___58428);
var G__58432 = (0);
seq__58392_58417 = G__58429;
chunk__58393_58418 = G__58430;
count__58394_58419 = G__58431;
i__58395_58420 = G__58432;
continue;
}
} else
{var n_58433 = cljs.core.first.call(null,seq__58392_58427__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_58433;
goog.events.fireListeners(n_58433,evt.type,false,evt);
}
{
var G__58434 = cljs.core.next.call(null,seq__58392_58427__$1);
var G__58435 = null;
var G__58436 = (0);
var G__58437 = (0);
seq__58392_58417 = G__58434;
chunk__58393_58418 = G__58435;
count__58394_58419 = G__58436;
i__58395_58420 = G__58437;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__58444_58450 = cljs.core.seq.call(null,evt_map);var chunk__58445_58451 = null;var count__58446_58452 = (0);var i__58447_58453 = (0);while(true){
if((i__58447_58453 < count__58446_58452))
{var vec__58448_58454 = cljs.core._nth.call(null,chunk__58445_58451,i__58447_58453);var k_58455 = cljs.core.nth.call(null,vec__58448_58454,(0),null);var v_58456 = cljs.core.nth.call(null,vec__58448_58454,(1),null);(evt[k_58455] = v_58456);
{
var G__58457 = seq__58444_58450;
var G__58458 = chunk__58445_58451;
var G__58459 = count__58446_58452;
var G__58460 = (i__58447_58453 + (1));
seq__58444_58450 = G__58457;
chunk__58445_58451 = G__58458;
count__58446_58452 = G__58459;
i__58447_58453 = G__58460;
continue;
}
} else
{var temp__4126__auto___58461 = cljs.core.seq.call(null,seq__58444_58450);if(temp__4126__auto___58461)
{var seq__58444_58462__$1 = temp__4126__auto___58461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__58444_58462__$1))
{var c__4314__auto___58463 = cljs.core.chunk_first.call(null,seq__58444_58462__$1);{
var G__58464 = cljs.core.chunk_rest.call(null,seq__58444_58462__$1);
var G__58465 = c__4314__auto___58463;
var G__58466 = cljs.core.count.call(null,c__4314__auto___58463);
var G__58467 = (0);
seq__58444_58450 = G__58464;
chunk__58445_58451 = G__58465;
count__58446_58452 = G__58466;
i__58447_58453 = G__58467;
continue;
}
} else
{var vec__58449_58468 = cljs.core.first.call(null,seq__58444_58462__$1);var k_58469 = cljs.core.nth.call(null,vec__58449_58468,(0),null);var v_58470 = cljs.core.nth.call(null,vec__58449_58468,(1),null);(evt[k_58469] = v_58470);
{
var G__58471 = cljs.core.next.call(null,seq__58444_58462__$1);
var G__58472 = null;
var G__58473 = (0);
var G__58474 = (0);
seq__58444_58450 = G__58471;
chunk__58445_58451 = G__58472;
count__58446_58452 = G__58473;
i__58447_58453 = G__58474;
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
return (function (p1__58475_SHARP_){return goog.events.getListeners(p1__58475_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map