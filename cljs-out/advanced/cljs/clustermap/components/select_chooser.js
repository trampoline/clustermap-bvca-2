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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__40461,owner){var map__40475 = p__40461;var map__40475__$1 = ((cljs.core.seq_QMARK_(map__40475))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40475):map__40475);var cursor = map__40475__$1;if(typeof clustermap.components.select_chooser.t40476 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t40476 = (function (cursor,map__40475,owner,p__40461,value_descriptions,key,title,select_chooser_component,meta40477){
this.cursor = cursor;
this.map__40475 = map__40475;
this.owner = owner;
this.p__40461 = p__40461;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta40477 = meta40477;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t40476.cljs$lang$type = true;
clustermap.components.select_chooser.t40476.cljs$lang$ctorStr = "clustermap.components.select-chooser/t40476";
clustermap.components.select_chooser.t40476.cljs$lang$ctorPrWriter = ((function (map__40475,map__40475__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.select-chooser/t40476");
});})(map__40475,map__40475__$1,cursor))
;
clustermap.components.select_chooser.t40476.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t40476.prototype.om$core$IRender$render$arity$1 = ((function (map__40475,map__40475__$1,cursor){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs40479 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs40479))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs40479], 0))):{"className": "tbl-cell"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40479))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40479)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9504__auto____$1,map__40475,map__40475__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(this__9504__auto____$1,map__40475,map__40475__$1,cursor))
},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__40475,map__40475__$1,cursor){
return (function iter__40480(s__40481){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__40475,map__40475__$1,cursor){
return (function (){var s__40481__$1 = s__40481;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40481__$1);if(temp__4126__auto__)
{var s__40481__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40481__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40481__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40483 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40482 = (0);while(true){
if((i__40482 < size__4282__auto__))
{var vec__40486 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40482);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40486,(1),null);cljs.core.chunk_append(b__40483,(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))));
{
var G__40488 = (i__40482 + (1));
i__40482 = G__40488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40483),iter__40480(cljs.core.chunk_rest(s__40481__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40483),null);
}
} else
{var vec__40487 = cljs.core.first(s__40481__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40487,(1),null);return cljs.core.cons((sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": value},sablono.interpreter.interpret(description)) : sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret(description))),iter__40480(cljs.core.rest(s__40481__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__40475,map__40475__$1,cursor))
,null,null));
});})(this__9504__auto____$1,map__40475,map__40475__$1,cursor))
;return iter__4283__auto__(self__.value_descriptions);
})()))))));
});})(map__40475,map__40475__$1,cursor))
;
clustermap.components.select_chooser.t40476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40475,map__40475__$1,cursor){
return (function (_40478){var self__ = this;
var _40478__$1 = this;return self__.meta40477;
});})(map__40475,map__40475__$1,cursor))
;
clustermap.components.select_chooser.t40476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40475,map__40475__$1,cursor){
return (function (_40478,meta40477__$1){var self__ = this;
var _40478__$1 = this;return (new clustermap.components.select_chooser.t40476(self__.cursor,self__.map__40475,self__.owner,self__.p__40461,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta40477__$1));
});})(map__40475,map__40475__$1,cursor))
;
clustermap.components.select_chooser.__GT_t40476 = ((function (map__40475,map__40475__$1,cursor){
return (function __GT_t40476(cursor__$1,map__40475__$2,owner__$1,p__40461__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta40477){return (new clustermap.components.select_chooser.t40476(cursor__$1,map__40475__$2,owner__$1,p__40461__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta40477));
});})(map__40475,map__40475__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t40476(cursor,map__40475__$1,owner,p__40461,value_descriptions,key,title,select_chooser_component,null));
});
