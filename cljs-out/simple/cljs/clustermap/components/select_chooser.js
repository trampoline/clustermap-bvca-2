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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__31960,owner){var map__31974 = p__31960;var map__31974__$1 = ((cljs.core.seq_QMARK_.call(null,map__31974))?cljs.core.apply.call(null,cljs.core.hash_map,map__31974):map__31974);var cursor = map__31974__$1;if(typeof clustermap.components.select_chooser.t31975 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t31975 = (function (cursor,map__31974,owner,p__31960,value_descriptions,key,title,select_chooser_component,meta31976){
this.cursor = cursor;
this.map__31974 = map__31974;
this.owner = owner;
this.p__31960 = p__31960;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta31976 = meta31976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t31975.cljs$lang$type = true;
clustermap.components.select_chooser.t31975.cljs$lang$ctorStr = "clustermap.components.select-chooser/t31975";
clustermap.components.select_chooser.t31975.cljs$lang$ctorPrWriter = ((function (map__31974,map__31974__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.select-chooser/t31975");
});})(map__31974,map__31974__$1,cursor))
;
clustermap.components.select_chooser.t31975.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t31975.prototype.om$core$IRender$render$arity$1 = ((function (map__31974,map__31974__$1,cursor){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs31978 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs31978))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs31978)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31978))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31978)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9504__auto____$1,map__31974,map__31974__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__9504__auto____$1,map__31974,map__31974__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__31974,map__31974__$1,cursor){
return (function iter__31979(s__31980){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__31974,map__31974__$1,cursor){
return (function (){var s__31980__$1 = s__31980;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31980__$1);if(temp__4126__auto__)
{var s__31980__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31980__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31980__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31982 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31981 = (0);while(true){
if((i__31981 < size__4282__auto__))
{var vec__31985 = cljs.core._nth.call(null,c__4281__auto__,i__31981);var value = cljs.core.nth.call(null,vec__31985,(0),null);var description = cljs.core.nth.call(null,vec__31985,(1),null);cljs.core.chunk_append.call(null,b__31982,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__31987 = (i__31981 + (1));
i__31981 = G__31987;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31982),iter__31979.call(null,cljs.core.chunk_rest.call(null,s__31980__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31982),null);
}
} else
{var vec__31986 = cljs.core.first.call(null,s__31980__$2);var value = cljs.core.nth.call(null,vec__31986,(0),null);var description = cljs.core.nth.call(null,vec__31986,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__31979.call(null,cljs.core.rest.call(null,s__31980__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__31974,map__31974__$1,cursor))
,null,null));
});})(this__9504__auto____$1,map__31974,map__31974__$1,cursor))
;return iter__4283__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__31974,map__31974__$1,cursor))
;
clustermap.components.select_chooser.t31975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__31974,map__31974__$1,cursor){
return (function (_31977){var self__ = this;
var _31977__$1 = this;return self__.meta31976;
});})(map__31974,map__31974__$1,cursor))
;
clustermap.components.select_chooser.t31975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__31974,map__31974__$1,cursor){
return (function (_31977,meta31976__$1){var self__ = this;
var _31977__$1 = this;return (new clustermap.components.select_chooser.t31975(self__.cursor,self__.map__31974,self__.owner,self__.p__31960,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta31976__$1));
});})(map__31974,map__31974__$1,cursor))
;
clustermap.components.select_chooser.__GT_t31975 = ((function (map__31974,map__31974__$1,cursor){
return (function __GT_t31975(cursor__$1,map__31974__$2,owner__$1,p__31960__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta31976){return (new clustermap.components.select_chooser.t31975(cursor__$1,map__31974__$2,owner__$1,p__31960__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta31976));
});})(map__31974,map__31974__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t31975(cursor,map__31974__$1,owner,p__31960,value_descriptions,key,title,select_chooser_component,null));
});
