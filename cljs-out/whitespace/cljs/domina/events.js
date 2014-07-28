// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19180 = {};return obj19180;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19184 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19184 = (function (evt,f,create_listener_function,meta19185){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19185 = meta19185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19184.cljs$lang$type = true;
domina.events.t19184.cljs$lang$ctorStr = "domina.events/t19184";
domina.events.t19184.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t19184");
});
domina.events.t19184.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19184.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t19184.prototype.domina$events$Event$ = true;
domina.events.t19184.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19184.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19184.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19184.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19184.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19184.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19186){var self__ = this;
var _19186__$1 = this;return self__.meta19185;
});
domina.events.t19184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19186,meta19185__$1){var self__ = this;
var _19186__$1 = this;return (new domina.events.t19184(self__.evt,self__.f,self__.create_listener_function,meta19185__$1));
});
domina.events.__GT_t19184 = (function __GT_t19184(evt__$1,f__$1,create_listener_function__$1,meta19185){return (new domina.events.t19184(evt__$1,f__$1,create_listener_function__$1,meta19185));
});
}
return (new domina.events.t19184(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__19191(s__19192){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19192__$1 = s__19192;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19192__$1);if(temp__4126__auto__)
{var s__19192__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19192__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__19192__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__19194 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__19193 = (0);while(true){
if((i__19193 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__19193);cljs.core.chunk_append.call(null,b__19194,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19195 = (i__19193 + (1));
i__19193 = G__19195;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19194),iter__19191.call(null,cljs.core.chunk_rest.call(null,s__19192__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19194),null);
}
} else
{var node = cljs.core.first.call(null,s__19192__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19191.call(null,cljs.core.rest.call(null,s__19192__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__19204 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19205 = null;var count__19206 = (0);var i__19207 = (0);while(true){
if((i__19207 < count__19206))
{var node = cljs.core._nth.call(null,chunk__19205,i__19207);goog.events.removeAll(node);
{
var G__19212 = seq__19204;
var G__19213 = chunk__19205;
var G__19214 = count__19206;
var G__19215 = (i__19207 + (1));
seq__19204 = G__19212;
chunk__19205 = G__19213;
count__19206 = G__19214;
i__19207 = G__19215;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19204);if(temp__4126__auto__)
{var seq__19204__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19204__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__19204__$1);{
var G__19216 = cljs.core.chunk_rest.call(null,seq__19204__$1);
var G__19217 = c__4299__auto__;
var G__19218 = cljs.core.count.call(null,c__4299__auto__);
var G__19219 = (0);
seq__19204 = G__19216;
chunk__19205 = G__19217;
count__19206 = G__19218;
i__19207 = G__19219;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19204__$1);goog.events.removeAll(node);
{
var G__19220 = cljs.core.next.call(null,seq__19204__$1);
var G__19221 = null;
var G__19222 = (0);
var G__19223 = (0);
seq__19204 = G__19220;
chunk__19205 = G__19221;
count__19206 = G__19222;
i__19207 = G__19223;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19208 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19209 = null;var count__19210 = (0);var i__19211 = (0);while(true){
if((i__19211 < count__19210))
{var node = cljs.core._nth.call(null,chunk__19209,i__19211);goog.events.removeAll(node,type__$1);
{
var G__19224 = seq__19208;
var G__19225 = chunk__19209;
var G__19226 = count__19210;
var G__19227 = (i__19211 + (1));
seq__19208 = G__19224;
chunk__19209 = G__19225;
count__19210 = G__19226;
i__19211 = G__19227;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19208);if(temp__4126__auto__)
{var seq__19208__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19208__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__19208__$1);{
var G__19228 = cljs.core.chunk_rest.call(null,seq__19208__$1);
var G__19229 = c__4299__auto__;
var G__19230 = cljs.core.count.call(null,c__4299__auto__);
var G__19231 = (0);
seq__19208 = G__19228;
chunk__19209 = G__19229;
count__19210 = G__19230;
i__19211 = G__19231;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19208__$1);goog.events.removeAll(node,type__$1);
{
var G__19232 = cljs.core.next.call(null,seq__19208__$1);
var G__19233 = null;
var G__19234 = (0);
var G__19235 = (0);
seq__19208 = G__19232;
chunk__19209 = G__19233;
count__19210 = G__19234;
i__19211 = G__19235;
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
var G__19236 = parent;
var G__19237 = cljs.core.cons.call(null,parent,so_far);
n = G__19236;
so_far = G__19237;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19246_19254 = cljs.core.seq.call(null,ancestors);var chunk__19247_19255 = null;var count__19248_19256 = (0);var i__19249_19257 = (0);while(true){
if((i__19249_19257 < count__19248_19256))
{var n_19258 = cljs.core._nth.call(null,chunk__19247_19255,i__19249_19257);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19258;
goog.events.fireListeners(n_19258,evt.type,true,evt);
}
{
var G__19259 = seq__19246_19254;
var G__19260 = chunk__19247_19255;
var G__19261 = count__19248_19256;
var G__19262 = (i__19249_19257 + (1));
seq__19246_19254 = G__19259;
chunk__19247_19255 = G__19260;
count__19248_19256 = G__19261;
i__19249_19257 = G__19262;
continue;
}
} else
{var temp__4126__auto___19263 = cljs.core.seq.call(null,seq__19246_19254);if(temp__4126__auto___19263)
{var seq__19246_19264__$1 = temp__4126__auto___19263;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19246_19264__$1))
{var c__4299__auto___19265 = cljs.core.chunk_first.call(null,seq__19246_19264__$1);{
var G__19266 = cljs.core.chunk_rest.call(null,seq__19246_19264__$1);
var G__19267 = c__4299__auto___19265;
var G__19268 = cljs.core.count.call(null,c__4299__auto___19265);
var G__19269 = (0);
seq__19246_19254 = G__19266;
chunk__19247_19255 = G__19267;
count__19248_19256 = G__19268;
i__19249_19257 = G__19269;
continue;
}
} else
{var n_19270 = cljs.core.first.call(null,seq__19246_19264__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19270;
goog.events.fireListeners(n_19270,evt.type,true,evt);
}
{
var G__19271 = cljs.core.next.call(null,seq__19246_19264__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__19246_19254 = G__19271;
chunk__19247_19255 = G__19272;
count__19248_19256 = G__19273;
i__19249_19257 = G__19274;
continue;
}
}
} else
{}
}
break;
}
var seq__19250_19275 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19251_19276 = null;var count__19252_19277 = (0);var i__19253_19278 = (0);while(true){
if((i__19253_19278 < count__19252_19277))
{var n_19279 = cljs.core._nth.call(null,chunk__19251_19276,i__19253_19278);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19279;
goog.events.fireListeners(n_19279,evt.type,false,evt);
}
{
var G__19280 = seq__19250_19275;
var G__19281 = chunk__19251_19276;
var G__19282 = count__19252_19277;
var G__19283 = (i__19253_19278 + (1));
seq__19250_19275 = G__19280;
chunk__19251_19276 = G__19281;
count__19252_19277 = G__19282;
i__19253_19278 = G__19283;
continue;
}
} else
{var temp__4126__auto___19284 = cljs.core.seq.call(null,seq__19250_19275);if(temp__4126__auto___19284)
{var seq__19250_19285__$1 = temp__4126__auto___19284;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19250_19285__$1))
{var c__4299__auto___19286 = cljs.core.chunk_first.call(null,seq__19250_19285__$1);{
var G__19287 = cljs.core.chunk_rest.call(null,seq__19250_19285__$1);
var G__19288 = c__4299__auto___19286;
var G__19289 = cljs.core.count.call(null,c__4299__auto___19286);
var G__19290 = (0);
seq__19250_19275 = G__19287;
chunk__19251_19276 = G__19288;
count__19252_19277 = G__19289;
i__19253_19278 = G__19290;
continue;
}
} else
{var n_19291 = cljs.core.first.call(null,seq__19250_19285__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19291;
goog.events.fireListeners(n_19291,evt.type,false,evt);
}
{
var G__19292 = cljs.core.next.call(null,seq__19250_19285__$1);
var G__19293 = null;
var G__19294 = (0);
var G__19295 = (0);
seq__19250_19275 = G__19292;
chunk__19251_19276 = G__19293;
count__19252_19277 = G__19294;
i__19253_19278 = G__19295;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19302_19308 = cljs.core.seq.call(null,evt_map);var chunk__19303_19309 = null;var count__19304_19310 = (0);var i__19305_19311 = (0);while(true){
if((i__19305_19311 < count__19304_19310))
{var vec__19306_19312 = cljs.core._nth.call(null,chunk__19303_19309,i__19305_19311);var k_19313 = cljs.core.nth.call(null,vec__19306_19312,(0),null);var v_19314 = cljs.core.nth.call(null,vec__19306_19312,(1),null);(evt[k_19313] = v_19314);
{
var G__19315 = seq__19302_19308;
var G__19316 = chunk__19303_19309;
var G__19317 = count__19304_19310;
var G__19318 = (i__19305_19311 + (1));
seq__19302_19308 = G__19315;
chunk__19303_19309 = G__19316;
count__19304_19310 = G__19317;
i__19305_19311 = G__19318;
continue;
}
} else
{var temp__4126__auto___19319 = cljs.core.seq.call(null,seq__19302_19308);if(temp__4126__auto___19319)
{var seq__19302_19320__$1 = temp__4126__auto___19319;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19302_19320__$1))
{var c__4299__auto___19321 = cljs.core.chunk_first.call(null,seq__19302_19320__$1);{
var G__19322 = cljs.core.chunk_rest.call(null,seq__19302_19320__$1);
var G__19323 = c__4299__auto___19321;
var G__19324 = cljs.core.count.call(null,c__4299__auto___19321);
var G__19325 = (0);
seq__19302_19308 = G__19322;
chunk__19303_19309 = G__19323;
count__19304_19310 = G__19324;
i__19305_19311 = G__19325;
continue;
}
} else
{var vec__19307_19326 = cljs.core.first.call(null,seq__19302_19320__$1);var k_19327 = cljs.core.nth.call(null,vec__19307_19326,(0),null);var v_19328 = cljs.core.nth.call(null,vec__19307_19326,(1),null);(evt[k_19327] = v_19328);
{
var G__19329 = cljs.core.next.call(null,seq__19302_19320__$1);
var G__19330 = null;
var G__19331 = (0);
var G__19332 = (0);
seq__19302_19308 = G__19329;
chunk__19303_19309 = G__19330;
count__19304_19310 = G__19331;
i__19305_19311 = G__19332;
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
return (function (p1__19333_SHARP_){return goog.events.getListeners(p1__19333_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
