// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj18542 = {};return obj18542;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t18546 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t18546 = (function (evt,f,create_listener_function,meta18547){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta18547 = meta18547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t18546.cljs$lang$type = true;
domina.events.t18546.cljs$lang$ctorStr = "domina.events/t18546";
domina.events.t18546.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t18546");
});
domina.events.t18546.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t18546.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t18546.prototype.domina$events$Event$ = true;
domina.events.t18546.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t18546.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t18546.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t18546.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t18546.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t18546.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t18546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18548){var self__ = this;
var _18548__$1 = this;return self__.meta18547;
});
domina.events.t18546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18548,meta18547__$1){var self__ = this;
var _18548__$1 = this;return (new domina.events.t18546(self__.evt,self__.f,self__.create_listener_function,meta18547__$1));
});
domina.events.__GT_t18546 = (function __GT_t18546(evt__$1,f__$1,create_listener_function__$1,meta18547){return (new domina.events.t18546(evt__$1,f__$1,create_listener_function__$1,meta18547));
});
}
return (new domina.events.t18546(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__18553(s__18554){return (new cljs.core.LazySeq(null,(function (){var s__18554__$1 = s__18554;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__18554__$1);if(temp__4092__auto__)
{var s__18554__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18554__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__18554__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__18556 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__18555 = 0;while(true){
if((i__18555 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__18555);cljs.core.chunk_append.call(null,b__18556,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__18557 = (i__18555 + 1);
i__18555 = G__18557;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18556),iter__18553.call(null,cljs.core.chunk_rest.call(null,s__18554__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18556),null);
}
} else
{var node = cljs.core.first.call(null,s__18554__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__18553.call(null,cljs.core.rest.call(null,s__18554__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__18566 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18567 = null;var count__18568 = 0;var i__18569 = 0;while(true){
if((i__18569 < count__18568))
{var node = cljs.core._nth.call(null,chunk__18567,i__18569);goog.events.removeAll(node);
{
var G__18574 = seq__18566;
var G__18575 = chunk__18567;
var G__18576 = count__18568;
var G__18577 = (i__18569 + 1);
seq__18566 = G__18574;
chunk__18567 = G__18575;
count__18568 = G__18576;
i__18569 = G__18577;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18566);if(temp__4092__auto__)
{var seq__18566__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18566__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__18566__$1);{
var G__18578 = cljs.core.chunk_rest.call(null,seq__18566__$1);
var G__18579 = c__4015__auto__;
var G__18580 = cljs.core.count.call(null,c__4015__auto__);
var G__18581 = 0;
seq__18566 = G__18578;
chunk__18567 = G__18579;
count__18568 = G__18580;
i__18569 = G__18581;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18566__$1);goog.events.removeAll(node);
{
var G__18582 = cljs.core.next.call(null,seq__18566__$1);
var G__18583 = null;
var G__18584 = 0;
var G__18585 = 0;
seq__18566 = G__18582;
chunk__18567 = G__18583;
count__18568 = G__18584;
i__18569 = G__18585;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__18570 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18571 = null;var count__18572 = 0;var i__18573 = 0;while(true){
if((i__18573 < count__18572))
{var node = cljs.core._nth.call(null,chunk__18571,i__18573);goog.events.removeAll(node,type__$1);
{
var G__18586 = seq__18570;
var G__18587 = chunk__18571;
var G__18588 = count__18572;
var G__18589 = (i__18573 + 1);
seq__18570 = G__18586;
chunk__18571 = G__18587;
count__18572 = G__18588;
i__18573 = G__18589;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18570);if(temp__4092__auto__)
{var seq__18570__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18570__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__18570__$1);{
var G__18590 = cljs.core.chunk_rest.call(null,seq__18570__$1);
var G__18591 = c__4015__auto__;
var G__18592 = cljs.core.count.call(null,c__4015__auto__);
var G__18593 = 0;
seq__18570 = G__18590;
chunk__18571 = G__18591;
count__18572 = G__18592;
i__18573 = G__18593;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__18570__$1);goog.events.removeAll(node,type__$1);
{
var G__18594 = cljs.core.next.call(null,seq__18570__$1);
var G__18595 = null;
var G__18596 = 0;
var G__18597 = 0;
seq__18570 = G__18594;
chunk__18571 = G__18595;
count__18572 = G__18596;
i__18573 = G__18597;
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
var G__18598 = parent;
var G__18599 = cljs.core.cons.call(null,parent,so_far);
n = G__18598;
so_far = G__18599;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__18608_18616 = cljs.core.seq.call(null,ancestors);var chunk__18609_18617 = null;var count__18610_18618 = 0;var i__18611_18619 = 0;while(true){
if((i__18611_18619 < count__18610_18618))
{var n_18620 = cljs.core._nth.call(null,chunk__18609_18617,i__18611_18619);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18620;
goog.events.fireListeners(n_18620,evt.type,true,evt);
}
{
var G__18621 = seq__18608_18616;
var G__18622 = chunk__18609_18617;
var G__18623 = count__18610_18618;
var G__18624 = (i__18611_18619 + 1);
seq__18608_18616 = G__18621;
chunk__18609_18617 = G__18622;
count__18610_18618 = G__18623;
i__18611_18619 = G__18624;
continue;
}
} else
{var temp__4092__auto___18625 = cljs.core.seq.call(null,seq__18608_18616);if(temp__4092__auto___18625)
{var seq__18608_18626__$1 = temp__4092__auto___18625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18608_18626__$1))
{var c__4015__auto___18627 = cljs.core.chunk_first.call(null,seq__18608_18626__$1);{
var G__18628 = cljs.core.chunk_rest.call(null,seq__18608_18626__$1);
var G__18629 = c__4015__auto___18627;
var G__18630 = cljs.core.count.call(null,c__4015__auto___18627);
var G__18631 = 0;
seq__18608_18616 = G__18628;
chunk__18609_18617 = G__18629;
count__18610_18618 = G__18630;
i__18611_18619 = G__18631;
continue;
}
} else
{var n_18632 = cljs.core.first.call(null,seq__18608_18626__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18632;
goog.events.fireListeners(n_18632,evt.type,true,evt);
}
{
var G__18633 = cljs.core.next.call(null,seq__18608_18626__$1);
var G__18634 = null;
var G__18635 = 0;
var G__18636 = 0;
seq__18608_18616 = G__18633;
chunk__18609_18617 = G__18634;
count__18610_18618 = G__18635;
i__18611_18619 = G__18636;
continue;
}
}
} else
{}
}
break;
}
var seq__18612_18637 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__18613_18638 = null;var count__18614_18639 = 0;var i__18615_18640 = 0;while(true){
if((i__18615_18640 < count__18614_18639))
{var n_18641 = cljs.core._nth.call(null,chunk__18613_18638,i__18615_18640);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18641;
goog.events.fireListeners(n_18641,evt.type,false,evt);
}
{
var G__18642 = seq__18612_18637;
var G__18643 = chunk__18613_18638;
var G__18644 = count__18614_18639;
var G__18645 = (i__18615_18640 + 1);
seq__18612_18637 = G__18642;
chunk__18613_18638 = G__18643;
count__18614_18639 = G__18644;
i__18615_18640 = G__18645;
continue;
}
} else
{var temp__4092__auto___18646 = cljs.core.seq.call(null,seq__18612_18637);if(temp__4092__auto___18646)
{var seq__18612_18647__$1 = temp__4092__auto___18646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18612_18647__$1))
{var c__4015__auto___18648 = cljs.core.chunk_first.call(null,seq__18612_18647__$1);{
var G__18649 = cljs.core.chunk_rest.call(null,seq__18612_18647__$1);
var G__18650 = c__4015__auto___18648;
var G__18651 = cljs.core.count.call(null,c__4015__auto___18648);
var G__18652 = 0;
seq__18612_18637 = G__18649;
chunk__18613_18638 = G__18650;
count__18614_18639 = G__18651;
i__18615_18640 = G__18652;
continue;
}
} else
{var n_18653 = cljs.core.first.call(null,seq__18612_18647__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_18653;
goog.events.fireListeners(n_18653,evt.type,false,evt);
}
{
var G__18654 = cljs.core.next.call(null,seq__18612_18647__$1);
var G__18655 = null;
var G__18656 = 0;
var G__18657 = 0;
seq__18612_18637 = G__18654;
chunk__18613_18638 = G__18655;
count__18614_18639 = G__18656;
i__18615_18640 = G__18657;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__18664_18670 = cljs.core.seq.call(null,evt_map);var chunk__18665_18671 = null;var count__18666_18672 = 0;var i__18667_18673 = 0;while(true){
if((i__18667_18673 < count__18666_18672))
{var vec__18668_18674 = cljs.core._nth.call(null,chunk__18665_18671,i__18667_18673);var k_18675 = cljs.core.nth.call(null,vec__18668_18674,0,null);var v_18676 = cljs.core.nth.call(null,vec__18668_18674,1,null);(evt[k_18675] = v_18676);
{
var G__18677 = seq__18664_18670;
var G__18678 = chunk__18665_18671;
var G__18679 = count__18666_18672;
var G__18680 = (i__18667_18673 + 1);
seq__18664_18670 = G__18677;
chunk__18665_18671 = G__18678;
count__18666_18672 = G__18679;
i__18667_18673 = G__18680;
continue;
}
} else
{var temp__4092__auto___18681 = cljs.core.seq.call(null,seq__18664_18670);if(temp__4092__auto___18681)
{var seq__18664_18682__$1 = temp__4092__auto___18681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18664_18682__$1))
{var c__4015__auto___18683 = cljs.core.chunk_first.call(null,seq__18664_18682__$1);{
var G__18684 = cljs.core.chunk_rest.call(null,seq__18664_18682__$1);
var G__18685 = c__4015__auto___18683;
var G__18686 = cljs.core.count.call(null,c__4015__auto___18683);
var G__18687 = 0;
seq__18664_18670 = G__18684;
chunk__18665_18671 = G__18685;
count__18666_18672 = G__18686;
i__18667_18673 = G__18687;
continue;
}
} else
{var vec__18669_18688 = cljs.core.first.call(null,seq__18664_18682__$1);var k_18689 = cljs.core.nth.call(null,vec__18669_18688,0,null);var v_18690 = cljs.core.nth.call(null,vec__18669_18688,1,null);(evt[k_18689] = v_18690);
{
var G__18691 = cljs.core.next.call(null,seq__18664_18682__$1);
var G__18692 = null;
var G__18693 = 0;
var G__18694 = 0;
seq__18664_18670 = G__18691;
chunk__18665_18671 = G__18692;
count__18666_18672 = G__18693;
i__18667_18673 = G__18694;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__18695_SHARP_){return goog.events.getListeners(p1__18695_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map