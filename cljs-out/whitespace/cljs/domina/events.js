// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj38025 = {};return obj38025;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t38029 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t38029 = (function (evt,f,create_listener_function,meta38030){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta38030 = meta38030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t38029.cljs$lang$type = true;
domina.events.t38029.cljs$lang$ctorStr = "domina.events/t38029";
domina.events.t38029.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t38029");
});
domina.events.t38029.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t38029.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t38029.prototype.domina$events$Event$ = true;
domina.events.t38029.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t38029.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t38029.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t38029.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t38029.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t38029.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t38029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38031){var self__ = this;
var _38031__$1 = this;return self__.meta38030;
});
domina.events.t38029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38031,meta38030__$1){var self__ = this;
var _38031__$1 = this;return (new domina.events.t38029(self__.evt,self__.f,self__.create_listener_function,meta38030__$1));
});
domina.events.__GT_t38029 = (function __GT_t38029(evt__$1,f__$1,create_listener_function__$1,meta38030){return (new domina.events.t38029(evt__$1,f__$1,create_listener_function__$1,meta38030));
});
}
return (new domina.events.t38029(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__38036(s__38037){return (new cljs.core.LazySeq(null,(function (){var s__38037__$1 = s__38037;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__38037__$1);if(temp__4092__auto__)
{var s__38037__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38037__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__38037__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__38039 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__38038 = 0;while(true){
if((i__38038 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__38038);cljs.core.chunk_append.call(null,b__38039,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__38040 = (i__38038 + 1);
i__38038 = G__38040;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38039),iter__38036.call(null,cljs.core.chunk_rest.call(null,s__38037__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38039),null);
}
} else
{var node = cljs.core.first.call(null,s__38037__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__38036.call(null,cljs.core.rest.call(null,s__38037__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__38049 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38050 = null;var count__38051 = 0;var i__38052 = 0;while(true){
if((i__38052 < count__38051))
{var node = cljs.core._nth.call(null,chunk__38050,i__38052);goog.events.removeAll(node);
{
var G__38057 = seq__38049;
var G__38058 = chunk__38050;
var G__38059 = count__38051;
var G__38060 = (i__38052 + 1);
seq__38049 = G__38057;
chunk__38050 = G__38058;
count__38051 = G__38059;
i__38052 = G__38060;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38049);if(temp__4092__auto__)
{var seq__38049__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38049__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38049__$1);{
var G__38061 = cljs.core.chunk_rest.call(null,seq__38049__$1);
var G__38062 = c__4148__auto__;
var G__38063 = cljs.core.count.call(null,c__4148__auto__);
var G__38064 = 0;
seq__38049 = G__38061;
chunk__38050 = G__38062;
count__38051 = G__38063;
i__38052 = G__38064;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38049__$1);goog.events.removeAll(node);
{
var G__38065 = cljs.core.next.call(null,seq__38049__$1);
var G__38066 = null;
var G__38067 = 0;
var G__38068 = 0;
seq__38049 = G__38065;
chunk__38050 = G__38066;
count__38051 = G__38067;
i__38052 = G__38068;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__38053 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__38054 = null;var count__38055 = 0;var i__38056 = 0;while(true){
if((i__38056 < count__38055))
{var node = cljs.core._nth.call(null,chunk__38054,i__38056);goog.events.removeAll(node,type__$1);
{
var G__38069 = seq__38053;
var G__38070 = chunk__38054;
var G__38071 = count__38055;
var G__38072 = (i__38056 + 1);
seq__38053 = G__38069;
chunk__38054 = G__38070;
count__38055 = G__38071;
i__38056 = G__38072;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__38053);if(temp__4092__auto__)
{var seq__38053__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38053__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__38053__$1);{
var G__38073 = cljs.core.chunk_rest.call(null,seq__38053__$1);
var G__38074 = c__4148__auto__;
var G__38075 = cljs.core.count.call(null,c__4148__auto__);
var G__38076 = 0;
seq__38053 = G__38073;
chunk__38054 = G__38074;
count__38055 = G__38075;
i__38056 = G__38076;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__38053__$1);goog.events.removeAll(node,type__$1);
{
var G__38077 = cljs.core.next.call(null,seq__38053__$1);
var G__38078 = null;
var G__38079 = 0;
var G__38080 = 0;
seq__38053 = G__38077;
chunk__38054 = G__38078;
count__38055 = G__38079;
i__38056 = G__38080;
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
var G__38081 = parent;
var G__38082 = cljs.core.cons.call(null,parent,so_far);
n = G__38081;
so_far = G__38082;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__38091_38099 = cljs.core.seq.call(null,ancestors);var chunk__38092_38100 = null;var count__38093_38101 = 0;var i__38094_38102 = 0;while(true){
if((i__38094_38102 < count__38093_38101))
{var n_38103 = cljs.core._nth.call(null,chunk__38092_38100,i__38094_38102);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38103;
goog.events.fireListeners(n_38103,evt.type,true,evt);
}
{
var G__38104 = seq__38091_38099;
var G__38105 = chunk__38092_38100;
var G__38106 = count__38093_38101;
var G__38107 = (i__38094_38102 + 1);
seq__38091_38099 = G__38104;
chunk__38092_38100 = G__38105;
count__38093_38101 = G__38106;
i__38094_38102 = G__38107;
continue;
}
} else
{var temp__4092__auto___38108 = cljs.core.seq.call(null,seq__38091_38099);if(temp__4092__auto___38108)
{var seq__38091_38109__$1 = temp__4092__auto___38108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38091_38109__$1))
{var c__4148__auto___38110 = cljs.core.chunk_first.call(null,seq__38091_38109__$1);{
var G__38111 = cljs.core.chunk_rest.call(null,seq__38091_38109__$1);
var G__38112 = c__4148__auto___38110;
var G__38113 = cljs.core.count.call(null,c__4148__auto___38110);
var G__38114 = 0;
seq__38091_38099 = G__38111;
chunk__38092_38100 = G__38112;
count__38093_38101 = G__38113;
i__38094_38102 = G__38114;
continue;
}
} else
{var n_38115 = cljs.core.first.call(null,seq__38091_38109__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38115;
goog.events.fireListeners(n_38115,evt.type,true,evt);
}
{
var G__38116 = cljs.core.next.call(null,seq__38091_38109__$1);
var G__38117 = null;
var G__38118 = 0;
var G__38119 = 0;
seq__38091_38099 = G__38116;
chunk__38092_38100 = G__38117;
count__38093_38101 = G__38118;
i__38094_38102 = G__38119;
continue;
}
}
} else
{}
}
break;
}
var seq__38095_38120 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__38096_38121 = null;var count__38097_38122 = 0;var i__38098_38123 = 0;while(true){
if((i__38098_38123 < count__38097_38122))
{var n_38124 = cljs.core._nth.call(null,chunk__38096_38121,i__38098_38123);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38124;
goog.events.fireListeners(n_38124,evt.type,false,evt);
}
{
var G__38125 = seq__38095_38120;
var G__38126 = chunk__38096_38121;
var G__38127 = count__38097_38122;
var G__38128 = (i__38098_38123 + 1);
seq__38095_38120 = G__38125;
chunk__38096_38121 = G__38126;
count__38097_38122 = G__38127;
i__38098_38123 = G__38128;
continue;
}
} else
{var temp__4092__auto___38129 = cljs.core.seq.call(null,seq__38095_38120);if(temp__4092__auto___38129)
{var seq__38095_38130__$1 = temp__4092__auto___38129;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38095_38130__$1))
{var c__4148__auto___38131 = cljs.core.chunk_first.call(null,seq__38095_38130__$1);{
var G__38132 = cljs.core.chunk_rest.call(null,seq__38095_38130__$1);
var G__38133 = c__4148__auto___38131;
var G__38134 = cljs.core.count.call(null,c__4148__auto___38131);
var G__38135 = 0;
seq__38095_38120 = G__38132;
chunk__38096_38121 = G__38133;
count__38097_38122 = G__38134;
i__38098_38123 = G__38135;
continue;
}
} else
{var n_38136 = cljs.core.first.call(null,seq__38095_38130__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_38136;
goog.events.fireListeners(n_38136,evt.type,false,evt);
}
{
var G__38137 = cljs.core.next.call(null,seq__38095_38130__$1);
var G__38138 = null;
var G__38139 = 0;
var G__38140 = 0;
seq__38095_38120 = G__38137;
chunk__38096_38121 = G__38138;
count__38097_38122 = G__38139;
i__38098_38123 = G__38140;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__38147_38153 = cljs.core.seq.call(null,evt_map);var chunk__38148_38154 = null;var count__38149_38155 = 0;var i__38150_38156 = 0;while(true){
if((i__38150_38156 < count__38149_38155))
{var vec__38151_38157 = cljs.core._nth.call(null,chunk__38148_38154,i__38150_38156);var k_38158 = cljs.core.nth.call(null,vec__38151_38157,0,null);var v_38159 = cljs.core.nth.call(null,vec__38151_38157,1,null);(evt[k_38158] = v_38159);
{
var G__38160 = seq__38147_38153;
var G__38161 = chunk__38148_38154;
var G__38162 = count__38149_38155;
var G__38163 = (i__38150_38156 + 1);
seq__38147_38153 = G__38160;
chunk__38148_38154 = G__38161;
count__38149_38155 = G__38162;
i__38150_38156 = G__38163;
continue;
}
} else
{var temp__4092__auto___38164 = cljs.core.seq.call(null,seq__38147_38153);if(temp__4092__auto___38164)
{var seq__38147_38165__$1 = temp__4092__auto___38164;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38147_38165__$1))
{var c__4148__auto___38166 = cljs.core.chunk_first.call(null,seq__38147_38165__$1);{
var G__38167 = cljs.core.chunk_rest.call(null,seq__38147_38165__$1);
var G__38168 = c__4148__auto___38166;
var G__38169 = cljs.core.count.call(null,c__4148__auto___38166);
var G__38170 = 0;
seq__38147_38153 = G__38167;
chunk__38148_38154 = G__38168;
count__38149_38155 = G__38169;
i__38150_38156 = G__38170;
continue;
}
} else
{var vec__38152_38171 = cljs.core.first.call(null,seq__38147_38165__$1);var k_38172 = cljs.core.nth.call(null,vec__38152_38171,0,null);var v_38173 = cljs.core.nth.call(null,vec__38152_38171,1,null);(evt[k_38172] = v_38173);
{
var G__38174 = cljs.core.next.call(null,seq__38147_38165__$1);
var G__38175 = null;
var G__38176 = 0;
var G__38177 = 0;
seq__38147_38153 = G__38174;
chunk__38148_38154 = G__38175;
count__38149_38155 = G__38176;
i__38150_38156 = G__38177;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__38178_SHARP_){return goog.events.getListeners(p1__38178_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
