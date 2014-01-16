// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj15230 = {};return obj15230;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t15234 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t15234 = (function (evt,f,create_listener_function,meta15235){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta15235 = meta15235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t15234.cljs$lang$type = true;
domina.events.t15234.cljs$lang$ctorStr = "domina.events/t15234";
domina.events.t15234.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t15234");
});
domina.events.t15234.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t15234.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t15234.prototype.domina$events$Event$ = true;
domina.events.t15234.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t15234.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t15234.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t15234.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t15234.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t15234.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t15234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15236){var self__ = this;
var _15236__$1 = this;return self__.meta15235;
});
domina.events.t15234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15236,meta15235__$1){var self__ = this;
var _15236__$1 = this;return (new domina.events.t15234(self__.evt,self__.f,self__.create_listener_function,meta15235__$1));
});
domina.events.__GT_t15234 = (function __GT_t15234(evt__$1,f__$1,create_listener_function__$1,meta15235){return (new domina.events.t15234(evt__$1,f__$1,create_listener_function__$1,meta15235));
});
}
return (new domina.events.t15234(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__15241(s__15242){return (new cljs.core.LazySeq(null,(function (){var s__15242__$1 = s__15242;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15242__$1);if(temp__4092__auto__)
{var s__15242__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15242__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15242__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15244 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15243 = 0;while(true){
if((i__15243 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__15243);cljs.core.chunk_append.call(null,b__15244,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__15245 = (i__15243 + 1);
i__15243 = G__15245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15244),iter__15241.call(null,cljs.core.chunk_rest.call(null,s__15242__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15244),null);
}
} else
{var node = cljs.core.first.call(null,s__15242__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__15241.call(null,cljs.core.rest.call(null,s__15242__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__15254 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15255 = null;var count__15256 = 0;var i__15257 = 0;while(true){
if((i__15257 < count__15256))
{var node = cljs.core._nth.call(null,chunk__15255,i__15257);goog.events.removeAll(node);
{
var G__15262 = seq__15254;
var G__15263 = chunk__15255;
var G__15264 = count__15256;
var G__15265 = (i__15257 + 1);
seq__15254 = G__15262;
chunk__15255 = G__15263;
count__15256 = G__15264;
i__15257 = G__15265;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15254);if(temp__4092__auto__)
{var seq__15254__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15254__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15254__$1);{
var G__15266 = cljs.core.chunk_rest.call(null,seq__15254__$1);
var G__15267 = c__4148__auto__;
var G__15268 = cljs.core.count.call(null,c__4148__auto__);
var G__15269 = 0;
seq__15254 = G__15266;
chunk__15255 = G__15267;
count__15256 = G__15268;
i__15257 = G__15269;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15254__$1);goog.events.removeAll(node);
{
var G__15270 = cljs.core.next.call(null,seq__15254__$1);
var G__15271 = null;
var G__15272 = 0;
var G__15273 = 0;
seq__15254 = G__15270;
chunk__15255 = G__15271;
count__15256 = G__15272;
i__15257 = G__15273;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__15258 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15259 = null;var count__15260 = 0;var i__15261 = 0;while(true){
if((i__15261 < count__15260))
{var node = cljs.core._nth.call(null,chunk__15259,i__15261);goog.events.removeAll(node,type__$1);
{
var G__15274 = seq__15258;
var G__15275 = chunk__15259;
var G__15276 = count__15260;
var G__15277 = (i__15261 + 1);
seq__15258 = G__15274;
chunk__15259 = G__15275;
count__15260 = G__15276;
i__15261 = G__15277;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15258);if(temp__4092__auto__)
{var seq__15258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15258__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15258__$1);{
var G__15278 = cljs.core.chunk_rest.call(null,seq__15258__$1);
var G__15279 = c__4148__auto__;
var G__15280 = cljs.core.count.call(null,c__4148__auto__);
var G__15281 = 0;
seq__15258 = G__15278;
chunk__15259 = G__15279;
count__15260 = G__15280;
i__15261 = G__15281;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15258__$1);goog.events.removeAll(node,type__$1);
{
var G__15282 = cljs.core.next.call(null,seq__15258__$1);
var G__15283 = null;
var G__15284 = 0;
var G__15285 = 0;
seq__15258 = G__15282;
chunk__15259 = G__15283;
count__15260 = G__15284;
i__15261 = G__15285;
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
var G__15286 = parent;
var G__15287 = cljs.core.cons.call(null,parent,so_far);
n = G__15286;
so_far = G__15287;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__15296_15304 = cljs.core.seq.call(null,ancestors);var chunk__15297_15305 = null;var count__15298_15306 = 0;var i__15299_15307 = 0;while(true){
if((i__15299_15307 < count__15298_15306))
{var n_15308 = cljs.core._nth.call(null,chunk__15297_15305,i__15299_15307);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15308;
goog.events.fireListeners(n_15308,evt.type,true,evt);
}
{
var G__15309 = seq__15296_15304;
var G__15310 = chunk__15297_15305;
var G__15311 = count__15298_15306;
var G__15312 = (i__15299_15307 + 1);
seq__15296_15304 = G__15309;
chunk__15297_15305 = G__15310;
count__15298_15306 = G__15311;
i__15299_15307 = G__15312;
continue;
}
} else
{var temp__4092__auto___15313 = cljs.core.seq.call(null,seq__15296_15304);if(temp__4092__auto___15313)
{var seq__15296_15314__$1 = temp__4092__auto___15313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15296_15314__$1))
{var c__4148__auto___15315 = cljs.core.chunk_first.call(null,seq__15296_15314__$1);{
var G__15316 = cljs.core.chunk_rest.call(null,seq__15296_15314__$1);
var G__15317 = c__4148__auto___15315;
var G__15318 = cljs.core.count.call(null,c__4148__auto___15315);
var G__15319 = 0;
seq__15296_15304 = G__15316;
chunk__15297_15305 = G__15317;
count__15298_15306 = G__15318;
i__15299_15307 = G__15319;
continue;
}
} else
{var n_15320 = cljs.core.first.call(null,seq__15296_15314__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15320;
goog.events.fireListeners(n_15320,evt.type,true,evt);
}
{
var G__15321 = cljs.core.next.call(null,seq__15296_15314__$1);
var G__15322 = null;
var G__15323 = 0;
var G__15324 = 0;
seq__15296_15304 = G__15321;
chunk__15297_15305 = G__15322;
count__15298_15306 = G__15323;
i__15299_15307 = G__15324;
continue;
}
}
} else
{}
}
break;
}
var seq__15300_15325 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__15301_15326 = null;var count__15302_15327 = 0;var i__15303_15328 = 0;while(true){
if((i__15303_15328 < count__15302_15327))
{var n_15329 = cljs.core._nth.call(null,chunk__15301_15326,i__15303_15328);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15329;
goog.events.fireListeners(n_15329,evt.type,false,evt);
}
{
var G__15330 = seq__15300_15325;
var G__15331 = chunk__15301_15326;
var G__15332 = count__15302_15327;
var G__15333 = (i__15303_15328 + 1);
seq__15300_15325 = G__15330;
chunk__15301_15326 = G__15331;
count__15302_15327 = G__15332;
i__15303_15328 = G__15333;
continue;
}
} else
{var temp__4092__auto___15334 = cljs.core.seq.call(null,seq__15300_15325);if(temp__4092__auto___15334)
{var seq__15300_15335__$1 = temp__4092__auto___15334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15300_15335__$1))
{var c__4148__auto___15336 = cljs.core.chunk_first.call(null,seq__15300_15335__$1);{
var G__15337 = cljs.core.chunk_rest.call(null,seq__15300_15335__$1);
var G__15338 = c__4148__auto___15336;
var G__15339 = cljs.core.count.call(null,c__4148__auto___15336);
var G__15340 = 0;
seq__15300_15325 = G__15337;
chunk__15301_15326 = G__15338;
count__15302_15327 = G__15339;
i__15303_15328 = G__15340;
continue;
}
} else
{var n_15341 = cljs.core.first.call(null,seq__15300_15335__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15341;
goog.events.fireListeners(n_15341,evt.type,false,evt);
}
{
var G__15342 = cljs.core.next.call(null,seq__15300_15335__$1);
var G__15343 = null;
var G__15344 = 0;
var G__15345 = 0;
seq__15300_15325 = G__15342;
chunk__15301_15326 = G__15343;
count__15302_15327 = G__15344;
i__15303_15328 = G__15345;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__15352_15358 = cljs.core.seq.call(null,evt_map);var chunk__15353_15359 = null;var count__15354_15360 = 0;var i__15355_15361 = 0;while(true){
if((i__15355_15361 < count__15354_15360))
{var vec__15356_15362 = cljs.core._nth.call(null,chunk__15353_15359,i__15355_15361);var k_15363 = cljs.core.nth.call(null,vec__15356_15362,0,null);var v_15364 = cljs.core.nth.call(null,vec__15356_15362,1,null);(evt[k_15363] = v_15364);
{
var G__15365 = seq__15352_15358;
var G__15366 = chunk__15353_15359;
var G__15367 = count__15354_15360;
var G__15368 = (i__15355_15361 + 1);
seq__15352_15358 = G__15365;
chunk__15353_15359 = G__15366;
count__15354_15360 = G__15367;
i__15355_15361 = G__15368;
continue;
}
} else
{var temp__4092__auto___15369 = cljs.core.seq.call(null,seq__15352_15358);if(temp__4092__auto___15369)
{var seq__15352_15370__$1 = temp__4092__auto___15369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15352_15370__$1))
{var c__4148__auto___15371 = cljs.core.chunk_first.call(null,seq__15352_15370__$1);{
var G__15372 = cljs.core.chunk_rest.call(null,seq__15352_15370__$1);
var G__15373 = c__4148__auto___15371;
var G__15374 = cljs.core.count.call(null,c__4148__auto___15371);
var G__15375 = 0;
seq__15352_15358 = G__15372;
chunk__15353_15359 = G__15373;
count__15354_15360 = G__15374;
i__15355_15361 = G__15375;
continue;
}
} else
{var vec__15357_15376 = cljs.core.first.call(null,seq__15352_15370__$1);var k_15377 = cljs.core.nth.call(null,vec__15357_15376,0,null);var v_15378 = cljs.core.nth.call(null,vec__15357_15376,1,null);(evt[k_15377] = v_15378);
{
var G__15379 = cljs.core.next.call(null,seq__15352_15370__$1);
var G__15380 = null;
var G__15381 = 0;
var G__15382 = 0;
seq__15352_15358 = G__15379;
chunk__15353_15359 = G__15380;
count__15354_15360 = G__15381;
i__15355_15361 = G__15382;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__15383_SHARP_){return goog.events.getListeners(p1__15383_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map