// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj59182 = {};return obj59182;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t59186 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t59186 = (function (evt,f,create_listener_function,meta59187){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta59187 = meta59187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t59186.cljs$lang$type = true;
domina.events.t59186.cljs$lang$ctorStr = "domina.events/t59186";
domina.events.t59186.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t59186");
});
domina.events.t59186.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t59186.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t59186.prototype.domina$events$Event$ = true;
domina.events.t59186.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t59186.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t59186.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t59186.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t59186.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t59186.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t59186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_59188){var self__ = this;
var _59188__$1 = this;return self__.meta59187;
});
domina.events.t59186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_59188,meta59187__$1){var self__ = this;
var _59188__$1 = this;return (new domina.events.t59186(self__.evt,self__.f,self__.create_listener_function,meta59187__$1));
});
domina.events.__GT_t59186 = (function __GT_t59186(evt__$1,f__$1,create_listener_function__$1,meta59187){return (new domina.events.t59186(evt__$1,f__$1,create_listener_function__$1,meta59187));
});
}
return (new domina.events.t59186(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__59193(s__59194){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__59194__$1 = s__59194;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__59194__$1);if(temp__4126__auto__)
{var s__59194__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__59194__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__59194__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__59196 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__59195 = (0);while(true){
if((i__59195 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__59195);cljs.core.chunk_append.call(null,b__59196,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__59197 = (i__59195 + (1));
i__59195 = G__59197;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59196),iter__59193.call(null,cljs.core.chunk_rest.call(null,s__59194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__59196),null);
}
} else
{var node = cljs.core.first.call(null,s__59194__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__59193.call(null,cljs.core.rest.call(null,s__59194__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__59206 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59207 = null;var count__59208 = (0);var i__59209 = (0);while(true){
if((i__59209 < count__59208))
{var node = cljs.core._nth.call(null,chunk__59207,i__59209);goog.events.removeAll(node);
{
var G__59214 = seq__59206;
var G__59215 = chunk__59207;
var G__59216 = count__59208;
var G__59217 = (i__59209 + (1));
seq__59206 = G__59214;
chunk__59207 = G__59215;
count__59208 = G__59216;
i__59209 = G__59217;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__59206);if(temp__4126__auto__)
{var seq__59206__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59206__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__59206__$1);{
var G__59218 = cljs.core.chunk_rest.call(null,seq__59206__$1);
var G__59219 = c__4314__auto__;
var G__59220 = cljs.core.count.call(null,c__4314__auto__);
var G__59221 = (0);
seq__59206 = G__59218;
chunk__59207 = G__59219;
count__59208 = G__59220;
i__59209 = G__59221;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__59206__$1);goog.events.removeAll(node);
{
var G__59222 = cljs.core.next.call(null,seq__59206__$1);
var G__59223 = null;
var G__59224 = (0);
var G__59225 = (0);
seq__59206 = G__59222;
chunk__59207 = G__59223;
count__59208 = G__59224;
i__59209 = G__59225;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__59210 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__59211 = null;var count__59212 = (0);var i__59213 = (0);while(true){
if((i__59213 < count__59212))
{var node = cljs.core._nth.call(null,chunk__59211,i__59213);goog.events.removeAll(node,type__$1);
{
var G__59226 = seq__59210;
var G__59227 = chunk__59211;
var G__59228 = count__59212;
var G__59229 = (i__59213 + (1));
seq__59210 = G__59226;
chunk__59211 = G__59227;
count__59212 = G__59228;
i__59213 = G__59229;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__59210);if(temp__4126__auto__)
{var seq__59210__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59210__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__59210__$1);{
var G__59230 = cljs.core.chunk_rest.call(null,seq__59210__$1);
var G__59231 = c__4314__auto__;
var G__59232 = cljs.core.count.call(null,c__4314__auto__);
var G__59233 = (0);
seq__59210 = G__59230;
chunk__59211 = G__59231;
count__59212 = G__59232;
i__59213 = G__59233;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__59210__$1);goog.events.removeAll(node,type__$1);
{
var G__59234 = cljs.core.next.call(null,seq__59210__$1);
var G__59235 = null;
var G__59236 = (0);
var G__59237 = (0);
seq__59210 = G__59234;
chunk__59211 = G__59235;
count__59212 = G__59236;
i__59213 = G__59237;
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
var G__59238 = parent;
var G__59239 = cljs.core.cons.call(null,parent,so_far);
n = G__59238;
so_far = G__59239;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__59248_59256 = cljs.core.seq.call(null,ancestors);var chunk__59249_59257 = null;var count__59250_59258 = (0);var i__59251_59259 = (0);while(true){
if((i__59251_59259 < count__59250_59258))
{var n_59260 = cljs.core._nth.call(null,chunk__59249_59257,i__59251_59259);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_59260;
goog.events.fireListeners(n_59260,evt.type,true,evt);
}
{
var G__59261 = seq__59248_59256;
var G__59262 = chunk__59249_59257;
var G__59263 = count__59250_59258;
var G__59264 = (i__59251_59259 + (1));
seq__59248_59256 = G__59261;
chunk__59249_59257 = G__59262;
count__59250_59258 = G__59263;
i__59251_59259 = G__59264;
continue;
}
} else
{var temp__4126__auto___59265 = cljs.core.seq.call(null,seq__59248_59256);if(temp__4126__auto___59265)
{var seq__59248_59266__$1 = temp__4126__auto___59265;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59248_59266__$1))
{var c__4314__auto___59267 = cljs.core.chunk_first.call(null,seq__59248_59266__$1);{
var G__59268 = cljs.core.chunk_rest.call(null,seq__59248_59266__$1);
var G__59269 = c__4314__auto___59267;
var G__59270 = cljs.core.count.call(null,c__4314__auto___59267);
var G__59271 = (0);
seq__59248_59256 = G__59268;
chunk__59249_59257 = G__59269;
count__59250_59258 = G__59270;
i__59251_59259 = G__59271;
continue;
}
} else
{var n_59272 = cljs.core.first.call(null,seq__59248_59266__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_59272;
goog.events.fireListeners(n_59272,evt.type,true,evt);
}
{
var G__59273 = cljs.core.next.call(null,seq__59248_59266__$1);
var G__59274 = null;
var G__59275 = (0);
var G__59276 = (0);
seq__59248_59256 = G__59273;
chunk__59249_59257 = G__59274;
count__59250_59258 = G__59275;
i__59251_59259 = G__59276;
continue;
}
}
} else
{}
}
break;
}
var seq__59252_59277 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__59253_59278 = null;var count__59254_59279 = (0);var i__59255_59280 = (0);while(true){
if((i__59255_59280 < count__59254_59279))
{var n_59281 = cljs.core._nth.call(null,chunk__59253_59278,i__59255_59280);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_59281;
goog.events.fireListeners(n_59281,evt.type,false,evt);
}
{
var G__59282 = seq__59252_59277;
var G__59283 = chunk__59253_59278;
var G__59284 = count__59254_59279;
var G__59285 = (i__59255_59280 + (1));
seq__59252_59277 = G__59282;
chunk__59253_59278 = G__59283;
count__59254_59279 = G__59284;
i__59255_59280 = G__59285;
continue;
}
} else
{var temp__4126__auto___59286 = cljs.core.seq.call(null,seq__59252_59277);if(temp__4126__auto___59286)
{var seq__59252_59287__$1 = temp__4126__auto___59286;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59252_59287__$1))
{var c__4314__auto___59288 = cljs.core.chunk_first.call(null,seq__59252_59287__$1);{
var G__59289 = cljs.core.chunk_rest.call(null,seq__59252_59287__$1);
var G__59290 = c__4314__auto___59288;
var G__59291 = cljs.core.count.call(null,c__4314__auto___59288);
var G__59292 = (0);
seq__59252_59277 = G__59289;
chunk__59253_59278 = G__59290;
count__59254_59279 = G__59291;
i__59255_59280 = G__59292;
continue;
}
} else
{var n_59293 = cljs.core.first.call(null,seq__59252_59287__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_59293;
goog.events.fireListeners(n_59293,evt.type,false,evt);
}
{
var G__59294 = cljs.core.next.call(null,seq__59252_59287__$1);
var G__59295 = null;
var G__59296 = (0);
var G__59297 = (0);
seq__59252_59277 = G__59294;
chunk__59253_59278 = G__59295;
count__59254_59279 = G__59296;
i__59255_59280 = G__59297;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__59304_59310 = cljs.core.seq.call(null,evt_map);var chunk__59305_59311 = null;var count__59306_59312 = (0);var i__59307_59313 = (0);while(true){
if((i__59307_59313 < count__59306_59312))
{var vec__59308_59314 = cljs.core._nth.call(null,chunk__59305_59311,i__59307_59313);var k_59315 = cljs.core.nth.call(null,vec__59308_59314,(0),null);var v_59316 = cljs.core.nth.call(null,vec__59308_59314,(1),null);(evt[k_59315] = v_59316);
{
var G__59317 = seq__59304_59310;
var G__59318 = chunk__59305_59311;
var G__59319 = count__59306_59312;
var G__59320 = (i__59307_59313 + (1));
seq__59304_59310 = G__59317;
chunk__59305_59311 = G__59318;
count__59306_59312 = G__59319;
i__59307_59313 = G__59320;
continue;
}
} else
{var temp__4126__auto___59321 = cljs.core.seq.call(null,seq__59304_59310);if(temp__4126__auto___59321)
{var seq__59304_59322__$1 = temp__4126__auto___59321;if(cljs.core.chunked_seq_QMARK_.call(null,seq__59304_59322__$1))
{var c__4314__auto___59323 = cljs.core.chunk_first.call(null,seq__59304_59322__$1);{
var G__59324 = cljs.core.chunk_rest.call(null,seq__59304_59322__$1);
var G__59325 = c__4314__auto___59323;
var G__59326 = cljs.core.count.call(null,c__4314__auto___59323);
var G__59327 = (0);
seq__59304_59310 = G__59324;
chunk__59305_59311 = G__59325;
count__59306_59312 = G__59326;
i__59307_59313 = G__59327;
continue;
}
} else
{var vec__59309_59328 = cljs.core.first.call(null,seq__59304_59322__$1);var k_59329 = cljs.core.nth.call(null,vec__59309_59328,(0),null);var v_59330 = cljs.core.nth.call(null,vec__59309_59328,(1),null);(evt[k_59329] = v_59330);
{
var G__59331 = cljs.core.next.call(null,seq__59304_59322__$1);
var G__59332 = null;
var G__59333 = (0);
var G__59334 = (0);
seq__59304_59310 = G__59331;
chunk__59305_59311 = G__59332;
count__59306_59312 = G__59333;
i__59307_59313 = G__59334;
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
return (function (p1__59335_SHARP_){return goog.events.getListeners(p1__59335_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map