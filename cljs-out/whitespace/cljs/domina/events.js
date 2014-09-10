// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18887 = {};return obj18887;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.prevent_default[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.prevent_default["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.current_target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.current_target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.event_type[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.event_type["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.raw_event[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.raw_event["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18891 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18891 = (function (evt,f,create_listener_function,meta18892){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18892 = meta18892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18891.cljs$lang$type = true;
domina.events.t18891.cljs$lang$ctorStr = "domina.events/t18891";
domina.events.t18891.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"domina.events/t18891");
});
domina.events.t18891.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18891.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t18891.prototype.domina$events$Event$ = true;
domina.events.t18891.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18891.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18891.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18891.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18891.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18891.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18893){var self__ = this;
var _18893__$1 = this;return self__.meta18892;
});
domina.events.t18891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18893,meta18892__$1){var self__ = this;
var _18893__$1 = this;return (new domina.events.t18891(self__.evt,self__.f,self__.create_listener_function,meta18892__$1));
});
domina.events.__GT_t18891 = (function __GT_t18891(evt__$1,f__$1,create_listener_function__$1,meta18892){return (new domina.events.t18891(evt__$1,f__$1,create_listener_function__$1,meta18892));
});
}
return (new domina.events.t18891(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4266__auto__ = ((function (f,t){
return (function iter__18898(s__18899){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__18899__$1 = s__18899;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18899__$1);if(temp__4126__auto__)
{var s__18899__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18899__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__18899__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__18901 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__18900 = (0);while(true){
if((i__18900 < size__4265__auto__))
{var node = cljs.core._nth.call(null,c__4264__auto__,i__18900);cljs.core.chunk_append.call(null,b__18901,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18902 = (i__18900 + (1));
i__18900 = G__18902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18901),iter__18898.call(null,cljs.core.chunk_rest.call(null,s__18899__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18901),null);
}
} else
{var node = cljs.core.first.call(null,s__18899__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18898.call(null,cljs.core.rest.call(null,s__18899__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4266__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__18911 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18912 = null;var count__18913 = (0);var i__18914 = (0);while(true){
if((i__18914 < count__18913))
{var node = cljs.core._nth.call(null,chunk__18912,i__18914);goog.events.removeAll(node);
{
var G__18919 = seq__18911;
var G__18920 = chunk__18912;
var G__18921 = count__18913;
var G__18922 = (i__18914 + (1));
seq__18911 = G__18919;
chunk__18912 = G__18920;
count__18913 = G__18921;
i__18914 = G__18922;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18911);if(temp__4126__auto__)
{var seq__18911__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18911__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__18911__$1);{
var G__18923 = cljs.core.chunk_rest.call(null,seq__18911__$1);
var G__18924 = c__4297__auto__;
var G__18925 = cljs.core.count.call(null,c__4297__auto__);
var G__18926 = (0);
seq__18911 = G__18923;
chunk__18912 = G__18924;
count__18913 = G__18925;
i__18914 = G__18926;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18911__$1);goog.events.removeAll(node);
{
var G__18927 = cljs.core.next.call(null,seq__18911__$1);
var G__18928 = null;
var G__18929 = (0);
var G__18930 = (0);
seq__18911 = G__18927;
chunk__18912 = G__18928;
count__18913 = G__18929;
i__18914 = G__18930;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18915 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18916 = null;var count__18917 = (0);var i__18918 = (0);while(true){
if((i__18918 < count__18917))
{var node = cljs.core._nth.call(null,chunk__18916,i__18918);goog.events.removeAll(node,type__$1);
{
var G__18931 = seq__18915;
var G__18932 = chunk__18916;
var G__18933 = count__18917;
var G__18934 = (i__18918 + (1));
seq__18915 = G__18931;
chunk__18916 = G__18932;
count__18917 = G__18933;
i__18918 = G__18934;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18915);if(temp__4126__auto__)
{var seq__18915__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18915__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__18915__$1);{
var G__18935 = cljs.core.chunk_rest.call(null,seq__18915__$1);
var G__18936 = c__4297__auto__;
var G__18937 = cljs.core.count.call(null,c__4297__auto__);
var G__18938 = (0);
seq__18915 = G__18935;
chunk__18916 = G__18936;
count__18917 = G__18937;
i__18918 = G__18938;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18915__$1);goog.events.removeAll(node,type__$1);
{
var G__18939 = cljs.core.next.call(null,seq__18915__$1);
var G__18940 = null;
var G__18941 = (0);
var G__18942 = (0);
seq__18915 = G__18939;
chunk__18916 = G__18940;
count__18917 = G__18941;
i__18918 = G__18942;
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
var G__18943 = parent;
var G__18944 = cljs.core.cons.call(null,parent,so_far);
n = G__18943;
so_far = G__18944;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18953_18961 = cljs.core.seq.call(null,ancestors);var chunk__18954_18962 = null;var count__18955_18963 = (0);var i__18956_18964 = (0);while(true){
if((i__18956_18964 < count__18955_18963))
{var n_18965 = cljs.core._nth.call(null,chunk__18954_18962,i__18956_18964);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18965;
goog.events.fireListeners(n_18965,evt.type,true,evt);
}
{
var G__18966 = seq__18953_18961;
var G__18967 = chunk__18954_18962;
var G__18968 = count__18955_18963;
var G__18969 = (i__18956_18964 + (1));
seq__18953_18961 = G__18966;
chunk__18954_18962 = G__18967;
count__18955_18963 = G__18968;
i__18956_18964 = G__18969;
continue;
}
} else
{var temp__4126__auto___18970 = cljs.core.seq.call(null,seq__18953_18961);if(temp__4126__auto___18970)
{var seq__18953_18971__$1 = temp__4126__auto___18970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18953_18971__$1))
{var c__4297__auto___18972 = cljs.core.chunk_first.call(null,seq__18953_18971__$1);{
var G__18973 = cljs.core.chunk_rest.call(null,seq__18953_18971__$1);
var G__18974 = c__4297__auto___18972;
var G__18975 = cljs.core.count.call(null,c__4297__auto___18972);
var G__18976 = (0);
seq__18953_18961 = G__18973;
chunk__18954_18962 = G__18974;
count__18955_18963 = G__18975;
i__18956_18964 = G__18976;
continue;
}
} else
{var n_18977 = cljs.core.first.call(null,seq__18953_18971__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18977;
goog.events.fireListeners(n_18977,evt.type,true,evt);
}
{
var G__18978 = cljs.core.next.call(null,seq__18953_18971__$1);
var G__18979 = null;
var G__18980 = (0);
var G__18981 = (0);
seq__18953_18961 = G__18978;
chunk__18954_18962 = G__18979;
count__18955_18963 = G__18980;
i__18956_18964 = G__18981;
continue;
}
}
} else
{}
}
break;
}
var seq__18957_18982 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18958_18983 = null;var count__18959_18984 = (0);var i__18960_18985 = (0);while(true){
if((i__18960_18985 < count__18959_18984))
{var n_18986 = cljs.core._nth.call(null,chunk__18958_18983,i__18960_18985);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18986;
goog.events.fireListeners(n_18986,evt.type,false,evt);
}
{
var G__18987 = seq__18957_18982;
var G__18988 = chunk__18958_18983;
var G__18989 = count__18959_18984;
var G__18990 = (i__18960_18985 + (1));
seq__18957_18982 = G__18987;
chunk__18958_18983 = G__18988;
count__18959_18984 = G__18989;
i__18960_18985 = G__18990;
continue;
}
} else
{var temp__4126__auto___18991 = cljs.core.seq.call(null,seq__18957_18982);if(temp__4126__auto___18991)
{var seq__18957_18992__$1 = temp__4126__auto___18991;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18957_18992__$1))
{var c__4297__auto___18993 = cljs.core.chunk_first.call(null,seq__18957_18992__$1);{
var G__18994 = cljs.core.chunk_rest.call(null,seq__18957_18992__$1);
var G__18995 = c__4297__auto___18993;
var G__18996 = cljs.core.count.call(null,c__4297__auto___18993);
var G__18997 = (0);
seq__18957_18982 = G__18994;
chunk__18958_18983 = G__18995;
count__18959_18984 = G__18996;
i__18960_18985 = G__18997;
continue;
}
} else
{var n_18998 = cljs.core.first.call(null,seq__18957_18992__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18998;
goog.events.fireListeners(n_18998,evt.type,false,evt);
}
{
var G__18999 = cljs.core.next.call(null,seq__18957_18992__$1);
var G__19000 = null;
var G__19001 = (0);
var G__19002 = (0);
seq__18957_18982 = G__18999;
chunk__18958_18983 = G__19000;
count__18959_18984 = G__19001;
i__18960_18985 = G__19002;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3529__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3529__auto__))
{return o.dispatchEvent;
} else
{return and__3529__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19009_19015 = cljs.core.seq.call(null,evt_map);var chunk__19010_19016 = null;var count__19011_19017 = (0);var i__19012_19018 = (0);while(true){
if((i__19012_19018 < count__19011_19017))
{var vec__19013_19019 = cljs.core._nth.call(null,chunk__19010_19016,i__19012_19018);var k_19020 = cljs.core.nth.call(null,vec__19013_19019,(0),null);var v_19021 = cljs.core.nth.call(null,vec__19013_19019,(1),null);(evt[k_19020] = v_19021);
{
var G__19022 = seq__19009_19015;
var G__19023 = chunk__19010_19016;
var G__19024 = count__19011_19017;
var G__19025 = (i__19012_19018 + (1));
seq__19009_19015 = G__19022;
chunk__19010_19016 = G__19023;
count__19011_19017 = G__19024;
i__19012_19018 = G__19025;
continue;
}
} else
{var temp__4126__auto___19026 = cljs.core.seq.call(null,seq__19009_19015);if(temp__4126__auto___19026)
{var seq__19009_19027__$1 = temp__4126__auto___19026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19009_19027__$1))
{var c__4297__auto___19028 = cljs.core.chunk_first.call(null,seq__19009_19027__$1);{
var G__19029 = cljs.core.chunk_rest.call(null,seq__19009_19027__$1);
var G__19030 = c__4297__auto___19028;
var G__19031 = cljs.core.count.call(null,c__4297__auto___19028);
var G__19032 = (0);
seq__19009_19015 = G__19029;
chunk__19010_19016 = G__19030;
count__19011_19017 = G__19031;
i__19012_19018 = G__19032;
continue;
}
} else
{var vec__19014_19033 = cljs.core.first.call(null,seq__19009_19027__$1);var k_19034 = cljs.core.nth.call(null,vec__19014_19033,(0),null);var v_19035 = cljs.core.nth.call(null,vec__19014_19033,(1),null);(evt[k_19034] = v_19035);
{
var G__19036 = cljs.core.next.call(null,seq__19009_19027__$1);
var G__19037 = null;
var G__19038 = (0);
var G__19039 = (0);
seq__19009_19015 = G__19036;
chunk__19010_19016 = G__19037;
count__19011_19017 = G__19038;
i__19012_19018 = G__19039;
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
return (function (p1__19040_SHARP_){return goog.events.getListeners(p1__19040_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
