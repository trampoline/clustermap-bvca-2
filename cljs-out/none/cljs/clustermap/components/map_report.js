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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__49191 = site_stats;var G__49191__$1 = (((G__49191 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__49191));return G__49191__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__49192 = site_stats;var G__49192__$1 = (((G__49192 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__49192));return G__49192__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__49193 = site_stats;var G__49193__$1 = (((G__49193 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__49193));return G__49193__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__49225 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49225__$1 = ((cljs.core.seq_QMARK_.call(null,map__49225))?cljs.core.apply.call(null,cljs.core.hash_map,map__49225):map__49225);var const_count = cljs.core.get.call(null,map__49225__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49225__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49225__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49226 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49226 = (function (pc_count,ic_count,const_count,map__49225,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta49227){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__49225 = map__49225;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta49227 = meta49227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49226.cljs$lang$type = true;
clustermap.components.map_report.t49226.cljs$lang$ctorStr = "clustermap.components.map-report/t49226";
clustermap.components.map_report.t49226.cljs$lang$ctorPrWriter = ((function (map__49225,map__49225__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49226");
});})(map__49225,map__49225__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49226.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49226.prototype.om$core$IRender$render$arity$1 = ((function (map__49225,map__49225__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs49231 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49231))?sablono.interpreter.attributes.call(null,attrs49231):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49231))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49231),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs49236 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49236))?sablono.interpreter.attributes.call(null,attrs49236):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49236))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49236),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs49241 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49241))?sablono.interpreter.attributes.call(null,attrs49241):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49241))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49242 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49242))?sablono.interpreter.attributes.call(null,attrs49242):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49242))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49242)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49241),(function (){var attrs49243 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49243))?sablono.interpreter.attributes.call(null,attrs49243):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49243))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49243)], null))));
})()], null))));
})(),(function (){var attrs49244 = clustermap.formats.money.fmoney.call(null,(function (){var G__49254 = self__.site_stats;var G__49254__$1 = (((G__49254 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49254));var G__49254__$2 = (((G__49254__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49254__$1));return G__49254__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49244))?sablono.interpreter.attributes.call(null,attrs49244):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49244))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49244),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49249 = clustermap.formats.number.fnum.call(null,(function (){var G__49255 = self__.site_stats;var G__49255__$1 = (((G__49255 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49255));var G__49255__$2 = (((G__49255__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49255__$1));return G__49255__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49249))?sablono.interpreter.attributes.call(null,attrs49249):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49249))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49249),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49225,map__49225__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49225,map__49225__$1,const_count,ic_count,pc_count){
return (function (_49228){var self__ = this;
var _49228__$1 = this;return self__.meta49227;
});})(map__49225,map__49225__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49225,map__49225__$1,const_count,ic_count,pc_count){
return (function (_49228,meta49227__$1){var self__ = this;
var _49228__$1 = this;return (new clustermap.components.map_report.t49226(self__.pc_count,self__.ic_count,self__.const_count,self__.map__49225,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta49227__$1));
});})(map__49225,map__49225__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49226 = ((function (map__49225,map__49225__$1,const_count,ic_count,pc_count){
return (function __GT_t49226(pc_count__$1,ic_count__$1,const_count__$1,map__49225__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta49227){return (new clustermap.components.map_report.t49226(pc_count__$1,ic_count__$1,const_count__$1,map__49225__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta49227));
});})(map__49225,map__49225__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49226(pc_count,ic_count,const_count,map__49225__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__49281 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49281__$1 = ((cljs.core.seq_QMARK_.call(null,map__49281))?cljs.core.apply.call(null,cljs.core.hash_map,map__49281):map__49281);var const_count = cljs.core.get.call(null,map__49281__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49281__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49281__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49282 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49282 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__49281,portfolio_company_report,site_stats,meta49283){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__49281 = map__49281;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta49283 = meta49283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49282.cljs$lang$type = true;
clustermap.components.map_report.t49282.cljs$lang$ctorStr = "clustermap.components.map-report/t49282";
clustermap.components.map_report.t49282.cljs$lang$ctorPrWriter = ((function (map__49281,map__49281__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49282");
});})(map__49281,map__49281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49282.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49282.prototype.om$core$IRender$render$arity$1 = ((function (map__49281,map__49281__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs49287 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs49287))?sablono.interpreter.attributes.call(null,attrs49287):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49287))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49287)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs49288 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49288))?sablono.interpreter.attributes.call(null,attrs49288):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49288))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49289 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49289))?sablono.interpreter.attributes.call(null,attrs49289):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49289))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49289)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49288),(function (){var attrs49290 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49290))?sablono.interpreter.attributes.call(null,attrs49290):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49290))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49290)], null))));
})()], null))));
})(),(function (){var attrs49291 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49291))?sablono.interpreter.attributes.call(null,attrs49291):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49291))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49292 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49292))?sablono.interpreter.attributes.call(null,attrs49292):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49292))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49292)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49291),(function (){var attrs49293 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49293))?sablono.interpreter.attributes.call(null,attrs49293):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49293))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49293)], null))));
})()], null))));
})(),(function (){var attrs49294 = clustermap.formats.money.fmoney.call(null,(function (){var G__49304 = self__.site_stats;var G__49304__$1 = (((G__49304 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49304));var G__49304__$2 = (((G__49304__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49304__$1));return G__49304__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49294))?sablono.interpreter.attributes.call(null,attrs49294):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49294))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49294),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49299 = clustermap.formats.number.fnum.call(null,(function (){var G__49305 = self__.site_stats;var G__49305__$1 = (((G__49305 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49305));var G__49305__$2 = (((G__49305__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49305__$1));return G__49305__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49299))?sablono.interpreter.attributes.call(null,attrs49299):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49299))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49299),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49281,map__49281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49282.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49281,map__49281__$1,const_count,ic_count,pc_count){
return (function (_49284){var self__ = this;
var _49284__$1 = this;return self__.meta49283;
});})(map__49281,map__49281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49281,map__49281__$1,const_count,ic_count,pc_count){
return (function (_49284,meta49283__$1){var self__ = this;
var _49284__$1 = this;return (new clustermap.components.map_report.t49282(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__49281,self__.portfolio_company_report,self__.site_stats,meta49283__$1));
});})(map__49281,map__49281__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49282 = ((function (map__49281,map__49281__$1,const_count,ic_count,pc_count){
return (function __GT_t49282(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__49281__$2,portfolio_company_report__$1,site_stats__$1,meta49283){return (new clustermap.components.map_report.t49282(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__49281__$2,portfolio_company_report__$1,site_stats__$1,meta49283));
});})(map__49281,map__49281__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49282(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__49281__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__49331 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49331__$1 = ((cljs.core.seq_QMARK_.call(null,map__49331))?cljs.core.apply.call(null,cljs.core.hash_map,map__49331):map__49331);var const_count = cljs.core.get.call(null,map__49331__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49331__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49331__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49332 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49332 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__49331,comm,investor_company_report,view_path_fn,site_stats,meta49333){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__49331 = map__49331;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta49333 = meta49333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49332.cljs$lang$type = true;
clustermap.components.map_report.t49332.cljs$lang$ctorStr = "clustermap.components.map-report/t49332";
clustermap.components.map_report.t49332.cljs$lang$ctorPrWriter = ((function (map__49331,map__49331__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49332");
});})(map__49331,map__49331__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49332.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49332.prototype.om$core$IRender$render$arity$1 = ((function (map__49331,map__49331__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs49337 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs49337))?sablono.interpreter.attributes.call(null,attrs49337):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49337))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49337)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs49338 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49338))?sablono.interpreter.attributes.call(null,attrs49338):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49338))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49339 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49339))?sablono.interpreter.attributes.call(null,attrs49339):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49339))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49339)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49338),(function (){var attrs49340 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49340))?sablono.interpreter.attributes.call(null,attrs49340):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49340))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49340)], null))));
})()], null))));
})(),(function (){var attrs49341 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49341))?sablono.interpreter.attributes.call(null,attrs49341):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49341))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49342 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49342))?sablono.interpreter.attributes.call(null,attrs49342):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49342))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49342)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49341),(function (){var attrs49343 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49343))?sablono.interpreter.attributes.call(null,attrs49343):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49343))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49343)], null))));
})()], null))));
})(),(function (){var attrs49344 = clustermap.formats.money.fmoney.call(null,(function (){var G__49354 = self__.site_stats;var G__49354__$1 = (((G__49354 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49354));var G__49354__$2 = (((G__49354__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49354__$1));return G__49354__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49344))?sablono.interpreter.attributes.call(null,attrs49344):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49344))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49344),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49349 = clustermap.formats.number.fnum.call(null,(function (){var G__49355 = self__.site_stats;var G__49355__$1 = (((G__49355 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49355));var G__49355__$2 = (((G__49355__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49355__$1));return G__49355__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49349))?sablono.interpreter.attributes.call(null,attrs49349):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49349))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49349),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49331,map__49331__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49331,map__49331__$1,const_count,ic_count,pc_count){
return (function (_49334){var self__ = this;
var _49334__$1 = this;return self__.meta49333;
});})(map__49331,map__49331__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49331,map__49331__$1,const_count,ic_count,pc_count){
return (function (_49334,meta49333__$1){var self__ = this;
var _49334__$1 = this;return (new clustermap.components.map_report.t49332(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__49331,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta49333__$1));
});})(map__49331,map__49331__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49332 = ((function (map__49331,map__49331__$1,const_count,ic_count,pc_count){
return (function __GT_t49332(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__49331__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta49333){return (new clustermap.components.map_report.t49332(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__49331__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta49333));
});})(map__49331,map__49331__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49332(pc_count,path_fn,const_count,investor_company,ic_count,map__49331__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__49385 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__49385__$1 = ((cljs.core.seq_QMARK_.call(null,map__49385))?cljs.core.apply.call(null,cljs.core.hash_map,map__49385):map__49385);var const_count = cljs.core.get.call(null,map__49385__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__49385__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__49385__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t49386 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t49386 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__49385,meta49387){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.map__49385 = map__49385;
this.meta49387 = meta49387;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t49386.cljs$lang$type = true;
clustermap.components.map_report.t49386.cljs$lang$ctorStr = "clustermap.components.map-report/t49386";
clustermap.components.map_report.t49386.cljs$lang$ctorPrWriter = ((function (map__49385,map__49385__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t49386");
});})(map__49385,map__49385__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49386.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t49386.prototype.om$core$IRender$render$arity$1 = ((function (map__49385,map__49385__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs49391 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs49391))?sablono.interpreter.attributes.call(null,attrs49391):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49391))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49391),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs49396 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49396))?sablono.interpreter.attributes.call(null,attrs49396):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49396))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49397 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49397))?sablono.interpreter.attributes.call(null,attrs49397):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49397))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49397)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49396),(function (){var attrs49398 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49398))?sablono.interpreter.attributes.call(null,attrs49398):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49398))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49398)], null))));
})()], null))));
})(),(function (){var attrs49399 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49399))?sablono.interpreter.attributes.call(null,attrs49399):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49399))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs49400 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49400))?sablono.interpreter.attributes.call(null,attrs49400):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49400))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49400)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49399),(function (){var attrs49401 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs49401))?sablono.interpreter.attributes.call(null,attrs49401):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49401))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49401)], null))));
})()], null))));
})(),(function (){var attrs49402 = clustermap.formats.money.fmoney.call(null,(function (){var G__49412 = self__.site_stats;var G__49412__$1 = (((G__49412 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__49412));var G__49412__$2 = (((G__49412__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49412__$1));return G__49412__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49402))?sablono.interpreter.attributes.call(null,attrs49402):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49402))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49402),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs49407 = clustermap.formats.number.fnum.call(null,(function (){var G__49413 = self__.site_stats;var G__49413__$1 = (((G__49413 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__49413));var G__49413__$2 = (((G__49413__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__49413__$1));return G__49413__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs49407))?sablono.interpreter.attributes.call(null,attrs49407):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49407))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49407),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__49385,map__49385__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49386.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49385,map__49385__$1,const_count,ic_count,pc_count){
return (function (_49388){var self__ = this;
var _49388__$1 = this;return self__.meta49387;
});})(map__49385,map__49385__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t49386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49385,map__49385__$1,const_count,ic_count,pc_count){
return (function (_49388,meta49387__$1){var self__ = this;
var _49388__$1 = this;return (new clustermap.components.map_report.t49386(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,self__.map__49385,meta49387__$1));
});})(map__49385,map__49385__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t49386 = ((function (map__49385,map__49385__$1,const_count,ic_count,pc_count){
return (function __GT_t49386(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__49385__$2,meta49387){return (new clustermap.components.map_report.t49386(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__49385__$2,meta49387));
});})(map__49385,map__49385__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t49386(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__49385__$1,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__49418 = om.core.get_shared.call(null,owner);var map__49418__$1 = ((cljs.core.seq_QMARK_.call(null,map__49418))?cljs.core.apply.call(null,cljs.core.hash_map,map__49418):map__49418);var view_path_fn = cljs.core.get.call(null,map__49418__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__49418__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__49418__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__49419 = cljs.core._EQ__EQ_;var expr__49420 = type;if(cljs.core.truth_(pred__49419.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__49420)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__49419.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__49420)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__49419.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__49420)))
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