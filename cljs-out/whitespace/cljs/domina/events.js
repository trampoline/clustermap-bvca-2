// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19543 = {};return obj19543;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19547 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19547 = (function (evt,f,create_listener_function,meta19548){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19548 = meta19548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19547.cljs$lang$type = true;
domina.events.t19547.cljs$lang$ctorStr = "domina.events/t19547";
domina.events.t19547.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t19547");
});
domina.events.t19547.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19547.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t19547.prototype.domina$events$Event$ = true;
domina.events.t19547.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19547.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19547.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19547.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19547.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19547.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19549){var self__ = this;
var _19549__$1 = this;return self__.meta19548;
});
domina.events.t19547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19549,meta19548__$1){var self__ = this;
var _19549__$1 = this;return (new domina.events.t19547(self__.evt,self__.f,self__.create_listener_function,meta19548__$1));
});
domina.events.__GT_t19547 = (function __GT_t19547(evt__$1,f__$1,create_listener_function__$1,meta19548){return (new domina.events.t19547(evt__$1,f__$1,create_listener_function__$1,meta19548));
});
}
return (new domina.events.t19547(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__19554(s__19555){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19555__$1 = s__19555;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19555__$1);if(temp__4126__auto__)
{var s__19555__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19555__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__19555__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__19557 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__19556 = (0);while(true){
if((i__19556 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__19556);cljs.core.chunk_append.call(null,b__19557,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19558 = (i__19556 + (1));
i__19556 = G__19558;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19557),iter__19554.call(null,cljs.core.chunk_rest.call(null,s__19555__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19557),null);
}
} else
{var node = cljs.core.first.call(null,s__19555__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19554.call(null,cljs.core.rest.call(null,s__19555__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19567 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19568 = null;var count__19569 = (0);var i__19570 = (0);while(true){
if((i__19570 < count__19569))
{var node = cljs.core._nth.call(null,chunk__19568,i__19570);goog.events.removeAll(node);
{
var G__19575 = seq__19567;
var G__19576 = chunk__19568;
var G__19577 = count__19569;
var G__19578 = (i__19570 + (1));
seq__19567 = G__19575;
chunk__19568 = G__19576;
count__19569 = G__19577;
i__19570 = G__19578;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19567);if(temp__4126__auto__)
{var seq__19567__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19567__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19567__$1);{
var G__19579 = cljs.core.chunk_rest.call(null,seq__19567__$1);
var G__19580 = c__4314__auto__;
var G__19581 = cljs.core.count.call(null,c__4314__auto__);
var G__19582 = (0);
seq__19567 = G__19579;
chunk__19568 = G__19580;
count__19569 = G__19581;
i__19570 = G__19582;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19567__$1);goog.events.removeAll(node);
{
var G__19583 = cljs.core.next.call(null,seq__19567__$1);
var G__19584 = null;
var G__19585 = (0);
var G__19586 = (0);
seq__19567 = G__19583;
chunk__19568 = G__19584;
count__19569 = G__19585;
i__19570 = G__19586;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19571 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19572 = null;var count__19573 = (0);var i__19574 = (0);while(true){
if((i__19574 < count__19573))
{var node = cljs.core._nth.call(null,chunk__19572,i__19574);goog.events.removeAll(node,type__$1);
{
var G__19587 = seq__19571;
var G__19588 = chunk__19572;
var G__19589 = count__19573;
var G__19590 = (i__19574 + (1));
seq__19571 = G__19587;
chunk__19572 = G__19588;
count__19573 = G__19589;
i__19574 = G__19590;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19571);if(temp__4126__auto__)
{var seq__19571__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19571__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__19571__$1);{
var G__19591 = cljs.core.chunk_rest.call(null,seq__19571__$1);
var G__19592 = c__4314__auto__;
var G__19593 = cljs.core.count.call(null,c__4314__auto__);
var G__19594 = (0);
seq__19571 = G__19591;
chunk__19572 = G__19592;
count__19573 = G__19593;
i__19574 = G__19594;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19571__$1);goog.events.removeAll(node,type__$1);
{
var G__19595 = cljs.core.next.call(null,seq__19571__$1);
var G__19596 = null;
var G__19597 = (0);
var G__19598 = (0);
seq__19571 = G__19595;
chunk__19572 = G__19596;
count__19573 = G__19597;
i__19574 = G__19598;
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
var G__19599 = parent;
var G__19600 = cljs.core.cons.call(null,parent,so_far);
n = G__19599;
so_far = G__19600;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19609_19617 = cljs.core.seq.call(null,ancestors);var chunk__19610_19618 = null;var count__19611_19619 = (0);var i__19612_19620 = (0);while(true){
if((i__19612_19620 < count__19611_19619))
{var n_19621 = cljs.core._nth.call(null,chunk__19610_19618,i__19612_19620);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19621;
goog.events.fireListeners(n_19621,evt.type,true,evt);
}
{
var G__19622 = seq__19609_19617;
var G__19623 = chunk__19610_19618;
var G__19624 = count__19611_19619;
var G__19625 = (i__19612_19620 + (1));
seq__19609_19617 = G__19622;
chunk__19610_19618 = G__19623;
count__19611_19619 = G__19624;
i__19612_19620 = G__19625;
continue;
}
} else
{var temp__4126__auto___19626 = cljs.core.seq.call(null,seq__19609_19617);if(temp__4126__auto___19626)
{var seq__19609_19627__$1 = temp__4126__auto___19626;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19609_19627__$1))
{var c__4314__auto___19628 = cljs.core.chunk_first.call(null,seq__19609_19627__$1);{
var G__19629 = cljs.core.chunk_rest.call(null,seq__19609_19627__$1);
var G__19630 = c__4314__auto___19628;
var G__19631 = cljs.core.count.call(null,c__4314__auto___19628);
var G__19632 = (0);
seq__19609_19617 = G__19629;
chunk__19610_19618 = G__19630;
count__19611_19619 = G__19631;
i__19612_19620 = G__19632;
continue;
}
} else
{var n_19633 = cljs.core.first.call(null,seq__19609_19627__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19633;
goog.events.fireListeners(n_19633,evt.type,true,evt);
}
{
var G__19634 = cljs.core.next.call(null,seq__19609_19627__$1);
var G__19635 = null;
var G__19636 = (0);
var G__19637 = (0);
seq__19609_19617 = G__19634;
chunk__19610_19618 = G__19635;
count__19611_19619 = G__19636;
i__19612_19620 = G__19637;
continue;
}
}
} else
{}
}
break;
}
var seq__19613_19638 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19614_19639 = null;var count__19615_19640 = (0);var i__19616_19641 = (0);while(true){
if((i__19616_19641 < count__19615_19640))
{var n_19642 = cljs.core._nth.call(null,chunk__19614_19639,i__19616_19641);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19642;
goog.events.fireListeners(n_19642,evt.type,false,evt);
}
{
var G__19643 = seq__19613_19638;
var G__19644 = chunk__19614_19639;
var G__19645 = count__19615_19640;
var G__19646 = (i__19616_19641 + (1));
seq__19613_19638 = G__19643;
chunk__19614_19639 = G__19644;
count__19615_19640 = G__19645;
i__19616_19641 = G__19646;
continue;
}
} else
{var temp__4126__auto___19647 = cljs.core.seq.call(null,seq__19613_19638);if(temp__4126__auto___19647)
{var seq__19613_19648__$1 = temp__4126__auto___19647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19613_19648__$1))
{var c__4314__auto___19649 = cljs.core.chunk_first.call(null,seq__19613_19648__$1);{
var G__19650 = cljs.core.chunk_rest.call(null,seq__19613_19648__$1);
var G__19651 = c__4314__auto___19649;
var G__19652 = cljs.core.count.call(null,c__4314__auto___19649);
var G__19653 = (0);
seq__19613_19638 = G__19650;
chunk__19614_19639 = G__19651;
count__19615_19640 = G__19652;
i__19616_19641 = G__19653;
continue;
}
} else
{var n_19654 = cljs.core.first.call(null,seq__19613_19648__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19654;
goog.events.fireListeners(n_19654,evt.type,false,evt);
}
{
var G__19655 = cljs.core.next.call(null,seq__19613_19648__$1);
var G__19656 = null;
var G__19657 = (0);
var G__19658 = (0);
seq__19613_19638 = G__19655;
chunk__19614_19639 = G__19656;
count__19615_19640 = G__19657;
i__19616_19641 = G__19658;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19665_19671 = cljs.core.seq.call(null,evt_map);var chunk__19666_19672 = null;var count__19667_19673 = (0);var i__19668_19674 = (0);while(true){
if((i__19668_19674 < count__19667_19673))
{var vec__19669_19675 = cljs.core._nth.call(null,chunk__19666_19672,i__19668_19674);var k_19676 = cljs.core.nth.call(null,vec__19669_19675,(0),null);var v_19677 = cljs.core.nth.call(null,vec__19669_19675,(1),null);(evt[k_19676] = v_19677);
{
var G__19678 = seq__19665_19671;
var G__19679 = chunk__19666_19672;
var G__19680 = count__19667_19673;
var G__19681 = (i__19668_19674 + (1));
seq__19665_19671 = G__19678;
chunk__19666_19672 = G__19679;
count__19667_19673 = G__19680;
i__19668_19674 = G__19681;
continue;
}
} else
{var temp__4126__auto___19682 = cljs.core.seq.call(null,seq__19665_19671);if(temp__4126__auto___19682)
{var seq__19665_19683__$1 = temp__4126__auto___19682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19665_19683__$1))
{var c__4314__auto___19684 = cljs.core.chunk_first.call(null,seq__19665_19683__$1);{
var G__19685 = cljs.core.chunk_rest.call(null,seq__19665_19683__$1);
var G__19686 = c__4314__auto___19684;
var G__19687 = cljs.core.count.call(null,c__4314__auto___19684);
var G__19688 = (0);
seq__19665_19671 = G__19685;
chunk__19666_19672 = G__19686;
count__19667_19673 = G__19687;
i__19668_19674 = G__19688;
continue;
}
} else
{var vec__19670_19689 = cljs.core.first.call(null,seq__19665_19683__$1);var k_19690 = cljs.core.nth.call(null,vec__19670_19689,(0),null);var v_19691 = cljs.core.nth.call(null,vec__19670_19689,(1),null);(evt[k_19690] = v_19691);
{
var G__19692 = cljs.core.next.call(null,seq__19665_19683__$1);
var G__19693 = null;
var G__19694 = (0);
var G__19695 = (0);
seq__19665_19671 = G__19692;
chunk__19666_19672 = G__19693;
count__19667_19673 = G__19694;
i__19668_19674 = G__19695;
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
return (function (p1__19696_SHARP_){return goog.events.getListeners(p1__19696_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
