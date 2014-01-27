// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj25897 = {};return obj25897;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t25901 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25901 = (function (evt,f,create_listener_function,meta25902){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25902 = meta25902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25901.cljs$lang$type = true;
domina.events.t25901.cljs$lang$ctorStr = "domina.events/t25901";
domina.events.t25901.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25901");
});
domina.events.t25901.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25901.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25901.prototype.domina$events$Event$ = true;
domina.events.t25901.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25901.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25901.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25901.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25901.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25901.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25903){var self__ = this;
var _25903__$1 = this;return self__.meta25902;
});
domina.events.t25901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25903,meta25902__$1){var self__ = this;
var _25903__$1 = this;return (new domina.events.t25901(self__.evt,self__.f,self__.create_listener_function,meta25902__$1));
});
domina.events.__GT_t25901 = (function __GT_t25901(evt__$1,f__$1,create_listener_function__$1,meta25902){return (new domina.events.t25901(evt__$1,f__$1,create_listener_function__$1,meta25902));
});
}
return (new domina.events.t25901(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t25901 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25901 = (function (evt,f,create_listener_function,meta25902){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25902 = meta25902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25901.cljs$lang$type = true;
domina.events.t25901.cljs$lang$ctorStr = "domina.events/t25901";
domina.events.t25901.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25901");
});
domina.events.t25901.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25901.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25901.prototype.domina$events$Event$ = true;
domina.events.t25901.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25901.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25901.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25901.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25901.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25901.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25903){var self__ = this;
var _25903__$1 = this;return self__.meta25902;
});
domina.events.t25901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25903,meta25902__$1){var self__ = this;
var _25903__$1 = this;return (new domina.events.t25901(self__.evt,self__.f,self__.create_listener_function,meta25902__$1));
});
domina.events.__GT_t25901 = (function __GT_t25901(evt__$1,f__$1,create_listener_function__$1,meta25902){return (new domina.events.t25901(evt__$1,f__$1,create_listener_function__$1,meta25902));
});
}
return (new domina.events.t25901(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__25908(s__25909){return (new cljs.core.LazySeq(null,(function (){var s__25909__$1 = s__25909;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25909__$1);if(temp__4092__auto__)
{var s__25909__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25909__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25909__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25911 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25910 = 0;while(true){
if((i__25910 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25910);cljs.core.chunk_append(b__25911,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__25912 = (i__25910 + 1);
i__25910 = G__25912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25911),iter__25908(cljs.core.chunk_rest(s__25909__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25911),null);
}
} else
{var node = cljs.core.first(s__25909__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__25908(cljs.core.rest(s__25909__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__25921 = cljs.core.seq(domina.nodes(content));var chunk__25922 = null;var count__25923 = 0;var i__25924 = 0;while(true){
if((i__25924 < count__25923))
{var node = chunk__25922.cljs$core$IIndexed$_nth$arity$2(null,i__25924);goog.events.removeAll(node);
{
var G__25929 = seq__25921;
var G__25930 = chunk__25922;
var G__25931 = count__25923;
var G__25932 = (i__25924 + 1);
seq__25921 = G__25929;
chunk__25922 = G__25930;
count__25923 = G__25931;
i__25924 = G__25932;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25921);if(temp__4092__auto__)
{var seq__25921__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25921__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25921__$1);{
var G__25933 = cljs.core.chunk_rest(seq__25921__$1);
var G__25934 = c__4148__auto__;
var G__25935 = cljs.core.count(c__4148__auto__);
var G__25936 = 0;
seq__25921 = G__25933;
chunk__25922 = G__25934;
count__25923 = G__25935;
i__25924 = G__25936;
continue;
}
} else
{var node = cljs.core.first(seq__25921__$1);goog.events.removeAll(node);
{
var G__25937 = cljs.core.next(seq__25921__$1);
var G__25938 = null;
var G__25939 = 0;
var G__25940 = 0;
seq__25921 = G__25937;
chunk__25922 = G__25938;
count__25923 = G__25939;
i__25924 = G__25940;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__25925 = cljs.core.seq(domina.nodes(content));var chunk__25926 = null;var count__25927 = 0;var i__25928 = 0;while(true){
if((i__25928 < count__25927))
{var node = chunk__25926.cljs$core$IIndexed$_nth$arity$2(null,i__25928);goog.events.removeAll(node,type__$1);
{
var G__25941 = seq__25925;
var G__25942 = chunk__25926;
var G__25943 = count__25927;
var G__25944 = (i__25928 + 1);
seq__25925 = G__25941;
chunk__25926 = G__25942;
count__25927 = G__25943;
i__25928 = G__25944;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25925);if(temp__4092__auto__)
{var seq__25925__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25925__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25925__$1);{
var G__25945 = cljs.core.chunk_rest(seq__25925__$1);
var G__25946 = c__4148__auto__;
var G__25947 = cljs.core.count(c__4148__auto__);
var G__25948 = 0;
seq__25925 = G__25945;
chunk__25926 = G__25946;
count__25927 = G__25947;
i__25928 = G__25948;
continue;
}
} else
{var node = cljs.core.first(seq__25925__$1);goog.events.removeAll(node,type__$1);
{
var G__25949 = cljs.core.next(seq__25925__$1);
var G__25950 = null;
var G__25951 = 0;
var G__25952 = 0;
seq__25925 = G__25949;
chunk__25926 = G__25950;
count__25927 = G__25951;
i__25928 = G__25952;
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
var G__25953 = parent;
var G__25954 = cljs.core.cons(parent,so_far);
n = G__25953;
so_far = G__25954;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__25963_25971 = cljs.core.seq(ancestors);var chunk__25964_25972 = null;var count__25965_25973 = 0;var i__25966_25974 = 0;while(true){
if((i__25966_25974 < count__25965_25973))
{var n_25975 = chunk__25964_25972.cljs$core$IIndexed$_nth$arity$2(null,i__25966_25974);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25975;
goog.events.fireListeners(n_25975,evt.type,true,evt);
}
{
var G__25976 = seq__25963_25971;
var G__25977 = chunk__25964_25972;
var G__25978 = count__25965_25973;
var G__25979 = (i__25966_25974 + 1);
seq__25963_25971 = G__25976;
chunk__25964_25972 = G__25977;
count__25965_25973 = G__25978;
i__25966_25974 = G__25979;
continue;
}
} else
{var temp__4092__auto___25980 = cljs.core.seq(seq__25963_25971);if(temp__4092__auto___25980)
{var seq__25963_25981__$1 = temp__4092__auto___25980;if(cljs.core.chunked_seq_QMARK_(seq__25963_25981__$1))
{var c__4148__auto___25982 = cljs.core.chunk_first(seq__25963_25981__$1);{
var G__25983 = cljs.core.chunk_rest(seq__25963_25981__$1);
var G__25984 = c__4148__auto___25982;
var G__25985 = cljs.core.count(c__4148__auto___25982);
var G__25986 = 0;
seq__25963_25971 = G__25983;
chunk__25964_25972 = G__25984;
count__25965_25973 = G__25985;
i__25966_25974 = G__25986;
continue;
}
} else
{var n_25987 = cljs.core.first(seq__25963_25981__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25987;
goog.events.fireListeners(n_25987,evt.type,true,evt);
}
{
var G__25988 = cljs.core.next(seq__25963_25981__$1);
var G__25989 = null;
var G__25990 = 0;
var G__25991 = 0;
seq__25963_25971 = G__25988;
chunk__25964_25972 = G__25989;
count__25965_25973 = G__25990;
i__25966_25974 = G__25991;
continue;
}
}
} else
{}
}
break;
}
var seq__25967_25992 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__25968_25993 = null;var count__25969_25994 = 0;var i__25970_25995 = 0;while(true){
if((i__25970_25995 < count__25969_25994))
{var n_25996 = chunk__25968_25993.cljs$core$IIndexed$_nth$arity$2(null,i__25970_25995);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25996;
goog.events.fireListeners(n_25996,evt.type,false,evt);
}
{
var G__25997 = seq__25967_25992;
var G__25998 = chunk__25968_25993;
var G__25999 = count__25969_25994;
var G__26000 = (i__25970_25995 + 1);
seq__25967_25992 = G__25997;
chunk__25968_25993 = G__25998;
count__25969_25994 = G__25999;
i__25970_25995 = G__26000;
continue;
}
} else
{var temp__4092__auto___26001 = cljs.core.seq(seq__25967_25992);if(temp__4092__auto___26001)
{var seq__25967_26002__$1 = temp__4092__auto___26001;if(cljs.core.chunked_seq_QMARK_(seq__25967_26002__$1))
{var c__4148__auto___26003 = cljs.core.chunk_first(seq__25967_26002__$1);{
var G__26004 = cljs.core.chunk_rest(seq__25967_26002__$1);
var G__26005 = c__4148__auto___26003;
var G__26006 = cljs.core.count(c__4148__auto___26003);
var G__26007 = 0;
seq__25967_25992 = G__26004;
chunk__25968_25993 = G__26005;
count__25969_25994 = G__26006;
i__25970_25995 = G__26007;
continue;
}
} else
{var n_26008 = cljs.core.first(seq__25967_26002__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26008;
goog.events.fireListeners(n_26008,evt.type,false,evt);
}
{
var G__26009 = cljs.core.next(seq__25967_26002__$1);
var G__26010 = null;
var G__26011 = 0;
var G__26012 = 0;
seq__25967_25992 = G__26009;
chunk__25968_25993 = G__26010;
count__25969_25994 = G__26011;
i__25970_25995 = G__26012;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26019_26025 = cljs.core.seq(evt_map);var chunk__26020_26026 = null;var count__26021_26027 = 0;var i__26022_26028 = 0;while(true){
if((i__26022_26028 < count__26021_26027))
{var vec__26023_26029 = chunk__26020_26026.cljs$core$IIndexed$_nth$arity$2(null,i__26022_26028);var k_26030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26023_26029,0,null);var v_26031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26023_26029,1,null);(evt[k_26030] = v_26031);
{
var G__26032 = seq__26019_26025;
var G__26033 = chunk__26020_26026;
var G__26034 = count__26021_26027;
var G__26035 = (i__26022_26028 + 1);
seq__26019_26025 = G__26032;
chunk__26020_26026 = G__26033;
count__26021_26027 = G__26034;
i__26022_26028 = G__26035;
continue;
}
} else
{var temp__4092__auto___26036 = cljs.core.seq(seq__26019_26025);if(temp__4092__auto___26036)
{var seq__26019_26037__$1 = temp__4092__auto___26036;if(cljs.core.chunked_seq_QMARK_(seq__26019_26037__$1))
{var c__4148__auto___26038 = cljs.core.chunk_first(seq__26019_26037__$1);{
var G__26039 = cljs.core.chunk_rest(seq__26019_26037__$1);
var G__26040 = c__4148__auto___26038;
var G__26041 = cljs.core.count(c__4148__auto___26038);
var G__26042 = 0;
seq__26019_26025 = G__26039;
chunk__26020_26026 = G__26040;
count__26021_26027 = G__26041;
i__26022_26028 = G__26042;
continue;
}
} else
{var vec__26024_26043 = cljs.core.first(seq__26019_26037__$1);var k_26044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26024_26043,0,null);var v_26045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26024_26043,1,null);(evt[k_26044] = v_26045);
{
var G__26046 = cljs.core.next(seq__26019_26037__$1);
var G__26047 = null;
var G__26048 = 0;
var G__26049 = 0;
seq__26019_26025 = G__26046;
chunk__26020_26026 = G__26047;
count__26021_26027 = G__26048;
i__26022_26028 = G__26049;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26050_SHARP_){return goog.events.getListeners(p1__26050_SHARP_,type__$1,false);
}),domina.nodes(content));
});
