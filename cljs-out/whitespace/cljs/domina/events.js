// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj49974 = {};return obj49974;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.prevent_default[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.prevent_default["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.current_target[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.current_target["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.event_type[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.event_type["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3429__auto__ = evt;if(and__3429__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3429__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4068__auto__ = (((evt == null))?null:evt);return (function (){var or__3441__auto__ = (domina.events.raw_event[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.events.raw_event["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t49978 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t49978 = (function (evt,f,create_listener_function,meta49979){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta49979 = meta49979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t49978.cljs$lang$type = true;
domina.events.t49978.cljs$lang$ctorStr = "domina.events/t49978";
domina.events.t49978.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t49978");
});
domina.events.t49978.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t49978.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t49978.prototype.domina$events$Event$ = true;
domina.events.t49978.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t49978.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t49978.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t49978.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t49978.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t49978.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t49978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49980){var self__ = this;
var _49980__$1 = this;return self__.meta49979;
});
domina.events.t49978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49980,meta49979__$1){var self__ = this;
var _49980__$1 = this;return (new domina.events.t49978(self__.evt,self__.f,self__.create_listener_function,meta49979__$1));
});
domina.events.__GT_t49978 = (function __GT_t49978(evt__$1,f__$1,create_listener_function__$1,meta49979){return (new domina.events.t49978(evt__$1,f__$1,create_listener_function__$1,meta49979));
});
}
return (new domina.events.t49978(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__49985(s__49986){return (new cljs.core.LazySeq(null,(function (){var s__49986__$1 = s__49986;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__49986__$1);if(temp__4092__auto__)
{var s__49986__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49986__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__49986__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__49988 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__49987 = 0;while(true){
if((i__49987 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__49987);cljs.core.chunk_append.call(null,b__49988,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__49989 = (i__49987 + 1);
i__49987 = G__49989;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49988),iter__49985.call(null,cljs.core.chunk_rest.call(null,s__49986__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49988),null);
}
} else
{var node = cljs.core.first.call(null,s__49986__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__49985.call(null,cljs.core.rest.call(null,s__49986__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__49998 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__49999 = null;var count__50000 = 0;var i__50001 = 0;while(true){
if((i__50001 < count__50000))
{var node = cljs.core._nth.call(null,chunk__49999,i__50001);goog.events.removeAll(node);
{
var G__50006 = seq__49998;
var G__50007 = chunk__49999;
var G__50008 = count__50000;
var G__50009 = (i__50001 + 1);
seq__49998 = G__50006;
chunk__49999 = G__50007;
count__50000 = G__50008;
i__50001 = G__50009;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__49998);if(temp__4092__auto__)
{var seq__49998__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49998__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__49998__$1);{
var G__50010 = cljs.core.chunk_rest.call(null,seq__49998__$1);
var G__50011 = c__4189__auto__;
var G__50012 = cljs.core.count.call(null,c__4189__auto__);
var G__50013 = 0;
seq__49998 = G__50010;
chunk__49999 = G__50011;
count__50000 = G__50012;
i__50001 = G__50013;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__49998__$1);goog.events.removeAll(node);
{
var G__50014 = cljs.core.next.call(null,seq__49998__$1);
var G__50015 = null;
var G__50016 = 0;
var G__50017 = 0;
seq__49998 = G__50014;
chunk__49999 = G__50015;
count__50000 = G__50016;
i__50001 = G__50017;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__50002 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50003 = null;var count__50004 = 0;var i__50005 = 0;while(true){
if((i__50005 < count__50004))
{var node = cljs.core._nth.call(null,chunk__50003,i__50005);goog.events.removeAll(node,type__$1);
{
var G__50018 = seq__50002;
var G__50019 = chunk__50003;
var G__50020 = count__50004;
var G__50021 = (i__50005 + 1);
seq__50002 = G__50018;
chunk__50003 = G__50019;
count__50004 = G__50020;
i__50005 = G__50021;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50002);if(temp__4092__auto__)
{var seq__50002__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50002__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50002__$1);{
var G__50022 = cljs.core.chunk_rest.call(null,seq__50002__$1);
var G__50023 = c__4189__auto__;
var G__50024 = cljs.core.count.call(null,c__4189__auto__);
var G__50025 = 0;
seq__50002 = G__50022;
chunk__50003 = G__50023;
count__50004 = G__50024;
i__50005 = G__50025;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50002__$1);goog.events.removeAll(node,type__$1);
{
var G__50026 = cljs.core.next.call(null,seq__50002__$1);
var G__50027 = null;
var G__50028 = 0;
var G__50029 = 0;
seq__50002 = G__50026;
chunk__50003 = G__50027;
count__50004 = G__50028;
i__50005 = G__50029;
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
var G__50030 = parent;
var G__50031 = cljs.core.cons.call(null,parent,so_far);
n = G__50030;
so_far = G__50031;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__50040_50048 = cljs.core.seq.call(null,ancestors);var chunk__50041_50049 = null;var count__50042_50050 = 0;var i__50043_50051 = 0;while(true){
if((i__50043_50051 < count__50042_50050))
{var n_50052 = cljs.core._nth.call(null,chunk__50041_50049,i__50043_50051);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50052;
goog.events.fireListeners(n_50052,evt.type,true,evt);
}
{
var G__50053 = seq__50040_50048;
var G__50054 = chunk__50041_50049;
var G__50055 = count__50042_50050;
var G__50056 = (i__50043_50051 + 1);
seq__50040_50048 = G__50053;
chunk__50041_50049 = G__50054;
count__50042_50050 = G__50055;
i__50043_50051 = G__50056;
continue;
}
} else
{var temp__4092__auto___50057 = cljs.core.seq.call(null,seq__50040_50048);if(temp__4092__auto___50057)
{var seq__50040_50058__$1 = temp__4092__auto___50057;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50040_50058__$1))
{var c__4189__auto___50059 = cljs.core.chunk_first.call(null,seq__50040_50058__$1);{
var G__50060 = cljs.core.chunk_rest.call(null,seq__50040_50058__$1);
var G__50061 = c__4189__auto___50059;
var G__50062 = cljs.core.count.call(null,c__4189__auto___50059);
var G__50063 = 0;
seq__50040_50048 = G__50060;
chunk__50041_50049 = G__50061;
count__50042_50050 = G__50062;
i__50043_50051 = G__50063;
continue;
}
} else
{var n_50064 = cljs.core.first.call(null,seq__50040_50058__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50064;
goog.events.fireListeners(n_50064,evt.type,true,evt);
}
{
var G__50065 = cljs.core.next.call(null,seq__50040_50058__$1);
var G__50066 = null;
var G__50067 = 0;
var G__50068 = 0;
seq__50040_50048 = G__50065;
chunk__50041_50049 = G__50066;
count__50042_50050 = G__50067;
i__50043_50051 = G__50068;
continue;
}
}
} else
{}
}
break;
}
var seq__50044_50069 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__50045_50070 = null;var count__50046_50071 = 0;var i__50047_50072 = 0;while(true){
if((i__50047_50072 < count__50046_50071))
{var n_50073 = cljs.core._nth.call(null,chunk__50045_50070,i__50047_50072);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50073;
goog.events.fireListeners(n_50073,evt.type,false,evt);
}
{
var G__50074 = seq__50044_50069;
var G__50075 = chunk__50045_50070;
var G__50076 = count__50046_50071;
var G__50077 = (i__50047_50072 + 1);
seq__50044_50069 = G__50074;
chunk__50045_50070 = G__50075;
count__50046_50071 = G__50076;
i__50047_50072 = G__50077;
continue;
}
} else
{var temp__4092__auto___50078 = cljs.core.seq.call(null,seq__50044_50069);if(temp__4092__auto___50078)
{var seq__50044_50079__$1 = temp__4092__auto___50078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50044_50079__$1))
{var c__4189__auto___50080 = cljs.core.chunk_first.call(null,seq__50044_50079__$1);{
var G__50081 = cljs.core.chunk_rest.call(null,seq__50044_50079__$1);
var G__50082 = c__4189__auto___50080;
var G__50083 = cljs.core.count.call(null,c__4189__auto___50080);
var G__50084 = 0;
seq__50044_50069 = G__50081;
chunk__50045_50070 = G__50082;
count__50046_50071 = G__50083;
i__50047_50072 = G__50084;
continue;
}
} else
{var n_50085 = cljs.core.first.call(null,seq__50044_50079__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50085;
goog.events.fireListeners(n_50085,evt.type,false,evt);
}
{
var G__50086 = cljs.core.next.call(null,seq__50044_50079__$1);
var G__50087 = null;
var G__50088 = 0;
var G__50089 = 0;
seq__50044_50069 = G__50086;
chunk__50045_50070 = G__50087;
count__50046_50071 = G__50088;
i__50047_50072 = G__50089;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3429__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3429__auto__))
{return o.dispatchEvent;
} else
{return and__3429__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__50096_50102 = cljs.core.seq.call(null,evt_map);var chunk__50097_50103 = null;var count__50098_50104 = 0;var i__50099_50105 = 0;while(true){
if((i__50099_50105 < count__50098_50104))
{var vec__50100_50106 = cljs.core._nth.call(null,chunk__50097_50103,i__50099_50105);var k_50107 = cljs.core.nth.call(null,vec__50100_50106,0,null);var v_50108 = cljs.core.nth.call(null,vec__50100_50106,1,null);(evt[k_50107] = v_50108);
{
var G__50109 = seq__50096_50102;
var G__50110 = chunk__50097_50103;
var G__50111 = count__50098_50104;
var G__50112 = (i__50099_50105 + 1);
seq__50096_50102 = G__50109;
chunk__50097_50103 = G__50110;
count__50098_50104 = G__50111;
i__50099_50105 = G__50112;
continue;
}
} else
{var temp__4092__auto___50113 = cljs.core.seq.call(null,seq__50096_50102);if(temp__4092__auto___50113)
{var seq__50096_50114__$1 = temp__4092__auto___50113;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50096_50114__$1))
{var c__4189__auto___50115 = cljs.core.chunk_first.call(null,seq__50096_50114__$1);{
var G__50116 = cljs.core.chunk_rest.call(null,seq__50096_50114__$1);
var G__50117 = c__4189__auto___50115;
var G__50118 = cljs.core.count.call(null,c__4189__auto___50115);
var G__50119 = 0;
seq__50096_50102 = G__50116;
chunk__50097_50103 = G__50117;
count__50098_50104 = G__50118;
i__50099_50105 = G__50119;
continue;
}
} else
{var vec__50101_50120 = cljs.core.first.call(null,seq__50096_50114__$1);var k_50121 = cljs.core.nth.call(null,vec__50101_50120,0,null);var v_50122 = cljs.core.nth.call(null,vec__50101_50120,1,null);(evt[k_50121] = v_50122);
{
var G__50123 = cljs.core.next.call(null,seq__50096_50114__$1);
var G__50124 = null;
var G__50125 = 0;
var G__50126 = 0;
seq__50096_50102 = G__50123;
chunk__50097_50103 = G__50124;
count__50098_50104 = G__50125;
i__50099_50105 = G__50126;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__50127_SHARP_){return goog.events.getListeners(p1__50127_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
