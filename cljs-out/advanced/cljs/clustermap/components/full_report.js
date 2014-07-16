// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.full_report');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.company_list');
goog.require('clustermap.components.full_report.charts');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('sablono.core');
goog.require('clustermap.components.full_report.charts');
goog.require('jayq.core');
goog.require('clustermap.components.full_report.overview');
goog.require('clustermap.components.full_report.overview');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.components.full_report.company_site_list');
goog.require('clustermap.components.full_report.company_list');
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$882,(function (){var G__36927 = selector;var G__36927__$1 = (((G__36927 == null))?null:cljs.core.keys(G__36927));var G__36927__$2 = (((G__36927__$1 == null))?null:cljs.core.first(G__36927__$1));return G__36927__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__36928,owner){var map__36935 = p__36928;var map__36935__$1 = ((cljs.core.seq_QMARK_(map__36935))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36935):map__36935);var data = map__36935__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,cljs.core.constant$keyword$964);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,cljs.core.constant$keyword$944);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36935__$1,cljs.core.constant$keyword$965);var map__36936 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__36936__$1 = ((cljs.core.seq_QMARK_(map__36936))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36936):map__36936);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,cljs.core.constant$keyword$881);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,cljs.core.constant$keyword$880);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36936__$1,cljs.core.constant$keyword$890);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$966);var link_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(link_fn,cljs.core.constant$keyword$966);if(typeof clustermap.components.full_report.t36937 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t36937 = (function (selection,map__36935,owner,path_fn,map__36936,data,selector,link_fn,full_report_component,comm,all_portfolio_companies_summary,p__36928,meta36938){
this.selection = selection;
this.map__36935 = map__36935;
this.owner = owner;
this.path_fn = path_fn;
this.map__36936 = map__36936;
this.data = data;
this.selector = selector;
this.link_fn = link_fn;
this.full_report_component = full_report_component;
this.comm = comm;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.p__36928 = p__36928;
this.meta36938 = meta36938;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t36937.cljs$lang$type = true;
clustermap.components.full_report.t36937.cljs$lang$ctorStr = "clustermap.components.full-report/t36937";
clustermap.components.full_report.t36937.cljs$lang$ctorPrWriter = ((function (map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report/t36937");
});})(map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t36937.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t36937.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});})(map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t36937.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t36937.prototype.om$core$IRender$render$arity$1 = ((function (map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$){var self__ = this;
var this$__$1 = this;var attrs36940 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$890,self__.comm], null),cljs.core.constant$keyword$869,"overview"], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36940))?sablono.interpreter.attributes(attrs36940):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36940))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$890,self__.comm], null),cljs.core.constant$keyword$869,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$881,self__.link_fn,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$869,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$881,self__.link_fn,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$869,"selection-investments-by-company"], null)):null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36940),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$890,self__.comm], null),cljs.core.constant$keyword$869,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$881,self__.link_fn,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$869,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$881,self__.link_fn,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$869,"selection-investments-by-company"], null)):null)))], null))));
});})(map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t36937.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_36939){var self__ = this;
var _36939__$1 = this;return self__.meta36938;
});})(map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t36937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_36939,meta36938__$1){var self__ = this;
var _36939__$1 = this;return (new clustermap.components.full_report.t36937(self__.selection,self__.map__36935,self__.owner,self__.path_fn,self__.map__36936,self__.data,self__.selector,self__.link_fn,self__.full_report_component,self__.comm,self__.all_portfolio_companies_summary,self__.p__36928,meta36938__$1));
});})(map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.__GT_t36937 = ((function (map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector){
return (function __GT_t36937(selection__$1,map__36935__$2,owner__$1,path_fn__$2,map__36936__$2,data__$1,selector__$1,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,p__36928__$1,meta36938){return (new clustermap.components.full_report.t36937(selection__$1,map__36935__$2,owner__$1,path_fn__$2,map__36936__$2,data__$1,selector__$1,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,p__36928__$1,meta36938));
});})(map__36936,map__36936__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__36935,map__36935__$1,data,all_portfolio_companies_summary,selection,selector))
;
}
return (new clustermap.components.full_report.t36937(selection,map__36935__$1,owner,path_fn__$1,map__36936__$1,data,selector,link_fn__$1,full_report_component,comm,all_portfolio_companies_summary,p__36928,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$878,document.getElementById(elem_id),cljs.core.constant$keyword$875,shared], null));
});
