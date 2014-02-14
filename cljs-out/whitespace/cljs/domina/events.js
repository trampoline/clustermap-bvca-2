// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27185 = {};return obj27185;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t27189 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27189 = (function (evt,f,create_listener_function,meta27190){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27190 = meta27190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27189.cljs$lang$type = true;
domina.events.t27189.cljs$lang$ctorStr = "domina.events/t27189";
domina.events.t27189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t27189");
});
domina.events.t27189.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t27189.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27189.prototype.domina$events$Event$ = true;
domina.events.t27189.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27189.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27189.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27189.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27189.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27189.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27191){var self__ = this;
var _27191__$1 = this;return self__.meta27190;
});
domina.events.t27189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27191,meta27190__$1){var self__ = this;
var _27191__$1 = this;return (new domina.events.t27189(self__.evt,self__.f,self__.create_listener_function,meta27190__$1));
});
domina.events.__GT_t27189 = (function __GT_t27189(evt__$1,f__$1,create_listener_function__$1,meta27190){return (new domina.events.t27189(evt__$1,f__$1,create_listener_function__$1,meta27190));
});
}
return (new domina.events.t27189(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__27196(s__27197){return (new cljs.core.LazySeq(null,(function (){var s__27197__$1 = s__27197;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__27197__$1);if(temp__4092__auto__)
{var s__27197__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27197__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__27197__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__27199 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__27198 = 0;while(true){
if((i__27198 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__27198);cljs.core.chunk_append.call(null,b__27199,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27200 = (i__27198 + 1);
i__27198 = G__27200;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27199),iter__27196.call(null,cljs.core.chunk_rest.call(null,s__27197__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27199),null);
}
} else
{var node = cljs.core.first.call(null,s__27197__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27196.call(null,cljs.core.rest.call(null,s__27197__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27209 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27210 = null;var count__27211 = 0;var i__27212 = 0;while(true){
if((i__27212 < count__27211))
{var node = cljs.core._nth.call(null,chunk__27210,i__27212);goog.events.removeAll(node);
{
var G__27217 = seq__27209;
var G__27218 = chunk__27210;
var G__27219 = count__27211;
var G__27220 = (i__27212 + 1);
seq__27209 = G__27217;
chunk__27210 = G__27218;
count__27211 = G__27219;
i__27212 = G__27220;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__27209);if(temp__4092__auto__)
{var seq__27209__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27209__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__27209__$1);{
var G__27221 = cljs.core.chunk_rest.call(null,seq__27209__$1);
var G__27222 = c__4148__auto__;
var G__27223 = cljs.core.count.call(null,c__4148__auto__);
var G__27224 = 0;
seq__27209 = G__27221;
chunk__27210 = G__27222;
count__27211 = G__27223;
i__27212 = G__27224;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__27209__$1);goog.events.removeAll(node);
{
var G__27225 = cljs.core.next.call(null,seq__27209__$1);
var G__27226 = null;
var G__27227 = 0;
var G__27228 = 0;
seq__27209 = G__27225;
chunk__27210 = G__27226;
count__27211 = G__27227;
i__27212 = G__27228;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__27213 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__27214 = null;var count__27215 = 0;var i__27216 = 0;while(true){
if((i__27216 < count__27215))
{var node = cljs.core._nth.call(null,chunk__27214,i__27216);goog.events.removeAll(node,type__$1);
{
var G__27229 = seq__27213;
var G__27230 = chunk__27214;
var G__27231 = count__27215;
var G__27232 = (i__27216 + 1);
seq__27213 = G__27229;
chunk__27214 = G__27230;
count__27215 = G__27231;
i__27216 = G__27232;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__27213);if(temp__4092__auto__)
{var seq__27213__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27213__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__27213__$1);{
var G__27233 = cljs.core.chunk_rest.call(null,seq__27213__$1);
var G__27234 = c__4148__auto__;
var G__27235 = cljs.core.count.call(null,c__4148__auto__);
var G__27236 = 0;
seq__27213 = G__27233;
chunk__27214 = G__27234;
count__27215 = G__27235;
i__27216 = G__27236;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__27213__$1);goog.events.removeAll(node,type__$1);
{
var G__27237 = cljs.core.next.call(null,seq__27213__$1);
var G__27238 = null;
var G__27239 = 0;
var G__27240 = 0;
seq__27213 = G__27237;
chunk__27214 = G__27238;
count__27215 = G__27239;
i__27216 = G__27240;
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
var G__27241 = parent;
var G__27242 = cljs.core.cons.call(null,parent,so_far);
n = G__27241;
so_far = G__27242;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__27251_27259 = cljs.core.seq.call(null,ancestors);var chunk__27252_27260 = null;var count__27253_27261 = 0;var i__27254_27262 = 0;while(true){
if((i__27254_27262 < count__27253_27261))
{var n_27263 = cljs.core._nth.call(null,chunk__27252_27260,i__27254_27262);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27263;
goog.events.fireListeners(n_27263,evt.type,true,evt);
}
{
var G__27264 = seq__27251_27259;
var G__27265 = chunk__27252_27260;
var G__27266 = count__27253_27261;
var G__27267 = (i__27254_27262 + 1);
seq__27251_27259 = G__27264;
chunk__27252_27260 = G__27265;
count__27253_27261 = G__27266;
i__27254_27262 = G__27267;
continue;
}
} else
{var temp__4092__auto___27268 = cljs.core.seq.call(null,seq__27251_27259);if(temp__4092__auto___27268)
{var seq__27251_27269__$1 = temp__4092__auto___27268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27251_27269__$1))
{var c__4148__auto___27270 = cljs.core.chunk_first.call(null,seq__27251_27269__$1);{
var G__27271 = cljs.core.chunk_rest.call(null,seq__27251_27269__$1);
var G__27272 = c__4148__auto___27270;
var G__27273 = cljs.core.count.call(null,c__4148__auto___27270);
var G__27274 = 0;
seq__27251_27259 = G__27271;
chunk__27252_27260 = G__27272;
count__27253_27261 = G__27273;
i__27254_27262 = G__27274;
continue;
}
} else
{var n_27275 = cljs.core.first.call(null,seq__27251_27269__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27275;
goog.events.fireListeners(n_27275,evt.type,true,evt);
}
{
var G__27276 = cljs.core.next.call(null,seq__27251_27269__$1);
var G__27277 = null;
var G__27278 = 0;
var G__27279 = 0;
seq__27251_27259 = G__27276;
chunk__27252_27260 = G__27277;
count__27253_27261 = G__27278;
i__27254_27262 = G__27279;
continue;
}
}
} else
{}
}
break;
}
var seq__27255_27280 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__27256_27281 = null;var count__27257_27282 = 0;var i__27258_27283 = 0;while(true){
if((i__27258_27283 < count__27257_27282))
{var n_27284 = cljs.core._nth.call(null,chunk__27256_27281,i__27258_27283);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27284;
goog.events.fireListeners(n_27284,evt.type,false,evt);
}
{
var G__27285 = seq__27255_27280;
var G__27286 = chunk__27256_27281;
var G__27287 = count__27257_27282;
var G__27288 = (i__27258_27283 + 1);
seq__27255_27280 = G__27285;
chunk__27256_27281 = G__27286;
count__27257_27282 = G__27287;
i__27258_27283 = G__27288;
continue;
}
} else
{var temp__4092__auto___27289 = cljs.core.seq.call(null,seq__27255_27280);if(temp__4092__auto___27289)
{var seq__27255_27290__$1 = temp__4092__auto___27289;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27255_27290__$1))
{var c__4148__auto___27291 = cljs.core.chunk_first.call(null,seq__27255_27290__$1);{
var G__27292 = cljs.core.chunk_rest.call(null,seq__27255_27290__$1);
var G__27293 = c__4148__auto___27291;
var G__27294 = cljs.core.count.call(null,c__4148__auto___27291);
var G__27295 = 0;
seq__27255_27280 = G__27292;
chunk__27256_27281 = G__27293;
count__27257_27282 = G__27294;
i__27258_27283 = G__27295;
continue;
}
} else
{var n_27296 = cljs.core.first.call(null,seq__27255_27290__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27296;
goog.events.fireListeners(n_27296,evt.type,false,evt);
}
{
var G__27297 = cljs.core.next.call(null,seq__27255_27290__$1);
var G__27298 = null;
var G__27299 = 0;
var G__27300 = 0;
seq__27255_27280 = G__27297;
chunk__27256_27281 = G__27298;
count__27257_27282 = G__27299;
i__27258_27283 = G__27300;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__27307_27313 = cljs.core.seq.call(null,evt_map);var chunk__27308_27314 = null;var count__27309_27315 = 0;var i__27310_27316 = 0;while(true){
if((i__27310_27316 < count__27309_27315))
{var vec__27311_27317 = cljs.core._nth.call(null,chunk__27308_27314,i__27310_27316);var k_27318 = cljs.core.nth.call(null,vec__27311_27317,0,null);var v_27319 = cljs.core.nth.call(null,vec__27311_27317,1,null);(evt[k_27318] = v_27319);
{
var G__27320 = seq__27307_27313;
var G__27321 = chunk__27308_27314;
var G__27322 = count__27309_27315;
var G__27323 = (i__27310_27316 + 1);
seq__27307_27313 = G__27320;
chunk__27308_27314 = G__27321;
count__27309_27315 = G__27322;
i__27310_27316 = G__27323;
continue;
}
} else
{var temp__4092__auto___27324 = cljs.core.seq.call(null,seq__27307_27313);if(temp__4092__auto___27324)
{var seq__27307_27325__$1 = temp__4092__auto___27324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__27307_27325__$1))
{var c__4148__auto___27326 = cljs.core.chunk_first.call(null,seq__27307_27325__$1);{
var G__27327 = cljs.core.chunk_rest.call(null,seq__27307_27325__$1);
var G__27328 = c__4148__auto___27326;
var G__27329 = cljs.core.count.call(null,c__4148__auto___27326);
var G__27330 = 0;
seq__27307_27313 = G__27327;
chunk__27308_27314 = G__27328;
count__27309_27315 = G__27329;
i__27310_27316 = G__27330;
continue;
}
} else
{var vec__27312_27331 = cljs.core.first.call(null,seq__27307_27325__$1);var k_27332 = cljs.core.nth.call(null,vec__27312_27331,0,null);var v_27333 = cljs.core.nth.call(null,vec__27312_27331,1,null);(evt[k_27332] = v_27333);
{
var G__27334 = cljs.core.next.call(null,seq__27307_27325__$1);
var G__27335 = null;
var G__27336 = 0;
var G__27337 = 0;
seq__27307_27313 = G__27334;
chunk__27308_27314 = G__27335;
count__27309_27315 = G__27336;
i__27310_27316 = G__27337;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__27338_SHARP_){return goog.events.getListeners(p1__27338_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
