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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,(function (){var G__11919 = selector;var G__11919__$1 = (((G__11919 == null))?null:cljs.core.keys(G__11919));var G__11919__$2 = (((G__11919__$1 == null))?null:cljs.core.first(G__11919__$1));return G__11919__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__11920,owner){var map__11927 = p__11920;var map__11927__$1 = ((cljs.core.seq_QMARK_(map__11927))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11927):map__11927);var data = map__11927__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11927__$1,cljs.core.constant$keyword$157);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11927__$1,cljs.core.constant$keyword$82);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11927__$1,cljs.core.constant$keyword$158);var map__11928 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__11928__$1 = ((cljs.core.seq_QMARK_(map__11928))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11928):map__11928);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11928__$1,cljs.core.constant$keyword$84);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11928__$1,cljs.core.constant$keyword$83);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11928__$1,cljs.core.constant$keyword$80);if(typeof clustermap.components.full_report.t11929 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t11929 = (function (full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,p__11920,selector,selection,comm,map__11928,map__11927,owner,meta11930){
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.p__11920 = p__11920;
this.selector = selector;
this.selection = selection;
this.comm = comm;
this.map__11928 = map__11928;
this.map__11927 = map__11927;
this.owner = owner;
this.meta11930 = meta11930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t11929.cljs$lang$type = true;
clustermap.components.full_report.t11929.cljs$lang$ctorStr = "clustermap.components.full-report/t11929";
clustermap.components.full_report.t11929.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t11929");
});
clustermap.components.full_report.t11929.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t11929.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t11929.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t11929.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs11932 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,self__.comm], null),cljs.core.constant$keyword$68,"overview"], null));if(cljs.core.map_QMARK_(attrs11932))
{return React.DOM.div(sablono.interpreter.attributes(attrs11932),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,self__.comm], null),cljs.core.constant$keyword$68,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,self__.comm,cljs.core.constant$keyword$84,self__.link_fn,cljs.core.constant$keyword$83,self__.path_fn], null),cljs.core.constant$keyword$68,"selection-portfolio-companies"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,self__.comm,cljs.core.constant$keyword$84,self__.link_fn,cljs.core.constant$keyword$83,self__.path_fn], null),cljs.core.constant$keyword$68,"selection-portfolio-companies"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs11932),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$80,self__.comm], null),cljs.core.constant$keyword$68,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$160.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,self__.comm,cljs.core.constant$keyword$84,self__.link_fn,cljs.core.constant$keyword$83,self__.path_fn], null),cljs.core.constant$keyword$68,"selection-portfolio-companies"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$159.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$71,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$80,self__.comm,cljs.core.constant$keyword$84,self__.link_fn,cljs.core.constant$keyword$83,self__.path_fn], null),cljs.core.constant$keyword$68,"selection-portfolio-companies"], null)):null))));
}
});
clustermap.components.full_report.t11929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11931){var self__ = this;
var _11931__$1 = this;return self__.meta11930;
});
clustermap.components.full_report.t11929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11931,meta11930__$1){var self__ = this;
var _11931__$1 = this;return (new clustermap.components.full_report.t11929(self__.full_report_component,self__.path_fn,self__.data,self__.all_portfolio_companies_summary,self__.link_fn,self__.p__11920,self__.selector,self__.selection,self__.comm,self__.map__11928,self__.map__11927,self__.owner,meta11930__$1));
});
clustermap.components.full_report.__GT_t11929 = (function __GT_t11929(full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,p__11920__$1,selector__$1,selection__$1,comm__$1,map__11928__$2,map__11927__$2,owner__$1,meta11930){return (new clustermap.components.full_report.t11929(full_report_component__$1,path_fn__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,p__11920__$1,selector__$1,selection__$1,comm__$1,map__11928__$2,map__11927__$2,owner__$1,meta11930));
});
}
return (new clustermap.components.full_report.t11929(full_report_component,path_fn,data,all_portfolio_companies_summary,link_fn,p__11920,selector,selection,comm,map__11928__$1,map__11927__$1,owner,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
