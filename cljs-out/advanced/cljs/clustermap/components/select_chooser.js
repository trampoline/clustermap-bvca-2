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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__37522,owner){var map__37536 = p__37522;var map__37536__$1 = ((cljs.core.seq_QMARK_(map__37536))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37536):map__37536);var cursor = map__37536__$1;if(typeof clustermap.components.select_chooser.t37537 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t37537 = (function (cursor,map__37536,owner,p__37522,value_descriptions,key,title,select_chooser_component,meta37538){
this.cursor = cursor;
this.map__37536 = map__37536;
this.owner = owner;
this.p__37522 = p__37522;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta37538 = meta37538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t37537.cljs$lang$type = true;
clustermap.components.select_chooser.t37537.cljs$lang$ctorStr = "clustermap.components.select-chooser/t37537";
clustermap.components.select_chooser.t37537.cljs$lang$ctorPrWriter = ((function (map__37536,map__37536__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.select-chooser/t37537");
});})(map__37536,map__37536__$1,cursor))
;
clustermap.components.select_chooser.t37537.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t37537.prototype.om$core$IRender$render$arity$1 = ((function (map__37536,map__37536__$1,cursor){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs37540 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37540))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs37540], 0))):{"className": "tbl-cell"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37540)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9454__auto____$1,map__37536,map__37536__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(this__9454__auto____$1,map__37536,map__37536__$1,cursor))
},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (this__9454__auto____$1,map__37536,map__37536__$1,cursor){
return (function iter__37541(s__37542){return (new cljs.core.LazySeq(null,((function (this__9454__auto____$1,map__37536,map__37536__$1,cursor){
return (function (){var s__37542__$1 = s__37542;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37542__$1);if(temp__4126__auto__)
{var s__37542__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37542__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37542__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37544 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37543 = (0);while(true){
if((i__37543 < size__4267__auto__))
{var vec__37547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37543);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37547,(1),null);cljs.core.chunk_append(b__37544,React.DOM.option({"value": value},sablono.interpreter.interpret(description)));
{
var G__37549 = (i__37543 + (1));
i__37543 = G__37549;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37544),iter__37541(cljs.core.chunk_rest(s__37542__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37544),null);
}
} else
{var vec__37548 = cljs.core.first(s__37542__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37548,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37548,(1),null);return cljs.core.cons(React.DOM.option({"value": value},sablono.interpreter.interpret(description)),iter__37541(cljs.core.rest(s__37542__$2)));
}
} else
{return null;
}
break;
}
});})(this__9454__auto____$1,map__37536,map__37536__$1,cursor))
,null,null));
});})(this__9454__auto____$1,map__37536,map__37536__$1,cursor))
;return iter__4268__auto__(self__.value_descriptions);
})()))))));
});})(map__37536,map__37536__$1,cursor))
;
clustermap.components.select_chooser.t37537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37536,map__37536__$1,cursor){
return (function (_37539){var self__ = this;
var _37539__$1 = this;return self__.meta37538;
});})(map__37536,map__37536__$1,cursor))
;
clustermap.components.select_chooser.t37537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37536,map__37536__$1,cursor){
return (function (_37539,meta37538__$1){var self__ = this;
var _37539__$1 = this;return (new clustermap.components.select_chooser.t37537(self__.cursor,self__.map__37536,self__.owner,self__.p__37522,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta37538__$1));
});})(map__37536,map__37536__$1,cursor))
;
clustermap.components.select_chooser.__GT_t37537 = ((function (map__37536,map__37536__$1,cursor){
return (function __GT_t37537(cursor__$1,map__37536__$2,owner__$1,p__37522__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta37538){return (new clustermap.components.select_chooser.t37537(cursor__$1,map__37536__$2,owner__$1,p__37522__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta37538));
});})(map__37536,map__37536__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t37537(cursor,map__37536__$1,owner,p__37522,value_descriptions,key,title,select_chooser_component,null));
});
clustermap.components.select_chooser.mount = (function mount(app_state,path,elem_id,shared,title,key,value_descriptions){return om.core.root(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(clustermap.components.select_chooser.select_chooser_component,title,key,value_descriptions),app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$875,shared,cljs.core.constant$keyword$878,document.getElementById(elem_id),cljs.core.constant$keyword$850,path], null));
});
