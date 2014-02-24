// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16930 = {};return obj16930;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16934 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16934 = (function (evt,f,create_listener_function,meta16935){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16935 = meta16935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16934.cljs$lang$type = true;
domina.events.t16934.cljs$lang$ctorStr = "domina.events/t16934";
domina.events.t16934.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16934");
});
domina.events.t16934.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16934.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16934.prototype.domina$events$Event$ = true;
domina.events.t16934.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16934.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16934.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16934.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16934.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16934.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16936){var self__ = this;
var _16936__$1 = this;return self__.meta16935;
});
domina.events.t16934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16936,meta16935__$1){var self__ = this;
var _16936__$1 = this;return (new domina.events.t16934(self__.evt,self__.f,self__.create_listener_function,meta16935__$1));
});
domina.events.__GT_t16934 = (function __GT_t16934(evt__$1,f__$1,create_listener_function__$1,meta16935){return (new domina.events.t16934(evt__$1,f__$1,create_listener_function__$1,meta16935));
});
}
return (new domina.events.t16934(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16941(s__16942){return (new cljs.core.LazySeq(null,(function (){var s__16942__$1 = s__16942;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16942__$1);if(temp__4092__auto__)
{var s__16942__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16942__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16942__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16944 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16943 = 0;while(true){
if((i__16943 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16943);cljs.core.chunk_append.call(null,b__16944,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16945 = (i__16943 + 1);
i__16943 = G__16945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16944),iter__16941.call(null,cljs.core.chunk_rest.call(null,s__16942__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16944),null);
}
} else
{var node = cljs.core.first.call(null,s__16942__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16941.call(null,cljs.core.rest.call(null,s__16942__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16954 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16955 = null;var count__16956 = 0;var i__16957 = 0;while(true){
if((i__16957 < count__16956))
{var node = cljs.core._nth.call(null,chunk__16955,i__16957);goog.events.removeAll(node);
{
var G__16962 = seq__16954;
var G__16963 = chunk__16955;
var G__16964 = count__16956;
var G__16965 = (i__16957 + 1);
seq__16954 = G__16962;
chunk__16955 = G__16963;
count__16956 = G__16964;
i__16957 = G__16965;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16954);if(temp__4092__auto__)
{var seq__16954__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16954__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16954__$1);{
var G__16966 = cljs.core.chunk_rest.call(null,seq__16954__$1);
var G__16967 = c__4148__auto__;
var G__16968 = cljs.core.count.call(null,c__4148__auto__);
var G__16969 = 0;
seq__16954 = G__16966;
chunk__16955 = G__16967;
count__16956 = G__16968;
i__16957 = G__16969;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16954__$1);goog.events.removeAll(node);
{
var G__16970 = cljs.core.next.call(null,seq__16954__$1);
var G__16971 = null;
var G__16972 = 0;
var G__16973 = 0;
seq__16954 = G__16970;
chunk__16955 = G__16971;
count__16956 = G__16972;
i__16957 = G__16973;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16958 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16959 = null;var count__16960 = 0;var i__16961 = 0;while(true){
if((i__16961 < count__16960))
{var node = cljs.core._nth.call(null,chunk__16959,i__16961);goog.events.removeAll(node,type__$1);
{
var G__16974 = seq__16958;
var G__16975 = chunk__16959;
var G__16976 = count__16960;
var G__16977 = (i__16961 + 1);
seq__16958 = G__16974;
chunk__16959 = G__16975;
count__16960 = G__16976;
i__16961 = G__16977;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16958);if(temp__4092__auto__)
{var seq__16958__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16958__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16958__$1);{
var G__16978 = cljs.core.chunk_rest.call(null,seq__16958__$1);
var G__16979 = c__4148__auto__;
var G__16980 = cljs.core.count.call(null,c__4148__auto__);
var G__16981 = 0;
seq__16958 = G__16978;
chunk__16959 = G__16979;
count__16960 = G__16980;
i__16961 = G__16981;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16958__$1);goog.events.removeAll(node,type__$1);
{
var G__16982 = cljs.core.next.call(null,seq__16958__$1);
var G__16983 = null;
var G__16984 = 0;
var G__16985 = 0;
seq__16958 = G__16982;
chunk__16959 = G__16983;
count__16960 = G__16984;
i__16961 = G__16985;
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
var G__16986 = parent;
var G__16987 = cljs.core.cons.call(null,parent,so_far);
n = G__16986;
so_far = G__16987;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16996_17004 = cljs.core.seq.call(null,ancestors);var chunk__16997_17005 = null;var count__16998_17006 = 0;var i__16999_17007 = 0;while(true){
if((i__16999_17007 < count__16998_17006))
{var n_17008 = cljs.core._nth.call(null,chunk__16997_17005,i__16999_17007);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17008;
goog.events.fireListeners(n_17008,evt.type,true,evt);
}
{
var G__17009 = seq__16996_17004;
var G__17010 = chunk__16997_17005;
var G__17011 = count__16998_17006;
var G__17012 = (i__16999_17007 + 1);
seq__16996_17004 = G__17009;
chunk__16997_17005 = G__17010;
count__16998_17006 = G__17011;
i__16999_17007 = G__17012;
continue;
}
} else
{var temp__4092__auto___17013 = cljs.core.seq.call(null,seq__16996_17004);if(temp__4092__auto___17013)
{var seq__16996_17014__$1 = temp__4092__auto___17013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16996_17014__$1))
{var c__4148__auto___17015 = cljs.core.chunk_first.call(null,seq__16996_17014__$1);{
var G__17016 = cljs.core.chunk_rest.call(null,seq__16996_17014__$1);
var G__17017 = c__4148__auto___17015;
var G__17018 = cljs.core.count.call(null,c__4148__auto___17015);
var G__17019 = 0;
seq__16996_17004 = G__17016;
chunk__16997_17005 = G__17017;
count__16998_17006 = G__17018;
i__16999_17007 = G__17019;
continue;
}
} else
{var n_17020 = cljs.core.first.call(null,seq__16996_17014__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17020;
goog.events.fireListeners(n_17020,evt.type,true,evt);
}
{
var G__17021 = cljs.core.next.call(null,seq__16996_17014__$1);
var G__17022 = null;
var G__17023 = 0;
var G__17024 = 0;
seq__16996_17004 = G__17021;
chunk__16997_17005 = G__17022;
count__16998_17006 = G__17023;
i__16999_17007 = G__17024;
continue;
}
}
} else
{}
}
break;
}
var seq__17000_17025 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17001_17026 = null;var count__17002_17027 = 0;var i__17003_17028 = 0;while(true){
if((i__17003_17028 < count__17002_17027))
{var n_17029 = cljs.core._nth.call(null,chunk__17001_17026,i__17003_17028);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17029;
goog.events.fireListeners(n_17029,evt.type,false,evt);
}
{
var G__17030 = seq__17000_17025;
var G__17031 = chunk__17001_17026;
var G__17032 = count__17002_17027;
var G__17033 = (i__17003_17028 + 1);
seq__17000_17025 = G__17030;
chunk__17001_17026 = G__17031;
count__17002_17027 = G__17032;
i__17003_17028 = G__17033;
continue;
}
} else
{var temp__4092__auto___17034 = cljs.core.seq.call(null,seq__17000_17025);if(temp__4092__auto___17034)
{var seq__17000_17035__$1 = temp__4092__auto___17034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17000_17035__$1))
{var c__4148__auto___17036 = cljs.core.chunk_first.call(null,seq__17000_17035__$1);{
var G__17037 = cljs.core.chunk_rest.call(null,seq__17000_17035__$1);
var G__17038 = c__4148__auto___17036;
var G__17039 = cljs.core.count.call(null,c__4148__auto___17036);
var G__17040 = 0;
seq__17000_17025 = G__17037;
chunk__17001_17026 = G__17038;
count__17002_17027 = G__17039;
i__17003_17028 = G__17040;
continue;
}
} else
{var n_17041 = cljs.core.first.call(null,seq__17000_17035__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17041;
goog.events.fireListeners(n_17041,evt.type,false,evt);
}
{
var G__17042 = cljs.core.next.call(null,seq__17000_17035__$1);
var G__17043 = null;
var G__17044 = 0;
var G__17045 = 0;
seq__17000_17025 = G__17042;
chunk__17001_17026 = G__17043;
count__17002_17027 = G__17044;
i__17003_17028 = G__17045;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17052_17058 = cljs.core.seq.call(null,evt_map);var chunk__17053_17059 = null;var count__17054_17060 = 0;var i__17055_17061 = 0;while(true){
if((i__17055_17061 < count__17054_17060))
{var vec__17056_17062 = cljs.core._nth.call(null,chunk__17053_17059,i__17055_17061);var k_17063 = cljs.core.nth.call(null,vec__17056_17062,0,null);var v_17064 = cljs.core.nth.call(null,vec__17056_17062,1,null);(evt[k_17063] = v_17064);
{
var G__17065 = seq__17052_17058;
var G__17066 = chunk__17053_17059;
var G__17067 = count__17054_17060;
var G__17068 = (i__17055_17061 + 1);
seq__17052_17058 = G__17065;
chunk__17053_17059 = G__17066;
count__17054_17060 = G__17067;
i__17055_17061 = G__17068;
continue;
}
} else
{var temp__4092__auto___17069 = cljs.core.seq.call(null,seq__17052_17058);if(temp__4092__auto___17069)
{var seq__17052_17070__$1 = temp__4092__auto___17069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17052_17070__$1))
{var c__4148__auto___17071 = cljs.core.chunk_first.call(null,seq__17052_17070__$1);{
var G__17072 = cljs.core.chunk_rest.call(null,seq__17052_17070__$1);
var G__17073 = c__4148__auto___17071;
var G__17074 = cljs.core.count.call(null,c__4148__auto___17071);
var G__17075 = 0;
seq__17052_17058 = G__17072;
chunk__17053_17059 = G__17073;
count__17054_17060 = G__17074;
i__17055_17061 = G__17075;
continue;
}
} else
{var vec__17057_17076 = cljs.core.first.call(null,seq__17052_17070__$1);var k_17077 = cljs.core.nth.call(null,vec__17057_17076,0,null);var v_17078 = cljs.core.nth.call(null,vec__17057_17076,1,null);(evt[k_17077] = v_17078);
{
var G__17079 = cljs.core.next.call(null,seq__17052_17070__$1);
var G__17080 = null;
var G__17081 = 0;
var G__17082 = 0;
seq__17052_17058 = G__17079;
chunk__17053_17059 = G__17080;
count__17054_17060 = G__17081;
i__17055_17061 = G__17082;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17083_SHARP_){return goog.events.getListeners(p1__17083_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map