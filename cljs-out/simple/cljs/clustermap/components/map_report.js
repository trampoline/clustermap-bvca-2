// Compiled by ClojureScript 0.0-2356
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13399 = site_stats;var G__13399__$1 = (((G__13399 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13399));return G__13399__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13400 = site_stats;var G__13400__$1 = (((G__13400 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13400));return G__13400__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13401 = site_stats;var G__13401__$1 = (((G__13401 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13401));return G__13401__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13433 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13433__$1 = ((cljs.core.seq_QMARK_.call(null,map__13433))?cljs.core.apply.call(null,cljs.core.hash_map,map__13433):map__13433);var const_count = cljs.core.get.call(null,map__13433__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13433__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13433__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13434 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13434 = (function (pc_count,ic_count,const_count,map__13433,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13435){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13433 = map__13433;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13435 = meta13435;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13434.cljs$lang$type = true;
clustermap.components.map_report.t13434.cljs$lang$ctorStr = "clustermap.components.map-report/t13434";
clustermap.components.map_report.t13434.cljs$lang$ctorPrWriter = ((function (map__13433,map__13433__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13434");
});})(map__13433,map__13433__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13434.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13434.prototype.om$core$IRender$render$arity$1 = ((function (map__13433,map__13433__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13439 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13439))?sablono.interpreter.attributes.call(null,attrs13439):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13439))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13439),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13444 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13444))?sablono.interpreter.attributes.call(null,attrs13444):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13444))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13444),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13449 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13449))?sablono.interpreter.attributes.call(null,attrs13449):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13449))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13450 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13450))?sablono.interpreter.attributes.call(null,attrs13450):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13450))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13450)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13449),(function (){var attrs13451 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13451))?sablono.interpreter.attributes.call(null,attrs13451):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13451))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13451)], null))));
})()], null))));
})(),(function (){var attrs13452 = clustermap.formats.money.fmoney.call(null,(function (){var G__13462 = self__.site_stats;var G__13462__$1 = (((G__13462 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13462));var G__13462__$2 = (((G__13462__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13462__$1));return G__13462__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13452))?sablono.interpreter.attributes.call(null,attrs13452):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13452))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13452),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13457 = clustermap.formats.number.fnum.call(null,(function (){var G__13463 = self__.site_stats;var G__13463__$1 = (((G__13463 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13463));var G__13463__$2 = (((G__13463__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13463__$1));return G__13463__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13457))?sablono.interpreter.attributes.call(null,attrs13457):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13457))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13457),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13433,map__13433__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13433,map__13433__$1,const_count,ic_count,pc_count){
return (function (_13436){var self__ = this;
var _13436__$1 = this;return self__.meta13435;
});})(map__13433,map__13433__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13433,map__13433__$1,const_count,ic_count,pc_count){
return (function (_13436,meta13435__$1){var self__ = this;
var _13436__$1 = this;return (new clustermap.components.map_report.t13434(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13433,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13435__$1));
});})(map__13433,map__13433__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13434 = ((function (map__13433,map__13433__$1,const_count,ic_count,pc_count){
return (function __GT_t13434(pc_count__$1,ic_count__$1,const_count__$1,map__13433__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13435){return (new clustermap.components.map_report.t13434(pc_count__$1,ic_count__$1,const_count__$1,map__13433__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13435));
});})(map__13433,map__13433__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13434(pc_count,ic_count,const_count,map__13433__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13489 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13489__$1 = ((cljs.core.seq_QMARK_.call(null,map__13489))?cljs.core.apply.call(null,cljs.core.hash_map,map__13489):map__13489);var const_count = cljs.core.get.call(null,map__13489__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13489__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13489__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13490 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13490 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__13489,comm,view_path_fn,portfolio_company_report,site_stats,meta13491){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__13489 = map__13489;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13491 = meta13491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13490.cljs$lang$type = true;
clustermap.components.map_report.t13490.cljs$lang$ctorStr = "clustermap.components.map-report/t13490";
clustermap.components.map_report.t13490.cljs$lang$ctorPrWriter = ((function (map__13489,map__13489__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13490");
});})(map__13489,map__13489__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13490.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13490.prototype.om$core$IRender$render$arity$1 = ((function (map__13489,map__13489__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13495 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13495))?sablono.interpreter.attributes.call(null,attrs13495):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13495))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13495)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13496 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13496))?sablono.interpreter.attributes.call(null,attrs13496):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13496))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13497 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13497))?sablono.interpreter.attributes.call(null,attrs13497):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13497))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13497)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13496),(function (){var attrs13498 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13498))?sablono.interpreter.attributes.call(null,attrs13498):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13498))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13498)], null))));
})()], null))));
})(),(function (){var attrs13499 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13499))?sablono.interpreter.attributes.call(null,attrs13499):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13499))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13500 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13500))?sablono.interpreter.attributes.call(null,attrs13500):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13500))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13500)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13499),(function (){var attrs13501 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13501))?sablono.interpreter.attributes.call(null,attrs13501):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13501))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13501)], null))));
})()], null))));
})(),(function (){var attrs13502 = clustermap.formats.money.fmoney.call(null,(function (){var G__13512 = self__.site_stats;var G__13512__$1 = (((G__13512 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13512));var G__13512__$2 = (((G__13512__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13512__$1));return G__13512__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13502))?sablono.interpreter.attributes.call(null,attrs13502):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13502))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13502),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13507 = clustermap.formats.number.fnum.call(null,(function (){var G__13513 = self__.site_stats;var G__13513__$1 = (((G__13513 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13513));var G__13513__$2 = (((G__13513__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13513__$1));return G__13513__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13507))?sablono.interpreter.attributes.call(null,attrs13507):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13507))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13507),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13489,map__13489__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13489,map__13489__$1,const_count,ic_count,pc_count){
return (function (_13492){var self__ = this;
var _13492__$1 = this;return self__.meta13491;
});})(map__13489,map__13489__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13489,map__13489__$1,const_count,ic_count,pc_count){
return (function (_13492,meta13491__$1){var self__ = this;
var _13492__$1 = this;return (new clustermap.components.map_report.t13490(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__13489,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta13491__$1));
});})(map__13489,map__13489__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13490 = ((function (map__13489,map__13489__$1,const_count,ic_count,pc_count){
return (function __GT_t13490(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__13489__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13491){return (new clustermap.components.map_report.t13490(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__13489__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13491));
});})(map__13489,map__13489__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13490(pc_count,path_fn,const_count,portfolio_company,ic_count,map__13489__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13539 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13539__$1 = ((cljs.core.seq_QMARK_.call(null,map__13539))?cljs.core.apply.call(null,cljs.core.hash_map,map__13539):map__13539);var const_count = cljs.core.get.call(null,map__13539__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13539__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13539__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13540 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13540 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13539,site_stats,meta13541){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__13539 = map__13539;
this.site_stats = site_stats;
this.meta13541 = meta13541;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13540.cljs$lang$type = true;
clustermap.components.map_report.t13540.cljs$lang$ctorStr = "clustermap.components.map-report/t13540";
clustermap.components.map_report.t13540.cljs$lang$ctorPrWriter = ((function (map__13539,map__13539__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13540");
});})(map__13539,map__13539__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13540.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13540.prototype.om$core$IRender$render$arity$1 = ((function (map__13539,map__13539__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13545 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13545))?sablono.interpreter.attributes.call(null,attrs13545):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13545))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13545)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13546 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13546))?sablono.interpreter.attributes.call(null,attrs13546):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13546))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13547 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13547))?sablono.interpreter.attributes.call(null,attrs13547):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13547))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13547)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13546),(function (){var attrs13548 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13548))?sablono.interpreter.attributes.call(null,attrs13548):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13548))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13548)], null))));
})()], null))));
})(),(function (){var attrs13549 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13549))?sablono.interpreter.attributes.call(null,attrs13549):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13549))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13550 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13550))?sablono.interpreter.attributes.call(null,attrs13550):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13550))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13550)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13549),(function (){var attrs13551 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13551))?sablono.interpreter.attributes.call(null,attrs13551):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13551))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13551)], null))));
})()], null))));
})(),(function (){var attrs13552 = clustermap.formats.money.fmoney.call(null,(function (){var G__13562 = self__.site_stats;var G__13562__$1 = (((G__13562 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13562));var G__13562__$2 = (((G__13562__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13562__$1));return G__13562__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13552))?sablono.interpreter.attributes.call(null,attrs13552):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13552))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13552),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13557 = clustermap.formats.number.fnum.call(null,(function (){var G__13563 = self__.site_stats;var G__13563__$1 = (((G__13563 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13563));var G__13563__$2 = (((G__13563__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13563__$1));return G__13563__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13557))?sablono.interpreter.attributes.call(null,attrs13557):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13557))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13557),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13539,map__13539__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13540.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13539,map__13539__$1,const_count,ic_count,pc_count){
return (function (_13542){var self__ = this;
var _13542__$1 = this;return self__.meta13541;
});})(map__13539,map__13539__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13539,map__13539__$1,const_count,ic_count,pc_count){
return (function (_13542,meta13541__$1){var self__ = this;
var _13542__$1 = this;return (new clustermap.components.map_report.t13540(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__13539,self__.site_stats,meta13541__$1));
});})(map__13539,map__13539__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13540 = ((function (map__13539,map__13539__$1,const_count,ic_count,pc_count){
return (function __GT_t13540(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13539__$2,site_stats__$1,meta13541){return (new clustermap.components.map_report.t13540(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13539__$2,site_stats__$1,meta13541));
});})(map__13539,map__13539__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13540(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13539__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13593 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13593__$1 = ((cljs.core.seq_QMARK_.call(null,map__13593))?cljs.core.apply.call(null,cljs.core.hash_map,map__13593):map__13593);var const_count = cljs.core.get.call(null,map__13593__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13593__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13593__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13594 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13594 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13593,site_stats,meta13595){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__13593 = map__13593;
this.site_stats = site_stats;
this.meta13595 = meta13595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13594.cljs$lang$type = true;
clustermap.components.map_report.t13594.cljs$lang$ctorStr = "clustermap.components.map-report/t13594";
clustermap.components.map_report.t13594.cljs$lang$ctorPrWriter = ((function (map__13593,map__13593__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13594");
});})(map__13593,map__13593__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13594.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13594.prototype.om$core$IRender$render$arity$1 = ((function (map__13593,map__13593__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13599 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13599))?sablono.interpreter.attributes.call(null,attrs13599):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13599))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3639__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13599),React.DOM.br(null),(cljs.core.truth_((function (){var or__3639__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13604 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13604))?sablono.interpreter.attributes.call(null,attrs13604):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13604))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13605 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13605))?sablono.interpreter.attributes.call(null,attrs13605):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13605))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13605)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13604),(function (){var attrs13606 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13606))?sablono.interpreter.attributes.call(null,attrs13606):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13606))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13606)], null))));
})()], null))));
})(),(function (){var attrs13607 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13607))?sablono.interpreter.attributes.call(null,attrs13607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13607))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13608 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13608))?sablono.interpreter.attributes.call(null,attrs13608):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13608))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13608)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13607),(function (){var attrs13609 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13609))?sablono.interpreter.attributes.call(null,attrs13609):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13609))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13609)], null))));
})()], null))));
})(),(function (){var attrs13610 = clustermap.formats.money.fmoney.call(null,(function (){var G__13620 = self__.site_stats;var G__13620__$1 = (((G__13620 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13620));var G__13620__$2 = (((G__13620__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13620__$1));return G__13620__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13610))?sablono.interpreter.attributes.call(null,attrs13610):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13610))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13610),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13615 = clustermap.formats.number.fnum.call(null,(function (){var G__13621 = self__.site_stats;var G__13621__$1 = (((G__13621 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13621));var G__13621__$2 = (((G__13621__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13621__$1));return G__13621__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13615))?sablono.interpreter.attributes.call(null,attrs13615):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13615))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13615),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13593,map__13593__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13593,map__13593__$1,const_count,ic_count,pc_count){
return (function (_13596){var self__ = this;
var _13596__$1 = this;return self__.meta13595;
});})(map__13593,map__13593__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13593,map__13593__$1,const_count,ic_count,pc_count){
return (function (_13596,meta13595__$1){var self__ = this;
var _13596__$1 = this;return (new clustermap.components.map_report.t13594(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__13593,self__.site_stats,meta13595__$1));
});})(map__13593,map__13593__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13594 = ((function (map__13593,map__13593__$1,const_count,ic_count,pc_count){
return (function __GT_t13594(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13593__$2,site_stats__$1,meta13595){return (new clustermap.components.map_report.t13594(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13593__$2,site_stats__$1,meta13595));
});})(map__13593,map__13593__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13594(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13593__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13626 = om.core.get_shared.call(null,owner);var map__13626__$1 = ((cljs.core.seq_QMARK_.call(null,map__13626))?cljs.core.apply.call(null,cljs.core.hash_map,map__13626):map__13626);var view_path_fn = cljs.core.get.call(null,map__13626__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13626__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13626__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13627 = cljs.core._EQ__EQ_;var expr__13628 = type;if(cljs.core.truth_(pred__13627.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13628)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13627.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13628)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13627.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13628)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
