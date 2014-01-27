// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj25911 = {};return obj25911;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t25915 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25915 = (function (evt,f,create_listener_function,meta25916){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25916 = meta25916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25915.cljs$lang$type = true;
domina.events.t25915.cljs$lang$ctorStr = "domina.events/t25915";
domina.events.t25915.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25915");
});
domina.events.t25915.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25915.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25915.prototype.domina$events$Event$ = true;
domina.events.t25915.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25915.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25915.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25915.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25915.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25915.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25917){var self__ = this;
var _25917__$1 = this;return self__.meta25916;
});
domina.events.t25915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25917,meta25916__$1){var self__ = this;
var _25917__$1 = this;return (new domina.events.t25915(self__.evt,self__.f,self__.create_listener_function,meta25916__$1));
});
domina.events.__GT_t25915 = (function __GT_t25915(evt__$1,f__$1,create_listener_function__$1,meta25916){return (new domina.events.t25915(evt__$1,f__$1,create_listener_function__$1,meta25916));
});
}
return (new domina.events.t25915(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t25915 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25915 = (function (evt,f,create_listener_function,meta25916){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25916 = meta25916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25915.cljs$lang$type = true;
domina.events.t25915.cljs$lang$ctorStr = "domina.events/t25915";
domina.events.t25915.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25915");
});
domina.events.t25915.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25915.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25915.prototype.domina$events$Event$ = true;
domina.events.t25915.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25915.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25915.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25915.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25915.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25915.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25917){var self__ = this;
var _25917__$1 = this;return self__.meta25916;
});
domina.events.t25915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25917,meta25916__$1){var self__ = this;
var _25917__$1 = this;return (new domina.events.t25915(self__.evt,self__.f,self__.create_listener_function,meta25916__$1));
});
domina.events.__GT_t25915 = (function __GT_t25915(evt__$1,f__$1,create_listener_function__$1,meta25916){return (new domina.events.t25915(evt__$1,f__$1,create_listener_function__$1,meta25916));
});
}
return (new domina.events.t25915(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__25922(s__25923){return (new cljs.core.LazySeq(null,(function (){var s__25923__$1 = s__25923;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25923__$1);if(temp__4092__auto__)
{var s__25923__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25923__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25923__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25925 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25924 = 0;while(true){
if((i__25924 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25924);cljs.core.chunk_append(b__25925,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__25926 = (i__25924 + 1);
i__25924 = G__25926;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25925),iter__25922(cljs.core.chunk_rest(s__25923__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25925),null);
}
} else
{var node = cljs.core.first(s__25923__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__25922(cljs.core.rest(s__25923__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__25935 = cljs.core.seq(domina.nodes(content));var chunk__25936 = null;var count__25937 = 0;var i__25938 = 0;while(true){
if((i__25938 < count__25937))
{var node = chunk__25936.cljs$core$IIndexed$_nth$arity$2(null,i__25938);goog.events.removeAll(node);
{
var G__25943 = seq__25935;
var G__25944 = chunk__25936;
var G__25945 = count__25937;
var G__25946 = (i__25938 + 1);
seq__25935 = G__25943;
chunk__25936 = G__25944;
count__25937 = G__25945;
i__25938 = G__25946;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25935);if(temp__4092__auto__)
{var seq__25935__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25935__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25935__$1);{
var G__25947 = cljs.core.chunk_rest(seq__25935__$1);
var G__25948 = c__4148__auto__;
var G__25949 = cljs.core.count(c__4148__auto__);
var G__25950 = 0;
seq__25935 = G__25947;
chunk__25936 = G__25948;
count__25937 = G__25949;
i__25938 = G__25950;
continue;
}
} else
{var node = cljs.core.first(seq__25935__$1);goog.events.removeAll(node);
{
var G__25951 = cljs.core.next(seq__25935__$1);
var G__25952 = null;
var G__25953 = 0;
var G__25954 = 0;
seq__25935 = G__25951;
chunk__25936 = G__25952;
count__25937 = G__25953;
i__25938 = G__25954;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__25939 = cljs.core.seq(domina.nodes(content));var chunk__25940 = null;var count__25941 = 0;var i__25942 = 0;while(true){
if((i__25942 < count__25941))
{var node = chunk__25940.cljs$core$IIndexed$_nth$arity$2(null,i__25942);goog.events.removeAll(node,type__$1);
{
var G__25955 = seq__25939;
var G__25956 = chunk__25940;
var G__25957 = count__25941;
var G__25958 = (i__25942 + 1);
seq__25939 = G__25955;
chunk__25940 = G__25956;
count__25941 = G__25957;
i__25942 = G__25958;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25939);if(temp__4092__auto__)
{var seq__25939__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25939__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25939__$1);{
var G__25959 = cljs.core.chunk_rest(seq__25939__$1);
var G__25960 = c__4148__auto__;
var G__25961 = cljs.core.count(c__4148__auto__);
var G__25962 = 0;
seq__25939 = G__25959;
chunk__25940 = G__25960;
count__25941 = G__25961;
i__25942 = G__25962;
continue;
}
} else
{var node = cljs.core.first(seq__25939__$1);goog.events.removeAll(node,type__$1);
{
var G__25963 = cljs.core.next(seq__25939__$1);
var G__25964 = null;
var G__25965 = 0;
var G__25966 = 0;
seq__25939 = G__25963;
chunk__25940 = G__25964;
count__25941 = G__25965;
i__25942 = G__25966;
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
var G__25967 = parent;
var G__25968 = cljs.core.cons(parent,so_far);
n = G__25967;
so_far = G__25968;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__25977_25985 = cljs.core.seq(ancestors);var chunk__25978_25986 = null;var count__25979_25987 = 0;var i__25980_25988 = 0;while(true){
if((i__25980_25988 < count__25979_25987))
{var n_25989 = chunk__25978_25986.cljs$core$IIndexed$_nth$arity$2(null,i__25980_25988);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25989;
goog.events.fireListeners(n_25989,evt.type,true,evt);
}
{
var G__25990 = seq__25977_25985;
var G__25991 = chunk__25978_25986;
var G__25992 = count__25979_25987;
var G__25993 = (i__25980_25988 + 1);
seq__25977_25985 = G__25990;
chunk__25978_25986 = G__25991;
count__25979_25987 = G__25992;
i__25980_25988 = G__25993;
continue;
}
} else
{var temp__4092__auto___25994 = cljs.core.seq(seq__25977_25985);if(temp__4092__auto___25994)
{var seq__25977_25995__$1 = temp__4092__auto___25994;if(cljs.core.chunked_seq_QMARK_(seq__25977_25995__$1))
{var c__4148__auto___25996 = cljs.core.chunk_first(seq__25977_25995__$1);{
var G__25997 = cljs.core.chunk_rest(seq__25977_25995__$1);
var G__25998 = c__4148__auto___25996;
var G__25999 = cljs.core.count(c__4148__auto___25996);
var G__26000 = 0;
seq__25977_25985 = G__25997;
chunk__25978_25986 = G__25998;
count__25979_25987 = G__25999;
i__25980_25988 = G__26000;
continue;
}
} else
{var n_26001 = cljs.core.first(seq__25977_25995__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26001;
goog.events.fireListeners(n_26001,evt.type,true,evt);
}
{
var G__26002 = cljs.core.next(seq__25977_25995__$1);
var G__26003 = null;
var G__26004 = 0;
var G__26005 = 0;
seq__25977_25985 = G__26002;
chunk__25978_25986 = G__26003;
count__25979_25987 = G__26004;
i__25980_25988 = G__26005;
continue;
}
}
} else
{}
}
break;
}
var seq__25981_26006 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__25982_26007 = null;var count__25983_26008 = 0;var i__25984_26009 = 0;while(true){
if((i__25984_26009 < count__25983_26008))
{var n_26010 = chunk__25982_26007.cljs$core$IIndexed$_nth$arity$2(null,i__25984_26009);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26010;
goog.events.fireListeners(n_26010,evt.type,false,evt);
}
{
var G__26011 = seq__25981_26006;
var G__26012 = chunk__25982_26007;
var G__26013 = count__25983_26008;
var G__26014 = (i__25984_26009 + 1);
seq__25981_26006 = G__26011;
chunk__25982_26007 = G__26012;
count__25983_26008 = G__26013;
i__25984_26009 = G__26014;
continue;
}
} else
{var temp__4092__auto___26015 = cljs.core.seq(seq__25981_26006);if(temp__4092__auto___26015)
{var seq__25981_26016__$1 = temp__4092__auto___26015;if(cljs.core.chunked_seq_QMARK_(seq__25981_26016__$1))
{var c__4148__auto___26017 = cljs.core.chunk_first(seq__25981_26016__$1);{
var G__26018 = cljs.core.chunk_rest(seq__25981_26016__$1);
var G__26019 = c__4148__auto___26017;
var G__26020 = cljs.core.count(c__4148__auto___26017);
var G__26021 = 0;
seq__25981_26006 = G__26018;
chunk__25982_26007 = G__26019;
count__25983_26008 = G__26020;
i__25984_26009 = G__26021;
continue;
}
} else
{var n_26022 = cljs.core.first(seq__25981_26016__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26022;
goog.events.fireListeners(n_26022,evt.type,false,evt);
}
{
var G__26023 = cljs.core.next(seq__25981_26016__$1);
var G__26024 = null;
var G__26025 = 0;
var G__26026 = 0;
seq__25981_26006 = G__26023;
chunk__25982_26007 = G__26024;
count__25983_26008 = G__26025;
i__25984_26009 = G__26026;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26033_26039 = cljs.core.seq(evt_map);var chunk__26034_26040 = null;var count__26035_26041 = 0;var i__26036_26042 = 0;while(true){
if((i__26036_26042 < count__26035_26041))
{var vec__26037_26043 = chunk__26034_26040.cljs$core$IIndexed$_nth$arity$2(null,i__26036_26042);var k_26044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26037_26043,0,null);var v_26045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26037_26043,1,null);(evt[k_26044] = v_26045);
{
var G__26046 = seq__26033_26039;
var G__26047 = chunk__26034_26040;
var G__26048 = count__26035_26041;
var G__26049 = (i__26036_26042 + 1);
seq__26033_26039 = G__26046;
chunk__26034_26040 = G__26047;
count__26035_26041 = G__26048;
i__26036_26042 = G__26049;
continue;
}
} else
{var temp__4092__auto___26050 = cljs.core.seq(seq__26033_26039);if(temp__4092__auto___26050)
{var seq__26033_26051__$1 = temp__4092__auto___26050;if(cljs.core.chunked_seq_QMARK_(seq__26033_26051__$1))
{var c__4148__auto___26052 = cljs.core.chunk_first(seq__26033_26051__$1);{
var G__26053 = cljs.core.chunk_rest(seq__26033_26051__$1);
var G__26054 = c__4148__auto___26052;
var G__26055 = cljs.core.count(c__4148__auto___26052);
var G__26056 = 0;
seq__26033_26039 = G__26053;
chunk__26034_26040 = G__26054;
count__26035_26041 = G__26055;
i__26036_26042 = G__26056;
continue;
}
} else
{var vec__26038_26057 = cljs.core.first(seq__26033_26051__$1);var k_26058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038_26057,0,null);var v_26059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26038_26057,1,null);(evt[k_26058] = v_26059);
{
var G__26060 = cljs.core.next(seq__26033_26051__$1);
var G__26061 = null;
var G__26062 = 0;
var G__26063 = 0;
seq__26033_26039 = G__26060;
chunk__26034_26040 = G__26061;
count__26035_26041 = G__26062;
i__26036_26042 = G__26063;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26064_SHARP_){return goog.events.getListeners(p1__26064_SHARP_,type__$1,false);
}),domina.nodes(content));
});
