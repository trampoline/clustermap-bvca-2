// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj66914 = {};return obj66914;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t66918 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t66918 = (function (evt,f,create_listener_function,meta66919){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta66919 = meta66919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t66918.cljs$lang$type = true;
domina.events.t66918.cljs$lang$ctorStr = "domina.events/t66918";
domina.events.t66918.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t66918");
});
domina.events.t66918.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t66918.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t66918.prototype.domina$events$Event$ = true;
domina.events.t66918.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t66918.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t66918.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t66918.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t66918.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t66918.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t66918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66920){var self__ = this;
var _66920__$1 = this;return self__.meta66919;
});
domina.events.t66918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66920,meta66919__$1){var self__ = this;
var _66920__$1 = this;return (new domina.events.t66918(self__.evt,self__.f,self__.create_listener_function,meta66919__$1));
});
domina.events.__GT_t66918 = (function __GT_t66918(evt__$1,f__$1,create_listener_function__$1,meta66919){return (new domina.events.t66918(evt__$1,f__$1,create_listener_function__$1,meta66919));
});
}
return (new domina.events.t66918(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__66925(s__66926){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__66926__$1 = s__66926;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__66926__$1);if(temp__4126__auto__)
{var s__66926__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__66926__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__66926__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__66928 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__66927 = (0);while(true){
if((i__66927 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__66927);cljs.core.chunk_append.call(null,b__66928,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__66929 = (i__66927 + (1));
i__66927 = G__66929;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66928),iter__66925.call(null,cljs.core.chunk_rest.call(null,s__66926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__66928),null);
}
} else
{var node = cljs.core.first.call(null,s__66926__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__66925.call(null,cljs.core.rest.call(null,s__66926__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__66938 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__66939 = null;var count__66940 = (0);var i__66941 = (0);while(true){
if((i__66941 < count__66940))
{var node = cljs.core._nth.call(null,chunk__66939,i__66941);goog.events.removeAll(node);
{
var G__66946 = seq__66938;
var G__66947 = chunk__66939;
var G__66948 = count__66940;
var G__66949 = (i__66941 + (1));
seq__66938 = G__66946;
chunk__66939 = G__66947;
count__66940 = G__66948;
i__66941 = G__66949;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__66938);if(temp__4126__auto__)
{var seq__66938__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66938__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__66938__$1);{
var G__66950 = cljs.core.chunk_rest.call(null,seq__66938__$1);
var G__66951 = c__4314__auto__;
var G__66952 = cljs.core.count.call(null,c__4314__auto__);
var G__66953 = (0);
seq__66938 = G__66950;
chunk__66939 = G__66951;
count__66940 = G__66952;
i__66941 = G__66953;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__66938__$1);goog.events.removeAll(node);
{
var G__66954 = cljs.core.next.call(null,seq__66938__$1);
var G__66955 = null;
var G__66956 = (0);
var G__66957 = (0);
seq__66938 = G__66954;
chunk__66939 = G__66955;
count__66940 = G__66956;
i__66941 = G__66957;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__66942 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__66943 = null;var count__66944 = (0);var i__66945 = (0);while(true){
if((i__66945 < count__66944))
{var node = cljs.core._nth.call(null,chunk__66943,i__66945);goog.events.removeAll(node,type__$1);
{
var G__66958 = seq__66942;
var G__66959 = chunk__66943;
var G__66960 = count__66944;
var G__66961 = (i__66945 + (1));
seq__66942 = G__66958;
chunk__66943 = G__66959;
count__66944 = G__66960;
i__66945 = G__66961;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__66942);if(temp__4126__auto__)
{var seq__66942__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66942__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__66942__$1);{
var G__66962 = cljs.core.chunk_rest.call(null,seq__66942__$1);
var G__66963 = c__4314__auto__;
var G__66964 = cljs.core.count.call(null,c__4314__auto__);
var G__66965 = (0);
seq__66942 = G__66962;
chunk__66943 = G__66963;
count__66944 = G__66964;
i__66945 = G__66965;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__66942__$1);goog.events.removeAll(node,type__$1);
{
var G__66966 = cljs.core.next.call(null,seq__66942__$1);
var G__66967 = null;
var G__66968 = (0);
var G__66969 = (0);
seq__66942 = G__66966;
chunk__66943 = G__66967;
count__66944 = G__66968;
i__66945 = G__66969;
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
var G__66970 = parent;
var G__66971 = cljs.core.cons.call(null,parent,so_far);
n = G__66970;
so_far = G__66971;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__66980_66988 = cljs.core.seq.call(null,ancestors);var chunk__66981_66989 = null;var count__66982_66990 = (0);var i__66983_66991 = (0);while(true){
if((i__66983_66991 < count__66982_66990))
{var n_66992 = cljs.core._nth.call(null,chunk__66981_66989,i__66983_66991);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_66992;
goog.events.fireListeners(n_66992,evt.type,true,evt);
}
{
var G__66993 = seq__66980_66988;
var G__66994 = chunk__66981_66989;
var G__66995 = count__66982_66990;
var G__66996 = (i__66983_66991 + (1));
seq__66980_66988 = G__66993;
chunk__66981_66989 = G__66994;
count__66982_66990 = G__66995;
i__66983_66991 = G__66996;
continue;
}
} else
{var temp__4126__auto___66997 = cljs.core.seq.call(null,seq__66980_66988);if(temp__4126__auto___66997)
{var seq__66980_66998__$1 = temp__4126__auto___66997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66980_66998__$1))
{var c__4314__auto___66999 = cljs.core.chunk_first.call(null,seq__66980_66998__$1);{
var G__67000 = cljs.core.chunk_rest.call(null,seq__66980_66998__$1);
var G__67001 = c__4314__auto___66999;
var G__67002 = cljs.core.count.call(null,c__4314__auto___66999);
var G__67003 = (0);
seq__66980_66988 = G__67000;
chunk__66981_66989 = G__67001;
count__66982_66990 = G__67002;
i__66983_66991 = G__67003;
continue;
}
} else
{var n_67004 = cljs.core.first.call(null,seq__66980_66998__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_67004;
goog.events.fireListeners(n_67004,evt.type,true,evt);
}
{
var G__67005 = cljs.core.next.call(null,seq__66980_66998__$1);
var G__67006 = null;
var G__67007 = (0);
var G__67008 = (0);
seq__66980_66988 = G__67005;
chunk__66981_66989 = G__67006;
count__66982_66990 = G__67007;
i__66983_66991 = G__67008;
continue;
}
}
} else
{}
}
break;
}
var seq__66984_67009 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__66985_67010 = null;var count__66986_67011 = (0);var i__66987_67012 = (0);while(true){
if((i__66987_67012 < count__66986_67011))
{var n_67013 = cljs.core._nth.call(null,chunk__66985_67010,i__66987_67012);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_67013;
goog.events.fireListeners(n_67013,evt.type,false,evt);
}
{
var G__67014 = seq__66984_67009;
var G__67015 = chunk__66985_67010;
var G__67016 = count__66986_67011;
var G__67017 = (i__66987_67012 + (1));
seq__66984_67009 = G__67014;
chunk__66985_67010 = G__67015;
count__66986_67011 = G__67016;
i__66987_67012 = G__67017;
continue;
}
} else
{var temp__4126__auto___67018 = cljs.core.seq.call(null,seq__66984_67009);if(temp__4126__auto___67018)
{var seq__66984_67019__$1 = temp__4126__auto___67018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__66984_67019__$1))
{var c__4314__auto___67020 = cljs.core.chunk_first.call(null,seq__66984_67019__$1);{
var G__67021 = cljs.core.chunk_rest.call(null,seq__66984_67019__$1);
var G__67022 = c__4314__auto___67020;
var G__67023 = cljs.core.count.call(null,c__4314__auto___67020);
var G__67024 = (0);
seq__66984_67009 = G__67021;
chunk__66985_67010 = G__67022;
count__66986_67011 = G__67023;
i__66987_67012 = G__67024;
continue;
}
} else
{var n_67025 = cljs.core.first.call(null,seq__66984_67019__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_67025;
goog.events.fireListeners(n_67025,evt.type,false,evt);
}
{
var G__67026 = cljs.core.next.call(null,seq__66984_67019__$1);
var G__67027 = null;
var G__67028 = (0);
var G__67029 = (0);
seq__66984_67009 = G__67026;
chunk__66985_67010 = G__67027;
count__66986_67011 = G__67028;
i__66987_67012 = G__67029;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__67036_67042 = cljs.core.seq.call(null,evt_map);var chunk__67037_67043 = null;var count__67038_67044 = (0);var i__67039_67045 = (0);while(true){
if((i__67039_67045 < count__67038_67044))
{var vec__67040_67046 = cljs.core._nth.call(null,chunk__67037_67043,i__67039_67045);var k_67047 = cljs.core.nth.call(null,vec__67040_67046,(0),null);var v_67048 = cljs.core.nth.call(null,vec__67040_67046,(1),null);(evt[k_67047] = v_67048);
{
var G__67049 = seq__67036_67042;
var G__67050 = chunk__67037_67043;
var G__67051 = count__67038_67044;
var G__67052 = (i__67039_67045 + (1));
seq__67036_67042 = G__67049;
chunk__67037_67043 = G__67050;
count__67038_67044 = G__67051;
i__67039_67045 = G__67052;
continue;
}
} else
{var temp__4126__auto___67053 = cljs.core.seq.call(null,seq__67036_67042);if(temp__4126__auto___67053)
{var seq__67036_67054__$1 = temp__4126__auto___67053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__67036_67054__$1))
{var c__4314__auto___67055 = cljs.core.chunk_first.call(null,seq__67036_67054__$1);{
var G__67056 = cljs.core.chunk_rest.call(null,seq__67036_67054__$1);
var G__67057 = c__4314__auto___67055;
var G__67058 = cljs.core.count.call(null,c__4314__auto___67055);
var G__67059 = (0);
seq__67036_67042 = G__67056;
chunk__67037_67043 = G__67057;
count__67038_67044 = G__67058;
i__67039_67045 = G__67059;
continue;
}
} else
{var vec__67041_67060 = cljs.core.first.call(null,seq__67036_67054__$1);var k_67061 = cljs.core.nth.call(null,vec__67041_67060,(0),null);var v_67062 = cljs.core.nth.call(null,vec__67041_67060,(1),null);(evt[k_67061] = v_67062);
{
var G__67063 = cljs.core.next.call(null,seq__67036_67054__$1);
var G__67064 = null;
var G__67065 = (0);
var G__67066 = (0);
seq__67036_67042 = G__67063;
chunk__67037_67043 = G__67064;
count__67038_67044 = G__67065;
i__67039_67045 = G__67066;
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
return (function (p1__67067_SHARP_){return goog.events.getListeners(p1__67067_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map