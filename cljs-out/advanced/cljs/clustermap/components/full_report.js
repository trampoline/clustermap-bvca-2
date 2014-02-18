// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.charts');
goog.require('clustermap.components.full_report.charts');
goog.require('jayq.core');
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$302,(function (){var G__22552 = selector;var G__22552__$1 = (((G__22552 == null))?null:cljs.core.keys(G__22552));var G__22552__$2 = (((G__22552__$1 == null))?null:cljs.core.first(G__22552__$1));return G__22552__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__22553,owner){var map__22560 = p__22553;var map__22560__$1 = ((cljs.core.seq_QMARK_(map__22560))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22560):map__22560);var data = map__22560__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560__$1,cljs.core.constant$keyword$379);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560__$1,cljs.core.constant$keyword$308);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22560__$1,cljs.core.constant$keyword$380);var map__22561 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22561__$1 = ((cljs.core.seq_QMARK_(map__22561))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22561):map__22561);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.constant$keyword$310);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.constant$keyword$309);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.constant$keyword$305);if(typeof clustermap.components.full_report.t22562 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t22562 = (function (full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,map__22561,owner,map__22560,p__22553,meta22563){
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.selector = selector;
this.selection = selection;
this.comm = comm;
this.map__22561 = map__22561;
this.owner = owner;
this.map__22560 = map__22560;
this.p__22553 = p__22553;
this.meta22563 = meta22563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t22562.cljs$lang$type = true;
clustermap.components.full_report.t22562.cljs$lang$ctorStr = "clustermap.components.full-report/t22562";
clustermap.components.full_report.t22562.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t22562");
});
clustermap.components.full_report.t22562.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t22562.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t22562.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t22562.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs22565 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$305,self__.comm], null),cljs.core.constant$keyword$293,"overview"], null));if(cljs.core.map_QMARK_(attrs22565))
{return React.DOM.div(sablono.interpreter.attributes(attrs22565),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$305,self__.comm], null),cljs.core.constant$keyword$293,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$310,self__.link_fn,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$293,"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$310,self__.link_fn,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$293,"selection-portfolio-company-sites"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22565),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$305,self__.comm], null),cljs.core.constant$keyword$293,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$310,self__.link_fn,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$293,"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$381.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$310,self__.link_fn,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$293,"selection-portfolio-company-sites"], null)):null))));
}
});
clustermap.components.full_report.t22562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22564){var self__ = this;
var _22564__$1 = this;return self__.meta22563;
});
clustermap.components.full_report.t22562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22564,meta22563__$1){var self__ = this;
var _22564__$1 = this;return (new clustermap.components.full_report.t22562(self__.full_report_component,self__.path_fn,self__.data,self__.all_portfolio_companies_summary,self__.link_fn,self__.selector,self__.selection,self__.comm,self__.map__22561,self__.owner,self__.map__22560,self__.p__22553,meta22563__$1));
});
clustermap.components.full_report.__GT_t22562 = (function __GT_t22562(full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,map__22561__$2,owner__$1,map__22560__$2,p__22553__$1,meta22563){return (new clustermap.components.full_report.t22562(full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,map__22561__$2,owner__$1,map__22560__$2,p__22553__$1,meta22563));
});
}
return (new clustermap.components.full_report.t22562(full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,map__22561__$1,owner,map__22560__$1,p__22553,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
