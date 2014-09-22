// Compiled by ClojureScript 0.0-2322
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13757 = site_stats;var G__13757__$1 = (((G__13757 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13757));return G__13757__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13758 = site_stats;var G__13758__$1 = (((G__13758 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13758));return G__13758__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13759 = site_stats;var G__13759__$1 = (((G__13759 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13759));return G__13759__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13791 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13791__$1 = ((cljs.core.seq_QMARK_.call(null,map__13791))?cljs.core.apply.call(null,cljs.core.hash_map,map__13791):map__13791);var const_count = cljs.core.get.call(null,map__13791__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13791__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13791__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13792 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13792 = (function (pc_count,ic_count,const_count,map__13791,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13793){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13791 = map__13791;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13793 = meta13793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13792.cljs$lang$type = true;
clustermap.components.map_report.t13792.cljs$lang$ctorStr = "clustermap.components.map-report/t13792";
clustermap.components.map_report.t13792.cljs$lang$ctorPrWriter = ((function (map__13791,map__13791__$1,const_count,ic_count,pc_count){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t13792");
});})(map__13791,map__13791__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13792.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13792.prototype.om$core$IRender$render$arity$1 = ((function (map__13791,map__13791__$1,const_count,ic_count,pc_count){
return (function (this__9532__auto__){var self__ = this;
var this__9532__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13797 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13797))?sablono.interpreter.attributes.call(null,attrs13797):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13797))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13797),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13802 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13802))?sablono.interpreter.attributes.call(null,attrs13802):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13802))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13802),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13807 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13807))?sablono.interpreter.attributes.call(null,attrs13807):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13807))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13808 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13808))?sablono.interpreter.attributes.call(null,attrs13808):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13808))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13808)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13807),(function (){var attrs13809 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13809))?sablono.interpreter.attributes.call(null,attrs13809):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13809))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13809)], null))));
})()], null))));
})(),(function (){var attrs13810 = clustermap.formats.money.fmoney.call(null,(function (){var G__13820 = self__.site_stats;var G__13820__$1 = (((G__13820 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13820));var G__13820__$2 = (((G__13820__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13820__$1));return G__13820__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13810))?sablono.interpreter.attributes.call(null,attrs13810):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13810))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13810),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13815 = clustermap.formats.number.fnum.call(null,(function (){var G__13821 = self__.site_stats;var G__13821__$1 = (((G__13821 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13821));var G__13821__$2 = (((G__13821__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13821__$1));return G__13821__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13815))?sablono.interpreter.attributes.call(null,attrs13815):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13815))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13815),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13791,map__13791__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13791,map__13791__$1,const_count,ic_count,pc_count){
return (function (_13794){var self__ = this;
var _13794__$1 = this;return self__.meta13793;
});})(map__13791,map__13791__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13791,map__13791__$1,const_count,ic_count,pc_count){
return (function (_13794,meta13793__$1){var self__ = this;
var _13794__$1 = this;return (new clustermap.components.map_report.t13792(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13791,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13793__$1));
});})(map__13791,map__13791__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13792 = ((function (map__13791,map__13791__$1,const_count,ic_count,pc_count){
return (function __GT_t13792(pc_count__$1,ic_count__$1,const_count__$1,map__13791__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13793){return (new clustermap.components.map_report.t13792(pc_count__$1,ic_count__$1,const_count__$1,map__13791__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13793));
});})(map__13791,map__13791__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13792(pc_count,ic_count,const_count,map__13791__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13847 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13847__$1 = ((cljs.core.seq_QMARK_.call(null,map__13847))?cljs.core.apply.call(null,cljs.core.hash_map,map__13847):map__13847);var const_count = cljs.core.get.call(null,map__13847__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13847__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13847__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13848 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13848 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__13847,view_path_fn,portfolio_company_report,site_stats,meta13849){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__13847 = map__13847;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13849 = meta13849;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13848.cljs$lang$type = true;
clustermap.components.map_report.t13848.cljs$lang$ctorStr = "clustermap.components.map-report/t13848";
clustermap.components.map_report.t13848.cljs$lang$ctorPrWriter = ((function (map__13847,map__13847__$1,const_count,ic_count,pc_count){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t13848");
});})(map__13847,map__13847__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13848.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13848.prototype.om$core$IRender$render$arity$1 = ((function (map__13847,map__13847__$1,const_count,ic_count,pc_count){
return (function (this__9532__auto__){var self__ = this;
var this__9532__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13853 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13853))?sablono.interpreter.attributes.call(null,attrs13853):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13853))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13853)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13854 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13854))?sablono.interpreter.attributes.call(null,attrs13854):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13854))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13855 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13855))?sablono.interpreter.attributes.call(null,attrs13855):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13855))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13855)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13854),(function (){var attrs13856 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13856))?sablono.interpreter.attributes.call(null,attrs13856):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13856))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13856)], null))));
})()], null))));
})(),(function (){var attrs13857 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13857))?sablono.interpreter.attributes.call(null,attrs13857):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13857))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13858 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13858))?sablono.interpreter.attributes.call(null,attrs13858):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13858))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13858)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13857),(function (){var attrs13859 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13859))?sablono.interpreter.attributes.call(null,attrs13859):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13859))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13859)], null))));
})()], null))));
})(),(function (){var attrs13860 = clustermap.formats.money.fmoney.call(null,(function (){var G__13870 = self__.site_stats;var G__13870__$1 = (((G__13870 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13870));var G__13870__$2 = (((G__13870__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13870__$1));return G__13870__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13860))?sablono.interpreter.attributes.call(null,attrs13860):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13860))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13860),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13865 = clustermap.formats.number.fnum.call(null,(function (){var G__13871 = self__.site_stats;var G__13871__$1 = (((G__13871 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13871));var G__13871__$2 = (((G__13871__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13871__$1));return G__13871__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13865))?sablono.interpreter.attributes.call(null,attrs13865):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13865))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13865),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13847,map__13847__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13848.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13847,map__13847__$1,const_count,ic_count,pc_count){
return (function (_13850){var self__ = this;
var _13850__$1 = this;return self__.meta13849;
});})(map__13847,map__13847__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13847,map__13847__$1,const_count,ic_count,pc_count){
return (function (_13850,meta13849__$1){var self__ = this;
var _13850__$1 = this;return (new clustermap.components.map_report.t13848(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.map__13847,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta13849__$1));
});})(map__13847,map__13847__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13848 = ((function (map__13847,map__13847__$1,const_count,ic_count,pc_count){
return (function __GT_t13848(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__13847__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13849){return (new clustermap.components.map_report.t13848(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__13847__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13849));
});})(map__13847,map__13847__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13848(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__13847__$1,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13897 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13897__$1 = ((cljs.core.seq_QMARK_.call(null,map__13897))?cljs.core.apply.call(null,cljs.core.hash_map,map__13897):map__13897);var const_count = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13897__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13898 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13898 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13897,site_stats,meta13899){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__13897 = map__13897;
this.site_stats = site_stats;
this.meta13899 = meta13899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13898.cljs$lang$type = true;
clustermap.components.map_report.t13898.cljs$lang$ctorStr = "clustermap.components.map-report/t13898";
clustermap.components.map_report.t13898.cljs$lang$ctorPrWriter = ((function (map__13897,map__13897__$1,const_count,ic_count,pc_count){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t13898");
});})(map__13897,map__13897__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13898.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13898.prototype.om$core$IRender$render$arity$1 = ((function (map__13897,map__13897__$1,const_count,ic_count,pc_count){
return (function (this__9532__auto__){var self__ = this;
var this__9532__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13903 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13903))?sablono.interpreter.attributes.call(null,attrs13903):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13903))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13903)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13904 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13904))?sablono.interpreter.attributes.call(null,attrs13904):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13904))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13905 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13905))?sablono.interpreter.attributes.call(null,attrs13905):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13905))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13905)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13904),(function (){var attrs13906 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13906))?sablono.interpreter.attributes.call(null,attrs13906):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13906))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13906)], null))));
})()], null))));
})(),(function (){var attrs13907 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13907))?sablono.interpreter.attributes.call(null,attrs13907):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13907))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13908 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13908))?sablono.interpreter.attributes.call(null,attrs13908):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13908))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13908)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13907),(function (){var attrs13909 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13909))?sablono.interpreter.attributes.call(null,attrs13909):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13909))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13909)], null))));
})()], null))));
})(),(function (){var attrs13910 = clustermap.formats.money.fmoney.call(null,(function (){var G__13920 = self__.site_stats;var G__13920__$1 = (((G__13920 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13920));var G__13920__$2 = (((G__13920__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13920__$1));return G__13920__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13910))?sablono.interpreter.attributes.call(null,attrs13910):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13910))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13910),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13915 = clustermap.formats.number.fnum.call(null,(function (){var G__13921 = self__.site_stats;var G__13921__$1 = (((G__13921 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13921));var G__13921__$2 = (((G__13921__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13921__$1));return G__13921__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13915))?sablono.interpreter.attributes.call(null,attrs13915):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13915))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13915),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13897,map__13897__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13897,map__13897__$1,const_count,ic_count,pc_count){
return (function (_13900){var self__ = this;
var _13900__$1 = this;return self__.meta13899;
});})(map__13897,map__13897__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13897,map__13897__$1,const_count,ic_count,pc_count){
return (function (_13900,meta13899__$1){var self__ = this;
var _13900__$1 = this;return (new clustermap.components.map_report.t13898(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__13897,self__.site_stats,meta13899__$1));
});})(map__13897,map__13897__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13898 = ((function (map__13897,map__13897__$1,const_count,ic_count,pc_count){
return (function __GT_t13898(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13897__$2,site_stats__$1,meta13899){return (new clustermap.components.map_report.t13898(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13897__$2,site_stats__$1,meta13899));
});})(map__13897,map__13897__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13898(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13897__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13951 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13951__$1 = ((cljs.core.seq_QMARK_.call(null,map__13951))?cljs.core.apply.call(null,cljs.core.hash_map,map__13951):map__13951);var const_count = cljs.core.get.call(null,map__13951__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13951__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13951__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13952 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13952 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13951,site_stats,meta13953){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__13951 = map__13951;
this.site_stats = site_stats;
this.meta13953 = meta13953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13952.cljs$lang$type = true;
clustermap.components.map_report.t13952.cljs$lang$ctorStr = "clustermap.components.map-report/t13952";
clustermap.components.map_report.t13952.cljs$lang$ctorPrWriter = ((function (map__13951,map__13951__$1,const_count,ic_count,pc_count){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t13952");
});})(map__13951,map__13951__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13952.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13952.prototype.om$core$IRender$render$arity$1 = ((function (map__13951,map__13951__$1,const_count,ic_count,pc_count){
return (function (this__9532__auto__){var self__ = this;
var this__9532__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13957 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13957))?sablono.interpreter.attributes.call(null,attrs13957):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13957))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3558__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13957),React.DOM.br(null),(cljs.core.truth_((function (){var or__3558__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13962 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13962))?sablono.interpreter.attributes.call(null,attrs13962):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13962))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13963 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13963))?sablono.interpreter.attributes.call(null,attrs13963):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13963))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13963)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13962),(function (){var attrs13964 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13964))?sablono.interpreter.attributes.call(null,attrs13964):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13964))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13964)], null))));
})()], null))));
})(),(function (){var attrs13965 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13965))?sablono.interpreter.attributes.call(null,attrs13965):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13965))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13966 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13966))?sablono.interpreter.attributes.call(null,attrs13966):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13966))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13966)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13965),(function (){var attrs13967 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13967))?sablono.interpreter.attributes.call(null,attrs13967):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13967))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13967)], null))));
})()], null))));
})(),(function (){var attrs13968 = clustermap.formats.money.fmoney.call(null,(function (){var G__13978 = self__.site_stats;var G__13978__$1 = (((G__13978 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13978));var G__13978__$2 = (((G__13978__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13978__$1));return G__13978__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13968))?sablono.interpreter.attributes.call(null,attrs13968):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13968))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13968),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13973 = clustermap.formats.number.fnum.call(null,(function (){var G__13979 = self__.site_stats;var G__13979__$1 = (((G__13979 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13979));var G__13979__$2 = (((G__13979__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13979__$1));return G__13979__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13973))?sablono.interpreter.attributes.call(null,attrs13973):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13973))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13973),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13951,map__13951__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13951,map__13951__$1,const_count,ic_count,pc_count){
return (function (_13954){var self__ = this;
var _13954__$1 = this;return self__.meta13953;
});})(map__13951,map__13951__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13951,map__13951__$1,const_count,ic_count,pc_count){
return (function (_13954,meta13953__$1){var self__ = this;
var _13954__$1 = this;return (new clustermap.components.map_report.t13952(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__13951,self__.site_stats,meta13953__$1));
});})(map__13951,map__13951__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13952 = ((function (map__13951,map__13951__$1,const_count,ic_count,pc_count){
return (function __GT_t13952(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13951__$2,site_stats__$1,meta13953){return (new clustermap.components.map_report.t13952(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13951__$2,site_stats__$1,meta13953));
});})(map__13951,map__13951__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13952(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13951__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13984 = om.core.get_shared.call(null,owner);var map__13984__$1 = ((cljs.core.seq_QMARK_.call(null,map__13984))?cljs.core.apply.call(null,cljs.core.hash_map,map__13984):map__13984);var view_path_fn = cljs.core.get.call(null,map__13984__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13984__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13984__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13985 = cljs.core._EQ__EQ_;var expr__13986 = type;if(cljs.core.truth_(pred__13985.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13986)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13985.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13986)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13985.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13986)))
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