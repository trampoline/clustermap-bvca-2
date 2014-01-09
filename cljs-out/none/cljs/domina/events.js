// Compiled by ClojureScript 0.0-2138
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj14828 = {};return obj14828;
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
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
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
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t14832 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t14832 = (function (evt,f,create_listener_function,meta14833){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta14833 = meta14833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t14832.cljs$lang$type = true;
domina.events.t14832.cljs$lang$ctorStr = "domina.events/t14832";
domina.events.t14832.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"domina.events/t14832");
});
domina.events.t14832.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4090__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4090__auto__))
{var val = temp__4090__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t14832.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3406__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return not_found;
}
});
domina.events.t14832.prototype.domina$events$Event$ = true;
domina.events.t14832.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t14832.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t14832.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t14832.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t14832.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t14832.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t14832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14834){var self__ = this;
var _14834__$1 = this;return self__.meta14833;
});
domina.events.t14832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14834,meta14833__$1){var self__ = this;
var _14834__$1 = this;return (new domina.events.t14832(self__.evt,self__.f,self__.create_listener_function,meta14833__$1));
});
domina.events.__GT_t14832 = (function __GT_t14832(evt__$1,f__$1,create_listener_function__$1,meta14833){return (new domina.events.t14832(evt__$1,f__$1,create_listener_function__$1,meta14833));
});
}
return (new domina.events.t14832(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4117__auto__ = (function iter__14839(s__14840){return (new cljs.core.LazySeq(null,(function (){var s__14840__$1 = s__14840;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14840__$1);if(temp__4092__auto__)
{var s__14840__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14840__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__14840__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__14842 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__14841 = 0;while(true){
if((i__14841 < size__4116__auto__))
{var node = cljs.core._nth.call(null,c__4115__auto__,i__14841);cljs.core.chunk_append.call(null,b__14842,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__14843 = (i__14841 + 1);
i__14841 = G__14843;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14842),iter__14839.call(null,cljs.core.chunk_rest.call(null,s__14840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14842),null);
}
} else
{var node = cljs.core.first.call(null,s__14840__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__14839.call(null,cljs.core.rest.call(null,s__14840__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
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
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
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
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
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
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
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
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__14852 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14853 = null;var count__14854 = 0;var i__14855 = 0;while(true){
if((i__14855 < count__14854))
{var node = cljs.core._nth.call(null,chunk__14853,i__14855);goog.events.removeAll(node);
{
var G__14860 = seq__14852;
var G__14861 = chunk__14853;
var G__14862 = count__14854;
var G__14863 = (i__14855 + 1);
seq__14852 = G__14860;
chunk__14853 = G__14861;
count__14854 = G__14862;
i__14855 = G__14863;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14852);if(temp__4092__auto__)
{var seq__14852__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14852__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14852__$1);{
var G__14864 = cljs.core.chunk_rest.call(null,seq__14852__$1);
var G__14865 = c__4148__auto__;
var G__14866 = cljs.core.count.call(null,c__4148__auto__);
var G__14867 = 0;
seq__14852 = G__14864;
chunk__14853 = G__14865;
count__14854 = G__14866;
i__14855 = G__14867;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14852__$1);goog.events.removeAll(node);
{
var G__14868 = cljs.core.next.call(null,seq__14852__$1);
var G__14869 = null;
var G__14870 = 0;
var G__14871 = 0;
seq__14852 = G__14868;
chunk__14853 = G__14869;
count__14854 = G__14870;
i__14855 = G__14871;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__14856 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__14857 = null;var count__14858 = 0;var i__14859 = 0;while(true){
if((i__14859 < count__14858))
{var node = cljs.core._nth.call(null,chunk__14857,i__14859);goog.events.removeAll(node,type__$1);
{
var G__14872 = seq__14856;
var G__14873 = chunk__14857;
var G__14874 = count__14858;
var G__14875 = (i__14859 + 1);
seq__14856 = G__14872;
chunk__14857 = G__14873;
count__14858 = G__14874;
i__14859 = G__14875;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14856);if(temp__4092__auto__)
{var seq__14856__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14856__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__14856__$1);{
var G__14876 = cljs.core.chunk_rest.call(null,seq__14856__$1);
var G__14877 = c__4148__auto__;
var G__14878 = cljs.core.count.call(null,c__4148__auto__);
var G__14879 = 0;
seq__14856 = G__14876;
chunk__14857 = G__14877;
count__14858 = G__14878;
i__14859 = G__14879;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__14856__$1);goog.events.removeAll(node,type__$1);
{
var G__14880 = cljs.core.next.call(null,seq__14856__$1);
var G__14881 = null;
var G__14882 = 0;
var G__14883 = 0;
seq__14856 = G__14880;
chunk__14857 = G__14881;
count__14858 = G__14882;
i__14859 = G__14883;
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
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4090__auto__ = n.parentNode;if(cljs.core.truth_(temp__4090__auto__))
{var parent = temp__4090__auto__;{
var G__14884 = parent;
var G__14885 = cljs.core.cons.call(null,parent,so_far);
n = G__14884;
so_far = G__14885;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__14894_14902 = cljs.core.seq.call(null,ancestors);var chunk__14895_14903 = null;var count__14896_14904 = 0;var i__14897_14905 = 0;while(true){
if((i__14897_14905 < count__14896_14904))
{var n_14906 = cljs.core._nth.call(null,chunk__14895_14903,i__14897_14905);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14906;
goog.events.fireListeners(n_14906,evt.type,true,evt);
}
{
var G__14907 = seq__14894_14902;
var G__14908 = chunk__14895_14903;
var G__14909 = count__14896_14904;
var G__14910 = (i__14897_14905 + 1);
seq__14894_14902 = G__14907;
chunk__14895_14903 = G__14908;
count__14896_14904 = G__14909;
i__14897_14905 = G__14910;
continue;
}
} else
{var temp__4092__auto___14911 = cljs.core.seq.call(null,seq__14894_14902);if(temp__4092__auto___14911)
{var seq__14894_14912__$1 = temp__4092__auto___14911;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14894_14912__$1))
{var c__4148__auto___14913 = cljs.core.chunk_first.call(null,seq__14894_14912__$1);{
var G__14914 = cljs.core.chunk_rest.call(null,seq__14894_14912__$1);
var G__14915 = c__4148__auto___14913;
var G__14916 = cljs.core.count.call(null,c__4148__auto___14913);
var G__14917 = 0;
seq__14894_14902 = G__14914;
chunk__14895_14903 = G__14915;
count__14896_14904 = G__14916;
i__14897_14905 = G__14917;
continue;
}
} else
{var n_14918 = cljs.core.first.call(null,seq__14894_14912__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14918;
goog.events.fireListeners(n_14918,evt.type,true,evt);
}
{
var G__14919 = cljs.core.next.call(null,seq__14894_14912__$1);
var G__14920 = null;
var G__14921 = 0;
var G__14922 = 0;
seq__14894_14902 = G__14919;
chunk__14895_14903 = G__14920;
count__14896_14904 = G__14921;
i__14897_14905 = G__14922;
continue;
}
}
} else
{}
}
break;
}
var seq__14898_14923 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__14899_14924 = null;var count__14900_14925 = 0;var i__14901_14926 = 0;while(true){
if((i__14901_14926 < count__14900_14925))
{var n_14927 = cljs.core._nth.call(null,chunk__14899_14924,i__14901_14926);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14927;
goog.events.fireListeners(n_14927,evt.type,false,evt);
}
{
var G__14928 = seq__14898_14923;
var G__14929 = chunk__14899_14924;
var G__14930 = count__14900_14925;
var G__14931 = (i__14901_14926 + 1);
seq__14898_14923 = G__14928;
chunk__14899_14924 = G__14929;
count__14900_14925 = G__14930;
i__14901_14926 = G__14931;
continue;
}
} else
{var temp__4092__auto___14932 = cljs.core.seq.call(null,seq__14898_14923);if(temp__4092__auto___14932)
{var seq__14898_14933__$1 = temp__4092__auto___14932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14898_14933__$1))
{var c__4148__auto___14934 = cljs.core.chunk_first.call(null,seq__14898_14933__$1);{
var G__14935 = cljs.core.chunk_rest.call(null,seq__14898_14933__$1);
var G__14936 = c__4148__auto___14934;
var G__14937 = cljs.core.count.call(null,c__4148__auto___14934);
var G__14938 = 0;
seq__14898_14923 = G__14935;
chunk__14899_14924 = G__14936;
count__14900_14925 = G__14937;
i__14901_14926 = G__14938;
continue;
}
} else
{var n_14939 = cljs.core.first.call(null,seq__14898_14933__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_14939;
goog.events.fireListeners(n_14939,evt.type,false,evt);
}
{
var G__14940 = cljs.core.next.call(null,seq__14898_14933__$1);
var G__14941 = null;
var G__14942 = 0;
var G__14943 = 0;
seq__14898_14923 = G__14940;
chunk__14899_14924 = G__14941;
count__14900_14925 = G__14942;
i__14901_14926 = G__14943;
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
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__14950_14956 = cljs.core.seq.call(null,evt_map);var chunk__14951_14957 = null;var count__14952_14958 = 0;var i__14953_14959 = 0;while(true){
if((i__14953_14959 < count__14952_14958))
{var vec__14954_14960 = cljs.core._nth.call(null,chunk__14951_14957,i__14953_14959);var k_14961 = cljs.core.nth.call(null,vec__14954_14960,0,null);var v_14962 = cljs.core.nth.call(null,vec__14954_14960,1,null);(evt[k_14961] = v_14962);
{
var G__14963 = seq__14950_14956;
var G__14964 = chunk__14951_14957;
var G__14965 = count__14952_14958;
var G__14966 = (i__14953_14959 + 1);
seq__14950_14956 = G__14963;
chunk__14951_14957 = G__14964;
count__14952_14958 = G__14965;
i__14953_14959 = G__14966;
continue;
}
} else
{var temp__4092__auto___14967 = cljs.core.seq.call(null,seq__14950_14956);if(temp__4092__auto___14967)
{var seq__14950_14968__$1 = temp__4092__auto___14967;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14950_14968__$1))
{var c__4148__auto___14969 = cljs.core.chunk_first.call(null,seq__14950_14968__$1);{
var G__14970 = cljs.core.chunk_rest.call(null,seq__14950_14968__$1);
var G__14971 = c__4148__auto___14969;
var G__14972 = cljs.core.count.call(null,c__4148__auto___14969);
var G__14973 = 0;
seq__14950_14956 = G__14970;
chunk__14951_14957 = G__14971;
count__14952_14958 = G__14972;
i__14953_14959 = G__14973;
continue;
}
} else
{var vec__14955_14974 = cljs.core.first.call(null,seq__14950_14968__$1);var k_14975 = cljs.core.nth.call(null,vec__14955_14974,0,null);var v_14976 = cljs.core.nth.call(null,vec__14955_14974,1,null);(evt[k_14975] = v_14976);
{
var G__14977 = cljs.core.next.call(null,seq__14950_14968__$1);
var G__14978 = null;
var G__14979 = 0;
var G__14980 = 0;
seq__14950_14956 = G__14977;
chunk__14951_14957 = G__14978;
count__14952_14958 = G__14979;
i__14953_14959 = G__14980;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,(function (p1__14981_SHARP_){return goog.events.getListeners(p1__14981_SHARP_,type__$1,false);
}),domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map