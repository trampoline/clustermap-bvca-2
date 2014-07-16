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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__25141 = site_stats;var G__25141__$1 = (((G__25141 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__25141));return G__25141__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__25142 = site_stats;var G__25142__$1 = (((G__25142 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__25142));return G__25142__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__25143 = site_stats;var G__25143__$1 = (((G__25143 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__25143));return G__25143__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__25175 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25175__$1 = ((cljs.core.seq_QMARK_.call(null,map__25175))?cljs.core.apply.call(null,cljs.core.hash_map,map__25175):map__25175);var const_count = cljs.core.get.call(null,map__25175__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25175__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25175__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25176 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25176 = (function (pc_count,ic_count,const_count,map__25175,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta25177){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__25175 = map__25175;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta25177 = meta25177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25176.cljs$lang$type = true;
clustermap.components.map_report.t25176.cljs$lang$ctorStr = "clustermap.components.map-report/t25176";
clustermap.components.map_report.t25176.cljs$lang$ctorPrWriter = ((function (map__25175,map__25175__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25176");
});})(map__25175,map__25175__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25176.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25176.prototype.om$core$IRender$render$arity$1 = ((function (map__25175,map__25175__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs25181 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25181))?sablono.interpreter.attributes.call(null,attrs25181):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25181))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25181),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs25186 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25186))?sablono.interpreter.attributes.call(null,attrs25186):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25186))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25186),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs25191 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25191))?sablono.interpreter.attributes.call(null,attrs25191):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25191))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25192 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25192))?sablono.interpreter.attributes.call(null,attrs25192):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25192))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25192)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25191),(function (){var attrs25193 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25193))?sablono.interpreter.attributes.call(null,attrs25193):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25193))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25193)], null))));
})()], null))));
})(),(function (){var attrs25194 = clustermap.formats.money.fmoney.call(null,(function (){var G__25204 = self__.site_stats;var G__25204__$1 = (((G__25204 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25204));var G__25204__$2 = (((G__25204__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25204__$1));return G__25204__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25194))?sablono.interpreter.attributes.call(null,attrs25194):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25194))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25194),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25199 = clustermap.formats.number.fnum.call(null,(function (){var G__25205 = self__.site_stats;var G__25205__$1 = (((G__25205 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25205));var G__25205__$2 = (((G__25205__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25205__$1));return G__25205__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25199))?sablono.interpreter.attributes.call(null,attrs25199):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25199))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25199),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25175,map__25175__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25175,map__25175__$1,const_count,ic_count,pc_count){
return (function (_25178){var self__ = this;
var _25178__$1 = this;return self__.meta25177;
});})(map__25175,map__25175__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25175,map__25175__$1,const_count,ic_count,pc_count){
return (function (_25178,meta25177__$1){var self__ = this;
var _25178__$1 = this;return (new clustermap.components.map_report.t25176(self__.pc_count,self__.ic_count,self__.const_count,self__.map__25175,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta25177__$1));
});})(map__25175,map__25175__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25176 = ((function (map__25175,map__25175__$1,const_count,ic_count,pc_count){
return (function __GT_t25176(pc_count__$1,ic_count__$1,const_count__$1,map__25175__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25177){return (new clustermap.components.map_report.t25176(pc_count__$1,ic_count__$1,const_count__$1,map__25175__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25177));
});})(map__25175,map__25175__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25176(pc_count,ic_count,const_count,map__25175__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__25231 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25231__$1 = ((cljs.core.seq_QMARK_.call(null,map__25231))?cljs.core.apply.call(null,cljs.core.hash_map,map__25231):map__25231);var const_count = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25231__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25232 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25232 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__25231,portfolio_company_report,site_stats,meta25233){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__25231 = map__25231;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta25233 = meta25233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25232.cljs$lang$type = true;
clustermap.components.map_report.t25232.cljs$lang$ctorStr = "clustermap.components.map-report/t25232";
clustermap.components.map_report.t25232.cljs$lang$ctorPrWriter = ((function (map__25231,map__25231__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25232");
});})(map__25231,map__25231__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25232.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25232.prototype.om$core$IRender$render$arity$1 = ((function (map__25231,map__25231__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs25237 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25237))?sablono.interpreter.attributes.call(null,attrs25237):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25237))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25237)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25238 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25238))?sablono.interpreter.attributes.call(null,attrs25238):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25238))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25239 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25239))?sablono.interpreter.attributes.call(null,attrs25239):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25239))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25239)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25238),(function (){var attrs25240 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25240))?sablono.interpreter.attributes.call(null,attrs25240):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25240))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25240)], null))));
})()], null))));
})(),(function (){var attrs25241 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25241))?sablono.interpreter.attributes.call(null,attrs25241):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25241))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25242 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25242))?sablono.interpreter.attributes.call(null,attrs25242):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25242))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25242)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25241),(function (){var attrs25243 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25243))?sablono.interpreter.attributes.call(null,attrs25243):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25243))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25243)], null))));
})()], null))));
})(),(function (){var attrs25244 = clustermap.formats.money.fmoney.call(null,(function (){var G__25254 = self__.site_stats;var G__25254__$1 = (((G__25254 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25254));var G__25254__$2 = (((G__25254__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25254__$1));return G__25254__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25244))?sablono.interpreter.attributes.call(null,attrs25244):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25244))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25244),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25249 = clustermap.formats.number.fnum.call(null,(function (){var G__25255 = self__.site_stats;var G__25255__$1 = (((G__25255 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25255));var G__25255__$2 = (((G__25255__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25255__$1));return G__25255__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25249))?sablono.interpreter.attributes.call(null,attrs25249):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25249))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25249),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25231,map__25231__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25231,map__25231__$1,const_count,ic_count,pc_count){
return (function (_25234){var self__ = this;
var _25234__$1 = this;return self__.meta25233;
});})(map__25231,map__25231__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25231,map__25231__$1,const_count,ic_count,pc_count){
return (function (_25234,meta25233__$1){var self__ = this;
var _25234__$1 = this;return (new clustermap.components.map_report.t25232(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__25231,self__.portfolio_company_report,self__.site_stats,meta25233__$1));
});})(map__25231,map__25231__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25232 = ((function (map__25231,map__25231__$1,const_count,ic_count,pc_count){
return (function __GT_t25232(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__25231__$2,portfolio_company_report__$1,site_stats__$1,meta25233){return (new clustermap.components.map_report.t25232(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__25231__$2,portfolio_company_report__$1,site_stats__$1,meta25233));
});})(map__25231,map__25231__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25232(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__25231__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__25281 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25281__$1 = ((cljs.core.seq_QMARK_.call(null,map__25281))?cljs.core.apply.call(null,cljs.core.hash_map,map__25281):map__25281);var const_count = cljs.core.get.call(null,map__25281__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25281__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25281__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25282 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25282 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,map__25281,meta25283){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.map__25281 = map__25281;
this.meta25283 = meta25283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25282.cljs$lang$type = true;
clustermap.components.map_report.t25282.cljs$lang$ctorStr = "clustermap.components.map-report/t25282";
clustermap.components.map_report.t25282.cljs$lang$ctorPrWriter = ((function (map__25281,map__25281__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25282");
});})(map__25281,map__25281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25282.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25282.prototype.om$core$IRender$render$arity$1 = ((function (map__25281,map__25281__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs25287 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25287))?sablono.interpreter.attributes.call(null,attrs25287):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25287))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25287)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25288 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25288))?sablono.interpreter.attributes.call(null,attrs25288):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25288))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25289 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25289))?sablono.interpreter.attributes.call(null,attrs25289):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25289))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25289)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25288),(function (){var attrs25290 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25290))?sablono.interpreter.attributes.call(null,attrs25290):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25290))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25290)], null))));
})()], null))));
})(),(function (){var attrs25291 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25291))?sablono.interpreter.attributes.call(null,attrs25291):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25291))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25292 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25292))?sablono.interpreter.attributes.call(null,attrs25292):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25292))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25292)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25291),(function (){var attrs25293 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25293))?sablono.interpreter.attributes.call(null,attrs25293):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25293))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25293)], null))));
})()], null))));
})(),(function (){var attrs25294 = clustermap.formats.money.fmoney.call(null,(function (){var G__25304 = self__.site_stats;var G__25304__$1 = (((G__25304 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25304));var G__25304__$2 = (((G__25304__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25304__$1));return G__25304__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25294))?sablono.interpreter.attributes.call(null,attrs25294):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25294))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25294),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25299 = clustermap.formats.number.fnum.call(null,(function (){var G__25305 = self__.site_stats;var G__25305__$1 = (((G__25305 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25305));var G__25305__$2 = (((G__25305__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25305__$1));return G__25305__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25299))?sablono.interpreter.attributes.call(null,attrs25299):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25299))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25299),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25281,map__25281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25281,map__25281__$1,const_count,ic_count,pc_count){
return (function (_25284){var self__ = this;
var _25284__$1 = this;return self__.meta25283;
});})(map__25281,map__25281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25281,map__25281__$1,const_count,ic_count,pc_count){
return (function (_25284,meta25283__$1){var self__ = this;
var _25284__$1 = this;return (new clustermap.components.map_report.t25282(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,self__.map__25281,meta25283__$1));
});})(map__25281,map__25281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25282 = ((function (map__25281,map__25281__$1,const_count,ic_count,pc_count){
return (function __GT_t25282(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,map__25281__$2,meta25283){return (new clustermap.components.map_report.t25282(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,map__25281__$2,meta25283));
});})(map__25281,map__25281__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25282(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,map__25281__$1,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__25335 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25335__$1 = ((cljs.core.seq_QMARK_.call(null,map__25335))?cljs.core.apply.call(null,cljs.core.hash_map,map__25335):map__25335);var const_count = cljs.core.get.call(null,map__25335__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25335__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25335__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25336 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25336 = (function (pc_count,path_fn,const_count,ic_count,map__25335,constituency_report,comm,constituency,view_path_fn,site_stats,meta25337){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__25335 = map__25335;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25337 = meta25337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25336.cljs$lang$type = true;
clustermap.components.map_report.t25336.cljs$lang$ctorStr = "clustermap.components.map-report/t25336";
clustermap.components.map_report.t25336.cljs$lang$ctorPrWriter = ((function (map__25335,map__25335__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25336");
});})(map__25335,map__25335__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25336.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25336.prototype.om$core$IRender$render$arity$1 = ((function (map__25335,map__25335__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs25341 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25341))?sablono.interpreter.attributes.call(null,attrs25341):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25341))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25341),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25346 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25346))?sablono.interpreter.attributes.call(null,attrs25346):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25346))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25347 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25347))?sablono.interpreter.attributes.call(null,attrs25347):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25347))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25347)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25346),(function (){var attrs25348 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25348))?sablono.interpreter.attributes.call(null,attrs25348):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25348))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25348)], null))));
})()], null))));
})(),(function (){var attrs25349 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25349))?sablono.interpreter.attributes.call(null,attrs25349):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25349))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25350 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25350))?sablono.interpreter.attributes.call(null,attrs25350):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25350))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25350)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25349),(function (){var attrs25351 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25351))?sablono.interpreter.attributes.call(null,attrs25351):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25351))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25351)], null))));
})()], null))));
})(),(function (){var attrs25352 = clustermap.formats.money.fmoney.call(null,(function (){var G__25362 = self__.site_stats;var G__25362__$1 = (((G__25362 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25362));var G__25362__$2 = (((G__25362__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25362__$1));return G__25362__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25352))?sablono.interpreter.attributes.call(null,attrs25352):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25352))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25352),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25357 = clustermap.formats.number.fnum.call(null,(function (){var G__25363 = self__.site_stats;var G__25363__$1 = (((G__25363 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25363));var G__25363__$2 = (((G__25363__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25363__$1));return G__25363__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25357))?sablono.interpreter.attributes.call(null,attrs25357):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25357))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25357),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25335,map__25335__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25336.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25335,map__25335__$1,const_count,ic_count,pc_count){
return (function (_25338){var self__ = this;
var _25338__$1 = this;return self__.meta25337;
});})(map__25335,map__25335__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25335,map__25335__$1,const_count,ic_count,pc_count){
return (function (_25338,meta25337__$1){var self__ = this;
var _25338__$1 = this;return (new clustermap.components.map_report.t25336(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__25335,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta25337__$1));
});})(map__25335,map__25335__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25336 = ((function (map__25335,map__25335__$1,const_count,ic_count,pc_count){
return (function __GT_t25336(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__25335__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25337){return (new clustermap.components.map_report.t25336(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__25335__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25337));
});})(map__25335,map__25335__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25336(pc_count,path_fn,const_count,ic_count,map__25335__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__25368 = om.core.get_shared.call(null,owner);var map__25368__$1 = ((cljs.core.seq_QMARK_.call(null,map__25368))?cljs.core.apply.call(null,cljs.core.hash_map,map__25368):map__25368);var view_path_fn = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25368__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__25369 = cljs.core._EQ__EQ_;var expr__25370 = type;if(cljs.core.truth_(pred__25369.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__25370)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25369.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__25370)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25369.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__25370)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
