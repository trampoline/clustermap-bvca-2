// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.multiview');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.components.filter');
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
goog.require('clustermap.components.filter');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.multiview.multiview_component = (function multiview_component(p__37203,owner){var map__37218 = p__37203;var map__37218__$1 = ((cljs.core.seq_QMARK_(map__37218))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37218):map__37218);var cursor = map__37218__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37218__$1,cljs.core.constant$keyword$782);if(typeof clustermap.components.multiview.t37219 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t37219 = (function (filter_spec,cursor,map__37218,owner,p__37203,multiview_component,meta37220){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__37218 = map__37218;
this.owner = owner;
this.p__37203 = p__37203;
this.multiview_component = multiview_component;
this.meta37220 = meta37220;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t37219.cljs$lang$type = true;
clustermap.components.multiview.t37219.cljs$lang$ctorStr = "clustermap.components.multiview/t37219";
clustermap.components.multiview.t37219.cljs$lang$ctorPrWriter = ((function (map__37218,map__37218__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.multiview/t37219");
});})(map__37218,map__37218__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37219.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t37219.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37218,map__37218__$1,cursor,filter_spec){
return (function (this$,p__37222,next_state){var self__ = this;
var map__37223 = p__37222;var map__37223__$1 = ((cljs.core.seq_QMARK_(map__37223))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37223):map__37223);var map__37224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,cljs.core.constant$keyword$782);var map__37224__$1 = ((cljs.core.seq_QMARK_(map__37224))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37224):map__37224);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37224__$1,cljs.core.constant$keyword$1028);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37223__$1,cljs.core.constant$keyword$1069);var this$__$1 = this;var map__37225 = om.core.get_props(self__.owner);var map__37225__$1 = ((cljs.core.seq_QMARK_(map__37225))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37225):map__37225);var map__37226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,cljs.core.constant$keyword$782);var map__37226__$1 = ((cljs.core.seq_QMARK_(map__37226))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37226):map__37226);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37226__$1,cljs.core.constant$keyword$1028);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37225__$1,cljs.core.constant$keyword$1069);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__37227 = cljs.core.seq(cljs.core.keys(next_views));var chunk__37228 = null;var count__37229 = (0);var i__37230 = (0);while(true){
if((i__37230 < count__37229))
{var view_key = chunk__37228.cljs$core$IIndexed$_nth$arity$2(null,i__37230);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1069,view_key,cljs.core.constant$keyword$782], null),next_compiled_filter);
{
var G__37232 = seq__37227;
var G__37233 = chunk__37228;
var G__37234 = count__37229;
var G__37235 = (i__37230 + (1));
seq__37227 = G__37232;
chunk__37228 = G__37233;
count__37229 = G__37234;
i__37230 = G__37235;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37227);if(temp__4126__auto__)
{var seq__37227__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37227__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37227__$1);{
var G__37236 = cljs.core.chunk_rest(seq__37227__$1);
var G__37237 = c__4299__auto__;
var G__37238 = cljs.core.count(c__4299__auto__);
var G__37239 = (0);
seq__37227 = G__37236;
chunk__37228 = G__37237;
count__37229 = G__37238;
i__37230 = G__37239;
continue;
}
} else
{var view_key = cljs.core.first(seq__37227__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1069,view_key,cljs.core.constant$keyword$782], null),next_compiled_filter);
{
var G__37240 = cljs.core.next(seq__37227__$1);
var G__37241 = null;
var G__37242 = (0);
var G__37243 = (0);
seq__37227 = G__37240;
chunk__37228 = G__37241;
count__37229 = G__37242;
i__37230 = G__37243;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});})(map__37218,map__37218__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37219.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t37219.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37218,map__37218__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs37231 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37231))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$797,"search",cljs.core.constant$keyword$808,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-component"], null)], null),attrs37231], 0))):{"className": "search-component", "id": "search"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37231))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37231)], null))));
});})(map__37218,map__37218__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37218,map__37218__$1,cursor,filter_spec){
return (function (_37221){var self__ = this;
var _37221__$1 = this;return self__.meta37220;
});})(map__37218,map__37218__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37218,map__37218__$1,cursor,filter_spec){
return (function (_37221,meta37220__$1){var self__ = this;
var _37221__$1 = this;return (new clustermap.components.multiview.t37219(self__.filter_spec,self__.cursor,self__.map__37218,self__.owner,self__.p__37203,self__.multiview_component,meta37220__$1));
});})(map__37218,map__37218__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t37219 = ((function (map__37218,map__37218__$1,cursor,filter_spec){
return (function __GT_t37219(filter_spec__$1,cursor__$1,map__37218__$2,owner__$1,p__37203__$1,multiview_component__$1,meta37220){return (new clustermap.components.multiview.t37219(filter_spec__$1,cursor__$1,map__37218__$2,owner__$1,p__37203__$1,multiview_component__$1,meta37220));
});})(map__37218,map__37218__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t37219(filter_spec,cursor,map__37218__$1,owner,p__37203,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$873,shared,cljs.core.constant$keyword$876,document.getElementById(elem_id),cljs.core.constant$keyword$848,path], null));
});
