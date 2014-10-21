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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__79272,owner){var map__79286 = p__79272;var map__79286__$1 = ((cljs.core.seq_QMARK_.call(null,map__79286))?cljs.core.apply.call(null,cljs.core.hash_map,map__79286):map__79286);var cursor = map__79286__$1;if(typeof clustermap.components.select_chooser.t79287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t79287 = (function (cursor,map__79286,owner,p__79272,value_descriptions,key,title,select_chooser_component,meta79288){
this.cursor = cursor;
this.map__79286 = map__79286;
this.owner = owner;
this.p__79272 = p__79272;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta79288 = meta79288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t79287.cljs$lang$type = true;
clustermap.components.select_chooser.t79287.cljs$lang$ctorStr = "clustermap.components.select-chooser/t79287";
clustermap.components.select_chooser.t79287.cljs$lang$ctorPrWriter = ((function (map__79286,map__79286__$1,cursor){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.select-chooser/t79287");
});})(map__79286,map__79286__$1,cursor))
;
clustermap.components.select_chooser.t79287.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t79287.prototype.om$core$IRender$render$arity$1 = ((function (map__79286,map__79286__$1,cursor){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs79290 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs79290))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs79290)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs79290))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs79290)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__10071__auto____$1,map__79286,map__79286__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__10071__auto____$1,map__79286,map__79286__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1,map__79286,map__79286__$1,cursor){
return (function iter__79291(s__79292){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1,map__79286,map__79286__$1,cursor){
return (function (){var s__79292__$1 = s__79292;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79292__$1);if(temp__4126__auto__)
{var s__79292__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79292__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__79292__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__79294 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__79293 = (0);while(true){
if((i__79293 < size__4374__auto__))
{var vec__79297 = cljs.core._nth.call(null,c__4373__auto__,i__79293);var value = cljs.core.nth.call(null,vec__79297,(0),null);var description = cljs.core.nth.call(null,vec__79297,(1),null);cljs.core.chunk_append.call(null,b__79294,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__79299 = (i__79293 + (1));
i__79293 = G__79299;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79294),iter__79291.call(null,cljs.core.chunk_rest.call(null,s__79292__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79294),null);
}
} else
{var vec__79298 = cljs.core.first.call(null,s__79292__$2);var value = cljs.core.nth.call(null,vec__79298,(0),null);var description = cljs.core.nth.call(null,vec__79298,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__79291.call(null,cljs.core.rest.call(null,s__79292__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1,map__79286,map__79286__$1,cursor))
,null,null));
});})(this__10071__auto____$1,map__79286,map__79286__$1,cursor))
;return iter__4375__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__79286,map__79286__$1,cursor))
;
clustermap.components.select_chooser.t79287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79286,map__79286__$1,cursor){
return (function (_79289){var self__ = this;
var _79289__$1 = this;return self__.meta79288;
});})(map__79286,map__79286__$1,cursor))
;
clustermap.components.select_chooser.t79287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79286,map__79286__$1,cursor){
return (function (_79289,meta79288__$1){var self__ = this;
var _79289__$1 = this;return (new clustermap.components.select_chooser.t79287(self__.cursor,self__.map__79286,self__.owner,self__.p__79272,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta79288__$1));
});})(map__79286,map__79286__$1,cursor))
;
clustermap.components.select_chooser.__GT_t79287 = ((function (map__79286,map__79286__$1,cursor){
return (function __GT_t79287(cursor__$1,map__79286__$2,owner__$1,p__79272__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta79288){return (new clustermap.components.select_chooser.t79287(cursor__$1,map__79286__$2,owner__$1,p__79272__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta79288));
});})(map__79286,map__79286__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t79287(cursor,map__79286__$1,owner,p__79272,value_descriptions,key,title,select_chooser_component,null));
});

//# sourceMappingURL=select_chooser.js.map