// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj31215 = {};return obj31215;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.prevent_default[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.prevent_default["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.current_target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.current_target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.event_type[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.event_type["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.raw_event[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.raw_event["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t31219 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t31219 = (function (evt,f,create_listener_function,meta31220){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta31220 = meta31220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t31219.cljs$lang$type = true;
domina.events.t31219.cljs$lang$ctorStr = "domina.events/t31219";
domina.events.t31219.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"domina.events/t31219");
});
domina.events.t31219.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t31219.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t31219.prototype.domina$events$Event$ = true;
domina.events.t31219.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t31219.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t31219.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t31219.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t31219.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t31219.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t31219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31221){var self__ = this;
var _31221__$1 = this;return self__.meta31220;
});
domina.events.t31219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31221,meta31220__$1){var self__ = this;
var _31221__$1 = this;return (new domina.events.t31219(self__.evt,self__.f,self__.create_listener_function,meta31220__$1));
});
domina.events.__GT_t31219 = (function __GT_t31219(evt__$1,f__$1,create_listener_function__$1,meta31220){return (new domina.events.t31219(evt__$1,f__$1,create_listener_function__$1,meta31220));
});
}
return (new domina.events.t31219(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4266__auto__ = ((function (f,t){
return (function iter__31226(s__31227){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__31227__$1 = s__31227;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31227__$1);if(temp__4126__auto__)
{var s__31227__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31227__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__31227__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__31229 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__31228 = (0);while(true){
if((i__31228 < size__4265__auto__))
{var node = cljs.core._nth.call(null,c__4264__auto__,i__31228);cljs.core.chunk_append.call(null,b__31229,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__31230 = (i__31228 + (1));
i__31228 = G__31230;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31229),iter__31226.call(null,cljs.core.chunk_rest.call(null,s__31227__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31229),null);
}
} else
{var node = cljs.core.first.call(null,s__31227__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__31226.call(null,cljs.core.rest.call(null,s__31227__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4266__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__31239 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31240 = null;var count__31241 = (0);var i__31242 = (0);while(true){
if((i__31242 < count__31241))
{var node = cljs.core._nth.call(null,chunk__31240,i__31242);goog.events.removeAll(node);
{
var G__31247 = seq__31239;
var G__31248 = chunk__31240;
var G__31249 = count__31241;
var G__31250 = (i__31242 + (1));
seq__31239 = G__31247;
chunk__31240 = G__31248;
count__31241 = G__31249;
i__31242 = G__31250;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31239);if(temp__4126__auto__)
{var seq__31239__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31239__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__31239__$1);{
var G__31251 = cljs.core.chunk_rest.call(null,seq__31239__$1);
var G__31252 = c__4297__auto__;
var G__31253 = cljs.core.count.call(null,c__4297__auto__);
var G__31254 = (0);
seq__31239 = G__31251;
chunk__31240 = G__31252;
count__31241 = G__31253;
i__31242 = G__31254;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31239__$1);goog.events.removeAll(node);
{
var G__31255 = cljs.core.next.call(null,seq__31239__$1);
var G__31256 = null;
var G__31257 = (0);
var G__31258 = (0);
seq__31239 = G__31255;
chunk__31240 = G__31256;
count__31241 = G__31257;
i__31242 = G__31258;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__31243 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31244 = null;var count__31245 = (0);var i__31246 = (0);while(true){
if((i__31246 < count__31245))
{var node = cljs.core._nth.call(null,chunk__31244,i__31246);goog.events.removeAll(node,type__$1);
{
var G__31259 = seq__31243;
var G__31260 = chunk__31244;
var G__31261 = count__31245;
var G__31262 = (i__31246 + (1));
seq__31243 = G__31259;
chunk__31244 = G__31260;
count__31245 = G__31261;
i__31246 = G__31262;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31243);if(temp__4126__auto__)
{var seq__31243__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31243__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__31243__$1);{
var G__31263 = cljs.core.chunk_rest.call(null,seq__31243__$1);
var G__31264 = c__4297__auto__;
var G__31265 = cljs.core.count.call(null,c__4297__auto__);
var G__31266 = (0);
seq__31243 = G__31263;
chunk__31244 = G__31264;
count__31245 = G__31265;
i__31246 = G__31266;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31243__$1);goog.events.removeAll(node,type__$1);
{
var G__31267 = cljs.core.next.call(null,seq__31243__$1);
var G__31268 = null;
var G__31269 = (0);
var G__31270 = (0);
seq__31243 = G__31267;
chunk__31244 = G__31268;
count__31245 = G__31269;
i__31246 = G__31270;
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
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__31271 = parent;
var G__31272 = cljs.core.cons.call(null,parent,so_far);
n = G__31271;
so_far = G__31272;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__31281_31289 = cljs.core.seq.call(null,ancestors);var chunk__31282_31290 = null;var count__31283_31291 = (0);var i__31284_31292 = (0);while(true){
if((i__31284_31292 < count__31283_31291))
{var n_31293 = cljs.core._nth.call(null,chunk__31282_31290,i__31284_31292);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31293;
goog.events.fireListeners(n_31293,evt.type,true,evt);
}
{
var G__31294 = seq__31281_31289;
var G__31295 = chunk__31282_31290;
var G__31296 = count__31283_31291;
var G__31297 = (i__31284_31292 + (1));
seq__31281_31289 = G__31294;
chunk__31282_31290 = G__31295;
count__31283_31291 = G__31296;
i__31284_31292 = G__31297;
continue;
}
} else
{var temp__4126__auto___31298 = cljs.core.seq.call(null,seq__31281_31289);if(temp__4126__auto___31298)
{var seq__31281_31299__$1 = temp__4126__auto___31298;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31281_31299__$1))
{var c__4297__auto___31300 = cljs.core.chunk_first.call(null,seq__31281_31299__$1);{
var G__31301 = cljs.core.chunk_rest.call(null,seq__31281_31299__$1);
var G__31302 = c__4297__auto___31300;
var G__31303 = cljs.core.count.call(null,c__4297__auto___31300);
var G__31304 = (0);
seq__31281_31289 = G__31301;
chunk__31282_31290 = G__31302;
count__31283_31291 = G__31303;
i__31284_31292 = G__31304;
continue;
}
} else
{var n_31305 = cljs.core.first.call(null,seq__31281_31299__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31305;
goog.events.fireListeners(n_31305,evt.type,true,evt);
}
{
var G__31306 = cljs.core.next.call(null,seq__31281_31299__$1);
var G__31307 = null;
var G__31308 = (0);
var G__31309 = (0);
seq__31281_31289 = G__31306;
chunk__31282_31290 = G__31307;
count__31283_31291 = G__31308;
i__31284_31292 = G__31309;
continue;
}
}
} else
{}
}
break;
}
var seq__31285_31310 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__31286_31311 = null;var count__31287_31312 = (0);var i__31288_31313 = (0);while(true){
if((i__31288_31313 < count__31287_31312))
{var n_31314 = cljs.core._nth.call(null,chunk__31286_31311,i__31288_31313);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31314;
goog.events.fireListeners(n_31314,evt.type,false,evt);
}
{
var G__31315 = seq__31285_31310;
var G__31316 = chunk__31286_31311;
var G__31317 = count__31287_31312;
var G__31318 = (i__31288_31313 + (1));
seq__31285_31310 = G__31315;
chunk__31286_31311 = G__31316;
count__31287_31312 = G__31317;
i__31288_31313 = G__31318;
continue;
}
} else
{var temp__4126__auto___31319 = cljs.core.seq.call(null,seq__31285_31310);if(temp__4126__auto___31319)
{var seq__31285_31320__$1 = temp__4126__auto___31319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31285_31320__$1))
{var c__4297__auto___31321 = cljs.core.chunk_first.call(null,seq__31285_31320__$1);{
var G__31322 = cljs.core.chunk_rest.call(null,seq__31285_31320__$1);
var G__31323 = c__4297__auto___31321;
var G__31324 = cljs.core.count.call(null,c__4297__auto___31321);
var G__31325 = (0);
seq__31285_31310 = G__31322;
chunk__31286_31311 = G__31323;
count__31287_31312 = G__31324;
i__31288_31313 = G__31325;
continue;
}
} else
{var n_31326 = cljs.core.first.call(null,seq__31285_31320__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31326;
goog.events.fireListeners(n_31326,evt.type,false,evt);
}
{
var G__31327 = cljs.core.next.call(null,seq__31285_31320__$1);
var G__31328 = null;
var G__31329 = (0);
var G__31330 = (0);
seq__31285_31310 = G__31327;
chunk__31286_31311 = G__31328;
count__31287_31312 = G__31329;
i__31288_31313 = G__31330;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3529__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3529__auto__))
{return o.dispatchEvent;
} else
{return and__3529__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__31337_31343 = cljs.core.seq.call(null,evt_map);var chunk__31338_31344 = null;var count__31339_31345 = (0);var i__31340_31346 = (0);while(true){
if((i__31340_31346 < count__31339_31345))
{var vec__31341_31347 = cljs.core._nth.call(null,chunk__31338_31344,i__31340_31346);var k_31348 = cljs.core.nth.call(null,vec__31341_31347,(0),null);var v_31349 = cljs.core.nth.call(null,vec__31341_31347,(1),null);(evt[k_31348] = v_31349);
{
var G__31350 = seq__31337_31343;
var G__31351 = chunk__31338_31344;
var G__31352 = count__31339_31345;
var G__31353 = (i__31340_31346 + (1));
seq__31337_31343 = G__31350;
chunk__31338_31344 = G__31351;
count__31339_31345 = G__31352;
i__31340_31346 = G__31353;
continue;
}
} else
{var temp__4126__auto___31354 = cljs.core.seq.call(null,seq__31337_31343);if(temp__4126__auto___31354)
{var seq__31337_31355__$1 = temp__4126__auto___31354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31337_31355__$1))
{var c__4297__auto___31356 = cljs.core.chunk_first.call(null,seq__31337_31355__$1);{
var G__31357 = cljs.core.chunk_rest.call(null,seq__31337_31355__$1);
var G__31358 = c__4297__auto___31356;
var G__31359 = cljs.core.count.call(null,c__4297__auto___31356);
var G__31360 = (0);
seq__31337_31343 = G__31357;
chunk__31338_31344 = G__31358;
count__31339_31345 = G__31359;
i__31340_31346 = G__31360;
continue;
}
} else
{var vec__31342_31361 = cljs.core.first.call(null,seq__31337_31355__$1);var k_31362 = cljs.core.nth.call(null,vec__31342_31361,(0),null);var v_31363 = cljs.core.nth.call(null,vec__31342_31361,(1),null);(evt[k_31362] = v_31363);
{
var G__31364 = cljs.core.next.call(null,seq__31337_31355__$1);
var G__31365 = null;
var G__31366 = (0);
var G__31367 = (0);
seq__31337_31343 = G__31364;
chunk__31338_31344 = G__31365;
count__31339_31345 = G__31366;
i__31340_31346 = G__31367;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__31368_SHARP_){return goog.events.getListeners(p1__31368_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
