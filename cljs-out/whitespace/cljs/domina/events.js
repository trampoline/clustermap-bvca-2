// Compiled by ClojureScript 0.0-2322
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj22796 = {};return obj22796;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t22800 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t22800 = (function (evt,f,create_listener_function,meta22801){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta22801 = meta22801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t22800.cljs$lang$type = true;
domina.events.t22800.cljs$lang$ctorStr = "domina.events/t22800";
domina.events.t22800.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"domina.events/t22800");
});
domina.events.t22800.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t22800.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3558__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return not_found;
}
});
domina.events.t22800.prototype.domina$events$Event$ = true;
domina.events.t22800.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t22800.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t22800.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t22800.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t22800.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t22800.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t22800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22802){var self__ = this;
var _22802__$1 = this;return self__.meta22801;
});
domina.events.t22800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22802,meta22801__$1){var self__ = this;
var _22802__$1 = this;return (new domina.events.t22800(self__.evt,self__.f,self__.create_listener_function,meta22801__$1));
});
domina.events.__GT_t22800 = (function __GT_t22800(evt__$1,f__$1,create_listener_function__$1,meta22801){return (new domina.events.t22800(evt__$1,f__$1,create_listener_function__$1,meta22801));
});
}
return (new domina.events.t22800(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4283__auto__ = ((function (f,t){
return (function iter__22807(s__22808){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__22808__$1 = s__22808;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__22808__$1);if(temp__4126__auto__)
{var s__22808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__22808__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__22808__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__22810 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__22809 = (0);while(true){
if((i__22809 < size__4282__auto__))
{var node = cljs.core._nth.call(null,c__4281__auto__,i__22809);cljs.core.chunk_append.call(null,b__22810,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__22811 = (i__22809 + (1));
i__22809 = G__22811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22810),iter__22807.call(null,cljs.core.chunk_rest.call(null,s__22808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__22810),null);
}
} else
{var node = cljs.core.first.call(null,s__22808__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__22807.call(null,cljs.core.rest.call(null,s__22808__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__22820 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22821 = null;var count__22822 = (0);var i__22823 = (0);while(true){
if((i__22823 < count__22822))
{var node = cljs.core._nth.call(null,chunk__22821,i__22823);goog.events.removeAll(node);
{
var G__22828 = seq__22820;
var G__22829 = chunk__22821;
var G__22830 = count__22822;
var G__22831 = (i__22823 + (1));
seq__22820 = G__22828;
chunk__22821 = G__22829;
count__22822 = G__22830;
i__22823 = G__22831;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22820);if(temp__4126__auto__)
{var seq__22820__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22820__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__22820__$1);{
var G__22832 = cljs.core.chunk_rest.call(null,seq__22820__$1);
var G__22833 = c__4314__auto__;
var G__22834 = cljs.core.count.call(null,c__4314__auto__);
var G__22835 = (0);
seq__22820 = G__22832;
chunk__22821 = G__22833;
count__22822 = G__22834;
i__22823 = G__22835;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__22820__$1);goog.events.removeAll(node);
{
var G__22836 = cljs.core.next.call(null,seq__22820__$1);
var G__22837 = null;
var G__22838 = (0);
var G__22839 = (0);
seq__22820 = G__22836;
chunk__22821 = G__22837;
count__22822 = G__22838;
i__22823 = G__22839;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__22824 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__22825 = null;var count__22826 = (0);var i__22827 = (0);while(true){
if((i__22827 < count__22826))
{var node = cljs.core._nth.call(null,chunk__22825,i__22827);goog.events.removeAll(node,type__$1);
{
var G__22840 = seq__22824;
var G__22841 = chunk__22825;
var G__22842 = count__22826;
var G__22843 = (i__22827 + (1));
seq__22824 = G__22840;
chunk__22825 = G__22841;
count__22826 = G__22842;
i__22827 = G__22843;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__22824);if(temp__4126__auto__)
{var seq__22824__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22824__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__22824__$1);{
var G__22844 = cljs.core.chunk_rest.call(null,seq__22824__$1);
var G__22845 = c__4314__auto__;
var G__22846 = cljs.core.count.call(null,c__4314__auto__);
var G__22847 = (0);
seq__22824 = G__22844;
chunk__22825 = G__22845;
count__22826 = G__22846;
i__22827 = G__22847;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__22824__$1);goog.events.removeAll(node,type__$1);
{
var G__22848 = cljs.core.next.call(null,seq__22824__$1);
var G__22849 = null;
var G__22850 = (0);
var G__22851 = (0);
seq__22824 = G__22848;
chunk__22825 = G__22849;
count__22826 = G__22850;
i__22827 = G__22851;
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
var G__22852 = parent;
var G__22853 = cljs.core.cons.call(null,parent,so_far);
n = G__22852;
so_far = G__22853;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__22862_22870 = cljs.core.seq.call(null,ancestors);var chunk__22863_22871 = null;var count__22864_22872 = (0);var i__22865_22873 = (0);while(true){
if((i__22865_22873 < count__22864_22872))
{var n_22874 = cljs.core._nth.call(null,chunk__22863_22871,i__22865_22873);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22874;
goog.events.fireListeners(n_22874,evt.type,true,evt);
}
{
var G__22875 = seq__22862_22870;
var G__22876 = chunk__22863_22871;
var G__22877 = count__22864_22872;
var G__22878 = (i__22865_22873 + (1));
seq__22862_22870 = G__22875;
chunk__22863_22871 = G__22876;
count__22864_22872 = G__22877;
i__22865_22873 = G__22878;
continue;
}
} else
{var temp__4126__auto___22879 = cljs.core.seq.call(null,seq__22862_22870);if(temp__4126__auto___22879)
{var seq__22862_22880__$1 = temp__4126__auto___22879;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22862_22880__$1))
{var c__4314__auto___22881 = cljs.core.chunk_first.call(null,seq__22862_22880__$1);{
var G__22882 = cljs.core.chunk_rest.call(null,seq__22862_22880__$1);
var G__22883 = c__4314__auto___22881;
var G__22884 = cljs.core.count.call(null,c__4314__auto___22881);
var G__22885 = (0);
seq__22862_22870 = G__22882;
chunk__22863_22871 = G__22883;
count__22864_22872 = G__22884;
i__22865_22873 = G__22885;
continue;
}
} else
{var n_22886 = cljs.core.first.call(null,seq__22862_22880__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22886;
goog.events.fireListeners(n_22886,evt.type,true,evt);
}
{
var G__22887 = cljs.core.next.call(null,seq__22862_22880__$1);
var G__22888 = null;
var G__22889 = (0);
var G__22890 = (0);
seq__22862_22870 = G__22887;
chunk__22863_22871 = G__22888;
count__22864_22872 = G__22889;
i__22865_22873 = G__22890;
continue;
}
}
} else
{}
}
break;
}
var seq__22866_22891 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__22867_22892 = null;var count__22868_22893 = (0);var i__22869_22894 = (0);while(true){
if((i__22869_22894 < count__22868_22893))
{var n_22895 = cljs.core._nth.call(null,chunk__22867_22892,i__22869_22894);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22895;
goog.events.fireListeners(n_22895,evt.type,false,evt);
}
{
var G__22896 = seq__22866_22891;
var G__22897 = chunk__22867_22892;
var G__22898 = count__22868_22893;
var G__22899 = (i__22869_22894 + (1));
seq__22866_22891 = G__22896;
chunk__22867_22892 = G__22897;
count__22868_22893 = G__22898;
i__22869_22894 = G__22899;
continue;
}
} else
{var temp__4126__auto___22900 = cljs.core.seq.call(null,seq__22866_22891);if(temp__4126__auto___22900)
{var seq__22866_22901__$1 = temp__4126__auto___22900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22866_22901__$1))
{var c__4314__auto___22902 = cljs.core.chunk_first.call(null,seq__22866_22901__$1);{
var G__22903 = cljs.core.chunk_rest.call(null,seq__22866_22901__$1);
var G__22904 = c__4314__auto___22902;
var G__22905 = cljs.core.count.call(null,c__4314__auto___22902);
var G__22906 = (0);
seq__22866_22891 = G__22903;
chunk__22867_22892 = G__22904;
count__22868_22893 = G__22905;
i__22869_22894 = G__22906;
continue;
}
} else
{var n_22907 = cljs.core.first.call(null,seq__22866_22901__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_22907;
goog.events.fireListeners(n_22907,evt.type,false,evt);
}
{
var G__22908 = cljs.core.next.call(null,seq__22866_22901__$1);
var G__22909 = null;
var G__22910 = (0);
var G__22911 = (0);
seq__22866_22891 = G__22908;
chunk__22867_22892 = G__22909;
count__22868_22893 = G__22910;
i__22869_22894 = G__22911;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__22918_22924 = cljs.core.seq.call(null,evt_map);var chunk__22919_22925 = null;var count__22920_22926 = (0);var i__22921_22927 = (0);while(true){
if((i__22921_22927 < count__22920_22926))
{var vec__22922_22928 = cljs.core._nth.call(null,chunk__22919_22925,i__22921_22927);var k_22929 = cljs.core.nth.call(null,vec__22922_22928,(0),null);var v_22930 = cljs.core.nth.call(null,vec__22922_22928,(1),null);(evt[k_22929] = v_22930);
{
var G__22931 = seq__22918_22924;
var G__22932 = chunk__22919_22925;
var G__22933 = count__22920_22926;
var G__22934 = (i__22921_22927 + (1));
seq__22918_22924 = G__22931;
chunk__22919_22925 = G__22932;
count__22920_22926 = G__22933;
i__22921_22927 = G__22934;
continue;
}
} else
{var temp__4126__auto___22935 = cljs.core.seq.call(null,seq__22918_22924);if(temp__4126__auto___22935)
{var seq__22918_22936__$1 = temp__4126__auto___22935;if(cljs.core.chunked_seq_QMARK_.call(null,seq__22918_22936__$1))
{var c__4314__auto___22937 = cljs.core.chunk_first.call(null,seq__22918_22936__$1);{
var G__22938 = cljs.core.chunk_rest.call(null,seq__22918_22936__$1);
var G__22939 = c__4314__auto___22937;
var G__22940 = cljs.core.count.call(null,c__4314__auto___22937);
var G__22941 = (0);
seq__22918_22924 = G__22938;
chunk__22919_22925 = G__22939;
count__22920_22926 = G__22940;
i__22921_22927 = G__22941;
continue;
}
} else
{var vec__22923_22942 = cljs.core.first.call(null,seq__22918_22936__$1);var k_22943 = cljs.core.nth.call(null,vec__22923_22942,(0),null);var v_22944 = cljs.core.nth.call(null,vec__22923_22942,(1),null);(evt[k_22943] = v_22944);
{
var G__22945 = cljs.core.next.call(null,seq__22918_22936__$1);
var G__22946 = null;
var G__22947 = (0);
var G__22948 = (0);
seq__22918_22924 = G__22945;
chunk__22919_22925 = G__22946;
count__22920_22926 = G__22947;
i__22921_22927 = G__22948;
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
return (function (p1__22949_SHARP_){return goog.events.getListeners(p1__22949_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
