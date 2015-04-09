// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.name');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.name');
goog.require('domina.events');
goog.require('clustermap.formats.name');
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13397 = site_stats;var G__13397__$1 = (((G__13397 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13397));return G__13397__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13398 = site_stats;var G__13398__$1 = (((G__13398 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13398));return G__13398__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13399 = site_stats;var G__13399__$1 = (((G__13399 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13399));return G__13399__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13431 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13431__$1 = ((cljs.core.seq_QMARK_.call(null,map__13431))?cljs.core.apply.call(null,cljs.core.hash_map,map__13431):map__13431);var const_count = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13431__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13432 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13432 = (function (pc_count,ic_count,const_count,map__13431,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13433){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13431 = map__13431;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13433 = meta13433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13432.cljs$lang$type = true;
clustermap.components.map_report.t13432.cljs$lang$ctorStr = "clustermap.components.map-report/t13432";
clustermap.components.map_report.t13432.cljs$lang$ctorPrWriter = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.map-report/t13432");
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13432.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13432.prototype.om$core$IRender$render$arity$1 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13437 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13437))?sablono.interpreter.attributes.call(null,attrs13437):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13437))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13437),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13442 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13442))?sablono.interpreter.attributes.call(null,attrs13442):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13442))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13442),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13447 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13447))?sablono.interpreter.attributes.call(null,attrs13447):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13447))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13448 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13448))?sablono.interpreter.attributes.call(null,attrs13448):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13448))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13448)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13447),(function (){var attrs13449 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13449))?sablono.interpreter.attributes.call(null,attrs13449):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13449))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13449)], null))));
})()], null))));
})(),(function (){var attrs13450 = clustermap.formats.money.fmoney.call(null,(function (){var G__13460 = self__.site_stats;var G__13460__$1 = (((G__13460 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13460));var G__13460__$2 = (((G__13460__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13460__$1));return G__13460__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13450))?sablono.interpreter.attributes.call(null,attrs13450):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13450))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13450),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13455 = clustermap.formats.number.fnum.call(null,(function (){var G__13461 = self__.site_stats;var G__13461__$1 = (((G__13461 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13461));var G__13461__$2 = (((G__13461__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13461__$1));return G__13461__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13455))?sablono.interpreter.attributes.call(null,attrs13455):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13455))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13455),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (_13434){var self__ = this;
var _13434__$1 = this;return self__.meta13433;
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function (_13434,meta13433__$1){var self__ = this;
var _13434__$1 = this;return (new clustermap.components.map_report.t13432(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13431,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13433__$1));
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13432 = ((function (map__13431,map__13431__$1,const_count,ic_count,pc_count){
return (function __GT_t13432(pc_count__$1,ic_count__$1,const_count__$1,map__13431__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13433){return (new clustermap.components.map_report.t13432(pc_count__$1,ic_count__$1,const_count__$1,map__13431__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13433));
});})(map__13431,map__13431__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13432(pc_count,ic_count,const_count,map__13431__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13487 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13487__$1 = ((cljs.core.seq_QMARK_.call(null,map__13487))?cljs.core.apply.call(null,cljs.core.hash_map,map__13487):map__13487);var const_count = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13488 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13488 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__13487,comm,view_path_fn,portfolio_company_report,site_stats,meta13489){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__13487 = map__13487;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13489 = meta13489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13488.cljs$lang$type = true;
clustermap.components.map_report.t13488.cljs$lang$ctorStr = "clustermap.components.map-report/t13488";
clustermap.components.map_report.t13488.cljs$lang$ctorPrWriter = ((function (map__13487,map__13487__$1,const_count,ic_count,pc_count){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.map-report/t13488");
});})(map__13487,map__13487__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13488.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13488.prototype.om$core$IRender$render$arity$1 = ((function (map__13487,map__13487__$1,const_count,ic_count,pc_count){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13493 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13493))?sablono.interpreter.attributes.call(null,attrs13493):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13493))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13493)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13494 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13494))?sablono.interpreter.attributes.call(null,attrs13494):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13494))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13495 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13495))?sablono.interpreter.attributes.call(null,attrs13495):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13495))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13495)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13494),(function (){var attrs13496 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13496))?sablono.interpreter.attributes.call(null,attrs13496):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13496))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13496)], null))));
})()], null))));
})(),(function (){var attrs13497 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13497))?sablono.interpreter.attributes.call(null,attrs13497):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13497))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13498 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13498))?sablono.interpreter.attributes.call(null,attrs13498):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13498))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13498)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13497),(function (){var attrs13499 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13499))?sablono.interpreter.attributes.call(null,attrs13499):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13499))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13499)], null))));
})()], null))));
})(),(function (){var attrs13500 = clustermap.formats.money.fmoney.call(null,(function (){var G__13510 = self__.site_stats;var G__13510__$1 = (((G__13510 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13510));var G__13510__$2 = (((G__13510__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13510__$1));return G__13510__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13500))?sablono.interpreter.attributes.call(null,attrs13500):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13500))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13500),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13505 = clustermap.formats.number.fnum.call(null,(function (){var G__13511 = self__.site_stats;var G__13511__$1 = (((G__13511 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13511));var G__13511__$2 = (((G__13511__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13511__$1));return G__13511__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13505))?sablono.interpreter.attributes.call(null,attrs13505):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13505))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13505),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13487,map__13487__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13487,map__13487__$1,const_count,ic_count,pc_count){
return (function (_13490){var self__ = this;
var _13490__$1 = this;return self__.meta13489;
});})(map__13487,map__13487__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13487,map__13487__$1,const_count,ic_count,pc_count){
return (function (_13490,meta13489__$1){var self__ = this;
var _13490__$1 = this;return (new clustermap.components.map_report.t13488(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__13487,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta13489__$1));
});})(map__13487,map__13487__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13488 = ((function (map__13487,map__13487__$1,const_count,ic_count,pc_count){
return (function __GT_t13488(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__13487__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13489){return (new clustermap.components.map_report.t13488(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__13487__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13489));
});})(map__13487,map__13487__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13488(pc_count,path_fn,const_count,portfolio_company,ic_count,map__13487__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13537 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13537__$1 = ((cljs.core.seq_QMARK_.call(null,map__13537))?cljs.core.apply.call(null,cljs.core.hash_map,map__13537):map__13537);var const_count = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13537__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13538 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13538 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13537,site_stats,meta13539){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__13537 = map__13537;
this.site_stats = site_stats;
this.meta13539 = meta13539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13538.cljs$lang$type = true;
clustermap.components.map_report.t13538.cljs$lang$ctorStr = "clustermap.components.map-report/t13538";
clustermap.components.map_report.t13538.cljs$lang$ctorPrWriter = ((function (map__13537,map__13537__$1,const_count,ic_count,pc_count){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.map-report/t13538");
});})(map__13537,map__13537__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13538.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13538.prototype.om$core$IRender$render$arity$1 = ((function (map__13537,map__13537__$1,const_count,ic_count,pc_count){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13543 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13543))?sablono.interpreter.attributes.call(null,attrs13543):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13543)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13544 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13544))?sablono.interpreter.attributes.call(null,attrs13544):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13544))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13545 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13545))?sablono.interpreter.attributes.call(null,attrs13545):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13545))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13545)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13544),(function (){var attrs13546 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13546))?sablono.interpreter.attributes.call(null,attrs13546):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13546))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13546)], null))));
})()], null))));
})(),(function (){var attrs13547 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13547))?sablono.interpreter.attributes.call(null,attrs13547):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13547))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13548 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13548))?sablono.interpreter.attributes.call(null,attrs13548):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13548))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13548)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13547),(function (){var attrs13549 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13549))?sablono.interpreter.attributes.call(null,attrs13549):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13549))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13549)], null))));
})()], null))));
})(),(function (){var attrs13550 = clustermap.formats.money.fmoney.call(null,(function (){var G__13560 = self__.site_stats;var G__13560__$1 = (((G__13560 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13560));var G__13560__$2 = (((G__13560__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13560__$1));return G__13560__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13550))?sablono.interpreter.attributes.call(null,attrs13550):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13550))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13550),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13555 = clustermap.formats.number.fnum.call(null,(function (){var G__13561 = self__.site_stats;var G__13561__$1 = (((G__13561 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13561));var G__13561__$2 = (((G__13561__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13561__$1));return G__13561__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13555))?sablono.interpreter.attributes.call(null,attrs13555):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13555))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13555),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13537,map__13537__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13537,map__13537__$1,const_count,ic_count,pc_count){
return (function (_13540){var self__ = this;
var _13540__$1 = this;return self__.meta13539;
});})(map__13537,map__13537__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13537,map__13537__$1,const_count,ic_count,pc_count){
return (function (_13540,meta13539__$1){var self__ = this;
var _13540__$1 = this;return (new clustermap.components.map_report.t13538(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__13537,self__.site_stats,meta13539__$1));
});})(map__13537,map__13537__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13538 = ((function (map__13537,map__13537__$1,const_count,ic_count,pc_count){
return (function __GT_t13538(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13537__$2,site_stats__$1,meta13539){return (new clustermap.components.map_report.t13538(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__13537__$2,site_stats__$1,meta13539));
});})(map__13537,map__13537__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13538(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__13537__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13591 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13591__$1 = ((cljs.core.seq_QMARK_.call(null,map__13591))?cljs.core.apply.call(null,cljs.core.hash_map,map__13591):map__13591);var const_count = cljs.core.get.call(null,map__13591__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13591__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13591__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13592 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13592 = (function (pc_count,map__13591,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta13593){
this.pc_count = pc_count;
this.map__13591 = map__13591;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13593 = meta13593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13592.cljs$lang$type = true;
clustermap.components.map_report.t13592.cljs$lang$ctorStr = "clustermap.components.map-report/t13592";
clustermap.components.map_report.t13592.cljs$lang$ctorPrWriter = ((function (map__13591,map__13591__$1,const_count,ic_count,pc_count){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.map-report/t13592");
});})(map__13591,map__13591__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13592.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13592.prototype.om$core$IRender$render$arity$1 = ((function (map__13591,map__13591__$1,const_count,ic_count,pc_count){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13597 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13597))?sablono.interpreter.attributes.call(null,attrs13597):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13597))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3631__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,clustermap.formats.name.reverse_name.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency))),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13597),React.DOM.br(null),(cljs.core.truth_((function (){var or__3631__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,clustermap.formats.name.reverse_name.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency))),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13602 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13602))?sablono.interpreter.attributes.call(null,attrs13602):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13602))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13603 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13603))?sablono.interpreter.attributes.call(null,attrs13603):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13603))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13603)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13602),(function (){var attrs13604 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13604))?sablono.interpreter.attributes.call(null,attrs13604):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13604))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13604)], null))));
})()], null))));
})(),(function (){var attrs13605 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13605))?sablono.interpreter.attributes.call(null,attrs13605):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13605))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13606 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13606))?sablono.interpreter.attributes.call(null,attrs13606):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13606))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13606)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13605),(function (){var attrs13607 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13607))?sablono.interpreter.attributes.call(null,attrs13607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13607)], null))));
})()], null))));
})(),(function (){var attrs13608 = clustermap.formats.money.fmoney.call(null,(function (){var G__13618 = self__.site_stats;var G__13618__$1 = (((G__13618 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13618));var G__13618__$2 = (((G__13618__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13618__$1));return G__13618__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13608))?sablono.interpreter.attributes.call(null,attrs13608):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13608))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13608),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13613 = clustermap.formats.number.fnum.call(null,(function (){var G__13619 = self__.site_stats;var G__13619__$1 = (((G__13619 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13619));var G__13619__$2 = (((G__13619__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13619__$1));return G__13619__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13613))?sablono.interpreter.attributes.call(null,attrs13613):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13613))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13613),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13591,map__13591__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13592.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13591,map__13591__$1,const_count,ic_count,pc_count){
return (function (_13594){var self__ = this;
var _13594__$1 = this;return self__.meta13593;
});})(map__13591,map__13591__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13591,map__13591__$1,const_count,ic_count,pc_count){
return (function (_13594,meta13593__$1){var self__ = this;
var _13594__$1 = this;return (new clustermap.components.map_report.t13592(self__.pc_count,self__.map__13591,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta13593__$1));
});})(map__13591,map__13591__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13592 = ((function (map__13591,map__13591__$1,const_count,ic_count,pc_count){
return (function __GT_t13592(pc_count__$1,map__13591__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta13593){return (new clustermap.components.map_report.t13592(pc_count__$1,map__13591__$2,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta13593));
});})(map__13591,map__13591__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13592(pc_count,map__13591__$1,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13624 = om.core.get_shared.call(null,owner);var map__13624__$1 = ((cljs.core.seq_QMARK_.call(null,map__13624))?cljs.core.apply.call(null,cljs.core.hash_map,map__13624):map__13624);var view_path_fn = cljs.core.get.call(null,map__13624__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13624__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13624__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13625 = cljs.core._EQ__EQ_;var expr__13626 = type;if(cljs.core.truth_(pred__13625.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13626)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13625.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13626)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13625.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13626)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
