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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__21408,owner){var map__21422 = p__21408;var map__21422__$1 = ((cljs.core.seq_QMARK_.call(null,map__21422))?cljs.core.apply.call(null,cljs.core.hash_map,map__21422):map__21422);var cursor = map__21422__$1;if(typeof clustermap.components.select_chooser.t21423 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t21423 = (function (cursor,map__21422,owner,p__21408,value_descriptions,key,title,select_chooser_component,meta21424){
this.cursor = cursor;
this.map__21422 = map__21422;
this.owner = owner;
this.p__21408 = p__21408;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta21424 = meta21424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t21423.cljs$lang$type = true;
clustermap.components.select_chooser.t21423.cljs$lang$ctorStr = "clustermap.components.select-chooser/t21423";
clustermap.components.select_chooser.t21423.cljs$lang$ctorPrWriter = ((function (map__21422,map__21422__$1,cursor){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.select-chooser/t21423");
});})(map__21422,map__21422__$1,cursor))
;
clustermap.components.select_chooser.t21423.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t21423.prototype.om$core$IRender$render$arity$1 = ((function (map__21422,map__21422__$1,cursor){
return (function (this__13555__auto__){var self__ = this;
var this__13555__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs21426 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs21426))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs21426)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21426))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21426)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__13555__auto____$1,map__21422,map__21422__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__13555__auto____$1,map__21422,map__21422__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__8625__auto__ = ((function (this__13555__auto____$1,map__21422,map__21422__$1,cursor){
return (function iter__21427(s__21428){return (new cljs.core.LazySeq(null,((function (this__13555__auto____$1,map__21422,map__21422__$1,cursor){
return (function (){var s__21428__$1 = s__21428;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21428__$1);if(temp__4126__auto__)
{var s__21428__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21428__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21428__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21430 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21429 = (0);while(true){
if((i__21429 < size__8624__auto__))
{var vec__21433 = cljs.core._nth.call(null,c__8623__auto__,i__21429);var value = cljs.core.nth.call(null,vec__21433,(0),null);var description = cljs.core.nth.call(null,vec__21433,(1),null);cljs.core.chunk_append.call(null,b__21430,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__21435 = (i__21429 + (1));
i__21429 = G__21435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21430),iter__21427.call(null,cljs.core.chunk_rest.call(null,s__21428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21430),null);
}
} else
{var vec__21434 = cljs.core.first.call(null,s__21428__$2);var value = cljs.core.nth.call(null,vec__21434,(0),null);var description = cljs.core.nth.call(null,vec__21434,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__21427.call(null,cljs.core.rest.call(null,s__21428__$2)));
}
} else
{return null;
}
break;
}
});})(this__13555__auto____$1,map__21422,map__21422__$1,cursor))
,null,null));
});})(this__13555__auto____$1,map__21422,map__21422__$1,cursor))
;return iter__8625__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__21422,map__21422__$1,cursor))
;
clustermap.components.select_chooser.t21423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21422,map__21422__$1,cursor){
return (function (_21425){var self__ = this;
var _21425__$1 = this;return self__.meta21424;
});})(map__21422,map__21422__$1,cursor))
;
clustermap.components.select_chooser.t21423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21422,map__21422__$1,cursor){
return (function (_21425,meta21424__$1){var self__ = this;
var _21425__$1 = this;return (new clustermap.components.select_chooser.t21423(self__.cursor,self__.map__21422,self__.owner,self__.p__21408,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta21424__$1));
});})(map__21422,map__21422__$1,cursor))
;
clustermap.components.select_chooser.__GT_t21423 = ((function (map__21422,map__21422__$1,cursor){
return (function __GT_t21423(cursor__$1,map__21422__$2,owner__$1,p__21408__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta21424){return (new clustermap.components.select_chooser.t21423(cursor__$1,map__21422__$2,owner__$1,p__21408__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta21424));
});})(map__21422,map__21422__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t21423(cursor,map__21422__$1,owner,p__21408,value_descriptions,key,title,select_chooser_component,null));
});

//# sourceMappingURL=select_chooser.js.map