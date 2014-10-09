// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.full_report.company_list');
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs61454 = link_fn.call(null,type,first_obj);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs61454))?sablono.interpreter.attributes.call(null,attrs61454):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61454))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61454),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__61463){var map__61476 = p__61463;var map__61476__$1 = ((cljs.core.seq_QMARK_.call(null,map__61476))?cljs.core.apply.call(null,cljs.core.hash_map,map__61476):map__61476);var opts = map__61476__$1;var path_fn = cljs.core.get.call(null,map__61476__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__61476__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),company);if(typeof clustermap.components.full_report.company_list.t61477 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t61477 = (function (company_path,link_fn,path_fn,opts,map__61476,p__61463,owner,company,portfolio_company,meta61478){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__61476 = map__61476;
this.p__61463 = p__61463;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta61478 = meta61478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t61477.cljs$lang$type = true;
clustermap.components.full_report.company_list.t61477.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t61477";
clustermap.components.full_report.company_list.t61477.cljs$lang$ctorPrWriter = ((function (company_path,map__61476,map__61476__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-list/t61477");
});})(company_path,map__61476,map__61476__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t61477.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t61477.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__61476,map__61476__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs61480 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),self__.company);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs61480))?sablono.interpreter.attributes.call(null,attrs61480):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61480))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61480)], null))));
})(),(function (){var attrs61481 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs61481))?sablono.interpreter.attributes.call(null,attrs61481):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61481))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61481)], null))));
})(),(function (){var attrs61482 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",1803637324),(function (){var G__61487 = self__.company;var G__61487__$1 = (((G__61487 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708).cljs$core$IFn$_invoke$arity$1(G__61487));var G__61487__$2 = (((G__61487__$1 == null))?null:cljs.core.filter.call(null,((function (G__61487,G__61487__$1,this__9504__auto____$1,company_path,map__61476,map__61476__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__61487,G__61487__$1,this__9504__auto____$1,company_path,map__61476,map__61476__$1,opts,path_fn,link_fn))
,G__61487__$1));return G__61487__$2;
})());return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs61482))?sablono.interpreter.attributes.call(null,attrs61482):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61482))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61482)], null))));
})(),(function (){var attrs61483 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs61483))?sablono.interpreter.attributes.call(null,attrs61483):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61483))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61483),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs61484 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs61484))?sablono.interpreter.attributes.call(null,attrs61484):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61484))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61484)], null))));
})(),(function (){var attrs61485 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs61485))?sablono.interpreter.attributes.call(null,attrs61485):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61485))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61485)], null))));
})(),(function (){var attrs61486 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs61486))?sablono.interpreter.attributes.call(null,attrs61486):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61486))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61486),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3558__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__61476,map__61476__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t61477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__61476,map__61476__$1,opts,path_fn,link_fn){
return (function (_61479){var self__ = this;
var _61479__$1 = this;return self__.meta61478;
});})(company_path,map__61476,map__61476__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t61477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__61476,map__61476__$1,opts,path_fn,link_fn){
return (function (_61479,meta61478__$1){var self__ = this;
var _61479__$1 = this;return (new clustermap.components.full_report.company_list.t61477(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__61476,self__.p__61463,self__.owner,self__.company,self__.portfolio_company,meta61478__$1));
});})(company_path,map__61476,map__61476__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t61477 = ((function (company_path,map__61476,map__61476__$1,opts,path_fn,link_fn){
return (function __GT_t61477(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__61476__$2,p__61463__$1,owner__$1,company__$1,portfolio_company__$1,meta61478){return (new clustermap.components.full_report.company_list.t61477(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__61476__$2,p__61463__$1,owner__$1,company__$1,portfolio_company__$1,meta61478));
});})(company_path,map__61476,map__61476__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t61477(company_path,link_fn,path_fn,opts,map__61476__$1,p__61463,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_list.t61508 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t61508 = (function (comm,opts,owner,companies,company_list,meta61509){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta61509 = meta61509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t61508.cljs$lang$type = true;
clustermap.components.full_report.company_list.t61508.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t61508";
clustermap.components.full_report.company_list.t61508.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.full-report.company-list/t61508");
});})(comm))
;
clustermap.components.full_report.company_list.t61508.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t61508.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs61511 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs61511))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs61511)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61511))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs61512 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs61512))?sablono.interpreter.attributes.call(null,attrs61512):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61512))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61512)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs61517 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs61517))?sablono.interpreter.attributes.call(null,attrs61517):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61517))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61517)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs61518 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs61518))?sablono.interpreter.attributes.call(null,attrs61518):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61518))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61518)], null))));
})())),(function (){var attrs61519 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs61519))?sablono.interpreter.attributes.call(null,attrs61519):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61519))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61519)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61511),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs61520 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs61520))?sablono.interpreter.attributes.call(null,attrs61520):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61520))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61520)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs61525 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs61525))?sablono.interpreter.attributes.call(null,attrs61525):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61525))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61525)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs61526 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs61526))?sablono.interpreter.attributes.call(null,attrs61526):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61526))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61526)], null))));
})())),(function (){var attrs61527 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs61527))?sablono.interpreter.attributes.call(null,attrs61527):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs61527))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs61527)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t61508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_61510){var self__ = this;
var _61510__$1 = this;return self__.meta61509;
});})(comm))
;
clustermap.components.full_report.company_list.t61508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_61510,meta61509__$1){var self__ = this;
var _61510__$1 = this;return (new clustermap.components.full_report.company_list.t61508(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta61509__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t61508 = ((function (comm){
return (function __GT_t61508(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta61509){return (new clustermap.components.full_report.company_list.t61508(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta61509));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t61508(comm,opts,owner,companies,company_list,null));
});

//# sourceMappingURL=company_list.js.map