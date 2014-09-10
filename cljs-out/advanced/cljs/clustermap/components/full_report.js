// Compiled by ClojureScript 0.0-2268
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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$907,(function (){var G__37994 = selector;var G__37994__$1 = (((G__37994 == null))?null:cljs.core.keys(G__37994));var G__37994__$2 = (((G__37994__$1 == null))?null:cljs.core.first(G__37994__$1));return G__37994__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__37995,owner){var map__38002 = p__37995;var map__38002__$1 = ((cljs.core.seq_QMARK_(map__38002))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38002):map__38002);var data = map__38002__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38002__$1,cljs.core.constant$keyword$989);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38002__$1,cljs.core.constant$keyword$969);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38002__$1,cljs.core.constant$keyword$990);var map__38003 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38003__$1 = ((cljs.core.seq_QMARK_(map__38003))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38003):map__38003);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38003__$1,cljs.core.constant$keyword$906);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38003__$1,cljs.core.constant$keyword$905);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38003__$1,cljs.core.constant$keyword$915);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$991);var link_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(link_fn,cljs.core.constant$keyword$991);if(typeof clustermap.components.full_report.t38004 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t38004 = (function (map__38002,selection,owner,path_fn,data,p__37995,selector,map__38003,link_fn,full_report_component,comm,all_portfolio_companies_summary,meta38005){
this.map__38002 = map__38002;
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.data = data;
this.p__37995 = p__37995;
this.selector = selector;
this.map__38003 = map__38003;
this.link_fn = link_fn;
this.full_report_component = full_report_component;
this.comm = comm;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.meta38005 = meta38005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t38004.cljs$lang$type = true;
clustermap.components.full_report.t38004.cljs$lang$ctorStr = "clustermap.components.full-report/t38004";
clustermap.components.full_report.t38004.cljs$lang$ctorPrWriter = ((function (map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.full-report/t38004");
});})(map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38004.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t38004.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});})(map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38004.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t38004.prototype.om$core$IRender$render$arity$1 = ((function (map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$){var self__ = this;
var this$__$1 = this;var attrs38007 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,self__.comm], null),cljs.core.constant$keyword$894,"overview"], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38007))?sablono.interpreter.attributes(attrs38007):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38007))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,self__.comm], null),cljs.core.constant$keyword$894,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$906,self__.link_fn,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$894,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$906,self__.link_fn,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$894,"selection-investments-by-company"], null)):null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38007),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,self__.comm], null),cljs.core.constant$keyword$894,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$906,self__.link_fn,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$894,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$915,self__.comm,cljs.core.constant$keyword$906,self__.link_fn,cljs.core.constant$keyword$905,self__.path_fn], null),cljs.core.constant$keyword$894,"selection-investments-by-company"], null)):null)))], null))));
});})(map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_38006){var self__ = this;
var _38006__$1 = this;return self__.meta38005;
});})(map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_38006,meta38005__$1){var self__ = this;
var _38006__$1 = this;return (new clustermap.components.full_report.t38004(self__.map__38002,self__.selection,self__.owner,self__.path_fn,self__.data,self__.p__37995,self__.selector,self__.map__38003,self__.link_fn,self__.full_report_component,self__.comm,self__.all_portfolio_companies_summary,meta38005__$1));
});})(map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.__GT_t38004 = ((function (map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector){
return (function __GT_t38004(map__38002__$2,selection__$1,owner__$1,path_fn__$2,data__$1,p__37995__$1,selector__$1,map__38003__$2,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,meta38005){return (new clustermap.components.full_report.t38004(map__38002__$2,selection__$1,owner__$1,path_fn__$2,data__$1,p__37995__$1,selector__$1,map__38003__$2,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,meta38005));
});})(map__38003,map__38003__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38002,map__38002__$1,data,all_portfolio_companies_summary,selection,selector))
;
}
return (new clustermap.components.full_report.t38004(map__38002__$1,selection,owner,path_fn__$1,data,p__37995,selector,map__38003__$1,link_fn__$1,full_report_component,comm,all_portfolio_companies_summary,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,document.getElementById(elem_id),cljs.core.constant$keyword$900,shared], null));
});
