// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17204 = {};return obj17204;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17208 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17208 = (function (evt,f,create_listener_function,meta17209){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17209 = meta17209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17208.cljs$lang$type = true;
domina.events.t17208.cljs$lang$ctorStr = "domina.events/t17208";
domina.events.t17208.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t17208");
});
domina.events.t17208.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17208.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t17208.prototype.domina$events$Event$ = true;
domina.events.t17208.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17208.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17208.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17208.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17208.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17208.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17210){var self__ = this;
var _17210__$1 = this;return self__.meta17209;
});
domina.events.t17208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17210,meta17209__$1){var self__ = this;
var _17210__$1 = this;return (new domina.events.t17208(self__.evt,self__.f,self__.create_listener_function,meta17209__$1));
});
domina.events.__GT_t17208 = (function __GT_t17208(evt__$1,f__$1,create_listener_function__$1,meta17209){return (new domina.events.t17208(evt__$1,f__$1,create_listener_function__$1,meta17209));
});
}
return (new domina.events.t17208(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__17215(s__17216){return (new cljs.core.LazySeq(null,(function (){var s__17216__$1 = s__17216;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__17216__$1);if(temp__4092__auto__)
{var s__17216__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17216__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__17216__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__17218 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__17217 = 0;while(true){
if((i__17217 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__17217);cljs.core.chunk_append.call(null,b__17218,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17219 = (i__17217 + 1);
i__17217 = G__17219;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17218),iter__17215.call(null,cljs.core.chunk_rest.call(null,s__17216__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17218),null);
}
} else
{var node = cljs.core.first.call(null,s__17216__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17215.call(null,cljs.core.rest.call(null,s__17216__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__17228 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17229 = null;var count__17230 = 0;var i__17231 = 0;while(true){
if((i__17231 < count__17230))
{var node = cljs.core._nth.call(null,chunk__17229,i__17231);goog.events.removeAll(node);
{
var G__17236 = seq__17228;
var G__17237 = chunk__17229;
var G__17238 = count__17230;
var G__17239 = (i__17231 + 1);
seq__17228 = G__17236;
chunk__17229 = G__17237;
count__17230 = G__17238;
i__17231 = G__17239;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17228);if(temp__4092__auto__)
{var seq__17228__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17228__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17228__$1);{
var G__17240 = cljs.core.chunk_rest.call(null,seq__17228__$1);
var G__17241 = c__4148__auto__;
var G__17242 = cljs.core.count.call(null,c__4148__auto__);
var G__17243 = 0;
seq__17228 = G__17240;
chunk__17229 = G__17241;
count__17230 = G__17242;
i__17231 = G__17243;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17228__$1);goog.events.removeAll(node);
{
var G__17244 = cljs.core.next.call(null,seq__17228__$1);
var G__17245 = null;
var G__17246 = 0;
var G__17247 = 0;
seq__17228 = G__17244;
chunk__17229 = G__17245;
count__17230 = G__17246;
i__17231 = G__17247;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17232 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17233 = null;var count__17234 = 0;var i__17235 = 0;while(true){
if((i__17235 < count__17234))
{var node = cljs.core._nth.call(null,chunk__17233,i__17235);goog.events.removeAll(node,type__$1);
{
var G__17248 = seq__17232;
var G__17249 = chunk__17233;
var G__17250 = count__17234;
var G__17251 = (i__17235 + 1);
seq__17232 = G__17248;
chunk__17233 = G__17249;
count__17234 = G__17250;
i__17235 = G__17251;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17232);if(temp__4092__auto__)
{var seq__17232__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17232__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__17232__$1);{
var G__17252 = cljs.core.chunk_rest.call(null,seq__17232__$1);
var G__17253 = c__4148__auto__;
var G__17254 = cljs.core.count.call(null,c__4148__auto__);
var G__17255 = 0;
seq__17232 = G__17252;
chunk__17233 = G__17253;
count__17234 = G__17254;
i__17235 = G__17255;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17232__$1);goog.events.removeAll(node,type__$1);
{
var G__17256 = cljs.core.next.call(null,seq__17232__$1);
var G__17257 = null;
var G__17258 = 0;
var G__17259 = 0;
seq__17232 = G__17256;
chunk__17233 = G__17257;
count__17234 = G__17258;
i__17235 = G__17259;
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
var G__17260 = parent;
var G__17261 = cljs.core.cons.call(null,parent,so_far);
n = G__17260;
so_far = G__17261;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17270_17278 = cljs.core.seq.call(null,ancestors);var chunk__17271_17279 = null;var count__17272_17280 = 0;var i__17273_17281 = 0;while(true){
if((i__17273_17281 < count__17272_17280))
{var n_17282 = cljs.core._nth.call(null,chunk__17271_17279,i__17273_17281);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17282;
goog.events.fireListeners(n_17282,evt.type,true,evt);
}
{
var G__17283 = seq__17270_17278;
var G__17284 = chunk__17271_17279;
var G__17285 = count__17272_17280;
var G__17286 = (i__17273_17281 + 1);
seq__17270_17278 = G__17283;
chunk__17271_17279 = G__17284;
count__17272_17280 = G__17285;
i__17273_17281 = G__17286;
continue;
}
} else
{var temp__4092__auto___17287 = cljs.core.seq.call(null,seq__17270_17278);if(temp__4092__auto___17287)
{var seq__17270_17288__$1 = temp__4092__auto___17287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17270_17288__$1))
{var c__4148__auto___17289 = cljs.core.chunk_first.call(null,seq__17270_17288__$1);{
var G__17290 = cljs.core.chunk_rest.call(null,seq__17270_17288__$1);
var G__17291 = c__4148__auto___17289;
var G__17292 = cljs.core.count.call(null,c__4148__auto___17289);
var G__17293 = 0;
seq__17270_17278 = G__17290;
chunk__17271_17279 = G__17291;
count__17272_17280 = G__17292;
i__17273_17281 = G__17293;
continue;
}
} else
{var n_17294 = cljs.core.first.call(null,seq__17270_17288__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17294;
goog.events.fireListeners(n_17294,evt.type,true,evt);
}
{
var G__17295 = cljs.core.next.call(null,seq__17270_17288__$1);
var G__17296 = null;
var G__17297 = 0;
var G__17298 = 0;
seq__17270_17278 = G__17295;
chunk__17271_17279 = G__17296;
count__17272_17280 = G__17297;
i__17273_17281 = G__17298;
continue;
}
}
} else
{}
}
break;
}
var seq__17274_17299 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17275_17300 = null;var count__17276_17301 = 0;var i__17277_17302 = 0;while(true){
if((i__17277_17302 < count__17276_17301))
{var n_17303 = cljs.core._nth.call(null,chunk__17275_17300,i__17277_17302);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17303;
goog.events.fireListeners(n_17303,evt.type,false,evt);
}
{
var G__17304 = seq__17274_17299;
var G__17305 = chunk__17275_17300;
var G__17306 = count__17276_17301;
var G__17307 = (i__17277_17302 + 1);
seq__17274_17299 = G__17304;
chunk__17275_17300 = G__17305;
count__17276_17301 = G__17306;
i__17277_17302 = G__17307;
continue;
}
} else
{var temp__4092__auto___17308 = cljs.core.seq.call(null,seq__17274_17299);if(temp__4092__auto___17308)
{var seq__17274_17309__$1 = temp__4092__auto___17308;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17274_17309__$1))
{var c__4148__auto___17310 = cljs.core.chunk_first.call(null,seq__17274_17309__$1);{
var G__17311 = cljs.core.chunk_rest.call(null,seq__17274_17309__$1);
var G__17312 = c__4148__auto___17310;
var G__17313 = cljs.core.count.call(null,c__4148__auto___17310);
var G__17314 = 0;
seq__17274_17299 = G__17311;
chunk__17275_17300 = G__17312;
count__17276_17301 = G__17313;
i__17277_17302 = G__17314;
continue;
}
} else
{var n_17315 = cljs.core.first.call(null,seq__17274_17309__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17315;
goog.events.fireListeners(n_17315,evt.type,false,evt);
}
{
var G__17316 = cljs.core.next.call(null,seq__17274_17309__$1);
var G__17317 = null;
var G__17318 = 0;
var G__17319 = 0;
seq__17274_17299 = G__17316;
chunk__17275_17300 = G__17317;
count__17276_17301 = G__17318;
i__17277_17302 = G__17319;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17326_17332 = cljs.core.seq.call(null,evt_map);var chunk__17327_17333 = null;var count__17328_17334 = 0;var i__17329_17335 = 0;while(true){
if((i__17329_17335 < count__17328_17334))
{var vec__17330_17336 = cljs.core._nth.call(null,chunk__17327_17333,i__17329_17335);var k_17337 = cljs.core.nth.call(null,vec__17330_17336,0,null);var v_17338 = cljs.core.nth.call(null,vec__17330_17336,1,null);(evt[k_17337] = v_17338);
{
var G__17339 = seq__17326_17332;
var G__17340 = chunk__17327_17333;
var G__17341 = count__17328_17334;
var G__17342 = (i__17329_17335 + 1);
seq__17326_17332 = G__17339;
chunk__17327_17333 = G__17340;
count__17328_17334 = G__17341;
i__17329_17335 = G__17342;
continue;
}
} else
{var temp__4092__auto___17343 = cljs.core.seq.call(null,seq__17326_17332);if(temp__4092__auto___17343)
{var seq__17326_17344__$1 = temp__4092__auto___17343;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17326_17344__$1))
{var c__4148__auto___17345 = cljs.core.chunk_first.call(null,seq__17326_17344__$1);{
var G__17346 = cljs.core.chunk_rest.call(null,seq__17326_17344__$1);
var G__17347 = c__4148__auto___17345;
var G__17348 = cljs.core.count.call(null,c__4148__auto___17345);
var G__17349 = 0;
seq__17326_17332 = G__17346;
chunk__17327_17333 = G__17347;
count__17328_17334 = G__17348;
i__17329_17335 = G__17349;
continue;
}
} else
{var vec__17331_17350 = cljs.core.first.call(null,seq__17326_17344__$1);var k_17351 = cljs.core.nth.call(null,vec__17331_17350,0,null);var v_17352 = cljs.core.nth.call(null,vec__17331_17350,1,null);(evt[k_17351] = v_17352);
{
var G__17353 = cljs.core.next.call(null,seq__17326_17344__$1);
var G__17354 = null;
var G__17355 = 0;
var G__17356 = 0;
seq__17326_17332 = G__17353;
chunk__17327_17333 = G__17354;
count__17328_17334 = G__17355;
i__17329_17335 = G__17356;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__17357_SHARP_){return goog.events.getListeners(p1__17357_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map