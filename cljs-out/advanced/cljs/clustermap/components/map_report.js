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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$975) : view_path_fn.call(null,cljs.core.constant$keyword$975))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$985,(function (){var G__39211 = site_stats;var G__39211__$1 = (((G__39211 == null))?null:cljs.core.constant$keyword$972.cljs$core$IFn$_invoke$arity$1(G__39211));return G__39211__$1;
})(),cljs.core.constant$keyword$986,(function (){var G__39212 = site_stats;var G__39212__$1 = (((G__39212 == null))?null:cljs.core.constant$keyword$969.cljs$core$IFn$_invoke$arity$1(G__39212));return G__39212__$1;
})(),cljs.core.constant$keyword$987,(function (){var G__39213 = site_stats;var G__39213__$1 = (((G__39213 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__39213));return G__39213__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__39245 = clustermap.components.map_report.type_counts(site_stats);var map__39245__$1 = ((cljs.core.seq_QMARK_(map__39245))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39245):map__39245);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,cljs.core.constant$keyword$987);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,cljs.core.constant$keyword$986);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39245__$1,cljs.core.constant$keyword$985);if(typeof clustermap.components.map_report.t39246 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39246 = (function (pc_count,ic_count,const_count,map__39245,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta39247){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__39245 = map__39245;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta39247 = meta39247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39246.cljs$lang$type = true;
clustermap.components.map_report.t39246.cljs$lang$ctorStr = "clustermap.components.map-report/t39246";
clustermap.components.map_report.t39246.cljs$lang$ctorPrWriter = ((function (map__39245,map__39245__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39246");
});})(map__39245,map__39245__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39246.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39246.prototype.om$core$IRender$render$arity$1 = ((function (map__39245,map__39245__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs39251 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39251))?sablono.interpreter.attributes(attrs39251):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39251))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39251),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs39256 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39256))?sablono.interpreter.attributes(attrs39256):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39256))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39256),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs39261 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39261))?sablono.interpreter.attributes(attrs39261):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39261))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39262 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39262))?sablono.interpreter.attributes(attrs39262):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39262))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39262)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39261),(function (){var attrs39263 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39263))?sablono.interpreter.attributes(attrs39263):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39263))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39263)], null))));
})()], null))));
})(),(function (){var attrs39264 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39274 = self__.site_stats;var G__39274__$1 = (((G__39274 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39274));var G__39274__$2 = (((G__39274__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39274__$1));return G__39274__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39274 = self__.site_stats;var G__39274__$1 = (((G__39274 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39274));var G__39274__$2 = (((G__39274__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39274__$1));return G__39274__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39264))?sablono.interpreter.attributes(attrs39264):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39264))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39264),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39269 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39275 = self__.site_stats;var G__39275__$1 = (((G__39275 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39275));var G__39275__$2 = (((G__39275__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39275__$1));return G__39275__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39275 = self__.site_stats;var G__39275__$1 = (((G__39275 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39275));var G__39275__$2 = (((G__39275__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39275__$1));return G__39275__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39269))?sablono.interpreter.attributes(attrs39269):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39269))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39269),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39245,map__39245__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39245,map__39245__$1,const_count,ic_count,pc_count){
return (function (_39248){var self__ = this;
var _39248__$1 = this;return self__.meta39247;
});})(map__39245,map__39245__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39245,map__39245__$1,const_count,ic_count,pc_count){
return (function (_39248,meta39247__$1){var self__ = this;
var _39248__$1 = this;return (new clustermap.components.map_report.t39246(self__.pc_count,self__.ic_count,self__.const_count,self__.map__39245,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta39247__$1));
});})(map__39245,map__39245__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39246 = ((function (map__39245,map__39245__$1,const_count,ic_count,pc_count){
return (function __GT_t39246(pc_count__$1,ic_count__$1,const_count__$1,map__39245__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta39247){return (new clustermap.components.map_report.t39246(pc_count__$1,ic_count__$1,const_count__$1,map__39245__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta39247));
});})(map__39245,map__39245__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39246(pc_count,ic_count,const_count,map__39245__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__39301 = clustermap.components.map_report.type_counts(site_stats);var map__39301__$1 = ((cljs.core.seq_QMARK_(map__39301))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39301):map__39301);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39301__$1,cljs.core.constant$keyword$987);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39301__$1,cljs.core.constant$keyword$986);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39301__$1,cljs.core.constant$keyword$985);if(typeof clustermap.components.map_report.t39302 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39302 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__39301,portfolio_company_report,site_stats,meta39303){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__39301 = map__39301;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta39303 = meta39303;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39302.cljs$lang$type = true;
clustermap.components.map_report.t39302.cljs$lang$ctorStr = "clustermap.components.map-report/t39302";
clustermap.components.map_report.t39302.cljs$lang$ctorPrWriter = ((function (map__39301,map__39301__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39302");
});})(map__39301,map__39301__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39302.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39302.prototype.om$core$IRender$render$arity$1 = ((function (map__39301,map__39301__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs39307 = cljs.core.constant$keyword$836.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39307))?sablono.interpreter.attributes(attrs39307):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39307))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39307)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs39308 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39308))?sablono.interpreter.attributes(attrs39308):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39308))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39309 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39309))?sablono.interpreter.attributes(attrs39309):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39309))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39309)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39308),(function (){var attrs39310 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39310))?sablono.interpreter.attributes(attrs39310):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39310))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39310)], null))));
})()], null))));
})(),(function (){var attrs39311 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39311))?sablono.interpreter.attributes(attrs39311):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39311))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39312 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39312))?sablono.interpreter.attributes(attrs39312):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39312))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39312)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39311),(function (){var attrs39313 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39313))?sablono.interpreter.attributes(attrs39313):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39313))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39313)], null))));
})()], null))));
})(),(function (){var attrs39314 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39324 = self__.site_stats;var G__39324__$1 = (((G__39324 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39324));var G__39324__$2 = (((G__39324__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39324__$1));return G__39324__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39324 = self__.site_stats;var G__39324__$1 = (((G__39324 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39324));var G__39324__$2 = (((G__39324__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39324__$1));return G__39324__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39314))?sablono.interpreter.attributes(attrs39314):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39314))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39314),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39319 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39325 = self__.site_stats;var G__39325__$1 = (((G__39325 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39325));var G__39325__$2 = (((G__39325__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39325__$1));return G__39325__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39325 = self__.site_stats;var G__39325__$1 = (((G__39325 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39325));var G__39325__$2 = (((G__39325__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39325__$1));return G__39325__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39319))?sablono.interpreter.attributes(attrs39319):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39319))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39319),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39301,map__39301__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39301,map__39301__$1,const_count,ic_count,pc_count){
return (function (_39304){var self__ = this;
var _39304__$1 = this;return self__.meta39303;
});})(map__39301,map__39301__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39301,map__39301__$1,const_count,ic_count,pc_count){
return (function (_39304,meta39303__$1){var self__ = this;
var _39304__$1 = this;return (new clustermap.components.map_report.t39302(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__39301,self__.portfolio_company_report,self__.site_stats,meta39303__$1));
});})(map__39301,map__39301__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39302 = ((function (map__39301,map__39301__$1,const_count,ic_count,pc_count){
return (function __GT_t39302(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__39301__$2,portfolio_company_report__$1,site_stats__$1,meta39303){return (new clustermap.components.map_report.t39302(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__39301__$2,portfolio_company_report__$1,site_stats__$1,meta39303));
});})(map__39301,map__39301__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39302(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__39301__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__39351 = clustermap.components.map_report.type_counts(site_stats);var map__39351__$1 = ((cljs.core.seq_QMARK_(map__39351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39351):map__39351);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39351__$1,cljs.core.constant$keyword$987);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39351__$1,cljs.core.constant$keyword$986);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39351__$1,cljs.core.constant$keyword$985);if(typeof clustermap.components.map_report.t39352 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39352 = (function (pc_count,path_fn,const_count,investor_company,map__39351,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta39353){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.map__39351 = map__39351;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta39353 = meta39353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39352.cljs$lang$type = true;
clustermap.components.map_report.t39352.cljs$lang$ctorStr = "clustermap.components.map-report/t39352";
clustermap.components.map_report.t39352.cljs$lang$ctorPrWriter = ((function (map__39351,map__39351__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39352");
});})(map__39351,map__39351__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39352.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39352.prototype.om$core$IRender$render$arity$1 = ((function (map__39351,map__39351__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs39357 = cljs.core.constant$keyword$836.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39357))?sablono.interpreter.attributes(attrs39357):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39357))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39357)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs39358 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39358))?sablono.interpreter.attributes(attrs39358):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39358))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39359 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39359))?sablono.interpreter.attributes(attrs39359):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39359))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39359)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39358),(function (){var attrs39360 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39360))?sablono.interpreter.attributes(attrs39360):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39360))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39360)], null))));
})()], null))));
})(),(function (){var attrs39361 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39361))?sablono.interpreter.attributes(attrs39361):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39361))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39362 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39362))?sablono.interpreter.attributes(attrs39362):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39362))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39362)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39361),(function (){var attrs39363 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39363))?sablono.interpreter.attributes(attrs39363):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39363))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39363)], null))));
})()], null))));
})(),(function (){var attrs39364 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39374 = self__.site_stats;var G__39374__$1 = (((G__39374 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39374));var G__39374__$2 = (((G__39374__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39374__$1));return G__39374__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39374 = self__.site_stats;var G__39374__$1 = (((G__39374 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39374));var G__39374__$2 = (((G__39374__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39374__$1));return G__39374__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39364))?sablono.interpreter.attributes(attrs39364):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39364))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39364),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39369 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39375 = self__.site_stats;var G__39375__$1 = (((G__39375 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39375));var G__39375__$2 = (((G__39375__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39375__$1));return G__39375__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39375 = self__.site_stats;var G__39375__$1 = (((G__39375 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39375));var G__39375__$2 = (((G__39375__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39375__$1));return G__39375__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39369))?sablono.interpreter.attributes(attrs39369):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39369))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39369),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39351,map__39351__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39351,map__39351__$1,const_count,ic_count,pc_count){
return (function (_39354){var self__ = this;
var _39354__$1 = this;return self__.meta39353;
});})(map__39351,map__39351__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39351,map__39351__$1,const_count,ic_count,pc_count){
return (function (_39354,meta39353__$1){var self__ = this;
var _39354__$1 = this;return (new clustermap.components.map_report.t39352(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.map__39351,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta39353__$1));
});})(map__39351,map__39351__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39352 = ((function (map__39351,map__39351__$1,const_count,ic_count,pc_count){
return (function __GT_t39352(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,map__39351__$2,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta39353){return (new clustermap.components.map_report.t39352(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,map__39351__$2,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta39353));
});})(map__39351,map__39351__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39352(pc_count,path_fn,const_count,investor_company,map__39351__$1,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__39405 = clustermap.components.map_report.type_counts(site_stats);var map__39405__$1 = ((cljs.core.seq_QMARK_(map__39405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39405):map__39405);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,cljs.core.constant$keyword$987);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,cljs.core.constant$keyword$986);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,cljs.core.constant$keyword$985);if(typeof clustermap.components.map_report.t39406 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39406 = (function (pc_count,path_fn,const_count,ic_count,map__39405,constituency_report,comm,constituency,view_path_fn,site_stats,meta39407){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__39405 = map__39405;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta39407 = meta39407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39406.cljs$lang$type = true;
clustermap.components.map_report.t39406.cljs$lang$ctorStr = "clustermap.components.map-report/t39406";
clustermap.components.map_report.t39406.cljs$lang$ctorPrWriter = ((function (map__39405,map__39405__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t39406");
});})(map__39405,map__39405__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39406.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t39406.prototype.om$core$IRender$render$arity$1 = ((function (map__39405,map__39405__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs39411 = cljs.core.constant$keyword$836.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39411))?sablono.interpreter.attributes(attrs39411):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39411))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39411),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs39416 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39416))?sablono.interpreter.attributes(attrs39416):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39416))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39417 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39417))?sablono.interpreter.attributes(attrs39417):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39417))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39417)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39416),(function (){var attrs39418 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39418))?sablono.interpreter.attributes(attrs39418):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39418))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39418)], null))));
})()], null))));
})(),(function (){var attrs39419 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39419))?sablono.interpreter.attributes(attrs39419):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39419))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs39420 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39420))?sablono.interpreter.attributes(attrs39420):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39420))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39420)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39419),(function (){var attrs39421 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs39421))?sablono.interpreter.attributes(attrs39421):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39421))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39421)], null))));
})()], null))));
})(),(function (){var attrs39422 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__39432 = self__.site_stats;var G__39432__$1 = (((G__39432 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39432));var G__39432__$2 = (((G__39432__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39432__$1));return G__39432__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__39432 = self__.site_stats;var G__39432__$1 = (((G__39432 == null))?null:cljs.core.constant$keyword$952.cljs$core$IFn$_invoke$arity$1(G__39432));var G__39432__$2 = (((G__39432__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39432__$1));return G__39432__$2;
})(),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39422))?sablono.interpreter.attributes(attrs39422):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39422))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39422),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39427 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__39433 = self__.site_stats;var G__39433__$1 = (((G__39433 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39433));var G__39433__$2 = (((G__39433__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39433__$1));return G__39433__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__39433 = self__.site_stats;var G__39433__$1 = (((G__39433 == null))?null:cljs.core.constant$keyword$967.cljs$core$IFn$_invoke$arity$1(G__39433));var G__39433__$2 = (((G__39433__$1 == null))?null:cljs.core.constant$keyword$930.cljs$core$IFn$_invoke$arity$1(G__39433__$1));return G__39433__$2;
})(),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39427))?sablono.interpreter.attributes(attrs39427):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39427))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39427),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__39405,map__39405__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39406.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39405,map__39405__$1,const_count,ic_count,pc_count){
return (function (_39408){var self__ = this;
var _39408__$1 = this;return self__.meta39407;
});})(map__39405,map__39405__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t39406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39405,map__39405__$1,const_count,ic_count,pc_count){
return (function (_39408,meta39407__$1){var self__ = this;
var _39408__$1 = this;return (new clustermap.components.map_report.t39406(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__39405,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta39407__$1));
});})(map__39405,map__39405__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t39406 = ((function (map__39405,map__39405__$1,const_count,ic_count,pc_count){
return (function __GT_t39406(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__39405__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta39407){return (new clustermap.components.map_report.t39406(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__39405__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta39407));
});})(map__39405,map__39405__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t39406(pc_count,path_fn,const_count,ic_count,map__39405__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__39438 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39438__$1 = ((cljs.core.seq_QMARK_(map__39438))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39438):map__39438);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39438__$1,cljs.core.constant$keyword$990);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39438__$1,cljs.core.constant$keyword$889);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39438__$1,cljs.core.constant$keyword$899);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$991);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$953,cljs.core.constant$keyword$806], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$953,cljs.core.constant$keyword$837], null));var site_stats = cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(data);var pred__39439 = cljs.core._EQ__EQ_;var expr__39440 = type;if(cljs.core.truth_((pred__39439.cljs$core$IFn$_invoke$arity$2 ? pred__39439.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,expr__39440) : pred__39439.call(null,cljs.core.constant$keyword$891,expr__39440))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__39439.cljs$core$IFn$_invoke$arity$2 ? pred__39439.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$892,expr__39440) : pred__39439.call(null,cljs.core.constant$keyword$892,expr__39440))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__39439.cljs$core$IFn$_invoke$arity$2 ? pred__39439.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$894,expr__39440) : pred__39439.call(null,cljs.core.constant$keyword$894,expr__39440))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$884,shared,cljs.core.constant$keyword$887,document.getElementById(elem_id)], null));
});
