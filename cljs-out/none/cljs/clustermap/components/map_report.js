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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__50238 = site_stats;var G__50238__$1 = (((G__50238 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__50238));return G__50238__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__50239 = site_stats;var G__50239__$1 = (((G__50239 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__50239));return G__50239__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__50240 = site_stats;var G__50240__$1 = (((G__50240 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__50240));return G__50240__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__50272 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50272__$1 = ((cljs.core.seq_QMARK_.call(null,map__50272))?cljs.core.apply.call(null,cljs.core.hash_map,map__50272):map__50272);var const_count = cljs.core.get.call(null,map__50272__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50272__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50272__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50273 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50273 = (function (pc_count,ic_count,const_count,map__50272,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta50274){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__50272 = map__50272;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta50274 = meta50274;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50273.cljs$lang$type = true;
clustermap.components.map_report.t50273.cljs$lang$ctorStr = "clustermap.components.map-report/t50273";
clustermap.components.map_report.t50273.cljs$lang$ctorPrWriter = ((function (map__50272,map__50272__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50273");
});})(map__50272,map__50272__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50273.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50273.prototype.om$core$IRender$render$arity$1 = ((function (map__50272,map__50272__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs50278 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50278))?sablono.interpreter.attributes.call(null,attrs50278):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50278))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50278),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs50283 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50283))?sablono.interpreter.attributes.call(null,attrs50283):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50283))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50283),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs50288 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50288))?sablono.interpreter.attributes.call(null,attrs50288):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50288))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50289 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50289))?sablono.interpreter.attributes.call(null,attrs50289):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50289))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50289)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50288),(function (){var attrs50290 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50290))?sablono.interpreter.attributes.call(null,attrs50290):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50290))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50290)], null))));
})()], null))));
})(),(function (){var attrs50291 = clustermap.formats.money.fmoney.call(null,(function (){var G__50301 = self__.site_stats;var G__50301__$1 = (((G__50301 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50301));var G__50301__$2 = (((G__50301__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50301__$1));return G__50301__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50291))?sablono.interpreter.attributes.call(null,attrs50291):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50291))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50291),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50296 = clustermap.formats.number.fnum.call(null,(function (){var G__50302 = self__.site_stats;var G__50302__$1 = (((G__50302 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50302));var G__50302__$2 = (((G__50302__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50302__$1));return G__50302__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50296))?sablono.interpreter.attributes.call(null,attrs50296):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50296))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50296),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50272,map__50272__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50273.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50272,map__50272__$1,const_count,ic_count,pc_count){
return (function (_50275){var self__ = this;
var _50275__$1 = this;return self__.meta50274;
});})(map__50272,map__50272__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50272,map__50272__$1,const_count,ic_count,pc_count){
return (function (_50275,meta50274__$1){var self__ = this;
var _50275__$1 = this;return (new clustermap.components.map_report.t50273(self__.pc_count,self__.ic_count,self__.const_count,self__.map__50272,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta50274__$1));
});})(map__50272,map__50272__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50273 = ((function (map__50272,map__50272__$1,const_count,ic_count,pc_count){
return (function __GT_t50273(pc_count__$1,ic_count__$1,const_count__$1,map__50272__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta50274){return (new clustermap.components.map_report.t50273(pc_count__$1,ic_count__$1,const_count__$1,map__50272__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta50274));
});})(map__50272,map__50272__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50273(pc_count,ic_count,const_count,map__50272__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__50328 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50328__$1 = ((cljs.core.seq_QMARK_.call(null,map__50328))?cljs.core.apply.call(null,cljs.core.hash_map,map__50328):map__50328);var const_count = cljs.core.get.call(null,map__50328__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50328__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50328__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50329 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50329 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__50328,view_path_fn,portfolio_company_report,site_stats,meta50330){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__50328 = map__50328;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta50330 = meta50330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50329.cljs$lang$type = true;
clustermap.components.map_report.t50329.cljs$lang$ctorStr = "clustermap.components.map-report/t50329";
clustermap.components.map_report.t50329.cljs$lang$ctorPrWriter = ((function (map__50328,map__50328__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50329");
});})(map__50328,map__50328__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50329.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50329.prototype.om$core$IRender$render$arity$1 = ((function (map__50328,map__50328__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs50334 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50334))?sablono.interpreter.attributes.call(null,attrs50334):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50334))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50334)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50335 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50335))?sablono.interpreter.attributes.call(null,attrs50335):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50335))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50336 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50336))?sablono.interpreter.attributes.call(null,attrs50336):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50336))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50336)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50335),(function (){var attrs50337 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50337))?sablono.interpreter.attributes.call(null,attrs50337):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50337))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50337)], null))));
})()], null))));
})(),(function (){var attrs50338 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50338))?sablono.interpreter.attributes.call(null,attrs50338):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50338))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50339 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50339))?sablono.interpreter.attributes.call(null,attrs50339):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50339))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50339)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50338),(function (){var attrs50340 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50340))?sablono.interpreter.attributes.call(null,attrs50340):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50340))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50340)], null))));
})()], null))));
})(),(function (){var attrs50341 = clustermap.formats.money.fmoney.call(null,(function (){var G__50351 = self__.site_stats;var G__50351__$1 = (((G__50351 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50351));var G__50351__$2 = (((G__50351__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50351__$1));return G__50351__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50341))?sablono.interpreter.attributes.call(null,attrs50341):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50341))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50341),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50346 = clustermap.formats.number.fnum.call(null,(function (){var G__50352 = self__.site_stats;var G__50352__$1 = (((G__50352 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50352));var G__50352__$2 = (((G__50352__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50352__$1));return G__50352__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50346))?sablono.interpreter.attributes.call(null,attrs50346):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50346))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50346),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50328,map__50328__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50328,map__50328__$1,const_count,ic_count,pc_count){
return (function (_50331){var self__ = this;
var _50331__$1 = this;return self__.meta50330;
});})(map__50328,map__50328__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50328,map__50328__$1,const_count,ic_count,pc_count){
return (function (_50331,meta50330__$1){var self__ = this;
var _50331__$1 = this;return (new clustermap.components.map_report.t50329(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.map__50328,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta50330__$1));
});})(map__50328,map__50328__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50329 = ((function (map__50328,map__50328__$1,const_count,ic_count,pc_count){
return (function __GT_t50329(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__50328__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta50330){return (new clustermap.components.map_report.t50329(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,map__50328__$2,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta50330));
});})(map__50328,map__50328__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50329(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,map__50328__$1,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__50378 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50378__$1 = ((cljs.core.seq_QMARK_.call(null,map__50378))?cljs.core.apply.call(null,cljs.core.hash_map,map__50378):map__50378);var const_count = cljs.core.get.call(null,map__50378__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50378__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50378__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50379 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50379 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__50378,comm,investor_company_report,view_path_fn,site_stats,meta50380){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__50378 = map__50378;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta50380 = meta50380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50379.cljs$lang$type = true;
clustermap.components.map_report.t50379.cljs$lang$ctorStr = "clustermap.components.map-report/t50379";
clustermap.components.map_report.t50379.cljs$lang$ctorPrWriter = ((function (map__50378,map__50378__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50379");
});})(map__50378,map__50378__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50379.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50379.prototype.om$core$IRender$render$arity$1 = ((function (map__50378,map__50378__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs50384 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50384))?sablono.interpreter.attributes.call(null,attrs50384):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50384))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50384)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50385 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50385))?sablono.interpreter.attributes.call(null,attrs50385):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50385))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50386 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50386))?sablono.interpreter.attributes.call(null,attrs50386):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50386))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50386)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50385),(function (){var attrs50387 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50387))?sablono.interpreter.attributes.call(null,attrs50387):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50387))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50387)], null))));
})()], null))));
})(),(function (){var attrs50388 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50388))?sablono.interpreter.attributes.call(null,attrs50388):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50388))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50389 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50389))?sablono.interpreter.attributes.call(null,attrs50389):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50389))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50389)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50388),(function (){var attrs50390 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50390))?sablono.interpreter.attributes.call(null,attrs50390):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50390))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50390)], null))));
})()], null))));
})(),(function (){var attrs50391 = clustermap.formats.money.fmoney.call(null,(function (){var G__50401 = self__.site_stats;var G__50401__$1 = (((G__50401 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50401));var G__50401__$2 = (((G__50401__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50401__$1));return G__50401__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50391))?sablono.interpreter.attributes.call(null,attrs50391):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50391))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50391),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50396 = clustermap.formats.number.fnum.call(null,(function (){var G__50402 = self__.site_stats;var G__50402__$1 = (((G__50402 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50402));var G__50402__$2 = (((G__50402__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50402__$1));return G__50402__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50396))?sablono.interpreter.attributes.call(null,attrs50396):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50396))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50396),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50378,map__50378__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50379.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50378,map__50378__$1,const_count,ic_count,pc_count){
return (function (_50381){var self__ = this;
var _50381__$1 = this;return self__.meta50380;
});})(map__50378,map__50378__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50378,map__50378__$1,const_count,ic_count,pc_count){
return (function (_50381,meta50380__$1){var self__ = this;
var _50381__$1 = this;return (new clustermap.components.map_report.t50379(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__50378,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta50380__$1));
});})(map__50378,map__50378__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50379 = ((function (map__50378,map__50378__$1,const_count,ic_count,pc_count){
return (function __GT_t50379(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__50378__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta50380){return (new clustermap.components.map_report.t50379(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__50378__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta50380));
});})(map__50378,map__50378__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50379(pc_count,path_fn,const_count,investor_company,ic_count,map__50378__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__50432 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__50432__$1 = ((cljs.core.seq_QMARK_.call(null,map__50432))?cljs.core.apply.call(null,cljs.core.hash_map,map__50432):map__50432);var const_count = cljs.core.get.call(null,map__50432__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__50432__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__50432__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t50433 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t50433 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__50432,site_stats,meta50434){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__50432 = map__50432;
this.site_stats = site_stats;
this.meta50434 = meta50434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t50433.cljs$lang$type = true;
clustermap.components.map_report.t50433.cljs$lang$ctorStr = "clustermap.components.map-report/t50433";
clustermap.components.map_report.t50433.cljs$lang$ctorPrWriter = ((function (map__50432,map__50432__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t50433");
});})(map__50432,map__50432__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50433.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t50433.prototype.om$core$IRender$render$arity$1 = ((function (map__50432,map__50432__$1,const_count,ic_count,pc_count){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs50438 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50438))?sablono.interpreter.attributes.call(null,attrs50438):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50438))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50438),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs50443 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50443))?sablono.interpreter.attributes.call(null,attrs50443):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50443))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50444 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50444))?sablono.interpreter.attributes.call(null,attrs50444):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50444))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50444)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50443),(function (){var attrs50445 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50445))?sablono.interpreter.attributes.call(null,attrs50445):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50445))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50445)], null))));
})()], null))));
})(),(function (){var attrs50446 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50446))?sablono.interpreter.attributes.call(null,attrs50446):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50446))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs50447 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50447))?sablono.interpreter.attributes.call(null,attrs50447):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50447))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50447)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50446),(function (){var attrs50448 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs50448))?sablono.interpreter.attributes.call(null,attrs50448):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50448))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50448)], null))));
})()], null))));
})(),(function (){var attrs50449 = clustermap.formats.money.fmoney.call(null,(function (){var G__50459 = self__.site_stats;var G__50459__$1 = (((G__50459 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__50459));var G__50459__$2 = (((G__50459__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50459__$1));return G__50459__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50449))?sablono.interpreter.attributes.call(null,attrs50449):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50449))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50449),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs50454 = clustermap.formats.number.fnum.call(null,(function (){var G__50460 = self__.site_stats;var G__50460__$1 = (((G__50460 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__50460));var G__50460__$2 = (((G__50460__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__50460__$1));return G__50460__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs50454))?sablono.interpreter.attributes.call(null,attrs50454):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50454))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50454),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__50432,map__50432__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50432,map__50432__$1,const_count,ic_count,pc_count){
return (function (_50435){var self__ = this;
var _50435__$1 = this;return self__.meta50434;
});})(map__50432,map__50432__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t50433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50432,map__50432__$1,const_count,ic_count,pc_count){
return (function (_50435,meta50434__$1){var self__ = this;
var _50435__$1 = this;return (new clustermap.components.map_report.t50433(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__50432,self__.site_stats,meta50434__$1));
});})(map__50432,map__50432__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t50433 = ((function (map__50432,map__50432__$1,const_count,ic_count,pc_count){
return (function __GT_t50433(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__50432__$2,site_stats__$1,meta50434){return (new clustermap.components.map_report.t50433(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__50432__$2,site_stats__$1,meta50434));
});})(map__50432,map__50432__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t50433(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__50432__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__50465 = om.core.get_shared.call(null,owner);var map__50465__$1 = ((cljs.core.seq_QMARK_.call(null,map__50465))?cljs.core.apply.call(null,cljs.core.hash_map,map__50465):map__50465);var view_path_fn = cljs.core.get.call(null,map__50465__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__50465__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50465__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__50466 = cljs.core._EQ__EQ_;var expr__50467 = type;if(cljs.core.truth_(pred__50466.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__50467)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__50466.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__50467)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__50466.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__50467)))
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