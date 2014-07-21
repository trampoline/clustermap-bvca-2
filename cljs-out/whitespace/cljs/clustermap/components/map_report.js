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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__13968 = site_stats;var G__13968__$1 = (((G__13968 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__13968));return G__13968__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__13969 = site_stats;var G__13969__$1 = (((G__13969 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__13969));return G__13969__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__13970 = site_stats;var G__13970__$1 = (((G__13970 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__13970));return G__13970__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__14002 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14002__$1 = ((cljs.core.seq_QMARK_.call(null,map__14002))?cljs.core.apply.call(null,cljs.core.hash_map,map__14002):map__14002);var const_count = cljs.core.get.call(null,map__14002__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14002__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14002__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14003 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14003 = (function (pc_count,ic_count,const_count,map__14002,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta14004){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__14002 = map__14002;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta14004 = meta14004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14003.cljs$lang$type = true;
clustermap.components.map_report.t14003.cljs$lang$ctorStr = "clustermap.components.map-report/t14003";
clustermap.components.map_report.t14003.cljs$lang$ctorPrWriter = ((function (map__14002,map__14002__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14003");
});})(map__14002,map__14002__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14003.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14003.prototype.om$core$IRender$render$arity$1 = ((function (map__14002,map__14002__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs14008 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14008))?sablono.interpreter.attributes.call(null,attrs14008):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14008))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14008),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs14013 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14013))?sablono.interpreter.attributes.call(null,attrs14013):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14013))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14013),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs14018 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14018))?sablono.interpreter.attributes.call(null,attrs14018):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14018))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14019 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14019))?sablono.interpreter.attributes.call(null,attrs14019):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14019))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14019)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14018),(function (){var attrs14020 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14020))?sablono.interpreter.attributes.call(null,attrs14020):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14020))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14020)], null))));
})()], null))));
})(),(function (){var attrs14021 = clustermap.formats.money.fmoney.call(null,(function (){var G__14031 = self__.site_stats;var G__14031__$1 = (((G__14031 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14031));var G__14031__$2 = (((G__14031__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14031__$1));return G__14031__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14021))?sablono.interpreter.attributes.call(null,attrs14021):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14021))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14021),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14026 = clustermap.formats.number.fnum.call(null,(function (){var G__14032 = self__.site_stats;var G__14032__$1 = (((G__14032 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14032));var G__14032__$2 = (((G__14032__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14032__$1));return G__14032__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14026))?sablono.interpreter.attributes.call(null,attrs14026):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14026))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14026),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14002,map__14002__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14002,map__14002__$1,const_count,ic_count,pc_count){
return (function (_14005){var self__ = this;
var _14005__$1 = this;return self__.meta14004;
});})(map__14002,map__14002__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14002,map__14002__$1,const_count,ic_count,pc_count){
return (function (_14005,meta14004__$1){var self__ = this;
var _14005__$1 = this;return (new clustermap.components.map_report.t14003(self__.pc_count,self__.ic_count,self__.const_count,self__.map__14002,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta14004__$1));
});})(map__14002,map__14002__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14003 = ((function (map__14002,map__14002__$1,const_count,ic_count,pc_count){
return (function __GT_t14003(pc_count__$1,ic_count__$1,const_count__$1,map__14002__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta14004){return (new clustermap.components.map_report.t14003(pc_count__$1,ic_count__$1,const_count__$1,map__14002__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta14004));
});})(map__14002,map__14002__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14003(pc_count,ic_count,const_count,map__14002__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__14058 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14058__$1 = ((cljs.core.seq_QMARK_.call(null,map__14058))?cljs.core.apply.call(null,cljs.core.hash_map,map__14058):map__14058);var const_count = cljs.core.get.call(null,map__14058__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14058__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14058__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14059 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14059 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__14058,portfolio_company_report,site_stats,meta14060){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__14058 = map__14058;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta14060 = meta14060;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14059.cljs$lang$type = true;
clustermap.components.map_report.t14059.cljs$lang$ctorStr = "clustermap.components.map-report/t14059";
clustermap.components.map_report.t14059.cljs$lang$ctorPrWriter = ((function (map__14058,map__14058__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14059");
});})(map__14058,map__14058__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14059.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14059.prototype.om$core$IRender$render$arity$1 = ((function (map__14058,map__14058__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs14064 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs14064))?sablono.interpreter.attributes.call(null,attrs14064):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14064))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14064)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs14065 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14065))?sablono.interpreter.attributes.call(null,attrs14065):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14065))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14066 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14066))?sablono.interpreter.attributes.call(null,attrs14066):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14066))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14066)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14065),(function (){var attrs14067 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14067))?sablono.interpreter.attributes.call(null,attrs14067):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14067))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14067)], null))));
})()], null))));
})(),(function (){var attrs14068 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14068))?sablono.interpreter.attributes.call(null,attrs14068):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14068))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14069 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14069))?sablono.interpreter.attributes.call(null,attrs14069):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14069))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14069)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14068),(function (){var attrs14070 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14070))?sablono.interpreter.attributes.call(null,attrs14070):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14070))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14070)], null))));
})()], null))));
})(),(function (){var attrs14071 = clustermap.formats.money.fmoney.call(null,(function (){var G__14081 = self__.site_stats;var G__14081__$1 = (((G__14081 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14081));var G__14081__$2 = (((G__14081__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14081__$1));return G__14081__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14071))?sablono.interpreter.attributes.call(null,attrs14071):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14071))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14071),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14076 = clustermap.formats.number.fnum.call(null,(function (){var G__14082 = self__.site_stats;var G__14082__$1 = (((G__14082 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14082));var G__14082__$2 = (((G__14082__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14082__$1));return G__14082__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14076))?sablono.interpreter.attributes.call(null,attrs14076):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14076))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14076),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14058,map__14058__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14058,map__14058__$1,const_count,ic_count,pc_count){
return (function (_14061){var self__ = this;
var _14061__$1 = this;return self__.meta14060;
});})(map__14058,map__14058__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14058,map__14058__$1,const_count,ic_count,pc_count){
return (function (_14061,meta14060__$1){var self__ = this;
var _14061__$1 = this;return (new clustermap.components.map_report.t14059(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__14058,self__.portfolio_company_report,self__.site_stats,meta14060__$1));
});})(map__14058,map__14058__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14059 = ((function (map__14058,map__14058__$1,const_count,ic_count,pc_count){
return (function __GT_t14059(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__14058__$2,portfolio_company_report__$1,site_stats__$1,meta14060){return (new clustermap.components.map_report.t14059(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__14058__$2,portfolio_company_report__$1,site_stats__$1,meta14060));
});})(map__14058,map__14058__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14059(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__14058__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__14108 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14108__$1 = ((cljs.core.seq_QMARK_.call(null,map__14108))?cljs.core.apply.call(null,cljs.core.hash_map,map__14108):map__14108);var const_count = cljs.core.get.call(null,map__14108__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14108__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14108__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14109 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14109 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__14108,site_stats,meta14110){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__14108 = map__14108;
this.site_stats = site_stats;
this.meta14110 = meta14110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14109.cljs$lang$type = true;
clustermap.components.map_report.t14109.cljs$lang$ctorStr = "clustermap.components.map-report/t14109";
clustermap.components.map_report.t14109.cljs$lang$ctorPrWriter = ((function (map__14108,map__14108__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14109");
});})(map__14108,map__14108__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14109.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14109.prototype.om$core$IRender$render$arity$1 = ((function (map__14108,map__14108__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs14114 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs14114))?sablono.interpreter.attributes.call(null,attrs14114):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14114))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14114)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs14115 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14115))?sablono.interpreter.attributes.call(null,attrs14115):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14115))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14116 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14116))?sablono.interpreter.attributes.call(null,attrs14116):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14116))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14116)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14115),(function (){var attrs14117 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14117))?sablono.interpreter.attributes.call(null,attrs14117):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14117))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14117)], null))));
})()], null))));
})(),(function (){var attrs14118 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14118))?sablono.interpreter.attributes.call(null,attrs14118):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14118))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14119 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14119))?sablono.interpreter.attributes.call(null,attrs14119):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14119))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14119)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14118),(function (){var attrs14120 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14120))?sablono.interpreter.attributes.call(null,attrs14120):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14120))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14120)], null))));
})()], null))));
})(),(function (){var attrs14121 = clustermap.formats.money.fmoney.call(null,(function (){var G__14131 = self__.site_stats;var G__14131__$1 = (((G__14131 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14131));var G__14131__$2 = (((G__14131__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14131__$1));return G__14131__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14121))?sablono.interpreter.attributes.call(null,attrs14121):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14121))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14121),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14126 = clustermap.formats.number.fnum.call(null,(function (){var G__14132 = self__.site_stats;var G__14132__$1 = (((G__14132 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14132));var G__14132__$2 = (((G__14132__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14132__$1));return G__14132__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14126))?sablono.interpreter.attributes.call(null,attrs14126):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14126))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14126),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14108,map__14108__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14108,map__14108__$1,const_count,ic_count,pc_count){
return (function (_14111){var self__ = this;
var _14111__$1 = this;return self__.meta14110;
});})(map__14108,map__14108__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14108,map__14108__$1,const_count,ic_count,pc_count){
return (function (_14111,meta14110__$1){var self__ = this;
var _14111__$1 = this;return (new clustermap.components.map_report.t14109(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__14108,self__.site_stats,meta14110__$1));
});})(map__14108,map__14108__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14109 = ((function (map__14108,map__14108__$1,const_count,ic_count,pc_count){
return (function __GT_t14109(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__14108__$2,site_stats__$1,meta14110){return (new clustermap.components.map_report.t14109(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__14108__$2,site_stats__$1,meta14110));
});})(map__14108,map__14108__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14109(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__14108__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__14162 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__14162__$1 = ((cljs.core.seq_QMARK_.call(null,map__14162))?cljs.core.apply.call(null,cljs.core.hash_map,map__14162):map__14162);var const_count = cljs.core.get.call(null,map__14162__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__14162__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__14162__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t14163 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t14163 = (function (pc_count,path_fn,const_count,ic_count,map__14162,constituency_report,comm,constituency,view_path_fn,site_stats,meta14164){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.map__14162 = map__14162;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta14164 = meta14164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t14163.cljs$lang$type = true;
clustermap.components.map_report.t14163.cljs$lang$ctorStr = "clustermap.components.map-report/t14163";
clustermap.components.map_report.t14163.cljs$lang$ctorPrWriter = ((function (map__14162,map__14162__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t14163");
});})(map__14162,map__14162__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14163.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t14163.prototype.om$core$IRender$render$arity$1 = ((function (map__14162,map__14162__$1,const_count,ic_count,pc_count){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs14168 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs14168))?sablono.interpreter.attributes.call(null,attrs14168):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14168))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14168),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs14173 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14173))?sablono.interpreter.attributes.call(null,attrs14173):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14173))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14174 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14174))?sablono.interpreter.attributes.call(null,attrs14174):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14174))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14174)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14173),(function (){var attrs14175 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14175))?sablono.interpreter.attributes.call(null,attrs14175):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14175))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14175)], null))));
})()], null))));
})(),(function (){var attrs14176 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14176))?sablono.interpreter.attributes.call(null,attrs14176):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14176))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs14177 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14177))?sablono.interpreter.attributes.call(null,attrs14177):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14177))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14177)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14176),(function (){var attrs14178 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs14178))?sablono.interpreter.attributes.call(null,attrs14178):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14178))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14178)], null))));
})()], null))));
})(),(function (){var attrs14179 = clustermap.formats.money.fmoney.call(null,(function (){var G__14189 = self__.site_stats;var G__14189__$1 = (((G__14189 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__14189));var G__14189__$2 = (((G__14189__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14189__$1));return G__14189__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14179))?sablono.interpreter.attributes.call(null,attrs14179):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14179))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14179),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs14184 = clustermap.formats.number.fnum.call(null,(function (){var G__14190 = self__.site_stats;var G__14190__$1 = (((G__14190 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__14190));var G__14190__$2 = (((G__14190__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__14190__$1));return G__14190__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs14184))?sablono.interpreter.attributes.call(null,attrs14184):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14184))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14184),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__14162,map__14162__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14162,map__14162__$1,const_count,ic_count,pc_count){
return (function (_14165){var self__ = this;
var _14165__$1 = this;return self__.meta14164;
});})(map__14162,map__14162__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t14163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14162,map__14162__$1,const_count,ic_count,pc_count){
return (function (_14165,meta14164__$1){var self__ = this;
var _14165__$1 = this;return (new clustermap.components.map_report.t14163(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.map__14162,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta14164__$1));
});})(map__14162,map__14162__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t14163 = ((function (map__14162,map__14162__$1,const_count,ic_count,pc_count){
return (function __GT_t14163(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__14162__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta14164){return (new clustermap.components.map_report.t14163(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,map__14162__$2,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta14164));
});})(map__14162,map__14162__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t14163(pc_count,path_fn,const_count,ic_count,map__14162__$1,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__14195 = om.core.get_shared.call(null,owner);var map__14195__$1 = ((cljs.core.seq_QMARK_.call(null,map__14195))?cljs.core.apply.call(null,cljs.core.hash_map,map__14195):map__14195);var view_path_fn = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__14195__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__14196 = cljs.core._EQ__EQ_;var expr__14197 = type;if(cljs.core.truth_(pred__14196.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__14197)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__14196.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__14197)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__14196.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__14197)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
