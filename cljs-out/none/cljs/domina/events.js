// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14714 = {};return obj14714;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14718 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14718 = (function (evt,f,create_listener_function,meta14719){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14719 = meta14719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14718.cljs$lang$type = true;
domina.events.t14718.cljs$lang$ctorStr = "domina.events/t14718";
domina.events.t14718.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14718");
});
domina.events.t14718.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14718.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14718.prototype.domina$events$Event$ = true;
domina.events.t14718.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14718.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14718.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14718.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14718.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14718.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14720){var self__ = this;
var _14720__$1 = this;return self__.meta14719;
});
domina.events.t14718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14720,meta14719__$1){var self__ = this;
var _14720__$1 = this;return (new domina.events.t14718(self__.evt,self__.f,self__.create_listener_function,meta14719__$1));
});
domina.events.__GT_t14718 = (function __GT_t14718(evt__$1,f__$1,create_listener_function__$1,meta14719){return (new domina.events.t14718(evt__$1,f__$1,create_listener_function__$1,meta14719));
});
}
return (new domina.events.t14718(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14725(s__14726){return (new cljs.core.LazySeq(null,(function (){var s__14726__$1 = s__14726;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14726__$1);if(temp__4092__auto__)
{var s__14726__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14726__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14726__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14728 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14727 = 0;while(true){
if((i__14727 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14727);cljs.core.chunk_append.call(null,b__14728,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14729 = (i__14727 + 1);
i__14727 = G__14729;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14728),iter__14725.call(null,cljs.core.chunk_rest.call(null,s__14726__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14728),null);
}
} else
{var node = cljs.core.first.call(null,s__14726__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14725.call(null,cljs.core.rest.call(null,s__14726__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14738 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14739 = null;var count__14740 = 0;var i__14741 = 0;while(true){
if((i__14741 < count__14740))
{var node = cljs.core._nth.call(null,chunk__14739,i__14741);goog.events.removeAll(node);
{
var G__14746 = seq__14738;
var G__14747 = chunk__14739;
var G__14748 = count__14740;
var G__14749 = (i__14741 + 1);
seq__14738 = G__14746;
chunk__14739 = G__14747;
count__14740 = G__14748;
i__14741 = G__14749;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14738);if(temp__4092__auto__)
{var seq__14738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14738__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14738__$1);{
var G__14750 = cljs.core.chunk_rest.call(null,seq__14738__$1);
var G__14751 = c__4148__auto__;
var G__14752 = cljs.core.count.call(null,c__4148__auto__);
var G__14753 = 0;
seq__14738 = G__14750;
chunk__14739 = G__14751;
count__14740 = G__14752;
i__14741 = G__14753;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14738__$1);goog.events.removeAll(node);
{
var G__14754 = cljs.core.next.call(null,seq__14738__$1);
var G__14755 = null;
var G__14756 = 0;
var G__14757 = 0;
seq__14738 = G__14754;
chunk__14739 = G__14755;
count__14740 = G__14756;
i__14741 = G__14757;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14742 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14743 = null;var count__14744 = 0;var i__14745 = 0;while(true){
if((i__14745 < count__14744))
{var node = cljs.core._nth.call(null,chunk__14743,i__14745);goog.events.removeAll(node,type__$1);
{
var G__14758 = seq__14742;
var G__14759 = chunk__14743;
var G__14760 = count__14744;
var G__14761 = (i__14745 + 1);
seq__14742 = G__14758;
chunk__14743 = G__14759;
count__14744 = G__14760;
i__14745 = G__14761;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14742);if(temp__4092__auto__)
{var seq__14742__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14742__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14742__$1);{
var G__14762 = cljs.core.chunk_rest.call(null,seq__14742__$1);
var G__14763 = c__4148__auto__;
var G__14764 = cljs.core.count.call(null,c__4148__auto__);
var G__14765 = 0;
seq__14742 = G__14762;
chunk__14743 = G__14763;
count__14744 = G__14764;
i__14745 = G__14765;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14742__$1);goog.events.removeAll(node,type__$1);
{
var G__14766 = cljs.core.next.call(null,seq__14742__$1);
var G__14767 = null;
var G__14768 = 0;
var G__14769 = 0;
seq__14742 = G__14766;
chunk__14743 = G__14767;
count__14744 = G__14768;
i__14745 = G__14769;
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
var G__14770 = parent;
var G__14771 = cljs.core.cons.call(null,parent,so_far);
n = G__14770;
so_far = G__14771;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14780_14788 = cljs.core.seq.call(null,ancestors);var chunk__14781_14789 = null;var count__14782_14790 = 0;var i__14783_14791 = 0;while(true){
if((i__14783_14791 < count__14782_14790))
{var n_14792 = cljs.core._nth.call(null,chunk__14781_14789,i__14783_14791);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14792;
goog.events.fireListeners(n_14792,evt.type,true,evt);
}
{
var G__14793 = seq__14780_14788;
var G__14794 = chunk__14781_14789;
var G__14795 = count__14782_14790;
var G__14796 = (i__14783_14791 + 1);
seq__14780_14788 = G__14793;
chunk__14781_14789 = G__14794;
count__14782_14790 = G__14795;
i__14783_14791 = G__14796;
continue;
}
} else
{var temp__4092__auto___14797 = cljs.core.seq.call(null,seq__14780_14788);if(temp__4092__auto___14797)
{var seq__14780_14798__$1 = temp__4092__auto___14797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14780_14798__$1))
{var c__4148__auto___14799 = cljs.core.chunk_first.call(null,seq__14780_14798__$1);{
var G__14800 = cljs.core.chunk_rest.call(null,seq__14780_14798__$1);
var G__14801 = c__4148__auto___14799;
var G__14802 = cljs.core.count.call(null,c__4148__auto___14799);
var G__14803 = 0;
seq__14780_14788 = G__14800;
chunk__14781_14789 = G__14801;
count__14782_14790 = G__14802;
i__14783_14791 = G__14803;
continue;
}
} else
{var n_14804 = cljs.core.first.call(null,seq__14780_14798__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14804;
goog.events.fireListeners(n_14804,evt.type,true,evt);
}
{
var G__14805 = cljs.core.next.call(null,seq__14780_14798__$1);
var G__14806 = null;
var G__14807 = 0;
var G__14808 = 0;
seq__14780_14788 = G__14805;
chunk__14781_14789 = G__14806;
count__14782_14790 = G__14807;
i__14783_14791 = G__14808;
continue;
}
}
} else
{}
}
break;
}
var seq__14784_14809 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14785_14810 = null;var count__14786_14811 = 0;var i__14787_14812 = 0;while(true){
if((i__14787_14812 < count__14786_14811))
{var n_14813 = cljs.core._nth.call(null,chunk__14785_14810,i__14787_14812);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14813;
goog.events.fireListeners(n_14813,evt.type,false,evt);
}
{
var G__14814 = seq__14784_14809;
var G__14815 = chunk__14785_14810;
var G__14816 = count__14786_14811;
var G__14817 = (i__14787_14812 + 1);
seq__14784_14809 = G__14814;
chunk__14785_14810 = G__14815;
count__14786_14811 = G__14816;
i__14787_14812 = G__14817;
continue;
}
} else
{var temp__4092__auto___14818 = cljs.core.seq.call(null,seq__14784_14809);if(temp__4092__auto___14818)
{var seq__14784_14819__$1 = temp__4092__auto___14818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14784_14819__$1))
{var c__4148__auto___14820 = cljs.core.chunk_first.call(null,seq__14784_14819__$1);{
var G__14821 = cljs.core.chunk_rest.call(null,seq__14784_14819__$1);
var G__14822 = c__4148__auto___14820;
var G__14823 = cljs.core.count.call(null,c__4148__auto___14820);
var G__14824 = 0;
seq__14784_14809 = G__14821;
chunk__14785_14810 = G__14822;
count__14786_14811 = G__14823;
i__14787_14812 = G__14824;
continue;
}
} else
{var n_14825 = cljs.core.first.call(null,seq__14784_14819__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14825;
goog.events.fireListeners(n_14825,evt.type,false,evt);
}
{
var G__14826 = cljs.core.next.call(null,seq__14784_14819__$1);
var G__14827 = null;
var G__14828 = 0;
var G__14829 = 0;
seq__14784_14809 = G__14826;
chunk__14785_14810 = G__14827;
count__14786_14811 = G__14828;
i__14787_14812 = G__14829;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14836_14842 = cljs.core.seq.call(null,evt_map);var chunk__14837_14843 = null;var count__14838_14844 = 0;var i__14839_14845 = 0;while(true){
if((i__14839_14845 < count__14838_14844))
{var vec__14840_14846 = cljs.core._nth.call(null,chunk__14837_14843,i__14839_14845);var k_14847 = cljs.core.nth.call(null,vec__14840_14846,0,null);var v_14848 = cljs.core.nth.call(null,vec__14840_14846,1,null);(evt[k_14847] = v_14848);
{
var G__14849 = seq__14836_14842;
var G__14850 = chunk__14837_14843;
var G__14851 = count__14838_14844;
var G__14852 = (i__14839_14845 + 1);
seq__14836_14842 = G__14849;
chunk__14837_14843 = G__14850;
count__14838_14844 = G__14851;
i__14839_14845 = G__14852;
continue;
}
} else
{var temp__4092__auto___14853 = cljs.core.seq.call(null,seq__14836_14842);if(temp__4092__auto___14853)
{var seq__14836_14854__$1 = temp__4092__auto___14853;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14836_14854__$1))
{var c__4148__auto___14855 = cljs.core.chunk_first.call(null,seq__14836_14854__$1);{
var G__14856 = cljs.core.chunk_rest.call(null,seq__14836_14854__$1);
var G__14857 = c__4148__auto___14855;
var G__14858 = cljs.core.count.call(null,c__4148__auto___14855);
var G__14859 = 0;
seq__14836_14842 = G__14856;
chunk__14837_14843 = G__14857;
count__14838_14844 = G__14858;
i__14839_14845 = G__14859;
continue;
}
} else
{var vec__14841_14860 = cljs.core.first.call(null,seq__14836_14854__$1);var k_14861 = cljs.core.nth.call(null,vec__14841_14860,0,null);var v_14862 = cljs.core.nth.call(null,vec__14841_14860,1,null);(evt[k_14861] = v_14862);
{
var G__14863 = cljs.core.next.call(null,seq__14836_14854__$1);
var G__14864 = null;
var G__14865 = 0;
var G__14866 = 0;
seq__14836_14842 = G__14863;
chunk__14837_14843 = G__14864;
count__14838_14844 = G__14865;
i__14839_14845 = G__14866;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__14867_SHARP_){return goog.events.getListeners(p1__14867_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map