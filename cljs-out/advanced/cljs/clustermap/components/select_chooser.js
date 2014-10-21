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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__56399,owner){var map__56434 = p__56399;var map__56434__$1 = ((cljs.core.seq_QMARK_(map__56434))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56434):map__56434);var cursor = map__56434__$1;if(typeof clustermap.components.select_chooser.t56435 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t56435 = (function (cursor,map__56434,owner,p__56399,value_descriptions,key,title,select_chooser_component,meta56436){
this.cursor = cursor;
this.map__56434 = map__56434;
this.owner = owner;
this.p__56399 = p__56399;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta56436 = meta56436;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t56435.cljs$lang$type = true;
clustermap.components.select_chooser.t56435.cljs$lang$ctorStr = "clustermap.components.select-chooser/t56435";
clustermap.components.select_chooser.t56435.cljs$lang$ctorPrWriter = ((function (map__56434,map__56434__$1,cursor){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.select-chooser/t56435");
});})(map__56434,map__56434__$1,cursor))
;
clustermap.components.select_chooser.t56435.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t56435.prototype.om$core$IRender$render$arity$1 = ((function (map__56434,map__56434__$1,cursor){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__56439 = {"className": "select-chooser"};var G__56440 = (function (){var G__56441 = {"className": "tbl"};var G__56442 = (function (){var G__56443 = {"className": "tbl-row"};var G__56444 = (function (){var attrs56438 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs56438))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs56438], 0))):{"className": "tbl-cell"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56438))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56438)], null))));
})();var G__56445 = (function (){var G__56446 = {"className": "tbl-cell"};var G__56447 = (function (){var G__56448 = {"onChange": ((function (G__56446,G__56443,G__56444,G__56441,G__56439,this__10071__auto____$1,map__56434,map__56434__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(G__56446,G__56443,G__56444,G__56441,G__56439,this__10071__auto____$1,map__56434,map__56434__$1,cursor))
};var G__56449 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4375__auto__ = ((function (G__56448,G__56446,G__56443,G__56444,G__56441,G__56439,this__10071__auto____$1,map__56434,map__56434__$1,cursor){
return (function iter__56450(s__56451){return (new cljs.core.LazySeq(null,((function (G__56448,G__56446,G__56443,G__56444,G__56441,G__56439,this__10071__auto____$1,map__56434,map__56434__$1,cursor){
return (function (){var s__56451__$1 = s__56451;while(true){
var temp__4126__auto__ = cljs.core.seq(s__56451__$1);if(temp__4126__auto__)
{var s__56451__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__56451__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__56451__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__56453 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__56452 = (0);while(true){
if((i__56452 < size__4374__auto__))
{var vec__56462 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__56452);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56462,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56462,(1),null);cljs.core.chunk_append(b__56453,(function (){var G__56463 = {"value": value};var G__56464 = sablono.interpreter.interpret(description);return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__56463,G__56464) : sablono.interpreter.option.call(null,G__56463,G__56464));
})());
{
var G__56468 = (i__56452 + (1));
i__56452 = G__56468;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__56453),iter__56450(cljs.core.chunk_rest(s__56451__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__56453),null);
}
} else
{var vec__56465 = cljs.core.first(s__56451__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56465,(1),null);return cljs.core.cons((function (){var G__56466 = {"value": value};var G__56467 = sablono.interpreter.interpret(description);return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__56466,G__56467) : sablono.interpreter.option.call(null,G__56466,G__56467));
})(),iter__56450(cljs.core.rest(s__56451__$2)));
}
} else
{return null;
}
break;
}
});})(G__56448,G__56446,G__56443,G__56444,G__56441,G__56439,this__10071__auto____$1,map__56434,map__56434__$1,cursor))
,null,null));
});})(G__56448,G__56446,G__56443,G__56444,G__56441,G__56439,this__10071__auto____$1,map__56434,map__56434__$1,cursor))
;return iter__4375__auto__(self__.value_descriptions);
})());return React.DOM.select(G__56448,G__56449);
})();return React.DOM.div(G__56446,G__56447);
})();return React.DOM.div(G__56443,G__56444,G__56445);
})();return React.DOM.div(G__56441,G__56442);
})();return React.DOM.div(G__56439,G__56440);
});})(map__56434,map__56434__$1,cursor))
;
clustermap.components.select_chooser.t56435.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56434,map__56434__$1,cursor){
return (function (_56437){var self__ = this;
var _56437__$1 = this;return self__.meta56436;
});})(map__56434,map__56434__$1,cursor))
;
clustermap.components.select_chooser.t56435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56434,map__56434__$1,cursor){
return (function (_56437,meta56436__$1){var self__ = this;
var _56437__$1 = this;return (new clustermap.components.select_chooser.t56435(self__.cursor,self__.map__56434,self__.owner,self__.p__56399,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta56436__$1));
});})(map__56434,map__56434__$1,cursor))
;
clustermap.components.select_chooser.__GT_t56435 = ((function (map__56434,map__56434__$1,cursor){
return (function __GT_t56435(cursor__$1,map__56434__$2,owner__$1,p__56399__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta56436){return (new clustermap.components.select_chooser.t56435(cursor__$1,map__56434__$2,owner__$1,p__56399__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta56436));
});})(map__56434,map__56434__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t56435(cursor,map__56434__$1,owner,p__56399,value_descriptions,key,title,select_chooser_component,null));
});
