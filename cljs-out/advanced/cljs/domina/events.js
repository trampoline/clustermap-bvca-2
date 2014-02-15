// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27169 = {};return obj27169;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27173 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27173 = (function (evt,f,create_listener_function,meta27174){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27174 = meta27174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27173.cljs$lang$type = true;
domina.events.t27173.cljs$lang$ctorStr = "domina.events/t27173";
domina.events.t27173.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27173");
});
domina.events.t27173.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27173.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27173.prototype.domina$events$Event$ = true;
domina.events.t27173.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27173.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27173.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27173.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27173.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27173.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27175){var self__ = this;
var _27175__$1 = this;return self__.meta27174;
});
domina.events.t27173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27175,meta27174__$1){var self__ = this;
var _27175__$1 = this;return (new domina.events.t27173(self__.evt,self__.f,self__.create_listener_function,meta27174__$1));
});
domina.events.__GT_t27173 = (function __GT_t27173(evt__$1,f__$1,create_listener_function__$1,meta27174){return (new domina.events.t27173(evt__$1,f__$1,create_listener_function__$1,meta27174));
});
}
return (new domina.events.t27173(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27173 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27173 = (function (evt,f,create_listener_function,meta27174){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27174 = meta27174;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27173.cljs$lang$type = true;
domina.events.t27173.cljs$lang$ctorStr = "domina.events/t27173";
domina.events.t27173.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27173");
});
domina.events.t27173.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27173.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27173.prototype.domina$events$Event$ = true;
domina.events.t27173.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27173.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27173.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27173.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27173.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27173.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27175){var self__ = this;
var _27175__$1 = this;return self__.meta27174;
});
domina.events.t27173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27175,meta27174__$1){var self__ = this;
var _27175__$1 = this;return (new domina.events.t27173(self__.evt,self__.f,self__.create_listener_function,meta27174__$1));
});
domina.events.__GT_t27173 = (function __GT_t27173(evt__$1,f__$1,create_listener_function__$1,meta27174){return (new domina.events.t27173(evt__$1,f__$1,create_listener_function__$1,meta27174));
});
}
return (new domina.events.t27173(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27180(s__27181){return (new cljs.core.LazySeq(null,(function (){var s__27181__$1 = s__27181;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27181__$1);if(temp__4092__auto__)
{var s__27181__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27181__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27181__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27183 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27182 = 0;while(true){
if((i__27182 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27182);cljs.core.chunk_append(b__27183,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27184 = (i__27182 + 1);
i__27182 = G__27184;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27183),iter__27180(cljs.core.chunk_rest(s__27181__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27183),null);
}
} else
{var node = cljs.core.first(s__27181__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27180(cljs.core.rest(s__27181__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27193 = cljs.core.seq(domina.nodes(content));var chunk__27194 = null;var count__27195 = 0;var i__27196 = 0;while(true){
if((i__27196 < count__27195))
{var node = chunk__27194.cljs$core$IIndexed$_nth$arity$2(null,i__27196);goog.events.removeAll(node);
{
var G__27201 = seq__27193;
var G__27202 = chunk__27194;
var G__27203 = count__27195;
var G__27204 = (i__27196 + 1);
seq__27193 = G__27201;
chunk__27194 = G__27202;
count__27195 = G__27203;
i__27196 = G__27204;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27193);if(temp__4092__auto__)
{var seq__27193__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27193__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27193__$1);{
var G__27205 = cljs.core.chunk_rest(seq__27193__$1);
var G__27206 = c__4148__auto__;
var G__27207 = cljs.core.count(c__4148__auto__);
var G__27208 = 0;
seq__27193 = G__27205;
chunk__27194 = G__27206;
count__27195 = G__27207;
i__27196 = G__27208;
continue;
}
} else
{var node = cljs.core.first(seq__27193__$1);goog.events.removeAll(node);
{
var G__27209 = cljs.core.next(seq__27193__$1);
var G__27210 = null;
var G__27211 = 0;
var G__27212 = 0;
seq__27193 = G__27209;
chunk__27194 = G__27210;
count__27195 = G__27211;
i__27196 = G__27212;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27197 = cljs.core.seq(domina.nodes(content));var chunk__27198 = null;var count__27199 = 0;var i__27200 = 0;while(true){
if((i__27200 < count__27199))
{var node = chunk__27198.cljs$core$IIndexed$_nth$arity$2(null,i__27200);goog.events.removeAll(node,type__$1);
{
var G__27213 = seq__27197;
var G__27214 = chunk__27198;
var G__27215 = count__27199;
var G__27216 = (i__27200 + 1);
seq__27197 = G__27213;
chunk__27198 = G__27214;
count__27199 = G__27215;
i__27200 = G__27216;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27197);if(temp__4092__auto__)
{var seq__27197__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27197__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27197__$1);{
var G__27217 = cljs.core.chunk_rest(seq__27197__$1);
var G__27218 = c__4148__auto__;
var G__27219 = cljs.core.count(c__4148__auto__);
var G__27220 = 0;
seq__27197 = G__27217;
chunk__27198 = G__27218;
count__27199 = G__27219;
i__27200 = G__27220;
continue;
}
} else
{var node = cljs.core.first(seq__27197__$1);goog.events.removeAll(node,type__$1);
{
var G__27221 = cljs.core.next(seq__27197__$1);
var G__27222 = null;
var G__27223 = 0;
var G__27224 = 0;
seq__27197 = G__27221;
chunk__27198 = G__27222;
count__27199 = G__27223;
i__27200 = G__27224;
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
var G__27225 = parent;
var G__27226 = cljs.core.cons(parent,so_far);
n = G__27225;
so_far = G__27226;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27235_27243 = cljs.core.seq(ancestors);var chunk__27236_27244 = null;var count__27237_27245 = 0;var i__27238_27246 = 0;while(true){
if((i__27238_27246 < count__27237_27245))
{var n_27247 = chunk__27236_27244.cljs$core$IIndexed$_nth$arity$2(null,i__27238_27246);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27247;
goog.events.fireListeners(n_27247,evt.type,true,evt);
}
{
var G__27248 = seq__27235_27243;
var G__27249 = chunk__27236_27244;
var G__27250 = count__27237_27245;
var G__27251 = (i__27238_27246 + 1);
seq__27235_27243 = G__27248;
chunk__27236_27244 = G__27249;
count__27237_27245 = G__27250;
i__27238_27246 = G__27251;
continue;
}
} else
{var temp__4092__auto___27252 = cljs.core.seq(seq__27235_27243);if(temp__4092__auto___27252)
{var seq__27235_27253__$1 = temp__4092__auto___27252;if(cljs.core.chunked_seq_QMARK_(seq__27235_27253__$1))
{var c__4148__auto___27254 = cljs.core.chunk_first(seq__27235_27253__$1);{
var G__27255 = cljs.core.chunk_rest(seq__27235_27253__$1);
var G__27256 = c__4148__auto___27254;
var G__27257 = cljs.core.count(c__4148__auto___27254);
var G__27258 = 0;
seq__27235_27243 = G__27255;
chunk__27236_27244 = G__27256;
count__27237_27245 = G__27257;
i__27238_27246 = G__27258;
continue;
}
} else
{var n_27259 = cljs.core.first(seq__27235_27253__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27259;
goog.events.fireListeners(n_27259,evt.type,true,evt);
}
{
var G__27260 = cljs.core.next(seq__27235_27253__$1);
var G__27261 = null;
var G__27262 = 0;
var G__27263 = 0;
seq__27235_27243 = G__27260;
chunk__27236_27244 = G__27261;
count__27237_27245 = G__27262;
i__27238_27246 = G__27263;
continue;
}
}
} else
{}
}
break;
}
var seq__27239_27264 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27240_27265 = null;var count__27241_27266 = 0;var i__27242_27267 = 0;while(true){
if((i__27242_27267 < count__27241_27266))
{var n_27268 = chunk__27240_27265.cljs$core$IIndexed$_nth$arity$2(null,i__27242_27267);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27268;
goog.events.fireListeners(n_27268,evt.type,false,evt);
}
{
var G__27269 = seq__27239_27264;
var G__27270 = chunk__27240_27265;
var G__27271 = count__27241_27266;
var G__27272 = (i__27242_27267 + 1);
seq__27239_27264 = G__27269;
chunk__27240_27265 = G__27270;
count__27241_27266 = G__27271;
i__27242_27267 = G__27272;
continue;
}
} else
{var temp__4092__auto___27273 = cljs.core.seq(seq__27239_27264);if(temp__4092__auto___27273)
{var seq__27239_27274__$1 = temp__4092__auto___27273;if(cljs.core.chunked_seq_QMARK_(seq__27239_27274__$1))
{var c__4148__auto___27275 = cljs.core.chunk_first(seq__27239_27274__$1);{
var G__27276 = cljs.core.chunk_rest(seq__27239_27274__$1);
var G__27277 = c__4148__auto___27275;
var G__27278 = cljs.core.count(c__4148__auto___27275);
var G__27279 = 0;
seq__27239_27264 = G__27276;
chunk__27240_27265 = G__27277;
count__27241_27266 = G__27278;
i__27242_27267 = G__27279;
continue;
}
} else
{var n_27280 = cljs.core.first(seq__27239_27274__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27280;
goog.events.fireListeners(n_27280,evt.type,false,evt);
}
{
var G__27281 = cljs.core.next(seq__27239_27274__$1);
var G__27282 = null;
var G__27283 = 0;
var G__27284 = 0;
seq__27239_27264 = G__27281;
chunk__27240_27265 = G__27282;
count__27241_27266 = G__27283;
i__27242_27267 = G__27284;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27291_27297 = cljs.core.seq(evt_map);var chunk__27292_27298 = null;var count__27293_27299 = 0;var i__27294_27300 = 0;while(true){
if((i__27294_27300 < count__27293_27299))
{var vec__27295_27301 = chunk__27292_27298.cljs$core$IIndexed$_nth$arity$2(null,i__27294_27300);var k_27302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27295_27301,0,null);var v_27303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27295_27301,1,null);(evt[k_27302] = v_27303);
{
var G__27304 = seq__27291_27297;
var G__27305 = chunk__27292_27298;
var G__27306 = count__27293_27299;
var G__27307 = (i__27294_27300 + 1);
seq__27291_27297 = G__27304;
chunk__27292_27298 = G__27305;
count__27293_27299 = G__27306;
i__27294_27300 = G__27307;
continue;
}
} else
{var temp__4092__auto___27308 = cljs.core.seq(seq__27291_27297);if(temp__4092__auto___27308)
{var seq__27291_27309__$1 = temp__4092__auto___27308;if(cljs.core.chunked_seq_QMARK_(seq__27291_27309__$1))
{var c__4148__auto___27310 = cljs.core.chunk_first(seq__27291_27309__$1);{
var G__27311 = cljs.core.chunk_rest(seq__27291_27309__$1);
var G__27312 = c__4148__auto___27310;
var G__27313 = cljs.core.count(c__4148__auto___27310);
var G__27314 = 0;
seq__27291_27297 = G__27311;
chunk__27292_27298 = G__27312;
count__27293_27299 = G__27313;
i__27294_27300 = G__27314;
continue;
}
} else
{var vec__27296_27315 = cljs.core.first(seq__27291_27309__$1);var k_27316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27296_27315,0,null);var v_27317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27296_27315,1,null);(evt[k_27316] = v_27317);
{
var G__27318 = cljs.core.next(seq__27291_27309__$1);
var G__27319 = null;
var G__27320 = 0;
var G__27321 = 0;
seq__27291_27297 = G__27318;
chunk__27292_27298 = G__27319;
count__27293_27299 = G__27320;
i__27294_27300 = G__27321;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27322_SHARP_){return goog.events.getListeners(p1__27322_SHARP_,type__$1,false);
}),domina.nodes(content));
});
