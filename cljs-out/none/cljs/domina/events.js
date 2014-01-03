// Compiled by ClojureScript 0.0-2080
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj19711 = {};return obj19711;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.prevent_default[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.prevent_default["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.stop_propagation[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.current_target[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.current_target["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.event_type[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.event_type["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3279__auto__ = evt;if(and__3279__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3279__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__3894__auto__ = (((evt == null))?null:evt);return (function (){var or__3291__auto__ = (domina.events.raw_event[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.events.raw_event["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t19715 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t19715 = (function (evt,f,create_listener_function,meta19716){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta19716 = meta19716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t19715.cljs$lang$type = true;
domina.events.t19715.cljs$lang$ctorStr = "domina.events/t19715";
domina.events.t19715.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"domina.events/t19715");
});
domina.events.t19715.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t19715.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3291__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return not_found;
}
});
domina.events.t19715.prototype.domina$events$Event$ = true;
domina.events.t19715.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t19715.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t19715.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t19715.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t19715.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t19715.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t19715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19717){var self__ = this;
var _19717__$1 = this;return self__.meta19716;
});
domina.events.t19715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19717,meta19716__$1){var self__ = this;
var _19717__$1 = this;return (new domina.events.t19715(self__.evt,self__.f,self__.create_listener_function,meta19716__$1));
});
domina.events.__GT_t19715 = (function __GT_t19715(evt__$1,f__$1,create_listener_function__$1,meta19716){return (new domina.events.t19715(evt__$1,f__$1,create_listener_function__$1,meta19716));
});
}
return (new domina.events.t19715(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__3984__auto__ = (function iter__19722(s__19723){return (new cljs.core.LazySeq(null,(function (){var s__19723__$1 = s__19723;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__19723__$1);if(temp__4092__auto__)
{var s__19723__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__19723__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__19723__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__19725 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__19724 = 0;while(true){
if((i__19724 < size__3983__auto__))
{var node = cljs.core._nth.call(null,c__3982__auto__,i__19724);cljs.core.chunk_append.call(null,b__19725,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__19726 = (i__19724 + 1);
i__19724 = G__19726;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19725),iter__19722.call(null,cljs.core.chunk_rest.call(null,s__19723__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19725),null);
}
} else
{var node = cljs.core.first.call(null,s__19723__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__19722.call(null,cljs.core.rest.call(null,s__19723__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__19735 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19736 = null;var count__19737 = 0;var i__19738 = 0;while(true){
if((i__19738 < count__19737))
{var node = cljs.core._nth.call(null,chunk__19736,i__19738);goog.events.removeAll(node);
{
var G__19743 = seq__19735;
var G__19744 = chunk__19736;
var G__19745 = count__19737;
var G__19746 = (i__19738 + 1);
seq__19735 = G__19743;
chunk__19736 = G__19744;
count__19737 = G__19745;
i__19738 = G__19746;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19735);if(temp__4092__auto__)
{var seq__19735__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19735__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__19735__$1);{
var G__19747 = cljs.core.chunk_rest.call(null,seq__19735__$1);
var G__19748 = c__4015__auto__;
var G__19749 = cljs.core.count.call(null,c__4015__auto__);
var G__19750 = 0;
seq__19735 = G__19747;
chunk__19736 = G__19748;
count__19737 = G__19749;
i__19738 = G__19750;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19735__$1);goog.events.removeAll(node);
{
var G__19751 = cljs.core.next.call(null,seq__19735__$1);
var G__19752 = null;
var G__19753 = 0;
var G__19754 = 0;
seq__19735 = G__19751;
chunk__19736 = G__19752;
count__19737 = G__19753;
i__19738 = G__19754;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__19739 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19740 = null;var count__19741 = 0;var i__19742 = 0;while(true){
if((i__19742 < count__19741))
{var node = cljs.core._nth.call(null,chunk__19740,i__19742);goog.events.removeAll(node,type__$1);
{
var G__19755 = seq__19739;
var G__19756 = chunk__19740;
var G__19757 = count__19741;
var G__19758 = (i__19742 + 1);
seq__19739 = G__19755;
chunk__19740 = G__19756;
count__19741 = G__19757;
i__19742 = G__19758;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19739);if(temp__4092__auto__)
{var seq__19739__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19739__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__19739__$1);{
var G__19759 = cljs.core.chunk_rest.call(null,seq__19739__$1);
var G__19760 = c__4015__auto__;
var G__19761 = cljs.core.count.call(null,c__4015__auto__);
var G__19762 = 0;
seq__19739 = G__19759;
chunk__19740 = G__19760;
count__19741 = G__19761;
i__19742 = G__19762;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__19739__$1);goog.events.removeAll(node,type__$1);
{
var G__19763 = cljs.core.next.call(null,seq__19739__$1);
var G__19764 = null;
var G__19765 = 0;
var G__19766 = 0;
seq__19739 = G__19763;
chunk__19740 = G__19764;
count__19741 = G__19765;
i__19742 = G__19766;
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
var G__19767 = parent;
var G__19768 = cljs.core.cons.call(null,parent,so_far);
n = G__19767;
so_far = G__19768;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__19777_19785 = cljs.core.seq.call(null,ancestors);var chunk__19778_19786 = null;var count__19779_19787 = 0;var i__19780_19788 = 0;while(true){
if((i__19780_19788 < count__19779_19787))
{var n_19789 = cljs.core._nth.call(null,chunk__19778_19786,i__19780_19788);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19789;
goog.events.fireListeners(n_19789,evt.type,true,evt);
}
{
var G__19790 = seq__19777_19785;
var G__19791 = chunk__19778_19786;
var G__19792 = count__19779_19787;
var G__19793 = (i__19780_19788 + 1);
seq__19777_19785 = G__19790;
chunk__19778_19786 = G__19791;
count__19779_19787 = G__19792;
i__19780_19788 = G__19793;
continue;
}
} else
{var temp__4092__auto___19794 = cljs.core.seq.call(null,seq__19777_19785);if(temp__4092__auto___19794)
{var seq__19777_19795__$1 = temp__4092__auto___19794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19777_19795__$1))
{var c__4015__auto___19796 = cljs.core.chunk_first.call(null,seq__19777_19795__$1);{
var G__19797 = cljs.core.chunk_rest.call(null,seq__19777_19795__$1);
var G__19798 = c__4015__auto___19796;
var G__19799 = cljs.core.count.call(null,c__4015__auto___19796);
var G__19800 = 0;
seq__19777_19785 = G__19797;
chunk__19778_19786 = G__19798;
count__19779_19787 = G__19799;
i__19780_19788 = G__19800;
continue;
}
} else
{var n_19801 = cljs.core.first.call(null,seq__19777_19795__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19801;
goog.events.fireListeners(n_19801,evt.type,true,evt);
}
{
var G__19802 = cljs.core.next.call(null,seq__19777_19795__$1);
var G__19803 = null;
var G__19804 = 0;
var G__19805 = 0;
seq__19777_19785 = G__19802;
chunk__19778_19786 = G__19803;
count__19779_19787 = G__19804;
i__19780_19788 = G__19805;
continue;
}
}
} else
{}
}
break;
}
var seq__19781_19806 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__19782_19807 = null;var count__19783_19808 = 0;var i__19784_19809 = 0;while(true){
if((i__19784_19809 < count__19783_19808))
{var n_19810 = cljs.core._nth.call(null,chunk__19782_19807,i__19784_19809);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19810;
goog.events.fireListeners(n_19810,evt.type,false,evt);
}
{
var G__19811 = seq__19781_19806;
var G__19812 = chunk__19782_19807;
var G__19813 = count__19783_19808;
var G__19814 = (i__19784_19809 + 1);
seq__19781_19806 = G__19811;
chunk__19782_19807 = G__19812;
count__19783_19808 = G__19813;
i__19784_19809 = G__19814;
continue;
}
} else
{var temp__4092__auto___19815 = cljs.core.seq.call(null,seq__19781_19806);if(temp__4092__auto___19815)
{var seq__19781_19816__$1 = temp__4092__auto___19815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19781_19816__$1))
{var c__4015__auto___19817 = cljs.core.chunk_first.call(null,seq__19781_19816__$1);{
var G__19818 = cljs.core.chunk_rest.call(null,seq__19781_19816__$1);
var G__19819 = c__4015__auto___19817;
var G__19820 = cljs.core.count.call(null,c__4015__auto___19817);
var G__19821 = 0;
seq__19781_19806 = G__19818;
chunk__19782_19807 = G__19819;
count__19783_19808 = G__19820;
i__19784_19809 = G__19821;
continue;
}
} else
{var n_19822 = cljs.core.first.call(null,seq__19781_19816__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_19822;
goog.events.fireListeners(n_19822,evt.type,false,evt);
}
{
var G__19823 = cljs.core.next.call(null,seq__19781_19816__$1);
var G__19824 = null;
var G__19825 = 0;
var G__19826 = 0;
seq__19781_19806 = G__19823;
chunk__19782_19807 = G__19824;
count__19783_19808 = G__19825;
i__19784_19809 = G__19826;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3279__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3279__auto__))
{return o.dispatchEvent;
} else
{return and__3279__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__19833_19839 = cljs.core.seq.call(null,evt_map);var chunk__19834_19840 = null;var count__19835_19841 = 0;var i__19836_19842 = 0;while(true){
if((i__19836_19842 < count__19835_19841))
{var vec__19837_19843 = cljs.core._nth.call(null,chunk__19834_19840,i__19836_19842);var k_19844 = cljs.core.nth.call(null,vec__19837_19843,0,null);var v_19845 = cljs.core.nth.call(null,vec__19837_19843,1,null);(evt[k_19844] = v_19845);
{
var G__19846 = seq__19833_19839;
var G__19847 = chunk__19834_19840;
var G__19848 = count__19835_19841;
var G__19849 = (i__19836_19842 + 1);
seq__19833_19839 = G__19846;
chunk__19834_19840 = G__19847;
count__19835_19841 = G__19848;
i__19836_19842 = G__19849;
continue;
}
} else
{var temp__4092__auto___19850 = cljs.core.seq.call(null,seq__19833_19839);if(temp__4092__auto___19850)
{var seq__19833_19851__$1 = temp__4092__auto___19850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19833_19851__$1))
{var c__4015__auto___19852 = cljs.core.chunk_first.call(null,seq__19833_19851__$1);{
var G__19853 = cljs.core.chunk_rest.call(null,seq__19833_19851__$1);
var G__19854 = c__4015__auto___19852;
var G__19855 = cljs.core.count.call(null,c__4015__auto___19852);
var G__19856 = 0;
seq__19833_19839 = G__19853;
chunk__19834_19840 = G__19854;
count__19835_19841 = G__19855;
i__19836_19842 = G__19856;
continue;
}
} else
{var vec__19838_19857 = cljs.core.first.call(null,seq__19833_19851__$1);var k_19858 = cljs.core.nth.call(null,vec__19838_19857,0,null);var v_19859 = cljs.core.nth.call(null,vec__19838_19857,1,null);(evt[k_19858] = v_19859);
{
var G__19860 = cljs.core.next.call(null,seq__19833_19851__$1);
var G__19861 = null;
var G__19862 = 0;
var G__19863 = 0;
seq__19833_19839 = G__19860;
chunk__19834_19840 = G__19861;
count__19835_19841 = G__19862;
i__19836_19842 = G__19863;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__19864_SHARP_){return goog.events.getListeners(p1__19864_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map