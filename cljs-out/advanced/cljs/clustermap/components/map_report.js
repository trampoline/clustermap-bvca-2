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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$850) : view_path_fn.call(null,cljs.core.constant$keyword$850))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$860,(function (){var G__35291 = site_stats;var G__35291__$1 = (((G__35291 == null))?null:cljs.core.constant$keyword$847.cljs$core$IFn$_invoke$arity$1(G__35291));return G__35291__$1;
})(),cljs.core.constant$keyword$861,(function (){var G__35292 = site_stats;var G__35292__$1 = (((G__35292 == null))?null:cljs.core.constant$keyword$844.cljs$core$IFn$_invoke$arity$1(G__35292));return G__35292__$1;
})(),cljs.core.constant$keyword$862,(function (){var G__35293 = site_stats;var G__35293__$1 = (((G__35293 == null))?null:cljs.core.constant$keyword$843.cljs$core$IFn$_invoke$arity$1(G__35293));return G__35293__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__35325 = clustermap.components.map_report.type_counts(site_stats);var map__35325__$1 = ((cljs.core.seq_QMARK_(map__35325))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35325):map__35325);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35325__$1,cljs.core.constant$keyword$862);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35325__$1,cljs.core.constant$keyword$861);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35325__$1,cljs.core.constant$keyword$860);if(typeof clustermap.components.map_report.t35326 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35326 = (function (pc_count,ic_count,const_count,map__35325,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta35327){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__35325 = map__35325;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta35327 = meta35327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35326.cljs$lang$type = true;
clustermap.components.map_report.t35326.cljs$lang$ctorStr = "clustermap.components.map-report/t35326";
clustermap.components.map_report.t35326.cljs$lang$ctorPrWriter = ((function (map__35325,map__35325__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35326");
});})(map__35325,map__35325__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35326.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35326.prototype.om$core$IRender$render$arity$1 = ((function (map__35325,map__35325__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs35331 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35331))?sablono.interpreter.attributes(attrs35331):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35331))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35331),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs35336 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35336))?sablono.interpreter.attributes(attrs35336):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35336))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35336),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs35341 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35341))?sablono.interpreter.attributes(attrs35341):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35341))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35342 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35342))?sablono.interpreter.attributes(attrs35342):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35342))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35342)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35341),(function (){var attrs35343 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35343))?sablono.interpreter.attributes(attrs35343):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35343))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35343)], null))));
})()], null))));
})(),(function (){var attrs35344 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35354 = self__.site_stats;var G__35354__$1 = (((G__35354 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35354));var G__35354__$2 = (((G__35354__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35354__$1));return G__35354__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35354 = self__.site_stats;var G__35354__$1 = (((G__35354 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35354));var G__35354__$2 = (((G__35354__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35354__$1));return G__35354__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35344))?sablono.interpreter.attributes(attrs35344):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35344))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35344),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35349 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35355 = self__.site_stats;var G__35355__$1 = (((G__35355 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35355));var G__35355__$2 = (((G__35355__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35355__$1));return G__35355__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35355 = self__.site_stats;var G__35355__$1 = (((G__35355 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35355));var G__35355__$2 = (((G__35355__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35355__$1));return G__35355__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35349))?sablono.interpreter.attributes(attrs35349):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35349))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35349),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35325,map__35325__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35325,map__35325__$1,const_count,ic_count,pc_count){
return (function (_35328){var self__ = this;
var _35328__$1 = this;return self__.meta35327;
});})(map__35325,map__35325__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35325,map__35325__$1,const_count,ic_count,pc_count){
return (function (_35328,meta35327__$1){var self__ = this;
var _35328__$1 = this;return (new clustermap.components.map_report.t35326(self__.pc_count,self__.ic_count,self__.const_count,self__.map__35325,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta35327__$1));
});})(map__35325,map__35325__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35326 = ((function (map__35325,map__35325__$1,const_count,ic_count,pc_count){
return (function __GT_t35326(pc_count__$1,ic_count__$1,const_count__$1,map__35325__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta35327){return (new clustermap.components.map_report.t35326(pc_count__$1,ic_count__$1,const_count__$1,map__35325__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta35327));
});})(map__35325,map__35325__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35326(pc_count,ic_count,const_count,map__35325__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__35381 = clustermap.components.map_report.type_counts(site_stats);var map__35381__$1 = ((cljs.core.seq_QMARK_(map__35381))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35381):map__35381);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,cljs.core.constant$keyword$862);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,cljs.core.constant$keyword$861);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35381__$1,cljs.core.constant$keyword$860);if(typeof clustermap.components.map_report.t35382 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35382 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__35381,comm,view_path_fn,portfolio_company_report,site_stats,meta35383){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__35381 = map__35381;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta35383 = meta35383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35382.cljs$lang$type = true;
clustermap.components.map_report.t35382.cljs$lang$ctorStr = "clustermap.components.map-report/t35382";
clustermap.components.map_report.t35382.cljs$lang$ctorPrWriter = ((function (map__35381,map__35381__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35382");
});})(map__35381,map__35381__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35382.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35382.prototype.om$core$IRender$render$arity$1 = ((function (map__35381,map__35381__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs35387 = cljs.core.constant$keyword$710.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35387))?sablono.interpreter.attributes(attrs35387):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35387))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35387)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35388 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35388))?sablono.interpreter.attributes(attrs35388):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35388))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35389 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35389))?sablono.interpreter.attributes(attrs35389):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35389))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35389)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35388),(function (){var attrs35390 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35390))?sablono.interpreter.attributes(attrs35390):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35390))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35390)], null))));
})()], null))));
})(),(function (){var attrs35391 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35391))?sablono.interpreter.attributes(attrs35391):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35391))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35392 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35392))?sablono.interpreter.attributes(attrs35392):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35392))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35392)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35391),(function (){var attrs35393 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35393))?sablono.interpreter.attributes(attrs35393):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35393))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35393)], null))));
})()], null))));
})(),(function (){var attrs35394 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35404 = self__.site_stats;var G__35404__$1 = (((G__35404 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35404));var G__35404__$2 = (((G__35404__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35404__$1));return G__35404__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35404 = self__.site_stats;var G__35404__$1 = (((G__35404 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35404));var G__35404__$2 = (((G__35404__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35404__$1));return G__35404__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35394))?sablono.interpreter.attributes(attrs35394):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35394))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35394),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35399 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35405 = self__.site_stats;var G__35405__$1 = (((G__35405 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35405));var G__35405__$2 = (((G__35405__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35405__$1));return G__35405__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35405 = self__.site_stats;var G__35405__$1 = (((G__35405 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35405));var G__35405__$2 = (((G__35405__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35405__$1));return G__35405__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35399))?sablono.interpreter.attributes(attrs35399):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35399))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35399),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35381,map__35381__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35381,map__35381__$1,const_count,ic_count,pc_count){
return (function (_35384){var self__ = this;
var _35384__$1 = this;return self__.meta35383;
});})(map__35381,map__35381__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35381,map__35381__$1,const_count,ic_count,pc_count){
return (function (_35384,meta35383__$1){var self__ = this;
var _35384__$1 = this;return (new clustermap.components.map_report.t35382(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__35381,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta35383__$1));
});})(map__35381,map__35381__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35382 = ((function (map__35381,map__35381__$1,const_count,ic_count,pc_count){
return (function __GT_t35382(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__35381__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta35383){return (new clustermap.components.map_report.t35382(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__35381__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta35383));
});})(map__35381,map__35381__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35382(pc_count,path_fn,const_count,portfolio_company,ic_count,map__35381__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__35431 = clustermap.components.map_report.type_counts(site_stats);var map__35431__$1 = ((cljs.core.seq_QMARK_(map__35431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35431):map__35431);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,cljs.core.constant$keyword$862);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,cljs.core.constant$keyword$861);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35431__$1,cljs.core.constant$keyword$860);if(typeof clustermap.components.map_report.t35432 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35432 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__35431,comm,investor_company_report,view_path_fn,site_stats,meta35433){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__35431 = map__35431;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta35433 = meta35433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35432.cljs$lang$type = true;
clustermap.components.map_report.t35432.cljs$lang$ctorStr = "clustermap.components.map-report/t35432";
clustermap.components.map_report.t35432.cljs$lang$ctorPrWriter = ((function (map__35431,map__35431__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35432");
});})(map__35431,map__35431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35432.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35432.prototype.om$core$IRender$render$arity$1 = ((function (map__35431,map__35431__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs35437 = cljs.core.constant$keyword$710.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35437))?sablono.interpreter.attributes(attrs35437):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35437))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35437)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35438 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35438))?sablono.interpreter.attributes(attrs35438):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35438))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35439 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35439))?sablono.interpreter.attributes(attrs35439):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35439))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35439)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35438),(function (){var attrs35440 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35440))?sablono.interpreter.attributes(attrs35440):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35440))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35440)], null))));
})()], null))));
})(),(function (){var attrs35441 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35441))?sablono.interpreter.attributes(attrs35441):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35441))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35442 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35442))?sablono.interpreter.attributes(attrs35442):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35442))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35442)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35441),(function (){var attrs35443 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35443))?sablono.interpreter.attributes(attrs35443):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35443))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35443)], null))));
})()], null))));
})(),(function (){var attrs35444 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35454 = self__.site_stats;var G__35454__$1 = (((G__35454 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35454));var G__35454__$2 = (((G__35454__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35454__$1));return G__35454__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35454 = self__.site_stats;var G__35454__$1 = (((G__35454 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35454));var G__35454__$2 = (((G__35454__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35454__$1));return G__35454__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35444))?sablono.interpreter.attributes(attrs35444):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35444))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35444),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35449 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35455 = self__.site_stats;var G__35455__$1 = (((G__35455 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35455));var G__35455__$2 = (((G__35455__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35455__$1));return G__35455__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35455 = self__.site_stats;var G__35455__$1 = (((G__35455 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35455));var G__35455__$2 = (((G__35455__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35455__$1));return G__35455__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35449))?sablono.interpreter.attributes(attrs35449):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35449))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35449),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35431,map__35431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35431,map__35431__$1,const_count,ic_count,pc_count){
return (function (_35434){var self__ = this;
var _35434__$1 = this;return self__.meta35433;
});})(map__35431,map__35431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35431,map__35431__$1,const_count,ic_count,pc_count){
return (function (_35434,meta35433__$1){var self__ = this;
var _35434__$1 = this;return (new clustermap.components.map_report.t35432(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__35431,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta35433__$1));
});})(map__35431,map__35431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35432 = ((function (map__35431,map__35431__$1,const_count,ic_count,pc_count){
return (function __GT_t35432(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__35431__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35433){return (new clustermap.components.map_report.t35432(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__35431__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35433));
});})(map__35431,map__35431__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35432(pc_count,path_fn,const_count,investor_company,ic_count,map__35431__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__35485 = clustermap.components.map_report.type_counts(site_stats);var map__35485__$1 = ((cljs.core.seq_QMARK_(map__35485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35485):map__35485);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35485__$1,cljs.core.constant$keyword$862);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35485__$1,cljs.core.constant$keyword$861);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35485__$1,cljs.core.constant$keyword$860);if(typeof clustermap.components.map_report.t35486 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35486 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__35485,site_stats,meta35487){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__35485 = map__35485;
this.site_stats = site_stats;
this.meta35487 = meta35487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35486.cljs$lang$type = true;
clustermap.components.map_report.t35486.cljs$lang$ctorStr = "clustermap.components.map-report/t35486";
clustermap.components.map_report.t35486.cljs$lang$ctorPrWriter = ((function (map__35485,map__35485__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35486");
});})(map__35485,map__35485__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35486.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35486.prototype.om$core$IRender$render$arity$1 = ((function (map__35485,map__35485__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs35491 = cljs.core.constant$keyword$710.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35491))?sablono.interpreter.attributes(attrs35491):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35491))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35491),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35496 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35496))?sablono.interpreter.attributes(attrs35496):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35496))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35497 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35497))?sablono.interpreter.attributes(attrs35497):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35497))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35497)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35496),(function (){var attrs35498 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35498))?sablono.interpreter.attributes(attrs35498):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35498))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35498)], null))));
})()], null))));
})(),(function (){var attrs35499 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35499))?sablono.interpreter.attributes(attrs35499):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35499))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35500 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35500))?sablono.interpreter.attributes(attrs35500):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35500))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35500)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35499),(function (){var attrs35501 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35501))?sablono.interpreter.attributes(attrs35501):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35501))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35501)], null))));
})()], null))));
})(),(function (){var attrs35502 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35512 = self__.site_stats;var G__35512__$1 = (((G__35512 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35512));var G__35512__$2 = (((G__35512__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35512__$1));return G__35512__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35512 = self__.site_stats;var G__35512__$1 = (((G__35512 == null))?null:cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(G__35512));var G__35512__$2 = (((G__35512__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35512__$1));return G__35512__$2;
})(),cljs.core.constant$keyword$689,(2),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35502))?sablono.interpreter.attributes(attrs35502):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35502))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35502),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35507 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35513 = self__.site_stats;var G__35513__$1 = (((G__35513 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35513));var G__35513__$2 = (((G__35513__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35513__$1));return G__35513__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35513 = self__.site_stats;var G__35513__$1 = (((G__35513 == null))?null:cljs.core.constant$keyword$842.cljs$core$IFn$_invoke$arity$1(G__35513));var G__35513__$2 = (((G__35513__$1 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__35513__$1));return G__35513__$2;
})(),cljs.core.constant$keyword$691,(0),cljs.core.constant$keyword$645,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35507))?sablono.interpreter.attributes(attrs35507):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35507))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35507),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35485,map__35485__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35485,map__35485__$1,const_count,ic_count,pc_count){
return (function (_35488){var self__ = this;
var _35488__$1 = this;return self__.meta35487;
});})(map__35485,map__35485__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35485,map__35485__$1,const_count,ic_count,pc_count){
return (function (_35488,meta35487__$1){var self__ = this;
var _35488__$1 = this;return (new clustermap.components.map_report.t35486(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__35485,self__.site_stats,meta35487__$1));
});})(map__35485,map__35485__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35486 = ((function (map__35485,map__35485__$1,const_count,ic_count,pc_count){
return (function __GT_t35486(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__35485__$2,site_stats__$1,meta35487){return (new clustermap.components.map_report.t35486(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__35485__$2,site_stats__$1,meta35487));
});})(map__35485,map__35485__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35486(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__35485__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__35518 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35518__$1 = ((cljs.core.seq_QMARK_(map__35518))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35518):map__35518);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35518__$1,cljs.core.constant$keyword$865);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35518__$1,cljs.core.constant$keyword$764);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35518__$1,cljs.core.constant$keyword$774);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$866);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,cljs.core.constant$keyword$679], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$828,cljs.core.constant$keyword$711], null));var site_stats = cljs.core.constant$keyword$832.cljs$core$IFn$_invoke$arity$1(data);var pred__35519 = cljs.core._EQ__EQ_;var expr__35520 = type;if(cljs.core.truth_((pred__35519.cljs$core$IFn$_invoke$arity$2 ? pred__35519.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$766,expr__35520) : pred__35519.call(null,cljs.core.constant$keyword$766,expr__35520))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35519.cljs$core$IFn$_invoke$arity$2 ? pred__35519.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$767,expr__35520) : pred__35519.call(null,cljs.core.constant$keyword$767,expr__35520))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35519.cljs$core$IFn$_invoke$arity$2 ? pred__35519.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$769,expr__35520) : pred__35519.call(null,cljs.core.constant$keyword$769,expr__35520))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$759,shared,cljs.core.constant$keyword$762,document.getElementById(elem_id)], null));
});
