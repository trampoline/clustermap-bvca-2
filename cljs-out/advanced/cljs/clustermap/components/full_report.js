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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selector))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$890,(function (){var G__38960 = selector;var G__38960__$1 = (((G__38960 == null))?null:cljs.core.keys(G__38960));var G__38960__$2 = (((G__38960__$1 == null))?null:cljs.core.first(G__38960__$1));return G__38960__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__38961,owner){var map__38968 = p__38961;var map__38968__$1 = ((cljs.core.seq_QMARK_(map__38968))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38968):map__38968);var data = map__38968__$1;var all_portfolio_companies_summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38968__$1,cljs.core.constant$keyword$972);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38968__$1,cljs.core.constant$keyword$952);var selector = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38968__$1,cljs.core.constant$keyword$973);var map__38969 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38969__$1 = ((cljs.core.seq_QMARK_(map__38969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38969):map__38969);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38969__$1,cljs.core.constant$keyword$889);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38969__$1,cljs.core.constant$keyword$888);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38969__$1,cljs.core.constant$keyword$898);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$974);var link_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(link_fn,cljs.core.constant$keyword$974);if(typeof clustermap.components.full_report.t38970 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t38970 = (function (p__38961,selection,map__38969,owner,path_fn,data,map__38968,selector,link_fn,full_report_component,comm,all_portfolio_companies_summary,meta38971){
this.p__38961 = p__38961;
this.selection = selection;
this.map__38969 = map__38969;
this.owner = owner;
this.path_fn = path_fn;
this.data = data;
this.map__38968 = map__38968;
this.selector = selector;
this.link_fn = link_fn;
this.full_report_component = full_report_component;
this.comm = comm;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.meta38971 = meta38971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t38970.cljs$lang$type = true;
clustermap.components.full_report.t38970.cljs$lang$ctorStr = "clustermap.components.full-report/t38970";
clustermap.components.full_report.t38970.cljs$lang$ctorPrWriter = ((function (map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report/t38970");
});})(map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38970.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t38970.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.cljs$core$IFn$_invoke$arity$2("[data-toggle='tooltip']",root_node).tooltip();
});})(map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38970.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t38970.prototype.om$core$IRender$render$arity$1 = ((function (map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$){var self__ = this;
var this$__$1 = this;var attrs38973 = om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$898,self__.comm], null),cljs.core.constant$keyword$877,"overview"], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38973))?sablono.interpreter.attributes(attrs38973):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38973))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$898,self__.comm], null),cljs.core.constant$keyword$877,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$889,self__.link_fn,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$877,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$889,self__.link_fn,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$877,"selection-investments-by-company"], null)):null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38973),sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$898,self__.comm], null),cljs.core.constant$keyword$877,"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_(self__.selector))?sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.company_site_list,cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$889,self__.link_fn,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$877,"selection-investments"], null)):null)):sablono.interpreter.interpret((cljs.core.truth_(cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.company_list,cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$898,self__.comm,cljs.core.constant$keyword$889,self__.link_fn,cljs.core.constant$keyword$888,self__.path_fn], null),cljs.core.constant$keyword$877,"selection-investments-by-company"], null)):null)))], null))));
});})(map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_38972){var self__ = this;
var _38972__$1 = this;return self__.meta38971;
});})(map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t38970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_38972,meta38971__$1){var self__ = this;
var _38972__$1 = this;return (new clustermap.components.full_report.t38970(self__.p__38961,self__.selection,self__.map__38969,self__.owner,self__.path_fn,self__.data,self__.map__38968,self__.selector,self__.link_fn,self__.full_report_component,self__.comm,self__.all_portfolio_companies_summary,meta38971__$1));
});})(map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.__GT_t38970 = ((function (map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector){
return (function __GT_t38970(p__38961__$1,selection__$1,map__38969__$2,owner__$1,path_fn__$2,data__$1,map__38968__$2,selector__$1,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,meta38971){return (new clustermap.components.full_report.t38970(p__38961__$1,selection__$1,map__38969__$2,owner__$1,path_fn__$2,data__$1,map__38968__$2,selector__$1,link_fn__$2,full_report_component__$1,comm__$1,all_portfolio_companies_summary__$1,meta38971));
});})(map__38969,map__38969__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__38968,map__38968__$1,data,all_portfolio_companies_summary,selection,selector))
;
}
return (new clustermap.components.full_report.t38970(p__38961,selection,map__38969__$1,owner,path_fn__$1,data,map__38968__$1,selector,link_fn__$1,full_report_component,comm,all_portfolio_companies_summary,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$886,document.getElementById(elem_id),cljs.core.constant$keyword$883,shared], null));
});
