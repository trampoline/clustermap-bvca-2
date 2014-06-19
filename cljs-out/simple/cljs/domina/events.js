// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj17700 = {};return obj17700;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.prevent_default[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.prevent_default["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.current_target[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.current_target["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.event_type[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.event_type["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3527__auto__ = evt;if(and__3527__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3527__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4166__auto__ = (((evt == null))?null:evt);return (function (){var or__3539__auto__ = (domina.events.raw_event[goog.typeOf(x__4166__auto__)]);if(or__3539__auto__)
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = (domina.events.raw_event["_"]);if(or__3539__auto____$1)
{return or__3539__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t17704 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t17704 = (function (evt,f,create_listener_function,meta17705){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta17705 = meta17705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t17704.cljs$lang$type = true;
domina.events.t17704.cljs$lang$ctorStr = "domina.events/t17704";
domina.events.t17704.cljs$lang$ctorPrWriter = (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"domina.events/t17704");
});
domina.events.t17704.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t17704.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3539__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return not_found;
}
});
domina.events.t17704.prototype.domina$events$Event$ = true;
domina.events.t17704.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t17704.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t17704.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t17704.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t17704.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t17704.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t17704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17706){var self__ = this;
var _17706__$1 = this;return self__.meta17705;
});
domina.events.t17704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17706,meta17705__$1){var self__ = this;
var _17706__$1 = this;return (new domina.events.t17704(self__.evt,self__.f,self__.create_listener_function,meta17705__$1));
});
domina.events.__GT_t17704 = (function __GT_t17704(evt__$1,f__$1,create_listener_function__$1,meta17705){return (new domina.events.t17704(evt__$1,f__$1,create_listener_function__$1,meta17705));
});
}
return (new domina.events.t17704(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4264__auto__ = ((function (f,t){
return (function iter__17711(s__17712){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__17712__$1 = s__17712;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17712__$1);if(temp__4126__auto__)
{var s__17712__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17712__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17712__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17714 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17713 = 0;while(true){
if((i__17713 < size__4263__auto__))
{var node = cljs.core._nth.call(null,c__4262__auto__,i__17713);cljs.core.chunk_append.call(null,b__17714,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__17715 = (i__17713 + 1);
i__17713 = G__17715;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17714),iter__17711.call(null,cljs.core.chunk_rest.call(null,s__17712__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17714),null);
}
} else
{var node = cljs.core.first.call(null,s__17712__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__17711.call(null,cljs.core.rest.call(null,s__17712__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4264__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__17724 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17725 = null;var count__17726 = 0;var i__17727 = 0;while(true){
if((i__17727 < count__17726))
{var node = cljs.core._nth.call(null,chunk__17725,i__17727);goog.events.removeAll(node);
{
var G__17732 = seq__17724;
var G__17733 = chunk__17725;
var G__17734 = count__17726;
var G__17735 = (i__17727 + 1);
seq__17724 = G__17732;
chunk__17725 = G__17733;
count__17726 = G__17734;
i__17727 = G__17735;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17724);if(temp__4126__auto__)
{var seq__17724__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17724__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__17724__$1);{
var G__17736 = cljs.core.chunk_rest.call(null,seq__17724__$1);
var G__17737 = c__4295__auto__;
var G__17738 = cljs.core.count.call(null,c__4295__auto__);
var G__17739 = 0;
seq__17724 = G__17736;
chunk__17725 = G__17737;
count__17726 = G__17738;
i__17727 = G__17739;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17724__$1);goog.events.removeAll(node);
{
var G__17740 = cljs.core.next.call(null,seq__17724__$1);
var G__17741 = null;
var G__17742 = 0;
var G__17743 = 0;
seq__17724 = G__17740;
chunk__17725 = G__17741;
count__17726 = G__17742;
i__17727 = G__17743;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__17728 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17729 = null;var count__17730 = 0;var i__17731 = 0;while(true){
if((i__17731 < count__17730))
{var node = cljs.core._nth.call(null,chunk__17729,i__17731);goog.events.removeAll(node,type__$1);
{
var G__17744 = seq__17728;
var G__17745 = chunk__17729;
var G__17746 = count__17730;
var G__17747 = (i__17731 + 1);
seq__17728 = G__17744;
chunk__17729 = G__17745;
count__17730 = G__17746;
i__17731 = G__17747;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__17728);if(temp__4126__auto__)
{var seq__17728__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17728__$1))
{var c__4295__auto__ = cljs.core.chunk_first.call(null,seq__17728__$1);{
var G__17748 = cljs.core.chunk_rest.call(null,seq__17728__$1);
var G__17749 = c__4295__auto__;
var G__17750 = cljs.core.count.call(null,c__4295__auto__);
var G__17751 = 0;
seq__17728 = G__17748;
chunk__17729 = G__17749;
count__17730 = G__17750;
i__17731 = G__17751;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__17728__$1);goog.events.removeAll(node,type__$1);
{
var G__17752 = cljs.core.next.call(null,seq__17728__$1);
var G__17753 = null;
var G__17754 = 0;
var G__17755 = 0;
seq__17728 = G__17752;
chunk__17729 = G__17753;
count__17730 = G__17754;
i__17731 = G__17755;
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
var G__17756 = parent;
var G__17757 = cljs.core.cons.call(null,parent,so_far);
n = G__17756;
so_far = G__17757;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__17766_17774 = cljs.core.seq.call(null,ancestors);var chunk__17767_17775 = null;var count__17768_17776 = 0;var i__17769_17777 = 0;while(true){
if((i__17769_17777 < count__17768_17776))
{var n_17778 = cljs.core._nth.call(null,chunk__17767_17775,i__17769_17777);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17778;
goog.events.fireListeners(n_17778,evt.type,true,evt);
}
{
var G__17779 = seq__17766_17774;
var G__17780 = chunk__17767_17775;
var G__17781 = count__17768_17776;
var G__17782 = (i__17769_17777 + 1);
seq__17766_17774 = G__17779;
chunk__17767_17775 = G__17780;
count__17768_17776 = G__17781;
i__17769_17777 = G__17782;
continue;
}
} else
{var temp__4126__auto___17783 = cljs.core.seq.call(null,seq__17766_17774);if(temp__4126__auto___17783)
{var seq__17766_17784__$1 = temp__4126__auto___17783;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17766_17784__$1))
{var c__4295__auto___17785 = cljs.core.chunk_first.call(null,seq__17766_17784__$1);{
var G__17786 = cljs.core.chunk_rest.call(null,seq__17766_17784__$1);
var G__17787 = c__4295__auto___17785;
var G__17788 = cljs.core.count.call(null,c__4295__auto___17785);
var G__17789 = 0;
seq__17766_17774 = G__17786;
chunk__17767_17775 = G__17787;
count__17768_17776 = G__17788;
i__17769_17777 = G__17789;
continue;
}
} else
{var n_17790 = cljs.core.first.call(null,seq__17766_17784__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17790;
goog.events.fireListeners(n_17790,evt.type,true,evt);
}
{
var G__17791 = cljs.core.next.call(null,seq__17766_17784__$1);
var G__17792 = null;
var G__17793 = 0;
var G__17794 = 0;
seq__17766_17774 = G__17791;
chunk__17767_17775 = G__17792;
count__17768_17776 = G__17793;
i__17769_17777 = G__17794;
continue;
}
}
} else
{}
}
break;
}
var seq__17770_17795 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__17771_17796 = null;var count__17772_17797 = 0;var i__17773_17798 = 0;while(true){
if((i__17773_17798 < count__17772_17797))
{var n_17799 = cljs.core._nth.call(null,chunk__17771_17796,i__17773_17798);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17799;
goog.events.fireListeners(n_17799,evt.type,false,evt);
}
{
var G__17800 = seq__17770_17795;
var G__17801 = chunk__17771_17796;
var G__17802 = count__17772_17797;
var G__17803 = (i__17773_17798 + 1);
seq__17770_17795 = G__17800;
chunk__17771_17796 = G__17801;
count__17772_17797 = G__17802;
i__17773_17798 = G__17803;
continue;
}
} else
{var temp__4126__auto___17804 = cljs.core.seq.call(null,seq__17770_17795);if(temp__4126__auto___17804)
{var seq__17770_17805__$1 = temp__4126__auto___17804;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17770_17805__$1))
{var c__4295__auto___17806 = cljs.core.chunk_first.call(null,seq__17770_17805__$1);{
var G__17807 = cljs.core.chunk_rest.call(null,seq__17770_17805__$1);
var G__17808 = c__4295__auto___17806;
var G__17809 = cljs.core.count.call(null,c__4295__auto___17806);
var G__17810 = 0;
seq__17770_17795 = G__17807;
chunk__17771_17796 = G__17808;
count__17772_17797 = G__17809;
i__17773_17798 = G__17810;
continue;
}
} else
{var n_17811 = cljs.core.first.call(null,seq__17770_17805__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_17811;
goog.events.fireListeners(n_17811,evt.type,false,evt);
}
{
var G__17812 = cljs.core.next.call(null,seq__17770_17805__$1);
var G__17813 = null;
var G__17814 = 0;
var G__17815 = 0;
seq__17770_17795 = G__17812;
chunk__17771_17796 = G__17813;
count__17772_17797 = G__17814;
i__17773_17798 = G__17815;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3527__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3527__auto__))
{return o.dispatchEvent;
} else
{return and__3527__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__17822_17828 = cljs.core.seq.call(null,evt_map);var chunk__17823_17829 = null;var count__17824_17830 = 0;var i__17825_17831 = 0;while(true){
if((i__17825_17831 < count__17824_17830))
{var vec__17826_17832 = cljs.core._nth.call(null,chunk__17823_17829,i__17825_17831);var k_17833 = cljs.core.nth.call(null,vec__17826_17832,0,null);var v_17834 = cljs.core.nth.call(null,vec__17826_17832,1,null);(evt[k_17833] = v_17834);
{
var G__17835 = seq__17822_17828;
var G__17836 = chunk__17823_17829;
var G__17837 = count__17824_17830;
var G__17838 = (i__17825_17831 + 1);
seq__17822_17828 = G__17835;
chunk__17823_17829 = G__17836;
count__17824_17830 = G__17837;
i__17825_17831 = G__17838;
continue;
}
} else
{var temp__4126__auto___17839 = cljs.core.seq.call(null,seq__17822_17828);if(temp__4126__auto___17839)
{var seq__17822_17840__$1 = temp__4126__auto___17839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17822_17840__$1))
{var c__4295__auto___17841 = cljs.core.chunk_first.call(null,seq__17822_17840__$1);{
var G__17842 = cljs.core.chunk_rest.call(null,seq__17822_17840__$1);
var G__17843 = c__4295__auto___17841;
var G__17844 = cljs.core.count.call(null,c__4295__auto___17841);
var G__17845 = 0;
seq__17822_17828 = G__17842;
chunk__17823_17829 = G__17843;
count__17824_17830 = G__17844;
i__17825_17831 = G__17845;
continue;
}
} else
{var vec__17827_17846 = cljs.core.first.call(null,seq__17822_17840__$1);var k_17847 = cljs.core.nth.call(null,vec__17827_17846,0,null);var v_17848 = cljs.core.nth.call(null,vec__17827_17846,1,null);(evt[k_17847] = v_17848);
{
var G__17849 = cljs.core.next.call(null,seq__17822_17840__$1);
var G__17850 = null;
var G__17851 = 0;
var G__17852 = 0;
seq__17822_17828 = G__17849;
chunk__17823_17829 = G__17850;
count__17824_17830 = G__17851;
i__17825_17831 = G__17852;
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
return (function (p1__17853_SHARP_){return goog.events.getListeners(p1__17853_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
