// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37764 = {};return obj37764;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37768 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37768 = (function (evt,f,create_listener_function,meta37769){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37769 = meta37769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37768.cljs$lang$type = true;
domina.events.t37768.cljs$lang$ctorStr = "domina.events/t37768";
domina.events.t37768.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t37768");
});
domina.events.t37768.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37768.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t37768.prototype.domina$events$Event$ = true;
domina.events.t37768.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37768.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37768.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37768.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37768.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37768.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37770){var self__ = this;
var _37770__$1 = this;return self__.meta37769;
});
domina.events.t37768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37770,meta37769__$1){var self__ = this;
var _37770__$1 = this;return (new domina.events.t37768(self__.evt,self__.f,self__.create_listener_function,meta37769__$1));
});
domina.events.__GT_t37768 = (function __GT_t37768(evt__$1,f__$1,create_listener_function__$1,meta37769){return (new domina.events.t37768(evt__$1,f__$1,create_listener_function__$1,meta37769));
});
}
return (new domina.events.t37768(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__37775(s__37776){return (new cljs.core.LazySeq(null,(function (){var s__37776__$1 = s__37776;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37776__$1);if(temp__4092__auto__)
{var s__37776__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37776__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37776__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37778 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37777 = 0;while(true){
if((i__37777 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__37777);cljs.core.chunk_append.call(null,b__37778,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37779 = (i__37777 + 1);
i__37777 = G__37779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37778),iter__37775.call(null,cljs.core.chunk_rest.call(null,s__37776__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37778),null);
}
} else
{var node = cljs.core.first.call(null,s__37776__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37775.call(null,cljs.core.rest.call(null,s__37776__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37788 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37789 = null;var count__37790 = 0;var i__37791 = 0;while(true){
if((i__37791 < count__37790))
{var node = cljs.core._nth.call(null,chunk__37789,i__37791);goog.events.removeAll(node);
{
var G__37796 = seq__37788;
var G__37797 = chunk__37789;
var G__37798 = count__37790;
var G__37799 = (i__37791 + 1);
seq__37788 = G__37796;
chunk__37789 = G__37797;
count__37790 = G__37798;
i__37791 = G__37799;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37788);if(temp__4092__auto__)
{var seq__37788__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37788__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37788__$1);{
var G__37800 = cljs.core.chunk_rest.call(null,seq__37788__$1);
var G__37801 = c__4148__auto__;
var G__37802 = cljs.core.count.call(null,c__4148__auto__);
var G__37803 = 0;
seq__37788 = G__37800;
chunk__37789 = G__37801;
count__37790 = G__37802;
i__37791 = G__37803;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37788__$1);goog.events.removeAll(node);
{
var G__37804 = cljs.core.next.call(null,seq__37788__$1);
var G__37805 = null;
var G__37806 = 0;
var G__37807 = 0;
seq__37788 = G__37804;
chunk__37789 = G__37805;
count__37790 = G__37806;
i__37791 = G__37807;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37792 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37793 = null;var count__37794 = 0;var i__37795 = 0;while(true){
if((i__37795 < count__37794))
{var node = cljs.core._nth.call(null,chunk__37793,i__37795);goog.events.removeAll(node,type__$1);
{
var G__37808 = seq__37792;
var G__37809 = chunk__37793;
var G__37810 = count__37794;
var G__37811 = (i__37795 + 1);
seq__37792 = G__37808;
chunk__37793 = G__37809;
count__37794 = G__37810;
i__37795 = G__37811;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37792);if(temp__4092__auto__)
{var seq__37792__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37792__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37792__$1);{
var G__37812 = cljs.core.chunk_rest.call(null,seq__37792__$1);
var G__37813 = c__4148__auto__;
var G__37814 = cljs.core.count.call(null,c__4148__auto__);
var G__37815 = 0;
seq__37792 = G__37812;
chunk__37793 = G__37813;
count__37794 = G__37814;
i__37795 = G__37815;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37792__$1);goog.events.removeAll(node,type__$1);
{
var G__37816 = cljs.core.next.call(null,seq__37792__$1);
var G__37817 = null;
var G__37818 = 0;
var G__37819 = 0;
seq__37792 = G__37816;
chunk__37793 = G__37817;
count__37794 = G__37818;
i__37795 = G__37819;
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
var G__37820 = parent;
var G__37821 = cljs.core.cons.call(null,parent,so_far);
n = G__37820;
so_far = G__37821;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37830_37838 = cljs.core.seq.call(null,ancestors);var chunk__37831_37839 = null;var count__37832_37840 = 0;var i__37833_37841 = 0;while(true){
if((i__37833_37841 < count__37832_37840))
{var n_37842 = cljs.core._nth.call(null,chunk__37831_37839,i__37833_37841);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37842;
goog.events.fireListeners(n_37842,evt.type,true,evt);
}
{
var G__37843 = seq__37830_37838;
var G__37844 = chunk__37831_37839;
var G__37845 = count__37832_37840;
var G__37846 = (i__37833_37841 + 1);
seq__37830_37838 = G__37843;
chunk__37831_37839 = G__37844;
count__37832_37840 = G__37845;
i__37833_37841 = G__37846;
continue;
}
} else
{var temp__4092__auto___37847 = cljs.core.seq.call(null,seq__37830_37838);if(temp__4092__auto___37847)
{var seq__37830_37848__$1 = temp__4092__auto___37847;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37830_37848__$1))
{var c__4148__auto___37849 = cljs.core.chunk_first.call(null,seq__37830_37848__$1);{
var G__37850 = cljs.core.chunk_rest.call(null,seq__37830_37848__$1);
var G__37851 = c__4148__auto___37849;
var G__37852 = cljs.core.count.call(null,c__4148__auto___37849);
var G__37853 = 0;
seq__37830_37838 = G__37850;
chunk__37831_37839 = G__37851;
count__37832_37840 = G__37852;
i__37833_37841 = G__37853;
continue;
}
} else
{var n_37854 = cljs.core.first.call(null,seq__37830_37848__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37854;
goog.events.fireListeners(n_37854,evt.type,true,evt);
}
{
var G__37855 = cljs.core.next.call(null,seq__37830_37848__$1);
var G__37856 = null;
var G__37857 = 0;
var G__37858 = 0;
seq__37830_37838 = G__37855;
chunk__37831_37839 = G__37856;
count__37832_37840 = G__37857;
i__37833_37841 = G__37858;
continue;
}
}
} else
{}
}
break;
}
var seq__37834_37859 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37835_37860 = null;var count__37836_37861 = 0;var i__37837_37862 = 0;while(true){
if((i__37837_37862 < count__37836_37861))
{var n_37863 = cljs.core._nth.call(null,chunk__37835_37860,i__37837_37862);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37863;
goog.events.fireListeners(n_37863,evt.type,false,evt);
}
{
var G__37864 = seq__37834_37859;
var G__37865 = chunk__37835_37860;
var G__37866 = count__37836_37861;
var G__37867 = (i__37837_37862 + 1);
seq__37834_37859 = G__37864;
chunk__37835_37860 = G__37865;
count__37836_37861 = G__37866;
i__37837_37862 = G__37867;
continue;
}
} else
{var temp__4092__auto___37868 = cljs.core.seq.call(null,seq__37834_37859);if(temp__4092__auto___37868)
{var seq__37834_37869__$1 = temp__4092__auto___37868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37834_37869__$1))
{var c__4148__auto___37870 = cljs.core.chunk_first.call(null,seq__37834_37869__$1);{
var G__37871 = cljs.core.chunk_rest.call(null,seq__37834_37869__$1);
var G__37872 = c__4148__auto___37870;
var G__37873 = cljs.core.count.call(null,c__4148__auto___37870);
var G__37874 = 0;
seq__37834_37859 = G__37871;
chunk__37835_37860 = G__37872;
count__37836_37861 = G__37873;
i__37837_37862 = G__37874;
continue;
}
} else
{var n_37875 = cljs.core.first.call(null,seq__37834_37869__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37875;
goog.events.fireListeners(n_37875,evt.type,false,evt);
}
{
var G__37876 = cljs.core.next.call(null,seq__37834_37869__$1);
var G__37877 = null;
var G__37878 = 0;
var G__37879 = 0;
seq__37834_37859 = G__37876;
chunk__37835_37860 = G__37877;
count__37836_37861 = G__37878;
i__37837_37862 = G__37879;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37886_37892 = cljs.core.seq.call(null,evt_map);var chunk__37887_37893 = null;var count__37888_37894 = 0;var i__37889_37895 = 0;while(true){
if((i__37889_37895 < count__37888_37894))
{var vec__37890_37896 = cljs.core._nth.call(null,chunk__37887_37893,i__37889_37895);var k_37897 = cljs.core.nth.call(null,vec__37890_37896,0,null);var v_37898 = cljs.core.nth.call(null,vec__37890_37896,1,null);(evt[k_37897] = v_37898);
{
var G__37899 = seq__37886_37892;
var G__37900 = chunk__37887_37893;
var G__37901 = count__37888_37894;
var G__37902 = (i__37889_37895 + 1);
seq__37886_37892 = G__37899;
chunk__37887_37893 = G__37900;
count__37888_37894 = G__37901;
i__37889_37895 = G__37902;
continue;
}
} else
{var temp__4092__auto___37903 = cljs.core.seq.call(null,seq__37886_37892);if(temp__4092__auto___37903)
{var seq__37886_37904__$1 = temp__4092__auto___37903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37886_37904__$1))
{var c__4148__auto___37905 = cljs.core.chunk_first.call(null,seq__37886_37904__$1);{
var G__37906 = cljs.core.chunk_rest.call(null,seq__37886_37904__$1);
var G__37907 = c__4148__auto___37905;
var G__37908 = cljs.core.count.call(null,c__4148__auto___37905);
var G__37909 = 0;
seq__37886_37892 = G__37906;
chunk__37887_37893 = G__37907;
count__37888_37894 = G__37908;
i__37889_37895 = G__37909;
continue;
}
} else
{var vec__37891_37910 = cljs.core.first.call(null,seq__37886_37904__$1);var k_37911 = cljs.core.nth.call(null,vec__37891_37910,0,null);var v_37912 = cljs.core.nth.call(null,vec__37891_37910,1,null);(evt[k_37911] = v_37912);
{
var G__37913 = cljs.core.next.call(null,seq__37886_37904__$1);
var G__37914 = null;
var G__37915 = 0;
var G__37916 = 0;
seq__37886_37892 = G__37913;
chunk__37887_37893 = G__37914;
count__37888_37894 = G__37915;
i__37889_37895 = G__37916;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__37917_SHARP_){return goog.events.getListeners(p1__37917_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
