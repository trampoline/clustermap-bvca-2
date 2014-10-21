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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__58642,owner){var map__58656 = p__58642;var map__58656__$1 = ((cljs.core.seq_QMARK_.call(null,map__58656))?cljs.core.apply.call(null,cljs.core.hash_map,map__58656):map__58656);var cursor = map__58656__$1;if(typeof clustermap.components.select_chooser.t58657 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t58657 = (function (cursor,map__58656,owner,p__58642,value_descriptions,key,title,select_chooser_component,meta58658){
this.cursor = cursor;
this.map__58656 = map__58656;
this.owner = owner;
this.p__58642 = p__58642;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta58658 = meta58658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t58657.cljs$lang$type = true;
clustermap.components.select_chooser.t58657.cljs$lang$ctorStr = "clustermap.components.select-chooser/t58657";
clustermap.components.select_chooser.t58657.cljs$lang$ctorPrWriter = ((function (map__58656,map__58656__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.select-chooser/t58657");
});})(map__58656,map__58656__$1,cursor))
;
clustermap.components.select_chooser.t58657.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t58657.prototype.om$core$IRender$render$arity$1 = ((function (map__58656,map__58656__$1,cursor){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs58660 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs58660))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs58660)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58660))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58660)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9504__auto____$1,map__58656,map__58656__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__9504__auto____$1,map__58656,map__58656__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__58656,map__58656__$1,cursor){
return (function iter__58661(s__58662){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__58656,map__58656__$1,cursor){
return (function (){var s__58662__$1 = s__58662;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__58662__$1);if(temp__4126__auto__)
{var s__58662__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__58662__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__58662__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__58664 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__58663 = (0);while(true){
if((i__58663 < size__4282__auto__))
{var vec__58667 = cljs.core._nth.call(null,c__4281__auto__,i__58663);var value = cljs.core.nth.call(null,vec__58667,(0),null);var description = cljs.core.nth.call(null,vec__58667,(1),null);cljs.core.chunk_append.call(null,b__58664,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__58669 = (i__58663 + (1));
i__58663 = G__58669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58664),iter__58661.call(null,cljs.core.chunk_rest.call(null,s__58662__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58664),null);
}
} else
{var vec__58668 = cljs.core.first.call(null,s__58662__$2);var value = cljs.core.nth.call(null,vec__58668,(0),null);var description = cljs.core.nth.call(null,vec__58668,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__58661.call(null,cljs.core.rest.call(null,s__58662__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__58656,map__58656__$1,cursor))
,null,null));
});})(this__9504__auto____$1,map__58656,map__58656__$1,cursor))
;return iter__4283__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__58656,map__58656__$1,cursor))
;
clustermap.components.select_chooser.t58657.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__58656,map__58656__$1,cursor){
return (function (_58659){var self__ = this;
var _58659__$1 = this;return self__.meta58658;
});})(map__58656,map__58656__$1,cursor))
;
clustermap.components.select_chooser.t58657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__58656,map__58656__$1,cursor){
return (function (_58659,meta58658__$1){var self__ = this;
var _58659__$1 = this;return (new clustermap.components.select_chooser.t58657(self__.cursor,self__.map__58656,self__.owner,self__.p__58642,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta58658__$1));
});})(map__58656,map__58656__$1,cursor))
;
clustermap.components.select_chooser.__GT_t58657 = ((function (map__58656,map__58656__$1,cursor){
return (function __GT_t58657(cursor__$1,map__58656__$2,owner__$1,p__58642__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta58658){return (new clustermap.components.select_chooser.t58657(cursor__$1,map__58656__$2,owner__$1,p__58642__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta58658));
});})(map__58656,map__58656__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t58657(cursor,map__58656__$1,owner,p__58642,value_descriptions,key,title,select_chooser_component,null));
});

//# sourceMappingURL=select_chooser.js.map