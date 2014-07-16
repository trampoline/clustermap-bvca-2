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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13341 = site_stats;var G__13341__$1 = (((G__13341 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13341));return G__13341__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13342 = site_stats;var G__13342__$1 = (((G__13342 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13342));return G__13342__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13343 = site_stats;var G__13343__$1 = (((G__13343 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13343));return G__13343__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13375 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13375__$1 = ((cljs.core.seq_QMARK_.call(null,map__13375))?cljs.core.apply.call(null,cljs.core.hash_map,map__13375):map__13375);var const_count = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13375__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13376 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13376 = (function (pc_count,ic_count,const_count,map__13375,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13377){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13375 = map__13375;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13377 = meta13377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13376.cljs$lang$type = true;
clustermap.components.map_report.t13376.cljs$lang$ctorStr = "clustermap.components.map-report/t13376";
clustermap.components.map_report.t13376.cljs$lang$ctorPrWriter = ((function (map__13375,map__13375__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13376");
});})(map__13375,map__13375__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13376.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13376.prototype.om$core$IRender$render$arity$1 = ((function (map__13375,map__13375__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13381 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13381))?sablono.interpreter.attributes.call(null,attrs13381):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13381))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13381),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13386 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13386))?sablono.interpreter.attributes.call(null,attrs13386):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13386))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13386),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13391 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13391))?sablono.interpreter.attributes.call(null,attrs13391):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13391))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13392 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13392))?sablono.interpreter.attributes.call(null,attrs13392):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13392))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13392)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13391),(function (){var attrs13393 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13393))?sablono.interpreter.attributes.call(null,attrs13393):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13393))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13393)], null))));
})()], null))));
})(),(function (){var attrs13394 = clustermap.formats.money.fmoney.call(null,(function (){var G__13404 = self__.site_stats;var G__13404__$1 = (((G__13404 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13404));var G__13404__$2 = (((G__13404__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13404__$1));return G__13404__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13394))?sablono.interpreter.attributes.call(null,attrs13394):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13394))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13394),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13399 = clustermap.formats.number.fnum.call(null,(function (){var G__13405 = self__.site_stats;var G__13405__$1 = (((G__13405 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13405));var G__13405__$2 = (((G__13405__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13405__$1));return G__13405__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13399))?sablono.interpreter.attributes.call(null,attrs13399):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13399))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13399),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13375,map__13375__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13375,map__13375__$1,const_count,ic_count,pc_count){
return (function (_13378){var self__ = this;
var _13378__$1 = this;return self__.meta13377;
});})(map__13375,map__13375__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13375,map__13375__$1,const_count,ic_count,pc_count){
return (function (_13378,meta13377__$1){var self__ = this;
var _13378__$1 = this;return (new clustermap.components.map_report.t13376(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13375,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13377__$1));
});})(map__13375,map__13375__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13376 = ((function (map__13375,map__13375__$1,const_count,ic_count,pc_count){
return (function __GT_t13376(pc_count__$1,ic_count__$1,const_count__$1,map__13375__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13377){return (new clustermap.components.map_report.t13376(pc_count__$1,ic_count__$1,const_count__$1,map__13375__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13377));
});})(map__13375,map__13375__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13376(pc_count,ic_count,const_count,map__13375__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13431 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13431__$1 = ((cljs.core.seq_QMARK_.call(null,map__13431))?cljs.core.apply.call(null,cljs.core.hash_map,map__13431):map__13431);var const_count = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13432 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13432 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__13431,view_path_fn,portfolio_company_report,site_stats,meta13433){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__13431 = map__13431;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13433 = meta13433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13432.cljs$lang$type = true;
clustermap.components.map_report.t13432.cljs$lang$ctorStr = "clustermap.components.map-report/t13432";
clustermap.components.map_report.t13432.cljs$lang$ctorPrWriter = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13432");
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13432.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13432.prototype.om$core$IRender$render$arity$1 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13437 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13437))?sablono.interpreter.attributes.call(null,attrs13437):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13437))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13437)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13438 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13438))?sablono.interpreter.attributes.call(null,attrs13438):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13438))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13439 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13439))?sablono.interpreter.attributes.call(null,attrs13439):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13439))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13439)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13438),(function (){var attrs13440 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13440))?sablono.interpreter.attributes.call(null,attrs13440):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13440)], null))));
})()], null))));
})(),(function (){var attrs13441 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13441))?sablono.interpreter.attributes.call(null,attrs13441):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13441))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13442 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13442))?sablono.interpreter.attributes.call(null,attrs13442):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13442))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13442)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13441),(function (){var attrs13443 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13443))?sablono.interpreter.attributes.call(null,attrs13443):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13443))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13443)], null))));
})()], null))));
})(),(function (){var attrs13444 = clustermap.formats.money.fmoney.call(null,(function (){var G__13454 = self__.site_stats;var G__13454__$1 = (((G__13454 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13454));var G__13454__$2 = (((G__13454__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13454__$1));return G__13454__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13444))?sablono.interpreter.attributes.call(null,attrs13444):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13444))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13444),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13449 = clustermap.formats.number.fnum.call(null,(function (){var G__13455 = self__.site_stats;var G__13455__$1 = (((G__13455 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13455));var G__13455__$2 = (((G__13455__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13455__$1));return G__13455__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13449))?sablono.interpreter.attributes.call(null,attrs13449):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13449))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13449),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (_13434){var self__ = this;
var _13434__$1 = this;return self__.meta13433;
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (_13434,meta13433__$1){var self__ = this;
var _13434__$1 = this;return (new clustermap.components.map_report.t13432(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.map__13431,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta13433__$1));
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13432 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function __GT_t13432(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__13431__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13433){return (new clustermap.components.map_report.t13432(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__13431__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13433));
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13432(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__13431__$1,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13481 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13481__$1 = ((cljs.core.seq_QMARK_.call(null,map__13481))?cljs.core.apply.call(null,cljs.core.hash_map,map__13481):map__13481);var const_count = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13482 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13482 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__13481,comm,investor_company_report,view_path_fn,site_stats,meta13483){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__13481 = map__13481;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13483 = meta13483;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13482.cljs$lang$type = true;
clustermap.components.map_report.t13482.cljs$lang$ctorStr = "clustermap.components.map-report/t13482";
clustermap.components.map_report.t13482.cljs$lang$ctorPrWriter = ((function (map__13481,map__13481__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13482");
});})(map__13481,map__13481__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13482.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13482.prototype.om$core$IRender$render$arity$1 = ((function (map__13481,map__13481__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13487 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13487))?sablono.interpreter.attributes.call(null,attrs13487):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13487))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13487)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13488 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13488))?sablono.interpreter.attributes.call(null,attrs13488):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13488))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13489 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13489))?sablono.interpreter.attributes.call(null,attrs13489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13489))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13489)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13488),(function (){var attrs13490 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13490))?sablono.interpreter.attributes.call(null,attrs13490):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13490))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13490)], null))));
})()], null))));
})(),(function (){var attrs13491 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13491))?sablono.interpreter.attributes.call(null,attrs13491):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13491))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13492 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13492))?sablono.interpreter.attributes.call(null,attrs13492):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13492))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13492)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13491),(function (){var attrs13493 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13493))?sablono.interpreter.attributes.call(null,attrs13493):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13493))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13493)], null))));
})()], null))));
})(),(function (){var attrs13494 = clustermap.formats.money.fmoney.call(null,(function (){var G__13504 = self__.site_stats;var G__13504__$1 = (((G__13504 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13504));var G__13504__$2 = (((G__13504__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13504__$1));return G__13504__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13494))?sablono.interpreter.attributes.call(null,attrs13494):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13494))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13494),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13499 = clustermap.formats.number.fnum.call(null,(function (){var G__13505 = self__.site_stats;var G__13505__$1 = (((G__13505 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13505));var G__13505__$2 = (((G__13505__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13505__$1));return G__13505__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13499))?sablono.interpreter.attributes.call(null,attrs13499):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13499))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13499),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13481,map__13481__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13481,map__13481__$1,const_count,ic_count,pc_count){
return (function (_13484){var self__ = this;
var _13484__$1 = this;return self__.meta13483;
});})(map__13481,map__13481__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13481,map__13481__$1,const_count,ic_count,pc_count){
return (function (_13484,meta13483__$1){var self__ = this;
var _13484__$1 = this;return (new clustermap.components.map_report.t13482(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__13481,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta13483__$1));
});})(map__13481,map__13481__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13482 = ((function (map__13481,map__13481__$1,const_count,ic_count,pc_count){
return (function __GT_t13482(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13481__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13483){return (new clustermap.components.map_report.t13482(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13481__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13483));
});})(map__13481,map__13481__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13482(pc_count,path_fn,const_count,investor_company,ic_count,map__13481__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13535 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13535__$1 = ((cljs.core.seq_QMARK_.call(null,map__13535))?cljs.core.apply.call(null,cljs.core.hash_map,map__13535):map__13535);var const_count = cljs.core.get.call(null,map__13535__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13535__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13535__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13536 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13536 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__13535,view_path_fn,site_stats,meta13537){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.map__13535 = map__13535;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13537 = meta13537;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13536.cljs$lang$type = true;
clustermap.components.map_report.t13536.cljs$lang$ctorStr = "clustermap.components.map-report/t13536";
clustermap.components.map_report.t13536.cljs$lang$ctorPrWriter = ((function (map__13535,map__13535__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13536");
});})(map__13535,map__13535__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13536.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13536.prototype.om$core$IRender$render$arity$1 = ((function (map__13535,map__13535__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13541 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13541))?sablono.interpreter.attributes.call(null,attrs13541):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13541))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13541),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13546 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13546))?sablono.interpreter.attributes.call(null,attrs13546):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13546))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13547 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13547))?sablono.interpreter.attributes.call(null,attrs13547):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13547))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13547)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13546),(function (){var attrs13548 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13548))?sablono.interpreter.attributes.call(null,attrs13548):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13548))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13548)], null))));
})()], null))));
})(),(function (){var attrs13549 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13549))?sablono.interpreter.attributes.call(null,attrs13549):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13549))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13550 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13550))?sablono.interpreter.attributes.call(null,attrs13550):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13550))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13550)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13549),(function (){var attrs13551 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13551))?sablono.interpreter.attributes.call(null,attrs13551):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13551))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13551)], null))));
})()], null))));
})(),(function (){var attrs13552 = clustermap.formats.money.fmoney.call(null,(function (){var G__13562 = self__.site_stats;var G__13562__$1 = (((G__13562 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13562));var G__13562__$2 = (((G__13562__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13562__$1));return G__13562__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13552))?sablono.interpreter.attributes.call(null,attrs13552):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13552))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13552),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13557 = clustermap.formats.number.fnum.call(null,(function (){var G__13563 = self__.site_stats;var G__13563__$1 = (((G__13563 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13563));var G__13563__$2 = (((G__13563__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13563__$1));return G__13563__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13557))?sablono.interpreter.attributes.call(null,attrs13557):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13557))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13557),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13535,map__13535__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13536.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13535,map__13535__$1,const_count,ic_count,pc_count){
return (function (_13538){var self__ = this;
var _13538__$1 = this;return self__.meta13537;
});})(map__13535,map__13535__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13535,map__13535__$1,const_count,ic_count,pc_count){
return (function (_13538,meta13537__$1){var self__ = this;
var _13538__$1 = this;return (new clustermap.components.map_report.t13536(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.map__13535,self__.view_path_fn,self__.site_stats,meta13537__$1));
});})(map__13535,map__13535__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13536 = ((function (map__13535,map__13535__$1,const_count,ic_count,pc_count){
return (function __GT_t13536(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__13535__$2,view_path_fn__$1,site_stats__$1,meta13537){return (new clustermap.components.map_report.t13536(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__13535__$2,view_path_fn__$1,site_stats__$1,meta13537));
});})(map__13535,map__13535__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13536(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__13535__$1,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13568 = om.core.get_shared.call(null,owner);var map__13568__$1 = ((cljs.core.seq_QMARK_.call(null,map__13568))?cljs.core.apply.call(null,cljs.core.hash_map,map__13568):map__13568);var view_path_fn = cljs.core.get.call(null,map__13568__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13568__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13568__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13569 = cljs.core._EQ__EQ_;var expr__13570 = type;if(cljs.core.truth_(pred__13569.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13570)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13569.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13570)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13569.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13570)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
