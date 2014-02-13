// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36820 = {};return obj36820;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36824 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36824 = (function (evt,f,create_listener_function,meta36825){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36825 = meta36825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36824.cljs$lang$type = true;
domina.events.t36824.cljs$lang$ctorStr = "domina.events/t36824";
domina.events.t36824.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36824");
});
domina.events.t36824.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36824.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36824.prototype.domina$events$Event$ = true;
domina.events.t36824.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36824.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36824.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36824.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36824.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36824.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36826){var self__ = this;
var _36826__$1 = this;return self__.meta36825;
});
domina.events.t36824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36826,meta36825__$1){var self__ = this;
var _36826__$1 = this;return (new domina.events.t36824(self__.evt,self__.f,self__.create_listener_function,meta36825__$1));
});
domina.events.__GT_t36824 = (function __GT_t36824(evt__$1,f__$1,create_listener_function__$1,meta36825){return (new domina.events.t36824(evt__$1,f__$1,create_listener_function__$1,meta36825));
});
}
return (new domina.events.t36824(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36831(s__36832){return (new cljs.core.LazySeq(null,(function (){var s__36832__$1 = s__36832;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36832__$1);if(temp__4092__auto__)
{var s__36832__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36832__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36832__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36834 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36833 = 0;while(true){
if((i__36833 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36833);cljs.core.chunk_append.call(null,b__36834,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36835 = (i__36833 + 1);
i__36833 = G__36835;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36834),iter__36831.call(null,cljs.core.chunk_rest.call(null,s__36832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36834),null);
}
} else
{var node = cljs.core.first.call(null,s__36832__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36831.call(null,cljs.core.rest.call(null,s__36832__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36844 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36845 = null;var count__36846 = 0;var i__36847 = 0;while(true){
if((i__36847 < count__36846))
{var node = cljs.core._nth.call(null,chunk__36845,i__36847);goog.events.removeAll(node);
{
var G__36852 = seq__36844;
var G__36853 = chunk__36845;
var G__36854 = count__36846;
var G__36855 = (i__36847 + 1);
seq__36844 = G__36852;
chunk__36845 = G__36853;
count__36846 = G__36854;
i__36847 = G__36855;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36844);if(temp__4092__auto__)
{var seq__36844__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36844__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36844__$1);{
var G__36856 = cljs.core.chunk_rest.call(null,seq__36844__$1);
var G__36857 = c__4148__auto__;
var G__36858 = cljs.core.count.call(null,c__4148__auto__);
var G__36859 = 0;
seq__36844 = G__36856;
chunk__36845 = G__36857;
count__36846 = G__36858;
i__36847 = G__36859;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36844__$1);goog.events.removeAll(node);
{
var G__36860 = cljs.core.next.call(null,seq__36844__$1);
var G__36861 = null;
var G__36862 = 0;
var G__36863 = 0;
seq__36844 = G__36860;
chunk__36845 = G__36861;
count__36846 = G__36862;
i__36847 = G__36863;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36849 = null;var count__36850 = 0;var i__36851 = 0;while(true){
if((i__36851 < count__36850))
{var node = cljs.core._nth.call(null,chunk__36849,i__36851);goog.events.removeAll(node,type__$1);
{
var G__36864 = seq__36848;
var G__36865 = chunk__36849;
var G__36866 = count__36850;
var G__36867 = (i__36851 + 1);
seq__36848 = G__36864;
chunk__36849 = G__36865;
count__36850 = G__36866;
i__36851 = G__36867;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36848);if(temp__4092__auto__)
{var seq__36848__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36848__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36848__$1);{
var G__36868 = cljs.core.chunk_rest.call(null,seq__36848__$1);
var G__36869 = c__4148__auto__;
var G__36870 = cljs.core.count.call(null,c__4148__auto__);
var G__36871 = 0;
seq__36848 = G__36868;
chunk__36849 = G__36869;
count__36850 = G__36870;
i__36851 = G__36871;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36848__$1);goog.events.removeAll(node,type__$1);
{
var G__36872 = cljs.core.next.call(null,seq__36848__$1);
var G__36873 = null;
var G__36874 = 0;
var G__36875 = 0;
seq__36848 = G__36872;
chunk__36849 = G__36873;
count__36850 = G__36874;
i__36851 = G__36875;
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
var G__36876 = parent;
var G__36877 = cljs.core.cons.call(null,parent,so_far);
n = G__36876;
so_far = G__36877;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36886_36894 = cljs.core.seq.call(null,ancestors);var chunk__36887_36895 = null;var count__36888_36896 = 0;var i__36889_36897 = 0;while(true){
if((i__36889_36897 < count__36888_36896))
{var n_36898 = cljs.core._nth.call(null,chunk__36887_36895,i__36889_36897);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36898;
goog.events.fireListeners(n_36898,evt.type,true,evt);
}
{
var G__36899 = seq__36886_36894;
var G__36900 = chunk__36887_36895;
var G__36901 = count__36888_36896;
var G__36902 = (i__36889_36897 + 1);
seq__36886_36894 = G__36899;
chunk__36887_36895 = G__36900;
count__36888_36896 = G__36901;
i__36889_36897 = G__36902;
continue;
}
} else
{var temp__4092__auto___36903 = cljs.core.seq.call(null,seq__36886_36894);if(temp__4092__auto___36903)
{var seq__36886_36904__$1 = temp__4092__auto___36903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36886_36904__$1))
{var c__4148__auto___36905 = cljs.core.chunk_first.call(null,seq__36886_36904__$1);{
var G__36906 = cljs.core.chunk_rest.call(null,seq__36886_36904__$1);
var G__36907 = c__4148__auto___36905;
var G__36908 = cljs.core.count.call(null,c__4148__auto___36905);
var G__36909 = 0;
seq__36886_36894 = G__36906;
chunk__36887_36895 = G__36907;
count__36888_36896 = G__36908;
i__36889_36897 = G__36909;
continue;
}
} else
{var n_36910 = cljs.core.first.call(null,seq__36886_36904__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36910;
goog.events.fireListeners(n_36910,evt.type,true,evt);
}
{
var G__36911 = cljs.core.next.call(null,seq__36886_36904__$1);
var G__36912 = null;
var G__36913 = 0;
var G__36914 = 0;
seq__36886_36894 = G__36911;
chunk__36887_36895 = G__36912;
count__36888_36896 = G__36913;
i__36889_36897 = G__36914;
continue;
}
}
} else
{}
}
break;
}
var seq__36890_36915 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36891_36916 = null;var count__36892_36917 = 0;var i__36893_36918 = 0;while(true){
if((i__36893_36918 < count__36892_36917))
{var n_36919 = cljs.core._nth.call(null,chunk__36891_36916,i__36893_36918);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36919;
goog.events.fireListeners(n_36919,evt.type,false,evt);
}
{
var G__36920 = seq__36890_36915;
var G__36921 = chunk__36891_36916;
var G__36922 = count__36892_36917;
var G__36923 = (i__36893_36918 + 1);
seq__36890_36915 = G__36920;
chunk__36891_36916 = G__36921;
count__36892_36917 = G__36922;
i__36893_36918 = G__36923;
continue;
}
} else
{var temp__4092__auto___36924 = cljs.core.seq.call(null,seq__36890_36915);if(temp__4092__auto___36924)
{var seq__36890_36925__$1 = temp__4092__auto___36924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36890_36925__$1))
{var c__4148__auto___36926 = cljs.core.chunk_first.call(null,seq__36890_36925__$1);{
var G__36927 = cljs.core.chunk_rest.call(null,seq__36890_36925__$1);
var G__36928 = c__4148__auto___36926;
var G__36929 = cljs.core.count.call(null,c__4148__auto___36926);
var G__36930 = 0;
seq__36890_36915 = G__36927;
chunk__36891_36916 = G__36928;
count__36892_36917 = G__36929;
i__36893_36918 = G__36930;
continue;
}
} else
{var n_36931 = cljs.core.first.call(null,seq__36890_36925__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36931;
goog.events.fireListeners(n_36931,evt.type,false,evt);
}
{
var G__36932 = cljs.core.next.call(null,seq__36890_36925__$1);
var G__36933 = null;
var G__36934 = 0;
var G__36935 = 0;
seq__36890_36915 = G__36932;
chunk__36891_36916 = G__36933;
count__36892_36917 = G__36934;
i__36893_36918 = G__36935;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36942_36948 = cljs.core.seq.call(null,evt_map);var chunk__36943_36949 = null;var count__36944_36950 = 0;var i__36945_36951 = 0;while(true){
if((i__36945_36951 < count__36944_36950))
{var vec__36946_36952 = cljs.core._nth.call(null,chunk__36943_36949,i__36945_36951);var k_36953 = cljs.core.nth.call(null,vec__36946_36952,0,null);var v_36954 = cljs.core.nth.call(null,vec__36946_36952,1,null);(evt[k_36953] = v_36954);
{
var G__36955 = seq__36942_36948;
var G__36956 = chunk__36943_36949;
var G__36957 = count__36944_36950;
var G__36958 = (i__36945_36951 + 1);
seq__36942_36948 = G__36955;
chunk__36943_36949 = G__36956;
count__36944_36950 = G__36957;
i__36945_36951 = G__36958;
continue;
}
} else
{var temp__4092__auto___36959 = cljs.core.seq.call(null,seq__36942_36948);if(temp__4092__auto___36959)
{var seq__36942_36960__$1 = temp__4092__auto___36959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36942_36960__$1))
{var c__4148__auto___36961 = cljs.core.chunk_first.call(null,seq__36942_36960__$1);{
var G__36962 = cljs.core.chunk_rest.call(null,seq__36942_36960__$1);
var G__36963 = c__4148__auto___36961;
var G__36964 = cljs.core.count.call(null,c__4148__auto___36961);
var G__36965 = 0;
seq__36942_36948 = G__36962;
chunk__36943_36949 = G__36963;
count__36944_36950 = G__36964;
i__36945_36951 = G__36965;
continue;
}
} else
{var vec__36947_36966 = cljs.core.first.call(null,seq__36942_36960__$1);var k_36967 = cljs.core.nth.call(null,vec__36947_36966,0,null);var v_36968 = cljs.core.nth.call(null,vec__36947_36966,1,null);(evt[k_36967] = v_36968);
{
var G__36969 = cljs.core.next.call(null,seq__36942_36960__$1);
var G__36970 = null;
var G__36971 = 0;
var G__36972 = 0;
seq__36942_36948 = G__36969;
chunk__36943_36949 = G__36970;
count__36944_36950 = G__36971;
i__36945_36951 = G__36972;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36973_SHARP_){return goog.events.getListeners(p1__36973_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
