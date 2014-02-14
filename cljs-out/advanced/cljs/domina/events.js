// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj27161 = {};return obj27161;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t27165 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27165 = (function (evt,f,create_listener_function,meta27166){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27166 = meta27166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27165.cljs$lang$type = true;
domina.events.t27165.cljs$lang$ctorStr = "domina.events/t27165";
domina.events.t27165.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27165");
});
domina.events.t27165.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27165.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27165.prototype.domina$events$Event$ = true;
domina.events.t27165.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27165.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27165.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27165.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27165.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27165.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27167){var self__ = this;
var _27167__$1 = this;return self__.meta27166;
});
domina.events.t27165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27167,meta27166__$1){var self__ = this;
var _27167__$1 = this;return (new domina.events.t27165(self__.evt,self__.f,self__.create_listener_function,meta27166__$1));
});
domina.events.__GT_t27165 = (function __GT_t27165(evt__$1,f__$1,create_listener_function__$1,meta27166){return (new domina.events.t27165(evt__$1,f__$1,create_listener_function__$1,meta27166));
});
}
return (new domina.events.t27165(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t27165 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t27165 = (function (evt,f,create_listener_function,meta27166){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta27166 = meta27166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t27165.cljs$lang$type = true;
domina.events.t27165.cljs$lang$ctorStr = "domina.events/t27165";
domina.events.t27165.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t27165");
});
domina.events.t27165.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t27165.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t27165.prototype.domina$events$Event$ = true;
domina.events.t27165.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t27165.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t27165.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t27165.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t27165.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t27165.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t27165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27167){var self__ = this;
var _27167__$1 = this;return self__.meta27166;
});
domina.events.t27165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27167,meta27166__$1){var self__ = this;
var _27167__$1 = this;return (new domina.events.t27165(self__.evt,self__.f,self__.create_listener_function,meta27166__$1));
});
domina.events.__GT_t27165 = (function __GT_t27165(evt__$1,f__$1,create_listener_function__$1,meta27166){return (new domina.events.t27165(evt__$1,f__$1,create_listener_function__$1,meta27166));
});
}
return (new domina.events.t27165(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__27172(s__27173){return (new cljs.core.LazySeq(null,(function (){var s__27173__$1 = s__27173;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27173__$1);if(temp__4092__auto__)
{var s__27173__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27173__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27173__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27175 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27174 = 0;while(true){
if((i__27174 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27174);cljs.core.chunk_append(b__27175,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__27176 = (i__27174 + 1);
i__27174 = G__27176;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27175),iter__27172(cljs.core.chunk_rest(s__27173__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27175),null);
}
} else
{var node = cljs.core.first(s__27173__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__27172(cljs.core.rest(s__27173__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__27185 = cljs.core.seq(domina.nodes(content));var chunk__27186 = null;var count__27187 = 0;var i__27188 = 0;while(true){
if((i__27188 < count__27187))
{var node = chunk__27186.cljs$core$IIndexed$_nth$arity$2(null,i__27188);goog.events.removeAll(node);
{
var G__27193 = seq__27185;
var G__27194 = chunk__27186;
var G__27195 = count__27187;
var G__27196 = (i__27188 + 1);
seq__27185 = G__27193;
chunk__27186 = G__27194;
count__27187 = G__27195;
i__27188 = G__27196;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27185);if(temp__4092__auto__)
{var seq__27185__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27185__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27185__$1);{
var G__27197 = cljs.core.chunk_rest(seq__27185__$1);
var G__27198 = c__4148__auto__;
var G__27199 = cljs.core.count(c__4148__auto__);
var G__27200 = 0;
seq__27185 = G__27197;
chunk__27186 = G__27198;
count__27187 = G__27199;
i__27188 = G__27200;
continue;
}
} else
{var node = cljs.core.first(seq__27185__$1);goog.events.removeAll(node);
{
var G__27201 = cljs.core.next(seq__27185__$1);
var G__27202 = null;
var G__27203 = 0;
var G__27204 = 0;
seq__27185 = G__27201;
chunk__27186 = G__27202;
count__27187 = G__27203;
i__27188 = G__27204;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__27189 = cljs.core.seq(domina.nodes(content));var chunk__27190 = null;var count__27191 = 0;var i__27192 = 0;while(true){
if((i__27192 < count__27191))
{var node = chunk__27190.cljs$core$IIndexed$_nth$arity$2(null,i__27192);goog.events.removeAll(node,type__$1);
{
var G__27205 = seq__27189;
var G__27206 = chunk__27190;
var G__27207 = count__27191;
var G__27208 = (i__27192 + 1);
seq__27189 = G__27205;
chunk__27190 = G__27206;
count__27191 = G__27207;
i__27192 = G__27208;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27189);if(temp__4092__auto__)
{var seq__27189__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27189__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27189__$1);{
var G__27209 = cljs.core.chunk_rest(seq__27189__$1);
var G__27210 = c__4148__auto__;
var G__27211 = cljs.core.count(c__4148__auto__);
var G__27212 = 0;
seq__27189 = G__27209;
chunk__27190 = G__27210;
count__27191 = G__27211;
i__27192 = G__27212;
continue;
}
} else
{var node = cljs.core.first(seq__27189__$1);goog.events.removeAll(node,type__$1);
{
var G__27213 = cljs.core.next(seq__27189__$1);
var G__27214 = null;
var G__27215 = 0;
var G__27216 = 0;
seq__27189 = G__27213;
chunk__27190 = G__27214;
count__27191 = G__27215;
i__27192 = G__27216;
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
var G__27217 = parent;
var G__27218 = cljs.core.cons(parent,so_far);
n = G__27217;
so_far = G__27218;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__27227_27235 = cljs.core.seq(ancestors);var chunk__27228_27236 = null;var count__27229_27237 = 0;var i__27230_27238 = 0;while(true){
if((i__27230_27238 < count__27229_27237))
{var n_27239 = chunk__27228_27236.cljs$core$IIndexed$_nth$arity$2(null,i__27230_27238);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27239;
goog.events.fireListeners(n_27239,evt.type,true,evt);
}
{
var G__27240 = seq__27227_27235;
var G__27241 = chunk__27228_27236;
var G__27242 = count__27229_27237;
var G__27243 = (i__27230_27238 + 1);
seq__27227_27235 = G__27240;
chunk__27228_27236 = G__27241;
count__27229_27237 = G__27242;
i__27230_27238 = G__27243;
continue;
}
} else
{var temp__4092__auto___27244 = cljs.core.seq(seq__27227_27235);if(temp__4092__auto___27244)
{var seq__27227_27245__$1 = temp__4092__auto___27244;if(cljs.core.chunked_seq_QMARK_(seq__27227_27245__$1))
{var c__4148__auto___27246 = cljs.core.chunk_first(seq__27227_27245__$1);{
var G__27247 = cljs.core.chunk_rest(seq__27227_27245__$1);
var G__27248 = c__4148__auto___27246;
var G__27249 = cljs.core.count(c__4148__auto___27246);
var G__27250 = 0;
seq__27227_27235 = G__27247;
chunk__27228_27236 = G__27248;
count__27229_27237 = G__27249;
i__27230_27238 = G__27250;
continue;
}
} else
{var n_27251 = cljs.core.first(seq__27227_27245__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27251;
goog.events.fireListeners(n_27251,evt.type,true,evt);
}
{
var G__27252 = cljs.core.next(seq__27227_27245__$1);
var G__27253 = null;
var G__27254 = 0;
var G__27255 = 0;
seq__27227_27235 = G__27252;
chunk__27228_27236 = G__27253;
count__27229_27237 = G__27254;
i__27230_27238 = G__27255;
continue;
}
}
} else
{}
}
break;
}
var seq__27231_27256 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__27232_27257 = null;var count__27233_27258 = 0;var i__27234_27259 = 0;while(true){
if((i__27234_27259 < count__27233_27258))
{var n_27260 = chunk__27232_27257.cljs$core$IIndexed$_nth$arity$2(null,i__27234_27259);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27260;
goog.events.fireListeners(n_27260,evt.type,false,evt);
}
{
var G__27261 = seq__27231_27256;
var G__27262 = chunk__27232_27257;
var G__27263 = count__27233_27258;
var G__27264 = (i__27234_27259 + 1);
seq__27231_27256 = G__27261;
chunk__27232_27257 = G__27262;
count__27233_27258 = G__27263;
i__27234_27259 = G__27264;
continue;
}
} else
{var temp__4092__auto___27265 = cljs.core.seq(seq__27231_27256);if(temp__4092__auto___27265)
{var seq__27231_27266__$1 = temp__4092__auto___27265;if(cljs.core.chunked_seq_QMARK_(seq__27231_27266__$1))
{var c__4148__auto___27267 = cljs.core.chunk_first(seq__27231_27266__$1);{
var G__27268 = cljs.core.chunk_rest(seq__27231_27266__$1);
var G__27269 = c__4148__auto___27267;
var G__27270 = cljs.core.count(c__4148__auto___27267);
var G__27271 = 0;
seq__27231_27256 = G__27268;
chunk__27232_27257 = G__27269;
count__27233_27258 = G__27270;
i__27234_27259 = G__27271;
continue;
}
} else
{var n_27272 = cljs.core.first(seq__27231_27266__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_27272;
goog.events.fireListeners(n_27272,evt.type,false,evt);
}
{
var G__27273 = cljs.core.next(seq__27231_27266__$1);
var G__27274 = null;
var G__27275 = 0;
var G__27276 = 0;
seq__27231_27256 = G__27273;
chunk__27232_27257 = G__27274;
count__27233_27258 = G__27275;
i__27234_27259 = G__27276;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__27283_27289 = cljs.core.seq(evt_map);var chunk__27284_27290 = null;var count__27285_27291 = 0;var i__27286_27292 = 0;while(true){
if((i__27286_27292 < count__27285_27291))
{var vec__27287_27293 = chunk__27284_27290.cljs$core$IIndexed$_nth$arity$2(null,i__27286_27292);var k_27294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27287_27293,0,null);var v_27295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27287_27293,1,null);(evt[k_27294] = v_27295);
{
var G__27296 = seq__27283_27289;
var G__27297 = chunk__27284_27290;
var G__27298 = count__27285_27291;
var G__27299 = (i__27286_27292 + 1);
seq__27283_27289 = G__27296;
chunk__27284_27290 = G__27297;
count__27285_27291 = G__27298;
i__27286_27292 = G__27299;
continue;
}
} else
{var temp__4092__auto___27300 = cljs.core.seq(seq__27283_27289);if(temp__4092__auto___27300)
{var seq__27283_27301__$1 = temp__4092__auto___27300;if(cljs.core.chunked_seq_QMARK_(seq__27283_27301__$1))
{var c__4148__auto___27302 = cljs.core.chunk_first(seq__27283_27301__$1);{
var G__27303 = cljs.core.chunk_rest(seq__27283_27301__$1);
var G__27304 = c__4148__auto___27302;
var G__27305 = cljs.core.count(c__4148__auto___27302);
var G__27306 = 0;
seq__27283_27289 = G__27303;
chunk__27284_27290 = G__27304;
count__27285_27291 = G__27305;
i__27286_27292 = G__27306;
continue;
}
} else
{var vec__27288_27307 = cljs.core.first(seq__27283_27301__$1);var k_27308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27288_27307,0,null);var v_27309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27288_27307,1,null);(evt[k_27308] = v_27309);
{
var G__27310 = cljs.core.next(seq__27283_27301__$1);
var G__27311 = null;
var G__27312 = 0;
var G__27313 = 0;
seq__27283_27289 = G__27310;
chunk__27284_27290 = G__27311;
count__27285_27291 = G__27312;
i__27286_27292 = G__27313;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__27314_SHARP_){return goog.events.getListeners(p1__27314_SHARP_,type__$1,false);
}),domina.nodes(content));
});
