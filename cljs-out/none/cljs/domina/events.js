// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16954 = {};return obj16954;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16958 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16958 = (function (evt,f,create_listener_function,meta16959){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16959 = meta16959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16958.cljs$lang$type = true;
domina.events.t16958.cljs$lang$ctorStr = "domina.events/t16958";
domina.events.t16958.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16958");
});
domina.events.t16958.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16958.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16958.prototype.domina$events$Event$ = true;
domina.events.t16958.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16958.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16958.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16958.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16958.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16958.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16960){var self__ = this;
var _16960__$1 = this;return self__.meta16959;
});
domina.events.t16958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16960,meta16959__$1){var self__ = this;
var _16960__$1 = this;return (new domina.events.t16958(self__.evt,self__.f,self__.create_listener_function,meta16959__$1));
});
domina.events.__GT_t16958 = (function __GT_t16958(evt__$1,f__$1,create_listener_function__$1,meta16959){return (new domina.events.t16958(evt__$1,f__$1,create_listener_function__$1,meta16959));
});
}
return (new domina.events.t16958(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16965(s__16966){return (new cljs.core.LazySeq(null,(function (){var s__16966__$1 = s__16966;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16966__$1);if(temp__4092__auto__)
{var s__16966__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16966__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16966__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16968 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16967 = 0;while(true){
if((i__16967 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16967);cljs.core.chunk_append.call(null,b__16968,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16969 = (i__16967 + 1);
i__16967 = G__16969;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16968),iter__16965.call(null,cljs.core.chunk_rest.call(null,s__16966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16968),null);
}
} else
{var node = cljs.core.first.call(null,s__16966__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16965.call(null,cljs.core.rest.call(null,s__16966__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16978 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16979 = null;var count__16980 = 0;var i__16981 = 0;while(true){
if((i__16981 < count__16980))
{var node = cljs.core._nth.call(null,chunk__16979,i__16981);goog.events.removeAll(node);
{
var G__16986 = seq__16978;
var G__16987 = chunk__16979;
var G__16988 = count__16980;
var G__16989 = (i__16981 + 1);
seq__16978 = G__16986;
chunk__16979 = G__16987;
count__16980 = G__16988;
i__16981 = G__16989;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16978);if(temp__4092__auto__)
{var seq__16978__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16978__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16978__$1);{
var G__16990 = cljs.core.chunk_rest.call(null,seq__16978__$1);
var G__16991 = c__4148__auto__;
var G__16992 = cljs.core.count.call(null,c__4148__auto__);
var G__16993 = 0;
seq__16978 = G__16990;
chunk__16979 = G__16991;
count__16980 = G__16992;
i__16981 = G__16993;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16978__$1);goog.events.removeAll(node);
{
var G__16994 = cljs.core.next.call(null,seq__16978__$1);
var G__16995 = null;
var G__16996 = 0;
var G__16997 = 0;
seq__16978 = G__16994;
chunk__16979 = G__16995;
count__16980 = G__16996;
i__16981 = G__16997;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16982 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16983 = null;var count__16984 = 0;var i__16985 = 0;while(true){
if((i__16985 < count__16984))
{var node = cljs.core._nth.call(null,chunk__16983,i__16985);goog.events.removeAll(node,type__$1);
{
var G__16998 = seq__16982;
var G__16999 = chunk__16983;
var G__17000 = count__16984;
var G__17001 = (i__16985 + 1);
seq__16982 = G__16998;
chunk__16983 = G__16999;
count__16984 = G__17000;
i__16985 = G__17001;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16982);if(temp__4092__auto__)
{var seq__16982__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16982__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16982__$1);{
var G__17002 = cljs.core.chunk_rest.call(null,seq__16982__$1);
var G__17003 = c__4148__auto__;
var G__17004 = cljs.core.count.call(null,c__4148__auto__);
var G__17005 = 0;
seq__16982 = G__17002;
chunk__16983 = G__17003;
count__16984 = G__17004;
i__16985 = G__17005;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16982__$1);goog.events.removeAll(node,type__$1);
{
var G__17006 = cljs.core.next.call(null,seq__16982__$1);
var G__17007 = null;
var G__17008 = 0;
var G__17009 = 0;
seq__16982 = G__17006;
chunk__16983 = G__17007;
count__16984 = G__17008;
i__16985 = G__17009;
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
var G__17010 = parent;
var G__17011 = cljs.core.cons.call(null,parent,so_far);
n = G__17010;
so_far = G__17011;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17020_17028 = cljs.core.seq.call(null,ancestors);var chunk__17021_17029 = null;var count__17022_17030 = 0;var i__17023_17031 = 0;while(true){
if((i__17023_17031 < count__17022_17030))
{var n_17032 = cljs.core._nth.call(null,chunk__17021_17029,i__17023_17031);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17032;
goog.events.fireListeners(n_17032,evt.type,true,evt);
}
{
var G__17033 = seq__17020_17028;
var G__17034 = chunk__17021_17029;
var G__17035 = count__17022_17030;
var G__17036 = (i__17023_17031 + 1);
seq__17020_17028 = G__17033;
chunk__17021_17029 = G__17034;
count__17022_17030 = G__17035;
i__17023_17031 = G__17036;
continue;
}
} else
{var temp__4092__auto___17037 = cljs.core.seq.call(null,seq__17020_17028);if(temp__4092__auto___17037)
{var seq__17020_17038__$1 = temp__4092__auto___17037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17020_17038__$1))
{var c__4148__auto___17039 = cljs.core.chunk_first.call(null,seq__17020_17038__$1);{
var G__17040 = cljs.core.chunk_rest.call(null,seq__17020_17038__$1);
var G__17041 = c__4148__auto___17039;
var G__17042 = cljs.core.count.call(null,c__4148__auto___17039);
var G__17043 = 0;
seq__17020_17028 = G__17040;
chunk__17021_17029 = G__17041;
count__17022_17030 = G__17042;
i__17023_17031 = G__17043;
continue;
}
} else
{var n_17044 = cljs.core.first.call(null,seq__17020_17038__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17044;
goog.events.fireListeners(n_17044,evt.type,true,evt);
}
{
var G__17045 = cljs.core.next.call(null,seq__17020_17038__$1);
var G__17046 = null;
var G__17047 = 0;
var G__17048 = 0;
seq__17020_17028 = G__17045;
chunk__17021_17029 = G__17046;
count__17022_17030 = G__17047;
i__17023_17031 = G__17048;
continue;
}
}
} else
{}
}
break;
}
var seq__17024_17049 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17025_17050 = null;var count__17026_17051 = 0;var i__17027_17052 = 0;while(true){
if((i__17027_17052 < count__17026_17051))
{var n_17053 = cljs.core._nth.call(null,chunk__17025_17050,i__17027_17052);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17053;
goog.events.fireListeners(n_17053,evt.type,false,evt);
}
{
var G__17054 = seq__17024_17049;
var G__17055 = chunk__17025_17050;
var G__17056 = count__17026_17051;
var G__17057 = (i__17027_17052 + 1);
seq__17024_17049 = G__17054;
chunk__17025_17050 = G__17055;
count__17026_17051 = G__17056;
i__17027_17052 = G__17057;
continue;
}
} else
{var temp__4092__auto___17058 = cljs.core.seq.call(null,seq__17024_17049);if(temp__4092__auto___17058)
{var seq__17024_17059__$1 = temp__4092__auto___17058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17024_17059__$1))
{var c__4148__auto___17060 = cljs.core.chunk_first.call(null,seq__17024_17059__$1);{
var G__17061 = cljs.core.chunk_rest.call(null,seq__17024_17059__$1);
var G__17062 = c__4148__auto___17060;
var G__17063 = cljs.core.count.call(null,c__4148__auto___17060);
var G__17064 = 0;
seq__17024_17049 = G__17061;
chunk__17025_17050 = G__17062;
count__17026_17051 = G__17063;
i__17027_17052 = G__17064;
continue;
}
} else
{var n_17065 = cljs.core.first.call(null,seq__17024_17059__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17065;
goog.events.fireListeners(n_17065,evt.type,false,evt);
}
{
var G__17066 = cljs.core.next.call(null,seq__17024_17059__$1);
var G__17067 = null;
var G__17068 = 0;
var G__17069 = 0;
seq__17024_17049 = G__17066;
chunk__17025_17050 = G__17067;
count__17026_17051 = G__17068;
i__17027_17052 = G__17069;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17076_17082 = cljs.core.seq.call(null,evt_map);var chunk__17077_17083 = null;var count__17078_17084 = 0;var i__17079_17085 = 0;while(true){
if((i__17079_17085 < count__17078_17084))
{var vec__17080_17086 = cljs.core._nth.call(null,chunk__17077_17083,i__17079_17085);var k_17087 = cljs.core.nth.call(null,vec__17080_17086,0,null);var v_17088 = cljs.core.nth.call(null,vec__17080_17086,1,null);(evt[k_17087] = v_17088);
{
var G__17089 = seq__17076_17082;
var G__17090 = chunk__17077_17083;
var G__17091 = count__17078_17084;
var G__17092 = (i__17079_17085 + 1);
seq__17076_17082 = G__17089;
chunk__17077_17083 = G__17090;
count__17078_17084 = G__17091;
i__17079_17085 = G__17092;
continue;
}
} else
{var temp__4092__auto___17093 = cljs.core.seq.call(null,seq__17076_17082);if(temp__4092__auto___17093)
{var seq__17076_17094__$1 = temp__4092__auto___17093;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17076_17094__$1))
{var c__4148__auto___17095 = cljs.core.chunk_first.call(null,seq__17076_17094__$1);{
var G__17096 = cljs.core.chunk_rest.call(null,seq__17076_17094__$1);
var G__17097 = c__4148__auto___17095;
var G__17098 = cljs.core.count.call(null,c__4148__auto___17095);
var G__17099 = 0;
seq__17076_17082 = G__17096;
chunk__17077_17083 = G__17097;
count__17078_17084 = G__17098;
i__17079_17085 = G__17099;
continue;
}
} else
{var vec__17081_17100 = cljs.core.first.call(null,seq__17076_17094__$1);var k_17101 = cljs.core.nth.call(null,vec__17081_17100,0,null);var v_17102 = cljs.core.nth.call(null,vec__17081_17100,1,null);(evt[k_17101] = v_17102);
{
var G__17103 = cljs.core.next.call(null,seq__17076_17094__$1);
var G__17104 = null;
var G__17105 = 0;
var G__17106 = 0;
seq__17076_17082 = G__17103;
chunk__17077_17083 = G__17104;
count__17078_17084 = G__17105;
i__17079_17085 = G__17106;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17107_SHARP_){return goog.events.getListeners(p1__17107_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map