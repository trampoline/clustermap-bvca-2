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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__47036 = site_stats;var G__47036__$1 = (((G__47036 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__47036));return G__47036__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__47037 = site_stats;var G__47037__$1 = (((G__47037 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__47037));return G__47037__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__47038 = site_stats;var G__47038__$1 = (((G__47038 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__47038));return G__47038__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__47070 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__47070__$1 = ((cljs.core.seq_QMARK_.call(null,map__47070))?cljs.core.apply.call(null,cljs.core.hash_map,map__47070):map__47070);var const_count = cljs.core.get.call(null,map__47070__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__47070__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__47070__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t47071 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t47071 = (function (pc_count,ic_count,const_count,map__47070,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta47072){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__47070 = map__47070;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta47072 = meta47072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t47071.cljs$lang$type = true;
clustermap.components.map_report.t47071.cljs$lang$ctorStr = "clustermap.components.map-report/t47071";
clustermap.components.map_report.t47071.cljs$lang$ctorPrWriter = ((function (map__47070,map__47070__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t47071");
});})(map__47070,map__47070__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47071.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t47071.prototype.om$core$IRender$render$arity$1 = ((function (map__47070,map__47070__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs47076 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47076))?sablono.interpreter.attributes.call(null,attrs47076):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47076))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47076),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs47081 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47081))?sablono.interpreter.attributes.call(null,attrs47081):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47081))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47081),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs47086 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47086))?sablono.interpreter.attributes.call(null,attrs47086):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47086))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47087 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47087))?sablono.interpreter.attributes.call(null,attrs47087):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47087))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47087)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47086),(function (){var attrs47088 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47088))?sablono.interpreter.attributes.call(null,attrs47088):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47088))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47088)], null))));
})()], null))));
})(),(function (){var attrs47089 = clustermap.formats.money.fmoney.call(null,(function (){var G__47099 = self__.site_stats;var G__47099__$1 = (((G__47099 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__47099));var G__47099__$2 = (((G__47099__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47099__$1));return G__47099__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47089))?sablono.interpreter.attributes.call(null,attrs47089):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47089))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47089),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs47094 = clustermap.formats.number.fnum.call(null,(function (){var G__47100 = self__.site_stats;var G__47100__$1 = (((G__47100 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__47100));var G__47100__$2 = (((G__47100__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47100__$1));return G__47100__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47094))?sablono.interpreter.attributes.call(null,attrs47094):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47094))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47094),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__47070,map__47070__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47070,map__47070__$1,const_count,ic_count,pc_count){
return (function (_47073){var self__ = this;
var _47073__$1 = this;return self__.meta47072;
});})(map__47070,map__47070__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47070,map__47070__$1,const_count,ic_count,pc_count){
return (function (_47073,meta47072__$1){var self__ = this;
var _47073__$1 = this;return (new clustermap.components.map_report.t47071(self__.pc_count,self__.ic_count,self__.const_count,self__.map__47070,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta47072__$1));
});})(map__47070,map__47070__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t47071 = ((function (map__47070,map__47070__$1,const_count,ic_count,pc_count){
return (function __GT_t47071(pc_count__$1,ic_count__$1,const_count__$1,map__47070__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta47072){return (new clustermap.components.map_report.t47071(pc_count__$1,ic_count__$1,const_count__$1,map__47070__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta47072));
});})(map__47070,map__47070__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t47071(pc_count,ic_count,const_count,map__47070__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__47126 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__47126__$1 = ((cljs.core.seq_QMARK_.call(null,map__47126))?cljs.core.apply.call(null,cljs.core.hash_map,map__47126):map__47126);var const_count = cljs.core.get.call(null,map__47126__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__47126__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__47126__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t47127 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t47127 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__47126,comm,view_path_fn,portfolio_company_report,site_stats,meta47128){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__47126 = map__47126;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta47128 = meta47128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t47127.cljs$lang$type = true;
clustermap.components.map_report.t47127.cljs$lang$ctorStr = "clustermap.components.map-report/t47127";
clustermap.components.map_report.t47127.cljs$lang$ctorPrWriter = ((function (map__47126,map__47126__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t47127");
});})(map__47126,map__47126__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47127.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t47127.prototype.om$core$IRender$render$arity$1 = ((function (map__47126,map__47126__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs47132 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs47132))?sablono.interpreter.attributes.call(null,attrs47132):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47132)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs47133 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47133))?sablono.interpreter.attributes.call(null,attrs47133):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47133))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47134 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47134))?sablono.interpreter.attributes.call(null,attrs47134):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47134))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47134)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47133),(function (){var attrs47135 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47135))?sablono.interpreter.attributes.call(null,attrs47135):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47135))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47135)], null))));
})()], null))));
})(),(function (){var attrs47136 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47136))?sablono.interpreter.attributes.call(null,attrs47136):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47136))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47137 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47137))?sablono.interpreter.attributes.call(null,attrs47137):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47137))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47137)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47136),(function (){var attrs47138 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47138))?sablono.interpreter.attributes.call(null,attrs47138):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47138))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47138)], null))));
})()], null))));
})(),(function (){var attrs47139 = clustermap.formats.money.fmoney.call(null,(function (){var G__47149 = self__.site_stats;var G__47149__$1 = (((G__47149 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__47149));var G__47149__$2 = (((G__47149__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47149__$1));return G__47149__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47139))?sablono.interpreter.attributes.call(null,attrs47139):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47139))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47139),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs47144 = clustermap.formats.number.fnum.call(null,(function (){var G__47150 = self__.site_stats;var G__47150__$1 = (((G__47150 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__47150));var G__47150__$2 = (((G__47150__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47150__$1));return G__47150__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47144))?sablono.interpreter.attributes.call(null,attrs47144):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47144))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47144),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__47126,map__47126__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47126,map__47126__$1,const_count,ic_count,pc_count){
return (function (_47129){var self__ = this;
var _47129__$1 = this;return self__.meta47128;
});})(map__47126,map__47126__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47126,map__47126__$1,const_count,ic_count,pc_count){
return (function (_47129,meta47128__$1){var self__ = this;
var _47129__$1 = this;return (new clustermap.components.map_report.t47127(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__47126,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta47128__$1));
});})(map__47126,map__47126__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t47127 = ((function (map__47126,map__47126__$1,const_count,ic_count,pc_count){
return (function __GT_t47127(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__47126__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta47128){return (new clustermap.components.map_report.t47127(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__47126__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta47128));
});})(map__47126,map__47126__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t47127(pc_count,path_fn,const_count,portfolio_company,ic_count,map__47126__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__47176 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__47176__$1 = ((cljs.core.seq_QMARK_.call(null,map__47176))?cljs.core.apply.call(null,cljs.core.hash_map,map__47176):map__47176);var const_count = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__47176__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t47177 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t47177 = (function (pc_count,path_fn,map__47176,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,meta47178){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.map__47176 = map__47176;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta47178 = meta47178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t47177.cljs$lang$type = true;
clustermap.components.map_report.t47177.cljs$lang$ctorStr = "clustermap.components.map-report/t47177";
clustermap.components.map_report.t47177.cljs$lang$ctorPrWriter = ((function (map__47176,map__47176__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t47177");
});})(map__47176,map__47176__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47177.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t47177.prototype.om$core$IRender$render$arity$1 = ((function (map__47176,map__47176__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs47182 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs47182))?sablono.interpreter.attributes.call(null,attrs47182):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47182))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47182)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs47183 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47183))?sablono.interpreter.attributes.call(null,attrs47183):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47183))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47184 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47184))?sablono.interpreter.attributes.call(null,attrs47184):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47184))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47184)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47183),(function (){var attrs47185 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47185))?sablono.interpreter.attributes.call(null,attrs47185):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47185))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47185)], null))));
})()], null))));
})(),(function (){var attrs47186 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47186))?sablono.interpreter.attributes.call(null,attrs47186):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47186))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47187 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47187))?sablono.interpreter.attributes.call(null,attrs47187):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47187))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47187)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47186),(function (){var attrs47188 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47188))?sablono.interpreter.attributes.call(null,attrs47188):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47188))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47188)], null))));
})()], null))));
})(),(function (){var attrs47189 = clustermap.formats.money.fmoney.call(null,(function (){var G__47199 = self__.site_stats;var G__47199__$1 = (((G__47199 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__47199));var G__47199__$2 = (((G__47199__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47199__$1));return G__47199__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47189))?sablono.interpreter.attributes.call(null,attrs47189):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47189))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47189),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs47194 = clustermap.formats.number.fnum.call(null,(function (){var G__47200 = self__.site_stats;var G__47200__$1 = (((G__47200 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__47200));var G__47200__$2 = (((G__47200__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47200__$1));return G__47200__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47194))?sablono.interpreter.attributes.call(null,attrs47194):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47194))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47194),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__47176,map__47176__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47176,map__47176__$1,const_count,ic_count,pc_count){
return (function (_47179){var self__ = this;
var _47179__$1 = this;return self__.meta47178;
});})(map__47176,map__47176__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47176,map__47176__$1,const_count,ic_count,pc_count){
return (function (_47179,meta47178__$1){var self__ = this;
var _47179__$1 = this;return (new clustermap.components.map_report.t47177(self__.pc_count,self__.path_fn,self__.map__47176,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta47178__$1));
});})(map__47176,map__47176__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t47177 = ((function (map__47176,map__47176__$1,const_count,ic_count,pc_count){
return (function __GT_t47177(pc_count__$1,path_fn__$1,map__47176__$2,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta47178){return (new clustermap.components.map_report.t47177(pc_count__$1,path_fn__$1,map__47176__$2,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta47178));
});})(map__47176,map__47176__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t47177(pc_count,path_fn,map__47176__$1,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__47230 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__47230__$1 = ((cljs.core.seq_QMARK_.call(null,map__47230))?cljs.core.apply.call(null,cljs.core.hash_map,map__47230):map__47230);var const_count = cljs.core.get.call(null,map__47230__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__47230__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__47230__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t47231 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t47231 = (function (pc_count,path_fn,const_count,map__47230,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta47232){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.map__47230 = map__47230;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta47232 = meta47232;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t47231.cljs$lang$type = true;
clustermap.components.map_report.t47231.cljs$lang$ctorStr = "clustermap.components.map-report/t47231";
clustermap.components.map_report.t47231.cljs$lang$ctorPrWriter = ((function (map__47230,map__47230__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t47231");
});})(map__47230,map__47230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47231.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t47231.prototype.om$core$IRender$render$arity$1 = ((function (map__47230,map__47230__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs47236 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs47236))?sablono.interpreter.attributes.call(null,attrs47236):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47236))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47236),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs47241 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47241))?sablono.interpreter.attributes.call(null,attrs47241):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47241))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47242 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47242))?sablono.interpreter.attributes.call(null,attrs47242):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47242))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47242)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47241),(function (){var attrs47243 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47243))?sablono.interpreter.attributes.call(null,attrs47243):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47243))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47243)], null))));
})()], null))));
})(),(function (){var attrs47244 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47244))?sablono.interpreter.attributes.call(null,attrs47244):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47244))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs47245 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47245))?sablono.interpreter.attributes.call(null,attrs47245):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47245))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47245)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47244),(function (){var attrs47246 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs47246))?sablono.interpreter.attributes.call(null,attrs47246):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47246))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47246)], null))));
})()], null))));
})(),(function (){var attrs47247 = clustermap.formats.money.fmoney.call(null,(function (){var G__47257 = self__.site_stats;var G__47257__$1 = (((G__47257 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__47257));var G__47257__$2 = (((G__47257__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47257__$1));return G__47257__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47247))?sablono.interpreter.attributes.call(null,attrs47247):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47247))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47247),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs47252 = clustermap.formats.number.fnum.call(null,(function (){var G__47258 = self__.site_stats;var G__47258__$1 = (((G__47258 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__47258));var G__47258__$2 = (((G__47258__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__47258__$1));return G__47258__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs47252))?sablono.interpreter.attributes.call(null,attrs47252):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs47252))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs47252),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__47230,map__47230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47231.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47230,map__47230__$1,const_count,ic_count,pc_count){
return (function (_47233){var self__ = this;
var _47233__$1 = this;return self__.meta47232;
});})(map__47230,map__47230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t47231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47230,map__47230__$1,const_count,ic_count,pc_count){
return (function (_47233,meta47232__$1){var self__ = this;
var _47233__$1 = this;return (new clustermap.components.map_report.t47231(self__.pc_count,self__.path_fn,self__.const_count,self__.map__47230,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta47232__$1));
});})(map__47230,map__47230__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t47231 = ((function (map__47230,map__47230__$1,const_count,ic_count,pc_count){
return (function __GT_t47231(pc_count__$1,path_fn__$1,const_count__$1,map__47230__$2,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta47232){return (new clustermap.components.map_report.t47231(pc_count__$1,path_fn__$1,const_count__$1,map__47230__$2,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta47232));
});})(map__47230,map__47230__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t47231(pc_count,path_fn,const_count,map__47230__$1,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__47263 = om.core.get_shared.call(null,owner);var map__47263__$1 = ((cljs.core.seq_QMARK_.call(null,map__47263))?cljs.core.apply.call(null,cljs.core.hash_map,map__47263):map__47263);var view_path_fn = cljs.core.get.call(null,map__47263__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__47263__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__47263__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__47264 = cljs.core._EQ__EQ_;var expr__47265 = type;if(cljs.core.truth_(pred__47264.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__47265)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__47264.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__47265)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__47264.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__47265)))
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