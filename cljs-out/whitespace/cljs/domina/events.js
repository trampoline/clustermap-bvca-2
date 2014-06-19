// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj51102 = {};return obj51102;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.prevent_default[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.prevent_default["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.current_target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.current_target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.event_type[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.event_type["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.raw_event[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.raw_event["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t51106 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t51106 = (function (evt,f,create_listener_function,meta51107){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta51107 = meta51107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t51106.cljs$lang$type = true;
domina.events.t51106.cljs$lang$ctorStr = "domina.events/t51106";
domina.events.t51106.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"domina.events/t51106");
});
domina.events.t51106.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t51106.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3539__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return not_found;
}
});
domina.events.t51106.prototype.domina$events$Event$ = true;
domina.events.t51106.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t51106.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t51106.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t51106.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t51106.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t51106.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t51106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51108){var self__ = this;
var _51108__$1 = this;return self__.meta51107;
});
domina.events.t51106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51108,meta51107__$1){var self__ = this;
var _51108__$1 = this;return (new domina.events.t51106(self__.evt,self__.f,self__.create_listener_function,meta51107__$1));
});
domina.events.__GT_t51106 = (function __GT_t51106(evt__$1,f__$1,create_listener_function__$1,meta51107){return (new domina.events.t51106(evt__$1,f__$1,create_listener_function__$1,meta51107));
});
}
return (new domina.events.t51106(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4264__auto__ = ((function (f,t){
return (function iter__51113(s__51114){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__51114__$1 = s__51114;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51114__$1);if(temp__4126__auto__)
{var s__51114__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51114__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__51114__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__51116 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__51115 = 0;while(true){
if((i__51115 < size__4263__auto__))
{var node = cljs.core._nth.call(null,c__4262__auto__,i__51115);cljs.core.chunk_append.call(null,b__51116,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__51117 = (i__51115 + 1);
i__51115 = G__51117;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51116),iter__51113.call(null,cljs.core.chunk_rest.call(null,s__51114__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51116),null);
}
} else
{var node = cljs.core.first.call(null,s__51114__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__51113.call(null,cljs.core.rest.call(null,s__51114__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4264__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__51126 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51127 = null;var count__51128 = 0;var i__51129 = 0;while(true){
if((i__51129 < count__51128))
{var node = cljs.core._nth.call(null,chunk__51127,i__51129);goog.events.removeAll(node);
{
var G__51134 = seq__51126;
var G__51135 = chunk__51127;
var G__51136 = count__51128;
var G__51137 = (i__51129 + 1);
seq__51126 = G__51134;
chunk__51127 = G__51135;
count__51128 = G__51136;
i__51129 = G__51137;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51126);if(temp__4126__auto__)
{var seq__51126__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51126__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__51126__$1);{
var G__51138 = cljs.core.chunk_rest.call(null,seq__51126__$1);
var G__51139 = c__4295__auto__;
var G__51140 = cljs.core.count.call(null,c__4295__auto__);
var G__51141 = 0;
seq__51126 = G__51138;
chunk__51127 = G__51139;
count__51128 = G__51140;
i__51129 = G__51141;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__51126__$1);goog.events.removeAll(node);
{
var G__51142 = cljs.core.next.call(null,seq__51126__$1);
var G__51143 = null;
var G__51144 = 0;
var G__51145 = 0;
seq__51126 = G__51142;
chunk__51127 = G__51143;
count__51128 = G__51144;
i__51129 = G__51145;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__51130 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__51131 = null;var count__51132 = 0;var i__51133 = 0;while(true){
if((i__51133 < count__51132))
{var node = cljs.core._nth.call(null,chunk__51131,i__51133);goog.events.removeAll(node,type__$1);
{
var G__51146 = seq__51130;
var G__51147 = chunk__51131;
var G__51148 = count__51132;
var G__51149 = (i__51133 + 1);
seq__51130 = G__51146;
chunk__51131 = G__51147;
count__51132 = G__51148;
i__51133 = G__51149;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51130);if(temp__4126__auto__)
{var seq__51130__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51130__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__51130__$1);{
var G__51150 = cljs.core.chunk_rest.call(null,seq__51130__$1);
var G__51151 = c__4295__auto__;
var G__51152 = cljs.core.count.call(null,c__4295__auto__);
var G__51153 = 0;
seq__51130 = G__51150;
chunk__51131 = G__51151;
count__51132 = G__51152;
i__51133 = G__51153;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__51130__$1);goog.events.removeAll(node,type__$1);
{
var G__51154 = cljs.core.next.call(null,seq__51130__$1);
var G__51155 = null;
var G__51156 = 0;
var G__51157 = 0;
seq__51130 = G__51154;
chunk__51131 = G__51155;
count__51132 = G__51156;
i__51133 = G__51157;
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
var G__51158 = parent;
var G__51159 = cljs.core.cons.call(null,parent,so_far);
n = G__51158;
so_far = G__51159;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__51168_51176 = cljs.core.seq.call(null,ancestors);var chunk__51169_51177 = null;var count__51170_51178 = 0;var i__51171_51179 = 0;while(true){
if((i__51171_51179 < count__51170_51178))
{var n_51180 = cljs.core._nth.call(null,chunk__51169_51177,i__51171_51179);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51180;
goog.events.fireListeners(n_51180,evt.type,true,evt);
}
{
var G__51181 = seq__51168_51176;
var G__51182 = chunk__51169_51177;
var G__51183 = count__51170_51178;
var G__51184 = (i__51171_51179 + 1);
seq__51168_51176 = G__51181;
chunk__51169_51177 = G__51182;
count__51170_51178 = G__51183;
i__51171_51179 = G__51184;
continue;
}
} else
{var temp__4126__auto___51185 = cljs.core.seq.call(null,seq__51168_51176);if(temp__4126__auto___51185)
{var seq__51168_51186__$1 = temp__4126__auto___51185;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51168_51186__$1))
{var c__4295__auto___51187 = cljs.core.chunk_first.call(null,seq__51168_51186__$1);{
var G__51188 = cljs.core.chunk_rest.call(null,seq__51168_51186__$1);
var G__51189 = c__4295__auto___51187;
var G__51190 = cljs.core.count.call(null,c__4295__auto___51187);
var G__51191 = 0;
seq__51168_51176 = G__51188;
chunk__51169_51177 = G__51189;
count__51170_51178 = G__51190;
i__51171_51179 = G__51191;
continue;
}
} else
{var n_51192 = cljs.core.first.call(null,seq__51168_51186__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51192;
goog.events.fireListeners(n_51192,evt.type,true,evt);
}
{
var G__51193 = cljs.core.next.call(null,seq__51168_51186__$1);
var G__51194 = null;
var G__51195 = 0;
var G__51196 = 0;
seq__51168_51176 = G__51193;
chunk__51169_51177 = G__51194;
count__51170_51178 = G__51195;
i__51171_51179 = G__51196;
continue;
}
}
} else
{}
}
break;
}
var seq__51172_51197 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__51173_51198 = null;var count__51174_51199 = 0;var i__51175_51200 = 0;while(true){
if((i__51175_51200 < count__51174_51199))
{var n_51201 = cljs.core._nth.call(null,chunk__51173_51198,i__51175_51200);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51201;
goog.events.fireListeners(n_51201,evt.type,false,evt);
}
{
var G__51202 = seq__51172_51197;
var G__51203 = chunk__51173_51198;
var G__51204 = count__51174_51199;
var G__51205 = (i__51175_51200 + 1);
seq__51172_51197 = G__51202;
chunk__51173_51198 = G__51203;
count__51174_51199 = G__51204;
i__51175_51200 = G__51205;
continue;
}
} else
{var temp__4126__auto___51206 = cljs.core.seq.call(null,seq__51172_51197);if(temp__4126__auto___51206)
{var seq__51172_51207__$1 = temp__4126__auto___51206;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51172_51207__$1))
{var c__4295__auto___51208 = cljs.core.chunk_first.call(null,seq__51172_51207__$1);{
var G__51209 = cljs.core.chunk_rest.call(null,seq__51172_51207__$1);
var G__51210 = c__4295__auto___51208;
var G__51211 = cljs.core.count.call(null,c__4295__auto___51208);
var G__51212 = 0;
seq__51172_51197 = G__51209;
chunk__51173_51198 = G__51210;
count__51174_51199 = G__51211;
i__51175_51200 = G__51212;
continue;
}
} else
{var n_51213 = cljs.core.first.call(null,seq__51172_51207__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_51213;
goog.events.fireListeners(n_51213,evt.type,false,evt);
}
{
var G__51214 = cljs.core.next.call(null,seq__51172_51207__$1);
var G__51215 = null;
var G__51216 = 0;
var G__51217 = 0;
seq__51172_51197 = G__51214;
chunk__51173_51198 = G__51215;
count__51174_51199 = G__51216;
i__51175_51200 = G__51217;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3527__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3527__auto__))
{return o.dispatchEvent;
} else
{return and__3527__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__51224_51230 = cljs.core.seq.call(null,evt_map);var chunk__51225_51231 = null;var count__51226_51232 = 0;var i__51227_51233 = 0;while(true){
if((i__51227_51233 < count__51226_51232))
{var vec__51228_51234 = cljs.core._nth.call(null,chunk__51225_51231,i__51227_51233);var k_51235 = cljs.core.nth.call(null,vec__51228_51234,0,null);var v_51236 = cljs.core.nth.call(null,vec__51228_51234,1,null);(evt[k_51235] = v_51236);
{
var G__51237 = seq__51224_51230;
var G__51238 = chunk__51225_51231;
var G__51239 = count__51226_51232;
var G__51240 = (i__51227_51233 + 1);
seq__51224_51230 = G__51237;
chunk__51225_51231 = G__51238;
count__51226_51232 = G__51239;
i__51227_51233 = G__51240;
continue;
}
} else
{var temp__4126__auto___51241 = cljs.core.seq.call(null,seq__51224_51230);if(temp__4126__auto___51241)
{var seq__51224_51242__$1 = temp__4126__auto___51241;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51224_51242__$1))
{var c__4295__auto___51243 = cljs.core.chunk_first.call(null,seq__51224_51242__$1);{
var G__51244 = cljs.core.chunk_rest.call(null,seq__51224_51242__$1);
var G__51245 = c__4295__auto___51243;
var G__51246 = cljs.core.count.call(null,c__4295__auto___51243);
var G__51247 = 0;
seq__51224_51230 = G__51244;
chunk__51225_51231 = G__51245;
count__51226_51232 = G__51246;
i__51227_51233 = G__51247;
continue;
}
} else
{var vec__51229_51248 = cljs.core.first.call(null,seq__51224_51242__$1);var k_51249 = cljs.core.nth.call(null,vec__51229_51248,0,null);var v_51250 = cljs.core.nth.call(null,vec__51229_51248,1,null);(evt[k_51249] = v_51250);
{
var G__51251 = cljs.core.next.call(null,seq__51224_51242__$1);
var G__51252 = null;
var G__51253 = 0;
var G__51254 = 0;
seq__51224_51230 = G__51251;
chunk__51225_51231 = G__51252;
count__51226_51232 = G__51253;
i__51227_51233 = G__51254;
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
return (function (p1__51255_SHARP_){return goog.events.getListeners(p1__51255_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
