// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj15930 = {};return obj15930;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t15934 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t15934 = (function (evt,f,create_listener_function,meta15935){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta15935 = meta15935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t15934.cljs$lang$type = true;
domina.events.t15934.cljs$lang$ctorStr = "domina.events/t15934";
domina.events.t15934.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t15934");
});
domina.events.t15934.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t15934.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t15934.prototype.domina$events$Event$ = true;
domina.events.t15934.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t15934.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t15934.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t15934.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t15934.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t15934.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t15934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15936){var self__ = this;
var _15936__$1 = this;return self__.meta15935;
});
domina.events.t15934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15936,meta15935__$1){var self__ = this;
var _15936__$1 = this;return (new domina.events.t15934(self__.evt,self__.f,self__.create_listener_function,meta15935__$1));
});
domina.events.__GT_t15934 = (function __GT_t15934(evt__$1,f__$1,create_listener_function__$1,meta15935){return (new domina.events.t15934(evt__$1,f__$1,create_listener_function__$1,meta15935));
});
}
return (new domina.events.t15934(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__15941(s__15942){return (new cljs.core.LazySeq(null,(function (){var s__15942__$1 = s__15942;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15942__$1);if(temp__4092__auto__)
{var s__15942__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15942__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15942__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15944 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15943 = 0;while(true){
if((i__15943 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__15943);cljs.core.chunk_append.call(null,b__15944,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__15945 = (i__15943 + 1);
i__15943 = G__15945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15944),iter__15941.call(null,cljs.core.chunk_rest.call(null,s__15942__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15944),null);
}
} else
{var node = cljs.core.first.call(null,s__15942__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__15941.call(null,cljs.core.rest.call(null,s__15942__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__15954 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15955 = null;var count__15956 = 0;var i__15957 = 0;while(true){
if((i__15957 < count__15956))
{var node = cljs.core._nth.call(null,chunk__15955,i__15957);goog.events.removeAll(node);
{
var G__15962 = seq__15954;
var G__15963 = chunk__15955;
var G__15964 = count__15956;
var G__15965 = (i__15957 + 1);
seq__15954 = G__15962;
chunk__15955 = G__15963;
count__15956 = G__15964;
i__15957 = G__15965;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15954);if(temp__4092__auto__)
{var seq__15954__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15954__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15954__$1);{
var G__15966 = cljs.core.chunk_rest.call(null,seq__15954__$1);
var G__15967 = c__4148__auto__;
var G__15968 = cljs.core.count.call(null,c__4148__auto__);
var G__15969 = 0;
seq__15954 = G__15966;
chunk__15955 = G__15967;
count__15956 = G__15968;
i__15957 = G__15969;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15954__$1);goog.events.removeAll(node);
{
var G__15970 = cljs.core.next.call(null,seq__15954__$1);
var G__15971 = null;
var G__15972 = 0;
var G__15973 = 0;
seq__15954 = G__15970;
chunk__15955 = G__15971;
count__15956 = G__15972;
i__15957 = G__15973;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__15958 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15959 = null;var count__15960 = 0;var i__15961 = 0;while(true){
if((i__15961 < count__15960))
{var node = cljs.core._nth.call(null,chunk__15959,i__15961);goog.events.removeAll(node,type__$1);
{
var G__15974 = seq__15958;
var G__15975 = chunk__15959;
var G__15976 = count__15960;
var G__15977 = (i__15961 + 1);
seq__15958 = G__15974;
chunk__15959 = G__15975;
count__15960 = G__15976;
i__15961 = G__15977;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15958);if(temp__4092__auto__)
{var seq__15958__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15958__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15958__$1);{
var G__15978 = cljs.core.chunk_rest.call(null,seq__15958__$1);
var G__15979 = c__4148__auto__;
var G__15980 = cljs.core.count.call(null,c__4148__auto__);
var G__15981 = 0;
seq__15958 = G__15978;
chunk__15959 = G__15979;
count__15960 = G__15980;
i__15961 = G__15981;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15958__$1);goog.events.removeAll(node,type__$1);
{
var G__15982 = cljs.core.next.call(null,seq__15958__$1);
var G__15983 = null;
var G__15984 = 0;
var G__15985 = 0;
seq__15958 = G__15982;
chunk__15959 = G__15983;
count__15960 = G__15984;
i__15961 = G__15985;
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
var G__15986 = parent;
var G__15987 = cljs.core.cons.call(null,parent,so_far);
n = G__15986;
so_far = G__15987;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__15996_16004 = cljs.core.seq.call(null,ancestors);var chunk__15997_16005 = null;var count__15998_16006 = 0;var i__15999_16007 = 0;while(true){
if((i__15999_16007 < count__15998_16006))
{var n_16008 = cljs.core._nth.call(null,chunk__15997_16005,i__15999_16007);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16008;
goog.events.fireListeners(n_16008,evt.type,true,evt);
}
{
var G__16009 = seq__15996_16004;
var G__16010 = chunk__15997_16005;
var G__16011 = count__15998_16006;
var G__16012 = (i__15999_16007 + 1);
seq__15996_16004 = G__16009;
chunk__15997_16005 = G__16010;
count__15998_16006 = G__16011;
i__15999_16007 = G__16012;
continue;
}
} else
{var temp__4092__auto___16013 = cljs.core.seq.call(null,seq__15996_16004);if(temp__4092__auto___16013)
{var seq__15996_16014__$1 = temp__4092__auto___16013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15996_16014__$1))
{var c__4148__auto___16015 = cljs.core.chunk_first.call(null,seq__15996_16014__$1);{
var G__16016 = cljs.core.chunk_rest.call(null,seq__15996_16014__$1);
var G__16017 = c__4148__auto___16015;
var G__16018 = cljs.core.count.call(null,c__4148__auto___16015);
var G__16019 = 0;
seq__15996_16004 = G__16016;
chunk__15997_16005 = G__16017;
count__15998_16006 = G__16018;
i__15999_16007 = G__16019;
continue;
}
} else
{var n_16020 = cljs.core.first.call(null,seq__15996_16014__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16020;
goog.events.fireListeners(n_16020,evt.type,true,evt);
}
{
var G__16021 = cljs.core.next.call(null,seq__15996_16014__$1);
var G__16022 = null;
var G__16023 = 0;
var G__16024 = 0;
seq__15996_16004 = G__16021;
chunk__15997_16005 = G__16022;
count__15998_16006 = G__16023;
i__15999_16007 = G__16024;
continue;
}
}
} else
{}
}
break;
}
var seq__16000_16025 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16001_16026 = null;var count__16002_16027 = 0;var i__16003_16028 = 0;while(true){
if((i__16003_16028 < count__16002_16027))
{var n_16029 = cljs.core._nth.call(null,chunk__16001_16026,i__16003_16028);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16029;
goog.events.fireListeners(n_16029,evt.type,false,evt);
}
{
var G__16030 = seq__16000_16025;
var G__16031 = chunk__16001_16026;
var G__16032 = count__16002_16027;
var G__16033 = (i__16003_16028 + 1);
seq__16000_16025 = G__16030;
chunk__16001_16026 = G__16031;
count__16002_16027 = G__16032;
i__16003_16028 = G__16033;
continue;
}
} else
{var temp__4092__auto___16034 = cljs.core.seq.call(null,seq__16000_16025);if(temp__4092__auto___16034)
{var seq__16000_16035__$1 = temp__4092__auto___16034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16000_16035__$1))
{var c__4148__auto___16036 = cljs.core.chunk_first.call(null,seq__16000_16035__$1);{
var G__16037 = cljs.core.chunk_rest.call(null,seq__16000_16035__$1);
var G__16038 = c__4148__auto___16036;
var G__16039 = cljs.core.count.call(null,c__4148__auto___16036);
var G__16040 = 0;
seq__16000_16025 = G__16037;
chunk__16001_16026 = G__16038;
count__16002_16027 = G__16039;
i__16003_16028 = G__16040;
continue;
}
} else
{var n_16041 = cljs.core.first.call(null,seq__16000_16035__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16041;
goog.events.fireListeners(n_16041,evt.type,false,evt);
}
{
var G__16042 = cljs.core.next.call(null,seq__16000_16035__$1);
var G__16043 = null;
var G__16044 = 0;
var G__16045 = 0;
seq__16000_16025 = G__16042;
chunk__16001_16026 = G__16043;
count__16002_16027 = G__16044;
i__16003_16028 = G__16045;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16052_16058 = cljs.core.seq.call(null,evt_map);var chunk__16053_16059 = null;var count__16054_16060 = 0;var i__16055_16061 = 0;while(true){
if((i__16055_16061 < count__16054_16060))
{var vec__16056_16062 = cljs.core._nth.call(null,chunk__16053_16059,i__16055_16061);var k_16063 = cljs.core.nth.call(null,vec__16056_16062,0,null);var v_16064 = cljs.core.nth.call(null,vec__16056_16062,1,null);(evt[k_16063] = v_16064);
{
var G__16065 = seq__16052_16058;
var G__16066 = chunk__16053_16059;
var G__16067 = count__16054_16060;
var G__16068 = (i__16055_16061 + 1);
seq__16052_16058 = G__16065;
chunk__16053_16059 = G__16066;
count__16054_16060 = G__16067;
i__16055_16061 = G__16068;
continue;
}
} else
{var temp__4092__auto___16069 = cljs.core.seq.call(null,seq__16052_16058);if(temp__4092__auto___16069)
{var seq__16052_16070__$1 = temp__4092__auto___16069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16052_16070__$1))
{var c__4148__auto___16071 = cljs.core.chunk_first.call(null,seq__16052_16070__$1);{
var G__16072 = cljs.core.chunk_rest.call(null,seq__16052_16070__$1);
var G__16073 = c__4148__auto___16071;
var G__16074 = cljs.core.count.call(null,c__4148__auto___16071);
var G__16075 = 0;
seq__16052_16058 = G__16072;
chunk__16053_16059 = G__16073;
count__16054_16060 = G__16074;
i__16055_16061 = G__16075;
continue;
}
} else
{var vec__16057_16076 = cljs.core.first.call(null,seq__16052_16070__$1);var k_16077 = cljs.core.nth.call(null,vec__16057_16076,0,null);var v_16078 = cljs.core.nth.call(null,vec__16057_16076,1,null);(evt[k_16077] = v_16078);
{
var G__16079 = cljs.core.next.call(null,seq__16052_16070__$1);
var G__16080 = null;
var G__16081 = 0;
var G__16082 = 0;
seq__16052_16058 = G__16079;
chunk__16053_16059 = G__16080;
count__16054_16060 = G__16081;
i__16055_16061 = G__16082;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16083_SHARP_){return goog.events.getListeners(p1__16083_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map