// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28276 = {};return obj28276;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28280 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28280 = (function (evt,f,create_listener_function,meta28281){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28281 = meta28281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28280.cljs$lang$type = true;
domina.events.t28280.cljs$lang$ctorStr = "domina.events/t28280";
domina.events.t28280.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t28280");
});
domina.events.t28280.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28280.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t28280.prototype.domina$events$Event$ = true;
domina.events.t28280.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28280.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28280.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28280.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28280.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28280.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28282){var self__ = this;
var _28282__$1 = this;return self__.meta28281;
});
domina.events.t28280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28282,meta28281__$1){var self__ = this;
var _28282__$1 = this;return (new domina.events.t28280(self__.evt,self__.f,self__.create_listener_function,meta28281__$1));
});
domina.events.__GT_t28280 = (function __GT_t28280(evt__$1,f__$1,create_listener_function__$1,meta28281){return (new domina.events.t28280(evt__$1,f__$1,create_listener_function__$1,meta28281));
});
}
return (new domina.events.t28280(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__28287(s__28288){return (new cljs.core.LazySeq(null,(function (){var s__28288__$1 = s__28288;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28288__$1);if(temp__4092__auto__)
{var s__28288__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28288__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28288__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28290 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28289 = 0;while(true){
if((i__28289 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__28289);cljs.core.chunk_append.call(null,b__28290,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28291 = (i__28289 + 1);
i__28289 = G__28291;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28290),iter__28287.call(null,cljs.core.chunk_rest.call(null,s__28288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28290),null);
}
} else
{var node = cljs.core.first.call(null,s__28288__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28287.call(null,cljs.core.rest.call(null,s__28288__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__28300 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28301 = null;var count__28302 = 0;var i__28303 = 0;while(true){
if((i__28303 < count__28302))
{var node = cljs.core._nth.call(null,chunk__28301,i__28303);goog.events.removeAll(node);
{
var G__28308 = seq__28300;
var G__28309 = chunk__28301;
var G__28310 = count__28302;
var G__28311 = (i__28303 + 1);
seq__28300 = G__28308;
chunk__28301 = G__28309;
count__28302 = G__28310;
i__28303 = G__28311;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28300);if(temp__4092__auto__)
{var seq__28300__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28300__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28300__$1);{
var G__28312 = cljs.core.chunk_rest.call(null,seq__28300__$1);
var G__28313 = c__4189__auto__;
var G__28314 = cljs.core.count.call(null,c__4189__auto__);
var G__28315 = 0;
seq__28300 = G__28312;
chunk__28301 = G__28313;
count__28302 = G__28314;
i__28303 = G__28315;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28300__$1);goog.events.removeAll(node);
{
var G__28316 = cljs.core.next.call(null,seq__28300__$1);
var G__28317 = null;
var G__28318 = 0;
var G__28319 = 0;
seq__28300 = G__28316;
chunk__28301 = G__28317;
count__28302 = G__28318;
i__28303 = G__28319;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28304 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28305 = null;var count__28306 = 0;var i__28307 = 0;while(true){
if((i__28307 < count__28306))
{var node = cljs.core._nth.call(null,chunk__28305,i__28307);goog.events.removeAll(node,type__$1);
{
var G__28320 = seq__28304;
var G__28321 = chunk__28305;
var G__28322 = count__28306;
var G__28323 = (i__28307 + 1);
seq__28304 = G__28320;
chunk__28305 = G__28321;
count__28306 = G__28322;
i__28307 = G__28323;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28304);if(temp__4092__auto__)
{var seq__28304__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28304__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28304__$1);{
var G__28324 = cljs.core.chunk_rest.call(null,seq__28304__$1);
var G__28325 = c__4189__auto__;
var G__28326 = cljs.core.count.call(null,c__4189__auto__);
var G__28327 = 0;
seq__28304 = G__28324;
chunk__28305 = G__28325;
count__28306 = G__28326;
i__28307 = G__28327;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28304__$1);goog.events.removeAll(node,type__$1);
{
var G__28328 = cljs.core.next.call(null,seq__28304__$1);
var G__28329 = null;
var G__28330 = 0;
var G__28331 = 0;
seq__28304 = G__28328;
chunk__28305 = G__28329;
count__28306 = G__28330;
i__28307 = G__28331;
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
var G__28332 = parent;
var G__28333 = cljs.core.cons.call(null,parent,so_far);
n = G__28332;
so_far = G__28333;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28342_28350 = cljs.core.seq.call(null,ancestors);var chunk__28343_28351 = null;var count__28344_28352 = 0;var i__28345_28353 = 0;while(true){
if((i__28345_28353 < count__28344_28352))
{var n_28354 = cljs.core._nth.call(null,chunk__28343_28351,i__28345_28353);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28354;
goog.events.fireListeners(n_28354,evt.type,true,evt);
}
{
var G__28355 = seq__28342_28350;
var G__28356 = chunk__28343_28351;
var G__28357 = count__28344_28352;
var G__28358 = (i__28345_28353 + 1);
seq__28342_28350 = G__28355;
chunk__28343_28351 = G__28356;
count__28344_28352 = G__28357;
i__28345_28353 = G__28358;
continue;
}
} else
{var temp__4092__auto___28359 = cljs.core.seq.call(null,seq__28342_28350);if(temp__4092__auto___28359)
{var seq__28342_28360__$1 = temp__4092__auto___28359;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28342_28360__$1))
{var c__4189__auto___28361 = cljs.core.chunk_first.call(null,seq__28342_28360__$1);{
var G__28362 = cljs.core.chunk_rest.call(null,seq__28342_28360__$1);
var G__28363 = c__4189__auto___28361;
var G__28364 = cljs.core.count.call(null,c__4189__auto___28361);
var G__28365 = 0;
seq__28342_28350 = G__28362;
chunk__28343_28351 = G__28363;
count__28344_28352 = G__28364;
i__28345_28353 = G__28365;
continue;
}
} else
{var n_28366 = cljs.core.first.call(null,seq__28342_28360__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28366;
goog.events.fireListeners(n_28366,evt.type,true,evt);
}
{
var G__28367 = cljs.core.next.call(null,seq__28342_28360__$1);
var G__28368 = null;
var G__28369 = 0;
var G__28370 = 0;
seq__28342_28350 = G__28367;
chunk__28343_28351 = G__28368;
count__28344_28352 = G__28369;
i__28345_28353 = G__28370;
continue;
}
}
} else
{}
}
break;
}
var seq__28346_28371 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28347_28372 = null;var count__28348_28373 = 0;var i__28349_28374 = 0;while(true){
if((i__28349_28374 < count__28348_28373))
{var n_28375 = cljs.core._nth.call(null,chunk__28347_28372,i__28349_28374);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28375;
goog.events.fireListeners(n_28375,evt.type,false,evt);
}
{
var G__28376 = seq__28346_28371;
var G__28377 = chunk__28347_28372;
var G__28378 = count__28348_28373;
var G__28379 = (i__28349_28374 + 1);
seq__28346_28371 = G__28376;
chunk__28347_28372 = G__28377;
count__28348_28373 = G__28378;
i__28349_28374 = G__28379;
continue;
}
} else
{var temp__4092__auto___28380 = cljs.core.seq.call(null,seq__28346_28371);if(temp__4092__auto___28380)
{var seq__28346_28381__$1 = temp__4092__auto___28380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28346_28381__$1))
{var c__4189__auto___28382 = cljs.core.chunk_first.call(null,seq__28346_28381__$1);{
var G__28383 = cljs.core.chunk_rest.call(null,seq__28346_28381__$1);
var G__28384 = c__4189__auto___28382;
var G__28385 = cljs.core.count.call(null,c__4189__auto___28382);
var G__28386 = 0;
seq__28346_28371 = G__28383;
chunk__28347_28372 = G__28384;
count__28348_28373 = G__28385;
i__28349_28374 = G__28386;
continue;
}
} else
{var n_28387 = cljs.core.first.call(null,seq__28346_28381__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28387;
goog.events.fireListeners(n_28387,evt.type,false,evt);
}
{
var G__28388 = cljs.core.next.call(null,seq__28346_28381__$1);
var G__28389 = null;
var G__28390 = 0;
var G__28391 = 0;
seq__28346_28371 = G__28388;
chunk__28347_28372 = G__28389;
count__28348_28373 = G__28390;
i__28349_28374 = G__28391;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28398_28404 = cljs.core.seq.call(null,evt_map);var chunk__28399_28405 = null;var count__28400_28406 = 0;var i__28401_28407 = 0;while(true){
if((i__28401_28407 < count__28400_28406))
{var vec__28402_28408 = cljs.core._nth.call(null,chunk__28399_28405,i__28401_28407);var k_28409 = cljs.core.nth.call(null,vec__28402_28408,0,null);var v_28410 = cljs.core.nth.call(null,vec__28402_28408,1,null);(evt[k_28409] = v_28410);
{
var G__28411 = seq__28398_28404;
var G__28412 = chunk__28399_28405;
var G__28413 = count__28400_28406;
var G__28414 = (i__28401_28407 + 1);
seq__28398_28404 = G__28411;
chunk__28399_28405 = G__28412;
count__28400_28406 = G__28413;
i__28401_28407 = G__28414;
continue;
}
} else
{var temp__4092__auto___28415 = cljs.core.seq.call(null,seq__28398_28404);if(temp__4092__auto___28415)
{var seq__28398_28416__$1 = temp__4092__auto___28415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28398_28416__$1))
{var c__4189__auto___28417 = cljs.core.chunk_first.call(null,seq__28398_28416__$1);{
var G__28418 = cljs.core.chunk_rest.call(null,seq__28398_28416__$1);
var G__28419 = c__4189__auto___28417;
var G__28420 = cljs.core.count.call(null,c__4189__auto___28417);
var G__28421 = 0;
seq__28398_28404 = G__28418;
chunk__28399_28405 = G__28419;
count__28400_28406 = G__28420;
i__28401_28407 = G__28421;
continue;
}
} else
{var vec__28403_28422 = cljs.core.first.call(null,seq__28398_28416__$1);var k_28423 = cljs.core.nth.call(null,vec__28403_28422,0,null);var v_28424 = cljs.core.nth.call(null,vec__28403_28422,1,null);(evt[k_28423] = v_28424);
{
var G__28425 = cljs.core.next.call(null,seq__28398_28416__$1);
var G__28426 = null;
var G__28427 = 0;
var G__28428 = 0;
seq__28398_28404 = G__28425;
chunk__28399_28405 = G__28426;
count__28400_28406 = G__28427;
i__28401_28407 = G__28428;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__28429_SHARP_){return goog.events.getListeners(p1__28429_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map