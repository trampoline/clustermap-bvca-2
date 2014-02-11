// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj36748 = {};return obj36748;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t36752 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t36752 = (function (evt,f,create_listener_function,meta36753){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta36753 = meta36753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t36752.cljs$lang$type = true;
domina.events.t36752.cljs$lang$ctorStr = "domina.events/t36752";
domina.events.t36752.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t36752");
});
domina.events.t36752.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t36752.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t36752.prototype.domina$events$Event$ = true;
domina.events.t36752.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t36752.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t36752.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t36752.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t36752.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t36752.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t36752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36754){var self__ = this;
var _36754__$1 = this;return self__.meta36753;
});
domina.events.t36752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36754,meta36753__$1){var self__ = this;
var _36754__$1 = this;return (new domina.events.t36752(self__.evt,self__.f,self__.create_listener_function,meta36753__$1));
});
domina.events.__GT_t36752 = (function __GT_t36752(evt__$1,f__$1,create_listener_function__$1,meta36753){return (new domina.events.t36752(evt__$1,f__$1,create_listener_function__$1,meta36753));
});
}
return (new domina.events.t36752(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__36759(s__36760){return (new cljs.core.LazySeq(null,(function (){var s__36760__$1 = s__36760;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__36760__$1);if(temp__4092__auto__)
{var s__36760__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__36760__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__36760__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__36762 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__36761 = 0;while(true){
if((i__36761 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__36761);cljs.core.chunk_append.call(null,b__36762,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__36763 = (i__36761 + 1);
i__36761 = G__36763;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36762),iter__36759.call(null,cljs.core.chunk_rest.call(null,s__36760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36762),null);
}
} else
{var node = cljs.core.first.call(null,s__36760__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__36759.call(null,cljs.core.rest.call(null,s__36760__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__36772 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36773 = null;var count__36774 = 0;var i__36775 = 0;while(true){
if((i__36775 < count__36774))
{var node = cljs.core._nth.call(null,chunk__36773,i__36775);goog.events.removeAll(node);
{
var G__36780 = seq__36772;
var G__36781 = chunk__36773;
var G__36782 = count__36774;
var G__36783 = (i__36775 + 1);
seq__36772 = G__36780;
chunk__36773 = G__36781;
count__36774 = G__36782;
i__36775 = G__36783;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36772);if(temp__4092__auto__)
{var seq__36772__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36772__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36772__$1);{
var G__36784 = cljs.core.chunk_rest.call(null,seq__36772__$1);
var G__36785 = c__4148__auto__;
var G__36786 = cljs.core.count.call(null,c__4148__auto__);
var G__36787 = 0;
seq__36772 = G__36784;
chunk__36773 = G__36785;
count__36774 = G__36786;
i__36775 = G__36787;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36772__$1);goog.events.removeAll(node);
{
var G__36788 = cljs.core.next.call(null,seq__36772__$1);
var G__36789 = null;
var G__36790 = 0;
var G__36791 = 0;
seq__36772 = G__36788;
chunk__36773 = G__36789;
count__36774 = G__36790;
i__36775 = G__36791;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__36776 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36777 = null;var count__36778 = 0;var i__36779 = 0;while(true){
if((i__36779 < count__36778))
{var node = cljs.core._nth.call(null,chunk__36777,i__36779);goog.events.removeAll(node,type__$1);
{
var G__36792 = seq__36776;
var G__36793 = chunk__36777;
var G__36794 = count__36778;
var G__36795 = (i__36779 + 1);
seq__36776 = G__36792;
chunk__36777 = G__36793;
count__36778 = G__36794;
i__36779 = G__36795;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36776);if(temp__4092__auto__)
{var seq__36776__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36776__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36776__$1);{
var G__36796 = cljs.core.chunk_rest.call(null,seq__36776__$1);
var G__36797 = c__4148__auto__;
var G__36798 = cljs.core.count.call(null,c__4148__auto__);
var G__36799 = 0;
seq__36776 = G__36796;
chunk__36777 = G__36797;
count__36778 = G__36798;
i__36779 = G__36799;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__36776__$1);goog.events.removeAll(node,type__$1);
{
var G__36800 = cljs.core.next.call(null,seq__36776__$1);
var G__36801 = null;
var G__36802 = 0;
var G__36803 = 0;
seq__36776 = G__36800;
chunk__36777 = G__36801;
count__36778 = G__36802;
i__36779 = G__36803;
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
var G__36804 = parent;
var G__36805 = cljs.core.cons.call(null,parent,so_far);
n = G__36804;
so_far = G__36805;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__36814_36822 = cljs.core.seq.call(null,ancestors);var chunk__36815_36823 = null;var count__36816_36824 = 0;var i__36817_36825 = 0;while(true){
if((i__36817_36825 < count__36816_36824))
{var n_36826 = cljs.core._nth.call(null,chunk__36815_36823,i__36817_36825);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36826;
goog.events.fireListeners(n_36826,evt.type,true,evt);
}
{
var G__36827 = seq__36814_36822;
var G__36828 = chunk__36815_36823;
var G__36829 = count__36816_36824;
var G__36830 = (i__36817_36825 + 1);
seq__36814_36822 = G__36827;
chunk__36815_36823 = G__36828;
count__36816_36824 = G__36829;
i__36817_36825 = G__36830;
continue;
}
} else
{var temp__4092__auto___36831 = cljs.core.seq.call(null,seq__36814_36822);if(temp__4092__auto___36831)
{var seq__36814_36832__$1 = temp__4092__auto___36831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36814_36832__$1))
{var c__4148__auto___36833 = cljs.core.chunk_first.call(null,seq__36814_36832__$1);{
var G__36834 = cljs.core.chunk_rest.call(null,seq__36814_36832__$1);
var G__36835 = c__4148__auto___36833;
var G__36836 = cljs.core.count.call(null,c__4148__auto___36833);
var G__36837 = 0;
seq__36814_36822 = G__36834;
chunk__36815_36823 = G__36835;
count__36816_36824 = G__36836;
i__36817_36825 = G__36837;
continue;
}
} else
{var n_36838 = cljs.core.first.call(null,seq__36814_36832__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36838;
goog.events.fireListeners(n_36838,evt.type,true,evt);
}
{
var G__36839 = cljs.core.next.call(null,seq__36814_36832__$1);
var G__36840 = null;
var G__36841 = 0;
var G__36842 = 0;
seq__36814_36822 = G__36839;
chunk__36815_36823 = G__36840;
count__36816_36824 = G__36841;
i__36817_36825 = G__36842;
continue;
}
}
} else
{}
}
break;
}
var seq__36818_36843 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__36819_36844 = null;var count__36820_36845 = 0;var i__36821_36846 = 0;while(true){
if((i__36821_36846 < count__36820_36845))
{var n_36847 = cljs.core._nth.call(null,chunk__36819_36844,i__36821_36846);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36847;
goog.events.fireListeners(n_36847,evt.type,false,evt);
}
{
var G__36848 = seq__36818_36843;
var G__36849 = chunk__36819_36844;
var G__36850 = count__36820_36845;
var G__36851 = (i__36821_36846 + 1);
seq__36818_36843 = G__36848;
chunk__36819_36844 = G__36849;
count__36820_36845 = G__36850;
i__36821_36846 = G__36851;
continue;
}
} else
{var temp__4092__auto___36852 = cljs.core.seq.call(null,seq__36818_36843);if(temp__4092__auto___36852)
{var seq__36818_36853__$1 = temp__4092__auto___36852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36818_36853__$1))
{var c__4148__auto___36854 = cljs.core.chunk_first.call(null,seq__36818_36853__$1);{
var G__36855 = cljs.core.chunk_rest.call(null,seq__36818_36853__$1);
var G__36856 = c__4148__auto___36854;
var G__36857 = cljs.core.count.call(null,c__4148__auto___36854);
var G__36858 = 0;
seq__36818_36843 = G__36855;
chunk__36819_36844 = G__36856;
count__36820_36845 = G__36857;
i__36821_36846 = G__36858;
continue;
}
} else
{var n_36859 = cljs.core.first.call(null,seq__36818_36853__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_36859;
goog.events.fireListeners(n_36859,evt.type,false,evt);
}
{
var G__36860 = cljs.core.next.call(null,seq__36818_36853__$1);
var G__36861 = null;
var G__36862 = 0;
var G__36863 = 0;
seq__36818_36843 = G__36860;
chunk__36819_36844 = G__36861;
count__36820_36845 = G__36862;
i__36821_36846 = G__36863;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__36870_36876 = cljs.core.seq.call(null,evt_map);var chunk__36871_36877 = null;var count__36872_36878 = 0;var i__36873_36879 = 0;while(true){
if((i__36873_36879 < count__36872_36878))
{var vec__36874_36880 = cljs.core._nth.call(null,chunk__36871_36877,i__36873_36879);var k_36881 = cljs.core.nth.call(null,vec__36874_36880,0,null);var v_36882 = cljs.core.nth.call(null,vec__36874_36880,1,null);(evt[k_36881] = v_36882);
{
var G__36883 = seq__36870_36876;
var G__36884 = chunk__36871_36877;
var G__36885 = count__36872_36878;
var G__36886 = (i__36873_36879 + 1);
seq__36870_36876 = G__36883;
chunk__36871_36877 = G__36884;
count__36872_36878 = G__36885;
i__36873_36879 = G__36886;
continue;
}
} else
{var temp__4092__auto___36887 = cljs.core.seq.call(null,seq__36870_36876);if(temp__4092__auto___36887)
{var seq__36870_36888__$1 = temp__4092__auto___36887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36870_36888__$1))
{var c__4148__auto___36889 = cljs.core.chunk_first.call(null,seq__36870_36888__$1);{
var G__36890 = cljs.core.chunk_rest.call(null,seq__36870_36888__$1);
var G__36891 = c__4148__auto___36889;
var G__36892 = cljs.core.count.call(null,c__4148__auto___36889);
var G__36893 = 0;
seq__36870_36876 = G__36890;
chunk__36871_36877 = G__36891;
count__36872_36878 = G__36892;
i__36873_36879 = G__36893;
continue;
}
} else
{var vec__36875_36894 = cljs.core.first.call(null,seq__36870_36888__$1);var k_36895 = cljs.core.nth.call(null,vec__36875_36894,0,null);var v_36896 = cljs.core.nth.call(null,vec__36875_36894,1,null);(evt[k_36895] = v_36896);
{
var G__36897 = cljs.core.next.call(null,seq__36870_36888__$1);
var G__36898 = null;
var G__36899 = 0;
var G__36900 = 0;
seq__36870_36876 = G__36897;
chunk__36871_36877 = G__36898;
count__36872_36878 = G__36899;
i__36873_36879 = G__36900;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__36901_SHARP_){return goog.events.getListeners(p1__36901_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
