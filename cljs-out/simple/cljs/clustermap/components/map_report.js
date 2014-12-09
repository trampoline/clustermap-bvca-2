// Compiled by ClojureScript 0.0-2356
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13402 = site_stats;var G__13402__$1 = (((G__13402 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13402));return G__13402__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13403 = site_stats;var G__13403__$1 = (((G__13403 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13403));return G__13403__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13404 = site_stats;var G__13404__$1 = (((G__13404 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13404));return G__13404__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__13436 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13436__$1 = ((cljs.core.seq_QMARK_.call(null,map__13436))?cljs.core.apply.call(null,cljs.core.hash_map,map__13436):map__13436);var const_count = cljs.core.get.call(null,map__13436__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13436__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13436__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13437 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13437 = (function (pc_count,ic_count,const_count,map__13436,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta13438){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__13436 = map__13436;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta13438 = meta13438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13437.cljs$lang$type = true;
clustermap.components.map_report.t13437.cljs$lang$ctorStr = "clustermap.components.map-report/t13437";
clustermap.components.map_report.t13437.cljs$lang$ctorPrWriter = ((function (map__13436,map__13436__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13437");
});})(map__13436,map__13436__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13437.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13437.prototype.om$core$IRender$render$arity$1 = ((function (map__13436,map__13436__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs13442 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13442))?sablono.interpreter.attributes.call(null,attrs13442):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13442))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13442),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs13447 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13447))?sablono.interpreter.attributes.call(null,attrs13447):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13447))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13447),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs13452 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13452))?sablono.interpreter.attributes.call(null,attrs13452):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13452))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13453 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13453))?sablono.interpreter.attributes.call(null,attrs13453):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13453))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13453)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13452),(function (){var attrs13454 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13454))?sablono.interpreter.attributes.call(null,attrs13454):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13454))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13454)], null))));
})()], null))));
})(),(function (){var attrs13455 = clustermap.formats.money.fmoney.call(null,(function (){var G__13465 = self__.site_stats;var G__13465__$1 = (((G__13465 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13465));var G__13465__$2 = (((G__13465__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13465__$1));return G__13465__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13455))?sablono.interpreter.attributes.call(null,attrs13455):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13455))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13455),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13460 = clustermap.formats.number.fnum.call(null,(function (){var G__13466 = self__.site_stats;var G__13466__$1 = (((G__13466 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13466));var G__13466__$2 = (((G__13466__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13466__$1));return G__13466__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13460))?sablono.interpreter.attributes.call(null,attrs13460):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13460))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13460),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13436,map__13436__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13436,map__13436__$1,const_count,ic_count,pc_count){
return (function (_13439){var self__ = this;
var _13439__$1 = this;return self__.meta13438;
});})(map__13436,map__13436__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13436,map__13436__$1,const_count,ic_count,pc_count){
return (function (_13439,meta13438__$1){var self__ = this;
var _13439__$1 = this;return (new clustermap.components.map_report.t13437(self__.pc_count,self__.ic_count,self__.const_count,self__.map__13436,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta13438__$1));
});})(map__13436,map__13436__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13437 = ((function (map__13436,map__13436__$1,const_count,ic_count,pc_count){
return (function __GT_t13437(pc_count__$1,ic_count__$1,const_count__$1,map__13436__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13438){return (new clustermap.components.map_report.t13437(pc_count__$1,ic_count__$1,const_count__$1,map__13436__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta13438));
});})(map__13436,map__13436__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13437(pc_count,ic_count,const_count,map__13436__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__13492 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13492__$1 = ((cljs.core.seq_QMARK_.call(null,map__13492))?cljs.core.apply.call(null,cljs.core.hash_map,map__13492):map__13492);var const_count = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13492__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13493 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13493 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__13492,comm,view_path_fn,portfolio_company_report,site_stats,meta13494){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__13492 = map__13492;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta13494 = meta13494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13493.cljs$lang$type = true;
clustermap.components.map_report.t13493.cljs$lang$ctorStr = "clustermap.components.map-report/t13493";
clustermap.components.map_report.t13493.cljs$lang$ctorPrWriter = ((function (map__13492,map__13492__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13493");
});})(map__13492,map__13492__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13493.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13493.prototype.om$core$IRender$render$arity$1 = ((function (map__13492,map__13492__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs13498 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13498))?sablono.interpreter.attributes.call(null,attrs13498):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13498))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13498)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13499 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13499))?sablono.interpreter.attributes.call(null,attrs13499):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13499))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13500 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13500))?sablono.interpreter.attributes.call(null,attrs13500):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13500))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13500)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13499),(function (){var attrs13501 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13501))?sablono.interpreter.attributes.call(null,attrs13501):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13501))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13501)], null))));
})()], null))));
})(),(function (){var attrs13502 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13502))?sablono.interpreter.attributes.call(null,attrs13502):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13502))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13503 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13503))?sablono.interpreter.attributes.call(null,attrs13503):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13503))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13503)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13502),(function (){var attrs13504 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13504))?sablono.interpreter.attributes.call(null,attrs13504):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13504))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13504)], null))));
})()], null))));
})(),(function (){var attrs13505 = clustermap.formats.money.fmoney.call(null,(function (){var G__13515 = self__.site_stats;var G__13515__$1 = (((G__13515 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13515));var G__13515__$2 = (((G__13515__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13515__$1));return G__13515__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13505))?sablono.interpreter.attributes.call(null,attrs13505):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13505))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13505),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13510 = clustermap.formats.number.fnum.call(null,(function (){var G__13516 = self__.site_stats;var G__13516__$1 = (((G__13516 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13516));var G__13516__$2 = (((G__13516__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13516__$1));return G__13516__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13510))?sablono.interpreter.attributes.call(null,attrs13510):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13510))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13510),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13492,map__13492__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13492,map__13492__$1,const_count,ic_count,pc_count){
return (function (_13495){var self__ = this;
var _13495__$1 = this;return self__.meta13494;
});})(map__13492,map__13492__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13492,map__13492__$1,const_count,ic_count,pc_count){
return (function (_13495,meta13494__$1){var self__ = this;
var _13495__$1 = this;return (new clustermap.components.map_report.t13493(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__13492,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta13494__$1));
});})(map__13492,map__13492__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13493 = ((function (map__13492,map__13492__$1,const_count,ic_count,pc_count){
return (function __GT_t13493(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__13492__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13494){return (new clustermap.components.map_report.t13493(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__13492__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta13494));
});})(map__13492,map__13492__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13493(pc_count,path_fn,const_count,portfolio_company,ic_count,map__13492__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__13542 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13542__$1 = ((cljs.core.seq_QMARK_.call(null,map__13542))?cljs.core.apply.call(null,cljs.core.hash_map,map__13542):map__13542);var const_count = cljs.core.get.call(null,map__13542__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13542__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13542__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13543 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13543 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__13542,comm,investor_company_report,view_path_fn,site_stats,meta13544){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__13542 = map__13542;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta13544 = meta13544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13543.cljs$lang$type = true;
clustermap.components.map_report.t13543.cljs$lang$ctorStr = "clustermap.components.map-report/t13543";
clustermap.components.map_report.t13543.cljs$lang$ctorPrWriter = ((function (map__13542,map__13542__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13543");
});})(map__13542,map__13542__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13543.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13543.prototype.om$core$IRender$render$arity$1 = ((function (map__13542,map__13542__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs13548 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13548))?sablono.interpreter.attributes.call(null,attrs13548):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13548))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13548)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13549 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13549))?sablono.interpreter.attributes.call(null,attrs13549):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13549))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13550 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13550))?sablono.interpreter.attributes.call(null,attrs13550):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13550))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13550)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13549),(function (){var attrs13551 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13551))?sablono.interpreter.attributes.call(null,attrs13551):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13551))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13551)], null))));
})()], null))));
})(),(function (){var attrs13552 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13552))?sablono.interpreter.attributes.call(null,attrs13552):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13552))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13553 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13553))?sablono.interpreter.attributes.call(null,attrs13553):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13553))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13553)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13552),(function (){var attrs13554 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13554))?sablono.interpreter.attributes.call(null,attrs13554):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13554))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13554)], null))));
})()], null))));
})(),(function (){var attrs13555 = clustermap.formats.money.fmoney.call(null,(function (){var G__13565 = self__.site_stats;var G__13565__$1 = (((G__13565 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13565));var G__13565__$2 = (((G__13565__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13565__$1));return G__13565__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13555))?sablono.interpreter.attributes.call(null,attrs13555):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13555))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13555),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13560 = clustermap.formats.number.fnum.call(null,(function (){var G__13566 = self__.site_stats;var G__13566__$1 = (((G__13566 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13566));var G__13566__$2 = (((G__13566__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13566__$1));return G__13566__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13560))?sablono.interpreter.attributes.call(null,attrs13560):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13560))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13560),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13542,map__13542__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13542,map__13542__$1,const_count,ic_count,pc_count){
return (function (_13545){var self__ = this;
var _13545__$1 = this;return self__.meta13544;
});})(map__13542,map__13542__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13542,map__13542__$1,const_count,ic_count,pc_count){
return (function (_13545,meta13544__$1){var self__ = this;
var _13545__$1 = this;return (new clustermap.components.map_report.t13543(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__13542,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta13544__$1));
});})(map__13542,map__13542__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13543 = ((function (map__13542,map__13542__$1,const_count,ic_count,pc_count){
return (function __GT_t13543(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13542__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13544){return (new clustermap.components.map_report.t13543(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__13542__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta13544));
});})(map__13542,map__13542__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13543(pc_count,path_fn,const_count,investor_company,ic_count,map__13542__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__13596 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__13596__$1 = ((cljs.core.seq_QMARK_.call(null,map__13596))?cljs.core.apply.call(null,cljs.core.hash_map,map__13596):map__13596);var const_count = cljs.core.get.call(null,map__13596__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__13596__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__13596__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t13597 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13597 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13596,site_stats,meta13598){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__13596 = map__13596;
this.site_stats = site_stats;
this.meta13598 = meta13598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13597.cljs$lang$type = true;
clustermap.components.map_report.t13597.cljs$lang$ctorStr = "clustermap.components.map-report/t13597";
clustermap.components.map_report.t13597.cljs$lang$ctorPrWriter = ((function (map__13596,map__13596__$1,const_count,ic_count,pc_count){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.map-report/t13597");
});})(map__13596,map__13596__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13597.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t13597.prototype.om$core$IRender$render$arity$1 = ((function (map__13596,map__13596__$1,const_count,ic_count,pc_count){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs13602 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13602))?sablono.interpreter.attributes.call(null,attrs13602):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13602))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3639__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13602),React.DOM.br(null),(cljs.core.truth_((function (){var or__3639__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs13607 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13607))?sablono.interpreter.attributes.call(null,attrs13607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13607))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13608 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13608))?sablono.interpreter.attributes.call(null,attrs13608):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13608))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13608)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13607),(function (){var attrs13609 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13609))?sablono.interpreter.attributes.call(null,attrs13609):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13609))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13609)], null))));
})()], null))));
})(),(function (){var attrs13610 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13610))?sablono.interpreter.attributes.call(null,attrs13610):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13610))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs13611 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13611))?sablono.interpreter.attributes.call(null,attrs13611):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13611))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13611)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13610),(function (){var attrs13612 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs13612))?sablono.interpreter.attributes.call(null,attrs13612):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13612))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13612)], null))));
})()], null))));
})(),(function (){var attrs13613 = clustermap.formats.money.fmoney.call(null,(function (){var G__13623 = self__.site_stats;var G__13623__$1 = (((G__13623 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__13623));var G__13623__$2 = (((G__13623__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13623__$1));return G__13623__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13613))?sablono.interpreter.attributes.call(null,attrs13613):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13613))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13613),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13618 = clustermap.formats.number.fnum.call(null,(function (){var G__13624 = self__.site_stats;var G__13624__$1 = (((G__13624 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__13624));var G__13624__$2 = (((G__13624__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__13624__$1));return G__13624__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13618))?sablono.interpreter.attributes.call(null,attrs13618):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13618))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13618),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__13596,map__13596__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13596,map__13596__$1,const_count,ic_count,pc_count){
return (function (_13599){var self__ = this;
var _13599__$1 = this;return self__.meta13598;
});})(map__13596,map__13596__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t13597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13596,map__13596__$1,const_count,ic_count,pc_count){
return (function (_13599,meta13598__$1){var self__ = this;
var _13599__$1 = this;return (new clustermap.components.map_report.t13597(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__13596,self__.site_stats,meta13598__$1));
});})(map__13596,map__13596__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t13597 = ((function (map__13596,map__13596__$1,const_count,ic_count,pc_count){
return (function __GT_t13597(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13596__$2,site_stats__$1,meta13598){return (new clustermap.components.map_report.t13597(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__13596__$2,site_stats__$1,meta13598));
});})(map__13596,map__13596__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t13597(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__13596__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13629 = om.core.get_shared.call(null,owner);var map__13629__$1 = ((cljs.core.seq_QMARK_.call(null,map__13629))?cljs.core.apply.call(null,cljs.core.hash_map,map__13629):map__13629);var view_path_fn = cljs.core.get.call(null,map__13629__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13629__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13629__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13630 = cljs.core._EQ__EQ_;var expr__13631 = type;if(cljs.core.truth_(pred__13630.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13631)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13630.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13631)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13630.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13631)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
