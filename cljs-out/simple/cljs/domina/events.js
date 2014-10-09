// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37537 = {};return obj37537;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37541 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37541 = (function (evt,f,create_listener_function,meta37542){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37542 = meta37542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37541.cljs$lang$type = true;
domina.events.t37541.cljs$lang$ctorStr = "domina.events/t37541";
domina.events.t37541.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t37541");
});
domina.events.t37541.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37541.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t37541.prototype.domina$events$Event$ = true;
domina.events.t37541.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37541.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37541.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37541.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37541.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37541.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37543){var self__ = this;
var _37543__$1 = this;return self__.meta37542;
});
domina.events.t37541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37543,meta37542__$1){var self__ = this;
var _37543__$1 = this;return (new domina.events.t37541(self__.evt,self__.f,self__.create_listener_function,meta37542__$1));
});
domina.events.__GT_t37541 = (function __GT_t37541(evt__$1,f__$1,create_listener_function__$1,meta37542){return (new domina.events.t37541(evt__$1,f__$1,create_listener_function__$1,meta37542));
});
}
return (new domina.events.t37541(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__37548(s__37549){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__37549__$1 = s__37549;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__37549__$1);if(temp__4126__auto__)
{var s__37549__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37549__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__37549__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__37551 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__37550 = (0);while(true){
if((i__37550 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__37550);cljs.core.chunk_append.call(null,b__37551,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37552 = (i__37550 + (1));
i__37550 = G__37552;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37551),iter__37548.call(null,cljs.core.chunk_rest.call(null,s__37549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37551),null);
}
} else
{var node = cljs.core.first.call(null,s__37549__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37548.call(null,cljs.core.rest.call(null,s__37549__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37561 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37562 = null;var count__37563 = (0);var i__37564 = (0);while(true){
if((i__37564 < count__37563))
{var node = cljs.core._nth.call(null,chunk__37562,i__37564);goog.events.removeAll(node);
{
var G__37569 = seq__37561;
var G__37570 = chunk__37562;
var G__37571 = count__37563;
var G__37572 = (i__37564 + (1));
seq__37561 = G__37569;
chunk__37562 = G__37570;
count__37563 = G__37571;
i__37564 = G__37572;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37561);if(temp__4126__auto__)
{var seq__37561__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37561__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__37561__$1);{
var G__37573 = cljs.core.chunk_rest.call(null,seq__37561__$1);
var G__37574 = c__4314__auto__;
var G__37575 = cljs.core.count.call(null,c__4314__auto__);
var G__37576 = (0);
seq__37561 = G__37573;
chunk__37562 = G__37574;
count__37563 = G__37575;
i__37564 = G__37576;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37561__$1);goog.events.removeAll(node);
{
var G__37577 = cljs.core.next.call(null,seq__37561__$1);
var G__37578 = null;
var G__37579 = (0);
var G__37580 = (0);
seq__37561 = G__37577;
chunk__37562 = G__37578;
count__37563 = G__37579;
i__37564 = G__37580;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37565 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37566 = null;var count__37567 = (0);var i__37568 = (0);while(true){
if((i__37568 < count__37567))
{var node = cljs.core._nth.call(null,chunk__37566,i__37568);goog.events.removeAll(node,type__$1);
{
var G__37581 = seq__37565;
var G__37582 = chunk__37566;
var G__37583 = count__37567;
var G__37584 = (i__37568 + (1));
seq__37565 = G__37581;
chunk__37566 = G__37582;
count__37567 = G__37583;
i__37568 = G__37584;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__37565);if(temp__4126__auto__)
{var seq__37565__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37565__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__37565__$1);{
var G__37585 = cljs.core.chunk_rest.call(null,seq__37565__$1);
var G__37586 = c__4314__auto__;
var G__37587 = cljs.core.count.call(null,c__4314__auto__);
var G__37588 = (0);
seq__37565 = G__37585;
chunk__37566 = G__37586;
count__37567 = G__37587;
i__37568 = G__37588;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37565__$1);goog.events.removeAll(node,type__$1);
{
var G__37589 = cljs.core.next.call(null,seq__37565__$1);
var G__37590 = null;
var G__37591 = (0);
var G__37592 = (0);
seq__37565 = G__37589;
chunk__37566 = G__37590;
count__37567 = G__37591;
i__37568 = G__37592;
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
var G__37593 = parent;
var G__37594 = cljs.core.cons.call(null,parent,so_far);
n = G__37593;
so_far = G__37594;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37603_37611 = cljs.core.seq.call(null,ancestors);var chunk__37604_37612 = null;var count__37605_37613 = (0);var i__37606_37614 = (0);while(true){
if((i__37606_37614 < count__37605_37613))
{var n_37615 = cljs.core._nth.call(null,chunk__37604_37612,i__37606_37614);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37615;
goog.events.fireListeners(n_37615,evt.type,true,evt);
}
{
var G__37616 = seq__37603_37611;
var G__37617 = chunk__37604_37612;
var G__37618 = count__37605_37613;
var G__37619 = (i__37606_37614 + (1));
seq__37603_37611 = G__37616;
chunk__37604_37612 = G__37617;
count__37605_37613 = G__37618;
i__37606_37614 = G__37619;
continue;
}
} else
{var temp__4126__auto___37620 = cljs.core.seq.call(null,seq__37603_37611);if(temp__4126__auto___37620)
{var seq__37603_37621__$1 = temp__4126__auto___37620;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37603_37621__$1))
{var c__4314__auto___37622 = cljs.core.chunk_first.call(null,seq__37603_37621__$1);{
var G__37623 = cljs.core.chunk_rest.call(null,seq__37603_37621__$1);
var G__37624 = c__4314__auto___37622;
var G__37625 = cljs.core.count.call(null,c__4314__auto___37622);
var G__37626 = (0);
seq__37603_37611 = G__37623;
chunk__37604_37612 = G__37624;
count__37605_37613 = G__37625;
i__37606_37614 = G__37626;
continue;
}
} else
{var n_37627 = cljs.core.first.call(null,seq__37603_37621__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37627;
goog.events.fireListeners(n_37627,evt.type,true,evt);
}
{
var G__37628 = cljs.core.next.call(null,seq__37603_37621__$1);
var G__37629 = null;
var G__37630 = (0);
var G__37631 = (0);
seq__37603_37611 = G__37628;
chunk__37604_37612 = G__37629;
count__37605_37613 = G__37630;
i__37606_37614 = G__37631;
continue;
}
}
} else
{}
}
break;
}
var seq__37607_37632 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37608_37633 = null;var count__37609_37634 = (0);var i__37610_37635 = (0);while(true){
if((i__37610_37635 < count__37609_37634))
{var n_37636 = cljs.core._nth.call(null,chunk__37608_37633,i__37610_37635);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37636;
goog.events.fireListeners(n_37636,evt.type,false,evt);
}
{
var G__37637 = seq__37607_37632;
var G__37638 = chunk__37608_37633;
var G__37639 = count__37609_37634;
var G__37640 = (i__37610_37635 + (1));
seq__37607_37632 = G__37637;
chunk__37608_37633 = G__37638;
count__37609_37634 = G__37639;
i__37610_37635 = G__37640;
continue;
}
} else
{var temp__4126__auto___37641 = cljs.core.seq.call(null,seq__37607_37632);if(temp__4126__auto___37641)
{var seq__37607_37642__$1 = temp__4126__auto___37641;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37607_37642__$1))
{var c__4314__auto___37643 = cljs.core.chunk_first.call(null,seq__37607_37642__$1);{
var G__37644 = cljs.core.chunk_rest.call(null,seq__37607_37642__$1);
var G__37645 = c__4314__auto___37643;
var G__37646 = cljs.core.count.call(null,c__4314__auto___37643);
var G__37647 = (0);
seq__37607_37632 = G__37644;
chunk__37608_37633 = G__37645;
count__37609_37634 = G__37646;
i__37610_37635 = G__37647;
continue;
}
} else
{var n_37648 = cljs.core.first.call(null,seq__37607_37642__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37648;
goog.events.fireListeners(n_37648,evt.type,false,evt);
}
{
var G__37649 = cljs.core.next.call(null,seq__37607_37642__$1);
var G__37650 = null;
var G__37651 = (0);
var G__37652 = (0);
seq__37607_37632 = G__37649;
chunk__37608_37633 = G__37650;
count__37609_37634 = G__37651;
i__37610_37635 = G__37652;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37659_37665 = cljs.core.seq.call(null,evt_map);var chunk__37660_37666 = null;var count__37661_37667 = (0);var i__37662_37668 = (0);while(true){
if((i__37662_37668 < count__37661_37667))
{var vec__37663_37669 = cljs.core._nth.call(null,chunk__37660_37666,i__37662_37668);var k_37670 = cljs.core.nth.call(null,vec__37663_37669,(0),null);var v_37671 = cljs.core.nth.call(null,vec__37663_37669,(1),null);(evt[k_37670] = v_37671);
{
var G__37672 = seq__37659_37665;
var G__37673 = chunk__37660_37666;
var G__37674 = count__37661_37667;
var G__37675 = (i__37662_37668 + (1));
seq__37659_37665 = G__37672;
chunk__37660_37666 = G__37673;
count__37661_37667 = G__37674;
i__37662_37668 = G__37675;
continue;
}
} else
{var temp__4126__auto___37676 = cljs.core.seq.call(null,seq__37659_37665);if(temp__4126__auto___37676)
{var seq__37659_37677__$1 = temp__4126__auto___37676;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37659_37677__$1))
{var c__4314__auto___37678 = cljs.core.chunk_first.call(null,seq__37659_37677__$1);{
var G__37679 = cljs.core.chunk_rest.call(null,seq__37659_37677__$1);
var G__37680 = c__4314__auto___37678;
var G__37681 = cljs.core.count.call(null,c__4314__auto___37678);
var G__37682 = (0);
seq__37659_37665 = G__37679;
chunk__37660_37666 = G__37680;
count__37661_37667 = G__37681;
i__37662_37668 = G__37682;
continue;
}
} else
{var vec__37664_37683 = cljs.core.first.call(null,seq__37659_37677__$1);var k_37684 = cljs.core.nth.call(null,vec__37664_37683,(0),null);var v_37685 = cljs.core.nth.call(null,vec__37664_37683,(1),null);(evt[k_37684] = v_37685);
{
var G__37686 = cljs.core.next.call(null,seq__37659_37677__$1);
var G__37687 = null;
var G__37688 = (0);
var G__37689 = (0);
seq__37659_37665 = G__37686;
chunk__37660_37666 = G__37687;
count__37661_37667 = G__37688;
i__37662_37668 = G__37689;
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
return (function (p1__37690_SHARP_){return goog.events.getListeners(p1__37690_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
