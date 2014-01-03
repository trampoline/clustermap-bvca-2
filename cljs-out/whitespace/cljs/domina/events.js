// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28460 = {};return obj28460;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28464 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28464 = (function (evt,f,create_listener_function,meta28465){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28465 = meta28465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28464.cljs$lang$type = true;
domina.events.t28464.cljs$lang$ctorStr = "domina.events/t28464";
domina.events.t28464.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t28464");
});
domina.events.t28464.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28464.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t28464.prototype.domina$events$Event$ = true;
domina.events.t28464.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28464.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28464.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28464.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28464.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28464.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28466){var self__ = this;
var _28466__$1 = this;return self__.meta28465;
});
domina.events.t28464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28466,meta28465__$1){var self__ = this;
var _28466__$1 = this;return (new domina.events.t28464(self__.evt,self__.f,self__.create_listener_function,meta28465__$1));
});
domina.events.__GT_t28464 = (function __GT_t28464(evt__$1,f__$1,create_listener_function__$1,meta28465){return (new domina.events.t28464(evt__$1,f__$1,create_listener_function__$1,meta28465));
});
}
return (new domina.events.t28464(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__28471(s__28472){return (new cljs.core.LazySeq(null,(function (){var s__28472__$1 = s__28472;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28472__$1);if(temp__4092__auto__)
{var s__28472__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28472__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__28472__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__28474 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__28473 = 0;while(true){
if((i__28473 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__28473);cljs.core.chunk_append.call(null,b__28474,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28475 = (i__28473 + 1);
i__28473 = G__28475;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28474),iter__28471.call(null,cljs.core.chunk_rest.call(null,s__28472__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28474),null);
}
} else
{var node = cljs.core.first.call(null,s__28472__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28471.call(null,cljs.core.rest.call(null,s__28472__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__28484 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28485 = null;var count__28486 = 0;var i__28487 = 0;while(true){
if((i__28487 < count__28486))
{var node = cljs.core._nth.call(null,chunk__28485,i__28487);goog.events.removeAll(node);
{
var G__28492 = seq__28484;
var G__28493 = chunk__28485;
var G__28494 = count__28486;
var G__28495 = (i__28487 + 1);
seq__28484 = G__28492;
chunk__28485 = G__28493;
count__28486 = G__28494;
i__28487 = G__28495;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28484);if(temp__4092__auto__)
{var seq__28484__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28484__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__28484__$1);{
var G__28496 = cljs.core.chunk_rest.call(null,seq__28484__$1);
var G__28497 = c__4148__auto__;
var G__28498 = cljs.core.count.call(null,c__4148__auto__);
var G__28499 = 0;
seq__28484 = G__28496;
chunk__28485 = G__28497;
count__28486 = G__28498;
i__28487 = G__28499;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28484__$1);goog.events.removeAll(node);
{
var G__28500 = cljs.core.next.call(null,seq__28484__$1);
var G__28501 = null;
var G__28502 = 0;
var G__28503 = 0;
seq__28484 = G__28500;
chunk__28485 = G__28501;
count__28486 = G__28502;
i__28487 = G__28503;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28488 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28489 = null;var count__28490 = 0;var i__28491 = 0;while(true){
if((i__28491 < count__28490))
{var node = cljs.core._nth.call(null,chunk__28489,i__28491);goog.events.removeAll(node,type__$1);
{
var G__28504 = seq__28488;
var G__28505 = chunk__28489;
var G__28506 = count__28490;
var G__28507 = (i__28491 + 1);
seq__28488 = G__28504;
chunk__28489 = G__28505;
count__28490 = G__28506;
i__28491 = G__28507;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28488);if(temp__4092__auto__)
{var seq__28488__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28488__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__28488__$1);{
var G__28508 = cljs.core.chunk_rest.call(null,seq__28488__$1);
var G__28509 = c__4148__auto__;
var G__28510 = cljs.core.count.call(null,c__4148__auto__);
var G__28511 = 0;
seq__28488 = G__28508;
chunk__28489 = G__28509;
count__28490 = G__28510;
i__28491 = G__28511;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28488__$1);goog.events.removeAll(node,type__$1);
{
var G__28512 = cljs.core.next.call(null,seq__28488__$1);
var G__28513 = null;
var G__28514 = 0;
var G__28515 = 0;
seq__28488 = G__28512;
chunk__28489 = G__28513;
count__28490 = G__28514;
i__28491 = G__28515;
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
var G__28516 = parent;
var G__28517 = cljs.core.cons.call(null,parent,so_far);
n = G__28516;
so_far = G__28517;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28526_28534 = cljs.core.seq.call(null,ancestors);var chunk__28527_28535 = null;var count__28528_28536 = 0;var i__28529_28537 = 0;while(true){
if((i__28529_28537 < count__28528_28536))
{var n_28538 = cljs.core._nth.call(null,chunk__28527_28535,i__28529_28537);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28538;
goog.events.fireListeners(n_28538,evt.type,true,evt);
}
{
var G__28539 = seq__28526_28534;
var G__28540 = chunk__28527_28535;
var G__28541 = count__28528_28536;
var G__28542 = (i__28529_28537 + 1);
seq__28526_28534 = G__28539;
chunk__28527_28535 = G__28540;
count__28528_28536 = G__28541;
i__28529_28537 = G__28542;
continue;
}
} else
{var temp__4092__auto___28543 = cljs.core.seq.call(null,seq__28526_28534);if(temp__4092__auto___28543)
{var seq__28526_28544__$1 = temp__4092__auto___28543;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28526_28544__$1))
{var c__4148__auto___28545 = cljs.core.chunk_first.call(null,seq__28526_28544__$1);{
var G__28546 = cljs.core.chunk_rest.call(null,seq__28526_28544__$1);
var G__28547 = c__4148__auto___28545;
var G__28548 = cljs.core.count.call(null,c__4148__auto___28545);
var G__28549 = 0;
seq__28526_28534 = G__28546;
chunk__28527_28535 = G__28547;
count__28528_28536 = G__28548;
i__28529_28537 = G__28549;
continue;
}
} else
{var n_28550 = cljs.core.first.call(null,seq__28526_28544__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28550;
goog.events.fireListeners(n_28550,evt.type,true,evt);
}
{
var G__28551 = cljs.core.next.call(null,seq__28526_28544__$1);
var G__28552 = null;
var G__28553 = 0;
var G__28554 = 0;
seq__28526_28534 = G__28551;
chunk__28527_28535 = G__28552;
count__28528_28536 = G__28553;
i__28529_28537 = G__28554;
continue;
}
}
} else
{}
}
break;
}
var seq__28530_28555 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28531_28556 = null;var count__28532_28557 = 0;var i__28533_28558 = 0;while(true){
if((i__28533_28558 < count__28532_28557))
{var n_28559 = cljs.core._nth.call(null,chunk__28531_28556,i__28533_28558);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28559;
goog.events.fireListeners(n_28559,evt.type,false,evt);
}
{
var G__28560 = seq__28530_28555;
var G__28561 = chunk__28531_28556;
var G__28562 = count__28532_28557;
var G__28563 = (i__28533_28558 + 1);
seq__28530_28555 = G__28560;
chunk__28531_28556 = G__28561;
count__28532_28557 = G__28562;
i__28533_28558 = G__28563;
continue;
}
} else
{var temp__4092__auto___28564 = cljs.core.seq.call(null,seq__28530_28555);if(temp__4092__auto___28564)
{var seq__28530_28565__$1 = temp__4092__auto___28564;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28530_28565__$1))
{var c__4148__auto___28566 = cljs.core.chunk_first.call(null,seq__28530_28565__$1);{
var G__28567 = cljs.core.chunk_rest.call(null,seq__28530_28565__$1);
var G__28568 = c__4148__auto___28566;
var G__28569 = cljs.core.count.call(null,c__4148__auto___28566);
var G__28570 = 0;
seq__28530_28555 = G__28567;
chunk__28531_28556 = G__28568;
count__28532_28557 = G__28569;
i__28533_28558 = G__28570;
continue;
}
} else
{var n_28571 = cljs.core.first.call(null,seq__28530_28565__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28571;
goog.events.fireListeners(n_28571,evt.type,false,evt);
}
{
var G__28572 = cljs.core.next.call(null,seq__28530_28565__$1);
var G__28573 = null;
var G__28574 = 0;
var G__28575 = 0;
seq__28530_28555 = G__28572;
chunk__28531_28556 = G__28573;
count__28532_28557 = G__28574;
i__28533_28558 = G__28575;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28582_28588 = cljs.core.seq.call(null,evt_map);var chunk__28583_28589 = null;var count__28584_28590 = 0;var i__28585_28591 = 0;while(true){
if((i__28585_28591 < count__28584_28590))
{var vec__28586_28592 = cljs.core._nth.call(null,chunk__28583_28589,i__28585_28591);var k_28593 = cljs.core.nth.call(null,vec__28586_28592,0,null);var v_28594 = cljs.core.nth.call(null,vec__28586_28592,1,null);(evt[k_28593] = v_28594);
{
var G__28595 = seq__28582_28588;
var G__28596 = chunk__28583_28589;
var G__28597 = count__28584_28590;
var G__28598 = (i__28585_28591 + 1);
seq__28582_28588 = G__28595;
chunk__28583_28589 = G__28596;
count__28584_28590 = G__28597;
i__28585_28591 = G__28598;
continue;
}
} else
{var temp__4092__auto___28599 = cljs.core.seq.call(null,seq__28582_28588);if(temp__4092__auto___28599)
{var seq__28582_28600__$1 = temp__4092__auto___28599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28582_28600__$1))
{var c__4148__auto___28601 = cljs.core.chunk_first.call(null,seq__28582_28600__$1);{
var G__28602 = cljs.core.chunk_rest.call(null,seq__28582_28600__$1);
var G__28603 = c__4148__auto___28601;
var G__28604 = cljs.core.count.call(null,c__4148__auto___28601);
var G__28605 = 0;
seq__28582_28588 = G__28602;
chunk__28583_28589 = G__28603;
count__28584_28590 = G__28604;
i__28585_28591 = G__28605;
continue;
}
} else
{var vec__28587_28606 = cljs.core.first.call(null,seq__28582_28600__$1);var k_28607 = cljs.core.nth.call(null,vec__28587_28606,0,null);var v_28608 = cljs.core.nth.call(null,vec__28587_28606,1,null);(evt[k_28607] = v_28608);
{
var G__28609 = cljs.core.next.call(null,seq__28582_28600__$1);
var G__28610 = null;
var G__28611 = 0;
var G__28612 = 0;
seq__28582_28588 = G__28609;
chunk__28583_28589 = G__28610;
count__28584_28590 = G__28611;
i__28585_28591 = G__28612;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__28613_SHARP_){return goog.events.getListeners(p1__28613_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
