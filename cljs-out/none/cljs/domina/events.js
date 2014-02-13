// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16590 = {};return obj16590;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16594 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16594 = (function (evt,f,create_listener_function,meta16595){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16595 = meta16595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16594.cljs$lang$type = true;
domina.events.t16594.cljs$lang$ctorStr = "domina.events/t16594";
domina.events.t16594.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16594");
});
domina.events.t16594.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16594.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16594.prototype.domina$events$Event$ = true;
domina.events.t16594.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16594.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16594.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16594.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16594.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16594.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16596){var self__ = this;
var _16596__$1 = this;return self__.meta16595;
});
domina.events.t16594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16596,meta16595__$1){var self__ = this;
var _16596__$1 = this;return (new domina.events.t16594(self__.evt,self__.f,self__.create_listener_function,meta16595__$1));
});
domina.events.__GT_t16594 = (function __GT_t16594(evt__$1,f__$1,create_listener_function__$1,meta16595){return (new domina.events.t16594(evt__$1,f__$1,create_listener_function__$1,meta16595));
});
}
return (new domina.events.t16594(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16601(s__16602){return (new cljs.core.LazySeq(null,(function (){var s__16602__$1 = s__16602;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16602__$1);if(temp__4092__auto__)
{var s__16602__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16602__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16602__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16604 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16603 = 0;while(true){
if((i__16603 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16603);cljs.core.chunk_append.call(null,b__16604,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16605 = (i__16603 + 1);
i__16603 = G__16605;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16604),iter__16601.call(null,cljs.core.chunk_rest.call(null,s__16602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16604),null);
}
} else
{var node = cljs.core.first.call(null,s__16602__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16601.call(null,cljs.core.rest.call(null,s__16602__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16614 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16615 = null;var count__16616 = 0;var i__16617 = 0;while(true){
if((i__16617 < count__16616))
{var node = cljs.core._nth.call(null,chunk__16615,i__16617);goog.events.removeAll(node);
{
var G__16622 = seq__16614;
var G__16623 = chunk__16615;
var G__16624 = count__16616;
var G__16625 = (i__16617 + 1);
seq__16614 = G__16622;
chunk__16615 = G__16623;
count__16616 = G__16624;
i__16617 = G__16625;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16614);if(temp__4092__auto__)
{var seq__16614__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16614__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16614__$1);{
var G__16626 = cljs.core.chunk_rest.call(null,seq__16614__$1);
var G__16627 = c__4148__auto__;
var G__16628 = cljs.core.count.call(null,c__4148__auto__);
var G__16629 = 0;
seq__16614 = G__16626;
chunk__16615 = G__16627;
count__16616 = G__16628;
i__16617 = G__16629;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16614__$1);goog.events.removeAll(node);
{
var G__16630 = cljs.core.next.call(null,seq__16614__$1);
var G__16631 = null;
var G__16632 = 0;
var G__16633 = 0;
seq__16614 = G__16630;
chunk__16615 = G__16631;
count__16616 = G__16632;
i__16617 = G__16633;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16618 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16619 = null;var count__16620 = 0;var i__16621 = 0;while(true){
if((i__16621 < count__16620))
{var node = cljs.core._nth.call(null,chunk__16619,i__16621);goog.events.removeAll(node,type__$1);
{
var G__16634 = seq__16618;
var G__16635 = chunk__16619;
var G__16636 = count__16620;
var G__16637 = (i__16621 + 1);
seq__16618 = G__16634;
chunk__16619 = G__16635;
count__16620 = G__16636;
i__16621 = G__16637;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16618);if(temp__4092__auto__)
{var seq__16618__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16618__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16618__$1);{
var G__16638 = cljs.core.chunk_rest.call(null,seq__16618__$1);
var G__16639 = c__4148__auto__;
var G__16640 = cljs.core.count.call(null,c__4148__auto__);
var G__16641 = 0;
seq__16618 = G__16638;
chunk__16619 = G__16639;
count__16620 = G__16640;
i__16621 = G__16641;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16618__$1);goog.events.removeAll(node,type__$1);
{
var G__16642 = cljs.core.next.call(null,seq__16618__$1);
var G__16643 = null;
var G__16644 = 0;
var G__16645 = 0;
seq__16618 = G__16642;
chunk__16619 = G__16643;
count__16620 = G__16644;
i__16621 = G__16645;
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
var G__16646 = parent;
var G__16647 = cljs.core.cons.call(null,parent,so_far);
n = G__16646;
so_far = G__16647;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16656_16664 = cljs.core.seq.call(null,ancestors);var chunk__16657_16665 = null;var count__16658_16666 = 0;var i__16659_16667 = 0;while(true){
if((i__16659_16667 < count__16658_16666))
{var n_16668 = cljs.core._nth.call(null,chunk__16657_16665,i__16659_16667);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16668;
goog.events.fireListeners(n_16668,evt.type,true,evt);
}
{
var G__16669 = seq__16656_16664;
var G__16670 = chunk__16657_16665;
var G__16671 = count__16658_16666;
var G__16672 = (i__16659_16667 + 1);
seq__16656_16664 = G__16669;
chunk__16657_16665 = G__16670;
count__16658_16666 = G__16671;
i__16659_16667 = G__16672;
continue;
}
} else
{var temp__4092__auto___16673 = cljs.core.seq.call(null,seq__16656_16664);if(temp__4092__auto___16673)
{var seq__16656_16674__$1 = temp__4092__auto___16673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16656_16674__$1))
{var c__4148__auto___16675 = cljs.core.chunk_first.call(null,seq__16656_16674__$1);{
var G__16676 = cljs.core.chunk_rest.call(null,seq__16656_16674__$1);
var G__16677 = c__4148__auto___16675;
var G__16678 = cljs.core.count.call(null,c__4148__auto___16675);
var G__16679 = 0;
seq__16656_16664 = G__16676;
chunk__16657_16665 = G__16677;
count__16658_16666 = G__16678;
i__16659_16667 = G__16679;
continue;
}
} else
{var n_16680 = cljs.core.first.call(null,seq__16656_16674__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16680;
goog.events.fireListeners(n_16680,evt.type,true,evt);
}
{
var G__16681 = cljs.core.next.call(null,seq__16656_16674__$1);
var G__16682 = null;
var G__16683 = 0;
var G__16684 = 0;
seq__16656_16664 = G__16681;
chunk__16657_16665 = G__16682;
count__16658_16666 = G__16683;
i__16659_16667 = G__16684;
continue;
}
}
} else
{}
}
break;
}
var seq__16660_16685 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16661_16686 = null;var count__16662_16687 = 0;var i__16663_16688 = 0;while(true){
if((i__16663_16688 < count__16662_16687))
{var n_16689 = cljs.core._nth.call(null,chunk__16661_16686,i__16663_16688);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16689;
goog.events.fireListeners(n_16689,evt.type,false,evt);
}
{
var G__16690 = seq__16660_16685;
var G__16691 = chunk__16661_16686;
var G__16692 = count__16662_16687;
var G__16693 = (i__16663_16688 + 1);
seq__16660_16685 = G__16690;
chunk__16661_16686 = G__16691;
count__16662_16687 = G__16692;
i__16663_16688 = G__16693;
continue;
}
} else
{var temp__4092__auto___16694 = cljs.core.seq.call(null,seq__16660_16685);if(temp__4092__auto___16694)
{var seq__16660_16695__$1 = temp__4092__auto___16694;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16660_16695__$1))
{var c__4148__auto___16696 = cljs.core.chunk_first.call(null,seq__16660_16695__$1);{
var G__16697 = cljs.core.chunk_rest.call(null,seq__16660_16695__$1);
var G__16698 = c__4148__auto___16696;
var G__16699 = cljs.core.count.call(null,c__4148__auto___16696);
var G__16700 = 0;
seq__16660_16685 = G__16697;
chunk__16661_16686 = G__16698;
count__16662_16687 = G__16699;
i__16663_16688 = G__16700;
continue;
}
} else
{var n_16701 = cljs.core.first.call(null,seq__16660_16695__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16701;
goog.events.fireListeners(n_16701,evt.type,false,evt);
}
{
var G__16702 = cljs.core.next.call(null,seq__16660_16695__$1);
var G__16703 = null;
var G__16704 = 0;
var G__16705 = 0;
seq__16660_16685 = G__16702;
chunk__16661_16686 = G__16703;
count__16662_16687 = G__16704;
i__16663_16688 = G__16705;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16712_16718 = cljs.core.seq.call(null,evt_map);var chunk__16713_16719 = null;var count__16714_16720 = 0;var i__16715_16721 = 0;while(true){
if((i__16715_16721 < count__16714_16720))
{var vec__16716_16722 = cljs.core._nth.call(null,chunk__16713_16719,i__16715_16721);var k_16723 = cljs.core.nth.call(null,vec__16716_16722,0,null);var v_16724 = cljs.core.nth.call(null,vec__16716_16722,1,null);(evt[k_16723] = v_16724);
{
var G__16725 = seq__16712_16718;
var G__16726 = chunk__16713_16719;
var G__16727 = count__16714_16720;
var G__16728 = (i__16715_16721 + 1);
seq__16712_16718 = G__16725;
chunk__16713_16719 = G__16726;
count__16714_16720 = G__16727;
i__16715_16721 = G__16728;
continue;
}
} else
{var temp__4092__auto___16729 = cljs.core.seq.call(null,seq__16712_16718);if(temp__4092__auto___16729)
{var seq__16712_16730__$1 = temp__4092__auto___16729;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16712_16730__$1))
{var c__4148__auto___16731 = cljs.core.chunk_first.call(null,seq__16712_16730__$1);{
var G__16732 = cljs.core.chunk_rest.call(null,seq__16712_16730__$1);
var G__16733 = c__4148__auto___16731;
var G__16734 = cljs.core.count.call(null,c__4148__auto___16731);
var G__16735 = 0;
seq__16712_16718 = G__16732;
chunk__16713_16719 = G__16733;
count__16714_16720 = G__16734;
i__16715_16721 = G__16735;
continue;
}
} else
{var vec__16717_16736 = cljs.core.first.call(null,seq__16712_16730__$1);var k_16737 = cljs.core.nth.call(null,vec__16717_16736,0,null);var v_16738 = cljs.core.nth.call(null,vec__16717_16736,1,null);(evt[k_16737] = v_16738);
{
var G__16739 = cljs.core.next.call(null,seq__16712_16730__$1);
var G__16740 = null;
var G__16741 = 0;
var G__16742 = 0;
seq__16712_16718 = G__16739;
chunk__16713_16719 = G__16740;
count__16714_16720 = G__16741;
i__16715_16721 = G__16742;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16743_SHARP_){return goog.events.getListeners(p1__16743_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map