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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__31689){var map__31698 = p__31689;var map__31698__$1 = ((cljs.core.seq_QMARK_.call(null,map__31698))?cljs.core.apply.call(null,cljs.core.hash_map,map__31698):map__31698);var opts = map__31698__$1;var path_fn = cljs.core.get.call(null,map__31698__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__31698__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t31699 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t31699 = (function (company_path,link_fn,path_fn,opts,map__31698,p__31689,owner,investment,meta31700){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__31698 = map__31698;
this.p__31689 = p__31689;
this.owner = owner;
this.investment = investment;
this.meta31700 = meta31700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t31699.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t31699.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t31699";
clustermap.components.full_report.company_site_list.t31699.cljs$lang$ctorPrWriter = ((function (company_path,map__31698,map__31698__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-site-list/t31699");
});})(company_path,map__31698,map__31698__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t31699.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t31699.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__31698,map__31698__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs31702 = new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",-2036426038).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs31702))?sablono.interpreter.attributes.call(null,attrs31702):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31702))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31702)], null))));
})(),(function (){var attrs31703 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",-609404017).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs31703))?sablono.interpreter.attributes.call(null,attrs31703):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31703))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31703)], null))));
})(),(function (){var attrs31704 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",-1841760435).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs31704))?sablono.interpreter.attributes.call(null,attrs31704):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31704))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31704)], null))));
})(),(function (){var attrs31705 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",-523364293).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs31705))?sablono.interpreter.attributes.call(null,attrs31705):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31705))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31705)], null))));
})());
});})(company_path,map__31698,map__31698__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t31699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__31698,map__31698__$1,opts,path_fn,link_fn){
return (function (_31701){var self__ = this;
var _31701__$1 = this;return self__.meta31700;
});})(company_path,map__31698,map__31698__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t31699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__31698,map__31698__$1,opts,path_fn,link_fn){
return (function (_31701,meta31700__$1){var self__ = this;
var _31701__$1 = this;return (new clustermap.components.full_report.company_site_list.t31699(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__31698,self__.p__31689,self__.owner,self__.investment,meta31700__$1));
});})(company_path,map__31698,map__31698__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t31699 = ((function (company_path,map__31698,map__31698__$1,opts,path_fn,link_fn){
return (function __GT_t31699(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__31698__$2,p__31689__$1,owner__$1,investment__$2,meta31700){return (new clustermap.components.full_report.company_site_list.t31699(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__31698__$2,p__31689__$1,owner__$1,investment__$2,meta31700));
});})(company_path,map__31698,map__31698__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t31699(company_path,link_fn,path_fn,opts,map__31698__$1,p__31689,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_site_list.t31720 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t31720 = (function (comm,opts,owner,investments,company_site_list,meta31721){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta31721 = meta31721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t31720.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t31720.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t31720";
clustermap.components.full_report.company_site_list.t31720.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-site-list/t31720");
});})(comm))
;
clustermap.components.full_report.company_site_list.t31720.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t31720.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs31723 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs31723))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs31723)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31723))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs31724 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31724))?sablono.interpreter.attributes.call(null,attrs31724):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31724))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31724)], null))));
})(),(function (){var attrs31725 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31725))?sablono.interpreter.attributes.call(null,attrs31725):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31725))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31725)], null))));
})(),(function (){var attrs31726 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31726))?sablono.interpreter.attributes.call(null,attrs31726):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31726))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31726)], null))));
})(),(function (){var attrs31727 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31727))?sablono.interpreter.attributes.call(null,attrs31727):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31727)], null))));
})())),(function (){var attrs31728 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs31728))?sablono.interpreter.attributes.call(null,attrs31728):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31728))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31728)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31723),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs31729 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31729))?sablono.interpreter.attributes.call(null,attrs31729):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31729))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31729)], null))));
})(),(function (){var attrs31730 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31730))?sablono.interpreter.attributes.call(null,attrs31730):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31730))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31730)], null))));
})(),(function (){var attrs31731 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31731))?sablono.interpreter.attributes.call(null,attrs31731):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31731))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31731)], null))));
})(),(function (){var attrs31732 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs31732))?sablono.interpreter.attributes.call(null,attrs31732):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31732))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31732)], null))));
})())),(function (){var attrs31733 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs31733))?sablono.interpreter.attributes.call(null,attrs31733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs31733))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs31733)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t31720.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_31722){var self__ = this;
var _31722__$1 = this;return self__.meta31721;
});})(comm))
;
clustermap.components.full_report.company_site_list.t31720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_31722,meta31721__$1){var self__ = this;
var _31722__$1 = this;return (new clustermap.components.full_report.company_site_list.t31720(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta31721__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t31720 = ((function (comm){
return (function __GT_t31720(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta31721){return (new clustermap.components.full_report.company_site_list.t31720(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta31721));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t31720(comm,opts,owner,investments,company_site_list,null));
});
