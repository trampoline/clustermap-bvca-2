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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__25231 = site_stats;var G__25231__$1 = (((G__25231 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__25231));return G__25231__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__25232 = site_stats;var G__25232__$1 = (((G__25232 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__25232));return G__25232__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__25233 = site_stats;var G__25233__$1 = (((G__25233 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__25233));return G__25233__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__25265 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25265__$1 = ((cljs.core.seq_QMARK_.call(null,map__25265))?cljs.core.apply.call(null,cljs.core.hash_map,map__25265):map__25265);var const_count = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25265__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25266 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25266 = (function (pc_count,ic_count,const_count,map__25265,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta25267){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__25265 = map__25265;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta25267 = meta25267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25266.cljs$lang$type = true;
clustermap.components.map_report.t25266.cljs$lang$ctorStr = "clustermap.components.map-report/t25266";
clustermap.components.map_report.t25266.cljs$lang$ctorPrWriter = ((function (map__25265,map__25265__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25266");
});})(map__25265,map__25265__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25266.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25266.prototype.om$core$IRender$render$arity$1 = ((function (map__25265,map__25265__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs25271 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25271))?sablono.interpreter.attributes.call(null,attrs25271):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25271))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25271),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs25276 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25276))?sablono.interpreter.attributes.call(null,attrs25276):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25276))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25276),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs25281 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25281))?sablono.interpreter.attributes.call(null,attrs25281):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25281))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25282 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25282))?sablono.interpreter.attributes.call(null,attrs25282):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25282))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25282)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25281),(function (){var attrs25283 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25283))?sablono.interpreter.attributes.call(null,attrs25283):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25283))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25283)], null))));
})()], null))));
})(),(function (){var attrs25284 = clustermap.formats.money.fmoney.call(null,(function (){var G__25294 = self__.site_stats;var G__25294__$1 = (((G__25294 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25294));var G__25294__$2 = (((G__25294__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25294__$1));return G__25294__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25284))?sablono.interpreter.attributes.call(null,attrs25284):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25284))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25284),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25289 = clustermap.formats.number.fnum.call(null,(function (){var G__25295 = self__.site_stats;var G__25295__$1 = (((G__25295 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25295));var G__25295__$2 = (((G__25295__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25295__$1));return G__25295__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25289))?sablono.interpreter.attributes.call(null,attrs25289):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25289))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25289),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25265,map__25265__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25265,map__25265__$1,const_count,ic_count,pc_count){
return (function (_25268){var self__ = this;
var _25268__$1 = this;return self__.meta25267;
});})(map__25265,map__25265__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25265,map__25265__$1,const_count,ic_count,pc_count){
return (function (_25268,meta25267__$1){var self__ = this;
var _25268__$1 = this;return (new clustermap.components.map_report.t25266(self__.pc_count,self__.ic_count,self__.const_count,self__.map__25265,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta25267__$1));
});})(map__25265,map__25265__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25266 = ((function (map__25265,map__25265__$1,const_count,ic_count,pc_count){
return (function __GT_t25266(pc_count__$1,ic_count__$1,const_count__$1,map__25265__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25267){return (new clustermap.components.map_report.t25266(pc_count__$1,ic_count__$1,const_count__$1,map__25265__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25267));
});})(map__25265,map__25265__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25266(pc_count,ic_count,const_count,map__25265__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__25321 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25321__$1 = ((cljs.core.seq_QMARK_.call(null,map__25321))?cljs.core.apply.call(null,cljs.core.hash_map,map__25321):map__25321);var const_count = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25322 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25322 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__25321,comm,view_path_fn,portfolio_company_report,site_stats,meta25323){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__25321 = map__25321;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta25323 = meta25323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25322.cljs$lang$type = true;
clustermap.components.map_report.t25322.cljs$lang$ctorStr = "clustermap.components.map-report/t25322";
clustermap.components.map_report.t25322.cljs$lang$ctorPrWriter = ((function (map__25321,map__25321__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25322");
});})(map__25321,map__25321__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25322.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25322.prototype.om$core$IRender$render$arity$1 = ((function (map__25321,map__25321__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs25327 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25327))?sablono.interpreter.attributes.call(null,attrs25327):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25327))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25327)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25328 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25328))?sablono.interpreter.attributes.call(null,attrs25328):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25328))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25329 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25329))?sablono.interpreter.attributes.call(null,attrs25329):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25329))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25329)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25328),(function (){var attrs25330 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25330))?sablono.interpreter.attributes.call(null,attrs25330):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25330))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25330)], null))));
})()], null))));
})(),(function (){var attrs25331 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25331))?sablono.interpreter.attributes.call(null,attrs25331):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25331))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25332 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25332))?sablono.interpreter.attributes.call(null,attrs25332):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25332))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25332)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25331),(function (){var attrs25333 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25333))?sablono.interpreter.attributes.call(null,attrs25333):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25333))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25333)], null))));
})()], null))));
})(),(function (){var attrs25334 = clustermap.formats.money.fmoney.call(null,(function (){var G__25344 = self__.site_stats;var G__25344__$1 = (((G__25344 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25344));var G__25344__$2 = (((G__25344__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25344__$1));return G__25344__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25334))?sablono.interpreter.attributes.call(null,attrs25334):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25334))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25334),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25339 = clustermap.formats.number.fnum.call(null,(function (){var G__25345 = self__.site_stats;var G__25345__$1 = (((G__25345 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25345));var G__25345__$2 = (((G__25345__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25345__$1));return G__25345__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25339))?sablono.interpreter.attributes.call(null,attrs25339):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25339))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25339),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25321,map__25321__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25322.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25321,map__25321__$1,const_count,ic_count,pc_count){
return (function (_25324){var self__ = this;
var _25324__$1 = this;return self__.meta25323;
});})(map__25321,map__25321__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25321,map__25321__$1,const_count,ic_count,pc_count){
return (function (_25324,meta25323__$1){var self__ = this;
var _25324__$1 = this;return (new clustermap.components.map_report.t25322(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__25321,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta25323__$1));
});})(map__25321,map__25321__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25322 = ((function (map__25321,map__25321__$1,const_count,ic_count,pc_count){
return (function __GT_t25322(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__25321__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta25323){return (new clustermap.components.map_report.t25322(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__25321__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta25323));
});})(map__25321,map__25321__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25322(pc_count,path_fn,const_count,portfolio_company,ic_count,map__25321__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__25371 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25371__$1 = ((cljs.core.seq_QMARK_.call(null,map__25371))?cljs.core.apply.call(null,cljs.core.hash_map,map__25371):map__25371);var const_count = cljs.core.get.call(null,map__25371__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25371__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25371__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25372 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25372 = (function (pc_count,path_fn,const_count,investor_company,map__25371,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta25373){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.map__25371 = map__25371;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25373 = meta25373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25372.cljs$lang$type = true;
clustermap.components.map_report.t25372.cljs$lang$ctorStr = "clustermap.components.map-report/t25372";
clustermap.components.map_report.t25372.cljs$lang$ctorPrWriter = ((function (map__25371,map__25371__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25372");
});})(map__25371,map__25371__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25372.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25372.prototype.om$core$IRender$render$arity$1 = ((function (map__25371,map__25371__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs25377 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25377))?sablono.interpreter.attributes.call(null,attrs25377):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25377))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25377)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25378 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25378))?sablono.interpreter.attributes.call(null,attrs25378):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25378))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25379 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25379))?sablono.interpreter.attributes.call(null,attrs25379):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25379))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25379)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25378),(function (){var attrs25380 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25380))?sablono.interpreter.attributes.call(null,attrs25380):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25380))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25380)], null))));
})()], null))));
})(),(function (){var attrs25381 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25381))?sablono.interpreter.attributes.call(null,attrs25381):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25381))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25382 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25382))?sablono.interpreter.attributes.call(null,attrs25382):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25382))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25382)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25381),(function (){var attrs25383 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25383))?sablono.interpreter.attributes.call(null,attrs25383):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25383))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25383)], null))));
})()], null))));
})(),(function (){var attrs25384 = clustermap.formats.money.fmoney.call(null,(function (){var G__25394 = self__.site_stats;var G__25394__$1 = (((G__25394 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25394));var G__25394__$2 = (((G__25394__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25394__$1));return G__25394__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25384))?sablono.interpreter.attributes.call(null,attrs25384):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25384))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25384),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25389 = clustermap.formats.number.fnum.call(null,(function (){var G__25395 = self__.site_stats;var G__25395__$1 = (((G__25395 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25395));var G__25395__$2 = (((G__25395__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25395__$1));return G__25395__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25389))?sablono.interpreter.attributes.call(null,attrs25389):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25389))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25389),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25371,map__25371__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25371,map__25371__$1,const_count,ic_count,pc_count){
return (function (_25374){var self__ = this;
var _25374__$1 = this;return self__.meta25373;
});})(map__25371,map__25371__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25371,map__25371__$1,const_count,ic_count,pc_count){
return (function (_25374,meta25373__$1){var self__ = this;
var _25374__$1 = this;return (new clustermap.components.map_report.t25372(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.map__25371,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta25373__$1));
});})(map__25371,map__25371__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25372 = ((function (map__25371,map__25371__$1,const_count,ic_count,pc_count){
return (function __GT_t25372(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,map__25371__$2,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25373){return (new clustermap.components.map_report.t25372(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,map__25371__$2,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25373));
});})(map__25371,map__25371__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25372(pc_count,path_fn,const_count,investor_company,map__25371__$1,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__25425 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25425__$1 = ((cljs.core.seq_QMARK_.call(null,map__25425))?cljs.core.apply.call(null,cljs.core.hash_map,map__25425):map__25425);var const_count = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25425__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25426 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25426 = (function (pc_count,path_fn,const_count,ic_count,map__25425,constituency_report,comm,constituency,view_path_fn,site_stats,meta25427){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__25425 = map__25425;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25427 = meta25427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25426.cljs$lang$type = true;
clustermap.components.map_report.t25426.cljs$lang$ctorStr = "clustermap.components.map-report/t25426";
clustermap.components.map_report.t25426.cljs$lang$ctorPrWriter = ((function (map__25425,map__25425__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25426");
});})(map__25425,map__25425__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25426.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25426.prototype.om$core$IRender$render$arity$1 = ((function (map__25425,map__25425__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs25431 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25431))?sablono.interpreter.attributes.call(null,attrs25431):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25431))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25431),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25436 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25436))?sablono.interpreter.attributes.call(null,attrs25436):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25436))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25437 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25437))?sablono.interpreter.attributes.call(null,attrs25437):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25437))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25437)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25436),(function (){var attrs25438 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25438))?sablono.interpreter.attributes.call(null,attrs25438):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25438))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25438)], null))));
})()], null))));
})(),(function (){var attrs25439 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25439))?sablono.interpreter.attributes.call(null,attrs25439):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25439))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25440 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25440))?sablono.interpreter.attributes.call(null,attrs25440):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25440)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25439),(function (){var attrs25441 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25441))?sablono.interpreter.attributes.call(null,attrs25441):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25441))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25441)], null))));
})()], null))));
})(),(function (){var attrs25442 = clustermap.formats.money.fmoney.call(null,(function (){var G__25452 = self__.site_stats;var G__25452__$1 = (((G__25452 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25452));var G__25452__$2 = (((G__25452__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25452__$1));return G__25452__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25442))?sablono.interpreter.attributes.call(null,attrs25442):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25442))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25442),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25447 = clustermap.formats.number.fnum.call(null,(function (){var G__25453 = self__.site_stats;var G__25453__$1 = (((G__25453 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25453));var G__25453__$2 = (((G__25453__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25453__$1));return G__25453__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25447))?sablono.interpreter.attributes.call(null,attrs25447):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25447))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25447),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25425,map__25425__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25425,map__25425__$1,const_count,ic_count,pc_count){
return (function (_25428){var self__ = this;
var _25428__$1 = this;return self__.meta25427;
});})(map__25425,map__25425__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25425,map__25425__$1,const_count,ic_count,pc_count){
return (function (_25428,meta25427__$1){var self__ = this;
var _25428__$1 = this;return (new clustermap.components.map_report.t25426(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__25425,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta25427__$1));
});})(map__25425,map__25425__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25426 = ((function (map__25425,map__25425__$1,const_count,ic_count,pc_count){
return (function __GT_t25426(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__25425__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25427){return (new clustermap.components.map_report.t25426(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__25425__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25427));
});})(map__25425,map__25425__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25426(pc_count,path_fn,const_count,ic_count,map__25425__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__25458 = om.core.get_shared.call(null,owner);var map__25458__$1 = ((cljs.core.seq_QMARK_.call(null,map__25458))?cljs.core.apply.call(null,cljs.core.hash_map,map__25458):map__25458);var view_path_fn = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25458__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__25459 = cljs.core._EQ__EQ_;var expr__25460 = type;if(cljs.core.truth_(pred__25459.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__25460)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25459.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__25460)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25459.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__25460)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
