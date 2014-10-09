// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj22793 = {};return obj22793;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t22797 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t22797 = (function (evt,f,create_listener_function,meta22798){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta22798 = meta22798;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t22797.cljs$lang$type = true;
domina.events.t22797.cljs$lang$ctorStr = "domina.events/t22797";
domina.events.t22797.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t22797");
});
domina.events.t22797.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t22797.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t22797.prototype.domina$events$Event$ = true;
domina.events.t22797.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t22797.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t22797.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t22797.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t22797.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t22797.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t22797.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22799){var self__ = this;
var _22799__$1 = this;return self__.meta22798;
});
domina.events.t22797.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22799,meta22798__$1){var self__ = this;
var _22799__$1 = this;return (new domina.events.t22797(self__.evt,self__.f,self__.create_listener_function,meta22798__$1));
});
domina.events.__GT_t22797 = (function __GT_t22797(evt__$1,f__$1,create_listener_function__$1,meta22798){return (new domina.events.t22797(evt__$1,f__$1,create_listener_function__$1,meta22798));
});
}
return (new domina.events.t22797(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__22804(s__22805){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__22805__$1 = s__22805;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22805__$1);if(temp__4126__auto__)
{var s__22805__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22805__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22805__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22807 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22806 = (0);while(true){
if((i__22806 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__22806);cljs.core.chunk_append.call(null,b__22807,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__22808 = (i__22806 + (1));
i__22806 = G__22808;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22807),iter__22804.call(null,cljs.core.chunk_rest.call(null,s__22805__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22807),null);
}
} else
{var node = cljs.core.first.call(null,s__22805__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__22804.call(null,cljs.core.rest.call(null,s__22805__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__22817 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22818 = null;var count__22819 = (0);var i__22820 = (0);while(true){
if((i__22820 < count__22819))
{var node = cljs.core._nth.call(null,chunk__22818,i__22820);goog.events.removeAll(node);
{
var G__22825 = seq__22817;
var G__22826 = chunk__22818;
var G__22827 = count__22819;
var G__22828 = (i__22820 + (1));
seq__22817 = G__22825;
chunk__22818 = G__22826;
count__22819 = G__22827;
i__22820 = G__22828;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22817);if(temp__4126__auto__)
{var seq__22817__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22817__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__22817__$1);{
var G__22829 = cljs.core.chunk_rest.call(null,seq__22817__$1);
var G__22830 = c__4314__auto__;
var G__22831 = cljs.core.count.call(null,c__4314__auto__);
var G__22832 = (0);
seq__22817 = G__22829;
chunk__22818 = G__22830;
count__22819 = G__22831;
i__22820 = G__22832;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__22817__$1);goog.events.removeAll(node);
{
var G__22833 = cljs.core.next.call(null,seq__22817__$1);
var G__22834 = null;
var G__22835 = (0);
var G__22836 = (0);
seq__22817 = G__22833;
chunk__22818 = G__22834;
count__22819 = G__22835;
i__22820 = G__22836;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__22821 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22822 = null;var count__22823 = (0);var i__22824 = (0);while(true){
if((i__22824 < count__22823))
{var node = cljs.core._nth.call(null,chunk__22822,i__22824);goog.events.removeAll(node,type__$1);
{
var G__22837 = seq__22821;
var G__22838 = chunk__22822;
var G__22839 = count__22823;
var G__22840 = (i__22824 + (1));
seq__22821 = G__22837;
chunk__22822 = G__22838;
count__22823 = G__22839;
i__22824 = G__22840;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22821);if(temp__4126__auto__)
{var seq__22821__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22821__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__22821__$1);{
var G__22841 = cljs.core.chunk_rest.call(null,seq__22821__$1);
var G__22842 = c__4314__auto__;
var G__22843 = cljs.core.count.call(null,c__4314__auto__);
var G__22844 = (0);
seq__22821 = G__22841;
chunk__22822 = G__22842;
count__22823 = G__22843;
i__22824 = G__22844;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__22821__$1);goog.events.removeAll(node,type__$1);
{
var G__22845 = cljs.core.next.call(null,seq__22821__$1);
var G__22846 = null;
var G__22847 = (0);
var G__22848 = (0);
seq__22821 = G__22845;
chunk__22822 = G__22846;
count__22823 = G__22847;
i__22824 = G__22848;
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
var G__22849 = parent;
var G__22850 = cljs.core.cons.call(null,parent,so_far);
n = G__22849;
so_far = G__22850;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__22859_22867 = cljs.core.seq.call(null,ancestors);var chunk__22860_22868 = null;var count__22861_22869 = (0);var i__22862_22870 = (0);while(true){
if((i__22862_22870 < count__22861_22869))
{var n_22871 = cljs.core._nth.call(null,chunk__22860_22868,i__22862_22870);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22871;
goog.events.fireListeners(n_22871,evt.type,true,evt);
}
{
var G__22872 = seq__22859_22867;
var G__22873 = chunk__22860_22868;
var G__22874 = count__22861_22869;
var G__22875 = (i__22862_22870 + (1));
seq__22859_22867 = G__22872;
chunk__22860_22868 = G__22873;
count__22861_22869 = G__22874;
i__22862_22870 = G__22875;
continue;
}
} else
{var temp__4126__auto___22876 = cljs.core.seq.call(null,seq__22859_22867);if(temp__4126__auto___22876)
{var seq__22859_22877__$1 = temp__4126__auto___22876;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22859_22877__$1))
{var c__4314__auto___22878 = cljs.core.chunk_first.call(null,seq__22859_22877__$1);{
var G__22879 = cljs.core.chunk_rest.call(null,seq__22859_22877__$1);
var G__22880 = c__4314__auto___22878;
var G__22881 = cljs.core.count.call(null,c__4314__auto___22878);
var G__22882 = (0);
seq__22859_22867 = G__22879;
chunk__22860_22868 = G__22880;
count__22861_22869 = G__22881;
i__22862_22870 = G__22882;
continue;
}
} else
{var n_22883 = cljs.core.first.call(null,seq__22859_22877__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22883;
goog.events.fireListeners(n_22883,evt.type,true,evt);
}
{
var G__22884 = cljs.core.next.call(null,seq__22859_22877__$1);
var G__22885 = null;
var G__22886 = (0);
var G__22887 = (0);
seq__22859_22867 = G__22884;
chunk__22860_22868 = G__22885;
count__22861_22869 = G__22886;
i__22862_22870 = G__22887;
continue;
}
}
} else
{}
}
break;
}
var seq__22863_22888 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__22864_22889 = null;var count__22865_22890 = (0);var i__22866_22891 = (0);while(true){
if((i__22866_22891 < count__22865_22890))
{var n_22892 = cljs.core._nth.call(null,chunk__22864_22889,i__22866_22891);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22892;
goog.events.fireListeners(n_22892,evt.type,false,evt);
}
{
var G__22893 = seq__22863_22888;
var G__22894 = chunk__22864_22889;
var G__22895 = count__22865_22890;
var G__22896 = (i__22866_22891 + (1));
seq__22863_22888 = G__22893;
chunk__22864_22889 = G__22894;
count__22865_22890 = G__22895;
i__22866_22891 = G__22896;
continue;
}
} else
{var temp__4126__auto___22897 = cljs.core.seq.call(null,seq__22863_22888);if(temp__4126__auto___22897)
{var seq__22863_22898__$1 = temp__4126__auto___22897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22863_22898__$1))
{var c__4314__auto___22899 = cljs.core.chunk_first.call(null,seq__22863_22898__$1);{
var G__22900 = cljs.core.chunk_rest.call(null,seq__22863_22898__$1);
var G__22901 = c__4314__auto___22899;
var G__22902 = cljs.core.count.call(null,c__4314__auto___22899);
var G__22903 = (0);
seq__22863_22888 = G__22900;
chunk__22864_22889 = G__22901;
count__22865_22890 = G__22902;
i__22866_22891 = G__22903;
continue;
}
} else
{var n_22904 = cljs.core.first.call(null,seq__22863_22898__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22904;
goog.events.fireListeners(n_22904,evt.type,false,evt);
}
{
var G__22905 = cljs.core.next.call(null,seq__22863_22898__$1);
var G__22906 = null;
var G__22907 = (0);
var G__22908 = (0);
seq__22863_22888 = G__22905;
chunk__22864_22889 = G__22906;
count__22865_22890 = G__22907;
i__22866_22891 = G__22908;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__22915_22921 = cljs.core.seq.call(null,evt_map);var chunk__22916_22922 = null;var count__22917_22923 = (0);var i__22918_22924 = (0);while(true){
if((i__22918_22924 < count__22917_22923))
{var vec__22919_22925 = cljs.core._nth.call(null,chunk__22916_22922,i__22918_22924);var k_22926 = cljs.core.nth.call(null,vec__22919_22925,(0),null);var v_22927 = cljs.core.nth.call(null,vec__22919_22925,(1),null);(evt[k_22926] = v_22927);
{
var G__22928 = seq__22915_22921;
var G__22929 = chunk__22916_22922;
var G__22930 = count__22917_22923;
var G__22931 = (i__22918_22924 + (1));
seq__22915_22921 = G__22928;
chunk__22916_22922 = G__22929;
count__22917_22923 = G__22930;
i__22918_22924 = G__22931;
continue;
}
} else
{var temp__4126__auto___22932 = cljs.core.seq.call(null,seq__22915_22921);if(temp__4126__auto___22932)
{var seq__22915_22933__$1 = temp__4126__auto___22932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22915_22933__$1))
{var c__4314__auto___22934 = cljs.core.chunk_first.call(null,seq__22915_22933__$1);{
var G__22935 = cljs.core.chunk_rest.call(null,seq__22915_22933__$1);
var G__22936 = c__4314__auto___22934;
var G__22937 = cljs.core.count.call(null,c__4314__auto___22934);
var G__22938 = (0);
seq__22915_22921 = G__22935;
chunk__22916_22922 = G__22936;
count__22917_22923 = G__22937;
i__22918_22924 = G__22938;
continue;
}
} else
{var vec__22920_22939 = cljs.core.first.call(null,seq__22915_22933__$1);var k_22940 = cljs.core.nth.call(null,vec__22920_22939,(0),null);var v_22941 = cljs.core.nth.call(null,vec__22920_22939,(1),null);(evt[k_22940] = v_22941);
{
var G__22942 = cljs.core.next.call(null,seq__22915_22933__$1);
var G__22943 = null;
var G__22944 = (0);
var G__22945 = (0);
seq__22915_22921 = G__22942;
chunk__22916_22922 = G__22943;
count__22917_22923 = G__22944;
i__22918_22924 = G__22945;
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
return (function (p1__22946_SHARP_){return goog.events.getListeners(p1__22946_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
