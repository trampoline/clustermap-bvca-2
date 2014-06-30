// Compiled by ClojureScript 0.0-2227
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$785) : view_path_fn.call(null,cljs.core.constant$keyword$785))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$795,(function (){var G__34886 = site_stats;var G__34886__$1 = (((G__34886 == null))?null:cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(G__34886));return G__34886__$1;
})(),cljs.core.constant$keyword$796,(function (){var G__34887 = site_stats;var G__34887__$1 = (((G__34887 == null))?null:cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(G__34887));return G__34887__$1;
})(),cljs.core.constant$keyword$797,(function (){var G__34888 = site_stats;var G__34888__$1 = (((G__34888 == null))?null:cljs.core.constant$keyword$778.cljs$core$IFn$_invoke$arity$1(G__34888));return G__34888__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__34920 = clustermap.components.map_report.type_counts(site_stats);var map__34920__$1 = ((cljs.core.seq_QMARK_(map__34920))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34920):map__34920);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34920__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34920__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34920__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t34921 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34921 = (function (pc_count,ic_count,const_count,map__34920,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta34922){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34920 = map__34920;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34922 = meta34922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34921.cljs$lang$type = true;
clustermap.components.map_report.t34921.cljs$lang$ctorStr = "clustermap.components.map-report/t34921";
clustermap.components.map_report.t34921.cljs$lang$ctorPrWriter = ((function (map__34920,map__34920__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t34921");
});})(map__34920,map__34920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34921.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34921.prototype.om$core$IRender$render$arity$1 = ((function (map__34920,map__34920__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34926 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34926))?sablono.interpreter.attributes(attrs34926):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34926))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34926),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs34931 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34931))?sablono.interpreter.attributes(attrs34931):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34931))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34931),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs34936 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34936))?sablono.interpreter.attributes(attrs34936):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34936))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34937 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34937))?sablono.interpreter.attributes(attrs34937):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34937))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34937)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34936),(function (){var attrs34938 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34938))?sablono.interpreter.attributes(attrs34938):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34938))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34938)], null))));
})()], null))));
})(),(function (){var attrs34939 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34949 = self__.site_stats;var G__34949__$1 = (((G__34949 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34949));var G__34949__$2 = (((G__34949__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34949__$1));return G__34949__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34949 = self__.site_stats;var G__34949__$1 = (((G__34949 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34949));var G__34949__$2 = (((G__34949__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34949__$1));return G__34949__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34939))?sablono.interpreter.attributes(attrs34939):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34939))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34939),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs34944 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34950 = self__.site_stats;var G__34950__$1 = (((G__34950 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__34950));var G__34950__$2 = (((G__34950__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34950__$1));return G__34950__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34950 = self__.site_stats;var G__34950__$1 = (((G__34950 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__34950));var G__34950__$2 = (((G__34950__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34950__$1));return G__34950__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34944))?sablono.interpreter.attributes(attrs34944):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34944))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34944),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__34920,map__34920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34920,map__34920__$1,const_count,ic_count,pc_count){
return (function (_34923){var self__ = this;
var _34923__$1 = this;return self__.meta34922;
});})(map__34920,map__34920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34920,map__34920__$1,const_count,ic_count,pc_count){
return (function (_34923,meta34922__$1){var self__ = this;
var _34923__$1 = this;return (new clustermap.components.map_report.t34921(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34920,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34922__$1));
});})(map__34920,map__34920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t34921 = ((function (map__34920,map__34920__$1,const_count,ic_count,pc_count){
return (function __GT_t34921(pc_count__$1,ic_count__$1,const_count__$1,map__34920__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34922){return (new clustermap.components.map_report.t34921(pc_count__$1,ic_count__$1,const_count__$1,map__34920__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34922));
});})(map__34920,map__34920__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t34921(pc_count,ic_count,const_count,map__34920__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__34976 = clustermap.components.map_report.type_counts(site_stats);var map__34976__$1 = ((cljs.core.seq_QMARK_(map__34976))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34976):map__34976);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34976__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34976__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34976__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t34977 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34977 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__34976,comm,view_path_fn,portfolio_company_report,site_stats,meta34978){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__34976 = map__34976;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta34978 = meta34978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34977.cljs$lang$type = true;
clustermap.components.map_report.t34977.cljs$lang$ctorStr = "clustermap.components.map-report/t34977";
clustermap.components.map_report.t34977.cljs$lang$ctorPrWriter = ((function (map__34976,map__34976__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t34977");
});})(map__34976,map__34976__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34977.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34977.prototype.om$core$IRender$render$arity$1 = ((function (map__34976,map__34976__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs34982 = cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs34982))?sablono.interpreter.attributes(attrs34982):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34982))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34982)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34983 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34983))?sablono.interpreter.attributes(attrs34983):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34983))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34984 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34984))?sablono.interpreter.attributes(attrs34984):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34984))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34984)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34983),(function (){var attrs34985 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34985))?sablono.interpreter.attributes(attrs34985):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34985))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34985)], null))));
})()], null))));
})(),(function (){var attrs34986 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34986))?sablono.interpreter.attributes(attrs34986):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34986))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34987 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34987))?sablono.interpreter.attributes(attrs34987):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34987))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34987)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34986),(function (){var attrs34988 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34988))?sablono.interpreter.attributes(attrs34988):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34988))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34988)], null))));
})()], null))));
})(),(function (){var attrs34989 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34999 = self__.site_stats;var G__34999__$1 = (((G__34999 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34999));var G__34999__$2 = (((G__34999__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34999__$1));return G__34999__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34999 = self__.site_stats;var G__34999__$1 = (((G__34999 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34999));var G__34999__$2 = (((G__34999__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34999__$1));return G__34999__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34989))?sablono.interpreter.attributes(attrs34989):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34989))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34989),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs34994 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35000 = self__.site_stats;var G__35000__$1 = (((G__35000 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35000));var G__35000__$2 = (((G__35000__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35000__$1));return G__35000__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35000 = self__.site_stats;var G__35000__$1 = (((G__35000 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35000));var G__35000__$2 = (((G__35000__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35000__$1));return G__35000__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34994))?sablono.interpreter.attributes(attrs34994):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34994))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34994),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__34976,map__34976__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34976,map__34976__$1,const_count,ic_count,pc_count){
return (function (_34979){var self__ = this;
var _34979__$1 = this;return self__.meta34978;
});})(map__34976,map__34976__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34976,map__34976__$1,const_count,ic_count,pc_count){
return (function (_34979,meta34978__$1){var self__ = this;
var _34979__$1 = this;return (new clustermap.components.map_report.t34977(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__34976,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta34978__$1));
});})(map__34976,map__34976__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t34977 = ((function (map__34976,map__34976__$1,const_count,ic_count,pc_count){
return (function __GT_t34977(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__34976__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta34978){return (new clustermap.components.map_report.t34977(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__34976__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta34978));
});})(map__34976,map__34976__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t34977(pc_count,path_fn,const_count,portfolio_company,ic_count,map__34976__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__35026 = clustermap.components.map_report.type_counts(site_stats);var map__35026__$1 = ((cljs.core.seq_QMARK_(map__35026))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35026):map__35026);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35026__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35026__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35026__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t35027 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35027 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__35026,comm,investor_company_report,view_path_fn,site_stats,meta35028){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__35026 = map__35026;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta35028 = meta35028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35027.cljs$lang$type = true;
clustermap.components.map_report.t35027.cljs$lang$ctorStr = "clustermap.components.map-report/t35027";
clustermap.components.map_report.t35027.cljs$lang$ctorPrWriter = ((function (map__35026,map__35026__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t35027");
});})(map__35026,map__35026__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35027.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35027.prototype.om$core$IRender$render$arity$1 = ((function (map__35026,map__35026__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs35032 = cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35032))?sablono.interpreter.attributes(attrs35032):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35032))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35032)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35033 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35033))?sablono.interpreter.attributes(attrs35033):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35033))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35034 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35034))?sablono.interpreter.attributes(attrs35034):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35034))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35034)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35033),(function (){var attrs35035 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35035))?sablono.interpreter.attributes(attrs35035):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35035))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35035)], null))));
})()], null))));
})(),(function (){var attrs35036 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35036))?sablono.interpreter.attributes(attrs35036):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35036))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35037 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35037))?sablono.interpreter.attributes(attrs35037):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35037))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35037)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35036),(function (){var attrs35038 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35038))?sablono.interpreter.attributes(attrs35038):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35038))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35038)], null))));
})()], null))));
})(),(function (){var attrs35039 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35049 = self__.site_stats;var G__35049__$1 = (((G__35049 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35049));var G__35049__$2 = (((G__35049__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35049__$1));return G__35049__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35049 = self__.site_stats;var G__35049__$1 = (((G__35049 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35049));var G__35049__$2 = (((G__35049__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35049__$1));return G__35049__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35039))?sablono.interpreter.attributes(attrs35039):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35039))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35039),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35044 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35050 = self__.site_stats;var G__35050__$1 = (((G__35050 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35050));var G__35050__$2 = (((G__35050__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35050__$1));return G__35050__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35050 = self__.site_stats;var G__35050__$1 = (((G__35050 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35050));var G__35050__$2 = (((G__35050__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35050__$1));return G__35050__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35044))?sablono.interpreter.attributes(attrs35044):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35044))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35044),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35026,map__35026__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35026,map__35026__$1,const_count,ic_count,pc_count){
return (function (_35029){var self__ = this;
var _35029__$1 = this;return self__.meta35028;
});})(map__35026,map__35026__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35026,map__35026__$1,const_count,ic_count,pc_count){
return (function (_35029,meta35028__$1){var self__ = this;
var _35029__$1 = this;return (new clustermap.components.map_report.t35027(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__35026,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta35028__$1));
});})(map__35026,map__35026__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35027 = ((function (map__35026,map__35026__$1,const_count,ic_count,pc_count){
return (function __GT_t35027(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__35026__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35028){return (new clustermap.components.map_report.t35027(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__35026__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35028));
});})(map__35026,map__35026__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35027(pc_count,path_fn,const_count,investor_company,ic_count,map__35026__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__35080 = clustermap.components.map_report.type_counts(site_stats);var map__35080__$1 = ((cljs.core.seq_QMARK_(map__35080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35080):map__35080);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35080__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35080__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35080__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t35081 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35081 = (function (pc_count,path_fn,const_count,ic_count,map__35080,constituency_report,comm,constituency,view_path_fn,site_stats,meta35082){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__35080 = map__35080;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta35082 = meta35082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35081.cljs$lang$type = true;
clustermap.components.map_report.t35081.cljs$lang$ctorStr = "clustermap.components.map-report/t35081";
clustermap.components.map_report.t35081.cljs$lang$ctorPrWriter = ((function (map__35080,map__35080__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.map-report/t35081");
});})(map__35080,map__35080__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35081.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35081.prototype.om$core$IRender$render$arity$1 = ((function (map__35080,map__35080__$1,const_count,ic_count,pc_count){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs35086 = cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35086))?sablono.interpreter.attributes(attrs35086):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35086))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35086),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35091 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35091))?sablono.interpreter.attributes(attrs35091):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35091))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35092 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35092))?sablono.interpreter.attributes(attrs35092):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35092))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35092)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35091),(function (){var attrs35093 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35093))?sablono.interpreter.attributes(attrs35093):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35093))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35093)], null))));
})()], null))));
})(),(function (){var attrs35094 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35094))?sablono.interpreter.attributes(attrs35094):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35094))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35095 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35095))?sablono.interpreter.attributes(attrs35095):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35095))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35095)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35094),(function (){var attrs35096 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35096))?sablono.interpreter.attributes(attrs35096):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35096))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35096)], null))));
})()], null))));
})(),(function (){var attrs35097 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35107 = self__.site_stats;var G__35107__$1 = (((G__35107 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35107));var G__35107__$2 = (((G__35107__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35107__$1));return G__35107__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35107 = self__.site_stats;var G__35107__$1 = (((G__35107 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35107));var G__35107__$2 = (((G__35107__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35107__$1));return G__35107__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35097))?sablono.interpreter.attributes(attrs35097):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35097))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35097),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35102 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35108 = self__.site_stats;var G__35108__$1 = (((G__35108 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35108));var G__35108__$2 = (((G__35108__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35108__$1));return G__35108__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35108 = self__.site_stats;var G__35108__$1 = (((G__35108 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35108));var G__35108__$2 = (((G__35108__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35108__$1));return G__35108__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35102))?sablono.interpreter.attributes(attrs35102):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35102))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35102),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35080,map__35080__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35080,map__35080__$1,const_count,ic_count,pc_count){
return (function (_35083){var self__ = this;
var _35083__$1 = this;return self__.meta35082;
});})(map__35080,map__35080__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35080,map__35080__$1,const_count,ic_count,pc_count){
return (function (_35083,meta35082__$1){var self__ = this;
var _35083__$1 = this;return (new clustermap.components.map_report.t35081(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__35080,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta35082__$1));
});})(map__35080,map__35080__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35081 = ((function (map__35080,map__35080__$1,const_count,ic_count,pc_count){
return (function __GT_t35081(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__35080__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta35082){return (new clustermap.components.map_report.t35081(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__35080__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta35082));
});})(map__35080,map__35080__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35081(pc_count,path_fn,const_count,ic_count,map__35080__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__35113 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35113__$1 = ((cljs.core.seq_QMARK_(map__35113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35113):map__35113);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35113__$1,cljs.core.constant$keyword$800);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35113__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35113__$1,cljs.core.constant$keyword$709);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$801);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$763,cljs.core.constant$keyword$614], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$763,cljs.core.constant$keyword$585], null));var site_stats = cljs.core.constant$keyword$767.cljs$core$IFn$_invoke$arity$1(data);var pred__35114 = cljs.core._EQ__EQ_;var expr__35115 = type;if(cljs.core.truth_((pred__35114.cljs$core$IFn$_invoke$arity$2 ? pred__35114.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,expr__35115) : pred__35114.call(null,cljs.core.constant$keyword$700,expr__35115))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35114.cljs$core$IFn$_invoke$arity$2 ? pred__35114.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__35115) : pred__35114.call(null,cljs.core.constant$keyword$701,expr__35115))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35114.cljs$core$IFn$_invoke$arity$2 ? pred__35114.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$703,expr__35115) : pred__35114.call(null,cljs.core.constant$keyword$703,expr__35115))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$693,shared,cljs.core.constant$keyword$696,document.getElementById(elem_id)], null));
});
