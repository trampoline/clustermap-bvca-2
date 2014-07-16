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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$966) : view_path_fn.call(null,cljs.core.constant$keyword$966))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$976,(function (){var G__37121 = site_stats;var G__37121__$1 = (((G__37121 == null))?null:cljs.core.constant$keyword$963.cljs$core$IFn$_invoke$arity$1(G__37121));return G__37121__$1;
})(),cljs.core.constant$keyword$977,(function (){var G__37122 = site_stats;var G__37122__$1 = (((G__37122 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__37122));return G__37122__$1;
})(),cljs.core.constant$keyword$978,(function (){var G__37123 = site_stats;var G__37123__$1 = (((G__37123 == null))?null:cljs.core.constant$keyword$959.cljs$core$IFn$_invoke$arity$1(G__37123));return G__37123__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__37155 = clustermap.components.map_report.type_counts(site_stats);var map__37155__$1 = ((cljs.core.seq_QMARK_(map__37155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37155):map__37155);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37155__$1,cljs.core.constant$keyword$978);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37155__$1,cljs.core.constant$keyword$977);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37155__$1,cljs.core.constant$keyword$976);if(typeof clustermap.components.map_report.t37156 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37156 = (function (pc_count,ic_count,const_count,map__37155,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta37157){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__37155 = map__37155;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta37157 = meta37157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37156.cljs$lang$type = true;
clustermap.components.map_report.t37156.cljs$lang$ctorStr = "clustermap.components.map-report/t37156";
clustermap.components.map_report.t37156.cljs$lang$ctorPrWriter = ((function (map__37155,map__37155__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37156");
});})(map__37155,map__37155__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37156.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37156.prototype.om$core$IRender$render$arity$1 = ((function (map__37155,map__37155__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs37161 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37161))?sablono.interpreter.attributes(attrs37161):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37161))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37161),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs37166 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37166))?sablono.interpreter.attributes(attrs37166):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37166))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37166),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs37171 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37171))?sablono.interpreter.attributes(attrs37171):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37171))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37172 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37172))?sablono.interpreter.attributes(attrs37172):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37172))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37172)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37171),(function (){var attrs37173 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37173))?sablono.interpreter.attributes(attrs37173):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37173))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37173)], null))));
})()], null))));
})(),(function (){var attrs37174 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37184 = self__.site_stats;var G__37184__$1 = (((G__37184 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37184));var G__37184__$2 = (((G__37184__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37184__$1));return G__37184__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37184 = self__.site_stats;var G__37184__$1 = (((G__37184 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37184));var G__37184__$2 = (((G__37184__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37184__$1));return G__37184__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37174))?sablono.interpreter.attributes(attrs37174):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37174))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37174),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37179 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37185 = self__.site_stats;var G__37185__$1 = (((G__37185 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37185));var G__37185__$2 = (((G__37185__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37185__$1));return G__37185__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37185 = self__.site_stats;var G__37185__$1 = (((G__37185 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37185));var G__37185__$2 = (((G__37185__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37185__$1));return G__37185__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37179))?sablono.interpreter.attributes(attrs37179):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37179))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37179),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37155,map__37155__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37156.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37155,map__37155__$1,const_count,ic_count,pc_count){
return (function (_37158){var self__ = this;
var _37158__$1 = this;return self__.meta37157;
});})(map__37155,map__37155__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37155,map__37155__$1,const_count,ic_count,pc_count){
return (function (_37158,meta37157__$1){var self__ = this;
var _37158__$1 = this;return (new clustermap.components.map_report.t37156(self__.pc_count,self__.ic_count,self__.const_count,self__.map__37155,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta37157__$1));
});})(map__37155,map__37155__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37156 = ((function (map__37155,map__37155__$1,const_count,ic_count,pc_count){
return (function __GT_t37156(pc_count__$1,ic_count__$1,const_count__$1,map__37155__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37157){return (new clustermap.components.map_report.t37156(pc_count__$1,ic_count__$1,const_count__$1,map__37155__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37157));
});})(map__37155,map__37155__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37156(pc_count,ic_count,const_count,map__37155__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__37211 = clustermap.components.map_report.type_counts(site_stats);var map__37211__$1 = ((cljs.core.seq_QMARK_(map__37211))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37211):map__37211);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,cljs.core.constant$keyword$978);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,cljs.core.constant$keyword$977);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37211__$1,cljs.core.constant$keyword$976);if(typeof clustermap.components.map_report.t37212 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37212 = (function (pc_count,map__37211,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta37213){
this.pc_count = pc_count;
this.map__37211 = map__37211;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta37213 = meta37213;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37212.cljs$lang$type = true;
clustermap.components.map_report.t37212.cljs$lang$ctorStr = "clustermap.components.map-report/t37212";
clustermap.components.map_report.t37212.cljs$lang$ctorPrWriter = ((function (map__37211,map__37211__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37212");
});})(map__37211,map__37211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37212.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37212.prototype.om$core$IRender$render$arity$1 = ((function (map__37211,map__37211__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs37217 = cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37217))?sablono.interpreter.attributes(attrs37217):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37217)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37218 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37218))?sablono.interpreter.attributes(attrs37218):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37218))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37219 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37219))?sablono.interpreter.attributes(attrs37219):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37219))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37219)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37218),(function (){var attrs37220 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37220))?sablono.interpreter.attributes(attrs37220):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37220))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37220)], null))));
})()], null))));
})(),(function (){var attrs37221 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37221))?sablono.interpreter.attributes(attrs37221):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37221))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37222 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37222))?sablono.interpreter.attributes(attrs37222):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37222))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37222)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37221),(function (){var attrs37223 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37223))?sablono.interpreter.attributes(attrs37223):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37223))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37223)], null))));
})()], null))));
})(),(function (){var attrs37224 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37234 = self__.site_stats;var G__37234__$1 = (((G__37234 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37234));var G__37234__$2 = (((G__37234__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37234__$1));return G__37234__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37234 = self__.site_stats;var G__37234__$1 = (((G__37234 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37234));var G__37234__$2 = (((G__37234__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37234__$1));return G__37234__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37224))?sablono.interpreter.attributes(attrs37224):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37224))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37224),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37229 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37235 = self__.site_stats;var G__37235__$1 = (((G__37235 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37235));var G__37235__$2 = (((G__37235__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37235__$1));return G__37235__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37235 = self__.site_stats;var G__37235__$1 = (((G__37235 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37235));var G__37235__$2 = (((G__37235__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37235__$1));return G__37235__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37229))?sablono.interpreter.attributes(attrs37229):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37229))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37229),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37211,map__37211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37211,map__37211__$1,const_count,ic_count,pc_count){
return (function (_37214){var self__ = this;
var _37214__$1 = this;return self__.meta37213;
});})(map__37211,map__37211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37211,map__37211__$1,const_count,ic_count,pc_count){
return (function (_37214,meta37213__$1){var self__ = this;
var _37214__$1 = this;return (new clustermap.components.map_report.t37212(self__.pc_count,self__.map__37211,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta37213__$1));
});})(map__37211,map__37211__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37212 = ((function (map__37211,map__37211__$1,const_count,ic_count,pc_count){
return (function __GT_t37212(pc_count__$1,map__37211__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta37213){return (new clustermap.components.map_report.t37212(pc_count__$1,map__37211__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta37213));
});})(map__37211,map__37211__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37212(pc_count,map__37211__$1,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__37261 = clustermap.components.map_report.type_counts(site_stats);var map__37261__$1 = ((cljs.core.seq_QMARK_(map__37261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37261):map__37261);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,cljs.core.constant$keyword$978);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,cljs.core.constant$keyword$977);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,cljs.core.constant$keyword$976);if(typeof clustermap.components.map_report.t37262 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37262 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,map__37261,view_path_fn,site_stats,meta37263){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.map__37261 = map__37261;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta37263 = meta37263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37262.cljs$lang$type = true;
clustermap.components.map_report.t37262.cljs$lang$ctorStr = "clustermap.components.map-report/t37262";
clustermap.components.map_report.t37262.cljs$lang$ctorPrWriter = ((function (map__37261,map__37261__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37262");
});})(map__37261,map__37261__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37262.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37262.prototype.om$core$IRender$render$arity$1 = ((function (map__37261,map__37261__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs37267 = cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37267))?sablono.interpreter.attributes(attrs37267):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37267)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37268 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37268))?sablono.interpreter.attributes(attrs37268):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37268))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37269 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37269))?sablono.interpreter.attributes(attrs37269):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37269))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37269)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37268),(function (){var attrs37270 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37270))?sablono.interpreter.attributes(attrs37270):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37270))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37270)], null))));
})()], null))));
})(),(function (){var attrs37271 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37271))?sablono.interpreter.attributes(attrs37271):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37271))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37272 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37272))?sablono.interpreter.attributes(attrs37272):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37272)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37271),(function (){var attrs37273 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37273))?sablono.interpreter.attributes(attrs37273):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37273))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37273)], null))));
})()], null))));
})(),(function (){var attrs37274 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37284 = self__.site_stats;var G__37284__$1 = (((G__37284 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37284));var G__37284__$2 = (((G__37284__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37284__$1));return G__37284__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37284 = self__.site_stats;var G__37284__$1 = (((G__37284 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37284));var G__37284__$2 = (((G__37284__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37284__$1));return G__37284__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37274))?sablono.interpreter.attributes(attrs37274):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37274))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37274),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37279 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37285 = self__.site_stats;var G__37285__$1 = (((G__37285 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37285));var G__37285__$2 = (((G__37285__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37285__$1));return G__37285__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37285 = self__.site_stats;var G__37285__$1 = (((G__37285 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37285));var G__37285__$2 = (((G__37285__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37285__$1));return G__37285__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37279))?sablono.interpreter.attributes(attrs37279):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37279))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37279),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37261,map__37261__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37262.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37261,map__37261__$1,const_count,ic_count,pc_count){
return (function (_37264){var self__ = this;
var _37264__$1 = this;return self__.meta37263;
});})(map__37261,map__37261__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37261,map__37261__$1,const_count,ic_count,pc_count){
return (function (_37264,meta37263__$1){var self__ = this;
var _37264__$1 = this;return (new clustermap.components.map_report.t37262(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.map__37261,self__.view_path_fn,self__.site_stats,meta37263__$1));
});})(map__37261,map__37261__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37262 = ((function (map__37261,map__37261__$1,const_count,ic_count,pc_count){
return (function __GT_t37262(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,map__37261__$2,view_path_fn__$1,site_stats__$1,meta37263){return (new clustermap.components.map_report.t37262(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,map__37261__$2,view_path_fn__$1,site_stats__$1,meta37263));
});})(map__37261,map__37261__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37262(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,map__37261__$1,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__37315 = clustermap.components.map_report.type_counts(site_stats);var map__37315__$1 = ((cljs.core.seq_QMARK_(map__37315))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37315):map__37315);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,cljs.core.constant$keyword$978);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,cljs.core.constant$keyword$977);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37315__$1,cljs.core.constant$keyword$976);if(typeof clustermap.components.map_report.t37316 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37316 = (function (pc_count,path_fn,const_count,ic_count,map__37315,constituency_report,comm,constituency,view_path_fn,site_stats,meta37317){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__37315 = map__37315;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta37317 = meta37317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37316.cljs$lang$type = true;
clustermap.components.map_report.t37316.cljs$lang$ctorStr = "clustermap.components.map-report/t37316";
clustermap.components.map_report.t37316.cljs$lang$ctorPrWriter = ((function (map__37315,map__37315__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37316");
});})(map__37315,map__37315__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37316.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37316.prototype.om$core$IRender$render$arity$1 = ((function (map__37315,map__37315__$1,const_count,ic_count,pc_count){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs37321 = cljs.core.constant$keyword$827.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37321))?sablono.interpreter.attributes(attrs37321):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37321))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$979.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$980.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$979.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$980.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37321),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$979.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$980.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$979.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$980.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs37326 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37326))?sablono.interpreter.attributes(attrs37326):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37326))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37327 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37327))?sablono.interpreter.attributes(attrs37327):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37327))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37327)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37326),(function (){var attrs37328 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37328))?sablono.interpreter.attributes(attrs37328):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37328))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37328)], null))));
})()], null))));
})(),(function (){var attrs37329 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37329))?sablono.interpreter.attributes(attrs37329):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37329))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37330 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37330))?sablono.interpreter.attributes(attrs37330):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37330))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37330)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37329),(function (){var attrs37331 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37331))?sablono.interpreter.attributes(attrs37331):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37331))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37331)], null))));
})()], null))));
})(),(function (){var attrs37332 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37342 = self__.site_stats;var G__37342__$1 = (((G__37342 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37342));var G__37342__$2 = (((G__37342__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37342__$1));return G__37342__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37342 = self__.site_stats;var G__37342__$1 = (((G__37342 == null))?null:cljs.core.constant$keyword$943.cljs$core$IFn$_invoke$arity$1(G__37342));var G__37342__$2 = (((G__37342__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37342__$1));return G__37342__$2;
})(),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37332))?sablono.interpreter.attributes(attrs37332):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37332))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37332),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37337 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37343 = self__.site_stats;var G__37343__$1 = (((G__37343 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37343));var G__37343__$2 = (((G__37343__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37343__$1));return G__37343__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37343 = self__.site_stats;var G__37343__$1 = (((G__37343 == null))?null:cljs.core.constant$keyword$958.cljs$core$IFn$_invoke$arity$1(G__37343));var G__37343__$2 = (((G__37343__$1 == null))?null:cljs.core.constant$keyword$921.cljs$core$IFn$_invoke$arity$1(G__37343__$1));return G__37343__$2;
})(),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37337))?sablono.interpreter.attributes(attrs37337):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37337))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37337),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37315,map__37315__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37315,map__37315__$1,const_count,ic_count,pc_count){
return (function (_37318){var self__ = this;
var _37318__$1 = this;return self__.meta37317;
});})(map__37315,map__37315__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37315,map__37315__$1,const_count,ic_count,pc_count){
return (function (_37318,meta37317__$1){var self__ = this;
var _37318__$1 = this;return (new clustermap.components.map_report.t37316(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__37315,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta37317__$1));
});})(map__37315,map__37315__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37316 = ((function (map__37315,map__37315__$1,const_count,ic_count,pc_count){
return (function __GT_t37316(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__37315__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta37317){return (new clustermap.components.map_report.t37316(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__37315__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta37317));
});})(map__37315,map__37315__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37316(pc_count,path_fn,const_count,ic_count,map__37315__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__37348 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37348__$1 = ((cljs.core.seq_QMARK_(map__37348))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37348):map__37348);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,cljs.core.constant$keyword$981);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,cljs.core.constant$keyword$880);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37348__$1,cljs.core.constant$keyword$890);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$982);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$944,cljs.core.constant$keyword$797], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$944,cljs.core.constant$keyword$828], null));var site_stats = cljs.core.constant$keyword$948.cljs$core$IFn$_invoke$arity$1(data);var pred__37349 = cljs.core._EQ__EQ_;var expr__37350 = type;if(cljs.core.truth_((pred__37349.cljs$core$IFn$_invoke$arity$2 ? pred__37349.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$882,expr__37350) : pred__37349.call(null,cljs.core.constant$keyword$882,expr__37350))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__37349.cljs$core$IFn$_invoke$arity$2 ? pred__37349.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$883,expr__37350) : pred__37349.call(null,cljs.core.constant$keyword$883,expr__37350))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__37349.cljs$core$IFn$_invoke$arity$2 ? pred__37349.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$885,expr__37350) : pred__37349.call(null,cljs.core.constant$keyword$885,expr__37350))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$875,shared,cljs.core.constant$keyword$878,document.getElementById(elem_id)], null));
});
