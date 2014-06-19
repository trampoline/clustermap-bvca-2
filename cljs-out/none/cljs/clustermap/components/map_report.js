// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",1116886791))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23758 = site_stats;var G__23758__$1 = (((G__23758 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23758));return G__23758__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23759 = site_stats;var G__23759__$1 = (((G__23759 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23759));return G__23759__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23760 = site_stats;var G__23760__$1 = (((G__23760 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23760));return G__23760__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__23792 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23792__$1 = ((cljs.core.seq_QMARK_.call(null,map__23792))?cljs.core.apply.call(null,cljs.core.hash_map,map__23792):map__23792);var const_count = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23792__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23793 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23793 = (function (pc_count,ic_count,const_count,map__23792,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta23794){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23792 = map__23792;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23794 = meta23794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23793.cljs$lang$type = true;
clustermap.components.map_report.t23793.cljs$lang$ctorStr = "clustermap.components.map-report/t23793";
clustermap.components.map_report.t23793.cljs$lang$ctorPrWriter = ((function (map__23792,map__23792__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23793");
});})(map__23792,map__23792__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23793.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23793.prototype.om$core$IRender$render$arity$1 = ((function (map__23792,map__23792__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23798 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23798))?sablono.interpreter.attributes.call(null,attrs23798):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23798))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23798),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs23803 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23803))?sablono.interpreter.attributes.call(null,attrs23803):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23803))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23803),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs23808 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23808))?sablono.interpreter.attributes.call(null,attrs23808):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23808))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23809 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23809))?sablono.interpreter.attributes.call(null,attrs23809):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23809))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23809)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23808),(function (){var attrs23810 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23810))?sablono.interpreter.attributes.call(null,attrs23810):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23810))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23810)], null))));
})()], null))));
})(),(function (){var attrs23811 = clustermap.formats.money.fmoney.call(null,(function (){var G__23821 = self__.site_stats;var G__23821__$1 = (((G__23821 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23821));var G__23821__$2 = (((G__23821__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23821__$1));return G__23821__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23811))?sablono.interpreter.attributes.call(null,attrs23811):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23811))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23811),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23816 = clustermap.formats.number.fnum.call(null,(function (){var G__23822 = self__.site_stats;var G__23822__$1 = (((G__23822 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23822));var G__23822__$2 = (((G__23822__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23822__$1));return G__23822__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23816))?sablono.interpreter.attributes.call(null,attrs23816):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23816))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23816),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23792,map__23792__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23792,map__23792__$1,const_count,ic_count,pc_count){
return (function (_23795){var self__ = this;
var _23795__$1 = this;return self__.meta23794;
});})(map__23792,map__23792__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23792,map__23792__$1,const_count,ic_count,pc_count){
return (function (_23795,meta23794__$1){var self__ = this;
var _23795__$1 = this;return (new clustermap.components.map_report.t23793(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23792,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23794__$1));
});})(map__23792,map__23792__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23793 = ((function (map__23792,map__23792__$1,const_count,ic_count,pc_count){
return (function __GT_t23793(pc_count__$1,ic_count__$1,const_count__$1,map__23792__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23794){return (new clustermap.components.map_report.t23793(pc_count__$1,ic_count__$1,const_count__$1,map__23792__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23794));
});})(map__23792,map__23792__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23793(pc_count,ic_count,const_count,map__23792__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__23848 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23848__$1 = ((cljs.core.seq_QMARK_.call(null,map__23848))?cljs.core.apply.call(null,cljs.core.hash_map,map__23848):map__23848);var const_count = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23849 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23849 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,map__23848,site_stats,meta23850){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.map__23848 = map__23848;
this.site_stats = site_stats;
this.meta23850 = meta23850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23849.cljs$lang$type = true;
clustermap.components.map_report.t23849.cljs$lang$ctorStr = "clustermap.components.map-report/t23849";
clustermap.components.map_report.t23849.cljs$lang$ctorPrWriter = ((function (map__23848,map__23848__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23849");
});})(map__23848,map__23848__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23849.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23849.prototype.om$core$IRender$render$arity$1 = ((function (map__23848,map__23848__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs23854 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23854))?sablono.interpreter.attributes.call(null,attrs23854):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23854))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23854)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23855 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23855))?sablono.interpreter.attributes.call(null,attrs23855):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23855))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23856 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23856))?sablono.interpreter.attributes.call(null,attrs23856):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23856))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23856)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23855),(function (){var attrs23857 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23857))?sablono.interpreter.attributes.call(null,attrs23857):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23857))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23857)], null))));
})()], null))));
})(),(function (){var attrs23858 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23858))?sablono.interpreter.attributes.call(null,attrs23858):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23858))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23859 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23859))?sablono.interpreter.attributes.call(null,attrs23859):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23859))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23859)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23858),(function (){var attrs23860 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23860))?sablono.interpreter.attributes.call(null,attrs23860):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23860))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23860)], null))));
})()], null))));
})(),(function (){var attrs23861 = clustermap.formats.money.fmoney.call(null,(function (){var G__23871 = self__.site_stats;var G__23871__$1 = (((G__23871 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23871));var G__23871__$2 = (((G__23871__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23871__$1));return G__23871__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23861))?sablono.interpreter.attributes.call(null,attrs23861):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23861))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23861),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23866 = clustermap.formats.number.fnum.call(null,(function (){var G__23872 = self__.site_stats;var G__23872__$1 = (((G__23872 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23872));var G__23872__$2 = (((G__23872__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23872__$1));return G__23872__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23866))?sablono.interpreter.attributes.call(null,attrs23866):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23866))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23866),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23848,map__23848__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23849.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23848,map__23848__$1,const_count,ic_count,pc_count){
return (function (_23851){var self__ = this;
var _23851__$1 = this;return self__.meta23850;
});})(map__23848,map__23848__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23848,map__23848__$1,const_count,ic_count,pc_count){
return (function (_23851,meta23850__$1){var self__ = this;
var _23851__$1 = this;return (new clustermap.components.map_report.t23849(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.map__23848,self__.site_stats,meta23850__$1));
});})(map__23848,map__23848__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23849 = ((function (map__23848,map__23848__$1,const_count,ic_count,pc_count){
return (function __GT_t23849(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,map__23848__$2,site_stats__$1,meta23850){return (new clustermap.components.map_report.t23849(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,map__23848__$2,site_stats__$1,meta23850));
});})(map__23848,map__23848__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23849(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,map__23848__$1,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__23898 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23898__$1 = ((cljs.core.seq_QMARK_.call(null,map__23898))?cljs.core.apply.call(null,cljs.core.hash_map,map__23898):map__23898);var const_count = cljs.core.get.call(null,map__23898__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23898__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23898__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23899 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23899 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__23898,comm,investor_company_report,view_path_fn,site_stats,meta23900){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__23898 = map__23898;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta23900 = meta23900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23899.cljs$lang$type = true;
clustermap.components.map_report.t23899.cljs$lang$ctorStr = "clustermap.components.map-report/t23899";
clustermap.components.map_report.t23899.cljs$lang$ctorPrWriter = ((function (map__23898,map__23898__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23899");
});})(map__23898,map__23898__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23899.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23899.prototype.om$core$IRender$render$arity$1 = ((function (map__23898,map__23898__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23904 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23904))?sablono.interpreter.attributes.call(null,attrs23904):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23904))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23904)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23905 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23905))?sablono.interpreter.attributes.call(null,attrs23905):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23905))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23906 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23906))?sablono.interpreter.attributes.call(null,attrs23906):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23906))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23906)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23905),(function (){var attrs23907 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23907))?sablono.interpreter.attributes.call(null,attrs23907):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23907))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23907)], null))));
})()], null))));
})(),(function (){var attrs23908 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23908))?sablono.interpreter.attributes.call(null,attrs23908):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23908))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23909 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23909))?sablono.interpreter.attributes.call(null,attrs23909):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23909))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23909)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23908),(function (){var attrs23910 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23910))?sablono.interpreter.attributes.call(null,attrs23910):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23910))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23910)], null))));
})()], null))));
})(),(function (){var attrs23911 = clustermap.formats.money.fmoney.call(null,(function (){var G__23921 = self__.site_stats;var G__23921__$1 = (((G__23921 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23921));var G__23921__$2 = (((G__23921__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23921__$1));return G__23921__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23911))?sablono.interpreter.attributes.call(null,attrs23911):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23911))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23911),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23916 = clustermap.formats.number.fnum.call(null,(function (){var G__23922 = self__.site_stats;var G__23922__$1 = (((G__23922 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23922));var G__23922__$2 = (((G__23922__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23922__$1));return G__23922__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23916))?sablono.interpreter.attributes.call(null,attrs23916):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23916))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23916),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23898,map__23898__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23898,map__23898__$1,const_count,ic_count,pc_count){
return (function (_23901){var self__ = this;
var _23901__$1 = this;return self__.meta23900;
});})(map__23898,map__23898__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23898,map__23898__$1,const_count,ic_count,pc_count){
return (function (_23901,meta23900__$1){var self__ = this;
var _23901__$1 = this;return (new clustermap.components.map_report.t23899(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__23898,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta23900__$1));
});})(map__23898,map__23898__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23899 = ((function (map__23898,map__23898__$1,const_count,ic_count,pc_count){
return (function __GT_t23899(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__23898__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta23900){return (new clustermap.components.map_report.t23899(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__23898__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta23900));
});})(map__23898,map__23898__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23899(pc_count,path_fn,const_count,investor_company,ic_count,map__23898__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__23952 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23952__$1 = ((cljs.core.seq_QMARK_.call(null,map__23952))?cljs.core.apply.call(null,cljs.core.hash_map,map__23952):map__23952);var const_count = cljs.core.get.call(null,map__23952__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23952__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23952__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23953 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23953 = (function (pc_count,path_fn,map__23952,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta23954){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.map__23952 = map__23952;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta23954 = meta23954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23953.cljs$lang$type = true;
clustermap.components.map_report.t23953.cljs$lang$ctorStr = "clustermap.components.map-report/t23953";
clustermap.components.map_report.t23953.cljs$lang$ctorPrWriter = ((function (map__23952,map__23952__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23953");
});})(map__23952,map__23952__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23953.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23953.prototype.om$core$IRender$render$arity$1 = ((function (map__23952,map__23952__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23958 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23958))?sablono.interpreter.attributes.call(null,attrs23958):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23958))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23958),React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23963 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23963))?sablono.interpreter.attributes.call(null,attrs23963):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23963))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23964 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23964))?sablono.interpreter.attributes.call(null,attrs23964):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23964))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23964)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23963),(function (){var attrs23965 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23965))?sablono.interpreter.attributes.call(null,attrs23965):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23965))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23965)], null))));
})()], null))));
})(),(function (){var attrs23966 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23966))?sablono.interpreter.attributes.call(null,attrs23966):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23966))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23967 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23967))?sablono.interpreter.attributes.call(null,attrs23967):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23967))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23967)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23966),(function (){var attrs23968 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23968))?sablono.interpreter.attributes.call(null,attrs23968):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23968))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23968)], null))));
})()], null))));
})(),(function (){var attrs23969 = clustermap.formats.money.fmoney.call(null,(function (){var G__23979 = self__.site_stats;var G__23979__$1 = (((G__23979 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23979));var G__23979__$2 = (((G__23979__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23979__$1));return G__23979__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23969))?sablono.interpreter.attributes.call(null,attrs23969):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23969))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23969),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23974 = clustermap.formats.number.fnum.call(null,(function (){var G__23980 = self__.site_stats;var G__23980__$1 = (((G__23980 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23980));var G__23980__$2 = (((G__23980__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23980__$1));return G__23980__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23974))?sablono.interpreter.attributes.call(null,attrs23974):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23974))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23974),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23952,map__23952__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23952,map__23952__$1,const_count,ic_count,pc_count){
return (function (_23955){var self__ = this;
var _23955__$1 = this;return self__.meta23954;
});})(map__23952,map__23952__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23952,map__23952__$1,const_count,ic_count,pc_count){
return (function (_23955,meta23954__$1){var self__ = this;
var _23955__$1 = this;return (new clustermap.components.map_report.t23953(self__.pc_count,self__.path_fn,self__.map__23952,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta23954__$1));
});})(map__23952,map__23952__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23953 = ((function (map__23952,map__23952__$1,const_count,ic_count,pc_count){
return (function __GT_t23953(pc_count__$1,path_fn__$1,map__23952__$2,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta23954){return (new clustermap.components.map_report.t23953(pc_count__$1,path_fn__$1,map__23952__$2,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta23954));
});})(map__23952,map__23952__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23953(pc_count,path_fn,map__23952__$1,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23985 = om.core.get_shared.call(null,owner);var map__23985__$1 = ((cljs.core.seq_QMARK_.call(null,map__23985))?cljs.core.apply.call(null,cljs.core.hash_map,map__23985):map__23985);var view_path_fn = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186));var path_fn = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23985__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23986 = cljs.core._EQ__EQ_;var expr__23987 = type;if(cljs.core.truth_(pred__23986.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23987)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__23986.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23987)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__23986.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23987)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map