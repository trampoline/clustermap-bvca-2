// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj33137 = {};return obj33137;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t33141 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t33141 = (function (evt,f,create_listener_function,meta33142){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta33142 = meta33142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t33141.cljs$lang$type = true;
domina.events.t33141.cljs$lang$ctorStr = "domina.events/t33141";
domina.events.t33141.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t33141");
});
domina.events.t33141.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t33141.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t33141.prototype.domina$events$Event$ = true;
domina.events.t33141.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t33141.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t33141.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t33141.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t33141.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t33141.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t33141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33143){var self__ = this;
var _33143__$1 = this;return self__.meta33142;
});
domina.events.t33141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33143,meta33142__$1){var self__ = this;
var _33143__$1 = this;return (new domina.events.t33141(self__.evt,self__.f,self__.create_listener_function,meta33142__$1));
});
domina.events.__GT_t33141 = (function __GT_t33141(evt__$1,f__$1,create_listener_function__$1,meta33142){return (new domina.events.t33141(evt__$1,f__$1,create_listener_function__$1,meta33142));
});
}
return (new domina.events.t33141(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__33148(s__33149){return (new cljs.core.LazySeq(null,(function (){var s__33149__$1 = s__33149;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33149__$1);if(temp__4092__auto__)
{var s__33149__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33149__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__33149__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__33151 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__33150 = 0;while(true){
if((i__33150 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__33150);cljs.core.chunk_append.call(null,b__33151,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__33152 = (i__33150 + 1);
i__33150 = G__33152;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33151),iter__33148.call(null,cljs.core.chunk_rest.call(null,s__33149__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33151),null);
}
} else
{var node = cljs.core.first.call(null,s__33149__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__33148.call(null,cljs.core.rest.call(null,s__33149__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__33161 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33162 = null;var count__33163 = 0;var i__33164 = 0;while(true){
if((i__33164 < count__33163))
{var node = cljs.core._nth.call(null,chunk__33162,i__33164);goog.events.removeAll(node);
{
var G__33169 = seq__33161;
var G__33170 = chunk__33162;
var G__33171 = count__33163;
var G__33172 = (i__33164 + 1);
seq__33161 = G__33169;
chunk__33162 = G__33170;
count__33163 = G__33171;
i__33164 = G__33172;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33161);if(temp__4092__auto__)
{var seq__33161__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33161__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__33161__$1);{
var G__33173 = cljs.core.chunk_rest.call(null,seq__33161__$1);
var G__33174 = c__4015__auto__;
var G__33175 = cljs.core.count.call(null,c__4015__auto__);
var G__33176 = 0;
seq__33161 = G__33173;
chunk__33162 = G__33174;
count__33163 = G__33175;
i__33164 = G__33176;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__33161__$1);goog.events.removeAll(node);
{
var G__33177 = cljs.core.next.call(null,seq__33161__$1);
var G__33178 = null;
var G__33179 = 0;
var G__33180 = 0;
seq__33161 = G__33177;
chunk__33162 = G__33178;
count__33163 = G__33179;
i__33164 = G__33180;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__33165 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33166 = null;var count__33167 = 0;var i__33168 = 0;while(true){
if((i__33168 < count__33167))
{var node = cljs.core._nth.call(null,chunk__33166,i__33168);goog.events.removeAll(node,type__$1);
{
var G__33181 = seq__33165;
var G__33182 = chunk__33166;
var G__33183 = count__33167;
var G__33184 = (i__33168 + 1);
seq__33165 = G__33181;
chunk__33166 = G__33182;
count__33167 = G__33183;
i__33168 = G__33184;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33165);if(temp__4092__auto__)
{var seq__33165__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33165__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__33165__$1);{
var G__33185 = cljs.core.chunk_rest.call(null,seq__33165__$1);
var G__33186 = c__4015__auto__;
var G__33187 = cljs.core.count.call(null,c__4015__auto__);
var G__33188 = 0;
seq__33165 = G__33185;
chunk__33166 = G__33186;
count__33167 = G__33187;
i__33168 = G__33188;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__33165__$1);goog.events.removeAll(node,type__$1);
{
var G__33189 = cljs.core.next.call(null,seq__33165__$1);
var G__33190 = null;
var G__33191 = 0;
var G__33192 = 0;
seq__33165 = G__33189;
chunk__33166 = G__33190;
count__33167 = G__33191;
i__33168 = G__33192;
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
var G__33193 = parent;
var G__33194 = cljs.core.cons.call(null,parent,so_far);
n = G__33193;
so_far = G__33194;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__33203_33211 = cljs.core.seq.call(null,ancestors);var chunk__33204_33212 = null;var count__33205_33213 = 0;var i__33206_33214 = 0;while(true){
if((i__33206_33214 < count__33205_33213))
{var n_33215 = cljs.core._nth.call(null,chunk__33204_33212,i__33206_33214);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33215;
goog.events.fireListeners(n_33215,evt.type,true,evt);
}
{
var G__33216 = seq__33203_33211;
var G__33217 = chunk__33204_33212;
var G__33218 = count__33205_33213;
var G__33219 = (i__33206_33214 + 1);
seq__33203_33211 = G__33216;
chunk__33204_33212 = G__33217;
count__33205_33213 = G__33218;
i__33206_33214 = G__33219;
continue;
}
} else
{var temp__4092__auto___33220 = cljs.core.seq.call(null,seq__33203_33211);if(temp__4092__auto___33220)
{var seq__33203_33221__$1 = temp__4092__auto___33220;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33203_33221__$1))
{var c__4015__auto___33222 = cljs.core.chunk_first.call(null,seq__33203_33221__$1);{
var G__33223 = cljs.core.chunk_rest.call(null,seq__33203_33221__$1);
var G__33224 = c__4015__auto___33222;
var G__33225 = cljs.core.count.call(null,c__4015__auto___33222);
var G__33226 = 0;
seq__33203_33211 = G__33223;
chunk__33204_33212 = G__33224;
count__33205_33213 = G__33225;
i__33206_33214 = G__33226;
continue;
}
} else
{var n_33227 = cljs.core.first.call(null,seq__33203_33221__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33227;
goog.events.fireListeners(n_33227,evt.type,true,evt);
}
{
var G__33228 = cljs.core.next.call(null,seq__33203_33221__$1);
var G__33229 = null;
var G__33230 = 0;
var G__33231 = 0;
seq__33203_33211 = G__33228;
chunk__33204_33212 = G__33229;
count__33205_33213 = G__33230;
i__33206_33214 = G__33231;
continue;
}
}
} else
{}
}
break;
}
var seq__33207_33232 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__33208_33233 = null;var count__33209_33234 = 0;var i__33210_33235 = 0;while(true){
if((i__33210_33235 < count__33209_33234))
{var n_33236 = cljs.core._nth.call(null,chunk__33208_33233,i__33210_33235);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33236;
goog.events.fireListeners(n_33236,evt.type,false,evt);
}
{
var G__33237 = seq__33207_33232;
var G__33238 = chunk__33208_33233;
var G__33239 = count__33209_33234;
var G__33240 = (i__33210_33235 + 1);
seq__33207_33232 = G__33237;
chunk__33208_33233 = G__33238;
count__33209_33234 = G__33239;
i__33210_33235 = G__33240;
continue;
}
} else
{var temp__4092__auto___33241 = cljs.core.seq.call(null,seq__33207_33232);if(temp__4092__auto___33241)
{var seq__33207_33242__$1 = temp__4092__auto___33241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33207_33242__$1))
{var c__4015__auto___33243 = cljs.core.chunk_first.call(null,seq__33207_33242__$1);{
var G__33244 = cljs.core.chunk_rest.call(null,seq__33207_33242__$1);
var G__33245 = c__4015__auto___33243;
var G__33246 = cljs.core.count.call(null,c__4015__auto___33243);
var G__33247 = 0;
seq__33207_33232 = G__33244;
chunk__33208_33233 = G__33245;
count__33209_33234 = G__33246;
i__33210_33235 = G__33247;
continue;
}
} else
{var n_33248 = cljs.core.first.call(null,seq__33207_33242__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_33248;
goog.events.fireListeners(n_33248,evt.type,false,evt);
}
{
var G__33249 = cljs.core.next.call(null,seq__33207_33242__$1);
var G__33250 = null;
var G__33251 = 0;
var G__33252 = 0;
seq__33207_33232 = G__33249;
chunk__33208_33233 = G__33250;
count__33209_33234 = G__33251;
i__33210_33235 = G__33252;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__33259_33265 = cljs.core.seq.call(null,evt_map);var chunk__33260_33266 = null;var count__33261_33267 = 0;var i__33262_33268 = 0;while(true){
if((i__33262_33268 < count__33261_33267))
{var vec__33263_33269 = cljs.core._nth.call(null,chunk__33260_33266,i__33262_33268);var k_33270 = cljs.core.nth.call(null,vec__33263_33269,0,null);var v_33271 = cljs.core.nth.call(null,vec__33263_33269,1,null);(evt[k_33270] = v_33271);
{
var G__33272 = seq__33259_33265;
var G__33273 = chunk__33260_33266;
var G__33274 = count__33261_33267;
var G__33275 = (i__33262_33268 + 1);
seq__33259_33265 = G__33272;
chunk__33260_33266 = G__33273;
count__33261_33267 = G__33274;
i__33262_33268 = G__33275;
continue;
}
} else
{var temp__4092__auto___33276 = cljs.core.seq.call(null,seq__33259_33265);if(temp__4092__auto___33276)
{var seq__33259_33277__$1 = temp__4092__auto___33276;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33259_33277__$1))
{var c__4015__auto___33278 = cljs.core.chunk_first.call(null,seq__33259_33277__$1);{
var G__33279 = cljs.core.chunk_rest.call(null,seq__33259_33277__$1);
var G__33280 = c__4015__auto___33278;
var G__33281 = cljs.core.count.call(null,c__4015__auto___33278);
var G__33282 = 0;
seq__33259_33265 = G__33279;
chunk__33260_33266 = G__33280;
count__33261_33267 = G__33281;
i__33262_33268 = G__33282;
continue;
}
} else
{var vec__33264_33283 = cljs.core.first.call(null,seq__33259_33277__$1);var k_33284 = cljs.core.nth.call(null,vec__33264_33283,0,null);var v_33285 = cljs.core.nth.call(null,vec__33264_33283,1,null);(evt[k_33284] = v_33285);
{
var G__33286 = cljs.core.next.call(null,seq__33259_33277__$1);
var G__33287 = null;
var G__33288 = 0;
var G__33289 = 0;
seq__33259_33265 = G__33286;
chunk__33260_33266 = G__33287;
count__33261_33267 = G__33288;
i__33262_33268 = G__33289;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__33290_SHARP_){return goog.events.getListeners(p1__33290_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
