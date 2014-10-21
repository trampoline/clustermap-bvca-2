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
clustermap.components.select_chooser.select_chooser_component = (function select_chooser_component(title,key,value_descriptions,p__72173,owner){var map__72208 = p__72173;var map__72208__$1 = ((cljs.core.seq_QMARK_(map__72208))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72208):map__72208);var cursor = map__72208__$1;if(typeof clustermap.components.select_chooser.t72209 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.select_chooser.t72209 = (function (cursor,map__72208,owner,p__72173,value_descriptions,key,title,select_chooser_component,meta72210){
this.cursor = cursor;
this.map__72208 = map__72208;
this.owner = owner;
this.p__72173 = p__72173;
this.value_descriptions = value_descriptions;
this.key = key;
this.title = title;
this.select_chooser_component = select_chooser_component;
this.meta72210 = meta72210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.select_chooser.t72209.cljs$lang$type = true;
clustermap.components.select_chooser.t72209.cljs$lang$ctorStr = "clustermap.components.select-chooser/t72209";
clustermap.components.select_chooser.t72209.cljs$lang$ctorPrWriter = ((function (map__72208,map__72208__$1,cursor){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.select-chooser/t72209");
});})(map__72208,map__72208__$1,cursor))
;
clustermap.components.select_chooser.t72209.prototype.om$core$IRender$ = true;
clustermap.components.select_chooser.t72209.prototype.om$core$IRender$render$arity$1 = ((function (map__72208,map__72208__$1,cursor){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__72213 = {"className": "select-chooser"};var G__72214 = (function (){var G__72215 = {"className": "tbl"};var G__72216 = (function (){var G__72217 = {"className": "tbl-row"};var G__72218 = (function (){var attrs72212 = self__.title;return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs72212))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tbl-cell"], null)], null),attrs72212], 0))):{"className": "tbl-cell"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72212))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72212)], null))));
})();var G__72219 = (function (){var G__72220 = {"className": "tbl-cell"};var G__72221 = (function (){var G__72222 = {"onChange": ((function (G__72220,G__72217,G__72218,G__72215,G__72213,this__10071__auto____$1,map__72208,map__72208__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,self__.key,val);
});})(G__72220,G__72217,G__72218,G__72215,G__72213,this__10071__auto____$1,map__72208,map__72208__$1,cursor))
};var G__72223 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4375__auto__ = ((function (G__72222,G__72220,G__72217,G__72218,G__72215,G__72213,this__10071__auto____$1,map__72208,map__72208__$1,cursor){
return (function iter__72224(s__72225){return (new cljs.core.LazySeq(null,((function (G__72222,G__72220,G__72217,G__72218,G__72215,G__72213,this__10071__auto____$1,map__72208,map__72208__$1,cursor){
return (function (){var s__72225__$1 = s__72225;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72225__$1);if(temp__4126__auto__)
{var s__72225__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72225__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__72225__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__72227 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__72226 = (0);while(true){
if((i__72226 < size__4374__auto__))
{var vec__72236 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__72226);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72236,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72236,(1),null);cljs.core.chunk_append(b__72227,(function (){var G__72237 = {"value": value};var G__72238 = sablono.interpreter.interpret(description);return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__72237,G__72238) : sablono.interpreter.option.call(null,G__72237,G__72238));
})());
{
var G__72242 = (i__72226 + (1));
i__72226 = G__72242;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72227),iter__72224(cljs.core.chunk_rest(s__72225__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72227),null);
}
} else
{var vec__72239 = cljs.core.first(s__72225__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72239,(0),null);var description = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72239,(1),null);return cljs.core.cons((function (){var G__72240 = {"value": value};var G__72241 = sablono.interpreter.interpret(description);return (sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2(G__72240,G__72241) : sablono.interpreter.option.call(null,G__72240,G__72241));
})(),iter__72224(cljs.core.rest(s__72225__$2)));
}
} else
{return null;
}
break;
}
});})(G__72222,G__72220,G__72217,G__72218,G__72215,G__72213,this__10071__auto____$1,map__72208,map__72208__$1,cursor))
,null,null));
});})(G__72222,G__72220,G__72217,G__72218,G__72215,G__72213,this__10071__auto____$1,map__72208,map__72208__$1,cursor))
;return iter__4375__auto__(self__.value_descriptions);
})());return React.DOM.select(G__72222,G__72223);
})();return React.DOM.div(G__72220,G__72221);
})();return React.DOM.div(G__72217,G__72218,G__72219);
})();return React.DOM.div(G__72215,G__72216);
})();return React.DOM.div(G__72213,G__72214);
});})(map__72208,map__72208__$1,cursor))
;
clustermap.components.select_chooser.t72209.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__72208,map__72208__$1,cursor){
return (function (_72211){var self__ = this;
var _72211__$1 = this;return self__.meta72210;
});})(map__72208,map__72208__$1,cursor))
;
clustermap.components.select_chooser.t72209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__72208,map__72208__$1,cursor){
return (function (_72211,meta72210__$1){var self__ = this;
var _72211__$1 = this;return (new clustermap.components.select_chooser.t72209(self__.cursor,self__.map__72208,self__.owner,self__.p__72173,self__.value_descriptions,self__.key,self__.title,self__.select_chooser_component,meta72210__$1));
});})(map__72208,map__72208__$1,cursor))
;
clustermap.components.select_chooser.__GT_t72209 = ((function (map__72208,map__72208__$1,cursor){
return (function __GT_t72209(cursor__$1,map__72208__$2,owner__$1,p__72173__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta72210){return (new clustermap.components.select_chooser.t72209(cursor__$1,map__72208__$2,owner__$1,p__72173__$1,value_descriptions__$1,key__$1,title__$1,select_chooser_component__$1,meta72210));
});})(map__72208,map__72208__$1,cursor))
;
}
return (new clustermap.components.select_chooser.t72209(cursor,map__72208__$1,owner,p__72173,value_descriptions,key,title,select_chooser_component,null));
});
