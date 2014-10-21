// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26002 = {};return obj26002;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.prevent_default[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.prevent_default["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.current_target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.current_target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.event_type[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.event_type["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.raw_event[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.raw_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t26006 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26006 = (function (evt,f,create_listener_function,meta26007){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26007 = meta26007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26006.cljs$lang$type = true;
domina.events.t26006.cljs$lang$ctorStr = "domina.events/t26006";
domina.events.t26006.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"domina.events/t26006");
});
domina.events.t26006.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t26006.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t26006.prototype.domina$events$Event$ = true;
domina.events.t26006.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26006.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26006.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26006.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26006.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26006.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26008){var self__ = this;
var _26008__$1 = this;return self__.meta26007;
});
domina.events.t26006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26008,meta26007__$1){var self__ = this;
var _26008__$1 = this;return (new domina.events.t26006(self__.evt,self__.f,self__.create_listener_function,meta26007__$1));
});
domina.events.__GT_t26006 = (function __GT_t26006(evt__$1,f__$1,create_listener_function__$1,meta26007){return (new domina.events.t26006(evt__$1,f__$1,create_listener_function__$1,meta26007));
});
}
return (new domina.events.t26006(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__26013(s__26014){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__26014__$1 = s__26014;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26014__$1);if(temp__4126__auto__)
{var s__26014__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26014__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__26014__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__26016 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__26015 = (0);while(true){
if((i__26015 < size__4374__auto__))
{var node = cljs.core._nth.call(null,c__4373__auto__,i__26015);cljs.core.chunk_append.call(null,b__26016,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26017 = (i__26015 + (1));
i__26015 = G__26017;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26016),iter__26013.call(null,cljs.core.chunk_rest.call(null,s__26014__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26016),null);
}
} else
{var node = cljs.core.first.call(null,s__26014__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26013.call(null,cljs.core.rest.call(null,s__26014__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4375__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__26026 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26027 = null;var count__26028 = (0);var i__26029 = (0);while(true){
if((i__26029 < count__26028))
{var node = cljs.core._nth.call(null,chunk__26027,i__26029);goog.events.removeAll(node);
{
var G__26034 = seq__26026;
var G__26035 = chunk__26027;
var G__26036 = count__26028;
var G__26037 = (i__26029 + (1));
seq__26026 = G__26034;
chunk__26027 = G__26035;
count__26028 = G__26036;
i__26029 = G__26037;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26026);if(temp__4126__auto__)
{var seq__26026__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26026__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__26026__$1);{
var G__26038 = cljs.core.chunk_rest.call(null,seq__26026__$1);
var G__26039 = c__4406__auto__;
var G__26040 = cljs.core.count.call(null,c__4406__auto__);
var G__26041 = (0);
seq__26026 = G__26038;
chunk__26027 = G__26039;
count__26028 = G__26040;
i__26029 = G__26041;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__26026__$1);goog.events.removeAll(node);
{
var G__26042 = cljs.core.next.call(null,seq__26026__$1);
var G__26043 = null;
var G__26044 = (0);
var G__26045 = (0);
seq__26026 = G__26042;
chunk__26027 = G__26043;
count__26028 = G__26044;
i__26029 = G__26045;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__26030 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__26031 = null;var count__26032 = (0);var i__26033 = (0);while(true){
if((i__26033 < count__26032))
{var node = cljs.core._nth.call(null,chunk__26031,i__26033);goog.events.removeAll(node,type__$1);
{
var G__26046 = seq__26030;
var G__26047 = chunk__26031;
var G__26048 = count__26032;
var G__26049 = (i__26033 + (1));
seq__26030 = G__26046;
chunk__26031 = G__26047;
count__26032 = G__26048;
i__26033 = G__26049;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26030);if(temp__4126__auto__)
{var seq__26030__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26030__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__26030__$1);{
var G__26050 = cljs.core.chunk_rest.call(null,seq__26030__$1);
var G__26051 = c__4406__auto__;
var G__26052 = cljs.core.count.call(null,c__4406__auto__);
var G__26053 = (0);
seq__26030 = G__26050;
chunk__26031 = G__26051;
count__26032 = G__26052;
i__26033 = G__26053;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__26030__$1);goog.events.removeAll(node,type__$1);
{
var G__26054 = cljs.core.next.call(null,seq__26030__$1);
var G__26055 = null;
var G__26056 = (0);
var G__26057 = (0);
seq__26030 = G__26054;
chunk__26031 = G__26055;
count__26032 = G__26056;
i__26033 = G__26057;
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
var G__26058 = parent;
var G__26059 = cljs.core.cons.call(null,parent,so_far);
n = G__26058;
so_far = G__26059;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__26068_26076 = cljs.core.seq.call(null,ancestors);var chunk__26069_26077 = null;var count__26070_26078 = (0);var i__26071_26079 = (0);while(true){
if((i__26071_26079 < count__26070_26078))
{var n_26080 = cljs.core._nth.call(null,chunk__26069_26077,i__26071_26079);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26080;
goog.events.fireListeners(n_26080,evt.type,true,evt);
}
{
var G__26081 = seq__26068_26076;
var G__26082 = chunk__26069_26077;
var G__26083 = count__26070_26078;
var G__26084 = (i__26071_26079 + (1));
seq__26068_26076 = G__26081;
chunk__26069_26077 = G__26082;
count__26070_26078 = G__26083;
i__26071_26079 = G__26084;
continue;
}
} else
{var temp__4126__auto___26085 = cljs.core.seq.call(null,seq__26068_26076);if(temp__4126__auto___26085)
{var seq__26068_26086__$1 = temp__4126__auto___26085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26068_26086__$1))
{var c__4406__auto___26087 = cljs.core.chunk_first.call(null,seq__26068_26086__$1);{
var G__26088 = cljs.core.chunk_rest.call(null,seq__26068_26086__$1);
var G__26089 = c__4406__auto___26087;
var G__26090 = cljs.core.count.call(null,c__4406__auto___26087);
var G__26091 = (0);
seq__26068_26076 = G__26088;
chunk__26069_26077 = G__26089;
count__26070_26078 = G__26090;
i__26071_26079 = G__26091;
continue;
}
} else
{var n_26092 = cljs.core.first.call(null,seq__26068_26086__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26092;
goog.events.fireListeners(n_26092,evt.type,true,evt);
}
{
var G__26093 = cljs.core.next.call(null,seq__26068_26086__$1);
var G__26094 = null;
var G__26095 = (0);
var G__26096 = (0);
seq__26068_26076 = G__26093;
chunk__26069_26077 = G__26094;
count__26070_26078 = G__26095;
i__26071_26079 = G__26096;
continue;
}
}
} else
{}
}
break;
}
var seq__26072_26097 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__26073_26098 = null;var count__26074_26099 = (0);var i__26075_26100 = (0);while(true){
if((i__26075_26100 < count__26074_26099))
{var n_26101 = cljs.core._nth.call(null,chunk__26073_26098,i__26075_26100);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26101;
goog.events.fireListeners(n_26101,evt.type,false,evt);
}
{
var G__26102 = seq__26072_26097;
var G__26103 = chunk__26073_26098;
var G__26104 = count__26074_26099;
var G__26105 = (i__26075_26100 + (1));
seq__26072_26097 = G__26102;
chunk__26073_26098 = G__26103;
count__26074_26099 = G__26104;
i__26075_26100 = G__26105;
continue;
}
} else
{var temp__4126__auto___26106 = cljs.core.seq.call(null,seq__26072_26097);if(temp__4126__auto___26106)
{var seq__26072_26107__$1 = temp__4126__auto___26106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26072_26107__$1))
{var c__4406__auto___26108 = cljs.core.chunk_first.call(null,seq__26072_26107__$1);{
var G__26109 = cljs.core.chunk_rest.call(null,seq__26072_26107__$1);
var G__26110 = c__4406__auto___26108;
var G__26111 = cljs.core.count.call(null,c__4406__auto___26108);
var G__26112 = (0);
seq__26072_26097 = G__26109;
chunk__26073_26098 = G__26110;
count__26074_26099 = G__26111;
i__26075_26100 = G__26112;
continue;
}
} else
{var n_26113 = cljs.core.first.call(null,seq__26072_26107__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26113;
goog.events.fireListeners(n_26113,evt.type,false,evt);
}
{
var G__26114 = cljs.core.next.call(null,seq__26072_26107__$1);
var G__26115 = null;
var G__26116 = (0);
var G__26117 = (0);
seq__26072_26097 = G__26114;
chunk__26073_26098 = G__26115;
count__26074_26099 = G__26116;
i__26075_26100 = G__26117;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3625__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3625__auto__))
{return o.dispatchEvent;
} else
{return and__3625__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__26124_26130 = cljs.core.seq.call(null,evt_map);var chunk__26125_26131 = null;var count__26126_26132 = (0);var i__26127_26133 = (0);while(true){
if((i__26127_26133 < count__26126_26132))
{var vec__26128_26134 = cljs.core._nth.call(null,chunk__26125_26131,i__26127_26133);var k_26135 = cljs.core.nth.call(null,vec__26128_26134,(0),null);var v_26136 = cljs.core.nth.call(null,vec__26128_26134,(1),null);(evt[k_26135] = v_26136);
{
var G__26137 = seq__26124_26130;
var G__26138 = chunk__26125_26131;
var G__26139 = count__26126_26132;
var G__26140 = (i__26127_26133 + (1));
seq__26124_26130 = G__26137;
chunk__26125_26131 = G__26138;
count__26126_26132 = G__26139;
i__26127_26133 = G__26140;
continue;
}
} else
{var temp__4126__auto___26141 = cljs.core.seq.call(null,seq__26124_26130);if(temp__4126__auto___26141)
{var seq__26124_26142__$1 = temp__4126__auto___26141;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26124_26142__$1))
{var c__4406__auto___26143 = cljs.core.chunk_first.call(null,seq__26124_26142__$1);{
var G__26144 = cljs.core.chunk_rest.call(null,seq__26124_26142__$1);
var G__26145 = c__4406__auto___26143;
var G__26146 = cljs.core.count.call(null,c__4406__auto___26143);
var G__26147 = (0);
seq__26124_26130 = G__26144;
chunk__26125_26131 = G__26145;
count__26126_26132 = G__26146;
i__26127_26133 = G__26147;
continue;
}
} else
{var vec__26129_26148 = cljs.core.first.call(null,seq__26124_26142__$1);var k_26149 = cljs.core.nth.call(null,vec__26129_26148,(0),null);var v_26150 = cljs.core.nth.call(null,vec__26129_26148,(1),null);(evt[k_26149] = v_26150);
{
var G__26151 = cljs.core.next.call(null,seq__26124_26142__$1);
var G__26152 = null;
var G__26153 = (0);
var G__26154 = (0);
seq__26124_26130 = G__26151;
chunk__26125_26131 = G__26152;
count__26126_26132 = G__26153;
i__26127_26133 = G__26154;
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
return (function (p1__26155_SHARP_){return goog.events.getListeners(p1__26155_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
