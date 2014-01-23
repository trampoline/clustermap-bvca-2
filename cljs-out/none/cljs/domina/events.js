// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj15767 = {};return obj15767;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t15771 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t15771 = (function (evt,f,create_listener_function,meta15772){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta15772 = meta15772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t15771.cljs$lang$type = true;
domina.events.t15771.cljs$lang$ctorStr = "domina.events/t15771";
domina.events.t15771.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t15771");
});
domina.events.t15771.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t15771.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t15771.prototype.domina$events$Event$ = true;
domina.events.t15771.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t15771.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t15771.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t15771.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t15771.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t15771.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t15771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15773){var self__ = this;
var _15773__$1 = this;return self__.meta15772;
});
domina.events.t15771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15773,meta15772__$1){var self__ = this;
var _15773__$1 = this;return (new domina.events.t15771(self__.evt,self__.f,self__.create_listener_function,meta15772__$1));
});
domina.events.__GT_t15771 = (function __GT_t15771(evt__$1,f__$1,create_listener_function__$1,meta15772){return (new domina.events.t15771(evt__$1,f__$1,create_listener_function__$1,meta15772));
});
}
return (new domina.events.t15771(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__15778(s__15779){return (new cljs.core.LazySeq(null,(function (){var s__15779__$1 = s__15779;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15779__$1);if(temp__4092__auto__)
{var s__15779__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15779__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__15779__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__15781 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__15780 = 0;while(true){
if((i__15780 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__15780);cljs.core.chunk_append.call(null,b__15781,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__15782 = (i__15780 + 1);
i__15780 = G__15782;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15781),iter__15778.call(null,cljs.core.chunk_rest.call(null,s__15779__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15781),null);
}
} else
{var node = cljs.core.first.call(null,s__15779__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__15778.call(null,cljs.core.rest.call(null,s__15779__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__15791 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15792 = null;var count__15793 = 0;var i__15794 = 0;while(true){
if((i__15794 < count__15793))
{var node = cljs.core._nth.call(null,chunk__15792,i__15794);goog.events.removeAll(node);
{
var G__15799 = seq__15791;
var G__15800 = chunk__15792;
var G__15801 = count__15793;
var G__15802 = (i__15794 + 1);
seq__15791 = G__15799;
chunk__15792 = G__15800;
count__15793 = G__15801;
i__15794 = G__15802;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15791);if(temp__4092__auto__)
{var seq__15791__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15791__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15791__$1);{
var G__15803 = cljs.core.chunk_rest.call(null,seq__15791__$1);
var G__15804 = c__4148__auto__;
var G__15805 = cljs.core.count.call(null,c__4148__auto__);
var G__15806 = 0;
seq__15791 = G__15803;
chunk__15792 = G__15804;
count__15793 = G__15805;
i__15794 = G__15806;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15791__$1);goog.events.removeAll(node);
{
var G__15807 = cljs.core.next.call(null,seq__15791__$1);
var G__15808 = null;
var G__15809 = 0;
var G__15810 = 0;
seq__15791 = G__15807;
chunk__15792 = G__15808;
count__15793 = G__15809;
i__15794 = G__15810;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__15795 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15796 = null;var count__15797 = 0;var i__15798 = 0;while(true){
if((i__15798 < count__15797))
{var node = cljs.core._nth.call(null,chunk__15796,i__15798);goog.events.removeAll(node,type__$1);
{
var G__15811 = seq__15795;
var G__15812 = chunk__15796;
var G__15813 = count__15797;
var G__15814 = (i__15798 + 1);
seq__15795 = G__15811;
chunk__15796 = G__15812;
count__15797 = G__15813;
i__15798 = G__15814;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15795);if(temp__4092__auto__)
{var seq__15795__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15795__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15795__$1);{
var G__15815 = cljs.core.chunk_rest.call(null,seq__15795__$1);
var G__15816 = c__4148__auto__;
var G__15817 = cljs.core.count.call(null,c__4148__auto__);
var G__15818 = 0;
seq__15795 = G__15815;
chunk__15796 = G__15816;
count__15797 = G__15817;
i__15798 = G__15818;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__15795__$1);goog.events.removeAll(node,type__$1);
{
var G__15819 = cljs.core.next.call(null,seq__15795__$1);
var G__15820 = null;
var G__15821 = 0;
var G__15822 = 0;
seq__15795 = G__15819;
chunk__15796 = G__15820;
count__15797 = G__15821;
i__15798 = G__15822;
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
var G__15823 = parent;
var G__15824 = cljs.core.cons.call(null,parent,so_far);
n = G__15823;
so_far = G__15824;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__15833_15841 = cljs.core.seq.call(null,ancestors);var chunk__15834_15842 = null;var count__15835_15843 = 0;var i__15836_15844 = 0;while(true){
if((i__15836_15844 < count__15835_15843))
{var n_15845 = cljs.core._nth.call(null,chunk__15834_15842,i__15836_15844);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15845;
goog.events.fireListeners(n_15845,evt.type,true,evt);
}
{
var G__15846 = seq__15833_15841;
var G__15847 = chunk__15834_15842;
var G__15848 = count__15835_15843;
var G__15849 = (i__15836_15844 + 1);
seq__15833_15841 = G__15846;
chunk__15834_15842 = G__15847;
count__15835_15843 = G__15848;
i__15836_15844 = G__15849;
continue;
}
} else
{var temp__4092__auto___15850 = cljs.core.seq.call(null,seq__15833_15841);if(temp__4092__auto___15850)
{var seq__15833_15851__$1 = temp__4092__auto___15850;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15833_15851__$1))
{var c__4148__auto___15852 = cljs.core.chunk_first.call(null,seq__15833_15851__$1);{
var G__15853 = cljs.core.chunk_rest.call(null,seq__15833_15851__$1);
var G__15854 = c__4148__auto___15852;
var G__15855 = cljs.core.count.call(null,c__4148__auto___15852);
var G__15856 = 0;
seq__15833_15841 = G__15853;
chunk__15834_15842 = G__15854;
count__15835_15843 = G__15855;
i__15836_15844 = G__15856;
continue;
}
} else
{var n_15857 = cljs.core.first.call(null,seq__15833_15851__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15857;
goog.events.fireListeners(n_15857,evt.type,true,evt);
}
{
var G__15858 = cljs.core.next.call(null,seq__15833_15851__$1);
var G__15859 = null;
var G__15860 = 0;
var G__15861 = 0;
seq__15833_15841 = G__15858;
chunk__15834_15842 = G__15859;
count__15835_15843 = G__15860;
i__15836_15844 = G__15861;
continue;
}
}
} else
{}
}
break;
}
var seq__15837_15862 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__15838_15863 = null;var count__15839_15864 = 0;var i__15840_15865 = 0;while(true){
if((i__15840_15865 < count__15839_15864))
{var n_15866 = cljs.core._nth.call(null,chunk__15838_15863,i__15840_15865);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15866;
goog.events.fireListeners(n_15866,evt.type,false,evt);
}
{
var G__15867 = seq__15837_15862;
var G__15868 = chunk__15838_15863;
var G__15869 = count__15839_15864;
var G__15870 = (i__15840_15865 + 1);
seq__15837_15862 = G__15867;
chunk__15838_15863 = G__15868;
count__15839_15864 = G__15869;
i__15840_15865 = G__15870;
continue;
}
} else
{var temp__4092__auto___15871 = cljs.core.seq.call(null,seq__15837_15862);if(temp__4092__auto___15871)
{var seq__15837_15872__$1 = temp__4092__auto___15871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15837_15872__$1))
{var c__4148__auto___15873 = cljs.core.chunk_first.call(null,seq__15837_15872__$1);{
var G__15874 = cljs.core.chunk_rest.call(null,seq__15837_15872__$1);
var G__15875 = c__4148__auto___15873;
var G__15876 = cljs.core.count.call(null,c__4148__auto___15873);
var G__15877 = 0;
seq__15837_15862 = G__15874;
chunk__15838_15863 = G__15875;
count__15839_15864 = G__15876;
i__15840_15865 = G__15877;
continue;
}
} else
{var n_15878 = cljs.core.first.call(null,seq__15837_15872__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_15878;
goog.events.fireListeners(n_15878,evt.type,false,evt);
}
{
var G__15879 = cljs.core.next.call(null,seq__15837_15872__$1);
var G__15880 = null;
var G__15881 = 0;
var G__15882 = 0;
seq__15837_15862 = G__15879;
chunk__15838_15863 = G__15880;
count__15839_15864 = G__15881;
i__15840_15865 = G__15882;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__15889_15895 = cljs.core.seq.call(null,evt_map);var chunk__15890_15896 = null;var count__15891_15897 = 0;var i__15892_15898 = 0;while(true){
if((i__15892_15898 < count__15891_15897))
{var vec__15893_15899 = cljs.core._nth.call(null,chunk__15890_15896,i__15892_15898);var k_15900 = cljs.core.nth.call(null,vec__15893_15899,0,null);var v_15901 = cljs.core.nth.call(null,vec__15893_15899,1,null);(evt[k_15900] = v_15901);
{
var G__15902 = seq__15889_15895;
var G__15903 = chunk__15890_15896;
var G__15904 = count__15891_15897;
var G__15905 = (i__15892_15898 + 1);
seq__15889_15895 = G__15902;
chunk__15890_15896 = G__15903;
count__15891_15897 = G__15904;
i__15892_15898 = G__15905;
continue;
}
} else
{var temp__4092__auto___15906 = cljs.core.seq.call(null,seq__15889_15895);if(temp__4092__auto___15906)
{var seq__15889_15907__$1 = temp__4092__auto___15906;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15889_15907__$1))
{var c__4148__auto___15908 = cljs.core.chunk_first.call(null,seq__15889_15907__$1);{
var G__15909 = cljs.core.chunk_rest.call(null,seq__15889_15907__$1);
var G__15910 = c__4148__auto___15908;
var G__15911 = cljs.core.count.call(null,c__4148__auto___15908);
var G__15912 = 0;
seq__15889_15895 = G__15909;
chunk__15890_15896 = G__15910;
count__15891_15897 = G__15911;
i__15892_15898 = G__15912;
continue;
}
} else
{var vec__15894_15913 = cljs.core.first.call(null,seq__15889_15907__$1);var k_15914 = cljs.core.nth.call(null,vec__15894_15913,0,null);var v_15915 = cljs.core.nth.call(null,vec__15894_15913,1,null);(evt[k_15914] = v_15915);
{
var G__15916 = cljs.core.next.call(null,seq__15889_15907__$1);
var G__15917 = null;
var G__15918 = 0;
var G__15919 = 0;
seq__15889_15895 = G__15916;
chunk__15890_15896 = G__15917;
count__15891_15897 = G__15918;
i__15892_15898 = G__15919;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__15920_SHARP_){return goog.events.getListeners(p1__15920_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map