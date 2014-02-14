// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16756 = {};return obj16756;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16760 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16760 = (function (evt,f,create_listener_function,meta16761){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16761 = meta16761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16760.cljs$lang$type = true;
domina.events.t16760.cljs$lang$ctorStr = "domina.events/t16760";
domina.events.t16760.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16760");
});
domina.events.t16760.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16760.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16760.prototype.domina$events$Event$ = true;
domina.events.t16760.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16760.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16760.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16760.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16760.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16760.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16762){var self__ = this;
var _16762__$1 = this;return self__.meta16761;
});
domina.events.t16760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16762,meta16761__$1){var self__ = this;
var _16762__$1 = this;return (new domina.events.t16760(self__.evt,self__.f,self__.create_listener_function,meta16761__$1));
});
domina.events.__GT_t16760 = (function __GT_t16760(evt__$1,f__$1,create_listener_function__$1,meta16761){return (new domina.events.t16760(evt__$1,f__$1,create_listener_function__$1,meta16761));
});
}
return (new domina.events.t16760(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16767(s__16768){return (new cljs.core.LazySeq(null,(function (){var s__16768__$1 = s__16768;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16768__$1);if(temp__4092__auto__)
{var s__16768__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16768__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16768__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16770 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16769 = 0;while(true){
if((i__16769 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16769);cljs.core.chunk_append.call(null,b__16770,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16771 = (i__16769 + 1);
i__16769 = G__16771;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16770),iter__16767.call(null,cljs.core.chunk_rest.call(null,s__16768__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16770),null);
}
} else
{var node = cljs.core.first.call(null,s__16768__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16767.call(null,cljs.core.rest.call(null,s__16768__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16780 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16781 = null;var count__16782 = 0;var i__16783 = 0;while(true){
if((i__16783 < count__16782))
{var node = cljs.core._nth.call(null,chunk__16781,i__16783);goog.events.removeAll(node);
{
var G__16788 = seq__16780;
var G__16789 = chunk__16781;
var G__16790 = count__16782;
var G__16791 = (i__16783 + 1);
seq__16780 = G__16788;
chunk__16781 = G__16789;
count__16782 = G__16790;
i__16783 = G__16791;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16780);if(temp__4092__auto__)
{var seq__16780__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16780__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16780__$1);{
var G__16792 = cljs.core.chunk_rest.call(null,seq__16780__$1);
var G__16793 = c__4148__auto__;
var G__16794 = cljs.core.count.call(null,c__4148__auto__);
var G__16795 = 0;
seq__16780 = G__16792;
chunk__16781 = G__16793;
count__16782 = G__16794;
i__16783 = G__16795;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16780__$1);goog.events.removeAll(node);
{
var G__16796 = cljs.core.next.call(null,seq__16780__$1);
var G__16797 = null;
var G__16798 = 0;
var G__16799 = 0;
seq__16780 = G__16796;
chunk__16781 = G__16797;
count__16782 = G__16798;
i__16783 = G__16799;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16784 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16785 = null;var count__16786 = 0;var i__16787 = 0;while(true){
if((i__16787 < count__16786))
{var node = cljs.core._nth.call(null,chunk__16785,i__16787);goog.events.removeAll(node,type__$1);
{
var G__16800 = seq__16784;
var G__16801 = chunk__16785;
var G__16802 = count__16786;
var G__16803 = (i__16787 + 1);
seq__16784 = G__16800;
chunk__16785 = G__16801;
count__16786 = G__16802;
i__16787 = G__16803;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16784);if(temp__4092__auto__)
{var seq__16784__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16784__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16784__$1);{
var G__16804 = cljs.core.chunk_rest.call(null,seq__16784__$1);
var G__16805 = c__4148__auto__;
var G__16806 = cljs.core.count.call(null,c__4148__auto__);
var G__16807 = 0;
seq__16784 = G__16804;
chunk__16785 = G__16805;
count__16786 = G__16806;
i__16787 = G__16807;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16784__$1);goog.events.removeAll(node,type__$1);
{
var G__16808 = cljs.core.next.call(null,seq__16784__$1);
var G__16809 = null;
var G__16810 = 0;
var G__16811 = 0;
seq__16784 = G__16808;
chunk__16785 = G__16809;
count__16786 = G__16810;
i__16787 = G__16811;
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
var G__16812 = parent;
var G__16813 = cljs.core.cons.call(null,parent,so_far);
n = G__16812;
so_far = G__16813;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16822_16830 = cljs.core.seq.call(null,ancestors);var chunk__16823_16831 = null;var count__16824_16832 = 0;var i__16825_16833 = 0;while(true){
if((i__16825_16833 < count__16824_16832))
{var n_16834 = cljs.core._nth.call(null,chunk__16823_16831,i__16825_16833);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16834;
goog.events.fireListeners(n_16834,evt.type,true,evt);
}
{
var G__16835 = seq__16822_16830;
var G__16836 = chunk__16823_16831;
var G__16837 = count__16824_16832;
var G__16838 = (i__16825_16833 + 1);
seq__16822_16830 = G__16835;
chunk__16823_16831 = G__16836;
count__16824_16832 = G__16837;
i__16825_16833 = G__16838;
continue;
}
} else
{var temp__4092__auto___16839 = cljs.core.seq.call(null,seq__16822_16830);if(temp__4092__auto___16839)
{var seq__16822_16840__$1 = temp__4092__auto___16839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16822_16840__$1))
{var c__4148__auto___16841 = cljs.core.chunk_first.call(null,seq__16822_16840__$1);{
var G__16842 = cljs.core.chunk_rest.call(null,seq__16822_16840__$1);
var G__16843 = c__4148__auto___16841;
var G__16844 = cljs.core.count.call(null,c__4148__auto___16841);
var G__16845 = 0;
seq__16822_16830 = G__16842;
chunk__16823_16831 = G__16843;
count__16824_16832 = G__16844;
i__16825_16833 = G__16845;
continue;
}
} else
{var n_16846 = cljs.core.first.call(null,seq__16822_16840__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16846;
goog.events.fireListeners(n_16846,evt.type,true,evt);
}
{
var G__16847 = cljs.core.next.call(null,seq__16822_16840__$1);
var G__16848 = null;
var G__16849 = 0;
var G__16850 = 0;
seq__16822_16830 = G__16847;
chunk__16823_16831 = G__16848;
count__16824_16832 = G__16849;
i__16825_16833 = G__16850;
continue;
}
}
} else
{}
}
break;
}
var seq__16826_16851 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16827_16852 = null;var count__16828_16853 = 0;var i__16829_16854 = 0;while(true){
if((i__16829_16854 < count__16828_16853))
{var n_16855 = cljs.core._nth.call(null,chunk__16827_16852,i__16829_16854);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16855;
goog.events.fireListeners(n_16855,evt.type,false,evt);
}
{
var G__16856 = seq__16826_16851;
var G__16857 = chunk__16827_16852;
var G__16858 = count__16828_16853;
var G__16859 = (i__16829_16854 + 1);
seq__16826_16851 = G__16856;
chunk__16827_16852 = G__16857;
count__16828_16853 = G__16858;
i__16829_16854 = G__16859;
continue;
}
} else
{var temp__4092__auto___16860 = cljs.core.seq.call(null,seq__16826_16851);if(temp__4092__auto___16860)
{var seq__16826_16861__$1 = temp__4092__auto___16860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16826_16861__$1))
{var c__4148__auto___16862 = cljs.core.chunk_first.call(null,seq__16826_16861__$1);{
var G__16863 = cljs.core.chunk_rest.call(null,seq__16826_16861__$1);
var G__16864 = c__4148__auto___16862;
var G__16865 = cljs.core.count.call(null,c__4148__auto___16862);
var G__16866 = 0;
seq__16826_16851 = G__16863;
chunk__16827_16852 = G__16864;
count__16828_16853 = G__16865;
i__16829_16854 = G__16866;
continue;
}
} else
{var n_16867 = cljs.core.first.call(null,seq__16826_16861__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16867;
goog.events.fireListeners(n_16867,evt.type,false,evt);
}
{
var G__16868 = cljs.core.next.call(null,seq__16826_16861__$1);
var G__16869 = null;
var G__16870 = 0;
var G__16871 = 0;
seq__16826_16851 = G__16868;
chunk__16827_16852 = G__16869;
count__16828_16853 = G__16870;
i__16829_16854 = G__16871;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16878_16884 = cljs.core.seq.call(null,evt_map);var chunk__16879_16885 = null;var count__16880_16886 = 0;var i__16881_16887 = 0;while(true){
if((i__16881_16887 < count__16880_16886))
{var vec__16882_16888 = cljs.core._nth.call(null,chunk__16879_16885,i__16881_16887);var k_16889 = cljs.core.nth.call(null,vec__16882_16888,0,null);var v_16890 = cljs.core.nth.call(null,vec__16882_16888,1,null);(evt[k_16889] = v_16890);
{
var G__16891 = seq__16878_16884;
var G__16892 = chunk__16879_16885;
var G__16893 = count__16880_16886;
var G__16894 = (i__16881_16887 + 1);
seq__16878_16884 = G__16891;
chunk__16879_16885 = G__16892;
count__16880_16886 = G__16893;
i__16881_16887 = G__16894;
continue;
}
} else
{var temp__4092__auto___16895 = cljs.core.seq.call(null,seq__16878_16884);if(temp__4092__auto___16895)
{var seq__16878_16896__$1 = temp__4092__auto___16895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16878_16896__$1))
{var c__4148__auto___16897 = cljs.core.chunk_first.call(null,seq__16878_16896__$1);{
var G__16898 = cljs.core.chunk_rest.call(null,seq__16878_16896__$1);
var G__16899 = c__4148__auto___16897;
var G__16900 = cljs.core.count.call(null,c__4148__auto___16897);
var G__16901 = 0;
seq__16878_16884 = G__16898;
chunk__16879_16885 = G__16899;
count__16880_16886 = G__16900;
i__16881_16887 = G__16901;
continue;
}
} else
{var vec__16883_16902 = cljs.core.first.call(null,seq__16878_16896__$1);var k_16903 = cljs.core.nth.call(null,vec__16883_16902,0,null);var v_16904 = cljs.core.nth.call(null,vec__16883_16902,1,null);(evt[k_16903] = v_16904);
{
var G__16905 = cljs.core.next.call(null,seq__16878_16896__$1);
var G__16906 = null;
var G__16907 = 0;
var G__16908 = 0;
seq__16878_16884 = G__16905;
chunk__16879_16885 = G__16906;
count__16880_16886 = G__16907;
i__16881_16887 = G__16908;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16909_SHARP_){return goog.events.getListeners(p1__16909_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map