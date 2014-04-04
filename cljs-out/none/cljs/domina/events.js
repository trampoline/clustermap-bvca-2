// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28172 = {};return obj28172;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28176 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28176 = (function (evt,f,create_listener_function,meta28177){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28177 = meta28177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28176.cljs$lang$type = true;
domina.events.t28176.cljs$lang$ctorStr = "domina.events/t28176";
domina.events.t28176.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t28176");
});
domina.events.t28176.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28176.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t28176.prototype.domina$events$Event$ = true;
domina.events.t28176.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28176.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28176.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28176.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28176.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28176.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28178){var self__ = this;
var _28178__$1 = this;return self__.meta28177;
});
domina.events.t28176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28178,meta28177__$1){var self__ = this;
var _28178__$1 = this;return (new domina.events.t28176(self__.evt,self__.f,self__.create_listener_function,meta28177__$1));
});
domina.events.__GT_t28176 = (function __GT_t28176(evt__$1,f__$1,create_listener_function__$1,meta28177){return (new domina.events.t28176(evt__$1,f__$1,create_listener_function__$1,meta28177));
});
}
return (new domina.events.t28176(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__28183(s__28184){return (new cljs.core.LazySeq(null,(function (){var s__28184__$1 = s__28184;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__28184__$1);if(temp__4092__auto__)
{var s__28184__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28184__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__28184__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__28186 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__28185 = 0;while(true){
if((i__28185 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__28185);cljs.core.chunk_append.call(null,b__28186,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28187 = (i__28185 + 1);
i__28185 = G__28187;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28186),iter__28183.call(null,cljs.core.chunk_rest.call(null,s__28184__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28186),null);
}
} else
{var node = cljs.core.first.call(null,s__28184__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28183.call(null,cljs.core.rest.call(null,s__28184__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__28196 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28197 = null;var count__28198 = 0;var i__28199 = 0;while(true){
if((i__28199 < count__28198))
{var node = cljs.core._nth.call(null,chunk__28197,i__28199);goog.events.removeAll(node);
{
var G__28204 = seq__28196;
var G__28205 = chunk__28197;
var G__28206 = count__28198;
var G__28207 = (i__28199 + 1);
seq__28196 = G__28204;
chunk__28197 = G__28205;
count__28198 = G__28206;
i__28199 = G__28207;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28196);if(temp__4092__auto__)
{var seq__28196__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28196__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28196__$1);{
var G__28208 = cljs.core.chunk_rest.call(null,seq__28196__$1);
var G__28209 = c__4189__auto__;
var G__28210 = cljs.core.count.call(null,c__4189__auto__);
var G__28211 = 0;
seq__28196 = G__28208;
chunk__28197 = G__28209;
count__28198 = G__28210;
i__28199 = G__28211;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28196__$1);goog.events.removeAll(node);
{
var G__28212 = cljs.core.next.call(null,seq__28196__$1);
var G__28213 = null;
var G__28214 = 0;
var G__28215 = 0;
seq__28196 = G__28212;
chunk__28197 = G__28213;
count__28198 = G__28214;
i__28199 = G__28215;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28200 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28201 = null;var count__28202 = 0;var i__28203 = 0;while(true){
if((i__28203 < count__28202))
{var node = cljs.core._nth.call(null,chunk__28201,i__28203);goog.events.removeAll(node,type__$1);
{
var G__28216 = seq__28200;
var G__28217 = chunk__28201;
var G__28218 = count__28202;
var G__28219 = (i__28203 + 1);
seq__28200 = G__28216;
chunk__28201 = G__28217;
count__28202 = G__28218;
i__28203 = G__28219;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28200);if(temp__4092__auto__)
{var seq__28200__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28200__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28200__$1);{
var G__28220 = cljs.core.chunk_rest.call(null,seq__28200__$1);
var G__28221 = c__4189__auto__;
var G__28222 = cljs.core.count.call(null,c__4189__auto__);
var G__28223 = 0;
seq__28200 = G__28220;
chunk__28201 = G__28221;
count__28202 = G__28222;
i__28203 = G__28223;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28200__$1);goog.events.removeAll(node,type__$1);
{
var G__28224 = cljs.core.next.call(null,seq__28200__$1);
var G__28225 = null;
var G__28226 = 0;
var G__28227 = 0;
seq__28200 = G__28224;
chunk__28201 = G__28225;
count__28202 = G__28226;
i__28203 = G__28227;
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
var G__28228 = parent;
var G__28229 = cljs.core.cons.call(null,parent,so_far);
n = G__28228;
so_far = G__28229;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28238_28246 = cljs.core.seq.call(null,ancestors);var chunk__28239_28247 = null;var count__28240_28248 = 0;var i__28241_28249 = 0;while(true){
if((i__28241_28249 < count__28240_28248))
{var n_28250 = cljs.core._nth.call(null,chunk__28239_28247,i__28241_28249);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28250;
goog.events.fireListeners(n_28250,evt.type,true,evt);
}
{
var G__28251 = seq__28238_28246;
var G__28252 = chunk__28239_28247;
var G__28253 = count__28240_28248;
var G__28254 = (i__28241_28249 + 1);
seq__28238_28246 = G__28251;
chunk__28239_28247 = G__28252;
count__28240_28248 = G__28253;
i__28241_28249 = G__28254;
continue;
}
} else
{var temp__4092__auto___28255 = cljs.core.seq.call(null,seq__28238_28246);if(temp__4092__auto___28255)
{var seq__28238_28256__$1 = temp__4092__auto___28255;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28238_28256__$1))
{var c__4189__auto___28257 = cljs.core.chunk_first.call(null,seq__28238_28256__$1);{
var G__28258 = cljs.core.chunk_rest.call(null,seq__28238_28256__$1);
var G__28259 = c__4189__auto___28257;
var G__28260 = cljs.core.count.call(null,c__4189__auto___28257);
var G__28261 = 0;
seq__28238_28246 = G__28258;
chunk__28239_28247 = G__28259;
count__28240_28248 = G__28260;
i__28241_28249 = G__28261;
continue;
}
} else
{var n_28262 = cljs.core.first.call(null,seq__28238_28256__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28262;
goog.events.fireListeners(n_28262,evt.type,true,evt);
}
{
var G__28263 = cljs.core.next.call(null,seq__28238_28256__$1);
var G__28264 = null;
var G__28265 = 0;
var G__28266 = 0;
seq__28238_28246 = G__28263;
chunk__28239_28247 = G__28264;
count__28240_28248 = G__28265;
i__28241_28249 = G__28266;
continue;
}
}
} else
{}
}
break;
}
var seq__28242_28267 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28243_28268 = null;var count__28244_28269 = 0;var i__28245_28270 = 0;while(true){
if((i__28245_28270 < count__28244_28269))
{var n_28271 = cljs.core._nth.call(null,chunk__28243_28268,i__28245_28270);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28271;
goog.events.fireListeners(n_28271,evt.type,false,evt);
}
{
var G__28272 = seq__28242_28267;
var G__28273 = chunk__28243_28268;
var G__28274 = count__28244_28269;
var G__28275 = (i__28245_28270 + 1);
seq__28242_28267 = G__28272;
chunk__28243_28268 = G__28273;
count__28244_28269 = G__28274;
i__28245_28270 = G__28275;
continue;
}
} else
{var temp__4092__auto___28276 = cljs.core.seq.call(null,seq__28242_28267);if(temp__4092__auto___28276)
{var seq__28242_28277__$1 = temp__4092__auto___28276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28242_28277__$1))
{var c__4189__auto___28278 = cljs.core.chunk_first.call(null,seq__28242_28277__$1);{
var G__28279 = cljs.core.chunk_rest.call(null,seq__28242_28277__$1);
var G__28280 = c__4189__auto___28278;
var G__28281 = cljs.core.count.call(null,c__4189__auto___28278);
var G__28282 = 0;
seq__28242_28267 = G__28279;
chunk__28243_28268 = G__28280;
count__28244_28269 = G__28281;
i__28245_28270 = G__28282;
continue;
}
} else
{var n_28283 = cljs.core.first.call(null,seq__28242_28277__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28283;
goog.events.fireListeners(n_28283,evt.type,false,evt);
}
{
var G__28284 = cljs.core.next.call(null,seq__28242_28277__$1);
var G__28285 = null;
var G__28286 = 0;
var G__28287 = 0;
seq__28242_28267 = G__28284;
chunk__28243_28268 = G__28285;
count__28244_28269 = G__28286;
i__28245_28270 = G__28287;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28294_28300 = cljs.core.seq.call(null,evt_map);var chunk__28295_28301 = null;var count__28296_28302 = 0;var i__28297_28303 = 0;while(true){
if((i__28297_28303 < count__28296_28302))
{var vec__28298_28304 = cljs.core._nth.call(null,chunk__28295_28301,i__28297_28303);var k_28305 = cljs.core.nth.call(null,vec__28298_28304,0,null);var v_28306 = cljs.core.nth.call(null,vec__28298_28304,1,null);(evt[k_28305] = v_28306);
{
var G__28307 = seq__28294_28300;
var G__28308 = chunk__28295_28301;
var G__28309 = count__28296_28302;
var G__28310 = (i__28297_28303 + 1);
seq__28294_28300 = G__28307;
chunk__28295_28301 = G__28308;
count__28296_28302 = G__28309;
i__28297_28303 = G__28310;
continue;
}
} else
{var temp__4092__auto___28311 = cljs.core.seq.call(null,seq__28294_28300);if(temp__4092__auto___28311)
{var seq__28294_28312__$1 = temp__4092__auto___28311;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28294_28312__$1))
{var c__4189__auto___28313 = cljs.core.chunk_first.call(null,seq__28294_28312__$1);{
var G__28314 = cljs.core.chunk_rest.call(null,seq__28294_28312__$1);
var G__28315 = c__4189__auto___28313;
var G__28316 = cljs.core.count.call(null,c__4189__auto___28313);
var G__28317 = 0;
seq__28294_28300 = G__28314;
chunk__28295_28301 = G__28315;
count__28296_28302 = G__28316;
i__28297_28303 = G__28317;
continue;
}
} else
{var vec__28299_28318 = cljs.core.first.call(null,seq__28294_28312__$1);var k_28319 = cljs.core.nth.call(null,vec__28299_28318,0,null);var v_28320 = cljs.core.nth.call(null,vec__28299_28318,1,null);(evt[k_28319] = v_28320);
{
var G__28321 = cljs.core.next.call(null,seq__28294_28312__$1);
var G__28322 = null;
var G__28323 = 0;
var G__28324 = 0;
seq__28294_28300 = G__28321;
chunk__28295_28301 = G__28322;
count__28296_28302 = G__28323;
i__28297_28303 = G__28324;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__28325_SHARP_){return goog.events.getListeners(p1__28325_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map