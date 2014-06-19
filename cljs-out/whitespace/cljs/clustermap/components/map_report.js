// Compiled by ClojureScript 0.0-2227
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__46038 = site_stats;var G__46038__$1 = (((G__46038 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__46038));return G__46038__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__46039 = site_stats;var G__46039__$1 = (((G__46039 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__46039));return G__46039__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__46040 = site_stats;var G__46040__$1 = (((G__46040 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__46040));return G__46040__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__46072 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46072__$1 = ((cljs.core.seq_QMARK_.call(null,map__46072))?cljs.core.apply.call(null,cljs.core.hash_map,map__46072):map__46072);var const_count = cljs.core.get.call(null,map__46072__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46072__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46072__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46073 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46073 = (function (pc_count,ic_count,const_count,map__46072,comm,site_stats,all_portfolio_companies_summary_report,meta46074){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__46072 = map__46072;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta46074 = meta46074;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46073.cljs$lang$type = true;
clustermap.components.map_report.t46073.cljs$lang$ctorStr = "clustermap.components.map-report/t46073";
clustermap.components.map_report.t46073.cljs$lang$ctorPrWriter = ((function (map__46072,map__46072__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46073");
});})(map__46072,map__46072__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46073.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46073.prototype.om$core$IRender$render$arity$1 = ((function (map__46072,map__46072__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs46078 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46078))?sablono.interpreter.attributes.call(null,attrs46078):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46078))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46078),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs46083 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46083))?sablono.interpreter.attributes.call(null,attrs46083):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46083))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46083),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs46088 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46088))?sablono.interpreter.attributes.call(null,attrs46088):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46088))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46089 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46089))?sablono.interpreter.attributes.call(null,attrs46089):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46089))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46089)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46088),(function (){var attrs46090 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46090))?sablono.interpreter.attributes.call(null,attrs46090):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46090))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46090)], null))));
})()], null))));
})(),(function (){var attrs46091 = clustermap.formats.money.fmoney.call(null,(function (){var G__46101 = self__.site_stats;var G__46101__$1 = (((G__46101 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46101));var G__46101__$2 = (((G__46101__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46101__$1));return G__46101__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46091))?sablono.interpreter.attributes.call(null,attrs46091):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46091))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46091),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46096 = clustermap.formats.number.fnum.call(null,(function (){var G__46102 = self__.site_stats;var G__46102__$1 = (((G__46102 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46102));var G__46102__$2 = (((G__46102__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46102__$1));return G__46102__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46096))?sablono.interpreter.attributes.call(null,attrs46096):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46096))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46096),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__46072,map__46072__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46073.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46072,map__46072__$1,const_count,ic_count,pc_count){
return (function (_46075){var self__ = this;
var _46075__$1 = this;return self__.meta46074;
});})(map__46072,map__46072__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46073.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46072,map__46072__$1,const_count,ic_count,pc_count){
return (function (_46075,meta46074__$1){var self__ = this;
var _46075__$1 = this;return (new clustermap.components.map_report.t46073(self__.pc_count,self__.ic_count,self__.const_count,self__.map__46072,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta46074__$1));
});})(map__46072,map__46072__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46073 = ((function (map__46072,map__46072__$1,const_count,ic_count,pc_count){
return (function __GT_t46073(pc_count__$1,ic_count__$1,const_count__$1,map__46072__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta46074){return (new clustermap.components.map_report.t46073(pc_count__$1,ic_count__$1,const_count__$1,map__46072__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta46074));
});})(map__46072,map__46072__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46073(pc_count,ic_count,const_count,map__46072__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__46128 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46128__$1 = ((cljs.core.seq_QMARK_.call(null,map__46128))?cljs.core.apply.call(null,cljs.core.hash_map,map__46128):map__46128);var const_count = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46128__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46129 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46129 = (function (pc_count,ic_count,const_count,map__46128,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta46130){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__46128 = map__46128;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta46130 = meta46130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46129.cljs$lang$type = true;
clustermap.components.map_report.t46129.cljs$lang$ctorStr = "clustermap.components.map-report/t46129";
clustermap.components.map_report.t46129.cljs$lang$ctorPrWriter = ((function (map__46128,map__46128__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46129");
});})(map__46128,map__46128__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46129.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46129.prototype.om$core$IRender$render$arity$1 = ((function (map__46128,map__46128__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs46134 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46134))?sablono.interpreter.attributes.call(null,attrs46134):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46134))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46134)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46135 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46135))?sablono.interpreter.attributes.call(null,attrs46135):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46135))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46136 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46136))?sablono.interpreter.attributes.call(null,attrs46136):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46136))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46136)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46135),(function (){var attrs46137 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46137))?sablono.interpreter.attributes.call(null,attrs46137):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46137))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46137)], null))));
})()], null))));
})(),(function (){var attrs46138 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46138))?sablono.interpreter.attributes.call(null,attrs46138):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46138))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46139 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46139))?sablono.interpreter.attributes.call(null,attrs46139):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46139))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46139)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46138),(function (){var attrs46140 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46140))?sablono.interpreter.attributes.call(null,attrs46140):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46140))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46140)], null))));
})()], null))));
})(),(function (){var attrs46141 = clustermap.formats.money.fmoney.call(null,(function (){var G__46151 = self__.site_stats;var G__46151__$1 = (((G__46151 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46151));var G__46151__$2 = (((G__46151__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46151__$1));return G__46151__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46141))?sablono.interpreter.attributes.call(null,attrs46141):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46141))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46141),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46146 = clustermap.formats.number.fnum.call(null,(function (){var G__46152 = self__.site_stats;var G__46152__$1 = (((G__46152 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46152));var G__46152__$2 = (((G__46152__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46152__$1));return G__46152__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46146))?sablono.interpreter.attributes.call(null,attrs46146):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46146))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46146),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__46128,map__46128__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46128,map__46128__$1,const_count,ic_count,pc_count){
return (function (_46131){var self__ = this;
var _46131__$1 = this;return self__.meta46130;
});})(map__46128,map__46128__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46128,map__46128__$1,const_count,ic_count,pc_count){
return (function (_46131,meta46130__$1){var self__ = this;
var _46131__$1 = this;return (new clustermap.components.map_report.t46129(self__.pc_count,self__.ic_count,self__.const_count,self__.map__46128,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta46130__$1));
});})(map__46128,map__46128__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46129 = ((function (map__46128,map__46128__$1,const_count,ic_count,pc_count){
return (function __GT_t46129(pc_count__$1,ic_count__$1,const_count__$1,map__46128__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta46130){return (new clustermap.components.map_report.t46129(pc_count__$1,ic_count__$1,const_count__$1,map__46128__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta46130));
});})(map__46128,map__46128__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46129(pc_count,ic_count,const_count,map__46128__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__46178 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46178__$1 = ((cljs.core.seq_QMARK_.call(null,map__46178))?cljs.core.apply.call(null,cljs.core.hash_map,map__46178):map__46178);var const_count = cljs.core.get.call(null,map__46178__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46178__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46178__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46179 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46179 = (function (pc_count,ic_count,const_count,map__46178,path_fn,comm,site_stats,investor_company,investor_company_report,meta46180){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__46178 = map__46178;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta46180 = meta46180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46179.cljs$lang$type = true;
clustermap.components.map_report.t46179.cljs$lang$ctorStr = "clustermap.components.map-report/t46179";
clustermap.components.map_report.t46179.cljs$lang$ctorPrWriter = ((function (map__46178,map__46178__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46179");
});})(map__46178,map__46178__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46179.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46179.prototype.om$core$IRender$render$arity$1 = ((function (map__46178,map__46178__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs46184 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46184))?sablono.interpreter.attributes.call(null,attrs46184):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46184))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46184)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46185 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46185))?sablono.interpreter.attributes.call(null,attrs46185):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46185))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46186 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46186))?sablono.interpreter.attributes.call(null,attrs46186):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46186))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46186)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46185),(function (){var attrs46187 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46187))?sablono.interpreter.attributes.call(null,attrs46187):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46187))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46187)], null))));
})()], null))));
})(),(function (){var attrs46188 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46188))?sablono.interpreter.attributes.call(null,attrs46188):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46188))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46189 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46189))?sablono.interpreter.attributes.call(null,attrs46189):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46189))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46189)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46188),(function (){var attrs46190 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46190))?sablono.interpreter.attributes.call(null,attrs46190):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46190))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46190)], null))));
})()], null))));
})(),(function (){var attrs46191 = clustermap.formats.money.fmoney.call(null,(function (){var G__46201 = self__.site_stats;var G__46201__$1 = (((G__46201 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46201));var G__46201__$2 = (((G__46201__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46201__$1));return G__46201__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46191))?sablono.interpreter.attributes.call(null,attrs46191):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46191))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46191),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46196 = clustermap.formats.number.fnum.call(null,(function (){var G__46202 = self__.site_stats;var G__46202__$1 = (((G__46202 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46202));var G__46202__$2 = (((G__46202__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46202__$1));return G__46202__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46196))?sablono.interpreter.attributes.call(null,attrs46196):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46196))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46196),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__46178,map__46178__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46178,map__46178__$1,const_count,ic_count,pc_count){
return (function (_46181){var self__ = this;
var _46181__$1 = this;return self__.meta46180;
});})(map__46178,map__46178__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46178,map__46178__$1,const_count,ic_count,pc_count){
return (function (_46181,meta46180__$1){var self__ = this;
var _46181__$1 = this;return (new clustermap.components.map_report.t46179(self__.pc_count,self__.ic_count,self__.const_count,self__.map__46178,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta46180__$1));
});})(map__46178,map__46178__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46179 = ((function (map__46178,map__46178__$1,const_count,ic_count,pc_count){
return (function __GT_t46179(pc_count__$1,ic_count__$1,const_count__$1,map__46178__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta46180){return (new clustermap.components.map_report.t46179(pc_count__$1,ic_count__$1,const_count__$1,map__46178__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta46180));
});})(map__46178,map__46178__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46179(pc_count,ic_count,const_count,map__46178__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__46232 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46232__$1 = ((cljs.core.seq_QMARK_.call(null,map__46232))?cljs.core.apply.call(null,cljs.core.hash_map,map__46232):map__46232);var const_count = cljs.core.get.call(null,map__46232__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46232__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46232__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46233 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46233 = (function (pc_count,ic_count,const_count,map__46232,path_fn,comm,site_stats,constituency,constituency_report,meta46234){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__46232 = map__46232;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta46234 = meta46234;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46233.cljs$lang$type = true;
clustermap.components.map_report.t46233.cljs$lang$ctorStr = "clustermap.components.map-report/t46233";
clustermap.components.map_report.t46233.cljs$lang$ctorPrWriter = ((function (map__46232,map__46232__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46233");
});})(map__46232,map__46232__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46233.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46233.prototype.om$core$IRender$render$arity$1 = ((function (map__46232,map__46232__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs46238 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46238))?sablono.interpreter.attributes.call(null,attrs46238):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46238))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46238),React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46243 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46243))?sablono.interpreter.attributes.call(null,attrs46243):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46243))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46244 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46244))?sablono.interpreter.attributes.call(null,attrs46244):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46244))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46244)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46243),(function (){var attrs46245 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46245))?sablono.interpreter.attributes.call(null,attrs46245):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46245))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46245)], null))));
})()], null))));
})(),(function (){var attrs46246 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46246))?sablono.interpreter.attributes.call(null,attrs46246):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46246))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46247 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46247))?sablono.interpreter.attributes.call(null,attrs46247):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46247))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46247)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46246),(function (){var attrs46248 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46248))?sablono.interpreter.attributes.call(null,attrs46248):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46248))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46248)], null))));
})()], null))));
})(),(function (){var attrs46249 = clustermap.formats.money.fmoney.call(null,(function (){var G__46259 = self__.site_stats;var G__46259__$1 = (((G__46259 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46259));var G__46259__$2 = (((G__46259__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46259__$1));return G__46259__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46249))?sablono.interpreter.attributes.call(null,attrs46249):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46249))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46249),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46254 = clustermap.formats.number.fnum.call(null,(function (){var G__46260 = self__.site_stats;var G__46260__$1 = (((G__46260 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46260));var G__46260__$2 = (((G__46260__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46260__$1));return G__46260__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46254))?sablono.interpreter.attributes.call(null,attrs46254):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46254))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46254),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});})(map__46232,map__46232__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46232,map__46232__$1,const_count,ic_count,pc_count){
return (function (_46235){var self__ = this;
var _46235__$1 = this;return self__.meta46234;
});})(map__46232,map__46232__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46232,map__46232__$1,const_count,ic_count,pc_count){
return (function (_46235,meta46234__$1){var self__ = this;
var _46235__$1 = this;return (new clustermap.components.map_report.t46233(self__.pc_count,self__.ic_count,self__.const_count,self__.map__46232,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta46234__$1));
});})(map__46232,map__46232__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46233 = ((function (map__46232,map__46232__$1,const_count,ic_count,pc_count){
return (function __GT_t46233(pc_count__$1,ic_count__$1,const_count__$1,map__46232__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta46234){return (new clustermap.components.map_report.t46233(pc_count__$1,ic_count__$1,const_count__$1,map__46232__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta46234));
});})(map__46232,map__46232__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46233(pc_count,ic_count,const_count,map__46232__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__46265 = om.core.get_shared.call(null,owner);var map__46265__$1 = ((cljs.core.seq_QMARK_.call(null,map__46265))?cljs.core.apply.call(null,cljs.core.hash_map,map__46265):map__46265);var path_fn = cljs.core.get.call(null,map__46265__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46265__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__46266 = cljs.core._EQ__EQ_;var expr__46267 = type;if(cljs.core.truth_(pred__46266.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__46267)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__46266.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__46267)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_(pred__46266.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__46267)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
