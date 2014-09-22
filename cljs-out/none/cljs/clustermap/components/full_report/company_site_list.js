// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__13259){var map__13268 = p__13259;var map__13268__$1 = ((cljs.core.seq_QMARK_.call(null,map__13268))?cljs.core.apply.call(null,cljs.core.hash_map,map__13268):map__13268);var opts = map__13268__$1;var path_fn = cljs.core.get.call(null,map__13268__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13268__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t13269 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t13269 = (function (company_path,link_fn,path_fn,opts,map__13268,p__13259,owner,investment,meta13270){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__13268 = map__13268;
this.p__13259 = p__13259;
this.owner = owner;
this.investment = investment;
this.meta13270 = meta13270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t13269.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t13269.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t13269";
clustermap.components.full_report.company_site_list.t13269.cljs$lang$ctorPrWriter = ((function (company_path,map__13268,map__13268__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-site-list/t13269");
});})(company_path,map__13268,map__13268__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13269.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t13269.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__13268,map__13268__$1,opts,path_fn,link_fn){
return (function (this__9532__auto__){var self__ = this;
var this__9532__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs13272 = new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",-2036426038).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13272))?sablono.interpreter.attributes.call(null,attrs13272):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13272)], null))));
})(),(function (){var attrs13273 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",-609404017).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13273))?sablono.interpreter.attributes.call(null,attrs13273):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13273))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13273)], null))));
})(),(function (){var attrs13274 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",-1841760435).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13274))?sablono.interpreter.attributes.call(null,attrs13274):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13274))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13274)], null))));
})(),(function (){var attrs13275 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",-523364293).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13275))?sablono.interpreter.attributes.call(null,attrs13275):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13275))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13275)], null))));
})());
});})(company_path,map__13268,map__13268__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__13268,map__13268__$1,opts,path_fn,link_fn){
return (function (_13271){var self__ = this;
var _13271__$1 = this;return self__.meta13270;
});})(company_path,map__13268,map__13268__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__13268,map__13268__$1,opts,path_fn,link_fn){
return (function (_13271,meta13270__$1){var self__ = this;
var _13271__$1 = this;return (new clustermap.components.full_report.company_site_list.t13269(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__13268,self__.p__13259,self__.owner,self__.investment,meta13270__$1));
});})(company_path,map__13268,map__13268__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t13269 = ((function (company_path,map__13268,map__13268__$1,opts,path_fn,link_fn){
return (function __GT_t13269(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13268__$2,p__13259__$1,owner__$1,investment__$2,meta13270){return (new clustermap.components.full_report.company_site_list.t13269(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13268__$2,p__13259__$1,owner__$1,investment__$2,meta13270));
});})(company_path,map__13268,map__13268__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t13269(company_path,link_fn,path_fn,opts,map__13268__$1,p__13259,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_site_list.t13290 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t13290 = (function (comm,opts,owner,investments,company_site_list,meta13291){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta13291 = meta13291;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t13290.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t13290.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t13290";
clustermap.components.full_report.company_site_list.t13290.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-site-list/t13290");
});})(comm))
;
clustermap.components.full_report.company_site_list.t13290.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t13290.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9532__auto__){var self__ = this;
var this__9532__auto____$1 = this;var attrs13293 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13293))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs13293)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13293))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13294 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13294))?sablono.interpreter.attributes.call(null,attrs13294):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13294))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13294)], null))));
})(),(function (){var attrs13295 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13295))?sablono.interpreter.attributes.call(null,attrs13295):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13295))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13295)], null))));
})(),(function (){var attrs13296 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13296))?sablono.interpreter.attributes.call(null,attrs13296):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13296))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13296)], null))));
})(),(function (){var attrs13297 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13297))?sablono.interpreter.attributes.call(null,attrs13297):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13297))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13297)], null))));
})())),(function (){var attrs13298 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13298))?sablono.interpreter.attributes.call(null,attrs13298):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13298))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13298)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13293),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13299 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13299))?sablono.interpreter.attributes.call(null,attrs13299):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13299))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13299)], null))));
})(),(function (){var attrs13300 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13300))?sablono.interpreter.attributes.call(null,attrs13300):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13300))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13300)], null))));
})(),(function (){var attrs13301 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13301))?sablono.interpreter.attributes.call(null,attrs13301):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13301))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13301)], null))));
})(),(function (){var attrs13302 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13302))?sablono.interpreter.attributes.call(null,attrs13302):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13302))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13302)], null))));
})())),(function (){var attrs13303 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13303))?sablono.interpreter.attributes.call(null,attrs13303):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13303))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13303)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t13290.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_13292){var self__ = this;
var _13292__$1 = this;return self__.meta13291;
});})(comm))
;
clustermap.components.full_report.company_site_list.t13290.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_13292,meta13291__$1){var self__ = this;
var _13292__$1 = this;return (new clustermap.components.full_report.company_site_list.t13290(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta13291__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t13290 = ((function (comm){
return (function __GT_t13290(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta13291){return (new clustermap.components.full_report.company_site_list.t13290(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta13291));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t13290(comm,opts,owner,investments,company_site_list,null));
});

//# sourceMappingURL=company_site_list.js.map