// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj25165 = {};return obj25165;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t25169 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25169 = (function (evt,f,create_listener_function,meta25170){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25170 = meta25170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25169.cljs$lang$type = true;
domina.events.t25169.cljs$lang$ctorStr = "domina.events/t25169";
domina.events.t25169.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25169");
});
domina.events.t25169.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25169.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25169.prototype.domina$events$Event$ = true;
domina.events.t25169.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25169.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25169.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25169.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25169.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25169.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25171){var self__ = this;
var _25171__$1 = this;return self__.meta25170;
});
domina.events.t25169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25171,meta25170__$1){var self__ = this;
var _25171__$1 = this;return (new domina.events.t25169(self__.evt,self__.f,self__.create_listener_function,meta25170__$1));
});
domina.events.__GT_t25169 = (function __GT_t25169(evt__$1,f__$1,create_listener_function__$1,meta25170){return (new domina.events.t25169(evt__$1,f__$1,create_listener_function__$1,meta25170));
});
}
return (new domina.events.t25169(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t25169 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t25169 = (function (evt,f,create_listener_function,meta25170){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta25170 = meta25170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t25169.cljs$lang$type = true;
domina.events.t25169.cljs$lang$ctorStr = "domina.events/t25169";
domina.events.t25169.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t25169");
});
domina.events.t25169.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t25169.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t25169.prototype.domina$events$Event$ = true;
domina.events.t25169.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t25169.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t25169.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t25169.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t25169.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t25169.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t25169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25171){var self__ = this;
var _25171__$1 = this;return self__.meta25170;
});
domina.events.t25169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25171,meta25170__$1){var self__ = this;
var _25171__$1 = this;return (new domina.events.t25169(self__.evt,self__.f,self__.create_listener_function,meta25170__$1));
});
domina.events.__GT_t25169 = (function __GT_t25169(evt__$1,f__$1,create_listener_function__$1,meta25170){return (new domina.events.t25169(evt__$1,f__$1,create_listener_function__$1,meta25170));
});
}
return (new domina.events.t25169(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__25176(s__25177){return (new cljs.core.LazySeq(null,(function (){var s__25177__$1 = s__25177;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25177__$1);if(temp__4092__auto__)
{var s__25177__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25177__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25177__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25179 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25178 = 0;while(true){
if((i__25178 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25178);cljs.core.chunk_append(b__25179,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__25180 = (i__25178 + 1);
i__25178 = G__25180;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25179),iter__25176(cljs.core.chunk_rest(s__25177__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25179),null);
}
} else
{var node = cljs.core.first(s__25177__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__25176(cljs.core.rest(s__25177__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__25189 = cljs.core.seq(domina.nodes(content));var chunk__25190 = null;var count__25191 = 0;var i__25192 = 0;while(true){
if((i__25192 < count__25191))
{var node = chunk__25190.cljs$core$IIndexed$_nth$arity$2(null,i__25192);goog.events.removeAll(node);
{
var G__25197 = seq__25189;
var G__25198 = chunk__25190;
var G__25199 = count__25191;
var G__25200 = (i__25192 + 1);
seq__25189 = G__25197;
chunk__25190 = G__25198;
count__25191 = G__25199;
i__25192 = G__25200;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25189);if(temp__4092__auto__)
{var seq__25189__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25189__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25189__$1);{
var G__25201 = cljs.core.chunk_rest(seq__25189__$1);
var G__25202 = c__4148__auto__;
var G__25203 = cljs.core.count(c__4148__auto__);
var G__25204 = 0;
seq__25189 = G__25201;
chunk__25190 = G__25202;
count__25191 = G__25203;
i__25192 = G__25204;
continue;
}
} else
{var node = cljs.core.first(seq__25189__$1);goog.events.removeAll(node);
{
var G__25205 = cljs.core.next(seq__25189__$1);
var G__25206 = null;
var G__25207 = 0;
var G__25208 = 0;
seq__25189 = G__25205;
chunk__25190 = G__25206;
count__25191 = G__25207;
i__25192 = G__25208;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__25193 = cljs.core.seq(domina.nodes(content));var chunk__25194 = null;var count__25195 = 0;var i__25196 = 0;while(true){
if((i__25196 < count__25195))
{var node = chunk__25194.cljs$core$IIndexed$_nth$arity$2(null,i__25196);goog.events.removeAll(node,type__$1);
{
var G__25209 = seq__25193;
var G__25210 = chunk__25194;
var G__25211 = count__25195;
var G__25212 = (i__25196 + 1);
seq__25193 = G__25209;
chunk__25194 = G__25210;
count__25195 = G__25211;
i__25196 = G__25212;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25193);if(temp__4092__auto__)
{var seq__25193__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25193__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25193__$1);{
var G__25213 = cljs.core.chunk_rest(seq__25193__$1);
var G__25214 = c__4148__auto__;
var G__25215 = cljs.core.count(c__4148__auto__);
var G__25216 = 0;
seq__25193 = G__25213;
chunk__25194 = G__25214;
count__25195 = G__25215;
i__25196 = G__25216;
continue;
}
} else
{var node = cljs.core.first(seq__25193__$1);goog.events.removeAll(node,type__$1);
{
var G__25217 = cljs.core.next(seq__25193__$1);
var G__25218 = null;
var G__25219 = 0;
var G__25220 = 0;
seq__25193 = G__25217;
chunk__25194 = G__25218;
count__25195 = G__25219;
i__25196 = G__25220;
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
var G__25221 = parent;
var G__25222 = cljs.core.cons(parent,so_far);
n = G__25221;
so_far = G__25222;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__25231_25239 = cljs.core.seq(ancestors);var chunk__25232_25240 = null;var count__25233_25241 = 0;var i__25234_25242 = 0;while(true){
if((i__25234_25242 < count__25233_25241))
{var n_25243 = chunk__25232_25240.cljs$core$IIndexed$_nth$arity$2(null,i__25234_25242);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25243;
goog.events.fireListeners(n_25243,evt.type,true,evt);
}
{
var G__25244 = seq__25231_25239;
var G__25245 = chunk__25232_25240;
var G__25246 = count__25233_25241;
var G__25247 = (i__25234_25242 + 1);
seq__25231_25239 = G__25244;
chunk__25232_25240 = G__25245;
count__25233_25241 = G__25246;
i__25234_25242 = G__25247;
continue;
}
} else
{var temp__4092__auto___25248 = cljs.core.seq(seq__25231_25239);if(temp__4092__auto___25248)
{var seq__25231_25249__$1 = temp__4092__auto___25248;if(cljs.core.chunked_seq_QMARK_(seq__25231_25249__$1))
{var c__4148__auto___25250 = cljs.core.chunk_first(seq__25231_25249__$1);{
var G__25251 = cljs.core.chunk_rest(seq__25231_25249__$1);
var G__25252 = c__4148__auto___25250;
var G__25253 = cljs.core.count(c__4148__auto___25250);
var G__25254 = 0;
seq__25231_25239 = G__25251;
chunk__25232_25240 = G__25252;
count__25233_25241 = G__25253;
i__25234_25242 = G__25254;
continue;
}
} else
{var n_25255 = cljs.core.first(seq__25231_25249__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25255;
goog.events.fireListeners(n_25255,evt.type,true,evt);
}
{
var G__25256 = cljs.core.next(seq__25231_25249__$1);
var G__25257 = null;
var G__25258 = 0;
var G__25259 = 0;
seq__25231_25239 = G__25256;
chunk__25232_25240 = G__25257;
count__25233_25241 = G__25258;
i__25234_25242 = G__25259;
continue;
}
}
} else
{}
}
break;
}
var seq__25235_25260 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__25236_25261 = null;var count__25237_25262 = 0;var i__25238_25263 = 0;while(true){
if((i__25238_25263 < count__25237_25262))
{var n_25264 = chunk__25236_25261.cljs$core$IIndexed$_nth$arity$2(null,i__25238_25263);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25264;
goog.events.fireListeners(n_25264,evt.type,false,evt);
}
{
var G__25265 = seq__25235_25260;
var G__25266 = chunk__25236_25261;
var G__25267 = count__25237_25262;
var G__25268 = (i__25238_25263 + 1);
seq__25235_25260 = G__25265;
chunk__25236_25261 = G__25266;
count__25237_25262 = G__25267;
i__25238_25263 = G__25268;
continue;
}
} else
{var temp__4092__auto___25269 = cljs.core.seq(seq__25235_25260);if(temp__4092__auto___25269)
{var seq__25235_25270__$1 = temp__4092__auto___25269;if(cljs.core.chunked_seq_QMARK_(seq__25235_25270__$1))
{var c__4148__auto___25271 = cljs.core.chunk_first(seq__25235_25270__$1);{
var G__25272 = cljs.core.chunk_rest(seq__25235_25270__$1);
var G__25273 = c__4148__auto___25271;
var G__25274 = cljs.core.count(c__4148__auto___25271);
var G__25275 = 0;
seq__25235_25260 = G__25272;
chunk__25236_25261 = G__25273;
count__25237_25262 = G__25274;
i__25238_25263 = G__25275;
continue;
}
} else
{var n_25276 = cljs.core.first(seq__25235_25270__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_25276;
goog.events.fireListeners(n_25276,evt.type,false,evt);
}
{
var G__25277 = cljs.core.next(seq__25235_25270__$1);
var G__25278 = null;
var G__25279 = 0;
var G__25280 = 0;
seq__25235_25260 = G__25277;
chunk__25236_25261 = G__25278;
count__25237_25262 = G__25279;
i__25238_25263 = G__25280;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__25287_25293 = cljs.core.seq(evt_map);var chunk__25288_25294 = null;var count__25289_25295 = 0;var i__25290_25296 = 0;while(true){
if((i__25290_25296 < count__25289_25295))
{var vec__25291_25297 = chunk__25288_25294.cljs$core$IIndexed$_nth$arity$2(null,i__25290_25296);var k_25298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25291_25297,0,null);var v_25299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25291_25297,1,null);(evt[k_25298] = v_25299);
{
var G__25300 = seq__25287_25293;
var G__25301 = chunk__25288_25294;
var G__25302 = count__25289_25295;
var G__25303 = (i__25290_25296 + 1);
seq__25287_25293 = G__25300;
chunk__25288_25294 = G__25301;
count__25289_25295 = G__25302;
i__25290_25296 = G__25303;
continue;
}
} else
{var temp__4092__auto___25304 = cljs.core.seq(seq__25287_25293);if(temp__4092__auto___25304)
{var seq__25287_25305__$1 = temp__4092__auto___25304;if(cljs.core.chunked_seq_QMARK_(seq__25287_25305__$1))
{var c__4148__auto___25306 = cljs.core.chunk_first(seq__25287_25305__$1);{
var G__25307 = cljs.core.chunk_rest(seq__25287_25305__$1);
var G__25308 = c__4148__auto___25306;
var G__25309 = cljs.core.count(c__4148__auto___25306);
var G__25310 = 0;
seq__25287_25293 = G__25307;
chunk__25288_25294 = G__25308;
count__25289_25295 = G__25309;
i__25290_25296 = G__25310;
continue;
}
} else
{var vec__25292_25311 = cljs.core.first(seq__25287_25305__$1);var k_25312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_25311,0,null);var v_25313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25292_25311,1,null);(evt[k_25312] = v_25313);
{
var G__25314 = cljs.core.next(seq__25287_25305__$1);
var G__25315 = null;
var G__25316 = 0;
var G__25317 = 0;
seq__25287_25293 = G__25314;
chunk__25288_25294 = G__25315;
count__25289_25295 = G__25316;
i__25290_25296 = G__25317;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__25318_SHARP_){return goog.events.getListeners(p1__25318_SHARP_,type__$1,false);
}),domina.nodes(content));
});
