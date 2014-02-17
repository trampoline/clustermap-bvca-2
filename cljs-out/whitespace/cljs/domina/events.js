// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj37770 = {};return obj37770;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t37774 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t37774 = (function (evt,f,create_listener_function,meta37775){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta37775 = meta37775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t37774.cljs$lang$type = true;
domina.events.t37774.cljs$lang$ctorStr = "domina.events/t37774";
domina.events.t37774.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t37774");
});
domina.events.t37774.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t37774.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t37774.prototype.domina$events$Event$ = true;
domina.events.t37774.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t37774.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t37774.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t37774.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t37774.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t37774.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t37774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37776){var self__ = this;
var _37776__$1 = this;return self__.meta37775;
});
domina.events.t37774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37776,meta37775__$1){var self__ = this;
var _37776__$1 = this;return (new domina.events.t37774(self__.evt,self__.f,self__.create_listener_function,meta37775__$1));
});
domina.events.__GT_t37774 = (function __GT_t37774(evt__$1,f__$1,create_listener_function__$1,meta37775){return (new domina.events.t37774(evt__$1,f__$1,create_listener_function__$1,meta37775));
});
}
return (new domina.events.t37774(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__37781(s__37782){return (new cljs.core.LazySeq(null,(function (){var s__37782__$1 = s__37782;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__37782__$1);if(temp__4092__auto__)
{var s__37782__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__37782__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__37782__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__37784 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__37783 = 0;while(true){
if((i__37783 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__37783);cljs.core.chunk_append.call(null,b__37784,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__37785 = (i__37783 + 1);
i__37783 = G__37785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37784),iter__37781.call(null,cljs.core.chunk_rest.call(null,s__37782__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37784),null);
}
} else
{var node = cljs.core.first.call(null,s__37782__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__37781.call(null,cljs.core.rest.call(null,s__37782__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__37794 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37795 = null;var count__37796 = 0;var i__37797 = 0;while(true){
if((i__37797 < count__37796))
{var node = cljs.core._nth.call(null,chunk__37795,i__37797);goog.events.removeAll(node);
{
var G__37802 = seq__37794;
var G__37803 = chunk__37795;
var G__37804 = count__37796;
var G__37805 = (i__37797 + 1);
seq__37794 = G__37802;
chunk__37795 = G__37803;
count__37796 = G__37804;
i__37797 = G__37805;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37794);if(temp__4092__auto__)
{var seq__37794__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37794__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37794__$1);{
var G__37806 = cljs.core.chunk_rest.call(null,seq__37794__$1);
var G__37807 = c__4148__auto__;
var G__37808 = cljs.core.count.call(null,c__4148__auto__);
var G__37809 = 0;
seq__37794 = G__37806;
chunk__37795 = G__37807;
count__37796 = G__37808;
i__37797 = G__37809;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37794__$1);goog.events.removeAll(node);
{
var G__37810 = cljs.core.next.call(null,seq__37794__$1);
var G__37811 = null;
var G__37812 = 0;
var G__37813 = 0;
seq__37794 = G__37810;
chunk__37795 = G__37811;
count__37796 = G__37812;
i__37797 = G__37813;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__37798 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37799 = null;var count__37800 = 0;var i__37801 = 0;while(true){
if((i__37801 < count__37800))
{var node = cljs.core._nth.call(null,chunk__37799,i__37801);goog.events.removeAll(node,type__$1);
{
var G__37814 = seq__37798;
var G__37815 = chunk__37799;
var G__37816 = count__37800;
var G__37817 = (i__37801 + 1);
seq__37798 = G__37814;
chunk__37799 = G__37815;
count__37800 = G__37816;
i__37801 = G__37817;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__37798);if(temp__4092__auto__)
{var seq__37798__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37798__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__37798__$1);{
var G__37818 = cljs.core.chunk_rest.call(null,seq__37798__$1);
var G__37819 = c__4148__auto__;
var G__37820 = cljs.core.count.call(null,c__4148__auto__);
var G__37821 = 0;
seq__37798 = G__37818;
chunk__37799 = G__37819;
count__37800 = G__37820;
i__37801 = G__37821;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__37798__$1);goog.events.removeAll(node,type__$1);
{
var G__37822 = cljs.core.next.call(null,seq__37798__$1);
var G__37823 = null;
var G__37824 = 0;
var G__37825 = 0;
seq__37798 = G__37822;
chunk__37799 = G__37823;
count__37800 = G__37824;
i__37801 = G__37825;
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
var G__37826 = parent;
var G__37827 = cljs.core.cons.call(null,parent,so_far);
n = G__37826;
so_far = G__37827;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__37836_37844 = cljs.core.seq.call(null,ancestors);var chunk__37837_37845 = null;var count__37838_37846 = 0;var i__37839_37847 = 0;while(true){
if((i__37839_37847 < count__37838_37846))
{var n_37848 = cljs.core._nth.call(null,chunk__37837_37845,i__37839_37847);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37848;
goog.events.fireListeners(n_37848,evt.type,true,evt);
}
{
var G__37849 = seq__37836_37844;
var G__37850 = chunk__37837_37845;
var G__37851 = count__37838_37846;
var G__37852 = (i__37839_37847 + 1);
seq__37836_37844 = G__37849;
chunk__37837_37845 = G__37850;
count__37838_37846 = G__37851;
i__37839_37847 = G__37852;
continue;
}
} else
{var temp__4092__auto___37853 = cljs.core.seq.call(null,seq__37836_37844);if(temp__4092__auto___37853)
{var seq__37836_37854__$1 = temp__4092__auto___37853;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37836_37854__$1))
{var c__4148__auto___37855 = cljs.core.chunk_first.call(null,seq__37836_37854__$1);{
var G__37856 = cljs.core.chunk_rest.call(null,seq__37836_37854__$1);
var G__37857 = c__4148__auto___37855;
var G__37858 = cljs.core.count.call(null,c__4148__auto___37855);
var G__37859 = 0;
seq__37836_37844 = G__37856;
chunk__37837_37845 = G__37857;
count__37838_37846 = G__37858;
i__37839_37847 = G__37859;
continue;
}
} else
{var n_37860 = cljs.core.first.call(null,seq__37836_37854__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37860;
goog.events.fireListeners(n_37860,evt.type,true,evt);
}
{
var G__37861 = cljs.core.next.call(null,seq__37836_37854__$1);
var G__37862 = null;
var G__37863 = 0;
var G__37864 = 0;
seq__37836_37844 = G__37861;
chunk__37837_37845 = G__37862;
count__37838_37846 = G__37863;
i__37839_37847 = G__37864;
continue;
}
}
} else
{}
}
break;
}
var seq__37840_37865 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__37841_37866 = null;var count__37842_37867 = 0;var i__37843_37868 = 0;while(true){
if((i__37843_37868 < count__37842_37867))
{var n_37869 = cljs.core._nth.call(null,chunk__37841_37866,i__37843_37868);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37869;
goog.events.fireListeners(n_37869,evt.type,false,evt);
}
{
var G__37870 = seq__37840_37865;
var G__37871 = chunk__37841_37866;
var G__37872 = count__37842_37867;
var G__37873 = (i__37843_37868 + 1);
seq__37840_37865 = G__37870;
chunk__37841_37866 = G__37871;
count__37842_37867 = G__37872;
i__37843_37868 = G__37873;
continue;
}
} else
{var temp__4092__auto___37874 = cljs.core.seq.call(null,seq__37840_37865);if(temp__4092__auto___37874)
{var seq__37840_37875__$1 = temp__4092__auto___37874;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37840_37875__$1))
{var c__4148__auto___37876 = cljs.core.chunk_first.call(null,seq__37840_37875__$1);{
var G__37877 = cljs.core.chunk_rest.call(null,seq__37840_37875__$1);
var G__37878 = c__4148__auto___37876;
var G__37879 = cljs.core.count.call(null,c__4148__auto___37876);
var G__37880 = 0;
seq__37840_37865 = G__37877;
chunk__37841_37866 = G__37878;
count__37842_37867 = G__37879;
i__37843_37868 = G__37880;
continue;
}
} else
{var n_37881 = cljs.core.first.call(null,seq__37840_37875__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_37881;
goog.events.fireListeners(n_37881,evt.type,false,evt);
}
{
var G__37882 = cljs.core.next.call(null,seq__37840_37875__$1);
var G__37883 = null;
var G__37884 = 0;
var G__37885 = 0;
seq__37840_37865 = G__37882;
chunk__37841_37866 = G__37883;
count__37842_37867 = G__37884;
i__37843_37868 = G__37885;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__37892_37898 = cljs.core.seq.call(null,evt_map);var chunk__37893_37899 = null;var count__37894_37900 = 0;var i__37895_37901 = 0;while(true){
if((i__37895_37901 < count__37894_37900))
{var vec__37896_37902 = cljs.core._nth.call(null,chunk__37893_37899,i__37895_37901);var k_37903 = cljs.core.nth.call(null,vec__37896_37902,0,null);var v_37904 = cljs.core.nth.call(null,vec__37896_37902,1,null);(evt[k_37903] = v_37904);
{
var G__37905 = seq__37892_37898;
var G__37906 = chunk__37893_37899;
var G__37907 = count__37894_37900;
var G__37908 = (i__37895_37901 + 1);
seq__37892_37898 = G__37905;
chunk__37893_37899 = G__37906;
count__37894_37900 = G__37907;
i__37895_37901 = G__37908;
continue;
}
} else
{var temp__4092__auto___37909 = cljs.core.seq.call(null,seq__37892_37898);if(temp__4092__auto___37909)
{var seq__37892_37910__$1 = temp__4092__auto___37909;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37892_37910__$1))
{var c__4148__auto___37911 = cljs.core.chunk_first.call(null,seq__37892_37910__$1);{
var G__37912 = cljs.core.chunk_rest.call(null,seq__37892_37910__$1);
var G__37913 = c__4148__auto___37911;
var G__37914 = cljs.core.count.call(null,c__4148__auto___37911);
var G__37915 = 0;
seq__37892_37898 = G__37912;
chunk__37893_37899 = G__37913;
count__37894_37900 = G__37914;
i__37895_37901 = G__37915;
continue;
}
} else
{var vec__37897_37916 = cljs.core.first.call(null,seq__37892_37910__$1);var k_37917 = cljs.core.nth.call(null,vec__37897_37916,0,null);var v_37918 = cljs.core.nth.call(null,vec__37897_37916,1,null);(evt[k_37917] = v_37918);
{
var G__37919 = cljs.core.next.call(null,seq__37892_37910__$1);
var G__37920 = null;
var G__37921 = 0;
var G__37922 = 0;
seq__37892_37898 = G__37919;
chunk__37893_37899 = G__37920;
count__37894_37900 = G__37921;
i__37895_37901 = G__37922;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__37923_SHARP_){return goog.events.getListeners(p1__37923_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});
