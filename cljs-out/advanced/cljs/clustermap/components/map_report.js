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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$974) : view_path_fn.call(null,cljs.core.constant$keyword$974))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$984,(function (){var G__39196 = site_stats;var G__39196__$1 = (((G__39196 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__39196));return G__39196__$1;
})(),cljs.core.constant$keyword$985,(function (){var G__39197 = site_stats;var G__39197__$1 = (((G__39197 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__39197));return G__39197__$1;
})(),cljs.core.constant$keyword$986,(function (){var G__39198 = site_stats;var G__39198__$1 = (((G__39198 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39198));return G__39198__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__39230 = clustermap.components.map_report.type_counts(site_stats);var map__39230__$1 = ((cljs.core.seq_QMARK_(map__39230))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39230):map__39230);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39230__$1,cljs.core.constant$keyword$986);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39230__$1,cljs.core.constant$keyword$985);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39230__$1,cljs.core.constant$keyword$984);if(typeof clustermap.components.map_report.t39231 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39231 = (function (pc_count,ic_count,const_count,map__39230,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta39232){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__39230 = map__39230;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta39232 = meta39232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39231.cljs$lang$type = true;
clustermap.components.map_report.t39231.cljs$lang$ctorStr = "clustermap.components.map-report/t39231";
clustermap.components.map_report.t39231.cljs$lang$ctorPrWriter = ((function (map__39230,map__39230__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39231");
});})(map__39230,map__39230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39231.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39231.prototype.om$core$IRender$render$arity$1 = ((function (map__39230,map__39230__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs39236 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39236))?sablono.interpreter.attributes(attrs39236):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39236))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39236),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs39241 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39241))?sablono.interpreter.attributes(attrs39241):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39241))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39241),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs39246 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39246))?sablono.interpreter.attributes(attrs39246):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39246))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39247 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39247))?sablono.interpreter.attributes(attrs39247):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39247))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39247)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39246),(function (){var attrs39248 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39248))?sablono.interpreter.attributes(attrs39248):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39248))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39248)], null))));
})()], null))));
})(),(function (){var attrs39249 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39259 = self__.site_stats;var G__39259__$1 = (((G__39259 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39259));var G__39259__$2 = (((G__39259__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39259__$1));return G__39259__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39259 = self__.site_stats;var G__39259__$1 = (((G__39259 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39259));var G__39259__$2 = (((G__39259__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39259__$1));return G__39259__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39249))?sablono.interpreter.attributes(attrs39249):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39249))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39249),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39254 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39260 = self__.site_stats;var G__39260__$1 = (((G__39260 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39260));var G__39260__$2 = (((G__39260__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39260__$1));return G__39260__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39260 = self__.site_stats;var G__39260__$1 = (((G__39260 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39260));var G__39260__$2 = (((G__39260__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39260__$1));return G__39260__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39254))?sablono.interpreter.attributes(attrs39254):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39254))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39254),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39230,map__39230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39230,map__39230__$1,const_count,ic_count,pc_count){
return (function (_39233){var self__ = this;
var _39233__$1 = this;return self__.meta39232;
});})(map__39230,map__39230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39230,map__39230__$1,const_count,ic_count,pc_count){
return (function (_39233,meta39232__$1){var self__ = this;
var _39233__$1 = this;return (new clustermap.components.map_report.t39231(self__.pc_count,self__.ic_count,self__.const_count,self__.map__39230,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta39232__$1));
});})(map__39230,map__39230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39231 = ((function (map__39230,map__39230__$1,const_count,ic_count,pc_count){
return (function __GT_t39231(pc_count__$1,ic_count__$1,const_count__$1,map__39230__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta39232){return (new clustermap.components.map_report.t39231(pc_count__$1,ic_count__$1,const_count__$1,map__39230__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta39232));
});})(map__39230,map__39230__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39231(pc_count,ic_count,const_count,map__39230__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__39286 = clustermap.components.map_report.type_counts(site_stats);var map__39286__$1 = ((cljs.core.seq_QMARK_(map__39286))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39286):map__39286);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39286__$1,cljs.core.constant$keyword$986);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39286__$1,cljs.core.constant$keyword$985);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39286__$1,cljs.core.constant$keyword$984);if(typeof clustermap.components.map_report.t39287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39287 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,map__39286,meta39288){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.map__39286 = map__39286;
this.meta39288 = meta39288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39287.cljs$lang$type = true;
clustermap.components.map_report.t39287.cljs$lang$ctorStr = "clustermap.components.map-report/t39287";
clustermap.components.map_report.t39287.cljs$lang$ctorPrWriter = ((function (map__39286,map__39286__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39287");
});})(map__39286,map__39286__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39287.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39287.prototype.om$core$IRender$render$arity$1 = ((function (map__39286,map__39286__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs39292 = cljs.core.constant$keyword$835.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39292))?sablono.interpreter.attributes(attrs39292):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39292))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39292)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs39293 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39293))?sablono.interpreter.attributes(attrs39293):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39293))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39294 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39294))?sablono.interpreter.attributes(attrs39294):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39294))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39294)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39293),(function (){var attrs39295 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39295))?sablono.interpreter.attributes(attrs39295):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39295))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39295)], null))));
})()], null))));
})(),(function (){var attrs39296 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39296))?sablono.interpreter.attributes(attrs39296):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39296))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39297 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39297))?sablono.interpreter.attributes(attrs39297):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39297))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39297)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39296),(function (){var attrs39298 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39298))?sablono.interpreter.attributes(attrs39298):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39298))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39298)], null))));
})()], null))));
})(),(function (){var attrs39299 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39309 = self__.site_stats;var G__39309__$1 = (((G__39309 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39309));var G__39309__$2 = (((G__39309__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39309__$1));return G__39309__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39309 = self__.site_stats;var G__39309__$1 = (((G__39309 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39309));var G__39309__$2 = (((G__39309__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39309__$1));return G__39309__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39299))?sablono.interpreter.attributes(attrs39299):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39299))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39299),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39304 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39310 = self__.site_stats;var G__39310__$1 = (((G__39310 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39310));var G__39310__$2 = (((G__39310__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39310__$1));return G__39310__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39310 = self__.site_stats;var G__39310__$1 = (((G__39310 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39310));var G__39310__$2 = (((G__39310__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39310__$1));return G__39310__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39304))?sablono.interpreter.attributes(attrs39304):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39304))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39304),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39286,map__39286__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39286,map__39286__$1,const_count,ic_count,pc_count){
return (function (_39289){var self__ = this;
var _39289__$1 = this;return self__.meta39288;
});})(map__39286,map__39286__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39286,map__39286__$1,const_count,ic_count,pc_count){
return (function (_39289,meta39288__$1){var self__ = this;
var _39289__$1 = this;return (new clustermap.components.map_report.t39287(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,self__.map__39286,meta39288__$1));
});})(map__39286,map__39286__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39287 = ((function (map__39286,map__39286__$1,const_count,ic_count,pc_count){
return (function __GT_t39287(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,map__39286__$2,meta39288){return (new clustermap.components.map_report.t39287(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,map__39286__$2,meta39288));
});})(map__39286,map__39286__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39287(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,map__39286__$1,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__39336 = clustermap.components.map_report.type_counts(site_stats);var map__39336__$1 = ((cljs.core.seq_QMARK_(map__39336))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39336):map__39336);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,cljs.core.constant$keyword$986);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,cljs.core.constant$keyword$985);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39336__$1,cljs.core.constant$keyword$984);if(typeof clustermap.components.map_report.t39337 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39337 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__39336,comm,investor_company_report,view_path_fn,site_stats,meta39338){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__39336 = map__39336;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta39338 = meta39338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39337.cljs$lang$type = true;
clustermap.components.map_report.t39337.cljs$lang$ctorStr = "clustermap.components.map-report/t39337";
clustermap.components.map_report.t39337.cljs$lang$ctorPrWriter = ((function (map__39336,map__39336__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39337");
});})(map__39336,map__39336__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39337.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39337.prototype.om$core$IRender$render$arity$1 = ((function (map__39336,map__39336__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs39342 = cljs.core.constant$keyword$835.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39342))?sablono.interpreter.attributes(attrs39342):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39342))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39342)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs39343 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39343))?sablono.interpreter.attributes(attrs39343):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39343))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39344 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39344))?sablono.interpreter.attributes(attrs39344):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39344))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39344)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39343),(function (){var attrs39345 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39345))?sablono.interpreter.attributes(attrs39345):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39345))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39345)], null))));
})()], null))));
})(),(function (){var attrs39346 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39346))?sablono.interpreter.attributes(attrs39346):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39346))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39347 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39347))?sablono.interpreter.attributes(attrs39347):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39347))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39347)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39346),(function (){var attrs39348 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39348))?sablono.interpreter.attributes(attrs39348):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39348))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39348)], null))));
})()], null))));
})(),(function (){var attrs39349 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39359 = self__.site_stats;var G__39359__$1 = (((G__39359 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39359));var G__39359__$2 = (((G__39359__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39359__$1));return G__39359__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39359 = self__.site_stats;var G__39359__$1 = (((G__39359 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39359));var G__39359__$2 = (((G__39359__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39359__$1));return G__39359__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39349))?sablono.interpreter.attributes(attrs39349):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39349))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39349),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39354 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39360 = self__.site_stats;var G__39360__$1 = (((G__39360 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39360));var G__39360__$2 = (((G__39360__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39360__$1));return G__39360__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39360 = self__.site_stats;var G__39360__$1 = (((G__39360 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39360));var G__39360__$2 = (((G__39360__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39360__$1));return G__39360__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39354))?sablono.interpreter.attributes(attrs39354):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39354))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39354),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39336,map__39336__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39336,map__39336__$1,const_count,ic_count,pc_count){
return (function (_39339){var self__ = this;
var _39339__$1 = this;return self__.meta39338;
});})(map__39336,map__39336__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39336,map__39336__$1,const_count,ic_count,pc_count){
return (function (_39339,meta39338__$1){var self__ = this;
var _39339__$1 = this;return (new clustermap.components.map_report.t39337(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__39336,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta39338__$1));
});})(map__39336,map__39336__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39337 = ((function (map__39336,map__39336__$1,const_count,ic_count,pc_count){
return (function __GT_t39337(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__39336__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta39338){return (new clustermap.components.map_report.t39337(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__39336__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta39338));
});})(map__39336,map__39336__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39337(pc_count,path_fn,const_count,investor_company,ic_count,map__39336__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__39390 = clustermap.components.map_report.type_counts(site_stats);var map__39390__$1 = ((cljs.core.seq_QMARK_(map__39390))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39390):map__39390);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39390__$1,cljs.core.constant$keyword$986);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39390__$1,cljs.core.constant$keyword$985);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39390__$1,cljs.core.constant$keyword$984);if(typeof clustermap.components.map_report.t39391 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39391 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__39390,view_path_fn,site_stats,meta39392){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.map__39390 = map__39390;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta39392 = meta39392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39391.cljs$lang$type = true;
clustermap.components.map_report.t39391.cljs$lang$ctorStr = "clustermap.components.map-report/t39391";
clustermap.components.map_report.t39391.cljs$lang$ctorPrWriter = ((function (map__39390,map__39390__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39391");
});})(map__39390,map__39390__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39391.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39391.prototype.om$core$IRender$render$arity$1 = ((function (map__39390,map__39390__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs39396 = cljs.core.constant$keyword$835.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39396))?sablono.interpreter.attributes(attrs39396):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39396))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$987.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$987.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39396),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$987.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$987.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs39401 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39401))?sablono.interpreter.attributes(attrs39401):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39401))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39402 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39402))?sablono.interpreter.attributes(attrs39402):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39402))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39402)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39401),(function (){var attrs39403 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39403))?sablono.interpreter.attributes(attrs39403):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39403))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39403)], null))));
})()], null))));
})(),(function (){var attrs39404 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39404))?sablono.interpreter.attributes(attrs39404):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39404))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39405 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39405))?sablono.interpreter.attributes(attrs39405):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39405))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39405)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39404),(function (){var attrs39406 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39406))?sablono.interpreter.attributes(attrs39406):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39406))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39406)], null))));
})()], null))));
})(),(function (){var attrs39407 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39417 = self__.site_stats;var G__39417__$1 = (((G__39417 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39417));var G__39417__$2 = (((G__39417__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39417__$1));return G__39417__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39417 = self__.site_stats;var G__39417__$1 = (((G__39417 == null))?null:cljs.core.constant$keyword$951.cljs$core$IFn$_invoke$arity$1(G__39417));var G__39417__$2 = (((G__39417__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39417__$1));return G__39417__$2;
})(),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39407))?sablono.interpreter.attributes(attrs39407):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39407))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39407),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39412 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39418 = self__.site_stats;var G__39418__$1 = (((G__39418 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39418));var G__39418__$2 = (((G__39418__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39418__$1));return G__39418__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39418 = self__.site_stats;var G__39418__$1 = (((G__39418 == null))?null:cljs.core.constant$keyword$966.cljs$core$IFn$_invoke$arity$1(G__39418));var G__39418__$2 = (((G__39418__$1 == null))?null:cljs.core.constant$keyword$929.cljs$core$IFn$_invoke$arity$1(G__39418__$1));return G__39418__$2;
})(),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39412))?sablono.interpreter.attributes(attrs39412):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39412))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39412),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39390,map__39390__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39390,map__39390__$1,const_count,ic_count,pc_count){
return (function (_39393){var self__ = this;
var _39393__$1 = this;return self__.meta39392;
});})(map__39390,map__39390__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39390,map__39390__$1,const_count,ic_count,pc_count){
return (function (_39393,meta39392__$1){var self__ = this;
var _39393__$1 = this;return (new clustermap.components.map_report.t39391(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.map__39390,self__.view_path_fn,self__.site_stats,meta39392__$1));
});})(map__39390,map__39390__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39391 = ((function (map__39390,map__39390__$1,const_count,ic_count,pc_count){
return (function __GT_t39391(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__39390__$2,view_path_fn__$1,site_stats__$1,meta39392){return (new clustermap.components.map_report.t39391(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__39390__$2,view_path_fn__$1,site_stats__$1,meta39392));
});})(map__39390,map__39390__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39391(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__39390__$1,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__39423 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39423__$1 = ((cljs.core.seq_QMARK_(map__39423))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39423):map__39423);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,cljs.core.constant$keyword$989);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,cljs.core.constant$keyword$888);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39423__$1,cljs.core.constant$keyword$898);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$990);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$952,cljs.core.constant$keyword$805], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$952,cljs.core.constant$keyword$836], null));var site_stats = cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(data);var pred__39424 = cljs.core._EQ__EQ_;var expr__39425 = type;if(cljs.core.truth_((pred__39424.cljs$core$IFn$_invoke$arity$2 ? pred__39424.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$890,expr__39425) : pred__39424.call(null,cljs.core.constant$keyword$890,expr__39425))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__39424.cljs$core$IFn$_invoke$arity$2 ? pred__39424.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,expr__39425) : pred__39424.call(null,cljs.core.constant$keyword$891,expr__39425))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__39424.cljs$core$IFn$_invoke$arity$2 ? pred__39424.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$893,expr__39425) : pred__39424.call(null,cljs.core.constant$keyword$893,expr__39425))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,shared,cljs.core.constant$keyword$886,document.getElementById(elem_id)], null));
});
