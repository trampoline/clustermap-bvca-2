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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__13684,owner){var map__13698 = p__13684;var map__13698__$1 = ((cljs.core.seq_QMARK_.call(null,map__13698))?cljs.core.apply.call(null,cljs.core.hash_map,map__13698):map__13698);var cursor = map__13698__$1;if(typeof clustermap.components.select_chooser.t13699 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t13699 = (function (cursor,map__13698,owner,p__13684,value_descriptions,key,title,select_chooser_component,meta13700){
this.cursor = cursor;
this.map__13698 = map__13698;
this.owner = owner;
this.p__13684 = p__13684;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta13700 = meta13700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t13699.cljs$lang$type = true;
clustermap.components.select_chooser.t13699.cljs$lang$ctorStr = "clustermap.components.select-chooser/t13699";
clustermap.components.select_chooser.t13699.cljs$lang$ctorPrWriter = ((function (map__13698,map__13698__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.select-chooser/t13699");
});})(map__13698,map__13698__$1,cursor))
;
clustermap.components.select_chooser.t13699.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t13699.prototype.om$core$IRender$render$arity$1 = ((function (map__13698,map__13698__$1,cursor){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs13702 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13702))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs13702)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13702)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9536__auto____$1,map__13698,map__13698__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__9536__auto____$1,map__13698,map__13698__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4283__auto__ = ((function (this__9536__auto____$1,map__13698,map__13698__$1,cursor){
return (function iter__13703(s__13704){return (new cljs.core.LazySeq(null,((function (this__9536__auto____$1,map__13698,map__13698__$1,cursor){
return (function (){var s__13704__$1 = s__13704;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13704__$1);if(temp__4126__auto__)
{var s__13704__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13704__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__13704__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__13706 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__13705 = (0);while(true){
if((i__13705 < size__4282__auto__))
{var vec__13709 = cljs.core._nth.call(null,c__4281__auto__,i__13705);var value = cljs.core.nth.call(null,vec__13709,(0),null);var description = cljs.core.nth.call(null,vec__13709,(1),null);cljs.core.chunk_append.call(null,b__13706,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__13711 = (i__13705 + (1));
i__13705 = G__13711;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13706),iter__13703.call(null,cljs.core.chunk_rest.call(null,s__13704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13706),null);
}
} else
{var vec__13710 = cljs.core.first.call(null,s__13704__$2);var value = cljs.core.nth.call(null,vec__13710,(0),null);var description = cljs.core.nth.call(null,vec__13710,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__13703.call(null,cljs.core.rest.call(null,s__13704__$2)));
}
} else
{return null;
}
break;
}
});})(this__9536__auto____$1,map__13698,map__13698__$1,cursor))
,null,null));
});})(this__9536__auto____$1,map__13698,map__13698__$1,cursor))
;return iter__4283__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__13698,map__13698__$1,cursor))
;
clustermap.components.select_chooser.t13699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13698,map__13698__$1,cursor){
return (function (_13701){var self__ = this;
var _13701__$1 = this;return self__.meta13700;
});})(map__13698,map__13698__$1,cursor))
;
clustermap.components.select_chooser.t13699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13698,map__13698__$1,cursor){
return (function (_13701,meta13700__$1){var self__ = this;
var _13701__$1 = this;return (new clustermap.components.select_chooser.t13699(self__.cursor,self__.map__13698,self__.owner,self__.p__13684,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta13700__$1));
});})(map__13698,map__13698__$1,cursor))
;
clustermap.components.select_chooser.__GT_t13699 = ((function (map__13698,map__13698__$1,cursor){
return (function __GT_t13699(cursor__$1,map__13698__$2,owner__$1,p__13684__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta13700){return (new clustermap.components.select_chooser.t13699(cursor__$1,map__13698__$2,owner__$1,p__13684__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta13700));
});})(map__13698,map__13698__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t13699(cursor,map__13698__$1,owner,p__13684,value_descriptions,key,title,select_chooser_component,null));
});
