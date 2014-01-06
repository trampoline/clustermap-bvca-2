// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj12654 = {};return obj12654;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t12658 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t12658 = (function (evt,f,create_listener_function,meta12659){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta12659 = meta12659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t12658.cljs$lang$type = true;
domina.events.t12658.cljs$lang$ctorStr = "domina.events/t12658";
domina.events.t12658.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t12658");
});
domina.events.t12658.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t12658.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t12658.prototype.domina$events$Event$ = true;
domina.events.t12658.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t12658.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t12658.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t12658.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t12658.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t12658.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t12658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12660){var self__ = this;
var _12660__$1 = this;return self__.meta12659;
});
domina.events.t12658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12660,meta12659__$1){var self__ = this;
var _12660__$1 = this;return (new domina.events.t12658(self__.evt,self__.f,self__.create_listener_function,meta12659__$1));
});
domina.events.__GT_t12658 = (function __GT_t12658(evt__$1,f__$1,create_listener_function__$1,meta12659){return (new domina.events.t12658(evt__$1,f__$1,create_listener_function__$1,meta12659));
});
}
return (new domina.events.t12658(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__12665(s__12666){return (new cljs.core.LazySeq(null,(function (){var s__12666__$1 = s__12666;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12666__$1);if(temp__4092__auto__)
{var s__12666__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12666__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12666__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12668 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12667 = 0;while(true){
if((i__12667 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__12667);cljs.core.chunk_append.call(null,b__12668,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__12669 = (i__12667 + 1);
i__12667 = G__12669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12668),iter__12665.call(null,cljs.core.chunk_rest.call(null,s__12666__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12668),null);
}
} else
{var node = cljs.core.first.call(null,s__12666__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__12665.call(null,cljs.core.rest.call(null,s__12666__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__12678 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12679 = null;var count__12680 = 0;var i__12681 = 0;while(true){
if((i__12681 < count__12680))
{var node = cljs.core._nth.call(null,chunk__12679,i__12681);goog.events.removeAll(node);
{
var G__12686 = seq__12678;
var G__12687 = chunk__12679;
var G__12688 = count__12680;
var G__12689 = (i__12681 + 1);
seq__12678 = G__12686;
chunk__12679 = G__12687;
count__12680 = G__12688;
i__12681 = G__12689;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12678);if(temp__4092__auto__)
{var seq__12678__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12678__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12678__$1);{
var G__12690 = cljs.core.chunk_rest.call(null,seq__12678__$1);
var G__12691 = c__4148__auto__;
var G__12692 = cljs.core.count.call(null,c__4148__auto__);
var G__12693 = 0;
seq__12678 = G__12690;
chunk__12679 = G__12691;
count__12680 = G__12692;
i__12681 = G__12693;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12678__$1);goog.events.removeAll(node);
{
var G__12694 = cljs.core.next.call(null,seq__12678__$1);
var G__12695 = null;
var G__12696 = 0;
var G__12697 = 0;
seq__12678 = G__12694;
chunk__12679 = G__12695;
count__12680 = G__12696;
i__12681 = G__12697;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__12682 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__12683 = null;var count__12684 = 0;var i__12685 = 0;while(true){
if((i__12685 < count__12684))
{var node = cljs.core._nth.call(null,chunk__12683,i__12685);goog.events.removeAll(node,type__$1);
{
var G__12698 = seq__12682;
var G__12699 = chunk__12683;
var G__12700 = count__12684;
var G__12701 = (i__12685 + 1);
seq__12682 = G__12698;
chunk__12683 = G__12699;
count__12684 = G__12700;
i__12685 = G__12701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12682);if(temp__4092__auto__)
{var seq__12682__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12682__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12682__$1);{
var G__12702 = cljs.core.chunk_rest.call(null,seq__12682__$1);
var G__12703 = c__4148__auto__;
var G__12704 = cljs.core.count.call(null,c__4148__auto__);
var G__12705 = 0;
seq__12682 = G__12702;
chunk__12683 = G__12703;
count__12684 = G__12704;
i__12685 = G__12705;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__12682__$1);goog.events.removeAll(node,type__$1);
{
var G__12706 = cljs.core.next.call(null,seq__12682__$1);
var G__12707 = null;
var G__12708 = 0;
var G__12709 = 0;
seq__12682 = G__12706;
chunk__12683 = G__12707;
count__12684 = G__12708;
i__12685 = G__12709;
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
var G__12710 = parent;
var G__12711 = cljs.core.cons.call(null,parent,so_far);
n = G__12710;
so_far = G__12711;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__12720_12728 = cljs.core.seq.call(null,ancestors);var chunk__12721_12729 = null;var count__12722_12730 = 0;var i__12723_12731 = 0;while(true){
if((i__12723_12731 < count__12722_12730))
{var n_12732 = cljs.core._nth.call(null,chunk__12721_12729,i__12723_12731);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_12732;
goog.events.fireListeners(n_12732,evt.type,true,evt);
}
{
var G__12733 = seq__12720_12728;
var G__12734 = chunk__12721_12729;
var G__12735 = count__12722_12730;
var G__12736 = (i__12723_12731 + 1);
seq__12720_12728 = G__12733;
chunk__12721_12729 = G__12734;
count__12722_12730 = G__12735;
i__12723_12731 = G__12736;
continue;
}
} else
{var temp__4092__auto___12737 = cljs.core.seq.call(null,seq__12720_12728);if(temp__4092__auto___12737)
{var seq__12720_12738__$1 = temp__4092__auto___12737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12720_12738__$1))
{var c__4148__auto___12739 = cljs.core.chunk_first.call(null,seq__12720_12738__$1);{
var G__12740 = cljs.core.chunk_rest.call(null,seq__12720_12738__$1);
var G__12741 = c__4148__auto___12739;
var G__12742 = cljs.core.count.call(null,c__4148__auto___12739);
var G__12743 = 0;
seq__12720_12728 = G__12740;
chunk__12721_12729 = G__12741;
count__12722_12730 = G__12742;
i__12723_12731 = G__12743;
continue;
}
} else
{var n_12744 = cljs.core.first.call(null,seq__12720_12738__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_12744;
goog.events.fireListeners(n_12744,evt.type,true,evt);
}
{
var G__12745 = cljs.core.next.call(null,seq__12720_12738__$1);
var G__12746 = null;
var G__12747 = 0;
var G__12748 = 0;
seq__12720_12728 = G__12745;
chunk__12721_12729 = G__12746;
count__12722_12730 = G__12747;
i__12723_12731 = G__12748;
continue;
}
}
} else
{}
}
break;
}
var seq__12724_12749 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__12725_12750 = null;var count__12726_12751 = 0;var i__12727_12752 = 0;while(true){
if((i__12727_12752 < count__12726_12751))
{var n_12753 = cljs.core._nth.call(null,chunk__12725_12750,i__12727_12752);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_12753;
goog.events.fireListeners(n_12753,evt.type,false,evt);
}
{
var G__12754 = seq__12724_12749;
var G__12755 = chunk__12725_12750;
var G__12756 = count__12726_12751;
var G__12757 = (i__12727_12752 + 1);
seq__12724_12749 = G__12754;
chunk__12725_12750 = G__12755;
count__12726_12751 = G__12756;
i__12727_12752 = G__12757;
continue;
}
} else
{var temp__4092__auto___12758 = cljs.core.seq.call(null,seq__12724_12749);if(temp__4092__auto___12758)
{var seq__12724_12759__$1 = temp__4092__auto___12758;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12724_12759__$1))
{var c__4148__auto___12760 = cljs.core.chunk_first.call(null,seq__12724_12759__$1);{
var G__12761 = cljs.core.chunk_rest.call(null,seq__12724_12759__$1);
var G__12762 = c__4148__auto___12760;
var G__12763 = cljs.core.count.call(null,c__4148__auto___12760);
var G__12764 = 0;
seq__12724_12749 = G__12761;
chunk__12725_12750 = G__12762;
count__12726_12751 = G__12763;
i__12727_12752 = G__12764;
continue;
}
} else
{var n_12765 = cljs.core.first.call(null,seq__12724_12759__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_12765;
goog.events.fireListeners(n_12765,evt.type,false,evt);
}
{
var G__12766 = cljs.core.next.call(null,seq__12724_12759__$1);
var G__12767 = null;
var G__12768 = 0;
var G__12769 = 0;
seq__12724_12749 = G__12766;
chunk__12725_12750 = G__12767;
count__12726_12751 = G__12768;
i__12727_12752 = G__12769;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__12776_12782 = cljs.core.seq.call(null,evt_map);var chunk__12777_12783 = null;var count__12778_12784 = 0;var i__12779_12785 = 0;while(true){
if((i__12779_12785 < count__12778_12784))
{var vec__12780_12786 = cljs.core._nth.call(null,chunk__12777_12783,i__12779_12785);var k_12787 = cljs.core.nth.call(null,vec__12780_12786,0,null);var v_12788 = cljs.core.nth.call(null,vec__12780_12786,1,null);(evt[k_12787] = v_12788);
{
var G__12789 = seq__12776_12782;
var G__12790 = chunk__12777_12783;
var G__12791 = count__12778_12784;
var G__12792 = (i__12779_12785 + 1);
seq__12776_12782 = G__12789;
chunk__12777_12783 = G__12790;
count__12778_12784 = G__12791;
i__12779_12785 = G__12792;
continue;
}
} else
{var temp__4092__auto___12793 = cljs.core.seq.call(null,seq__12776_12782);if(temp__4092__auto___12793)
{var seq__12776_12794__$1 = temp__4092__auto___12793;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12776_12794__$1))
{var c__4148__auto___12795 = cljs.core.chunk_first.call(null,seq__12776_12794__$1);{
var G__12796 = cljs.core.chunk_rest.call(null,seq__12776_12794__$1);
var G__12797 = c__4148__auto___12795;
var G__12798 = cljs.core.count.call(null,c__4148__auto___12795);
var G__12799 = 0;
seq__12776_12782 = G__12796;
chunk__12777_12783 = G__12797;
count__12778_12784 = G__12798;
i__12779_12785 = G__12799;
continue;
}
} else
{var vec__12781_12800 = cljs.core.first.call(null,seq__12776_12794__$1);var k_12801 = cljs.core.nth.call(null,vec__12781_12800,0,null);var v_12802 = cljs.core.nth.call(null,vec__12781_12800,1,null);(evt[k_12801] = v_12802);
{
var G__12803 = cljs.core.next.call(null,seq__12776_12794__$1);
var G__12804 = null;
var G__12805 = 0;
var G__12806 = 0;
seq__12776_12782 = G__12803;
chunk__12777_12783 = G__12804;
count__12778_12784 = G__12805;
i__12779_12785 = G__12806;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__12807_SHARP_){return goog.events.getListeners(p1__12807_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map