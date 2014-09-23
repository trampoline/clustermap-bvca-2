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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__26242,owner){var map__26256 = p__26242;var map__26256__$1 = ((cljs.core.seq_QMARK_.call(null,map__26256))?cljs.core.apply.call(null,cljs.core.hash_map,map__26256):map__26256);var cursor = map__26256__$1;if(typeof clustermap.components.select_chooser.t26257 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t26257 = (function (cursor,map__26256,owner,p__26242,value_descriptions,key,title,select_chooser_component,meta26258){
this.cursor = cursor;
this.map__26256 = map__26256;
this.owner = owner;
this.p__26242 = p__26242;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta26258 = meta26258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t26257.cljs$lang$type = true;
clustermap.components.select_chooser.t26257.cljs$lang$ctorStr = "clustermap.components.select-chooser/t26257";
clustermap.components.select_chooser.t26257.cljs$lang$ctorPrWriter = ((function (map__26256,map__26256__$1,cursor){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.select-chooser/t26257");
});})(map__26256,map__26256__$1,cursor))
;
clustermap.components.select_chooser.t26257.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t26257.prototype.om$core$IRender$render$arity$1 = ((function (map__26256,map__26256__$1,cursor){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.div({"className": "select-chooser"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},(function (){var attrs26260 = self__.title;return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26260))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs26260)):{"className": "tbl-cell"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26260))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26260)], null))));
})(),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this__9536__auto____$1,map__26256,map__26256__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,self__.key,val);
});})(this__9536__auto____$1,map__26256,map__26256__$1,cursor))
},cljs.core.into_array.call(null,(function (){var iter__4283__auto__ = ((function (this__9536__auto____$1,map__26256,map__26256__$1,cursor){
return (function iter__26261(s__26262){return (new cljs.core.LazySeq(null,((function (this__9536__auto____$1,map__26256,map__26256__$1,cursor){
return (function (){var s__26262__$1 = s__26262;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26262__$1);if(temp__4126__auto__)
{var s__26262__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26262__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__26262__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__26264 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__26263 = (0);while(true){
if((i__26263 < size__4282__auto__))
{var vec__26267 = cljs.core._nth.call(null,c__4281__auto__,i__26263);var value = cljs.core.nth.call(null,vec__26267,(0),null);var description = cljs.core.nth.call(null,vec__26267,(1),null);cljs.core.chunk_append.call(null,b__26264,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)));
{
var G__26269 = (i__26263 + (1));
i__26263 = G__26269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26264),iter__26261.call(null,cljs.core.chunk_rest.call(null,s__26262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26264),null);
}
} else
{var vec__26268 = cljs.core.first.call(null,s__26262__$2);var value = cljs.core.nth.call(null,vec__26268,(0),null);var description = cljs.core.nth.call(null,vec__26268,(1),null);return cljs.core.cons.call(null,sablono.interpreter.option.call(null,{"value": value},sablono.interpreter.interpret.call(null,description)),iter__26261.call(null,cljs.core.rest.call(null,s__26262__$2)));
}
} else
{return null;
}
break;
}
});})(this__9536__auto____$1,map__26256,map__26256__$1,cursor))
,null,null));
});})(this__9536__auto____$1,map__26256,map__26256__$1,cursor))
;return iter__4283__auto__.call(null,self__.value_descriptions);
})()))))));
});})(map__26256,map__26256__$1,cursor))
;
clustermap.components.select_chooser.t26257.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26256,map__26256__$1,cursor){
return (function (_26259){var self__ = this;
var _26259__$1 = this;return self__.meta26258;
});})(map__26256,map__26256__$1,cursor))
;
clustermap.components.select_chooser.t26257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26256,map__26256__$1,cursor){
return (function (_26259,meta26258__$1){var self__ = this;
var _26259__$1 = this;return (new clustermap.components.select_chooser.t26257(self__.cursor,self__.map__26256,self__.owner,self__.p__26242,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta26258__$1));
});})(map__26256,map__26256__$1,cursor))
;
clustermap.components.select_chooser.__GT_t26257 = ((function (map__26256,map__26256__$1,cursor){
return (function __GT_t26257(cursor__$1,map__26256__$2,owner__$1,p__26242__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta26258){return (new clustermap.components.select_chooser.t26257(cursor__$1,map__26256__$2,owner__$1,p__26242__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta26258));
});})(map__26256,map__26256__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t26257(cursor,map__26256__$1,owner,p__26242,value_descriptions,key,title,select_chooser_component,null));
});
