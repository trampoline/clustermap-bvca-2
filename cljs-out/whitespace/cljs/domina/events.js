// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37578 = {};return obj37578;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37582 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37582 = (function (evt,f,create_listener_function,meta37583){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37583 = meta37583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37582.cljs$lang$type = true;
domina.events.t37582.cljs$lang$ctorStr = "domina.events/t37582";
domina.events.t37582.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t37582");
});
domina.events.t37582.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37582.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t37582.prototype.domina$events$Event$ = true;
domina.events.t37582.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37582.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37582.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37582.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37582.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37582.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37584){var self__ = this;
var _37584__$1 = this;return self__.meta37583;
});
domina.events.t37582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37584,meta37583__$1){var self__ = this;
var _37584__$1 = this;return (new domina.events.t37582(self__.evt,self__.f,self__.create_listener_function,meta37583__$1));
});
domina.events.__GT_t37582 = (function __GT_t37582(evt__$1,f__$1,create_listener_function__$1,meta37583){return (new domina.events.t37582(evt__$1,f__$1,create_listener_function__$1,meta37583));
});
}
return (new domina.events.t37582(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__37589(s__37590){return (new cljs.core.LazySeq(null,(function (){var s__37590__$1 = s__37590;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37590__$1);if(temp__4092__auto__)
{var s__37590__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37590__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37590__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37592 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37591 = 0;while(true){
if((i__37591 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__37591);cljs.core.chunk_append.call(null,b__37592,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37593 = (i__37591 + 1);
i__37591 = G__37593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37592),iter__37589.call(null,cljs.core.chunk_rest.call(null,s__37590__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37592),null);
}
} else
{var node = cljs.core.first.call(null,s__37590__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37589.call(null,cljs.core.rest.call(null,s__37590__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37602 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37603 = null;var count__37604 = 0;var i__37605 = 0;while(true){
if((i__37605 < count__37604))
{var node = cljs.core._nth.call(null,chunk__37603,i__37605);goog.events.removeAll(node);
{
var G__37610 = seq__37602;
var G__37611 = chunk__37603;
var G__37612 = count__37604;
var G__37613 = (i__37605 + 1);
seq__37602 = G__37610;
chunk__37603 = G__37611;
count__37604 = G__37612;
i__37605 = G__37613;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37602);if(temp__4092__auto__)
{var seq__37602__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37602__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37602__$1);{
var G__37614 = cljs.core.chunk_rest.call(null,seq__37602__$1);
var G__37615 = c__4148__auto__;
var G__37616 = cljs.core.count.call(null,c__4148__auto__);
var G__37617 = 0;
seq__37602 = G__37614;
chunk__37603 = G__37615;
count__37604 = G__37616;
i__37605 = G__37617;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37602__$1);goog.events.removeAll(node);
{
var G__37618 = cljs.core.next.call(null,seq__37602__$1);
var G__37619 = null;
var G__37620 = 0;
var G__37621 = 0;
seq__37602 = G__37618;
chunk__37603 = G__37619;
count__37604 = G__37620;
i__37605 = G__37621;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37606 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37607 = null;var count__37608 = 0;var i__37609 = 0;while(true){
if((i__37609 < count__37608))
{var node = cljs.core._nth.call(null,chunk__37607,i__37609);goog.events.removeAll(node,type__$1);
{
var G__37622 = seq__37606;
var G__37623 = chunk__37607;
var G__37624 = count__37608;
var G__37625 = (i__37609 + 1);
seq__37606 = G__37622;
chunk__37607 = G__37623;
count__37608 = G__37624;
i__37609 = G__37625;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37606);if(temp__4092__auto__)
{var seq__37606__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37606__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37606__$1);{
var G__37626 = cljs.core.chunk_rest.call(null,seq__37606__$1);
var G__37627 = c__4148__auto__;
var G__37628 = cljs.core.count.call(null,c__4148__auto__);
var G__37629 = 0;
seq__37606 = G__37626;
chunk__37607 = G__37627;
count__37608 = G__37628;
i__37609 = G__37629;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37606__$1);goog.events.removeAll(node,type__$1);
{
var G__37630 = cljs.core.next.call(null,seq__37606__$1);
var G__37631 = null;
var G__37632 = 0;
var G__37633 = 0;
seq__37606 = G__37630;
chunk__37607 = G__37631;
count__37608 = G__37632;
i__37609 = G__37633;
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
var G__37634 = parent;
var G__37635 = cljs.core.cons.call(null,parent,so_far);
n = G__37634;
so_far = G__37635;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37644_37652 = cljs.core.seq.call(null,ancestors);var chunk__37645_37653 = null;var count__37646_37654 = 0;var i__37647_37655 = 0;while(true){
if((i__37647_37655 < count__37646_37654))
{var n_37656 = cljs.core._nth.call(null,chunk__37645_37653,i__37647_37655);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37656;
goog.events.fireListeners(n_37656,evt.type,true,evt);
}
{
var G__37657 = seq__37644_37652;
var G__37658 = chunk__37645_37653;
var G__37659 = count__37646_37654;
var G__37660 = (i__37647_37655 + 1);
seq__37644_37652 = G__37657;
chunk__37645_37653 = G__37658;
count__37646_37654 = G__37659;
i__37647_37655 = G__37660;
continue;
}
} else
{var temp__4092__auto___37661 = cljs.core.seq.call(null,seq__37644_37652);if(temp__4092__auto___37661)
{var seq__37644_37662__$1 = temp__4092__auto___37661;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37644_37662__$1))
{var c__4148__auto___37663 = cljs.core.chunk_first.call(null,seq__37644_37662__$1);{
var G__37664 = cljs.core.chunk_rest.call(null,seq__37644_37662__$1);
var G__37665 = c__4148__auto___37663;
var G__37666 = cljs.core.count.call(null,c__4148__auto___37663);
var G__37667 = 0;
seq__37644_37652 = G__37664;
chunk__37645_37653 = G__37665;
count__37646_37654 = G__37666;
i__37647_37655 = G__37667;
continue;
}
} else
{var n_37668 = cljs.core.first.call(null,seq__37644_37662__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37668;
goog.events.fireListeners(n_37668,evt.type,true,evt);
}
{
var G__37669 = cljs.core.next.call(null,seq__37644_37662__$1);
var G__37670 = null;
var G__37671 = 0;
var G__37672 = 0;
seq__37644_37652 = G__37669;
chunk__37645_37653 = G__37670;
count__37646_37654 = G__37671;
i__37647_37655 = G__37672;
continue;
}
}
} else
{}
}
break;
}
var seq__37648_37673 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37649_37674 = null;var count__37650_37675 = 0;var i__37651_37676 = 0;while(true){
if((i__37651_37676 < count__37650_37675))
{var n_37677 = cljs.core._nth.call(null,chunk__37649_37674,i__37651_37676);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37677;
goog.events.fireListeners(n_37677,evt.type,false,evt);
}
{
var G__37678 = seq__37648_37673;
var G__37679 = chunk__37649_37674;
var G__37680 = count__37650_37675;
var G__37681 = (i__37651_37676 + 1);
seq__37648_37673 = G__37678;
chunk__37649_37674 = G__37679;
count__37650_37675 = G__37680;
i__37651_37676 = G__37681;
continue;
}
} else
{var temp__4092__auto___37682 = cljs.core.seq.call(null,seq__37648_37673);if(temp__4092__auto___37682)
{var seq__37648_37683__$1 = temp__4092__auto___37682;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37648_37683__$1))
{var c__4148__auto___37684 = cljs.core.chunk_first.call(null,seq__37648_37683__$1);{
var G__37685 = cljs.core.chunk_rest.call(null,seq__37648_37683__$1);
var G__37686 = c__4148__auto___37684;
var G__37687 = cljs.core.count.call(null,c__4148__auto___37684);
var G__37688 = 0;
seq__37648_37673 = G__37685;
chunk__37649_37674 = G__37686;
count__37650_37675 = G__37687;
i__37651_37676 = G__37688;
continue;
}
} else
{var n_37689 = cljs.core.first.call(null,seq__37648_37683__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37689;
goog.events.fireListeners(n_37689,evt.type,false,evt);
}
{
var G__37690 = cljs.core.next.call(null,seq__37648_37683__$1);
var G__37691 = null;
var G__37692 = 0;
var G__37693 = 0;
seq__37648_37673 = G__37690;
chunk__37649_37674 = G__37691;
count__37650_37675 = G__37692;
i__37651_37676 = G__37693;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37700_37706 = cljs.core.seq.call(null,evt_map);var chunk__37701_37707 = null;var count__37702_37708 = 0;var i__37703_37709 = 0;while(true){
if((i__37703_37709 < count__37702_37708))
{var vec__37704_37710 = cljs.core._nth.call(null,chunk__37701_37707,i__37703_37709);var k_37711 = cljs.core.nth.call(null,vec__37704_37710,0,null);var v_37712 = cljs.core.nth.call(null,vec__37704_37710,1,null);(evt[k_37711] = v_37712);
{
var G__37713 = seq__37700_37706;
var G__37714 = chunk__37701_37707;
var G__37715 = count__37702_37708;
var G__37716 = (i__37703_37709 + 1);
seq__37700_37706 = G__37713;
chunk__37701_37707 = G__37714;
count__37702_37708 = G__37715;
i__37703_37709 = G__37716;
continue;
}
} else
{var temp__4092__auto___37717 = cljs.core.seq.call(null,seq__37700_37706);if(temp__4092__auto___37717)
{var seq__37700_37718__$1 = temp__4092__auto___37717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37700_37718__$1))
{var c__4148__auto___37719 = cljs.core.chunk_first.call(null,seq__37700_37718__$1);{
var G__37720 = cljs.core.chunk_rest.call(null,seq__37700_37718__$1);
var G__37721 = c__4148__auto___37719;
var G__37722 = cljs.core.count.call(null,c__4148__auto___37719);
var G__37723 = 0;
seq__37700_37706 = G__37720;
chunk__37701_37707 = G__37721;
count__37702_37708 = G__37722;
i__37703_37709 = G__37723;
continue;
}
} else
{var vec__37705_37724 = cljs.core.first.call(null,seq__37700_37718__$1);var k_37725 = cljs.core.nth.call(null,vec__37705_37724,0,null);var v_37726 = cljs.core.nth.call(null,vec__37705_37724,1,null);(evt[k_37725] = v_37726);
{
var G__37727 = cljs.core.next.call(null,seq__37700_37718__$1);
var G__37728 = null;
var G__37729 = 0;
var G__37730 = 0;
seq__37700_37706 = G__37727;
chunk__37701_37707 = G__37728;
count__37702_37708 = G__37729;
i__37703_37709 = G__37730;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__37731_SHARP_){return goog.events.getListeners(p1__37731_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
