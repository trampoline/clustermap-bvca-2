// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18782 = {};return obj18782;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18786 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18786 = (function (evt,f,create_listener_function,meta18787){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18787 = meta18787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18786.cljs$lang$type = true;
domina.events.t18786.cljs$lang$ctorStr = "domina.events/t18786";
domina.events.t18786.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t18786");
});
domina.events.t18786.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18786.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t18786.prototype.domina$events$Event$ = true;
domina.events.t18786.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18786.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18786.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18786.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18786.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18786.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18788){var self__ = this;
var _18788__$1 = this;return self__.meta18787;
});
domina.events.t18786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18788,meta18787__$1){var self__ = this;
var _18788__$1 = this;return (new domina.events.t18786(self__.evt,self__.f,self__.create_listener_function,meta18787__$1));
});
domina.events.__GT_t18786 = (function __GT_t18786(evt__$1,f__$1,create_listener_function__$1,meta18787){return (new domina.events.t18786(evt__$1,f__$1,create_listener_function__$1,meta18787));
});
}
return (new domina.events.t18786(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__18793(s__18794){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__18794__$1 = s__18794;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18794__$1);if(temp__4126__auto__)
{var s__18794__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18794__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18794__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18796 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18795 = (0);while(true){
if((i__18795 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__18795);cljs.core.chunk_append.call(null,b__18796,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18797 = (i__18795 + (1));
i__18795 = G__18797;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18796),iter__18793.call(null,cljs.core.chunk_rest.call(null,s__18794__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18796),null);
}
} else
{var node = cljs.core.first.call(null,s__18794__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18793.call(null,cljs.core.rest.call(null,s__18794__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__18806 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18807 = null;var count__18808 = (0);var i__18809 = (0);while(true){
if((i__18809 < count__18808))
{var node = cljs.core._nth.call(null,chunk__18807,i__18809);goog.events.removeAll(node);
{
var G__18814 = seq__18806;
var G__18815 = chunk__18807;
var G__18816 = count__18808;
var G__18817 = (i__18809 + (1));
seq__18806 = G__18814;
chunk__18807 = G__18815;
count__18808 = G__18816;
i__18809 = G__18817;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18806);if(temp__4126__auto__)
{var seq__18806__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18806__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18806__$1);{
var G__18818 = cljs.core.chunk_rest.call(null,seq__18806__$1);
var G__18819 = c__4299__auto__;
var G__18820 = cljs.core.count.call(null,c__4299__auto__);
var G__18821 = (0);
seq__18806 = G__18818;
chunk__18807 = G__18819;
count__18808 = G__18820;
i__18809 = G__18821;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18806__$1);goog.events.removeAll(node);
{
var G__18822 = cljs.core.next.call(null,seq__18806__$1);
var G__18823 = null;
var G__18824 = (0);
var G__18825 = (0);
seq__18806 = G__18822;
chunk__18807 = G__18823;
count__18808 = G__18824;
i__18809 = G__18825;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18810 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18811 = null;var count__18812 = (0);var i__18813 = (0);while(true){
if((i__18813 < count__18812))
{var node = cljs.core._nth.call(null,chunk__18811,i__18813);goog.events.removeAll(node,type__$1);
{
var G__18826 = seq__18810;
var G__18827 = chunk__18811;
var G__18828 = count__18812;
var G__18829 = (i__18813 + (1));
seq__18810 = G__18826;
chunk__18811 = G__18827;
count__18812 = G__18828;
i__18813 = G__18829;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18810);if(temp__4126__auto__)
{var seq__18810__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18810__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18810__$1);{
var G__18830 = cljs.core.chunk_rest.call(null,seq__18810__$1);
var G__18831 = c__4299__auto__;
var G__18832 = cljs.core.count.call(null,c__4299__auto__);
var G__18833 = (0);
seq__18810 = G__18830;
chunk__18811 = G__18831;
count__18812 = G__18832;
i__18813 = G__18833;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18810__$1);goog.events.removeAll(node,type__$1);
{
var G__18834 = cljs.core.next.call(null,seq__18810__$1);
var G__18835 = null;
var G__18836 = (0);
var G__18837 = (0);
seq__18810 = G__18834;
chunk__18811 = G__18835;
count__18812 = G__18836;
i__18813 = G__18837;
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
var G__18838 = parent;
var G__18839 = cljs.core.cons.call(null,parent,so_far);
n = G__18838;
so_far = G__18839;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18848_18856 = cljs.core.seq.call(null,ancestors);var chunk__18849_18857 = null;var count__18850_18858 = (0);var i__18851_18859 = (0);while(true){
if((i__18851_18859 < count__18850_18858))
{var n_18860 = cljs.core._nth.call(null,chunk__18849_18857,i__18851_18859);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18860;
goog.events.fireListeners(n_18860,evt.type,true,evt);
}
{
var G__18861 = seq__18848_18856;
var G__18862 = chunk__18849_18857;
var G__18863 = count__18850_18858;
var G__18864 = (i__18851_18859 + (1));
seq__18848_18856 = G__18861;
chunk__18849_18857 = G__18862;
count__18850_18858 = G__18863;
i__18851_18859 = G__18864;
continue;
}
} else
{var temp__4126__auto___18865 = cljs.core.seq.call(null,seq__18848_18856);if(temp__4126__auto___18865)
{var seq__18848_18866__$1 = temp__4126__auto___18865;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18848_18866__$1))
{var c__4299__auto___18867 = cljs.core.chunk_first.call(null,seq__18848_18866__$1);{
var G__18868 = cljs.core.chunk_rest.call(null,seq__18848_18866__$1);
var G__18869 = c__4299__auto___18867;
var G__18870 = cljs.core.count.call(null,c__4299__auto___18867);
var G__18871 = (0);
seq__18848_18856 = G__18868;
chunk__18849_18857 = G__18869;
count__18850_18858 = G__18870;
i__18851_18859 = G__18871;
continue;
}
} else
{var n_18872 = cljs.core.first.call(null,seq__18848_18866__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18872;
goog.events.fireListeners(n_18872,evt.type,true,evt);
}
{
var G__18873 = cljs.core.next.call(null,seq__18848_18866__$1);
var G__18874 = null;
var G__18875 = (0);
var G__18876 = (0);
seq__18848_18856 = G__18873;
chunk__18849_18857 = G__18874;
count__18850_18858 = G__18875;
i__18851_18859 = G__18876;
continue;
}
}
} else
{}
}
break;
}
var seq__18852_18877 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18853_18878 = null;var count__18854_18879 = (0);var i__18855_18880 = (0);while(true){
if((i__18855_18880 < count__18854_18879))
{var n_18881 = cljs.core._nth.call(null,chunk__18853_18878,i__18855_18880);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18881;
goog.events.fireListeners(n_18881,evt.type,false,evt);
}
{
var G__18882 = seq__18852_18877;
var G__18883 = chunk__18853_18878;
var G__18884 = count__18854_18879;
var G__18885 = (i__18855_18880 + (1));
seq__18852_18877 = G__18882;
chunk__18853_18878 = G__18883;
count__18854_18879 = G__18884;
i__18855_18880 = G__18885;
continue;
}
} else
{var temp__4126__auto___18886 = cljs.core.seq.call(null,seq__18852_18877);if(temp__4126__auto___18886)
{var seq__18852_18887__$1 = temp__4126__auto___18886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18852_18887__$1))
{var c__4299__auto___18888 = cljs.core.chunk_first.call(null,seq__18852_18887__$1);{
var G__18889 = cljs.core.chunk_rest.call(null,seq__18852_18887__$1);
var G__18890 = c__4299__auto___18888;
var G__18891 = cljs.core.count.call(null,c__4299__auto___18888);
var G__18892 = (0);
seq__18852_18877 = G__18889;
chunk__18853_18878 = G__18890;
count__18854_18879 = G__18891;
i__18855_18880 = G__18892;
continue;
}
} else
{var n_18893 = cljs.core.first.call(null,seq__18852_18887__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18893;
goog.events.fireListeners(n_18893,evt.type,false,evt);
}
{
var G__18894 = cljs.core.next.call(null,seq__18852_18887__$1);
var G__18895 = null;
var G__18896 = (0);
var G__18897 = (0);
seq__18852_18877 = G__18894;
chunk__18853_18878 = G__18895;
count__18854_18879 = G__18896;
i__18855_18880 = G__18897;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__18904_18910 = cljs.core.seq.call(null,evt_map);var chunk__18905_18911 = null;var count__18906_18912 = (0);var i__18907_18913 = (0);while(true){
if((i__18907_18913 < count__18906_18912))
{var vec__18908_18914 = cljs.core._nth.call(null,chunk__18905_18911,i__18907_18913);var k_18915 = cljs.core.nth.call(null,vec__18908_18914,(0),null);var v_18916 = cljs.core.nth.call(null,vec__18908_18914,(1),null);(evt[k_18915] = v_18916);
{
var G__18917 = seq__18904_18910;
var G__18918 = chunk__18905_18911;
var G__18919 = count__18906_18912;
var G__18920 = (i__18907_18913 + (1));
seq__18904_18910 = G__18917;
chunk__18905_18911 = G__18918;
count__18906_18912 = G__18919;
i__18907_18913 = G__18920;
continue;
}
} else
{var temp__4126__auto___18921 = cljs.core.seq.call(null,seq__18904_18910);if(temp__4126__auto___18921)
{var seq__18904_18922__$1 = temp__4126__auto___18921;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18904_18922__$1))
{var c__4299__auto___18923 = cljs.core.chunk_first.call(null,seq__18904_18922__$1);{
var G__18924 = cljs.core.chunk_rest.call(null,seq__18904_18922__$1);
var G__18925 = c__4299__auto___18923;
var G__18926 = cljs.core.count.call(null,c__4299__auto___18923);
var G__18927 = (0);
seq__18904_18910 = G__18924;
chunk__18905_18911 = G__18925;
count__18906_18912 = G__18926;
i__18907_18913 = G__18927;
continue;
}
} else
{var vec__18909_18928 = cljs.core.first.call(null,seq__18904_18922__$1);var k_18929 = cljs.core.nth.call(null,vec__18909_18928,(0),null);var v_18930 = cljs.core.nth.call(null,vec__18909_18928,(1),null);(evt[k_18929] = v_18930);
{
var G__18931 = cljs.core.next.call(null,seq__18904_18922__$1);
var G__18932 = null;
var G__18933 = (0);
var G__18934 = (0);
seq__18904_18910 = G__18931;
chunk__18905_18911 = G__18932;
count__18906_18912 = G__18933;
i__18907_18913 = G__18934;
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
return (function (p1__18935_SHARP_){return goog.events.getListeners(p1__18935_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
