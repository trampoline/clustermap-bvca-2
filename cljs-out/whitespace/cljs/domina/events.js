// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18748 = {};return obj18748;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18752 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18752 = (function (evt,f,create_listener_function,meta18753){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18753 = meta18753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18752.cljs$lang$type = true;
domina.events.t18752.cljs$lang$ctorStr = "domina.events/t18752";
domina.events.t18752.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t18752");
});
domina.events.t18752.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18752.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t18752.prototype.domina$events$Event$ = true;
domina.events.t18752.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18752.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18752.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18752.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18752.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18752.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18754){var self__ = this;
var _18754__$1 = this;return self__.meta18753;
});
domina.events.t18752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18754,meta18753__$1){var self__ = this;
var _18754__$1 = this;return (new domina.events.t18752(self__.evt,self__.f,self__.create_listener_function,meta18753__$1));
});
domina.events.__GT_t18752 = (function __GT_t18752(evt__$1,f__$1,create_listener_function__$1,meta18753){return (new domina.events.t18752(evt__$1,f__$1,create_listener_function__$1,meta18753));
});
}
return (new domina.events.t18752(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__18759(s__18760){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__18760__$1 = s__18760;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18760__$1);if(temp__4126__auto__)
{var s__18760__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18760__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18760__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18762 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18761 = (0);while(true){
if((i__18761 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__18761);cljs.core.chunk_append.call(null,b__18762,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18763 = (i__18761 + (1));
i__18761 = G__18763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18762),iter__18759.call(null,cljs.core.chunk_rest.call(null,s__18760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18762),null);
}
} else
{var node = cljs.core.first.call(null,s__18760__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18759.call(null,cljs.core.rest.call(null,s__18760__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__18772 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18773 = null;var count__18774 = (0);var i__18775 = (0);while(true){
if((i__18775 < count__18774))
{var node = cljs.core._nth.call(null,chunk__18773,i__18775);goog.events.removeAll(node);
{
var G__18780 = seq__18772;
var G__18781 = chunk__18773;
var G__18782 = count__18774;
var G__18783 = (i__18775 + (1));
seq__18772 = G__18780;
chunk__18773 = G__18781;
count__18774 = G__18782;
i__18775 = G__18783;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18772);if(temp__4126__auto__)
{var seq__18772__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18772__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18772__$1);{
var G__18784 = cljs.core.chunk_rest.call(null,seq__18772__$1);
var G__18785 = c__4299__auto__;
var G__18786 = cljs.core.count.call(null,c__4299__auto__);
var G__18787 = (0);
seq__18772 = G__18784;
chunk__18773 = G__18785;
count__18774 = G__18786;
i__18775 = G__18787;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18772__$1);goog.events.removeAll(node);
{
var G__18788 = cljs.core.next.call(null,seq__18772__$1);
var G__18789 = null;
var G__18790 = (0);
var G__18791 = (0);
seq__18772 = G__18788;
chunk__18773 = G__18789;
count__18774 = G__18790;
i__18775 = G__18791;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18776 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18777 = null;var count__18778 = (0);var i__18779 = (0);while(true){
if((i__18779 < count__18778))
{var node = cljs.core._nth.call(null,chunk__18777,i__18779);goog.events.removeAll(node,type__$1);
{
var G__18792 = seq__18776;
var G__18793 = chunk__18777;
var G__18794 = count__18778;
var G__18795 = (i__18779 + (1));
seq__18776 = G__18792;
chunk__18777 = G__18793;
count__18778 = G__18794;
i__18779 = G__18795;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18776);if(temp__4126__auto__)
{var seq__18776__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18776__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18776__$1);{
var G__18796 = cljs.core.chunk_rest.call(null,seq__18776__$1);
var G__18797 = c__4299__auto__;
var G__18798 = cljs.core.count.call(null,c__4299__auto__);
var G__18799 = (0);
seq__18776 = G__18796;
chunk__18777 = G__18797;
count__18778 = G__18798;
i__18779 = G__18799;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18776__$1);goog.events.removeAll(node,type__$1);
{
var G__18800 = cljs.core.next.call(null,seq__18776__$1);
var G__18801 = null;
var G__18802 = (0);
var G__18803 = (0);
seq__18776 = G__18800;
chunk__18777 = G__18801;
count__18778 = G__18802;
i__18779 = G__18803;
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
var G__18804 = parent;
var G__18805 = cljs.core.cons.call(null,parent,so_far);
n = G__18804;
so_far = G__18805;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18814_18822 = cljs.core.seq.call(null,ancestors);var chunk__18815_18823 = null;var count__18816_18824 = (0);var i__18817_18825 = (0);while(true){
if((i__18817_18825 < count__18816_18824))
{var n_18826 = cljs.core._nth.call(null,chunk__18815_18823,i__18817_18825);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18826;
goog.events.fireListeners(n_18826,evt.type,true,evt);
}
{
var G__18827 = seq__18814_18822;
var G__18828 = chunk__18815_18823;
var G__18829 = count__18816_18824;
var G__18830 = (i__18817_18825 + (1));
seq__18814_18822 = G__18827;
chunk__18815_18823 = G__18828;
count__18816_18824 = G__18829;
i__18817_18825 = G__18830;
continue;
}
} else
{var temp__4126__auto___18831 = cljs.core.seq.call(null,seq__18814_18822);if(temp__4126__auto___18831)
{var seq__18814_18832__$1 = temp__4126__auto___18831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18814_18832__$1))
{var c__4299__auto___18833 = cljs.core.chunk_first.call(null,seq__18814_18832__$1);{
var G__18834 = cljs.core.chunk_rest.call(null,seq__18814_18832__$1);
var G__18835 = c__4299__auto___18833;
var G__18836 = cljs.core.count.call(null,c__4299__auto___18833);
var G__18837 = (0);
seq__18814_18822 = G__18834;
chunk__18815_18823 = G__18835;
count__18816_18824 = G__18836;
i__18817_18825 = G__18837;
continue;
}
} else
{var n_18838 = cljs.core.first.call(null,seq__18814_18832__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18838;
goog.events.fireListeners(n_18838,evt.type,true,evt);
}
{
var G__18839 = cljs.core.next.call(null,seq__18814_18832__$1);
var G__18840 = null;
var G__18841 = (0);
var G__18842 = (0);
seq__18814_18822 = G__18839;
chunk__18815_18823 = G__18840;
count__18816_18824 = G__18841;
i__18817_18825 = G__18842;
continue;
}
}
} else
{}
}
break;
}
var seq__18818_18843 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18819_18844 = null;var count__18820_18845 = (0);var i__18821_18846 = (0);while(true){
if((i__18821_18846 < count__18820_18845))
{var n_18847 = cljs.core._nth.call(null,chunk__18819_18844,i__18821_18846);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18847;
goog.events.fireListeners(n_18847,evt.type,false,evt);
}
{
var G__18848 = seq__18818_18843;
var G__18849 = chunk__18819_18844;
var G__18850 = count__18820_18845;
var G__18851 = (i__18821_18846 + (1));
seq__18818_18843 = G__18848;
chunk__18819_18844 = G__18849;
count__18820_18845 = G__18850;
i__18821_18846 = G__18851;
continue;
}
} else
{var temp__4126__auto___18852 = cljs.core.seq.call(null,seq__18818_18843);if(temp__4126__auto___18852)
{var seq__18818_18853__$1 = temp__4126__auto___18852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18818_18853__$1))
{var c__4299__auto___18854 = cljs.core.chunk_first.call(null,seq__18818_18853__$1);{
var G__18855 = cljs.core.chunk_rest.call(null,seq__18818_18853__$1);
var G__18856 = c__4299__auto___18854;
var G__18857 = cljs.core.count.call(null,c__4299__auto___18854);
var G__18858 = (0);
seq__18818_18843 = G__18855;
chunk__18819_18844 = G__18856;
count__18820_18845 = G__18857;
i__18821_18846 = G__18858;
continue;
}
} else
{var n_18859 = cljs.core.first.call(null,seq__18818_18853__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18859;
goog.events.fireListeners(n_18859,evt.type,false,evt);
}
{
var G__18860 = cljs.core.next.call(null,seq__18818_18853__$1);
var G__18861 = null;
var G__18862 = (0);
var G__18863 = (0);
seq__18818_18843 = G__18860;
chunk__18819_18844 = G__18861;
count__18820_18845 = G__18862;
i__18821_18846 = G__18863;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__18870_18876 = cljs.core.seq.call(null,evt_map);var chunk__18871_18877 = null;var count__18872_18878 = (0);var i__18873_18879 = (0);while(true){
if((i__18873_18879 < count__18872_18878))
{var vec__18874_18880 = cljs.core._nth.call(null,chunk__18871_18877,i__18873_18879);var k_18881 = cljs.core.nth.call(null,vec__18874_18880,(0),null);var v_18882 = cljs.core.nth.call(null,vec__18874_18880,(1),null);(evt[k_18881] = v_18882);
{
var G__18883 = seq__18870_18876;
var G__18884 = chunk__18871_18877;
var G__18885 = count__18872_18878;
var G__18886 = (i__18873_18879 + (1));
seq__18870_18876 = G__18883;
chunk__18871_18877 = G__18884;
count__18872_18878 = G__18885;
i__18873_18879 = G__18886;
continue;
}
} else
{var temp__4126__auto___18887 = cljs.core.seq.call(null,seq__18870_18876);if(temp__4126__auto___18887)
{var seq__18870_18888__$1 = temp__4126__auto___18887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18870_18888__$1))
{var c__4299__auto___18889 = cljs.core.chunk_first.call(null,seq__18870_18888__$1);{
var G__18890 = cljs.core.chunk_rest.call(null,seq__18870_18888__$1);
var G__18891 = c__4299__auto___18889;
var G__18892 = cljs.core.count.call(null,c__4299__auto___18889);
var G__18893 = (0);
seq__18870_18876 = G__18890;
chunk__18871_18877 = G__18891;
count__18872_18878 = G__18892;
i__18873_18879 = G__18893;
continue;
}
} else
{var vec__18875_18894 = cljs.core.first.call(null,seq__18870_18888__$1);var k_18895 = cljs.core.nth.call(null,vec__18875_18894,(0),null);var v_18896 = cljs.core.nth.call(null,vec__18875_18894,(1),null);(evt[k_18895] = v_18896);
{
var G__18897 = cljs.core.next.call(null,seq__18870_18888__$1);
var G__18898 = null;
var G__18899 = (0);
var G__18900 = (0);
seq__18870_18876 = G__18897;
chunk__18871_18877 = G__18898;
count__18872_18878 = G__18899;
i__18873_18879 = G__18900;
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
return (function (p1__18901_SHARP_){return goog.events.getListeners(p1__18901_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
