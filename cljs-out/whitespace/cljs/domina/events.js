// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17940 = {};return obj17940;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17944 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17944 = (function (evt,f,create_listener_function,meta17945){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17945 = meta17945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17944.cljs$lang$type = true;
domina.events.t17944.cljs$lang$ctorStr = "domina.events/t17944";
domina.events.t17944.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t17944");
});
domina.events.t17944.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17944.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t17944.prototype.domina$events$Event$ = true;
domina.events.t17944.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17944.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17944.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17944.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17944.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17944.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17946){var self__ = this;
var _17946__$1 = this;return self__.meta17945;
});
domina.events.t17944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17946,meta17945__$1){var self__ = this;
var _17946__$1 = this;return (new domina.events.t17944(self__.evt,self__.f,self__.create_listener_function,meta17945__$1));
});
domina.events.__GT_t17944 = (function __GT_t17944(evt__$1,f__$1,create_listener_function__$1,meta17945){return (new domina.events.t17944(evt__$1,f__$1,create_listener_function__$1,meta17945));
});
}
return (new domina.events.t17944(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__17951(s__17952){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__17952__$1 = s__17952;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17952__$1);if(temp__4126__auto__)
{var s__17952__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17952__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__17952__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__17954 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__17953 = (0);while(true){
if((i__17953 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__17953);cljs.core.chunk_append.call(null,b__17954,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17955 = (i__17953 + (1));
i__17953 = G__17955;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17954),iter__17951.call(null,cljs.core.chunk_rest.call(null,s__17952__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17954),null);
}
} else
{var node = cljs.core.first.call(null,s__17952__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17951.call(null,cljs.core.rest.call(null,s__17952__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__17964 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17965 = null;var count__17966 = (0);var i__17967 = (0);while(true){
if((i__17967 < count__17966))
{var node = cljs.core._nth.call(null,chunk__17965,i__17967);goog.events.removeAll(node);
{
var G__17972 = seq__17964;
var G__17973 = chunk__17965;
var G__17974 = count__17966;
var G__17975 = (i__17967 + (1));
seq__17964 = G__17972;
chunk__17965 = G__17973;
count__17966 = G__17974;
i__17967 = G__17975;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17964);if(temp__4126__auto__)
{var seq__17964__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17964__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17964__$1);{
var G__17976 = cljs.core.chunk_rest.call(null,seq__17964__$1);
var G__17977 = c__4299__auto__;
var G__17978 = cljs.core.count.call(null,c__4299__auto__);
var G__17979 = (0);
seq__17964 = G__17976;
chunk__17965 = G__17977;
count__17966 = G__17978;
i__17967 = G__17979;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17964__$1);goog.events.removeAll(node);
{
var G__17980 = cljs.core.next.call(null,seq__17964__$1);
var G__17981 = null;
var G__17982 = (0);
var G__17983 = (0);
seq__17964 = G__17980;
chunk__17965 = G__17981;
count__17966 = G__17982;
i__17967 = G__17983;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17968 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17969 = null;var count__17970 = (0);var i__17971 = (0);while(true){
if((i__17971 < count__17970))
{var node = cljs.core._nth.call(null,chunk__17969,i__17971);goog.events.removeAll(node,type__$1);
{
var G__17984 = seq__17968;
var G__17985 = chunk__17969;
var G__17986 = count__17970;
var G__17987 = (i__17971 + (1));
seq__17968 = G__17984;
chunk__17969 = G__17985;
count__17970 = G__17986;
i__17971 = G__17987;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17968);if(temp__4126__auto__)
{var seq__17968__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17968__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__17968__$1);{
var G__17988 = cljs.core.chunk_rest.call(null,seq__17968__$1);
var G__17989 = c__4299__auto__;
var G__17990 = cljs.core.count.call(null,c__4299__auto__);
var G__17991 = (0);
seq__17968 = G__17988;
chunk__17969 = G__17989;
count__17970 = G__17990;
i__17971 = G__17991;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17968__$1);goog.events.removeAll(node,type__$1);
{
var G__17992 = cljs.core.next.call(null,seq__17968__$1);
var G__17993 = null;
var G__17994 = (0);
var G__17995 = (0);
seq__17968 = G__17992;
chunk__17969 = G__17993;
count__17970 = G__17994;
i__17971 = G__17995;
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
var G__17996 = parent;
var G__17997 = cljs.core.cons.call(null,parent,so_far);
n = G__17996;
so_far = G__17997;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18006_18014 = cljs.core.seq.call(null,ancestors);var chunk__18007_18015 = null;var count__18008_18016 = (0);var i__18009_18017 = (0);while(true){
if((i__18009_18017 < count__18008_18016))
{var n_18018 = cljs.core._nth.call(null,chunk__18007_18015,i__18009_18017);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18018;
goog.events.fireListeners(n_18018,evt.type,true,evt);
}
{
var G__18019 = seq__18006_18014;
var G__18020 = chunk__18007_18015;
var G__18021 = count__18008_18016;
var G__18022 = (i__18009_18017 + (1));
seq__18006_18014 = G__18019;
chunk__18007_18015 = G__18020;
count__18008_18016 = G__18021;
i__18009_18017 = G__18022;
continue;
}
} else
{var temp__4126__auto___18023 = cljs.core.seq.call(null,seq__18006_18014);if(temp__4126__auto___18023)
{var seq__18006_18024__$1 = temp__4126__auto___18023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18006_18024__$1))
{var c__4299__auto___18025 = cljs.core.chunk_first.call(null,seq__18006_18024__$1);{
var G__18026 = cljs.core.chunk_rest.call(null,seq__18006_18024__$1);
var G__18027 = c__4299__auto___18025;
var G__18028 = cljs.core.count.call(null,c__4299__auto___18025);
var G__18029 = (0);
seq__18006_18014 = G__18026;
chunk__18007_18015 = G__18027;
count__18008_18016 = G__18028;
i__18009_18017 = G__18029;
continue;
}
} else
{var n_18030 = cljs.core.first.call(null,seq__18006_18024__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18030;
goog.events.fireListeners(n_18030,evt.type,true,evt);
}
{
var G__18031 = cljs.core.next.call(null,seq__18006_18024__$1);
var G__18032 = null;
var G__18033 = (0);
var G__18034 = (0);
seq__18006_18014 = G__18031;
chunk__18007_18015 = G__18032;
count__18008_18016 = G__18033;
i__18009_18017 = G__18034;
continue;
}
}
} else
{}
}
break;
}
var seq__18010_18035 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18011_18036 = null;var count__18012_18037 = (0);var i__18013_18038 = (0);while(true){
if((i__18013_18038 < count__18012_18037))
{var n_18039 = cljs.core._nth.call(null,chunk__18011_18036,i__18013_18038);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18039;
goog.events.fireListeners(n_18039,evt.type,false,evt);
}
{
var G__18040 = seq__18010_18035;
var G__18041 = chunk__18011_18036;
var G__18042 = count__18012_18037;
var G__18043 = (i__18013_18038 + (1));
seq__18010_18035 = G__18040;
chunk__18011_18036 = G__18041;
count__18012_18037 = G__18042;
i__18013_18038 = G__18043;
continue;
}
} else
{var temp__4126__auto___18044 = cljs.core.seq.call(null,seq__18010_18035);if(temp__4126__auto___18044)
{var seq__18010_18045__$1 = temp__4126__auto___18044;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18010_18045__$1))
{var c__4299__auto___18046 = cljs.core.chunk_first.call(null,seq__18010_18045__$1);{
var G__18047 = cljs.core.chunk_rest.call(null,seq__18010_18045__$1);
var G__18048 = c__4299__auto___18046;
var G__18049 = cljs.core.count.call(null,c__4299__auto___18046);
var G__18050 = (0);
seq__18010_18035 = G__18047;
chunk__18011_18036 = G__18048;
count__18012_18037 = G__18049;
i__18013_18038 = G__18050;
continue;
}
} else
{var n_18051 = cljs.core.first.call(null,seq__18010_18045__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18051;
goog.events.fireListeners(n_18051,evt.type,false,evt);
}
{
var G__18052 = cljs.core.next.call(null,seq__18010_18045__$1);
var G__18053 = null;
var G__18054 = (0);
var G__18055 = (0);
seq__18010_18035 = G__18052;
chunk__18011_18036 = G__18053;
count__18012_18037 = G__18054;
i__18013_18038 = G__18055;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__18062_18068 = cljs.core.seq.call(null,evt_map);var chunk__18063_18069 = null;var count__18064_18070 = (0);var i__18065_18071 = (0);while(true){
if((i__18065_18071 < count__18064_18070))
{var vec__18066_18072 = cljs.core._nth.call(null,chunk__18063_18069,i__18065_18071);var k_18073 = cljs.core.nth.call(null,vec__18066_18072,(0),null);var v_18074 = cljs.core.nth.call(null,vec__18066_18072,(1),null);(evt[k_18073] = v_18074);
{
var G__18075 = seq__18062_18068;
var G__18076 = chunk__18063_18069;
var G__18077 = count__18064_18070;
var G__18078 = (i__18065_18071 + (1));
seq__18062_18068 = G__18075;
chunk__18063_18069 = G__18076;
count__18064_18070 = G__18077;
i__18065_18071 = G__18078;
continue;
}
} else
{var temp__4126__auto___18079 = cljs.core.seq.call(null,seq__18062_18068);if(temp__4126__auto___18079)
{var seq__18062_18080__$1 = temp__4126__auto___18079;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18062_18080__$1))
{var c__4299__auto___18081 = cljs.core.chunk_first.call(null,seq__18062_18080__$1);{
var G__18082 = cljs.core.chunk_rest.call(null,seq__18062_18080__$1);
var G__18083 = c__4299__auto___18081;
var G__18084 = cljs.core.count.call(null,c__4299__auto___18081);
var G__18085 = (0);
seq__18062_18068 = G__18082;
chunk__18063_18069 = G__18083;
count__18064_18070 = G__18084;
i__18065_18071 = G__18085;
continue;
}
} else
{var vec__18067_18086 = cljs.core.first.call(null,seq__18062_18080__$1);var k_18087 = cljs.core.nth.call(null,vec__18067_18086,(0),null);var v_18088 = cljs.core.nth.call(null,vec__18067_18086,(1),null);(evt[k_18087] = v_18088);
{
var G__18089 = cljs.core.next.call(null,seq__18062_18080__$1);
var G__18090 = null;
var G__18091 = (0);
var G__18092 = (0);
seq__18062_18068 = G__18089;
chunk__18063_18069 = G__18090;
count__18064_18070 = G__18091;
i__18065_18071 = G__18092;
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
return (function (p1__18093_SHARP_){return goog.events.getListeners(p1__18093_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
