// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14763 = {};return obj14763;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14767 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14767 = (function (evt,f,create_listener_function,meta14768){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14768 = meta14768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14767.cljs$lang$type = true;
domina.events.t14767.cljs$lang$ctorStr = "domina.events/t14767";
domina.events.t14767.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14767");
});
domina.events.t14767.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14767.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14767.prototype.domina$events$Event$ = true;
domina.events.t14767.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14767.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14767.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14767.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14767.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14767.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14769){var self__ = this;
var _14769__$1 = this;return self__.meta14768;
});
domina.events.t14767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14769,meta14768__$1){var self__ = this;
var _14769__$1 = this;return (new domina.events.t14767(self__.evt,self__.f,self__.create_listener_function,meta14768__$1));
});
domina.events.__GT_t14767 = (function __GT_t14767(evt__$1,f__$1,create_listener_function__$1,meta14768){return (new domina.events.t14767(evt__$1,f__$1,create_listener_function__$1,meta14768));
});
}
return (new domina.events.t14767(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14774(s__14775){return (new cljs.core.LazySeq(null,(function (){var s__14775__$1 = s__14775;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14775__$1);if(temp__4092__auto__)
{var s__14775__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14775__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14775__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14777 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14776 = 0;while(true){
if((i__14776 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14776);cljs.core.chunk_append.call(null,b__14777,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14778 = (i__14776 + 1);
i__14776 = G__14778;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14777),iter__14774.call(null,cljs.core.chunk_rest.call(null,s__14775__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14777),null);
}
} else
{var node = cljs.core.first.call(null,s__14775__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14774.call(null,cljs.core.rest.call(null,s__14775__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__14787 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14788 = null;var count__14789 = 0;var i__14790 = 0;while(true){
if((i__14790 < count__14789))
{var node = cljs.core._nth.call(null,chunk__14788,i__14790);goog.events.removeAll(node);
{
var G__14795 = seq__14787;
var G__14796 = chunk__14788;
var G__14797 = count__14789;
var G__14798 = (i__14790 + 1);
seq__14787 = G__14795;
chunk__14788 = G__14796;
count__14789 = G__14797;
i__14790 = G__14798;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14787);if(temp__4092__auto__)
{var seq__14787__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14787__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14787__$1);{
var G__14799 = cljs.core.chunk_rest.call(null,seq__14787__$1);
var G__14800 = c__4148__auto__;
var G__14801 = cljs.core.count.call(null,c__4148__auto__);
var G__14802 = 0;
seq__14787 = G__14799;
chunk__14788 = G__14800;
count__14789 = G__14801;
i__14790 = G__14802;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14787__$1);goog.events.removeAll(node);
{
var G__14803 = cljs.core.next.call(null,seq__14787__$1);
var G__14804 = null;
var G__14805 = 0;
var G__14806 = 0;
seq__14787 = G__14803;
chunk__14788 = G__14804;
count__14789 = G__14805;
i__14790 = G__14806;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14791 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14792 = null;var count__14793 = 0;var i__14794 = 0;while(true){
if((i__14794 < count__14793))
{var node = cljs.core._nth.call(null,chunk__14792,i__14794);goog.events.removeAll(node,type__$1);
{
var G__14807 = seq__14791;
var G__14808 = chunk__14792;
var G__14809 = count__14793;
var G__14810 = (i__14794 + 1);
seq__14791 = G__14807;
chunk__14792 = G__14808;
count__14793 = G__14809;
i__14794 = G__14810;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14791);if(temp__4092__auto__)
{var seq__14791__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14791__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14791__$1);{
var G__14811 = cljs.core.chunk_rest.call(null,seq__14791__$1);
var G__14812 = c__4148__auto__;
var G__14813 = cljs.core.count.call(null,c__4148__auto__);
var G__14814 = 0;
seq__14791 = G__14811;
chunk__14792 = G__14812;
count__14793 = G__14813;
i__14794 = G__14814;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14791__$1);goog.events.removeAll(node,type__$1);
{
var G__14815 = cljs.core.next.call(null,seq__14791__$1);
var G__14816 = null;
var G__14817 = 0;
var G__14818 = 0;
seq__14791 = G__14815;
chunk__14792 = G__14816;
count__14793 = G__14817;
i__14794 = G__14818;
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
var G__14819 = parent;
var G__14820 = cljs.core.cons.call(null,parent,so_far);
n = G__14819;
so_far = G__14820;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14829_14837 = cljs.core.seq.call(null,ancestors);var chunk__14830_14838 = null;var count__14831_14839 = 0;var i__14832_14840 = 0;while(true){
if((i__14832_14840 < count__14831_14839))
{var n_14841 = cljs.core._nth.call(null,chunk__14830_14838,i__14832_14840);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14841;
goog.events.fireListeners(n_14841,evt.type,true,evt);
}
{
var G__14842 = seq__14829_14837;
var G__14843 = chunk__14830_14838;
var G__14844 = count__14831_14839;
var G__14845 = (i__14832_14840 + 1);
seq__14829_14837 = G__14842;
chunk__14830_14838 = G__14843;
count__14831_14839 = G__14844;
i__14832_14840 = G__14845;
continue;
}
} else
{var temp__4092__auto___14846 = cljs.core.seq.call(null,seq__14829_14837);if(temp__4092__auto___14846)
{var seq__14829_14847__$1 = temp__4092__auto___14846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14829_14847__$1))
{var c__4148__auto___14848 = cljs.core.chunk_first.call(null,seq__14829_14847__$1);{
var G__14849 = cljs.core.chunk_rest.call(null,seq__14829_14847__$1);
var G__14850 = c__4148__auto___14848;
var G__14851 = cljs.core.count.call(null,c__4148__auto___14848);
var G__14852 = 0;
seq__14829_14837 = G__14849;
chunk__14830_14838 = G__14850;
count__14831_14839 = G__14851;
i__14832_14840 = G__14852;
continue;
}
} else
{var n_14853 = cljs.core.first.call(null,seq__14829_14847__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14853;
goog.events.fireListeners(n_14853,evt.type,true,evt);
}
{
var G__14854 = cljs.core.next.call(null,seq__14829_14847__$1);
var G__14855 = null;
var G__14856 = 0;
var G__14857 = 0;
seq__14829_14837 = G__14854;
chunk__14830_14838 = G__14855;
count__14831_14839 = G__14856;
i__14832_14840 = G__14857;
continue;
}
}
} else
{}
}
break;
}
var seq__14833_14858 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14834_14859 = null;var count__14835_14860 = 0;var i__14836_14861 = 0;while(true){
if((i__14836_14861 < count__14835_14860))
{var n_14862 = cljs.core._nth.call(null,chunk__14834_14859,i__14836_14861);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14862;
goog.events.fireListeners(n_14862,evt.type,false,evt);
}
{
var G__14863 = seq__14833_14858;
var G__14864 = chunk__14834_14859;
var G__14865 = count__14835_14860;
var G__14866 = (i__14836_14861 + 1);
seq__14833_14858 = G__14863;
chunk__14834_14859 = G__14864;
count__14835_14860 = G__14865;
i__14836_14861 = G__14866;
continue;
}
} else
{var temp__4092__auto___14867 = cljs.core.seq.call(null,seq__14833_14858);if(temp__4092__auto___14867)
{var seq__14833_14868__$1 = temp__4092__auto___14867;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14833_14868__$1))
{var c__4148__auto___14869 = cljs.core.chunk_first.call(null,seq__14833_14868__$1);{
var G__14870 = cljs.core.chunk_rest.call(null,seq__14833_14868__$1);
var G__14871 = c__4148__auto___14869;
var G__14872 = cljs.core.count.call(null,c__4148__auto___14869);
var G__14873 = 0;
seq__14833_14858 = G__14870;
chunk__14834_14859 = G__14871;
count__14835_14860 = G__14872;
i__14836_14861 = G__14873;
continue;
}
} else
{var n_14874 = cljs.core.first.call(null,seq__14833_14868__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14874;
goog.events.fireListeners(n_14874,evt.type,false,evt);
}
{
var G__14875 = cljs.core.next.call(null,seq__14833_14868__$1);
var G__14876 = null;
var G__14877 = 0;
var G__14878 = 0;
seq__14833_14858 = G__14875;
chunk__14834_14859 = G__14876;
count__14835_14860 = G__14877;
i__14836_14861 = G__14878;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14885_14891 = cljs.core.seq.call(null,evt_map);var chunk__14886_14892 = null;var count__14887_14893 = 0;var i__14888_14894 = 0;while(true){
if((i__14888_14894 < count__14887_14893))
{var vec__14889_14895 = cljs.core._nth.call(null,chunk__14886_14892,i__14888_14894);var k_14896 = cljs.core.nth.call(null,vec__14889_14895,0,null);var v_14897 = cljs.core.nth.call(null,vec__14889_14895,1,null);(evt[k_14896] = v_14897);
{
var G__14898 = seq__14885_14891;
var G__14899 = chunk__14886_14892;
var G__14900 = count__14887_14893;
var G__14901 = (i__14888_14894 + 1);
seq__14885_14891 = G__14898;
chunk__14886_14892 = G__14899;
count__14887_14893 = G__14900;
i__14888_14894 = G__14901;
continue;
}
} else
{var temp__4092__auto___14902 = cljs.core.seq.call(null,seq__14885_14891);if(temp__4092__auto___14902)
{var seq__14885_14903__$1 = temp__4092__auto___14902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14885_14903__$1))
{var c__4148__auto___14904 = cljs.core.chunk_first.call(null,seq__14885_14903__$1);{
var G__14905 = cljs.core.chunk_rest.call(null,seq__14885_14903__$1);
var G__14906 = c__4148__auto___14904;
var G__14907 = cljs.core.count.call(null,c__4148__auto___14904);
var G__14908 = 0;
seq__14885_14891 = G__14905;
chunk__14886_14892 = G__14906;
count__14887_14893 = G__14907;
i__14888_14894 = G__14908;
continue;
}
} else
{var vec__14890_14909 = cljs.core.first.call(null,seq__14885_14903__$1);var k_14910 = cljs.core.nth.call(null,vec__14890_14909,0,null);var v_14911 = cljs.core.nth.call(null,vec__14890_14909,1,null);(evt[k_14910] = v_14911);
{
var G__14912 = cljs.core.next.call(null,seq__14885_14903__$1);
var G__14913 = null;
var G__14914 = 0;
var G__14915 = 0;
seq__14885_14891 = G__14912;
chunk__14886_14892 = G__14913;
count__14887_14893 = G__14914;
i__14888_14894 = G__14915;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__14916_SHARP_){return goog.events.getListeners(p1__14916_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map