// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj23752 = {};return obj23752;
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
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1((function (){if(typeof domina.events.t23756 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23756 = (function (evt,f,create_listener_function,meta23757){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23757 = meta23757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23756.cljs$lang$type = true;
domina.events.t23756.cljs$lang$ctorStr = "domina.events/t23756";
domina.events.t23756.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23756");
});
domina.events.t23756.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23756.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23756.prototype.domina$events$Event$ = true;
domina.events.t23756.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23756.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23756.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23756.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23756.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23756.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23758){var self__ = this;
var _23758__$1 = this;return self__.meta23757;
});
domina.events.t23756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23758,meta23757__$1){var self__ = this;
var _23758__$1 = this;return (new domina.events.t23756(self__.evt,self__.f,self__.create_listener_function,meta23757__$1));
});
domina.events.__GT_t23756 = (function __GT_t23756(evt__$1,f__$1,create_listener_function__$1,meta23757){return (new domina.events.t23756(evt__$1,f__$1,create_listener_function__$1,meta23757));
});
}
return (new domina.events.t23756(evt,f,create_listener_function,null));
})()) : f.call(null,(function (){if(typeof domina.events.t23756 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t23756 = (function (evt,f,create_listener_function,meta23757){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta23757 = meta23757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t23756.cljs$lang$type = true;
domina.events.t23756.cljs$lang$ctorStr = "domina.events/t23756";
domina.events.t23756.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"domina.events/t23756");
});
domina.events.t23756.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name(k)]);
}
});
domina.events.t23756.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.cljs$core$IFn$_invoke$arity$2(o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t23756.prototype.domina$events$Event$ = true;
domina.events.t23756.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t23756.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t23756.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t23756.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t23756.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t23756.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t23756.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23758){var self__ = this;
var _23758__$1 = this;return self__.meta23757;
});
domina.events.t23756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23758,meta23757__$1){var self__ = this;
var _23758__$1 = this;return (new domina.events.t23756(self__.evt,self__.f,self__.create_listener_function,meta23757__$1));
});
domina.events.__GT_t23756 = (function __GT_t23756(evt__$1,f__$1,create_listener_function__$1,meta23757){return (new domina.events.t23756(evt__$1,f__$1,create_listener_function__$1,meta23757));
});
}
return (new domina.events.t23756(evt,f,create_listener_function,null));
})()));
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function(listener);var t = cljs.core.name(type);return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4117__auto__ = (function iter__23763(s__23764){return (new cljs.core.LazySeq(null,(function (){var s__23764__$1 = s__23764;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23764__$1);if(temp__4092__auto__)
{var s__23764__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23764__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23764__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23766 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23765 = 0;while(true){
if((i__23765 < size__4116__auto__))
{var node = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23765);cljs.core.chunk_append(b__23766,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__23767 = (i__23765 + 1);
i__23765 = G__23767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23766),iter__23763(cljs.core.chunk_rest(s__23764__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23766),null);
}
} else
{var node = cljs.core.first(s__23764__$2);return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__23763(cljs.core.rest(s__23764__$2)));
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
var unlisten_BANG___1 = (function (content){var seq__23776 = cljs.core.seq(domina.nodes(content));var chunk__23777 = null;var count__23778 = 0;var i__23779 = 0;while(true){
if((i__23779 < count__23778))
{var node = chunk__23777.cljs$core$IIndexed$_nth$arity$2(null,i__23779);goog.events.removeAll(node);
{
var G__23784 = seq__23776;
var G__23785 = chunk__23777;
var G__23786 = count__23778;
var G__23787 = (i__23779 + 1);
seq__23776 = G__23784;
chunk__23777 = G__23785;
count__23778 = G__23786;
i__23779 = G__23787;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23776);if(temp__4092__auto__)
{var seq__23776__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23776__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23776__$1);{
var G__23788 = cljs.core.chunk_rest(seq__23776__$1);
var G__23789 = c__4148__auto__;
var G__23790 = cljs.core.count(c__4148__auto__);
var G__23791 = 0;
seq__23776 = G__23788;
chunk__23777 = G__23789;
count__23778 = G__23790;
i__23779 = G__23791;
continue;
}
} else
{var node = cljs.core.first(seq__23776__$1);goog.events.removeAll(node);
{
var G__23792 = cljs.core.next(seq__23776__$1);
var G__23793 = null;
var G__23794 = 0;
var G__23795 = 0;
seq__23776 = G__23792;
chunk__23777 = G__23793;
count__23778 = G__23794;
i__23779 = G__23795;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name(type);var seq__23780 = cljs.core.seq(domina.nodes(content));var chunk__23781 = null;var count__23782 = 0;var i__23783 = 0;while(true){
if((i__23783 < count__23782))
{var node = chunk__23781.cljs$core$IIndexed$_nth$arity$2(null,i__23783);goog.events.removeAll(node,type__$1);
{
var G__23796 = seq__23780;
var G__23797 = chunk__23781;
var G__23798 = count__23782;
var G__23799 = (i__23783 + 1);
seq__23780 = G__23796;
chunk__23781 = G__23797;
count__23782 = G__23798;
i__23783 = G__23799;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23780);if(temp__4092__auto__)
{var seq__23780__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23780__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23780__$1);{
var G__23800 = cljs.core.chunk_rest(seq__23780__$1);
var G__23801 = c__4148__auto__;
var G__23802 = cljs.core.count(c__4148__auto__);
var G__23803 = 0;
seq__23780 = G__23800;
chunk__23781 = G__23801;
count__23782 = G__23802;
i__23783 = G__23803;
continue;
}
} else
{var node = cljs.core.first(seq__23780__$1);goog.events.removeAll(node,type__$1);
{
var G__23804 = cljs.core.next(seq__23780__$1);
var G__23805 = null;
var G__23806 = 0;
var G__23807 = 0;
seq__23780 = G__23804;
chunk__23781 = G__23805;
count__23782 = G__23806;
i__23783 = G__23807;
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
var G__23808 = parent;
var G__23809 = cljs.core.cons(parent,so_far);
n = G__23808;
so_far = G__23809;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));var seq__23818_23826 = cljs.core.seq(ancestors);var chunk__23819_23827 = null;var count__23820_23828 = 0;var i__23821_23829 = 0;while(true){
if((i__23821_23829 < count__23820_23828))
{var n_23830 = chunk__23819_23827.cljs$core$IIndexed$_nth$arity$2(null,i__23821_23829);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23830;
goog.events.fireListeners(n_23830,evt.type,true,evt);
}
{
var G__23831 = seq__23818_23826;
var G__23832 = chunk__23819_23827;
var G__23833 = count__23820_23828;
var G__23834 = (i__23821_23829 + 1);
seq__23818_23826 = G__23831;
chunk__23819_23827 = G__23832;
count__23820_23828 = G__23833;
i__23821_23829 = G__23834;
continue;
}
} else
{var temp__4092__auto___23835 = cljs.core.seq(seq__23818_23826);if(temp__4092__auto___23835)
{var seq__23818_23836__$1 = temp__4092__auto___23835;if(cljs.core.chunked_seq_QMARK_(seq__23818_23836__$1))
{var c__4148__auto___23837 = cljs.core.chunk_first(seq__23818_23836__$1);{
var G__23838 = cljs.core.chunk_rest(seq__23818_23836__$1);
var G__23839 = c__4148__auto___23837;
var G__23840 = cljs.core.count(c__4148__auto___23837);
var G__23841 = 0;
seq__23818_23826 = G__23838;
chunk__23819_23827 = G__23839;
count__23820_23828 = G__23840;
i__23821_23829 = G__23841;
continue;
}
} else
{var n_23842 = cljs.core.first(seq__23818_23836__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23842;
goog.events.fireListeners(n_23842,evt.type,true,evt);
}
{
var G__23843 = cljs.core.next(seq__23818_23836__$1);
var G__23844 = null;
var G__23845 = 0;
var G__23846 = 0;
seq__23818_23826 = G__23843;
chunk__23819_23827 = G__23844;
count__23820_23828 = G__23845;
i__23821_23829 = G__23846;
continue;
}
}
} else
{}
}
break;
}
var seq__23822_23847 = cljs.core.seq(cljs.core.reverse(ancestors));var chunk__23823_23848 = null;var count__23824_23849 = 0;var i__23825_23850 = 0;while(true){
if((i__23825_23850 < count__23824_23849))
{var n_23851 = chunk__23823_23848.cljs$core$IIndexed$_nth$arity$2(null,i__23825_23850);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23851;
goog.events.fireListeners(n_23851,evt.type,false,evt);
}
{
var G__23852 = seq__23822_23847;
var G__23853 = chunk__23823_23848;
var G__23854 = count__23824_23849;
var G__23855 = (i__23825_23850 + 1);
seq__23822_23847 = G__23852;
chunk__23823_23848 = G__23853;
count__23824_23849 = G__23854;
i__23825_23850 = G__23855;
continue;
}
} else
{var temp__4092__auto___23856 = cljs.core.seq(seq__23822_23847);if(temp__4092__auto___23856)
{var seq__23822_23857__$1 = temp__4092__auto___23856;if(cljs.core.chunked_seq_QMARK_(seq__23822_23857__$1))
{var c__4148__auto___23858 = cljs.core.chunk_first(seq__23822_23857__$1);{
var G__23859 = cljs.core.chunk_rest(seq__23822_23857__$1);
var G__23860 = c__4148__auto___23858;
var G__23861 = cljs.core.count(c__4148__auto___23858);
var G__23862 = 0;
seq__23822_23847 = G__23859;
chunk__23823_23848 = G__23860;
count__23824_23849 = G__23861;
i__23825_23850 = G__23862;
continue;
}
} else
{var n_23863 = cljs.core.first(seq__23822_23857__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_23863;
goog.events.fireListeners(n_23863,evt.type,false,evt);
}
{
var G__23864 = cljs.core.next(seq__23822_23857__$1);
var G__23865 = null;
var G__23866 = 0;
var G__23867 = 0;
seq__23822_23847 = G__23864;
chunk__23823_23848 = G__23865;
count__23824_23849 = G__23866;
i__23825_23850 = G__23867;
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
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name(type)));var seq__23874_23880 = cljs.core.seq(evt_map);var chunk__23875_23881 = null;var count__23876_23882 = 0;var i__23877_23883 = 0;while(true){
if((i__23877_23883 < count__23876_23882))
{var vec__23878_23884 = chunk__23875_23881.cljs$core$IIndexed$_nth$arity$2(null,i__23877_23883);var k_23885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23878_23884,0,null);var v_23886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23878_23884,1,null);(evt[k_23885] = v_23886);
{
var G__23887 = seq__23874_23880;
var G__23888 = chunk__23875_23881;
var G__23889 = count__23876_23882;
var G__23890 = (i__23877_23883 + 1);
seq__23874_23880 = G__23887;
chunk__23875_23881 = G__23888;
count__23876_23882 = G__23889;
i__23877_23883 = G__23890;
continue;
}
} else
{var temp__4092__auto___23891 = cljs.core.seq(seq__23874_23880);if(temp__4092__auto___23891)
{var seq__23874_23892__$1 = temp__4092__auto___23891;if(cljs.core.chunked_seq_QMARK_(seq__23874_23892__$1))
{var c__4148__auto___23893 = cljs.core.chunk_first(seq__23874_23892__$1);{
var G__23894 = cljs.core.chunk_rest(seq__23874_23892__$1);
var G__23895 = c__4148__auto___23893;
var G__23896 = cljs.core.count(c__4148__auto___23893);
var G__23897 = 0;
seq__23874_23880 = G__23894;
chunk__23875_23881 = G__23895;
count__23876_23882 = G__23896;
i__23877_23883 = G__23897;
continue;
}
} else
{var vec__23879_23898 = cljs.core.first(seq__23874_23892__$1);var k_23899 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23879_23898,0,null);var v_23900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23879_23898,1,null);(evt[k_23899] = v_23900);
{
var G__23901 = cljs.core.next(seq__23874_23892__$1);
var G__23902 = null;
var G__23903 = 0;
var G__23904 = 0;
seq__23874_23880 = G__23901;
chunk__23875_23881 = G__23902;
count__23876_23882 = G__23903;
i__23877_23883 = G__23904;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name(type);return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2((function (p1__23905_SHARP_){return goog.events.getListeners(p1__23905_SHARP_,type__$1,false);
}),domina.nodes(content));
});
