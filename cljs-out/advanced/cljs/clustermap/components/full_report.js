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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,(function (){var G__22599 = selector;var G__22599__$1 = (((G__22599 == null))?null:cljs.core.keys(G__22599));var G__22599__$2 = (((G__22599__$1 == null))?null:cljs.core.first(G__22599__$1));return G__22599__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__22600,owner){var map__22607 = p__22600;var map__22607__$1 = ((cljs.core.seq_QMARK_(map__22607))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22607):map__22607);var data = map__22607__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22607__$1,cljs.core.constant$keyword$391);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22607__$1,cljs.core.constant$keyword$319);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22607__$1,cljs.core.constant$keyword$392);var map__22608 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22608__$1 = ((cljs.core.seq_QMARK_(map__22608))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22608):map__22608);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.constant$keyword$321);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.constant$keyword$320);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22608__$1,cljs.core.constant$keyword$313);if(typeof clustermap.components.full_report.t22609 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t22609 = (function (full_report_component,p__22600,path_fn,map__22607,data,all_portfolio_companies_summary,map__22608,link_fn,selector,selection,comm,owner,meta22610){
this.full_report_component = full_report_component;
this.p__22600 = p__22600;
this.path_fn = path_fn;
this.map__22607 = map__22607;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.map__22608 = map__22608;
this.link_fn = link_fn;
this.selector = selector;
this.selection = selection;
this.comm = comm;
this.owner = owner;
this.meta22610 = meta22610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t22609.cljs$lang$type = true;
clustermap.components.full_report.t22609.cljs$lang$ctorStr = "clustermap.components.full-report/t22609";
clustermap.components.full_report.t22609.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t22609");
});
clustermap.components.full_report.t22609.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t22609.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t22609.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t22609.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs22612 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$313,self__.comm], null),cljs.core.constant$keyword$301,"overview"], null));if(cljs.core.map_QMARK_(attrs22612))
{return React.DOM.div(sablono.interpreter.attributes(attrs22612),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$313,self__.comm], null),cljs.core.constant$keyword$301,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$321,self__.link_fn,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$301,"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$321,self__.link_fn,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$301,"selection-portfolio-company-sites"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22612),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$313,self__.comm], null),cljs.core.constant$keyword$301,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$321,self__.link_fn,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$301,"selection-portfolio-company-sites"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$393.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$321,self__.link_fn,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$301,"selection-portfolio-company-sites"], null)):null))));
}
});
clustermap.components.full_report.t22609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22611){var self__ = this;
var _22611__$1 = this;return self__.meta22610;
});
clustermap.components.full_report.t22609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22611,meta22610__$1){var self__ = this;
var _22611__$1 = this;return (new clustermap.components.full_report.t22609(self__.full_report_component,self__.p__22600,self__.path_fn,self__.map__22607,self__.data,self__.all_portfolio_companies_summary,self__.map__22608,self__.link_fn,self__.selector,self__.selection,self__.comm,self__.owner,meta22610__$1));
});
clustermap.components.full_report.__GT_t22609 = (function __GT_t22609(full_report_component__$1,p__22600__$1,path_fn__$1,map__22607__$2,data__$1,all_portfolio_companies_summary__$1,map__22608__$2,link_fn__$1,selector__$1,selection__$1,comm__$1,owner__$1,meta22610){return (new clustermap.components.full_report.t22609(full_report_component__$1,p__22600__$1,path_fn__$1,map__22607__$2,data__$1,all_portfolio_companies_summary__$1,map__22608__$2,link_fn__$1,selector__$1,selection__$1,comm__$1,owner__$1,meta22610));
});
}
return (new clustermap.components.full_report.t22609(full_report_component,p__22600,path_fn,map__22607__$1,data,all_portfolio_companies_summary,map__22608__$1,link_fn,selector,selection,comm,owner,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
