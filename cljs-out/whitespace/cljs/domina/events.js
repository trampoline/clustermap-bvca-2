// Compiled by ClojureScript 0.0-2261
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18496 = {};return obj18496;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18500 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18500 = (function (evt,f,create_listener_function,meta18501){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18501 = meta18501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18500.cljs$lang$type = true;
domina.events.t18500.cljs$lang$ctorStr = "domina.events/t18500";
domina.events.t18500.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t18500");
});
domina.events.t18500.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18500.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t18500.prototype.domina$events$Event$ = true;
domina.events.t18500.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18500.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18500.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18500.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18500.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18500.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18502){var self__ = this;
var _18502__$1 = this;return self__.meta18501;
});
domina.events.t18500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18502,meta18501__$1){var self__ = this;
var _18502__$1 = this;return (new domina.events.t18500(self__.evt,self__.f,self__.create_listener_function,meta18501__$1));
});
domina.events.__GT_t18500 = (function __GT_t18500(evt__$1,f__$1,create_listener_function__$1,meta18501){return (new domina.events.t18500(evt__$1,f__$1,create_listener_function__$1,meta18501));
});
}
return (new domina.events.t18500(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__18507(s__18508){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__18508__$1 = s__18508;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18508__$1);if(temp__4126__auto__)
{var s__18508__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18508__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__18508__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__18510 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__18509 = (0);while(true){
if((i__18509 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__18509);cljs.core.chunk_append.call(null,b__18510,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18511 = (i__18509 + (1));
i__18509 = G__18511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18510),iter__18507.call(null,cljs.core.chunk_rest.call(null,s__18508__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18510),null);
}
} else
{var node = cljs.core.first.call(null,s__18508__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18507.call(null,cljs.core.rest.call(null,s__18508__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__18520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18521 = null;var count__18522 = (0);var i__18523 = (0);while(true){
if((i__18523 < count__18522))
{var node = cljs.core._nth.call(null,chunk__18521,i__18523);goog.events.removeAll(node);
{
var G__18528 = seq__18520;
var G__18529 = chunk__18521;
var G__18530 = count__18522;
var G__18531 = (i__18523 + (1));
seq__18520 = G__18528;
chunk__18521 = G__18529;
count__18522 = G__18530;
i__18523 = G__18531;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18520);if(temp__4126__auto__)
{var seq__18520__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18520__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18520__$1);{
var G__18532 = cljs.core.chunk_rest.call(null,seq__18520__$1);
var G__18533 = c__4299__auto__;
var G__18534 = cljs.core.count.call(null,c__4299__auto__);
var G__18535 = (0);
seq__18520 = G__18532;
chunk__18521 = G__18533;
count__18522 = G__18534;
i__18523 = G__18535;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18520__$1);goog.events.removeAll(node);
{
var G__18536 = cljs.core.next.call(null,seq__18520__$1);
var G__18537 = null;
var G__18538 = (0);
var G__18539 = (0);
seq__18520 = G__18536;
chunk__18521 = G__18537;
count__18522 = G__18538;
i__18523 = G__18539;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18524 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18525 = null;var count__18526 = (0);var i__18527 = (0);while(true){
if((i__18527 < count__18526))
{var node = cljs.core._nth.call(null,chunk__18525,i__18527);goog.events.removeAll(node,type__$1);
{
var G__18540 = seq__18524;
var G__18541 = chunk__18525;
var G__18542 = count__18526;
var G__18543 = (i__18527 + (1));
seq__18524 = G__18540;
chunk__18525 = G__18541;
count__18526 = G__18542;
i__18527 = G__18543;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18524);if(temp__4126__auto__)
{var seq__18524__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18524__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18524__$1);{
var G__18544 = cljs.core.chunk_rest.call(null,seq__18524__$1);
var G__18545 = c__4299__auto__;
var G__18546 = cljs.core.count.call(null,c__4299__auto__);
var G__18547 = (0);
seq__18524 = G__18544;
chunk__18525 = G__18545;
count__18526 = G__18546;
i__18527 = G__18547;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18524__$1);goog.events.removeAll(node,type__$1);
{
var G__18548 = cljs.core.next.call(null,seq__18524__$1);
var G__18549 = null;
var G__18550 = (0);
var G__18551 = (0);
seq__18524 = G__18548;
chunk__18525 = G__18549;
count__18526 = G__18550;
i__18527 = G__18551;
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
var G__18552 = parent;
var G__18553 = cljs.core.cons.call(null,parent,so_far);
n = G__18552;
so_far = G__18553;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18562_18570 = cljs.core.seq.call(null,ancestors);var chunk__18563_18571 = null;var count__18564_18572 = (0);var i__18565_18573 = (0);while(true){
if((i__18565_18573 < count__18564_18572))
{var n_18574 = cljs.core._nth.call(null,chunk__18563_18571,i__18565_18573);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18574;
goog.events.fireListeners(n_18574,evt.type,true,evt);
}
{
var G__18575 = seq__18562_18570;
var G__18576 = chunk__18563_18571;
var G__18577 = count__18564_18572;
var G__18578 = (i__18565_18573 + (1));
seq__18562_18570 = G__18575;
chunk__18563_18571 = G__18576;
count__18564_18572 = G__18577;
i__18565_18573 = G__18578;
continue;
}
} else
{var temp__4126__auto___18579 = cljs.core.seq.call(null,seq__18562_18570);if(temp__4126__auto___18579)
{var seq__18562_18580__$1 = temp__4126__auto___18579;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18562_18580__$1))
{var c__4299__auto___18581 = cljs.core.chunk_first.call(null,seq__18562_18580__$1);{
var G__18582 = cljs.core.chunk_rest.call(null,seq__18562_18580__$1);
var G__18583 = c__4299__auto___18581;
var G__18584 = cljs.core.count.call(null,c__4299__auto___18581);
var G__18585 = (0);
seq__18562_18570 = G__18582;
chunk__18563_18571 = G__18583;
count__18564_18572 = G__18584;
i__18565_18573 = G__18585;
continue;
}
} else
{var n_18586 = cljs.core.first.call(null,seq__18562_18580__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18586;
goog.events.fireListeners(n_18586,evt.type,true,evt);
}
{
var G__18587 = cljs.core.next.call(null,seq__18562_18580__$1);
var G__18588 = null;
var G__18589 = (0);
var G__18590 = (0);
seq__18562_18570 = G__18587;
chunk__18563_18571 = G__18588;
count__18564_18572 = G__18589;
i__18565_18573 = G__18590;
continue;
}
}
} else
{}
}
break;
}
var seq__18566_18591 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18567_18592 = null;var count__18568_18593 = (0);var i__18569_18594 = (0);while(true){
if((i__18569_18594 < count__18568_18593))
{var n_18595 = cljs.core._nth.call(null,chunk__18567_18592,i__18569_18594);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18595;
goog.events.fireListeners(n_18595,evt.type,false,evt);
}
{
var G__18596 = seq__18566_18591;
var G__18597 = chunk__18567_18592;
var G__18598 = count__18568_18593;
var G__18599 = (i__18569_18594 + (1));
seq__18566_18591 = G__18596;
chunk__18567_18592 = G__18597;
count__18568_18593 = G__18598;
i__18569_18594 = G__18599;
continue;
}
} else
{var temp__4126__auto___18600 = cljs.core.seq.call(null,seq__18566_18591);if(temp__4126__auto___18600)
{var seq__18566_18601__$1 = temp__4126__auto___18600;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18566_18601__$1))
{var c__4299__auto___18602 = cljs.core.chunk_first.call(null,seq__18566_18601__$1);{
var G__18603 = cljs.core.chunk_rest.call(null,seq__18566_18601__$1);
var G__18604 = c__4299__auto___18602;
var G__18605 = cljs.core.count.call(null,c__4299__auto___18602);
var G__18606 = (0);
seq__18566_18591 = G__18603;
chunk__18567_18592 = G__18604;
count__18568_18593 = G__18605;
i__18569_18594 = G__18606;
continue;
}
} else
{var n_18607 = cljs.core.first.call(null,seq__18566_18601__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18607;
goog.events.fireListeners(n_18607,evt.type,false,evt);
}
{
var G__18608 = cljs.core.next.call(null,seq__18566_18601__$1);
var G__18609 = null;
var G__18610 = (0);
var G__18611 = (0);
seq__18566_18591 = G__18608;
chunk__18567_18592 = G__18609;
count__18568_18593 = G__18610;
i__18569_18594 = G__18611;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__18618_18624 = cljs.core.seq.call(null,evt_map);var chunk__18619_18625 = null;var count__18620_18626 = (0);var i__18621_18627 = (0);while(true){
if((i__18621_18627 < count__18620_18626))
{var vec__18622_18628 = cljs.core._nth.call(null,chunk__18619_18625,i__18621_18627);var k_18629 = cljs.core.nth.call(null,vec__18622_18628,(0),null);var v_18630 = cljs.core.nth.call(null,vec__18622_18628,(1),null);(evt[k_18629] = v_18630);
{
var G__18631 = seq__18618_18624;
var G__18632 = chunk__18619_18625;
var G__18633 = count__18620_18626;
var G__18634 = (i__18621_18627 + (1));
seq__18618_18624 = G__18631;
chunk__18619_18625 = G__18632;
count__18620_18626 = G__18633;
i__18621_18627 = G__18634;
continue;
}
} else
{var temp__4126__auto___18635 = cljs.core.seq.call(null,seq__18618_18624);if(temp__4126__auto___18635)
{var seq__18618_18636__$1 = temp__4126__auto___18635;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18618_18636__$1))
{var c__4299__auto___18637 = cljs.core.chunk_first.call(null,seq__18618_18636__$1);{
var G__18638 = cljs.core.chunk_rest.call(null,seq__18618_18636__$1);
var G__18639 = c__4299__auto___18637;
var G__18640 = cljs.core.count.call(null,c__4299__auto___18637);
var G__18641 = (0);
seq__18618_18624 = G__18638;
chunk__18619_18625 = G__18639;
count__18620_18626 = G__18640;
i__18621_18627 = G__18641;
continue;
}
} else
{var vec__18623_18642 = cljs.core.first.call(null,seq__18618_18636__$1);var k_18643 = cljs.core.nth.call(null,vec__18623_18642,(0),null);var v_18644 = cljs.core.nth.call(null,vec__18623_18642,(1),null);(evt[k_18643] = v_18644);
{
var G__18645 = cljs.core.next.call(null,seq__18618_18636__$1);
var G__18646 = null;
var G__18647 = (0);
var G__18648 = (0);
seq__18618_18624 = G__18645;
chunk__18619_18625 = G__18646;
count__18620_18626 = G__18647;
i__18621_18627 = G__18648;
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
return (function (p1__18649_SHARP_){return goog.events.getListeners(p1__18649_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
