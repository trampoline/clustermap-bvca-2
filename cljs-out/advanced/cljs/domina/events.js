// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23796 = {};return obj23796;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t23800 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23800 = (function (evt,f,create_listener_function,meta23801){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23801 = meta23801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23800.cljs$lang$type = true;
domina.events.t23800.cljs$lang$ctorStr = "domina.events/t23800";
domina.events.t23800.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23800");
});
domina.events.t23800.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23800.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23800.prototype.domina$events$Event$ = true;
domina.events.t23800.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23800.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23800.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23800.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23800.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23800.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23802){var self__ = this;
var _23802__$1 = this;return self__.meta23801;
});
domina.events.t23800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23802,meta23801__$1){var self__ = this;
var _23802__$1 = this;return (new domina.events.t23800(self__.evt,self__.f,self__.create_listener_function,meta23801__$1));
});
domina.events.__GT_t23800 = (function __GT_t23800(evt__$1,f__$1,create_listener_function__$1,meta23801){return (new domina.events.t23800(evt__$1,f__$1,create_listener_function__$1,meta23801));
});
}
return (new domina.events.t23800(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t23800 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23800 = (function (evt,f,create_listener_function,meta23801){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23801 = meta23801;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23800.cljs$lang$type = true;
domina.events.t23800.cljs$lang$ctorStr = "domina.events/t23800";
domina.events.t23800.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23800");
});
domina.events.t23800.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23800.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23800.prototype.domina$events$Event$ = true;
domina.events.t23800.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23800.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23800.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23800.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23800.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23800.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23802){var self__ = this;
var _23802__$1 = this;return self__.meta23801;
});
domina.events.t23800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23802,meta23801__$1){var self__ = this;
var _23802__$1 = this;return (new domina.events.t23800(self__.evt,self__.f,self__.create_listener_function,meta23801__$1));
});
domina.events.__GT_t23800 = (function __GT_t23800(evt__$1,f__$1,create_listener_function__$1,meta23801){return (new domina.events.t23800(evt__$1,f__$1,create_listener_function__$1,meta23801));
});
}
return (new domina.events.t23800(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__23807(s__23808){return (new cljs.core.LazySeq(null,(function (){var s__23808__$1 = s__23808;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23808__$1);if(temp__4092__auto__)
{var s__23808__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23808__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23808__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23810 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23809 = 0;while(true){
if((i__23809 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23809);cljs.core.chunk_append(b__23810,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23811 = (i__23809 + 1);
i__23809 = G__23811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23810),iter__23807(cljs.core.chunk_rest(s__23808__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23810),null);
}
} else
{var node = cljs.core.first(s__23808__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23807(cljs.core.rest(s__23808__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__23820 = cljs.core.seq(domina.nodes(content));var chunk__23821 = null;var count__23822 = 0;var i__23823 = 0;while(true){
if((i__23823 < count__23822))
{var node = chunk__23821.cljs$core$IIndexed$_nth$arity$2(null,i__23823);goog.events.removeAll(node);
{
var G__23828 = seq__23820;
var G__23829 = chunk__23821;
var G__23830 = count__23822;
var G__23831 = (i__23823 + 1);
seq__23820 = G__23828;
chunk__23821 = G__23829;
count__23822 = G__23830;
i__23823 = G__23831;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23820);if(temp__4092__auto__)
{var seq__23820__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23820__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23820__$1);{
var G__23832 = cljs.core.chunk_rest(seq__23820__$1);
var G__23833 = c__4148__auto__;
var G__23834 = cljs.core.count(c__4148__auto__);
var G__23835 = 0;
seq__23820 = G__23832;
chunk__23821 = G__23833;
count__23822 = G__23834;
i__23823 = G__23835;
continue;
}
} else
{var node = cljs.core.first(seq__23820__$1);goog.events.removeAll(node);
{
var G__23836 = cljs.core.next(seq__23820__$1);
var G__23837 = null;
var G__23838 = 0;
var G__23839 = 0;
seq__23820 = G__23836;
chunk__23821 = G__23837;
count__23822 = G__23838;
i__23823 = G__23839;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__23824 = cljs.core.seq(domina.nodes(content));var chunk__23825 = null;var count__23826 = 0;var i__23827 = 0;while(true){
if((i__23827 < count__23826))
{var node = chunk__23825.cljs$core$IIndexed$_nth$arity$2(null,i__23827);goog.events.removeAll(node,type__$1);
{
var G__23840 = seq__23824;
var G__23841 = chunk__23825;
var G__23842 = count__23826;
var G__23843 = (i__23827 + 1);
seq__23824 = G__23840;
chunk__23825 = G__23841;
count__23826 = G__23842;
i__23827 = G__23843;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23824);if(temp__4092__auto__)
{var seq__23824__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23824__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23824__$1);{
var G__23844 = cljs.core.chunk_rest(seq__23824__$1);
var G__23845 = c__4148__auto__;
var G__23846 = cljs.core.count(c__4148__auto__);
var G__23847 = 0;
seq__23824 = G__23844;
chunk__23825 = G__23845;
count__23826 = G__23846;
i__23827 = G__23847;
continue;
}
} else
{var node = cljs.core.first(seq__23824__$1);goog.events.removeAll(node,type__$1);
{
var G__23848 = cljs.core.next(seq__23824__$1);
var G__23849 = null;
var G__23850 = 0;
var G__23851 = 0;
seq__23824 = G__23848;
chunk__23825 = G__23849;
count__23826 = G__23850;
i__23827 = G__23851;
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
var G__23852 = parent;
var G__23853 = cljs.core.cons(parent,so_far);
n = G__23852;
so_far = G__23853;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__23862_23870 = cljs.core.seq(ancestors);var chunk__23863_23871 = null;var count__23864_23872 = 0;var i__23865_23873 = 0;while(true){
if((i__23865_23873 < count__23864_23872))
{var n_23874 = chunk__23863_23871.cljs$core$IIndexed$_nth$arity$2(null,i__23865_23873);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23874;
goog.events.fireListeners(n_23874,evt.type,true,evt);
}
{
var G__23875 = seq__23862_23870;
var G__23876 = chunk__23863_23871;
var G__23877 = count__23864_23872;
var G__23878 = (i__23865_23873 + 1);
seq__23862_23870 = G__23875;
chunk__23863_23871 = G__23876;
count__23864_23872 = G__23877;
i__23865_23873 = G__23878;
continue;
}
} else
{var temp__4092__auto___23879 = cljs.core.seq(seq__23862_23870);if(temp__4092__auto___23879)
{var seq__23862_23880__$1 = temp__4092__auto___23879;if(cljs.core.chunked_seq_QMARK_(seq__23862_23880__$1))
{var c__4148__auto___23881 = cljs.core.chunk_first(seq__23862_23880__$1);{
var G__23882 = cljs.core.chunk_rest(seq__23862_23880__$1);
var G__23883 = c__4148__auto___23881;
var G__23884 = cljs.core.count(c__4148__auto___23881);
var G__23885 = 0;
seq__23862_23870 = G__23882;
chunk__23863_23871 = G__23883;
count__23864_23872 = G__23884;
i__23865_23873 = G__23885;
continue;
}
} else
{var n_23886 = cljs.core.first(seq__23862_23880__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23886;
goog.events.fireListeners(n_23886,evt.type,true,evt);
}
{
var G__23887 = cljs.core.next(seq__23862_23880__$1);
var G__23888 = null;
var G__23889 = 0;
var G__23890 = 0;
seq__23862_23870 = G__23887;
chunk__23863_23871 = G__23888;
count__23864_23872 = G__23889;
i__23865_23873 = G__23890;
continue;
}
}
} else
{}
}
break;
}
var seq__23866_23891 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__23867_23892 = null;var count__23868_23893 = 0;var i__23869_23894 = 0;while(true){
if((i__23869_23894 < count__23868_23893))
{var n_23895 = chunk__23867_23892.cljs$core$IIndexed$_nth$arity$2(null,i__23869_23894);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23895;
goog.events.fireListeners(n_23895,evt.type,false,evt);
}
{
var G__23896 = seq__23866_23891;
var G__23897 = chunk__23867_23892;
var G__23898 = count__23868_23893;
var G__23899 = (i__23869_23894 + 1);
seq__23866_23891 = G__23896;
chunk__23867_23892 = G__23897;
count__23868_23893 = G__23898;
i__23869_23894 = G__23899;
continue;
}
} else
{var temp__4092__auto___23900 = cljs.core.seq(seq__23866_23891);if(temp__4092__auto___23900)
{var seq__23866_23901__$1 = temp__4092__auto___23900;if(cljs.core.chunked_seq_QMARK_(seq__23866_23901__$1))
{var c__4148__auto___23902 = cljs.core.chunk_first(seq__23866_23901__$1);{
var G__23903 = cljs.core.chunk_rest(seq__23866_23901__$1);
var G__23904 = c__4148__auto___23902;
var G__23905 = cljs.core.count(c__4148__auto___23902);
var G__23906 = 0;
seq__23866_23891 = G__23903;
chunk__23867_23892 = G__23904;
count__23868_23893 = G__23905;
i__23869_23894 = G__23906;
continue;
}
} else
{var n_23907 = cljs.core.first(seq__23866_23901__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23907;
goog.events.fireListeners(n_23907,evt.type,false,evt);
}
{
var G__23908 = cljs.core.next(seq__23866_23901__$1);
var G__23909 = null;
var G__23910 = 0;
var G__23911 = 0;
seq__23866_23891 = G__23908;
chunk__23867_23892 = G__23909;
count__23868_23893 = G__23910;
i__23869_23894 = G__23911;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__23918_23924 = cljs.core.seq(evt_map);var chunk__23919_23925 = null;var count__23920_23926 = 0;var i__23921_23927 = 0;while(true){
if((i__23921_23927 < count__23920_23926))
{var vec__23922_23928 = chunk__23919_23925.cljs$core$IIndexed$_nth$arity$2(null,i__23921_23927);var k_23929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922_23928,0,null);var v_23930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23922_23928,1,null);(evt[k_23929] = v_23930);
{
var G__23931 = seq__23918_23924;
var G__23932 = chunk__23919_23925;
var G__23933 = count__23920_23926;
var G__23934 = (i__23921_23927 + 1);
seq__23918_23924 = G__23931;
chunk__23919_23925 = G__23932;
count__23920_23926 = G__23933;
i__23921_23927 = G__23934;
continue;
}
} else
{var temp__4092__auto___23935 = cljs.core.seq(seq__23918_23924);if(temp__4092__auto___23935)
{var seq__23918_23936__$1 = temp__4092__auto___23935;if(cljs.core.chunked_seq_QMARK_(seq__23918_23936__$1))
{var c__4148__auto___23937 = cljs.core.chunk_first(seq__23918_23936__$1);{
var G__23938 = cljs.core.chunk_rest(seq__23918_23936__$1);
var G__23939 = c__4148__auto___23937;
var G__23940 = cljs.core.count(c__4148__auto___23937);
var G__23941 = 0;
seq__23918_23924 = G__23938;
chunk__23919_23925 = G__23939;
count__23920_23926 = G__23940;
i__23921_23927 = G__23941;
continue;
}
} else
{var vec__23923_23942 = cljs.core.first(seq__23918_23936__$1);var k_23943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23923_23942,0,null);var v_23944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23923_23942,1,null);(evt[k_23943] = v_23944);
{
var G__23945 = cljs.core.next(seq__23918_23936__$1);
var G__23946 = null;
var G__23947 = 0;
var G__23948 = 0;
seq__23918_23924 = G__23945;
chunk__23919_23925 = G__23946;
count__23920_23926 = G__23947;
i__23921_23927 = G__23948;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__23949_SHARP_){return goog.events.getListeners(p1__23949_SHARP_,type__$1,false);
}),domina.nodes(content));
});
