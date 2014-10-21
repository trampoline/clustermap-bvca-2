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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__44576,owner){var map__44590 = p__44576;var map__44590__$1 = ((cljs.core.seq_QMARK_(map__44590))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44590):map__44590);var cursor = map__44590__$1;if(typeof clustermap.components.select_chooser.t44591 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t44591 = (function (cursor,map__44590,owner,p__44576,value_descriptions,key,title,select_chooser_component,meta44592){
this.cursor = cursor;
this.map__44590 = map__44590;
this.owner = owner;
this.p__44576 = p__44576;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta44592 = meta44592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t44591.cljs$lang$type = true;
clustermap.components.select_chooser.t44591.cljs$lang$ctorStr = "clustermap.components.select-chooser/t44591";
clustermap.components.select_chooser.t44591.cljs$lang$ctorPrWriter = ((function (map__44590,map__44590__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.select-chooser/t44591");
});})(map__44590,map__44590__$1,cursor))
;
clustermap.components.select_chooser.t44591.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t44591.prototype.om$core$IRender$render$arity$1 = ((function (map__44590,map__44590__$1,cursor){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs44594 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs44594))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs44594], 0))):{"className": "tbl-cell"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44594))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44594)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9504__auto____$1,map__44590,map__44590__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(this__9504__auto____$1,map__44590,map__44590__$1,cursor))
},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__44590,map__44590__$1,cursor){
return (function iter__44595(s__44596){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__44590,map__44590__$1,cursor){
return (function (){var s__44596__$1 = s__44596;while(true){
var temp__4126__auto__ = cljs.core.seq(s__44596__$1);if(temp__4126__auto__)
{var s__44596__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__44596__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__44596__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__44598 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__44597 = (0);while(true){
if((i__44597 < size__4282__auto__))
{var vec__44601 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__44597);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44601,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44601,(1),null);cljs.core.chunk_append(b__44598,(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))));
{
var G__44603 = (i__44597 + (1));
i__44597 = G__44603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__44598),iter__44595(cljs.core.chunk_rest(s__44596__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__44598),null);
}
} else
{var vec__44602 = cljs.core.first(s__44596__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44602,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44602,(1),null);return cljs.core.cons((sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))),iter__44595(cljs.core.rest(s__44596__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__44590,map__44590__$1,cursor))
,null,null));
});})(this__9504__auto____$1,map__44590,map__44590__$1,cursor))
;return iter__4283__auto__(self__.value_descriptions);
})()))))));
});})(map__44590,map__44590__$1,cursor))
;
clustermap.components.select_chooser.t44591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44590,map__44590__$1,cursor){
return (function (_44593){var self__ = this;
var _44593__$1 = this;return self__.meta44592;
});})(map__44590,map__44590__$1,cursor))
;
clustermap.components.select_chooser.t44591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44590,map__44590__$1,cursor){
return (function (_44593,meta44592__$1){var self__ = this;
var _44593__$1 = this;return (new clustermap.components.select_chooser.t44591(self__.cursor,self__.map__44590,self__.owner,self__.p__44576,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta44592__$1));
});})(map__44590,map__44590__$1,cursor))
;
clustermap.components.select_chooser.__GT_t44591 = ((function (map__44590,map__44590__$1,cursor){
return (function __GT_t44591(cursor__$1,map__44590__$2,owner__$1,p__44576__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta44592){return (new clustermap.components.select_chooser.t44591(cursor__$1,map__44590__$2,owner__$1,p__44576__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta44592));
});})(map__44590,map__44590__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t44591(cursor,map__44590__$1,owner,p__44576,value_descriptions,key,title,select_chooser_component,null));
});
