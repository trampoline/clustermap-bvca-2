// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj31789 = {};return obj31789;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.prevent_default[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.prevent_default["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.current_target[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.current_target["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.event_type[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.event_type["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3531__auto__ = evt;if(and__3531__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3531__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4170__auto__ = (((evt == null))?null:evt);return (function (){var or__3543__auto__ = (domina.events.raw_event[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.events.raw_event["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t31793 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t31793 = (function (evt,f,create_listener_function,meta31794){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta31794 = meta31794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t31793.cljs$lang$type = true;
domina.events.t31793.cljs$lang$ctorStr = "domina.events/t31793";
domina.events.t31793.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"domina.events/t31793");
});
domina.events.t31793.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t31793.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3543__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return not_found;
}
});
domina.events.t31793.prototype.domina$events$Event$ = true;
domina.events.t31793.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t31793.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t31793.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t31793.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t31793.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t31793.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t31793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31795){var self__ = this;
var _31795__$1 = this;return self__.meta31794;
});
domina.events.t31793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31795,meta31794__$1){var self__ = this;
var _31795__$1 = this;return (new domina.events.t31793(self__.evt,self__.f,self__.create_listener_function,meta31794__$1));
});
domina.events.__GT_t31793 = (function __GT_t31793(evt__$1,f__$1,create_listener_function__$1,meta31794){return (new domina.events.t31793(evt__$1,f__$1,create_listener_function__$1,meta31794));
});
}
return (new domina.events.t31793(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4268__auto__ = ((function (f,t){
return (function iter__31800(s__31801){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__31801__$1 = s__31801;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31801__$1);if(temp__4126__auto__)
{var s__31801__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31801__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__31801__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__31803 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__31802 = (0);while(true){
if((i__31802 < size__4267__auto__))
{var node = cljs.core._nth.call(null,c__4266__auto__,i__31802);cljs.core.chunk_append.call(null,b__31803,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__31804 = (i__31802 + (1));
i__31802 = G__31804;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31803),iter__31800.call(null,cljs.core.chunk_rest.call(null,s__31801__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31803),null);
}
} else
{var node = cljs.core.first.call(null,s__31801__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__31800.call(null,cljs.core.rest.call(null,s__31801__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4268__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__31813 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31814 = null;var count__31815 = (0);var i__31816 = (0);while(true){
if((i__31816 < count__31815))
{var node = cljs.core._nth.call(null,chunk__31814,i__31816);goog.events.removeAll(node);
{
var G__31821 = seq__31813;
var G__31822 = chunk__31814;
var G__31823 = count__31815;
var G__31824 = (i__31816 + (1));
seq__31813 = G__31821;
chunk__31814 = G__31822;
count__31815 = G__31823;
i__31816 = G__31824;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31813);if(temp__4126__auto__)
{var seq__31813__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31813__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__31813__$1);{
var G__31825 = cljs.core.chunk_rest.call(null,seq__31813__$1);
var G__31826 = c__4299__auto__;
var G__31827 = cljs.core.count.call(null,c__4299__auto__);
var G__31828 = (0);
seq__31813 = G__31825;
chunk__31814 = G__31826;
count__31815 = G__31827;
i__31816 = G__31828;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31813__$1);goog.events.removeAll(node);
{
var G__31829 = cljs.core.next.call(null,seq__31813__$1);
var G__31830 = null;
var G__31831 = (0);
var G__31832 = (0);
seq__31813 = G__31829;
chunk__31814 = G__31830;
count__31815 = G__31831;
i__31816 = G__31832;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__31817 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31818 = null;var count__31819 = (0);var i__31820 = (0);while(true){
if((i__31820 < count__31819))
{var node = cljs.core._nth.call(null,chunk__31818,i__31820);goog.events.removeAll(node,type__$1);
{
var G__31833 = seq__31817;
var G__31834 = chunk__31818;
var G__31835 = count__31819;
var G__31836 = (i__31820 + (1));
seq__31817 = G__31833;
chunk__31818 = G__31834;
count__31819 = G__31835;
i__31820 = G__31836;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__31817);if(temp__4126__auto__)
{var seq__31817__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31817__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__31817__$1);{
var G__31837 = cljs.core.chunk_rest.call(null,seq__31817__$1);
var G__31838 = c__4299__auto__;
var G__31839 = cljs.core.count.call(null,c__4299__auto__);
var G__31840 = (0);
seq__31817 = G__31837;
chunk__31818 = G__31838;
count__31819 = G__31839;
i__31820 = G__31840;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__31817__$1);goog.events.removeAll(node,type__$1);
{
var G__31841 = cljs.core.next.call(null,seq__31817__$1);
var G__31842 = null;
var G__31843 = (0);
var G__31844 = (0);
seq__31817 = G__31841;
chunk__31818 = G__31842;
count__31819 = G__31843;
i__31820 = G__31844;
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
var G__31845 = parent;
var G__31846 = cljs.core.cons.call(null,parent,so_far);
n = G__31845;
so_far = G__31846;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__31855_31863 = cljs.core.seq.call(null,ancestors);var chunk__31856_31864 = null;var count__31857_31865 = (0);var i__31858_31866 = (0);while(true){
if((i__31858_31866 < count__31857_31865))
{var n_31867 = cljs.core._nth.call(null,chunk__31856_31864,i__31858_31866);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31867;
goog.events.fireListeners(n_31867,evt.type,true,evt);
}
{
var G__31868 = seq__31855_31863;
var G__31869 = chunk__31856_31864;
var G__31870 = count__31857_31865;
var G__31871 = (i__31858_31866 + (1));
seq__31855_31863 = G__31868;
chunk__31856_31864 = G__31869;
count__31857_31865 = G__31870;
i__31858_31866 = G__31871;
continue;
}
} else
{var temp__4126__auto___31872 = cljs.core.seq.call(null,seq__31855_31863);if(temp__4126__auto___31872)
{var seq__31855_31873__$1 = temp__4126__auto___31872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31855_31873__$1))
{var c__4299__auto___31874 = cljs.core.chunk_first.call(null,seq__31855_31873__$1);{
var G__31875 = cljs.core.chunk_rest.call(null,seq__31855_31873__$1);
var G__31876 = c__4299__auto___31874;
var G__31877 = cljs.core.count.call(null,c__4299__auto___31874);
var G__31878 = (0);
seq__31855_31863 = G__31875;
chunk__31856_31864 = G__31876;
count__31857_31865 = G__31877;
i__31858_31866 = G__31878;
continue;
}
} else
{var n_31879 = cljs.core.first.call(null,seq__31855_31873__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31879;
goog.events.fireListeners(n_31879,evt.type,true,evt);
}
{
var G__31880 = cljs.core.next.call(null,seq__31855_31873__$1);
var G__31881 = null;
var G__31882 = (0);
var G__31883 = (0);
seq__31855_31863 = G__31880;
chunk__31856_31864 = G__31881;
count__31857_31865 = G__31882;
i__31858_31866 = G__31883;
continue;
}
}
} else
{}
}
break;
}
var seq__31859_31884 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__31860_31885 = null;var count__31861_31886 = (0);var i__31862_31887 = (0);while(true){
if((i__31862_31887 < count__31861_31886))
{var n_31888 = cljs.core._nth.call(null,chunk__31860_31885,i__31862_31887);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31888;
goog.events.fireListeners(n_31888,evt.type,false,evt);
}
{
var G__31889 = seq__31859_31884;
var G__31890 = chunk__31860_31885;
var G__31891 = count__31861_31886;
var G__31892 = (i__31862_31887 + (1));
seq__31859_31884 = G__31889;
chunk__31860_31885 = G__31890;
count__31861_31886 = G__31891;
i__31862_31887 = G__31892;
continue;
}
} else
{var temp__4126__auto___31893 = cljs.core.seq.call(null,seq__31859_31884);if(temp__4126__auto___31893)
{var seq__31859_31894__$1 = temp__4126__auto___31893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31859_31894__$1))
{var c__4299__auto___31895 = cljs.core.chunk_first.call(null,seq__31859_31894__$1);{
var G__31896 = cljs.core.chunk_rest.call(null,seq__31859_31894__$1);
var G__31897 = c__4299__auto___31895;
var G__31898 = cljs.core.count.call(null,c__4299__auto___31895);
var G__31899 = (0);
seq__31859_31884 = G__31896;
chunk__31860_31885 = G__31897;
count__31861_31886 = G__31898;
i__31862_31887 = G__31899;
continue;
}
} else
{var n_31900 = cljs.core.first.call(null,seq__31859_31894__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_31900;
goog.events.fireListeners(n_31900,evt.type,false,evt);
}
{
var G__31901 = cljs.core.next.call(null,seq__31859_31894__$1);
var G__31902 = null;
var G__31903 = (0);
var G__31904 = (0);
seq__31859_31884 = G__31901;
chunk__31860_31885 = G__31902;
count__31861_31886 = G__31903;
i__31862_31887 = G__31904;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3531__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3531__auto__))
{return o.dispatchEvent;
} else
{return and__3531__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__31911_31917 = cljs.core.seq.call(null,evt_map);var chunk__31912_31918 = null;var count__31913_31919 = (0);var i__31914_31920 = (0);while(true){
if((i__31914_31920 < count__31913_31919))
{var vec__31915_31921 = cljs.core._nth.call(null,chunk__31912_31918,i__31914_31920);var k_31922 = cljs.core.nth.call(null,vec__31915_31921,(0),null);var v_31923 = cljs.core.nth.call(null,vec__31915_31921,(1),null);(evt[k_31922] = v_31923);
{
var G__31924 = seq__31911_31917;
var G__31925 = chunk__31912_31918;
var G__31926 = count__31913_31919;
var G__31927 = (i__31914_31920 + (1));
seq__31911_31917 = G__31924;
chunk__31912_31918 = G__31925;
count__31913_31919 = G__31926;
i__31914_31920 = G__31927;
continue;
}
} else
{var temp__4126__auto___31928 = cljs.core.seq.call(null,seq__31911_31917);if(temp__4126__auto___31928)
{var seq__31911_31929__$1 = temp__4126__auto___31928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31911_31929__$1))
{var c__4299__auto___31930 = cljs.core.chunk_first.call(null,seq__31911_31929__$1);{
var G__31931 = cljs.core.chunk_rest.call(null,seq__31911_31929__$1);
var G__31932 = c__4299__auto___31930;
var G__31933 = cljs.core.count.call(null,c__4299__auto___31930);
var G__31934 = (0);
seq__31911_31917 = G__31931;
chunk__31912_31918 = G__31932;
count__31913_31919 = G__31933;
i__31914_31920 = G__31934;
continue;
}
} else
{var vec__31916_31935 = cljs.core.first.call(null,seq__31911_31929__$1);var k_31936 = cljs.core.nth.call(null,vec__31916_31935,(0),null);var v_31937 = cljs.core.nth.call(null,vec__31916_31935,(1),null);(evt[k_31936] = v_31937);
{
var G__31938 = cljs.core.next.call(null,seq__31911_31929__$1);
var G__31939 = null;
var G__31940 = (0);
var G__31941 = (0);
seq__31911_31917 = G__31938;
chunk__31912_31918 = G__31939;
count__31913_31919 = G__31940;
i__31914_31920 = G__31941;
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
return (function (p1__31942_SHARP_){return goog.events.getListeners(p1__31942_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
