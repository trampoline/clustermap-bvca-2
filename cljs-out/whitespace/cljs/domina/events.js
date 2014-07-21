// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19175 = {};return obj19175;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19179 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19179 = (function (evt,f,create_listener_function,meta19180){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19180 = meta19180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19179.cljs$lang$type = true;
domina.events.t19179.cljs$lang$ctorStr = "domina.events/t19179";
domina.events.t19179.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t19179");
});
domina.events.t19179.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19179.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t19179.prototype.domina$events$Event$ = true;
domina.events.t19179.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19179.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19179.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19179.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19179.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19179.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19181){var self__ = this;
var _19181__$1 = this;return self__.meta19180;
});
domina.events.t19179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19181,meta19180__$1){var self__ = this;
var _19181__$1 = this;return (new domina.events.t19179(self__.evt,self__.f,self__.create_listener_function,meta19180__$1));
});
domina.events.__GT_t19179 = (function __GT_t19179(evt__$1,f__$1,create_listener_function__$1,meta19180){return (new domina.events.t19179(evt__$1,f__$1,create_listener_function__$1,meta19180));
});
}
return (new domina.events.t19179(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__19186(s__19187){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__19187__$1 = s__19187;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__19187__$1);if(temp__4126__auto__)
{var s__19187__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19187__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__19187__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__19189 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__19188 = (0);while(true){
if((i__19188 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__19188);cljs.core.chunk_append.call(null,b__19189,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19190 = (i__19188 + (1));
i__19188 = G__19190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19189),iter__19186.call(null,cljs.core.chunk_rest.call(null,s__19187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19189),null);
}
} else
{var node = cljs.core.first.call(null,s__19187__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19186.call(null,cljs.core.rest.call(null,s__19187__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__19199 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19200 = null;var count__19201 = (0);var i__19202 = (0);while(true){
if((i__19202 < count__19201))
{var node = cljs.core._nth.call(null,chunk__19200,i__19202);goog.events.removeAll(node);
{
var G__19207 = seq__19199;
var G__19208 = chunk__19200;
var G__19209 = count__19201;
var G__19210 = (i__19202 + (1));
seq__19199 = G__19207;
chunk__19200 = G__19208;
count__19201 = G__19209;
i__19202 = G__19210;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19199);if(temp__4126__auto__)
{var seq__19199__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19199__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__19199__$1);{
var G__19211 = cljs.core.chunk_rest.call(null,seq__19199__$1);
var G__19212 = c__4299__auto__;
var G__19213 = cljs.core.count.call(null,c__4299__auto__);
var G__19214 = (0);
seq__19199 = G__19211;
chunk__19200 = G__19212;
count__19201 = G__19213;
i__19202 = G__19214;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19199__$1);goog.events.removeAll(node);
{
var G__19215 = cljs.core.next.call(null,seq__19199__$1);
var G__19216 = null;
var G__19217 = (0);
var G__19218 = (0);
seq__19199 = G__19215;
chunk__19200 = G__19216;
count__19201 = G__19217;
i__19202 = G__19218;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19203 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19204 = null;var count__19205 = (0);var i__19206 = (0);while(true){
if((i__19206 < count__19205))
{var node = cljs.core._nth.call(null,chunk__19204,i__19206);goog.events.removeAll(node,type__$1);
{
var G__19219 = seq__19203;
var G__19220 = chunk__19204;
var G__19221 = count__19205;
var G__19222 = (i__19206 + (1));
seq__19203 = G__19219;
chunk__19204 = G__19220;
count__19205 = G__19221;
i__19206 = G__19222;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19203);if(temp__4126__auto__)
{var seq__19203__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19203__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__19203__$1);{
var G__19223 = cljs.core.chunk_rest.call(null,seq__19203__$1);
var G__19224 = c__4299__auto__;
var G__19225 = cljs.core.count.call(null,c__4299__auto__);
var G__19226 = (0);
seq__19203 = G__19223;
chunk__19204 = G__19224;
count__19205 = G__19225;
i__19206 = G__19226;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19203__$1);goog.events.removeAll(node,type__$1);
{
var G__19227 = cljs.core.next.call(null,seq__19203__$1);
var G__19228 = null;
var G__19229 = (0);
var G__19230 = (0);
seq__19203 = G__19227;
chunk__19204 = G__19228;
count__19205 = G__19229;
i__19206 = G__19230;
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
var G__19231 = parent;
var G__19232 = cljs.core.cons.call(null,parent,so_far);
n = G__19231;
so_far = G__19232;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19241_19249 = cljs.core.seq.call(null,ancestors);var chunk__19242_19250 = null;var count__19243_19251 = (0);var i__19244_19252 = (0);while(true){
if((i__19244_19252 < count__19243_19251))
{var n_19253 = cljs.core._nth.call(null,chunk__19242_19250,i__19244_19252);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19253;
goog.events.fireListeners(n_19253,evt.type,true,evt);
}
{
var G__19254 = seq__19241_19249;
var G__19255 = chunk__19242_19250;
var G__19256 = count__19243_19251;
var G__19257 = (i__19244_19252 + (1));
seq__19241_19249 = G__19254;
chunk__19242_19250 = G__19255;
count__19243_19251 = G__19256;
i__19244_19252 = G__19257;
continue;
}
} else
{var temp__4126__auto___19258 = cljs.core.seq.call(null,seq__19241_19249);if(temp__4126__auto___19258)
{var seq__19241_19259__$1 = temp__4126__auto___19258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19241_19259__$1))
{var c__4299__auto___19260 = cljs.core.chunk_first.call(null,seq__19241_19259__$1);{
var G__19261 = cljs.core.chunk_rest.call(null,seq__19241_19259__$1);
var G__19262 = c__4299__auto___19260;
var G__19263 = cljs.core.count.call(null,c__4299__auto___19260);
var G__19264 = (0);
seq__19241_19249 = G__19261;
chunk__19242_19250 = G__19262;
count__19243_19251 = G__19263;
i__19244_19252 = G__19264;
continue;
}
} else
{var n_19265 = cljs.core.first.call(null,seq__19241_19259__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19265;
goog.events.fireListeners(n_19265,evt.type,true,evt);
}
{
var G__19266 = cljs.core.next.call(null,seq__19241_19259__$1);
var G__19267 = null;
var G__19268 = (0);
var G__19269 = (0);
seq__19241_19249 = G__19266;
chunk__19242_19250 = G__19267;
count__19243_19251 = G__19268;
i__19244_19252 = G__19269;
continue;
}
}
} else
{}
}
break;
}
var seq__19245_19270 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19246_19271 = null;var count__19247_19272 = (0);var i__19248_19273 = (0);while(true){
if((i__19248_19273 < count__19247_19272))
{var n_19274 = cljs.core._nth.call(null,chunk__19246_19271,i__19248_19273);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19274;
goog.events.fireListeners(n_19274,evt.type,false,evt);
}
{
var G__19275 = seq__19245_19270;
var G__19276 = chunk__19246_19271;
var G__19277 = count__19247_19272;
var G__19278 = (i__19248_19273 + (1));
seq__19245_19270 = G__19275;
chunk__19246_19271 = G__19276;
count__19247_19272 = G__19277;
i__19248_19273 = G__19278;
continue;
}
} else
{var temp__4126__auto___19279 = cljs.core.seq.call(null,seq__19245_19270);if(temp__4126__auto___19279)
{var seq__19245_19280__$1 = temp__4126__auto___19279;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19245_19280__$1))
{var c__4299__auto___19281 = cljs.core.chunk_first.call(null,seq__19245_19280__$1);{
var G__19282 = cljs.core.chunk_rest.call(null,seq__19245_19280__$1);
var G__19283 = c__4299__auto___19281;
var G__19284 = cljs.core.count.call(null,c__4299__auto___19281);
var G__19285 = (0);
seq__19245_19270 = G__19282;
chunk__19246_19271 = G__19283;
count__19247_19272 = G__19284;
i__19248_19273 = G__19285;
continue;
}
} else
{var n_19286 = cljs.core.first.call(null,seq__19245_19280__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19286;
goog.events.fireListeners(n_19286,evt.type,false,evt);
}
{
var G__19287 = cljs.core.next.call(null,seq__19245_19280__$1);
var G__19288 = null;
var G__19289 = (0);
var G__19290 = (0);
seq__19245_19270 = G__19287;
chunk__19246_19271 = G__19288;
count__19247_19272 = G__19289;
i__19248_19273 = G__19290;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19297_19303 = cljs.core.seq.call(null,evt_map);var chunk__19298_19304 = null;var count__19299_19305 = (0);var i__19300_19306 = (0);while(true){
if((i__19300_19306 < count__19299_19305))
{var vec__19301_19307 = cljs.core._nth.call(null,chunk__19298_19304,i__19300_19306);var k_19308 = cljs.core.nth.call(null,vec__19301_19307,(0),null);var v_19309 = cljs.core.nth.call(null,vec__19301_19307,(1),null);(evt[k_19308] = v_19309);
{
var G__19310 = seq__19297_19303;
var G__19311 = chunk__19298_19304;
var G__19312 = count__19299_19305;
var G__19313 = (i__19300_19306 + (1));
seq__19297_19303 = G__19310;
chunk__19298_19304 = G__19311;
count__19299_19305 = G__19312;
i__19300_19306 = G__19313;
continue;
}
} else
{var temp__4126__auto___19314 = cljs.core.seq.call(null,seq__19297_19303);if(temp__4126__auto___19314)
{var seq__19297_19315__$1 = temp__4126__auto___19314;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19297_19315__$1))
{var c__4299__auto___19316 = cljs.core.chunk_first.call(null,seq__19297_19315__$1);{
var G__19317 = cljs.core.chunk_rest.call(null,seq__19297_19315__$1);
var G__19318 = c__4299__auto___19316;
var G__19319 = cljs.core.count.call(null,c__4299__auto___19316);
var G__19320 = (0);
seq__19297_19303 = G__19317;
chunk__19298_19304 = G__19318;
count__19299_19305 = G__19319;
i__19300_19306 = G__19320;
continue;
}
} else
{var vec__19302_19321 = cljs.core.first.call(null,seq__19297_19315__$1);var k_19322 = cljs.core.nth.call(null,vec__19302_19321,(0),null);var v_19323 = cljs.core.nth.call(null,vec__19302_19321,(1),null);(evt[k_19322] = v_19323);
{
var G__19324 = cljs.core.next.call(null,seq__19297_19315__$1);
var G__19325 = null;
var G__19326 = (0);
var G__19327 = (0);
seq__19297_19303 = G__19324;
chunk__19298_19304 = G__19325;
count__19299_19305 = G__19326;
i__19300_19306 = G__19327;
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
return (function (p1__19328_SHARP_){return goog.events.getListeners(p1__19328_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
