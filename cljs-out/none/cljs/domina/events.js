// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj85561 = {};return obj85561;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.prevent_default[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.prevent_default["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.current_target[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.current_target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.event_type[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.event_type["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.raw_event[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.raw_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t85565 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t85565 = (function (evt,f,create_listener_function,meta85566){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta85566 = meta85566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t85565.cljs$lang$type = true;
domina.events.t85565.cljs$lang$ctorStr = "domina.events/t85565";
domina.events.t85565.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"domina.events/t85565");
});
domina.events.t85565.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t85565.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t85565.prototype.domina$events$Event$ = true;
domina.events.t85565.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t85565.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t85565.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t85565.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t85565.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t85565.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t85565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85567){var self__ = this;
var _85567__$1 = this;return self__.meta85566;
});
domina.events.t85565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85567,meta85566__$1){var self__ = this;
var _85567__$1 = this;return (new domina.events.t85565(self__.evt,self__.f,self__.create_listener_function,meta85566__$1));
});
domina.events.__GT_t85565 = (function __GT_t85565(evt__$1,f__$1,create_listener_function__$1,meta85566){return (new domina.events.t85565(evt__$1,f__$1,create_listener_function__$1,meta85566));
});
}
return (new domina.events.t85565(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__85572(s__85573){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__85573__$1 = s__85573;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85573__$1);if(temp__4126__auto__)
{var s__85573__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85573__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85573__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85575 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85574 = (0);while(true){
if((i__85574 < size__4374__auto__))
{var node = cljs.core._nth.call(null,c__4373__auto__,i__85574);cljs.core.chunk_append.call(null,b__85575,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__85576 = (i__85574 + (1));
i__85574 = G__85576;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85575),iter__85572.call(null,cljs.core.chunk_rest.call(null,s__85573__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85575),null);
}
} else
{var node = cljs.core.first.call(null,s__85573__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__85572.call(null,cljs.core.rest.call(null,s__85573__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4375__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__85585 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__85586 = null;var count__85587 = (0);var i__85588 = (0);while(true){
if((i__85588 < count__85587))
{var node = cljs.core._nth.call(null,chunk__85586,i__85588);goog.events.removeAll(node);
{
var G__85593 = seq__85585;
var G__85594 = chunk__85586;
var G__85595 = count__85587;
var G__85596 = (i__85588 + (1));
seq__85585 = G__85593;
chunk__85586 = G__85594;
count__85587 = G__85595;
i__85588 = G__85596;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__85585);if(temp__4126__auto__)
{var seq__85585__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85585__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__85585__$1);{
var G__85597 = cljs.core.chunk_rest.call(null,seq__85585__$1);
var G__85598 = c__4406__auto__;
var G__85599 = cljs.core.count.call(null,c__4406__auto__);
var G__85600 = (0);
seq__85585 = G__85597;
chunk__85586 = G__85598;
count__85587 = G__85599;
i__85588 = G__85600;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__85585__$1);goog.events.removeAll(node);
{
var G__85601 = cljs.core.next.call(null,seq__85585__$1);
var G__85602 = null;
var G__85603 = (0);
var G__85604 = (0);
seq__85585 = G__85601;
chunk__85586 = G__85602;
count__85587 = G__85603;
i__85588 = G__85604;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__85589 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__85590 = null;var count__85591 = (0);var i__85592 = (0);while(true){
if((i__85592 < count__85591))
{var node = cljs.core._nth.call(null,chunk__85590,i__85592);goog.events.removeAll(node,type__$1);
{
var G__85605 = seq__85589;
var G__85606 = chunk__85590;
var G__85607 = count__85591;
var G__85608 = (i__85592 + (1));
seq__85589 = G__85605;
chunk__85590 = G__85606;
count__85591 = G__85607;
i__85592 = G__85608;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__85589);if(temp__4126__auto__)
{var seq__85589__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85589__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__85589__$1);{
var G__85609 = cljs.core.chunk_rest.call(null,seq__85589__$1);
var G__85610 = c__4406__auto__;
var G__85611 = cljs.core.count.call(null,c__4406__auto__);
var G__85612 = (0);
seq__85589 = G__85609;
chunk__85590 = G__85610;
count__85591 = G__85611;
i__85592 = G__85612;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__85589__$1);goog.events.removeAll(node,type__$1);
{
var G__85613 = cljs.core.next.call(null,seq__85589__$1);
var G__85614 = null;
var G__85615 = (0);
var G__85616 = (0);
seq__85589 = G__85613;
chunk__85590 = G__85614;
count__85591 = G__85615;
i__85592 = G__85616;
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
var G__85617 = parent;
var G__85618 = cljs.core.cons.call(null,parent,so_far);
n = G__85617;
so_far = G__85618;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__85627_85635 = cljs.core.seq.call(null,ancestors);var chunk__85628_85636 = null;var count__85629_85637 = (0);var i__85630_85638 = (0);while(true){
if((i__85630_85638 < count__85629_85637))
{var n_85639 = cljs.core._nth.call(null,chunk__85628_85636,i__85630_85638);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_85639;
goog.events.fireListeners(n_85639,evt.type,true,evt);
}
{
var G__85640 = seq__85627_85635;
var G__85641 = chunk__85628_85636;
var G__85642 = count__85629_85637;
var G__85643 = (i__85630_85638 + (1));
seq__85627_85635 = G__85640;
chunk__85628_85636 = G__85641;
count__85629_85637 = G__85642;
i__85630_85638 = G__85643;
continue;
}
} else
{var temp__4126__auto___85644 = cljs.core.seq.call(null,seq__85627_85635);if(temp__4126__auto___85644)
{var seq__85627_85645__$1 = temp__4126__auto___85644;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85627_85645__$1))
{var c__4406__auto___85646 = cljs.core.chunk_first.call(null,seq__85627_85645__$1);{
var G__85647 = cljs.core.chunk_rest.call(null,seq__85627_85645__$1);
var G__85648 = c__4406__auto___85646;
var G__85649 = cljs.core.count.call(null,c__4406__auto___85646);
var G__85650 = (0);
seq__85627_85635 = G__85647;
chunk__85628_85636 = G__85648;
count__85629_85637 = G__85649;
i__85630_85638 = G__85650;
continue;
}
} else
{var n_85651 = cljs.core.first.call(null,seq__85627_85645__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_85651;
goog.events.fireListeners(n_85651,evt.type,true,evt);
}
{
var G__85652 = cljs.core.next.call(null,seq__85627_85645__$1);
var G__85653 = null;
var G__85654 = (0);
var G__85655 = (0);
seq__85627_85635 = G__85652;
chunk__85628_85636 = G__85653;
count__85629_85637 = G__85654;
i__85630_85638 = G__85655;
continue;
}
}
} else
{}
}
break;
}
var seq__85631_85656 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__85632_85657 = null;var count__85633_85658 = (0);var i__85634_85659 = (0);while(true){
if((i__85634_85659 < count__85633_85658))
{var n_85660 = cljs.core._nth.call(null,chunk__85632_85657,i__85634_85659);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_85660;
goog.events.fireListeners(n_85660,evt.type,false,evt);
}
{
var G__85661 = seq__85631_85656;
var G__85662 = chunk__85632_85657;
var G__85663 = count__85633_85658;
var G__85664 = (i__85634_85659 + (1));
seq__85631_85656 = G__85661;
chunk__85632_85657 = G__85662;
count__85633_85658 = G__85663;
i__85634_85659 = G__85664;
continue;
}
} else
{var temp__4126__auto___85665 = cljs.core.seq.call(null,seq__85631_85656);if(temp__4126__auto___85665)
{var seq__85631_85666__$1 = temp__4126__auto___85665;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85631_85666__$1))
{var c__4406__auto___85667 = cljs.core.chunk_first.call(null,seq__85631_85666__$1);{
var G__85668 = cljs.core.chunk_rest.call(null,seq__85631_85666__$1);
var G__85669 = c__4406__auto___85667;
var G__85670 = cljs.core.count.call(null,c__4406__auto___85667);
var G__85671 = (0);
seq__85631_85656 = G__85668;
chunk__85632_85657 = G__85669;
count__85633_85658 = G__85670;
i__85634_85659 = G__85671;
continue;
}
} else
{var n_85672 = cljs.core.first.call(null,seq__85631_85666__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_85672;
goog.events.fireListeners(n_85672,evt.type,false,evt);
}
{
var G__85673 = cljs.core.next.call(null,seq__85631_85666__$1);
var G__85674 = null;
var G__85675 = (0);
var G__85676 = (0);
seq__85631_85656 = G__85673;
chunk__85632_85657 = G__85674;
count__85633_85658 = G__85675;
i__85634_85659 = G__85676;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3625__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3625__auto__))
{return o.dispatchEvent;
} else
{return and__3625__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__85683_85689 = cljs.core.seq.call(null,evt_map);var chunk__85684_85690 = null;var count__85685_85691 = (0);var i__85686_85692 = (0);while(true){
if((i__85686_85692 < count__85685_85691))
{var vec__85687_85693 = cljs.core._nth.call(null,chunk__85684_85690,i__85686_85692);var k_85694 = cljs.core.nth.call(null,vec__85687_85693,(0),null);var v_85695 = cljs.core.nth.call(null,vec__85687_85693,(1),null);(evt[k_85694] = v_85695);
{
var G__85696 = seq__85683_85689;
var G__85697 = chunk__85684_85690;
var G__85698 = count__85685_85691;
var G__85699 = (i__85686_85692 + (1));
seq__85683_85689 = G__85696;
chunk__85684_85690 = G__85697;
count__85685_85691 = G__85698;
i__85686_85692 = G__85699;
continue;
}
} else
{var temp__4126__auto___85700 = cljs.core.seq.call(null,seq__85683_85689);if(temp__4126__auto___85700)
{var seq__85683_85701__$1 = temp__4126__auto___85700;if(cljs.core.chunked_seq_QMARK_.call(null,seq__85683_85701__$1))
{var c__4406__auto___85702 = cljs.core.chunk_first.call(null,seq__85683_85701__$1);{
var G__85703 = cljs.core.chunk_rest.call(null,seq__85683_85701__$1);
var G__85704 = c__4406__auto___85702;
var G__85705 = cljs.core.count.call(null,c__4406__auto___85702);
var G__85706 = (0);
seq__85683_85689 = G__85703;
chunk__85684_85690 = G__85704;
count__85685_85691 = G__85705;
i__85686_85692 = G__85706;
continue;
}
} else
{var vec__85688_85707 = cljs.core.first.call(null,seq__85683_85701__$1);var k_85708 = cljs.core.nth.call(null,vec__85688_85707,(0),null);var v_85709 = cljs.core.nth.call(null,vec__85688_85707,(1),null);(evt[k_85708] = v_85709);
{
var G__85710 = cljs.core.next.call(null,seq__85683_85701__$1);
var G__85711 = null;
var G__85712 = (0);
var G__85713 = (0);
seq__85683_85689 = G__85710;
chunk__85684_85690 = G__85711;
count__85685_85691 = G__85712;
i__85686_85692 = G__85713;
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
return (function (p1__85714_SHARP_){return goog.events.getListeners(p1__85714_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map