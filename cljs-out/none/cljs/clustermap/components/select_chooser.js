// Compiled by ClojureScript 0.0-2356
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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__84615,owner){var map__84629 = p__84615;var map__84629__$1 = ((cljs.core.seq_QMARK_.call(null,map__84629))?cljs.core.apply.call(null,cljs.core.hash_map,map__84629):map__84629);var cursor = map__84629__$1;if(typeof clustermap.components.select_chooser.t84630 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t84630 = (function (cursor,map__84629,owner,p__84615,value_descriptions,key,title,select_chooser_component,meta84631){
this.cursor = cursor;
this.map__84629 = map__84629;
this.owner = owner;
this.p__84615 = p__84615;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta84631 = meta84631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t84630.cljs$lang$type = true;
clustermap.components.select_chooser.t84630.cljs$lang$ctorStr = "clustermap.components.select-chooser/t84630";
clustermap.components.select_chooser.t84630.cljs$lang$ctorPrWriter = ((function (map__84629,map__84629__$1,cursor){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.select-chooser/t84630");
});})(map__84629,map__84629__$1,cursor))
;
clustermap.components.select_chooser.t84630.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t84630.prototype.om$core$IRender$render$arity$1 = ((function (map__84629,map__84629__$1,cursor){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs84633 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs84633))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs84633)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs84633))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs84633)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__10071__auto____$1,map__84629,map__84629__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__10071__auto____$1,map__84629,map__84629__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__84629,map__84629__$1,cursor){
return (function iter__84634(s__84635){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__84629,map__84629__$1,cursor){
return (function (){var s__84635__$1 = s__84635;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__84635__$1);if(temp__4126__auto__)
{var s__84635__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__84635__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__84635__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__84637 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__84636 = (0);while(true){
if((i__84636 < size__4374__auto__))
{var vec__84640 = cljs.core._nth.call(null,c__4373__auto__,i__84636);var value = cljs.core.nth.call(null,vec__84640,(0),null);var description = cljs.core.nth.call(null,vec__84640,(1),null);cljs.core.chunk_append.call(null,b__84637,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__84642 = (i__84636 + (1));
i__84636 = G__84642;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84637),iter__84634.call(null,cljs.core.chunk_rest.call(null,s__84635__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84637),null);
}
} else
{var vec__84641 = cljs.core.first.call(null,s__84635__$2);var value = cljs.core.nth.call(null,vec__84641,(0),null);var description = cljs.core.nth.call(null,vec__84641,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__84634.call(null,cljs.core.rest.call(null,s__84635__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__84629,map__84629__$1,cursor))
,null,null));
});})(this__10071__auto____$1,map__84629,map__84629__$1,cursor))
;return iter__4375__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__84629,map__84629__$1,cursor))
;
clustermap.components.select_chooser.t84630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__84629,map__84629__$1,cursor){
return (function (_84632){var self__ = this;
var _84632__$1 = this;return self__.meta84631;
});})(map__84629,map__84629__$1,cursor))
;
clustermap.components.select_chooser.t84630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__84629,map__84629__$1,cursor){
return (function (_84632,meta84631__$1){var self__ = this;
var _84632__$1 = this;return (new clustermap.components.select_chooser.t84630(self__.cursor,self__.map__84629,self__.owner,self__.p__84615,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta84631__$1));
});})(map__84629,map__84629__$1,cursor))
;
clustermap.components.select_chooser.__GT_t84630 = ((function (map__84629,map__84629__$1,cursor){
return (function __GT_t84630(cursor__$1,map__84629__$2,owner__$1,p__84615__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta84631){return (new clustermap.components.select_chooser.t84630(cursor__$1,map__84629__$2,owner__$1,p__84615__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta84631));
});})(map__84629,map__84629__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t84630(cursor,map__84629__$1,owner,p__84615,value_descriptions,key,title,select_chooser_component,null));
});

//# sourceMappingURL=select_chooser.js.map