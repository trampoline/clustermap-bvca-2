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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$979) : view_path_fn.call(null,cljs.core.constant$keyword$979))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$989,(function (){var G__38017 = site_stats;var G__38017__$1 = (((G__38017 == null))?null:cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(G__38017));return G__38017__$1;
})(),cljs.core.constant$keyword$990,(function (){var G__38018 = site_stats;var G__38018__$1 = (((G__38018 == null))?null:cljs.core.constant$keyword$973.cljs$core$IFn$_invoke$arity$1(G__38018));return G__38018__$1;
})(),cljs.core.constant$keyword$991,(function (){var G__38019 = site_stats;var G__38019__$1 = (((G__38019 == null))?null:cljs.core.constant$keyword$972.cljs$core$IFn$_invoke$arity$1(G__38019));return G__38019__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__38051 = clustermap.components.map_report.type_counts(site_stats);var map__38051__$1 = ((cljs.core.seq_QMARK_(map__38051))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38051):map__38051);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,cljs.core.constant$keyword$991);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,cljs.core.constant$keyword$990);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,cljs.core.constant$keyword$989);if(typeof clustermap.components.map_report.t38052 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38052 = (function (pc_count,ic_count,const_count,map__38051,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta38053){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__38051 = map__38051;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta38053 = meta38053;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38052.cljs$lang$type = true;
clustermap.components.map_report.t38052.cljs$lang$ctorStr = "clustermap.components.map-report/t38052";
clustermap.components.map_report.t38052.cljs$lang$ctorPrWriter = ((function (map__38051,map__38051__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t38052");
});})(map__38051,map__38051__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38052.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38052.prototype.om$core$IRender$render$arity$1 = ((function (map__38051,map__38051__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs38057 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38057))?sablono.interpreter.attributes(attrs38057):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38057))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38057),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs38062 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38062))?sablono.interpreter.attributes(attrs38062):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38062))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38062),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs38067 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38067))?sablono.interpreter.attributes(attrs38067):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38067))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38068 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38068))?sablono.interpreter.attributes(attrs38068):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38068))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38068)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38067),(function (){var attrs38069 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38069))?sablono.interpreter.attributes(attrs38069):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38069))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38069)], null))));
})()], null))));
})(),(function (){var attrs38070 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38080 = self__.site_stats;var G__38080__$1 = (((G__38080 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38080));var G__38080__$2 = (((G__38080__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38080__$1));return G__38080__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38080 = self__.site_stats;var G__38080__$1 = (((G__38080 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38080));var G__38080__$2 = (((G__38080__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38080__$1));return G__38080__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38070))?sablono.interpreter.attributes(attrs38070):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38070))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38070),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38075 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38081 = self__.site_stats;var G__38081__$1 = (((G__38081 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38081));var G__38081__$2 = (((G__38081__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38081__$1));return G__38081__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38081 = self__.site_stats;var G__38081__$1 = (((G__38081 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38081));var G__38081__$2 = (((G__38081__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38081__$1));return G__38081__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38075))?sablono.interpreter.attributes(attrs38075):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38075))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38075),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38051,map__38051__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38052.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38051,map__38051__$1,const_count,ic_count,pc_count){
return (function (_38054){var self__ = this;
var _38054__$1 = this;return self__.meta38053;
});})(map__38051,map__38051__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38051,map__38051__$1,const_count,ic_count,pc_count){
return (function (_38054,meta38053__$1){var self__ = this;
var _38054__$1 = this;return (new clustermap.components.map_report.t38052(self__.pc_count,self__.ic_count,self__.const_count,self__.map__38051,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta38053__$1));
});})(map__38051,map__38051__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38052 = ((function (map__38051,map__38051__$1,const_count,ic_count,pc_count){
return (function __GT_t38052(pc_count__$1,ic_count__$1,const_count__$1,map__38051__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta38053){return (new clustermap.components.map_report.t38052(pc_count__$1,ic_count__$1,const_count__$1,map__38051__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta38053));
});})(map__38051,map__38051__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38052(pc_count,ic_count,const_count,map__38051__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__38107 = clustermap.components.map_report.type_counts(site_stats);var map__38107__$1 = ((cljs.core.seq_QMARK_(map__38107))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38107):map__38107);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,cljs.core.constant$keyword$991);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,cljs.core.constant$keyword$990);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107__$1,cljs.core.constant$keyword$989);if(typeof clustermap.components.map_report.t38108 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38108 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__38107,comm,view_path_fn,portfolio_company_report,site_stats,meta38109){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__38107 = map__38107;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta38109 = meta38109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38108.cljs$lang$type = true;
clustermap.components.map_report.t38108.cljs$lang$ctorStr = "clustermap.components.map-report/t38108";
clustermap.components.map_report.t38108.cljs$lang$ctorPrWriter = ((function (map__38107,map__38107__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t38108");
});})(map__38107,map__38107__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38108.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38108.prototype.om$core$IRender$render$arity$1 = ((function (map__38107,map__38107__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs38113 = cljs.core.constant$keyword$840.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38113))?sablono.interpreter.attributes(attrs38113):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38113))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38113)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38114 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38114))?sablono.interpreter.attributes(attrs38114):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38114))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38115 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38115))?sablono.interpreter.attributes(attrs38115):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38115))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38115)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38114),(function (){var attrs38116 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38116))?sablono.interpreter.attributes(attrs38116):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38116))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38116)], null))));
})()], null))));
})(),(function (){var attrs38117 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38117))?sablono.interpreter.attributes(attrs38117):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38117))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38118 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38118))?sablono.interpreter.attributes(attrs38118):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38118))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38118)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38117),(function (){var attrs38119 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38119))?sablono.interpreter.attributes(attrs38119):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38119))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38119)], null))));
})()], null))));
})(),(function (){var attrs38120 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38130 = self__.site_stats;var G__38130__$1 = (((G__38130 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38130));var G__38130__$2 = (((G__38130__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38130__$1));return G__38130__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38130 = self__.site_stats;var G__38130__$1 = (((G__38130 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38130));var G__38130__$2 = (((G__38130__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38130__$1));return G__38130__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38120))?sablono.interpreter.attributes(attrs38120):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38120))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38120),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38125 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38131 = self__.site_stats;var G__38131__$1 = (((G__38131 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38131));var G__38131__$2 = (((G__38131__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38131__$1));return G__38131__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38131 = self__.site_stats;var G__38131__$1 = (((G__38131 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38131));var G__38131__$2 = (((G__38131__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38131__$1));return G__38131__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38125))?sablono.interpreter.attributes(attrs38125):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38125))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38125),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38107,map__38107__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38108.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38107,map__38107__$1,const_count,ic_count,pc_count){
return (function (_38110){var self__ = this;
var _38110__$1 = this;return self__.meta38109;
});})(map__38107,map__38107__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38107,map__38107__$1,const_count,ic_count,pc_count){
return (function (_38110,meta38109__$1){var self__ = this;
var _38110__$1 = this;return (new clustermap.components.map_report.t38108(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__38107,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta38109__$1));
});})(map__38107,map__38107__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38108 = ((function (map__38107,map__38107__$1,const_count,ic_count,pc_count){
return (function __GT_t38108(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__38107__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta38109){return (new clustermap.components.map_report.t38108(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__38107__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta38109));
});})(map__38107,map__38107__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38108(pc_count,path_fn,const_count,portfolio_company,ic_count,map__38107__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__38157 = clustermap.components.map_report.type_counts(site_stats);var map__38157__$1 = ((cljs.core.seq_QMARK_(map__38157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38157):map__38157);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.constant$keyword$991);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.constant$keyword$990);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38157__$1,cljs.core.constant$keyword$989);if(typeof clustermap.components.map_report.t38158 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38158 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__38157,comm,investor_company_report,view_path_fn,site_stats,meta38159){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__38157 = map__38157;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta38159 = meta38159;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38158.cljs$lang$type = true;
clustermap.components.map_report.t38158.cljs$lang$ctorStr = "clustermap.components.map-report/t38158";
clustermap.components.map_report.t38158.cljs$lang$ctorPrWriter = ((function (map__38157,map__38157__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t38158");
});})(map__38157,map__38157__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38158.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38158.prototype.om$core$IRender$render$arity$1 = ((function (map__38157,map__38157__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs38163 = cljs.core.constant$keyword$840.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38163))?sablono.interpreter.attributes(attrs38163):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38163))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38163)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38164 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38164))?sablono.interpreter.attributes(attrs38164):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38164))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38165 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38165))?sablono.interpreter.attributes(attrs38165):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38165))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38165)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38164),(function (){var attrs38166 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38166))?sablono.interpreter.attributes(attrs38166):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38166))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38166)], null))));
})()], null))));
})(),(function (){var attrs38167 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38167))?sablono.interpreter.attributes(attrs38167):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38167))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38168 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38168))?sablono.interpreter.attributes(attrs38168):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38168))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38168)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38167),(function (){var attrs38169 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38169))?sablono.interpreter.attributes(attrs38169):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38169))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38169)], null))));
})()], null))));
})(),(function (){var attrs38170 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38180 = self__.site_stats;var G__38180__$1 = (((G__38180 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38180));var G__38180__$2 = (((G__38180__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38180__$1));return G__38180__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38180 = self__.site_stats;var G__38180__$1 = (((G__38180 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38180));var G__38180__$2 = (((G__38180__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38180__$1));return G__38180__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38170))?sablono.interpreter.attributes(attrs38170):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38170))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38170),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38175 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38181 = self__.site_stats;var G__38181__$1 = (((G__38181 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38181));var G__38181__$2 = (((G__38181__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38181__$1));return G__38181__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38181 = self__.site_stats;var G__38181__$1 = (((G__38181 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38181));var G__38181__$2 = (((G__38181__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38181__$1));return G__38181__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38175))?sablono.interpreter.attributes(attrs38175):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38175))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38175),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38157,map__38157__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38158.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38157,map__38157__$1,const_count,ic_count,pc_count){
return (function (_38160){var self__ = this;
var _38160__$1 = this;return self__.meta38159;
});})(map__38157,map__38157__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38157,map__38157__$1,const_count,ic_count,pc_count){
return (function (_38160,meta38159__$1){var self__ = this;
var _38160__$1 = this;return (new clustermap.components.map_report.t38158(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__38157,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta38159__$1));
});})(map__38157,map__38157__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38158 = ((function (map__38157,map__38157__$1,const_count,ic_count,pc_count){
return (function __GT_t38158(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__38157__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta38159){return (new clustermap.components.map_report.t38158(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__38157__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta38159));
});})(map__38157,map__38157__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38158(pc_count,path_fn,const_count,investor_company,ic_count,map__38157__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__38211 = clustermap.components.map_report.type_counts(site_stats);var map__38211__$1 = ((cljs.core.seq_QMARK_(map__38211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38211):map__38211);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38211__$1,cljs.core.constant$keyword$991);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38211__$1,cljs.core.constant$keyword$990);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38211__$1,cljs.core.constant$keyword$989);if(typeof clustermap.components.map_report.t38212 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38212 = (function (pc_count,path_fn,const_count,ic_count,map__38211,constituency_report,comm,constituency,view_path_fn,site_stats,meta38213){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__38211 = map__38211;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta38213 = meta38213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38212.cljs$lang$type = true;
clustermap.components.map_report.t38212.cljs$lang$ctorStr = "clustermap.components.map-report/t38212";
clustermap.components.map_report.t38212.cljs$lang$ctorPrWriter = ((function (map__38211,map__38211__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t38212");
});})(map__38211,map__38211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38212.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38212.prototype.om$core$IRender$render$arity$1 = ((function (map__38211,map__38211__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs38217 = cljs.core.constant$keyword$840.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38217))?sablono.interpreter.attributes(attrs38217):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38217))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38217),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38222 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38222))?sablono.interpreter.attributes(attrs38222):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38222))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38223 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38223))?sablono.interpreter.attributes(attrs38223):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38223))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38223)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38222),(function (){var attrs38224 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38224))?sablono.interpreter.attributes(attrs38224):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38224))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38224)], null))));
})()], null))));
})(),(function (){var attrs38225 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38225))?sablono.interpreter.attributes(attrs38225):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38225))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38226 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38226))?sablono.interpreter.attributes(attrs38226):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38226))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38226)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38225),(function (){var attrs38227 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38227))?sablono.interpreter.attributes(attrs38227):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38227))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38227)], null))));
})()], null))));
})(),(function (){var attrs38228 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38238 = self__.site_stats;var G__38238__$1 = (((G__38238 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38238));var G__38238__$2 = (((G__38238__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38238__$1));return G__38238__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38238 = self__.site_stats;var G__38238__$1 = (((G__38238 == null))?null:cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(G__38238));var G__38238__$2 = (((G__38238__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38238__$1));return G__38238__$2;
})(),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38228))?sablono.interpreter.attributes(attrs38228):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38228))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38228),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38233 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38239 = self__.site_stats;var G__38239__$1 = (((G__38239 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38239));var G__38239__$2 = (((G__38239__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38239__$1));return G__38239__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38239 = self__.site_stats;var G__38239__$1 = (((G__38239 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__38239));var G__38239__$2 = (((G__38239__$1 == null))?null:cljs.core.constant$keyword$934.cljs$core$IFn$_invoke$arity$1(G__38239__$1));return G__38239__$2;
})(),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38233))?sablono.interpreter.attributes(attrs38233):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38233))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38233),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38211,map__38211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38211,map__38211__$1,const_count,ic_count,pc_count){
return (function (_38214){var self__ = this;
var _38214__$1 = this;return self__.meta38213;
});})(map__38211,map__38211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38211,map__38211__$1,const_count,ic_count,pc_count){
return (function (_38214,meta38213__$1){var self__ = this;
var _38214__$1 = this;return (new clustermap.components.map_report.t38212(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__38211,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta38213__$1));
});})(map__38211,map__38211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38212 = ((function (map__38211,map__38211__$1,const_count,ic_count,pc_count){
return (function __GT_t38212(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__38211__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta38213){return (new clustermap.components.map_report.t38212(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__38211__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta38213));
});})(map__38211,map__38211__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38212(pc_count,path_fn,const_count,ic_count,map__38211__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__38244 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38244__$1 = ((cljs.core.seq_QMARK_(map__38244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38244):map__38244);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38244__$1,cljs.core.constant$keyword$994);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38244__$1,cljs.core.constant$keyword$893);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38244__$1,cljs.core.constant$keyword$903);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$995);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$957,cljs.core.constant$keyword$810], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$957,cljs.core.constant$keyword$841], null));var site_stats = cljs.core.constant$keyword$961.cljs$core$IFn$_invoke$arity$1(data);var pred__38245 = cljs.core._EQ__EQ_;var expr__38246 = type;if(cljs.core.truth_((pred__38245.cljs$core$IFn$_invoke$arity$2 ? pred__38245.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$895,expr__38246) : pred__38245.call(null,cljs.core.constant$keyword$895,expr__38246))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__38245.cljs$core$IFn$_invoke$arity$2 ? pred__38245.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$896,expr__38246) : pred__38245.call(null,cljs.core.constant$keyword$896,expr__38246))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__38245.cljs$core$IFn$_invoke$arity$2 ? pred__38245.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$898,expr__38246) : pred__38245.call(null,cljs.core.constant$keyword$898,expr__38246))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,shared,cljs.core.constant$keyword$891,document.getElementById(elem_id)], null));
});
