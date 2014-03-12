// Compiled by ClojureScript 0.0-2173
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj50230 = {};return obj50230;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t50234 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t50234 = (function (evt,f,create_listener_function,meta50235){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta50235 = meta50235;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t50234.cljs$lang$type = true;
domina.events.t50234.cljs$lang$ctorStr = "domina.events/t50234";
domina.events.t50234.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.events/t50234");
});
domina.events.t50234.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t50234.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3441__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return not_found;
}
});
domina.events.t50234.prototype.domina$events$Event$ = true;
domina.events.t50234.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t50234.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t50234.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t50234.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t50234.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t50234.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t50234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50236){var self__ = this;
var _50236__$1 = this;return self__.meta50235;
});
domina.events.t50234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50236,meta50235__$1){var self__ = this;
var _50236__$1 = this;return (new domina.events.t50234(self__.evt,self__.f,self__.create_listener_function,meta50235__$1));
});
domina.events.__GT_t50234 = (function __GT_t50234(evt__$1,f__$1,create_listener_function__$1,meta50235){return (new domina.events.t50234(evt__$1,f__$1,create_listener_function__$1,meta50235));
});
}
return (new domina.events.t50234(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4158__auto__ = (function iter__50241(s__50242){return (new cljs.core.LazySeq(null,(function (){var s__50242__$1 = s__50242;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__50242__$1);if(temp__4092__auto__)
{var s__50242__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50242__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__50242__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__50244 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__50243 = 0;while(true){
if((i__50243 < size__4157__auto__))
{var node = cljs.core._nth.call(null,c__4156__auto__,i__50243);cljs.core.chunk_append.call(null,b__50244,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__50245 = (i__50243 + 1);
i__50243 = G__50245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50244),iter__50241.call(null,cljs.core.chunk_rest.call(null,s__50242__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50244),null);
}
} else
{var node = cljs.core.first.call(null,s__50242__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__50241.call(null,cljs.core.rest.call(null,s__50242__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__50254 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50255 = null;var count__50256 = 0;var i__50257 = 0;while(true){
if((i__50257 < count__50256))
{var node = cljs.core._nth.call(null,chunk__50255,i__50257);goog.events.removeAll(node);
{
var G__50262 = seq__50254;
var G__50263 = chunk__50255;
var G__50264 = count__50256;
var G__50265 = (i__50257 + 1);
seq__50254 = G__50262;
chunk__50255 = G__50263;
count__50256 = G__50264;
i__50257 = G__50265;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50254);if(temp__4092__auto__)
{var seq__50254__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50254__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50254__$1);{
var G__50266 = cljs.core.chunk_rest.call(null,seq__50254__$1);
var G__50267 = c__4189__auto__;
var G__50268 = cljs.core.count.call(null,c__4189__auto__);
var G__50269 = 0;
seq__50254 = G__50266;
chunk__50255 = G__50267;
count__50256 = G__50268;
i__50257 = G__50269;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50254__$1);goog.events.removeAll(node);
{
var G__50270 = cljs.core.next.call(null,seq__50254__$1);
var G__50271 = null;
var G__50272 = 0;
var G__50273 = 0;
seq__50254 = G__50270;
chunk__50255 = G__50271;
count__50256 = G__50272;
i__50257 = G__50273;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__50258 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__50259 = null;var count__50260 = 0;var i__50261 = 0;while(true){
if((i__50261 < count__50260))
{var node = cljs.core._nth.call(null,chunk__50259,i__50261);goog.events.removeAll(node,type__$1);
{
var G__50274 = seq__50258;
var G__50275 = chunk__50259;
var G__50276 = count__50260;
var G__50277 = (i__50261 + 1);
seq__50258 = G__50274;
chunk__50259 = G__50275;
count__50260 = G__50276;
i__50261 = G__50277;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__50258);if(temp__4092__auto__)
{var seq__50258__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50258__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__50258__$1);{
var G__50278 = cljs.core.chunk_rest.call(null,seq__50258__$1);
var G__50279 = c__4189__auto__;
var G__50280 = cljs.core.count.call(null,c__4189__auto__);
var G__50281 = 0;
seq__50258 = G__50278;
chunk__50259 = G__50279;
count__50260 = G__50280;
i__50261 = G__50281;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__50258__$1);goog.events.removeAll(node,type__$1);
{
var G__50282 = cljs.core.next.call(null,seq__50258__$1);
var G__50283 = null;
var G__50284 = 0;
var G__50285 = 0;
seq__50258 = G__50282;
chunk__50259 = G__50283;
count__50260 = G__50284;
i__50261 = G__50285;
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
var G__50286 = parent;
var G__50287 = cljs.core.cons.call(null,parent,so_far);
n = G__50286;
so_far = G__50287;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__50296_50304 = cljs.core.seq.call(null,ancestors);var chunk__50297_50305 = null;var count__50298_50306 = 0;var i__50299_50307 = 0;while(true){
if((i__50299_50307 < count__50298_50306))
{var n_50308 = cljs.core._nth.call(null,chunk__50297_50305,i__50299_50307);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50308;
goog.events.fireListeners(n_50308,evt.type,true,evt);
}
{
var G__50309 = seq__50296_50304;
var G__50310 = chunk__50297_50305;
var G__50311 = count__50298_50306;
var G__50312 = (i__50299_50307 + 1);
seq__50296_50304 = G__50309;
chunk__50297_50305 = G__50310;
count__50298_50306 = G__50311;
i__50299_50307 = G__50312;
continue;
}
} else
{var temp__4092__auto___50313 = cljs.core.seq.call(null,seq__50296_50304);if(temp__4092__auto___50313)
{var seq__50296_50314__$1 = temp__4092__auto___50313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50296_50314__$1))
{var c__4189__auto___50315 = cljs.core.chunk_first.call(null,seq__50296_50314__$1);{
var G__50316 = cljs.core.chunk_rest.call(null,seq__50296_50314__$1);
var G__50317 = c__4189__auto___50315;
var G__50318 = cljs.core.count.call(null,c__4189__auto___50315);
var G__50319 = 0;
seq__50296_50304 = G__50316;
chunk__50297_50305 = G__50317;
count__50298_50306 = G__50318;
i__50299_50307 = G__50319;
continue;
}
} else
{var n_50320 = cljs.core.first.call(null,seq__50296_50314__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50320;
goog.events.fireListeners(n_50320,evt.type,true,evt);
}
{
var G__50321 = cljs.core.next.call(null,seq__50296_50314__$1);
var G__50322 = null;
var G__50323 = 0;
var G__50324 = 0;
seq__50296_50304 = G__50321;
chunk__50297_50305 = G__50322;
count__50298_50306 = G__50323;
i__50299_50307 = G__50324;
continue;
}
}
} else
{}
}
break;
}
var seq__50300_50325 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__50301_50326 = null;var count__50302_50327 = 0;var i__50303_50328 = 0;while(true){
if((i__50303_50328 < count__50302_50327))
{var n_50329 = cljs.core._nth.call(null,chunk__50301_50326,i__50303_50328);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50329;
goog.events.fireListeners(n_50329,evt.type,false,evt);
}
{
var G__50330 = seq__50300_50325;
var G__50331 = chunk__50301_50326;
var G__50332 = count__50302_50327;
var G__50333 = (i__50303_50328 + 1);
seq__50300_50325 = G__50330;
chunk__50301_50326 = G__50331;
count__50302_50327 = G__50332;
i__50303_50328 = G__50333;
continue;
}
} else
{var temp__4092__auto___50334 = cljs.core.seq.call(null,seq__50300_50325);if(temp__4092__auto___50334)
{var seq__50300_50335__$1 = temp__4092__auto___50334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50300_50335__$1))
{var c__4189__auto___50336 = cljs.core.chunk_first.call(null,seq__50300_50335__$1);{
var G__50337 = cljs.core.chunk_rest.call(null,seq__50300_50335__$1);
var G__50338 = c__4189__auto___50336;
var G__50339 = cljs.core.count.call(null,c__4189__auto___50336);
var G__50340 = 0;
seq__50300_50325 = G__50337;
chunk__50301_50326 = G__50338;
count__50302_50327 = G__50339;
i__50303_50328 = G__50340;
continue;
}
} else
{var n_50341 = cljs.core.first.call(null,seq__50300_50335__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_50341;
goog.events.fireListeners(n_50341,evt.type,false,evt);
}
{
var G__50342 = cljs.core.next.call(null,seq__50300_50335__$1);
var G__50343 = null;
var G__50344 = 0;
var G__50345 = 0;
seq__50300_50325 = G__50342;
chunk__50301_50326 = G__50343;
count__50302_50327 = G__50344;
i__50303_50328 = G__50345;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__50352_50358 = cljs.core.seq.call(null,evt_map);var chunk__50353_50359 = null;var count__50354_50360 = 0;var i__50355_50361 = 0;while(true){
if((i__50355_50361 < count__50354_50360))
{var vec__50356_50362 = cljs.core._nth.call(null,chunk__50353_50359,i__50355_50361);var k_50363 = cljs.core.nth.call(null,vec__50356_50362,0,null);var v_50364 = cljs.core.nth.call(null,vec__50356_50362,1,null);(evt[k_50363] = v_50364);
{
var G__50365 = seq__50352_50358;
var G__50366 = chunk__50353_50359;
var G__50367 = count__50354_50360;
var G__50368 = (i__50355_50361 + 1);
seq__50352_50358 = G__50365;
chunk__50353_50359 = G__50366;
count__50354_50360 = G__50367;
i__50355_50361 = G__50368;
continue;
}
} else
{var temp__4092__auto___50369 = cljs.core.seq.call(null,seq__50352_50358);if(temp__4092__auto___50369)
{var seq__50352_50370__$1 = temp__4092__auto___50369;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50352_50370__$1))
{var c__4189__auto___50371 = cljs.core.chunk_first.call(null,seq__50352_50370__$1);{
var G__50372 = cljs.core.chunk_rest.call(null,seq__50352_50370__$1);
var G__50373 = c__4189__auto___50371;
var G__50374 = cljs.core.count.call(null,c__4189__auto___50371);
var G__50375 = 0;
seq__50352_50358 = G__50372;
chunk__50353_50359 = G__50373;
count__50354_50360 = G__50374;
i__50355_50361 = G__50375;
continue;
}
} else
{var vec__50357_50376 = cljs.core.first.call(null,seq__50352_50370__$1);var k_50377 = cljs.core.nth.call(null,vec__50357_50376,0,null);var v_50378 = cljs.core.nth.call(null,vec__50357_50376,1,null);(evt[k_50377] = v_50378);
{
var G__50379 = cljs.core.next.call(null,seq__50352_50370__$1);
var G__50380 = null;
var G__50381 = 0;
var G__50382 = 0;
seq__50352_50358 = G__50379;
chunk__50353_50359 = G__50380;
count__50354_50360 = G__50381;
i__50355_50361 = G__50382;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__50383_SHARP_){return goog.events.getListeners(p1__50383_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
