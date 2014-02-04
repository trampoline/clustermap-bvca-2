// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36637 = {};return obj36637;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36641 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36641 = (function (evt,f,create_listener_function,meta36642){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36642 = meta36642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36641.cljs$lang$type = true;
domina.events.t36641.cljs$lang$ctorStr = "domina.events/t36641";
domina.events.t36641.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36641");
});
domina.events.t36641.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36641.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36641.prototype.domina$events$Event$ = true;
domina.events.t36641.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36641.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36641.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36641.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36641.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36641.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36643){var self__ = this;
var _36643__$1 = this;return self__.meta36642;
});
domina.events.t36641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36643,meta36642__$1){var self__ = this;
var _36643__$1 = this;return (new domina.events.t36641(self__.evt,self__.f,self__.create_listener_function,meta36642__$1));
});
domina.events.__GT_t36641 = (function __GT_t36641(evt__$1,f__$1,create_listener_function__$1,meta36642){return (new domina.events.t36641(evt__$1,f__$1,create_listener_function__$1,meta36642));
});
}
return (new domina.events.t36641(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36648(s__36649){return (new cljs.core.LazySeq(null,(function (){var s__36649__$1 = s__36649;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36649__$1);if(temp__4092__auto__)
{var s__36649__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36649__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36649__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36651 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36650 = 0;while(true){
if((i__36650 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36650);cljs.core.chunk_append.call(null,b__36651,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36652 = (i__36650 + 1);
i__36650 = G__36652;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36651),iter__36648.call(null,cljs.core.chunk_rest.call(null,s__36649__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36651),null);
}
} else
{var node = cljs.core.first.call(null,s__36649__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36648.call(null,cljs.core.rest.call(null,s__36649__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36661 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36662 = null;var count__36663 = 0;var i__36664 = 0;while(true){
if((i__36664 < count__36663))
{var node = cljs.core._nth.call(null,chunk__36662,i__36664);goog.events.removeAll(node);
{
var G__36669 = seq__36661;
var G__36670 = chunk__36662;
var G__36671 = count__36663;
var G__36672 = (i__36664 + 1);
seq__36661 = G__36669;
chunk__36662 = G__36670;
count__36663 = G__36671;
i__36664 = G__36672;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36661);if(temp__4092__auto__)
{var seq__36661__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36661__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36661__$1);{
var G__36673 = cljs.core.chunk_rest.call(null,seq__36661__$1);
var G__36674 = c__4148__auto__;
var G__36675 = cljs.core.count.call(null,c__4148__auto__);
var G__36676 = 0;
seq__36661 = G__36673;
chunk__36662 = G__36674;
count__36663 = G__36675;
i__36664 = G__36676;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36661__$1);goog.events.removeAll(node);
{
var G__36677 = cljs.core.next.call(null,seq__36661__$1);
var G__36678 = null;
var G__36679 = 0;
var G__36680 = 0;
seq__36661 = G__36677;
chunk__36662 = G__36678;
count__36663 = G__36679;
i__36664 = G__36680;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36665 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36666 = null;var count__36667 = 0;var i__36668 = 0;while(true){
if((i__36668 < count__36667))
{var node = cljs.core._nth.call(null,chunk__36666,i__36668);goog.events.removeAll(node,type__$1);
{
var G__36681 = seq__36665;
var G__36682 = chunk__36666;
var G__36683 = count__36667;
var G__36684 = (i__36668 + 1);
seq__36665 = G__36681;
chunk__36666 = G__36682;
count__36667 = G__36683;
i__36668 = G__36684;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36665);if(temp__4092__auto__)
{var seq__36665__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36665__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36665__$1);{
var G__36685 = cljs.core.chunk_rest.call(null,seq__36665__$1);
var G__36686 = c__4148__auto__;
var G__36687 = cljs.core.count.call(null,c__4148__auto__);
var G__36688 = 0;
seq__36665 = G__36685;
chunk__36666 = G__36686;
count__36667 = G__36687;
i__36668 = G__36688;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36665__$1);goog.events.removeAll(node,type__$1);
{
var G__36689 = cljs.core.next.call(null,seq__36665__$1);
var G__36690 = null;
var G__36691 = 0;
var G__36692 = 0;
seq__36665 = G__36689;
chunk__36666 = G__36690;
count__36667 = G__36691;
i__36668 = G__36692;
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
var G__36693 = parent;
var G__36694 = cljs.core.cons.call(null,parent,so_far);
n = G__36693;
so_far = G__36694;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36703_36711 = cljs.core.seq.call(null,ancestors);var chunk__36704_36712 = null;var count__36705_36713 = 0;var i__36706_36714 = 0;while(true){
if((i__36706_36714 < count__36705_36713))
{var n_36715 = cljs.core._nth.call(null,chunk__36704_36712,i__36706_36714);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36715;
goog.events.fireListeners(n_36715,evt.type,true,evt);
}
{
var G__36716 = seq__36703_36711;
var G__36717 = chunk__36704_36712;
var G__36718 = count__36705_36713;
var G__36719 = (i__36706_36714 + 1);
seq__36703_36711 = G__36716;
chunk__36704_36712 = G__36717;
count__36705_36713 = G__36718;
i__36706_36714 = G__36719;
continue;
}
} else
{var temp__4092__auto___36720 = cljs.core.seq.call(null,seq__36703_36711);if(temp__4092__auto___36720)
{var seq__36703_36721__$1 = temp__4092__auto___36720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36703_36721__$1))
{var c__4148__auto___36722 = cljs.core.chunk_first.call(null,seq__36703_36721__$1);{
var G__36723 = cljs.core.chunk_rest.call(null,seq__36703_36721__$1);
var G__36724 = c__4148__auto___36722;
var G__36725 = cljs.core.count.call(null,c__4148__auto___36722);
var G__36726 = 0;
seq__36703_36711 = G__36723;
chunk__36704_36712 = G__36724;
count__36705_36713 = G__36725;
i__36706_36714 = G__36726;
continue;
}
} else
{var n_36727 = cljs.core.first.call(null,seq__36703_36721__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36727;
goog.events.fireListeners(n_36727,evt.type,true,evt);
}
{
var G__36728 = cljs.core.next.call(null,seq__36703_36721__$1);
var G__36729 = null;
var G__36730 = 0;
var G__36731 = 0;
seq__36703_36711 = G__36728;
chunk__36704_36712 = G__36729;
count__36705_36713 = G__36730;
i__36706_36714 = G__36731;
continue;
}
}
} else
{}
}
break;
}
var seq__36707_36732 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36708_36733 = null;var count__36709_36734 = 0;var i__36710_36735 = 0;while(true){
if((i__36710_36735 < count__36709_36734))
{var n_36736 = cljs.core._nth.call(null,chunk__36708_36733,i__36710_36735);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36736;
goog.events.fireListeners(n_36736,evt.type,false,evt);
}
{
var G__36737 = seq__36707_36732;
var G__36738 = chunk__36708_36733;
var G__36739 = count__36709_36734;
var G__36740 = (i__36710_36735 + 1);
seq__36707_36732 = G__36737;
chunk__36708_36733 = G__36738;
count__36709_36734 = G__36739;
i__36710_36735 = G__36740;
continue;
}
} else
{var temp__4092__auto___36741 = cljs.core.seq.call(null,seq__36707_36732);if(temp__4092__auto___36741)
{var seq__36707_36742__$1 = temp__4092__auto___36741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36707_36742__$1))
{var c__4148__auto___36743 = cljs.core.chunk_first.call(null,seq__36707_36742__$1);{
var G__36744 = cljs.core.chunk_rest.call(null,seq__36707_36742__$1);
var G__36745 = c__4148__auto___36743;
var G__36746 = cljs.core.count.call(null,c__4148__auto___36743);
var G__36747 = 0;
seq__36707_36732 = G__36744;
chunk__36708_36733 = G__36745;
count__36709_36734 = G__36746;
i__36710_36735 = G__36747;
continue;
}
} else
{var n_36748 = cljs.core.first.call(null,seq__36707_36742__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36748;
goog.events.fireListeners(n_36748,evt.type,false,evt);
}
{
var G__36749 = cljs.core.next.call(null,seq__36707_36742__$1);
var G__36750 = null;
var G__36751 = 0;
var G__36752 = 0;
seq__36707_36732 = G__36749;
chunk__36708_36733 = G__36750;
count__36709_36734 = G__36751;
i__36710_36735 = G__36752;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36759_36765 = cljs.core.seq.call(null,evt_map);var chunk__36760_36766 = null;var count__36761_36767 = 0;var i__36762_36768 = 0;while(true){
if((i__36762_36768 < count__36761_36767))
{var vec__36763_36769 = cljs.core._nth.call(null,chunk__36760_36766,i__36762_36768);var k_36770 = cljs.core.nth.call(null,vec__36763_36769,0,null);var v_36771 = cljs.core.nth.call(null,vec__36763_36769,1,null);(evt[k_36770] = v_36771);
{
var G__36772 = seq__36759_36765;
var G__36773 = chunk__36760_36766;
var G__36774 = count__36761_36767;
var G__36775 = (i__36762_36768 + 1);
seq__36759_36765 = G__36772;
chunk__36760_36766 = G__36773;
count__36761_36767 = G__36774;
i__36762_36768 = G__36775;
continue;
}
} else
{var temp__4092__auto___36776 = cljs.core.seq.call(null,seq__36759_36765);if(temp__4092__auto___36776)
{var seq__36759_36777__$1 = temp__4092__auto___36776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36759_36777__$1))
{var c__4148__auto___36778 = cljs.core.chunk_first.call(null,seq__36759_36777__$1);{
var G__36779 = cljs.core.chunk_rest.call(null,seq__36759_36777__$1);
var G__36780 = c__4148__auto___36778;
var G__36781 = cljs.core.count.call(null,c__4148__auto___36778);
var G__36782 = 0;
seq__36759_36765 = G__36779;
chunk__36760_36766 = G__36780;
count__36761_36767 = G__36781;
i__36762_36768 = G__36782;
continue;
}
} else
{var vec__36764_36783 = cljs.core.first.call(null,seq__36759_36777__$1);var k_36784 = cljs.core.nth.call(null,vec__36764_36783,0,null);var v_36785 = cljs.core.nth.call(null,vec__36764_36783,1,null);(evt[k_36784] = v_36785);
{
var G__36786 = cljs.core.next.call(null,seq__36759_36777__$1);
var G__36787 = null;
var G__36788 = 0;
var G__36789 = 0;
seq__36759_36765 = G__36786;
chunk__36760_36766 = G__36787;
count__36761_36767 = G__36788;
i__36762_36768 = G__36789;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36790_SHARP_){return goog.events.getListeners(p1__36790_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
