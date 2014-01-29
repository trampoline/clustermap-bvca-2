// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16269 = {};return obj16269;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16273 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16273 = (function (evt,f,create_listener_function,meta16274){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16274 = meta16274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16273.cljs$lang$type = true;
domina.events.t16273.cljs$lang$ctorStr = "domina.events/t16273";
domina.events.t16273.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16273");
});
domina.events.t16273.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16273.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16273.prototype.domina$events$Event$ = true;
domina.events.t16273.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16273.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16273.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16273.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16273.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16273.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16275){var self__ = this;
var _16275__$1 = this;return self__.meta16274;
});
domina.events.t16273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16275,meta16274__$1){var self__ = this;
var _16275__$1 = this;return (new domina.events.t16273(self__.evt,self__.f,self__.create_listener_function,meta16274__$1));
});
domina.events.__GT_t16273 = (function __GT_t16273(evt__$1,f__$1,create_listener_function__$1,meta16274){return (new domina.events.t16273(evt__$1,f__$1,create_listener_function__$1,meta16274));
});
}
return (new domina.events.t16273(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16280(s__16281){return (new cljs.core.LazySeq(null,(function (){var s__16281__$1 = s__16281;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16281__$1);if(temp__4092__auto__)
{var s__16281__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16281__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16281__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16283 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16282 = 0;while(true){
if((i__16282 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16282);cljs.core.chunk_append.call(null,b__16283,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16284 = (i__16282 + 1);
i__16282 = G__16284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16283),iter__16280.call(null,cljs.core.chunk_rest.call(null,s__16281__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16283),null);
}
} else
{var node = cljs.core.first.call(null,s__16281__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16280.call(null,cljs.core.rest.call(null,s__16281__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16293 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16294 = null;var count__16295 = 0;var i__16296 = 0;while(true){
if((i__16296 < count__16295))
{var node = cljs.core._nth.call(null,chunk__16294,i__16296);goog.events.removeAll(node);
{
var G__16301 = seq__16293;
var G__16302 = chunk__16294;
var G__16303 = count__16295;
var G__16304 = (i__16296 + 1);
seq__16293 = G__16301;
chunk__16294 = G__16302;
count__16295 = G__16303;
i__16296 = G__16304;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16293);if(temp__4092__auto__)
{var seq__16293__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16293__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16293__$1);{
var G__16305 = cljs.core.chunk_rest.call(null,seq__16293__$1);
var G__16306 = c__4148__auto__;
var G__16307 = cljs.core.count.call(null,c__4148__auto__);
var G__16308 = 0;
seq__16293 = G__16305;
chunk__16294 = G__16306;
count__16295 = G__16307;
i__16296 = G__16308;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16293__$1);goog.events.removeAll(node);
{
var G__16309 = cljs.core.next.call(null,seq__16293__$1);
var G__16310 = null;
var G__16311 = 0;
var G__16312 = 0;
seq__16293 = G__16309;
chunk__16294 = G__16310;
count__16295 = G__16311;
i__16296 = G__16312;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16297 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16298 = null;var count__16299 = 0;var i__16300 = 0;while(true){
if((i__16300 < count__16299))
{var node = cljs.core._nth.call(null,chunk__16298,i__16300);goog.events.removeAll(node,type__$1);
{
var G__16313 = seq__16297;
var G__16314 = chunk__16298;
var G__16315 = count__16299;
var G__16316 = (i__16300 + 1);
seq__16297 = G__16313;
chunk__16298 = G__16314;
count__16299 = G__16315;
i__16300 = G__16316;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16297);if(temp__4092__auto__)
{var seq__16297__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16297__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16297__$1);{
var G__16317 = cljs.core.chunk_rest.call(null,seq__16297__$1);
var G__16318 = c__4148__auto__;
var G__16319 = cljs.core.count.call(null,c__4148__auto__);
var G__16320 = 0;
seq__16297 = G__16317;
chunk__16298 = G__16318;
count__16299 = G__16319;
i__16300 = G__16320;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16297__$1);goog.events.removeAll(node,type__$1);
{
var G__16321 = cljs.core.next.call(null,seq__16297__$1);
var G__16322 = null;
var G__16323 = 0;
var G__16324 = 0;
seq__16297 = G__16321;
chunk__16298 = G__16322;
count__16299 = G__16323;
i__16300 = G__16324;
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
var G__16325 = parent;
var G__16326 = cljs.core.cons.call(null,parent,so_far);
n = G__16325;
so_far = G__16326;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16335_16343 = cljs.core.seq.call(null,ancestors);var chunk__16336_16344 = null;var count__16337_16345 = 0;var i__16338_16346 = 0;while(true){
if((i__16338_16346 < count__16337_16345))
{var n_16347 = cljs.core._nth.call(null,chunk__16336_16344,i__16338_16346);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16347;
goog.events.fireListeners(n_16347,evt.type,true,evt);
}
{
var G__16348 = seq__16335_16343;
var G__16349 = chunk__16336_16344;
var G__16350 = count__16337_16345;
var G__16351 = (i__16338_16346 + 1);
seq__16335_16343 = G__16348;
chunk__16336_16344 = G__16349;
count__16337_16345 = G__16350;
i__16338_16346 = G__16351;
continue;
}
} else
{var temp__4092__auto___16352 = cljs.core.seq.call(null,seq__16335_16343);if(temp__4092__auto___16352)
{var seq__16335_16353__$1 = temp__4092__auto___16352;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16335_16353__$1))
{var c__4148__auto___16354 = cljs.core.chunk_first.call(null,seq__16335_16353__$1);{
var G__16355 = cljs.core.chunk_rest.call(null,seq__16335_16353__$1);
var G__16356 = c__4148__auto___16354;
var G__16357 = cljs.core.count.call(null,c__4148__auto___16354);
var G__16358 = 0;
seq__16335_16343 = G__16355;
chunk__16336_16344 = G__16356;
count__16337_16345 = G__16357;
i__16338_16346 = G__16358;
continue;
}
} else
{var n_16359 = cljs.core.first.call(null,seq__16335_16353__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16359;
goog.events.fireListeners(n_16359,evt.type,true,evt);
}
{
var G__16360 = cljs.core.next.call(null,seq__16335_16353__$1);
var G__16361 = null;
var G__16362 = 0;
var G__16363 = 0;
seq__16335_16343 = G__16360;
chunk__16336_16344 = G__16361;
count__16337_16345 = G__16362;
i__16338_16346 = G__16363;
continue;
}
}
} else
{}
}
break;
}
var seq__16339_16364 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16340_16365 = null;var count__16341_16366 = 0;var i__16342_16367 = 0;while(true){
if((i__16342_16367 < count__16341_16366))
{var n_16368 = cljs.core._nth.call(null,chunk__16340_16365,i__16342_16367);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16368;
goog.events.fireListeners(n_16368,evt.type,false,evt);
}
{
var G__16369 = seq__16339_16364;
var G__16370 = chunk__16340_16365;
var G__16371 = count__16341_16366;
var G__16372 = (i__16342_16367 + 1);
seq__16339_16364 = G__16369;
chunk__16340_16365 = G__16370;
count__16341_16366 = G__16371;
i__16342_16367 = G__16372;
continue;
}
} else
{var temp__4092__auto___16373 = cljs.core.seq.call(null,seq__16339_16364);if(temp__4092__auto___16373)
{var seq__16339_16374__$1 = temp__4092__auto___16373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16339_16374__$1))
{var c__4148__auto___16375 = cljs.core.chunk_first.call(null,seq__16339_16374__$1);{
var G__16376 = cljs.core.chunk_rest.call(null,seq__16339_16374__$1);
var G__16377 = c__4148__auto___16375;
var G__16378 = cljs.core.count.call(null,c__4148__auto___16375);
var G__16379 = 0;
seq__16339_16364 = G__16376;
chunk__16340_16365 = G__16377;
count__16341_16366 = G__16378;
i__16342_16367 = G__16379;
continue;
}
} else
{var n_16380 = cljs.core.first.call(null,seq__16339_16374__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16380;
goog.events.fireListeners(n_16380,evt.type,false,evt);
}
{
var G__16381 = cljs.core.next.call(null,seq__16339_16374__$1);
var G__16382 = null;
var G__16383 = 0;
var G__16384 = 0;
seq__16339_16364 = G__16381;
chunk__16340_16365 = G__16382;
count__16341_16366 = G__16383;
i__16342_16367 = G__16384;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16391_16397 = cljs.core.seq.call(null,evt_map);var chunk__16392_16398 = null;var count__16393_16399 = 0;var i__16394_16400 = 0;while(true){
if((i__16394_16400 < count__16393_16399))
{var vec__16395_16401 = cljs.core._nth.call(null,chunk__16392_16398,i__16394_16400);var k_16402 = cljs.core.nth.call(null,vec__16395_16401,0,null);var v_16403 = cljs.core.nth.call(null,vec__16395_16401,1,null);(evt[k_16402] = v_16403);
{
var G__16404 = seq__16391_16397;
var G__16405 = chunk__16392_16398;
var G__16406 = count__16393_16399;
var G__16407 = (i__16394_16400 + 1);
seq__16391_16397 = G__16404;
chunk__16392_16398 = G__16405;
count__16393_16399 = G__16406;
i__16394_16400 = G__16407;
continue;
}
} else
{var temp__4092__auto___16408 = cljs.core.seq.call(null,seq__16391_16397);if(temp__4092__auto___16408)
{var seq__16391_16409__$1 = temp__4092__auto___16408;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16391_16409__$1))
{var c__4148__auto___16410 = cljs.core.chunk_first.call(null,seq__16391_16409__$1);{
var G__16411 = cljs.core.chunk_rest.call(null,seq__16391_16409__$1);
var G__16412 = c__4148__auto___16410;
var G__16413 = cljs.core.count.call(null,c__4148__auto___16410);
var G__16414 = 0;
seq__16391_16397 = G__16411;
chunk__16392_16398 = G__16412;
count__16393_16399 = G__16413;
i__16394_16400 = G__16414;
continue;
}
} else
{var vec__16396_16415 = cljs.core.first.call(null,seq__16391_16409__$1);var k_16416 = cljs.core.nth.call(null,vec__16396_16415,0,null);var v_16417 = cljs.core.nth.call(null,vec__16396_16415,1,null);(evt[k_16416] = v_16417);
{
var G__16418 = cljs.core.next.call(null,seq__16391_16409__$1);
var G__16419 = null;
var G__16420 = 0;
var G__16421 = 0;
seq__16391_16397 = G__16418;
chunk__16392_16398 = G__16419;
count__16393_16399 = G__16420;
i__16394_16400 = G__16421;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16422_SHARP_){return goog.events.getListeners(p1__16422_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map