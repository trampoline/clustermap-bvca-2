// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18921 = {};return obj18921;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18925 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18925 = (function (evt,f,create_listener_function,meta18926){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18926 = meta18926;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18925.cljs$lang$type = true;
domina.events.t18925.cljs$lang$ctorStr = "domina.events/t18925";
domina.events.t18925.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t18925");
});
domina.events.t18925.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18925.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t18925.prototype.domina$events$Event$ = true;
domina.events.t18925.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18925.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18925.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18925.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18925.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18925.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18925.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18927){var self__ = this;
var _18927__$1 = this;return self__.meta18926;
});
domina.events.t18925.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18927,meta18926__$1){var self__ = this;
var _18927__$1 = this;return (new domina.events.t18925(self__.evt,self__.f,self__.create_listener_function,meta18926__$1));
});
domina.events.__GT_t18925 = (function __GT_t18925(evt__$1,f__$1,create_listener_function__$1,meta18926){return (new domina.events.t18925(evt__$1,f__$1,create_listener_function__$1,meta18926));
});
}
return (new domina.events.t18925(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__18932(s__18933){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__18933__$1 = s__18933;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18933__$1);if(temp__4126__auto__)
{var s__18933__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18933__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__18933__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__18935 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__18934 = (0);while(true){
if((i__18934 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__18934);cljs.core.chunk_append.call(null,b__18935,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18936 = (i__18934 + (1));
i__18934 = G__18936;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18935),iter__18932.call(null,cljs.core.chunk_rest.call(null,s__18933__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18935),null);
}
} else
{var node = cljs.core.first.call(null,s__18933__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18932.call(null,cljs.core.rest.call(null,s__18933__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__18945 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18946 = null;var count__18947 = (0);var i__18948 = (0);while(true){
if((i__18948 < count__18947))
{var node = cljs.core._nth.call(null,chunk__18946,i__18948);goog.events.removeAll(node);
{
var G__18953 = seq__18945;
var G__18954 = chunk__18946;
var G__18955 = count__18947;
var G__18956 = (i__18948 + (1));
seq__18945 = G__18953;
chunk__18946 = G__18954;
count__18947 = G__18955;
i__18948 = G__18956;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18945);if(temp__4126__auto__)
{var seq__18945__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18945__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__18945__$1);{
var G__18957 = cljs.core.chunk_rest.call(null,seq__18945__$1);
var G__18958 = c__4314__auto__;
var G__18959 = cljs.core.count.call(null,c__4314__auto__);
var G__18960 = (0);
seq__18945 = G__18957;
chunk__18946 = G__18958;
count__18947 = G__18959;
i__18948 = G__18960;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18945__$1);goog.events.removeAll(node);
{
var G__18961 = cljs.core.next.call(null,seq__18945__$1);
var G__18962 = null;
var G__18963 = (0);
var G__18964 = (0);
seq__18945 = G__18961;
chunk__18946 = G__18962;
count__18947 = G__18963;
i__18948 = G__18964;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18949 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18950 = null;var count__18951 = (0);var i__18952 = (0);while(true){
if((i__18952 < count__18951))
{var node = cljs.core._nth.call(null,chunk__18950,i__18952);goog.events.removeAll(node,type__$1);
{
var G__18965 = seq__18949;
var G__18966 = chunk__18950;
var G__18967 = count__18951;
var G__18968 = (i__18952 + (1));
seq__18949 = G__18965;
chunk__18950 = G__18966;
count__18951 = G__18967;
i__18952 = G__18968;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18949);if(temp__4126__auto__)
{var seq__18949__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18949__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__18949__$1);{
var G__18969 = cljs.core.chunk_rest.call(null,seq__18949__$1);
var G__18970 = c__4314__auto__;
var G__18971 = cljs.core.count.call(null,c__4314__auto__);
var G__18972 = (0);
seq__18949 = G__18969;
chunk__18950 = G__18970;
count__18951 = G__18971;
i__18952 = G__18972;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18949__$1);goog.events.removeAll(node,type__$1);
{
var G__18973 = cljs.core.next.call(null,seq__18949__$1);
var G__18974 = null;
var G__18975 = (0);
var G__18976 = (0);
seq__18949 = G__18973;
chunk__18950 = G__18974;
count__18951 = G__18975;
i__18952 = G__18976;
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
var G__18977 = parent;
var G__18978 = cljs.core.cons.call(null,parent,so_far);
n = G__18977;
so_far = G__18978;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18987_18995 = cljs.core.seq.call(null,ancestors);var chunk__18988_18996 = null;var count__18989_18997 = (0);var i__18990_18998 = (0);while(true){
if((i__18990_18998 < count__18989_18997))
{var n_18999 = cljs.core._nth.call(null,chunk__18988_18996,i__18990_18998);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18999;
goog.events.fireListeners(n_18999,evt.type,true,evt);
}
{
var G__19000 = seq__18987_18995;
var G__19001 = chunk__18988_18996;
var G__19002 = count__18989_18997;
var G__19003 = (i__18990_18998 + (1));
seq__18987_18995 = G__19000;
chunk__18988_18996 = G__19001;
count__18989_18997 = G__19002;
i__18990_18998 = G__19003;
continue;
}
} else
{var temp__4126__auto___19004 = cljs.core.seq.call(null,seq__18987_18995);if(temp__4126__auto___19004)
{var seq__18987_19005__$1 = temp__4126__auto___19004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18987_19005__$1))
{var c__4314__auto___19006 = cljs.core.chunk_first.call(null,seq__18987_19005__$1);{
var G__19007 = cljs.core.chunk_rest.call(null,seq__18987_19005__$1);
var G__19008 = c__4314__auto___19006;
var G__19009 = cljs.core.count.call(null,c__4314__auto___19006);
var G__19010 = (0);
seq__18987_18995 = G__19007;
chunk__18988_18996 = G__19008;
count__18989_18997 = G__19009;
i__18990_18998 = G__19010;
continue;
}
} else
{var n_19011 = cljs.core.first.call(null,seq__18987_19005__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19011;
goog.events.fireListeners(n_19011,evt.type,true,evt);
}
{
var G__19012 = cljs.core.next.call(null,seq__18987_19005__$1);
var G__19013 = null;
var G__19014 = (0);
var G__19015 = (0);
seq__18987_18995 = G__19012;
chunk__18988_18996 = G__19013;
count__18989_18997 = G__19014;
i__18990_18998 = G__19015;
continue;
}
}
} else
{}
}
break;
}
var seq__18991_19016 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18992_19017 = null;var count__18993_19018 = (0);var i__18994_19019 = (0);while(true){
if((i__18994_19019 < count__18993_19018))
{var n_19020 = cljs.core._nth.call(null,chunk__18992_19017,i__18994_19019);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19020;
goog.events.fireListeners(n_19020,evt.type,false,evt);
}
{
var G__19021 = seq__18991_19016;
var G__19022 = chunk__18992_19017;
var G__19023 = count__18993_19018;
var G__19024 = (i__18994_19019 + (1));
seq__18991_19016 = G__19021;
chunk__18992_19017 = G__19022;
count__18993_19018 = G__19023;
i__18994_19019 = G__19024;
continue;
}
} else
{var temp__4126__auto___19025 = cljs.core.seq.call(null,seq__18991_19016);if(temp__4126__auto___19025)
{var seq__18991_19026__$1 = temp__4126__auto___19025;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18991_19026__$1))
{var c__4314__auto___19027 = cljs.core.chunk_first.call(null,seq__18991_19026__$1);{
var G__19028 = cljs.core.chunk_rest.call(null,seq__18991_19026__$1);
var G__19029 = c__4314__auto___19027;
var G__19030 = cljs.core.count.call(null,c__4314__auto___19027);
var G__19031 = (0);
seq__18991_19016 = G__19028;
chunk__18992_19017 = G__19029;
count__18993_19018 = G__19030;
i__18994_19019 = G__19031;
continue;
}
} else
{var n_19032 = cljs.core.first.call(null,seq__18991_19026__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19032;
goog.events.fireListeners(n_19032,evt.type,false,evt);
}
{
var G__19033 = cljs.core.next.call(null,seq__18991_19026__$1);
var G__19034 = null;
var G__19035 = (0);
var G__19036 = (0);
seq__18991_19016 = G__19033;
chunk__18992_19017 = G__19034;
count__18993_19018 = G__19035;
i__18994_19019 = G__19036;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19043_19049 = cljs.core.seq.call(null,evt_map);var chunk__19044_19050 = null;var count__19045_19051 = (0);var i__19046_19052 = (0);while(true){
if((i__19046_19052 < count__19045_19051))
{var vec__19047_19053 = cljs.core._nth.call(null,chunk__19044_19050,i__19046_19052);var k_19054 = cljs.core.nth.call(null,vec__19047_19053,(0),null);var v_19055 = cljs.core.nth.call(null,vec__19047_19053,(1),null);(evt[k_19054] = v_19055);
{
var G__19056 = seq__19043_19049;
var G__19057 = chunk__19044_19050;
var G__19058 = count__19045_19051;
var G__19059 = (i__19046_19052 + (1));
seq__19043_19049 = G__19056;
chunk__19044_19050 = G__19057;
count__19045_19051 = G__19058;
i__19046_19052 = G__19059;
continue;
}
} else
{var temp__4126__auto___19060 = cljs.core.seq.call(null,seq__19043_19049);if(temp__4126__auto___19060)
{var seq__19043_19061__$1 = temp__4126__auto___19060;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19043_19061__$1))
{var c__4314__auto___19062 = cljs.core.chunk_first.call(null,seq__19043_19061__$1);{
var G__19063 = cljs.core.chunk_rest.call(null,seq__19043_19061__$1);
var G__19064 = c__4314__auto___19062;
var G__19065 = cljs.core.count.call(null,c__4314__auto___19062);
var G__19066 = (0);
seq__19043_19049 = G__19063;
chunk__19044_19050 = G__19064;
count__19045_19051 = G__19065;
i__19046_19052 = G__19066;
continue;
}
} else
{var vec__19048_19067 = cljs.core.first.call(null,seq__19043_19061__$1);var k_19068 = cljs.core.nth.call(null,vec__19048_19067,(0),null);var v_19069 = cljs.core.nth.call(null,vec__19048_19067,(1),null);(evt[k_19068] = v_19069);
{
var G__19070 = cljs.core.next.call(null,seq__19043_19061__$1);
var G__19071 = null;
var G__19072 = (0);
var G__19073 = (0);
seq__19043_19049 = G__19070;
chunk__19044_19050 = G__19071;
count__19045_19051 = G__19072;
i__19046_19052 = G__19073;
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
return (function (p1__19074_SHARP_){return goog.events.getListeners(p1__19074_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
