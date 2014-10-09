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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__62127,owner){var map__62141 = p__62127;var map__62141__$1 = ((cljs.core.seq_QMARK_.call(null,map__62141))?cljs.core.apply.call(null,cljs.core.hash_map,map__62141):map__62141);var cursor = map__62141__$1;if(typeof clustermap.components.select_chooser.t62142 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t62142 = (function (cursor,map__62141,owner,p__62127,value_descriptions,key,title,select_chooser_component,meta62143){
this.cursor = cursor;
this.map__62141 = map__62141;
this.owner = owner;
this.p__62127 = p__62127;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta62143 = meta62143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t62142.cljs$lang$type = true;
clustermap.components.select_chooser.t62142.cljs$lang$ctorStr = "clustermap.components.select-chooser/t62142";
clustermap.components.select_chooser.t62142.cljs$lang$ctorPrWriter = ((function (map__62141,map__62141__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.select-chooser/t62142");
});})(map__62141,map__62141__$1,cursor))
;
clustermap.components.select_chooser.t62142.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t62142.prototype.om$core$IRender$render$arity$1 = ((function (map__62141,map__62141__$1,cursor){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs62145 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs62145))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs62145)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs62145))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs62145)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9504__auto____$1,map__62141,map__62141__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__9504__auto____$1,map__62141,map__62141__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1,map__62141,map__62141__$1,cursor){
return (function iter__62146(s__62147){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1,map__62141,map__62141__$1,cursor){
return (function (){var s__62147__$1 = s__62147;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__62147__$1);if(temp__4126__auto__)
{var s__62147__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__62147__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__62147__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__62149 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__62148 = (0);while(true){
if((i__62148 < size__4282__auto__))
{var vec__62152 = cljs.core._nth.call(null,c__4281__auto__,i__62148);var value = cljs.core.nth.call(null,vec__62152,(0),null);var description = cljs.core.nth.call(null,vec__62152,(1),null);cljs.core.chunk_append.call(null,b__62149,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__62154 = (i__62148 + (1));
i__62148 = G__62154;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62149),iter__62146.call(null,cljs.core.chunk_rest.call(null,s__62147__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__62149),null);
}
} else
{var vec__62153 = cljs.core.first.call(null,s__62147__$2);var value = cljs.core.nth.call(null,vec__62153,(0),null);var description = cljs.core.nth.call(null,vec__62153,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__62146.call(null,cljs.core.rest.call(null,s__62147__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1,map__62141,map__62141__$1,cursor))
,null,null));
});})(this__9504__auto____$1,map__62141,map__62141__$1,cursor))
;return iter__4283__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__62141,map__62141__$1,cursor))
;
clustermap.components.select_chooser.t62142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__62141,map__62141__$1,cursor){
return (function (_62144){var self__ = this;
var _62144__$1 = this;return self__.meta62143;
});})(map__62141,map__62141__$1,cursor))
;
clustermap.components.select_chooser.t62142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__62141,map__62141__$1,cursor){
return (function (_62144,meta62143__$1){var self__ = this;
var _62144__$1 = this;return (new clustermap.components.select_chooser.t62142(self__.cursor,self__.map__62141,self__.owner,self__.p__62127,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta62143__$1));
});})(map__62141,map__62141__$1,cursor))
;
clustermap.components.select_chooser.__GT_t62142 = ((function (map__62141,map__62141__$1,cursor){
return (function __GT_t62142(cursor__$1,map__62141__$2,owner__$1,p__62127__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta62143){return (new clustermap.components.select_chooser.t62142(cursor__$1,map__62141__$2,owner__$1,p__62127__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta62143));
});})(map__62141,map__62141__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t62142(cursor,map__62141__$1,owner,p__62127,value_descriptions,key,title,select_chooser_component,null));
});

//# sourceMappingURL=select_chooser.js.map