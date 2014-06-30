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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12634 = site_stats;var G__12634__$1 = (((G__12634 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12634));return G__12634__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12635 = site_stats;var G__12635__$1 = (((G__12635 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12635));return G__12635__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12636 = site_stats;var G__12636__$1 = (((G__12636 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12636));return G__12636__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__12668 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12668__$1 = ((cljs.core.seq_QMARK_.call(null,map__12668))?cljs.core.apply.call(null,cljs.core.hash_map,map__12668):map__12668);var const_count = cljs.core.get.call(null,map__12668__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12668__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12668__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12669 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12669 = (function (pc_count,ic_count,const_count,map__12668,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta12670){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12668 = map__12668;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12670 = meta12670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12669.cljs$lang$type = true;
clustermap.components.map_report.t12669.cljs$lang$ctorStr = "clustermap.components.map-report/t12669";
clustermap.components.map_report.t12669.cljs$lang$ctorPrWriter = ((function (map__12668,map__12668__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t12669");
});})(map__12668,map__12668__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12669.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12669.prototype.om$core$IRender$render$arity$1 = ((function (map__12668,map__12668__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12674 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12674))?sablono.interpreter.attributes.call(null,attrs12674):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12674))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12674),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs12679 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12679))?sablono.interpreter.attributes.call(null,attrs12679):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12679))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12679),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs12684 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12684))?sablono.interpreter.attributes.call(null,attrs12684):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12684))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12685 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12685))?sablono.interpreter.attributes.call(null,attrs12685):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12685))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12685)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12684),(function (){var attrs12686 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12686))?sablono.interpreter.attributes.call(null,attrs12686):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12686))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12686)], null))));
})()], null))));
})(),(function (){var attrs12687 = clustermap.formats.money.fmoney.call(null,(function (){var G__12697 = self__.site_stats;var G__12697__$1 = (((G__12697 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12697));var G__12697__$2 = (((G__12697__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12697__$1));return G__12697__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12687))?sablono.interpreter.attributes.call(null,attrs12687):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12687))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12687),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12692 = clustermap.formats.number.fnum.call(null,(function (){var G__12698 = self__.site_stats;var G__12698__$1 = (((G__12698 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12698));var G__12698__$2 = (((G__12698__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12698__$1));return G__12698__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12692))?sablono.interpreter.attributes.call(null,attrs12692):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12692))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12692),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12668,map__12668__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12668,map__12668__$1,const_count,ic_count,pc_count){
return (function (_12671){var self__ = this;
var _12671__$1 = this;return self__.meta12670;
});})(map__12668,map__12668__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12668,map__12668__$1,const_count,ic_count,pc_count){
return (function (_12671,meta12670__$1){var self__ = this;
var _12671__$1 = this;return (new clustermap.components.map_report.t12669(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12668,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12670__$1));
});})(map__12668,map__12668__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12669 = ((function (map__12668,map__12668__$1,const_count,ic_count,pc_count){
return (function __GT_t12669(pc_count__$1,ic_count__$1,const_count__$1,map__12668__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12670){return (new clustermap.components.map_report.t12669(pc_count__$1,ic_count__$1,const_count__$1,map__12668__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12670));
});})(map__12668,map__12668__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12669(pc_count,ic_count,const_count,map__12668__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__12724 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12724__$1 = ((cljs.core.seq_QMARK_.call(null,map__12724))?cljs.core.apply.call(null,cljs.core.hash_map,map__12724):map__12724);var const_count = cljs.core.get.call(null,map__12724__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12724__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12724__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12725 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12725 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__12724,comm,view_path_fn,portfolio_company_report,site_stats,meta12726){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__12724 = map__12724;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta12726 = meta12726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12725.cljs$lang$type = true;
clustermap.components.map_report.t12725.cljs$lang$ctorStr = "clustermap.components.map-report/t12725";
clustermap.components.map_report.t12725.cljs$lang$ctorPrWriter = ((function (map__12724,map__12724__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t12725");
});})(map__12724,map__12724__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12725.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12725.prototype.om$core$IRender$render$arity$1 = ((function (map__12724,map__12724__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12730 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12730))?sablono.interpreter.attributes.call(null,attrs12730):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12730))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12730)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12731 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12731))?sablono.interpreter.attributes.call(null,attrs12731):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12731))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12732 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12732))?sablono.interpreter.attributes.call(null,attrs12732):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12732))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12732)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12731),(function (){var attrs12733 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12733))?sablono.interpreter.attributes.call(null,attrs12733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12733))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12733)], null))));
})()], null))));
})(),(function (){var attrs12734 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12734))?sablono.interpreter.attributes.call(null,attrs12734):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12734))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12735 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12735))?sablono.interpreter.attributes.call(null,attrs12735):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12735))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12735)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12734),(function (){var attrs12736 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12736))?sablono.interpreter.attributes.call(null,attrs12736):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12736))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12736)], null))));
})()], null))));
})(),(function (){var attrs12737 = clustermap.formats.money.fmoney.call(null,(function (){var G__12747 = self__.site_stats;var G__12747__$1 = (((G__12747 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12747));var G__12747__$2 = (((G__12747__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12747__$1));return G__12747__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12737))?sablono.interpreter.attributes.call(null,attrs12737):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12737))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12737),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12742 = clustermap.formats.number.fnum.call(null,(function (){var G__12748 = self__.site_stats;var G__12748__$1 = (((G__12748 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12748));var G__12748__$2 = (((G__12748__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12748__$1));return G__12748__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12742))?sablono.interpreter.attributes.call(null,attrs12742):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12742))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12742),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12724,map__12724__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12724,map__12724__$1,const_count,ic_count,pc_count){
return (function (_12727){var self__ = this;
var _12727__$1 = this;return self__.meta12726;
});})(map__12724,map__12724__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12724,map__12724__$1,const_count,ic_count,pc_count){
return (function (_12727,meta12726__$1){var self__ = this;
var _12727__$1 = this;return (new clustermap.components.map_report.t12725(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__12724,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta12726__$1));
});})(map__12724,map__12724__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12725 = ((function (map__12724,map__12724__$1,const_count,ic_count,pc_count){
return (function __GT_t12725(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__12724__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta12726){return (new clustermap.components.map_report.t12725(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__12724__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta12726));
});})(map__12724,map__12724__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12725(pc_count,path_fn,const_count,portfolio_company,ic_count,map__12724__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__12774 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12774__$1 = ((cljs.core.seq_QMARK_.call(null,map__12774))?cljs.core.apply.call(null,cljs.core.hash_map,map__12774):map__12774);var const_count = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12775 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12775 = (function (pc_count,map__12774,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta12776){
this.pc_count = pc_count;
this.map__12774 = map__12774;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta12776 = meta12776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12775.cljs$lang$type = true;
clustermap.components.map_report.t12775.cljs$lang$ctorStr = "clustermap.components.map-report/t12775";
clustermap.components.map_report.t12775.cljs$lang$ctorPrWriter = ((function (map__12774,map__12774__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t12775");
});})(map__12774,map__12774__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12775.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12775.prototype.om$core$IRender$render$arity$1 = ((function (map__12774,map__12774__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12780 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12780))?sablono.interpreter.attributes.call(null,attrs12780):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12780))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12780)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12781 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12781))?sablono.interpreter.attributes.call(null,attrs12781):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12781))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12782 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12782))?sablono.interpreter.attributes.call(null,attrs12782):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12782)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12781),(function (){var attrs12783 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12783))?sablono.interpreter.attributes.call(null,attrs12783):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12783))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12783)], null))));
})()], null))));
})(),(function (){var attrs12784 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12784))?sablono.interpreter.attributes.call(null,attrs12784):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12784))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12785 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12785))?sablono.interpreter.attributes.call(null,attrs12785):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12785))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12785)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12784),(function (){var attrs12786 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12786))?sablono.interpreter.attributes.call(null,attrs12786):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12786))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12786)], null))));
})()], null))));
})(),(function (){var attrs12787 = clustermap.formats.money.fmoney.call(null,(function (){var G__12797 = self__.site_stats;var G__12797__$1 = (((G__12797 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12797));var G__12797__$2 = (((G__12797__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12797__$1));return G__12797__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12787))?sablono.interpreter.attributes.call(null,attrs12787):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12787))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12787),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12792 = clustermap.formats.number.fnum.call(null,(function (){var G__12798 = self__.site_stats;var G__12798__$1 = (((G__12798 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12798));var G__12798__$2 = (((G__12798__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12798__$1));return G__12798__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12792))?sablono.interpreter.attributes.call(null,attrs12792):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12792))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12792),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12774,map__12774__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12774,map__12774__$1,const_count,ic_count,pc_count){
return (function (_12777){var self__ = this;
var _12777__$1 = this;return self__.meta12776;
});})(map__12774,map__12774__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12774,map__12774__$1,const_count,ic_count,pc_count){
return (function (_12777,meta12776__$1){var self__ = this;
var _12777__$1 = this;return (new clustermap.components.map_report.t12775(self__.pc_count,self__.map__12774,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta12776__$1));
});})(map__12774,map__12774__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12775 = ((function (map__12774,map__12774__$1,const_count,ic_count,pc_count){
return (function __GT_t12775(pc_count__$1,map__12774__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta12776){return (new clustermap.components.map_report.t12775(pc_count__$1,map__12774__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta12776));
});})(map__12774,map__12774__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12775(pc_count,map__12774__$1,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__12828 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12828__$1 = ((cljs.core.seq_QMARK_.call(null,map__12828))?cljs.core.apply.call(null,cljs.core.hash_map,map__12828):map__12828);var const_count = cljs.core.get.call(null,map__12828__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12828__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12828__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12829 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12829 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__12828,site_stats,meta12830){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__12828 = map__12828;
this.site_stats = site_stats;
this.meta12830 = meta12830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12829.cljs$lang$type = true;
clustermap.components.map_report.t12829.cljs$lang$ctorStr = "clustermap.components.map-report/t12829";
clustermap.components.map_report.t12829.cljs$lang$ctorPrWriter = ((function (map__12828,map__12828__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t12829");
});})(map__12828,map__12828__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12829.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12829.prototype.om$core$IRender$render$arity$1 = ((function (map__12828,map__12828__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12834 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12834))?sablono.interpreter.attributes.call(null,attrs12834):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12834))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12834),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12839 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12839))?sablono.interpreter.attributes.call(null,attrs12839):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12839))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12840 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12840))?sablono.interpreter.attributes.call(null,attrs12840):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12840))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12840)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12839),(function (){var attrs12841 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12841))?sablono.interpreter.attributes.call(null,attrs12841):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12841))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12841)], null))));
})()], null))));
})(),(function (){var attrs12842 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12842))?sablono.interpreter.attributes.call(null,attrs12842):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12842))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12843 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12843))?sablono.interpreter.attributes.call(null,attrs12843):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12843))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12843)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12842),(function (){var attrs12844 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12844))?sablono.interpreter.attributes.call(null,attrs12844):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12844))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12844)], null))));
})()], null))));
})(),(function (){var attrs12845 = clustermap.formats.money.fmoney.call(null,(function (){var G__12855 = self__.site_stats;var G__12855__$1 = (((G__12855 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12855));var G__12855__$2 = (((G__12855__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12855__$1));return G__12855__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12845))?sablono.interpreter.attributes.call(null,attrs12845):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12845))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12845),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12850 = clustermap.formats.number.fnum.call(null,(function (){var G__12856 = self__.site_stats;var G__12856__$1 = (((G__12856 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12856));var G__12856__$2 = (((G__12856__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12856__$1));return G__12856__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12850))?sablono.interpreter.attributes.call(null,attrs12850):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12850))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12850),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12828,map__12828__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12828,map__12828__$1,const_count,ic_count,pc_count){
return (function (_12831){var self__ = this;
var _12831__$1 = this;return self__.meta12830;
});})(map__12828,map__12828__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12828,map__12828__$1,const_count,ic_count,pc_count){
return (function (_12831,meta12830__$1){var self__ = this;
var _12831__$1 = this;return (new clustermap.components.map_report.t12829(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__12828,self__.site_stats,meta12830__$1));
});})(map__12828,map__12828__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12829 = ((function (map__12828,map__12828__$1,const_count,ic_count,pc_count){
return (function __GT_t12829(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__12828__$2,site_stats__$1,meta12830){return (new clustermap.components.map_report.t12829(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__12828__$2,site_stats__$1,meta12830));
});})(map__12828,map__12828__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12829(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__12828__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12861 = om.core.get_shared.call(null,owner);var map__12861__$1 = ((cljs.core.seq_QMARK_.call(null,map__12861))?cljs.core.apply.call(null,cljs.core.hash_map,map__12861):map__12861);var view_path_fn = cljs.core.get.call(null,map__12861__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186));var path_fn = cljs.core.get.call(null,map__12861__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12861__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12862 = cljs.core._EQ__EQ_;var expr__12863 = type;if(cljs.core.truth_(pred__12862.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12863)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__12862.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12863)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__12862.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12863)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
