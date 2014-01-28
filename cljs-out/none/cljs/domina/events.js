// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16181 = {};return obj16181;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16185 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16185 = (function (evt,f,create_listener_function,meta16186){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16186 = meta16186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16185.cljs$lang$type = true;
domina.events.t16185.cljs$lang$ctorStr = "domina.events/t16185";
domina.events.t16185.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16185");
});
domina.events.t16185.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16185.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16185.prototype.domina$events$Event$ = true;
domina.events.t16185.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16185.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16185.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16185.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16185.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16185.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16187){var self__ = this;
var _16187__$1 = this;return self__.meta16186;
});
domina.events.t16185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16187,meta16186__$1){var self__ = this;
var _16187__$1 = this;return (new domina.events.t16185(self__.evt,self__.f,self__.create_listener_function,meta16186__$1));
});
domina.events.__GT_t16185 = (function __GT_t16185(evt__$1,f__$1,create_listener_function__$1,meta16186){return (new domina.events.t16185(evt__$1,f__$1,create_listener_function__$1,meta16186));
});
}
return (new domina.events.t16185(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16192(s__16193){return (new cljs.core.LazySeq(null,(function (){var s__16193__$1 = s__16193;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16193__$1);if(temp__4092__auto__)
{var s__16193__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16193__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16193__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16195 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16194 = 0;while(true){
if((i__16194 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16194);cljs.core.chunk_append.call(null,b__16195,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16196 = (i__16194 + 1);
i__16194 = G__16196;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16195),iter__16192.call(null,cljs.core.chunk_rest.call(null,s__16193__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16195),null);
}
} else
{var node = cljs.core.first.call(null,s__16193__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16192.call(null,cljs.core.rest.call(null,s__16193__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16205 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16206 = null;var count__16207 = 0;var i__16208 = 0;while(true){
if((i__16208 < count__16207))
{var node = cljs.core._nth.call(null,chunk__16206,i__16208);goog.events.removeAll(node);
{
var G__16213 = seq__16205;
var G__16214 = chunk__16206;
var G__16215 = count__16207;
var G__16216 = (i__16208 + 1);
seq__16205 = G__16213;
chunk__16206 = G__16214;
count__16207 = G__16215;
i__16208 = G__16216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16205);if(temp__4092__auto__)
{var seq__16205__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16205__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16205__$1);{
var G__16217 = cljs.core.chunk_rest.call(null,seq__16205__$1);
var G__16218 = c__4148__auto__;
var G__16219 = cljs.core.count.call(null,c__4148__auto__);
var G__16220 = 0;
seq__16205 = G__16217;
chunk__16206 = G__16218;
count__16207 = G__16219;
i__16208 = G__16220;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16205__$1);goog.events.removeAll(node);
{
var G__16221 = cljs.core.next.call(null,seq__16205__$1);
var G__16222 = null;
var G__16223 = 0;
var G__16224 = 0;
seq__16205 = G__16221;
chunk__16206 = G__16222;
count__16207 = G__16223;
i__16208 = G__16224;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16209 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16210 = null;var count__16211 = 0;var i__16212 = 0;while(true){
if((i__16212 < count__16211))
{var node = cljs.core._nth.call(null,chunk__16210,i__16212);goog.events.removeAll(node,type__$1);
{
var G__16225 = seq__16209;
var G__16226 = chunk__16210;
var G__16227 = count__16211;
var G__16228 = (i__16212 + 1);
seq__16209 = G__16225;
chunk__16210 = G__16226;
count__16211 = G__16227;
i__16212 = G__16228;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16209);if(temp__4092__auto__)
{var seq__16209__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16209__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16209__$1);{
var G__16229 = cljs.core.chunk_rest.call(null,seq__16209__$1);
var G__16230 = c__4148__auto__;
var G__16231 = cljs.core.count.call(null,c__4148__auto__);
var G__16232 = 0;
seq__16209 = G__16229;
chunk__16210 = G__16230;
count__16211 = G__16231;
i__16212 = G__16232;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16209__$1);goog.events.removeAll(node,type__$1);
{
var G__16233 = cljs.core.next.call(null,seq__16209__$1);
var G__16234 = null;
var G__16235 = 0;
var G__16236 = 0;
seq__16209 = G__16233;
chunk__16210 = G__16234;
count__16211 = G__16235;
i__16212 = G__16236;
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
var G__16237 = parent;
var G__16238 = cljs.core.cons.call(null,parent,so_far);
n = G__16237;
so_far = G__16238;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16247_16255 = cljs.core.seq.call(null,ancestors);var chunk__16248_16256 = null;var count__16249_16257 = 0;var i__16250_16258 = 0;while(true){
if((i__16250_16258 < count__16249_16257))
{var n_16259 = cljs.core._nth.call(null,chunk__16248_16256,i__16250_16258);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16259;
goog.events.fireListeners(n_16259,evt.type,true,evt);
}
{
var G__16260 = seq__16247_16255;
var G__16261 = chunk__16248_16256;
var G__16262 = count__16249_16257;
var G__16263 = (i__16250_16258 + 1);
seq__16247_16255 = G__16260;
chunk__16248_16256 = G__16261;
count__16249_16257 = G__16262;
i__16250_16258 = G__16263;
continue;
}
} else
{var temp__4092__auto___16264 = cljs.core.seq.call(null,seq__16247_16255);if(temp__4092__auto___16264)
{var seq__16247_16265__$1 = temp__4092__auto___16264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16247_16265__$1))
{var c__4148__auto___16266 = cljs.core.chunk_first.call(null,seq__16247_16265__$1);{
var G__16267 = cljs.core.chunk_rest.call(null,seq__16247_16265__$1);
var G__16268 = c__4148__auto___16266;
var G__16269 = cljs.core.count.call(null,c__4148__auto___16266);
var G__16270 = 0;
seq__16247_16255 = G__16267;
chunk__16248_16256 = G__16268;
count__16249_16257 = G__16269;
i__16250_16258 = G__16270;
continue;
}
} else
{var n_16271 = cljs.core.first.call(null,seq__16247_16265__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16271;
goog.events.fireListeners(n_16271,evt.type,true,evt);
}
{
var G__16272 = cljs.core.next.call(null,seq__16247_16265__$1);
var G__16273 = null;
var G__16274 = 0;
var G__16275 = 0;
seq__16247_16255 = G__16272;
chunk__16248_16256 = G__16273;
count__16249_16257 = G__16274;
i__16250_16258 = G__16275;
continue;
}
}
} else
{}
}
break;
}
var seq__16251_16276 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16252_16277 = null;var count__16253_16278 = 0;var i__16254_16279 = 0;while(true){
if((i__16254_16279 < count__16253_16278))
{var n_16280 = cljs.core._nth.call(null,chunk__16252_16277,i__16254_16279);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16280;
goog.events.fireListeners(n_16280,evt.type,false,evt);
}
{
var G__16281 = seq__16251_16276;
var G__16282 = chunk__16252_16277;
var G__16283 = count__16253_16278;
var G__16284 = (i__16254_16279 + 1);
seq__16251_16276 = G__16281;
chunk__16252_16277 = G__16282;
count__16253_16278 = G__16283;
i__16254_16279 = G__16284;
continue;
}
} else
{var temp__4092__auto___16285 = cljs.core.seq.call(null,seq__16251_16276);if(temp__4092__auto___16285)
{var seq__16251_16286__$1 = temp__4092__auto___16285;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16251_16286__$1))
{var c__4148__auto___16287 = cljs.core.chunk_first.call(null,seq__16251_16286__$1);{
var G__16288 = cljs.core.chunk_rest.call(null,seq__16251_16286__$1);
var G__16289 = c__4148__auto___16287;
var G__16290 = cljs.core.count.call(null,c__4148__auto___16287);
var G__16291 = 0;
seq__16251_16276 = G__16288;
chunk__16252_16277 = G__16289;
count__16253_16278 = G__16290;
i__16254_16279 = G__16291;
continue;
}
} else
{var n_16292 = cljs.core.first.call(null,seq__16251_16286__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16292;
goog.events.fireListeners(n_16292,evt.type,false,evt);
}
{
var G__16293 = cljs.core.next.call(null,seq__16251_16286__$1);
var G__16294 = null;
var G__16295 = 0;
var G__16296 = 0;
seq__16251_16276 = G__16293;
chunk__16252_16277 = G__16294;
count__16253_16278 = G__16295;
i__16254_16279 = G__16296;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16303_16309 = cljs.core.seq.call(null,evt_map);var chunk__16304_16310 = null;var count__16305_16311 = 0;var i__16306_16312 = 0;while(true){
if((i__16306_16312 < count__16305_16311))
{var vec__16307_16313 = cljs.core._nth.call(null,chunk__16304_16310,i__16306_16312);var k_16314 = cljs.core.nth.call(null,vec__16307_16313,0,null);var v_16315 = cljs.core.nth.call(null,vec__16307_16313,1,null);(evt[k_16314] = v_16315);
{
var G__16316 = seq__16303_16309;
var G__16317 = chunk__16304_16310;
var G__16318 = count__16305_16311;
var G__16319 = (i__16306_16312 + 1);
seq__16303_16309 = G__16316;
chunk__16304_16310 = G__16317;
count__16305_16311 = G__16318;
i__16306_16312 = G__16319;
continue;
}
} else
{var temp__4092__auto___16320 = cljs.core.seq.call(null,seq__16303_16309);if(temp__4092__auto___16320)
{var seq__16303_16321__$1 = temp__4092__auto___16320;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16303_16321__$1))
{var c__4148__auto___16322 = cljs.core.chunk_first.call(null,seq__16303_16321__$1);{
var G__16323 = cljs.core.chunk_rest.call(null,seq__16303_16321__$1);
var G__16324 = c__4148__auto___16322;
var G__16325 = cljs.core.count.call(null,c__4148__auto___16322);
var G__16326 = 0;
seq__16303_16309 = G__16323;
chunk__16304_16310 = G__16324;
count__16305_16311 = G__16325;
i__16306_16312 = G__16326;
continue;
}
} else
{var vec__16308_16327 = cljs.core.first.call(null,seq__16303_16321__$1);var k_16328 = cljs.core.nth.call(null,vec__16308_16327,0,null);var v_16329 = cljs.core.nth.call(null,vec__16308_16327,1,null);(evt[k_16328] = v_16329);
{
var G__16330 = cljs.core.next.call(null,seq__16303_16321__$1);
var G__16331 = null;
var G__16332 = 0;
var G__16333 = 0;
seq__16303_16309 = G__16330;
chunk__16304_16310 = G__16331;
count__16305_16311 = G__16332;
i__16306_16312 = G__16333;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16334_SHARP_){return goog.events.getListeners(p1__16334_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map