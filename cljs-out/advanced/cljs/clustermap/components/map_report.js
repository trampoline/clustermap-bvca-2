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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$970) : view_path_fn.call(null,cljs.core.constant$keyword$970))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$980,(function (){var G__37256 = site_stats;var G__37256__$1 = (((G__37256 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__37256));return G__37256__$1;
})(),cljs.core.constant$keyword$981,(function (){var G__37257 = site_stats;var G__37257__$1 = (((G__37257 == null))?null:cljs.core.constant$keyword$964.cljs$core$IFn$_invoke$arity$1(G__37257));return G__37257__$1;
})(),cljs.core.constant$keyword$982,(function (){var G__37258 = site_stats;var G__37258__$1 = (((G__37258 == null))?null:cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(G__37258));return G__37258__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__37290 = clustermap.components.map_report.type_counts(site_stats);var map__37290__$1 = ((cljs.core.seq_QMARK_(map__37290))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37290):map__37290);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37290__$1,cljs.core.constant$keyword$982);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37290__$1,cljs.core.constant$keyword$981);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37290__$1,cljs.core.constant$keyword$980);if(typeof clustermap.components.map_report.t37291 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37291 = (function (pc_count,ic_count,const_count,map__37290,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta37292){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__37290 = map__37290;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta37292 = meta37292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37291.cljs$lang$type = true;
clustermap.components.map_report.t37291.cljs$lang$ctorStr = "clustermap.components.map-report/t37291";
clustermap.components.map_report.t37291.cljs$lang$ctorPrWriter = ((function (map__37290,map__37290__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37291");
});})(map__37290,map__37290__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37291.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37291.prototype.om$core$IRender$render$arity$1 = ((function (map__37290,map__37290__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs37296 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37296))?sablono.interpreter.attributes(attrs37296):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37296))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37296),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs37301 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37301))?sablono.interpreter.attributes(attrs37301):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37301))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37301),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs37306 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37306))?sablono.interpreter.attributes(attrs37306):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37306))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37307 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37307))?sablono.interpreter.attributes(attrs37307):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37307))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37307)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37306),(function (){var attrs37308 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37308))?sablono.interpreter.attributes(attrs37308):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37308))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37308)], null))));
})()], null))));
})(),(function (){var attrs37309 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37319 = self__.site_stats;var G__37319__$1 = (((G__37319 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37319));var G__37319__$2 = (((G__37319__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37319__$1));return G__37319__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37319 = self__.site_stats;var G__37319__$1 = (((G__37319 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37319));var G__37319__$2 = (((G__37319__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37319__$1));return G__37319__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37309))?sablono.interpreter.attributes(attrs37309):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37309))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37309),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37314 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37320 = self__.site_stats;var G__37320__$1 = (((G__37320 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37320));var G__37320__$2 = (((G__37320__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37320__$1));return G__37320__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37320 = self__.site_stats;var G__37320__$1 = (((G__37320 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37320));var G__37320__$2 = (((G__37320__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37320__$1));return G__37320__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37314))?sablono.interpreter.attributes(attrs37314):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37314))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37314),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37290,map__37290__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37290,map__37290__$1,const_count,ic_count,pc_count){
return (function (_37293){var self__ = this;
var _37293__$1 = this;return self__.meta37292;
});})(map__37290,map__37290__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37290,map__37290__$1,const_count,ic_count,pc_count){
return (function (_37293,meta37292__$1){var self__ = this;
var _37293__$1 = this;return (new clustermap.components.map_report.t37291(self__.pc_count,self__.ic_count,self__.const_count,self__.map__37290,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta37292__$1));
});})(map__37290,map__37290__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37291 = ((function (map__37290,map__37290__$1,const_count,ic_count,pc_count){
return (function __GT_t37291(pc_count__$1,ic_count__$1,const_count__$1,map__37290__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37292){return (new clustermap.components.map_report.t37291(pc_count__$1,ic_count__$1,const_count__$1,map__37290__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37292));
});})(map__37290,map__37290__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37291(pc_count,ic_count,const_count,map__37290__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__37346 = clustermap.components.map_report.type_counts(site_stats);var map__37346__$1 = ((cljs.core.seq_QMARK_(map__37346))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37346):map__37346);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.constant$keyword$982);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.constant$keyword$981);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.constant$keyword$980);if(typeof clustermap.components.map_report.t37347 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37347 = (function (pc_count,map__37346,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta37348){
this.pc_count = pc_count;
this.map__37346 = map__37346;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta37348 = meta37348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37347.cljs$lang$type = true;
clustermap.components.map_report.t37347.cljs$lang$ctorStr = "clustermap.components.map-report/t37347";
clustermap.components.map_report.t37347.cljs$lang$ctorPrWriter = ((function (map__37346,map__37346__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37347");
});})(map__37346,map__37346__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37347.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37347.prototype.om$core$IRender$render$arity$1 = ((function (map__37346,map__37346__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs37352 = cljs.core.constant$keyword$831.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37352))?sablono.interpreter.attributes(attrs37352):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37352))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37352)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37353 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37353))?sablono.interpreter.attributes(attrs37353):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37353))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37354 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37354))?sablono.interpreter.attributes(attrs37354):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37354))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37354)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37353),(function (){var attrs37355 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37355))?sablono.interpreter.attributes(attrs37355):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37355))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37355)], null))));
})()], null))));
})(),(function (){var attrs37356 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37356))?sablono.interpreter.attributes(attrs37356):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37356))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37357 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37357))?sablono.interpreter.attributes(attrs37357):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37357)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37356),(function (){var attrs37358 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37358))?sablono.interpreter.attributes(attrs37358):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37358))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37358)], null))));
})()], null))));
})(),(function (){var attrs37359 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37369 = self__.site_stats;var G__37369__$1 = (((G__37369 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37369));var G__37369__$2 = (((G__37369__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37369__$1));return G__37369__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37369 = self__.site_stats;var G__37369__$1 = (((G__37369 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37369));var G__37369__$2 = (((G__37369__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37369__$1));return G__37369__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37359))?sablono.interpreter.attributes(attrs37359):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37359))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37359),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37364 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37370 = self__.site_stats;var G__37370__$1 = (((G__37370 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37370));var G__37370__$2 = (((G__37370__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37370__$1));return G__37370__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37370 = self__.site_stats;var G__37370__$1 = (((G__37370 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37370));var G__37370__$2 = (((G__37370__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37370__$1));return G__37370__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37364))?sablono.interpreter.attributes(attrs37364):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37364))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37364),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37346,map__37346__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37346,map__37346__$1,const_count,ic_count,pc_count){
return (function (_37349){var self__ = this;
var _37349__$1 = this;return self__.meta37348;
});})(map__37346,map__37346__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37346,map__37346__$1,const_count,ic_count,pc_count){
return (function (_37349,meta37348__$1){var self__ = this;
var _37349__$1 = this;return (new clustermap.components.map_report.t37347(self__.pc_count,self__.map__37346,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta37348__$1));
});})(map__37346,map__37346__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37347 = ((function (map__37346,map__37346__$1,const_count,ic_count,pc_count){
return (function __GT_t37347(pc_count__$1,map__37346__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta37348){return (new clustermap.components.map_report.t37347(pc_count__$1,map__37346__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta37348));
});})(map__37346,map__37346__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37347(pc_count,map__37346__$1,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__37396 = clustermap.components.map_report.type_counts(site_stats);var map__37396__$1 = ((cljs.core.seq_QMARK_(map__37396))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37396):map__37396);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37396__$1,cljs.core.constant$keyword$982);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37396__$1,cljs.core.constant$keyword$981);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37396__$1,cljs.core.constant$keyword$980);if(typeof clustermap.components.map_report.t37397 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37397 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,map__37396,view_path_fn,site_stats,meta37398){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.map__37396 = map__37396;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta37398 = meta37398;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37397.cljs$lang$type = true;
clustermap.components.map_report.t37397.cljs$lang$ctorStr = "clustermap.components.map-report/t37397";
clustermap.components.map_report.t37397.cljs$lang$ctorPrWriter = ((function (map__37396,map__37396__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37397");
});})(map__37396,map__37396__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37397.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37397.prototype.om$core$IRender$render$arity$1 = ((function (map__37396,map__37396__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs37402 = cljs.core.constant$keyword$831.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37402))?sablono.interpreter.attributes(attrs37402):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37402))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37402)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37403 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37403))?sablono.interpreter.attributes(attrs37403):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37403))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37404 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37404))?sablono.interpreter.attributes(attrs37404):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37404))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37404)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37403),(function (){var attrs37405 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37405))?sablono.interpreter.attributes(attrs37405):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37405))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37405)], null))));
})()], null))));
})(),(function (){var attrs37406 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37406))?sablono.interpreter.attributes(attrs37406):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37406))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37407 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37407))?sablono.interpreter.attributes(attrs37407):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37407))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37407)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37406),(function (){var attrs37408 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37408))?sablono.interpreter.attributes(attrs37408):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37408))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37408)], null))));
})()], null))));
})(),(function (){var attrs37409 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37419 = self__.site_stats;var G__37419__$1 = (((G__37419 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37419));var G__37419__$2 = (((G__37419__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37419__$1));return G__37419__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37419 = self__.site_stats;var G__37419__$1 = (((G__37419 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37419));var G__37419__$2 = (((G__37419__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37419__$1));return G__37419__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37409))?sablono.interpreter.attributes(attrs37409):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37409))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37409),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37414 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37420 = self__.site_stats;var G__37420__$1 = (((G__37420 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37420));var G__37420__$2 = (((G__37420__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37420__$1));return G__37420__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37420 = self__.site_stats;var G__37420__$1 = (((G__37420 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37420));var G__37420__$2 = (((G__37420__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37420__$1));return G__37420__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37414))?sablono.interpreter.attributes(attrs37414):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37414))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37414),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37396,map__37396__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37397.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37396,map__37396__$1,const_count,ic_count,pc_count){
return (function (_37399){var self__ = this;
var _37399__$1 = this;return self__.meta37398;
});})(map__37396,map__37396__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37396,map__37396__$1,const_count,ic_count,pc_count){
return (function (_37399,meta37398__$1){var self__ = this;
var _37399__$1 = this;return (new clustermap.components.map_report.t37397(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.map__37396,self__.view_path_fn,self__.site_stats,meta37398__$1));
});})(map__37396,map__37396__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37397 = ((function (map__37396,map__37396__$1,const_count,ic_count,pc_count){
return (function __GT_t37397(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,map__37396__$2,view_path_fn__$1,site_stats__$1,meta37398){return (new clustermap.components.map_report.t37397(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,map__37396__$2,view_path_fn__$1,site_stats__$1,meta37398));
});})(map__37396,map__37396__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37397(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,map__37396__$1,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__37450 = clustermap.components.map_report.type_counts(site_stats);var map__37450__$1 = ((cljs.core.seq_QMARK_(map__37450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37450):map__37450);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37450__$1,cljs.core.constant$keyword$982);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37450__$1,cljs.core.constant$keyword$981);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37450__$1,cljs.core.constant$keyword$980);if(typeof clustermap.components.map_report.t37451 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37451 = (function (pc_count,map__37450,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta37452){
this.pc_count = pc_count;
this.map__37450 = map__37450;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta37452 = meta37452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37451.cljs$lang$type = true;
clustermap.components.map_report.t37451.cljs$lang$ctorStr = "clustermap.components.map-report/t37451";
clustermap.components.map_report.t37451.cljs$lang$ctorPrWriter = ((function (map__37450,map__37450__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37451");
});})(map__37450,map__37450__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37451.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37451.prototype.om$core$IRender$render$arity$1 = ((function (map__37450,map__37450__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs37456 = cljs.core.constant$keyword$831.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37456))?sablono.interpreter.attributes(attrs37456):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37456))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37456),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37461 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37461))?sablono.interpreter.attributes(attrs37461):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37461))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37462 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37462))?sablono.interpreter.attributes(attrs37462):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37462))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37462)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37461),(function (){var attrs37463 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37463))?sablono.interpreter.attributes(attrs37463):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37463))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37463)], null))));
})()], null))));
})(),(function (){var attrs37464 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37464))?sablono.interpreter.attributes(attrs37464):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37464))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37465 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37465))?sablono.interpreter.attributes(attrs37465):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37465))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37465)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37464),(function (){var attrs37466 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37466))?sablono.interpreter.attributes(attrs37466):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37466))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37466)], null))));
})()], null))));
})(),(function (){var attrs37467 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37477 = self__.site_stats;var G__37477__$1 = (((G__37477 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37477));var G__37477__$2 = (((G__37477__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37477__$1));return G__37477__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37477 = self__.site_stats;var G__37477__$1 = (((G__37477 == null))?null:cljs.core.constant$keyword$947.cljs$core$IFn$_invoke$arity$1(G__37477));var G__37477__$2 = (((G__37477__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37477__$1));return G__37477__$2;
})(),cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37467))?sablono.interpreter.attributes(attrs37467):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37467))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37467),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37472 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37478 = self__.site_stats;var G__37478__$1 = (((G__37478 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37478));var G__37478__$2 = (((G__37478__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37478__$1));return G__37478__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37478 = self__.site_stats;var G__37478__$1 = (((G__37478 == null))?null:cljs.core.constant$keyword$962.cljs$core$IFn$_invoke$arity$1(G__37478));var G__37478__$2 = (((G__37478__$1 == null))?null:cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(G__37478__$1));return G__37478__$2;
})(),cljs.core.constant$keyword$813,(0),cljs.core.constant$keyword$763,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37472))?sablono.interpreter.attributes(attrs37472):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37472))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37472),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37450,map__37450__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37451.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37450,map__37450__$1,const_count,ic_count,pc_count){
return (function (_37453){var self__ = this;
var _37453__$1 = this;return self__.meta37452;
});})(map__37450,map__37450__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37450,map__37450__$1,const_count,ic_count,pc_count){
return (function (_37453,meta37452__$1){var self__ = this;
var _37453__$1 = this;return (new clustermap.components.map_report.t37451(self__.pc_count,self__.map__37450,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta37452__$1));
});})(map__37450,map__37450__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37451 = ((function (map__37450,map__37450__$1,const_count,ic_count,pc_count){
return (function __GT_t37451(pc_count__$1,map__37450__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta37452){return (new clustermap.components.map_report.t37451(pc_count__$1,map__37450__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta37452));
});})(map__37450,map__37450__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37451(pc_count,map__37450__$1,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__37483 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37483__$1 = ((cljs.core.seq_QMARK_(map__37483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37483):map__37483);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483__$1,cljs.core.constant$keyword$985);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483__$1,cljs.core.constant$keyword$884);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37483__$1,cljs.core.constant$keyword$894);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$986);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$948,cljs.core.constant$keyword$801], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$948,cljs.core.constant$keyword$832], null));var site_stats = cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(data);var pred__37484 = cljs.core._EQ__EQ_;var expr__37485 = type;if(cljs.core.truth_((pred__37484.cljs$core$IFn$_invoke$arity$2 ? pred__37484.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$886,expr__37485) : pred__37484.call(null,cljs.core.constant$keyword$886,expr__37485))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__37484.cljs$core$IFn$_invoke$arity$2 ? pred__37484.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$887,expr__37485) : pred__37484.call(null,cljs.core.constant$keyword$887,expr__37485))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__37484.cljs$core$IFn$_invoke$arity$2 ? pred__37484.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$889,expr__37485) : pred__37484.call(null,cljs.core.constant$keyword$889,expr__37485))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,shared,cljs.core.constant$keyword$882,document.getElementById(elem_id)], null));
});
