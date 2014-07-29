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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__50102 = site_stats;var G__50102__$1 = (((G__50102 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__50102));return G__50102__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__50103 = site_stats;var G__50103__$1 = (((G__50103 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__50103));return G__50103__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__50104 = site_stats;var G__50104__$1 = (((G__50104 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__50104));return G__50104__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__50136 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50136__$1 = ((cljs.core.seq_QMARK_.call(null,map__50136))?cljs.core.apply.call(null,cljs.core.hash_map,map__50136):map__50136);var const_count = cljs.core.get.call(null,map__50136__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50136__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50136__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50137 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50137 = (function (pc_count,ic_count,const_count,map__50136,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta50138){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__50136 = map__50136;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta50138 = meta50138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50137.cljs$lang$type = true;
clustermap.components.map_report.t50137.cljs$lang$ctorStr = "clustermap.components.map-report/t50137";
clustermap.components.map_report.t50137.cljs$lang$ctorPrWriter = ((function (map__50136,map__50136__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50137");
});})(map__50136,map__50136__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50137.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50137.prototype.om$core$IRender$render$arity$1 = ((function (map__50136,map__50136__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs50142 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50142))?sablono.interpreter.attributes.call(null,attrs50142):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50142))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50142),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs50147 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50147))?sablono.interpreter.attributes.call(null,attrs50147):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50147))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50147),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs50152 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50152))?sablono.interpreter.attributes.call(null,attrs50152):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50152))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50153 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50153))?sablono.interpreter.attributes.call(null,attrs50153):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50153))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50153)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50152),(function (){var attrs50154 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50154))?sablono.interpreter.attributes.call(null,attrs50154):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50154))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50154)], null))));
})()], null))));
})(),(function (){var attrs50155 = clustermap.formats.money.fmoney.call(null,(function (){var G__50165 = self__.site_stats;var G__50165__$1 = (((G__50165 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50165));var G__50165__$2 = (((G__50165__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50165__$1));return G__50165__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50155))?sablono.interpreter.attributes.call(null,attrs50155):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50155))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50155),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50160 = clustermap.formats.number.fnum.call(null,(function (){var G__50166 = self__.site_stats;var G__50166__$1 = (((G__50166 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50166));var G__50166__$2 = (((G__50166__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50166__$1));return G__50166__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50160))?sablono.interpreter.attributes.call(null,attrs50160):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50160))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50160),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50136,map__50136__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50136,map__50136__$1,const_count,ic_count,pc_count){
return (function (_50139){var self__ = this;
var _50139__$1 = this;return self__.meta50138;
});})(map__50136,map__50136__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50136,map__50136__$1,const_count,ic_count,pc_count){
return (function (_50139,meta50138__$1){var self__ = this;
var _50139__$1 = this;return (new clustermap.components.map_report.t50137(self__.pc_count,self__.ic_count,self__.const_count,self__.map__50136,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta50138__$1));
});})(map__50136,map__50136__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50137 = ((function (map__50136,map__50136__$1,const_count,ic_count,pc_count){
return (function __GT_t50137(pc_count__$1,ic_count__$1,const_count__$1,map__50136__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta50138){return (new clustermap.components.map_report.t50137(pc_count__$1,ic_count__$1,const_count__$1,map__50136__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta50138));
});})(map__50136,map__50136__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50137(pc_count,ic_count,const_count,map__50136__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__50192 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50192__$1 = ((cljs.core.seq_QMARK_.call(null,map__50192))?cljs.core.apply.call(null,cljs.core.hash_map,map__50192):map__50192);var const_count = cljs.core.get.call(null,map__50192__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50192__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50192__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50193 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50193 = (function (pc_count,path_fn,const_count,map__50192,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta50194){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.map__50192 = map__50192;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta50194 = meta50194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50193.cljs$lang$type = true;
clustermap.components.map_report.t50193.cljs$lang$ctorStr = "clustermap.components.map-report/t50193";
clustermap.components.map_report.t50193.cljs$lang$ctorPrWriter = ((function (map__50192,map__50192__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50193");
});})(map__50192,map__50192__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50193.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50193.prototype.om$core$IRender$render$arity$1 = ((function (map__50192,map__50192__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs50198 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50198))?sablono.interpreter.attributes.call(null,attrs50198):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50198))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50198)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50199 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50199))?sablono.interpreter.attributes.call(null,attrs50199):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50199))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50200 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50200))?sablono.interpreter.attributes.call(null,attrs50200):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50200))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50200)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50199),(function (){var attrs50201 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50201))?sablono.interpreter.attributes.call(null,attrs50201):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50201))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50201)], null))));
})()], null))));
})(),(function (){var attrs50202 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50202))?sablono.interpreter.attributes.call(null,attrs50202):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50202))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50203 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50203))?sablono.interpreter.attributes.call(null,attrs50203):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50203))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50203)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50202),(function (){var attrs50204 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50204))?sablono.interpreter.attributes.call(null,attrs50204):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50204))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50204)], null))));
})()], null))));
})(),(function (){var attrs50205 = clustermap.formats.money.fmoney.call(null,(function (){var G__50215 = self__.site_stats;var G__50215__$1 = (((G__50215 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50215));var G__50215__$2 = (((G__50215__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50215__$1));return G__50215__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50205))?sablono.interpreter.attributes.call(null,attrs50205):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50205))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50205),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50210 = clustermap.formats.number.fnum.call(null,(function (){var G__50216 = self__.site_stats;var G__50216__$1 = (((G__50216 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50216));var G__50216__$2 = (((G__50216__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50216__$1));return G__50216__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50210))?sablono.interpreter.attributes.call(null,attrs50210):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50210))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50210),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50192,map__50192__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50192,map__50192__$1,const_count,ic_count,pc_count){
return (function (_50195){var self__ = this;
var _50195__$1 = this;return self__.meta50194;
});})(map__50192,map__50192__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50192,map__50192__$1,const_count,ic_count,pc_count){
return (function (_50195,meta50194__$1){var self__ = this;
var _50195__$1 = this;return (new clustermap.components.map_report.t50193(self__.pc_count,self__.path_fn,self__.const_count,self__.map__50192,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta50194__$1));
});})(map__50192,map__50192__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50193 = ((function (map__50192,map__50192__$1,const_count,ic_count,pc_count){
return (function __GT_t50193(pc_count__$1,path_fn__$1,const_count__$1,map__50192__$2,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta50194){return (new clustermap.components.map_report.t50193(pc_count__$1,path_fn__$1,const_count__$1,map__50192__$2,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta50194));
});})(map__50192,map__50192__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50193(pc_count,path_fn,const_count,map__50192__$1,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__50242 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50242__$1 = ((cljs.core.seq_QMARK_.call(null,map__50242))?cljs.core.apply.call(null,cljs.core.hash_map,map__50242):map__50242);var const_count = cljs.core.get.call(null,map__50242__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50242__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50242__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50243 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50243 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__50242,site_stats,meta50244){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__50242 = map__50242;
this.site_stats = site_stats;
this.meta50244 = meta50244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50243.cljs$lang$type = true;
clustermap.components.map_report.t50243.cljs$lang$ctorStr = "clustermap.components.map-report/t50243";
clustermap.components.map_report.t50243.cljs$lang$ctorPrWriter = ((function (map__50242,map__50242__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50243");
});})(map__50242,map__50242__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50243.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50243.prototype.om$core$IRender$render$arity$1 = ((function (map__50242,map__50242__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs50248 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50248))?sablono.interpreter.attributes.call(null,attrs50248):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50248))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50248)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50249 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50249))?sablono.interpreter.attributes.call(null,attrs50249):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50249))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50250 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50250))?sablono.interpreter.attributes.call(null,attrs50250):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50250))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50250)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50249),(function (){var attrs50251 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50251))?sablono.interpreter.attributes.call(null,attrs50251):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50251))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50251)], null))));
})()], null))));
})(),(function (){var attrs50252 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50252))?sablono.interpreter.attributes.call(null,attrs50252):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50252))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50253 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50253))?sablono.interpreter.attributes.call(null,attrs50253):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50253))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50253)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50252),(function (){var attrs50254 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50254))?sablono.interpreter.attributes.call(null,attrs50254):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50254))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50254)], null))));
})()], null))));
})(),(function (){var attrs50255 = clustermap.formats.money.fmoney.call(null,(function (){var G__50265 = self__.site_stats;var G__50265__$1 = (((G__50265 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50265));var G__50265__$2 = (((G__50265__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50265__$1));return G__50265__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50255))?sablono.interpreter.attributes.call(null,attrs50255):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50255))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50255),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50260 = clustermap.formats.number.fnum.call(null,(function (){var G__50266 = self__.site_stats;var G__50266__$1 = (((G__50266 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50266));var G__50266__$2 = (((G__50266__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50266__$1));return G__50266__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50260))?sablono.interpreter.attributes.call(null,attrs50260):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50260))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50260),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50242,map__50242__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50242,map__50242__$1,const_count,ic_count,pc_count){
return (function (_50245){var self__ = this;
var _50245__$1 = this;return self__.meta50244;
});})(map__50242,map__50242__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50242,map__50242__$1,const_count,ic_count,pc_count){
return (function (_50245,meta50244__$1){var self__ = this;
var _50245__$1 = this;return (new clustermap.components.map_report.t50243(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__50242,self__.site_stats,meta50244__$1));
});})(map__50242,map__50242__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50243 = ((function (map__50242,map__50242__$1,const_count,ic_count,pc_count){
return (function __GT_t50243(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__50242__$2,site_stats__$1,meta50244){return (new clustermap.components.map_report.t50243(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__50242__$2,site_stats__$1,meta50244));
});})(map__50242,map__50242__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50243(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__50242__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__50296 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50296__$1 = ((cljs.core.seq_QMARK_.call(null,map__50296))?cljs.core.apply.call(null,cljs.core.hash_map,map__50296):map__50296);var const_count = cljs.core.get.call(null,map__50296__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50296__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50296__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50297 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50297 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__50296,meta50298){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.map__50296 = map__50296;
this.meta50298 = meta50298;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50297.cljs$lang$type = true;
clustermap.components.map_report.t50297.cljs$lang$ctorStr = "clustermap.components.map-report/t50297";
clustermap.components.map_report.t50297.cljs$lang$ctorPrWriter = ((function (map__50296,map__50296__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50297");
});})(map__50296,map__50296__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50297.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50297.prototype.om$core$IRender$render$arity$1 = ((function (map__50296,map__50296__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs50302 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50302))?sablono.interpreter.attributes.call(null,attrs50302):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50302))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50302),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50307 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50307))?sablono.interpreter.attributes.call(null,attrs50307):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50307))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50308 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50308))?sablono.interpreter.attributes.call(null,attrs50308):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50308))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50308)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50307),(function (){var attrs50309 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50309))?sablono.interpreter.attributes.call(null,attrs50309):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50309))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50309)], null))));
})()], null))));
})(),(function (){var attrs50310 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50310))?sablono.interpreter.attributes.call(null,attrs50310):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50310))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50311 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50311))?sablono.interpreter.attributes.call(null,attrs50311):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50311))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50311)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50310),(function (){var attrs50312 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50312))?sablono.interpreter.attributes.call(null,attrs50312):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50312))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50312)], null))));
})()], null))));
})(),(function (){var attrs50313 = clustermap.formats.money.fmoney.call(null,(function (){var G__50323 = self__.site_stats;var G__50323__$1 = (((G__50323 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50323));var G__50323__$2 = (((G__50323__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50323__$1));return G__50323__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50313))?sablono.interpreter.attributes.call(null,attrs50313):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50313))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50313),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50318 = clustermap.formats.number.fnum.call(null,(function (){var G__50324 = self__.site_stats;var G__50324__$1 = (((G__50324 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50324));var G__50324__$2 = (((G__50324__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50324__$1));return G__50324__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50318))?sablono.interpreter.attributes.call(null,attrs50318):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50318))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50318),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50296,map__50296__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50297.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50296,map__50296__$1,const_count,ic_count,pc_count){
return (function (_50299){var self__ = this;
var _50299__$1 = this;return self__.meta50298;
});})(map__50296,map__50296__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50296,map__50296__$1,const_count,ic_count,pc_count){
return (function (_50299,meta50298__$1){var self__ = this;
var _50299__$1 = this;return (new clustermap.components.map_report.t50297(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,self__.map__50296,meta50298__$1));
});})(map__50296,map__50296__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50297 = ((function (map__50296,map__50296__$1,const_count,ic_count,pc_count){
return (function __GT_t50297(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__50296__$2,meta50298){return (new clustermap.components.map_report.t50297(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,map__50296__$2,meta50298));
});})(map__50296,map__50296__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50297(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,map__50296__$1,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__50329 = om.core.get_shared.call(null,owner);var map__50329__$1 = ((cljs.core.seq_QMARK_.call(null,map__50329))?cljs.core.apply.call(null,cljs.core.hash_map,map__50329):map__50329);var view_path_fn = cljs.core.get.call(null,map__50329__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__50329__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50329__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__50330 = cljs.core._EQ__EQ_;var expr__50331 = type;if(cljs.core.truth_(pred__50330.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__50331)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__50330.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__50331)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__50330.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__50331)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map