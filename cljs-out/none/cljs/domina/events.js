// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16928 = {};return obj16928;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16932 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16932 = (function (evt,f,create_listener_function,meta16933){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16933 = meta16933;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16932.cljs$lang$type = true;
domina.events.t16932.cljs$lang$ctorStr = "domina.events/t16932";
domina.events.t16932.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16932");
});
domina.events.t16932.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16932.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16932.prototype.domina$events$Event$ = true;
domina.events.t16932.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16932.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16932.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16932.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16932.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16932.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16934){var self__ = this;
var _16934__$1 = this;return self__.meta16933;
});
domina.events.t16932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16934,meta16933__$1){var self__ = this;
var _16934__$1 = this;return (new domina.events.t16932(self__.evt,self__.f,self__.create_listener_function,meta16933__$1));
});
domina.events.__GT_t16932 = (function __GT_t16932(evt__$1,f__$1,create_listener_function__$1,meta16933){return (new domina.events.t16932(evt__$1,f__$1,create_listener_function__$1,meta16933));
});
}
return (new domina.events.t16932(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16939(s__16940){return (new cljs.core.LazySeq(null,(function (){var s__16940__$1 = s__16940;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16940__$1);if(temp__4092__auto__)
{var s__16940__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16940__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16940__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16942 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16941 = 0;while(true){
if((i__16941 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16941);cljs.core.chunk_append.call(null,b__16942,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16943 = (i__16941 + 1);
i__16941 = G__16943;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16942),iter__16939.call(null,cljs.core.chunk_rest.call(null,s__16940__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16942),null);
}
} else
{var node = cljs.core.first.call(null,s__16940__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16939.call(null,cljs.core.rest.call(null,s__16940__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16952 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16953 = null;var count__16954 = 0;var i__16955 = 0;while(true){
if((i__16955 < count__16954))
{var node = cljs.core._nth.call(null,chunk__16953,i__16955);goog.events.removeAll(node);
{
var G__16960 = seq__16952;
var G__16961 = chunk__16953;
var G__16962 = count__16954;
var G__16963 = (i__16955 + 1);
seq__16952 = G__16960;
chunk__16953 = G__16961;
count__16954 = G__16962;
i__16955 = G__16963;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16952);if(temp__4092__auto__)
{var seq__16952__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16952__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16952__$1);{
var G__16964 = cljs.core.chunk_rest.call(null,seq__16952__$1);
var G__16965 = c__4148__auto__;
var G__16966 = cljs.core.count.call(null,c__4148__auto__);
var G__16967 = 0;
seq__16952 = G__16964;
chunk__16953 = G__16965;
count__16954 = G__16966;
i__16955 = G__16967;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16952__$1);goog.events.removeAll(node);
{
var G__16968 = cljs.core.next.call(null,seq__16952__$1);
var G__16969 = null;
var G__16970 = 0;
var G__16971 = 0;
seq__16952 = G__16968;
chunk__16953 = G__16969;
count__16954 = G__16970;
i__16955 = G__16971;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16956 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16957 = null;var count__16958 = 0;var i__16959 = 0;while(true){
if((i__16959 < count__16958))
{var node = cljs.core._nth.call(null,chunk__16957,i__16959);goog.events.removeAll(node,type__$1);
{
var G__16972 = seq__16956;
var G__16973 = chunk__16957;
var G__16974 = count__16958;
var G__16975 = (i__16959 + 1);
seq__16956 = G__16972;
chunk__16957 = G__16973;
count__16958 = G__16974;
i__16959 = G__16975;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16956);if(temp__4092__auto__)
{var seq__16956__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16956__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16956__$1);{
var G__16976 = cljs.core.chunk_rest.call(null,seq__16956__$1);
var G__16977 = c__4148__auto__;
var G__16978 = cljs.core.count.call(null,c__4148__auto__);
var G__16979 = 0;
seq__16956 = G__16976;
chunk__16957 = G__16977;
count__16958 = G__16978;
i__16959 = G__16979;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16956__$1);goog.events.removeAll(node,type__$1);
{
var G__16980 = cljs.core.next.call(null,seq__16956__$1);
var G__16981 = null;
var G__16982 = 0;
var G__16983 = 0;
seq__16956 = G__16980;
chunk__16957 = G__16981;
count__16958 = G__16982;
i__16959 = G__16983;
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
var G__16984 = parent;
var G__16985 = cljs.core.cons.call(null,parent,so_far);
n = G__16984;
so_far = G__16985;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16994_17002 = cljs.core.seq.call(null,ancestors);var chunk__16995_17003 = null;var count__16996_17004 = 0;var i__16997_17005 = 0;while(true){
if((i__16997_17005 < count__16996_17004))
{var n_17006 = cljs.core._nth.call(null,chunk__16995_17003,i__16997_17005);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17006;
goog.events.fireListeners(n_17006,evt.type,true,evt);
}
{
var G__17007 = seq__16994_17002;
var G__17008 = chunk__16995_17003;
var G__17009 = count__16996_17004;
var G__17010 = (i__16997_17005 + 1);
seq__16994_17002 = G__17007;
chunk__16995_17003 = G__17008;
count__16996_17004 = G__17009;
i__16997_17005 = G__17010;
continue;
}
} else
{var temp__4092__auto___17011 = cljs.core.seq.call(null,seq__16994_17002);if(temp__4092__auto___17011)
{var seq__16994_17012__$1 = temp__4092__auto___17011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16994_17012__$1))
{var c__4148__auto___17013 = cljs.core.chunk_first.call(null,seq__16994_17012__$1);{
var G__17014 = cljs.core.chunk_rest.call(null,seq__16994_17012__$1);
var G__17015 = c__4148__auto___17013;
var G__17016 = cljs.core.count.call(null,c__4148__auto___17013);
var G__17017 = 0;
seq__16994_17002 = G__17014;
chunk__16995_17003 = G__17015;
count__16996_17004 = G__17016;
i__16997_17005 = G__17017;
continue;
}
} else
{var n_17018 = cljs.core.first.call(null,seq__16994_17012__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17018;
goog.events.fireListeners(n_17018,evt.type,true,evt);
}
{
var G__17019 = cljs.core.next.call(null,seq__16994_17012__$1);
var G__17020 = null;
var G__17021 = 0;
var G__17022 = 0;
seq__16994_17002 = G__17019;
chunk__16995_17003 = G__17020;
count__16996_17004 = G__17021;
i__16997_17005 = G__17022;
continue;
}
}
} else
{}
}
break;
}
var seq__16998_17023 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16999_17024 = null;var count__17000_17025 = 0;var i__17001_17026 = 0;while(true){
if((i__17001_17026 < count__17000_17025))
{var n_17027 = cljs.core._nth.call(null,chunk__16999_17024,i__17001_17026);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17027;
goog.events.fireListeners(n_17027,evt.type,false,evt);
}
{
var G__17028 = seq__16998_17023;
var G__17029 = chunk__16999_17024;
var G__17030 = count__17000_17025;
var G__17031 = (i__17001_17026 + 1);
seq__16998_17023 = G__17028;
chunk__16999_17024 = G__17029;
count__17000_17025 = G__17030;
i__17001_17026 = G__17031;
continue;
}
} else
{var temp__4092__auto___17032 = cljs.core.seq.call(null,seq__16998_17023);if(temp__4092__auto___17032)
{var seq__16998_17033__$1 = temp__4092__auto___17032;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16998_17033__$1))
{var c__4148__auto___17034 = cljs.core.chunk_first.call(null,seq__16998_17033__$1);{
var G__17035 = cljs.core.chunk_rest.call(null,seq__16998_17033__$1);
var G__17036 = c__4148__auto___17034;
var G__17037 = cljs.core.count.call(null,c__4148__auto___17034);
var G__17038 = 0;
seq__16998_17023 = G__17035;
chunk__16999_17024 = G__17036;
count__17000_17025 = G__17037;
i__17001_17026 = G__17038;
continue;
}
} else
{var n_17039 = cljs.core.first.call(null,seq__16998_17033__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17039;
goog.events.fireListeners(n_17039,evt.type,false,evt);
}
{
var G__17040 = cljs.core.next.call(null,seq__16998_17033__$1);
var G__17041 = null;
var G__17042 = 0;
var G__17043 = 0;
seq__16998_17023 = G__17040;
chunk__16999_17024 = G__17041;
count__17000_17025 = G__17042;
i__17001_17026 = G__17043;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17050_17056 = cljs.core.seq.call(null,evt_map);var chunk__17051_17057 = null;var count__17052_17058 = 0;var i__17053_17059 = 0;while(true){
if((i__17053_17059 < count__17052_17058))
{var vec__17054_17060 = cljs.core._nth.call(null,chunk__17051_17057,i__17053_17059);var k_17061 = cljs.core.nth.call(null,vec__17054_17060,0,null);var v_17062 = cljs.core.nth.call(null,vec__17054_17060,1,null);(evt[k_17061] = v_17062);
{
var G__17063 = seq__17050_17056;
var G__17064 = chunk__17051_17057;
var G__17065 = count__17052_17058;
var G__17066 = (i__17053_17059 + 1);
seq__17050_17056 = G__17063;
chunk__17051_17057 = G__17064;
count__17052_17058 = G__17065;
i__17053_17059 = G__17066;
continue;
}
} else
{var temp__4092__auto___17067 = cljs.core.seq.call(null,seq__17050_17056);if(temp__4092__auto___17067)
{var seq__17050_17068__$1 = temp__4092__auto___17067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17050_17068__$1))
{var c__4148__auto___17069 = cljs.core.chunk_first.call(null,seq__17050_17068__$1);{
var G__17070 = cljs.core.chunk_rest.call(null,seq__17050_17068__$1);
var G__17071 = c__4148__auto___17069;
var G__17072 = cljs.core.count.call(null,c__4148__auto___17069);
var G__17073 = 0;
seq__17050_17056 = G__17070;
chunk__17051_17057 = G__17071;
count__17052_17058 = G__17072;
i__17053_17059 = G__17073;
continue;
}
} else
{var vec__17055_17074 = cljs.core.first.call(null,seq__17050_17068__$1);var k_17075 = cljs.core.nth.call(null,vec__17055_17074,0,null);var v_17076 = cljs.core.nth.call(null,vec__17055_17074,1,null);(evt[k_17075] = v_17076);
{
var G__17077 = cljs.core.next.call(null,seq__17050_17068__$1);
var G__17078 = null;
var G__17079 = 0;
var G__17080 = 0;
seq__17050_17056 = G__17077;
chunk__17051_17057 = G__17078;
count__17052_17058 = G__17079;
i__17053_17059 = G__17080;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17081_SHARP_){return goog.events.getListeners(p1__17081_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map