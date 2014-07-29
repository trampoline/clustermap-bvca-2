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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13541 = site_stats;var G__13541__$1 = (((G__13541 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13541));return G__13541__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13542 = site_stats;var G__13542__$1 = (((G__13542 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13542));return G__13542__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13543 = site_stats;var G__13543__$1 = (((G__13543 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13543));return G__13543__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13575 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13575__$1 = ((cljs.core.seq_QMARK_.call(null,map__13575))?cljs.core.apply.call(null,cljs.core.hash_map,map__13575):map__13575);var const_count = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13576 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13576 = (function (pc_count,ic_count,const_count,map__13575,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13577){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13575 = map__13575;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13577 = meta13577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13576.cljs$lang$type = true;
clustermap.components.map_report.t13576.cljs$lang$ctorStr = "clustermap.components.map-report/t13576";
clustermap.components.map_report.t13576.cljs$lang$ctorPrWriter = ((function (map__13575,map__13575__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13576");
});})(map__13575,map__13575__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13576.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13576.prototype.om$core$IRender$render$arity$1 = ((function (map__13575,map__13575__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13581 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13581))?sablono.interpreter.attributes.call(null,attrs13581):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13581))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13581),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13586 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13586))?sablono.interpreter.attributes.call(null,attrs13586):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13586))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13586),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13591 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13591))?sablono.interpreter.attributes.call(null,attrs13591):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13591))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13592 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13592))?sablono.interpreter.attributes.call(null,attrs13592):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13592))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13592)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13591),(function (){var attrs13593 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13593))?sablono.interpreter.attributes.call(null,attrs13593):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13593))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13593)], null))));
})()], null))));
})(),(function (){var attrs13594 = clustermap.formats.money.fmoney.call(null,(function (){var G__13604 = self__.site_stats;var G__13604__$1 = (((G__13604 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13604));var G__13604__$2 = (((G__13604__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13604__$1));return G__13604__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13594))?sablono.interpreter.attributes.call(null,attrs13594):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13594))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13594),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13599 = clustermap.formats.number.fnum.call(null,(function (){var G__13605 = self__.site_stats;var G__13605__$1 = (((G__13605 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13605));var G__13605__$2 = (((G__13605__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13605__$1));return G__13605__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13599))?sablono.interpreter.attributes.call(null,attrs13599):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13599))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13599),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13575,map__13575__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13575,map__13575__$1,const_count,ic_count,pc_count){
return (function (_13578){var self__ = this;
var _13578__$1 = this;return self__.meta13577;
});})(map__13575,map__13575__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13575,map__13575__$1,const_count,ic_count,pc_count){
return (function (_13578,meta13577__$1){var self__ = this;
var _13578__$1 = this;return (new clustermap.components.map_report.t13576(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13575,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13577__$1));
});})(map__13575,map__13575__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13576 = ((function (map__13575,map__13575__$1,const_count,ic_count,pc_count){
return (function __GT_t13576(pc_count__$1,ic_count__$1,const_count__$1,map__13575__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13577){return (new clustermap.components.map_report.t13576(pc_count__$1,ic_count__$1,const_count__$1,map__13575__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13577));
});})(map__13575,map__13575__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13576(pc_count,ic_count,const_count,map__13575__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13631 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13631__$1 = ((cljs.core.seq_QMARK_.call(null,map__13631))?cljs.core.apply.call(null,cljs.core.hash_map,map__13631):map__13631);var const_count = cljs.core.get.call(null,map__13631__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13631__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13631__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13632 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13632 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__13631,portfolio_company_report,site_stats,meta13633){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__13631 = map__13631;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13633 = meta13633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13632.cljs$lang$type = true;
clustermap.components.map_report.t13632.cljs$lang$ctorStr = "clustermap.components.map-report/t13632";
clustermap.components.map_report.t13632.cljs$lang$ctorPrWriter = ((function (map__13631,map__13631__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13632");
});})(map__13631,map__13631__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13632.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13632.prototype.om$core$IRender$render$arity$1 = ((function (map__13631,map__13631__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13637 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13637))?sablono.interpreter.attributes.call(null,attrs13637):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13637))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13637)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13638 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13638))?sablono.interpreter.attributes.call(null,attrs13638):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13638))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13639 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13639))?sablono.interpreter.attributes.call(null,attrs13639):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13639))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13639)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13638),(function (){var attrs13640 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13640))?sablono.interpreter.attributes.call(null,attrs13640):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13640))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13640)], null))));
})()], null))));
})(),(function (){var attrs13641 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13641))?sablono.interpreter.attributes.call(null,attrs13641):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13641))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13642 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13642))?sablono.interpreter.attributes.call(null,attrs13642):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13642))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13642)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13641),(function (){var attrs13643 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13643))?sablono.interpreter.attributes.call(null,attrs13643):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13643))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13643)], null))));
})()], null))));
})(),(function (){var attrs13644 = clustermap.formats.money.fmoney.call(null,(function (){var G__13654 = self__.site_stats;var G__13654__$1 = (((G__13654 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13654));var G__13654__$2 = (((G__13654__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13654__$1));return G__13654__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13644))?sablono.interpreter.attributes.call(null,attrs13644):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13644))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13644),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13649 = clustermap.formats.number.fnum.call(null,(function (){var G__13655 = self__.site_stats;var G__13655__$1 = (((G__13655 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13655));var G__13655__$2 = (((G__13655__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13655__$1));return G__13655__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13649))?sablono.interpreter.attributes.call(null,attrs13649):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13649))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13649),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13631,map__13631__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13632.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13631,map__13631__$1,const_count,ic_count,pc_count){
return (function (_13634){var self__ = this;
var _13634__$1 = this;return self__.meta13633;
});})(map__13631,map__13631__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13631,map__13631__$1,const_count,ic_count,pc_count){
return (function (_13634,meta13633__$1){var self__ = this;
var _13634__$1 = this;return (new clustermap.components.map_report.t13632(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__13631,self__.portfolio_company_report,self__.site_stats,meta13633__$1));
});})(map__13631,map__13631__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13632 = ((function (map__13631,map__13631__$1,const_count,ic_count,pc_count){
return (function __GT_t13632(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__13631__$2,portfolio_company_report__$1,site_stats__$1,meta13633){return (new clustermap.components.map_report.t13632(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__13631__$2,portfolio_company_report__$1,site_stats__$1,meta13633));
});})(map__13631,map__13631__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13632(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__13631__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13681 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13681__$1 = ((cljs.core.seq_QMARK_.call(null,map__13681))?cljs.core.apply.call(null,cljs.core.hash_map,map__13681):map__13681);var const_count = cljs.core.get.call(null,map__13681__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13681__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13681__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13682 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13682 = (function (pc_count,path_fn,const_count,map__13681,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta13683){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.map__13681 = map__13681;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13683 = meta13683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13682.cljs$lang$type = true;
clustermap.components.map_report.t13682.cljs$lang$ctorStr = "clustermap.components.map-report/t13682";
clustermap.components.map_report.t13682.cljs$lang$ctorPrWriter = ((function (map__13681,map__13681__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13682");
});})(map__13681,map__13681__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13682.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13682.prototype.om$core$IRender$render$arity$1 = ((function (map__13681,map__13681__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13687 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13687))?sablono.interpreter.attributes.call(null,attrs13687):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13687))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13687)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13688 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13688))?sablono.interpreter.attributes.call(null,attrs13688):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13688))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13689 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13689))?sablono.interpreter.attributes.call(null,attrs13689):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13689))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13689)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13688),(function (){var attrs13690 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13690))?sablono.interpreter.attributes.call(null,attrs13690):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13690))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13690)], null))));
})()], null))));
})(),(function (){var attrs13691 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13691))?sablono.interpreter.attributes.call(null,attrs13691):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13691))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13692 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13692))?sablono.interpreter.attributes.call(null,attrs13692):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13692))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13692)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13691),(function (){var attrs13693 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13693))?sablono.interpreter.attributes.call(null,attrs13693):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13693))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13693)], null))));
})()], null))));
})(),(function (){var attrs13694 = clustermap.formats.money.fmoney.call(null,(function (){var G__13704 = self__.site_stats;var G__13704__$1 = (((G__13704 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13704));var G__13704__$2 = (((G__13704__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13704__$1));return G__13704__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13694))?sablono.interpreter.attributes.call(null,attrs13694):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13694))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13694),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13699 = clustermap.formats.number.fnum.call(null,(function (){var G__13705 = self__.site_stats;var G__13705__$1 = (((G__13705 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13705));var G__13705__$2 = (((G__13705__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13705__$1));return G__13705__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13699))?sablono.interpreter.attributes.call(null,attrs13699):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13699))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13699),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13681,map__13681__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13681,map__13681__$1,const_count,ic_count,pc_count){
return (function (_13684){var self__ = this;
var _13684__$1 = this;return self__.meta13683;
});})(map__13681,map__13681__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13681,map__13681__$1,const_count,ic_count,pc_count){
return (function (_13684,meta13683__$1){var self__ = this;
var _13684__$1 = this;return (new clustermap.components.map_report.t13682(self__.pc_count,self__.path_fn,self__.const_count,self__.map__13681,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta13683__$1));
});})(map__13681,map__13681__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13682 = ((function (map__13681,map__13681__$1,const_count,ic_count,pc_count){
return (function __GT_t13682(pc_count__$1,path_fn__$1,const_count__$1,map__13681__$2,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13683){return (new clustermap.components.map_report.t13682(pc_count__$1,path_fn__$1,const_count__$1,map__13681__$2,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13683));
});})(map__13681,map__13681__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13682(pc_count,path_fn,const_count,map__13681__$1,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13735 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13735__$1 = ((cljs.core.seq_QMARK_.call(null,map__13735))?cljs.core.apply.call(null,cljs.core.hash_map,map__13735):map__13735);var const_count = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13736 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13736 = (function (pc_count,path_fn,const_count,ic_count,map__13735,constituency_report,comm,constituency,view_path_fn,site_stats,meta13737){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__13735 = map__13735;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13737 = meta13737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13736.cljs$lang$type = true;
clustermap.components.map_report.t13736.cljs$lang$ctorStr = "clustermap.components.map-report/t13736";
clustermap.components.map_report.t13736.cljs$lang$ctorPrWriter = ((function (map__13735,map__13735__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t13736");
});})(map__13735,map__13735__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13736.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13736.prototype.om$core$IRender$render$arity$1 = ((function (map__13735,map__13735__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13741 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13741))?sablono.interpreter.attributes.call(null,attrs13741):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13741))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13741),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13746 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13746))?sablono.interpreter.attributes.call(null,attrs13746):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13746))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13747 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13747))?sablono.interpreter.attributes.call(null,attrs13747):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13747))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13747)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13746),(function (){var attrs13748 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13748))?sablono.interpreter.attributes.call(null,attrs13748):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13748))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13748)], null))));
})()], null))));
})(),(function (){var attrs13749 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13749))?sablono.interpreter.attributes.call(null,attrs13749):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13749))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13750 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13750))?sablono.interpreter.attributes.call(null,attrs13750):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13750))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13750)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13749),(function (){var attrs13751 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13751))?sablono.interpreter.attributes.call(null,attrs13751):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13751))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13751)], null))));
})()], null))));
})(),(function (){var attrs13752 = clustermap.formats.money.fmoney.call(null,(function (){var G__13762 = self__.site_stats;var G__13762__$1 = (((G__13762 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13762));var G__13762__$2 = (((G__13762__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13762__$1));return G__13762__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13752))?sablono.interpreter.attributes.call(null,attrs13752):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13752))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13752),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13757 = clustermap.formats.number.fnum.call(null,(function (){var G__13763 = self__.site_stats;var G__13763__$1 = (((G__13763 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13763));var G__13763__$2 = (((G__13763__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13763__$1));return G__13763__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13757))?sablono.interpreter.attributes.call(null,attrs13757):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13757))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13757),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13735,map__13735__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13735,map__13735__$1,const_count,ic_count,pc_count){
return (function (_13738){var self__ = this;
var _13738__$1 = this;return self__.meta13737;
});})(map__13735,map__13735__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13735,map__13735__$1,const_count,ic_count,pc_count){
return (function (_13738,meta13737__$1){var self__ = this;
var _13738__$1 = this;return (new clustermap.components.map_report.t13736(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__13735,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta13737__$1));
});})(map__13735,map__13735__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13736 = ((function (map__13735,map__13735__$1,const_count,ic_count,pc_count){
return (function __GT_t13736(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__13735__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta13737){return (new clustermap.components.map_report.t13736(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__13735__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta13737));
});})(map__13735,map__13735__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13736(pc_count,path_fn,const_count,ic_count,map__13735__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13768 = om.core.get_shared.call(null,owner);var map__13768__$1 = ((cljs.core.seq_QMARK_.call(null,map__13768))?cljs.core.apply.call(null,cljs.core.hash_map,map__13768):map__13768);var view_path_fn = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13768__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13769 = cljs.core._EQ__EQ_;var expr__13770 = type;if(cljs.core.truth_(pred__13769.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13770)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13769.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13770)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13769.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13770)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
