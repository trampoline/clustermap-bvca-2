// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj32756 = {};return obj32756;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.prevent_default[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.prevent_default["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.current_target[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.current_target["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.event_type[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.event_type["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3546__auto__ = evt;if(and__3546__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3546__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4185__auto__ = (((evt == null))?null:evt);return (function (){var or__3558__auto__ = (domina.events.raw_event[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.events.raw_event["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t32760 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t32760 = (function (evt,f,create_listener_function,meta32761){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta32761 = meta32761;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t32760.cljs$lang$type = true;
domina.events.t32760.cljs$lang$ctorStr = "domina.events/t32760";
domina.events.t32760.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t32760");
});
domina.events.t32760.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t32760.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t32760.prototype.domina$events$Event$ = true;
domina.events.t32760.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t32760.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t32760.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t32760.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t32760.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t32760.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t32760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32762){var self__ = this;
var _32762__$1 = this;return self__.meta32761;
});
domina.events.t32760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32762,meta32761__$1){var self__ = this;
var _32762__$1 = this;return (new domina.events.t32760(self__.evt,self__.f,self__.create_listener_function,meta32761__$1));
});
domina.events.__GT_t32760 = (function __GT_t32760(evt__$1,f__$1,create_listener_function__$1,meta32761){return (new domina.events.t32760(evt__$1,f__$1,create_listener_function__$1,meta32761));
});
}
return (new domina.events.t32760(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__32767(s__32768){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__32768__$1 = s__32768;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32768__$1);if(temp__4126__auto__)
{var s__32768__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32768__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__32768__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__32770 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__32769 = (0);while(true){
if((i__32769 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__32769);cljs.core.chunk_append.call(null,b__32770,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__32771 = (i__32769 + (1));
i__32769 = G__32771;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32770),iter__32767.call(null,cljs.core.chunk_rest.call(null,s__32768__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32770),null);
}
} else
{var node = cljs.core.first.call(null,s__32768__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__32767.call(null,cljs.core.rest.call(null,s__32768__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4283__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__32780 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32781 = null;var count__32782 = (0);var i__32783 = (0);while(true){
if((i__32783 < count__32782))
{var node = cljs.core._nth.call(null,chunk__32781,i__32783);goog.events.removeAll(node);
{
var G__32788 = seq__32780;
var G__32789 = chunk__32781;
var G__32790 = count__32782;
var G__32791 = (i__32783 + (1));
seq__32780 = G__32788;
chunk__32781 = G__32789;
count__32782 = G__32790;
i__32783 = G__32791;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32780);if(temp__4126__auto__)
{var seq__32780__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32780__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32780__$1);{
var G__32792 = cljs.core.chunk_rest.call(null,seq__32780__$1);
var G__32793 = c__4314__auto__;
var G__32794 = cljs.core.count.call(null,c__4314__auto__);
var G__32795 = (0);
seq__32780 = G__32792;
chunk__32781 = G__32793;
count__32782 = G__32794;
i__32783 = G__32795;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32780__$1);goog.events.removeAll(node);
{
var G__32796 = cljs.core.next.call(null,seq__32780__$1);
var G__32797 = null;
var G__32798 = (0);
var G__32799 = (0);
seq__32780 = G__32796;
chunk__32781 = G__32797;
count__32782 = G__32798;
i__32783 = G__32799;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__32784 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32785 = null;var count__32786 = (0);var i__32787 = (0);while(true){
if((i__32787 < count__32786))
{var node = cljs.core._nth.call(null,chunk__32785,i__32787);goog.events.removeAll(node,type__$1);
{
var G__32800 = seq__32784;
var G__32801 = chunk__32785;
var G__32802 = count__32786;
var G__32803 = (i__32787 + (1));
seq__32784 = G__32800;
chunk__32785 = G__32801;
count__32786 = G__32802;
i__32787 = G__32803;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32784);if(temp__4126__auto__)
{var seq__32784__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32784__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32784__$1);{
var G__32804 = cljs.core.chunk_rest.call(null,seq__32784__$1);
var G__32805 = c__4314__auto__;
var G__32806 = cljs.core.count.call(null,c__4314__auto__);
var G__32807 = (0);
seq__32784 = G__32804;
chunk__32785 = G__32805;
count__32786 = G__32806;
i__32787 = G__32807;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__32784__$1);goog.events.removeAll(node,type__$1);
{
var G__32808 = cljs.core.next.call(null,seq__32784__$1);
var G__32809 = null;
var G__32810 = (0);
var G__32811 = (0);
seq__32784 = G__32808;
chunk__32785 = G__32809;
count__32786 = G__32810;
i__32787 = G__32811;
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
var G__32812 = parent;
var G__32813 = cljs.core.cons.call(null,parent,so_far);
n = G__32812;
so_far = G__32813;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__32822_32830 = cljs.core.seq.call(null,ancestors);var chunk__32823_32831 = null;var count__32824_32832 = (0);var i__32825_32833 = (0);while(true){
if((i__32825_32833 < count__32824_32832))
{var n_32834 = cljs.core._nth.call(null,chunk__32823_32831,i__32825_32833);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32834;
goog.events.fireListeners(n_32834,evt.type,true,evt);
}
{
var G__32835 = seq__32822_32830;
var G__32836 = chunk__32823_32831;
var G__32837 = count__32824_32832;
var G__32838 = (i__32825_32833 + (1));
seq__32822_32830 = G__32835;
chunk__32823_32831 = G__32836;
count__32824_32832 = G__32837;
i__32825_32833 = G__32838;
continue;
}
} else
{var temp__4126__auto___32839 = cljs.core.seq.call(null,seq__32822_32830);if(temp__4126__auto___32839)
{var seq__32822_32840__$1 = temp__4126__auto___32839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32822_32840__$1))
{var c__4314__auto___32841 = cljs.core.chunk_first.call(null,seq__32822_32840__$1);{
var G__32842 = cljs.core.chunk_rest.call(null,seq__32822_32840__$1);
var G__32843 = c__4314__auto___32841;
var G__32844 = cljs.core.count.call(null,c__4314__auto___32841);
var G__32845 = (0);
seq__32822_32830 = G__32842;
chunk__32823_32831 = G__32843;
count__32824_32832 = G__32844;
i__32825_32833 = G__32845;
continue;
}
} else
{var n_32846 = cljs.core.first.call(null,seq__32822_32840__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32846;
goog.events.fireListeners(n_32846,evt.type,true,evt);
}
{
var G__32847 = cljs.core.next.call(null,seq__32822_32840__$1);
var G__32848 = null;
var G__32849 = (0);
var G__32850 = (0);
seq__32822_32830 = G__32847;
chunk__32823_32831 = G__32848;
count__32824_32832 = G__32849;
i__32825_32833 = G__32850;
continue;
}
}
} else
{}
}
break;
}
var seq__32826_32851 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__32827_32852 = null;var count__32828_32853 = (0);var i__32829_32854 = (0);while(true){
if((i__32829_32854 < count__32828_32853))
{var n_32855 = cljs.core._nth.call(null,chunk__32827_32852,i__32829_32854);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32855;
goog.events.fireListeners(n_32855,evt.type,false,evt);
}
{
var G__32856 = seq__32826_32851;
var G__32857 = chunk__32827_32852;
var G__32858 = count__32828_32853;
var G__32859 = (i__32829_32854 + (1));
seq__32826_32851 = G__32856;
chunk__32827_32852 = G__32857;
count__32828_32853 = G__32858;
i__32829_32854 = G__32859;
continue;
}
} else
{var temp__4126__auto___32860 = cljs.core.seq.call(null,seq__32826_32851);if(temp__4126__auto___32860)
{var seq__32826_32861__$1 = temp__4126__auto___32860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32826_32861__$1))
{var c__4314__auto___32862 = cljs.core.chunk_first.call(null,seq__32826_32861__$1);{
var G__32863 = cljs.core.chunk_rest.call(null,seq__32826_32861__$1);
var G__32864 = c__4314__auto___32862;
var G__32865 = cljs.core.count.call(null,c__4314__auto___32862);
var G__32866 = (0);
seq__32826_32851 = G__32863;
chunk__32827_32852 = G__32864;
count__32828_32853 = G__32865;
i__32829_32854 = G__32866;
continue;
}
} else
{var n_32867 = cljs.core.first.call(null,seq__32826_32861__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_32867;
goog.events.fireListeners(n_32867,evt.type,false,evt);
}
{
var G__32868 = cljs.core.next.call(null,seq__32826_32861__$1);
var G__32869 = null;
var G__32870 = (0);
var G__32871 = (0);
seq__32826_32851 = G__32868;
chunk__32827_32852 = G__32869;
count__32828_32853 = G__32870;
i__32829_32854 = G__32871;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3546__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3546__auto__))
{return o.dispatchEvent;
} else
{return and__3546__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__32878_32884 = cljs.core.seq.call(null,evt_map);var chunk__32879_32885 = null;var count__32880_32886 = (0);var i__32881_32887 = (0);while(true){
if((i__32881_32887 < count__32880_32886))
{var vec__32882_32888 = cljs.core._nth.call(null,chunk__32879_32885,i__32881_32887);var k_32889 = cljs.core.nth.call(null,vec__32882_32888,(0),null);var v_32890 = cljs.core.nth.call(null,vec__32882_32888,(1),null);(evt[k_32889] = v_32890);
{
var G__32891 = seq__32878_32884;
var G__32892 = chunk__32879_32885;
var G__32893 = count__32880_32886;
var G__32894 = (i__32881_32887 + (1));
seq__32878_32884 = G__32891;
chunk__32879_32885 = G__32892;
count__32880_32886 = G__32893;
i__32881_32887 = G__32894;
continue;
}
} else
{var temp__4126__auto___32895 = cljs.core.seq.call(null,seq__32878_32884);if(temp__4126__auto___32895)
{var seq__32878_32896__$1 = temp__4126__auto___32895;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32878_32896__$1))
{var c__4314__auto___32897 = cljs.core.chunk_first.call(null,seq__32878_32896__$1);{
var G__32898 = cljs.core.chunk_rest.call(null,seq__32878_32896__$1);
var G__32899 = c__4314__auto___32897;
var G__32900 = cljs.core.count.call(null,c__4314__auto___32897);
var G__32901 = (0);
seq__32878_32884 = G__32898;
chunk__32879_32885 = G__32899;
count__32880_32886 = G__32900;
i__32881_32887 = G__32901;
continue;
}
} else
{var vec__32883_32902 = cljs.core.first.call(null,seq__32878_32896__$1);var k_32903 = cljs.core.nth.call(null,vec__32883_32902,(0),null);var v_32904 = cljs.core.nth.call(null,vec__32883_32902,(1),null);(evt[k_32903] = v_32904);
{
var G__32905 = cljs.core.next.call(null,seq__32878_32896__$1);
var G__32906 = null;
var G__32907 = (0);
var G__32908 = (0);
seq__32878_32884 = G__32905;
chunk__32879_32885 = G__32906;
count__32880_32886 = G__32907;
i__32881_32887 = G__32908;
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
return (function (p1__32909_SHARP_){return goog.events.getListeners(p1__32909_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
