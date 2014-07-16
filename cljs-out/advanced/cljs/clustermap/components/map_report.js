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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$964) : view_path_fn.call(null,cljs.core.constant$keyword$964))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$974,(function (){var G__36972 = site_stats;var G__36972__$1 = (((G__36972 == null))?null:cljs.core.constant$keyword$961.cljs$core$IFn$_invoke$arity$1(G__36972));return G__36972__$1;
})(),cljs.core.constant$keyword$975,(function (){var G__36973 = site_stats;var G__36973__$1 = (((G__36973 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__36973));return G__36973__$1;
})(),cljs.core.constant$keyword$976,(function (){var G__36974 = site_stats;var G__36974__$1 = (((G__36974 == null))?null:cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(G__36974));return G__36974__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__37006 = clustermap.components.map_report.type_counts(site_stats);var map__37006__$1 = ((cljs.core.seq_QMARK_(map__37006))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37006):map__37006);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,cljs.core.constant$keyword$976);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,cljs.core.constant$keyword$975);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37006__$1,cljs.core.constant$keyword$974);if(typeof clustermap.components.map_report.t37007 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37007 = (function (pc_count,ic_count,const_count,map__37006,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta37008){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__37006 = map__37006;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta37008 = meta37008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37007.cljs$lang$type = true;
clustermap.components.map_report.t37007.cljs$lang$ctorStr = "clustermap.components.map-report/t37007";
clustermap.components.map_report.t37007.cljs$lang$ctorPrWriter = ((function (map__37006,map__37006__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37007");
});})(map__37006,map__37006__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37007.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37007.prototype.om$core$IRender$render$arity$1 = ((function (map__37006,map__37006__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs37012 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37012))?sablono.interpreter.attributes(attrs37012):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37012))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37012),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs37017 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37017))?sablono.interpreter.attributes(attrs37017):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37017))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37017),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs37022 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37022))?sablono.interpreter.attributes(attrs37022):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37022))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37023 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37023))?sablono.interpreter.attributes(attrs37023):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37023))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37023)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37022),(function (){var attrs37024 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37024))?sablono.interpreter.attributes(attrs37024):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37024))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37024)], null))));
})()], null))));
})(),(function (){var attrs37025 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37035 = self__.site_stats;var G__37035__$1 = (((G__37035 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37035));var G__37035__$2 = (((G__37035__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37035__$1));return G__37035__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37035 = self__.site_stats;var G__37035__$1 = (((G__37035 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37035));var G__37035__$2 = (((G__37035__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37035__$1));return G__37035__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37025))?sablono.interpreter.attributes(attrs37025):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37025))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37025),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37030 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37036 = self__.site_stats;var G__37036__$1 = (((G__37036 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37036));var G__37036__$2 = (((G__37036__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37036__$1));return G__37036__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37036 = self__.site_stats;var G__37036__$1 = (((G__37036 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37036));var G__37036__$2 = (((G__37036__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37036__$1));return G__37036__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37030))?sablono.interpreter.attributes(attrs37030):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37030))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37030),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37006,map__37006__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37006,map__37006__$1,const_count,ic_count,pc_count){
return (function (_37009){var self__ = this;
var _37009__$1 = this;return self__.meta37008;
});})(map__37006,map__37006__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37006,map__37006__$1,const_count,ic_count,pc_count){
return (function (_37009,meta37008__$1){var self__ = this;
var _37009__$1 = this;return (new clustermap.components.map_report.t37007(self__.pc_count,self__.ic_count,self__.const_count,self__.map__37006,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta37008__$1));
});})(map__37006,map__37006__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37007 = ((function (map__37006,map__37006__$1,const_count,ic_count,pc_count){
return (function __GT_t37007(pc_count__$1,ic_count__$1,const_count__$1,map__37006__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37008){return (new clustermap.components.map_report.t37007(pc_count__$1,ic_count__$1,const_count__$1,map__37006__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37008));
});})(map__37006,map__37006__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37007(pc_count,ic_count,const_count,map__37006__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__37062 = clustermap.components.map_report.type_counts(site_stats);var map__37062__$1 = ((cljs.core.seq_QMARK_(map__37062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37062):map__37062);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37062__$1,cljs.core.constant$keyword$976);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37062__$1,cljs.core.constant$keyword$975);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37062__$1,cljs.core.constant$keyword$974);if(typeof clustermap.components.map_report.t37063 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37063 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__37062,comm,view_path_fn,portfolio_company_report,site_stats,meta37064){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__37062 = map__37062;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta37064 = meta37064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37063.cljs$lang$type = true;
clustermap.components.map_report.t37063.cljs$lang$ctorStr = "clustermap.components.map-report/t37063";
clustermap.components.map_report.t37063.cljs$lang$ctorPrWriter = ((function (map__37062,map__37062__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37063");
});})(map__37062,map__37062__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37063.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37063.prototype.om$core$IRender$render$arity$1 = ((function (map__37062,map__37062__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs37068 = cljs.core.constant$keyword$825.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37068))?sablono.interpreter.attributes(attrs37068):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37068))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37068)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37069 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37069))?sablono.interpreter.attributes(attrs37069):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37069))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37070 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37070))?sablono.interpreter.attributes(attrs37070):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37070))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37070)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37069),(function (){var attrs37071 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37071))?sablono.interpreter.attributes(attrs37071):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37071))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37071)], null))));
})()], null))));
})(),(function (){var attrs37072 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37072))?sablono.interpreter.attributes(attrs37072):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37072))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37073 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37073))?sablono.interpreter.attributes(attrs37073):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37073))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37073)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37072),(function (){var attrs37074 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37074))?sablono.interpreter.attributes(attrs37074):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37074))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37074)], null))));
})()], null))));
})(),(function (){var attrs37075 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37085 = self__.site_stats;var G__37085__$1 = (((G__37085 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37085));var G__37085__$2 = (((G__37085__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37085__$1));return G__37085__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37085 = self__.site_stats;var G__37085__$1 = (((G__37085 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37085));var G__37085__$2 = (((G__37085__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37085__$1));return G__37085__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37075))?sablono.interpreter.attributes(attrs37075):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37075))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37075),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37080 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37086 = self__.site_stats;var G__37086__$1 = (((G__37086 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37086));var G__37086__$2 = (((G__37086__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37086__$1));return G__37086__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37086 = self__.site_stats;var G__37086__$1 = (((G__37086 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37086));var G__37086__$2 = (((G__37086__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37086__$1));return G__37086__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37080))?sablono.interpreter.attributes(attrs37080):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37080))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37080),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37062,map__37062__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37062,map__37062__$1,const_count,ic_count,pc_count){
return (function (_37065){var self__ = this;
var _37065__$1 = this;return self__.meta37064;
});})(map__37062,map__37062__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37062,map__37062__$1,const_count,ic_count,pc_count){
return (function (_37065,meta37064__$1){var self__ = this;
var _37065__$1 = this;return (new clustermap.components.map_report.t37063(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__37062,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta37064__$1));
});})(map__37062,map__37062__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37063 = ((function (map__37062,map__37062__$1,const_count,ic_count,pc_count){
return (function __GT_t37063(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__37062__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta37064){return (new clustermap.components.map_report.t37063(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__37062__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta37064));
});})(map__37062,map__37062__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37063(pc_count,path_fn,const_count,portfolio_company,ic_count,map__37062__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__37112 = clustermap.components.map_report.type_counts(site_stats);var map__37112__$1 = ((cljs.core.seq_QMARK_(map__37112))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37112):map__37112);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,cljs.core.constant$keyword$976);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,cljs.core.constant$keyword$975);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37112__$1,cljs.core.constant$keyword$974);if(typeof clustermap.components.map_report.t37113 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37113 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__37112,site_stats,meta37114){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__37112 = map__37112;
this.site_stats = site_stats;
this.meta37114 = meta37114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37113.cljs$lang$type = true;
clustermap.components.map_report.t37113.cljs$lang$ctorStr = "clustermap.components.map-report/t37113";
clustermap.components.map_report.t37113.cljs$lang$ctorPrWriter = ((function (map__37112,map__37112__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37113");
});})(map__37112,map__37112__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37113.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37113.prototype.om$core$IRender$render$arity$1 = ((function (map__37112,map__37112__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs37118 = cljs.core.constant$keyword$825.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37118))?sablono.interpreter.attributes(attrs37118):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37118))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37118)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37119 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37119))?sablono.interpreter.attributes(attrs37119):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37119))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37120 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37120))?sablono.interpreter.attributes(attrs37120):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37120))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37120)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37119),(function (){var attrs37121 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37121))?sablono.interpreter.attributes(attrs37121):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37121))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37121)], null))));
})()], null))));
})(),(function (){var attrs37122 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37122))?sablono.interpreter.attributes(attrs37122):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37122))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37123 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37123))?sablono.interpreter.attributes(attrs37123):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37123))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37123)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37122),(function (){var attrs37124 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37124))?sablono.interpreter.attributes(attrs37124):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37124))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37124)], null))));
})()], null))));
})(),(function (){var attrs37125 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37135 = self__.site_stats;var G__37135__$1 = (((G__37135 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37135));var G__37135__$2 = (((G__37135__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37135__$1));return G__37135__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37135 = self__.site_stats;var G__37135__$1 = (((G__37135 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37135));var G__37135__$2 = (((G__37135__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37135__$1));return G__37135__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37125))?sablono.interpreter.attributes(attrs37125):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37125))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37125),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37130 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37136 = self__.site_stats;var G__37136__$1 = (((G__37136 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37136));var G__37136__$2 = (((G__37136__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37136__$1));return G__37136__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37136 = self__.site_stats;var G__37136__$1 = (((G__37136 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37136));var G__37136__$2 = (((G__37136__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37136__$1));return G__37136__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37130))?sablono.interpreter.attributes(attrs37130):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37130))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37130),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37112,map__37112__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37112,map__37112__$1,const_count,ic_count,pc_count){
return (function (_37115){var self__ = this;
var _37115__$1 = this;return self__.meta37114;
});})(map__37112,map__37112__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37112,map__37112__$1,const_count,ic_count,pc_count){
return (function (_37115,meta37114__$1){var self__ = this;
var _37115__$1 = this;return (new clustermap.components.map_report.t37113(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__37112,self__.site_stats,meta37114__$1));
});})(map__37112,map__37112__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37113 = ((function (map__37112,map__37112__$1,const_count,ic_count,pc_count){
return (function __GT_t37113(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__37112__$2,site_stats__$1,meta37114){return (new clustermap.components.map_report.t37113(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__37112__$2,site_stats__$1,meta37114));
});})(map__37112,map__37112__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37113(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__37112__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__37166 = clustermap.components.map_report.type_counts(site_stats);var map__37166__$1 = ((cljs.core.seq_QMARK_(map__37166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37166):map__37166);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37166__$1,cljs.core.constant$keyword$976);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37166__$1,cljs.core.constant$keyword$975);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37166__$1,cljs.core.constant$keyword$974);if(typeof clustermap.components.map_report.t37167 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37167 = (function (pc_count,map__37166,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta37168){
this.pc_count = pc_count;
this.map__37166 = map__37166;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta37168 = meta37168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37167.cljs$lang$type = true;
clustermap.components.map_report.t37167.cljs$lang$ctorStr = "clustermap.components.map-report/t37167";
clustermap.components.map_report.t37167.cljs$lang$ctorPrWriter = ((function (map__37166,map__37166__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37167");
});})(map__37166,map__37166__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37167.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37167.prototype.om$core$IRender$render$arity$1 = ((function (map__37166,map__37166__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs37172 = cljs.core.constant$keyword$825.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37172))?sablono.interpreter.attributes(attrs37172):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37172))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$977.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$977.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37172),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$977.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$977.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37177 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37177))?sablono.interpreter.attributes(attrs37177):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37177))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37178 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37178))?sablono.interpreter.attributes(attrs37178):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37178))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37178)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37177),(function (){var attrs37179 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37179))?sablono.interpreter.attributes(attrs37179):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37179))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37179)], null))));
})()], null))));
})(),(function (){var attrs37180 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37180))?sablono.interpreter.attributes(attrs37180):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37180))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37181 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37181))?sablono.interpreter.attributes(attrs37181):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37181))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37181)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37180),(function (){var attrs37182 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37182))?sablono.interpreter.attributes(attrs37182):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37182))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37182)], null))));
})()], null))));
})(),(function (){var attrs37183 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37193 = self__.site_stats;var G__37193__$1 = (((G__37193 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37193));var G__37193__$2 = (((G__37193__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37193__$1));return G__37193__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37193 = self__.site_stats;var G__37193__$1 = (((G__37193 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__37193));var G__37193__$2 = (((G__37193__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37193__$1));return G__37193__$2;
})(),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37183))?sablono.interpreter.attributes(attrs37183):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37183))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37183),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37188 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37194 = self__.site_stats;var G__37194__$1 = (((G__37194 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37194));var G__37194__$2 = (((G__37194__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37194__$1));return G__37194__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37194 = self__.site_stats;var G__37194__$1 = (((G__37194 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__37194));var G__37194__$2 = (((G__37194__$1 == null))?null:cljs.core.constant$keyword$919.cljs$core$IFn$_invoke$arity$1(G__37194__$1));return G__37194__$2;
})(),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37188))?sablono.interpreter.attributes(attrs37188):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37188))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37188),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37166,map__37166__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37166,map__37166__$1,const_count,ic_count,pc_count){
return (function (_37169){var self__ = this;
var _37169__$1 = this;return self__.meta37168;
});})(map__37166,map__37166__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37166,map__37166__$1,const_count,ic_count,pc_count){
return (function (_37169,meta37168__$1){var self__ = this;
var _37169__$1 = this;return (new clustermap.components.map_report.t37167(self__.pc_count,self__.map__37166,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta37168__$1));
});})(map__37166,map__37166__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37167 = ((function (map__37166,map__37166__$1,const_count,ic_count,pc_count){
return (function __GT_t37167(pc_count__$1,map__37166__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta37168){return (new clustermap.components.map_report.t37167(pc_count__$1,map__37166__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta37168));
});})(map__37166,map__37166__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37167(pc_count,map__37166__$1,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__37199 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37199__$1 = ((cljs.core.seq_QMARK_(map__37199))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37199):map__37199);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,cljs.core.constant$keyword$979);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,cljs.core.constant$keyword$878);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,cljs.core.constant$keyword$888);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$980);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$942,cljs.core.constant$keyword$795], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$942,cljs.core.constant$keyword$826], null));var site_stats = cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(data);var pred__37200 = cljs.core._EQ__EQ_;var expr__37201 = type;if(cljs.core.truth_((pred__37200.cljs$core$IFn$_invoke$arity$2 ? pred__37200.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$880,expr__37201) : pred__37200.call(null,cljs.core.constant$keyword$880,expr__37201))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__37200.cljs$core$IFn$_invoke$arity$2 ? pred__37200.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$881,expr__37201) : pred__37200.call(null,cljs.core.constant$keyword$881,expr__37201))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__37200.cljs$core$IFn$_invoke$arity$2 ? pred__37200.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$883,expr__37201) : pred__37200.call(null,cljs.core.constant$keyword$883,expr__37201))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,shared,cljs.core.constant$keyword$876,document.getElementById(elem_id)], null));
});
