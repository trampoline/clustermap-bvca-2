// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.select_chooser');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__38316,owner){var map__38330 = p__38316;var map__38330__$1 = ((cljs.core.seq_QMARK_(map__38330))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38330):map__38330);var cursor = map__38330__$1;if(typeof clustermap.components.select_chooser.t38331 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t38331 = (function (cursor,map__38330,owner,p__38316,value_descriptions,key,title,select_chooser_component,meta38332){
this.cursor = cursor;
this.map__38330 = map__38330;
this.owner = owner;
this.p__38316 = p__38316;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta38332 = meta38332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t38331.cljs$lang$type = true;
clustermap.components.select_chooser.t38331.cljs$lang$ctorStr = "clustermap.components.select-chooser/t38331";
clustermap.components.select_chooser.t38331.cljs$lang$ctorPrWriter = ((function (map__38330,map__38330__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.select-chooser/t38331");
});})(map__38330,map__38330__$1,cursor))
;
clustermap.components.select_chooser.t38331.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t38331.prototype.om$core$IRender$render$arity$1 = ((function (map__38330,map__38330__$1,cursor){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs38334 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38334))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$827,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs38334], 0))):{"className": "tbl-cell"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38334))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38334)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9490__auto____$1,map__38330,map__38330__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(this__9490__auto____$1,map__38330,map__38330__$1,cursor))
},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (this__9490__auto____$1,map__38330,map__38330__$1,cursor){
return (function iter__38335(s__38336){return (new cljs.core.LazySeq(null,((function (this__9490__auto____$1,map__38330,map__38330__$1,cursor){
return (function (){var s__38336__$1 = s__38336;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38336__$1);if(temp__4126__auto__)
{var s__38336__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38336__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__38336__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__38338 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__38337 = (0);while(true){
if((i__38337 < size__4267__auto__))
{var vec__38341 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__38337);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38341,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38341,(1),null);cljs.core.chunk_append(b__38338,React.DOM.option({"value": value},sablono.interpreter.interpret(description)));
{
var G__38343 = (i__38337 + (1));
i__38337 = G__38343;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38338),iter__38335(cljs.core.chunk_rest(s__38336__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38338),null);
}
} else
{var vec__38342 = cljs.core.first(s__38336__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38342,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38342,(1),null);return cljs.core.cons(React.DOM.option({"value": value},sablono.interpreter.interpret(description)),iter__38335(cljs.core.rest(s__38336__$2)));
}
} else
{return null;
}
break;
}
});})(this__9490__auto____$1,map__38330,map__38330__$1,cursor))
,null,null));
});})(this__9490__auto____$1,map__38330,map__38330__$1,cursor))
;return iter__4268__auto__(self__.value_descriptions);
})()))))));
});})(map__38330,map__38330__$1,cursor))
;
clustermap.components.select_chooser.t38331.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38330,map__38330__$1,cursor){
return (function (_38333){var self__ = this;
var _38333__$1 = this;return self__.meta38332;
});})(map__38330,map__38330__$1,cursor))
;
clustermap.components.select_chooser.t38331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38330,map__38330__$1,cursor){
return (function (_38333,meta38332__$1){var self__ = this;
var _38333__$1 = this;return (new clustermap.components.select_chooser.t38331(self__.cursor,self__.map__38330,self__.owner,self__.p__38316,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta38332__$1));
});})(map__38330,map__38330__$1,cursor))
;
clustermap.components.select_chooser.__GT_t38331 = ((function (map__38330,map__38330__$1,cursor){
return (function __GT_t38331(cursor__$1,map__38330__$2,owner__$1,p__38316__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta38332){return (new clustermap.components.select_chooser.t38331(cursor__$1,map__38330__$2,owner__$1,p__38316__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta38332));
});})(map__38330,map__38330__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t38331(cursor,map__38330__$1,owner,p__38316,value_descriptions,key,title,select_chooser_component,null));
});
clustermap.components.select_chooser.mount = (function mount(app_state,path,elem_id,shared,title,key,value_descriptions){return om.core.root(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,title,key,value_descriptions),app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$892,shared,cljs.core.constant$keyword$895,document.getElementById(elem_id),cljs.core.constant$keyword$867,path], null));
});
