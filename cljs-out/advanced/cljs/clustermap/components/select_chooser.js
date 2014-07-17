// Compiled by ClojureScript 0.0-2261
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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__37657,owner){var map__37671 = p__37657;var map__37671__$1 = ((cljs.core.seq_QMARK_(map__37671))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37671):map__37671);var cursor = map__37671__$1;if(typeof clustermap.components.select_chooser.t37672 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t37672 = (function (cursor,map__37671,owner,p__37657,value_descriptions,key,title,select_chooser_component,meta37673){
this.cursor = cursor;
this.map__37671 = map__37671;
this.owner = owner;
this.p__37657 = p__37657;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta37673 = meta37673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t37672.cljs$lang$type = true;
clustermap.components.select_chooser.t37672.cljs$lang$ctorStr = "clustermap.components.select-chooser/t37672";
clustermap.components.select_chooser.t37672.cljs$lang$ctorPrWriter = ((function (map__37671,map__37671__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.select-chooser/t37672");
});})(map__37671,map__37671__$1,cursor))
;
clustermap.components.select_chooser.t37672.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t37672.prototype.om$core$IRender$render$arity$1 = ((function (map__37671,map__37671__$1,cursor){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs37675 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37675))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs37675], 0))):{"className": "tbl-cell"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37675))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37675)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9454__auto____$1,map__37671,map__37671__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(this__9454__auto____$1,map__37671,map__37671__$1,cursor))
},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (this__9454__auto____$1,map__37671,map__37671__$1,cursor){
return (function iter__37676(s__37677){return (new cljs.core.LazySeq(null,((function (this__9454__auto____$1,map__37671,map__37671__$1,cursor){
return (function (){var s__37677__$1 = s__37677;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37677__$1);if(temp__4126__auto__)
{var s__37677__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37677__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37677__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37679 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37678 = (0);while(true){
if((i__37678 < size__4267__auto__))
{var vec__37682 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37678);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37682,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37682,(1),null);cljs.core.chunk_append(b__37679,React.DOM.option({"value": value},sablono.interpreter.interpret(description)));
{
var G__37684 = (i__37678 + (1));
i__37678 = G__37684;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37679),iter__37676(cljs.core.chunk_rest(s__37677__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37679),null);
}
} else
{var vec__37683 = cljs.core.first(s__37677__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37683,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37683,(1),null);return cljs.core.cons(React.DOM.option({"value": value},sablono.interpreter.interpret(description)),iter__37676(cljs.core.rest(s__37677__$2)));
}
} else
{return null;
}
break;
}
});})(this__9454__auto____$1,map__37671,map__37671__$1,cursor))
,null,null));
});})(this__9454__auto____$1,map__37671,map__37671__$1,cursor))
;return iter__4268__auto__(self__.value_descriptions);
})()))))));
});})(map__37671,map__37671__$1,cursor))
;
clustermap.components.select_chooser.t37672.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37671,map__37671__$1,cursor){
return (function (_37674){var self__ = this;
var _37674__$1 = this;return self__.meta37673;
});})(map__37671,map__37671__$1,cursor))
;
clustermap.components.select_chooser.t37672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37671,map__37671__$1,cursor){
return (function (_37674,meta37673__$1){var self__ = this;
var _37674__$1 = this;return (new clustermap.components.select_chooser.t37672(self__.cursor,self__.map__37671,self__.owner,self__.p__37657,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta37673__$1));
});})(map__37671,map__37671__$1,cursor))
;
clustermap.components.select_chooser.__GT_t37672 = ((function (map__37671,map__37671__$1,cursor){
return (function __GT_t37672(cursor__$1,map__37671__$2,owner__$1,p__37657__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta37673){return (new clustermap.components.select_chooser.t37672(cursor__$1,map__37671__$2,owner__$1,p__37657__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta37673));
});})(map__37671,map__37671__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t37672(cursor,map__37671__$1,owner,p__37657,value_descriptions,key,title,select_chooser_component,null));
});
clustermap.components.select_chooser.mount = (function mount(app_state,path,elem_id,shared,title,key,value_descriptions){return om.core.root(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,title,key,value_descriptions),app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$879,shared,cljs.core.constant$keyword$882,document.getElementById(elem_id),cljs.core.constant$keyword$854,path], null));
});
