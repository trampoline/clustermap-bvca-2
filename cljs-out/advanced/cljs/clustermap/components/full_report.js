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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(1,cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$319,(function (){var G__22567 = selector;var G__22567__$1 = (((G__22567 == null))?null:cljs.core.keys(G__22567));var G__22567__$2 = (((G__22567__$1 == null))?null:cljs.core.first(G__22567__$1));return G__22567__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__22568,owner){var map__22575 = p__22568;var map__22575__$1 = ((cljs.core.seq_QMARK_(map__22575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22575):map__22575);var data = map__22575__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.constant$keyword$409);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.constant$keyword$328);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22575__$1,cljs.core.constant$keyword$410);var map__22576 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22576__$1 = ((cljs.core.seq_QMARK_(map__22576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22576):map__22576);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,cljs.core.constant$keyword$330);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,cljs.core.constant$keyword$329);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22576__$1,cljs.core.constant$keyword$322);if(typeof clustermap.components.full_report.t22577 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t22577 = (function (full_report_component,path_fn,p__22568,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,owner,map__22576,map__22575,meta22578){
this.full_report_component = full_report_component;
this.path_fn = path_fn;
this.p__22568 = p__22568;
this.data = data;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.link_fn = link_fn;
this.selector = selector;
this.selection = selection;
this.comm = comm;
this.owner = owner;
this.map__22576 = map__22576;
this.map__22575 = map__22575;
this.meta22578 = meta22578;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t22577.cljs$lang$type = true;
clustermap.components.full_report.t22577.cljs$lang$ctorStr = "clustermap.components.full-report/t22577";
clustermap.components.full_report.t22577.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report/t22577");
});
clustermap.components.full_report.t22577.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t22577.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t22577.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t22577.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs22580 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$322,self__.comm], null),cljs.core.constant$keyword$310,"overview"], null));if(cljs.core.map_QMARK_(attrs22580))
{return React.DOM.div(sablono.interpreter.attributes(attrs22580),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$322,self__.comm], null),cljs.core.constant$keyword$310,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$330,self__.link_fn,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$310,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$330,self__.link_fn,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$310,"selection-investments-by-company"], null)):null))));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22580),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$322,self__.comm], null),cljs.core.constant$keyword$310,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$330,self__.link_fn,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$310,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$330,self__.link_fn,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$310,"selection-investments-by-company"], null)):null))));
}
});
clustermap.components.full_report.t22577.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22579){var self__ = this;
var _22579__$1 = this;return self__.meta22578;
});
clustermap.components.full_report.t22577.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22579,meta22578__$1){var self__ = this;
var _22579__$1 = this;return (new clustermap.components.full_report.t22577(self__.full_report_component,self__.path_fn,self__.p__22568,self__.data,self__.all_portfolio_companies_summary,self__.link_fn,self__.selector,self__.selection,self__.comm,self__.owner,self__.map__22576,self__.map__22575,meta22578__$1));
});
clustermap.components.full_report.__GT_t22577 = (function __GT_t22577(full_report_component__$1,path_fn__$1,p__22568__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,owner__$1,map__22576__$2,map__22575__$2,meta22578){return (new clustermap.components.full_report.t22577(full_report_component__$1,path_fn__$1,p__22568__$1,data__$1,all_portfolio_companies_summary__$1,link_fn__$1,selector__$1,selection__$1,comm__$1,owner__$1,map__22576__$2,map__22575__$2,meta22578));
});
}
return (new clustermap.components.full_report.t22577(full_report_component,path_fn,p__22568,data,all_portfolio_companies_summary,link_fn,selector,selection,comm,owner,map__22576__$1,map__22575__$1,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
