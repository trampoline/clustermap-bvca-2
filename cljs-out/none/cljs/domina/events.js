// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj57017 = {};return obj57017;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t57021 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t57021 = (function (evt,f,create_listener_function,meta57022){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta57022 = meta57022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t57021.cljs$lang$type = true;
domina.events.t57021.cljs$lang$ctorStr = "domina.events/t57021";
domina.events.t57021.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t57021");
});
domina.events.t57021.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t57021.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t57021.prototype.domina$events$Event$ = true;
domina.events.t57021.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t57021.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t57021.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t57021.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t57021.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t57021.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t57021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57023){var self__ = this;
var _57023__$1 = this;return self__.meta57022;
});
domina.events.t57021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57023,meta57022__$1){var self__ = this;
var _57023__$1 = this;return (new domina.events.t57021(self__.evt,self__.f,self__.create_listener_function,meta57022__$1));
});
domina.events.__GT_t57021 = (function __GT_t57021(evt__$1,f__$1,create_listener_function__$1,meta57022){return (new domina.events.t57021(evt__$1,f__$1,create_listener_function__$1,meta57022));
});
}
return (new domina.events.t57021(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__57028(s__57029){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__57029__$1 = s__57029;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__57029__$1);if(temp__4126__auto__)
{var s__57029__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__57029__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__57029__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__57031 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__57030 = (0);while(true){
if((i__57030 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__57030);cljs.core.chunk_append.call(null,b__57031,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__57032 = (i__57030 + (1));
i__57030 = G__57032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57031),iter__57028.call(null,cljs.core.chunk_rest.call(null,s__57029__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57031),null);
}
} else
{var node = cljs.core.first.call(null,s__57029__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__57028.call(null,cljs.core.rest.call(null,s__57029__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__57041 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57042 = null;var count__57043 = (0);var i__57044 = (0);while(true){
if((i__57044 < count__57043))
{var node = cljs.core._nth.call(null,chunk__57042,i__57044);goog.events.removeAll(node);
{
var G__57049 = seq__57041;
var G__57050 = chunk__57042;
var G__57051 = count__57043;
var G__57052 = (i__57044 + (1));
seq__57041 = G__57049;
chunk__57042 = G__57050;
count__57043 = G__57051;
i__57044 = G__57052;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57041);if(temp__4126__auto__)
{var seq__57041__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57041__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__57041__$1);{
var G__57053 = cljs.core.chunk_rest.call(null,seq__57041__$1);
var G__57054 = c__4299__auto__;
var G__57055 = cljs.core.count.call(null,c__4299__auto__);
var G__57056 = (0);
seq__57041 = G__57053;
chunk__57042 = G__57054;
count__57043 = G__57055;
i__57044 = G__57056;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__57041__$1);goog.events.removeAll(node);
{
var G__57057 = cljs.core.next.call(null,seq__57041__$1);
var G__57058 = null;
var G__57059 = (0);
var G__57060 = (0);
seq__57041 = G__57057;
chunk__57042 = G__57058;
count__57043 = G__57059;
i__57044 = G__57060;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__57045 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57046 = null;var count__57047 = (0);var i__57048 = (0);while(true){
if((i__57048 < count__57047))
{var node = cljs.core._nth.call(null,chunk__57046,i__57048);goog.events.removeAll(node,type__$1);
{
var G__57061 = seq__57045;
var G__57062 = chunk__57046;
var G__57063 = count__57047;
var G__57064 = (i__57048 + (1));
seq__57045 = G__57061;
chunk__57046 = G__57062;
count__57047 = G__57063;
i__57048 = G__57064;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57045);if(temp__4126__auto__)
{var seq__57045__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57045__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__57045__$1);{
var G__57065 = cljs.core.chunk_rest.call(null,seq__57045__$1);
var G__57066 = c__4299__auto__;
var G__57067 = cljs.core.count.call(null,c__4299__auto__);
var G__57068 = (0);
seq__57045 = G__57065;
chunk__57046 = G__57066;
count__57047 = G__57067;
i__57048 = G__57068;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__57045__$1);goog.events.removeAll(node,type__$1);
{
var G__57069 = cljs.core.next.call(null,seq__57045__$1);
var G__57070 = null;
var G__57071 = (0);
var G__57072 = (0);
seq__57045 = G__57069;
chunk__57046 = G__57070;
count__57047 = G__57071;
i__57048 = G__57072;
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
var G__57073 = parent;
var G__57074 = cljs.core.cons.call(null,parent,so_far);
n = G__57073;
so_far = G__57074;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__57083_57091 = cljs.core.seq.call(null,ancestors);var chunk__57084_57092 = null;var count__57085_57093 = (0);var i__57086_57094 = (0);while(true){
if((i__57086_57094 < count__57085_57093))
{var n_57095 = cljs.core._nth.call(null,chunk__57084_57092,i__57086_57094);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57095;
goog.events.fireListeners(n_57095,evt.type,true,evt);
}
{
var G__57096 = seq__57083_57091;
var G__57097 = chunk__57084_57092;
var G__57098 = count__57085_57093;
var G__57099 = (i__57086_57094 + (1));
seq__57083_57091 = G__57096;
chunk__57084_57092 = G__57097;
count__57085_57093 = G__57098;
i__57086_57094 = G__57099;
continue;
}
} else
{var temp__4126__auto___57100 = cljs.core.seq.call(null,seq__57083_57091);if(temp__4126__auto___57100)
{var seq__57083_57101__$1 = temp__4126__auto___57100;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57083_57101__$1))
{var c__4299__auto___57102 = cljs.core.chunk_first.call(null,seq__57083_57101__$1);{
var G__57103 = cljs.core.chunk_rest.call(null,seq__57083_57101__$1);
var G__57104 = c__4299__auto___57102;
var G__57105 = cljs.core.count.call(null,c__4299__auto___57102);
var G__57106 = (0);
seq__57083_57091 = G__57103;
chunk__57084_57092 = G__57104;
count__57085_57093 = G__57105;
i__57086_57094 = G__57106;
continue;
}
} else
{var n_57107 = cljs.core.first.call(null,seq__57083_57101__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57107;
goog.events.fireListeners(n_57107,evt.type,true,evt);
}
{
var G__57108 = cljs.core.next.call(null,seq__57083_57101__$1);
var G__57109 = null;
var G__57110 = (0);
var G__57111 = (0);
seq__57083_57091 = G__57108;
chunk__57084_57092 = G__57109;
count__57085_57093 = G__57110;
i__57086_57094 = G__57111;
continue;
}
}
} else
{}
}
break;
}
var seq__57087_57112 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__57088_57113 = null;var count__57089_57114 = (0);var i__57090_57115 = (0);while(true){
if((i__57090_57115 < count__57089_57114))
{var n_57116 = cljs.core._nth.call(null,chunk__57088_57113,i__57090_57115);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57116;
goog.events.fireListeners(n_57116,evt.type,false,evt);
}
{
var G__57117 = seq__57087_57112;
var G__57118 = chunk__57088_57113;
var G__57119 = count__57089_57114;
var G__57120 = (i__57090_57115 + (1));
seq__57087_57112 = G__57117;
chunk__57088_57113 = G__57118;
count__57089_57114 = G__57119;
i__57090_57115 = G__57120;
continue;
}
} else
{var temp__4126__auto___57121 = cljs.core.seq.call(null,seq__57087_57112);if(temp__4126__auto___57121)
{var seq__57087_57122__$1 = temp__4126__auto___57121;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57087_57122__$1))
{var c__4299__auto___57123 = cljs.core.chunk_first.call(null,seq__57087_57122__$1);{
var G__57124 = cljs.core.chunk_rest.call(null,seq__57087_57122__$1);
var G__57125 = c__4299__auto___57123;
var G__57126 = cljs.core.count.call(null,c__4299__auto___57123);
var G__57127 = (0);
seq__57087_57112 = G__57124;
chunk__57088_57113 = G__57125;
count__57089_57114 = G__57126;
i__57090_57115 = G__57127;
continue;
}
} else
{var n_57128 = cljs.core.first.call(null,seq__57087_57122__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_57128;
goog.events.fireListeners(n_57128,evt.type,false,evt);
}
{
var G__57129 = cljs.core.next.call(null,seq__57087_57122__$1);
var G__57130 = null;
var G__57131 = (0);
var G__57132 = (0);
seq__57087_57112 = G__57129;
chunk__57088_57113 = G__57130;
count__57089_57114 = G__57131;
i__57090_57115 = G__57132;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__57139_57145 = cljs.core.seq.call(null,evt_map);var chunk__57140_57146 = null;var count__57141_57147 = (0);var i__57142_57148 = (0);while(true){
if((i__57142_57148 < count__57141_57147))
{var vec__57143_57149 = cljs.core._nth.call(null,chunk__57140_57146,i__57142_57148);var k_57150 = cljs.core.nth.call(null,vec__57143_57149,(0),null);var v_57151 = cljs.core.nth.call(null,vec__57143_57149,(1),null);(evt[k_57150] = v_57151);
{
var G__57152 = seq__57139_57145;
var G__57153 = chunk__57140_57146;
var G__57154 = count__57141_57147;
var G__57155 = (i__57142_57148 + (1));
seq__57139_57145 = G__57152;
chunk__57140_57146 = G__57153;
count__57141_57147 = G__57154;
i__57142_57148 = G__57155;
continue;
}
} else
{var temp__4126__auto___57156 = cljs.core.seq.call(null,seq__57139_57145);if(temp__4126__auto___57156)
{var seq__57139_57157__$1 = temp__4126__auto___57156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57139_57157__$1))
{var c__4299__auto___57158 = cljs.core.chunk_first.call(null,seq__57139_57157__$1);{
var G__57159 = cljs.core.chunk_rest.call(null,seq__57139_57157__$1);
var G__57160 = c__4299__auto___57158;
var G__57161 = cljs.core.count.call(null,c__4299__auto___57158);
var G__57162 = (0);
seq__57139_57145 = G__57159;
chunk__57140_57146 = G__57160;
count__57141_57147 = G__57161;
i__57142_57148 = G__57162;
continue;
}
} else
{var vec__57144_57163 = cljs.core.first.call(null,seq__57139_57157__$1);var k_57164 = cljs.core.nth.call(null,vec__57144_57163,(0),null);var v_57165 = cljs.core.nth.call(null,vec__57144_57163,(1),null);(evt[k_57164] = v_57165);
{
var G__57166 = cljs.core.next.call(null,seq__57139_57157__$1);
var G__57167 = null;
var G__57168 = (0);
var G__57169 = (0);
seq__57139_57145 = G__57166;
chunk__57140_57146 = G__57167;
count__57141_57147 = G__57168;
i__57142_57148 = G__57169;
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
return (function (p1__57170_SHARP_){return goog.events.getListeners(p1__57170_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map