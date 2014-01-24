// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16013 = {};return obj16013;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16017 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16017 = (function (evt,f,create_listener_function,meta16018){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16018 = meta16018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16017.cljs$lang$type = true;
domina.events.t16017.cljs$lang$ctorStr = "domina.events/t16017";
domina.events.t16017.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16017");
});
domina.events.t16017.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16017.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16017.prototype.domina$events$Event$ = true;
domina.events.t16017.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16017.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16017.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16017.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16017.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16017.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16019){var self__ = this;
var _16019__$1 = this;return self__.meta16018;
});
domina.events.t16017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16019,meta16018__$1){var self__ = this;
var _16019__$1 = this;return (new domina.events.t16017(self__.evt,self__.f,self__.create_listener_function,meta16018__$1));
});
domina.events.__GT_t16017 = (function __GT_t16017(evt__$1,f__$1,create_listener_function__$1,meta16018){return (new domina.events.t16017(evt__$1,f__$1,create_listener_function__$1,meta16018));
});
}
return (new domina.events.t16017(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16024(s__16025){return (new cljs.core.LazySeq(null,(function (){var s__16025__$1 = s__16025;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16025__$1);if(temp__4092__auto__)
{var s__16025__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16025__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16025__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16027 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16026 = 0;while(true){
if((i__16026 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16026);cljs.core.chunk_append.call(null,b__16027,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16028 = (i__16026 + 1);
i__16026 = G__16028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16027),iter__16024.call(null,cljs.core.chunk_rest.call(null,s__16025__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16027),null);
}
} else
{var node = cljs.core.first.call(null,s__16025__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16024.call(null,cljs.core.rest.call(null,s__16025__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16037 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16038 = null;var count__16039 = 0;var i__16040 = 0;while(true){
if((i__16040 < count__16039))
{var node = cljs.core._nth.call(null,chunk__16038,i__16040);goog.events.removeAll(node);
{
var G__16045 = seq__16037;
var G__16046 = chunk__16038;
var G__16047 = count__16039;
var G__16048 = (i__16040 + 1);
seq__16037 = G__16045;
chunk__16038 = G__16046;
count__16039 = G__16047;
i__16040 = G__16048;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16037);if(temp__4092__auto__)
{var seq__16037__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16037__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16037__$1);{
var G__16049 = cljs.core.chunk_rest.call(null,seq__16037__$1);
var G__16050 = c__4148__auto__;
var G__16051 = cljs.core.count.call(null,c__4148__auto__);
var G__16052 = 0;
seq__16037 = G__16049;
chunk__16038 = G__16050;
count__16039 = G__16051;
i__16040 = G__16052;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16037__$1);goog.events.removeAll(node);
{
var G__16053 = cljs.core.next.call(null,seq__16037__$1);
var G__16054 = null;
var G__16055 = 0;
var G__16056 = 0;
seq__16037 = G__16053;
chunk__16038 = G__16054;
count__16039 = G__16055;
i__16040 = G__16056;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16041 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16042 = null;var count__16043 = 0;var i__16044 = 0;while(true){
if((i__16044 < count__16043))
{var node = cljs.core._nth.call(null,chunk__16042,i__16044);goog.events.removeAll(node,type__$1);
{
var G__16057 = seq__16041;
var G__16058 = chunk__16042;
var G__16059 = count__16043;
var G__16060 = (i__16044 + 1);
seq__16041 = G__16057;
chunk__16042 = G__16058;
count__16043 = G__16059;
i__16044 = G__16060;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16041);if(temp__4092__auto__)
{var seq__16041__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16041__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16041__$1);{
var G__16061 = cljs.core.chunk_rest.call(null,seq__16041__$1);
var G__16062 = c__4148__auto__;
var G__16063 = cljs.core.count.call(null,c__4148__auto__);
var G__16064 = 0;
seq__16041 = G__16061;
chunk__16042 = G__16062;
count__16043 = G__16063;
i__16044 = G__16064;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16041__$1);goog.events.removeAll(node,type__$1);
{
var G__16065 = cljs.core.next.call(null,seq__16041__$1);
var G__16066 = null;
var G__16067 = 0;
var G__16068 = 0;
seq__16041 = G__16065;
chunk__16042 = G__16066;
count__16043 = G__16067;
i__16044 = G__16068;
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
var G__16069 = parent;
var G__16070 = cljs.core.cons.call(null,parent,so_far);
n = G__16069;
so_far = G__16070;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16079_16087 = cljs.core.seq.call(null,ancestors);var chunk__16080_16088 = null;var count__16081_16089 = 0;var i__16082_16090 = 0;while(true){
if((i__16082_16090 < count__16081_16089))
{var n_16091 = cljs.core._nth.call(null,chunk__16080_16088,i__16082_16090);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16091;
goog.events.fireListeners(n_16091,evt.type,true,evt);
}
{
var G__16092 = seq__16079_16087;
var G__16093 = chunk__16080_16088;
var G__16094 = count__16081_16089;
var G__16095 = (i__16082_16090 + 1);
seq__16079_16087 = G__16092;
chunk__16080_16088 = G__16093;
count__16081_16089 = G__16094;
i__16082_16090 = G__16095;
continue;
}
} else
{var temp__4092__auto___16096 = cljs.core.seq.call(null,seq__16079_16087);if(temp__4092__auto___16096)
{var seq__16079_16097__$1 = temp__4092__auto___16096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16079_16097__$1))
{var c__4148__auto___16098 = cljs.core.chunk_first.call(null,seq__16079_16097__$1);{
var G__16099 = cljs.core.chunk_rest.call(null,seq__16079_16097__$1);
var G__16100 = c__4148__auto___16098;
var G__16101 = cljs.core.count.call(null,c__4148__auto___16098);
var G__16102 = 0;
seq__16079_16087 = G__16099;
chunk__16080_16088 = G__16100;
count__16081_16089 = G__16101;
i__16082_16090 = G__16102;
continue;
}
} else
{var n_16103 = cljs.core.first.call(null,seq__16079_16097__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16103;
goog.events.fireListeners(n_16103,evt.type,true,evt);
}
{
var G__16104 = cljs.core.next.call(null,seq__16079_16097__$1);
var G__16105 = null;
var G__16106 = 0;
var G__16107 = 0;
seq__16079_16087 = G__16104;
chunk__16080_16088 = G__16105;
count__16081_16089 = G__16106;
i__16082_16090 = G__16107;
continue;
}
}
} else
{}
}
break;
}
var seq__16083_16108 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16084_16109 = null;var count__16085_16110 = 0;var i__16086_16111 = 0;while(true){
if((i__16086_16111 < count__16085_16110))
{var n_16112 = cljs.core._nth.call(null,chunk__16084_16109,i__16086_16111);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16112;
goog.events.fireListeners(n_16112,evt.type,false,evt);
}
{
var G__16113 = seq__16083_16108;
var G__16114 = chunk__16084_16109;
var G__16115 = count__16085_16110;
var G__16116 = (i__16086_16111 + 1);
seq__16083_16108 = G__16113;
chunk__16084_16109 = G__16114;
count__16085_16110 = G__16115;
i__16086_16111 = G__16116;
continue;
}
} else
{var temp__4092__auto___16117 = cljs.core.seq.call(null,seq__16083_16108);if(temp__4092__auto___16117)
{var seq__16083_16118__$1 = temp__4092__auto___16117;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16083_16118__$1))
{var c__4148__auto___16119 = cljs.core.chunk_first.call(null,seq__16083_16118__$1);{
var G__16120 = cljs.core.chunk_rest.call(null,seq__16083_16118__$1);
var G__16121 = c__4148__auto___16119;
var G__16122 = cljs.core.count.call(null,c__4148__auto___16119);
var G__16123 = 0;
seq__16083_16108 = G__16120;
chunk__16084_16109 = G__16121;
count__16085_16110 = G__16122;
i__16086_16111 = G__16123;
continue;
}
} else
{var n_16124 = cljs.core.first.call(null,seq__16083_16118__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16124;
goog.events.fireListeners(n_16124,evt.type,false,evt);
}
{
var G__16125 = cljs.core.next.call(null,seq__16083_16118__$1);
var G__16126 = null;
var G__16127 = 0;
var G__16128 = 0;
seq__16083_16108 = G__16125;
chunk__16084_16109 = G__16126;
count__16085_16110 = G__16127;
i__16086_16111 = G__16128;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16135_16141 = cljs.core.seq.call(null,evt_map);var chunk__16136_16142 = null;var count__16137_16143 = 0;var i__16138_16144 = 0;while(true){
if((i__16138_16144 < count__16137_16143))
{var vec__16139_16145 = cljs.core._nth.call(null,chunk__16136_16142,i__16138_16144);var k_16146 = cljs.core.nth.call(null,vec__16139_16145,0,null);var v_16147 = cljs.core.nth.call(null,vec__16139_16145,1,null);(evt[k_16146] = v_16147);
{
var G__16148 = seq__16135_16141;
var G__16149 = chunk__16136_16142;
var G__16150 = count__16137_16143;
var G__16151 = (i__16138_16144 + 1);
seq__16135_16141 = G__16148;
chunk__16136_16142 = G__16149;
count__16137_16143 = G__16150;
i__16138_16144 = G__16151;
continue;
}
} else
{var temp__4092__auto___16152 = cljs.core.seq.call(null,seq__16135_16141);if(temp__4092__auto___16152)
{var seq__16135_16153__$1 = temp__4092__auto___16152;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16135_16153__$1))
{var c__4148__auto___16154 = cljs.core.chunk_first.call(null,seq__16135_16153__$1);{
var G__16155 = cljs.core.chunk_rest.call(null,seq__16135_16153__$1);
var G__16156 = c__4148__auto___16154;
var G__16157 = cljs.core.count.call(null,c__4148__auto___16154);
var G__16158 = 0;
seq__16135_16141 = G__16155;
chunk__16136_16142 = G__16156;
count__16137_16143 = G__16157;
i__16138_16144 = G__16158;
continue;
}
} else
{var vec__16140_16159 = cljs.core.first.call(null,seq__16135_16153__$1);var k_16160 = cljs.core.nth.call(null,vec__16140_16159,0,null);var v_16161 = cljs.core.nth.call(null,vec__16140_16159,1,null);(evt[k_16160] = v_16161);
{
var G__16162 = cljs.core.next.call(null,seq__16135_16153__$1);
var G__16163 = null;
var G__16164 = 0;
var G__16165 = 0;
seq__16135_16141 = G__16162;
chunk__16136_16142 = G__16163;
count__16137_16143 = G__16164;
i__16138_16144 = G__16165;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16166_SHARP_){return goog.events.getListeners(p1__16166_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map