// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28188 = {};return obj28188;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28192 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28192 = (function (evt,f,create_listener_function,meta28193){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28193 = meta28193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28192.cljs$lang$type = true;
domina.events.t28192.cljs$lang$ctorStr = "domina.events/t28192";
domina.events.t28192.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t28192");
});
domina.events.t28192.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28192.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t28192.prototype.domina$events$Event$ = true;
domina.events.t28192.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28192.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28192.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28192.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28192.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28192.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28194){var self__ = this;
var _28194__$1 = this;return self__.meta28193;
});
domina.events.t28192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28194,meta28193__$1){var self__ = this;
var _28194__$1 = this;return (new domina.events.t28192(self__.evt,self__.f,self__.create_listener_function,meta28193__$1));
});
domina.events.__GT_t28192 = (function __GT_t28192(evt__$1,f__$1,create_listener_function__$1,meta28193){return (new domina.events.t28192(evt__$1,f__$1,create_listener_function__$1,meta28193));
});
}
return (new domina.events.t28192(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__28199(s__28200){return (new cljs.core.LazySeq(null,(function (){var s__28200__$1 = s__28200;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28200__$1);if(temp__4092__auto__)
{var s__28200__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28200__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28200__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28202 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28201 = 0;while(true){
if((i__28201 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__28201);cljs.core.chunk_append.call(null,b__28202,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28203 = (i__28201 + 1);
i__28201 = G__28203;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28202),iter__28199.call(null,cljs.core.chunk_rest.call(null,s__28200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28202),null);
}
} else
{var node = cljs.core.first.call(null,s__28200__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28199.call(null,cljs.core.rest.call(null,s__28200__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__28212 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28213 = null;var count__28214 = 0;var i__28215 = 0;while(true){
if((i__28215 < count__28214))
{var node = cljs.core._nth.call(null,chunk__28213,i__28215);goog.events.removeAll(node);
{
var G__28220 = seq__28212;
var G__28221 = chunk__28213;
var G__28222 = count__28214;
var G__28223 = (i__28215 + 1);
seq__28212 = G__28220;
chunk__28213 = G__28221;
count__28214 = G__28222;
i__28215 = G__28223;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28212);if(temp__4092__auto__)
{var seq__28212__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28212__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28212__$1);{
var G__28224 = cljs.core.chunk_rest.call(null,seq__28212__$1);
var G__28225 = c__4189__auto__;
var G__28226 = cljs.core.count.call(null,c__4189__auto__);
var G__28227 = 0;
seq__28212 = G__28224;
chunk__28213 = G__28225;
count__28214 = G__28226;
i__28215 = G__28227;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28212__$1);goog.events.removeAll(node);
{
var G__28228 = cljs.core.next.call(null,seq__28212__$1);
var G__28229 = null;
var G__28230 = 0;
var G__28231 = 0;
seq__28212 = G__28228;
chunk__28213 = G__28229;
count__28214 = G__28230;
i__28215 = G__28231;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28216 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28217 = null;var count__28218 = 0;var i__28219 = 0;while(true){
if((i__28219 < count__28218))
{var node = cljs.core._nth.call(null,chunk__28217,i__28219);goog.events.removeAll(node,type__$1);
{
var G__28232 = seq__28216;
var G__28233 = chunk__28217;
var G__28234 = count__28218;
var G__28235 = (i__28219 + 1);
seq__28216 = G__28232;
chunk__28217 = G__28233;
count__28218 = G__28234;
i__28219 = G__28235;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28216);if(temp__4092__auto__)
{var seq__28216__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28216__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28216__$1);{
var G__28236 = cljs.core.chunk_rest.call(null,seq__28216__$1);
var G__28237 = c__4189__auto__;
var G__28238 = cljs.core.count.call(null,c__4189__auto__);
var G__28239 = 0;
seq__28216 = G__28236;
chunk__28217 = G__28237;
count__28218 = G__28238;
i__28219 = G__28239;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28216__$1);goog.events.removeAll(node,type__$1);
{
var G__28240 = cljs.core.next.call(null,seq__28216__$1);
var G__28241 = null;
var G__28242 = 0;
var G__28243 = 0;
seq__28216 = G__28240;
chunk__28217 = G__28241;
count__28218 = G__28242;
i__28219 = G__28243;
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
var G__28244 = parent;
var G__28245 = cljs.core.cons.call(null,parent,so_far);
n = G__28244;
so_far = G__28245;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28254_28262 = cljs.core.seq.call(null,ancestors);var chunk__28255_28263 = null;var count__28256_28264 = 0;var i__28257_28265 = 0;while(true){
if((i__28257_28265 < count__28256_28264))
{var n_28266 = cljs.core._nth.call(null,chunk__28255_28263,i__28257_28265);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28266;
goog.events.fireListeners(n_28266,evt.type,true,evt);
}
{
var G__28267 = seq__28254_28262;
var G__28268 = chunk__28255_28263;
var G__28269 = count__28256_28264;
var G__28270 = (i__28257_28265 + 1);
seq__28254_28262 = G__28267;
chunk__28255_28263 = G__28268;
count__28256_28264 = G__28269;
i__28257_28265 = G__28270;
continue;
}
} else
{var temp__4092__auto___28271 = cljs.core.seq.call(null,seq__28254_28262);if(temp__4092__auto___28271)
{var seq__28254_28272__$1 = temp__4092__auto___28271;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28254_28272__$1))
{var c__4189__auto___28273 = cljs.core.chunk_first.call(null,seq__28254_28272__$1);{
var G__28274 = cljs.core.chunk_rest.call(null,seq__28254_28272__$1);
var G__28275 = c__4189__auto___28273;
var G__28276 = cljs.core.count.call(null,c__4189__auto___28273);
var G__28277 = 0;
seq__28254_28262 = G__28274;
chunk__28255_28263 = G__28275;
count__28256_28264 = G__28276;
i__28257_28265 = G__28277;
continue;
}
} else
{var n_28278 = cljs.core.first.call(null,seq__28254_28272__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28278;
goog.events.fireListeners(n_28278,evt.type,true,evt);
}
{
var G__28279 = cljs.core.next.call(null,seq__28254_28272__$1);
var G__28280 = null;
var G__28281 = 0;
var G__28282 = 0;
seq__28254_28262 = G__28279;
chunk__28255_28263 = G__28280;
count__28256_28264 = G__28281;
i__28257_28265 = G__28282;
continue;
}
}
} else
{}
}
break;
}
var seq__28258_28283 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28259_28284 = null;var count__28260_28285 = 0;var i__28261_28286 = 0;while(true){
if((i__28261_28286 < count__28260_28285))
{var n_28287 = cljs.core._nth.call(null,chunk__28259_28284,i__28261_28286);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28287;
goog.events.fireListeners(n_28287,evt.type,false,evt);
}
{
var G__28288 = seq__28258_28283;
var G__28289 = chunk__28259_28284;
var G__28290 = count__28260_28285;
var G__28291 = (i__28261_28286 + 1);
seq__28258_28283 = G__28288;
chunk__28259_28284 = G__28289;
count__28260_28285 = G__28290;
i__28261_28286 = G__28291;
continue;
}
} else
{var temp__4092__auto___28292 = cljs.core.seq.call(null,seq__28258_28283);if(temp__4092__auto___28292)
{var seq__28258_28293__$1 = temp__4092__auto___28292;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28258_28293__$1))
{var c__4189__auto___28294 = cljs.core.chunk_first.call(null,seq__28258_28293__$1);{
var G__28295 = cljs.core.chunk_rest.call(null,seq__28258_28293__$1);
var G__28296 = c__4189__auto___28294;
var G__28297 = cljs.core.count.call(null,c__4189__auto___28294);
var G__28298 = 0;
seq__28258_28283 = G__28295;
chunk__28259_28284 = G__28296;
count__28260_28285 = G__28297;
i__28261_28286 = G__28298;
continue;
}
} else
{var n_28299 = cljs.core.first.call(null,seq__28258_28293__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28299;
goog.events.fireListeners(n_28299,evt.type,false,evt);
}
{
var G__28300 = cljs.core.next.call(null,seq__28258_28293__$1);
var G__28301 = null;
var G__28302 = 0;
var G__28303 = 0;
seq__28258_28283 = G__28300;
chunk__28259_28284 = G__28301;
count__28260_28285 = G__28302;
i__28261_28286 = G__28303;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28310_28316 = cljs.core.seq.call(null,evt_map);var chunk__28311_28317 = null;var count__28312_28318 = 0;var i__28313_28319 = 0;while(true){
if((i__28313_28319 < count__28312_28318))
{var vec__28314_28320 = cljs.core._nth.call(null,chunk__28311_28317,i__28313_28319);var k_28321 = cljs.core.nth.call(null,vec__28314_28320,0,null);var v_28322 = cljs.core.nth.call(null,vec__28314_28320,1,null);(evt[k_28321] = v_28322);
{
var G__28323 = seq__28310_28316;
var G__28324 = chunk__28311_28317;
var G__28325 = count__28312_28318;
var G__28326 = (i__28313_28319 + 1);
seq__28310_28316 = G__28323;
chunk__28311_28317 = G__28324;
count__28312_28318 = G__28325;
i__28313_28319 = G__28326;
continue;
}
} else
{var temp__4092__auto___28327 = cljs.core.seq.call(null,seq__28310_28316);if(temp__4092__auto___28327)
{var seq__28310_28328__$1 = temp__4092__auto___28327;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28310_28328__$1))
{var c__4189__auto___28329 = cljs.core.chunk_first.call(null,seq__28310_28328__$1);{
var G__28330 = cljs.core.chunk_rest.call(null,seq__28310_28328__$1);
var G__28331 = c__4189__auto___28329;
var G__28332 = cljs.core.count.call(null,c__4189__auto___28329);
var G__28333 = 0;
seq__28310_28316 = G__28330;
chunk__28311_28317 = G__28331;
count__28312_28318 = G__28332;
i__28313_28319 = G__28333;
continue;
}
} else
{var vec__28315_28334 = cljs.core.first.call(null,seq__28310_28328__$1);var k_28335 = cljs.core.nth.call(null,vec__28315_28334,0,null);var v_28336 = cljs.core.nth.call(null,vec__28315_28334,1,null);(evt[k_28335] = v_28336);
{
var G__28337 = cljs.core.next.call(null,seq__28310_28328__$1);
var G__28338 = null;
var G__28339 = 0;
var G__28340 = 0;
seq__28310_28316 = G__28337;
chunk__28311_28317 = G__28338;
count__28312_28318 = G__28339;
i__28313_28319 = G__28340;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__28341_SHARP_){return goog.events.getListeners(p1__28341_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map