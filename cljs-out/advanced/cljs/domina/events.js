// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26801 = {};return obj26801;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26805 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26805 = (function (evt,f,create_listener_function,meta26806){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26806 = meta26806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26805.cljs$lang$type = true;
domina.events.t26805.cljs$lang$ctorStr = "domina.events/t26805";
domina.events.t26805.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26805");
});
domina.events.t26805.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26805.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26805.prototype.domina$events$Event$ = true;
domina.events.t26805.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26805.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26805.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26805.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26805.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26805.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26807){var self__ = this;
var _26807__$1 = this;return self__.meta26806;
});
domina.events.t26805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26807,meta26806__$1){var self__ = this;
var _26807__$1 = this;return (new domina.events.t26805(self__.evt,self__.f,self__.create_listener_function,meta26806__$1));
});
domina.events.__GT_t26805 = (function __GT_t26805(evt__$1,f__$1,create_listener_function__$1,meta26806){return (new domina.events.t26805(evt__$1,f__$1,create_listener_function__$1,meta26806));
});
}
return (new domina.events.t26805(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26805 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26805 = (function (evt,f,create_listener_function,meta26806){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26806 = meta26806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26805.cljs$lang$type = true;
domina.events.t26805.cljs$lang$ctorStr = "domina.events/t26805";
domina.events.t26805.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26805");
});
domina.events.t26805.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26805.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26805.prototype.domina$events$Event$ = true;
domina.events.t26805.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26805.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26805.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26805.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26805.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26805.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26807){var self__ = this;
var _26807__$1 = this;return self__.meta26806;
});
domina.events.t26805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26807,meta26806__$1){var self__ = this;
var _26807__$1 = this;return (new domina.events.t26805(self__.evt,self__.f,self__.create_listener_function,meta26806__$1));
});
domina.events.__GT_t26805 = (function __GT_t26805(evt__$1,f__$1,create_listener_function__$1,meta26806){return (new domina.events.t26805(evt__$1,f__$1,create_listener_function__$1,meta26806));
});
}
return (new domina.events.t26805(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26812(s__26813){return (new cljs.core.LazySeq(null,(function (){var s__26813__$1 = s__26813;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26813__$1);if(temp__4092__auto__)
{var s__26813__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26813__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26813__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26815 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26814 = 0;while(true){
if((i__26814 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26814);cljs.core.chunk_append(b__26815,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26816 = (i__26814 + 1);
i__26814 = G__26816;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26815),iter__26812(cljs.core.chunk_rest(s__26813__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26815),null);
}
} else
{var node = cljs.core.first(s__26813__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26812(cljs.core.rest(s__26813__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26825 = cljs.core.seq(domina.nodes(content));var chunk__26826 = null;var count__26827 = 0;var i__26828 = 0;while(true){
if((i__26828 < count__26827))
{var node = chunk__26826.cljs$core$IIndexed$_nth$arity$2(null,i__26828);goog.events.removeAll(node);
{
var G__26833 = seq__26825;
var G__26834 = chunk__26826;
var G__26835 = count__26827;
var G__26836 = (i__26828 + 1);
seq__26825 = G__26833;
chunk__26826 = G__26834;
count__26827 = G__26835;
i__26828 = G__26836;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26825);if(temp__4092__auto__)
{var seq__26825__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26825__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26825__$1);{
var G__26837 = cljs.core.chunk_rest(seq__26825__$1);
var G__26838 = c__4148__auto__;
var G__26839 = cljs.core.count(c__4148__auto__);
var G__26840 = 0;
seq__26825 = G__26837;
chunk__26826 = G__26838;
count__26827 = G__26839;
i__26828 = G__26840;
continue;
}
} else
{var node = cljs.core.first(seq__26825__$1);goog.events.removeAll(node);
{
var G__26841 = cljs.core.next(seq__26825__$1);
var G__26842 = null;
var G__26843 = 0;
var G__26844 = 0;
seq__26825 = G__26841;
chunk__26826 = G__26842;
count__26827 = G__26843;
i__26828 = G__26844;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26829 = cljs.core.seq(domina.nodes(content));var chunk__26830 = null;var count__26831 = 0;var i__26832 = 0;while(true){
if((i__26832 < count__26831))
{var node = chunk__26830.cljs$core$IIndexed$_nth$arity$2(null,i__26832);goog.events.removeAll(node,type__$1);
{
var G__26845 = seq__26829;
var G__26846 = chunk__26830;
var G__26847 = count__26831;
var G__26848 = (i__26832 + 1);
seq__26829 = G__26845;
chunk__26830 = G__26846;
count__26831 = G__26847;
i__26832 = G__26848;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26829);if(temp__4092__auto__)
{var seq__26829__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26829__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26829__$1);{
var G__26849 = cljs.core.chunk_rest(seq__26829__$1);
var G__26850 = c__4148__auto__;
var G__26851 = cljs.core.count(c__4148__auto__);
var G__26852 = 0;
seq__26829 = G__26849;
chunk__26830 = G__26850;
count__26831 = G__26851;
i__26832 = G__26852;
continue;
}
} else
{var node = cljs.core.first(seq__26829__$1);goog.events.removeAll(node,type__$1);
{
var G__26853 = cljs.core.next(seq__26829__$1);
var G__26854 = null;
var G__26855 = 0;
var G__26856 = 0;
seq__26829 = G__26853;
chunk__26830 = G__26854;
count__26831 = G__26855;
i__26832 = G__26856;
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
var G__26857 = parent;
var G__26858 = cljs.core.cons(parent,so_far);
n = G__26857;
so_far = G__26858;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26867_26875 = cljs.core.seq(ancestors);var chunk__26868_26876 = null;var count__26869_26877 = 0;var i__26870_26878 = 0;while(true){
if((i__26870_26878 < count__26869_26877))
{var n_26879 = chunk__26868_26876.cljs$core$IIndexed$_nth$arity$2(null,i__26870_26878);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26879;
goog.events.fireListeners(n_26879,evt.type,true,evt);
}
{
var G__26880 = seq__26867_26875;
var G__26881 = chunk__26868_26876;
var G__26882 = count__26869_26877;
var G__26883 = (i__26870_26878 + 1);
seq__26867_26875 = G__26880;
chunk__26868_26876 = G__26881;
count__26869_26877 = G__26882;
i__26870_26878 = G__26883;
continue;
}
} else
{var temp__4092__auto___26884 = cljs.core.seq(seq__26867_26875);if(temp__4092__auto___26884)
{var seq__26867_26885__$1 = temp__4092__auto___26884;if(cljs.core.chunked_seq_QMARK_(seq__26867_26885__$1))
{var c__4148__auto___26886 = cljs.core.chunk_first(seq__26867_26885__$1);{
var G__26887 = cljs.core.chunk_rest(seq__26867_26885__$1);
var G__26888 = c__4148__auto___26886;
var G__26889 = cljs.core.count(c__4148__auto___26886);
var G__26890 = 0;
seq__26867_26875 = G__26887;
chunk__26868_26876 = G__26888;
count__26869_26877 = G__26889;
i__26870_26878 = G__26890;
continue;
}
} else
{var n_26891 = cljs.core.first(seq__26867_26885__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26891;
goog.events.fireListeners(n_26891,evt.type,true,evt);
}
{
var G__26892 = cljs.core.next(seq__26867_26885__$1);
var G__26893 = null;
var G__26894 = 0;
var G__26895 = 0;
seq__26867_26875 = G__26892;
chunk__26868_26876 = G__26893;
count__26869_26877 = G__26894;
i__26870_26878 = G__26895;
continue;
}
}
} else
{}
}
break;
}
var seq__26871_26896 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26872_26897 = null;var count__26873_26898 = 0;var i__26874_26899 = 0;while(true){
if((i__26874_26899 < count__26873_26898))
{var n_26900 = chunk__26872_26897.cljs$core$IIndexed$_nth$arity$2(null,i__26874_26899);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26900;
goog.events.fireListeners(n_26900,evt.type,false,evt);
}
{
var G__26901 = seq__26871_26896;
var G__26902 = chunk__26872_26897;
var G__26903 = count__26873_26898;
var G__26904 = (i__26874_26899 + 1);
seq__26871_26896 = G__26901;
chunk__26872_26897 = G__26902;
count__26873_26898 = G__26903;
i__26874_26899 = G__26904;
continue;
}
} else
{var temp__4092__auto___26905 = cljs.core.seq(seq__26871_26896);if(temp__4092__auto___26905)
{var seq__26871_26906__$1 = temp__4092__auto___26905;if(cljs.core.chunked_seq_QMARK_(seq__26871_26906__$1))
{var c__4148__auto___26907 = cljs.core.chunk_first(seq__26871_26906__$1);{
var G__26908 = cljs.core.chunk_rest(seq__26871_26906__$1);
var G__26909 = c__4148__auto___26907;
var G__26910 = cljs.core.count(c__4148__auto___26907);
var G__26911 = 0;
seq__26871_26896 = G__26908;
chunk__26872_26897 = G__26909;
count__26873_26898 = G__26910;
i__26874_26899 = G__26911;
continue;
}
} else
{var n_26912 = cljs.core.first(seq__26871_26906__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26912;
goog.events.fireListeners(n_26912,evt.type,false,evt);
}
{
var G__26913 = cljs.core.next(seq__26871_26906__$1);
var G__26914 = null;
var G__26915 = 0;
var G__26916 = 0;
seq__26871_26896 = G__26913;
chunk__26872_26897 = G__26914;
count__26873_26898 = G__26915;
i__26874_26899 = G__26916;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26923_26929 = cljs.core.seq(evt_map);var chunk__26924_26930 = null;var count__26925_26931 = 0;var i__26926_26932 = 0;while(true){
if((i__26926_26932 < count__26925_26931))
{var vec__26927_26933 = chunk__26924_26930.cljs$core$IIndexed$_nth$arity$2(null,i__26926_26932);var k_26934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26927_26933,0,null);var v_26935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26927_26933,1,null);(evt[k_26934] = v_26935);
{
var G__26936 = seq__26923_26929;
var G__26937 = chunk__26924_26930;
var G__26938 = count__26925_26931;
var G__26939 = (i__26926_26932 + 1);
seq__26923_26929 = G__26936;
chunk__26924_26930 = G__26937;
count__26925_26931 = G__26938;
i__26926_26932 = G__26939;
continue;
}
} else
{var temp__4092__auto___26940 = cljs.core.seq(seq__26923_26929);if(temp__4092__auto___26940)
{var seq__26923_26941__$1 = temp__4092__auto___26940;if(cljs.core.chunked_seq_QMARK_(seq__26923_26941__$1))
{var c__4148__auto___26942 = cljs.core.chunk_first(seq__26923_26941__$1);{
var G__26943 = cljs.core.chunk_rest(seq__26923_26941__$1);
var G__26944 = c__4148__auto___26942;
var G__26945 = cljs.core.count(c__4148__auto___26942);
var G__26946 = 0;
seq__26923_26929 = G__26943;
chunk__26924_26930 = G__26944;
count__26925_26931 = G__26945;
i__26926_26932 = G__26946;
continue;
}
} else
{var vec__26928_26947 = cljs.core.first(seq__26923_26941__$1);var k_26948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26928_26947,0,null);var v_26949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26928_26947,1,null);(evt[k_26948] = v_26949);
{
var G__26950 = cljs.core.next(seq__26923_26941__$1);
var G__26951 = null;
var G__26952 = 0;
var G__26953 = 0;
seq__26923_26929 = G__26950;
chunk__26924_26930 = G__26951;
count__26925_26931 = G__26952;
i__26926_26932 = G__26953;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26954_SHARP_){return goog.events.getListeners(p1__26954_SHARP_,type__$1,false);
}),domina.nodes(content));
});
