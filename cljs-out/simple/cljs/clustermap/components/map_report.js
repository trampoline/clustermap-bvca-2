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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__26592 = site_stats;var G__26592__$1 = (((G__26592 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__26592));return G__26592__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__26593 = site_stats;var G__26593__$1 = (((G__26593 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__26593));return G__26593__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__26594 = site_stats;var G__26594__$1 = (((G__26594 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__26594));return G__26594__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__26626 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26626__$1 = ((cljs.core.seq_QMARK_.call(null,map__26626))?cljs.core.apply.call(null,cljs.core.hash_map,map__26626):map__26626);var const_count = cljs.core.get.call(null,map__26626__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26626__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26626__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26627 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26627 = (function (pc_count,ic_count,const_count,map__26626,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta26628){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__26626 = map__26626;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta26628 = meta26628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26627.cljs$lang$type = true;
clustermap.components.map_report.t26627.cljs$lang$ctorStr = "clustermap.components.map-report/t26627";
clustermap.components.map_report.t26627.cljs$lang$ctorPrWriter = ((function (map__26626,map__26626__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26627");
});})(map__26626,map__26626__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26627.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26627.prototype.om$core$IRender$render$arity$1 = ((function (map__26626,map__26626__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs26632 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26632))?sablono.interpreter.attributes.call(null,attrs26632):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26632))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26632),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs26637 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26637))?sablono.interpreter.attributes.call(null,attrs26637):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26637))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26637),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs26642 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26642))?sablono.interpreter.attributes.call(null,attrs26642):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26642))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26643 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26643))?sablono.interpreter.attributes.call(null,attrs26643):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26643))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26643)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26642),(function (){var attrs26644 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26644))?sablono.interpreter.attributes.call(null,attrs26644):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26644))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26644)], null))));
})()], null))));
})(),(function (){var attrs26645 = clustermap.formats.money.fmoney.call(null,(function (){var G__26655 = self__.site_stats;var G__26655__$1 = (((G__26655 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26655));var G__26655__$2 = (((G__26655__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26655__$1));return G__26655__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26645))?sablono.interpreter.attributes.call(null,attrs26645):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26645))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26645),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26650 = clustermap.formats.number.fnum.call(null,(function (){var G__26656 = self__.site_stats;var G__26656__$1 = (((G__26656 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26656));var G__26656__$2 = (((G__26656__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26656__$1));return G__26656__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26650))?sablono.interpreter.attributes.call(null,attrs26650):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26650))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26650),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26626,map__26626__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26626,map__26626__$1,const_count,ic_count,pc_count){
return (function (_26629){var self__ = this;
var _26629__$1 = this;return self__.meta26628;
});})(map__26626,map__26626__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26626,map__26626__$1,const_count,ic_count,pc_count){
return (function (_26629,meta26628__$1){var self__ = this;
var _26629__$1 = this;return (new clustermap.components.map_report.t26627(self__.pc_count,self__.ic_count,self__.const_count,self__.map__26626,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta26628__$1));
});})(map__26626,map__26626__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26627 = ((function (map__26626,map__26626__$1,const_count,ic_count,pc_count){
return (function __GT_t26627(pc_count__$1,ic_count__$1,const_count__$1,map__26626__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta26628){return (new clustermap.components.map_report.t26627(pc_count__$1,ic_count__$1,const_count__$1,map__26626__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta26628));
});})(map__26626,map__26626__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26627(pc_count,ic_count,const_count,map__26626__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__26682 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26682__$1 = ((cljs.core.seq_QMARK_.call(null,map__26682))?cljs.core.apply.call(null,cljs.core.hash_map,map__26682):map__26682);var const_count = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26682__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26683 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26683 = (function (pc_count,map__26682,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta26684){
this.pc_count = pc_count;
this.map__26682 = map__26682;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta26684 = meta26684;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26683.cljs$lang$type = true;
clustermap.components.map_report.t26683.cljs$lang$ctorStr = "clustermap.components.map-report/t26683";
clustermap.components.map_report.t26683.cljs$lang$ctorPrWriter = ((function (map__26682,map__26682__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26683");
});})(map__26682,map__26682__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26683.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26683.prototype.om$core$IRender$render$arity$1 = ((function (map__26682,map__26682__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs26688 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26688))?sablono.interpreter.attributes.call(null,attrs26688):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26688))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26688)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26689 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26689))?sablono.interpreter.attributes.call(null,attrs26689):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26689))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26690 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26690))?sablono.interpreter.attributes.call(null,attrs26690):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26690))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26690)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26689),(function (){var attrs26691 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26691))?sablono.interpreter.attributes.call(null,attrs26691):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26691))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26691)], null))));
})()], null))));
})(),(function (){var attrs26692 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26692))?sablono.interpreter.attributes.call(null,attrs26692):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26692))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26693 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26693))?sablono.interpreter.attributes.call(null,attrs26693):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26693))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26693)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26692),(function (){var attrs26694 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26694))?sablono.interpreter.attributes.call(null,attrs26694):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26694))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26694)], null))));
})()], null))));
})(),(function (){var attrs26695 = clustermap.formats.money.fmoney.call(null,(function (){var G__26705 = self__.site_stats;var G__26705__$1 = (((G__26705 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26705));var G__26705__$2 = (((G__26705__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26705__$1));return G__26705__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26695))?sablono.interpreter.attributes.call(null,attrs26695):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26695))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26695),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26700 = clustermap.formats.number.fnum.call(null,(function (){var G__26706 = self__.site_stats;var G__26706__$1 = (((G__26706 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26706));var G__26706__$2 = (((G__26706__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26706__$1));return G__26706__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26700))?sablono.interpreter.attributes.call(null,attrs26700):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26700))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26700),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26682,map__26682__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26682,map__26682__$1,const_count,ic_count,pc_count){
return (function (_26685){var self__ = this;
var _26685__$1 = this;return self__.meta26684;
});})(map__26682,map__26682__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26682,map__26682__$1,const_count,ic_count,pc_count){
return (function (_26685,meta26684__$1){var self__ = this;
var _26685__$1 = this;return (new clustermap.components.map_report.t26683(self__.pc_count,self__.map__26682,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta26684__$1));
});})(map__26682,map__26682__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26683 = ((function (map__26682,map__26682__$1,const_count,ic_count,pc_count){
return (function __GT_t26683(pc_count__$1,map__26682__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta26684){return (new clustermap.components.map_report.t26683(pc_count__$1,map__26682__$2,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta26684));
});})(map__26682,map__26682__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26683(pc_count,map__26682__$1,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__26732 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26732__$1 = ((cljs.core.seq_QMARK_.call(null,map__26732))?cljs.core.apply.call(null,cljs.core.hash_map,map__26732):map__26732);var const_count = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26732__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26733 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26733 = (function (pc_count,map__26732,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta26734){
this.pc_count = pc_count;
this.map__26732 = map__26732;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta26734 = meta26734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26733.cljs$lang$type = true;
clustermap.components.map_report.t26733.cljs$lang$ctorStr = "clustermap.components.map-report/t26733";
clustermap.components.map_report.t26733.cljs$lang$ctorPrWriter = ((function (map__26732,map__26732__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26733");
});})(map__26732,map__26732__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26733.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26733.prototype.om$core$IRender$render$arity$1 = ((function (map__26732,map__26732__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs26738 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26738))?sablono.interpreter.attributes.call(null,attrs26738):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26738))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26738)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26739 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26739))?sablono.interpreter.attributes.call(null,attrs26739):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26739))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26740 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26740))?sablono.interpreter.attributes.call(null,attrs26740):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26740))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26740)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26739),(function (){var attrs26741 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26741))?sablono.interpreter.attributes.call(null,attrs26741):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26741))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26741)], null))));
})()], null))));
})(),(function (){var attrs26742 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26742))?sablono.interpreter.attributes.call(null,attrs26742):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26742))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26743 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26743))?sablono.interpreter.attributes.call(null,attrs26743):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26743))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26743)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26742),(function (){var attrs26744 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26744))?sablono.interpreter.attributes.call(null,attrs26744):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26744))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26744)], null))));
})()], null))));
})(),(function (){var attrs26745 = clustermap.formats.money.fmoney.call(null,(function (){var G__26755 = self__.site_stats;var G__26755__$1 = (((G__26755 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26755));var G__26755__$2 = (((G__26755__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26755__$1));return G__26755__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26745))?sablono.interpreter.attributes.call(null,attrs26745):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26745))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26745),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26750 = clustermap.formats.number.fnum.call(null,(function (){var G__26756 = self__.site_stats;var G__26756__$1 = (((G__26756 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26756));var G__26756__$2 = (((G__26756__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26756__$1));return G__26756__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26750))?sablono.interpreter.attributes.call(null,attrs26750):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26750))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26750),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26732,map__26732__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26733.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26732,map__26732__$1,const_count,ic_count,pc_count){
return (function (_26735){var self__ = this;
var _26735__$1 = this;return self__.meta26734;
});})(map__26732,map__26732__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26732,map__26732__$1,const_count,ic_count,pc_count){
return (function (_26735,meta26734__$1){var self__ = this;
var _26735__$1 = this;return (new clustermap.components.map_report.t26733(self__.pc_count,self__.map__26732,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta26734__$1));
});})(map__26732,map__26732__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26733 = ((function (map__26732,map__26732__$1,const_count,ic_count,pc_count){
return (function __GT_t26733(pc_count__$1,map__26732__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta26734){return (new clustermap.components.map_report.t26733(pc_count__$1,map__26732__$2,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta26734));
});})(map__26732,map__26732__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26733(pc_count,map__26732__$1,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__26786 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26786__$1 = ((cljs.core.seq_QMARK_.call(null,map__26786))?cljs.core.apply.call(null,cljs.core.hash_map,map__26786):map__26786);var const_count = cljs.core.get.call(null,map__26786__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26786__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26786__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26787 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26787 = (function (pc_count,path_fn,const_count,map__26786,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta26788){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.map__26786 = map__26786;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta26788 = meta26788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26787.cljs$lang$type = true;
clustermap.components.map_report.t26787.cljs$lang$ctorStr = "clustermap.components.map-report/t26787";
clustermap.components.map_report.t26787.cljs$lang$ctorPrWriter = ((function (map__26786,map__26786__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t26787");
});})(map__26786,map__26786__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26787.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26787.prototype.om$core$IRender$render$arity$1 = ((function (map__26786,map__26786__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs26792 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26792))?sablono.interpreter.attributes.call(null,attrs26792):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26792))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26792),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26797 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26797))?sablono.interpreter.attributes.call(null,attrs26797):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26797))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26798 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26798))?sablono.interpreter.attributes.call(null,attrs26798):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26798))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26798)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26797),(function (){var attrs26799 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26799))?sablono.interpreter.attributes.call(null,attrs26799):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26799))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26799)], null))));
})()], null))));
})(),(function (){var attrs26800 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26800))?sablono.interpreter.attributes.call(null,attrs26800):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26800))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26801 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26801))?sablono.interpreter.attributes.call(null,attrs26801):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26801))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26801)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26800),(function (){var attrs26802 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26802))?sablono.interpreter.attributes.call(null,attrs26802):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26802))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26802)], null))));
})()], null))));
})(),(function (){var attrs26803 = clustermap.formats.money.fmoney.call(null,(function (){var G__26813 = self__.site_stats;var G__26813__$1 = (((G__26813 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26813));var G__26813__$2 = (((G__26813__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26813__$1));return G__26813__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26803))?sablono.interpreter.attributes.call(null,attrs26803):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26803))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26803),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26808 = clustermap.formats.number.fnum.call(null,(function (){var G__26814 = self__.site_stats;var G__26814__$1 = (((G__26814 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26814));var G__26814__$2 = (((G__26814__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26814__$1));return G__26814__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26808))?sablono.interpreter.attributes.call(null,attrs26808):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26808))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26808),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26786,map__26786__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26786,map__26786__$1,const_count,ic_count,pc_count){
return (function (_26789){var self__ = this;
var _26789__$1 = this;return self__.meta26788;
});})(map__26786,map__26786__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26786,map__26786__$1,const_count,ic_count,pc_count){
return (function (_26789,meta26788__$1){var self__ = this;
var _26789__$1 = this;return (new clustermap.components.map_report.t26787(self__.pc_count,self__.path_fn,self__.const_count,self__.map__26786,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta26788__$1));
});})(map__26786,map__26786__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26787 = ((function (map__26786,map__26786__$1,const_count,ic_count,pc_count){
return (function __GT_t26787(pc_count__$1,path_fn__$1,const_count__$1,map__26786__$2,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta26788){return (new clustermap.components.map_report.t26787(pc_count__$1,path_fn__$1,const_count__$1,map__26786__$2,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta26788));
});})(map__26786,map__26786__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26787(pc_count,path_fn,const_count,map__26786__$1,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__26819 = om.core.get_shared.call(null,owner);var map__26819__$1 = ((cljs.core.seq_QMARK_.call(null,map__26819))?cljs.core.apply.call(null,cljs.core.hash_map,map__26819):map__26819);var view_path_fn = cljs.core.get.call(null,map__26819__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__26819__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__26819__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__26820 = cljs.core._EQ__EQ_;var expr__26821 = type;if(cljs.core.truth_(pred__26820.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__26821)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26820.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__26821)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26820.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__26821)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
