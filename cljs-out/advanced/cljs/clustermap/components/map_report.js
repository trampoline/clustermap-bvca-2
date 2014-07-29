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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$983) : view_path_fn.call(null,cljs.core.constant$keyword$983))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$993,(function (){var G__37915 = site_stats;var G__37915__$1 = (((G__37915 == null))?null:cljs.core.constant$keyword$980.cljs$core$IFn$_invoke$arity$1(G__37915));return G__37915__$1;
})(),cljs.core.constant$keyword$994,(function (){var G__37916 = site_stats;var G__37916__$1 = (((G__37916 == null))?null:cljs.core.constant$keyword$977.cljs$core$IFn$_invoke$arity$1(G__37916));return G__37916__$1;
})(),cljs.core.constant$keyword$995,(function (){var G__37917 = site_stats;var G__37917__$1 = (((G__37917 == null))?null:cljs.core.constant$keyword$976.cljs$core$IFn$_invoke$arity$1(G__37917));return G__37917__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__37949 = clustermap.components.map_report.type_counts(site_stats);var map__37949__$1 = ((cljs.core.seq_QMARK_(map__37949))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37949):map__37949);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,cljs.core.constant$keyword$995);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,cljs.core.constant$keyword$994);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37949__$1,cljs.core.constant$keyword$993);if(typeof clustermap.components.map_report.t37950 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t37950 = (function (pc_count,ic_count,const_count,map__37949,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta37951){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__37949 = map__37949;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta37951 = meta37951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t37950.cljs$lang$type = true;
clustermap.components.map_report.t37950.cljs$lang$ctorStr = "clustermap.components.map-report/t37950";
clustermap.components.map_report.t37950.cljs$lang$ctorPrWriter = ((function (map__37949,map__37949__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t37950");
});})(map__37949,map__37949__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37950.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t37950.prototype.om$core$IRender$render$arity$1 = ((function (map__37949,map__37949__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs37955 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$773,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37955))?sablono.interpreter.attributes(attrs37955):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37955))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37955),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs37960 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$773,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37960))?sablono.interpreter.attributes(attrs37960):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37960))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37960),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs37965 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$773,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37965))?sablono.interpreter.attributes(attrs37965):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37965))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs37966 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37966))?sablono.interpreter.attributes(attrs37966):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37966))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37966)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37965),(function (){var attrs37967 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs37967))?sablono.interpreter.attributes(attrs37967):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37967))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37967)], null))));
})()], null))));
})(),(function (){var attrs37968 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__37978 = self__.site_stats;var G__37978__$1 = (((G__37978 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__37978));var G__37978__$2 = (((G__37978__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__37978__$1));return G__37978__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__37978 = self__.site_stats;var G__37978__$1 = (((G__37978 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__37978));var G__37978__$2 = (((G__37978__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__37978__$1));return G__37978__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37968))?sablono.interpreter.attributes(attrs37968):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37968))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37968),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs37973 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__37979 = self__.site_stats;var G__37979__$1 = (((G__37979 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__37979));var G__37979__$2 = (((G__37979__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__37979__$1));return G__37979__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__37979 = self__.site_stats;var G__37979__$1 = (((G__37979 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__37979));var G__37979__$2 = (((G__37979__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__37979__$1));return G__37979__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs37973))?sablono.interpreter.attributes(attrs37973):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37973))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37973),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__37949,map__37949__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37950.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37949,map__37949__$1,const_count,ic_count,pc_count){
return (function (_37952){var self__ = this;
var _37952__$1 = this;return self__.meta37951;
});})(map__37949,map__37949__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t37950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37949,map__37949__$1,const_count,ic_count,pc_count){
return (function (_37952,meta37951__$1){var self__ = this;
var _37952__$1 = this;return (new clustermap.components.map_report.t37950(self__.pc_count,self__.ic_count,self__.const_count,self__.map__37949,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta37951__$1));
});})(map__37949,map__37949__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t37950 = ((function (map__37949,map__37949__$1,const_count,ic_count,pc_count){
return (function __GT_t37950(pc_count__$1,ic_count__$1,const_count__$1,map__37949__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37951){return (new clustermap.components.map_report.t37950(pc_count__$1,ic_count__$1,const_count__$1,map__37949__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta37951));
});})(map__37949,map__37949__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t37950(pc_count,ic_count,const_count,map__37949__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__38005 = clustermap.components.map_report.type_counts(site_stats);var map__38005__$1 = ((cljs.core.seq_QMARK_(map__38005))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38005):map__38005);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,cljs.core.constant$keyword$995);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,cljs.core.constant$keyword$994);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38005__$1,cljs.core.constant$keyword$993);if(typeof clustermap.components.map_report.t38006 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38006 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__38005,view_path_fn,portfolio_company_report,site_stats,meta38007){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__38005 = map__38005;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta38007 = meta38007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38006.cljs$lang$type = true;
clustermap.components.map_report.t38006.cljs$lang$ctorStr = "clustermap.components.map-report/t38006";
clustermap.components.map_report.t38006.cljs$lang$ctorPrWriter = ((function (map__38005,map__38005__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t38006");
});})(map__38005,map__38005__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38006.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38006.prototype.om$core$IRender$render$arity$1 = ((function (map__38005,map__38005__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs38011 = cljs.core.constant$keyword$844.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38011))?sablono.interpreter.attributes(attrs38011):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38011))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38011)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38012 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38012))?sablono.interpreter.attributes(attrs38012):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38012))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38013 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38013))?sablono.interpreter.attributes(attrs38013):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38013))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38013)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38012),(function (){var attrs38014 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38014))?sablono.interpreter.attributes(attrs38014):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38014))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38014)], null))));
})()], null))));
})(),(function (){var attrs38015 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38015))?sablono.interpreter.attributes(attrs38015):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38015))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38016 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38016))?sablono.interpreter.attributes(attrs38016):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38016))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38016)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38015),(function (){var attrs38017 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38017))?sablono.interpreter.attributes(attrs38017):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38017))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38017)], null))));
})()], null))));
})(),(function (){var attrs38018 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38028 = self__.site_stats;var G__38028__$1 = (((G__38028 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__38028));var G__38028__$2 = (((G__38028__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38028__$1));return G__38028__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38028 = self__.site_stats;var G__38028__$1 = (((G__38028 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__38028));var G__38028__$2 = (((G__38028__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38028__$1));return G__38028__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38018))?sablono.interpreter.attributes(attrs38018):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38018))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38018),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38023 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38029 = self__.site_stats;var G__38029__$1 = (((G__38029 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__38029));var G__38029__$2 = (((G__38029__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38029__$1));return G__38029__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38029 = self__.site_stats;var G__38029__$1 = (((G__38029 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__38029));var G__38029__$2 = (((G__38029__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38029__$1));return G__38029__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38023))?sablono.interpreter.attributes(attrs38023):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38023))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38023),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38005,map__38005__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38005,map__38005__$1,const_count,ic_count,pc_count){
return (function (_38008){var self__ = this;
var _38008__$1 = this;return self__.meta38007;
});})(map__38005,map__38005__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38005,map__38005__$1,const_count,ic_count,pc_count){
return (function (_38008,meta38007__$1){var self__ = this;
var _38008__$1 = this;return (new clustermap.components.map_report.t38006(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.map__38005,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta38007__$1));
});})(map__38005,map__38005__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38006 = ((function (map__38005,map__38005__$1,const_count,ic_count,pc_count){
return (function __GT_t38006(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__38005__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta38007){return (new clustermap.components.map_report.t38006(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__38005__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta38007));
});})(map__38005,map__38005__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38006(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__38005__$1,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__38055 = clustermap.components.map_report.type_counts(site_stats);var map__38055__$1 = ((cljs.core.seq_QMARK_(map__38055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38055):map__38055);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055__$1,cljs.core.constant$keyword$995);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055__$1,cljs.core.constant$keyword$994);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38055__$1,cljs.core.constant$keyword$993);if(typeof clustermap.components.map_report.t38056 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38056 = (function (map__38055,pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta38057){
this.map__38055 = map__38055;
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta38057 = meta38057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38056.cljs$lang$type = true;
clustermap.components.map_report.t38056.cljs$lang$ctorStr = "clustermap.components.map-report/t38056";
clustermap.components.map_report.t38056.cljs$lang$ctorPrWriter = ((function (map__38055,map__38055__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t38056");
});})(map__38055,map__38055__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38056.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38056.prototype.om$core$IRender$render$arity$1 = ((function (map__38055,map__38055__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs38061 = cljs.core.constant$keyword$844.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38061))?sablono.interpreter.attributes(attrs38061):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38061))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38061)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38062 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38062))?sablono.interpreter.attributes(attrs38062):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38062))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38063 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38063))?sablono.interpreter.attributes(attrs38063):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38063))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38063)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38062),(function (){var attrs38064 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38064))?sablono.interpreter.attributes(attrs38064):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38064))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38064)], null))));
})()], null))));
})(),(function (){var attrs38065 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38065))?sablono.interpreter.attributes(attrs38065):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38065))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38066 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38066))?sablono.interpreter.attributes(attrs38066):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38066))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38066)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38065),(function (){var attrs38067 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38067))?sablono.interpreter.attributes(attrs38067):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38067))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38067)], null))));
})()], null))));
})(),(function (){var attrs38068 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38078 = self__.site_stats;var G__38078__$1 = (((G__38078 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__38078));var G__38078__$2 = (((G__38078__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38078__$1));return G__38078__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38078 = self__.site_stats;var G__38078__$1 = (((G__38078 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__38078));var G__38078__$2 = (((G__38078__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38078__$1));return G__38078__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38068))?sablono.interpreter.attributes(attrs38068):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38068))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38068),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38073 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38079 = self__.site_stats;var G__38079__$1 = (((G__38079 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__38079));var G__38079__$2 = (((G__38079__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38079__$1));return G__38079__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38079 = self__.site_stats;var G__38079__$1 = (((G__38079 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__38079));var G__38079__$2 = (((G__38079__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38079__$1));return G__38079__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38073))?sablono.interpreter.attributes(attrs38073):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38073))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38073),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38055,map__38055__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38056.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38055,map__38055__$1,const_count,ic_count,pc_count){
return (function (_38058){var self__ = this;
var _38058__$1 = this;return self__.meta38057;
});})(map__38055,map__38055__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38055,map__38055__$1,const_count,ic_count,pc_count){
return (function (_38058,meta38057__$1){var self__ = this;
var _38058__$1 = this;return (new clustermap.components.map_report.t38056(self__.map__38055,self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta38057__$1));
});})(map__38055,map__38055__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38056 = ((function (map__38055,map__38055__$1,const_count,ic_count,pc_count){
return (function __GT_t38056(map__38055__$2,pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta38057){return (new clustermap.components.map_report.t38056(map__38055__$2,pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta38057));
});})(map__38055,map__38055__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38056(map__38055__$1,pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__38109 = clustermap.components.map_report.type_counts(site_stats);var map__38109__$1 = ((cljs.core.seq_QMARK_(map__38109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38109):map__38109);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38109__$1,cljs.core.constant$keyword$995);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38109__$1,cljs.core.constant$keyword$994);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38109__$1,cljs.core.constant$keyword$993);if(typeof clustermap.components.map_report.t38110 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38110 = (function (pc_count,path_fn,const_count,ic_count,map__38109,constituency_report,comm,constituency,view_path_fn,site_stats,meta38111){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__38109 = map__38109;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta38111 = meta38111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38110.cljs$lang$type = true;
clustermap.components.map_report.t38110.cljs$lang$ctorStr = "clustermap.components.map-report/t38110";
clustermap.components.map_report.t38110.cljs$lang$ctorPrWriter = ((function (map__38109,map__38109__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t38110");
});})(map__38109,map__38109__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38110.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t38110.prototype.om$core$IRender$render$arity$1 = ((function (map__38109,map__38109__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs38115 = cljs.core.constant$keyword$844.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38115))?sablono.interpreter.attributes(attrs38115):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38115))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$997.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$997.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38115),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$997.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$996.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$997.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs38120 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38120))?sablono.interpreter.attributes(attrs38120):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38120))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38121 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38121))?sablono.interpreter.attributes(attrs38121):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38121))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38121)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38120),(function (){var attrs38122 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38122))?sablono.interpreter.attributes(attrs38122):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38122))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38122)], null))));
})()], null))));
})(),(function (){var attrs38123 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38123))?sablono.interpreter.attributes(attrs38123):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38123))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs38124 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38124))?sablono.interpreter.attributes(attrs38124):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38124))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38124)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38123),(function (){var attrs38125 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs38125))?sablono.interpreter.attributes(attrs38125):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38125))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38125)], null))));
})()], null))));
})(),(function (){var attrs38126 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__38136 = self__.site_stats;var G__38136__$1 = (((G__38136 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__38136));var G__38136__$2 = (((G__38136__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38136__$1));return G__38136__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__38136 = self__.site_stats;var G__38136__$1 = (((G__38136 == null))?null:cljs.core.constant$keyword$960.cljs$core$IFn$_invoke$arity$1(G__38136));var G__38136__$2 = (((G__38136__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38136__$1));return G__38136__$2;
})(),cljs.core.constant$keyword$824,(2),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38126))?sablono.interpreter.attributes(attrs38126):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38126))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38126),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38131 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__38137 = self__.site_stats;var G__38137__$1 = (((G__38137 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__38137));var G__38137__$2 = (((G__38137__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38137__$1));return G__38137__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__38137 = self__.site_stats;var G__38137__$1 = (((G__38137 == null))?null:cljs.core.constant$keyword$975.cljs$core$IFn$_invoke$arity$1(G__38137));var G__38137__$2 = (((G__38137__$1 == null))?null:cljs.core.constant$keyword$938.cljs$core$IFn$_invoke$arity$1(G__38137__$1));return G__38137__$2;
})(),cljs.core.constant$keyword$826,(0),cljs.core.constant$keyword$773,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38131))?sablono.interpreter.attributes(attrs38131):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38131))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38131),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__38109,map__38109__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38110.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38109,map__38109__$1,const_count,ic_count,pc_count){
return (function (_38112){var self__ = this;
var _38112__$1 = this;return self__.meta38111;
});})(map__38109,map__38109__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t38110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38109,map__38109__$1,const_count,ic_count,pc_count){
return (function (_38112,meta38111__$1){var self__ = this;
var _38112__$1 = this;return (new clustermap.components.map_report.t38110(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__38109,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta38111__$1));
});})(map__38109,map__38109__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t38110 = ((function (map__38109,map__38109__$1,const_count,ic_count,pc_count){
return (function __GT_t38110(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__38109__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta38111){return (new clustermap.components.map_report.t38110(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__38109__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta38111));
});})(map__38109,map__38109__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t38110(pc_count,path_fn,const_count,ic_count,map__38109__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__38142 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38142__$1 = ((cljs.core.seq_QMARK_(map__38142))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38142):map__38142);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38142__$1,cljs.core.constant$keyword$998);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38142__$1,cljs.core.constant$keyword$897);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38142__$1,cljs.core.constant$keyword$907);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$999);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$961,cljs.core.constant$keyword$814], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$961,cljs.core.constant$keyword$845], null));var site_stats = cljs.core.constant$keyword$965.cljs$core$IFn$_invoke$arity$1(data);var pred__38143 = cljs.core._EQ__EQ_;var expr__38144 = type;if(cljs.core.truth_((pred__38143.cljs$core$IFn$_invoke$arity$2 ? pred__38143.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$899,expr__38144) : pred__38143.call(null,cljs.core.constant$keyword$899,expr__38144))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__38143.cljs$core$IFn$_invoke$arity$2 ? pred__38143.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$900,expr__38144) : pred__38143.call(null,cljs.core.constant$keyword$900,expr__38144))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__38143.cljs$core$IFn$_invoke$arity$2 ? pred__38143.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$902,expr__38144) : pred__38143.call(null,cljs.core.constant$keyword$902,expr__38144))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$892,shared,cljs.core.constant$keyword$895,document.getElementById(elem_id)], null));
});
