// Compiled by ClojureScript 0.0-2261
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__48803 = site_stats;var G__48803__$1 = (((G__48803 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__48803));return G__48803__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__48804 = site_stats;var G__48804__$1 = (((G__48804 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__48804));return G__48804__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__48805 = site_stats;var G__48805__$1 = (((G__48805 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__48805));return G__48805__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__48837 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__48837__$1 = ((cljs.core.seq_QMARK_.call(null,map__48837))?cljs.core.apply.call(null,cljs.core.hash_map,map__48837):map__48837);var const_count = cljs.core.get.call(null,map__48837__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__48837__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__48837__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t48838 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t48838 = (function (pc_count,ic_count,const_count,map__48837,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta48839){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__48837 = map__48837;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta48839 = meta48839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t48838.cljs$lang$type = true;
clustermap.components.map_report.t48838.cljs$lang$ctorStr = "clustermap.components.map-report/t48838";
clustermap.components.map_report.t48838.cljs$lang$ctorPrWriter = ((function (map__48837,map__48837__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t48838");
});})(map__48837,map__48837__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48838.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t48838.prototype.om$core$IRender$render$arity$1 = ((function (map__48837,map__48837__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs48843 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48843))?sablono.interpreter.attributes.call(null,attrs48843):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48843))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48843),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs48848 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48848))?sablono.interpreter.attributes.call(null,attrs48848):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48848))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48848),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs48853 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48853))?sablono.interpreter.attributes.call(null,attrs48853):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48853))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs48854 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48854))?sablono.interpreter.attributes.call(null,attrs48854):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48854))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48854)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48853),(function (){var attrs48855 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48855))?sablono.interpreter.attributes.call(null,attrs48855):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48855))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48855)], null))));
})()], null))));
})(),(function (){var attrs48856 = clustermap.formats.money.fmoney.call(null,(function (){var G__48866 = self__.site_stats;var G__48866__$1 = (((G__48866 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__48866));var G__48866__$2 = (((G__48866__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__48866__$1));return G__48866__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48856))?sablono.interpreter.attributes.call(null,attrs48856):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48856))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48856),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs48861 = clustermap.formats.number.fnum.call(null,(function (){var G__48867 = self__.site_stats;var G__48867__$1 = (((G__48867 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__48867));var G__48867__$2 = (((G__48867__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__48867__$1));return G__48867__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48861))?sablono.interpreter.attributes.call(null,attrs48861):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48861))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48861),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__48837,map__48837__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__48837,map__48837__$1,const_count,ic_count,pc_count){
return (function (_48840){var self__ = this;
var _48840__$1 = this;return self__.meta48839;
});})(map__48837,map__48837__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__48837,map__48837__$1,const_count,ic_count,pc_count){
return (function (_48840,meta48839__$1){var self__ = this;
var _48840__$1 = this;return (new clustermap.components.map_report.t48838(self__.pc_count,self__.ic_count,self__.const_count,self__.map__48837,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta48839__$1));
});})(map__48837,map__48837__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t48838 = ((function (map__48837,map__48837__$1,const_count,ic_count,pc_count){
return (function __GT_t48838(pc_count__$1,ic_count__$1,const_count__$1,map__48837__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta48839){return (new clustermap.components.map_report.t48838(pc_count__$1,ic_count__$1,const_count__$1,map__48837__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta48839));
});})(map__48837,map__48837__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t48838(pc_count,ic_count,const_count,map__48837__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__48893 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__48893__$1 = ((cljs.core.seq_QMARK_.call(null,map__48893))?cljs.core.apply.call(null,cljs.core.hash_map,map__48893):map__48893);var const_count = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__48893__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t48894 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t48894 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__48893,comm,view_path_fn,portfolio_company_report,site_stats,meta48895){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__48893 = map__48893;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta48895 = meta48895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t48894.cljs$lang$type = true;
clustermap.components.map_report.t48894.cljs$lang$ctorStr = "clustermap.components.map-report/t48894";
clustermap.components.map_report.t48894.cljs$lang$ctorPrWriter = ((function (map__48893,map__48893__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t48894");
});})(map__48893,map__48893__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48894.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t48894.prototype.om$core$IRender$render$arity$1 = ((function (map__48893,map__48893__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs48899 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs48899))?sablono.interpreter.attributes.call(null,attrs48899):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48899))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48899)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs48900 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48900))?sablono.interpreter.attributes.call(null,attrs48900):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48900))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs48901 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48901))?sablono.interpreter.attributes.call(null,attrs48901):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48901))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48901)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48900),(function (){var attrs48902 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48902))?sablono.interpreter.attributes.call(null,attrs48902):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48902))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48902)], null))));
})()], null))));
})(),(function (){var attrs48903 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48903))?sablono.interpreter.attributes.call(null,attrs48903):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48903))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs48904 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48904))?sablono.interpreter.attributes.call(null,attrs48904):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48904))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48904)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48903),(function (){var attrs48905 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48905))?sablono.interpreter.attributes.call(null,attrs48905):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48905))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48905)], null))));
})()], null))));
})(),(function (){var attrs48906 = clustermap.formats.money.fmoney.call(null,(function (){var G__48916 = self__.site_stats;var G__48916__$1 = (((G__48916 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__48916));var G__48916__$2 = (((G__48916__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__48916__$1));return G__48916__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48906))?sablono.interpreter.attributes.call(null,attrs48906):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48906))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48906),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs48911 = clustermap.formats.number.fnum.call(null,(function (){var G__48917 = self__.site_stats;var G__48917__$1 = (((G__48917 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__48917));var G__48917__$2 = (((G__48917__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__48917__$1));return G__48917__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48911))?sablono.interpreter.attributes.call(null,attrs48911):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48911))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48911),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__48893,map__48893__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48894.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__48893,map__48893__$1,const_count,ic_count,pc_count){
return (function (_48896){var self__ = this;
var _48896__$1 = this;return self__.meta48895;
});})(map__48893,map__48893__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__48893,map__48893__$1,const_count,ic_count,pc_count){
return (function (_48896,meta48895__$1){var self__ = this;
var _48896__$1 = this;return (new clustermap.components.map_report.t48894(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__48893,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta48895__$1));
});})(map__48893,map__48893__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t48894 = ((function (map__48893,map__48893__$1,const_count,ic_count,pc_count){
return (function __GT_t48894(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__48893__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta48895){return (new clustermap.components.map_report.t48894(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__48893__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta48895));
});})(map__48893,map__48893__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t48894(pc_count,path_fn,const_count,portfolio_company,ic_count,map__48893__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__48943 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__48943__$1 = ((cljs.core.seq_QMARK_.call(null,map__48943))?cljs.core.apply.call(null,cljs.core.hash_map,map__48943):map__48943);var const_count = cljs.core.get.call(null,map__48943__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__48943__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__48943__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t48944 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t48944 = (function (pc_count,path_fn,const_count,investor_company,map__48943,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta48945){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.map__48943 = map__48943;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta48945 = meta48945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t48944.cljs$lang$type = true;
clustermap.components.map_report.t48944.cljs$lang$ctorStr = "clustermap.components.map-report/t48944";
clustermap.components.map_report.t48944.cljs$lang$ctorPrWriter = ((function (map__48943,map__48943__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t48944");
});})(map__48943,map__48943__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48944.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t48944.prototype.om$core$IRender$render$arity$1 = ((function (map__48943,map__48943__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs48949 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs48949))?sablono.interpreter.attributes.call(null,attrs48949):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48949))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48949)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs48950 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48950))?sablono.interpreter.attributes.call(null,attrs48950):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48950))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs48951 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48951))?sablono.interpreter.attributes.call(null,attrs48951):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48951))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48951)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48950),(function (){var attrs48952 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48952))?sablono.interpreter.attributes.call(null,attrs48952):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48952))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48952)], null))));
})()], null))));
})(),(function (){var attrs48953 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48953))?sablono.interpreter.attributes.call(null,attrs48953):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48953))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs48954 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48954))?sablono.interpreter.attributes.call(null,attrs48954):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48954))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48954)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48953),(function (){var attrs48955 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs48955))?sablono.interpreter.attributes.call(null,attrs48955):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48955))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48955)], null))));
})()], null))));
})(),(function (){var attrs48956 = clustermap.formats.money.fmoney.call(null,(function (){var G__48966 = self__.site_stats;var G__48966__$1 = (((G__48966 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__48966));var G__48966__$2 = (((G__48966__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__48966__$1));return G__48966__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48956))?sablono.interpreter.attributes.call(null,attrs48956):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48956))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48956),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs48961 = clustermap.formats.number.fnum.call(null,(function (){var G__48967 = self__.site_stats;var G__48967__$1 = (((G__48967 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__48967));var G__48967__$2 = (((G__48967__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__48967__$1));return G__48967__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs48961))?sablono.interpreter.attributes.call(null,attrs48961):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs48961))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs48961),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__48943,map__48943__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__48943,map__48943__$1,const_count,ic_count,pc_count){
return (function (_48946){var self__ = this;
var _48946__$1 = this;return self__.meta48945;
});})(map__48943,map__48943__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__48943,map__48943__$1,const_count,ic_count,pc_count){
return (function (_48946,meta48945__$1){var self__ = this;
var _48946__$1 = this;return (new clustermap.components.map_report.t48944(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.map__48943,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta48945__$1));
});})(map__48943,map__48943__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t48944 = ((function (map__48943,map__48943__$1,const_count,ic_count,pc_count){
return (function __GT_t48944(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,map__48943__$2,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta48945){return (new clustermap.components.map_report.t48944(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,map__48943__$2,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta48945));
});})(map__48943,map__48943__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t48944(pc_count,path_fn,const_count,investor_company,map__48943__$1,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__48997 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__48997__$1 = ((cljs.core.seq_QMARK_.call(null,map__48997))?cljs.core.apply.call(null,cljs.core.hash_map,map__48997):map__48997);var const_count = cljs.core.get.call(null,map__48997__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__48997__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__48997__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t48998 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t48998 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__48997,site_stats,meta48999){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__48997 = map__48997;
this.site_stats = site_stats;
this.meta48999 = meta48999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t48998.cljs$lang$type = true;
clustermap.components.map_report.t48998.cljs$lang$ctorStr = "clustermap.components.map-report/t48998";
clustermap.components.map_report.t48998.cljs$lang$ctorPrWriter = ((function (map__48997,map__48997__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t48998");
});})(map__48997,map__48997__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48998.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t48998.prototype.om$core$IRender$render$arity$1 = ((function (map__48997,map__48997__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs49003 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs49003))?sablono.interpreter.attributes.call(null,attrs49003):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49003))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49003),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs49008 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49008))?sablono.interpreter.attributes.call(null,attrs49008):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49008))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49009 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49009))?sablono.interpreter.attributes.call(null,attrs49009):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49009))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49009)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49008),(function (){var attrs49010 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49010))?sablono.interpreter.attributes.call(null,attrs49010):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49010))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49010)], null))));
})()], null))));
})(),(function (){var attrs49011 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49011))?sablono.interpreter.attributes.call(null,attrs49011):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49011))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49012 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49012))?sablono.interpreter.attributes.call(null,attrs49012):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49012))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49012)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49011),(function (){var attrs49013 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49013))?sablono.interpreter.attributes.call(null,attrs49013):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49013))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49013)], null))));
})()], null))));
})(),(function (){var attrs49014 = clustermap.formats.money.fmoney.call(null,(function (){var G__49024 = self__.site_stats;var G__49024__$1 = (((G__49024 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49024));var G__49024__$2 = (((G__49024__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49024__$1));return G__49024__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49014))?sablono.interpreter.attributes.call(null,attrs49014):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49014))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49014),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49019 = clustermap.formats.number.fnum.call(null,(function (){var G__49025 = self__.site_stats;var G__49025__$1 = (((G__49025 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49025));var G__49025__$2 = (((G__49025__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49025__$1));return G__49025__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49019))?sablono.interpreter.attributes.call(null,attrs49019):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49019))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49019),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__48997,map__48997__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__48997,map__48997__$1,const_count,ic_count,pc_count){
return (function (_49000){var self__ = this;
var _49000__$1 = this;return self__.meta48999;
});})(map__48997,map__48997__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t48998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__48997,map__48997__$1,const_count,ic_count,pc_count){
return (function (_49000,meta48999__$1){var self__ = this;
var _49000__$1 = this;return (new clustermap.components.map_report.t48998(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__48997,self__.site_stats,meta48999__$1));
});})(map__48997,map__48997__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t48998 = ((function (map__48997,map__48997__$1,const_count,ic_count,pc_count){
return (function __GT_t48998(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__48997__$2,site_stats__$1,meta48999){return (new clustermap.components.map_report.t48998(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__48997__$2,site_stats__$1,meta48999));
});})(map__48997,map__48997__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t48998(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__48997__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__49030 = om.core.get_shared.call(null,owner);var map__49030__$1 = ((cljs.core.seq_QMARK_.call(null,map__49030))?cljs.core.apply.call(null,cljs.core.hash_map,map__49030):map__49030);var view_path_fn = cljs.core.get.call(null,map__49030__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__49030__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__49030__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__49031 = cljs.core._EQ__EQ_;var expr__49032 = type;if(cljs.core.truth_(pred__49031.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__49032)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__49031.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__49032)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__49031.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__49032)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map