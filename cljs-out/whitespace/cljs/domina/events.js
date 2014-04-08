// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj50006 = {};return obj50006;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t50010 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50010 = (function (evt,f,create_listener_function,meta50011){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50011 = meta50011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50010.cljs$lang$type = true;
domina.events.t50010.cljs$lang$ctorStr = "domina.events/t50010";
domina.events.t50010.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t50010");
});
domina.events.t50010.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t50010.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t50010.prototype.domina$events$Event$ = true;
domina.events.t50010.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50010.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50010.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50010.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50010.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50010.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50012){var self__ = this;
var _50012__$1 = this;return self__.meta50011;
});
domina.events.t50010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50012,meta50011__$1){var self__ = this;
var _50012__$1 = this;return (new domina.events.t50010(self__.evt,self__.f,self__.create_listener_function,meta50011__$1));
});
domina.events.__GT_t50010 = (function __GT_t50010(evt__$1,f__$1,create_listener_function__$1,meta50011){return (new domina.events.t50010(evt__$1,f__$1,create_listener_function__$1,meta50011));
});
}
return (new domina.events.t50010(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__50017(s__50018){return (new cljs.core.LazySeq(null,(function (){var s__50018__$1 = s__50018;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__50018__$1);if(temp__4092__auto__)
{var s__50018__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50018__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__50018__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__50020 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__50019 = 0;while(true){
if((i__50019 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__50019);cljs.core.chunk_append.call(null,b__50020,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__50021 = (i__50019 + 1);
i__50019 = G__50021;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50020),iter__50017.call(null,cljs.core.chunk_rest.call(null,s__50018__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50020),null);
}
} else
{var node = cljs.core.first.call(null,s__50018__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__50017.call(null,cljs.core.rest.call(null,s__50018__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__50030 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50031 = null;var count__50032 = 0;var i__50033 = 0;while(true){
if((i__50033 < count__50032))
{var node = cljs.core._nth.call(null,chunk__50031,i__50033);goog.events.removeAll(node);
{
var G__50038 = seq__50030;
var G__50039 = chunk__50031;
var G__50040 = count__50032;
var G__50041 = (i__50033 + 1);
seq__50030 = G__50038;
chunk__50031 = G__50039;
count__50032 = G__50040;
i__50033 = G__50041;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50030);if(temp__4092__auto__)
{var seq__50030__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50030__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50030__$1);{
var G__50042 = cljs.core.chunk_rest.call(null,seq__50030__$1);
var G__50043 = c__4189__auto__;
var G__50044 = cljs.core.count.call(null,c__4189__auto__);
var G__50045 = 0;
seq__50030 = G__50042;
chunk__50031 = G__50043;
count__50032 = G__50044;
i__50033 = G__50045;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50030__$1);goog.events.removeAll(node);
{
var G__50046 = cljs.core.next.call(null,seq__50030__$1);
var G__50047 = null;
var G__50048 = 0;
var G__50049 = 0;
seq__50030 = G__50046;
chunk__50031 = G__50047;
count__50032 = G__50048;
i__50033 = G__50049;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__50034 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50035 = null;var count__50036 = 0;var i__50037 = 0;while(true){
if((i__50037 < count__50036))
{var node = cljs.core._nth.call(null,chunk__50035,i__50037);goog.events.removeAll(node,type__$1);
{
var G__50050 = seq__50034;
var G__50051 = chunk__50035;
var G__50052 = count__50036;
var G__50053 = (i__50037 + 1);
seq__50034 = G__50050;
chunk__50035 = G__50051;
count__50036 = G__50052;
i__50037 = G__50053;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50034);if(temp__4092__auto__)
{var seq__50034__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50034__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50034__$1);{
var G__50054 = cljs.core.chunk_rest.call(null,seq__50034__$1);
var G__50055 = c__4189__auto__;
var G__50056 = cljs.core.count.call(null,c__4189__auto__);
var G__50057 = 0;
seq__50034 = G__50054;
chunk__50035 = G__50055;
count__50036 = G__50056;
i__50037 = G__50057;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50034__$1);goog.events.removeAll(node,type__$1);
{
var G__50058 = cljs.core.next.call(null,seq__50034__$1);
var G__50059 = null;
var G__50060 = 0;
var G__50061 = 0;
seq__50034 = G__50058;
chunk__50035 = G__50059;
count__50036 = G__50060;
i__50037 = G__50061;
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
var G__50062 = parent;
var G__50063 = cljs.core.cons.call(null,parent,so_far);
n = G__50062;
so_far = G__50063;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__50072_50080 = cljs.core.seq.call(null,ancestors);var chunk__50073_50081 = null;var count__50074_50082 = 0;var i__50075_50083 = 0;while(true){
if((i__50075_50083 < count__50074_50082))
{var n_50084 = cljs.core._nth.call(null,chunk__50073_50081,i__50075_50083);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50084;
goog.events.fireListeners(n_50084,evt.type,true,evt);
}
{
var G__50085 = seq__50072_50080;
var G__50086 = chunk__50073_50081;
var G__50087 = count__50074_50082;
var G__50088 = (i__50075_50083 + 1);
seq__50072_50080 = G__50085;
chunk__50073_50081 = G__50086;
count__50074_50082 = G__50087;
i__50075_50083 = G__50088;
continue;
}
} else
{var temp__4092__auto___50089 = cljs.core.seq.call(null,seq__50072_50080);if(temp__4092__auto___50089)
{var seq__50072_50090__$1 = temp__4092__auto___50089;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50072_50090__$1))
{var c__4189__auto___50091 = cljs.core.chunk_first.call(null,seq__50072_50090__$1);{
var G__50092 = cljs.core.chunk_rest.call(null,seq__50072_50090__$1);
var G__50093 = c__4189__auto___50091;
var G__50094 = cljs.core.count.call(null,c__4189__auto___50091);
var G__50095 = 0;
seq__50072_50080 = G__50092;
chunk__50073_50081 = G__50093;
count__50074_50082 = G__50094;
i__50075_50083 = G__50095;
continue;
}
} else
{var n_50096 = cljs.core.first.call(null,seq__50072_50090__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50096;
goog.events.fireListeners(n_50096,evt.type,true,evt);
}
{
var G__50097 = cljs.core.next.call(null,seq__50072_50090__$1);
var G__50098 = null;
var G__50099 = 0;
var G__50100 = 0;
seq__50072_50080 = G__50097;
chunk__50073_50081 = G__50098;
count__50074_50082 = G__50099;
i__50075_50083 = G__50100;
continue;
}
}
} else
{}
}
break;
}
var seq__50076_50101 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__50077_50102 = null;var count__50078_50103 = 0;var i__50079_50104 = 0;while(true){
if((i__50079_50104 < count__50078_50103))
{var n_50105 = cljs.core._nth.call(null,chunk__50077_50102,i__50079_50104);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50105;
goog.events.fireListeners(n_50105,evt.type,false,evt);
}
{
var G__50106 = seq__50076_50101;
var G__50107 = chunk__50077_50102;
var G__50108 = count__50078_50103;
var G__50109 = (i__50079_50104 + 1);
seq__50076_50101 = G__50106;
chunk__50077_50102 = G__50107;
count__50078_50103 = G__50108;
i__50079_50104 = G__50109;
continue;
}
} else
{var temp__4092__auto___50110 = cljs.core.seq.call(null,seq__50076_50101);if(temp__4092__auto___50110)
{var seq__50076_50111__$1 = temp__4092__auto___50110;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50076_50111__$1))
{var c__4189__auto___50112 = cljs.core.chunk_first.call(null,seq__50076_50111__$1);{
var G__50113 = cljs.core.chunk_rest.call(null,seq__50076_50111__$1);
var G__50114 = c__4189__auto___50112;
var G__50115 = cljs.core.count.call(null,c__4189__auto___50112);
var G__50116 = 0;
seq__50076_50101 = G__50113;
chunk__50077_50102 = G__50114;
count__50078_50103 = G__50115;
i__50079_50104 = G__50116;
continue;
}
} else
{var n_50117 = cljs.core.first.call(null,seq__50076_50111__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50117;
goog.events.fireListeners(n_50117,evt.type,false,evt);
}
{
var G__50118 = cljs.core.next.call(null,seq__50076_50111__$1);
var G__50119 = null;
var G__50120 = 0;
var G__50121 = 0;
seq__50076_50101 = G__50118;
chunk__50077_50102 = G__50119;
count__50078_50103 = G__50120;
i__50079_50104 = G__50121;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__50128_50134 = cljs.core.seq.call(null,evt_map);var chunk__50129_50135 = null;var count__50130_50136 = 0;var i__50131_50137 = 0;while(true){
if((i__50131_50137 < count__50130_50136))
{var vec__50132_50138 = cljs.core._nth.call(null,chunk__50129_50135,i__50131_50137);var k_50139 = cljs.core.nth.call(null,vec__50132_50138,0,null);var v_50140 = cljs.core.nth.call(null,vec__50132_50138,1,null);(evt[k_50139] = v_50140);
{
var G__50141 = seq__50128_50134;
var G__50142 = chunk__50129_50135;
var G__50143 = count__50130_50136;
var G__50144 = (i__50131_50137 + 1);
seq__50128_50134 = G__50141;
chunk__50129_50135 = G__50142;
count__50130_50136 = G__50143;
i__50131_50137 = G__50144;
continue;
}
} else
{var temp__4092__auto___50145 = cljs.core.seq.call(null,seq__50128_50134);if(temp__4092__auto___50145)
{var seq__50128_50146__$1 = temp__4092__auto___50145;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50128_50146__$1))
{var c__4189__auto___50147 = cljs.core.chunk_first.call(null,seq__50128_50146__$1);{
var G__50148 = cljs.core.chunk_rest.call(null,seq__50128_50146__$1);
var G__50149 = c__4189__auto___50147;
var G__50150 = cljs.core.count.call(null,c__4189__auto___50147);
var G__50151 = 0;
seq__50128_50134 = G__50148;
chunk__50129_50135 = G__50149;
count__50130_50136 = G__50150;
i__50131_50137 = G__50151;
continue;
}
} else
{var vec__50133_50152 = cljs.core.first.call(null,seq__50128_50146__$1);var k_50153 = cljs.core.nth.call(null,vec__50133_50152,0,null);var v_50154 = cljs.core.nth.call(null,vec__50133_50152,1,null);(evt[k_50153] = v_50154);
{
var G__50155 = cljs.core.next.call(null,seq__50128_50146__$1);
var G__50156 = null;
var G__50157 = 0;
var G__50158 = 0;
seq__50128_50134 = G__50155;
chunk__50129_50135 = G__50156;
count__50130_50136 = G__50157;
i__50131_50137 = G__50158;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__50159_SHARP_){return goog.events.getListeners(p1__50159_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
