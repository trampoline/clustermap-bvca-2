// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32569 = {};return obj32569;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32573 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32573 = (function (evt,f,create_listener_function,meta32574){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32574 = meta32574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32573.cljs$lang$type = true;
domina.events.t32573.cljs$lang$ctorStr = "domina.events/t32573";
domina.events.t32573.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t32573");
});
domina.events.t32573.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32573.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t32573.prototype.domina$events$Event$ = true;
domina.events.t32573.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32573.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32573.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32573.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32573.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32573.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32575){var self__ = this;
var _32575__$1 = this;return self__.meta32574;
});
domina.events.t32573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32575,meta32574__$1){var self__ = this;
var _32575__$1 = this;return (new domina.events.t32573(self__.evt,self__.f,self__.create_listener_function,meta32574__$1));
});
domina.events.__GT_t32573 = (function __GT_t32573(evt__$1,f__$1,create_listener_function__$1,meta32574){return (new domina.events.t32573(evt__$1,f__$1,create_listener_function__$1,meta32574));
});
}
return (new domina.events.t32573(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__32580(s__32581){return (new cljs.core.LazySeq(null,(function (){var s__32581__$1 = s__32581;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32581__$1);if(temp__4092__auto__)
{var s__32581__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32581__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32581__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32583 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32582 = 0;while(true){
if((i__32582 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__32582);cljs.core.chunk_append.call(null,b__32583,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32584 = (i__32582 + 1);
i__32582 = G__32584;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32583),iter__32580.call(null,cljs.core.chunk_rest.call(null,s__32581__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32583),null);
}
} else
{var node = cljs.core.first.call(null,s__32581__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32580.call(null,cljs.core.rest.call(null,s__32581__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__32593 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32594 = null;var count__32595 = 0;var i__32596 = 0;while(true){
if((i__32596 < count__32595))
{var node = cljs.core._nth.call(null,chunk__32594,i__32596);goog.events.removeAll(node);
{
var G__32601 = seq__32593;
var G__32602 = chunk__32594;
var G__32603 = count__32595;
var G__32604 = (i__32596 + 1);
seq__32593 = G__32601;
chunk__32594 = G__32602;
count__32595 = G__32603;
i__32596 = G__32604;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32593);if(temp__4092__auto__)
{var seq__32593__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32593__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32593__$1);{
var G__32605 = cljs.core.chunk_rest.call(null,seq__32593__$1);
var G__32606 = c__4148__auto__;
var G__32607 = cljs.core.count.call(null,c__4148__auto__);
var G__32608 = 0;
seq__32593 = G__32605;
chunk__32594 = G__32606;
count__32595 = G__32607;
i__32596 = G__32608;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32593__$1);goog.events.removeAll(node);
{
var G__32609 = cljs.core.next.call(null,seq__32593__$1);
var G__32610 = null;
var G__32611 = 0;
var G__32612 = 0;
seq__32593 = G__32609;
chunk__32594 = G__32610;
count__32595 = G__32611;
i__32596 = G__32612;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32597 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32598 = null;var count__32599 = 0;var i__32600 = 0;while(true){
if((i__32600 < count__32599))
{var node = cljs.core._nth.call(null,chunk__32598,i__32600);goog.events.removeAll(node,type__$1);
{
var G__32613 = seq__32597;
var G__32614 = chunk__32598;
var G__32615 = count__32599;
var G__32616 = (i__32600 + 1);
seq__32597 = G__32613;
chunk__32598 = G__32614;
count__32599 = G__32615;
i__32600 = G__32616;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32597);if(temp__4092__auto__)
{var seq__32597__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32597__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32597__$1);{
var G__32617 = cljs.core.chunk_rest.call(null,seq__32597__$1);
var G__32618 = c__4148__auto__;
var G__32619 = cljs.core.count.call(null,c__4148__auto__);
var G__32620 = 0;
seq__32597 = G__32617;
chunk__32598 = G__32618;
count__32599 = G__32619;
i__32600 = G__32620;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32597__$1);goog.events.removeAll(node,type__$1);
{
var G__32621 = cljs.core.next.call(null,seq__32597__$1);
var G__32622 = null;
var G__32623 = 0;
var G__32624 = 0;
seq__32597 = G__32621;
chunk__32598 = G__32622;
count__32599 = G__32623;
i__32600 = G__32624;
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
var G__32625 = parent;
var G__32626 = cljs.core.cons.call(null,parent,so_far);
n = G__32625;
so_far = G__32626;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32635_32643 = cljs.core.seq.call(null,ancestors);var chunk__32636_32644 = null;var count__32637_32645 = 0;var i__32638_32646 = 0;while(true){
if((i__32638_32646 < count__32637_32645))
{var n_32647 = cljs.core._nth.call(null,chunk__32636_32644,i__32638_32646);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32647;
goog.events.fireListeners(n_32647,evt.type,true,evt);
}
{
var G__32648 = seq__32635_32643;
var G__32649 = chunk__32636_32644;
var G__32650 = count__32637_32645;
var G__32651 = (i__32638_32646 + 1);
seq__32635_32643 = G__32648;
chunk__32636_32644 = G__32649;
count__32637_32645 = G__32650;
i__32638_32646 = G__32651;
continue;
}
} else
{var temp__4092__auto___32652 = cljs.core.seq.call(null,seq__32635_32643);if(temp__4092__auto___32652)
{var seq__32635_32653__$1 = temp__4092__auto___32652;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32635_32653__$1))
{var c__4148__auto___32654 = cljs.core.chunk_first.call(null,seq__32635_32653__$1);{
var G__32655 = cljs.core.chunk_rest.call(null,seq__32635_32653__$1);
var G__32656 = c__4148__auto___32654;
var G__32657 = cljs.core.count.call(null,c__4148__auto___32654);
var G__32658 = 0;
seq__32635_32643 = G__32655;
chunk__32636_32644 = G__32656;
count__32637_32645 = G__32657;
i__32638_32646 = G__32658;
continue;
}
} else
{var n_32659 = cljs.core.first.call(null,seq__32635_32653__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32659;
goog.events.fireListeners(n_32659,evt.type,true,evt);
}
{
var G__32660 = cljs.core.next.call(null,seq__32635_32653__$1);
var G__32661 = null;
var G__32662 = 0;
var G__32663 = 0;
seq__32635_32643 = G__32660;
chunk__32636_32644 = G__32661;
count__32637_32645 = G__32662;
i__32638_32646 = G__32663;
continue;
}
}
} else
{}
}
break;
}
var seq__32639_32664 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32640_32665 = null;var count__32641_32666 = 0;var i__32642_32667 = 0;while(true){
if((i__32642_32667 < count__32641_32666))
{var n_32668 = cljs.core._nth.call(null,chunk__32640_32665,i__32642_32667);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32668;
goog.events.fireListeners(n_32668,evt.type,false,evt);
}
{
var G__32669 = seq__32639_32664;
var G__32670 = chunk__32640_32665;
var G__32671 = count__32641_32666;
var G__32672 = (i__32642_32667 + 1);
seq__32639_32664 = G__32669;
chunk__32640_32665 = G__32670;
count__32641_32666 = G__32671;
i__32642_32667 = G__32672;
continue;
}
} else
{var temp__4092__auto___32673 = cljs.core.seq.call(null,seq__32639_32664);if(temp__4092__auto___32673)
{var seq__32639_32674__$1 = temp__4092__auto___32673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32639_32674__$1))
{var c__4148__auto___32675 = cljs.core.chunk_first.call(null,seq__32639_32674__$1);{
var G__32676 = cljs.core.chunk_rest.call(null,seq__32639_32674__$1);
var G__32677 = c__4148__auto___32675;
var G__32678 = cljs.core.count.call(null,c__4148__auto___32675);
var G__32679 = 0;
seq__32639_32664 = G__32676;
chunk__32640_32665 = G__32677;
count__32641_32666 = G__32678;
i__32642_32667 = G__32679;
continue;
}
} else
{var n_32680 = cljs.core.first.call(null,seq__32639_32674__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32680;
goog.events.fireListeners(n_32680,evt.type,false,evt);
}
{
var G__32681 = cljs.core.next.call(null,seq__32639_32674__$1);
var G__32682 = null;
var G__32683 = 0;
var G__32684 = 0;
seq__32639_32664 = G__32681;
chunk__32640_32665 = G__32682;
count__32641_32666 = G__32683;
i__32642_32667 = G__32684;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32691_32697 = cljs.core.seq.call(null,evt_map);var chunk__32692_32698 = null;var count__32693_32699 = 0;var i__32694_32700 = 0;while(true){
if((i__32694_32700 < count__32693_32699))
{var vec__32695_32701 = cljs.core._nth.call(null,chunk__32692_32698,i__32694_32700);var k_32702 = cljs.core.nth.call(null,vec__32695_32701,0,null);var v_32703 = cljs.core.nth.call(null,vec__32695_32701,1,null);(evt[k_32702] = v_32703);
{
var G__32704 = seq__32691_32697;
var G__32705 = chunk__32692_32698;
var G__32706 = count__32693_32699;
var G__32707 = (i__32694_32700 + 1);
seq__32691_32697 = G__32704;
chunk__32692_32698 = G__32705;
count__32693_32699 = G__32706;
i__32694_32700 = G__32707;
continue;
}
} else
{var temp__4092__auto___32708 = cljs.core.seq.call(null,seq__32691_32697);if(temp__4092__auto___32708)
{var seq__32691_32709__$1 = temp__4092__auto___32708;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32691_32709__$1))
{var c__4148__auto___32710 = cljs.core.chunk_first.call(null,seq__32691_32709__$1);{
var G__32711 = cljs.core.chunk_rest.call(null,seq__32691_32709__$1);
var G__32712 = c__4148__auto___32710;
var G__32713 = cljs.core.count.call(null,c__4148__auto___32710);
var G__32714 = 0;
seq__32691_32697 = G__32711;
chunk__32692_32698 = G__32712;
count__32693_32699 = G__32713;
i__32694_32700 = G__32714;
continue;
}
} else
{var vec__32696_32715 = cljs.core.first.call(null,seq__32691_32709__$1);var k_32716 = cljs.core.nth.call(null,vec__32696_32715,0,null);var v_32717 = cljs.core.nth.call(null,vec__32696_32715,1,null);(evt[k_32716] = v_32717);
{
var G__32718 = cljs.core.next.call(null,seq__32691_32709__$1);
var G__32719 = null;
var G__32720 = 0;
var G__32721 = 0;
seq__32691_32697 = G__32718;
chunk__32692_32698 = G__32719;
count__32693_32699 = G__32720;
i__32694_32700 = G__32721;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__32722_SHARP_){return goog.events.getListeners(p1__32722_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
