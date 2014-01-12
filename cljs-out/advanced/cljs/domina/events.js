// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23834 = {};return obj23834;
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
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol("Event.target",evt);
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
{throw cljs.core.missing_protocol("Event.current-target",evt);
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
{throw cljs.core.missing_protocol("Event.event-type",evt);
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
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t23838 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23838 = (function (evt,f,create_listener_function,meta23839){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23839 = meta23839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23838.cljs$lang$type = true;
domina.events.t23838.cljs$lang$ctorStr = "domina.events/t23838";
domina.events.t23838.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23838");
});
domina.events.t23838.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23838.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23838.prototype.domina$events$Event$ = true;
domina.events.t23838.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23838.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23838.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23838.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23838.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23838.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23840){var self__ = this;
var _23840__$1 = this;return self__.meta23839;
});
domina.events.t23838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23840,meta23839__$1){var self__ = this;
var _23840__$1 = this;return (new domina.events.t23838(self__.evt,self__.f,self__.create_listener_function,meta23839__$1));
});
domina.events.__GT_t23838 = (function __GT_t23838(evt__$1,f__$1,create_listener_function__$1,meta23839){return (new domina.events.t23838(evt__$1,f__$1,create_listener_function__$1,meta23839));
});
}
return (new domina.events.t23838(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t23838 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23838 = (function (evt,f,create_listener_function,meta23839){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23839 = meta23839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23838.cljs$lang$type = true;
domina.events.t23838.cljs$lang$ctorStr = "domina.events/t23838";
domina.events.t23838.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23838");
});
domina.events.t23838.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23838.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23838.prototype.domina$events$Event$ = true;
domina.events.t23838.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23838.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23838.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23838.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23838.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23838.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23840){var self__ = this;
var _23840__$1 = this;return self__.meta23839;
});
domina.events.t23838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23840,meta23839__$1){var self__ = this;
var _23840__$1 = this;return (new domina.events.t23838(self__.evt,self__.f,self__.create_listener_function,meta23839__$1));
});
domina.events.__GT_t23838 = (function __GT_t23838(evt__$1,f__$1,create_listener_function__$1,meta23839){return (new domina.events.t23838(evt__$1,f__$1,create_listener_function__$1,meta23839));
});
}
return (new domina.events.t23838(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__23845(s__23846){return (new cljs.core.LazySeq(null,(function (){var s__23846__$1 = s__23846;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23846__$1);if(temp__4092__auto__)
{var s__23846__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23846__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23846__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23848 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23847 = 0;while(true){
if((i__23847 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23847);cljs.core.chunk_append(b__23848,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23849 = (i__23847 + 1);
i__23847 = G__23849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23848),iter__23845(cljs.core.chunk_rest(s__23846__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23848),null);
}
} else
{var node = cljs.core.first(s__23846__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23845(cljs.core.rest(s__23846__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(domina.nodes(content));
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
var unlisten_BANG___1 = (function (content){var seq__23858 = cljs.core.seq(domina.nodes(content));var chunk__23859 = null;var count__23860 = 0;var i__23861 = 0;while(true){
if((i__23861 < count__23860))
{var node = chunk__23859.cljs$core$IIndexed$_nth$arity$2(null,i__23861);goog.events.removeAll(node);
{
var G__23866 = seq__23858;
var G__23867 = chunk__23859;
var G__23868 = count__23860;
var G__23869 = (i__23861 + 1);
seq__23858 = G__23866;
chunk__23859 = G__23867;
count__23860 = G__23868;
i__23861 = G__23869;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23858);if(temp__4092__auto__)
{var seq__23858__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23858__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23858__$1);{
var G__23870 = cljs.core.chunk_rest(seq__23858__$1);
var G__23871 = c__4148__auto__;
var G__23872 = cljs.core.count(c__4148__auto__);
var G__23873 = 0;
seq__23858 = G__23870;
chunk__23859 = G__23871;
count__23860 = G__23872;
i__23861 = G__23873;
continue;
}
} else
{var node = cljs.core.first(seq__23858__$1);goog.events.removeAll(node);
{
var G__23874 = cljs.core.next(seq__23858__$1);
var G__23875 = null;
var G__23876 = 0;
var G__23877 = 0;
seq__23858 = G__23874;
chunk__23859 = G__23875;
count__23860 = G__23876;
i__23861 = G__23877;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__23862 = cljs.core.seq(domina.nodes(content));var chunk__23863 = null;var count__23864 = 0;var i__23865 = 0;while(true){
if((i__23865 < count__23864))
{var node = chunk__23863.cljs$core$IIndexed$_nth$arity$2(null,i__23865);goog.events.removeAll(node,type__$1);
{
var G__23878 = seq__23862;
var G__23879 = chunk__23863;
var G__23880 = count__23864;
var G__23881 = (i__23865 + 1);
seq__23862 = G__23878;
chunk__23863 = G__23879;
count__23864 = G__23880;
i__23865 = G__23881;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23862);if(temp__4092__auto__)
{var seq__23862__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23862__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23862__$1);{
var G__23882 = cljs.core.chunk_rest(seq__23862__$1);
var G__23883 = c__4148__auto__;
var G__23884 = cljs.core.count(c__4148__auto__);
var G__23885 = 0;
seq__23862 = G__23882;
chunk__23863 = G__23883;
count__23864 = G__23884;
i__23865 = G__23885;
continue;
}
} else
{var node = cljs.core.first(seq__23862__$1);goog.events.removeAll(node,type__$1);
{
var G__23886 = cljs.core.next(seq__23862__$1);
var G__23887 = null;
var G__23888 = 0;
var G__23889 = 0;
seq__23862 = G__23886;
chunk__23863 = G__23887;
count__23864 = G__23888;
i__23865 = G__23889;
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
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__23890 = parent;
var G__23891 = cljs.core.cons(parent,so_far);
n = G__23890;
so_far = G__23891;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__23900_23908 = cljs.core.seq(ancestors);var chunk__23901_23909 = null;var count__23902_23910 = 0;var i__23903_23911 = 0;while(true){
if((i__23903_23911 < count__23902_23910))
{var n_23912 = chunk__23901_23909.cljs$core$IIndexed$_nth$arity$2(null,i__23903_23911);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23912;
goog.events.fireListeners(n_23912,evt.type,true,evt);
}
{
var G__23913 = seq__23900_23908;
var G__23914 = chunk__23901_23909;
var G__23915 = count__23902_23910;
var G__23916 = (i__23903_23911 + 1);
seq__23900_23908 = G__23913;
chunk__23901_23909 = G__23914;
count__23902_23910 = G__23915;
i__23903_23911 = G__23916;
continue;
}
} else
{var temp__4092__auto___23917 = cljs.core.seq(seq__23900_23908);if(temp__4092__auto___23917)
{var seq__23900_23918__$1 = temp__4092__auto___23917;if(cljs.core.chunked_seq_QMARK_(seq__23900_23918__$1))
{var c__4148__auto___23919 = cljs.core.chunk_first(seq__23900_23918__$1);{
var G__23920 = cljs.core.chunk_rest(seq__23900_23918__$1);
var G__23921 = c__4148__auto___23919;
var G__23922 = cljs.core.count(c__4148__auto___23919);
var G__23923 = 0;
seq__23900_23908 = G__23920;
chunk__23901_23909 = G__23921;
count__23902_23910 = G__23922;
i__23903_23911 = G__23923;
continue;
}
} else
{var n_23924 = cljs.core.first(seq__23900_23918__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23924;
goog.events.fireListeners(n_23924,evt.type,true,evt);
}
{
var G__23925 = cljs.core.next(seq__23900_23918__$1);
var G__23926 = null;
var G__23927 = 0;
var G__23928 = 0;
seq__23900_23908 = G__23925;
chunk__23901_23909 = G__23926;
count__23902_23910 = G__23927;
i__23903_23911 = G__23928;
continue;
}
}
} else
{}
}
break;
}
var seq__23904_23929 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__23905_23930 = null;var count__23906_23931 = 0;var i__23907_23932 = 0;while(true){
if((i__23907_23932 < count__23906_23931))
{var n_23933 = chunk__23905_23930.cljs$core$IIndexed$_nth$arity$2(null,i__23907_23932);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23933;
goog.events.fireListeners(n_23933,evt.type,false,evt);
}
{
var G__23934 = seq__23904_23929;
var G__23935 = chunk__23905_23930;
var G__23936 = count__23906_23931;
var G__23937 = (i__23907_23932 + 1);
seq__23904_23929 = G__23934;
chunk__23905_23930 = G__23935;
count__23906_23931 = G__23936;
i__23907_23932 = G__23937;
continue;
}
} else
{var temp__4092__auto___23938 = cljs.core.seq(seq__23904_23929);if(temp__4092__auto___23938)
{var seq__23904_23939__$1 = temp__4092__auto___23938;if(cljs.core.chunked_seq_QMARK_(seq__23904_23939__$1))
{var c__4148__auto___23940 = cljs.core.chunk_first(seq__23904_23939__$1);{
var G__23941 = cljs.core.chunk_rest(seq__23904_23939__$1);
var G__23942 = c__4148__auto___23940;
var G__23943 = cljs.core.count(c__4148__auto___23940);
var G__23944 = 0;
seq__23904_23929 = G__23941;
chunk__23905_23930 = G__23942;
count__23906_23931 = G__23943;
i__23907_23932 = G__23944;
continue;
}
} else
{var n_23945 = cljs.core.first(seq__23904_23939__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23945;
goog.events.fireListeners(n_23945,evt.type,false,evt);
}
{
var G__23946 = cljs.core.next(seq__23904_23939__$1);
var G__23947 = null;
var G__23948 = 0;
var G__23949 = 0;
seq__23904_23929 = G__23946;
chunk__23905_23930 = G__23947;
count__23906_23931 = G__23948;
i__23907_23932 = G__23949;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__23956_23962 = cljs.core.seq(evt_map);var chunk__23957_23963 = null;var count__23958_23964 = 0;var i__23959_23965 = 0;while(true){
if((i__23959_23965 < count__23958_23964))
{var vec__23960_23966 = chunk__23957_23963.cljs$core$IIndexed$_nth$arity$2(null,i__23959_23965);var k_23967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23960_23966,0,null);var v_23968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23960_23966,1,null);(evt[k_23967] = v_23968);
{
var G__23969 = seq__23956_23962;
var G__23970 = chunk__23957_23963;
var G__23971 = count__23958_23964;
var G__23972 = (i__23959_23965 + 1);
seq__23956_23962 = G__23969;
chunk__23957_23963 = G__23970;
count__23958_23964 = G__23971;
i__23959_23965 = G__23972;
continue;
}
} else
{var temp__4092__auto___23973 = cljs.core.seq(seq__23956_23962);if(temp__4092__auto___23973)
{var seq__23956_23974__$1 = temp__4092__auto___23973;if(cljs.core.chunked_seq_QMARK_(seq__23956_23974__$1))
{var c__4148__auto___23975 = cljs.core.chunk_first(seq__23956_23974__$1);{
var G__23976 = cljs.core.chunk_rest(seq__23956_23974__$1);
var G__23977 = c__4148__auto___23975;
var G__23978 = cljs.core.count(c__4148__auto___23975);
var G__23979 = 0;
seq__23956_23962 = G__23976;
chunk__23957_23963 = G__23977;
count__23958_23964 = G__23978;
i__23959_23965 = G__23979;
continue;
}
} else
{var vec__23961_23980 = cljs.core.first(seq__23956_23974__$1);var k_23981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23961_23980,0,null);var v_23982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23961_23980,1,null);(evt[k_23981] = v_23982);
{
var G__23983 = cljs.core.next(seq__23956_23974__$1);
var G__23984 = null;
var G__23985 = 0;
var G__23986 = 0;
seq__23956_23962 = G__23983;
chunk__23957_23963 = G__23984;
count__23958_23964 = G__23985;
i__23959_23965 = G__23986;
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
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__23987_SHARP_){return goog.events.getListeners(p1__23987_SHARP_,type__$1,false);
}),domina.nodes(content));
});
