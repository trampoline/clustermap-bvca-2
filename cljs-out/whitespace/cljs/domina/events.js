// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36634 = {};return obj36634;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36638 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36638 = (function (evt,f,create_listener_function,meta36639){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36639 = meta36639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36638.cljs$lang$type = true;
domina.events.t36638.cljs$lang$ctorStr = "domina.events/t36638";
domina.events.t36638.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36638");
});
domina.events.t36638.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36638.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36638.prototype.domina$events$Event$ = true;
domina.events.t36638.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36638.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36638.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36638.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36638.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36638.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36640){var self__ = this;
var _36640__$1 = this;return self__.meta36639;
});
domina.events.t36638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36640,meta36639__$1){var self__ = this;
var _36640__$1 = this;return (new domina.events.t36638(self__.evt,self__.f,self__.create_listener_function,meta36639__$1));
});
domina.events.__GT_t36638 = (function __GT_t36638(evt__$1,f__$1,create_listener_function__$1,meta36639){return (new domina.events.t36638(evt__$1,f__$1,create_listener_function__$1,meta36639));
});
}
return (new domina.events.t36638(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36645(s__36646){return (new cljs.core.LazySeq(null,(function (){var s__36646__$1 = s__36646;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36646__$1);if(temp__4092__auto__)
{var s__36646__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36646__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36646__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36648 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36647 = 0;while(true){
if((i__36647 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36647);cljs.core.chunk_append.call(null,b__36648,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36649 = (i__36647 + 1);
i__36647 = G__36649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36648),iter__36645.call(null,cljs.core.chunk_rest.call(null,s__36646__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36648),null);
}
} else
{var node = cljs.core.first.call(null,s__36646__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36645.call(null,cljs.core.rest.call(null,s__36646__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36658 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36659 = null;var count__36660 = 0;var i__36661 = 0;while(true){
if((i__36661 < count__36660))
{var node = cljs.core._nth.call(null,chunk__36659,i__36661);goog.events.removeAll(node);
{
var G__36666 = seq__36658;
var G__36667 = chunk__36659;
var G__36668 = count__36660;
var G__36669 = (i__36661 + 1);
seq__36658 = G__36666;
chunk__36659 = G__36667;
count__36660 = G__36668;
i__36661 = G__36669;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36658);if(temp__4092__auto__)
{var seq__36658__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36658__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36658__$1);{
var G__36670 = cljs.core.chunk_rest.call(null,seq__36658__$1);
var G__36671 = c__4148__auto__;
var G__36672 = cljs.core.count.call(null,c__4148__auto__);
var G__36673 = 0;
seq__36658 = G__36670;
chunk__36659 = G__36671;
count__36660 = G__36672;
i__36661 = G__36673;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36658__$1);goog.events.removeAll(node);
{
var G__36674 = cljs.core.next.call(null,seq__36658__$1);
var G__36675 = null;
var G__36676 = 0;
var G__36677 = 0;
seq__36658 = G__36674;
chunk__36659 = G__36675;
count__36660 = G__36676;
i__36661 = G__36677;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36662 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36663 = null;var count__36664 = 0;var i__36665 = 0;while(true){
if((i__36665 < count__36664))
{var node = cljs.core._nth.call(null,chunk__36663,i__36665);goog.events.removeAll(node,type__$1);
{
var G__36678 = seq__36662;
var G__36679 = chunk__36663;
var G__36680 = count__36664;
var G__36681 = (i__36665 + 1);
seq__36662 = G__36678;
chunk__36663 = G__36679;
count__36664 = G__36680;
i__36665 = G__36681;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36662);if(temp__4092__auto__)
{var seq__36662__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36662__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36662__$1);{
var G__36682 = cljs.core.chunk_rest.call(null,seq__36662__$1);
var G__36683 = c__4148__auto__;
var G__36684 = cljs.core.count.call(null,c__4148__auto__);
var G__36685 = 0;
seq__36662 = G__36682;
chunk__36663 = G__36683;
count__36664 = G__36684;
i__36665 = G__36685;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36662__$1);goog.events.removeAll(node,type__$1);
{
var G__36686 = cljs.core.next.call(null,seq__36662__$1);
var G__36687 = null;
var G__36688 = 0;
var G__36689 = 0;
seq__36662 = G__36686;
chunk__36663 = G__36687;
count__36664 = G__36688;
i__36665 = G__36689;
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
var G__36690 = parent;
var G__36691 = cljs.core.cons.call(null,parent,so_far);
n = G__36690;
so_far = G__36691;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36700_36708 = cljs.core.seq.call(null,ancestors);var chunk__36701_36709 = null;var count__36702_36710 = 0;var i__36703_36711 = 0;while(true){
if((i__36703_36711 < count__36702_36710))
{var n_36712 = cljs.core._nth.call(null,chunk__36701_36709,i__36703_36711);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36712;
goog.events.fireListeners(n_36712,evt.type,true,evt);
}
{
var G__36713 = seq__36700_36708;
var G__36714 = chunk__36701_36709;
var G__36715 = count__36702_36710;
var G__36716 = (i__36703_36711 + 1);
seq__36700_36708 = G__36713;
chunk__36701_36709 = G__36714;
count__36702_36710 = G__36715;
i__36703_36711 = G__36716;
continue;
}
} else
{var temp__4092__auto___36717 = cljs.core.seq.call(null,seq__36700_36708);if(temp__4092__auto___36717)
{var seq__36700_36718__$1 = temp__4092__auto___36717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36700_36718__$1))
{var c__4148__auto___36719 = cljs.core.chunk_first.call(null,seq__36700_36718__$1);{
var G__36720 = cljs.core.chunk_rest.call(null,seq__36700_36718__$1);
var G__36721 = c__4148__auto___36719;
var G__36722 = cljs.core.count.call(null,c__4148__auto___36719);
var G__36723 = 0;
seq__36700_36708 = G__36720;
chunk__36701_36709 = G__36721;
count__36702_36710 = G__36722;
i__36703_36711 = G__36723;
continue;
}
} else
{var n_36724 = cljs.core.first.call(null,seq__36700_36718__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36724;
goog.events.fireListeners(n_36724,evt.type,true,evt);
}
{
var G__36725 = cljs.core.next.call(null,seq__36700_36718__$1);
var G__36726 = null;
var G__36727 = 0;
var G__36728 = 0;
seq__36700_36708 = G__36725;
chunk__36701_36709 = G__36726;
count__36702_36710 = G__36727;
i__36703_36711 = G__36728;
continue;
}
}
} else
{}
}
break;
}
var seq__36704_36729 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36705_36730 = null;var count__36706_36731 = 0;var i__36707_36732 = 0;while(true){
if((i__36707_36732 < count__36706_36731))
{var n_36733 = cljs.core._nth.call(null,chunk__36705_36730,i__36707_36732);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36733;
goog.events.fireListeners(n_36733,evt.type,false,evt);
}
{
var G__36734 = seq__36704_36729;
var G__36735 = chunk__36705_36730;
var G__36736 = count__36706_36731;
var G__36737 = (i__36707_36732 + 1);
seq__36704_36729 = G__36734;
chunk__36705_36730 = G__36735;
count__36706_36731 = G__36736;
i__36707_36732 = G__36737;
continue;
}
} else
{var temp__4092__auto___36738 = cljs.core.seq.call(null,seq__36704_36729);if(temp__4092__auto___36738)
{var seq__36704_36739__$1 = temp__4092__auto___36738;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36704_36739__$1))
{var c__4148__auto___36740 = cljs.core.chunk_first.call(null,seq__36704_36739__$1);{
var G__36741 = cljs.core.chunk_rest.call(null,seq__36704_36739__$1);
var G__36742 = c__4148__auto___36740;
var G__36743 = cljs.core.count.call(null,c__4148__auto___36740);
var G__36744 = 0;
seq__36704_36729 = G__36741;
chunk__36705_36730 = G__36742;
count__36706_36731 = G__36743;
i__36707_36732 = G__36744;
continue;
}
} else
{var n_36745 = cljs.core.first.call(null,seq__36704_36739__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36745;
goog.events.fireListeners(n_36745,evt.type,false,evt);
}
{
var G__36746 = cljs.core.next.call(null,seq__36704_36739__$1);
var G__36747 = null;
var G__36748 = 0;
var G__36749 = 0;
seq__36704_36729 = G__36746;
chunk__36705_36730 = G__36747;
count__36706_36731 = G__36748;
i__36707_36732 = G__36749;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36756_36762 = cljs.core.seq.call(null,evt_map);var chunk__36757_36763 = null;var count__36758_36764 = 0;var i__36759_36765 = 0;while(true){
if((i__36759_36765 < count__36758_36764))
{var vec__36760_36766 = cljs.core._nth.call(null,chunk__36757_36763,i__36759_36765);var k_36767 = cljs.core.nth.call(null,vec__36760_36766,0,null);var v_36768 = cljs.core.nth.call(null,vec__36760_36766,1,null);(evt[k_36767] = v_36768);
{
var G__36769 = seq__36756_36762;
var G__36770 = chunk__36757_36763;
var G__36771 = count__36758_36764;
var G__36772 = (i__36759_36765 + 1);
seq__36756_36762 = G__36769;
chunk__36757_36763 = G__36770;
count__36758_36764 = G__36771;
i__36759_36765 = G__36772;
continue;
}
} else
{var temp__4092__auto___36773 = cljs.core.seq.call(null,seq__36756_36762);if(temp__4092__auto___36773)
{var seq__36756_36774__$1 = temp__4092__auto___36773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36756_36774__$1))
{var c__4148__auto___36775 = cljs.core.chunk_first.call(null,seq__36756_36774__$1);{
var G__36776 = cljs.core.chunk_rest.call(null,seq__36756_36774__$1);
var G__36777 = c__4148__auto___36775;
var G__36778 = cljs.core.count.call(null,c__4148__auto___36775);
var G__36779 = 0;
seq__36756_36762 = G__36776;
chunk__36757_36763 = G__36777;
count__36758_36764 = G__36778;
i__36759_36765 = G__36779;
continue;
}
} else
{var vec__36761_36780 = cljs.core.first.call(null,seq__36756_36774__$1);var k_36781 = cljs.core.nth.call(null,vec__36761_36780,0,null);var v_36782 = cljs.core.nth.call(null,vec__36761_36780,1,null);(evt[k_36781] = v_36782);
{
var G__36783 = cljs.core.next.call(null,seq__36756_36774__$1);
var G__36784 = null;
var G__36785 = 0;
var G__36786 = 0;
seq__36756_36762 = G__36783;
chunk__36757_36763 = G__36784;
count__36758_36764 = G__36785;
i__36759_36765 = G__36786;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36787_SHARP_){return goog.events.getListeners(p1__36787_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
