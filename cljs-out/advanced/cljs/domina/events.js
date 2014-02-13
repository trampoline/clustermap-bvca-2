// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26673 = {};return obj26673;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26677 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26677 = (function (evt,f,create_listener_function,meta26678){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26678 = meta26678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26677.cljs$lang$type = true;
domina.events.t26677.cljs$lang$ctorStr = "domina.events/t26677";
domina.events.t26677.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26677");
});
domina.events.t26677.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26677.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26677.prototype.domina$events$Event$ = true;
domina.events.t26677.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26677.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26677.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26677.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26677.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26677.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26679){var self__ = this;
var _26679__$1 = this;return self__.meta26678;
});
domina.events.t26677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26679,meta26678__$1){var self__ = this;
var _26679__$1 = this;return (new domina.events.t26677(self__.evt,self__.f,self__.create_listener_function,meta26678__$1));
});
domina.events.__GT_t26677 = (function __GT_t26677(evt__$1,f__$1,create_listener_function__$1,meta26678){return (new domina.events.t26677(evt__$1,f__$1,create_listener_function__$1,meta26678));
});
}
return (new domina.events.t26677(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26677 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26677 = (function (evt,f,create_listener_function,meta26678){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26678 = meta26678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26677.cljs$lang$type = true;
domina.events.t26677.cljs$lang$ctorStr = "domina.events/t26677";
domina.events.t26677.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26677");
});
domina.events.t26677.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26677.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26677.prototype.domina$events$Event$ = true;
domina.events.t26677.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26677.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26677.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26677.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26677.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26677.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26679){var self__ = this;
var _26679__$1 = this;return self__.meta26678;
});
domina.events.t26677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26679,meta26678__$1){var self__ = this;
var _26679__$1 = this;return (new domina.events.t26677(self__.evt,self__.f,self__.create_listener_function,meta26678__$1));
});
domina.events.__GT_t26677 = (function __GT_t26677(evt__$1,f__$1,create_listener_function__$1,meta26678){return (new domina.events.t26677(evt__$1,f__$1,create_listener_function__$1,meta26678));
});
}
return (new domina.events.t26677(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26684(s__26685){return (new cljs.core.LazySeq(null,(function (){var s__26685__$1 = s__26685;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26685__$1);if(temp__4092__auto__)
{var s__26685__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26685__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26685__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26687 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26686 = 0;while(true){
if((i__26686 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26686);cljs.core.chunk_append(b__26687,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26688 = (i__26686 + 1);
i__26686 = G__26688;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26687),iter__26684(cljs.core.chunk_rest(s__26685__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26687),null);
}
} else
{var node = cljs.core.first(s__26685__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26684(cljs.core.rest(s__26685__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26697 = cljs.core.seq(domina.nodes(content));var chunk__26698 = null;var count__26699 = 0;var i__26700 = 0;while(true){
if((i__26700 < count__26699))
{var node = chunk__26698.cljs$core$IIndexed$_nth$arity$2(null,i__26700);goog.events.removeAll(node);
{
var G__26705 = seq__26697;
var G__26706 = chunk__26698;
var G__26707 = count__26699;
var G__26708 = (i__26700 + 1);
seq__26697 = G__26705;
chunk__26698 = G__26706;
count__26699 = G__26707;
i__26700 = G__26708;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26697);if(temp__4092__auto__)
{var seq__26697__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26697__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26697__$1);{
var G__26709 = cljs.core.chunk_rest(seq__26697__$1);
var G__26710 = c__4148__auto__;
var G__26711 = cljs.core.count(c__4148__auto__);
var G__26712 = 0;
seq__26697 = G__26709;
chunk__26698 = G__26710;
count__26699 = G__26711;
i__26700 = G__26712;
continue;
}
} else
{var node = cljs.core.first(seq__26697__$1);goog.events.removeAll(node);
{
var G__26713 = cljs.core.next(seq__26697__$1);
var G__26714 = null;
var G__26715 = 0;
var G__26716 = 0;
seq__26697 = G__26713;
chunk__26698 = G__26714;
count__26699 = G__26715;
i__26700 = G__26716;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26701 = cljs.core.seq(domina.nodes(content));var chunk__26702 = null;var count__26703 = 0;var i__26704 = 0;while(true){
if((i__26704 < count__26703))
{var node = chunk__26702.cljs$core$IIndexed$_nth$arity$2(null,i__26704);goog.events.removeAll(node,type__$1);
{
var G__26717 = seq__26701;
var G__26718 = chunk__26702;
var G__26719 = count__26703;
var G__26720 = (i__26704 + 1);
seq__26701 = G__26717;
chunk__26702 = G__26718;
count__26703 = G__26719;
i__26704 = G__26720;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26701);if(temp__4092__auto__)
{var seq__26701__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26701__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26701__$1);{
var G__26721 = cljs.core.chunk_rest(seq__26701__$1);
var G__26722 = c__4148__auto__;
var G__26723 = cljs.core.count(c__4148__auto__);
var G__26724 = 0;
seq__26701 = G__26721;
chunk__26702 = G__26722;
count__26703 = G__26723;
i__26704 = G__26724;
continue;
}
} else
{var node = cljs.core.first(seq__26701__$1);goog.events.removeAll(node,type__$1);
{
var G__26725 = cljs.core.next(seq__26701__$1);
var G__26726 = null;
var G__26727 = 0;
var G__26728 = 0;
seq__26701 = G__26725;
chunk__26702 = G__26726;
count__26703 = G__26727;
i__26704 = G__26728;
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
var G__26729 = parent;
var G__26730 = cljs.core.cons(parent,so_far);
n = G__26729;
so_far = G__26730;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26739_26747 = cljs.core.seq(ancestors);var chunk__26740_26748 = null;var count__26741_26749 = 0;var i__26742_26750 = 0;while(true){
if((i__26742_26750 < count__26741_26749))
{var n_26751 = chunk__26740_26748.cljs$core$IIndexed$_nth$arity$2(null,i__26742_26750);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26751;
goog.events.fireListeners(n_26751,evt.type,true,evt);
}
{
var G__26752 = seq__26739_26747;
var G__26753 = chunk__26740_26748;
var G__26754 = count__26741_26749;
var G__26755 = (i__26742_26750 + 1);
seq__26739_26747 = G__26752;
chunk__26740_26748 = G__26753;
count__26741_26749 = G__26754;
i__26742_26750 = G__26755;
continue;
}
} else
{var temp__4092__auto___26756 = cljs.core.seq(seq__26739_26747);if(temp__4092__auto___26756)
{var seq__26739_26757__$1 = temp__4092__auto___26756;if(cljs.core.chunked_seq_QMARK_(seq__26739_26757__$1))
{var c__4148__auto___26758 = cljs.core.chunk_first(seq__26739_26757__$1);{
var G__26759 = cljs.core.chunk_rest(seq__26739_26757__$1);
var G__26760 = c__4148__auto___26758;
var G__26761 = cljs.core.count(c__4148__auto___26758);
var G__26762 = 0;
seq__26739_26747 = G__26759;
chunk__26740_26748 = G__26760;
count__26741_26749 = G__26761;
i__26742_26750 = G__26762;
continue;
}
} else
{var n_26763 = cljs.core.first(seq__26739_26757__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26763;
goog.events.fireListeners(n_26763,evt.type,true,evt);
}
{
var G__26764 = cljs.core.next(seq__26739_26757__$1);
var G__26765 = null;
var G__26766 = 0;
var G__26767 = 0;
seq__26739_26747 = G__26764;
chunk__26740_26748 = G__26765;
count__26741_26749 = G__26766;
i__26742_26750 = G__26767;
continue;
}
}
} else
{}
}
break;
}
var seq__26743_26768 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26744_26769 = null;var count__26745_26770 = 0;var i__26746_26771 = 0;while(true){
if((i__26746_26771 < count__26745_26770))
{var n_26772 = chunk__26744_26769.cljs$core$IIndexed$_nth$arity$2(null,i__26746_26771);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26772;
goog.events.fireListeners(n_26772,evt.type,false,evt);
}
{
var G__26773 = seq__26743_26768;
var G__26774 = chunk__26744_26769;
var G__26775 = count__26745_26770;
var G__26776 = (i__26746_26771 + 1);
seq__26743_26768 = G__26773;
chunk__26744_26769 = G__26774;
count__26745_26770 = G__26775;
i__26746_26771 = G__26776;
continue;
}
} else
{var temp__4092__auto___26777 = cljs.core.seq(seq__26743_26768);if(temp__4092__auto___26777)
{var seq__26743_26778__$1 = temp__4092__auto___26777;if(cljs.core.chunked_seq_QMARK_(seq__26743_26778__$1))
{var c__4148__auto___26779 = cljs.core.chunk_first(seq__26743_26778__$1);{
var G__26780 = cljs.core.chunk_rest(seq__26743_26778__$1);
var G__26781 = c__4148__auto___26779;
var G__26782 = cljs.core.count(c__4148__auto___26779);
var G__26783 = 0;
seq__26743_26768 = G__26780;
chunk__26744_26769 = G__26781;
count__26745_26770 = G__26782;
i__26746_26771 = G__26783;
continue;
}
} else
{var n_26784 = cljs.core.first(seq__26743_26778__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26784;
goog.events.fireListeners(n_26784,evt.type,false,evt);
}
{
var G__26785 = cljs.core.next(seq__26743_26778__$1);
var G__26786 = null;
var G__26787 = 0;
var G__26788 = 0;
seq__26743_26768 = G__26785;
chunk__26744_26769 = G__26786;
count__26745_26770 = G__26787;
i__26746_26771 = G__26788;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26795_26801 = cljs.core.seq(evt_map);var chunk__26796_26802 = null;var count__26797_26803 = 0;var i__26798_26804 = 0;while(true){
if((i__26798_26804 < count__26797_26803))
{var vec__26799_26805 = chunk__26796_26802.cljs$core$IIndexed$_nth$arity$2(null,i__26798_26804);var k_26806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799_26805,0,null);var v_26807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26799_26805,1,null);(evt[k_26806] = v_26807);
{
var G__26808 = seq__26795_26801;
var G__26809 = chunk__26796_26802;
var G__26810 = count__26797_26803;
var G__26811 = (i__26798_26804 + 1);
seq__26795_26801 = G__26808;
chunk__26796_26802 = G__26809;
count__26797_26803 = G__26810;
i__26798_26804 = G__26811;
continue;
}
} else
{var temp__4092__auto___26812 = cljs.core.seq(seq__26795_26801);if(temp__4092__auto___26812)
{var seq__26795_26813__$1 = temp__4092__auto___26812;if(cljs.core.chunked_seq_QMARK_(seq__26795_26813__$1))
{var c__4148__auto___26814 = cljs.core.chunk_first(seq__26795_26813__$1);{
var G__26815 = cljs.core.chunk_rest(seq__26795_26813__$1);
var G__26816 = c__4148__auto___26814;
var G__26817 = cljs.core.count(c__4148__auto___26814);
var G__26818 = 0;
seq__26795_26801 = G__26815;
chunk__26796_26802 = G__26816;
count__26797_26803 = G__26817;
i__26798_26804 = G__26818;
continue;
}
} else
{var vec__26800_26819 = cljs.core.first(seq__26795_26813__$1);var k_26820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26800_26819,0,null);var v_26821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26800_26819,1,null);(evt[k_26820] = v_26821);
{
var G__26822 = cljs.core.next(seq__26795_26813__$1);
var G__26823 = null;
var G__26824 = 0;
var G__26825 = 0;
seq__26795_26801 = G__26822;
chunk__26796_26802 = G__26823;
count__26797_26803 = G__26824;
i__26798_26804 = G__26825;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26826_SHARP_){return goog.events.getListeners(p1__26826_SHARP_,type__$1,false);
}),domina.nodes(content));
});
