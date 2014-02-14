// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37566 = {};return obj37566;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37570 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37570 = (function (evt,f,create_listener_function,meta37571){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37571 = meta37571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37570.cljs$lang$type = true;
domina.events.t37570.cljs$lang$ctorStr = "domina.events/t37570";
domina.events.t37570.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t37570");
});
domina.events.t37570.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37570.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t37570.prototype.domina$events$Event$ = true;
domina.events.t37570.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37570.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37570.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37570.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37570.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37570.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37572){var self__ = this;
var _37572__$1 = this;return self__.meta37571;
});
domina.events.t37570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37572,meta37571__$1){var self__ = this;
var _37572__$1 = this;return (new domina.events.t37570(self__.evt,self__.f,self__.create_listener_function,meta37571__$1));
});
domina.events.__GT_t37570 = (function __GT_t37570(evt__$1,f__$1,create_listener_function__$1,meta37571){return (new domina.events.t37570(evt__$1,f__$1,create_listener_function__$1,meta37571));
});
}
return (new domina.events.t37570(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__37577(s__37578){return (new cljs.core.LazySeq(null,(function (){var s__37578__$1 = s__37578;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37578__$1);if(temp__4092__auto__)
{var s__37578__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37578__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37578__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37580 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37579 = 0;while(true){
if((i__37579 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__37579);cljs.core.chunk_append.call(null,b__37580,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37581 = (i__37579 + 1);
i__37579 = G__37581;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37580),iter__37577.call(null,cljs.core.chunk_rest.call(null,s__37578__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37580),null);
}
} else
{var node = cljs.core.first.call(null,s__37578__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37577.call(null,cljs.core.rest.call(null,s__37578__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37590 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37591 = null;var count__37592 = 0;var i__37593 = 0;while(true){
if((i__37593 < count__37592))
{var node = cljs.core._nth.call(null,chunk__37591,i__37593);goog.events.removeAll(node);
{
var G__37598 = seq__37590;
var G__37599 = chunk__37591;
var G__37600 = count__37592;
var G__37601 = (i__37593 + 1);
seq__37590 = G__37598;
chunk__37591 = G__37599;
count__37592 = G__37600;
i__37593 = G__37601;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37590);if(temp__4092__auto__)
{var seq__37590__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37590__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37590__$1);{
var G__37602 = cljs.core.chunk_rest.call(null,seq__37590__$1);
var G__37603 = c__4148__auto__;
var G__37604 = cljs.core.count.call(null,c__4148__auto__);
var G__37605 = 0;
seq__37590 = G__37602;
chunk__37591 = G__37603;
count__37592 = G__37604;
i__37593 = G__37605;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37590__$1);goog.events.removeAll(node);
{
var G__37606 = cljs.core.next.call(null,seq__37590__$1);
var G__37607 = null;
var G__37608 = 0;
var G__37609 = 0;
seq__37590 = G__37606;
chunk__37591 = G__37607;
count__37592 = G__37608;
i__37593 = G__37609;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37594 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37595 = null;var count__37596 = 0;var i__37597 = 0;while(true){
if((i__37597 < count__37596))
{var node = cljs.core._nth.call(null,chunk__37595,i__37597);goog.events.removeAll(node,type__$1);
{
var G__37610 = seq__37594;
var G__37611 = chunk__37595;
var G__37612 = count__37596;
var G__37613 = (i__37597 + 1);
seq__37594 = G__37610;
chunk__37595 = G__37611;
count__37596 = G__37612;
i__37597 = G__37613;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37594);if(temp__4092__auto__)
{var seq__37594__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37594__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37594__$1);{
var G__37614 = cljs.core.chunk_rest.call(null,seq__37594__$1);
var G__37615 = c__4148__auto__;
var G__37616 = cljs.core.count.call(null,c__4148__auto__);
var G__37617 = 0;
seq__37594 = G__37614;
chunk__37595 = G__37615;
count__37596 = G__37616;
i__37597 = G__37617;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37594__$1);goog.events.removeAll(node,type__$1);
{
var G__37618 = cljs.core.next.call(null,seq__37594__$1);
var G__37619 = null;
var G__37620 = 0;
var G__37621 = 0;
seq__37594 = G__37618;
chunk__37595 = G__37619;
count__37596 = G__37620;
i__37597 = G__37621;
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
var G__37622 = parent;
var G__37623 = cljs.core.cons.call(null,parent,so_far);
n = G__37622;
so_far = G__37623;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37632_37640 = cljs.core.seq.call(null,ancestors);var chunk__37633_37641 = null;var count__37634_37642 = 0;var i__37635_37643 = 0;while(true){
if((i__37635_37643 < count__37634_37642))
{var n_37644 = cljs.core._nth.call(null,chunk__37633_37641,i__37635_37643);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37644;
goog.events.fireListeners(n_37644,evt.type,true,evt);
}
{
var G__37645 = seq__37632_37640;
var G__37646 = chunk__37633_37641;
var G__37647 = count__37634_37642;
var G__37648 = (i__37635_37643 + 1);
seq__37632_37640 = G__37645;
chunk__37633_37641 = G__37646;
count__37634_37642 = G__37647;
i__37635_37643 = G__37648;
continue;
}
} else
{var temp__4092__auto___37649 = cljs.core.seq.call(null,seq__37632_37640);if(temp__4092__auto___37649)
{var seq__37632_37650__$1 = temp__4092__auto___37649;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37632_37650__$1))
{var c__4148__auto___37651 = cljs.core.chunk_first.call(null,seq__37632_37650__$1);{
var G__37652 = cljs.core.chunk_rest.call(null,seq__37632_37650__$1);
var G__37653 = c__4148__auto___37651;
var G__37654 = cljs.core.count.call(null,c__4148__auto___37651);
var G__37655 = 0;
seq__37632_37640 = G__37652;
chunk__37633_37641 = G__37653;
count__37634_37642 = G__37654;
i__37635_37643 = G__37655;
continue;
}
} else
{var n_37656 = cljs.core.first.call(null,seq__37632_37650__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37656;
goog.events.fireListeners(n_37656,evt.type,true,evt);
}
{
var G__37657 = cljs.core.next.call(null,seq__37632_37650__$1);
var G__37658 = null;
var G__37659 = 0;
var G__37660 = 0;
seq__37632_37640 = G__37657;
chunk__37633_37641 = G__37658;
count__37634_37642 = G__37659;
i__37635_37643 = G__37660;
continue;
}
}
} else
{}
}
break;
}
var seq__37636_37661 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37637_37662 = null;var count__37638_37663 = 0;var i__37639_37664 = 0;while(true){
if((i__37639_37664 < count__37638_37663))
{var n_37665 = cljs.core._nth.call(null,chunk__37637_37662,i__37639_37664);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37665;
goog.events.fireListeners(n_37665,evt.type,false,evt);
}
{
var G__37666 = seq__37636_37661;
var G__37667 = chunk__37637_37662;
var G__37668 = count__37638_37663;
var G__37669 = (i__37639_37664 + 1);
seq__37636_37661 = G__37666;
chunk__37637_37662 = G__37667;
count__37638_37663 = G__37668;
i__37639_37664 = G__37669;
continue;
}
} else
{var temp__4092__auto___37670 = cljs.core.seq.call(null,seq__37636_37661);if(temp__4092__auto___37670)
{var seq__37636_37671__$1 = temp__4092__auto___37670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37636_37671__$1))
{var c__4148__auto___37672 = cljs.core.chunk_first.call(null,seq__37636_37671__$1);{
var G__37673 = cljs.core.chunk_rest.call(null,seq__37636_37671__$1);
var G__37674 = c__4148__auto___37672;
var G__37675 = cljs.core.count.call(null,c__4148__auto___37672);
var G__37676 = 0;
seq__37636_37661 = G__37673;
chunk__37637_37662 = G__37674;
count__37638_37663 = G__37675;
i__37639_37664 = G__37676;
continue;
}
} else
{var n_37677 = cljs.core.first.call(null,seq__37636_37671__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37677;
goog.events.fireListeners(n_37677,evt.type,false,evt);
}
{
var G__37678 = cljs.core.next.call(null,seq__37636_37671__$1);
var G__37679 = null;
var G__37680 = 0;
var G__37681 = 0;
seq__37636_37661 = G__37678;
chunk__37637_37662 = G__37679;
count__37638_37663 = G__37680;
i__37639_37664 = G__37681;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37688_37694 = cljs.core.seq.call(null,evt_map);var chunk__37689_37695 = null;var count__37690_37696 = 0;var i__37691_37697 = 0;while(true){
if((i__37691_37697 < count__37690_37696))
{var vec__37692_37698 = cljs.core._nth.call(null,chunk__37689_37695,i__37691_37697);var k_37699 = cljs.core.nth.call(null,vec__37692_37698,0,null);var v_37700 = cljs.core.nth.call(null,vec__37692_37698,1,null);(evt[k_37699] = v_37700);
{
var G__37701 = seq__37688_37694;
var G__37702 = chunk__37689_37695;
var G__37703 = count__37690_37696;
var G__37704 = (i__37691_37697 + 1);
seq__37688_37694 = G__37701;
chunk__37689_37695 = G__37702;
count__37690_37696 = G__37703;
i__37691_37697 = G__37704;
continue;
}
} else
{var temp__4092__auto___37705 = cljs.core.seq.call(null,seq__37688_37694);if(temp__4092__auto___37705)
{var seq__37688_37706__$1 = temp__4092__auto___37705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37688_37706__$1))
{var c__4148__auto___37707 = cljs.core.chunk_first.call(null,seq__37688_37706__$1);{
var G__37708 = cljs.core.chunk_rest.call(null,seq__37688_37706__$1);
var G__37709 = c__4148__auto___37707;
var G__37710 = cljs.core.count.call(null,c__4148__auto___37707);
var G__37711 = 0;
seq__37688_37694 = G__37708;
chunk__37689_37695 = G__37709;
count__37690_37696 = G__37710;
i__37691_37697 = G__37711;
continue;
}
} else
{var vec__37693_37712 = cljs.core.first.call(null,seq__37688_37706__$1);var k_37713 = cljs.core.nth.call(null,vec__37693_37712,0,null);var v_37714 = cljs.core.nth.call(null,vec__37693_37712,1,null);(evt[k_37713] = v_37714);
{
var G__37715 = cljs.core.next.call(null,seq__37688_37706__$1);
var G__37716 = null;
var G__37717 = 0;
var G__37718 = 0;
seq__37688_37694 = G__37715;
chunk__37689_37695 = G__37716;
count__37690_37696 = G__37717;
i__37691_37697 = G__37718;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__37719_SHARP_){return goog.events.getListeners(p1__37719_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
