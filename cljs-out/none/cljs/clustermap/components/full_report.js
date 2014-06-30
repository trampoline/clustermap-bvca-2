// Compiled by ClojureScript 0.0-2227
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
clustermap.components.full_report.single_company_selection_QMARK_ = (function single_company_selection_QMARK_(selector){return (cljs.core._EQ_.call(null,1,cljs.core.count.call(null,selector))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),(function (){var G__45858 = selector;var G__45858__$1 = (((G__45858 == null))?null:cljs.core.keys.call(null,G__45858));var G__45858__$2 = (((G__45858__$1 == null))?null:cljs.core.first.call(null,G__45858__$1));return G__45858__$2;
})()));
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__45859,owner){var map__45866 = p__45859;var map__45866__$1 = ((cljs.core.seq_QMARK_.call(null,map__45866))?cljs.core.apply.call(null,cljs.core.hash_map,map__45866):map__45866);var data = map__45866__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__45866__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__45866__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var selector = cljs.core.get.call(null,map__45866__$1,new cljs.core.Keyword(null,"selector","selector",2205476689));var map__45867 = om.core.get_shared.call(null,owner);var map__45867__$1 = ((cljs.core.seq_QMARK_.call(null,map__45867))?cljs.core.apply.call(null,cljs.core.hash_map,map__45867):map__45867);var link_fn = cljs.core.get.call(null,map__45867__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var path_fn = cljs.core.get.call(null,map__45867__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45867__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));var link_fn__$1 = cljs.core.partial.call(null,link_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));if(typeof clustermap.components.full_report.t45868 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t45868 = (function (p__45859,selection,owner,path_fn,data,selector,map__45867,link_fn,full_report_component,comm,map__45866,all_portfolio_companies_summary,meta45869){
this.p__45859 = p__45859;
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.data = data;
this.selector = selector;
this.map__45867 = map__45867;
this.link_fn = link_fn;
this.full_report_component = full_report_component;
this.comm = comm;
this.map__45866 = map__45866;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.meta45869 = meta45869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t45868.cljs$lang$type = true;
clustermap.components.full_report.t45868.cljs$lang$ctorStr = "clustermap.components.full-report/t45868";
clustermap.components.full_report.t45868.cljs$lang$ctorPrWriter = ((function (map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.full-report/t45868");
});})(map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t45868.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t45868.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.call(null,self__.owner);jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});})(map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t45868.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t45868.prototype.om$core$IRender$render$arity$1 = ((function (map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (this$){var self__ = this;
var this$__$1 = this;var attrs45871 = om.core.build.call(null,clustermap.components.full_report.overview.overview,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"overview"], null));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs45871))?sablono.interpreter.attributes.call(null,attrs45871):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45871))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments-by-company"], null)):null)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45871),sablono.interpreter.interpret.call(null,om.core.build.call(null,clustermap.components.full_report.charts.charts,self__.data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"details"], null))),((clustermap.components.full_report.single_company_selection_QMARK_.call(null,self__.selector))?sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_site_list.company_site_list,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments"], null)):null)):sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data))?om.core.build.call(null,clustermap.components.full_report.company_list.company_list,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),self__.link_fn,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"react-key","react-key",4184082563),"selection-investments-by-company"], null)):null)))], null))));
});})(map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t45868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_45870){var self__ = this;
var _45870__$1 = this;return self__.meta45869;
});})(map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.t45868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector){
return (function (_45870,meta45869__$1){var self__ = this;
var _45870__$1 = this;return (new clustermap.components.full_report.t45868(self__.p__45859,self__.selection,self__.owner,self__.path_fn,self__.data,self__.selector,self__.map__45867,self__.link_fn,self__.full_report_component,self__.comm,self__.map__45866,self__.all_portfolio_companies_summary,meta45869__$1));
});})(map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector))
;
clustermap.components.full_report.__GT_t45868 = ((function (map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector){
return (function __GT_t45868(p__45859__$1,selection__$1,owner__$1,path_fn__$2,data__$1,selector__$1,map__45867__$2,link_fn__$2,full_report_component__$1,comm__$1,map__45866__$2,all_portfolio_companies_summary__$1,meta45869){return (new clustermap.components.full_report.t45868(p__45859__$1,selection__$1,owner__$1,path_fn__$2,data__$1,selector__$1,map__45867__$2,link_fn__$2,full_report_component__$1,comm__$1,map__45866__$2,all_portfolio_companies_summary__$1,meta45869));
});})(map__45867,map__45867__$1,link_fn,path_fn,comm,path_fn__$1,link_fn__$1,map__45866,map__45866__$1,data,all_portfolio_companies_summary,selection,selector))
;
}
return (new clustermap.components.full_report.t45868(p__45859,selection,owner,path_fn__$1,data,selector,map__45867__$1,link_fn__$1,full_report_component,comm,map__45866__$1,all_portfolio_companies_summary,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.full_report.full_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id),new cljs.core.Keyword(null,"shared","shared",4405305303),shared], null));
});

//# sourceMappingURL=full_report.js.map