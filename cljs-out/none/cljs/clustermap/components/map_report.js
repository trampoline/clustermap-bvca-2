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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__23770 = site_stats;var G__23770__$1 = (((G__23770 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__23770));return G__23770__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__23771 = site_stats;var G__23771__$1 = (((G__23771 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__23771));return G__23771__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__23772 = site_stats;var G__23772__$1 = (((G__23772 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__23772));return G__23772__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23804 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23804__$1 = ((cljs.core.seq_QMARK_.call(null,map__23804))?cljs.core.apply.call(null,cljs.core.hash_map,map__23804):map__23804);var const_count = cljs.core.get.call(null,map__23804__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23804__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23804__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23805 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23805 = (function (pc_count,ic_count,const_count,map__23804,comm,site_stats,all_portfolio_companies_summary_report,meta23806){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23804 = map__23804;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23806 = meta23806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23805.cljs$lang$type = true;
clustermap.components.map_report.t23805.cljs$lang$ctorStr = "clustermap.components.map-report/t23805";
clustermap.components.map_report.t23805.cljs$lang$ctorPrWriter = ((function (map__23804,map__23804__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23805");
});})(map__23804,map__23804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23805.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23805.prototype.om$core$IRender$render$arity$1 = ((function (map__23804,map__23804__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23810 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23810))?sablono.interpreter.attributes.call(null,attrs23810):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23810))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23810),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs23815 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23815))?sablono.interpreter.attributes.call(null,attrs23815):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23815))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23815),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs23820 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23820))?sablono.interpreter.attributes.call(null,attrs23820):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23820))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23821 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23821))?sablono.interpreter.attributes.call(null,attrs23821):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23821))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23821)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23820),(function (){var attrs23822 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23822))?sablono.interpreter.attributes.call(null,attrs23822):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23822))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23822)], null))));
})()], null))));
})(),(function (){var attrs23823 = clustermap.formats.money.fmoney.call(null,(function (){var G__23833 = self__.site_stats;var G__23833__$1 = (((G__23833 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23833));var G__23833__$2 = (((G__23833__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23833__$1));return G__23833__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23823))?sablono.interpreter.attributes.call(null,attrs23823):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23823))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23823),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23828 = clustermap.formats.number.fnum.call(null,(function (){var G__23834 = self__.site_stats;var G__23834__$1 = (((G__23834 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23834));var G__23834__$2 = (((G__23834__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23834__$1));return G__23834__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23828))?sablono.interpreter.attributes.call(null,attrs23828):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23828))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23828),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__23804,map__23804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23804,map__23804__$1,const_count,ic_count,pc_count){
return (function (_23807){var self__ = this;
var _23807__$1 = this;return self__.meta23806;
});})(map__23804,map__23804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23804,map__23804__$1,const_count,ic_count,pc_count){
return (function (_23807,meta23806__$1){var self__ = this;
var _23807__$1 = this;return (new clustermap.components.map_report.t23805(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23804,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23806__$1));
});})(map__23804,map__23804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23805 = ((function (map__23804,map__23804__$1,const_count,ic_count,pc_count){
return (function __GT_t23805(pc_count__$1,ic_count__$1,const_count__$1,map__23804__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23806){return (new clustermap.components.map_report.t23805(pc_count__$1,ic_count__$1,const_count__$1,map__23804__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23806));
});})(map__23804,map__23804__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23805(pc_count,ic_count,const_count,map__23804__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23860 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23860__$1 = ((cljs.core.seq_QMARK_.call(null,map__23860))?cljs.core.apply.call(null,cljs.core.hash_map,map__23860):map__23860);var const_count = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23860__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23861 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23861 = (function (pc_count,ic_count,const_count,map__23860,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23862){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23860 = map__23860;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23862 = meta23862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23861.cljs$lang$type = true;
clustermap.components.map_report.t23861.cljs$lang$ctorStr = "clustermap.components.map-report/t23861";
clustermap.components.map_report.t23861.cljs$lang$ctorPrWriter = ((function (map__23860,map__23860__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23861");
});})(map__23860,map__23860__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23861.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23861.prototype.om$core$IRender$render$arity$1 = ((function (map__23860,map__23860__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs23866 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23866))?sablono.interpreter.attributes.call(null,attrs23866):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23866))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23866)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23867 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23867))?sablono.interpreter.attributes.call(null,attrs23867):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23867))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23868 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23868))?sablono.interpreter.attributes.call(null,attrs23868):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23868))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23868)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23867),(function (){var attrs23869 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23869))?sablono.interpreter.attributes.call(null,attrs23869):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23869))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23869)], null))));
})()], null))));
})(),(function (){var attrs23870 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23870))?sablono.interpreter.attributes.call(null,attrs23870):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23870))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23871 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23871))?sablono.interpreter.attributes.call(null,attrs23871):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23871))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23871)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23870),(function (){var attrs23872 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23872))?sablono.interpreter.attributes.call(null,attrs23872):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23872))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23872)], null))));
})()], null))));
})(),(function (){var attrs23873 = clustermap.formats.money.fmoney.call(null,(function (){var G__23883 = self__.site_stats;var G__23883__$1 = (((G__23883 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23883));var G__23883__$2 = (((G__23883__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23883__$1));return G__23883__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23873))?sablono.interpreter.attributes.call(null,attrs23873):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23873))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23873),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23878 = clustermap.formats.number.fnum.call(null,(function (){var G__23884 = self__.site_stats;var G__23884__$1 = (((G__23884 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23884));var G__23884__$2 = (((G__23884__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23884__$1));return G__23884__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23878))?sablono.interpreter.attributes.call(null,attrs23878):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23878))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23878),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__23860,map__23860__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23860,map__23860__$1,const_count,ic_count,pc_count){
return (function (_23863){var self__ = this;
var _23863__$1 = this;return self__.meta23862;
});})(map__23860,map__23860__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23860,map__23860__$1,const_count,ic_count,pc_count){
return (function (_23863,meta23862__$1){var self__ = this;
var _23863__$1 = this;return (new clustermap.components.map_report.t23861(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23860,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23862__$1));
});})(map__23860,map__23860__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23861 = ((function (map__23860,map__23860__$1,const_count,ic_count,pc_count){
return (function __GT_t23861(pc_count__$1,ic_count__$1,const_count__$1,map__23860__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23862){return (new clustermap.components.map_report.t23861(pc_count__$1,ic_count__$1,const_count__$1,map__23860__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23862));
});})(map__23860,map__23860__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23861(pc_count,ic_count,const_count,map__23860__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23910 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23910__$1 = ((cljs.core.seq_QMARK_.call(null,map__23910))?cljs.core.apply.call(null,cljs.core.hash_map,map__23910):map__23910);var const_count = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23911 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23911 = (function (pc_count,ic_count,const_count,map__23910,path_fn,comm,site_stats,investor_company,investor_company_report,meta23912){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23910 = map__23910;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta23912 = meta23912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23911.cljs$lang$type = true;
clustermap.components.map_report.t23911.cljs$lang$ctorStr = "clustermap.components.map-report/t23911";
clustermap.components.map_report.t23911.cljs$lang$ctorPrWriter = ((function (map__23910,map__23910__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23911");
});})(map__23910,map__23910__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23911.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23911.prototype.om$core$IRender$render$arity$1 = ((function (map__23910,map__23910__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23916 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23916))?sablono.interpreter.attributes.call(null,attrs23916):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23916))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23916)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23917 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23917))?sablono.interpreter.attributes.call(null,attrs23917):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23917))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23918 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23918))?sablono.interpreter.attributes.call(null,attrs23918):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23918))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23918)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23917),(function (){var attrs23919 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23919))?sablono.interpreter.attributes.call(null,attrs23919):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23919))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23919)], null))));
})()], null))));
})(),(function (){var attrs23920 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23920))?sablono.interpreter.attributes.call(null,attrs23920):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23920))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23921 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23921))?sablono.interpreter.attributes.call(null,attrs23921):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23921))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23921)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23920),(function (){var attrs23922 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23922))?sablono.interpreter.attributes.call(null,attrs23922):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23922))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23922)], null))));
})()], null))));
})(),(function (){var attrs23923 = clustermap.formats.money.fmoney.call(null,(function (){var G__23933 = self__.site_stats;var G__23933__$1 = (((G__23933 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23933));var G__23933__$2 = (((G__23933__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23933__$1));return G__23933__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23923))?sablono.interpreter.attributes.call(null,attrs23923):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23923))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23923),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23928 = clustermap.formats.number.fnum.call(null,(function (){var G__23934 = self__.site_stats;var G__23934__$1 = (((G__23934 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23934));var G__23934__$2 = (((G__23934__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23934__$1));return G__23934__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23928))?sablono.interpreter.attributes.call(null,attrs23928):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23928))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23928),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__23910,map__23910__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23910,map__23910__$1,const_count,ic_count,pc_count){
return (function (_23913){var self__ = this;
var _23913__$1 = this;return self__.meta23912;
});})(map__23910,map__23910__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23910,map__23910__$1,const_count,ic_count,pc_count){
return (function (_23913,meta23912__$1){var self__ = this;
var _23913__$1 = this;return (new clustermap.components.map_report.t23911(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23910,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23912__$1));
});})(map__23910,map__23910__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23911 = ((function (map__23910,map__23910__$1,const_count,ic_count,pc_count){
return (function __GT_t23911(pc_count__$1,ic_count__$1,const_count__$1,map__23910__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23912){return (new clustermap.components.map_report.t23911(pc_count__$1,ic_count__$1,const_count__$1,map__23910__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23912));
});})(map__23910,map__23910__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23911(pc_count,ic_count,const_count,map__23910__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23964 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__23964__$1 = ((cljs.core.seq_QMARK_.call(null,map__23964))?cljs.core.apply.call(null,cljs.core.hash_map,map__23964):map__23964);var const_count = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t23965 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23965 = (function (pc_count,ic_count,const_count,map__23964,path_fn,comm,site_stats,constituency,constituency_report,meta23966){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23964 = map__23964;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23966 = meta23966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23965.cljs$lang$type = true;
clustermap.components.map_report.t23965.cljs$lang$ctorStr = "clustermap.components.map-report/t23965";
clustermap.components.map_report.t23965.cljs$lang$ctorPrWriter = ((function (map__23964,map__23964__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t23965");
});})(map__23964,map__23964__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23965.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23965.prototype.om$core$IRender$render$arity$1 = ((function (map__23964,map__23964__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23970 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs23970))?sablono.interpreter.attributes.call(null,attrs23970):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23970))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23970),React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs23975 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23975))?sablono.interpreter.attributes.call(null,attrs23975):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23975))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23976 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23976))?sablono.interpreter.attributes.call(null,attrs23976):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23976))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23976)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23975),(function (){var attrs23977 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23977))?sablono.interpreter.attributes.call(null,attrs23977):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23977))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23977)], null))));
})()], null))));
})(),(function (){var attrs23978 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23978))?sablono.interpreter.attributes.call(null,attrs23978):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23978))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs23979 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23979))?sablono.interpreter.attributes.call(null,attrs23979):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23979))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23979)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23978),(function (){var attrs23980 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs23980))?sablono.interpreter.attributes.call(null,attrs23980):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23980))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23980)], null))));
})()], null))));
})(),(function (){var attrs23981 = clustermap.formats.money.fmoney.call(null,(function (){var G__23991 = self__.site_stats;var G__23991__$1 = (((G__23991 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__23991));var G__23991__$2 = (((G__23991__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23991__$1));return G__23991__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23981))?sablono.interpreter.attributes.call(null,attrs23981):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23981))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23981),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs23986 = clustermap.formats.number.fnum.call(null,(function (){var G__23992 = self__.site_stats;var G__23992__$1 = (((G__23992 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__23992));var G__23992__$2 = (((G__23992__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__23992__$1));return G__23992__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs23986))?sablono.interpreter.attributes.call(null,attrs23986):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs23986))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs23986),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__23964,map__23964__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23965.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23964,map__23964__$1,const_count,ic_count,pc_count){
return (function (_23967){var self__ = this;
var _23967__$1 = this;return self__.meta23966;
});})(map__23964,map__23964__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t23965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23964,map__23964__$1,const_count,ic_count,pc_count){
return (function (_23967,meta23966__$1){var self__ = this;
var _23967__$1 = this;return (new clustermap.components.map_report.t23965(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23964,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23966__$1));
});})(map__23964,map__23964__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t23965 = ((function (map__23964,map__23964__$1,const_count,ic_count,pc_count){
return (function __GT_t23965(pc_count__$1,ic_count__$1,const_count__$1,map__23964__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23966){return (new clustermap.components.map_report.t23965(pc_count__$1,ic_count__$1,const_count__$1,map__23964__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23966));
});})(map__23964,map__23964__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t23965(pc_count,ic_count,const_count,map__23964__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23997 = om.core.get_shared.call(null,owner);var map__23997__$1 = ((cljs.core.seq_QMARK_.call(null,map__23997))?cljs.core.apply.call(null,cljs.core.hash_map,map__23997):map__23997);var path_fn = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23997__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__23998 = cljs.core._EQ__EQ_;var expr__23999 = type;if(cljs.core.truth_(pred__23998.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23999)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__23998.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23999)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__23998.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23999)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map