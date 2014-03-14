// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj50182 = {};return obj50182;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t50186 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50186 = (function (evt,f,create_listener_function,meta50187){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50187 = meta50187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50186.cljs$lang$type = true;
domina.events.t50186.cljs$lang$ctorStr = "domina.events/t50186";
domina.events.t50186.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t50186");
});
domina.events.t50186.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t50186.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t50186.prototype.domina$events$Event$ = true;
domina.events.t50186.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50186.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50186.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50186.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50186.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50186.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50188){var self__ = this;
var _50188__$1 = this;return self__.meta50187;
});
domina.events.t50186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50188,meta50187__$1){var self__ = this;
var _50188__$1 = this;return (new domina.events.t50186(self__.evt,self__.f,self__.create_listener_function,meta50187__$1));
});
domina.events.__GT_t50186 = (function __GT_t50186(evt__$1,f__$1,create_listener_function__$1,meta50187){return (new domina.events.t50186(evt__$1,f__$1,create_listener_function__$1,meta50187));
});
}
return (new domina.events.t50186(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__50193(s__50194){return (new cljs.core.LazySeq(null,(function (){var s__50194__$1 = s__50194;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__50194__$1);if(temp__4092__auto__)
{var s__50194__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50194__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__50194__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__50196 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__50195 = 0;while(true){
if((i__50195 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__50195);cljs.core.chunk_append.call(null,b__50196,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__50197 = (i__50195 + 1);
i__50195 = G__50197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50196),iter__50193.call(null,cljs.core.chunk_rest.call(null,s__50194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50196),null);
}
} else
{var node = cljs.core.first.call(null,s__50194__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__50193.call(null,cljs.core.rest.call(null,s__50194__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__50206 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50207 = null;var count__50208 = 0;var i__50209 = 0;while(true){
if((i__50209 < count__50208))
{var node = cljs.core._nth.call(null,chunk__50207,i__50209);goog.events.removeAll(node);
{
var G__50214 = seq__50206;
var G__50215 = chunk__50207;
var G__50216 = count__50208;
var G__50217 = (i__50209 + 1);
seq__50206 = G__50214;
chunk__50207 = G__50215;
count__50208 = G__50216;
i__50209 = G__50217;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50206);if(temp__4092__auto__)
{var seq__50206__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50206__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50206__$1);{
var G__50218 = cljs.core.chunk_rest.call(null,seq__50206__$1);
var G__50219 = c__4189__auto__;
var G__50220 = cljs.core.count.call(null,c__4189__auto__);
var G__50221 = 0;
seq__50206 = G__50218;
chunk__50207 = G__50219;
count__50208 = G__50220;
i__50209 = G__50221;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50206__$1);goog.events.removeAll(node);
{
var G__50222 = cljs.core.next.call(null,seq__50206__$1);
var G__50223 = null;
var G__50224 = 0;
var G__50225 = 0;
seq__50206 = G__50222;
chunk__50207 = G__50223;
count__50208 = G__50224;
i__50209 = G__50225;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__50210 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50211 = null;var count__50212 = 0;var i__50213 = 0;while(true){
if((i__50213 < count__50212))
{var node = cljs.core._nth.call(null,chunk__50211,i__50213);goog.events.removeAll(node,type__$1);
{
var G__50226 = seq__50210;
var G__50227 = chunk__50211;
var G__50228 = count__50212;
var G__50229 = (i__50213 + 1);
seq__50210 = G__50226;
chunk__50211 = G__50227;
count__50212 = G__50228;
i__50213 = G__50229;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50210);if(temp__4092__auto__)
{var seq__50210__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50210__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50210__$1);{
var G__50230 = cljs.core.chunk_rest.call(null,seq__50210__$1);
var G__50231 = c__4189__auto__;
var G__50232 = cljs.core.count.call(null,c__4189__auto__);
var G__50233 = 0;
seq__50210 = G__50230;
chunk__50211 = G__50231;
count__50212 = G__50232;
i__50213 = G__50233;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50210__$1);goog.events.removeAll(node,type__$1);
{
var G__50234 = cljs.core.next.call(null,seq__50210__$1);
var G__50235 = null;
var G__50236 = 0;
var G__50237 = 0;
seq__50210 = G__50234;
chunk__50211 = G__50235;
count__50212 = G__50236;
i__50213 = G__50237;
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
var G__50238 = parent;
var G__50239 = cljs.core.cons.call(null,parent,so_far);
n = G__50238;
so_far = G__50239;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__50248_50256 = cljs.core.seq.call(null,ancestors);var chunk__50249_50257 = null;var count__50250_50258 = 0;var i__50251_50259 = 0;while(true){
if((i__50251_50259 < count__50250_50258))
{var n_50260 = cljs.core._nth.call(null,chunk__50249_50257,i__50251_50259);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50260;
goog.events.fireListeners(n_50260,evt.type,true,evt);
}
{
var G__50261 = seq__50248_50256;
var G__50262 = chunk__50249_50257;
var G__50263 = count__50250_50258;
var G__50264 = (i__50251_50259 + 1);
seq__50248_50256 = G__50261;
chunk__50249_50257 = G__50262;
count__50250_50258 = G__50263;
i__50251_50259 = G__50264;
continue;
}
} else
{var temp__4092__auto___50265 = cljs.core.seq.call(null,seq__50248_50256);if(temp__4092__auto___50265)
{var seq__50248_50266__$1 = temp__4092__auto___50265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50248_50266__$1))
{var c__4189__auto___50267 = cljs.core.chunk_first.call(null,seq__50248_50266__$1);{
var G__50268 = cljs.core.chunk_rest.call(null,seq__50248_50266__$1);
var G__50269 = c__4189__auto___50267;
var G__50270 = cljs.core.count.call(null,c__4189__auto___50267);
var G__50271 = 0;
seq__50248_50256 = G__50268;
chunk__50249_50257 = G__50269;
count__50250_50258 = G__50270;
i__50251_50259 = G__50271;
continue;
}
} else
{var n_50272 = cljs.core.first.call(null,seq__50248_50266__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50272;
goog.events.fireListeners(n_50272,evt.type,true,evt);
}
{
var G__50273 = cljs.core.next.call(null,seq__50248_50266__$1);
var G__50274 = null;
var G__50275 = 0;
var G__50276 = 0;
seq__50248_50256 = G__50273;
chunk__50249_50257 = G__50274;
count__50250_50258 = G__50275;
i__50251_50259 = G__50276;
continue;
}
}
} else
{}
}
break;
}
var seq__50252_50277 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__50253_50278 = null;var count__50254_50279 = 0;var i__50255_50280 = 0;while(true){
if((i__50255_50280 < count__50254_50279))
{var n_50281 = cljs.core._nth.call(null,chunk__50253_50278,i__50255_50280);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50281;
goog.events.fireListeners(n_50281,evt.type,false,evt);
}
{
var G__50282 = seq__50252_50277;
var G__50283 = chunk__50253_50278;
var G__50284 = count__50254_50279;
var G__50285 = (i__50255_50280 + 1);
seq__50252_50277 = G__50282;
chunk__50253_50278 = G__50283;
count__50254_50279 = G__50284;
i__50255_50280 = G__50285;
continue;
}
} else
{var temp__4092__auto___50286 = cljs.core.seq.call(null,seq__50252_50277);if(temp__4092__auto___50286)
{var seq__50252_50287__$1 = temp__4092__auto___50286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50252_50287__$1))
{var c__4189__auto___50288 = cljs.core.chunk_first.call(null,seq__50252_50287__$1);{
var G__50289 = cljs.core.chunk_rest.call(null,seq__50252_50287__$1);
var G__50290 = c__4189__auto___50288;
var G__50291 = cljs.core.count.call(null,c__4189__auto___50288);
var G__50292 = 0;
seq__50252_50277 = G__50289;
chunk__50253_50278 = G__50290;
count__50254_50279 = G__50291;
i__50255_50280 = G__50292;
continue;
}
} else
{var n_50293 = cljs.core.first.call(null,seq__50252_50287__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50293;
goog.events.fireListeners(n_50293,evt.type,false,evt);
}
{
var G__50294 = cljs.core.next.call(null,seq__50252_50287__$1);
var G__50295 = null;
var G__50296 = 0;
var G__50297 = 0;
seq__50252_50277 = G__50294;
chunk__50253_50278 = G__50295;
count__50254_50279 = G__50296;
i__50255_50280 = G__50297;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__50304_50310 = cljs.core.seq.call(null,evt_map);var chunk__50305_50311 = null;var count__50306_50312 = 0;var i__50307_50313 = 0;while(true){
if((i__50307_50313 < count__50306_50312))
{var vec__50308_50314 = cljs.core._nth.call(null,chunk__50305_50311,i__50307_50313);var k_50315 = cljs.core.nth.call(null,vec__50308_50314,0,null);var v_50316 = cljs.core.nth.call(null,vec__50308_50314,1,null);(evt[k_50315] = v_50316);
{
var G__50317 = seq__50304_50310;
var G__50318 = chunk__50305_50311;
var G__50319 = count__50306_50312;
var G__50320 = (i__50307_50313 + 1);
seq__50304_50310 = G__50317;
chunk__50305_50311 = G__50318;
count__50306_50312 = G__50319;
i__50307_50313 = G__50320;
continue;
}
} else
{var temp__4092__auto___50321 = cljs.core.seq.call(null,seq__50304_50310);if(temp__4092__auto___50321)
{var seq__50304_50322__$1 = temp__4092__auto___50321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50304_50322__$1))
{var c__4189__auto___50323 = cljs.core.chunk_first.call(null,seq__50304_50322__$1);{
var G__50324 = cljs.core.chunk_rest.call(null,seq__50304_50322__$1);
var G__50325 = c__4189__auto___50323;
var G__50326 = cljs.core.count.call(null,c__4189__auto___50323);
var G__50327 = 0;
seq__50304_50310 = G__50324;
chunk__50305_50311 = G__50325;
count__50306_50312 = G__50326;
i__50307_50313 = G__50327;
continue;
}
} else
{var vec__50309_50328 = cljs.core.first.call(null,seq__50304_50322__$1);var k_50329 = cljs.core.nth.call(null,vec__50309_50328,0,null);var v_50330 = cljs.core.nth.call(null,vec__50309_50328,1,null);(evt[k_50329] = v_50330);
{
var G__50331 = cljs.core.next.call(null,seq__50304_50322__$1);
var G__50332 = null;
var G__50333 = 0;
var G__50334 = 0;
seq__50304_50310 = G__50331;
chunk__50305_50311 = G__50332;
count__50306_50312 = G__50333;
i__50307_50313 = G__50334;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__50335_SHARP_){return goog.events.getListeners(p1__50335_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
