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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23760 = site_stats;var G__23760__$1 = (((G__23760 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23760));return G__23760__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23761 = site_stats;var G__23761__$1 = (((G__23761 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23761));return G__23761__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23762 = site_stats;var G__23762__$1 = (((G__23762 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23762));return G__23762__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__23794 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23794__$1 = ((cljs.core.seq_QMARK_.call(null,map__23794))?cljs.core.apply.call(null,cljs.core.hash_map,map__23794):map__23794);var const_count = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23794__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23795 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23795 = (function (pc_count,ic_count,const_count,map__23794,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta23796){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23794 = map__23794;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23796 = meta23796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23795.cljs$lang$type = true;
clustermap.components.map_report.t23795.cljs$lang$ctorStr = "clustermap.components.map-report/t23795";
clustermap.components.map_report.t23795.cljs$lang$ctorPrWriter = ((function (map__23794,map__23794__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t23795");
});})(map__23794,map__23794__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23795.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23795.prototype.om$core$IRender$render$arity$1 = ((function (map__23794,map__23794__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23800 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23800))?sablono.interpreter.attributes.call(null,attrs23800):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23800))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23800),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs23805 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23805))?sablono.interpreter.attributes.call(null,attrs23805):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23805))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23805),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs23810 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23810))?sablono.interpreter.attributes.call(null,attrs23810):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23810))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23811 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23811))?sablono.interpreter.attributes.call(null,attrs23811):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23811))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23811)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23810),(function (){var attrs23812 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23812))?sablono.interpreter.attributes.call(null,attrs23812):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23812))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23812)], null))));
})()], null))));
})(),(function (){var attrs23813 = clustermap.formats.money.fmoney.call(null,(function (){var G__23823 = self__.site_stats;var G__23823__$1 = (((G__23823 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23823));var G__23823__$2 = (((G__23823__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23823__$1));return G__23823__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23813))?sablono.interpreter.attributes.call(null,attrs23813):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23813))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23813),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23818 = clustermap.formats.number.fnum.call(null,(function (){var G__23824 = self__.site_stats;var G__23824__$1 = (((G__23824 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23824));var G__23824__$2 = (((G__23824__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23824__$1));return G__23824__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23818))?sablono.interpreter.attributes.call(null,attrs23818):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23818))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23818),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23794,map__23794__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23794,map__23794__$1,const_count,ic_count,pc_count){
return (function (_23797){var self__ = this;
var _23797__$1 = this;return self__.meta23796;
});})(map__23794,map__23794__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23794,map__23794__$1,const_count,ic_count,pc_count){
return (function (_23797,meta23796__$1){var self__ = this;
var _23797__$1 = this;return (new clustermap.components.map_report.t23795(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23794,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23796__$1));
});})(map__23794,map__23794__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23795 = ((function (map__23794,map__23794__$1,const_count,ic_count,pc_count){
return (function __GT_t23795(pc_count__$1,ic_count__$1,const_count__$1,map__23794__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23796){return (new clustermap.components.map_report.t23795(pc_count__$1,ic_count__$1,const_count__$1,map__23794__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23796));
});})(map__23794,map__23794__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23795(pc_count,ic_count,const_count,map__23794__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__23850 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23850__$1 = ((cljs.core.seq_QMARK_.call(null,map__23850))?cljs.core.apply.call(null,cljs.core.hash_map,map__23850):map__23850);var const_count = cljs.core.get.call(null,map__23850__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23850__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23850__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23851 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23851 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__23850,portfolio_company_report,site_stats,meta23852){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__23850 = map__23850;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta23852 = meta23852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23851.cljs$lang$type = true;
clustermap.components.map_report.t23851.cljs$lang$ctorStr = "clustermap.components.map-report/t23851";
clustermap.components.map_report.t23851.cljs$lang$ctorPrWriter = ((function (map__23850,map__23850__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t23851");
});})(map__23850,map__23850__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23851.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23851.prototype.om$core$IRender$render$arity$1 = ((function (map__23850,map__23850__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs23856 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23856))?sablono.interpreter.attributes.call(null,attrs23856):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23856))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23856)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23857 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23857))?sablono.interpreter.attributes.call(null,attrs23857):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23857))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23858 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23858))?sablono.interpreter.attributes.call(null,attrs23858):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23858))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23858)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23857),(function (){var attrs23859 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23859))?sablono.interpreter.attributes.call(null,attrs23859):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23859))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23859)], null))));
})()], null))));
})(),(function (){var attrs23860 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23860))?sablono.interpreter.attributes.call(null,attrs23860):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23860))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23861 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23861))?sablono.interpreter.attributes.call(null,attrs23861):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23861))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23861)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23860),(function (){var attrs23862 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23862))?sablono.interpreter.attributes.call(null,attrs23862):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23862))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23862)], null))));
})()], null))));
})(),(function (){var attrs23863 = clustermap.formats.money.fmoney.call(null,(function (){var G__23873 = self__.site_stats;var G__23873__$1 = (((G__23873 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23873));var G__23873__$2 = (((G__23873__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23873__$1));return G__23873__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23863))?sablono.interpreter.attributes.call(null,attrs23863):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23863))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23863),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23868 = clustermap.formats.number.fnum.call(null,(function (){var G__23874 = self__.site_stats;var G__23874__$1 = (((G__23874 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23874));var G__23874__$2 = (((G__23874__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23874__$1));return G__23874__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23868))?sablono.interpreter.attributes.call(null,attrs23868):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23868))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23868),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23850,map__23850__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23851.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23850,map__23850__$1,const_count,ic_count,pc_count){
return (function (_23853){var self__ = this;
var _23853__$1 = this;return self__.meta23852;
});})(map__23850,map__23850__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23850,map__23850__$1,const_count,ic_count,pc_count){
return (function (_23853,meta23852__$1){var self__ = this;
var _23853__$1 = this;return (new clustermap.components.map_report.t23851(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__23850,self__.portfolio_company_report,self__.site_stats,meta23852__$1));
});})(map__23850,map__23850__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23851 = ((function (map__23850,map__23850__$1,const_count,ic_count,pc_count){
return (function __GT_t23851(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__23850__$2,portfolio_company_report__$1,site_stats__$1,meta23852){return (new clustermap.components.map_report.t23851(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__23850__$2,portfolio_company_report__$1,site_stats__$1,meta23852));
});})(map__23850,map__23850__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23851(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__23850__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__23900 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23900__$1 = ((cljs.core.seq_QMARK_.call(null,map__23900))?cljs.core.apply.call(null,cljs.core.hash_map,map__23900):map__23900);var const_count = cljs.core.get.call(null,map__23900__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23900__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23900__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23901 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23901 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__23900,site_stats,meta23902){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__23900 = map__23900;
this.site_stats = site_stats;
this.meta23902 = meta23902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23901.cljs$lang$type = true;
clustermap.components.map_report.t23901.cljs$lang$ctorStr = "clustermap.components.map-report/t23901";
clustermap.components.map_report.t23901.cljs$lang$ctorPrWriter = ((function (map__23900,map__23900__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t23901");
});})(map__23900,map__23900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23901.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23901.prototype.om$core$IRender$render$arity$1 = ((function (map__23900,map__23900__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23906 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23906))?sablono.interpreter.attributes.call(null,attrs23906):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23906))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23906)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23907 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23907))?sablono.interpreter.attributes.call(null,attrs23907):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23907))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23908 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23908))?sablono.interpreter.attributes.call(null,attrs23908):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23908))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23908)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23907),(function (){var attrs23909 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23909))?sablono.interpreter.attributes.call(null,attrs23909):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23909))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23909)], null))));
})()], null))));
})(),(function (){var attrs23910 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23910))?sablono.interpreter.attributes.call(null,attrs23910):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23910))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23911 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23911))?sablono.interpreter.attributes.call(null,attrs23911):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23911))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23911)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23910),(function (){var attrs23912 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23912))?sablono.interpreter.attributes.call(null,attrs23912):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23912))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23912)], null))));
})()], null))));
})(),(function (){var attrs23913 = clustermap.formats.money.fmoney.call(null,(function (){var G__23923 = self__.site_stats;var G__23923__$1 = (((G__23923 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23923));var G__23923__$2 = (((G__23923__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23923__$1));return G__23923__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23913))?sablono.interpreter.attributes.call(null,attrs23913):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23913))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23913),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23918 = clustermap.formats.number.fnum.call(null,(function (){var G__23924 = self__.site_stats;var G__23924__$1 = (((G__23924 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23924));var G__23924__$2 = (((G__23924__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23924__$1));return G__23924__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23918))?sablono.interpreter.attributes.call(null,attrs23918):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23918))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23918),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23900,map__23900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23900,map__23900__$1,const_count,ic_count,pc_count){
return (function (_23903){var self__ = this;
var _23903__$1 = this;return self__.meta23902;
});})(map__23900,map__23900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23900,map__23900__$1,const_count,ic_count,pc_count){
return (function (_23903,meta23902__$1){var self__ = this;
var _23903__$1 = this;return (new clustermap.components.map_report.t23901(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__23900,self__.site_stats,meta23902__$1));
});})(map__23900,map__23900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23901 = ((function (map__23900,map__23900__$1,const_count,ic_count,pc_count){
return (function __GT_t23901(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__23900__$2,site_stats__$1,meta23902){return (new clustermap.components.map_report.t23901(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__23900__$2,site_stats__$1,meta23902));
});})(map__23900,map__23900__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23901(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__23900__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__23954 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23954__$1 = ((cljs.core.seq_QMARK_.call(null,map__23954))?cljs.core.apply.call(null,cljs.core.hash_map,map__23954):map__23954);var const_count = cljs.core.get.call(null,map__23954__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23954__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23954__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23955 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23955 = (function (pc_count,path_fn,map__23954,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta23956){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.map__23954 = map__23954;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta23956 = meta23956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23955.cljs$lang$type = true;
clustermap.components.map_report.t23955.cljs$lang$ctorStr = "clustermap.components.map-report/t23955";
clustermap.components.map_report.t23955.cljs$lang$ctorPrWriter = ((function (map__23954,map__23954__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t23955");
});})(map__23954,map__23954__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23955.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23955.prototype.om$core$IRender$render$arity$1 = ((function (map__23954,map__23954__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23960 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23960))?sablono.interpreter.attributes.call(null,attrs23960):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23960))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23960),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23965 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23965))?sablono.interpreter.attributes.call(null,attrs23965):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23965))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23966 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23966))?sablono.interpreter.attributes.call(null,attrs23966):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23966))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23966)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23965),(function (){var attrs23967 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23967))?sablono.interpreter.attributes.call(null,attrs23967):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23967))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23967)], null))));
})()], null))));
})(),(function (){var attrs23968 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23968))?sablono.interpreter.attributes.call(null,attrs23968):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23968))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23969 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23969))?sablono.interpreter.attributes.call(null,attrs23969):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23969))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23969)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23968),(function (){var attrs23970 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23970))?sablono.interpreter.attributes.call(null,attrs23970):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23970))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23970)], null))));
})()], null))));
})(),(function (){var attrs23971 = clustermap.formats.money.fmoney.call(null,(function (){var G__23981 = self__.site_stats;var G__23981__$1 = (((G__23981 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23981));var G__23981__$2 = (((G__23981__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23981__$1));return G__23981__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23971))?sablono.interpreter.attributes.call(null,attrs23971):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23971))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23971),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23976 = clustermap.formats.number.fnum.call(null,(function (){var G__23982 = self__.site_stats;var G__23982__$1 = (((G__23982 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23982));var G__23982__$2 = (((G__23982__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23982__$1));return G__23982__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23976))?sablono.interpreter.attributes.call(null,attrs23976):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23976))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23976),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__23954,map__23954__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23954,map__23954__$1,const_count,ic_count,pc_count){
return (function (_23957){var self__ = this;
var _23957__$1 = this;return self__.meta23956;
});})(map__23954,map__23954__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23954,map__23954__$1,const_count,ic_count,pc_count){
return (function (_23957,meta23956__$1){var self__ = this;
var _23957__$1 = this;return (new clustermap.components.map_report.t23955(self__.pc_count,self__.path_fn,self__.map__23954,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta23956__$1));
});})(map__23954,map__23954__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23955 = ((function (map__23954,map__23954__$1,const_count,ic_count,pc_count){
return (function __GT_t23955(pc_count__$1,path_fn__$1,map__23954__$2,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta23956){return (new clustermap.components.map_report.t23955(pc_count__$1,path_fn__$1,map__23954__$2,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta23956));
});})(map__23954,map__23954__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23955(pc_count,path_fn,map__23954__$1,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23987 = om.core.get_shared.call(null,owner);var map__23987__$1 = ((cljs.core.seq_QMARK_.call(null,map__23987))?cljs.core.apply.call(null,cljs.core.hash_map,map__23987):map__23987);var view_path_fn = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186));var path_fn = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23987__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23988 = cljs.core._EQ__EQ_;var expr__23989 = type;if(cljs.core.truth_(pred__23988.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23989)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__23988.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23989)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__23988.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23989)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
