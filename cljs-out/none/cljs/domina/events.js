// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj56694 = {};return obj56694;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t56698 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t56698 = (function (evt,f,create_listener_function,meta56699){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta56699 = meta56699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t56698.cljs$lang$type = true;
domina.events.t56698.cljs$lang$ctorStr = "domina.events/t56698";
domina.events.t56698.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t56698");
});
domina.events.t56698.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t56698.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t56698.prototype.domina$events$Event$ = true;
domina.events.t56698.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t56698.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t56698.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t56698.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t56698.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t56698.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t56698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56700){var self__ = this;
var _56700__$1 = this;return self__.meta56699;
});
domina.events.t56698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56700,meta56699__$1){var self__ = this;
var _56700__$1 = this;return (new domina.events.t56698(self__.evt,self__.f,self__.create_listener_function,meta56699__$1));
});
domina.events.__GT_t56698 = (function __GT_t56698(evt__$1,f__$1,create_listener_function__$1,meta56699){return (new domina.events.t56698(evt__$1,f__$1,create_listener_function__$1,meta56699));
});
}
return (new domina.events.t56698(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__56705(s__56706){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__56706__$1 = s__56706;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56706__$1);if(temp__4126__auto__)
{var s__56706__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56706__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__56706__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__56708 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__56707 = (0);while(true){
if((i__56707 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__56707);cljs.core.chunk_append.call(null,b__56708,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__56709 = (i__56707 + (1));
i__56707 = G__56709;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56708),iter__56705.call(null,cljs.core.chunk_rest.call(null,s__56706__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56708),null);
}
} else
{var node = cljs.core.first.call(null,s__56706__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__56705.call(null,cljs.core.rest.call(null,s__56706__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__56718 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56719 = null;var count__56720 = (0);var i__56721 = (0);while(true){
if((i__56721 < count__56720))
{var node = cljs.core._nth.call(null,chunk__56719,i__56721);goog.events.removeAll(node);
{
var G__56726 = seq__56718;
var G__56727 = chunk__56719;
var G__56728 = count__56720;
var G__56729 = (i__56721 + (1));
seq__56718 = G__56726;
chunk__56719 = G__56727;
count__56720 = G__56728;
i__56721 = G__56729;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__56718);if(temp__4126__auto__)
{var seq__56718__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56718__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__56718__$1);{
var G__56730 = cljs.core.chunk_rest.call(null,seq__56718__$1);
var G__56731 = c__4314__auto__;
var G__56732 = cljs.core.count.call(null,c__4314__auto__);
var G__56733 = (0);
seq__56718 = G__56730;
chunk__56719 = G__56731;
count__56720 = G__56732;
i__56721 = G__56733;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__56718__$1);goog.events.removeAll(node);
{
var G__56734 = cljs.core.next.call(null,seq__56718__$1);
var G__56735 = null;
var G__56736 = (0);
var G__56737 = (0);
seq__56718 = G__56734;
chunk__56719 = G__56735;
count__56720 = G__56736;
i__56721 = G__56737;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__56722 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56723 = null;var count__56724 = (0);var i__56725 = (0);while(true){
if((i__56725 < count__56724))
{var node = cljs.core._nth.call(null,chunk__56723,i__56725);goog.events.removeAll(node,type__$1);
{
var G__56738 = seq__56722;
var G__56739 = chunk__56723;
var G__56740 = count__56724;
var G__56741 = (i__56725 + (1));
seq__56722 = G__56738;
chunk__56723 = G__56739;
count__56724 = G__56740;
i__56725 = G__56741;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__56722);if(temp__4126__auto__)
{var seq__56722__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56722__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__56722__$1);{
var G__56742 = cljs.core.chunk_rest.call(null,seq__56722__$1);
var G__56743 = c__4314__auto__;
var G__56744 = cljs.core.count.call(null,c__4314__auto__);
var G__56745 = (0);
seq__56722 = G__56742;
chunk__56723 = G__56743;
count__56724 = G__56744;
i__56725 = G__56745;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__56722__$1);goog.events.removeAll(node,type__$1);
{
var G__56746 = cljs.core.next.call(null,seq__56722__$1);
var G__56747 = null;
var G__56748 = (0);
var G__56749 = (0);
seq__56722 = G__56746;
chunk__56723 = G__56747;
count__56724 = G__56748;
i__56725 = G__56749;
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
var G__56750 = parent;
var G__56751 = cljs.core.cons.call(null,parent,so_far);
n = G__56750;
so_far = G__56751;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__56760_56768 = cljs.core.seq.call(null,ancestors);var chunk__56761_56769 = null;var count__56762_56770 = (0);var i__56763_56771 = (0);while(true){
if((i__56763_56771 < count__56762_56770))
{var n_56772 = cljs.core._nth.call(null,chunk__56761_56769,i__56763_56771);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56772;
goog.events.fireListeners(n_56772,evt.type,true,evt);
}
{
var G__56773 = seq__56760_56768;
var G__56774 = chunk__56761_56769;
var G__56775 = count__56762_56770;
var G__56776 = (i__56763_56771 + (1));
seq__56760_56768 = G__56773;
chunk__56761_56769 = G__56774;
count__56762_56770 = G__56775;
i__56763_56771 = G__56776;
continue;
}
} else
{var temp__4126__auto___56777 = cljs.core.seq.call(null,seq__56760_56768);if(temp__4126__auto___56777)
{var seq__56760_56778__$1 = temp__4126__auto___56777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56760_56778__$1))
{var c__4314__auto___56779 = cljs.core.chunk_first.call(null,seq__56760_56778__$1);{
var G__56780 = cljs.core.chunk_rest.call(null,seq__56760_56778__$1);
var G__56781 = c__4314__auto___56779;
var G__56782 = cljs.core.count.call(null,c__4314__auto___56779);
var G__56783 = (0);
seq__56760_56768 = G__56780;
chunk__56761_56769 = G__56781;
count__56762_56770 = G__56782;
i__56763_56771 = G__56783;
continue;
}
} else
{var n_56784 = cljs.core.first.call(null,seq__56760_56778__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56784;
goog.events.fireListeners(n_56784,evt.type,true,evt);
}
{
var G__56785 = cljs.core.next.call(null,seq__56760_56778__$1);
var G__56786 = null;
var G__56787 = (0);
var G__56788 = (0);
seq__56760_56768 = G__56785;
chunk__56761_56769 = G__56786;
count__56762_56770 = G__56787;
i__56763_56771 = G__56788;
continue;
}
}
} else
{}
}
break;
}
var seq__56764_56789 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__56765_56790 = null;var count__56766_56791 = (0);var i__56767_56792 = (0);while(true){
if((i__56767_56792 < count__56766_56791))
{var n_56793 = cljs.core._nth.call(null,chunk__56765_56790,i__56767_56792);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56793;
goog.events.fireListeners(n_56793,evt.type,false,evt);
}
{
var G__56794 = seq__56764_56789;
var G__56795 = chunk__56765_56790;
var G__56796 = count__56766_56791;
var G__56797 = (i__56767_56792 + (1));
seq__56764_56789 = G__56794;
chunk__56765_56790 = G__56795;
count__56766_56791 = G__56796;
i__56767_56792 = G__56797;
continue;
}
} else
{var temp__4126__auto___56798 = cljs.core.seq.call(null,seq__56764_56789);if(temp__4126__auto___56798)
{var seq__56764_56799__$1 = temp__4126__auto___56798;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56764_56799__$1))
{var c__4314__auto___56800 = cljs.core.chunk_first.call(null,seq__56764_56799__$1);{
var G__56801 = cljs.core.chunk_rest.call(null,seq__56764_56799__$1);
var G__56802 = c__4314__auto___56800;
var G__56803 = cljs.core.count.call(null,c__4314__auto___56800);
var G__56804 = (0);
seq__56764_56789 = G__56801;
chunk__56765_56790 = G__56802;
count__56766_56791 = G__56803;
i__56767_56792 = G__56804;
continue;
}
} else
{var n_56805 = cljs.core.first.call(null,seq__56764_56799__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_56805;
goog.events.fireListeners(n_56805,evt.type,false,evt);
}
{
var G__56806 = cljs.core.next.call(null,seq__56764_56799__$1);
var G__56807 = null;
var G__56808 = (0);
var G__56809 = (0);
seq__56764_56789 = G__56806;
chunk__56765_56790 = G__56807;
count__56766_56791 = G__56808;
i__56767_56792 = G__56809;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__56816_56822 = cljs.core.seq.call(null,evt_map);var chunk__56817_56823 = null;var count__56818_56824 = (0);var i__56819_56825 = (0);while(true){
if((i__56819_56825 < count__56818_56824))
{var vec__56820_56826 = cljs.core._nth.call(null,chunk__56817_56823,i__56819_56825);var k_56827 = cljs.core.nth.call(null,vec__56820_56826,(0),null);var v_56828 = cljs.core.nth.call(null,vec__56820_56826,(1),null);(evt[k_56827] = v_56828);
{
var G__56829 = seq__56816_56822;
var G__56830 = chunk__56817_56823;
var G__56831 = count__56818_56824;
var G__56832 = (i__56819_56825 + (1));
seq__56816_56822 = G__56829;
chunk__56817_56823 = G__56830;
count__56818_56824 = G__56831;
i__56819_56825 = G__56832;
continue;
}
} else
{var temp__4126__auto___56833 = cljs.core.seq.call(null,seq__56816_56822);if(temp__4126__auto___56833)
{var seq__56816_56834__$1 = temp__4126__auto___56833;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56816_56834__$1))
{var c__4314__auto___56835 = cljs.core.chunk_first.call(null,seq__56816_56834__$1);{
var G__56836 = cljs.core.chunk_rest.call(null,seq__56816_56834__$1);
var G__56837 = c__4314__auto___56835;
var G__56838 = cljs.core.count.call(null,c__4314__auto___56835);
var G__56839 = (0);
seq__56816_56822 = G__56836;
chunk__56817_56823 = G__56837;
count__56818_56824 = G__56838;
i__56819_56825 = G__56839;
continue;
}
} else
{var vec__56821_56840 = cljs.core.first.call(null,seq__56816_56834__$1);var k_56841 = cljs.core.nth.call(null,vec__56821_56840,(0),null);var v_56842 = cljs.core.nth.call(null,vec__56821_56840,(1),null);(evt[k_56841] = v_56842);
{
var G__56843 = cljs.core.next.call(null,seq__56816_56834__$1);
var G__56844 = null;
var G__56845 = (0);
var G__56846 = (0);
seq__56816_56822 = G__56843;
chunk__56817_56823 = G__56844;
count__56818_56824 = G__56845;
i__56819_56825 = G__56846;
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
return (function (p1__56847_SHARP_){return goog.events.getListeners(p1__56847_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map