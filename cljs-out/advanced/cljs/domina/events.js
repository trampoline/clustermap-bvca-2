// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj26163 = {};return obj26163;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t26167 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26167 = (function (evt,f,create_listener_function,meta26168){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26168 = meta26168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26167.cljs$lang$type = true;
domina.events.t26167.cljs$lang$ctorStr = "domina.events/t26167";
domina.events.t26167.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26167");
});
domina.events.t26167.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26167.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26167.prototype.domina$events$Event$ = true;
domina.events.t26167.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26167.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26167.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26167.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26167.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26167.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26169){var self__ = this;
var _26169__$1 = this;return self__.meta26168;
});
domina.events.t26167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26169,meta26168__$1){var self__ = this;
var _26169__$1 = this;return (new domina.events.t26167(self__.evt,self__.f,self__.create_listener_function,meta26168__$1));
});
domina.events.__GT_t26167 = (function __GT_t26167(evt__$1,f__$1,create_listener_function__$1,meta26168){return (new domina.events.t26167(evt__$1,f__$1,create_listener_function__$1,meta26168));
});
}
return (new domina.events.t26167(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t26167 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t26167 = (function (evt,f,create_listener_function,meta26168){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta26168 = meta26168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t26167.cljs$lang$type = true;
domina.events.t26167.cljs$lang$ctorStr = "domina.events/t26167";
domina.events.t26167.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t26167");
});
domina.events.t26167.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t26167.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t26167.prototype.domina$events$Event$ = true;
domina.events.t26167.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t26167.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t26167.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t26167.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t26167.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t26167.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t26167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26169){var self__ = this;
var _26169__$1 = this;return self__.meta26168;
});
domina.events.t26167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26169,meta26168__$1){var self__ = this;
var _26169__$1 = this;return (new domina.events.t26167(self__.evt,self__.f,self__.create_listener_function,meta26168__$1));
});
domina.events.__GT_t26167 = (function __GT_t26167(evt__$1,f__$1,create_listener_function__$1,meta26168){return (new domina.events.t26167(evt__$1,f__$1,create_listener_function__$1,meta26168));
});
}
return (new domina.events.t26167(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__26174(s__26175){return (new cljs.core.LazySeq(null,(function (){var s__26175__$1 = s__26175;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26175__$1);if(temp__4092__auto__)
{var s__26175__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26175__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26175__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26177 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26176 = 0;while(true){
if((i__26176 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26176);cljs.core.chunk_append(b__26177,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__26178 = (i__26176 + 1);
i__26176 = G__26178;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26177),iter__26174(cljs.core.chunk_rest(s__26175__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26177),null);
}
} else
{var node = cljs.core.first(s__26175__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__26174(cljs.core.rest(s__26175__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__26187 = cljs.core.seq(domina.nodes(content));var chunk__26188 = null;var count__26189 = 0;var i__26190 = 0;while(true){
if((i__26190 < count__26189))
{var node = chunk__26188.cljs$core$IIndexed$_nth$arity$2(null,i__26190);goog.events.removeAll(node);
{
var G__26195 = seq__26187;
var G__26196 = chunk__26188;
var G__26197 = count__26189;
var G__26198 = (i__26190 + 1);
seq__26187 = G__26195;
chunk__26188 = G__26196;
count__26189 = G__26197;
i__26190 = G__26198;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26187);if(temp__4092__auto__)
{var seq__26187__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26187__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26187__$1);{
var G__26199 = cljs.core.chunk_rest(seq__26187__$1);
var G__26200 = c__4148__auto__;
var G__26201 = cljs.core.count(c__4148__auto__);
var G__26202 = 0;
seq__26187 = G__26199;
chunk__26188 = G__26200;
count__26189 = G__26201;
i__26190 = G__26202;
continue;
}
} else
{var node = cljs.core.first(seq__26187__$1);goog.events.removeAll(node);
{
var G__26203 = cljs.core.next(seq__26187__$1);
var G__26204 = null;
var G__26205 = 0;
var G__26206 = 0;
seq__26187 = G__26203;
chunk__26188 = G__26204;
count__26189 = G__26205;
i__26190 = G__26206;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__26191 = cljs.core.seq(domina.nodes(content));var chunk__26192 = null;var count__26193 = 0;var i__26194 = 0;while(true){
if((i__26194 < count__26193))
{var node = chunk__26192.cljs$core$IIndexed$_nth$arity$2(null,i__26194);goog.events.removeAll(node,type__$1);
{
var G__26207 = seq__26191;
var G__26208 = chunk__26192;
var G__26209 = count__26193;
var G__26210 = (i__26194 + 1);
seq__26191 = G__26207;
chunk__26192 = G__26208;
count__26193 = G__26209;
i__26194 = G__26210;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26191);if(temp__4092__auto__)
{var seq__26191__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26191__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26191__$1);{
var G__26211 = cljs.core.chunk_rest(seq__26191__$1);
var G__26212 = c__4148__auto__;
var G__26213 = cljs.core.count(c__4148__auto__);
var G__26214 = 0;
seq__26191 = G__26211;
chunk__26192 = G__26212;
count__26193 = G__26213;
i__26194 = G__26214;
continue;
}
} else
{var node = cljs.core.first(seq__26191__$1);goog.events.removeAll(node,type__$1);
{
var G__26215 = cljs.core.next(seq__26191__$1);
var G__26216 = null;
var G__26217 = 0;
var G__26218 = 0;
seq__26191 = G__26215;
chunk__26192 = G__26216;
count__26193 = G__26217;
i__26194 = G__26218;
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
var G__26219 = parent;
var G__26220 = cljs.core.cons(parent,so_far);
n = G__26219;
so_far = G__26220;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__26229_26237 = cljs.core.seq(ancestors);var chunk__26230_26238 = null;var count__26231_26239 = 0;var i__26232_26240 = 0;while(true){
if((i__26232_26240 < count__26231_26239))
{var n_26241 = chunk__26230_26238.cljs$core$IIndexed$_nth$arity$2(null,i__26232_26240);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26241;
goog.events.fireListeners(n_26241,evt.type,true,evt);
}
{
var G__26242 = seq__26229_26237;
var G__26243 = chunk__26230_26238;
var G__26244 = count__26231_26239;
var G__26245 = (i__26232_26240 + 1);
seq__26229_26237 = G__26242;
chunk__26230_26238 = G__26243;
count__26231_26239 = G__26244;
i__26232_26240 = G__26245;
continue;
}
} else
{var temp__4092__auto___26246 = cljs.core.seq(seq__26229_26237);if(temp__4092__auto___26246)
{var seq__26229_26247__$1 = temp__4092__auto___26246;if(cljs.core.chunked_seq_QMARK_(seq__26229_26247__$1))
{var c__4148__auto___26248 = cljs.core.chunk_first(seq__26229_26247__$1);{
var G__26249 = cljs.core.chunk_rest(seq__26229_26247__$1);
var G__26250 = c__4148__auto___26248;
var G__26251 = cljs.core.count(c__4148__auto___26248);
var G__26252 = 0;
seq__26229_26237 = G__26249;
chunk__26230_26238 = G__26250;
count__26231_26239 = G__26251;
i__26232_26240 = G__26252;
continue;
}
} else
{var n_26253 = cljs.core.first(seq__26229_26247__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26253;
goog.events.fireListeners(n_26253,evt.type,true,evt);
}
{
var G__26254 = cljs.core.next(seq__26229_26247__$1);
var G__26255 = null;
var G__26256 = 0;
var G__26257 = 0;
seq__26229_26237 = G__26254;
chunk__26230_26238 = G__26255;
count__26231_26239 = G__26256;
i__26232_26240 = G__26257;
continue;
}
}
} else
{}
}
break;
}
var seq__26233_26258 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__26234_26259 = null;var count__26235_26260 = 0;var i__26236_26261 = 0;while(true){
if((i__26236_26261 < count__26235_26260))
{var n_26262 = chunk__26234_26259.cljs$core$IIndexed$_nth$arity$2(null,i__26236_26261);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26262;
goog.events.fireListeners(n_26262,evt.type,false,evt);
}
{
var G__26263 = seq__26233_26258;
var G__26264 = chunk__26234_26259;
var G__26265 = count__26235_26260;
var G__26266 = (i__26236_26261 + 1);
seq__26233_26258 = G__26263;
chunk__26234_26259 = G__26264;
count__26235_26260 = G__26265;
i__26236_26261 = G__26266;
continue;
}
} else
{var temp__4092__auto___26267 = cljs.core.seq(seq__26233_26258);if(temp__4092__auto___26267)
{var seq__26233_26268__$1 = temp__4092__auto___26267;if(cljs.core.chunked_seq_QMARK_(seq__26233_26268__$1))
{var c__4148__auto___26269 = cljs.core.chunk_first(seq__26233_26268__$1);{
var G__26270 = cljs.core.chunk_rest(seq__26233_26268__$1);
var G__26271 = c__4148__auto___26269;
var G__26272 = cljs.core.count(c__4148__auto___26269);
var G__26273 = 0;
seq__26233_26258 = G__26270;
chunk__26234_26259 = G__26271;
count__26235_26260 = G__26272;
i__26236_26261 = G__26273;
continue;
}
} else
{var n_26274 = cljs.core.first(seq__26233_26268__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_26274;
goog.events.fireListeners(n_26274,evt.type,false,evt);
}
{
var G__26275 = cljs.core.next(seq__26233_26268__$1);
var G__26276 = null;
var G__26277 = 0;
var G__26278 = 0;
seq__26233_26258 = G__26275;
chunk__26234_26259 = G__26276;
count__26235_26260 = G__26277;
i__26236_26261 = G__26278;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__26285_26291 = cljs.core.seq(evt_map);var chunk__26286_26292 = null;var count__26287_26293 = 0;var i__26288_26294 = 0;while(true){
if((i__26288_26294 < count__26287_26293))
{var vec__26289_26295 = chunk__26286_26292.cljs$core$IIndexed$_nth$arity$2(null,i__26288_26294);var k_26296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289_26295,0,null);var v_26297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26289_26295,1,null);(evt[k_26296] = v_26297);
{
var G__26298 = seq__26285_26291;
var G__26299 = chunk__26286_26292;
var G__26300 = count__26287_26293;
var G__26301 = (i__26288_26294 + 1);
seq__26285_26291 = G__26298;
chunk__26286_26292 = G__26299;
count__26287_26293 = G__26300;
i__26288_26294 = G__26301;
continue;
}
} else
{var temp__4092__auto___26302 = cljs.core.seq(seq__26285_26291);if(temp__4092__auto___26302)
{var seq__26285_26303__$1 = temp__4092__auto___26302;if(cljs.core.chunked_seq_QMARK_(seq__26285_26303__$1))
{var c__4148__auto___26304 = cljs.core.chunk_first(seq__26285_26303__$1);{
var G__26305 = cljs.core.chunk_rest(seq__26285_26303__$1);
var G__26306 = c__4148__auto___26304;
var G__26307 = cljs.core.count(c__4148__auto___26304);
var G__26308 = 0;
seq__26285_26291 = G__26305;
chunk__26286_26292 = G__26306;
count__26287_26293 = G__26307;
i__26288_26294 = G__26308;
continue;
}
} else
{var vec__26290_26309 = cljs.core.first(seq__26285_26303__$1);var k_26310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290_26309,0,null);var v_26311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26290_26309,1,null);(evt[k_26310] = v_26311);
{
var G__26312 = cljs.core.next(seq__26285_26303__$1);
var G__26313 = null;
var G__26314 = 0;
var G__26315 = 0;
seq__26285_26291 = G__26312;
chunk__26286_26292 = G__26313;
count__26287_26293 = G__26314;
i__26288_26294 = G__26315;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__26316_SHARP_){return goog.events.getListeners(p1__26316_SHARP_,type__$1,false);
}),domina.nodes(content));
});
