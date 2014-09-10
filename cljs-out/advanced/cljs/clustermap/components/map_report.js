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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$991) : view_path_fn.call(null,cljs.core.constant$keyword$991))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1001,(function (){var G__38336 = site_stats;var G__38336__$1 = (((G__38336 == null))?null:cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(G__38336));return G__38336__$1;
})(),cljs.core.constant$keyword$1002,(function (){var G__38337 = site_stats;var G__38337__$1 = (((G__38337 == null))?null:cljs.core.constant$keyword$985.cljs$core$IFn$_invoke$arity$1(G__38337));return G__38337__$1;
})(),cljs.core.constant$keyword$1003,(function (){var G__38338 = site_stats;var G__38338__$1 = (((G__38338 == null))?null:cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(G__38338));return G__38338__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__38370 = clustermap.components.map_report.type_counts(site_stats);var map__38370__$1 = ((cljs.core.seq_QMARK_(map__38370))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38370):map__38370);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38370__$1,cljs.core.constant$keyword$1003);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38370__$1,cljs.core.constant$keyword$1002);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38370__$1,cljs.core.constant$keyword$1001);if(typeof clustermap.components.map_report.t38371 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38371 = (function (pc_count,ic_count,const_count,map__38370,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta38372){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__38370 = map__38370;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta38372 = meta38372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38371.cljs$lang$type = true;
clustermap.components.map_report.t38371.cljs$lang$ctorStr = "clustermap.components.map-report/t38371";
clustermap.components.map_report.t38371.cljs$lang$ctorPrWriter = ((function (map__38370,map__38370__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t38371");
});})(map__38370,map__38370__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38371.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38371.prototype.om$core$IRender$render$arity$1 = ((function (map__38370,map__38370__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs38376 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38376))?sablono.interpreter.attributes(attrs38376):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38376))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38376),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs38381 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38381))?sablono.interpreter.attributes(attrs38381):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38381))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38381),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs38386 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38386))?sablono.interpreter.attributes(attrs38386):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38386))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38387 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38387))?sablono.interpreter.attributes(attrs38387):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38387))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38387)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38386),(function (){var attrs38388 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38388))?sablono.interpreter.attributes(attrs38388):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38388))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38388)], null))));
})()], null))));
})(),(function (){var attrs38389 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38399 = self__.site_stats;var G__38399__$1 = (((G__38399 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38399));var G__38399__$2 = (((G__38399__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38399__$1));return G__38399__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38399 = self__.site_stats;var G__38399__$1 = (((G__38399 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38399));var G__38399__$2 = (((G__38399__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38399__$1));return G__38399__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38389))?sablono.interpreter.attributes(attrs38389):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38389))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38389),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38394 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38400 = self__.site_stats;var G__38400__$1 = (((G__38400 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38400));var G__38400__$2 = (((G__38400__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38400__$1));return G__38400__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38400 = self__.site_stats;var G__38400__$1 = (((G__38400 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38400));var G__38400__$2 = (((G__38400__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38400__$1));return G__38400__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38394))?sablono.interpreter.attributes(attrs38394):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38394))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38394),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38370,map__38370__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38370,map__38370__$1,const_count,ic_count,pc_count){
return (function (_38373){var self__ = this;
var _38373__$1 = this;return self__.meta38372;
});})(map__38370,map__38370__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38370,map__38370__$1,const_count,ic_count,pc_count){
return (function (_38373,meta38372__$1){var self__ = this;
var _38373__$1 = this;return (new clustermap.components.map_report.t38371(self__.pc_count,self__.ic_count,self__.const_count,self__.map__38370,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta38372__$1));
});})(map__38370,map__38370__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38371 = ((function (map__38370,map__38370__$1,const_count,ic_count,pc_count){
return (function __GT_t38371(pc_count__$1,ic_count__$1,const_count__$1,map__38370__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta38372){return (new clustermap.components.map_report.t38371(pc_count__$1,ic_count__$1,const_count__$1,map__38370__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta38372));
});})(map__38370,map__38370__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38371(pc_count,ic_count,const_count,map__38370__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__38426 = clustermap.components.map_report.type_counts(site_stats);var map__38426__$1 = ((cljs.core.seq_QMARK_(map__38426))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38426):map__38426);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38426__$1,cljs.core.constant$keyword$1003);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38426__$1,cljs.core.constant$keyword$1002);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38426__$1,cljs.core.constant$keyword$1001);if(typeof clustermap.components.map_report.t38427 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38427 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__38426,comm,view_path_fn,portfolio_company_report,site_stats,meta38428){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__38426 = map__38426;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta38428 = meta38428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38427.cljs$lang$type = true;
clustermap.components.map_report.t38427.cljs$lang$ctorStr = "clustermap.components.map-report/t38427";
clustermap.components.map_report.t38427.cljs$lang$ctorPrWriter = ((function (map__38426,map__38426__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t38427");
});})(map__38426,map__38426__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38427.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38427.prototype.om$core$IRender$render$arity$1 = ((function (map__38426,map__38426__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs38432 = cljs.core.constant$keyword$852.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38432))?sablono.interpreter.attributes(attrs38432):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38432))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38432)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38433 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38433))?sablono.interpreter.attributes(attrs38433):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38433))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38434 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38434))?sablono.interpreter.attributes(attrs38434):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38434))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38434)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38433),(function (){var attrs38435 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38435))?sablono.interpreter.attributes(attrs38435):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38435))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38435)], null))));
})()], null))));
})(),(function (){var attrs38436 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38436))?sablono.interpreter.attributes(attrs38436):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38436))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38437 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38437))?sablono.interpreter.attributes(attrs38437):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38437))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38437)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38436),(function (){var attrs38438 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38438))?sablono.interpreter.attributes(attrs38438):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38438))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38438)], null))));
})()], null))));
})(),(function (){var attrs38439 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38449 = self__.site_stats;var G__38449__$1 = (((G__38449 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38449));var G__38449__$2 = (((G__38449__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38449__$1));return G__38449__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38449 = self__.site_stats;var G__38449__$1 = (((G__38449 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38449));var G__38449__$2 = (((G__38449__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38449__$1));return G__38449__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38439))?sablono.interpreter.attributes(attrs38439):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38439))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38439),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38444 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38450 = self__.site_stats;var G__38450__$1 = (((G__38450 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38450));var G__38450__$2 = (((G__38450__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38450__$1));return G__38450__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38450 = self__.site_stats;var G__38450__$1 = (((G__38450 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38450));var G__38450__$2 = (((G__38450__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38450__$1));return G__38450__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38444))?sablono.interpreter.attributes(attrs38444):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38444))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38444),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38426,map__38426__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38427.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38426,map__38426__$1,const_count,ic_count,pc_count){
return (function (_38429){var self__ = this;
var _38429__$1 = this;return self__.meta38428;
});})(map__38426,map__38426__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38426,map__38426__$1,const_count,ic_count,pc_count){
return (function (_38429,meta38428__$1){var self__ = this;
var _38429__$1 = this;return (new clustermap.components.map_report.t38427(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__38426,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta38428__$1));
});})(map__38426,map__38426__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38427 = ((function (map__38426,map__38426__$1,const_count,ic_count,pc_count){
return (function __GT_t38427(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__38426__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta38428){return (new clustermap.components.map_report.t38427(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__38426__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta38428));
});})(map__38426,map__38426__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38427(pc_count,path_fn,const_count,portfolio_company,ic_count,map__38426__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__38476 = clustermap.components.map_report.type_counts(site_stats);var map__38476__$1 = ((cljs.core.seq_QMARK_(map__38476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38476):map__38476);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,cljs.core.constant$keyword$1003);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,cljs.core.constant$keyword$1002);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38476__$1,cljs.core.constant$keyword$1001);if(typeof clustermap.components.map_report.t38477 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38477 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__38476,comm,investor_company_report,view_path_fn,site_stats,meta38478){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__38476 = map__38476;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta38478 = meta38478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38477.cljs$lang$type = true;
clustermap.components.map_report.t38477.cljs$lang$ctorStr = "clustermap.components.map-report/t38477";
clustermap.components.map_report.t38477.cljs$lang$ctorPrWriter = ((function (map__38476,map__38476__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t38477");
});})(map__38476,map__38476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38477.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38477.prototype.om$core$IRender$render$arity$1 = ((function (map__38476,map__38476__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs38482 = cljs.core.constant$keyword$852.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38482))?sablono.interpreter.attributes(attrs38482):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38482))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38482)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38483 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38483))?sablono.interpreter.attributes(attrs38483):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38483))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38484 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38484))?sablono.interpreter.attributes(attrs38484):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38484))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38484)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38483),(function (){var attrs38485 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38485))?sablono.interpreter.attributes(attrs38485):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38485))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38485)], null))));
})()], null))));
})(),(function (){var attrs38486 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38486))?sablono.interpreter.attributes(attrs38486):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38486))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38487 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38487))?sablono.interpreter.attributes(attrs38487):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38487))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38487)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38486),(function (){var attrs38488 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38488))?sablono.interpreter.attributes(attrs38488):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38488))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38488)], null))));
})()], null))));
})(),(function (){var attrs38489 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38499 = self__.site_stats;var G__38499__$1 = (((G__38499 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38499));var G__38499__$2 = (((G__38499__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38499__$1));return G__38499__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38499 = self__.site_stats;var G__38499__$1 = (((G__38499 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38499));var G__38499__$2 = (((G__38499__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38499__$1));return G__38499__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38489))?sablono.interpreter.attributes(attrs38489):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38489))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38489),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38494 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38500 = self__.site_stats;var G__38500__$1 = (((G__38500 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38500));var G__38500__$2 = (((G__38500__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38500__$1));return G__38500__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38500 = self__.site_stats;var G__38500__$1 = (((G__38500 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38500));var G__38500__$2 = (((G__38500__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38500__$1));return G__38500__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38494))?sablono.interpreter.attributes(attrs38494):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38494))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38494),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38476,map__38476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38476,map__38476__$1,const_count,ic_count,pc_count){
return (function (_38479){var self__ = this;
var _38479__$1 = this;return self__.meta38478;
});})(map__38476,map__38476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38476,map__38476__$1,const_count,ic_count,pc_count){
return (function (_38479,meta38478__$1){var self__ = this;
var _38479__$1 = this;return (new clustermap.components.map_report.t38477(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__38476,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta38478__$1));
});})(map__38476,map__38476__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38477 = ((function (map__38476,map__38476__$1,const_count,ic_count,pc_count){
return (function __GT_t38477(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__38476__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta38478){return (new clustermap.components.map_report.t38477(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__38476__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta38478));
});})(map__38476,map__38476__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38477(pc_count,path_fn,const_count,investor_company,ic_count,map__38476__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__38530 = clustermap.components.map_report.type_counts(site_stats);var map__38530__$1 = ((cljs.core.seq_QMARK_(map__38530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38530):map__38530);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,cljs.core.constant$keyword$1003);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,cljs.core.constant$keyword$1002);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,cljs.core.constant$keyword$1001);if(typeof clustermap.components.map_report.t38531 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38531 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__38530,site_stats,meta38532){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__38530 = map__38530;
this.site_stats = site_stats;
this.meta38532 = meta38532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38531.cljs$lang$type = true;
clustermap.components.map_report.t38531.cljs$lang$ctorStr = "clustermap.components.map-report/t38531";
clustermap.components.map_report.t38531.cljs$lang$ctorPrWriter = ((function (map__38530,map__38530__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t38531");
});})(map__38530,map__38530__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38531.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38531.prototype.om$core$IRender$render$arity$1 = ((function (map__38530,map__38530__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs38536 = cljs.core.constant$keyword$852.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38536))?sablono.interpreter.attributes(attrs38536):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38536))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.constant$keyword$1004.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.constant$keyword$1005.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$1004.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$1005.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38536),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.constant$keyword$1004.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.constant$keyword$1005.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$1004.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$1005.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38541 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38541))?sablono.interpreter.attributes(attrs38541):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38541))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38542 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38542))?sablono.interpreter.attributes(attrs38542):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38542))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38542)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38541),(function (){var attrs38543 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38543))?sablono.interpreter.attributes(attrs38543):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38543)], null))));
})()], null))));
})(),(function (){var attrs38544 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38544))?sablono.interpreter.attributes(attrs38544):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38544))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38545 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38545))?sablono.interpreter.attributes(attrs38545):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38545))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38545)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38544),(function (){var attrs38546 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38546))?sablono.interpreter.attributes(attrs38546):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38546))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38546)], null))));
})()], null))));
})(),(function (){var attrs38547 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38557 = self__.site_stats;var G__38557__$1 = (((G__38557 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38557));var G__38557__$2 = (((G__38557__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38557__$1));return G__38557__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38557 = self__.site_stats;var G__38557__$1 = (((G__38557 == null))?null:cljs.core.constant$keyword$968.cljs$core$IFn$_invoke$arity$1(G__38557));var G__38557__$2 = (((G__38557__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38557__$1));return G__38557__$2;
})(),cljs.core.constant$keyword$832,(2),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38547))?sablono.interpreter.attributes(attrs38547):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38547))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38547),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38552 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38558 = self__.site_stats;var G__38558__$1 = (((G__38558 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38558));var G__38558__$2 = (((G__38558__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38558__$1));return G__38558__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38558 = self__.site_stats;var G__38558__$1 = (((G__38558 == null))?null:cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(G__38558));var G__38558__$2 = (((G__38558__$1 == null))?null:cljs.core.constant$keyword$946.cljs$core$IFn$_invoke$arity$1(G__38558__$1));return G__38558__$2;
})(),cljs.core.constant$keyword$834,(0),cljs.core.constant$keyword$779,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38552))?sablono.interpreter.attributes(attrs38552):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38552))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38552),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38530,map__38530__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38531.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38530,map__38530__$1,const_count,ic_count,pc_count){
return (function (_38533){var self__ = this;
var _38533__$1 = this;return self__.meta38532;
});})(map__38530,map__38530__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38530,map__38530__$1,const_count,ic_count,pc_count){
return (function (_38533,meta38532__$1){var self__ = this;
var _38533__$1 = this;return (new clustermap.components.map_report.t38531(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__38530,self__.site_stats,meta38532__$1));
});})(map__38530,map__38530__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38531 = ((function (map__38530,map__38530__$1,const_count,ic_count,pc_count){
return (function __GT_t38531(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__38530__$2,site_stats__$1,meta38532){return (new clustermap.components.map_report.t38531(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__38530__$2,site_stats__$1,meta38532));
});})(map__38530,map__38530__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38531(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__38530__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__38563 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38563__$1 = ((cljs.core.seq_QMARK_(map__38563))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38563):map__38563);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38563__$1,cljs.core.constant$keyword$1006);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38563__$1,cljs.core.constant$keyword$905);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38563__$1,cljs.core.constant$keyword$915);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1007);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$969,cljs.core.constant$keyword$822], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$969,cljs.core.constant$keyword$853], null));var site_stats = cljs.core.constant$keyword$973.cljs$core$IFn$_invoke$arity$1(data);var pred__38564 = cljs.core._EQ__EQ_;var expr__38565 = type;if(cljs.core.truth_((pred__38564.cljs$core$IFn$_invoke$arity$2 ? pred__38564.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$907,expr__38565) : pred__38564.call(null,cljs.core.constant$keyword$907,expr__38565))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__38564.cljs$core$IFn$_invoke$arity$2 ? pred__38564.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$908,expr__38565) : pred__38564.call(null,cljs.core.constant$keyword$908,expr__38565))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__38564.cljs$core$IFn$_invoke$arity$2 ? pred__38564.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$910,expr__38565) : pred__38564.call(null,cljs.core.constant$keyword$910,expr__38565))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,shared,cljs.core.constant$keyword$903,document.getElementById(elem_id)], null));
});
