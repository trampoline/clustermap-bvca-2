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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13386 = site_stats;var G__13386__$1 = (((G__13386 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13386));return G__13386__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13387 = site_stats;var G__13387__$1 = (((G__13387 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13387));return G__13387__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13388 = site_stats;var G__13388__$1 = (((G__13388 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13388));return G__13388__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13420 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13420__$1 = ((cljs.core.seq_QMARK_.call(null,map__13420))?cljs.core.apply.call(null,cljs.core.hash_map,map__13420):map__13420);var const_count = cljs.core.get.call(null,map__13420__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13420__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13420__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13421 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13421 = (function (pc_count,ic_count,const_count,map__13420,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13422){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13420 = map__13420;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13422 = meta13422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13421.cljs$lang$type = true;
clustermap.components.map_report.t13421.cljs$lang$ctorStr = "clustermap.components.map-report/t13421";
clustermap.components.map_report.t13421.cljs$lang$ctorPrWriter = ((function (map__13420,map__13420__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13421");
});})(map__13420,map__13420__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13421.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13421.prototype.om$core$IRender$render$arity$1 = ((function (map__13420,map__13420__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13426 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13426))?sablono.interpreter.attributes.call(null,attrs13426):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13426))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13426),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13431 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13431))?sablono.interpreter.attributes.call(null,attrs13431):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13431))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13431),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13436 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13436))?sablono.interpreter.attributes.call(null,attrs13436):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13436))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13437 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13437))?sablono.interpreter.attributes.call(null,attrs13437):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13437))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13437)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13436),(function (){var attrs13438 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13438))?sablono.interpreter.attributes.call(null,attrs13438):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13438))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13438)], null))));
})()], null))));
})(),(function (){var attrs13439 = clustermap.formats.money.fmoney.call(null,(function (){var G__13449 = self__.site_stats;var G__13449__$1 = (((G__13449 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13449));var G__13449__$2 = (((G__13449__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13449__$1));return G__13449__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13439))?sablono.interpreter.attributes.call(null,attrs13439):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13439))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13439),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13444 = clustermap.formats.number.fnum.call(null,(function (){var G__13450 = self__.site_stats;var G__13450__$1 = (((G__13450 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13450));var G__13450__$2 = (((G__13450__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13450__$1));return G__13450__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13444))?sablono.interpreter.attributes.call(null,attrs13444):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13444))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13444),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13420,map__13420__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13420,map__13420__$1,const_count,ic_count,pc_count){
return (function (_13423){var self__ = this;
var _13423__$1 = this;return self__.meta13422;
});})(map__13420,map__13420__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13420,map__13420__$1,const_count,ic_count,pc_count){
return (function (_13423,meta13422__$1){var self__ = this;
var _13423__$1 = this;return (new clustermap.components.map_report.t13421(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13420,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13422__$1));
});})(map__13420,map__13420__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13421 = ((function (map__13420,map__13420__$1,const_count,ic_count,pc_count){
return (function __GT_t13421(pc_count__$1,ic_count__$1,const_count__$1,map__13420__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13422){return (new clustermap.components.map_report.t13421(pc_count__$1,ic_count__$1,const_count__$1,map__13420__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13422));
});})(map__13420,map__13420__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13421(pc_count,ic_count,const_count,map__13420__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13476 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13476__$1 = ((cljs.core.seq_QMARK_.call(null,map__13476))?cljs.core.apply.call(null,cljs.core.hash_map,map__13476):map__13476);var const_count = cljs.core.get.call(null,map__13476__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13476__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13476__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13477 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13477 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__13476,view_path_fn,portfolio_company_report,site_stats,meta13478){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__13476 = map__13476;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13478 = meta13478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13477.cljs$lang$type = true;
clustermap.components.map_report.t13477.cljs$lang$ctorStr = "clustermap.components.map-report/t13477";
clustermap.components.map_report.t13477.cljs$lang$ctorPrWriter = ((function (map__13476,map__13476__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13477");
});})(map__13476,map__13476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13477.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13477.prototype.om$core$IRender$render$arity$1 = ((function (map__13476,map__13476__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13482 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13482))?sablono.interpreter.attributes.call(null,attrs13482):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13482))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13482)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13483 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13483))?sablono.interpreter.attributes.call(null,attrs13483):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13483))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13484 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13484))?sablono.interpreter.attributes.call(null,attrs13484):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13484))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13484)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13483),(function (){var attrs13485 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13485))?sablono.interpreter.attributes.call(null,attrs13485):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13485))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13485)], null))));
})()], null))));
})(),(function (){var attrs13486 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13486))?sablono.interpreter.attributes.call(null,attrs13486):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13486))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13487 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13487))?sablono.interpreter.attributes.call(null,attrs13487):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13487))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13487)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13486),(function (){var attrs13488 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13488))?sablono.interpreter.attributes.call(null,attrs13488):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13488))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13488)], null))));
})()], null))));
})(),(function (){var attrs13489 = clustermap.formats.money.fmoney.call(null,(function (){var G__13499 = self__.site_stats;var G__13499__$1 = (((G__13499 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13499));var G__13499__$2 = (((G__13499__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13499__$1));return G__13499__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13489))?sablono.interpreter.attributes.call(null,attrs13489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13489))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13489),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13494 = clustermap.formats.number.fnum.call(null,(function (){var G__13500 = self__.site_stats;var G__13500__$1 = (((G__13500 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13500));var G__13500__$2 = (((G__13500__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13500__$1));return G__13500__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13494))?sablono.interpreter.attributes.call(null,attrs13494):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13494))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13494),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13476,map__13476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13476,map__13476__$1,const_count,ic_count,pc_count){
return (function (_13479){var self__ = this;
var _13479__$1 = this;return self__.meta13478;
});})(map__13476,map__13476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13476,map__13476__$1,const_count,ic_count,pc_count){
return (function (_13479,meta13478__$1){var self__ = this;
var _13479__$1 = this;return (new clustermap.components.map_report.t13477(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.map__13476,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta13478__$1));
});})(map__13476,map__13476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13477 = ((function (map__13476,map__13476__$1,const_count,ic_count,pc_count){
return (function __GT_t13477(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__13476__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13478){return (new clustermap.components.map_report.t13477(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__13476__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13478));
});})(map__13476,map__13476__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13477(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__13476__$1,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13526 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13526__$1 = ((cljs.core.seq_QMARK_.call(null,map__13526))?cljs.core.apply.call(null,cljs.core.hash_map,map__13526):map__13526);var const_count = cljs.core.get.call(null,map__13526__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13526__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13526__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13527 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13527 = (function (pc_count,map__13526,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta13528){
this.pc_count = pc_count;
this.map__13526 = map__13526;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13528 = meta13528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13527.cljs$lang$type = true;
clustermap.components.map_report.t13527.cljs$lang$ctorStr = "clustermap.components.map-report/t13527";
clustermap.components.map_report.t13527.cljs$lang$ctorPrWriter = ((function (map__13526,map__13526__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13527");
});})(map__13526,map__13526__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13527.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13527.prototype.om$core$IRender$render$arity$1 = ((function (map__13526,map__13526__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13532 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13532))?sablono.interpreter.attributes.call(null,attrs13532):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13532))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13532)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13533 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13533))?sablono.interpreter.attributes.call(null,attrs13533):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13533))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13534 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13534))?sablono.interpreter.attributes.call(null,attrs13534):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13534))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13534)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13533),(function (){var attrs13535 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13535))?sablono.interpreter.attributes.call(null,attrs13535):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13535))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13535)], null))));
})()], null))));
})(),(function (){var attrs13536 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13536))?sablono.interpreter.attributes.call(null,attrs13536):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13536))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13537 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13537))?sablono.interpreter.attributes.call(null,attrs13537):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13537))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13537)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13536),(function (){var attrs13538 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13538))?sablono.interpreter.attributes.call(null,attrs13538):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13538))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13538)], null))));
})()], null))));
})(),(function (){var attrs13539 = clustermap.formats.money.fmoney.call(null,(function (){var G__13549 = self__.site_stats;var G__13549__$1 = (((G__13549 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13549));var G__13549__$2 = (((G__13549__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13549__$1));return G__13549__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13539))?sablono.interpreter.attributes.call(null,attrs13539):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13539))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13539),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13544 = clustermap.formats.number.fnum.call(null,(function (){var G__13550 = self__.site_stats;var G__13550__$1 = (((G__13550 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13550));var G__13550__$2 = (((G__13550__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13550__$1));return G__13550__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13544))?sablono.interpreter.attributes.call(null,attrs13544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13544))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13544),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13526,map__13526__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13526,map__13526__$1,const_count,ic_count,pc_count){
return (function (_13529){var self__ = this;
var _13529__$1 = this;return self__.meta13528;
});})(map__13526,map__13526__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13526,map__13526__$1,const_count,ic_count,pc_count){
return (function (_13529,meta13528__$1){var self__ = this;
var _13529__$1 = this;return (new clustermap.components.map_report.t13527(self__.pc_count,self__.map__13526,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta13528__$1));
});})(map__13526,map__13526__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13527 = ((function (map__13526,map__13526__$1,const_count,ic_count,pc_count){
return (function __GT_t13527(pc_count__$1,map__13526__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13528){return (new clustermap.components.map_report.t13527(pc_count__$1,map__13526__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13528));
});})(map__13526,map__13526__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13527(pc_count,map__13526__$1,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13580 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13580__$1 = ((cljs.core.seq_QMARK_.call(null,map__13580))?cljs.core.apply.call(null,cljs.core.hash_map,map__13580):map__13580);var const_count = cljs.core.get.call(null,map__13580__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13580__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13580__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13581 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13581 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,map__13580,comm,constituency,view_path_fn,site_stats,meta13582){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.map__13580 = map__13580;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13582 = meta13582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13581.cljs$lang$type = true;
clustermap.components.map_report.t13581.cljs$lang$ctorStr = "clustermap.components.map-report/t13581";
clustermap.components.map_report.t13581.cljs$lang$ctorPrWriter = ((function (map__13580,map__13580__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13581");
});})(map__13580,map__13580__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13581.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13581.prototype.om$core$IRender$render$arity$1 = ((function (map__13580,map__13580__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13586 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13586))?sablono.interpreter.attributes.call(null,attrs13586):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13586))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13586),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13591 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13591))?sablono.interpreter.attributes.call(null,attrs13591):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13591))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13592 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13592))?sablono.interpreter.attributes.call(null,attrs13592):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13592))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13592)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13591),(function (){var attrs13593 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13593))?sablono.interpreter.attributes.call(null,attrs13593):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13593))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13593)], null))));
})()], null))));
})(),(function (){var attrs13594 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13594))?sablono.interpreter.attributes.call(null,attrs13594):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13594))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13595 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13595))?sablono.interpreter.attributes.call(null,attrs13595):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13595))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13595)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13594),(function (){var attrs13596 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13596))?sablono.interpreter.attributes.call(null,attrs13596):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13596))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13596)], null))));
})()], null))));
})(),(function (){var attrs13597 = clustermap.formats.money.fmoney.call(null,(function (){var G__13607 = self__.site_stats;var G__13607__$1 = (((G__13607 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13607));var G__13607__$2 = (((G__13607__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13607__$1));return G__13607__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13597))?sablono.interpreter.attributes.call(null,attrs13597):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13597))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13597),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13602 = clustermap.formats.number.fnum.call(null,(function (){var G__13608 = self__.site_stats;var G__13608__$1 = (((G__13608 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13608));var G__13608__$2 = (((G__13608__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13608__$1));return G__13608__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13602))?sablono.interpreter.attributes.call(null,attrs13602):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13602))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13602),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13580,map__13580__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13580,map__13580__$1,const_count,ic_count,pc_count){
return (function (_13583){var self__ = this;
var _13583__$1 = this;return self__.meta13582;
});})(map__13580,map__13580__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13580,map__13580__$1,const_count,ic_count,pc_count){
return (function (_13583,meta13582__$1){var self__ = this;
var _13583__$1 = this;return (new clustermap.components.map_report.t13581(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.map__13580,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta13582__$1));
});})(map__13580,map__13580__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13581 = ((function (map__13580,map__13580__$1,const_count,ic_count,pc_count){
return (function __GT_t13581(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,map__13580__$2,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta13582){return (new clustermap.components.map_report.t13581(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,map__13580__$2,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta13582));
});})(map__13580,map__13580__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13581(pc_count,path_fn,const_count,ic_count,constituency_report,map__13580__$1,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13613 = om.core.get_shared.call(null,owner);var map__13613__$1 = ((cljs.core.seq_QMARK_.call(null,map__13613))?cljs.core.apply.call(null,cljs.core.hash_map,map__13613):map__13613);var view_path_fn = cljs.core.get.call(null,map__13613__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13613__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13613__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13614 = cljs.core._EQ__EQ_;var expr__13615 = type;if(cljs.core.truth_(pred__13614.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13615)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13614.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13615)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13614.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13615)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
