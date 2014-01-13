// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14930 = {};return obj14930;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14934 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14934 = (function (evt,f,create_listener_function,meta14935){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14935 = meta14935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14934.cljs$lang$type = true;
domina.events.t14934.cljs$lang$ctorStr = "domina.events/t14934";
domina.events.t14934.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14934");
});
domina.events.t14934.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14934.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14934.prototype.domina$events$Event$ = true;
domina.events.t14934.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14934.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14934.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14934.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14934.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14934.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14936){var self__ = this;
var _14936__$1 = this;return self__.meta14935;
});
domina.events.t14934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14936,meta14935__$1){var self__ = this;
var _14936__$1 = this;return (new domina.events.t14934(self__.evt,self__.f,self__.create_listener_function,meta14935__$1));
});
domina.events.__GT_t14934 = (function __GT_t14934(evt__$1,f__$1,create_listener_function__$1,meta14935){return (new domina.events.t14934(evt__$1,f__$1,create_listener_function__$1,meta14935));
});
}
return (new domina.events.t14934(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14941(s__14942){return (new cljs.core.LazySeq(null,(function (){var s__14942__$1 = s__14942;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14942__$1);if(temp__4092__auto__)
{var s__14942__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14942__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14942__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14944 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14943 = 0;while(true){
if((i__14943 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14943);cljs.core.chunk_append.call(null,b__14944,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14945 = (i__14943 + 1);
i__14943 = G__14945;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14944),iter__14941.call(null,cljs.core.chunk_rest.call(null,s__14942__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14944),null);
}
} else
{var node = cljs.core.first.call(null,s__14942__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14941.call(null,cljs.core.rest.call(null,s__14942__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14954 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14955 = null;var count__14956 = 0;var i__14957 = 0;while(true){
if((i__14957 < count__14956))
{var node = cljs.core._nth.call(null,chunk__14955,i__14957);goog.events.removeAll(node);
{
var G__14962 = seq__14954;
var G__14963 = chunk__14955;
var G__14964 = count__14956;
var G__14965 = (i__14957 + 1);
seq__14954 = G__14962;
chunk__14955 = G__14963;
count__14956 = G__14964;
i__14957 = G__14965;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14954);if(temp__4092__auto__)
{var seq__14954__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14954__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14954__$1);{
var G__14966 = cljs.core.chunk_rest.call(null,seq__14954__$1);
var G__14967 = c__4148__auto__;
var G__14968 = cljs.core.count.call(null,c__4148__auto__);
var G__14969 = 0;
seq__14954 = G__14966;
chunk__14955 = G__14967;
count__14956 = G__14968;
i__14957 = G__14969;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14954__$1);goog.events.removeAll(node);
{
var G__14970 = cljs.core.next.call(null,seq__14954__$1);
var G__14971 = null;
var G__14972 = 0;
var G__14973 = 0;
seq__14954 = G__14970;
chunk__14955 = G__14971;
count__14956 = G__14972;
i__14957 = G__14973;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14958 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14959 = null;var count__14960 = 0;var i__14961 = 0;while(true){
if((i__14961 < count__14960))
{var node = cljs.core._nth.call(null,chunk__14959,i__14961);goog.events.removeAll(node,type__$1);
{
var G__14974 = seq__14958;
var G__14975 = chunk__14959;
var G__14976 = count__14960;
var G__14977 = (i__14961 + 1);
seq__14958 = G__14974;
chunk__14959 = G__14975;
count__14960 = G__14976;
i__14961 = G__14977;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14958);if(temp__4092__auto__)
{var seq__14958__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14958__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14958__$1);{
var G__14978 = cljs.core.chunk_rest.call(null,seq__14958__$1);
var G__14979 = c__4148__auto__;
var G__14980 = cljs.core.count.call(null,c__4148__auto__);
var G__14981 = 0;
seq__14958 = G__14978;
chunk__14959 = G__14979;
count__14960 = G__14980;
i__14961 = G__14981;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14958__$1);goog.events.removeAll(node,type__$1);
{
var G__14982 = cljs.core.next.call(null,seq__14958__$1);
var G__14983 = null;
var G__14984 = 0;
var G__14985 = 0;
seq__14958 = G__14982;
chunk__14959 = G__14983;
count__14960 = G__14984;
i__14961 = G__14985;
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
var G__14986 = parent;
var G__14987 = cljs.core.cons.call(null,parent,so_far);
n = G__14986;
so_far = G__14987;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14996_15004 = cljs.core.seq.call(null,ancestors);var chunk__14997_15005 = null;var count__14998_15006 = 0;var i__14999_15007 = 0;while(true){
if((i__14999_15007 < count__14998_15006))
{var n_15008 = cljs.core._nth.call(null,chunk__14997_15005,i__14999_15007);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15008;
goog.events.fireListeners(n_15008,evt.type,true,evt);
}
{
var G__15009 = seq__14996_15004;
var G__15010 = chunk__14997_15005;
var G__15011 = count__14998_15006;
var G__15012 = (i__14999_15007 + 1);
seq__14996_15004 = G__15009;
chunk__14997_15005 = G__15010;
count__14998_15006 = G__15011;
i__14999_15007 = G__15012;
continue;
}
} else
{var temp__4092__auto___15013 = cljs.core.seq.call(null,seq__14996_15004);if(temp__4092__auto___15013)
{var seq__14996_15014__$1 = temp__4092__auto___15013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14996_15014__$1))
{var c__4148__auto___15015 = cljs.core.chunk_first.call(null,seq__14996_15014__$1);{
var G__15016 = cljs.core.chunk_rest.call(null,seq__14996_15014__$1);
var G__15017 = c__4148__auto___15015;
var G__15018 = cljs.core.count.call(null,c__4148__auto___15015);
var G__15019 = 0;
seq__14996_15004 = G__15016;
chunk__14997_15005 = G__15017;
count__14998_15006 = G__15018;
i__14999_15007 = G__15019;
continue;
}
} else
{var n_15020 = cljs.core.first.call(null,seq__14996_15014__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15020;
goog.events.fireListeners(n_15020,evt.type,true,evt);
}
{
var G__15021 = cljs.core.next.call(null,seq__14996_15014__$1);
var G__15022 = null;
var G__15023 = 0;
var G__15024 = 0;
seq__14996_15004 = G__15021;
chunk__14997_15005 = G__15022;
count__14998_15006 = G__15023;
i__14999_15007 = G__15024;
continue;
}
}
} else
{}
}
break;
}
var seq__15000_15025 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__15001_15026 = null;var count__15002_15027 = 0;var i__15003_15028 = 0;while(true){
if((i__15003_15028 < count__15002_15027))
{var n_15029 = cljs.core._nth.call(null,chunk__15001_15026,i__15003_15028);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15029;
goog.events.fireListeners(n_15029,evt.type,false,evt);
}
{
var G__15030 = seq__15000_15025;
var G__15031 = chunk__15001_15026;
var G__15032 = count__15002_15027;
var G__15033 = (i__15003_15028 + 1);
seq__15000_15025 = G__15030;
chunk__15001_15026 = G__15031;
count__15002_15027 = G__15032;
i__15003_15028 = G__15033;
continue;
}
} else
{var temp__4092__auto___15034 = cljs.core.seq.call(null,seq__15000_15025);if(temp__4092__auto___15034)
{var seq__15000_15035__$1 = temp__4092__auto___15034;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15000_15035__$1))
{var c__4148__auto___15036 = cljs.core.chunk_first.call(null,seq__15000_15035__$1);{
var G__15037 = cljs.core.chunk_rest.call(null,seq__15000_15035__$1);
var G__15038 = c__4148__auto___15036;
var G__15039 = cljs.core.count.call(null,c__4148__auto___15036);
var G__15040 = 0;
seq__15000_15025 = G__15037;
chunk__15001_15026 = G__15038;
count__15002_15027 = G__15039;
i__15003_15028 = G__15040;
continue;
}
} else
{var n_15041 = cljs.core.first.call(null,seq__15000_15035__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15041;
goog.events.fireListeners(n_15041,evt.type,false,evt);
}
{
var G__15042 = cljs.core.next.call(null,seq__15000_15035__$1);
var G__15043 = null;
var G__15044 = 0;
var G__15045 = 0;
seq__15000_15025 = G__15042;
chunk__15001_15026 = G__15043;
count__15002_15027 = G__15044;
i__15003_15028 = G__15045;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__15052_15058 = cljs.core.seq.call(null,evt_map);var chunk__15053_15059 = null;var count__15054_15060 = 0;var i__15055_15061 = 0;while(true){
if((i__15055_15061 < count__15054_15060))
{var vec__15056_15062 = cljs.core._nth.call(null,chunk__15053_15059,i__15055_15061);var k_15063 = cljs.core.nth.call(null,vec__15056_15062,0,null);var v_15064 = cljs.core.nth.call(null,vec__15056_15062,1,null);(evt[k_15063] = v_15064);
{
var G__15065 = seq__15052_15058;
var G__15066 = chunk__15053_15059;
var G__15067 = count__15054_15060;
var G__15068 = (i__15055_15061 + 1);
seq__15052_15058 = G__15065;
chunk__15053_15059 = G__15066;
count__15054_15060 = G__15067;
i__15055_15061 = G__15068;
continue;
}
} else
{var temp__4092__auto___15069 = cljs.core.seq.call(null,seq__15052_15058);if(temp__4092__auto___15069)
{var seq__15052_15070__$1 = temp__4092__auto___15069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15052_15070__$1))
{var c__4148__auto___15071 = cljs.core.chunk_first.call(null,seq__15052_15070__$1);{
var G__15072 = cljs.core.chunk_rest.call(null,seq__15052_15070__$1);
var G__15073 = c__4148__auto___15071;
var G__15074 = cljs.core.count.call(null,c__4148__auto___15071);
var G__15075 = 0;
seq__15052_15058 = G__15072;
chunk__15053_15059 = G__15073;
count__15054_15060 = G__15074;
i__15055_15061 = G__15075;
continue;
}
} else
{var vec__15057_15076 = cljs.core.first.call(null,seq__15052_15070__$1);var k_15077 = cljs.core.nth.call(null,vec__15057_15076,0,null);var v_15078 = cljs.core.nth.call(null,vec__15057_15076,1,null);(evt[k_15077] = v_15078);
{
var G__15079 = cljs.core.next.call(null,seq__15052_15070__$1);
var G__15080 = null;
var G__15081 = 0;
var G__15082 = 0;
seq__15052_15058 = G__15079;
chunk__15053_15059 = G__15080;
count__15054_15060 = G__15081;
i__15055_15061 = G__15082;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__15083_SHARP_){return goog.events.getListeners(p1__15083_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map