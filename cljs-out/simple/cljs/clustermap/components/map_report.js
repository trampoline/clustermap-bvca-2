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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__25321 = site_stats;var G__25321__$1 = (((G__25321 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__25321));return G__25321__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__25322 = site_stats;var G__25322__$1 = (((G__25322 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__25322));return G__25322__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__25323 = site_stats;var G__25323__$1 = (((G__25323 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__25323));return G__25323__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__25355 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25355__$1 = ((cljs.core.seq_QMARK_.call(null,map__25355))?cljs.core.apply.call(null,cljs.core.hash_map,map__25355):map__25355);var const_count = cljs.core.get.call(null,map__25355__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25355__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25355__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25356 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25356 = (function (pc_count,ic_count,const_count,map__25355,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta25357){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__25355 = map__25355;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta25357 = meta25357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25356.cljs$lang$type = true;
clustermap.components.map_report.t25356.cljs$lang$ctorStr = "clustermap.components.map-report/t25356";
clustermap.components.map_report.t25356.cljs$lang$ctorPrWriter = ((function (map__25355,map__25355__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25356");
});})(map__25355,map__25355__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25356.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25356.prototype.om$core$IRender$render$arity$1 = ((function (map__25355,map__25355__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs25361 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25361))?sablono.interpreter.attributes.call(null,attrs25361):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25361))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25361),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs25366 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25366))?sablono.interpreter.attributes.call(null,attrs25366):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25366))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25366),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs25371 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25371))?sablono.interpreter.attributes.call(null,attrs25371):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25371))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25372 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25372))?sablono.interpreter.attributes.call(null,attrs25372):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25372))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25372)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25371),(function (){var attrs25373 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25373))?sablono.interpreter.attributes.call(null,attrs25373):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25373))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25373)], null))));
})()], null))));
})(),(function (){var attrs25374 = clustermap.formats.money.fmoney.call(null,(function (){var G__25384 = self__.site_stats;var G__25384__$1 = (((G__25384 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25384));var G__25384__$2 = (((G__25384__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25384__$1));return G__25384__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25374))?sablono.interpreter.attributes.call(null,attrs25374):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25374))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25374),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25379 = clustermap.formats.number.fnum.call(null,(function (){var G__25385 = self__.site_stats;var G__25385__$1 = (((G__25385 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25385));var G__25385__$2 = (((G__25385__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25385__$1));return G__25385__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25379))?sablono.interpreter.attributes.call(null,attrs25379):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25379))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25379),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25355,map__25355__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25356.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25355,map__25355__$1,const_count,ic_count,pc_count){
return (function (_25358){var self__ = this;
var _25358__$1 = this;return self__.meta25357;
});})(map__25355,map__25355__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25355,map__25355__$1,const_count,ic_count,pc_count){
return (function (_25358,meta25357__$1){var self__ = this;
var _25358__$1 = this;return (new clustermap.components.map_report.t25356(self__.pc_count,self__.ic_count,self__.const_count,self__.map__25355,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta25357__$1));
});})(map__25355,map__25355__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25356 = ((function (map__25355,map__25355__$1,const_count,ic_count,pc_count){
return (function __GT_t25356(pc_count__$1,ic_count__$1,const_count__$1,map__25355__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25357){return (new clustermap.components.map_report.t25356(pc_count__$1,ic_count__$1,const_count__$1,map__25355__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta25357));
});})(map__25355,map__25355__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25356(pc_count,ic_count,const_count,map__25355__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__25411 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25411__$1 = ((cljs.core.seq_QMARK_.call(null,map__25411))?cljs.core.apply.call(null,cljs.core.hash_map,map__25411):map__25411);var const_count = cljs.core.get.call(null,map__25411__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25411__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25411__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25412 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25412 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__25411,portfolio_company_report,site_stats,meta25413){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__25411 = map__25411;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta25413 = meta25413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25412.cljs$lang$type = true;
clustermap.components.map_report.t25412.cljs$lang$ctorStr = "clustermap.components.map-report/t25412";
clustermap.components.map_report.t25412.cljs$lang$ctorPrWriter = ((function (map__25411,map__25411__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25412");
});})(map__25411,map__25411__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25412.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25412.prototype.om$core$IRender$render$arity$1 = ((function (map__25411,map__25411__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs25417 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25417))?sablono.interpreter.attributes.call(null,attrs25417):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25417))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25417)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25418 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25418))?sablono.interpreter.attributes.call(null,attrs25418):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25418))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25419 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25419))?sablono.interpreter.attributes.call(null,attrs25419):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25419))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25419)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25418),(function (){var attrs25420 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25420))?sablono.interpreter.attributes.call(null,attrs25420):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25420))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25420)], null))));
})()], null))));
})(),(function (){var attrs25421 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25421))?sablono.interpreter.attributes.call(null,attrs25421):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25421))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25422 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25422))?sablono.interpreter.attributes.call(null,attrs25422):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25422))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25422)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25421),(function (){var attrs25423 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25423))?sablono.interpreter.attributes.call(null,attrs25423):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25423))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25423)], null))));
})()], null))));
})(),(function (){var attrs25424 = clustermap.formats.money.fmoney.call(null,(function (){var G__25434 = self__.site_stats;var G__25434__$1 = (((G__25434 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25434));var G__25434__$2 = (((G__25434__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25434__$1));return G__25434__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25424))?sablono.interpreter.attributes.call(null,attrs25424):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25424))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25424),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25429 = clustermap.formats.number.fnum.call(null,(function (){var G__25435 = self__.site_stats;var G__25435__$1 = (((G__25435 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25435));var G__25435__$2 = (((G__25435__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25435__$1));return G__25435__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25429))?sablono.interpreter.attributes.call(null,attrs25429):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25429))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25429),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25411,map__25411__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25411,map__25411__$1,const_count,ic_count,pc_count){
return (function (_25414){var self__ = this;
var _25414__$1 = this;return self__.meta25413;
});})(map__25411,map__25411__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25411,map__25411__$1,const_count,ic_count,pc_count){
return (function (_25414,meta25413__$1){var self__ = this;
var _25414__$1 = this;return (new clustermap.components.map_report.t25412(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__25411,self__.portfolio_company_report,self__.site_stats,meta25413__$1));
});})(map__25411,map__25411__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25412 = ((function (map__25411,map__25411__$1,const_count,ic_count,pc_count){
return (function __GT_t25412(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__25411__$2,portfolio_company_report__$1,site_stats__$1,meta25413){return (new clustermap.components.map_report.t25412(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__25411__$2,portfolio_company_report__$1,site_stats__$1,meta25413));
});})(map__25411,map__25411__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25412(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__25411__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__25461 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25461__$1 = ((cljs.core.seq_QMARK_.call(null,map__25461))?cljs.core.apply.call(null,cljs.core.hash_map,map__25461):map__25461);var const_count = cljs.core.get.call(null,map__25461__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25461__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25461__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25462 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25462 = (function (pc_count,map__25461,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta25463){
this.pc_count = pc_count;
this.map__25461 = map__25461;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25463 = meta25463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25462.cljs$lang$type = true;
clustermap.components.map_report.t25462.cljs$lang$ctorStr = "clustermap.components.map-report/t25462";
clustermap.components.map_report.t25462.cljs$lang$ctorPrWriter = ((function (map__25461,map__25461__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25462");
});})(map__25461,map__25461__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25462.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25462.prototype.om$core$IRender$render$arity$1 = ((function (map__25461,map__25461__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs25467 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25467))?sablono.interpreter.attributes.call(null,attrs25467):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25467))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25467)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25468 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25468))?sablono.interpreter.attributes.call(null,attrs25468):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25468))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25469 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25469))?sablono.interpreter.attributes.call(null,attrs25469):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25469))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25469)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25468),(function (){var attrs25470 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25470))?sablono.interpreter.attributes.call(null,attrs25470):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25470))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25470)], null))));
})()], null))));
})(),(function (){var attrs25471 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25471))?sablono.interpreter.attributes.call(null,attrs25471):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25471))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25472 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25472))?sablono.interpreter.attributes.call(null,attrs25472):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25472))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25472)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25471),(function (){var attrs25473 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25473))?sablono.interpreter.attributes.call(null,attrs25473):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25473))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25473)], null))));
})()], null))));
})(),(function (){var attrs25474 = clustermap.formats.money.fmoney.call(null,(function (){var G__25484 = self__.site_stats;var G__25484__$1 = (((G__25484 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25484));var G__25484__$2 = (((G__25484__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25484__$1));return G__25484__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25474))?sablono.interpreter.attributes.call(null,attrs25474):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25474))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25474),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25479 = clustermap.formats.number.fnum.call(null,(function (){var G__25485 = self__.site_stats;var G__25485__$1 = (((G__25485 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25485));var G__25485__$2 = (((G__25485__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25485__$1));return G__25485__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25479))?sablono.interpreter.attributes.call(null,attrs25479):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25479))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25479),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25461,map__25461__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25461,map__25461__$1,const_count,ic_count,pc_count){
return (function (_25464){var self__ = this;
var _25464__$1 = this;return self__.meta25463;
});})(map__25461,map__25461__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25461,map__25461__$1,const_count,ic_count,pc_count){
return (function (_25464,meta25463__$1){var self__ = this;
var _25464__$1 = this;return (new clustermap.components.map_report.t25462(self__.pc_count,self__.map__25461,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta25463__$1));
});})(map__25461,map__25461__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25462 = ((function (map__25461,map__25461__$1,const_count,ic_count,pc_count){
return (function __GT_t25462(pc_count__$1,map__25461__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25463){return (new clustermap.components.map_report.t25462(pc_count__$1,map__25461__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta25463));
});})(map__25461,map__25461__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25462(pc_count,map__25461__$1,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__25515 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__25515__$1 = ((cljs.core.seq_QMARK_.call(null,map__25515))?cljs.core.apply.call(null,cljs.core.hash_map,map__25515):map__25515);var const_count = cljs.core.get.call(null,map__25515__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__25515__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__25515__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t25516 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t25516 = (function (pc_count,map__25515,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta25517){
this.pc_count = pc_count;
this.map__25515 = map__25515;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta25517 = meta25517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t25516.cljs$lang$type = true;
clustermap.components.map_report.t25516.cljs$lang$ctorStr = "clustermap.components.map-report/t25516";
clustermap.components.map_report.t25516.cljs$lang$ctorPrWriter = ((function (map__25515,map__25515__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t25516");
});})(map__25515,map__25515__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25516.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t25516.prototype.om$core$IRender$render$arity$1 = ((function (map__25515,map__25515__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs25521 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25521))?sablono.interpreter.attributes.call(null,attrs25521):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25521))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25521),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs25526 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25526))?sablono.interpreter.attributes.call(null,attrs25526):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25526))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25527 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25527))?sablono.interpreter.attributes.call(null,attrs25527):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25527))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25527)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25526),(function (){var attrs25528 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25528))?sablono.interpreter.attributes.call(null,attrs25528):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25528))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25528)], null))));
})()], null))));
})(),(function (){var attrs25529 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25529))?sablono.interpreter.attributes.call(null,attrs25529):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25529))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs25530 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25530))?sablono.interpreter.attributes.call(null,attrs25530):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25530))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25530)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25529),(function (){var attrs25531 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs25531))?sablono.interpreter.attributes.call(null,attrs25531):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25531))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25531)], null))));
})()], null))));
})(),(function (){var attrs25532 = clustermap.formats.money.fmoney.call(null,(function (){var G__25542 = self__.site_stats;var G__25542__$1 = (((G__25542 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__25542));var G__25542__$2 = (((G__25542__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25542__$1));return G__25542__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25532))?sablono.interpreter.attributes.call(null,attrs25532):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25532))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25532),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs25537 = clustermap.formats.number.fnum.call(null,(function (){var G__25543 = self__.site_stats;var G__25543__$1 = (((G__25543 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__25543));var G__25543__$2 = (((G__25543__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__25543__$1));return G__25543__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs25537))?sablono.interpreter.attributes.call(null,attrs25537):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25537))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25537),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__25515,map__25515__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25515,map__25515__$1,const_count,ic_count,pc_count){
return (function (_25518){var self__ = this;
var _25518__$1 = this;return self__.meta25517;
});})(map__25515,map__25515__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t25516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25515,map__25515__$1,const_count,ic_count,pc_count){
return (function (_25518,meta25517__$1){var self__ = this;
var _25518__$1 = this;return (new clustermap.components.map_report.t25516(self__.pc_count,self__.map__25515,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta25517__$1));
});})(map__25515,map__25515__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t25516 = ((function (map__25515,map__25515__$1,const_count,ic_count,pc_count){
return (function __GT_t25516(pc_count__$1,map__25515__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25517){return (new clustermap.components.map_report.t25516(pc_count__$1,map__25515__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta25517));
});})(map__25515,map__25515__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t25516(pc_count,map__25515__$1,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__25548 = om.core.get_shared.call(null,owner);var map__25548__$1 = ((cljs.core.seq_QMARK_.call(null,map__25548))?cljs.core.apply.call(null,cljs.core.hash_map,map__25548):map__25548);var view_path_fn = cljs.core.get.call(null,map__25548__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__25548__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25548__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__25549 = cljs.core._EQ__EQ_;var expr__25550 = type;if(cljs.core.truth_(pred__25549.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__25550)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25549.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__25550)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__25549.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__25550)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
