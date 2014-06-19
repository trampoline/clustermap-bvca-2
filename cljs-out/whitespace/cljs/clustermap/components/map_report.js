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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",1116886791))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__46010 = site_stats;var G__46010__$1 = (((G__46010 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__46010));return G__46010__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__46011 = site_stats;var G__46011__$1 = (((G__46011 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__46011));return G__46011__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__46012 = site_stats;var G__46012__$1 = (((G__46012 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__46012));return G__46012__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__46044 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46044__$1 = ((cljs.core.seq_QMARK_.call(null,map__46044))?cljs.core.apply.call(null,cljs.core.hash_map,map__46044):map__46044);var const_count = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46044__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46045 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46045 = (function (pc_count,ic_count,const_count,map__46044,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta46046){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__46044 = map__46044;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta46046 = meta46046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46045.cljs$lang$type = true;
clustermap.components.map_report.t46045.cljs$lang$ctorStr = "clustermap.components.map-report/t46045";
clustermap.components.map_report.t46045.cljs$lang$ctorPrWriter = ((function (map__46044,map__46044__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46045");
});})(map__46044,map__46044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46045.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46045.prototype.om$core$IRender$render$arity$1 = ((function (map__46044,map__46044__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs46050 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46050))?sablono.interpreter.attributes.call(null,attrs46050):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46050))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46050),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs46055 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46055))?sablono.interpreter.attributes.call(null,attrs46055):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46055))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46055),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs46060 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46060))?sablono.interpreter.attributes.call(null,attrs46060):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46060))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46061 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46061))?sablono.interpreter.attributes.call(null,attrs46061):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46061))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46061)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46060),(function (){var attrs46062 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46062))?sablono.interpreter.attributes.call(null,attrs46062):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46062))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46062)], null))));
})()], null))));
})(),(function (){var attrs46063 = clustermap.formats.money.fmoney.call(null,(function (){var G__46073 = self__.site_stats;var G__46073__$1 = (((G__46073 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46073));var G__46073__$2 = (((G__46073__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46073__$1));return G__46073__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46063))?sablono.interpreter.attributes.call(null,attrs46063):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46063))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46063),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46068 = clustermap.formats.number.fnum.call(null,(function (){var G__46074 = self__.site_stats;var G__46074__$1 = (((G__46074 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46074));var G__46074__$2 = (((G__46074__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46074__$1));return G__46074__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46068))?sablono.interpreter.attributes.call(null,attrs46068):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46068))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46068),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46044,map__46044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46044,map__46044__$1,const_count,ic_count,pc_count){
return (function (_46047){var self__ = this;
var _46047__$1 = this;return self__.meta46046;
});})(map__46044,map__46044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46044,map__46044__$1,const_count,ic_count,pc_count){
return (function (_46047,meta46046__$1){var self__ = this;
var _46047__$1 = this;return (new clustermap.components.map_report.t46045(self__.pc_count,self__.ic_count,self__.const_count,self__.map__46044,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta46046__$1));
});})(map__46044,map__46044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46045 = ((function (map__46044,map__46044__$1,const_count,ic_count,pc_count){
return (function __GT_t46045(pc_count__$1,ic_count__$1,const_count__$1,map__46044__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta46046){return (new clustermap.components.map_report.t46045(pc_count__$1,ic_count__$1,const_count__$1,map__46044__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta46046));
});})(map__46044,map__46044__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46045(pc_count,ic_count,const_count,map__46044__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__46100 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46100__$1 = ((cljs.core.seq_QMARK_.call(null,map__46100))?cljs.core.apply.call(null,cljs.core.hash_map,map__46100):map__46100);var const_count = cljs.core.get.call(null,map__46100__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46100__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46100__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46101 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46101 = (function (map__46100,pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta46102){
this.map__46100 = map__46100;
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta46102 = meta46102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46101.cljs$lang$type = true;
clustermap.components.map_report.t46101.cljs$lang$ctorStr = "clustermap.components.map-report/t46101";
clustermap.components.map_report.t46101.cljs$lang$ctorPrWriter = ((function (map__46100,map__46100__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46101");
});})(map__46100,map__46100__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46101.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46101.prototype.om$core$IRender$render$arity$1 = ((function (map__46100,map__46100__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs46106 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46106))?sablono.interpreter.attributes.call(null,attrs46106):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46106))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46106)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46107 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46107))?sablono.interpreter.attributes.call(null,attrs46107):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46107))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46108 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46108))?sablono.interpreter.attributes.call(null,attrs46108):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46108))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46108)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46107),(function (){var attrs46109 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46109))?sablono.interpreter.attributes.call(null,attrs46109):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46109))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46109)], null))));
})()], null))));
})(),(function (){var attrs46110 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46110))?sablono.interpreter.attributes.call(null,attrs46110):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46110))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46111 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46111))?sablono.interpreter.attributes.call(null,attrs46111):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46111))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46111)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46110),(function (){var attrs46112 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46112))?sablono.interpreter.attributes.call(null,attrs46112):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46112))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46112)], null))));
})()], null))));
})(),(function (){var attrs46113 = clustermap.formats.money.fmoney.call(null,(function (){var G__46123 = self__.site_stats;var G__46123__$1 = (((G__46123 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46123));var G__46123__$2 = (((G__46123__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46123__$1));return G__46123__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46113))?sablono.interpreter.attributes.call(null,attrs46113):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46113))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46113),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46118 = clustermap.formats.number.fnum.call(null,(function (){var G__46124 = self__.site_stats;var G__46124__$1 = (((G__46124 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46124));var G__46124__$2 = (((G__46124__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46124__$1));return G__46124__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46118))?sablono.interpreter.attributes.call(null,attrs46118):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46118))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46118),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46100,map__46100__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46100,map__46100__$1,const_count,ic_count,pc_count){
return (function (_46103){var self__ = this;
var _46103__$1 = this;return self__.meta46102;
});})(map__46100,map__46100__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46100,map__46100__$1,const_count,ic_count,pc_count){
return (function (_46103,meta46102__$1){var self__ = this;
var _46103__$1 = this;return (new clustermap.components.map_report.t46101(self__.map__46100,self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta46102__$1));
});})(map__46100,map__46100__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46101 = ((function (map__46100,map__46100__$1,const_count,ic_count,pc_count){
return (function __GT_t46101(map__46100__$2,pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta46102){return (new clustermap.components.map_report.t46101(map__46100__$2,pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta46102));
});})(map__46100,map__46100__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46101(map__46100__$1,pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__46150 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46150__$1 = ((cljs.core.seq_QMARK_.call(null,map__46150))?cljs.core.apply.call(null,cljs.core.hash_map,map__46150):map__46150);var const_count = cljs.core.get.call(null,map__46150__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46150__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46150__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46151 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46151 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__46150,site_stats,meta46152){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__46150 = map__46150;
this.site_stats = site_stats;
this.meta46152 = meta46152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46151.cljs$lang$type = true;
clustermap.components.map_report.t46151.cljs$lang$ctorStr = "clustermap.components.map-report/t46151";
clustermap.components.map_report.t46151.cljs$lang$ctorPrWriter = ((function (map__46150,map__46150__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46151");
});})(map__46150,map__46150__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46151.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46151.prototype.om$core$IRender$render$arity$1 = ((function (map__46150,map__46150__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs46156 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46156))?sablono.interpreter.attributes.call(null,attrs46156):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46156))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46156)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46157 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46157))?sablono.interpreter.attributes.call(null,attrs46157):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46157))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46158 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46158))?sablono.interpreter.attributes.call(null,attrs46158):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46158))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46158)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46157),(function (){var attrs46159 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46159))?sablono.interpreter.attributes.call(null,attrs46159):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46159)], null))));
})()], null))));
})(),(function (){var attrs46160 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46160))?sablono.interpreter.attributes.call(null,attrs46160):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46160))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46161 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46161))?sablono.interpreter.attributes.call(null,attrs46161):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46161))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46161)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46160),(function (){var attrs46162 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46162))?sablono.interpreter.attributes.call(null,attrs46162):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46162))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46162)], null))));
})()], null))));
})(),(function (){var attrs46163 = clustermap.formats.money.fmoney.call(null,(function (){var G__46173 = self__.site_stats;var G__46173__$1 = (((G__46173 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46173));var G__46173__$2 = (((G__46173__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46173__$1));return G__46173__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46163))?sablono.interpreter.attributes.call(null,attrs46163):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46163))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46163),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46168 = clustermap.formats.number.fnum.call(null,(function (){var G__46174 = self__.site_stats;var G__46174__$1 = (((G__46174 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46174));var G__46174__$2 = (((G__46174__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46174__$1));return G__46174__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46168))?sablono.interpreter.attributes.call(null,attrs46168):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46168))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46168),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46150,map__46150__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46150,map__46150__$1,const_count,ic_count,pc_count){
return (function (_46153){var self__ = this;
var _46153__$1 = this;return self__.meta46152;
});})(map__46150,map__46150__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46150,map__46150__$1,const_count,ic_count,pc_count){
return (function (_46153,meta46152__$1){var self__ = this;
var _46153__$1 = this;return (new clustermap.components.map_report.t46151(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__46150,self__.site_stats,meta46152__$1));
});})(map__46150,map__46150__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46151 = ((function (map__46150,map__46150__$1,const_count,ic_count,pc_count){
return (function __GT_t46151(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__46150__$2,site_stats__$1,meta46152){return (new clustermap.components.map_report.t46151(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__46150__$2,site_stats__$1,meta46152));
});})(map__46150,map__46150__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46151(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__46150__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__46204 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__46204__$1 = ((cljs.core.seq_QMARK_.call(null,map__46204))?cljs.core.apply.call(null,cljs.core.hash_map,map__46204):map__46204);var const_count = cljs.core.get.call(null,map__46204__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__46204__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__46204__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t46205 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46205 = (function (pc_count,path_fn,map__46204,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta46206){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.map__46204 = map__46204;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta46206 = meta46206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46205.cljs$lang$type = true;
clustermap.components.map_report.t46205.cljs$lang$ctorStr = "clustermap.components.map-report/t46205";
clustermap.components.map_report.t46205.cljs$lang$ctorPrWriter = ((function (map__46204,map__46204__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.map-report/t46205");
});})(map__46204,map__46204__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46205.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t46205.prototype.om$core$IRender$render$arity$1 = ((function (map__46204,map__46204__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs46210 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46210))?sablono.interpreter.attributes.call(null,attrs46210):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46210))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46210),React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs46215 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46215))?sablono.interpreter.attributes.call(null,attrs46215):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46215))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46216 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46216))?sablono.interpreter.attributes.call(null,attrs46216):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46216))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46216)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46215),(function (){var attrs46217 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46217))?sablono.interpreter.attributes.call(null,attrs46217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46217)], null))));
})()], null))));
})(),(function (){var attrs46218 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46218))?sablono.interpreter.attributes.call(null,attrs46218):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46218))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs46219 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46219))?sablono.interpreter.attributes.call(null,attrs46219):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46219))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46219)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46218),(function (){var attrs46220 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs46220))?sablono.interpreter.attributes.call(null,attrs46220):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46220))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46220)], null))));
})()], null))));
})(),(function (){var attrs46221 = clustermap.formats.money.fmoney.call(null,(function (){var G__46231 = self__.site_stats;var G__46231__$1 = (((G__46231 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__46231));var G__46231__$2 = (((G__46231__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46231__$1));return G__46231__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46221))?sablono.interpreter.attributes.call(null,attrs46221):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46221))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46221),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46226 = clustermap.formats.number.fnum.call(null,(function (){var G__46232 = self__.site_stats;var G__46232__$1 = (((G__46232 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__46232));var G__46232__$2 = (((G__46232__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__46232__$1));return G__46232__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs46226))?sablono.interpreter.attributes.call(null,attrs46226):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46226))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46226),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__46204,map__46204__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46204,map__46204__$1,const_count,ic_count,pc_count){
return (function (_46207){var self__ = this;
var _46207__$1 = this;return self__.meta46206;
});})(map__46204,map__46204__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t46205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46204,map__46204__$1,const_count,ic_count,pc_count){
return (function (_46207,meta46206__$1){var self__ = this;
var _46207__$1 = this;return (new clustermap.components.map_report.t46205(self__.pc_count,self__.path_fn,self__.map__46204,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta46206__$1));
});})(map__46204,map__46204__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t46205 = ((function (map__46204,map__46204__$1,const_count,ic_count,pc_count){
return (function __GT_t46205(pc_count__$1,path_fn__$1,map__46204__$2,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta46206){return (new clustermap.components.map_report.t46205(pc_count__$1,path_fn__$1,map__46204__$2,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta46206));
});})(map__46204,map__46204__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t46205(pc_count,path_fn,map__46204__$1,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__46237 = om.core.get_shared.call(null,owner);var map__46237__$1 = ((cljs.core.seq_QMARK_.call(null,map__46237))?cljs.core.apply.call(null,cljs.core.hash_map,map__46237):map__46237);var view_path_fn = cljs.core.get.call(null,map__46237__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186));var path_fn = cljs.core.get.call(null,map__46237__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46237__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1014012110));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312).cljs$core$IFn$_invoke$arity$1(data);var pred__46238 = cljs.core._EQ__EQ_;var expr__46239 = type;if(cljs.core.truth_(pred__46238.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__46239)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__46238.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__46239)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__46238.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__46239)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
