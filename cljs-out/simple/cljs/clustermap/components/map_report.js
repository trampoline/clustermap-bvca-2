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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__24278 = site_stats;var G__24278__$1 = (((G__24278 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__24278));return G__24278__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__24279 = site_stats;var G__24279__$1 = (((G__24279 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__24279));return G__24279__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__24280 = site_stats;var G__24280__$1 = (((G__24280 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__24280));return G__24280__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__24312 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24312__$1 = ((cljs.core.seq_QMARK_.call(null,map__24312))?cljs.core.apply.call(null,cljs.core.hash_map,map__24312):map__24312);var const_count = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24312__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24313 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24313 = (function (pc_count,ic_count,const_count,map__24312,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta24314){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__24312 = map__24312;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta24314 = meta24314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24313.cljs$lang$type = true;
clustermap.components.map_report.t24313.cljs$lang$ctorStr = "clustermap.components.map-report/t24313";
clustermap.components.map_report.t24313.cljs$lang$ctorPrWriter = ((function (map__24312,map__24312__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24313");
});})(map__24312,map__24312__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24313.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24313.prototype.om$core$IRender$render$arity$1 = ((function (map__24312,map__24312__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs24318 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24318))?sablono.interpreter.attributes.call(null,attrs24318):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24318))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24318),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs24323 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24323))?sablono.interpreter.attributes.call(null,attrs24323):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24323))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24323),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs24328 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24328))?sablono.interpreter.attributes.call(null,attrs24328):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24328))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24329 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24329))?sablono.interpreter.attributes.call(null,attrs24329):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24329))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24329)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24328),(function (){var attrs24330 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24330))?sablono.interpreter.attributes.call(null,attrs24330):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24330))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24330)], null))));
})()], null))));
})(),(function (){var attrs24331 = clustermap.formats.money.fmoney.call(null,(function (){var G__24341 = self__.site_stats;var G__24341__$1 = (((G__24341 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24341));var G__24341__$2 = (((G__24341__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24341__$1));return G__24341__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24331))?sablono.interpreter.attributes.call(null,attrs24331):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24331))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24331),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24336 = clustermap.formats.number.fnum.call(null,(function (){var G__24342 = self__.site_stats;var G__24342__$1 = (((G__24342 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24342));var G__24342__$2 = (((G__24342__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24342__$1));return G__24342__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24336))?sablono.interpreter.attributes.call(null,attrs24336):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24336))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24336),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24312,map__24312__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24312,map__24312__$1,const_count,ic_count,pc_count){
return (function (_24315){var self__ = this;
var _24315__$1 = this;return self__.meta24314;
});})(map__24312,map__24312__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24312,map__24312__$1,const_count,ic_count,pc_count){
return (function (_24315,meta24314__$1){var self__ = this;
var _24315__$1 = this;return (new clustermap.components.map_report.t24313(self__.pc_count,self__.ic_count,self__.const_count,self__.map__24312,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta24314__$1));
});})(map__24312,map__24312__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24313 = ((function (map__24312,map__24312__$1,const_count,ic_count,pc_count){
return (function __GT_t24313(pc_count__$1,ic_count__$1,const_count__$1,map__24312__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta24314){return (new clustermap.components.map_report.t24313(pc_count__$1,ic_count__$1,const_count__$1,map__24312__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta24314));
});})(map__24312,map__24312__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24313(pc_count,ic_count,const_count,map__24312__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__24368 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24368__$1 = ((cljs.core.seq_QMARK_.call(null,map__24368))?cljs.core.apply.call(null,cljs.core.hash_map,map__24368):map__24368);var const_count = cljs.core.get.call(null,map__24368__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24368__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24368__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24369 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24369 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__24368,portfolio_company_report,site_stats,meta24370){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__24368 = map__24368;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta24370 = meta24370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24369.cljs$lang$type = true;
clustermap.components.map_report.t24369.cljs$lang$ctorStr = "clustermap.components.map-report/t24369";
clustermap.components.map_report.t24369.cljs$lang$ctorPrWriter = ((function (map__24368,map__24368__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24369");
});})(map__24368,map__24368__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24369.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24369.prototype.om$core$IRender$render$arity$1 = ((function (map__24368,map__24368__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs24374 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs24374))?sablono.interpreter.attributes.call(null,attrs24374):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24374))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24374)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs24375 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24375))?sablono.interpreter.attributes.call(null,attrs24375):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24375))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24376 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24376))?sablono.interpreter.attributes.call(null,attrs24376):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24376))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24376)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24375),(function (){var attrs24377 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24377))?sablono.interpreter.attributes.call(null,attrs24377):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24377))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24377)], null))));
})()], null))));
})(),(function (){var attrs24378 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24378))?sablono.interpreter.attributes.call(null,attrs24378):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24378))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24379 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24379))?sablono.interpreter.attributes.call(null,attrs24379):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24379))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24379)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24378),(function (){var attrs24380 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24380))?sablono.interpreter.attributes.call(null,attrs24380):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24380))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24380)], null))));
})()], null))));
})(),(function (){var attrs24381 = clustermap.formats.money.fmoney.call(null,(function (){var G__24391 = self__.site_stats;var G__24391__$1 = (((G__24391 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24391));var G__24391__$2 = (((G__24391__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24391__$1));return G__24391__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24381))?sablono.interpreter.attributes.call(null,attrs24381):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24381))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24381),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24386 = clustermap.formats.number.fnum.call(null,(function (){var G__24392 = self__.site_stats;var G__24392__$1 = (((G__24392 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24392));var G__24392__$2 = (((G__24392__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24392__$1));return G__24392__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24386))?sablono.interpreter.attributes.call(null,attrs24386):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24386))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24386),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24368,map__24368__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24369.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24368,map__24368__$1,const_count,ic_count,pc_count){
return (function (_24371){var self__ = this;
var _24371__$1 = this;return self__.meta24370;
});})(map__24368,map__24368__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24368,map__24368__$1,const_count,ic_count,pc_count){
return (function (_24371,meta24370__$1){var self__ = this;
var _24371__$1 = this;return (new clustermap.components.map_report.t24369(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__24368,self__.portfolio_company_report,self__.site_stats,meta24370__$1));
});})(map__24368,map__24368__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24369 = ((function (map__24368,map__24368__$1,const_count,ic_count,pc_count){
return (function __GT_t24369(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__24368__$2,portfolio_company_report__$1,site_stats__$1,meta24370){return (new clustermap.components.map_report.t24369(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__24368__$2,portfolio_company_report__$1,site_stats__$1,meta24370));
});})(map__24368,map__24368__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24369(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__24368__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__24418 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24418__$1 = ((cljs.core.seq_QMARK_.call(null,map__24418))?cljs.core.apply.call(null,cljs.core.hash_map,map__24418):map__24418);var const_count = cljs.core.get.call(null,map__24418__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24418__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24418__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24419 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24419 = (function (pc_count,path_fn,const_count,map__24418,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta24420){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.map__24418 = map__24418;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta24420 = meta24420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24419.cljs$lang$type = true;
clustermap.components.map_report.t24419.cljs$lang$ctorStr = "clustermap.components.map-report/t24419";
clustermap.components.map_report.t24419.cljs$lang$ctorPrWriter = ((function (map__24418,map__24418__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24419");
});})(map__24418,map__24418__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24419.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24419.prototype.om$core$IRender$render$arity$1 = ((function (map__24418,map__24418__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs24424 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs24424))?sablono.interpreter.attributes.call(null,attrs24424):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24424))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24424)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs24425 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24425))?sablono.interpreter.attributes.call(null,attrs24425):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24425))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24426 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24426))?sablono.interpreter.attributes.call(null,attrs24426):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24426))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24426)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24425),(function (){var attrs24427 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24427))?sablono.interpreter.attributes.call(null,attrs24427):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24427))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24427)], null))));
})()], null))));
})(),(function (){var attrs24428 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24428))?sablono.interpreter.attributes.call(null,attrs24428):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24428))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24429 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24429))?sablono.interpreter.attributes.call(null,attrs24429):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24429))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24429)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24428),(function (){var attrs24430 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24430))?sablono.interpreter.attributes.call(null,attrs24430):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24430))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24430)], null))));
})()], null))));
})(),(function (){var attrs24431 = clustermap.formats.money.fmoney.call(null,(function (){var G__24441 = self__.site_stats;var G__24441__$1 = (((G__24441 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24441));var G__24441__$2 = (((G__24441__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24441__$1));return G__24441__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24431))?sablono.interpreter.attributes.call(null,attrs24431):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24431))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24431),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24436 = clustermap.formats.number.fnum.call(null,(function (){var G__24442 = self__.site_stats;var G__24442__$1 = (((G__24442 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24442));var G__24442__$2 = (((G__24442__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24442__$1));return G__24442__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24436))?sablono.interpreter.attributes.call(null,attrs24436):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24436))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24436),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24418,map__24418__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24419.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24418,map__24418__$1,const_count,ic_count,pc_count){
return (function (_24421){var self__ = this;
var _24421__$1 = this;return self__.meta24420;
});})(map__24418,map__24418__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24418,map__24418__$1,const_count,ic_count,pc_count){
return (function (_24421,meta24420__$1){var self__ = this;
var _24421__$1 = this;return (new clustermap.components.map_report.t24419(self__.pc_count,self__.path_fn,self__.const_count,self__.map__24418,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta24420__$1));
});})(map__24418,map__24418__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24419 = ((function (map__24418,map__24418__$1,const_count,ic_count,pc_count){
return (function __GT_t24419(pc_count__$1,path_fn__$1,const_count__$1,map__24418__$2,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta24420){return (new clustermap.components.map_report.t24419(pc_count__$1,path_fn__$1,const_count__$1,map__24418__$2,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta24420));
});})(map__24418,map__24418__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24419(pc_count,path_fn,const_count,map__24418__$1,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__24472 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24472__$1 = ((cljs.core.seq_QMARK_.call(null,map__24472))?cljs.core.apply.call(null,cljs.core.hash_map,map__24472):map__24472);var const_count = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24472__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24473 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24473 = (function (pc_count,path_fn,const_count,ic_count,map__24472,constituency_report,comm,constituency,view_path_fn,site_stats,meta24474){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__24472 = map__24472;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta24474 = meta24474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24473.cljs$lang$type = true;
clustermap.components.map_report.t24473.cljs$lang$ctorStr = "clustermap.components.map-report/t24473";
clustermap.components.map_report.t24473.cljs$lang$ctorPrWriter = ((function (map__24472,map__24472__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24473");
});})(map__24472,map__24472__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24473.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24473.prototype.om$core$IRender$render$arity$1 = ((function (map__24472,map__24472__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs24478 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs24478))?sablono.interpreter.attributes.call(null,attrs24478):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24478))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24478),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs24483 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24483))?sablono.interpreter.attributes.call(null,attrs24483):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24483))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24484 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24484))?sablono.interpreter.attributes.call(null,attrs24484):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24484))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24484)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24483),(function (){var attrs24485 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24485))?sablono.interpreter.attributes.call(null,attrs24485):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24485))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24485)], null))));
})()], null))));
})(),(function (){var attrs24486 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24486))?sablono.interpreter.attributes.call(null,attrs24486):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24486))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24487 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24487))?sablono.interpreter.attributes.call(null,attrs24487):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24487))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24487)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24486),(function (){var attrs24488 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24488))?sablono.interpreter.attributes.call(null,attrs24488):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24488))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24488)], null))));
})()], null))));
})(),(function (){var attrs24489 = clustermap.formats.money.fmoney.call(null,(function (){var G__24499 = self__.site_stats;var G__24499__$1 = (((G__24499 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24499));var G__24499__$2 = (((G__24499__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24499__$1));return G__24499__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24489))?sablono.interpreter.attributes.call(null,attrs24489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24489))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24489),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24494 = clustermap.formats.number.fnum.call(null,(function (){var G__24500 = self__.site_stats;var G__24500__$1 = (((G__24500 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24500));var G__24500__$2 = (((G__24500__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24500__$1));return G__24500__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24494))?sablono.interpreter.attributes.call(null,attrs24494):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24494))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24494),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24472,map__24472__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24472,map__24472__$1,const_count,ic_count,pc_count){
return (function (_24475){var self__ = this;
var _24475__$1 = this;return self__.meta24474;
});})(map__24472,map__24472__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24472,map__24472__$1,const_count,ic_count,pc_count){
return (function (_24475,meta24474__$1){var self__ = this;
var _24475__$1 = this;return (new clustermap.components.map_report.t24473(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__24472,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta24474__$1));
});})(map__24472,map__24472__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24473 = ((function (map__24472,map__24472__$1,const_count,ic_count,pc_count){
return (function __GT_t24473(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__24472__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta24474){return (new clustermap.components.map_report.t24473(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__24472__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta24474));
});})(map__24472,map__24472__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24473(pc_count,path_fn,const_count,ic_count,map__24472__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__24505 = om.core.get_shared.call(null,owner);var map__24505__$1 = ((cljs.core.seq_QMARK_.call(null,map__24505))?cljs.core.apply.call(null,cljs.core.hash_map,map__24505):map__24505);var view_path_fn = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__24505__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__24506 = cljs.core._EQ__EQ_;var expr__24507 = type;if(cljs.core.truth_(pred__24506.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__24507)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__24506.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__24507)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__24506.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__24507)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
