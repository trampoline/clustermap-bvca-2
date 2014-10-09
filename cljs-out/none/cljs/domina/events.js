// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj67551 = {};return obj67551;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t67555 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t67555 = (function (evt,f,create_listener_function,meta67556){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta67556 = meta67556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t67555.cljs$lang$type = true;
domina.events.t67555.cljs$lang$ctorStr = "domina.events/t67555";
domina.events.t67555.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t67555");
});
domina.events.t67555.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t67555.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t67555.prototype.domina$events$Event$ = true;
domina.events.t67555.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t67555.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t67555.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t67555.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t67555.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t67555.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t67555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67557){var self__ = this;
var _67557__$1 = this;return self__.meta67556;
});
domina.events.t67555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67557,meta67556__$1){var self__ = this;
var _67557__$1 = this;return (new domina.events.t67555(self__.evt,self__.f,self__.create_listener_function,meta67556__$1));
});
domina.events.__GT_t67555 = (function __GT_t67555(evt__$1,f__$1,create_listener_function__$1,meta67556){return (new domina.events.t67555(evt__$1,f__$1,create_listener_function__$1,meta67556));
});
}
return (new domina.events.t67555(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__67562(s__67563){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__67563__$1 = s__67563;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__67563__$1);if(temp__4126__auto__)
{var s__67563__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__67563__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__67563__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__67565 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__67564 = (0);while(true){
if((i__67564 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__67564);cljs.core.chunk_append.call(null,b__67565,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__67566 = (i__67564 + (1));
i__67564 = G__67566;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67565),iter__67562.call(null,cljs.core.chunk_rest.call(null,s__67563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__67565),null);
}
} else
{var node = cljs.core.first.call(null,s__67563__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__67562.call(null,cljs.core.rest.call(null,s__67563__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__67575 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__67576 = null;var count__67577 = (0);var i__67578 = (0);while(true){
if((i__67578 < count__67577))
{var node = cljs.core._nth.call(null,chunk__67576,i__67578);goog.events.removeAll(node);
{
var G__67583 = seq__67575;
var G__67584 = chunk__67576;
var G__67585 = count__67577;
var G__67586 = (i__67578 + (1));
seq__67575 = G__67583;
chunk__67576 = G__67584;
count__67577 = G__67585;
i__67578 = G__67586;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__67575);if(temp__4126__auto__)
{var seq__67575__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67575__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__67575__$1);{
var G__67587 = cljs.core.chunk_rest.call(null,seq__67575__$1);
var G__67588 = c__4314__auto__;
var G__67589 = cljs.core.count.call(null,c__4314__auto__);
var G__67590 = (0);
seq__67575 = G__67587;
chunk__67576 = G__67588;
count__67577 = G__67589;
i__67578 = G__67590;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__67575__$1);goog.events.removeAll(node);
{
var G__67591 = cljs.core.next.call(null,seq__67575__$1);
var G__67592 = null;
var G__67593 = (0);
var G__67594 = (0);
seq__67575 = G__67591;
chunk__67576 = G__67592;
count__67577 = G__67593;
i__67578 = G__67594;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__67579 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__67580 = null;var count__67581 = (0);var i__67582 = (0);while(true){
if((i__67582 < count__67581))
{var node = cljs.core._nth.call(null,chunk__67580,i__67582);goog.events.removeAll(node,type__$1);
{
var G__67595 = seq__67579;
var G__67596 = chunk__67580;
var G__67597 = count__67581;
var G__67598 = (i__67582 + (1));
seq__67579 = G__67595;
chunk__67580 = G__67596;
count__67581 = G__67597;
i__67582 = G__67598;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__67579);if(temp__4126__auto__)
{var seq__67579__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67579__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__67579__$1);{
var G__67599 = cljs.core.chunk_rest.call(null,seq__67579__$1);
var G__67600 = c__4314__auto__;
var G__67601 = cljs.core.count.call(null,c__4314__auto__);
var G__67602 = (0);
seq__67579 = G__67599;
chunk__67580 = G__67600;
count__67581 = G__67601;
i__67582 = G__67602;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__67579__$1);goog.events.removeAll(node,type__$1);
{
var G__67603 = cljs.core.next.call(null,seq__67579__$1);
var G__67604 = null;
var G__67605 = (0);
var G__67606 = (0);
seq__67579 = G__67603;
chunk__67580 = G__67604;
count__67581 = G__67605;
i__67582 = G__67606;
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
var G__67607 = parent;
var G__67608 = cljs.core.cons.call(null,parent,so_far);
n = G__67607;
so_far = G__67608;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__67617_67625 = cljs.core.seq.call(null,ancestors);var chunk__67618_67626 = null;var count__67619_67627 = (0);var i__67620_67628 = (0);while(true){
if((i__67620_67628 < count__67619_67627))
{var n_67629 = cljs.core._nth.call(null,chunk__67618_67626,i__67620_67628);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_67629;
goog.events.fireListeners(n_67629,evt.type,true,evt);
}
{
var G__67630 = seq__67617_67625;
var G__67631 = chunk__67618_67626;
var G__67632 = count__67619_67627;
var G__67633 = (i__67620_67628 + (1));
seq__67617_67625 = G__67630;
chunk__67618_67626 = G__67631;
count__67619_67627 = G__67632;
i__67620_67628 = G__67633;
continue;
}
} else
{var temp__4126__auto___67634 = cljs.core.seq.call(null,seq__67617_67625);if(temp__4126__auto___67634)
{var seq__67617_67635__$1 = temp__4126__auto___67634;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67617_67635__$1))
{var c__4314__auto___67636 = cljs.core.chunk_first.call(null,seq__67617_67635__$1);{
var G__67637 = cljs.core.chunk_rest.call(null,seq__67617_67635__$1);
var G__67638 = c__4314__auto___67636;
var G__67639 = cljs.core.count.call(null,c__4314__auto___67636);
var G__67640 = (0);
seq__67617_67625 = G__67637;
chunk__67618_67626 = G__67638;
count__67619_67627 = G__67639;
i__67620_67628 = G__67640;
continue;
}
} else
{var n_67641 = cljs.core.first.call(null,seq__67617_67635__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_67641;
goog.events.fireListeners(n_67641,evt.type,true,evt);
}
{
var G__67642 = cljs.core.next.call(null,seq__67617_67635__$1);
var G__67643 = null;
var G__67644 = (0);
var G__67645 = (0);
seq__67617_67625 = G__67642;
chunk__67618_67626 = G__67643;
count__67619_67627 = G__67644;
i__67620_67628 = G__67645;
continue;
}
}
} else
{}
}
break;
}
var seq__67621_67646 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__67622_67647 = null;var count__67623_67648 = (0);var i__67624_67649 = (0);while(true){
if((i__67624_67649 < count__67623_67648))
{var n_67650 = cljs.core._nth.call(null,chunk__67622_67647,i__67624_67649);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_67650;
goog.events.fireListeners(n_67650,evt.type,false,evt);
}
{
var G__67651 = seq__67621_67646;
var G__67652 = chunk__67622_67647;
var G__67653 = count__67623_67648;
var G__67654 = (i__67624_67649 + (1));
seq__67621_67646 = G__67651;
chunk__67622_67647 = G__67652;
count__67623_67648 = G__67653;
i__67624_67649 = G__67654;
continue;
}
} else
{var temp__4126__auto___67655 = cljs.core.seq.call(null,seq__67621_67646);if(temp__4126__auto___67655)
{var seq__67621_67656__$1 = temp__4126__auto___67655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67621_67656__$1))
{var c__4314__auto___67657 = cljs.core.chunk_first.call(null,seq__67621_67656__$1);{
var G__67658 = cljs.core.chunk_rest.call(null,seq__67621_67656__$1);
var G__67659 = c__4314__auto___67657;
var G__67660 = cljs.core.count.call(null,c__4314__auto___67657);
var G__67661 = (0);
seq__67621_67646 = G__67658;
chunk__67622_67647 = G__67659;
count__67623_67648 = G__67660;
i__67624_67649 = G__67661;
continue;
}
} else
{var n_67662 = cljs.core.first.call(null,seq__67621_67656__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_67662;
goog.events.fireListeners(n_67662,evt.type,false,evt);
}
{
var G__67663 = cljs.core.next.call(null,seq__67621_67656__$1);
var G__67664 = null;
var G__67665 = (0);
var G__67666 = (0);
seq__67621_67646 = G__67663;
chunk__67622_67647 = G__67664;
count__67623_67648 = G__67665;
i__67624_67649 = G__67666;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__67673_67679 = cljs.core.seq.call(null,evt_map);var chunk__67674_67680 = null;var count__67675_67681 = (0);var i__67676_67682 = (0);while(true){
if((i__67676_67682 < count__67675_67681))
{var vec__67677_67683 = cljs.core._nth.call(null,chunk__67674_67680,i__67676_67682);var k_67684 = cljs.core.nth.call(null,vec__67677_67683,(0),null);var v_67685 = cljs.core.nth.call(null,vec__67677_67683,(1),null);(evt[k_67684] = v_67685);
{
var G__67686 = seq__67673_67679;
var G__67687 = chunk__67674_67680;
var G__67688 = count__67675_67681;
var G__67689 = (i__67676_67682 + (1));
seq__67673_67679 = G__67686;
chunk__67674_67680 = G__67687;
count__67675_67681 = G__67688;
i__67676_67682 = G__67689;
continue;
}
} else
{var temp__4126__auto___67690 = cljs.core.seq.call(null,seq__67673_67679);if(temp__4126__auto___67690)
{var seq__67673_67691__$1 = temp__4126__auto___67690;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67673_67691__$1))
{var c__4314__auto___67692 = cljs.core.chunk_first.call(null,seq__67673_67691__$1);{
var G__67693 = cljs.core.chunk_rest.call(null,seq__67673_67691__$1);
var G__67694 = c__4314__auto___67692;
var G__67695 = cljs.core.count.call(null,c__4314__auto___67692);
var G__67696 = (0);
seq__67673_67679 = G__67693;
chunk__67674_67680 = G__67694;
count__67675_67681 = G__67695;
i__67676_67682 = G__67696;
continue;
}
} else
{var vec__67678_67697 = cljs.core.first.call(null,seq__67673_67691__$1);var k_67698 = cljs.core.nth.call(null,vec__67678_67697,(0),null);var v_67699 = cljs.core.nth.call(null,vec__67678_67697,(1),null);(evt[k_67698] = v_67699);
{
var G__67700 = cljs.core.next.call(null,seq__67673_67691__$1);
var G__67701 = null;
var G__67702 = (0);
var G__67703 = (0);
seq__67673_67679 = G__67700;
chunk__67674_67680 = G__67701;
count__67675_67681 = G__67702;
i__67676_67682 = G__67703;
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
return (function (p1__67704_SHARP_){return goog.events.getListeners(p1__67704_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map