// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj50246 = {};return obj50246;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t50250 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50250 = (function (evt,f,create_listener_function,meta50251){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50251 = meta50251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50250.cljs$lang$type = true;
domina.events.t50250.cljs$lang$ctorStr = "domina.events/t50250";
domina.events.t50250.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t50250");
});
domina.events.t50250.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t50250.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t50250.prototype.domina$events$Event$ = true;
domina.events.t50250.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50250.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50250.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50250.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50250.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50250.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50252){var self__ = this;
var _50252__$1 = this;return self__.meta50251;
});
domina.events.t50250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50252,meta50251__$1){var self__ = this;
var _50252__$1 = this;return (new domina.events.t50250(self__.evt,self__.f,self__.create_listener_function,meta50251__$1));
});
domina.events.__GT_t50250 = (function __GT_t50250(evt__$1,f__$1,create_listener_function__$1,meta50251){return (new domina.events.t50250(evt__$1,f__$1,create_listener_function__$1,meta50251));
});
}
return (new domina.events.t50250(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__50257(s__50258){return (new cljs.core.LazySeq(null,(function (){var s__50258__$1 = s__50258;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__50258__$1);if(temp__4092__auto__)
{var s__50258__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50258__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__50258__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__50260 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__50259 = 0;while(true){
if((i__50259 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__50259);cljs.core.chunk_append.call(null,b__50260,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__50261 = (i__50259 + 1);
i__50259 = G__50261;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50260),iter__50257.call(null,cljs.core.chunk_rest.call(null,s__50258__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50260),null);
}
} else
{var node = cljs.core.first.call(null,s__50258__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__50257.call(null,cljs.core.rest.call(null,s__50258__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__50270 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50271 = null;var count__50272 = 0;var i__50273 = 0;while(true){
if((i__50273 < count__50272))
{var node = cljs.core._nth.call(null,chunk__50271,i__50273);goog.events.removeAll(node);
{
var G__50278 = seq__50270;
var G__50279 = chunk__50271;
var G__50280 = count__50272;
var G__50281 = (i__50273 + 1);
seq__50270 = G__50278;
chunk__50271 = G__50279;
count__50272 = G__50280;
i__50273 = G__50281;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50270);if(temp__4092__auto__)
{var seq__50270__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50270__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50270__$1);{
var G__50282 = cljs.core.chunk_rest.call(null,seq__50270__$1);
var G__50283 = c__4189__auto__;
var G__50284 = cljs.core.count.call(null,c__4189__auto__);
var G__50285 = 0;
seq__50270 = G__50282;
chunk__50271 = G__50283;
count__50272 = G__50284;
i__50273 = G__50285;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50270__$1);goog.events.removeAll(node);
{
var G__50286 = cljs.core.next.call(null,seq__50270__$1);
var G__50287 = null;
var G__50288 = 0;
var G__50289 = 0;
seq__50270 = G__50286;
chunk__50271 = G__50287;
count__50272 = G__50288;
i__50273 = G__50289;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__50274 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50275 = null;var count__50276 = 0;var i__50277 = 0;while(true){
if((i__50277 < count__50276))
{var node = cljs.core._nth.call(null,chunk__50275,i__50277);goog.events.removeAll(node,type__$1);
{
var G__50290 = seq__50274;
var G__50291 = chunk__50275;
var G__50292 = count__50276;
var G__50293 = (i__50277 + 1);
seq__50274 = G__50290;
chunk__50275 = G__50291;
count__50276 = G__50292;
i__50277 = G__50293;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50274);if(temp__4092__auto__)
{var seq__50274__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50274__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50274__$1);{
var G__50294 = cljs.core.chunk_rest.call(null,seq__50274__$1);
var G__50295 = c__4189__auto__;
var G__50296 = cljs.core.count.call(null,c__4189__auto__);
var G__50297 = 0;
seq__50274 = G__50294;
chunk__50275 = G__50295;
count__50276 = G__50296;
i__50277 = G__50297;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50274__$1);goog.events.removeAll(node,type__$1);
{
var G__50298 = cljs.core.next.call(null,seq__50274__$1);
var G__50299 = null;
var G__50300 = 0;
var G__50301 = 0;
seq__50274 = G__50298;
chunk__50275 = G__50299;
count__50276 = G__50300;
i__50277 = G__50301;
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
var G__50302 = parent;
var G__50303 = cljs.core.cons.call(null,parent,so_far);
n = G__50302;
so_far = G__50303;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__50312_50320 = cljs.core.seq.call(null,ancestors);var chunk__50313_50321 = null;var count__50314_50322 = 0;var i__50315_50323 = 0;while(true){
if((i__50315_50323 < count__50314_50322))
{var n_50324 = cljs.core._nth.call(null,chunk__50313_50321,i__50315_50323);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50324;
goog.events.fireListeners(n_50324,evt.type,true,evt);
}
{
var G__50325 = seq__50312_50320;
var G__50326 = chunk__50313_50321;
var G__50327 = count__50314_50322;
var G__50328 = (i__50315_50323 + 1);
seq__50312_50320 = G__50325;
chunk__50313_50321 = G__50326;
count__50314_50322 = G__50327;
i__50315_50323 = G__50328;
continue;
}
} else
{var temp__4092__auto___50329 = cljs.core.seq.call(null,seq__50312_50320);if(temp__4092__auto___50329)
{var seq__50312_50330__$1 = temp__4092__auto___50329;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50312_50330__$1))
{var c__4189__auto___50331 = cljs.core.chunk_first.call(null,seq__50312_50330__$1);{
var G__50332 = cljs.core.chunk_rest.call(null,seq__50312_50330__$1);
var G__50333 = c__4189__auto___50331;
var G__50334 = cljs.core.count.call(null,c__4189__auto___50331);
var G__50335 = 0;
seq__50312_50320 = G__50332;
chunk__50313_50321 = G__50333;
count__50314_50322 = G__50334;
i__50315_50323 = G__50335;
continue;
}
} else
{var n_50336 = cljs.core.first.call(null,seq__50312_50330__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50336;
goog.events.fireListeners(n_50336,evt.type,true,evt);
}
{
var G__50337 = cljs.core.next.call(null,seq__50312_50330__$1);
var G__50338 = null;
var G__50339 = 0;
var G__50340 = 0;
seq__50312_50320 = G__50337;
chunk__50313_50321 = G__50338;
count__50314_50322 = G__50339;
i__50315_50323 = G__50340;
continue;
}
}
} else
{}
}
break;
}
var seq__50316_50341 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__50317_50342 = null;var count__50318_50343 = 0;var i__50319_50344 = 0;while(true){
if((i__50319_50344 < count__50318_50343))
{var n_50345 = cljs.core._nth.call(null,chunk__50317_50342,i__50319_50344);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50345;
goog.events.fireListeners(n_50345,evt.type,false,evt);
}
{
var G__50346 = seq__50316_50341;
var G__50347 = chunk__50317_50342;
var G__50348 = count__50318_50343;
var G__50349 = (i__50319_50344 + 1);
seq__50316_50341 = G__50346;
chunk__50317_50342 = G__50347;
count__50318_50343 = G__50348;
i__50319_50344 = G__50349;
continue;
}
} else
{var temp__4092__auto___50350 = cljs.core.seq.call(null,seq__50316_50341);if(temp__4092__auto___50350)
{var seq__50316_50351__$1 = temp__4092__auto___50350;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50316_50351__$1))
{var c__4189__auto___50352 = cljs.core.chunk_first.call(null,seq__50316_50351__$1);{
var G__50353 = cljs.core.chunk_rest.call(null,seq__50316_50351__$1);
var G__50354 = c__4189__auto___50352;
var G__50355 = cljs.core.count.call(null,c__4189__auto___50352);
var G__50356 = 0;
seq__50316_50341 = G__50353;
chunk__50317_50342 = G__50354;
count__50318_50343 = G__50355;
i__50319_50344 = G__50356;
continue;
}
} else
{var n_50357 = cljs.core.first.call(null,seq__50316_50351__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50357;
goog.events.fireListeners(n_50357,evt.type,false,evt);
}
{
var G__50358 = cljs.core.next.call(null,seq__50316_50351__$1);
var G__50359 = null;
var G__50360 = 0;
var G__50361 = 0;
seq__50316_50341 = G__50358;
chunk__50317_50342 = G__50359;
count__50318_50343 = G__50360;
i__50319_50344 = G__50361;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__50368_50374 = cljs.core.seq.call(null,evt_map);var chunk__50369_50375 = null;var count__50370_50376 = 0;var i__50371_50377 = 0;while(true){
if((i__50371_50377 < count__50370_50376))
{var vec__50372_50378 = cljs.core._nth.call(null,chunk__50369_50375,i__50371_50377);var k_50379 = cljs.core.nth.call(null,vec__50372_50378,0,null);var v_50380 = cljs.core.nth.call(null,vec__50372_50378,1,null);(evt[k_50379] = v_50380);
{
var G__50381 = seq__50368_50374;
var G__50382 = chunk__50369_50375;
var G__50383 = count__50370_50376;
var G__50384 = (i__50371_50377 + 1);
seq__50368_50374 = G__50381;
chunk__50369_50375 = G__50382;
count__50370_50376 = G__50383;
i__50371_50377 = G__50384;
continue;
}
} else
{var temp__4092__auto___50385 = cljs.core.seq.call(null,seq__50368_50374);if(temp__4092__auto___50385)
{var seq__50368_50386__$1 = temp__4092__auto___50385;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50368_50386__$1))
{var c__4189__auto___50387 = cljs.core.chunk_first.call(null,seq__50368_50386__$1);{
var G__50388 = cljs.core.chunk_rest.call(null,seq__50368_50386__$1);
var G__50389 = c__4189__auto___50387;
var G__50390 = cljs.core.count.call(null,c__4189__auto___50387);
var G__50391 = 0;
seq__50368_50374 = G__50388;
chunk__50369_50375 = G__50389;
count__50370_50376 = G__50390;
i__50371_50377 = G__50391;
continue;
}
} else
{var vec__50373_50392 = cljs.core.first.call(null,seq__50368_50386__$1);var k_50393 = cljs.core.nth.call(null,vec__50373_50392,0,null);var v_50394 = cljs.core.nth.call(null,vec__50373_50392,1,null);(evt[k_50393] = v_50394);
{
var G__50395 = cljs.core.next.call(null,seq__50368_50386__$1);
var G__50396 = null;
var G__50397 = 0;
var G__50398 = 0;
seq__50368_50374 = G__50395;
chunk__50369_50375 = G__50396;
count__50370_50376 = G__50397;
i__50371_50377 = G__50398;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__50399_SHARP_){return goog.events.getListeners(p1__50399_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
