// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj34668 = {};return obj34668;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t34672 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t34672 = (function (evt,f,create_listener_function,meta34673){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta34673 = meta34673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t34672.cljs$lang$type = true;
domina.events.t34672.cljs$lang$ctorStr = "domina.events/t34672";
domina.events.t34672.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t34672");
});
domina.events.t34672.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t34672.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t34672.prototype.domina$events$Event$ = true;
domina.events.t34672.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t34672.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t34672.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t34672.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t34672.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t34672.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t34672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34674){var self__ = this;
var _34674__$1 = this;return self__.meta34673;
});
domina.events.t34672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34674,meta34673__$1){var self__ = this;
var _34674__$1 = this;return (new domina.events.t34672(self__.evt,self__.f,self__.create_listener_function,meta34673__$1));
});
domina.events.__GT_t34672 = (function __GT_t34672(evt__$1,f__$1,create_listener_function__$1,meta34673){return (new domina.events.t34672(evt__$1,f__$1,create_listener_function__$1,meta34673));
});
}
return (new domina.events.t34672(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__34679(s__34680){return (new cljs.core.LazySeq(null,(function (){var s__34680__$1 = s__34680;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34680__$1);if(temp__4092__auto__)
{var s__34680__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34680__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34680__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34682 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34681 = 0;while(true){
if((i__34681 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__34681);cljs.core.chunk_append.call(null,b__34682,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__34683 = (i__34681 + 1);
i__34681 = G__34683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34682),iter__34679.call(null,cljs.core.chunk_rest.call(null,s__34680__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34682),null);
}
} else
{var node = cljs.core.first.call(null,s__34680__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__34679.call(null,cljs.core.rest.call(null,s__34680__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__34692 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34693 = null;var count__34694 = 0;var i__34695 = 0;while(true){
if((i__34695 < count__34694))
{var node = cljs.core._nth.call(null,chunk__34693,i__34695);goog.events.removeAll(node);
{
var G__34700 = seq__34692;
var G__34701 = chunk__34693;
var G__34702 = count__34694;
var G__34703 = (i__34695 + 1);
seq__34692 = G__34700;
chunk__34693 = G__34701;
count__34694 = G__34702;
i__34695 = G__34703;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34692);if(temp__4092__auto__)
{var seq__34692__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34692__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34692__$1);{
var G__34704 = cljs.core.chunk_rest.call(null,seq__34692__$1);
var G__34705 = c__4148__auto__;
var G__34706 = cljs.core.count.call(null,c__4148__auto__);
var G__34707 = 0;
seq__34692 = G__34704;
chunk__34693 = G__34705;
count__34694 = G__34706;
i__34695 = G__34707;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34692__$1);goog.events.removeAll(node);
{
var G__34708 = cljs.core.next.call(null,seq__34692__$1);
var G__34709 = null;
var G__34710 = 0;
var G__34711 = 0;
seq__34692 = G__34708;
chunk__34693 = G__34709;
count__34694 = G__34710;
i__34695 = G__34711;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__34696 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34697 = null;var count__34698 = 0;var i__34699 = 0;while(true){
if((i__34699 < count__34698))
{var node = cljs.core._nth.call(null,chunk__34697,i__34699);goog.events.removeAll(node,type__$1);
{
var G__34712 = seq__34696;
var G__34713 = chunk__34697;
var G__34714 = count__34698;
var G__34715 = (i__34699 + 1);
seq__34696 = G__34712;
chunk__34697 = G__34713;
count__34698 = G__34714;
i__34699 = G__34715;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__34696);if(temp__4092__auto__)
{var seq__34696__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34696__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__34696__$1);{
var G__34716 = cljs.core.chunk_rest.call(null,seq__34696__$1);
var G__34717 = c__4148__auto__;
var G__34718 = cljs.core.count.call(null,c__4148__auto__);
var G__34719 = 0;
seq__34696 = G__34716;
chunk__34697 = G__34717;
count__34698 = G__34718;
i__34699 = G__34719;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34696__$1);goog.events.removeAll(node,type__$1);
{
var G__34720 = cljs.core.next.call(null,seq__34696__$1);
var G__34721 = null;
var G__34722 = 0;
var G__34723 = 0;
seq__34696 = G__34720;
chunk__34697 = G__34721;
count__34698 = G__34722;
i__34699 = G__34723;
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
var G__34724 = parent;
var G__34725 = cljs.core.cons.call(null,parent,so_far);
n = G__34724;
so_far = G__34725;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__34734_34742 = cljs.core.seq.call(null,ancestors);var chunk__34735_34743 = null;var count__34736_34744 = 0;var i__34737_34745 = 0;while(true){
if((i__34737_34745 < count__34736_34744))
{var n_34746 = cljs.core._nth.call(null,chunk__34735_34743,i__34737_34745);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34746;
goog.events.fireListeners(n_34746,evt.type,true,evt);
}
{
var G__34747 = seq__34734_34742;
var G__34748 = chunk__34735_34743;
var G__34749 = count__34736_34744;
var G__34750 = (i__34737_34745 + 1);
seq__34734_34742 = G__34747;
chunk__34735_34743 = G__34748;
count__34736_34744 = G__34749;
i__34737_34745 = G__34750;
continue;
}
} else
{var temp__4092__auto___34751 = cljs.core.seq.call(null,seq__34734_34742);if(temp__4092__auto___34751)
{var seq__34734_34752__$1 = temp__4092__auto___34751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34734_34752__$1))
{var c__4148__auto___34753 = cljs.core.chunk_first.call(null,seq__34734_34752__$1);{
var G__34754 = cljs.core.chunk_rest.call(null,seq__34734_34752__$1);
var G__34755 = c__4148__auto___34753;
var G__34756 = cljs.core.count.call(null,c__4148__auto___34753);
var G__34757 = 0;
seq__34734_34742 = G__34754;
chunk__34735_34743 = G__34755;
count__34736_34744 = G__34756;
i__34737_34745 = G__34757;
continue;
}
} else
{var n_34758 = cljs.core.first.call(null,seq__34734_34752__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34758;
goog.events.fireListeners(n_34758,evt.type,true,evt);
}
{
var G__34759 = cljs.core.next.call(null,seq__34734_34752__$1);
var G__34760 = null;
var G__34761 = 0;
var G__34762 = 0;
seq__34734_34742 = G__34759;
chunk__34735_34743 = G__34760;
count__34736_34744 = G__34761;
i__34737_34745 = G__34762;
continue;
}
}
} else
{}
}
break;
}
var seq__34738_34763 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__34739_34764 = null;var count__34740_34765 = 0;var i__34741_34766 = 0;while(true){
if((i__34741_34766 < count__34740_34765))
{var n_34767 = cljs.core._nth.call(null,chunk__34739_34764,i__34741_34766);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34767;
goog.events.fireListeners(n_34767,evt.type,false,evt);
}
{
var G__34768 = seq__34738_34763;
var G__34769 = chunk__34739_34764;
var G__34770 = count__34740_34765;
var G__34771 = (i__34741_34766 + 1);
seq__34738_34763 = G__34768;
chunk__34739_34764 = G__34769;
count__34740_34765 = G__34770;
i__34741_34766 = G__34771;
continue;
}
} else
{var temp__4092__auto___34772 = cljs.core.seq.call(null,seq__34738_34763);if(temp__4092__auto___34772)
{var seq__34738_34773__$1 = temp__4092__auto___34772;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34738_34773__$1))
{var c__4148__auto___34774 = cljs.core.chunk_first.call(null,seq__34738_34773__$1);{
var G__34775 = cljs.core.chunk_rest.call(null,seq__34738_34773__$1);
var G__34776 = c__4148__auto___34774;
var G__34777 = cljs.core.count.call(null,c__4148__auto___34774);
var G__34778 = 0;
seq__34738_34763 = G__34775;
chunk__34739_34764 = G__34776;
count__34740_34765 = G__34777;
i__34741_34766 = G__34778;
continue;
}
} else
{var n_34779 = cljs.core.first.call(null,seq__34738_34773__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34779;
goog.events.fireListeners(n_34779,evt.type,false,evt);
}
{
var G__34780 = cljs.core.next.call(null,seq__34738_34773__$1);
var G__34781 = null;
var G__34782 = 0;
var G__34783 = 0;
seq__34738_34763 = G__34780;
chunk__34739_34764 = G__34781;
count__34740_34765 = G__34782;
i__34741_34766 = G__34783;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__34790_34796 = cljs.core.seq.call(null,evt_map);var chunk__34791_34797 = null;var count__34792_34798 = 0;var i__34793_34799 = 0;while(true){
if((i__34793_34799 < count__34792_34798))
{var vec__34794_34800 = cljs.core._nth.call(null,chunk__34791_34797,i__34793_34799);var k_34801 = cljs.core.nth.call(null,vec__34794_34800,0,null);var v_34802 = cljs.core.nth.call(null,vec__34794_34800,1,null);(evt[k_34801] = v_34802);
{
var G__34803 = seq__34790_34796;
var G__34804 = chunk__34791_34797;
var G__34805 = count__34792_34798;
var G__34806 = (i__34793_34799 + 1);
seq__34790_34796 = G__34803;
chunk__34791_34797 = G__34804;
count__34792_34798 = G__34805;
i__34793_34799 = G__34806;
continue;
}
} else
{var temp__4092__auto___34807 = cljs.core.seq.call(null,seq__34790_34796);if(temp__4092__auto___34807)
{var seq__34790_34808__$1 = temp__4092__auto___34807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34790_34808__$1))
{var c__4148__auto___34809 = cljs.core.chunk_first.call(null,seq__34790_34808__$1);{
var G__34810 = cljs.core.chunk_rest.call(null,seq__34790_34808__$1);
var G__34811 = c__4148__auto___34809;
var G__34812 = cljs.core.count.call(null,c__4148__auto___34809);
var G__34813 = 0;
seq__34790_34796 = G__34810;
chunk__34791_34797 = G__34811;
count__34792_34798 = G__34812;
i__34793_34799 = G__34813;
continue;
}
} else
{var vec__34795_34814 = cljs.core.first.call(null,seq__34790_34808__$1);var k_34815 = cljs.core.nth.call(null,vec__34795_34814,0,null);var v_34816 = cljs.core.nth.call(null,vec__34795_34814,1,null);(evt[k_34815] = v_34816);
{
var G__34817 = cljs.core.next.call(null,seq__34790_34808__$1);
var G__34818 = null;
var G__34819 = 0;
var G__34820 = 0;
seq__34790_34796 = G__34817;
chunk__34791_34797 = G__34818;
count__34792_34798 = G__34819;
i__34793_34799 = G__34820;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__34821_SHARP_){return goog.events.getListeners(p1__34821_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
