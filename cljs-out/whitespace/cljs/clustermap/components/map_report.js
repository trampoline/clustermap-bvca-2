// Compiled by ClojureScript 0.0-2268
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13973 = site_stats;var G__13973__$1 = (((G__13973 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13973));return G__13973__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13974 = site_stats;var G__13974__$1 = (((G__13974 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13974));return G__13974__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13975 = site_stats;var G__13975__$1 = (((G__13975 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13975));return G__13975__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__14007 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14007__$1 = ((cljs.core.seq_QMARK_.call(null,map__14007))?cljs.core.apply.call(null,cljs.core.hash_map,map__14007):map__14007);var const_count = cljs.core.get.call(null,map__14007__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14007__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14007__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14008 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14008 = (function (pc_count,ic_count,const_count,map__14007,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta14009){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__14007 = map__14007;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta14009 = meta14009;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14008.cljs$lang$type = true;
clustermap.components.map_report.t14008.cljs$lang$ctorStr = "clustermap.components.map-report/t14008";
clustermap.components.map_report.t14008.cljs$lang$ctorPrWriter = ((function (map__14007,map__14007__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14008");
});})(map__14007,map__14007__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14008.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14008.prototype.om$core$IRender$render$arity$1 = ((function (map__14007,map__14007__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs14013 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14013))?sablono.interpreter.attributes.call(null,attrs14013):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14013))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14013),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs14018 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14018))?sablono.interpreter.attributes.call(null,attrs14018):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14018))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14018),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs14023 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14023))?sablono.interpreter.attributes.call(null,attrs14023):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14023))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14024 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14024))?sablono.interpreter.attributes.call(null,attrs14024):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14024))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14024)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14023),(function (){var attrs14025 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14025))?sablono.interpreter.attributes.call(null,attrs14025):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14025))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14025)], null))));
})()], null))));
})(),(function (){var attrs14026 = clustermap.formats.money.fmoney.call(null,(function (){var G__14036 = self__.site_stats;var G__14036__$1 = (((G__14036 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14036));var G__14036__$2 = (((G__14036__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14036__$1));return G__14036__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14026))?sablono.interpreter.attributes.call(null,attrs14026):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14026))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14026),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14031 = clustermap.formats.number.fnum.call(null,(function (){var G__14037 = self__.site_stats;var G__14037__$1 = (((G__14037 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14037));var G__14037__$2 = (((G__14037__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14037__$1));return G__14037__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14031))?sablono.interpreter.attributes.call(null,attrs14031):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14031))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14031),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14007,map__14007__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14007,map__14007__$1,const_count,ic_count,pc_count){
return (function (_14010){var self__ = this;
var _14010__$1 = this;return self__.meta14009;
});})(map__14007,map__14007__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14007,map__14007__$1,const_count,ic_count,pc_count){
return (function (_14010,meta14009__$1){var self__ = this;
var _14010__$1 = this;return (new clustermap.components.map_report.t14008(self__.pc_count,self__.ic_count,self__.const_count,self__.map__14007,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta14009__$1));
});})(map__14007,map__14007__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14008 = ((function (map__14007,map__14007__$1,const_count,ic_count,pc_count){
return (function __GT_t14008(pc_count__$1,ic_count__$1,const_count__$1,map__14007__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta14009){return (new clustermap.components.map_report.t14008(pc_count__$1,ic_count__$1,const_count__$1,map__14007__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta14009));
});})(map__14007,map__14007__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14008(pc_count,ic_count,const_count,map__14007__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__14063 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14063__$1 = ((cljs.core.seq_QMARK_.call(null,map__14063))?cljs.core.apply.call(null,cljs.core.hash_map,map__14063):map__14063);var const_count = cljs.core.get.call(null,map__14063__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14063__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14063__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14064 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14064 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__14063,view_path_fn,portfolio_company_report,site_stats,meta14065){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__14063 = map__14063;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta14065 = meta14065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14064.cljs$lang$type = true;
clustermap.components.map_report.t14064.cljs$lang$ctorStr = "clustermap.components.map-report/t14064";
clustermap.components.map_report.t14064.cljs$lang$ctorPrWriter = ((function (map__14063,map__14063__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14064");
});})(map__14063,map__14063__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14064.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14064.prototype.om$core$IRender$render$arity$1 = ((function (map__14063,map__14063__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs14069 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs14069))?sablono.interpreter.attributes.call(null,attrs14069):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14069))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14069)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs14070 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14070))?sablono.interpreter.attributes.call(null,attrs14070):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14070))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14071 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14071))?sablono.interpreter.attributes.call(null,attrs14071):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14071))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14071)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14070),(function (){var attrs14072 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14072))?sablono.interpreter.attributes.call(null,attrs14072):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14072))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14072)], null))));
})()], null))));
})(),(function (){var attrs14073 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14073))?sablono.interpreter.attributes.call(null,attrs14073):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14073))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14074 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14074))?sablono.interpreter.attributes.call(null,attrs14074):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14074))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14074)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14073),(function (){var attrs14075 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14075))?sablono.interpreter.attributes.call(null,attrs14075):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14075))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14075)], null))));
})()], null))));
})(),(function (){var attrs14076 = clustermap.formats.money.fmoney.call(null,(function (){var G__14086 = self__.site_stats;var G__14086__$1 = (((G__14086 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14086));var G__14086__$2 = (((G__14086__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14086__$1));return G__14086__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14076))?sablono.interpreter.attributes.call(null,attrs14076):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14076))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14076),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14081 = clustermap.formats.number.fnum.call(null,(function (){var G__14087 = self__.site_stats;var G__14087__$1 = (((G__14087 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14087));var G__14087__$2 = (((G__14087__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14087__$1));return G__14087__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14081))?sablono.interpreter.attributes.call(null,attrs14081):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14081))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14081),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14063,map__14063__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14063,map__14063__$1,const_count,ic_count,pc_count){
return (function (_14066){var self__ = this;
var _14066__$1 = this;return self__.meta14065;
});})(map__14063,map__14063__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14063,map__14063__$1,const_count,ic_count,pc_count){
return (function (_14066,meta14065__$1){var self__ = this;
var _14066__$1 = this;return (new clustermap.components.map_report.t14064(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.map__14063,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta14065__$1));
});})(map__14063,map__14063__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14064 = ((function (map__14063,map__14063__$1,const_count,ic_count,pc_count){
return (function __GT_t14064(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__14063__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta14065){return (new clustermap.components.map_report.t14064(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__14063__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta14065));
});})(map__14063,map__14063__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14064(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__14063__$1,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__14113 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14113__$1 = ((cljs.core.seq_QMARK_.call(null,map__14113))?cljs.core.apply.call(null,cljs.core.hash_map,map__14113):map__14113);var const_count = cljs.core.get.call(null,map__14113__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14113__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14113__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14114 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14114 = (function (pc_count,map__14113,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta14115){
this.pc_count = pc_count;
this.map__14113 = map__14113;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta14115 = meta14115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14114.cljs$lang$type = true;
clustermap.components.map_report.t14114.cljs$lang$ctorStr = "clustermap.components.map-report/t14114";
clustermap.components.map_report.t14114.cljs$lang$ctorPrWriter = ((function (map__14113,map__14113__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14114");
});})(map__14113,map__14113__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14114.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14114.prototype.om$core$IRender$render$arity$1 = ((function (map__14113,map__14113__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs14119 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs14119))?sablono.interpreter.attributes.call(null,attrs14119):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14119))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14119)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs14120 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14120))?sablono.interpreter.attributes.call(null,attrs14120):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14120))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14121 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14121))?sablono.interpreter.attributes.call(null,attrs14121):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14121))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14121)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14120),(function (){var attrs14122 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14122))?sablono.interpreter.attributes.call(null,attrs14122):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14122))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14122)], null))));
})()], null))));
})(),(function (){var attrs14123 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14123))?sablono.interpreter.attributes.call(null,attrs14123):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14123))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14124 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14124))?sablono.interpreter.attributes.call(null,attrs14124):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14124))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14124)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14123),(function (){var attrs14125 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14125))?sablono.interpreter.attributes.call(null,attrs14125):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14125))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14125)], null))));
})()], null))));
})(),(function (){var attrs14126 = clustermap.formats.money.fmoney.call(null,(function (){var G__14136 = self__.site_stats;var G__14136__$1 = (((G__14136 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14136));var G__14136__$2 = (((G__14136__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14136__$1));return G__14136__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14126))?sablono.interpreter.attributes.call(null,attrs14126):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14126))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14126),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14131 = clustermap.formats.number.fnum.call(null,(function (){var G__14137 = self__.site_stats;var G__14137__$1 = (((G__14137 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14137));var G__14137__$2 = (((G__14137__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14137__$1));return G__14137__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14131))?sablono.interpreter.attributes.call(null,attrs14131):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14131))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14131),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14113,map__14113__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14113,map__14113__$1,const_count,ic_count,pc_count){
return (function (_14116){var self__ = this;
var _14116__$1 = this;return self__.meta14115;
});})(map__14113,map__14113__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14113,map__14113__$1,const_count,ic_count,pc_count){
return (function (_14116,meta14115__$1){var self__ = this;
var _14116__$1 = this;return (new clustermap.components.map_report.t14114(self__.pc_count,self__.map__14113,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta14115__$1));
});})(map__14113,map__14113__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14114 = ((function (map__14113,map__14113__$1,const_count,ic_count,pc_count){
return (function __GT_t14114(pc_count__$1,map__14113__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta14115){return (new clustermap.components.map_report.t14114(pc_count__$1,map__14113__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta14115));
});})(map__14113,map__14113__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14114(pc_count,map__14113__$1,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__14167 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14167__$1 = ((cljs.core.seq_QMARK_.call(null,map__14167))?cljs.core.apply.call(null,cljs.core.hash_map,map__14167):map__14167);var const_count = cljs.core.get.call(null,map__14167__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14167__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14167__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14168 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14168 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__14167,site_stats,meta14169){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__14167 = map__14167;
this.site_stats = site_stats;
this.meta14169 = meta14169;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14168.cljs$lang$type = true;
clustermap.components.map_report.t14168.cljs$lang$ctorStr = "clustermap.components.map-report/t14168";
clustermap.components.map_report.t14168.cljs$lang$ctorPrWriter = ((function (map__14167,map__14167__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14168");
});})(map__14167,map__14167__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14168.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14168.prototype.om$core$IRender$render$arity$1 = ((function (map__14167,map__14167__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs14173 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs14173))?sablono.interpreter.attributes.call(null,attrs14173):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14173))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14173),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs14178 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14178))?sablono.interpreter.attributes.call(null,attrs14178):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14178))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14179 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14179))?sablono.interpreter.attributes.call(null,attrs14179):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14179))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14179)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14178),(function (){var attrs14180 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14180))?sablono.interpreter.attributes.call(null,attrs14180):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14180))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14180)], null))));
})()], null))));
})(),(function (){var attrs14181 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14181))?sablono.interpreter.attributes.call(null,attrs14181):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14181))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14182 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14182))?sablono.interpreter.attributes.call(null,attrs14182):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14182))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14182)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14181),(function (){var attrs14183 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14183))?sablono.interpreter.attributes.call(null,attrs14183):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14183))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14183)], null))));
})()], null))));
})(),(function (){var attrs14184 = clustermap.formats.money.fmoney.call(null,(function (){var G__14194 = self__.site_stats;var G__14194__$1 = (((G__14194 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14194));var G__14194__$2 = (((G__14194__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14194__$1));return G__14194__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14184))?sablono.interpreter.attributes.call(null,attrs14184):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14184))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14184),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14189 = clustermap.formats.number.fnum.call(null,(function (){var G__14195 = self__.site_stats;var G__14195__$1 = (((G__14195 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14195));var G__14195__$2 = (((G__14195__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14195__$1));return G__14195__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14189))?sablono.interpreter.attributes.call(null,attrs14189):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14189))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14189),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14167,map__14167__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14168.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14167,map__14167__$1,const_count,ic_count,pc_count){
return (function (_14170){var self__ = this;
var _14170__$1 = this;return self__.meta14169;
});})(map__14167,map__14167__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14167,map__14167__$1,const_count,ic_count,pc_count){
return (function (_14170,meta14169__$1){var self__ = this;
var _14170__$1 = this;return (new clustermap.components.map_report.t14168(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__14167,self__.site_stats,meta14169__$1));
});})(map__14167,map__14167__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14168 = ((function (map__14167,map__14167__$1,const_count,ic_count,pc_count){
return (function __GT_t14168(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__14167__$2,site_stats__$1,meta14169){return (new clustermap.components.map_report.t14168(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__14167__$2,site_stats__$1,meta14169));
});})(map__14167,map__14167__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14168(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__14167__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__14200 = om.core.get_shared.call(null,owner);var map__14200__$1 = ((cljs.core.seq_QMARK_.call(null,map__14200))?cljs.core.apply.call(null,cljs.core.hash_map,map__14200):map__14200);var view_path_fn = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__14200__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__14201 = cljs.core._EQ__EQ_;var expr__14202 = type;if(cljs.core.truth_(pred__14201.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__14202)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__14201.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__14202)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__14201.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__14202)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
