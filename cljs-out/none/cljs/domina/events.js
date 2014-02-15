// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj16760 = {};return obj16760;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t16764 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t16764 = (function (evt,f,create_listener_function,meta16765){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta16765 = meta16765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t16764.cljs$lang$type = true;
domina.events.t16764.cljs$lang$ctorStr = "domina.events/t16764";
domina.events.t16764.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t16764");
});
domina.events.t16764.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t16764.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t16764.prototype.domina$events$Event$ = true;
domina.events.t16764.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t16764.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t16764.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t16764.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t16764.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t16764.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t16764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16766){var self__ = this;
var _16766__$1 = this;return self__.meta16765;
});
domina.events.t16764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16766,meta16765__$1){var self__ = this;
var _16766__$1 = this;return (new domina.events.t16764(self__.evt,self__.f,self__.create_listener_function,meta16765__$1));
});
domina.events.__GT_t16764 = (function __GT_t16764(evt__$1,f__$1,create_listener_function__$1,meta16765){return (new domina.events.t16764(evt__$1,f__$1,create_listener_function__$1,meta16765));
});
}
return (new domina.events.t16764(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__16771(s__16772){return (new cljs.core.LazySeq(null,(function (){var s__16772__$1 = s__16772;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__16772__$1);if(temp__4092__auto__)
{var s__16772__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__16772__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__16772__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__16774 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__16773 = 0;while(true){
if((i__16773 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__16773);cljs.core.chunk_append.call(null,b__16774,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__16775 = (i__16773 + 1);
i__16773 = G__16775;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16774),iter__16771.call(null,cljs.core.chunk_rest.call(null,s__16772__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16774),null);
}
} else
{var node = cljs.core.first.call(null,s__16772__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__16771.call(null,cljs.core.rest.call(null,s__16772__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__16784 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16785 = null;var count__16786 = 0;var i__16787 = 0;while(true){
if((i__16787 < count__16786))
{var node = cljs.core._nth.call(null,chunk__16785,i__16787);goog.events.removeAll(node);
{
var G__16792 = seq__16784;
var G__16793 = chunk__16785;
var G__16794 = count__16786;
var G__16795 = (i__16787 + 1);
seq__16784 = G__16792;
chunk__16785 = G__16793;
count__16786 = G__16794;
i__16787 = G__16795;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16784);if(temp__4092__auto__)
{var seq__16784__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16784__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16784__$1);{
var G__16796 = cljs.core.chunk_rest.call(null,seq__16784__$1);
var G__16797 = c__4148__auto__;
var G__16798 = cljs.core.count.call(null,c__4148__auto__);
var G__16799 = 0;
seq__16784 = G__16796;
chunk__16785 = G__16797;
count__16786 = G__16798;
i__16787 = G__16799;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16784__$1);goog.events.removeAll(node);
{
var G__16800 = cljs.core.next.call(null,seq__16784__$1);
var G__16801 = null;
var G__16802 = 0;
var G__16803 = 0;
seq__16784 = G__16800;
chunk__16785 = G__16801;
count__16786 = G__16802;
i__16787 = G__16803;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__16788 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16789 = null;var count__16790 = 0;var i__16791 = 0;while(true){
if((i__16791 < count__16790))
{var node = cljs.core._nth.call(null,chunk__16789,i__16791);goog.events.removeAll(node,type__$1);
{
var G__16804 = seq__16788;
var G__16805 = chunk__16789;
var G__16806 = count__16790;
var G__16807 = (i__16791 + 1);
seq__16788 = G__16804;
chunk__16789 = G__16805;
count__16790 = G__16806;
i__16791 = G__16807;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16788);if(temp__4092__auto__)
{var seq__16788__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16788__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16788__$1);{
var G__16808 = cljs.core.chunk_rest.call(null,seq__16788__$1);
var G__16809 = c__4148__auto__;
var G__16810 = cljs.core.count.call(null,c__4148__auto__);
var G__16811 = 0;
seq__16788 = G__16808;
chunk__16789 = G__16809;
count__16790 = G__16810;
i__16791 = G__16811;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__16788__$1);goog.events.removeAll(node,type__$1);
{
var G__16812 = cljs.core.next.call(null,seq__16788__$1);
var G__16813 = null;
var G__16814 = 0;
var G__16815 = 0;
seq__16788 = G__16812;
chunk__16789 = G__16813;
count__16790 = G__16814;
i__16791 = G__16815;
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
var G__16816 = parent;
var G__16817 = cljs.core.cons.call(null,parent,so_far);
n = G__16816;
so_far = G__16817;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__16826_16834 = cljs.core.seq.call(null,ancestors);var chunk__16827_16835 = null;var count__16828_16836 = 0;var i__16829_16837 = 0;while(true){
if((i__16829_16837 < count__16828_16836))
{var n_16838 = cljs.core._nth.call(null,chunk__16827_16835,i__16829_16837);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16838;
goog.events.fireListeners(n_16838,evt.type,true,evt);
}
{
var G__16839 = seq__16826_16834;
var G__16840 = chunk__16827_16835;
var G__16841 = count__16828_16836;
var G__16842 = (i__16829_16837 + 1);
seq__16826_16834 = G__16839;
chunk__16827_16835 = G__16840;
count__16828_16836 = G__16841;
i__16829_16837 = G__16842;
continue;
}
} else
{var temp__4092__auto___16843 = cljs.core.seq.call(null,seq__16826_16834);if(temp__4092__auto___16843)
{var seq__16826_16844__$1 = temp__4092__auto___16843;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16826_16844__$1))
{var c__4148__auto___16845 = cljs.core.chunk_first.call(null,seq__16826_16844__$1);{
var G__16846 = cljs.core.chunk_rest.call(null,seq__16826_16844__$1);
var G__16847 = c__4148__auto___16845;
var G__16848 = cljs.core.count.call(null,c__4148__auto___16845);
var G__16849 = 0;
seq__16826_16834 = G__16846;
chunk__16827_16835 = G__16847;
count__16828_16836 = G__16848;
i__16829_16837 = G__16849;
continue;
}
} else
{var n_16850 = cljs.core.first.call(null,seq__16826_16844__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16850;
goog.events.fireListeners(n_16850,evt.type,true,evt);
}
{
var G__16851 = cljs.core.next.call(null,seq__16826_16844__$1);
var G__16852 = null;
var G__16853 = 0;
var G__16854 = 0;
seq__16826_16834 = G__16851;
chunk__16827_16835 = G__16852;
count__16828_16836 = G__16853;
i__16829_16837 = G__16854;
continue;
}
}
} else
{}
}
break;
}
var seq__16830_16855 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__16831_16856 = null;var count__16832_16857 = 0;var i__16833_16858 = 0;while(true){
if((i__16833_16858 < count__16832_16857))
{var n_16859 = cljs.core._nth.call(null,chunk__16831_16856,i__16833_16858);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16859;
goog.events.fireListeners(n_16859,evt.type,false,evt);
}
{
var G__16860 = seq__16830_16855;
var G__16861 = chunk__16831_16856;
var G__16862 = count__16832_16857;
var G__16863 = (i__16833_16858 + 1);
seq__16830_16855 = G__16860;
chunk__16831_16856 = G__16861;
count__16832_16857 = G__16862;
i__16833_16858 = G__16863;
continue;
}
} else
{var temp__4092__auto___16864 = cljs.core.seq.call(null,seq__16830_16855);if(temp__4092__auto___16864)
{var seq__16830_16865__$1 = temp__4092__auto___16864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16830_16865__$1))
{var c__4148__auto___16866 = cljs.core.chunk_first.call(null,seq__16830_16865__$1);{
var G__16867 = cljs.core.chunk_rest.call(null,seq__16830_16865__$1);
var G__16868 = c__4148__auto___16866;
var G__16869 = cljs.core.count.call(null,c__4148__auto___16866);
var G__16870 = 0;
seq__16830_16855 = G__16867;
chunk__16831_16856 = G__16868;
count__16832_16857 = G__16869;
i__16833_16858 = G__16870;
continue;
}
} else
{var n_16871 = cljs.core.first.call(null,seq__16830_16865__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_16871;
goog.events.fireListeners(n_16871,evt.type,false,evt);
}
{
var G__16872 = cljs.core.next.call(null,seq__16830_16865__$1);
var G__16873 = null;
var G__16874 = 0;
var G__16875 = 0;
seq__16830_16855 = G__16872;
chunk__16831_16856 = G__16873;
count__16832_16857 = G__16874;
i__16833_16858 = G__16875;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__16882_16888 = cljs.core.seq.call(null,evt_map);var chunk__16883_16889 = null;var count__16884_16890 = 0;var i__16885_16891 = 0;while(true){
if((i__16885_16891 < count__16884_16890))
{var vec__16886_16892 = cljs.core._nth.call(null,chunk__16883_16889,i__16885_16891);var k_16893 = cljs.core.nth.call(null,vec__16886_16892,0,null);var v_16894 = cljs.core.nth.call(null,vec__16886_16892,1,null);(evt[k_16893] = v_16894);
{
var G__16895 = seq__16882_16888;
var G__16896 = chunk__16883_16889;
var G__16897 = count__16884_16890;
var G__16898 = (i__16885_16891 + 1);
seq__16882_16888 = G__16895;
chunk__16883_16889 = G__16896;
count__16884_16890 = G__16897;
i__16885_16891 = G__16898;
continue;
}
} else
{var temp__4092__auto___16899 = cljs.core.seq.call(null,seq__16882_16888);if(temp__4092__auto___16899)
{var seq__16882_16900__$1 = temp__4092__auto___16899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16882_16900__$1))
{var c__4148__auto___16901 = cljs.core.chunk_first.call(null,seq__16882_16900__$1);{
var G__16902 = cljs.core.chunk_rest.call(null,seq__16882_16900__$1);
var G__16903 = c__4148__auto___16901;
var G__16904 = cljs.core.count.call(null,c__4148__auto___16901);
var G__16905 = 0;
seq__16882_16888 = G__16902;
chunk__16883_16889 = G__16903;
count__16884_16890 = G__16904;
i__16885_16891 = G__16905;
continue;
}
} else
{var vec__16887_16906 = cljs.core.first.call(null,seq__16882_16900__$1);var k_16907 = cljs.core.nth.call(null,vec__16887_16906,0,null);var v_16908 = cljs.core.nth.call(null,vec__16887_16906,1,null);(evt[k_16907] = v_16908);
{
var G__16909 = cljs.core.next.call(null,seq__16882_16900__$1);
var G__16910 = null;
var G__16911 = 0;
var G__16912 = 0;
seq__16882_16888 = G__16909;
chunk__16883_16889 = G__16910;
count__16884_16890 = G__16911;
i__16885_16891 = G__16912;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__16913_SHARP_){return goog.events.getListeners(p1__16913_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map