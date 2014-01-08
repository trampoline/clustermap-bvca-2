// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32422 = {};return obj32422;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32426 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32426 = (function (evt,f,create_listener_function,meta32427){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32427 = meta32427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32426.cljs$lang$type = true;
domina.events.t32426.cljs$lang$ctorStr = "domina.events/t32426";
domina.events.t32426.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t32426");
});
domina.events.t32426.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32426.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t32426.prototype.domina$events$Event$ = true;
domina.events.t32426.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32426.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32426.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32426.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32426.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32426.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32428){var self__ = this;
var _32428__$1 = this;return self__.meta32427;
});
domina.events.t32426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32428,meta32427__$1){var self__ = this;
var _32428__$1 = this;return (new domina.events.t32426(self__.evt,self__.f,self__.create_listener_function,meta32427__$1));
});
domina.events.__GT_t32426 = (function __GT_t32426(evt__$1,f__$1,create_listener_function__$1,meta32427){return (new domina.events.t32426(evt__$1,f__$1,create_listener_function__$1,meta32427));
});
}
return (new domina.events.t32426(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__32433(s__32434){return (new cljs.core.LazySeq(null,(function (){var s__32434__$1 = s__32434;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32434__$1);if(temp__4092__auto__)
{var s__32434__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32434__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32434__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32436 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32435 = 0;while(true){
if((i__32435 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__32435);cljs.core.chunk_append.call(null,b__32436,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32437 = (i__32435 + 1);
i__32435 = G__32437;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32436),iter__32433.call(null,cljs.core.chunk_rest.call(null,s__32434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32436),null);
}
} else
{var node = cljs.core.first.call(null,s__32434__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32433.call(null,cljs.core.rest.call(null,s__32434__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__32446 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32447 = null;var count__32448 = 0;var i__32449 = 0;while(true){
if((i__32449 < count__32448))
{var node = cljs.core._nth.call(null,chunk__32447,i__32449);goog.events.removeAll(node);
{
var G__32454 = seq__32446;
var G__32455 = chunk__32447;
var G__32456 = count__32448;
var G__32457 = (i__32449 + 1);
seq__32446 = G__32454;
chunk__32447 = G__32455;
count__32448 = G__32456;
i__32449 = G__32457;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32446);if(temp__4092__auto__)
{var seq__32446__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32446__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32446__$1);{
var G__32458 = cljs.core.chunk_rest.call(null,seq__32446__$1);
var G__32459 = c__4148__auto__;
var G__32460 = cljs.core.count.call(null,c__4148__auto__);
var G__32461 = 0;
seq__32446 = G__32458;
chunk__32447 = G__32459;
count__32448 = G__32460;
i__32449 = G__32461;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32446__$1);goog.events.removeAll(node);
{
var G__32462 = cljs.core.next.call(null,seq__32446__$1);
var G__32463 = null;
var G__32464 = 0;
var G__32465 = 0;
seq__32446 = G__32462;
chunk__32447 = G__32463;
count__32448 = G__32464;
i__32449 = G__32465;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32450 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32451 = null;var count__32452 = 0;var i__32453 = 0;while(true){
if((i__32453 < count__32452))
{var node = cljs.core._nth.call(null,chunk__32451,i__32453);goog.events.removeAll(node,type__$1);
{
var G__32466 = seq__32450;
var G__32467 = chunk__32451;
var G__32468 = count__32452;
var G__32469 = (i__32453 + 1);
seq__32450 = G__32466;
chunk__32451 = G__32467;
count__32452 = G__32468;
i__32453 = G__32469;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32450);if(temp__4092__auto__)
{var seq__32450__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32450__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32450__$1);{
var G__32470 = cljs.core.chunk_rest.call(null,seq__32450__$1);
var G__32471 = c__4148__auto__;
var G__32472 = cljs.core.count.call(null,c__4148__auto__);
var G__32473 = 0;
seq__32450 = G__32470;
chunk__32451 = G__32471;
count__32452 = G__32472;
i__32453 = G__32473;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32450__$1);goog.events.removeAll(node,type__$1);
{
var G__32474 = cljs.core.next.call(null,seq__32450__$1);
var G__32475 = null;
var G__32476 = 0;
var G__32477 = 0;
seq__32450 = G__32474;
chunk__32451 = G__32475;
count__32452 = G__32476;
i__32453 = G__32477;
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
var G__32478 = parent;
var G__32479 = cljs.core.cons.call(null,parent,so_far);
n = G__32478;
so_far = G__32479;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32488_32496 = cljs.core.seq.call(null,ancestors);var chunk__32489_32497 = null;var count__32490_32498 = 0;var i__32491_32499 = 0;while(true){
if((i__32491_32499 < count__32490_32498))
{var n_32500 = cljs.core._nth.call(null,chunk__32489_32497,i__32491_32499);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32500;
goog.events.fireListeners(n_32500,evt.type,true,evt);
}
{
var G__32501 = seq__32488_32496;
var G__32502 = chunk__32489_32497;
var G__32503 = count__32490_32498;
var G__32504 = (i__32491_32499 + 1);
seq__32488_32496 = G__32501;
chunk__32489_32497 = G__32502;
count__32490_32498 = G__32503;
i__32491_32499 = G__32504;
continue;
}
} else
{var temp__4092__auto___32505 = cljs.core.seq.call(null,seq__32488_32496);if(temp__4092__auto___32505)
{var seq__32488_32506__$1 = temp__4092__auto___32505;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32488_32506__$1))
{var c__4148__auto___32507 = cljs.core.chunk_first.call(null,seq__32488_32506__$1);{
var G__32508 = cljs.core.chunk_rest.call(null,seq__32488_32506__$1);
var G__32509 = c__4148__auto___32507;
var G__32510 = cljs.core.count.call(null,c__4148__auto___32507);
var G__32511 = 0;
seq__32488_32496 = G__32508;
chunk__32489_32497 = G__32509;
count__32490_32498 = G__32510;
i__32491_32499 = G__32511;
continue;
}
} else
{var n_32512 = cljs.core.first.call(null,seq__32488_32506__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32512;
goog.events.fireListeners(n_32512,evt.type,true,evt);
}
{
var G__32513 = cljs.core.next.call(null,seq__32488_32506__$1);
var G__32514 = null;
var G__32515 = 0;
var G__32516 = 0;
seq__32488_32496 = G__32513;
chunk__32489_32497 = G__32514;
count__32490_32498 = G__32515;
i__32491_32499 = G__32516;
continue;
}
}
} else
{}
}
break;
}
var seq__32492_32517 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32493_32518 = null;var count__32494_32519 = 0;var i__32495_32520 = 0;while(true){
if((i__32495_32520 < count__32494_32519))
{var n_32521 = cljs.core._nth.call(null,chunk__32493_32518,i__32495_32520);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32521;
goog.events.fireListeners(n_32521,evt.type,false,evt);
}
{
var G__32522 = seq__32492_32517;
var G__32523 = chunk__32493_32518;
var G__32524 = count__32494_32519;
var G__32525 = (i__32495_32520 + 1);
seq__32492_32517 = G__32522;
chunk__32493_32518 = G__32523;
count__32494_32519 = G__32524;
i__32495_32520 = G__32525;
continue;
}
} else
{var temp__4092__auto___32526 = cljs.core.seq.call(null,seq__32492_32517);if(temp__4092__auto___32526)
{var seq__32492_32527__$1 = temp__4092__auto___32526;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32492_32527__$1))
{var c__4148__auto___32528 = cljs.core.chunk_first.call(null,seq__32492_32527__$1);{
var G__32529 = cljs.core.chunk_rest.call(null,seq__32492_32527__$1);
var G__32530 = c__4148__auto___32528;
var G__32531 = cljs.core.count.call(null,c__4148__auto___32528);
var G__32532 = 0;
seq__32492_32517 = G__32529;
chunk__32493_32518 = G__32530;
count__32494_32519 = G__32531;
i__32495_32520 = G__32532;
continue;
}
} else
{var n_32533 = cljs.core.first.call(null,seq__32492_32527__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32533;
goog.events.fireListeners(n_32533,evt.type,false,evt);
}
{
var G__32534 = cljs.core.next.call(null,seq__32492_32527__$1);
var G__32535 = null;
var G__32536 = 0;
var G__32537 = 0;
seq__32492_32517 = G__32534;
chunk__32493_32518 = G__32535;
count__32494_32519 = G__32536;
i__32495_32520 = G__32537;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32544_32550 = cljs.core.seq.call(null,evt_map);var chunk__32545_32551 = null;var count__32546_32552 = 0;var i__32547_32553 = 0;while(true){
if((i__32547_32553 < count__32546_32552))
{var vec__32548_32554 = cljs.core._nth.call(null,chunk__32545_32551,i__32547_32553);var k_32555 = cljs.core.nth.call(null,vec__32548_32554,0,null);var v_32556 = cljs.core.nth.call(null,vec__32548_32554,1,null);(evt[k_32555] = v_32556);
{
var G__32557 = seq__32544_32550;
var G__32558 = chunk__32545_32551;
var G__32559 = count__32546_32552;
var G__32560 = (i__32547_32553 + 1);
seq__32544_32550 = G__32557;
chunk__32545_32551 = G__32558;
count__32546_32552 = G__32559;
i__32547_32553 = G__32560;
continue;
}
} else
{var temp__4092__auto___32561 = cljs.core.seq.call(null,seq__32544_32550);if(temp__4092__auto___32561)
{var seq__32544_32562__$1 = temp__4092__auto___32561;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32544_32562__$1))
{var c__4148__auto___32563 = cljs.core.chunk_first.call(null,seq__32544_32562__$1);{
var G__32564 = cljs.core.chunk_rest.call(null,seq__32544_32562__$1);
var G__32565 = c__4148__auto___32563;
var G__32566 = cljs.core.count.call(null,c__4148__auto___32563);
var G__32567 = 0;
seq__32544_32550 = G__32564;
chunk__32545_32551 = G__32565;
count__32546_32552 = G__32566;
i__32547_32553 = G__32567;
continue;
}
} else
{var vec__32549_32568 = cljs.core.first.call(null,seq__32544_32562__$1);var k_32569 = cljs.core.nth.call(null,vec__32549_32568,0,null);var v_32570 = cljs.core.nth.call(null,vec__32549_32568,1,null);(evt[k_32569] = v_32570);
{
var G__32571 = cljs.core.next.call(null,seq__32544_32562__$1);
var G__32572 = null;
var G__32573 = 0;
var G__32574 = 0;
seq__32544_32550 = G__32571;
chunk__32545_32551 = G__32572;
count__32546_32552 = G__32573;
i__32547_32553 = G__32574;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__32575_SHARP_){return goog.events.getListeners(p1__32575_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
