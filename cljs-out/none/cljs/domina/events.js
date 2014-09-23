// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj56598 = {};return obj56598;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t56602 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t56602 = (function (evt,f,create_listener_function,meta56603){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta56603 = meta56603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t56602.cljs$lang$type = true;
domina.events.t56602.cljs$lang$ctorStr = "domina.events/t56602";
domina.events.t56602.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t56602");
});
domina.events.t56602.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t56602.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t56602.prototype.domina$events$Event$ = true;
domina.events.t56602.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t56602.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t56602.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t56602.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t56602.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t56602.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t56602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56604){var self__ = this;
var _56604__$1 = this;return self__.meta56603;
});
domina.events.t56602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56604,meta56603__$1){var self__ = this;
var _56604__$1 = this;return (new domina.events.t56602(self__.evt,self__.f,self__.create_listener_function,meta56603__$1));
});
domina.events.__GT_t56602 = (function __GT_t56602(evt__$1,f__$1,create_listener_function__$1,meta56603){return (new domina.events.t56602(evt__$1,f__$1,create_listener_function__$1,meta56603));
});
}
return (new domina.events.t56602(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__56609(s__56610){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__56610__$1 = s__56610;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56610__$1);if(temp__4126__auto__)
{var s__56610__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56610__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__56610__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__56612 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__56611 = (0);while(true){
if((i__56611 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__56611);cljs.core.chunk_append.call(null,b__56612,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__56613 = (i__56611 + (1));
i__56611 = G__56613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56612),iter__56609.call(null,cljs.core.chunk_rest.call(null,s__56610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56612),null);
}
} else
{var node = cljs.core.first.call(null,s__56610__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__56609.call(null,cljs.core.rest.call(null,s__56610__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__56622 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56623 = null;var count__56624 = (0);var i__56625 = (0);while(true){
if((i__56625 < count__56624))
{var node = cljs.core._nth.call(null,chunk__56623,i__56625);goog.events.removeAll(node);
{
var G__56630 = seq__56622;
var G__56631 = chunk__56623;
var G__56632 = count__56624;
var G__56633 = (i__56625 + (1));
seq__56622 = G__56630;
chunk__56623 = G__56631;
count__56624 = G__56632;
i__56625 = G__56633;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__56622);if(temp__4126__auto__)
{var seq__56622__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56622__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__56622__$1);{
var G__56634 = cljs.core.chunk_rest.call(null,seq__56622__$1);
var G__56635 = c__4314__auto__;
var G__56636 = cljs.core.count.call(null,c__4314__auto__);
var G__56637 = (0);
seq__56622 = G__56634;
chunk__56623 = G__56635;
count__56624 = G__56636;
i__56625 = G__56637;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__56622__$1);goog.events.removeAll(node);
{
var G__56638 = cljs.core.next.call(null,seq__56622__$1);
var G__56639 = null;
var G__56640 = (0);
var G__56641 = (0);
seq__56622 = G__56638;
chunk__56623 = G__56639;
count__56624 = G__56640;
i__56625 = G__56641;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__56626 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56627 = null;var count__56628 = (0);var i__56629 = (0);while(true){
if((i__56629 < count__56628))
{var node = cljs.core._nth.call(null,chunk__56627,i__56629);goog.events.removeAll(node,type__$1);
{
var G__56642 = seq__56626;
var G__56643 = chunk__56627;
var G__56644 = count__56628;
var G__56645 = (i__56629 + (1));
seq__56626 = G__56642;
chunk__56627 = G__56643;
count__56628 = G__56644;
i__56629 = G__56645;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__56626);if(temp__4126__auto__)
{var seq__56626__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56626__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__56626__$1);{
var G__56646 = cljs.core.chunk_rest.call(null,seq__56626__$1);
var G__56647 = c__4314__auto__;
var G__56648 = cljs.core.count.call(null,c__4314__auto__);
var G__56649 = (0);
seq__56626 = G__56646;
chunk__56627 = G__56647;
count__56628 = G__56648;
i__56629 = G__56649;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__56626__$1);goog.events.removeAll(node,type__$1);
{
var G__56650 = cljs.core.next.call(null,seq__56626__$1);
var G__56651 = null;
var G__56652 = (0);
var G__56653 = (0);
seq__56626 = G__56650;
chunk__56627 = G__56651;
count__56628 = G__56652;
i__56629 = G__56653;
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
var G__56654 = parent;
var G__56655 = cljs.core.cons.call(null,parent,so_far);
n = G__56654;
so_far = G__56655;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__56664_56672 = cljs.core.seq.call(null,ancestors);var chunk__56665_56673 = null;var count__56666_56674 = (0);var i__56667_56675 = (0);while(true){
if((i__56667_56675 < count__56666_56674))
{var n_56676 = cljs.core._nth.call(null,chunk__56665_56673,i__56667_56675);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56676;
goog.events.fireListeners(n_56676,evt.type,true,evt);
}
{
var G__56677 = seq__56664_56672;
var G__56678 = chunk__56665_56673;
var G__56679 = count__56666_56674;
var G__56680 = (i__56667_56675 + (1));
seq__56664_56672 = G__56677;
chunk__56665_56673 = G__56678;
count__56666_56674 = G__56679;
i__56667_56675 = G__56680;
continue;
}
} else
{var temp__4126__auto___56681 = cljs.core.seq.call(null,seq__56664_56672);if(temp__4126__auto___56681)
{var seq__56664_56682__$1 = temp__4126__auto___56681;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56664_56682__$1))
{var c__4314__auto___56683 = cljs.core.chunk_first.call(null,seq__56664_56682__$1);{
var G__56684 = cljs.core.chunk_rest.call(null,seq__56664_56682__$1);
var G__56685 = c__4314__auto___56683;
var G__56686 = cljs.core.count.call(null,c__4314__auto___56683);
var G__56687 = (0);
seq__56664_56672 = G__56684;
chunk__56665_56673 = G__56685;
count__56666_56674 = G__56686;
i__56667_56675 = G__56687;
continue;
}
} else
{var n_56688 = cljs.core.first.call(null,seq__56664_56682__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56688;
goog.events.fireListeners(n_56688,evt.type,true,evt);
}
{
var G__56689 = cljs.core.next.call(null,seq__56664_56682__$1);
var G__56690 = null;
var G__56691 = (0);
var G__56692 = (0);
seq__56664_56672 = G__56689;
chunk__56665_56673 = G__56690;
count__56666_56674 = G__56691;
i__56667_56675 = G__56692;
continue;
}
}
} else
{}
}
break;
}
var seq__56668_56693 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__56669_56694 = null;var count__56670_56695 = (0);var i__56671_56696 = (0);while(true){
if((i__56671_56696 < count__56670_56695))
{var n_56697 = cljs.core._nth.call(null,chunk__56669_56694,i__56671_56696);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56697;
goog.events.fireListeners(n_56697,evt.type,false,evt);
}
{
var G__56698 = seq__56668_56693;
var G__56699 = chunk__56669_56694;
var G__56700 = count__56670_56695;
var G__56701 = (i__56671_56696 + (1));
seq__56668_56693 = G__56698;
chunk__56669_56694 = G__56699;
count__56670_56695 = G__56700;
i__56671_56696 = G__56701;
continue;
}
} else
{var temp__4126__auto___56702 = cljs.core.seq.call(null,seq__56668_56693);if(temp__4126__auto___56702)
{var seq__56668_56703__$1 = temp__4126__auto___56702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56668_56703__$1))
{var c__4314__auto___56704 = cljs.core.chunk_first.call(null,seq__56668_56703__$1);{
var G__56705 = cljs.core.chunk_rest.call(null,seq__56668_56703__$1);
var G__56706 = c__4314__auto___56704;
var G__56707 = cljs.core.count.call(null,c__4314__auto___56704);
var G__56708 = (0);
seq__56668_56693 = G__56705;
chunk__56669_56694 = G__56706;
count__56670_56695 = G__56707;
i__56671_56696 = G__56708;
continue;
}
} else
{var n_56709 = cljs.core.first.call(null,seq__56668_56703__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56709;
goog.events.fireListeners(n_56709,evt.type,false,evt);
}
{
var G__56710 = cljs.core.next.call(null,seq__56668_56703__$1);
var G__56711 = null;
var G__56712 = (0);
var G__56713 = (0);
seq__56668_56693 = G__56710;
chunk__56669_56694 = G__56711;
count__56670_56695 = G__56712;
i__56671_56696 = G__56713;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__56720_56726 = cljs.core.seq.call(null,evt_map);var chunk__56721_56727 = null;var count__56722_56728 = (0);var i__56723_56729 = (0);while(true){
if((i__56723_56729 < count__56722_56728))
{var vec__56724_56730 = cljs.core._nth.call(null,chunk__56721_56727,i__56723_56729);var k_56731 = cljs.core.nth.call(null,vec__56724_56730,(0),null);var v_56732 = cljs.core.nth.call(null,vec__56724_56730,(1),null);(evt[k_56731] = v_56732);
{
var G__56733 = seq__56720_56726;
var G__56734 = chunk__56721_56727;
var G__56735 = count__56722_56728;
var G__56736 = (i__56723_56729 + (1));
seq__56720_56726 = G__56733;
chunk__56721_56727 = G__56734;
count__56722_56728 = G__56735;
i__56723_56729 = G__56736;
continue;
}
} else
{var temp__4126__auto___56737 = cljs.core.seq.call(null,seq__56720_56726);if(temp__4126__auto___56737)
{var seq__56720_56738__$1 = temp__4126__auto___56737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56720_56738__$1))
{var c__4314__auto___56739 = cljs.core.chunk_first.call(null,seq__56720_56738__$1);{
var G__56740 = cljs.core.chunk_rest.call(null,seq__56720_56738__$1);
var G__56741 = c__4314__auto___56739;
var G__56742 = cljs.core.count.call(null,c__4314__auto___56739);
var G__56743 = (0);
seq__56720_56726 = G__56740;
chunk__56721_56727 = G__56741;
count__56722_56728 = G__56742;
i__56723_56729 = G__56743;
continue;
}
} else
{var vec__56725_56744 = cljs.core.first.call(null,seq__56720_56738__$1);var k_56745 = cljs.core.nth.call(null,vec__56725_56744,(0),null);var v_56746 = cljs.core.nth.call(null,vec__56725_56744,(1),null);(evt[k_56745] = v_56746);
{
var G__56747 = cljs.core.next.call(null,seq__56720_56738__$1);
var G__56748 = null;
var G__56749 = (0);
var G__56750 = (0);
seq__56720_56726 = G__56747;
chunk__56721_56727 = G__56748;
count__56722_56728 = G__56749;
i__56723_56729 = G__56750;
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
return (function (p1__56751_SHARP_){return goog.events.getListeners(p1__56751_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map