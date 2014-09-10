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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__50664 = site_stats;var G__50664__$1 = (((G__50664 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__50664));return G__50664__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__50665 = site_stats;var G__50665__$1 = (((G__50665 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__50665));return G__50665__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__50666 = site_stats;var G__50666__$1 = (((G__50666 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__50666));return G__50666__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__50698 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50698__$1 = ((cljs.core.seq_QMARK_.call(null,map__50698))?cljs.core.apply.call(null,cljs.core.hash_map,map__50698):map__50698);var const_count = cljs.core.get.call(null,map__50698__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50698__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50698__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50699 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50699 = (function (pc_count,ic_count,const_count,map__50698,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta50700){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__50698 = map__50698;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta50700 = meta50700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50699.cljs$lang$type = true;
clustermap.components.map_report.t50699.cljs$lang$ctorStr = "clustermap.components.map-report/t50699";
clustermap.components.map_report.t50699.cljs$lang$ctorPrWriter = ((function (map__50698,map__50698__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t50699");
});})(map__50698,map__50698__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50699.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50699.prototype.om$core$IRender$render$arity$1 = ((function (map__50698,map__50698__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs50704 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50704))?sablono.interpreter.attributes.call(null,attrs50704):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50704))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50704),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs50709 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50709))?sablono.interpreter.attributes.call(null,attrs50709):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50709))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50709),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs50714 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50714))?sablono.interpreter.attributes.call(null,attrs50714):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50714))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50715 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50715))?sablono.interpreter.attributes.call(null,attrs50715):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50715))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50715)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50714),(function (){var attrs50716 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50716))?sablono.interpreter.attributes.call(null,attrs50716):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50716))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50716)], null))));
})()], null))));
})(),(function (){var attrs50717 = clustermap.formats.money.fmoney.call(null,(function (){var G__50727 = self__.site_stats;var G__50727__$1 = (((G__50727 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50727));var G__50727__$2 = (((G__50727__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50727__$1));return G__50727__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50717))?sablono.interpreter.attributes.call(null,attrs50717):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50717))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50717),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50722 = clustermap.formats.number.fnum.call(null,(function (){var G__50728 = self__.site_stats;var G__50728__$1 = (((G__50728 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50728));var G__50728__$2 = (((G__50728__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50728__$1));return G__50728__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50722))?sablono.interpreter.attributes.call(null,attrs50722):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50722))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50722),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50698,map__50698__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50698,map__50698__$1,const_count,ic_count,pc_count){
return (function (_50701){var self__ = this;
var _50701__$1 = this;return self__.meta50700;
});})(map__50698,map__50698__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50698,map__50698__$1,const_count,ic_count,pc_count){
return (function (_50701,meta50700__$1){var self__ = this;
var _50701__$1 = this;return (new clustermap.components.map_report.t50699(self__.pc_count,self__.ic_count,self__.const_count,self__.map__50698,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta50700__$1));
});})(map__50698,map__50698__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50699 = ((function (map__50698,map__50698__$1,const_count,ic_count,pc_count){
return (function __GT_t50699(pc_count__$1,ic_count__$1,const_count__$1,map__50698__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta50700){return (new clustermap.components.map_report.t50699(pc_count__$1,ic_count__$1,const_count__$1,map__50698__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta50700));
});})(map__50698,map__50698__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50699(pc_count,ic_count,const_count,map__50698__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__50754 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50754__$1 = ((cljs.core.seq_QMARK_.call(null,map__50754))?cljs.core.apply.call(null,cljs.core.hash_map,map__50754):map__50754);var const_count = cljs.core.get.call(null,map__50754__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50754__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50754__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50755 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50755 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__50754,comm,view_path_fn,portfolio_company_report,site_stats,meta50756){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__50754 = map__50754;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta50756 = meta50756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50755.cljs$lang$type = true;
clustermap.components.map_report.t50755.cljs$lang$ctorStr = "clustermap.components.map-report/t50755";
clustermap.components.map_report.t50755.cljs$lang$ctorPrWriter = ((function (map__50754,map__50754__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t50755");
});})(map__50754,map__50754__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50755.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50755.prototype.om$core$IRender$render$arity$1 = ((function (map__50754,map__50754__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs50760 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50760))?sablono.interpreter.attributes.call(null,attrs50760):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50760))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50760)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50761 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50761))?sablono.interpreter.attributes.call(null,attrs50761):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50761))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50762 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50762))?sablono.interpreter.attributes.call(null,attrs50762):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50762))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50762)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50761),(function (){var attrs50763 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50763))?sablono.interpreter.attributes.call(null,attrs50763):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50763))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50763)], null))));
})()], null))));
})(),(function (){var attrs50764 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50764))?sablono.interpreter.attributes.call(null,attrs50764):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50764))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50765 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50765))?sablono.interpreter.attributes.call(null,attrs50765):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50765))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50765)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50764),(function (){var attrs50766 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50766))?sablono.interpreter.attributes.call(null,attrs50766):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50766))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50766)], null))));
})()], null))));
})(),(function (){var attrs50767 = clustermap.formats.money.fmoney.call(null,(function (){var G__50777 = self__.site_stats;var G__50777__$1 = (((G__50777 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50777));var G__50777__$2 = (((G__50777__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50777__$1));return G__50777__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50767))?sablono.interpreter.attributes.call(null,attrs50767):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50767))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50767),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50772 = clustermap.formats.number.fnum.call(null,(function (){var G__50778 = self__.site_stats;var G__50778__$1 = (((G__50778 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50778));var G__50778__$2 = (((G__50778__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50778__$1));return G__50778__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50772))?sablono.interpreter.attributes.call(null,attrs50772):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50772))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50772),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50754,map__50754__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50754,map__50754__$1,const_count,ic_count,pc_count){
return (function (_50757){var self__ = this;
var _50757__$1 = this;return self__.meta50756;
});})(map__50754,map__50754__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50754,map__50754__$1,const_count,ic_count,pc_count){
return (function (_50757,meta50756__$1){var self__ = this;
var _50757__$1 = this;return (new clustermap.components.map_report.t50755(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__50754,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta50756__$1));
});})(map__50754,map__50754__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50755 = ((function (map__50754,map__50754__$1,const_count,ic_count,pc_count){
return (function __GT_t50755(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__50754__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta50756){return (new clustermap.components.map_report.t50755(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__50754__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta50756));
});})(map__50754,map__50754__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50755(pc_count,path_fn,const_count,portfolio_company,ic_count,map__50754__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__50804 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50804__$1 = ((cljs.core.seq_QMARK_.call(null,map__50804))?cljs.core.apply.call(null,cljs.core.hash_map,map__50804):map__50804);var const_count = cljs.core.get.call(null,map__50804__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50804__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50804__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50805 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50805 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__50804,comm,investor_company_report,view_path_fn,site_stats,meta50806){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__50804 = map__50804;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta50806 = meta50806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50805.cljs$lang$type = true;
clustermap.components.map_report.t50805.cljs$lang$ctorStr = "clustermap.components.map-report/t50805";
clustermap.components.map_report.t50805.cljs$lang$ctorPrWriter = ((function (map__50804,map__50804__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t50805");
});})(map__50804,map__50804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50805.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50805.prototype.om$core$IRender$render$arity$1 = ((function (map__50804,map__50804__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs50810 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50810))?sablono.interpreter.attributes.call(null,attrs50810):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50810))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50810)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50811 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50811))?sablono.interpreter.attributes.call(null,attrs50811):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50811))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50812 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50812))?sablono.interpreter.attributes.call(null,attrs50812):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50812))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50812)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50811),(function (){var attrs50813 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50813))?sablono.interpreter.attributes.call(null,attrs50813):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50813))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50813)], null))));
})()], null))));
})(),(function (){var attrs50814 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50814))?sablono.interpreter.attributes.call(null,attrs50814):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50814))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50815 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50815))?sablono.interpreter.attributes.call(null,attrs50815):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50815))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50815)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50814),(function (){var attrs50816 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50816))?sablono.interpreter.attributes.call(null,attrs50816):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50816))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50816)], null))));
})()], null))));
})(),(function (){var attrs50817 = clustermap.formats.money.fmoney.call(null,(function (){var G__50827 = self__.site_stats;var G__50827__$1 = (((G__50827 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50827));var G__50827__$2 = (((G__50827__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50827__$1));return G__50827__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50817))?sablono.interpreter.attributes.call(null,attrs50817):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50817))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50817),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50822 = clustermap.formats.number.fnum.call(null,(function (){var G__50828 = self__.site_stats;var G__50828__$1 = (((G__50828 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50828));var G__50828__$2 = (((G__50828__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50828__$1));return G__50828__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50822))?sablono.interpreter.attributes.call(null,attrs50822):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50822))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50822),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50804,map__50804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50804,map__50804__$1,const_count,ic_count,pc_count){
return (function (_50807){var self__ = this;
var _50807__$1 = this;return self__.meta50806;
});})(map__50804,map__50804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50804,map__50804__$1,const_count,ic_count,pc_count){
return (function (_50807,meta50806__$1){var self__ = this;
var _50807__$1 = this;return (new clustermap.components.map_report.t50805(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__50804,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta50806__$1));
});})(map__50804,map__50804__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50805 = ((function (map__50804,map__50804__$1,const_count,ic_count,pc_count){
return (function __GT_t50805(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__50804__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta50806){return (new clustermap.components.map_report.t50805(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__50804__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta50806));
});})(map__50804,map__50804__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50805(pc_count,path_fn,const_count,investor_company,ic_count,map__50804__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__50858 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50858__$1 = ((cljs.core.seq_QMARK_.call(null,map__50858))?cljs.core.apply.call(null,cljs.core.hash_map,map__50858):map__50858);var const_count = cljs.core.get.call(null,map__50858__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50858__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50858__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50859 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50859 = (function (pc_count,path_fn,const_count,ic_count,map__50858,constituency_report,comm,constituency,view_path_fn,site_stats,meta50860){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__50858 = map__50858;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta50860 = meta50860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50859.cljs$lang$type = true;
clustermap.components.map_report.t50859.cljs$lang$ctorStr = "clustermap.components.map-report/t50859";
clustermap.components.map_report.t50859.cljs$lang$ctorPrWriter = ((function (map__50858,map__50858__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t50859");
});})(map__50858,map__50858__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50859.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50859.prototype.om$core$IRender$render$arity$1 = ((function (map__50858,map__50858__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs50864 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50864))?sablono.interpreter.attributes.call(null,attrs50864):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50864))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50864),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50869 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50869))?sablono.interpreter.attributes.call(null,attrs50869):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50869))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50870 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50870))?sablono.interpreter.attributes.call(null,attrs50870):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50870))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50870)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50869),(function (){var attrs50871 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50871))?sablono.interpreter.attributes.call(null,attrs50871):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50871))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50871)], null))));
})()], null))));
})(),(function (){var attrs50872 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50872))?sablono.interpreter.attributes.call(null,attrs50872):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50872))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50873 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50873))?sablono.interpreter.attributes.call(null,attrs50873):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50873))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50873)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50872),(function (){var attrs50874 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50874))?sablono.interpreter.attributes.call(null,attrs50874):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50874))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50874)], null))));
})()], null))));
})(),(function (){var attrs50875 = clustermap.formats.money.fmoney.call(null,(function (){var G__50885 = self__.site_stats;var G__50885__$1 = (((G__50885 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50885));var G__50885__$2 = (((G__50885__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50885__$1));return G__50885__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50875))?sablono.interpreter.attributes.call(null,attrs50875):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50875))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50875),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50880 = clustermap.formats.number.fnum.call(null,(function (){var G__50886 = self__.site_stats;var G__50886__$1 = (((G__50886 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50886));var G__50886__$2 = (((G__50886__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50886__$1));return G__50886__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50880))?sablono.interpreter.attributes.call(null,attrs50880):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50880))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50880),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50858,map__50858__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50858,map__50858__$1,const_count,ic_count,pc_count){
return (function (_50861){var self__ = this;
var _50861__$1 = this;return self__.meta50860;
});})(map__50858,map__50858__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50858,map__50858__$1,const_count,ic_count,pc_count){
return (function (_50861,meta50860__$1){var self__ = this;
var _50861__$1 = this;return (new clustermap.components.map_report.t50859(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__50858,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta50860__$1));
});})(map__50858,map__50858__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50859 = ((function (map__50858,map__50858__$1,const_count,ic_count,pc_count){
return (function __GT_t50859(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__50858__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta50860){return (new clustermap.components.map_report.t50859(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__50858__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta50860));
});})(map__50858,map__50858__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50859(pc_count,path_fn,const_count,ic_count,map__50858__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__50891 = om.core.get_shared.call(null,owner);var map__50891__$1 = ((cljs.core.seq_QMARK_.call(null,map__50891))?cljs.core.apply.call(null,cljs.core.hash_map,map__50891):map__50891);var view_path_fn = cljs.core.get.call(null,map__50891__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__50891__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50891__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__50892 = cljs.core._EQ__EQ_;var expr__50893 = type;if(cljs.core.truth_(pred__50892.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__50893)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__50892.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__50893)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__50892.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__50893)))
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