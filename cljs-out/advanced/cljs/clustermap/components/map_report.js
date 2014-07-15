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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$943) : view_path_fn.call(null,cljs.core.constant$keyword$943))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$953,(function (){var G__35657 = site_stats;var G__35657__$1 = (((G__35657 == null))?null:cljs.core.constant$keyword$940.cljs$core$IFn$_invoke$arity$1(G__35657));return G__35657__$1;
})(),cljs.core.constant$keyword$954,(function (){var G__35658 = site_stats;var G__35658__$1 = (((G__35658 == null))?null:cljs.core.constant$keyword$937.cljs$core$IFn$_invoke$arity$1(G__35658));return G__35658__$1;
})(),cljs.core.constant$keyword$955,(function (){var G__35659 = site_stats;var G__35659__$1 = (((G__35659 == null))?null:cljs.core.constant$keyword$936.cljs$core$IFn$_invoke$arity$1(G__35659));return G__35659__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__35691 = clustermap.components.map_report.type_counts(site_stats);var map__35691__$1 = ((cljs.core.seq_QMARK_(map__35691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35691):map__35691);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,cljs.core.constant$keyword$955);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,cljs.core.constant$keyword$954);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35691__$1,cljs.core.constant$keyword$953);if(typeof clustermap.components.map_report.t35692 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35692 = (function (pc_count,ic_count,const_count,map__35691,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta35693){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__35691 = map__35691;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta35693 = meta35693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35692.cljs$lang$type = true;
clustermap.components.map_report.t35692.cljs$lang$ctorStr = "clustermap.components.map-report/t35692";
clustermap.components.map_report.t35692.cljs$lang$ctorPrWriter = ((function (map__35691,map__35691__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35692");
});})(map__35691,map__35691__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35692.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35692.prototype.om$core$IRender$render$arity$1 = ((function (map__35691,map__35691__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs35697 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35697))?sablono.interpreter.attributes(attrs35697):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35697))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35697),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs35702 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35702))?sablono.interpreter.attributes(attrs35702):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35702))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35702),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs35707 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35707))?sablono.interpreter.attributes(attrs35707):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35707))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35708 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35708))?sablono.interpreter.attributes(attrs35708):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35708))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35708)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35707),(function (){var attrs35709 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35709))?sablono.interpreter.attributes(attrs35709):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35709))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35709)], null))));
})()], null))));
})(),(function (){var attrs35710 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35720 = self__.site_stats;var G__35720__$1 = (((G__35720 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35720));var G__35720__$2 = (((G__35720__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35720__$1));return G__35720__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35720 = self__.site_stats;var G__35720__$1 = (((G__35720 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35720));var G__35720__$2 = (((G__35720__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35720__$1));return G__35720__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35710))?sablono.interpreter.attributes(attrs35710):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35710))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35710),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35715 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35721 = self__.site_stats;var G__35721__$1 = (((G__35721 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35721));var G__35721__$2 = (((G__35721__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35721__$1));return G__35721__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35721 = self__.site_stats;var G__35721__$1 = (((G__35721 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35721));var G__35721__$2 = (((G__35721__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35721__$1));return G__35721__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35715))?sablono.interpreter.attributes(attrs35715):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35715))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35715),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35691,map__35691__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35692.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35691,map__35691__$1,const_count,ic_count,pc_count){
return (function (_35694){var self__ = this;
var _35694__$1 = this;return self__.meta35693;
});})(map__35691,map__35691__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35691,map__35691__$1,const_count,ic_count,pc_count){
return (function (_35694,meta35693__$1){var self__ = this;
var _35694__$1 = this;return (new clustermap.components.map_report.t35692(self__.pc_count,self__.ic_count,self__.const_count,self__.map__35691,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta35693__$1));
});})(map__35691,map__35691__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35692 = ((function (map__35691,map__35691__$1,const_count,ic_count,pc_count){
return (function __GT_t35692(pc_count__$1,ic_count__$1,const_count__$1,map__35691__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta35693){return (new clustermap.components.map_report.t35692(pc_count__$1,ic_count__$1,const_count__$1,map__35691__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta35693));
});})(map__35691,map__35691__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35692(pc_count,ic_count,const_count,map__35691__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__35747 = clustermap.components.map_report.type_counts(site_stats);var map__35747__$1 = ((cljs.core.seq_QMARK_(map__35747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35747):map__35747);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747__$1,cljs.core.constant$keyword$955);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747__$1,cljs.core.constant$keyword$954);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35747__$1,cljs.core.constant$keyword$953);if(typeof clustermap.components.map_report.t35748 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35748 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__35747,portfolio_company_report,site_stats,meta35749){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__35747 = map__35747;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta35749 = meta35749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35748.cljs$lang$type = true;
clustermap.components.map_report.t35748.cljs$lang$ctorStr = "clustermap.components.map-report/t35748";
clustermap.components.map_report.t35748.cljs$lang$ctorPrWriter = ((function (map__35747,map__35747__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35748");
});})(map__35747,map__35747__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35748.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35748.prototype.om$core$IRender$render$arity$1 = ((function (map__35747,map__35747__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs35753 = cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35753))?sablono.interpreter.attributes(attrs35753):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35753))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35753)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35754 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35754))?sablono.interpreter.attributes(attrs35754):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35754))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35755 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35755))?sablono.interpreter.attributes(attrs35755):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35755))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35755)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35754),(function (){var attrs35756 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35756))?sablono.interpreter.attributes(attrs35756):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35756))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35756)], null))));
})()], null))));
})(),(function (){var attrs35757 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35757))?sablono.interpreter.attributes(attrs35757):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35757))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35758 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35758))?sablono.interpreter.attributes(attrs35758):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35758))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35758)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35757),(function (){var attrs35759 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35759))?sablono.interpreter.attributes(attrs35759):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35759))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35759)], null))));
})()], null))));
})(),(function (){var attrs35760 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35770 = self__.site_stats;var G__35770__$1 = (((G__35770 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35770));var G__35770__$2 = (((G__35770__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35770__$1));return G__35770__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35770 = self__.site_stats;var G__35770__$1 = (((G__35770 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35770));var G__35770__$2 = (((G__35770__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35770__$1));return G__35770__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35760))?sablono.interpreter.attributes(attrs35760):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35760))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35760),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35765 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35771 = self__.site_stats;var G__35771__$1 = (((G__35771 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35771));var G__35771__$2 = (((G__35771__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35771__$1));return G__35771__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35771 = self__.site_stats;var G__35771__$1 = (((G__35771 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35771));var G__35771__$2 = (((G__35771__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35771__$1));return G__35771__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35765))?sablono.interpreter.attributes(attrs35765):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35765))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35765),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35747,map__35747__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35747,map__35747__$1,const_count,ic_count,pc_count){
return (function (_35750){var self__ = this;
var _35750__$1 = this;return self__.meta35749;
});})(map__35747,map__35747__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35747,map__35747__$1,const_count,ic_count,pc_count){
return (function (_35750,meta35749__$1){var self__ = this;
var _35750__$1 = this;return (new clustermap.components.map_report.t35748(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__35747,self__.portfolio_company_report,self__.site_stats,meta35749__$1));
});})(map__35747,map__35747__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35748 = ((function (map__35747,map__35747__$1,const_count,ic_count,pc_count){
return (function __GT_t35748(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__35747__$2,portfolio_company_report__$1,site_stats__$1,meta35749){return (new clustermap.components.map_report.t35748(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__35747__$2,portfolio_company_report__$1,site_stats__$1,meta35749));
});})(map__35747,map__35747__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35748(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__35747__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__35797 = clustermap.components.map_report.type_counts(site_stats);var map__35797__$1 = ((cljs.core.seq_QMARK_(map__35797))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35797):map__35797);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797__$1,cljs.core.constant$keyword$955);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797__$1,cljs.core.constant$keyword$954);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797__$1,cljs.core.constant$keyword$953);if(typeof clustermap.components.map_report.t35798 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35798 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__35797,comm,investor_company_report,view_path_fn,site_stats,meta35799){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__35797 = map__35797;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta35799 = meta35799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35798.cljs$lang$type = true;
clustermap.components.map_report.t35798.cljs$lang$ctorStr = "clustermap.components.map-report/t35798";
clustermap.components.map_report.t35798.cljs$lang$ctorPrWriter = ((function (map__35797,map__35797__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35798");
});})(map__35797,map__35797__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35798.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35798.prototype.om$core$IRender$render$arity$1 = ((function (map__35797,map__35797__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs35803 = cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35803))?sablono.interpreter.attributes(attrs35803):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35803))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35803)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35804 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35804))?sablono.interpreter.attributes(attrs35804):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35804))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35805 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35805))?sablono.interpreter.attributes(attrs35805):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35805))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35805)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35804),(function (){var attrs35806 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35806))?sablono.interpreter.attributes(attrs35806):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35806))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35806)], null))));
})()], null))));
})(),(function (){var attrs35807 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35807))?sablono.interpreter.attributes(attrs35807):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35807))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35808 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35808))?sablono.interpreter.attributes(attrs35808):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35808))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35808)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35807),(function (){var attrs35809 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35809))?sablono.interpreter.attributes(attrs35809):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35809))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35809)], null))));
})()], null))));
})(),(function (){var attrs35810 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35820 = self__.site_stats;var G__35820__$1 = (((G__35820 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35820));var G__35820__$2 = (((G__35820__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35820__$1));return G__35820__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35820 = self__.site_stats;var G__35820__$1 = (((G__35820 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35820));var G__35820__$2 = (((G__35820__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35820__$1));return G__35820__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35810))?sablono.interpreter.attributes(attrs35810):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35810))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35810),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35815 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35821 = self__.site_stats;var G__35821__$1 = (((G__35821 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35821));var G__35821__$2 = (((G__35821__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35821__$1));return G__35821__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35821 = self__.site_stats;var G__35821__$1 = (((G__35821 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35821));var G__35821__$2 = (((G__35821__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35821__$1));return G__35821__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35815))?sablono.interpreter.attributes(attrs35815):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35815))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35815),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35797,map__35797__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35797,map__35797__$1,const_count,ic_count,pc_count){
return (function (_35800){var self__ = this;
var _35800__$1 = this;return self__.meta35799;
});})(map__35797,map__35797__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35797,map__35797__$1,const_count,ic_count,pc_count){
return (function (_35800,meta35799__$1){var self__ = this;
var _35800__$1 = this;return (new clustermap.components.map_report.t35798(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__35797,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta35799__$1));
});})(map__35797,map__35797__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35798 = ((function (map__35797,map__35797__$1,const_count,ic_count,pc_count){
return (function __GT_t35798(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__35797__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35799){return (new clustermap.components.map_report.t35798(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__35797__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta35799));
});})(map__35797,map__35797__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35798(pc_count,path_fn,const_count,investor_company,ic_count,map__35797__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__35851 = clustermap.components.map_report.type_counts(site_stats);var map__35851__$1 = ((cljs.core.seq_QMARK_(map__35851))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35851):map__35851);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35851__$1,cljs.core.constant$keyword$955);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35851__$1,cljs.core.constant$keyword$954);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35851__$1,cljs.core.constant$keyword$953);if(typeof clustermap.components.map_report.t35852 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35852 = (function (pc_count,path_fn,const_count,ic_count,map__35851,constituency_report,comm,constituency,view_path_fn,site_stats,meta35853){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__35851 = map__35851;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta35853 = meta35853;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35852.cljs$lang$type = true;
clustermap.components.map_report.t35852.cljs$lang$ctorStr = "clustermap.components.map-report/t35852";
clustermap.components.map_report.t35852.cljs$lang$ctorPrWriter = ((function (map__35851,map__35851__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.map-report/t35852");
});})(map__35851,map__35851__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35852.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35852.prototype.om$core$IRender$render$arity$1 = ((function (map__35851,map__35851__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs35857 = cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35857))?sablono.interpreter.attributes(attrs35857):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35857))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35857),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35862 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35862))?sablono.interpreter.attributes(attrs35862):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35862))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35863 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35863))?sablono.interpreter.attributes(attrs35863):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35863))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35863)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35862),(function (){var attrs35864 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35864))?sablono.interpreter.attributes(attrs35864):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35864))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35864)], null))));
})()], null))));
})(),(function (){var attrs35865 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35865))?sablono.interpreter.attributes(attrs35865):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35865))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35866 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35866))?sablono.interpreter.attributes(attrs35866):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35866))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35866)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35865),(function (){var attrs35867 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35867))?sablono.interpreter.attributes(attrs35867):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35867))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35867)], null))));
})()], null))));
})(),(function (){var attrs35868 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35878 = self__.site_stats;var G__35878__$1 = (((G__35878 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35878));var G__35878__$2 = (((G__35878__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35878__$1));return G__35878__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35878 = self__.site_stats;var G__35878__$1 = (((G__35878 == null))?null:cljs.core.constant$keyword$920.cljs$core$IFn$_invoke$arity$1(G__35878));var G__35878__$2 = (((G__35878__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35878__$1));return G__35878__$2;
})(),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35868))?sablono.interpreter.attributes(attrs35868):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35868))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35868),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35873 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35879 = self__.site_stats;var G__35879__$1 = (((G__35879 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35879));var G__35879__$2 = (((G__35879__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35879__$1));return G__35879__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35879 = self__.site_stats;var G__35879__$1 = (((G__35879 == null))?null:cljs.core.constant$keyword$935.cljs$core$IFn$_invoke$arity$1(G__35879));var G__35879__$2 = (((G__35879__$1 == null))?null:cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(G__35879__$1));return G__35879__$2;
})(),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35873))?sablono.interpreter.attributes(attrs35873):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35873))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35873),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm,self__.view_path_fn)));
});})(map__35851,map__35851__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35851,map__35851__$1,const_count,ic_count,pc_count){
return (function (_35854){var self__ = this;
var _35854__$1 = this;return self__.meta35853;
});})(map__35851,map__35851__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35851,map__35851__$1,const_count,ic_count,pc_count){
return (function (_35854,meta35853__$1){var self__ = this;
var _35854__$1 = this;return (new clustermap.components.map_report.t35852(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__35851,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta35853__$1));
});})(map__35851,map__35851__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35852 = ((function (map__35851,map__35851__$1,const_count,ic_count,pc_count){
return (function __GT_t35852(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__35851__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta35853){return (new clustermap.components.map_report.t35852(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__35851__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta35853));
});})(map__35851,map__35851__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35852(pc_count,path_fn,const_count,ic_count,map__35851__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__35884 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35884__$1 = ((cljs.core.seq_QMARK_(map__35884))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35884):map__35884);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,cljs.core.constant$keyword$958);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,cljs.core.constant$keyword$857);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35884__$1,cljs.core.constant$keyword$867);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$959);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$921,cljs.core.constant$keyword$772], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$921,cljs.core.constant$keyword$804], null));var site_stats = cljs.core.constant$keyword$925.cljs$core$IFn$_invoke$arity$1(data);var pred__35885 = cljs.core._EQ__EQ_;var expr__35886 = type;if(cljs.core.truth_((pred__35885.cljs$core$IFn$_invoke$arity$2 ? pred__35885.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$859,expr__35886) : pred__35885.call(null,cljs.core.constant$keyword$859,expr__35886))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35885.cljs$core$IFn$_invoke$arity$2 ? pred__35885.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$860,expr__35886) : pred__35885.call(null,cljs.core.constant$keyword$860,expr__35886))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_((pred__35885.cljs$core$IFn$_invoke$arity$2 ? pred__35885.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$862,expr__35886) : pred__35885.call(null,cljs.core.constant$keyword$862,expr__35886))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$852,shared,cljs.core.constant$keyword$855,document.getElementById(elem_id)], null));
});
