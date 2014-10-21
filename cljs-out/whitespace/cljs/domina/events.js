// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj21935 = {};return obj21935;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t21939 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t21939 = (function (evt,f,create_listener_function,meta21940){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta21940 = meta21940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t21939.cljs$lang$type = true;
domina.events.t21939.cljs$lang$ctorStr = "domina.events/t21939";
domina.events.t21939.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t21939");
});
domina.events.t21939.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t21939.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t21939.prototype.domina$events$Event$ = true;
domina.events.t21939.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t21939.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t21939.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t21939.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t21939.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t21939.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t21939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21941){var self__ = this;
var _21941__$1 = this;return self__.meta21940;
});
domina.events.t21939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21941,meta21940__$1){var self__ = this;
var _21941__$1 = this;return (new domina.events.t21939(self__.evt,self__.f,self__.create_listener_function,meta21940__$1));
});
domina.events.__GT_t21939 = (function __GT_t21939(evt__$1,f__$1,create_listener_function__$1,meta21940){return (new domina.events.t21939(evt__$1,f__$1,create_listener_function__$1,meta21940));
});
}
return (new domina.events.t21939(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__21946(s__21947){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__21947__$1 = s__21947;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21947__$1);if(temp__4126__auto__)
{var s__21947__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21947__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__21947__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__21949 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__21948 = (0);while(true){
if((i__21948 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__21948);cljs.core.chunk_append.call(null,b__21949,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__21950 = (i__21948 + (1));
i__21948 = G__21950;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21949),iter__21946.call(null,cljs.core.chunk_rest.call(null,s__21947__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21949),null);
}
} else
{var node = cljs.core.first.call(null,s__21947__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__21946.call(null,cljs.core.rest.call(null,s__21947__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__21959 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21960 = null;var count__21961 = (0);var i__21962 = (0);while(true){
if((i__21962 < count__21961))
{var node = cljs.core._nth.call(null,chunk__21960,i__21962);goog.events.removeAll(node);
{
var G__21967 = seq__21959;
var G__21968 = chunk__21960;
var G__21969 = count__21961;
var G__21970 = (i__21962 + (1));
seq__21959 = G__21967;
chunk__21960 = G__21968;
count__21961 = G__21969;
i__21962 = G__21970;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21959);if(temp__4126__auto__)
{var seq__21959__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21959__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__21959__$1);{
var G__21971 = cljs.core.chunk_rest.call(null,seq__21959__$1);
var G__21972 = c__4314__auto__;
var G__21973 = cljs.core.count.call(null,c__4314__auto__);
var G__21974 = (0);
seq__21959 = G__21971;
chunk__21960 = G__21972;
count__21961 = G__21973;
i__21962 = G__21974;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21959__$1);goog.events.removeAll(node);
{
var G__21975 = cljs.core.next.call(null,seq__21959__$1);
var G__21976 = null;
var G__21977 = (0);
var G__21978 = (0);
seq__21959 = G__21975;
chunk__21960 = G__21976;
count__21961 = G__21977;
i__21962 = G__21978;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__21963 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__21964 = null;var count__21965 = (0);var i__21966 = (0);while(true){
if((i__21966 < count__21965))
{var node = cljs.core._nth.call(null,chunk__21964,i__21966);goog.events.removeAll(node,type__$1);
{
var G__21979 = seq__21963;
var G__21980 = chunk__21964;
var G__21981 = count__21965;
var G__21982 = (i__21966 + (1));
seq__21963 = G__21979;
chunk__21964 = G__21980;
count__21965 = G__21981;
i__21966 = G__21982;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__21963);if(temp__4126__auto__)
{var seq__21963__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__21963__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__21963__$1);{
var G__21983 = cljs.core.chunk_rest.call(null,seq__21963__$1);
var G__21984 = c__4314__auto__;
var G__21985 = cljs.core.count.call(null,c__4314__auto__);
var G__21986 = (0);
seq__21963 = G__21983;
chunk__21964 = G__21984;
count__21965 = G__21985;
i__21966 = G__21986;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__21963__$1);goog.events.removeAll(node,type__$1);
{
var G__21987 = cljs.core.next.call(null,seq__21963__$1);
var G__21988 = null;
var G__21989 = (0);
var G__21990 = (0);
seq__21963 = G__21987;
chunk__21964 = G__21988;
count__21965 = G__21989;
i__21966 = G__21990;
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
var G__21991 = parent;
var G__21992 = cljs.core.cons.call(null,parent,so_far);
n = G__21991;
so_far = G__21992;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__22001_22009 = cljs.core.seq.call(null,ancestors);var chunk__22002_22010 = null;var count__22003_22011 = (0);var i__22004_22012 = (0);while(true){
if((i__22004_22012 < count__22003_22011))
{var n_22013 = cljs.core._nth.call(null,chunk__22002_22010,i__22004_22012);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22013;
goog.events.fireListeners(n_22013,evt.type,true,evt);
}
{
var G__22014 = seq__22001_22009;
var G__22015 = chunk__22002_22010;
var G__22016 = count__22003_22011;
var G__22017 = (i__22004_22012 + (1));
seq__22001_22009 = G__22014;
chunk__22002_22010 = G__22015;
count__22003_22011 = G__22016;
i__22004_22012 = G__22017;
continue;
}
} else
{var temp__4126__auto___22018 = cljs.core.seq.call(null,seq__22001_22009);if(temp__4126__auto___22018)
{var seq__22001_22019__$1 = temp__4126__auto___22018;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22001_22019__$1))
{var c__4314__auto___22020 = cljs.core.chunk_first.call(null,seq__22001_22019__$1);{
var G__22021 = cljs.core.chunk_rest.call(null,seq__22001_22019__$1);
var G__22022 = c__4314__auto___22020;
var G__22023 = cljs.core.count.call(null,c__4314__auto___22020);
var G__22024 = (0);
seq__22001_22009 = G__22021;
chunk__22002_22010 = G__22022;
count__22003_22011 = G__22023;
i__22004_22012 = G__22024;
continue;
}
} else
{var n_22025 = cljs.core.first.call(null,seq__22001_22019__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22025;
goog.events.fireListeners(n_22025,evt.type,true,evt);
}
{
var G__22026 = cljs.core.next.call(null,seq__22001_22019__$1);
var G__22027 = null;
var G__22028 = (0);
var G__22029 = (0);
seq__22001_22009 = G__22026;
chunk__22002_22010 = G__22027;
count__22003_22011 = G__22028;
i__22004_22012 = G__22029;
continue;
}
}
} else
{}
}
break;
}
var seq__22005_22030 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__22006_22031 = null;var count__22007_22032 = (0);var i__22008_22033 = (0);while(true){
if((i__22008_22033 < count__22007_22032))
{var n_22034 = cljs.core._nth.call(null,chunk__22006_22031,i__22008_22033);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22034;
goog.events.fireListeners(n_22034,evt.type,false,evt);
}
{
var G__22035 = seq__22005_22030;
var G__22036 = chunk__22006_22031;
var G__22037 = count__22007_22032;
var G__22038 = (i__22008_22033 + (1));
seq__22005_22030 = G__22035;
chunk__22006_22031 = G__22036;
count__22007_22032 = G__22037;
i__22008_22033 = G__22038;
continue;
}
} else
{var temp__4126__auto___22039 = cljs.core.seq.call(null,seq__22005_22030);if(temp__4126__auto___22039)
{var seq__22005_22040__$1 = temp__4126__auto___22039;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22005_22040__$1))
{var c__4314__auto___22041 = cljs.core.chunk_first.call(null,seq__22005_22040__$1);{
var G__22042 = cljs.core.chunk_rest.call(null,seq__22005_22040__$1);
var G__22043 = c__4314__auto___22041;
var G__22044 = cljs.core.count.call(null,c__4314__auto___22041);
var G__22045 = (0);
seq__22005_22030 = G__22042;
chunk__22006_22031 = G__22043;
count__22007_22032 = G__22044;
i__22008_22033 = G__22045;
continue;
}
} else
{var n_22046 = cljs.core.first.call(null,seq__22005_22040__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22046;
goog.events.fireListeners(n_22046,evt.type,false,evt);
}
{
var G__22047 = cljs.core.next.call(null,seq__22005_22040__$1);
var G__22048 = null;
var G__22049 = (0);
var G__22050 = (0);
seq__22005_22030 = G__22047;
chunk__22006_22031 = G__22048;
count__22007_22032 = G__22049;
i__22008_22033 = G__22050;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__22057_22063 = cljs.core.seq.call(null,evt_map);var chunk__22058_22064 = null;var count__22059_22065 = (0);var i__22060_22066 = (0);while(true){
if((i__22060_22066 < count__22059_22065))
{var vec__22061_22067 = cljs.core._nth.call(null,chunk__22058_22064,i__22060_22066);var k_22068 = cljs.core.nth.call(null,vec__22061_22067,(0),null);var v_22069 = cljs.core.nth.call(null,vec__22061_22067,(1),null);(evt[k_22068] = v_22069);
{
var G__22070 = seq__22057_22063;
var G__22071 = chunk__22058_22064;
var G__22072 = count__22059_22065;
var G__22073 = (i__22060_22066 + (1));
seq__22057_22063 = G__22070;
chunk__22058_22064 = G__22071;
count__22059_22065 = G__22072;
i__22060_22066 = G__22073;
continue;
}
} else
{var temp__4126__auto___22074 = cljs.core.seq.call(null,seq__22057_22063);if(temp__4126__auto___22074)
{var seq__22057_22075__$1 = temp__4126__auto___22074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22057_22075__$1))
{var c__4314__auto___22076 = cljs.core.chunk_first.call(null,seq__22057_22075__$1);{
var G__22077 = cljs.core.chunk_rest.call(null,seq__22057_22075__$1);
var G__22078 = c__4314__auto___22076;
var G__22079 = cljs.core.count.call(null,c__4314__auto___22076);
var G__22080 = (0);
seq__22057_22063 = G__22077;
chunk__22058_22064 = G__22078;
count__22059_22065 = G__22079;
i__22060_22066 = G__22080;
continue;
}
} else
{var vec__22062_22081 = cljs.core.first.call(null,seq__22057_22075__$1);var k_22082 = cljs.core.nth.call(null,vec__22062_22081,(0),null);var v_22083 = cljs.core.nth.call(null,vec__22062_22081,(1),null);(evt[k_22082] = v_22083);
{
var G__22084 = cljs.core.next.call(null,seq__22057_22075__$1);
var G__22085 = null;
var G__22086 = (0);
var G__22087 = (0);
seq__22057_22063 = G__22084;
chunk__22058_22064 = G__22085;
count__22059_22065 = G__22086;
i__22060_22066 = G__22087;
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
return (function (p1__22088_SHARP_){return goog.events.getListeners(p1__22088_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
