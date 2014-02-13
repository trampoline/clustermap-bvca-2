// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37012 = {};return obj37012;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37016 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37016 = (function (evt,f,create_listener_function,meta37017){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37017 = meta37017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37016.cljs$lang$type = true;
domina.events.t37016.cljs$lang$ctorStr = "domina.events/t37016";
domina.events.t37016.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t37016");
});
domina.events.t37016.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37016.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t37016.prototype.domina$events$Event$ = true;
domina.events.t37016.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37016.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37016.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37016.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37016.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37016.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37018){var self__ = this;
var _37018__$1 = this;return self__.meta37017;
});
domina.events.t37016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37018,meta37017__$1){var self__ = this;
var _37018__$1 = this;return (new domina.events.t37016(self__.evt,self__.f,self__.create_listener_function,meta37017__$1));
});
domina.events.__GT_t37016 = (function __GT_t37016(evt__$1,f__$1,create_listener_function__$1,meta37017){return (new domina.events.t37016(evt__$1,f__$1,create_listener_function__$1,meta37017));
});
}
return (new domina.events.t37016(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__37023(s__37024){return (new cljs.core.LazySeq(null,(function (){var s__37024__$1 = s__37024;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37024__$1);if(temp__4092__auto__)
{var s__37024__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37024__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37024__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37026 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37025 = 0;while(true){
if((i__37025 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__37025);cljs.core.chunk_append.call(null,b__37026,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37027 = (i__37025 + 1);
i__37025 = G__37027;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37026),iter__37023.call(null,cljs.core.chunk_rest.call(null,s__37024__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37026),null);
}
} else
{var node = cljs.core.first.call(null,s__37024__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37023.call(null,cljs.core.rest.call(null,s__37024__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37036 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37037 = null;var count__37038 = 0;var i__37039 = 0;while(true){
if((i__37039 < count__37038))
{var node = cljs.core._nth.call(null,chunk__37037,i__37039);goog.events.removeAll(node);
{
var G__37044 = seq__37036;
var G__37045 = chunk__37037;
var G__37046 = count__37038;
var G__37047 = (i__37039 + 1);
seq__37036 = G__37044;
chunk__37037 = G__37045;
count__37038 = G__37046;
i__37039 = G__37047;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37036);if(temp__4092__auto__)
{var seq__37036__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37036__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37036__$1);{
var G__37048 = cljs.core.chunk_rest.call(null,seq__37036__$1);
var G__37049 = c__4148__auto__;
var G__37050 = cljs.core.count.call(null,c__4148__auto__);
var G__37051 = 0;
seq__37036 = G__37048;
chunk__37037 = G__37049;
count__37038 = G__37050;
i__37039 = G__37051;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37036__$1);goog.events.removeAll(node);
{
var G__37052 = cljs.core.next.call(null,seq__37036__$1);
var G__37053 = null;
var G__37054 = 0;
var G__37055 = 0;
seq__37036 = G__37052;
chunk__37037 = G__37053;
count__37038 = G__37054;
i__37039 = G__37055;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37040 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37041 = null;var count__37042 = 0;var i__37043 = 0;while(true){
if((i__37043 < count__37042))
{var node = cljs.core._nth.call(null,chunk__37041,i__37043);goog.events.removeAll(node,type__$1);
{
var G__37056 = seq__37040;
var G__37057 = chunk__37041;
var G__37058 = count__37042;
var G__37059 = (i__37043 + 1);
seq__37040 = G__37056;
chunk__37041 = G__37057;
count__37042 = G__37058;
i__37043 = G__37059;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37040);if(temp__4092__auto__)
{var seq__37040__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37040__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37040__$1);{
var G__37060 = cljs.core.chunk_rest.call(null,seq__37040__$1);
var G__37061 = c__4148__auto__;
var G__37062 = cljs.core.count.call(null,c__4148__auto__);
var G__37063 = 0;
seq__37040 = G__37060;
chunk__37041 = G__37061;
count__37042 = G__37062;
i__37043 = G__37063;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37040__$1);goog.events.removeAll(node,type__$1);
{
var G__37064 = cljs.core.next.call(null,seq__37040__$1);
var G__37065 = null;
var G__37066 = 0;
var G__37067 = 0;
seq__37040 = G__37064;
chunk__37041 = G__37065;
count__37042 = G__37066;
i__37043 = G__37067;
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
var G__37068 = parent;
var G__37069 = cljs.core.cons.call(null,parent,so_far);
n = G__37068;
so_far = G__37069;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37078_37086 = cljs.core.seq.call(null,ancestors);var chunk__37079_37087 = null;var count__37080_37088 = 0;var i__37081_37089 = 0;while(true){
if((i__37081_37089 < count__37080_37088))
{var n_37090 = cljs.core._nth.call(null,chunk__37079_37087,i__37081_37089);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37090;
goog.events.fireListeners(n_37090,evt.type,true,evt);
}
{
var G__37091 = seq__37078_37086;
var G__37092 = chunk__37079_37087;
var G__37093 = count__37080_37088;
var G__37094 = (i__37081_37089 + 1);
seq__37078_37086 = G__37091;
chunk__37079_37087 = G__37092;
count__37080_37088 = G__37093;
i__37081_37089 = G__37094;
continue;
}
} else
{var temp__4092__auto___37095 = cljs.core.seq.call(null,seq__37078_37086);if(temp__4092__auto___37095)
{var seq__37078_37096__$1 = temp__4092__auto___37095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37078_37096__$1))
{var c__4148__auto___37097 = cljs.core.chunk_first.call(null,seq__37078_37096__$1);{
var G__37098 = cljs.core.chunk_rest.call(null,seq__37078_37096__$1);
var G__37099 = c__4148__auto___37097;
var G__37100 = cljs.core.count.call(null,c__4148__auto___37097);
var G__37101 = 0;
seq__37078_37086 = G__37098;
chunk__37079_37087 = G__37099;
count__37080_37088 = G__37100;
i__37081_37089 = G__37101;
continue;
}
} else
{var n_37102 = cljs.core.first.call(null,seq__37078_37096__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37102;
goog.events.fireListeners(n_37102,evt.type,true,evt);
}
{
var G__37103 = cljs.core.next.call(null,seq__37078_37096__$1);
var G__37104 = null;
var G__37105 = 0;
var G__37106 = 0;
seq__37078_37086 = G__37103;
chunk__37079_37087 = G__37104;
count__37080_37088 = G__37105;
i__37081_37089 = G__37106;
continue;
}
}
} else
{}
}
break;
}
var seq__37082_37107 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37083_37108 = null;var count__37084_37109 = 0;var i__37085_37110 = 0;while(true){
if((i__37085_37110 < count__37084_37109))
{var n_37111 = cljs.core._nth.call(null,chunk__37083_37108,i__37085_37110);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37111;
goog.events.fireListeners(n_37111,evt.type,false,evt);
}
{
var G__37112 = seq__37082_37107;
var G__37113 = chunk__37083_37108;
var G__37114 = count__37084_37109;
var G__37115 = (i__37085_37110 + 1);
seq__37082_37107 = G__37112;
chunk__37083_37108 = G__37113;
count__37084_37109 = G__37114;
i__37085_37110 = G__37115;
continue;
}
} else
{var temp__4092__auto___37116 = cljs.core.seq.call(null,seq__37082_37107);if(temp__4092__auto___37116)
{var seq__37082_37117__$1 = temp__4092__auto___37116;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37082_37117__$1))
{var c__4148__auto___37118 = cljs.core.chunk_first.call(null,seq__37082_37117__$1);{
var G__37119 = cljs.core.chunk_rest.call(null,seq__37082_37117__$1);
var G__37120 = c__4148__auto___37118;
var G__37121 = cljs.core.count.call(null,c__4148__auto___37118);
var G__37122 = 0;
seq__37082_37107 = G__37119;
chunk__37083_37108 = G__37120;
count__37084_37109 = G__37121;
i__37085_37110 = G__37122;
continue;
}
} else
{var n_37123 = cljs.core.first.call(null,seq__37082_37117__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37123;
goog.events.fireListeners(n_37123,evt.type,false,evt);
}
{
var G__37124 = cljs.core.next.call(null,seq__37082_37117__$1);
var G__37125 = null;
var G__37126 = 0;
var G__37127 = 0;
seq__37082_37107 = G__37124;
chunk__37083_37108 = G__37125;
count__37084_37109 = G__37126;
i__37085_37110 = G__37127;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37134_37140 = cljs.core.seq.call(null,evt_map);var chunk__37135_37141 = null;var count__37136_37142 = 0;var i__37137_37143 = 0;while(true){
if((i__37137_37143 < count__37136_37142))
{var vec__37138_37144 = cljs.core._nth.call(null,chunk__37135_37141,i__37137_37143);var k_37145 = cljs.core.nth.call(null,vec__37138_37144,0,null);var v_37146 = cljs.core.nth.call(null,vec__37138_37144,1,null);(evt[k_37145] = v_37146);
{
var G__37147 = seq__37134_37140;
var G__37148 = chunk__37135_37141;
var G__37149 = count__37136_37142;
var G__37150 = (i__37137_37143 + 1);
seq__37134_37140 = G__37147;
chunk__37135_37141 = G__37148;
count__37136_37142 = G__37149;
i__37137_37143 = G__37150;
continue;
}
} else
{var temp__4092__auto___37151 = cljs.core.seq.call(null,seq__37134_37140);if(temp__4092__auto___37151)
{var seq__37134_37152__$1 = temp__4092__auto___37151;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37134_37152__$1))
{var c__4148__auto___37153 = cljs.core.chunk_first.call(null,seq__37134_37152__$1);{
var G__37154 = cljs.core.chunk_rest.call(null,seq__37134_37152__$1);
var G__37155 = c__4148__auto___37153;
var G__37156 = cljs.core.count.call(null,c__4148__auto___37153);
var G__37157 = 0;
seq__37134_37140 = G__37154;
chunk__37135_37141 = G__37155;
count__37136_37142 = G__37156;
i__37137_37143 = G__37157;
continue;
}
} else
{var vec__37139_37158 = cljs.core.first.call(null,seq__37134_37152__$1);var k_37159 = cljs.core.nth.call(null,vec__37139_37158,0,null);var v_37160 = cljs.core.nth.call(null,vec__37139_37158,1,null);(evt[k_37159] = v_37160);
{
var G__37161 = cljs.core.next.call(null,seq__37134_37152__$1);
var G__37162 = null;
var G__37163 = 0;
var G__37164 = 0;
seq__37134_37140 = G__37161;
chunk__37135_37141 = G__37162;
count__37136_37142 = G__37163;
i__37137_37143 = G__37164;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__37165_SHARP_){return goog.events.getListeners(p1__37165_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
