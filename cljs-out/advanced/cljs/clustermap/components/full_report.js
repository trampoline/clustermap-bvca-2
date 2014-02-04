// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.overview');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('clustermap.components.full_report.details');
goog.require('om.core');
goog.require('clustermap.components.full_report.details');
goog.require('om.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.portfolio_company_sites');
goog.require('jayq.core');
clustermap.components.full_report.full_report_component = (function full_report_component(p__21670,owner){var map__21676 = p__21670;var map__21676__$1 = ((cljs.core.seq_QMARK_(map__21676))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21676):map__21676);var data = map__21676__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21676__$1,cljs.core.constant$keyword$336);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21676__$1,cljs.core.constant$keyword$274);var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$272);if(typeof clustermap.components.full_report.t21677 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t21677 = (function (comm,selection,all_portfolio_companies_summary,data,map__21676,owner,p__21670,full_report_component,meta21678){
this.comm = comm;
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__21676 = map__21676;
this.owner = owner;
this.p__21670 = p__21670;
this.full_report_component = full_report_component;
this.meta21678 = meta21678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t21677.cljs$lang$type = true;
clustermap.components.full_report.t21677.cljs$lang$ctorStr = "clustermap.components.full-report/t21677";
clustermap.components.full_report.t21677.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t21677");
});
clustermap.components.full_report.t21677.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t21677.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t21677.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t21677.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs21680 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null));if(cljs.core.map_QMARK_(attrs21680))
{return React.DOM.div(sablono.interpreter.attributes(attrs21680),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null))),sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null)):null)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs21680),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.details.details,self__.data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null))),sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.portfolio_company_sites.portfolio_company_sites,cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,self__.comm], null)], null)):null)));
}
});
clustermap.components.full_report.t21677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21679){var self__ = this;
var _21679__$1 = this;return self__.meta21678;
});
clustermap.components.full_report.t21677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21679,meta21678__$1){var self__ = this;
var _21679__$1 = this;return (new clustermap.components.full_report.t21677(self__.comm,self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__21676,self__.owner,self__.p__21670,self__.full_report_component,meta21678__$1));
});
clustermap.components.full_report.__GT_t21677 = (function __GT_t21677(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__21676__$2,owner__$1,p__21670__$1,full_report_component__$1,meta21678){return (new clustermap.components.full_report.t21677(comm__$1,selection__$1,all_portfolio_companies_summary__$1,data__$1,map__21676__$2,owner__$1,p__21670__$1,full_report_component__$1,meta21678));
});
}
return (new clustermap.components.full_report.t21677(comm,selection,all_portfolio_companies_summary,data,map__21676__$1,owner,p__21670,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,comm], null),clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
