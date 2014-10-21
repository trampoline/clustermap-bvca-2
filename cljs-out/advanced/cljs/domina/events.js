// Compiled by ClojureScript 0.0-2356
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj68700 = {};return obj68700;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.prevent_default[(function (){var G__68704 = x__4273__auto__;return goog.typeOf(G__68704);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.prevent_default["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.stop_propagation[(function (){var G__68708 = x__4273__auto__;return goog.typeOf(G__68708);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.target[(function (){var G__68712 = x__4273__auto__;return goog.typeOf(G__68712);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.current_target[(function (){var G__68716 = x__4273__auto__;return goog.typeOf(G__68716);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.current_target["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.event_type[(function (){var G__68720 = x__4273__auto__;return goog.typeOf(G__68720);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.event_type["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3625__auto__ = evt;if(and__3625__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3625__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4273__auto__ = (((evt == null))?null:evt);return (function (){var or__3637__auto__ = (domina.events.raw_event[(function (){var G__68724 = x__4273__auto__;return goog.typeOf(G__68724);
})()]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.events.raw_event["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){var G__68729_68733 = (function (){if(typeof domina.events.t68730 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t68730 = (function (evt,f,create_listener_function,meta68731){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta68731 = meta68731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t68730.cljs$lang$type = true;
domina.events.t68730.cljs$lang$ctorStr = "domina.events/t68730";
domina.events.t68730.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"domina.events/t68730");
});
domina.events.t68730.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t68730.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3637__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return not_found;
}
});
domina.events.t68730.prototype.domina$events$Event$ = true;
domina.events.t68730.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t68730.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t68730.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t68730.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t68730.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t68730.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t68730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68732){var self__ = this;
var _68732__$1 = this;return self__.meta68731;
});
domina.events.t68730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68732,meta68731__$1){var self__ = this;
var _68732__$1 = this;return (new domina.events.t68730(self__.evt,self__.f,self__.create_listener_function,meta68731__$1));
});
domina.events.__GT_t68730 = (function __GT_t68730(evt__$1,f__$1,create_listener_function__$1,meta68731){return (new domina.events.t68730(evt__$1,f__$1,create_listener_function__$1,meta68731));
});
}
return (new domina.events.t68730(evt,f,create_listener_function,null));
})();(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__68729_68733) : f.call(null,G__68729_68733));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4375__auto__ = ((function (f,t){
return (function iter__68772(s__68773){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__68773__$1 = s__68773;while(true){
var temp__4126__auto__ = cljs.core.seq(s__68773__$1);if(temp__4126__auto__)
{var s__68773__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__68773__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__68773__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__68775 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__68774 = (0);while(true){
if((i__68774 < size__4374__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__68774);cljs.core.chunk_append(b__68775,(cljs.core.truth_(once)?(function (){var G__68794 = node;var G__68795 = t;var G__68796 = f;var G__68797 = capture;return goog.events.listenOnce(G__68794,G__68795,G__68796,G__68797);
})():(function (){var G__68798 = node;var G__68799 = t;var G__68800 = f;var G__68801 = capture;return goog.events.listen(G__68798,G__68799,G__68800,G__68801);
})()));
{
var G__68810 = (i__68774 + (1));
i__68774 = G__68810;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__68775),iter__68772(cljs.core.chunk_rest(s__68773__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__68775),null);
}
} else
{var node = cljs.core.first(s__68773__$2);return cljs.core.cons((cljs.core.truth_(once)?(function (){var G__68802 = node;var G__68803 = t;var G__68804 = f;var G__68805 = capture;return goog.events.listenOnce(G__68802,G__68803,G__68804,G__68805);
})():(function (){var G__68806 = node;var G__68807 = t;var G__68808 = f;var G__68809 = capture;return goog.events.listen(G__68806,G__68807,G__68808,G__68809);
})()),iter__68772(cljs.core.rest(s__68773__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4375__auto__(domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,false);
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
var capture_BANG___2 = (function (type,listener){return capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,false);
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
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,false,true);
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
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_(content,type,listener,true,true);
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
var unlisten_BANG___0 = (function (){return unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__68838 = cljs.core.seq(domina.nodes(content));var chunk__68839 = null;var count__68840 = (0);var i__68841 = (0);while(true){
if((i__68841 < count__68840))
{var node = chunk__68839.cljs$core$IIndexed$_nth$arity$2(null,i__68841);var G__68842_68852 = node;goog.events.removeAll(G__68842_68852);
{
var G__68853 = seq__68838;
var G__68854 = chunk__68839;
var G__68855 = count__68840;
var G__68856 = (i__68841 + (1));
seq__68838 = G__68853;
chunk__68839 = G__68854;
count__68840 = G__68855;
i__68841 = G__68856;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__68838);if(temp__4126__auto__)
{var seq__68838__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__68838__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__68838__$1);{
var G__68857 = cljs.core.chunk_rest(seq__68838__$1);
var G__68858 = c__4406__auto__;
var G__68859 = cljs.core.count(c__4406__auto__);
var G__68860 = (0);
seq__68838 = G__68857;
chunk__68839 = G__68858;
count__68840 = G__68859;
i__68841 = G__68860;
continue;
}
} else
{var node = cljs.core.first(seq__68838__$1);var G__68843_68861 = node;goog.events.removeAll(G__68843_68861);
{
var G__68862 = cljs.core.next(seq__68838__$1);
var G__68863 = null;
var G__68864 = (0);
var G__68865 = (0);
seq__68838 = G__68862;
chunk__68839 = G__68863;
count__68840 = G__68864;
i__68841 = G__68865;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__68844 = cljs.core.seq(domina.nodes(content));var chunk__68845 = null;var count__68846 = (0);var i__68847 = (0);while(true){
if((i__68847 < count__68846))
{var node = chunk__68845.cljs$core$IIndexed$_nth$arity$2(null,i__68847);var G__68848_68866 = node;var G__68849_68867 = type__$1;goog.events.removeAll(G__68848_68866,G__68849_68867);
{
var G__68868 = seq__68844;
var G__68869 = chunk__68845;
var G__68870 = count__68846;
var G__68871 = (i__68847 + (1));
seq__68844 = G__68868;
chunk__68845 = G__68869;
count__68846 = G__68870;
i__68847 = G__68871;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__68844);if(temp__4126__auto__)
{var seq__68844__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__68844__$1))
{var c__4406__auto__ = cljs.core.chunk_first(seq__68844__$1);{
var G__68872 = cljs.core.chunk_rest(seq__68844__$1);
var G__68873 = c__4406__auto__;
var G__68874 = cljs.core.count(c__4406__auto__);
var G__68875 = (0);
seq__68844 = G__68872;
chunk__68845 = G__68873;
count__68846 = G__68874;
i__68847 = G__68875;
continue;
}
} else
{var node = cljs.core.first(seq__68844__$1);var G__68850_68876 = node;var G__68851_68877 = type__$1;goog.events.removeAll(G__68850_68876,G__68851_68877);
{
var G__68878 = cljs.core.next(seq__68844__$1);
var G__68879 = null;
var G__68880 = (0);
var G__68881 = (0);
seq__68844 = G__68878;
chunk__68845 = G__68879;
count__68846 = G__68880;
i__68847 = G__68881;
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
var ancestor_nodes__1 = (function (n){return ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__68884 = parent;
var G__68885 = cljs.core.cons(parent,so_far);
n = G__68884;
so_far = G__68885;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__68910_68934 = cljs.core.seq(ancestors);var chunk__68911_68935 = null;var count__68912_68936 = (0);var i__68913_68937 = (0);while(true){
if((i__68913_68937 < count__68912_68936))
{var n_68938 = chunk__68911_68935.cljs$core$IIndexed$_nth$arity$2(null,i__68913_68937);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_68938;
var G__68914_68939 = n_68938;var G__68915_68940 = evt.type;var G__68916_68941 = true;var G__68917_68942 = evt;goog.events.fireListeners(G__68914_68939,G__68915_68940,G__68916_68941,G__68917_68942);
}
{
var G__68943 = seq__68910_68934;
var G__68944 = chunk__68911_68935;
var G__68945 = count__68912_68936;
var G__68946 = (i__68913_68937 + (1));
seq__68910_68934 = G__68943;
chunk__68911_68935 = G__68944;
count__68912_68936 = G__68945;
i__68913_68937 = G__68946;
continue;
}
} else
{var temp__4126__auto___68947 = cljs.core.seq(seq__68910_68934);if(temp__4126__auto___68947)
{var seq__68910_68948__$1 = temp__4126__auto___68947;if(cljs.core.chunked_seq_QMARK_(seq__68910_68948__$1))
{var c__4406__auto___68949 = cljs.core.chunk_first(seq__68910_68948__$1);{
var G__68950 = cljs.core.chunk_rest(seq__68910_68948__$1);
var G__68951 = c__4406__auto___68949;
var G__68952 = cljs.core.count(c__4406__auto___68949);
var G__68953 = (0);
seq__68910_68934 = G__68950;
chunk__68911_68935 = G__68951;
count__68912_68936 = G__68952;
i__68913_68937 = G__68953;
continue;
}
} else
{var n_68954 = cljs.core.first(seq__68910_68948__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_68954;
var G__68918_68955 = n_68954;var G__68919_68956 = evt.type;var G__68920_68957 = true;var G__68921_68958 = evt;goog.events.fireListeners(G__68918_68955,G__68919_68956,G__68920_68957,G__68921_68958);
}
{
var G__68959 = cljs.core.next(seq__68910_68948__$1);
var G__68960 = null;
var G__68961 = (0);
var G__68962 = (0);
seq__68910_68934 = G__68959;
chunk__68911_68935 = G__68960;
count__68912_68936 = G__68961;
i__68913_68937 = G__68962;
continue;
}
}
} else
{}
}
break;
}
var seq__68922_68963 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__68923_68964 = null;var count__68924_68965 = (0);var i__68925_68966 = (0);while(true){
if((i__68925_68966 < count__68924_68965))
{var n_68967 = chunk__68923_68964.cljs$core$IIndexed$_nth$arity$2(null,i__68925_68966);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_68967;
var G__68926_68968 = n_68967;var G__68927_68969 = evt.type;var G__68928_68970 = false;var G__68929_68971 = evt;goog.events.fireListeners(G__68926_68968,G__68927_68969,G__68928_68970,G__68929_68971);
}
{
var G__68972 = seq__68922_68963;
var G__68973 = chunk__68923_68964;
var G__68974 = count__68924_68965;
var G__68975 = (i__68925_68966 + (1));
seq__68922_68963 = G__68972;
chunk__68923_68964 = G__68973;
count__68924_68965 = G__68974;
i__68925_68966 = G__68975;
continue;
}
} else
{var temp__4126__auto___68976 = cljs.core.seq(seq__68922_68963);if(temp__4126__auto___68976)
{var seq__68922_68977__$1 = temp__4126__auto___68976;if(cljs.core.chunked_seq_QMARK_(seq__68922_68977__$1))
{var c__4406__auto___68978 = cljs.core.chunk_first(seq__68922_68977__$1);{
var G__68979 = cljs.core.chunk_rest(seq__68922_68977__$1);
var G__68980 = c__4406__auto___68978;
var G__68981 = cljs.core.count(c__4406__auto___68978);
var G__68982 = (0);
seq__68922_68963 = G__68979;
chunk__68923_68964 = G__68980;
count__68924_68965 = G__68981;
i__68925_68966 = G__68982;
continue;
}
} else
{var n_68983 = cljs.core.first(seq__68922_68977__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_68983;
var G__68930_68984 = n_68983;var G__68931_68985 = evt.type;var G__68932_68986 = false;var G__68933_68987 = evt;goog.events.fireListeners(G__68930_68984,G__68931_68985,G__68932_68986,G__68933_68987);
}
{
var G__68988 = cljs.core.next(seq__68922_68977__$1);
var G__68989 = null;
var G__68990 = (0);
var G__68991 = (0);
seq__68922_68963 = G__68988;
chunk__68923_68964 = G__68989;
count__68924_68965 = G__68990;
i__68925_68966 = G__68991;
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
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){var G__68994 = source;var G__68995 = evt;return goog.events.dispatchEvent(G__68994,G__68995);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3625__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3625__auto__))
{return o.dispatchEvent;
} else
{return and__3625__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__69005_69011 = cljs.core.seq(evt_map);var chunk__69006_69012 = null;var count__69007_69013 = (0);var i__69008_69014 = (0);while(true){
if((i__69008_69014 < count__69007_69013))
{var vec__69009_69015 = chunk__69006_69012.cljs$core$IIndexed$_nth$arity$2(null,i__69008_69014);var k_69016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69009_69015,(0),null);var v_69017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69009_69015,(1),null);(evt[k_69016] = v_69017);
{
var G__69018 = seq__69005_69011;
var G__69019 = chunk__69006_69012;
var G__69020 = count__69007_69013;
var G__69021 = (i__69008_69014 + (1));
seq__69005_69011 = G__69018;
chunk__69006_69012 = G__69019;
count__69007_69013 = G__69020;
i__69008_69014 = G__69021;
continue;
}
} else
{var temp__4126__auto___69022 = cljs.core.seq(seq__69005_69011);if(temp__4126__auto___69022)
{var seq__69005_69023__$1 = temp__4126__auto___69022;if(cljs.core.chunked_seq_QMARK_(seq__69005_69023__$1))
{var c__4406__auto___69024 = cljs.core.chunk_first(seq__69005_69023__$1);{
var G__69025 = cljs.core.chunk_rest(seq__69005_69023__$1);
var G__69026 = c__4406__auto___69024;
var G__69027 = cljs.core.count(c__4406__auto___69024);
var G__69028 = (0);
seq__69005_69011 = G__69025;
chunk__69006_69012 = G__69026;
count__69007_69013 = G__69027;
i__69008_69014 = G__69028;
continue;
}
} else
{var vec__69010_69029 = cljs.core.first(seq__69005_69023__$1);var k_69030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69010_69029,(0),null);var v_69031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69010_69029,(1),null);(evt[k_69030] = v_69031);
{
var G__69032 = cljs.core.next(seq__69005_69023__$1);
var G__69033 = null;
var G__69034 = (0);
var G__69035 = (0);
seq__69005_69011 = G__69032;
chunk__69006_69012 = G__69033;
count__69007_69013 = G__69034;
i__69008_69014 = G__69035;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt);
} else
{return domina.events.dispatch_browser_BANG_(source,evt);
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
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){var G__69037 = key;return goog.events.unlistenByKey(G__69037);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (type__$1){
return (function (p1__69038_SHARP_){var G__69042 = p1__69038_SHARP_;var G__69043 = type__$1;var G__69044 = false;return goog.events.getListeners(G__69042,G__69043,G__69044);
});})(type__$1))
,cljs.core.array_seq([domina.nodes(content)], 0));
});
