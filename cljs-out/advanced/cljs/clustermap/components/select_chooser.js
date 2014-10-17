// Compiled by ClojureScript 0.0-2322
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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__47216,owner){var map__47230 = p__47216;var map__47230__$1 = ((cljs.core.seq_QMARK_(map__47230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47230):map__47230);var cursor = map__47230__$1;if(typeof clustermap.components.select_chooser.t47231 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t47231 = (function (cursor,map__47230,owner,p__47216,value_descriptions,key,title,select_chooser_component,meta47232){
this.cursor = cursor;
this.map__47230 = map__47230;
this.owner = owner;
this.p__47216 = p__47216;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta47232 = meta47232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t47231.cljs$lang$type = true;
clustermap.components.select_chooser.t47231.cljs$lang$ctorStr = "clustermap.components.select-chooser/t47231";
clustermap.components.select_chooser.t47231.cljs$lang$ctorPrWriter = ((function (map__47230,map__47230__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.select-chooser/t47231");
});})(map__47230,map__47230__$1,cursor))
;
clustermap.components.select_chooser.t47231.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t47231.prototype.om$core$IRender$render$arity$1 = ((function (map__47230,map__47230__$1,cursor){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs47234 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs47234))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs47234], 0))):{"className": "tbl-cell"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47234))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47234)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9504__auto____$1,map__47230,map__47230__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(this__9504__auto____$1,map__47230,map__47230__$1,cursor))
},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__47230,map__47230__$1,cursor){
return (function iter__47235(s__47236){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__47230,map__47230__$1,cursor){
return (function (){var s__47236__$1 = s__47236;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47236__$1);if(temp__4126__auto__)
{var s__47236__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47236__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47236__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47238 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47237 = (0);while(true){
if((i__47237 < size__4282__auto__))
{var vec__47241 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47237);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47241,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47241,(1),null);cljs.core.chunk_append(b__47238,(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))));
{
var G__47243 = (i__47237 + (1));
i__47237 = G__47243;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47238),iter__47235(cljs.core.chunk_rest(s__47236__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47238),null);
}
} else
{var vec__47242 = cljs.core.first(s__47236__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47242,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47242,(1),null);return cljs.core.cons((sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))),iter__47235(cljs.core.rest(s__47236__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__47230,map__47230__$1,cursor))
,null,null));
});})(this__9504__auto____$1,map__47230,map__47230__$1,cursor))
;return iter__4283__auto__(self__.value_descriptions);
})()))))));
});})(map__47230,map__47230__$1,cursor))
;
clustermap.components.select_chooser.t47231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47230,map__47230__$1,cursor){
return (function (_47233){var self__ = this;
var _47233__$1 = this;return self__.meta47232;
});})(map__47230,map__47230__$1,cursor))
;
clustermap.components.select_chooser.t47231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47230,map__47230__$1,cursor){
return (function (_47233,meta47232__$1){var self__ = this;
var _47233__$1 = this;return (new clustermap.components.select_chooser.t47231(self__.cursor,self__.map__47230,self__.owner,self__.p__47216,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta47232__$1));
});})(map__47230,map__47230__$1,cursor))
;
clustermap.components.select_chooser.__GT_t47231 = ((function (map__47230,map__47230__$1,cursor){
return (function __GT_t47231(cursor__$1,map__47230__$2,owner__$1,p__47216__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta47232){return (new clustermap.components.select_chooser.t47231(cursor__$1,map__47230__$2,owner__$1,p__47216__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta47232));
});})(map__47230,map__47230__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t47231(cursor,map__47230__$1,owner,p__47216,value_descriptions,key,title,select_chooser_component,null));
});
