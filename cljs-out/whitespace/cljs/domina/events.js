// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj35680 = {};return obj35680;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t35684 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t35684 = (function (evt,f,create_listener_function,meta35685){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta35685 = meta35685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t35684.cljs$lang$type = true;
domina.events.t35684.cljs$lang$ctorStr = "domina.events/t35684";
domina.events.t35684.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t35684");
});
domina.events.t35684.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t35684.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t35684.prototype.domina$events$Event$ = true;
domina.events.t35684.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t35684.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t35684.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t35684.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t35684.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t35684.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t35684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35686){var self__ = this;
var _35686__$1 = this;return self__.meta35685;
});
domina.events.t35684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35686,meta35685__$1){var self__ = this;
var _35686__$1 = this;return (new domina.events.t35684(self__.evt,self__.f,self__.create_listener_function,meta35685__$1));
});
domina.events.__GT_t35684 = (function __GT_t35684(evt__$1,f__$1,create_listener_function__$1,meta35685){return (new domina.events.t35684(evt__$1,f__$1,create_listener_function__$1,meta35685));
});
}
return (new domina.events.t35684(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__35691(s__35692){return (new cljs.core.LazySeq(null,(function (){var s__35692__$1 = s__35692;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__35692__$1);if(temp__4092__auto__)
{var s__35692__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35692__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__35692__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__35694 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__35693 = 0;while(true){
if((i__35693 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__35693);cljs.core.chunk_append.call(null,b__35694,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__35695 = (i__35693 + 1);
i__35693 = G__35695;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35694),iter__35691.call(null,cljs.core.chunk_rest.call(null,s__35692__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35694),null);
}
} else
{var node = cljs.core.first.call(null,s__35692__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__35691.call(null,cljs.core.rest.call(null,s__35692__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__35704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35705 = null;var count__35706 = 0;var i__35707 = 0;while(true){
if((i__35707 < count__35706))
{var node = cljs.core._nth.call(null,chunk__35705,i__35707);goog.events.removeAll(node);
{
var G__35712 = seq__35704;
var G__35713 = chunk__35705;
var G__35714 = count__35706;
var G__35715 = (i__35707 + 1);
seq__35704 = G__35712;
chunk__35705 = G__35713;
count__35706 = G__35714;
i__35707 = G__35715;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35704);if(temp__4092__auto__)
{var seq__35704__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35704__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35704__$1);{
var G__35716 = cljs.core.chunk_rest.call(null,seq__35704__$1);
var G__35717 = c__4148__auto__;
var G__35718 = cljs.core.count.call(null,c__4148__auto__);
var G__35719 = 0;
seq__35704 = G__35716;
chunk__35705 = G__35717;
count__35706 = G__35718;
i__35707 = G__35719;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35704__$1);goog.events.removeAll(node);
{
var G__35720 = cljs.core.next.call(null,seq__35704__$1);
var G__35721 = null;
var G__35722 = 0;
var G__35723 = 0;
seq__35704 = G__35720;
chunk__35705 = G__35721;
count__35706 = G__35722;
i__35707 = G__35723;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__35708 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__35709 = null;var count__35710 = 0;var i__35711 = 0;while(true){
if((i__35711 < count__35710))
{var node = cljs.core._nth.call(null,chunk__35709,i__35711);goog.events.removeAll(node,type__$1);
{
var G__35724 = seq__35708;
var G__35725 = chunk__35709;
var G__35726 = count__35710;
var G__35727 = (i__35711 + 1);
seq__35708 = G__35724;
chunk__35709 = G__35725;
count__35710 = G__35726;
i__35711 = G__35727;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__35708);if(temp__4092__auto__)
{var seq__35708__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35708__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__35708__$1);{
var G__35728 = cljs.core.chunk_rest.call(null,seq__35708__$1);
var G__35729 = c__4148__auto__;
var G__35730 = cljs.core.count.call(null,c__4148__auto__);
var G__35731 = 0;
seq__35708 = G__35728;
chunk__35709 = G__35729;
count__35710 = G__35730;
i__35711 = G__35731;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__35708__$1);goog.events.removeAll(node,type__$1);
{
var G__35732 = cljs.core.next.call(null,seq__35708__$1);
var G__35733 = null;
var G__35734 = 0;
var G__35735 = 0;
seq__35708 = G__35732;
chunk__35709 = G__35733;
count__35710 = G__35734;
i__35711 = G__35735;
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
var G__35736 = parent;
var G__35737 = cljs.core.cons.call(null,parent,so_far);
n = G__35736;
so_far = G__35737;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__35746_35754 = cljs.core.seq.call(null,ancestors);var chunk__35747_35755 = null;var count__35748_35756 = 0;var i__35749_35757 = 0;while(true){
if((i__35749_35757 < count__35748_35756))
{var n_35758 = cljs.core._nth.call(null,chunk__35747_35755,i__35749_35757);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35758;
goog.events.fireListeners(n_35758,evt.type,true,evt);
}
{
var G__35759 = seq__35746_35754;
var G__35760 = chunk__35747_35755;
var G__35761 = count__35748_35756;
var G__35762 = (i__35749_35757 + 1);
seq__35746_35754 = G__35759;
chunk__35747_35755 = G__35760;
count__35748_35756 = G__35761;
i__35749_35757 = G__35762;
continue;
}
} else
{var temp__4092__auto___35763 = cljs.core.seq.call(null,seq__35746_35754);if(temp__4092__auto___35763)
{var seq__35746_35764__$1 = temp__4092__auto___35763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35746_35764__$1))
{var c__4148__auto___35765 = cljs.core.chunk_first.call(null,seq__35746_35764__$1);{
var G__35766 = cljs.core.chunk_rest.call(null,seq__35746_35764__$1);
var G__35767 = c__4148__auto___35765;
var G__35768 = cljs.core.count.call(null,c__4148__auto___35765);
var G__35769 = 0;
seq__35746_35754 = G__35766;
chunk__35747_35755 = G__35767;
count__35748_35756 = G__35768;
i__35749_35757 = G__35769;
continue;
}
} else
{var n_35770 = cljs.core.first.call(null,seq__35746_35764__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35770;
goog.events.fireListeners(n_35770,evt.type,true,evt);
}
{
var G__35771 = cljs.core.next.call(null,seq__35746_35764__$1);
var G__35772 = null;
var G__35773 = 0;
var G__35774 = 0;
seq__35746_35754 = G__35771;
chunk__35747_35755 = G__35772;
count__35748_35756 = G__35773;
i__35749_35757 = G__35774;
continue;
}
}
} else
{}
}
break;
}
var seq__35750_35775 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__35751_35776 = null;var count__35752_35777 = 0;var i__35753_35778 = 0;while(true){
if((i__35753_35778 < count__35752_35777))
{var n_35779 = cljs.core._nth.call(null,chunk__35751_35776,i__35753_35778);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35779;
goog.events.fireListeners(n_35779,evt.type,false,evt);
}
{
var G__35780 = seq__35750_35775;
var G__35781 = chunk__35751_35776;
var G__35782 = count__35752_35777;
var G__35783 = (i__35753_35778 + 1);
seq__35750_35775 = G__35780;
chunk__35751_35776 = G__35781;
count__35752_35777 = G__35782;
i__35753_35778 = G__35783;
continue;
}
} else
{var temp__4092__auto___35784 = cljs.core.seq.call(null,seq__35750_35775);if(temp__4092__auto___35784)
{var seq__35750_35785__$1 = temp__4092__auto___35784;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35750_35785__$1))
{var c__4148__auto___35786 = cljs.core.chunk_first.call(null,seq__35750_35785__$1);{
var G__35787 = cljs.core.chunk_rest.call(null,seq__35750_35785__$1);
var G__35788 = c__4148__auto___35786;
var G__35789 = cljs.core.count.call(null,c__4148__auto___35786);
var G__35790 = 0;
seq__35750_35775 = G__35787;
chunk__35751_35776 = G__35788;
count__35752_35777 = G__35789;
i__35753_35778 = G__35790;
continue;
}
} else
{var n_35791 = cljs.core.first.call(null,seq__35750_35785__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_35791;
goog.events.fireListeners(n_35791,evt.type,false,evt);
}
{
var G__35792 = cljs.core.next.call(null,seq__35750_35785__$1);
var G__35793 = null;
var G__35794 = 0;
var G__35795 = 0;
seq__35750_35775 = G__35792;
chunk__35751_35776 = G__35793;
count__35752_35777 = G__35794;
i__35753_35778 = G__35795;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__35802_35808 = cljs.core.seq.call(null,evt_map);var chunk__35803_35809 = null;var count__35804_35810 = 0;var i__35805_35811 = 0;while(true){
if((i__35805_35811 < count__35804_35810))
{var vec__35806_35812 = cljs.core._nth.call(null,chunk__35803_35809,i__35805_35811);var k_35813 = cljs.core.nth.call(null,vec__35806_35812,0,null);var v_35814 = cljs.core.nth.call(null,vec__35806_35812,1,null);(evt[k_35813] = v_35814);
{
var G__35815 = seq__35802_35808;
var G__35816 = chunk__35803_35809;
var G__35817 = count__35804_35810;
var G__35818 = (i__35805_35811 + 1);
seq__35802_35808 = G__35815;
chunk__35803_35809 = G__35816;
count__35804_35810 = G__35817;
i__35805_35811 = G__35818;
continue;
}
} else
{var temp__4092__auto___35819 = cljs.core.seq.call(null,seq__35802_35808);if(temp__4092__auto___35819)
{var seq__35802_35820__$1 = temp__4092__auto___35819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35802_35820__$1))
{var c__4148__auto___35821 = cljs.core.chunk_first.call(null,seq__35802_35820__$1);{
var G__35822 = cljs.core.chunk_rest.call(null,seq__35802_35820__$1);
var G__35823 = c__4148__auto___35821;
var G__35824 = cljs.core.count.call(null,c__4148__auto___35821);
var G__35825 = 0;
seq__35802_35808 = G__35822;
chunk__35803_35809 = G__35823;
count__35804_35810 = G__35824;
i__35805_35811 = G__35825;
continue;
}
} else
{var vec__35807_35826 = cljs.core.first.call(null,seq__35802_35820__$1);var k_35827 = cljs.core.nth.call(null,vec__35807_35826,0,null);var v_35828 = cljs.core.nth.call(null,vec__35807_35826,1,null);(evt[k_35827] = v_35828);
{
var G__35829 = cljs.core.next.call(null,seq__35802_35820__$1);
var G__35830 = null;
var G__35831 = 0;
var G__35832 = 0;
seq__35802_35808 = G__35829;
chunk__35803_35809 = G__35830;
count__35804_35810 = G__35831;
i__35805_35811 = G__35832;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__35833_SHARP_){return goog.events.getListeners(p1__35833_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
