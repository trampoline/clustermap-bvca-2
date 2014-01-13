// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj33256 = {};return obj33256;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t33260 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t33260 = (function (evt,f,create_listener_function,meta33261){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta33261 = meta33261;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t33260.cljs$lang$type = true;
domina.events.t33260.cljs$lang$ctorStr = "domina.events/t33260";
domina.events.t33260.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t33260");
});
domina.events.t33260.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t33260.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t33260.prototype.domina$events$Event$ = true;
domina.events.t33260.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t33260.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t33260.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t33260.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t33260.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t33260.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t33260.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33262){var self__ = this;
var _33262__$1 = this;return self__.meta33261;
});
domina.events.t33260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33262,meta33261__$1){var self__ = this;
var _33262__$1 = this;return (new domina.events.t33260(self__.evt,self__.f,self__.create_listener_function,meta33261__$1));
});
domina.events.__GT_t33260 = (function __GT_t33260(evt__$1,f__$1,create_listener_function__$1,meta33261){return (new domina.events.t33260(evt__$1,f__$1,create_listener_function__$1,meta33261));
});
}
return (new domina.events.t33260(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__33267(s__33268){return (new cljs.core.LazySeq(null,(function (){var s__33268__$1 = s__33268;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33268__$1);if(temp__4092__auto__)
{var s__33268__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33268__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33268__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33270 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33269 = 0;while(true){
if((i__33269 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__33269);cljs.core.chunk_append.call(null,b__33270,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__33271 = (i__33269 + 1);
i__33269 = G__33271;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33270),iter__33267.call(null,cljs.core.chunk_rest.call(null,s__33268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33270),null);
}
} else
{var node = cljs.core.first.call(null,s__33268__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__33267.call(null,cljs.core.rest.call(null,s__33268__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__33280 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33281 = null;var count__33282 = 0;var i__33283 = 0;while(true){
if((i__33283 < count__33282))
{var node = cljs.core._nth.call(null,chunk__33281,i__33283);goog.events.removeAll(node);
{
var G__33288 = seq__33280;
var G__33289 = chunk__33281;
var G__33290 = count__33282;
var G__33291 = (i__33283 + 1);
seq__33280 = G__33288;
chunk__33281 = G__33289;
count__33282 = G__33290;
i__33283 = G__33291;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33280);if(temp__4092__auto__)
{var seq__33280__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33280__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33280__$1);{
var G__33292 = cljs.core.chunk_rest.call(null,seq__33280__$1);
var G__33293 = c__4148__auto__;
var G__33294 = cljs.core.count.call(null,c__4148__auto__);
var G__33295 = 0;
seq__33280 = G__33292;
chunk__33281 = G__33293;
count__33282 = G__33294;
i__33283 = G__33295;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__33280__$1);goog.events.removeAll(node);
{
var G__33296 = cljs.core.next.call(null,seq__33280__$1);
var G__33297 = null;
var G__33298 = 0;
var G__33299 = 0;
seq__33280 = G__33296;
chunk__33281 = G__33297;
count__33282 = G__33298;
i__33283 = G__33299;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__33284 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33285 = null;var count__33286 = 0;var i__33287 = 0;while(true){
if((i__33287 < count__33286))
{var node = cljs.core._nth.call(null,chunk__33285,i__33287);goog.events.removeAll(node,type__$1);
{
var G__33300 = seq__33284;
var G__33301 = chunk__33285;
var G__33302 = count__33286;
var G__33303 = (i__33287 + 1);
seq__33284 = G__33300;
chunk__33285 = G__33301;
count__33286 = G__33302;
i__33287 = G__33303;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33284);if(temp__4092__auto__)
{var seq__33284__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33284__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__33284__$1);{
var G__33304 = cljs.core.chunk_rest.call(null,seq__33284__$1);
var G__33305 = c__4148__auto__;
var G__33306 = cljs.core.count.call(null,c__4148__auto__);
var G__33307 = 0;
seq__33284 = G__33304;
chunk__33285 = G__33305;
count__33286 = G__33306;
i__33287 = G__33307;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__33284__$1);goog.events.removeAll(node,type__$1);
{
var G__33308 = cljs.core.next.call(null,seq__33284__$1);
var G__33309 = null;
var G__33310 = 0;
var G__33311 = 0;
seq__33284 = G__33308;
chunk__33285 = G__33309;
count__33286 = G__33310;
i__33287 = G__33311;
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
var G__33312 = parent;
var G__33313 = cljs.core.cons.call(null,parent,so_far);
n = G__33312;
so_far = G__33313;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__33322_33330 = cljs.core.seq.call(null,ancestors);var chunk__33323_33331 = null;var count__33324_33332 = 0;var i__33325_33333 = 0;while(true){
if((i__33325_33333 < count__33324_33332))
{var n_33334 = cljs.core._nth.call(null,chunk__33323_33331,i__33325_33333);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33334;
goog.events.fireListeners(n_33334,evt.type,true,evt);
}
{
var G__33335 = seq__33322_33330;
var G__33336 = chunk__33323_33331;
var G__33337 = count__33324_33332;
var G__33338 = (i__33325_33333 + 1);
seq__33322_33330 = G__33335;
chunk__33323_33331 = G__33336;
count__33324_33332 = G__33337;
i__33325_33333 = G__33338;
continue;
}
} else
{var temp__4092__auto___33339 = cljs.core.seq.call(null,seq__33322_33330);if(temp__4092__auto___33339)
{var seq__33322_33340__$1 = temp__4092__auto___33339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33322_33340__$1))
{var c__4148__auto___33341 = cljs.core.chunk_first.call(null,seq__33322_33340__$1);{
var G__33342 = cljs.core.chunk_rest.call(null,seq__33322_33340__$1);
var G__33343 = c__4148__auto___33341;
var G__33344 = cljs.core.count.call(null,c__4148__auto___33341);
var G__33345 = 0;
seq__33322_33330 = G__33342;
chunk__33323_33331 = G__33343;
count__33324_33332 = G__33344;
i__33325_33333 = G__33345;
continue;
}
} else
{var n_33346 = cljs.core.first.call(null,seq__33322_33340__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33346;
goog.events.fireListeners(n_33346,evt.type,true,evt);
}
{
var G__33347 = cljs.core.next.call(null,seq__33322_33340__$1);
var G__33348 = null;
var G__33349 = 0;
var G__33350 = 0;
seq__33322_33330 = G__33347;
chunk__33323_33331 = G__33348;
count__33324_33332 = G__33349;
i__33325_33333 = G__33350;
continue;
}
}
} else
{}
}
break;
}
var seq__33326_33351 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__33327_33352 = null;var count__33328_33353 = 0;var i__33329_33354 = 0;while(true){
if((i__33329_33354 < count__33328_33353))
{var n_33355 = cljs.core._nth.call(null,chunk__33327_33352,i__33329_33354);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33355;
goog.events.fireListeners(n_33355,evt.type,false,evt);
}
{
var G__33356 = seq__33326_33351;
var G__33357 = chunk__33327_33352;
var G__33358 = count__33328_33353;
var G__33359 = (i__33329_33354 + 1);
seq__33326_33351 = G__33356;
chunk__33327_33352 = G__33357;
count__33328_33353 = G__33358;
i__33329_33354 = G__33359;
continue;
}
} else
{var temp__4092__auto___33360 = cljs.core.seq.call(null,seq__33326_33351);if(temp__4092__auto___33360)
{var seq__33326_33361__$1 = temp__4092__auto___33360;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33326_33361__$1))
{var c__4148__auto___33362 = cljs.core.chunk_first.call(null,seq__33326_33361__$1);{
var G__33363 = cljs.core.chunk_rest.call(null,seq__33326_33361__$1);
var G__33364 = c__4148__auto___33362;
var G__33365 = cljs.core.count.call(null,c__4148__auto___33362);
var G__33366 = 0;
seq__33326_33351 = G__33363;
chunk__33327_33352 = G__33364;
count__33328_33353 = G__33365;
i__33329_33354 = G__33366;
continue;
}
} else
{var n_33367 = cljs.core.first.call(null,seq__33326_33361__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33367;
goog.events.fireListeners(n_33367,evt.type,false,evt);
}
{
var G__33368 = cljs.core.next.call(null,seq__33326_33361__$1);
var G__33369 = null;
var G__33370 = 0;
var G__33371 = 0;
seq__33326_33351 = G__33368;
chunk__33327_33352 = G__33369;
count__33328_33353 = G__33370;
i__33329_33354 = G__33371;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__33378_33384 = cljs.core.seq.call(null,evt_map);var chunk__33379_33385 = null;var count__33380_33386 = 0;var i__33381_33387 = 0;while(true){
if((i__33381_33387 < count__33380_33386))
{var vec__33382_33388 = cljs.core._nth.call(null,chunk__33379_33385,i__33381_33387);var k_33389 = cljs.core.nth.call(null,vec__33382_33388,0,null);var v_33390 = cljs.core.nth.call(null,vec__33382_33388,1,null);(evt[k_33389] = v_33390);
{
var G__33391 = seq__33378_33384;
var G__33392 = chunk__33379_33385;
var G__33393 = count__33380_33386;
var G__33394 = (i__33381_33387 + 1);
seq__33378_33384 = G__33391;
chunk__33379_33385 = G__33392;
count__33380_33386 = G__33393;
i__33381_33387 = G__33394;
continue;
}
} else
{var temp__4092__auto___33395 = cljs.core.seq.call(null,seq__33378_33384);if(temp__4092__auto___33395)
{var seq__33378_33396__$1 = temp__4092__auto___33395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33378_33396__$1))
{var c__4148__auto___33397 = cljs.core.chunk_first.call(null,seq__33378_33396__$1);{
var G__33398 = cljs.core.chunk_rest.call(null,seq__33378_33396__$1);
var G__33399 = c__4148__auto___33397;
var G__33400 = cljs.core.count.call(null,c__4148__auto___33397);
var G__33401 = 0;
seq__33378_33384 = G__33398;
chunk__33379_33385 = G__33399;
count__33380_33386 = G__33400;
i__33381_33387 = G__33401;
continue;
}
} else
{var vec__33383_33402 = cljs.core.first.call(null,seq__33378_33396__$1);var k_33403 = cljs.core.nth.call(null,vec__33383_33402,0,null);var v_33404 = cljs.core.nth.call(null,vec__33383_33402,1,null);(evt[k_33403] = v_33404);
{
var G__33405 = cljs.core.next.call(null,seq__33378_33396__$1);
var G__33406 = null;
var G__33407 = 0;
var G__33408 = 0;
seq__33378_33384 = G__33405;
chunk__33379_33385 = G__33406;
count__33380_33386 = G__33407;
i__33381_33387 = G__33408;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__33409_SHARP_){return goog.events.getListeners(p1__33409_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
