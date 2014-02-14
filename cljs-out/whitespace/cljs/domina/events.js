// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37602 = {};return obj37602;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37606 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37606 = (function (evt,f,create_listener_function,meta37607){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37607 = meta37607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37606.cljs$lang$type = true;
domina.events.t37606.cljs$lang$ctorStr = "domina.events/t37606";
domina.events.t37606.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t37606");
});
domina.events.t37606.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37606.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t37606.prototype.domina$events$Event$ = true;
domina.events.t37606.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37606.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37606.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37606.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37606.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37606.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37608){var self__ = this;
var _37608__$1 = this;return self__.meta37607;
});
domina.events.t37606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37608,meta37607__$1){var self__ = this;
var _37608__$1 = this;return (new domina.events.t37606(self__.evt,self__.f,self__.create_listener_function,meta37607__$1));
});
domina.events.__GT_t37606 = (function __GT_t37606(evt__$1,f__$1,create_listener_function__$1,meta37607){return (new domina.events.t37606(evt__$1,f__$1,create_listener_function__$1,meta37607));
});
}
return (new domina.events.t37606(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__37613(s__37614){return (new cljs.core.LazySeq(null,(function (){var s__37614__$1 = s__37614;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37614__$1);if(temp__4092__auto__)
{var s__37614__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37614__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37614__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37616 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37615 = 0;while(true){
if((i__37615 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__37615);cljs.core.chunk_append.call(null,b__37616,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37617 = (i__37615 + 1);
i__37615 = G__37617;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37616),iter__37613.call(null,cljs.core.chunk_rest.call(null,s__37614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37616),null);
}
} else
{var node = cljs.core.first.call(null,s__37614__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37613.call(null,cljs.core.rest.call(null,s__37614__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37626 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37627 = null;var count__37628 = 0;var i__37629 = 0;while(true){
if((i__37629 < count__37628))
{var node = cljs.core._nth.call(null,chunk__37627,i__37629);goog.events.removeAll(node);
{
var G__37634 = seq__37626;
var G__37635 = chunk__37627;
var G__37636 = count__37628;
var G__37637 = (i__37629 + 1);
seq__37626 = G__37634;
chunk__37627 = G__37635;
count__37628 = G__37636;
i__37629 = G__37637;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37626);if(temp__4092__auto__)
{var seq__37626__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37626__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37626__$1);{
var G__37638 = cljs.core.chunk_rest.call(null,seq__37626__$1);
var G__37639 = c__4148__auto__;
var G__37640 = cljs.core.count.call(null,c__4148__auto__);
var G__37641 = 0;
seq__37626 = G__37638;
chunk__37627 = G__37639;
count__37628 = G__37640;
i__37629 = G__37641;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37626__$1);goog.events.removeAll(node);
{
var G__37642 = cljs.core.next.call(null,seq__37626__$1);
var G__37643 = null;
var G__37644 = 0;
var G__37645 = 0;
seq__37626 = G__37642;
chunk__37627 = G__37643;
count__37628 = G__37644;
i__37629 = G__37645;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37630 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37631 = null;var count__37632 = 0;var i__37633 = 0;while(true){
if((i__37633 < count__37632))
{var node = cljs.core._nth.call(null,chunk__37631,i__37633);goog.events.removeAll(node,type__$1);
{
var G__37646 = seq__37630;
var G__37647 = chunk__37631;
var G__37648 = count__37632;
var G__37649 = (i__37633 + 1);
seq__37630 = G__37646;
chunk__37631 = G__37647;
count__37632 = G__37648;
i__37633 = G__37649;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37630);if(temp__4092__auto__)
{var seq__37630__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37630__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37630__$1);{
var G__37650 = cljs.core.chunk_rest.call(null,seq__37630__$1);
var G__37651 = c__4148__auto__;
var G__37652 = cljs.core.count.call(null,c__4148__auto__);
var G__37653 = 0;
seq__37630 = G__37650;
chunk__37631 = G__37651;
count__37632 = G__37652;
i__37633 = G__37653;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37630__$1);goog.events.removeAll(node,type__$1);
{
var G__37654 = cljs.core.next.call(null,seq__37630__$1);
var G__37655 = null;
var G__37656 = 0;
var G__37657 = 0;
seq__37630 = G__37654;
chunk__37631 = G__37655;
count__37632 = G__37656;
i__37633 = G__37657;
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
var G__37658 = parent;
var G__37659 = cljs.core.cons.call(null,parent,so_far);
n = G__37658;
so_far = G__37659;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37668_37676 = cljs.core.seq.call(null,ancestors);var chunk__37669_37677 = null;var count__37670_37678 = 0;var i__37671_37679 = 0;while(true){
if((i__37671_37679 < count__37670_37678))
{var n_37680 = cljs.core._nth.call(null,chunk__37669_37677,i__37671_37679);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37680;
goog.events.fireListeners(n_37680,evt.type,true,evt);
}
{
var G__37681 = seq__37668_37676;
var G__37682 = chunk__37669_37677;
var G__37683 = count__37670_37678;
var G__37684 = (i__37671_37679 + 1);
seq__37668_37676 = G__37681;
chunk__37669_37677 = G__37682;
count__37670_37678 = G__37683;
i__37671_37679 = G__37684;
continue;
}
} else
{var temp__4092__auto___37685 = cljs.core.seq.call(null,seq__37668_37676);if(temp__4092__auto___37685)
{var seq__37668_37686__$1 = temp__4092__auto___37685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37668_37686__$1))
{var c__4148__auto___37687 = cljs.core.chunk_first.call(null,seq__37668_37686__$1);{
var G__37688 = cljs.core.chunk_rest.call(null,seq__37668_37686__$1);
var G__37689 = c__4148__auto___37687;
var G__37690 = cljs.core.count.call(null,c__4148__auto___37687);
var G__37691 = 0;
seq__37668_37676 = G__37688;
chunk__37669_37677 = G__37689;
count__37670_37678 = G__37690;
i__37671_37679 = G__37691;
continue;
}
} else
{var n_37692 = cljs.core.first.call(null,seq__37668_37686__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37692;
goog.events.fireListeners(n_37692,evt.type,true,evt);
}
{
var G__37693 = cljs.core.next.call(null,seq__37668_37686__$1);
var G__37694 = null;
var G__37695 = 0;
var G__37696 = 0;
seq__37668_37676 = G__37693;
chunk__37669_37677 = G__37694;
count__37670_37678 = G__37695;
i__37671_37679 = G__37696;
continue;
}
}
} else
{}
}
break;
}
var seq__37672_37697 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37673_37698 = null;var count__37674_37699 = 0;var i__37675_37700 = 0;while(true){
if((i__37675_37700 < count__37674_37699))
{var n_37701 = cljs.core._nth.call(null,chunk__37673_37698,i__37675_37700);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37701;
goog.events.fireListeners(n_37701,evt.type,false,evt);
}
{
var G__37702 = seq__37672_37697;
var G__37703 = chunk__37673_37698;
var G__37704 = count__37674_37699;
var G__37705 = (i__37675_37700 + 1);
seq__37672_37697 = G__37702;
chunk__37673_37698 = G__37703;
count__37674_37699 = G__37704;
i__37675_37700 = G__37705;
continue;
}
} else
{var temp__4092__auto___37706 = cljs.core.seq.call(null,seq__37672_37697);if(temp__4092__auto___37706)
{var seq__37672_37707__$1 = temp__4092__auto___37706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37672_37707__$1))
{var c__4148__auto___37708 = cljs.core.chunk_first.call(null,seq__37672_37707__$1);{
var G__37709 = cljs.core.chunk_rest.call(null,seq__37672_37707__$1);
var G__37710 = c__4148__auto___37708;
var G__37711 = cljs.core.count.call(null,c__4148__auto___37708);
var G__37712 = 0;
seq__37672_37697 = G__37709;
chunk__37673_37698 = G__37710;
count__37674_37699 = G__37711;
i__37675_37700 = G__37712;
continue;
}
} else
{var n_37713 = cljs.core.first.call(null,seq__37672_37707__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37713;
goog.events.fireListeners(n_37713,evt.type,false,evt);
}
{
var G__37714 = cljs.core.next.call(null,seq__37672_37707__$1);
var G__37715 = null;
var G__37716 = 0;
var G__37717 = 0;
seq__37672_37697 = G__37714;
chunk__37673_37698 = G__37715;
count__37674_37699 = G__37716;
i__37675_37700 = G__37717;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37724_37730 = cljs.core.seq.call(null,evt_map);var chunk__37725_37731 = null;var count__37726_37732 = 0;var i__37727_37733 = 0;while(true){
if((i__37727_37733 < count__37726_37732))
{var vec__37728_37734 = cljs.core._nth.call(null,chunk__37725_37731,i__37727_37733);var k_37735 = cljs.core.nth.call(null,vec__37728_37734,0,null);var v_37736 = cljs.core.nth.call(null,vec__37728_37734,1,null);(evt[k_37735] = v_37736);
{
var G__37737 = seq__37724_37730;
var G__37738 = chunk__37725_37731;
var G__37739 = count__37726_37732;
var G__37740 = (i__37727_37733 + 1);
seq__37724_37730 = G__37737;
chunk__37725_37731 = G__37738;
count__37726_37732 = G__37739;
i__37727_37733 = G__37740;
continue;
}
} else
{var temp__4092__auto___37741 = cljs.core.seq.call(null,seq__37724_37730);if(temp__4092__auto___37741)
{var seq__37724_37742__$1 = temp__4092__auto___37741;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37724_37742__$1))
{var c__4148__auto___37743 = cljs.core.chunk_first.call(null,seq__37724_37742__$1);{
var G__37744 = cljs.core.chunk_rest.call(null,seq__37724_37742__$1);
var G__37745 = c__4148__auto___37743;
var G__37746 = cljs.core.count.call(null,c__4148__auto___37743);
var G__37747 = 0;
seq__37724_37730 = G__37744;
chunk__37725_37731 = G__37745;
count__37726_37732 = G__37746;
i__37727_37733 = G__37747;
continue;
}
} else
{var vec__37729_37748 = cljs.core.first.call(null,seq__37724_37742__$1);var k_37749 = cljs.core.nth.call(null,vec__37729_37748,0,null);var v_37750 = cljs.core.nth.call(null,vec__37729_37748,1,null);(evt[k_37749] = v_37750);
{
var G__37751 = cljs.core.next.call(null,seq__37724_37742__$1);
var G__37752 = null;
var G__37753 = 0;
var G__37754 = 0;
seq__37724_37730 = G__37751;
chunk__37725_37731 = G__37752;
count__37726_37732 = G__37753;
i__37727_37733 = G__37754;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__37755_SHARP_){return goog.events.getListeners(p1__37755_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
