// Compiled by ClojureScript 0.0-2227
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj28820 = {};return obj28820;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.prevent_default[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.prevent_default["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.current_target[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.current_target["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.event_type[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.event_type["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3529__auto__ = evt;if(and__3529__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3529__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4168__auto__ = (((evt == null))?null:evt);return (function (){var or__3541__auto__ = (domina.events.raw_event[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.events.raw_event["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t28824 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t28824 = (function (evt,f,create_listener_function,meta28825){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta28825 = meta28825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t28824.cljs$lang$type = true;
domina.events.t28824.cljs$lang$ctorStr = "domina.events/t28824";
domina.events.t28824.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"domina.events/t28824");
});
domina.events.t28824.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t28824.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3541__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return not_found;
}
});
domina.events.t28824.prototype.domina$events$Event$ = true;
domina.events.t28824.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t28824.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t28824.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t28824.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t28824.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t28824.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t28824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28826){var self__ = this;
var _28826__$1 = this;return self__.meta28825;
});
domina.events.t28824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28826,meta28825__$1){var self__ = this;
var _28826__$1 = this;return (new domina.events.t28824(self__.evt,self__.f,self__.create_listener_function,meta28825__$1));
});
domina.events.__GT_t28824 = (function __GT_t28824(evt__$1,f__$1,create_listener_function__$1,meta28825){return (new domina.events.t28824(evt__$1,f__$1,create_listener_function__$1,meta28825));
});
}
return (new domina.events.t28824(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4266__auto__ = ((function (f,t){
return (function iter__28831(s__28832){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__28832__$1 = s__28832;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28832__$1);if(temp__4126__auto__)
{var s__28832__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28832__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__28832__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__28834 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__28833 = 0;while(true){
if((i__28833 < size__4265__auto__))
{var node = cljs.core._nth.call(null,c__4264__auto__,i__28833);cljs.core.chunk_append.call(null,b__28834,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__28835 = (i__28833 + 1);
i__28833 = G__28835;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28834),iter__28831.call(null,cljs.core.chunk_rest.call(null,s__28832__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28834),null);
}
} else
{var node = cljs.core.first.call(null,s__28832__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__28831.call(null,cljs.core.rest.call(null,s__28832__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4266__auto__.call(null,domina.nodes.call(null,content));
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
var unlisten_BANG___1 = (function (content){var seq__28844 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28845 = null;var count__28846 = 0;var i__28847 = 0;while(true){
if((i__28847 < count__28846))
{var node = cljs.core._nth.call(null,chunk__28845,i__28847);goog.events.removeAll(node);
{
var G__28852 = seq__28844;
var G__28853 = chunk__28845;
var G__28854 = count__28846;
var G__28855 = (i__28847 + 1);
seq__28844 = G__28852;
chunk__28845 = G__28853;
count__28846 = G__28854;
i__28847 = G__28855;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28844);if(temp__4126__auto__)
{var seq__28844__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28844__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__28844__$1);{
var G__28856 = cljs.core.chunk_rest.call(null,seq__28844__$1);
var G__28857 = c__4297__auto__;
var G__28858 = cljs.core.count.call(null,c__4297__auto__);
var G__28859 = 0;
seq__28844 = G__28856;
chunk__28845 = G__28857;
count__28846 = G__28858;
i__28847 = G__28859;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28844__$1);goog.events.removeAll(node);
{
var G__28860 = cljs.core.next.call(null,seq__28844__$1);
var G__28861 = null;
var G__28862 = 0;
var G__28863 = 0;
seq__28844 = G__28860;
chunk__28845 = G__28861;
count__28846 = G__28862;
i__28847 = G__28863;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__28848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28849 = null;var count__28850 = 0;var i__28851 = 0;while(true){
if((i__28851 < count__28850))
{var node = cljs.core._nth.call(null,chunk__28849,i__28851);goog.events.removeAll(node,type__$1);
{
var G__28864 = seq__28848;
var G__28865 = chunk__28849;
var G__28866 = count__28850;
var G__28867 = (i__28851 + 1);
seq__28848 = G__28864;
chunk__28849 = G__28865;
count__28850 = G__28866;
i__28851 = G__28867;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__28848);if(temp__4126__auto__)
{var seq__28848__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28848__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__28848__$1);{
var G__28868 = cljs.core.chunk_rest.call(null,seq__28848__$1);
var G__28869 = c__4297__auto__;
var G__28870 = cljs.core.count.call(null,c__4297__auto__);
var G__28871 = 0;
seq__28848 = G__28868;
chunk__28849 = G__28869;
count__28850 = G__28870;
i__28851 = G__28871;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__28848__$1);goog.events.removeAll(node,type__$1);
{
var G__28872 = cljs.core.next.call(null,seq__28848__$1);
var G__28873 = null;
var G__28874 = 0;
var G__28875 = 0;
seq__28848 = G__28872;
chunk__28849 = G__28873;
count__28850 = G__28874;
i__28851 = G__28875;
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
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__28876 = parent;
var G__28877 = cljs.core.cons.call(null,parent,so_far);
n = G__28876;
so_far = G__28877;
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
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__28886_28894 = cljs.core.seq.call(null,ancestors);var chunk__28887_28895 = null;var count__28888_28896 = 0;var i__28889_28897 = 0;while(true){
if((i__28889_28897 < count__28888_28896))
{var n_28898 = cljs.core._nth.call(null,chunk__28887_28895,i__28889_28897);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28898;
goog.events.fireListeners(n_28898,evt.type,true,evt);
}
{
var G__28899 = seq__28886_28894;
var G__28900 = chunk__28887_28895;
var G__28901 = count__28888_28896;
var G__28902 = (i__28889_28897 + 1);
seq__28886_28894 = G__28899;
chunk__28887_28895 = G__28900;
count__28888_28896 = G__28901;
i__28889_28897 = G__28902;
continue;
}
} else
{var temp__4126__auto___28903 = cljs.core.seq.call(null,seq__28886_28894);if(temp__4126__auto___28903)
{var seq__28886_28904__$1 = temp__4126__auto___28903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28886_28904__$1))
{var c__4297__auto___28905 = cljs.core.chunk_first.call(null,seq__28886_28904__$1);{
var G__28906 = cljs.core.chunk_rest.call(null,seq__28886_28904__$1);
var G__28907 = c__4297__auto___28905;
var G__28908 = cljs.core.count.call(null,c__4297__auto___28905);
var G__28909 = 0;
seq__28886_28894 = G__28906;
chunk__28887_28895 = G__28907;
count__28888_28896 = G__28908;
i__28889_28897 = G__28909;
continue;
}
} else
{var n_28910 = cljs.core.first.call(null,seq__28886_28904__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28910;
goog.events.fireListeners(n_28910,evt.type,true,evt);
}
{
var G__28911 = cljs.core.next.call(null,seq__28886_28904__$1);
var G__28912 = null;
var G__28913 = 0;
var G__28914 = 0;
seq__28886_28894 = G__28911;
chunk__28887_28895 = G__28912;
count__28888_28896 = G__28913;
i__28889_28897 = G__28914;
continue;
}
}
} else
{}
}
break;
}
var seq__28890_28915 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__28891_28916 = null;var count__28892_28917 = 0;var i__28893_28918 = 0;while(true){
if((i__28893_28918 < count__28892_28917))
{var n_28919 = cljs.core._nth.call(null,chunk__28891_28916,i__28893_28918);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28919;
goog.events.fireListeners(n_28919,evt.type,false,evt);
}
{
var G__28920 = seq__28890_28915;
var G__28921 = chunk__28891_28916;
var G__28922 = count__28892_28917;
var G__28923 = (i__28893_28918 + 1);
seq__28890_28915 = G__28920;
chunk__28891_28916 = G__28921;
count__28892_28917 = G__28922;
i__28893_28918 = G__28923;
continue;
}
} else
{var temp__4126__auto___28924 = cljs.core.seq.call(null,seq__28890_28915);if(temp__4126__auto___28924)
{var seq__28890_28925__$1 = temp__4126__auto___28924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28890_28925__$1))
{var c__4297__auto___28926 = cljs.core.chunk_first.call(null,seq__28890_28925__$1);{
var G__28927 = cljs.core.chunk_rest.call(null,seq__28890_28925__$1);
var G__28928 = c__4297__auto___28926;
var G__28929 = cljs.core.count.call(null,c__4297__auto___28926);
var G__28930 = 0;
seq__28890_28915 = G__28927;
chunk__28891_28916 = G__28928;
count__28892_28917 = G__28929;
i__28893_28918 = G__28930;
continue;
}
} else
{var n_28931 = cljs.core.first.call(null,seq__28890_28925__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_28931;
goog.events.fireListeners(n_28931,evt.type,false,evt);
}
{
var G__28932 = cljs.core.next.call(null,seq__28890_28925__$1);
var G__28933 = null;
var G__28934 = 0;
var G__28935 = 0;
seq__28890_28915 = G__28932;
chunk__28891_28916 = G__28933;
count__28892_28917 = G__28934;
i__28893_28918 = G__28935;
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
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3529__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3529__auto__))
{return o.dispatchEvent;
} else
{return and__3529__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__28942_28948 = cljs.core.seq.call(null,evt_map);var chunk__28943_28949 = null;var count__28944_28950 = 0;var i__28945_28951 = 0;while(true){
if((i__28945_28951 < count__28944_28950))
{var vec__28946_28952 = cljs.core._nth.call(null,chunk__28943_28949,i__28945_28951);var k_28953 = cljs.core.nth.call(null,vec__28946_28952,0,null);var v_28954 = cljs.core.nth.call(null,vec__28946_28952,1,null);(evt[k_28953] = v_28954);
{
var G__28955 = seq__28942_28948;
var G__28956 = chunk__28943_28949;
var G__28957 = count__28944_28950;
var G__28958 = (i__28945_28951 + 1);
seq__28942_28948 = G__28955;
chunk__28943_28949 = G__28956;
count__28944_28950 = G__28957;
i__28945_28951 = G__28958;
continue;
}
} else
{var temp__4126__auto___28959 = cljs.core.seq.call(null,seq__28942_28948);if(temp__4126__auto___28959)
{var seq__28942_28960__$1 = temp__4126__auto___28959;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28942_28960__$1))
{var c__4297__auto___28961 = cljs.core.chunk_first.call(null,seq__28942_28960__$1);{
var G__28962 = cljs.core.chunk_rest.call(null,seq__28942_28960__$1);
var G__28963 = c__4297__auto___28961;
var G__28964 = cljs.core.count.call(null,c__4297__auto___28961);
var G__28965 = 0;
seq__28942_28948 = G__28962;
chunk__28943_28949 = G__28963;
count__28944_28950 = G__28964;
i__28945_28951 = G__28965;
continue;
}
} else
{var vec__28947_28966 = cljs.core.first.call(null,seq__28942_28960__$1);var k_28967 = cljs.core.nth.call(null,vec__28947_28966,0,null);var v_28968 = cljs.core.nth.call(null,vec__28947_28966,1,null);(evt[k_28967] = v_28968);
{
var G__28969 = cljs.core.next.call(null,seq__28942_28960__$1);
var G__28970 = null;
var G__28971 = 0;
var G__28972 = 0;
seq__28942_28948 = G__28969;
chunk__28943_28949 = G__28970;
count__28944_28950 = G__28971;
i__28945_28951 = G__28972;
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
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__28973_SHARP_){return goog.events.getListeners(p1__28973_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
