// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14806 = {};return obj14806;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14810 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14810 = (function (evt,f,create_listener_function,meta14811){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14811 = meta14811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14810.cljs$lang$type = true;
domina.events.t14810.cljs$lang$ctorStr = "domina.events/t14810";
domina.events.t14810.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14810");
});
domina.events.t14810.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14810.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14810.prototype.domina$events$Event$ = true;
domina.events.t14810.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14810.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14810.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14810.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14810.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14810.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14812){var self__ = this;
var _14812__$1 = this;return self__.meta14811;
});
domina.events.t14810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14812,meta14811__$1){var self__ = this;
var _14812__$1 = this;return (new domina.events.t14810(self__.evt,self__.f,self__.create_listener_function,meta14811__$1));
});
domina.events.__GT_t14810 = (function __GT_t14810(evt__$1,f__$1,create_listener_function__$1,meta14811){return (new domina.events.t14810(evt__$1,f__$1,create_listener_function__$1,meta14811));
});
}
return (new domina.events.t14810(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14817(s__14818){return (new cljs.core.LazySeq(null,(function (){var s__14818__$1 = s__14818;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14818__$1);if(temp__4092__auto__)
{var s__14818__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14818__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14818__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14820 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14819 = 0;while(true){
if((i__14819 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14819);cljs.core.chunk_append.call(null,b__14820,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14821 = (i__14819 + 1);
i__14819 = G__14821;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14820),iter__14817.call(null,cljs.core.chunk_rest.call(null,s__14818__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14820),null);
}
} else
{var node = cljs.core.first.call(null,s__14818__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14817.call(null,cljs.core.rest.call(null,s__14818__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14830 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14831 = null;var count__14832 = 0;var i__14833 = 0;while(true){
if((i__14833 < count__14832))
{var node = cljs.core._nth.call(null,chunk__14831,i__14833);goog.events.removeAll(node);
{
var G__14838 = seq__14830;
var G__14839 = chunk__14831;
var G__14840 = count__14832;
var G__14841 = (i__14833 + 1);
seq__14830 = G__14838;
chunk__14831 = G__14839;
count__14832 = G__14840;
i__14833 = G__14841;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14830);if(temp__4092__auto__)
{var seq__14830__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14830__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14830__$1);{
var G__14842 = cljs.core.chunk_rest.call(null,seq__14830__$1);
var G__14843 = c__4148__auto__;
var G__14844 = cljs.core.count.call(null,c__4148__auto__);
var G__14845 = 0;
seq__14830 = G__14842;
chunk__14831 = G__14843;
count__14832 = G__14844;
i__14833 = G__14845;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14830__$1);goog.events.removeAll(node);
{
var G__14846 = cljs.core.next.call(null,seq__14830__$1);
var G__14847 = null;
var G__14848 = 0;
var G__14849 = 0;
seq__14830 = G__14846;
chunk__14831 = G__14847;
count__14832 = G__14848;
i__14833 = G__14849;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14834 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14835 = null;var count__14836 = 0;var i__14837 = 0;while(true){
if((i__14837 < count__14836))
{var node = cljs.core._nth.call(null,chunk__14835,i__14837);goog.events.removeAll(node,type__$1);
{
var G__14850 = seq__14834;
var G__14851 = chunk__14835;
var G__14852 = count__14836;
var G__14853 = (i__14837 + 1);
seq__14834 = G__14850;
chunk__14835 = G__14851;
count__14836 = G__14852;
i__14837 = G__14853;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14834);if(temp__4092__auto__)
{var seq__14834__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14834__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14834__$1);{
var G__14854 = cljs.core.chunk_rest.call(null,seq__14834__$1);
var G__14855 = c__4148__auto__;
var G__14856 = cljs.core.count.call(null,c__4148__auto__);
var G__14857 = 0;
seq__14834 = G__14854;
chunk__14835 = G__14855;
count__14836 = G__14856;
i__14837 = G__14857;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14834__$1);goog.events.removeAll(node,type__$1);
{
var G__14858 = cljs.core.next.call(null,seq__14834__$1);
var G__14859 = null;
var G__14860 = 0;
var G__14861 = 0;
seq__14834 = G__14858;
chunk__14835 = G__14859;
count__14836 = G__14860;
i__14837 = G__14861;
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
var G__14862 = parent;
var G__14863 = cljs.core.cons.call(null,parent,so_far);
n = G__14862;
so_far = G__14863;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14872_14880 = cljs.core.seq.call(null,ancestors);var chunk__14873_14881 = null;var count__14874_14882 = 0;var i__14875_14883 = 0;while(true){
if((i__14875_14883 < count__14874_14882))
{var n_14884 = cljs.core._nth.call(null,chunk__14873_14881,i__14875_14883);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14884;
goog.events.fireListeners(n_14884,evt.type,true,evt);
}
{
var G__14885 = seq__14872_14880;
var G__14886 = chunk__14873_14881;
var G__14887 = count__14874_14882;
var G__14888 = (i__14875_14883 + 1);
seq__14872_14880 = G__14885;
chunk__14873_14881 = G__14886;
count__14874_14882 = G__14887;
i__14875_14883 = G__14888;
continue;
}
} else
{var temp__4092__auto___14889 = cljs.core.seq.call(null,seq__14872_14880);if(temp__4092__auto___14889)
{var seq__14872_14890__$1 = temp__4092__auto___14889;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14872_14890__$1))
{var c__4148__auto___14891 = cljs.core.chunk_first.call(null,seq__14872_14890__$1);{
var G__14892 = cljs.core.chunk_rest.call(null,seq__14872_14890__$1);
var G__14893 = c__4148__auto___14891;
var G__14894 = cljs.core.count.call(null,c__4148__auto___14891);
var G__14895 = 0;
seq__14872_14880 = G__14892;
chunk__14873_14881 = G__14893;
count__14874_14882 = G__14894;
i__14875_14883 = G__14895;
continue;
}
} else
{var n_14896 = cljs.core.first.call(null,seq__14872_14890__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14896;
goog.events.fireListeners(n_14896,evt.type,true,evt);
}
{
var G__14897 = cljs.core.next.call(null,seq__14872_14890__$1);
var G__14898 = null;
var G__14899 = 0;
var G__14900 = 0;
seq__14872_14880 = G__14897;
chunk__14873_14881 = G__14898;
count__14874_14882 = G__14899;
i__14875_14883 = G__14900;
continue;
}
}
} else
{}
}
break;
}
var seq__14876_14901 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14877_14902 = null;var count__14878_14903 = 0;var i__14879_14904 = 0;while(true){
if((i__14879_14904 < count__14878_14903))
{var n_14905 = cljs.core._nth.call(null,chunk__14877_14902,i__14879_14904);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14905;
goog.events.fireListeners(n_14905,evt.type,false,evt);
}
{
var G__14906 = seq__14876_14901;
var G__14907 = chunk__14877_14902;
var G__14908 = count__14878_14903;
var G__14909 = (i__14879_14904 + 1);
seq__14876_14901 = G__14906;
chunk__14877_14902 = G__14907;
count__14878_14903 = G__14908;
i__14879_14904 = G__14909;
continue;
}
} else
{var temp__4092__auto___14910 = cljs.core.seq.call(null,seq__14876_14901);if(temp__4092__auto___14910)
{var seq__14876_14911__$1 = temp__4092__auto___14910;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14876_14911__$1))
{var c__4148__auto___14912 = cljs.core.chunk_first.call(null,seq__14876_14911__$1);{
var G__14913 = cljs.core.chunk_rest.call(null,seq__14876_14911__$1);
var G__14914 = c__4148__auto___14912;
var G__14915 = cljs.core.count.call(null,c__4148__auto___14912);
var G__14916 = 0;
seq__14876_14901 = G__14913;
chunk__14877_14902 = G__14914;
count__14878_14903 = G__14915;
i__14879_14904 = G__14916;
continue;
}
} else
{var n_14917 = cljs.core.first.call(null,seq__14876_14911__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14917;
goog.events.fireListeners(n_14917,evt.type,false,evt);
}
{
var G__14918 = cljs.core.next.call(null,seq__14876_14911__$1);
var G__14919 = null;
var G__14920 = 0;
var G__14921 = 0;
seq__14876_14901 = G__14918;
chunk__14877_14902 = G__14919;
count__14878_14903 = G__14920;
i__14879_14904 = G__14921;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14928_14934 = cljs.core.seq.call(null,evt_map);var chunk__14929_14935 = null;var count__14930_14936 = 0;var i__14931_14937 = 0;while(true){
if((i__14931_14937 < count__14930_14936))
{var vec__14932_14938 = cljs.core._nth.call(null,chunk__14929_14935,i__14931_14937);var k_14939 = cljs.core.nth.call(null,vec__14932_14938,0,null);var v_14940 = cljs.core.nth.call(null,vec__14932_14938,1,null);(evt[k_14939] = v_14940);
{
var G__14941 = seq__14928_14934;
var G__14942 = chunk__14929_14935;
var G__14943 = count__14930_14936;
var G__14944 = (i__14931_14937 + 1);
seq__14928_14934 = G__14941;
chunk__14929_14935 = G__14942;
count__14930_14936 = G__14943;
i__14931_14937 = G__14944;
continue;
}
} else
{var temp__4092__auto___14945 = cljs.core.seq.call(null,seq__14928_14934);if(temp__4092__auto___14945)
{var seq__14928_14946__$1 = temp__4092__auto___14945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14928_14946__$1))
{var c__4148__auto___14947 = cljs.core.chunk_first.call(null,seq__14928_14946__$1);{
var G__14948 = cljs.core.chunk_rest.call(null,seq__14928_14946__$1);
var G__14949 = c__4148__auto___14947;
var G__14950 = cljs.core.count.call(null,c__4148__auto___14947);
var G__14951 = 0;
seq__14928_14934 = G__14948;
chunk__14929_14935 = G__14949;
count__14930_14936 = G__14950;
i__14931_14937 = G__14951;
continue;
}
} else
{var vec__14933_14952 = cljs.core.first.call(null,seq__14928_14946__$1);var k_14953 = cljs.core.nth.call(null,vec__14933_14952,0,null);var v_14954 = cljs.core.nth.call(null,vec__14933_14952,1,null);(evt[k_14953] = v_14954);
{
var G__14955 = cljs.core.next.call(null,seq__14928_14946__$1);
var G__14956 = null;
var G__14957 = 0;
var G__14958 = 0;
seq__14928_14934 = G__14955;
chunk__14929_14935 = G__14956;
count__14930_14936 = G__14957;
i__14931_14937 = G__14958;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__14959_SHARP_){return goog.events.getListeners(p1__14959_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map