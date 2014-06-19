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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12636 = site_stats;var G__12636__$1 = (((G__12636 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12636));return G__12636__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12637 = site_stats;var G__12637__$1 = (((G__12637 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12637));return G__12637__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12638 = site_stats;var G__12638__$1 = (((G__12638 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12638));return G__12638__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12670 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12670__$1 = ((cljs.core.seq_QMARK_.call(null,map__12670))?cljs.core.apply.call(null,cljs.core.hash_map,map__12670):map__12670);var const_count = cljs.core.get.call(null,map__12670__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12670__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12670__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12671 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12671 = (function (pc_count,ic_count,const_count,map__12670,comm,site_stats,all_portfolio_companies_summary_report,meta12672){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12670 = map__12670;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12672 = meta12672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12671.cljs$lang$type = true;
clustermap.components.map_report.t12671.cljs$lang$ctorStr = "clustermap.components.map-report/t12671";
clustermap.components.map_report.t12671.cljs$lang$ctorPrWriter = ((function (map__12670,map__12670__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t12671");
});})(map__12670,map__12670__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12671.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12671.prototype.om$core$IRender$render$arity$1 = ((function (map__12670,map__12670__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12676 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12676))?sablono.interpreter.attributes.call(null,attrs12676):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12676))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12676),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs12681 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12681))?sablono.interpreter.attributes.call(null,attrs12681):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12681))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12681),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs12686 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12686))?sablono.interpreter.attributes.call(null,attrs12686):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12686))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12687 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12687))?sablono.interpreter.attributes.call(null,attrs12687):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12687))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12687)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12686),(function (){var attrs12688 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12688))?sablono.interpreter.attributes.call(null,attrs12688):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12688))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12688)], null))));
})()], null))));
})(),(function (){var attrs12689 = clustermap.formats.money.fmoney.call(null,(function (){var G__12699 = self__.site_stats;var G__12699__$1 = (((G__12699 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12699));var G__12699__$2 = (((G__12699__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12699__$1));return G__12699__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12689))?sablono.interpreter.attributes.call(null,attrs12689):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12689))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12689),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12694 = clustermap.formats.number.fnum.call(null,(function (){var G__12700 = self__.site_stats;var G__12700__$1 = (((G__12700 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12700));var G__12700__$2 = (((G__12700__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12700__$1));return G__12700__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12694))?sablono.interpreter.attributes.call(null,attrs12694):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12694))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12694),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__12670,map__12670__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12671.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12670,map__12670__$1,const_count,ic_count,pc_count){
return (function (_12673){var self__ = this;
var _12673__$1 = this;return self__.meta12672;
});})(map__12670,map__12670__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12670,map__12670__$1,const_count,ic_count,pc_count){
return (function (_12673,meta12672__$1){var self__ = this;
var _12673__$1 = this;return (new clustermap.components.map_report.t12671(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12670,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12672__$1));
});})(map__12670,map__12670__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12671 = ((function (map__12670,map__12670__$1,const_count,ic_count,pc_count){
return (function __GT_t12671(pc_count__$1,ic_count__$1,const_count__$1,map__12670__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12672){return (new clustermap.components.map_report.t12671(pc_count__$1,ic_count__$1,const_count__$1,map__12670__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12672));
});})(map__12670,map__12670__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12671(pc_count,ic_count,const_count,map__12670__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__12726 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12726__$1 = ((cljs.core.seq_QMARK_.call(null,map__12726))?cljs.core.apply.call(null,cljs.core.hash_map,map__12726):map__12726);var const_count = cljs.core.get.call(null,map__12726__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12726__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12726__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12727 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12727 = (function (pc_count,ic_count,const_count,map__12726,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta12728){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12726 = map__12726;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12728 = meta12728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12727.cljs$lang$type = true;
clustermap.components.map_report.t12727.cljs$lang$ctorStr = "clustermap.components.map-report/t12727";
clustermap.components.map_report.t12727.cljs$lang$ctorPrWriter = ((function (map__12726,map__12726__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t12727");
});})(map__12726,map__12726__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12727.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12727.prototype.om$core$IRender$render$arity$1 = ((function (map__12726,map__12726__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12732 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12732))?sablono.interpreter.attributes.call(null,attrs12732):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12732))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12732)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12733 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12733))?sablono.interpreter.attributes.call(null,attrs12733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12733))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12734 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12734))?sablono.interpreter.attributes.call(null,attrs12734):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12734))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12734)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12733),(function (){var attrs12735 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12735))?sablono.interpreter.attributes.call(null,attrs12735):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12735))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12735)], null))));
})()], null))));
})(),(function (){var attrs12736 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12736))?sablono.interpreter.attributes.call(null,attrs12736):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12736))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12737 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12737))?sablono.interpreter.attributes.call(null,attrs12737):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12737))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12737)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12736),(function (){var attrs12738 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12738))?sablono.interpreter.attributes.call(null,attrs12738):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12738))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12738)], null))));
})()], null))));
})(),(function (){var attrs12739 = clustermap.formats.money.fmoney.call(null,(function (){var G__12749 = self__.site_stats;var G__12749__$1 = (((G__12749 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12749));var G__12749__$2 = (((G__12749__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12749__$1));return G__12749__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12739))?sablono.interpreter.attributes.call(null,attrs12739):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12739))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12739),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12744 = clustermap.formats.number.fnum.call(null,(function (){var G__12750 = self__.site_stats;var G__12750__$1 = (((G__12750 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12750));var G__12750__$2 = (((G__12750__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12750__$1));return G__12750__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12744))?sablono.interpreter.attributes.call(null,attrs12744):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12744))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12744),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__12726,map__12726__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12726,map__12726__$1,const_count,ic_count,pc_count){
return (function (_12729){var self__ = this;
var _12729__$1 = this;return self__.meta12728;
});})(map__12726,map__12726__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12726,map__12726__$1,const_count,ic_count,pc_count){
return (function (_12729,meta12728__$1){var self__ = this;
var _12729__$1 = this;return (new clustermap.components.map_report.t12727(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12726,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12728__$1));
});})(map__12726,map__12726__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12727 = ((function (map__12726,map__12726__$1,const_count,ic_count,pc_count){
return (function __GT_t12727(pc_count__$1,ic_count__$1,const_count__$1,map__12726__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12728){return (new clustermap.components.map_report.t12727(pc_count__$1,ic_count__$1,const_count__$1,map__12726__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12728));
});})(map__12726,map__12726__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12727(pc_count,ic_count,const_count,map__12726__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__12776 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12776__$1 = ((cljs.core.seq_QMARK_.call(null,map__12776))?cljs.core.apply.call(null,cljs.core.hash_map,map__12776):map__12776);var const_count = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12776__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12777 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12777 = (function (pc_count,ic_count,const_count,map__12776,path_fn,comm,site_stats,investor_company,investor_company_report,meta12778){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12776 = map__12776;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12778 = meta12778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12777.cljs$lang$type = true;
clustermap.components.map_report.t12777.cljs$lang$ctorStr = "clustermap.components.map-report/t12777";
clustermap.components.map_report.t12777.cljs$lang$ctorPrWriter = ((function (map__12776,map__12776__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t12777");
});})(map__12776,map__12776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12777.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12777.prototype.om$core$IRender$render$arity$1 = ((function (map__12776,map__12776__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12782 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12782))?sablono.interpreter.attributes.call(null,attrs12782):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12782)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12783 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12783))?sablono.interpreter.attributes.call(null,attrs12783):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12783))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12784 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12784))?sablono.interpreter.attributes.call(null,attrs12784):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12784))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12784)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12783),(function (){var attrs12785 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12785))?sablono.interpreter.attributes.call(null,attrs12785):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12785))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12785)], null))));
})()], null))));
})(),(function (){var attrs12786 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12786))?sablono.interpreter.attributes.call(null,attrs12786):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12786))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12787 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12787))?sablono.interpreter.attributes.call(null,attrs12787):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12787))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12787)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12786),(function (){var attrs12788 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12788))?sablono.interpreter.attributes.call(null,attrs12788):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12788))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12788)], null))));
})()], null))));
})(),(function (){var attrs12789 = clustermap.formats.money.fmoney.call(null,(function (){var G__12799 = self__.site_stats;var G__12799__$1 = (((G__12799 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12799));var G__12799__$2 = (((G__12799__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12799__$1));return G__12799__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12789))?sablono.interpreter.attributes.call(null,attrs12789):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12789))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12789),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12794 = clustermap.formats.number.fnum.call(null,(function (){var G__12800 = self__.site_stats;var G__12800__$1 = (((G__12800 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12800));var G__12800__$2 = (((G__12800__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12800__$1));return G__12800__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12794))?sablono.interpreter.attributes.call(null,attrs12794):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12794))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12794),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__12776,map__12776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12776,map__12776__$1,const_count,ic_count,pc_count){
return (function (_12779){var self__ = this;
var _12779__$1 = this;return self__.meta12778;
});})(map__12776,map__12776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12776,map__12776__$1,const_count,ic_count,pc_count){
return (function (_12779,meta12778__$1){var self__ = this;
var _12779__$1 = this;return (new clustermap.components.map_report.t12777(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12776,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12778__$1));
});})(map__12776,map__12776__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12777 = ((function (map__12776,map__12776__$1,const_count,ic_count,pc_count){
return (function __GT_t12777(pc_count__$1,ic_count__$1,const_count__$1,map__12776__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12778){return (new clustermap.components.map_report.t12777(pc_count__$1,ic_count__$1,const_count__$1,map__12776__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12778));
});})(map__12776,map__12776__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12777(pc_count,ic_count,const_count,map__12776__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__12830 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12830__$1 = ((cljs.core.seq_QMARK_.call(null,map__12830))?cljs.core.apply.call(null,cljs.core.hash_map,map__12830):map__12830);var const_count = cljs.core.get.call(null,map__12830__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12830__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12830__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12831 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12831 = (function (pc_count,ic_count,const_count,map__12830,path_fn,comm,site_stats,constituency,constituency_report,meta12832){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12830 = map__12830;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12832 = meta12832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12831.cljs$lang$type = true;
clustermap.components.map_report.t12831.cljs$lang$ctorStr = "clustermap.components.map-report/t12831";
clustermap.components.map_report.t12831.cljs$lang$ctorPrWriter = ((function (map__12830,map__12830__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t12831");
});})(map__12830,map__12830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12831.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12831.prototype.om$core$IRender$render$arity$1 = ((function (map__12830,map__12830__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12836 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12836))?sablono.interpreter.attributes.call(null,attrs12836):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12836))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12836),React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12841 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12841))?sablono.interpreter.attributes.call(null,attrs12841):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12841))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12842 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12842))?sablono.interpreter.attributes.call(null,attrs12842):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12842))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12842)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12841),(function (){var attrs12843 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12843))?sablono.interpreter.attributes.call(null,attrs12843):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12843))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12843)], null))));
})()], null))));
})(),(function (){var attrs12844 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12844))?sablono.interpreter.attributes.call(null,attrs12844):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12844))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12845 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12845))?sablono.interpreter.attributes.call(null,attrs12845):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12845))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12845)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12844),(function (){var attrs12846 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12846))?sablono.interpreter.attributes.call(null,attrs12846):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12846))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12846)], null))));
})()], null))));
})(),(function (){var attrs12847 = clustermap.formats.money.fmoney.call(null,(function (){var G__12857 = self__.site_stats;var G__12857__$1 = (((G__12857 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12857));var G__12857__$2 = (((G__12857__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12857__$1));return G__12857__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12847))?sablono.interpreter.attributes.call(null,attrs12847):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12847))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12847),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12852 = clustermap.formats.number.fnum.call(null,(function (){var G__12858 = self__.site_stats;var G__12858__$1 = (((G__12858 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12858));var G__12858__$2 = (((G__12858__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12858__$1));return G__12858__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12852))?sablono.interpreter.attributes.call(null,attrs12852):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12852))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12852),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__12830,map__12830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12830,map__12830__$1,const_count,ic_count,pc_count){
return (function (_12833){var self__ = this;
var _12833__$1 = this;return self__.meta12832;
});})(map__12830,map__12830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12830,map__12830__$1,const_count,ic_count,pc_count){
return (function (_12833,meta12832__$1){var self__ = this;
var _12833__$1 = this;return (new clustermap.components.map_report.t12831(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12830,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12832__$1));
});})(map__12830,map__12830__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12831 = ((function (map__12830,map__12830__$1,const_count,ic_count,pc_count){
return (function __GT_t12831(pc_count__$1,ic_count__$1,const_count__$1,map__12830__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12832){return (new clustermap.components.map_report.t12831(pc_count__$1,ic_count__$1,const_count__$1,map__12830__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12832));
});})(map__12830,map__12830__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12831(pc_count,ic_count,const_count,map__12830__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__12863 = om.core.get_shared.call(null,owner);var map__12863__$1 = ((cljs.core.seq_QMARK_.call(null,map__12863))?cljs.core.apply.call(null,cljs.core.hash_map,map__12863):map__12863);var path_fn = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__12864 = cljs.core._EQ__EQ_;var expr__12865 = type;if(cljs.core.truth_(pred__12864.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12865)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12864.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12865)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__12864.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12865)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
