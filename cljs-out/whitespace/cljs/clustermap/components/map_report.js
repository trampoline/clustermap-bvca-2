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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__12777 = site_stats;var G__12777__$1 = (((G__12777 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__12777));return G__12777__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__12778 = site_stats;var G__12778__$1 = (((G__12778 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__12778));return G__12778__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__12779 = site_stats;var G__12779__$1 = (((G__12779 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__12779));return G__12779__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__12811 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12811__$1 = ((cljs.core.seq_QMARK_.call(null,map__12811))?cljs.core.apply.call(null,cljs.core.hash_map,map__12811):map__12811);var const_count = cljs.core.get.call(null,map__12811__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__12811__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__12811__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t12812 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12812 = (function (pc_count,ic_count,const_count,map__12811,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta12813){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12811 = map__12811;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12813 = meta12813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12812.cljs$lang$type = true;
clustermap.components.map_report.t12812.cljs$lang$ctorStr = "clustermap.components.map-report/t12812";
clustermap.components.map_report.t12812.cljs$lang$ctorPrWriter = ((function (map__12811,map__12811__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t12812");
});})(map__12811,map__12811__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12812.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12812.prototype.om$core$IRender$render$arity$1 = ((function (map__12811,map__12811__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12817 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12817))?sablono.interpreter.attributes.call(null,attrs12817):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12817))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12817),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs12822 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12822))?sablono.interpreter.attributes.call(null,attrs12822):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12822))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12822),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs12827 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12827))?sablono.interpreter.attributes.call(null,attrs12827):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12827))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12828 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12828))?sablono.interpreter.attributes.call(null,attrs12828):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12828))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12828)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12827),(function (){var attrs12829 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12829))?sablono.interpreter.attributes.call(null,attrs12829):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12829))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12829)], null))));
})()], null))));
})(),(function (){var attrs12830 = clustermap.formats.money.fmoney.call(null,(function (){var G__12840 = self__.site_stats;var G__12840__$1 = (((G__12840 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__12840));var G__12840__$2 = (((G__12840__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12840__$1));return G__12840__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12830))?sablono.interpreter.attributes.call(null,attrs12830):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12830))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12830),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12835 = clustermap.formats.number.fnum.call(null,(function (){var G__12841 = self__.site_stats;var G__12841__$1 = (((G__12841 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__12841));var G__12841__$2 = (((G__12841__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12841__$1));return G__12841__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12835))?sablono.interpreter.attributes.call(null,attrs12835):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12835))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12835),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12811,map__12811__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12811,map__12811__$1,const_count,ic_count,pc_count){
return (function (_12814){var self__ = this;
var _12814__$1 = this;return self__.meta12813;
});})(map__12811,map__12811__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12811,map__12811__$1,const_count,ic_count,pc_count){
return (function (_12814,meta12813__$1){var self__ = this;
var _12814__$1 = this;return (new clustermap.components.map_report.t12812(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12811,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12813__$1));
});})(map__12811,map__12811__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12812 = ((function (map__12811,map__12811__$1,const_count,ic_count,pc_count){
return (function __GT_t12812(pc_count__$1,ic_count__$1,const_count__$1,map__12811__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12813){return (new clustermap.components.map_report.t12812(pc_count__$1,ic_count__$1,const_count__$1,map__12811__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12813));
});})(map__12811,map__12811__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12812(pc_count,ic_count,const_count,map__12811__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__12867 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12867__$1 = ((cljs.core.seq_QMARK_.call(null,map__12867))?cljs.core.apply.call(null,cljs.core.hash_map,map__12867):map__12867);var const_count = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__12867__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t12868 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12868 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__12867,portfolio_company_report,site_stats,meta12869){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__12867 = map__12867;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta12869 = meta12869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12868.cljs$lang$type = true;
clustermap.components.map_report.t12868.cljs$lang$ctorStr = "clustermap.components.map-report/t12868";
clustermap.components.map_report.t12868.cljs$lang$ctorPrWriter = ((function (map__12867,map__12867__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t12868");
});})(map__12867,map__12867__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12868.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12868.prototype.om$core$IRender$render$arity$1 = ((function (map__12867,map__12867__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs12873 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12873))?sablono.interpreter.attributes.call(null,attrs12873):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12873))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12873)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12874 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12874))?sablono.interpreter.attributes.call(null,attrs12874):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12874))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12875 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12875))?sablono.interpreter.attributes.call(null,attrs12875):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12875))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12875)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12874),(function (){var attrs12876 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12876))?sablono.interpreter.attributes.call(null,attrs12876):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12876))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12876)], null))));
})()], null))));
})(),(function (){var attrs12877 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12877))?sablono.interpreter.attributes.call(null,attrs12877):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12877))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12878 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12878))?sablono.interpreter.attributes.call(null,attrs12878):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12878))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12878)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12877),(function (){var attrs12879 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12879))?sablono.interpreter.attributes.call(null,attrs12879):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12879))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12879)], null))));
})()], null))));
})(),(function (){var attrs12880 = clustermap.formats.money.fmoney.call(null,(function (){var G__12890 = self__.site_stats;var G__12890__$1 = (((G__12890 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__12890));var G__12890__$2 = (((G__12890__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12890__$1));return G__12890__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12880))?sablono.interpreter.attributes.call(null,attrs12880):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12880))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12880),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12885 = clustermap.formats.number.fnum.call(null,(function (){var G__12891 = self__.site_stats;var G__12891__$1 = (((G__12891 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__12891));var G__12891__$2 = (((G__12891__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12891__$1));return G__12891__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12885))?sablono.interpreter.attributes.call(null,attrs12885):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12885))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12885),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12867,map__12867__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12867,map__12867__$1,const_count,ic_count,pc_count){
return (function (_12870){var self__ = this;
var _12870__$1 = this;return self__.meta12869;
});})(map__12867,map__12867__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12867,map__12867__$1,const_count,ic_count,pc_count){
return (function (_12870,meta12869__$1){var self__ = this;
var _12870__$1 = this;return (new clustermap.components.map_report.t12868(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__12867,self__.portfolio_company_report,self__.site_stats,meta12869__$1));
});})(map__12867,map__12867__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12868 = ((function (map__12867,map__12867__$1,const_count,ic_count,pc_count){
return (function __GT_t12868(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__12867__$2,portfolio_company_report__$1,site_stats__$1,meta12869){return (new clustermap.components.map_report.t12868(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__12867__$2,portfolio_company_report__$1,site_stats__$1,meta12869));
});})(map__12867,map__12867__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12868(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__12867__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__12917 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12917__$1 = ((cljs.core.seq_QMARK_.call(null,map__12917))?cljs.core.apply.call(null,cljs.core.hash_map,map__12917):map__12917);var const_count = cljs.core.get.call(null,map__12917__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__12917__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__12917__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t12918 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12918 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__12917,comm,investor_company_report,view_path_fn,site_stats,meta12919){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__12917 = map__12917;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta12919 = meta12919;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12918.cljs$lang$type = true;
clustermap.components.map_report.t12918.cljs$lang$ctorStr = "clustermap.components.map-report/t12918";
clustermap.components.map_report.t12918.cljs$lang$ctorPrWriter = ((function (map__12917,map__12917__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t12918");
});})(map__12917,map__12917__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12918.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12918.prototype.om$core$IRender$render$arity$1 = ((function (map__12917,map__12917__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs12923 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12923))?sablono.interpreter.attributes.call(null,attrs12923):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12923))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12923)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12924 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12924))?sablono.interpreter.attributes.call(null,attrs12924):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12924))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12925 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12925))?sablono.interpreter.attributes.call(null,attrs12925):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12925))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12925)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12924),(function (){var attrs12926 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12926))?sablono.interpreter.attributes.call(null,attrs12926):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12926))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12926)], null))));
})()], null))));
})(),(function (){var attrs12927 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12927))?sablono.interpreter.attributes.call(null,attrs12927):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12927))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12928 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12928))?sablono.interpreter.attributes.call(null,attrs12928):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12928))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12928)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12927),(function (){var attrs12929 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12929))?sablono.interpreter.attributes.call(null,attrs12929):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12929))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12929)], null))));
})()], null))));
})(),(function (){var attrs12930 = clustermap.formats.money.fmoney.call(null,(function (){var G__12940 = self__.site_stats;var G__12940__$1 = (((G__12940 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__12940));var G__12940__$2 = (((G__12940__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12940__$1));return G__12940__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12930))?sablono.interpreter.attributes.call(null,attrs12930):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12930))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12930),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12935 = clustermap.formats.number.fnum.call(null,(function (){var G__12941 = self__.site_stats;var G__12941__$1 = (((G__12941 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__12941));var G__12941__$2 = (((G__12941__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12941__$1));return G__12941__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12935))?sablono.interpreter.attributes.call(null,attrs12935):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12935))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12935),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12917,map__12917__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12917,map__12917__$1,const_count,ic_count,pc_count){
return (function (_12920){var self__ = this;
var _12920__$1 = this;return self__.meta12919;
});})(map__12917,map__12917__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12917,map__12917__$1,const_count,ic_count,pc_count){
return (function (_12920,meta12919__$1){var self__ = this;
var _12920__$1 = this;return (new clustermap.components.map_report.t12918(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__12917,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta12919__$1));
});})(map__12917,map__12917__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12918 = ((function (map__12917,map__12917__$1,const_count,ic_count,pc_count){
return (function __GT_t12918(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__12917__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta12919){return (new clustermap.components.map_report.t12918(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__12917__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta12919));
});})(map__12917,map__12917__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12918(pc_count,path_fn,const_count,investor_company,ic_count,map__12917__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__12971 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12971__$1 = ((cljs.core.seq_QMARK_.call(null,map__12971))?cljs.core.apply.call(null,cljs.core.hash_map,map__12971):map__12971);var const_count = cljs.core.get.call(null,map__12971__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__12971__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__12971__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t12972 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12972 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__12971,view_path_fn,site_stats,meta12973){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.map__12971 = map__12971;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta12973 = meta12973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12972.cljs$lang$type = true;
clustermap.components.map_report.t12972.cljs$lang$ctorStr = "clustermap.components.map-report/t12972";
clustermap.components.map_report.t12972.cljs$lang$ctorPrWriter = ((function (map__12971,map__12971__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t12972");
});})(map__12971,map__12971__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12972.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12972.prototype.om$core$IRender$render$arity$1 = ((function (map__12971,map__12971__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs12977 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs12977))?sablono.interpreter.attributes.call(null,attrs12977):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12977))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12977),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs12982 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12982))?sablono.interpreter.attributes.call(null,attrs12982):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12982))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12983 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12983))?sablono.interpreter.attributes.call(null,attrs12983):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12983))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12983)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12982),(function (){var attrs12984 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12984))?sablono.interpreter.attributes.call(null,attrs12984):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12984))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12984)], null))));
})()], null))));
})(),(function (){var attrs12985 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12985))?sablono.interpreter.attributes.call(null,attrs12985):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12985))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs12986 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12986))?sablono.interpreter.attributes.call(null,attrs12986):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12986))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12986)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12985),(function (){var attrs12987 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs12987))?sablono.interpreter.attributes.call(null,attrs12987):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12987))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12987)], null))));
})()], null))));
})(),(function (){var attrs12988 = clustermap.formats.money.fmoney.call(null,(function (){var G__12998 = self__.site_stats;var G__12998__$1 = (((G__12998 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__12998));var G__12998__$2 = (((G__12998__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12998__$1));return G__12998__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12988))?sablono.interpreter.attributes.call(null,attrs12988):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12988))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12988),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs12993 = clustermap.formats.number.fnum.call(null,(function (){var G__12999 = self__.site_stats;var G__12999__$1 = (((G__12999 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__12999));var G__12999__$2 = (((G__12999__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__12999__$1));return G__12999__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs12993))?sablono.interpreter.attributes.call(null,attrs12993):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs12993))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs12993),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__12971,map__12971__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12971,map__12971__$1,const_count,ic_count,pc_count){
return (function (_12974){var self__ = this;
var _12974__$1 = this;return self__.meta12973;
});})(map__12971,map__12971__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t12972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12971,map__12971__$1,const_count,ic_count,pc_count){
return (function (_12974,meta12973__$1){var self__ = this;
var _12974__$1 = this;return (new clustermap.components.map_report.t12972(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.map__12971,self__.view_path_fn,self__.site_stats,meta12973__$1));
});})(map__12971,map__12971__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t12972 = ((function (map__12971,map__12971__$1,const_count,ic_count,pc_count){
return (function __GT_t12972(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__12971__$2,view_path_fn__$1,site_stats__$1,meta12973){return (new clustermap.components.map_report.t12972(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__12971__$2,view_path_fn__$1,site_stats__$1,meta12973));
});})(map__12971,map__12971__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t12972(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__12971__$1,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__13004 = om.core.get_shared.call(null,owner);var map__13004__$1 = ((cljs.core.seq_QMARK_.call(null,map__13004))?cljs.core.apply.call(null,cljs.core.hash_map,map__13004):map__13004);var view_path_fn = cljs.core.get.call(null,map__13004__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13004__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13004__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__13005 = cljs.core._EQ__EQ_;var expr__13006 = type;if(cljs.core.truth_(pred__13005.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13006)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13005.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13006)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__13005.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13006)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
