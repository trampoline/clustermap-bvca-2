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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$795,(function (){var G__34884 = site_stats;var G__34884__$1 = (((G__34884 == null))?null:cljs.core.constant$keyword$782.cljs$core$IFn$_invoke$arity$1(G__34884));return G__34884__$1;
})(),cljs.core.constant$keyword$796,(function (){var G__34885 = site_stats;var G__34885__$1 = (((G__34885 == null))?null:cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(G__34885));return G__34885__$1;
})(),cljs.core.constant$keyword$797,(function (){var G__34886 = site_stats;var G__34886__$1 = (((G__34886 == null))?null:cljs.core.constant$keyword$778.cljs$core$IFn$_invoke$arity$1(G__34886));return G__34886__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__34918 = clustermap.components.map_report.type_counts(site_stats);var map__34918__$1 = ((cljs.core.seq_QMARK_(map__34918))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34918):map__34918);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34918__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34918__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34918__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t34919 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34919 = (function (pc_count,ic_count,const_count,map__34918,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta34920){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34918 = map__34918;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34920 = meta34920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34919.cljs$lang$type = true;
clustermap.components.map_report.t34919.cljs$lang$ctorStr = "clustermap.components.map-report/t34919";
clustermap.components.map_report.t34919.cljs$lang$ctorPrWriter = ((function (map__34918,map__34918__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t34919");
});})(map__34918,map__34918__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34919.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34919.prototype.om$core$IRender$render$arity$1 = ((function (map__34918,map__34918__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34924 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34924))?sablono.interpreter.attributes(attrs34924):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34924))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34924),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs34929 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34929))?sablono.interpreter.attributes(attrs34929):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34929))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34929),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs34934 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34934))?sablono.interpreter.attributes(attrs34934):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34934))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34935 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34935))?sablono.interpreter.attributes(attrs34935):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34935))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34935)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34934),(function (){var attrs34936 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34936))?sablono.interpreter.attributes(attrs34936):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34936))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34936)], null))));
})()], null))));
})(),(function (){var attrs34937 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34947 = self__.site_stats;var G__34947__$1 = (((G__34947 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34947));var G__34947__$2 = (((G__34947__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34947__$1));return G__34947__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34947 = self__.site_stats;var G__34947__$1 = (((G__34947 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34947));var G__34947__$2 = (((G__34947__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34947__$1));return G__34947__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34937))?sablono.interpreter.attributes(attrs34937):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34937))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34937),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs34942 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34948 = self__.site_stats;var G__34948__$1 = (((G__34948 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__34948));var G__34948__$2 = (((G__34948__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34948__$1));return G__34948__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34948 = self__.site_stats;var G__34948__$1 = (((G__34948 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__34948));var G__34948__$2 = (((G__34948__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34948__$1));return G__34948__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34942))?sablono.interpreter.attributes(attrs34942):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34942))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34942),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__34918,map__34918__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34918,map__34918__$1,const_count,ic_count,pc_count){
return (function (_34921){var self__ = this;
var _34921__$1 = this;return self__.meta34920;
});})(map__34918,map__34918__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34918,map__34918__$1,const_count,ic_count,pc_count){
return (function (_34921,meta34920__$1){var self__ = this;
var _34921__$1 = this;return (new clustermap.components.map_report.t34919(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34918,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34920__$1));
});})(map__34918,map__34918__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t34919 = ((function (map__34918,map__34918__$1,const_count,ic_count,pc_count){
return (function __GT_t34919(pc_count__$1,ic_count__$1,const_count__$1,map__34918__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34920){return (new clustermap.components.map_report.t34919(pc_count__$1,ic_count__$1,const_count__$1,map__34918__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34920));
});})(map__34918,map__34918__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t34919(pc_count,ic_count,const_count,map__34918__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__34974 = clustermap.components.map_report.type_counts(site_stats);var map__34974__$1 = ((cljs.core.seq_QMARK_(map__34974))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34974):map__34974);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34974__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t34975 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34975 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__34974,portfolio_company_report,site_stats,meta34976){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__34974 = map__34974;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta34976 = meta34976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34975.cljs$lang$type = true;
clustermap.components.map_report.t34975.cljs$lang$ctorStr = "clustermap.components.map-report/t34975";
clustermap.components.map_report.t34975.cljs$lang$ctorPrWriter = ((function (map__34974,map__34974__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t34975");
});})(map__34974,map__34974__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34975.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34975.prototype.om$core$IRender$render$arity$1 = ((function (map__34974,map__34974__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs34980 = cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs34980))?sablono.interpreter.attributes(attrs34980):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34980))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34980)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs34981 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34981))?sablono.interpreter.attributes(attrs34981):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34981))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34982 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34982))?sablono.interpreter.attributes(attrs34982):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34982))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34982)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34981),(function (){var attrs34983 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34983))?sablono.interpreter.attributes(attrs34983):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34983))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34983)], null))));
})()], null))));
})(),(function (){var attrs34984 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34984))?sablono.interpreter.attributes(attrs34984):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34984))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34985 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34985))?sablono.interpreter.attributes(attrs34985):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34985))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34985)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34984),(function (){var attrs34986 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34986))?sablono.interpreter.attributes(attrs34986):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34986))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34986)], null))));
})()], null))));
})(),(function (){var attrs34987 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34997 = self__.site_stats;var G__34997__$1 = (((G__34997 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34997));var G__34997__$2 = (((G__34997__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34997__$1));return G__34997__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34997 = self__.site_stats;var G__34997__$1 = (((G__34997 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__34997));var G__34997__$2 = (((G__34997__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34997__$1));return G__34997__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34987))?sablono.interpreter.attributes(attrs34987):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34987))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34987),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs34992 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34998 = self__.site_stats;var G__34998__$1 = (((G__34998 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__34998));var G__34998__$2 = (((G__34998__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34998__$1));return G__34998__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34998 = self__.site_stats;var G__34998__$1 = (((G__34998 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__34998));var G__34998__$2 = (((G__34998__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__34998__$1));return G__34998__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34992))?sablono.interpreter.attributes(attrs34992):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34992))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34992),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__34974,map__34974__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34974,map__34974__$1,const_count,ic_count,pc_count){
return (function (_34977){var self__ = this;
var _34977__$1 = this;return self__.meta34976;
});})(map__34974,map__34974__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34974,map__34974__$1,const_count,ic_count,pc_count){
return (function (_34977,meta34976__$1){var self__ = this;
var _34977__$1 = this;return (new clustermap.components.map_report.t34975(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__34974,self__.portfolio_company_report,self__.site_stats,meta34976__$1));
});})(map__34974,map__34974__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t34975 = ((function (map__34974,map__34974__$1,const_count,ic_count,pc_count){
return (function __GT_t34975(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__34974__$2,portfolio_company_report__$1,site_stats__$1,meta34976){return (new clustermap.components.map_report.t34975(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__34974__$2,portfolio_company_report__$1,site_stats__$1,meta34976));
});})(map__34974,map__34974__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t34975(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__34974__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__35024 = clustermap.components.map_report.type_counts(site_stats);var map__35024__$1 = ((cljs.core.seq_QMARK_(map__35024))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35024):map__35024);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35024__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35024__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35024__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t35025 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35025 = (function (pc_count,map__35024,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta35026){
this.pc_count = pc_count;
this.map__35024 = map__35024;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta35026 = meta35026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35025.cljs$lang$type = true;
clustermap.components.map_report.t35025.cljs$lang$ctorStr = "clustermap.components.map-report/t35025";
clustermap.components.map_report.t35025.cljs$lang$ctorPrWriter = ((function (map__35024,map__35024__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t35025");
});})(map__35024,map__35024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35025.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35025.prototype.om$core$IRender$render$arity$1 = ((function (map__35024,map__35024__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs35030 = cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35030))?sablono.interpreter.attributes(attrs35030):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35030))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35030)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35031 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35031))?sablono.interpreter.attributes(attrs35031):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35031))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35032 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35032))?sablono.interpreter.attributes(attrs35032):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35032))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35032)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35031),(function (){var attrs35033 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35033))?sablono.interpreter.attributes(attrs35033):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35033))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35033)], null))));
})()], null))));
})(),(function (){var attrs35034 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35034))?sablono.interpreter.attributes(attrs35034):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35034))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35035 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35035))?sablono.interpreter.attributes(attrs35035):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35035))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35035)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35034),(function (){var attrs35036 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35036))?sablono.interpreter.attributes(attrs35036):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35036))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35036)], null))));
})()], null))));
})(),(function (){var attrs35037 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35047 = self__.site_stats;var G__35047__$1 = (((G__35047 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35047));var G__35047__$2 = (((G__35047__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35047__$1));return G__35047__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35047 = self__.site_stats;var G__35047__$1 = (((G__35047 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35047));var G__35047__$2 = (((G__35047__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35047__$1));return G__35047__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35037))?sablono.interpreter.attributes(attrs35037):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35037))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35037),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35042 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35048 = self__.site_stats;var G__35048__$1 = (((G__35048 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35048));var G__35048__$2 = (((G__35048__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35048__$1));return G__35048__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35048 = self__.site_stats;var G__35048__$1 = (((G__35048 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35048));var G__35048__$2 = (((G__35048__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35048__$1));return G__35048__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35042))?sablono.interpreter.attributes(attrs35042):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35042))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35042),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35024,map__35024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35024,map__35024__$1,const_count,ic_count,pc_count){
return (function (_35027){var self__ = this;
var _35027__$1 = this;return self__.meta35026;
});})(map__35024,map__35024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35024,map__35024__$1,const_count,ic_count,pc_count){
return (function (_35027,meta35026__$1){var self__ = this;
var _35027__$1 = this;return (new clustermap.components.map_report.t35025(self__.pc_count,self__.map__35024,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta35026__$1));
});})(map__35024,map__35024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35025 = ((function (map__35024,map__35024__$1,const_count,ic_count,pc_count){
return (function __GT_t35025(pc_count__$1,map__35024__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35026){return (new clustermap.components.map_report.t35025(pc_count__$1,map__35024__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35026));
});})(map__35024,map__35024__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35025(pc_count,map__35024__$1,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__35078 = clustermap.components.map_report.type_counts(site_stats);var map__35078__$1 = ((cljs.core.seq_QMARK_(map__35078))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35078):map__35078);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078__$1,cljs.core.constant$keyword$797);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078__$1,cljs.core.constant$keyword$796);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35078__$1,cljs.core.constant$keyword$795);if(typeof clustermap.components.map_report.t35079 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35079 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__35078,site_stats,meta35080){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__35078 = map__35078;
this.site_stats = site_stats;
this.meta35080 = meta35080;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35079.cljs$lang$type = true;
clustermap.components.map_report.t35079.cljs$lang$ctorStr = "clustermap.components.map-report/t35079";
clustermap.components.map_report.t35079.cljs$lang$ctorPrWriter = ((function (map__35078,map__35078__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t35079");
});})(map__35078,map__35078__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35079.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35079.prototype.om$core$IRender$render$arity$1 = ((function (map__35078,map__35078__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs35084 = cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35084))?sablono.interpreter.attributes(attrs35084):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35084))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35084),React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35089 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35089))?sablono.interpreter.attributes(attrs35089):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35089))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35090 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35090))?sablono.interpreter.attributes(attrs35090):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35090))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35090)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35089),(function (){var attrs35091 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35091))?sablono.interpreter.attributes(attrs35091):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35091))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35091)], null))));
})()], null))));
})(),(function (){var attrs35092 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35092))?sablono.interpreter.attributes(attrs35092):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35092))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35093 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35093))?sablono.interpreter.attributes(attrs35093):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35093))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35093)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35092),(function (){var attrs35094 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35094))?sablono.interpreter.attributes(attrs35094):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35094))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35094)], null))));
})()], null))));
})(),(function (){var attrs35095 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35105 = self__.site_stats;var G__35105__$1 = (((G__35105 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35105));var G__35105__$2 = (((G__35105__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35105__$1));return G__35105__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35105 = self__.site_stats;var G__35105__$1 = (((G__35105 == null))?null:cljs.core.constant$keyword$762.cljs$core$IFn$_invoke$arity$1(G__35105));var G__35105__$2 = (((G__35105__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35105__$1));return G__35105__$2;
})(),cljs.core.constant$keyword$624,2,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35095))?sablono.interpreter.attributes(attrs35095):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35095))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35095),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35100 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35106 = self__.site_stats;var G__35106__$1 = (((G__35106 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35106));var G__35106__$2 = (((G__35106__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35106__$1));return G__35106__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35106 = self__.site_stats;var G__35106__$1 = (((G__35106 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__35106));var G__35106__$2 = (((G__35106__$1 == null))?null:cljs.core.constant$keyword$740.cljs$core$IFn$_invoke$arity$1(G__35106__$1));return G__35106__$2;
})(),cljs.core.constant$keyword$626,0,cljs.core.constant$keyword$581,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35100))?sablono.interpreter.attributes(attrs35100):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35100))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35100),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35078,map__35078__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35079.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35078,map__35078__$1,const_count,ic_count,pc_count){
return (function (_35081){var self__ = this;
var _35081__$1 = this;return self__.meta35080;
});})(map__35078,map__35078__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35078,map__35078__$1,const_count,ic_count,pc_count){
return (function (_35081,meta35080__$1){var self__ = this;
var _35081__$1 = this;return (new clustermap.components.map_report.t35079(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__35078,self__.site_stats,meta35080__$1));
});})(map__35078,map__35078__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35079 = ((function (map__35078,map__35078__$1,const_count,ic_count,pc_count){
return (function __GT_t35079(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__35078__$2,site_stats__$1,meta35080){return (new clustermap.components.map_report.t35079(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__35078__$2,site_stats__$1,meta35080));
});})(map__35078,map__35078__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35079(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__35078__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__35111 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35111__$1 = ((cljs.core.seq_QMARK_(map__35111))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35111):map__35111);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,cljs.core.constant$keyword$800);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35111__$1,cljs.core.constant$keyword$709);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$801);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$763,cljs.core.constant$keyword$614], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$763,cljs.core.constant$keyword$585], null));var site_stats = cljs.core.constant$keyword$767.cljs$core$IFn$_invoke$arity$1(data);var pred__35112 = cljs.core._EQ__EQ_;var expr__35113 = type;if(cljs.core.truth_((pred__35112.cljs$core$IFn$_invoke$arity$2 ? pred__35112.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,expr__35113) : pred__35112.call(null,cljs.core.constant$keyword$700,expr__35113))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35112.cljs$core$IFn$_invoke$arity$2 ? pred__35112.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__35113) : pred__35112.call(null,cljs.core.constant$keyword$701,expr__35113))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35112.cljs$core$IFn$_invoke$arity$2 ? pred__35112.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$703,expr__35113) : pred__35112.call(null,cljs.core.constant$keyword$703,expr__35113))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$693,shared,cljs.core.constant$keyword$696,document.getElementById(elem_id)], null));
});
