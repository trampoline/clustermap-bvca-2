// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32698 = {};return obj32698;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32702 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32702 = (function (evt,f,create_listener_function,meta32703){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32703 = meta32703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32702.cljs$lang$type = true;
domina.events.t32702.cljs$lang$ctorStr = "domina.events/t32702";
domina.events.t32702.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t32702");
});
domina.events.t32702.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32702.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t32702.prototype.domina$events$Event$ = true;
domina.events.t32702.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32702.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32702.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32702.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32702.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32702.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32704){var self__ = this;
var _32704__$1 = this;return self__.meta32703;
});
domina.events.t32702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32704,meta32703__$1){var self__ = this;
var _32704__$1 = this;return (new domina.events.t32702(self__.evt,self__.f,self__.create_listener_function,meta32703__$1));
});
domina.events.__GT_t32702 = (function __GT_t32702(evt__$1,f__$1,create_listener_function__$1,meta32703){return (new domina.events.t32702(evt__$1,f__$1,create_listener_function__$1,meta32703));
});
}
return (new domina.events.t32702(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__32709(s__32710){return (new cljs.core.LazySeq(null,(function (){var s__32710__$1 = s__32710;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32710__$1);if(temp__4092__auto__)
{var s__32710__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32710__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32710__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32712 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32711 = 0;while(true){
if((i__32711 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__32711);cljs.core.chunk_append.call(null,b__32712,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32713 = (i__32711 + 1);
i__32711 = G__32713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32712),iter__32709.call(null,cljs.core.chunk_rest.call(null,s__32710__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32712),null);
}
} else
{var node = cljs.core.first.call(null,s__32710__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32709.call(null,cljs.core.rest.call(null,s__32710__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__32722 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32723 = null;var count__32724 = 0;var i__32725 = 0;while(true){
if((i__32725 < count__32724))
{var node = cljs.core._nth.call(null,chunk__32723,i__32725);goog.events.removeAll(node);
{
var G__32730 = seq__32722;
var G__32731 = chunk__32723;
var G__32732 = count__32724;
var G__32733 = (i__32725 + 1);
seq__32722 = G__32730;
chunk__32723 = G__32731;
count__32724 = G__32732;
i__32725 = G__32733;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32722);if(temp__4092__auto__)
{var seq__32722__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32722__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32722__$1);{
var G__32734 = cljs.core.chunk_rest.call(null,seq__32722__$1);
var G__32735 = c__4148__auto__;
var G__32736 = cljs.core.count.call(null,c__4148__auto__);
var G__32737 = 0;
seq__32722 = G__32734;
chunk__32723 = G__32735;
count__32724 = G__32736;
i__32725 = G__32737;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32722__$1);goog.events.removeAll(node);
{
var G__32738 = cljs.core.next.call(null,seq__32722__$1);
var G__32739 = null;
var G__32740 = 0;
var G__32741 = 0;
seq__32722 = G__32738;
chunk__32723 = G__32739;
count__32724 = G__32740;
i__32725 = G__32741;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32726 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32727 = null;var count__32728 = 0;var i__32729 = 0;while(true){
if((i__32729 < count__32728))
{var node = cljs.core._nth.call(null,chunk__32727,i__32729);goog.events.removeAll(node,type__$1);
{
var G__32742 = seq__32726;
var G__32743 = chunk__32727;
var G__32744 = count__32728;
var G__32745 = (i__32729 + 1);
seq__32726 = G__32742;
chunk__32727 = G__32743;
count__32728 = G__32744;
i__32729 = G__32745;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32726);if(temp__4092__auto__)
{var seq__32726__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32726__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32726__$1);{
var G__32746 = cljs.core.chunk_rest.call(null,seq__32726__$1);
var G__32747 = c__4148__auto__;
var G__32748 = cljs.core.count.call(null,c__4148__auto__);
var G__32749 = 0;
seq__32726 = G__32746;
chunk__32727 = G__32747;
count__32728 = G__32748;
i__32729 = G__32749;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32726__$1);goog.events.removeAll(node,type__$1);
{
var G__32750 = cljs.core.next.call(null,seq__32726__$1);
var G__32751 = null;
var G__32752 = 0;
var G__32753 = 0;
seq__32726 = G__32750;
chunk__32727 = G__32751;
count__32728 = G__32752;
i__32729 = G__32753;
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
var G__32754 = parent;
var G__32755 = cljs.core.cons.call(null,parent,so_far);
n = G__32754;
so_far = G__32755;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32764_32772 = cljs.core.seq.call(null,ancestors);var chunk__32765_32773 = null;var count__32766_32774 = 0;var i__32767_32775 = 0;while(true){
if((i__32767_32775 < count__32766_32774))
{var n_32776 = cljs.core._nth.call(null,chunk__32765_32773,i__32767_32775);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32776;
goog.events.fireListeners(n_32776,evt.type,true,evt);
}
{
var G__32777 = seq__32764_32772;
var G__32778 = chunk__32765_32773;
var G__32779 = count__32766_32774;
var G__32780 = (i__32767_32775 + 1);
seq__32764_32772 = G__32777;
chunk__32765_32773 = G__32778;
count__32766_32774 = G__32779;
i__32767_32775 = G__32780;
continue;
}
} else
{var temp__4092__auto___32781 = cljs.core.seq.call(null,seq__32764_32772);if(temp__4092__auto___32781)
{var seq__32764_32782__$1 = temp__4092__auto___32781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32764_32782__$1))
{var c__4148__auto___32783 = cljs.core.chunk_first.call(null,seq__32764_32782__$1);{
var G__32784 = cljs.core.chunk_rest.call(null,seq__32764_32782__$1);
var G__32785 = c__4148__auto___32783;
var G__32786 = cljs.core.count.call(null,c__4148__auto___32783);
var G__32787 = 0;
seq__32764_32772 = G__32784;
chunk__32765_32773 = G__32785;
count__32766_32774 = G__32786;
i__32767_32775 = G__32787;
continue;
}
} else
{var n_32788 = cljs.core.first.call(null,seq__32764_32782__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32788;
goog.events.fireListeners(n_32788,evt.type,true,evt);
}
{
var G__32789 = cljs.core.next.call(null,seq__32764_32782__$1);
var G__32790 = null;
var G__32791 = 0;
var G__32792 = 0;
seq__32764_32772 = G__32789;
chunk__32765_32773 = G__32790;
count__32766_32774 = G__32791;
i__32767_32775 = G__32792;
continue;
}
}
} else
{}
}
break;
}
var seq__32768_32793 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32769_32794 = null;var count__32770_32795 = 0;var i__32771_32796 = 0;while(true){
if((i__32771_32796 < count__32770_32795))
{var n_32797 = cljs.core._nth.call(null,chunk__32769_32794,i__32771_32796);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32797;
goog.events.fireListeners(n_32797,evt.type,false,evt);
}
{
var G__32798 = seq__32768_32793;
var G__32799 = chunk__32769_32794;
var G__32800 = count__32770_32795;
var G__32801 = (i__32771_32796 + 1);
seq__32768_32793 = G__32798;
chunk__32769_32794 = G__32799;
count__32770_32795 = G__32800;
i__32771_32796 = G__32801;
continue;
}
} else
{var temp__4092__auto___32802 = cljs.core.seq.call(null,seq__32768_32793);if(temp__4092__auto___32802)
{var seq__32768_32803__$1 = temp__4092__auto___32802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32768_32803__$1))
{var c__4148__auto___32804 = cljs.core.chunk_first.call(null,seq__32768_32803__$1);{
var G__32805 = cljs.core.chunk_rest.call(null,seq__32768_32803__$1);
var G__32806 = c__4148__auto___32804;
var G__32807 = cljs.core.count.call(null,c__4148__auto___32804);
var G__32808 = 0;
seq__32768_32793 = G__32805;
chunk__32769_32794 = G__32806;
count__32770_32795 = G__32807;
i__32771_32796 = G__32808;
continue;
}
} else
{var n_32809 = cljs.core.first.call(null,seq__32768_32803__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32809;
goog.events.fireListeners(n_32809,evt.type,false,evt);
}
{
var G__32810 = cljs.core.next.call(null,seq__32768_32803__$1);
var G__32811 = null;
var G__32812 = 0;
var G__32813 = 0;
seq__32768_32793 = G__32810;
chunk__32769_32794 = G__32811;
count__32770_32795 = G__32812;
i__32771_32796 = G__32813;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32820_32826 = cljs.core.seq.call(null,evt_map);var chunk__32821_32827 = null;var count__32822_32828 = 0;var i__32823_32829 = 0;while(true){
if((i__32823_32829 < count__32822_32828))
{var vec__32824_32830 = cljs.core._nth.call(null,chunk__32821_32827,i__32823_32829);var k_32831 = cljs.core.nth.call(null,vec__32824_32830,0,null);var v_32832 = cljs.core.nth.call(null,vec__32824_32830,1,null);(evt[k_32831] = v_32832);
{
var G__32833 = seq__32820_32826;
var G__32834 = chunk__32821_32827;
var G__32835 = count__32822_32828;
var G__32836 = (i__32823_32829 + 1);
seq__32820_32826 = G__32833;
chunk__32821_32827 = G__32834;
count__32822_32828 = G__32835;
i__32823_32829 = G__32836;
continue;
}
} else
{var temp__4092__auto___32837 = cljs.core.seq.call(null,seq__32820_32826);if(temp__4092__auto___32837)
{var seq__32820_32838__$1 = temp__4092__auto___32837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32820_32838__$1))
{var c__4148__auto___32839 = cljs.core.chunk_first.call(null,seq__32820_32838__$1);{
var G__32840 = cljs.core.chunk_rest.call(null,seq__32820_32838__$1);
var G__32841 = c__4148__auto___32839;
var G__32842 = cljs.core.count.call(null,c__4148__auto___32839);
var G__32843 = 0;
seq__32820_32826 = G__32840;
chunk__32821_32827 = G__32841;
count__32822_32828 = G__32842;
i__32823_32829 = G__32843;
continue;
}
} else
{var vec__32825_32844 = cljs.core.first.call(null,seq__32820_32838__$1);var k_32845 = cljs.core.nth.call(null,vec__32825_32844,0,null);var v_32846 = cljs.core.nth.call(null,vec__32825_32844,1,null);(evt[k_32845] = v_32846);
{
var G__32847 = cljs.core.next.call(null,seq__32820_32838__$1);
var G__32848 = null;
var G__32849 = 0;
var G__32850 = 0;
seq__32820_32826 = G__32847;
chunk__32821_32827 = G__32848;
count__32822_32828 = G__32849;
i__32823_32829 = G__32850;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__32851_SHARP_){return goog.events.getListeners(p1__32851_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
