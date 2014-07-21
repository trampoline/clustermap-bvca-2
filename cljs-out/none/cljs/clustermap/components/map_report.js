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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__51810 = site_stats;var G__51810__$1 = (((G__51810 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__51810));return G__51810__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__51811 = site_stats;var G__51811__$1 = (((G__51811 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__51811));return G__51811__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__51812 = site_stats;var G__51812__$1 = (((G__51812 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__51812));return G__51812__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__51844 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__51844__$1 = ((cljs.core.seq_QMARK_.call(null,map__51844))?cljs.core.apply.call(null,cljs.core.hash_map,map__51844):map__51844);var const_count = cljs.core.get.call(null,map__51844__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__51844__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__51844__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t51845 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t51845 = (function (pc_count,ic_count,const_count,map__51844,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta51846){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__51844 = map__51844;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta51846 = meta51846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t51845.cljs$lang$type = true;
clustermap.components.map_report.t51845.cljs$lang$ctorStr = "clustermap.components.map-report/t51845";
clustermap.components.map_report.t51845.cljs$lang$ctorPrWriter = ((function (map__51844,map__51844__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t51845");
});})(map__51844,map__51844__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51845.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t51845.prototype.om$core$IRender$render$arity$1 = ((function (map__51844,map__51844__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs51850 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51850))?sablono.interpreter.attributes.call(null,attrs51850):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51850))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51850),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs51855 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51855))?sablono.interpreter.attributes.call(null,attrs51855):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51855))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51855),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs51860 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51860))?sablono.interpreter.attributes.call(null,attrs51860):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51860))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51861 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51861))?sablono.interpreter.attributes.call(null,attrs51861):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51861))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51861)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51860),(function (){var attrs51862 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51862))?sablono.interpreter.attributes.call(null,attrs51862):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51862))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51862)], null))));
})()], null))));
})(),(function (){var attrs51863 = clustermap.formats.money.fmoney.call(null,(function (){var G__51873 = self__.site_stats;var G__51873__$1 = (((G__51873 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__51873));var G__51873__$2 = (((G__51873__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51873__$1));return G__51873__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51863))?sablono.interpreter.attributes.call(null,attrs51863):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51863))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51863),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs51868 = clustermap.formats.number.fnum.call(null,(function (){var G__51874 = self__.site_stats;var G__51874__$1 = (((G__51874 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__51874));var G__51874__$2 = (((G__51874__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51874__$1));return G__51874__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51868))?sablono.interpreter.attributes.call(null,attrs51868):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51868))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51868),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__51844,map__51844__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51844,map__51844__$1,const_count,ic_count,pc_count){
return (function (_51847){var self__ = this;
var _51847__$1 = this;return self__.meta51846;
});})(map__51844,map__51844__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51844,map__51844__$1,const_count,ic_count,pc_count){
return (function (_51847,meta51846__$1){var self__ = this;
var _51847__$1 = this;return (new clustermap.components.map_report.t51845(self__.pc_count,self__.ic_count,self__.const_count,self__.map__51844,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta51846__$1));
});})(map__51844,map__51844__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t51845 = ((function (map__51844,map__51844__$1,const_count,ic_count,pc_count){
return (function __GT_t51845(pc_count__$1,ic_count__$1,const_count__$1,map__51844__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta51846){return (new clustermap.components.map_report.t51845(pc_count__$1,ic_count__$1,const_count__$1,map__51844__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta51846));
});})(map__51844,map__51844__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t51845(pc_count,ic_count,const_count,map__51844__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__51900 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__51900__$1 = ((cljs.core.seq_QMARK_.call(null,map__51900))?cljs.core.apply.call(null,cljs.core.hash_map,map__51900):map__51900);var const_count = cljs.core.get.call(null,map__51900__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__51900__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__51900__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t51901 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t51901 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__51900,comm,view_path_fn,portfolio_company_report,site_stats,meta51902){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__51900 = map__51900;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta51902 = meta51902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t51901.cljs$lang$type = true;
clustermap.components.map_report.t51901.cljs$lang$ctorStr = "clustermap.components.map-report/t51901";
clustermap.components.map_report.t51901.cljs$lang$ctorPrWriter = ((function (map__51900,map__51900__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t51901");
});})(map__51900,map__51900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51901.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t51901.prototype.om$core$IRender$render$arity$1 = ((function (map__51900,map__51900__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs51906 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs51906))?sablono.interpreter.attributes.call(null,attrs51906):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51906))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51906)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs51907 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51907))?sablono.interpreter.attributes.call(null,attrs51907):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51907))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51908 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51908))?sablono.interpreter.attributes.call(null,attrs51908):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51908))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51908)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51907),(function (){var attrs51909 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51909))?sablono.interpreter.attributes.call(null,attrs51909):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51909))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51909)], null))));
})()], null))));
})(),(function (){var attrs51910 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51910))?sablono.interpreter.attributes.call(null,attrs51910):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51910))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51911 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51911))?sablono.interpreter.attributes.call(null,attrs51911):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51911))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51911)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51910),(function (){var attrs51912 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51912))?sablono.interpreter.attributes.call(null,attrs51912):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51912))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51912)], null))));
})()], null))));
})(),(function (){var attrs51913 = clustermap.formats.money.fmoney.call(null,(function (){var G__51923 = self__.site_stats;var G__51923__$1 = (((G__51923 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__51923));var G__51923__$2 = (((G__51923__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51923__$1));return G__51923__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51913))?sablono.interpreter.attributes.call(null,attrs51913):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51913))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51913),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs51918 = clustermap.formats.number.fnum.call(null,(function (){var G__51924 = self__.site_stats;var G__51924__$1 = (((G__51924 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__51924));var G__51924__$2 = (((G__51924__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51924__$1));return G__51924__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51918))?sablono.interpreter.attributes.call(null,attrs51918):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51918))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51918),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__51900,map__51900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51900,map__51900__$1,const_count,ic_count,pc_count){
return (function (_51903){var self__ = this;
var _51903__$1 = this;return self__.meta51902;
});})(map__51900,map__51900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51900,map__51900__$1,const_count,ic_count,pc_count){
return (function (_51903,meta51902__$1){var self__ = this;
var _51903__$1 = this;return (new clustermap.components.map_report.t51901(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__51900,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta51902__$1));
});})(map__51900,map__51900__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t51901 = ((function (map__51900,map__51900__$1,const_count,ic_count,pc_count){
return (function __GT_t51901(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__51900__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta51902){return (new clustermap.components.map_report.t51901(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__51900__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta51902));
});})(map__51900,map__51900__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t51901(pc_count,path_fn,const_count,portfolio_company,ic_count,map__51900__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__51950 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__51950__$1 = ((cljs.core.seq_QMARK_.call(null,map__51950))?cljs.core.apply.call(null,cljs.core.hash_map,map__51950):map__51950);var const_count = cljs.core.get.call(null,map__51950__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__51950__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__51950__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t51951 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t51951 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__51950,comm,investor_company_report,view_path_fn,site_stats,meta51952){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__51950 = map__51950;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta51952 = meta51952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t51951.cljs$lang$type = true;
clustermap.components.map_report.t51951.cljs$lang$ctorStr = "clustermap.components.map-report/t51951";
clustermap.components.map_report.t51951.cljs$lang$ctorPrWriter = ((function (map__51950,map__51950__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t51951");
});})(map__51950,map__51950__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51951.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t51951.prototype.om$core$IRender$render$arity$1 = ((function (map__51950,map__51950__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs51956 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs51956))?sablono.interpreter.attributes.call(null,attrs51956):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51956))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51956)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs51957 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51957))?sablono.interpreter.attributes.call(null,attrs51957):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51957))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51958 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51958))?sablono.interpreter.attributes.call(null,attrs51958):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51958))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51958)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51957),(function (){var attrs51959 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51959))?sablono.interpreter.attributes.call(null,attrs51959):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51959))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51959)], null))));
})()], null))));
})(),(function (){var attrs51960 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51960))?sablono.interpreter.attributes.call(null,attrs51960):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51960))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51961 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51961))?sablono.interpreter.attributes.call(null,attrs51961):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51961))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51961)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51960),(function (){var attrs51962 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51962))?sablono.interpreter.attributes.call(null,attrs51962):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51962))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51962)], null))));
})()], null))));
})(),(function (){var attrs51963 = clustermap.formats.money.fmoney.call(null,(function (){var G__51973 = self__.site_stats;var G__51973__$1 = (((G__51973 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__51973));var G__51973__$2 = (((G__51973__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51973__$1));return G__51973__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51963))?sablono.interpreter.attributes.call(null,attrs51963):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51963))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51963),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs51968 = clustermap.formats.number.fnum.call(null,(function (){var G__51974 = self__.site_stats;var G__51974__$1 = (((G__51974 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__51974));var G__51974__$2 = (((G__51974__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51974__$1));return G__51974__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51968))?sablono.interpreter.attributes.call(null,attrs51968):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51968))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51968),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__51950,map__51950__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51950,map__51950__$1,const_count,ic_count,pc_count){
return (function (_51953){var self__ = this;
var _51953__$1 = this;return self__.meta51952;
});})(map__51950,map__51950__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51950,map__51950__$1,const_count,ic_count,pc_count){
return (function (_51953,meta51952__$1){var self__ = this;
var _51953__$1 = this;return (new clustermap.components.map_report.t51951(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__51950,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta51952__$1));
});})(map__51950,map__51950__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t51951 = ((function (map__51950,map__51950__$1,const_count,ic_count,pc_count){
return (function __GT_t51951(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__51950__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta51952){return (new clustermap.components.map_report.t51951(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__51950__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta51952));
});})(map__51950,map__51950__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t51951(pc_count,path_fn,const_count,investor_company,ic_count,map__51950__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__52004 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__52004__$1 = ((cljs.core.seq_QMARK_.call(null,map__52004))?cljs.core.apply.call(null,cljs.core.hash_map,map__52004):map__52004);var const_count = cljs.core.get.call(null,map__52004__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__52004__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__52004__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t52005 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t52005 = (function (pc_count,map__52004,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta52006){
this.pc_count = pc_count;
this.map__52004 = map__52004;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta52006 = meta52006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t52005.cljs$lang$type = true;
clustermap.components.map_report.t52005.cljs$lang$ctorStr = "clustermap.components.map-report/t52005";
clustermap.components.map_report.t52005.cljs$lang$ctorPrWriter = ((function (map__52004,map__52004__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t52005");
});})(map__52004,map__52004__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t52005.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t52005.prototype.om$core$IRender$render$arity$1 = ((function (map__52004,map__52004__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs52010 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs52010))?sablono.interpreter.attributes.call(null,attrs52010):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52010))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52010),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs52015 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52015))?sablono.interpreter.attributes.call(null,attrs52015):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52015))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs52016 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52016))?sablono.interpreter.attributes.call(null,attrs52016):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52016))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52016)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52015),(function (){var attrs52017 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52017))?sablono.interpreter.attributes.call(null,attrs52017):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52017))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52017)], null))));
})()], null))));
})(),(function (){var attrs52018 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52018))?sablono.interpreter.attributes.call(null,attrs52018):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52018))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs52019 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52019))?sablono.interpreter.attributes.call(null,attrs52019):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52019))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52019)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52018),(function (){var attrs52020 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52020))?sablono.interpreter.attributes.call(null,attrs52020):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52020))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52020)], null))));
})()], null))));
})(),(function (){var attrs52021 = clustermap.formats.money.fmoney.call(null,(function (){var G__52031 = self__.site_stats;var G__52031__$1 = (((G__52031 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__52031));var G__52031__$2 = (((G__52031__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__52031__$1));return G__52031__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52021))?sablono.interpreter.attributes.call(null,attrs52021):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52021))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52021),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs52026 = clustermap.formats.number.fnum.call(null,(function (){var G__52032 = self__.site_stats;var G__52032__$1 = (((G__52032 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__52032));var G__52032__$2 = (((G__52032__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__52032__$1));return G__52032__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52026))?sablono.interpreter.attributes.call(null,attrs52026):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52026))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52026),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__52004,map__52004__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t52005.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__52004,map__52004__$1,const_count,ic_count,pc_count){
return (function (_52007){var self__ = this;
var _52007__$1 = this;return self__.meta52006;
});})(map__52004,map__52004__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t52005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__52004,map__52004__$1,const_count,ic_count,pc_count){
return (function (_52007,meta52006__$1){var self__ = this;
var _52007__$1 = this;return (new clustermap.components.map_report.t52005(self__.pc_count,self__.map__52004,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta52006__$1));
});})(map__52004,map__52004__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t52005 = ((function (map__52004,map__52004__$1,const_count,ic_count,pc_count){
return (function __GT_t52005(pc_count__$1,map__52004__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta52006){return (new clustermap.components.map_report.t52005(pc_count__$1,map__52004__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta52006));
});})(map__52004,map__52004__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t52005(pc_count,map__52004__$1,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__52037 = om.core.get_shared.call(null,owner);var map__52037__$1 = ((cljs.core.seq_QMARK_.call(null,map__52037))?cljs.core.apply.call(null,cljs.core.hash_map,map__52037):map__52037);var view_path_fn = cljs.core.get.call(null,map__52037__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__52037__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__52037__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__52038 = cljs.core._EQ__EQ_;var expr__52039 = type;if(cljs.core.truth_(pred__52038.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__52039)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__52038.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__52039)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__52038.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__52039)))
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