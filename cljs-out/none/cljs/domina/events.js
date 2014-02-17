// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16822 = {};return obj16822;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16826 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16826 = (function (evt,f,create_listener_function,meta16827){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16827 = meta16827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16826.cljs$lang$type = true;
domina.events.t16826.cljs$lang$ctorStr = "domina.events/t16826";
domina.events.t16826.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16826");
});
domina.events.t16826.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16826.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16826.prototype.domina$events$Event$ = true;
domina.events.t16826.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16826.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16826.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16826.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16826.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16826.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16828){var self__ = this;
var _16828__$1 = this;return self__.meta16827;
});
domina.events.t16826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16828,meta16827__$1){var self__ = this;
var _16828__$1 = this;return (new domina.events.t16826(self__.evt,self__.f,self__.create_listener_function,meta16827__$1));
});
domina.events.__GT_t16826 = (function __GT_t16826(evt__$1,f__$1,create_listener_function__$1,meta16827){return (new domina.events.t16826(evt__$1,f__$1,create_listener_function__$1,meta16827));
});
}
return (new domina.events.t16826(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16833(s__16834){return (new cljs.core.LazySeq(null,(function (){var s__16834__$1 = s__16834;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16834__$1);if(temp__4092__auto__)
{var s__16834__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16834__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16834__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16836 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16835 = 0;while(true){
if((i__16835 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16835);cljs.core.chunk_append.call(null,b__16836,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16837 = (i__16835 + 1);
i__16835 = G__16837;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16836),iter__16833.call(null,cljs.core.chunk_rest.call(null,s__16834__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16836),null);
}
} else
{var node = cljs.core.first.call(null,s__16834__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16833.call(null,cljs.core.rest.call(null,s__16834__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16846 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16847 = null;var count__16848 = 0;var i__16849 = 0;while(true){
if((i__16849 < count__16848))
{var node = cljs.core._nth.call(null,chunk__16847,i__16849);goog.events.removeAll(node);
{
var G__16854 = seq__16846;
var G__16855 = chunk__16847;
var G__16856 = count__16848;
var G__16857 = (i__16849 + 1);
seq__16846 = G__16854;
chunk__16847 = G__16855;
count__16848 = G__16856;
i__16849 = G__16857;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16846);if(temp__4092__auto__)
{var seq__16846__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16846__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16846__$1);{
var G__16858 = cljs.core.chunk_rest.call(null,seq__16846__$1);
var G__16859 = c__4148__auto__;
var G__16860 = cljs.core.count.call(null,c__4148__auto__);
var G__16861 = 0;
seq__16846 = G__16858;
chunk__16847 = G__16859;
count__16848 = G__16860;
i__16849 = G__16861;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16846__$1);goog.events.removeAll(node);
{
var G__16862 = cljs.core.next.call(null,seq__16846__$1);
var G__16863 = null;
var G__16864 = 0;
var G__16865 = 0;
seq__16846 = G__16862;
chunk__16847 = G__16863;
count__16848 = G__16864;
i__16849 = G__16865;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16850 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16851 = null;var count__16852 = 0;var i__16853 = 0;while(true){
if((i__16853 < count__16852))
{var node = cljs.core._nth.call(null,chunk__16851,i__16853);goog.events.removeAll(node,type__$1);
{
var G__16866 = seq__16850;
var G__16867 = chunk__16851;
var G__16868 = count__16852;
var G__16869 = (i__16853 + 1);
seq__16850 = G__16866;
chunk__16851 = G__16867;
count__16852 = G__16868;
i__16853 = G__16869;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16850);if(temp__4092__auto__)
{var seq__16850__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16850__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16850__$1);{
var G__16870 = cljs.core.chunk_rest.call(null,seq__16850__$1);
var G__16871 = c__4148__auto__;
var G__16872 = cljs.core.count.call(null,c__4148__auto__);
var G__16873 = 0;
seq__16850 = G__16870;
chunk__16851 = G__16871;
count__16852 = G__16872;
i__16853 = G__16873;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16850__$1);goog.events.removeAll(node,type__$1);
{
var G__16874 = cljs.core.next.call(null,seq__16850__$1);
var G__16875 = null;
var G__16876 = 0;
var G__16877 = 0;
seq__16850 = G__16874;
chunk__16851 = G__16875;
count__16852 = G__16876;
i__16853 = G__16877;
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
var G__16878 = parent;
var G__16879 = cljs.core.cons.call(null,parent,so_far);
n = G__16878;
so_far = G__16879;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16888_16896 = cljs.core.seq.call(null,ancestors);var chunk__16889_16897 = null;var count__16890_16898 = 0;var i__16891_16899 = 0;while(true){
if((i__16891_16899 < count__16890_16898))
{var n_16900 = cljs.core._nth.call(null,chunk__16889_16897,i__16891_16899);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16900;
goog.events.fireListeners(n_16900,evt.type,true,evt);
}
{
var G__16901 = seq__16888_16896;
var G__16902 = chunk__16889_16897;
var G__16903 = count__16890_16898;
var G__16904 = (i__16891_16899 + 1);
seq__16888_16896 = G__16901;
chunk__16889_16897 = G__16902;
count__16890_16898 = G__16903;
i__16891_16899 = G__16904;
continue;
}
} else
{var temp__4092__auto___16905 = cljs.core.seq.call(null,seq__16888_16896);if(temp__4092__auto___16905)
{var seq__16888_16906__$1 = temp__4092__auto___16905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16888_16906__$1))
{var c__4148__auto___16907 = cljs.core.chunk_first.call(null,seq__16888_16906__$1);{
var G__16908 = cljs.core.chunk_rest.call(null,seq__16888_16906__$1);
var G__16909 = c__4148__auto___16907;
var G__16910 = cljs.core.count.call(null,c__4148__auto___16907);
var G__16911 = 0;
seq__16888_16896 = G__16908;
chunk__16889_16897 = G__16909;
count__16890_16898 = G__16910;
i__16891_16899 = G__16911;
continue;
}
} else
{var n_16912 = cljs.core.first.call(null,seq__16888_16906__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16912;
goog.events.fireListeners(n_16912,evt.type,true,evt);
}
{
var G__16913 = cljs.core.next.call(null,seq__16888_16906__$1);
var G__16914 = null;
var G__16915 = 0;
var G__16916 = 0;
seq__16888_16896 = G__16913;
chunk__16889_16897 = G__16914;
count__16890_16898 = G__16915;
i__16891_16899 = G__16916;
continue;
}
}
} else
{}
}
break;
}
var seq__16892_16917 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16893_16918 = null;var count__16894_16919 = 0;var i__16895_16920 = 0;while(true){
if((i__16895_16920 < count__16894_16919))
{var n_16921 = cljs.core._nth.call(null,chunk__16893_16918,i__16895_16920);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16921;
goog.events.fireListeners(n_16921,evt.type,false,evt);
}
{
var G__16922 = seq__16892_16917;
var G__16923 = chunk__16893_16918;
var G__16924 = count__16894_16919;
var G__16925 = (i__16895_16920 + 1);
seq__16892_16917 = G__16922;
chunk__16893_16918 = G__16923;
count__16894_16919 = G__16924;
i__16895_16920 = G__16925;
continue;
}
} else
{var temp__4092__auto___16926 = cljs.core.seq.call(null,seq__16892_16917);if(temp__4092__auto___16926)
{var seq__16892_16927__$1 = temp__4092__auto___16926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16892_16927__$1))
{var c__4148__auto___16928 = cljs.core.chunk_first.call(null,seq__16892_16927__$1);{
var G__16929 = cljs.core.chunk_rest.call(null,seq__16892_16927__$1);
var G__16930 = c__4148__auto___16928;
var G__16931 = cljs.core.count.call(null,c__4148__auto___16928);
var G__16932 = 0;
seq__16892_16917 = G__16929;
chunk__16893_16918 = G__16930;
count__16894_16919 = G__16931;
i__16895_16920 = G__16932;
continue;
}
} else
{var n_16933 = cljs.core.first.call(null,seq__16892_16927__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16933;
goog.events.fireListeners(n_16933,evt.type,false,evt);
}
{
var G__16934 = cljs.core.next.call(null,seq__16892_16927__$1);
var G__16935 = null;
var G__16936 = 0;
var G__16937 = 0;
seq__16892_16917 = G__16934;
chunk__16893_16918 = G__16935;
count__16894_16919 = G__16936;
i__16895_16920 = G__16937;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16944_16950 = cljs.core.seq.call(null,evt_map);var chunk__16945_16951 = null;var count__16946_16952 = 0;var i__16947_16953 = 0;while(true){
if((i__16947_16953 < count__16946_16952))
{var vec__16948_16954 = cljs.core._nth.call(null,chunk__16945_16951,i__16947_16953);var k_16955 = cljs.core.nth.call(null,vec__16948_16954,0,null);var v_16956 = cljs.core.nth.call(null,vec__16948_16954,1,null);(evt[k_16955] = v_16956);
{
var G__16957 = seq__16944_16950;
var G__16958 = chunk__16945_16951;
var G__16959 = count__16946_16952;
var G__16960 = (i__16947_16953 + 1);
seq__16944_16950 = G__16957;
chunk__16945_16951 = G__16958;
count__16946_16952 = G__16959;
i__16947_16953 = G__16960;
continue;
}
} else
{var temp__4092__auto___16961 = cljs.core.seq.call(null,seq__16944_16950);if(temp__4092__auto___16961)
{var seq__16944_16962__$1 = temp__4092__auto___16961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16944_16962__$1))
{var c__4148__auto___16963 = cljs.core.chunk_first.call(null,seq__16944_16962__$1);{
var G__16964 = cljs.core.chunk_rest.call(null,seq__16944_16962__$1);
var G__16965 = c__4148__auto___16963;
var G__16966 = cljs.core.count.call(null,c__4148__auto___16963);
var G__16967 = 0;
seq__16944_16950 = G__16964;
chunk__16945_16951 = G__16965;
count__16946_16952 = G__16966;
i__16947_16953 = G__16967;
continue;
}
} else
{var vec__16949_16968 = cljs.core.first.call(null,seq__16944_16962__$1);var k_16969 = cljs.core.nth.call(null,vec__16949_16968,0,null);var v_16970 = cljs.core.nth.call(null,vec__16949_16968,1,null);(evt[k_16969] = v_16970);
{
var G__16971 = cljs.core.next.call(null,seq__16944_16962__$1);
var G__16972 = null;
var G__16973 = 0;
var G__16974 = 0;
seq__16944_16950 = G__16971;
chunk__16945_16951 = G__16972;
count__16946_16952 = G__16973;
i__16947_16953 = G__16974;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16975_SHARP_){return goog.events.getListeners(p1__16975_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map