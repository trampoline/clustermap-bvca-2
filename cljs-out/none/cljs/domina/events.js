// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16950 = {};return obj16950;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16954 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16954 = (function (evt,f,create_listener_function,meta16955){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16955 = meta16955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16954.cljs$lang$type = true;
domina.events.t16954.cljs$lang$ctorStr = "domina.events/t16954";
domina.events.t16954.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16954");
});
domina.events.t16954.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16954.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16954.prototype.domina$events$Event$ = true;
domina.events.t16954.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16954.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16954.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16954.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16954.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16954.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16956){var self__ = this;
var _16956__$1 = this;return self__.meta16955;
});
domina.events.t16954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16956,meta16955__$1){var self__ = this;
var _16956__$1 = this;return (new domina.events.t16954(self__.evt,self__.f,self__.create_listener_function,meta16955__$1));
});
domina.events.__GT_t16954 = (function __GT_t16954(evt__$1,f__$1,create_listener_function__$1,meta16955){return (new domina.events.t16954(evt__$1,f__$1,create_listener_function__$1,meta16955));
});
}
return (new domina.events.t16954(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16961(s__16962){return (new cljs.core.LazySeq(null,(function (){var s__16962__$1 = s__16962;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16962__$1);if(temp__4092__auto__)
{var s__16962__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16962__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16962__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16964 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16963 = 0;while(true){
if((i__16963 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16963);cljs.core.chunk_append.call(null,b__16964,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16965 = (i__16963 + 1);
i__16963 = G__16965;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16964),iter__16961.call(null,cljs.core.chunk_rest.call(null,s__16962__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16964),null);
}
} else
{var node = cljs.core.first.call(null,s__16962__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16961.call(null,cljs.core.rest.call(null,s__16962__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16974 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16975 = null;var count__16976 = 0;var i__16977 = 0;while(true){
if((i__16977 < count__16976))
{var node = cljs.core._nth.call(null,chunk__16975,i__16977);goog.events.removeAll(node);
{
var G__16982 = seq__16974;
var G__16983 = chunk__16975;
var G__16984 = count__16976;
var G__16985 = (i__16977 + 1);
seq__16974 = G__16982;
chunk__16975 = G__16983;
count__16976 = G__16984;
i__16977 = G__16985;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16974);if(temp__4092__auto__)
{var seq__16974__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16974__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16974__$1);{
var G__16986 = cljs.core.chunk_rest.call(null,seq__16974__$1);
var G__16987 = c__4148__auto__;
var G__16988 = cljs.core.count.call(null,c__4148__auto__);
var G__16989 = 0;
seq__16974 = G__16986;
chunk__16975 = G__16987;
count__16976 = G__16988;
i__16977 = G__16989;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16974__$1);goog.events.removeAll(node);
{
var G__16990 = cljs.core.next.call(null,seq__16974__$1);
var G__16991 = null;
var G__16992 = 0;
var G__16993 = 0;
seq__16974 = G__16990;
chunk__16975 = G__16991;
count__16976 = G__16992;
i__16977 = G__16993;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16978 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16979 = null;var count__16980 = 0;var i__16981 = 0;while(true){
if((i__16981 < count__16980))
{var node = cljs.core._nth.call(null,chunk__16979,i__16981);goog.events.removeAll(node,type__$1);
{
var G__16994 = seq__16978;
var G__16995 = chunk__16979;
var G__16996 = count__16980;
var G__16997 = (i__16981 + 1);
seq__16978 = G__16994;
chunk__16979 = G__16995;
count__16980 = G__16996;
i__16981 = G__16997;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16978);if(temp__4092__auto__)
{var seq__16978__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16978__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16978__$1);{
var G__16998 = cljs.core.chunk_rest.call(null,seq__16978__$1);
var G__16999 = c__4148__auto__;
var G__17000 = cljs.core.count.call(null,c__4148__auto__);
var G__17001 = 0;
seq__16978 = G__16998;
chunk__16979 = G__16999;
count__16980 = G__17000;
i__16981 = G__17001;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16978__$1);goog.events.removeAll(node,type__$1);
{
var G__17002 = cljs.core.next.call(null,seq__16978__$1);
var G__17003 = null;
var G__17004 = 0;
var G__17005 = 0;
seq__16978 = G__17002;
chunk__16979 = G__17003;
count__16980 = G__17004;
i__16981 = G__17005;
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
var G__17006 = parent;
var G__17007 = cljs.core.cons.call(null,parent,so_far);
n = G__17006;
so_far = G__17007;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17016_17024 = cljs.core.seq.call(null,ancestors);var chunk__17017_17025 = null;var count__17018_17026 = 0;var i__17019_17027 = 0;while(true){
if((i__17019_17027 < count__17018_17026))
{var n_17028 = cljs.core._nth.call(null,chunk__17017_17025,i__17019_17027);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17028;
goog.events.fireListeners(n_17028,evt.type,true,evt);
}
{
var G__17029 = seq__17016_17024;
var G__17030 = chunk__17017_17025;
var G__17031 = count__17018_17026;
var G__17032 = (i__17019_17027 + 1);
seq__17016_17024 = G__17029;
chunk__17017_17025 = G__17030;
count__17018_17026 = G__17031;
i__17019_17027 = G__17032;
continue;
}
} else
{var temp__4092__auto___17033 = cljs.core.seq.call(null,seq__17016_17024);if(temp__4092__auto___17033)
{var seq__17016_17034__$1 = temp__4092__auto___17033;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17016_17034__$1))
{var c__4148__auto___17035 = cljs.core.chunk_first.call(null,seq__17016_17034__$1);{
var G__17036 = cljs.core.chunk_rest.call(null,seq__17016_17034__$1);
var G__17037 = c__4148__auto___17035;
var G__17038 = cljs.core.count.call(null,c__4148__auto___17035);
var G__17039 = 0;
seq__17016_17024 = G__17036;
chunk__17017_17025 = G__17037;
count__17018_17026 = G__17038;
i__17019_17027 = G__17039;
continue;
}
} else
{var n_17040 = cljs.core.first.call(null,seq__17016_17034__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17040;
goog.events.fireListeners(n_17040,evt.type,true,evt);
}
{
var G__17041 = cljs.core.next.call(null,seq__17016_17034__$1);
var G__17042 = null;
var G__17043 = 0;
var G__17044 = 0;
seq__17016_17024 = G__17041;
chunk__17017_17025 = G__17042;
count__17018_17026 = G__17043;
i__17019_17027 = G__17044;
continue;
}
}
} else
{}
}
break;
}
var seq__17020_17045 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17021_17046 = null;var count__17022_17047 = 0;var i__17023_17048 = 0;while(true){
if((i__17023_17048 < count__17022_17047))
{var n_17049 = cljs.core._nth.call(null,chunk__17021_17046,i__17023_17048);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17049;
goog.events.fireListeners(n_17049,evt.type,false,evt);
}
{
var G__17050 = seq__17020_17045;
var G__17051 = chunk__17021_17046;
var G__17052 = count__17022_17047;
var G__17053 = (i__17023_17048 + 1);
seq__17020_17045 = G__17050;
chunk__17021_17046 = G__17051;
count__17022_17047 = G__17052;
i__17023_17048 = G__17053;
continue;
}
} else
{var temp__4092__auto___17054 = cljs.core.seq.call(null,seq__17020_17045);if(temp__4092__auto___17054)
{var seq__17020_17055__$1 = temp__4092__auto___17054;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17020_17055__$1))
{var c__4148__auto___17056 = cljs.core.chunk_first.call(null,seq__17020_17055__$1);{
var G__17057 = cljs.core.chunk_rest.call(null,seq__17020_17055__$1);
var G__17058 = c__4148__auto___17056;
var G__17059 = cljs.core.count.call(null,c__4148__auto___17056);
var G__17060 = 0;
seq__17020_17045 = G__17057;
chunk__17021_17046 = G__17058;
count__17022_17047 = G__17059;
i__17023_17048 = G__17060;
continue;
}
} else
{var n_17061 = cljs.core.first.call(null,seq__17020_17055__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17061;
goog.events.fireListeners(n_17061,evt.type,false,evt);
}
{
var G__17062 = cljs.core.next.call(null,seq__17020_17055__$1);
var G__17063 = null;
var G__17064 = 0;
var G__17065 = 0;
seq__17020_17045 = G__17062;
chunk__17021_17046 = G__17063;
count__17022_17047 = G__17064;
i__17023_17048 = G__17065;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17072_17078 = cljs.core.seq.call(null,evt_map);var chunk__17073_17079 = null;var count__17074_17080 = 0;var i__17075_17081 = 0;while(true){
if((i__17075_17081 < count__17074_17080))
{var vec__17076_17082 = cljs.core._nth.call(null,chunk__17073_17079,i__17075_17081);var k_17083 = cljs.core.nth.call(null,vec__17076_17082,0,null);var v_17084 = cljs.core.nth.call(null,vec__17076_17082,1,null);(evt[k_17083] = v_17084);
{
var G__17085 = seq__17072_17078;
var G__17086 = chunk__17073_17079;
var G__17087 = count__17074_17080;
var G__17088 = (i__17075_17081 + 1);
seq__17072_17078 = G__17085;
chunk__17073_17079 = G__17086;
count__17074_17080 = G__17087;
i__17075_17081 = G__17088;
continue;
}
} else
{var temp__4092__auto___17089 = cljs.core.seq.call(null,seq__17072_17078);if(temp__4092__auto___17089)
{var seq__17072_17090__$1 = temp__4092__auto___17089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17072_17090__$1))
{var c__4148__auto___17091 = cljs.core.chunk_first.call(null,seq__17072_17090__$1);{
var G__17092 = cljs.core.chunk_rest.call(null,seq__17072_17090__$1);
var G__17093 = c__4148__auto___17091;
var G__17094 = cljs.core.count.call(null,c__4148__auto___17091);
var G__17095 = 0;
seq__17072_17078 = G__17092;
chunk__17073_17079 = G__17093;
count__17074_17080 = G__17094;
i__17075_17081 = G__17095;
continue;
}
} else
{var vec__17077_17096 = cljs.core.first.call(null,seq__17072_17090__$1);var k_17097 = cljs.core.nth.call(null,vec__17077_17096,0,null);var v_17098 = cljs.core.nth.call(null,vec__17077_17096,1,null);(evt[k_17097] = v_17098);
{
var G__17099 = cljs.core.next.call(null,seq__17072_17090__$1);
var G__17100 = null;
var G__17101 = 0;
var G__17102 = 0;
seq__17072_17078 = G__17099;
chunk__17073_17079 = G__17100;
count__17074_17080 = G__17101;
i__17075_17081 = G__17102;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17103_SHARP_){return goog.events.getListeners(p1__17103_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map