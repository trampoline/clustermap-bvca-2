// Compiled by ClojureScript 0.0-2268
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
{var attrs49751 = link_fn.call(null,type,first_obj);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs49751))?sablono.interpreter.attributes.call(null,attrs49751):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49751))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49751),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__49760){var map__49773 = p__49760;var map__49773__$1 = ((cljs.core.seq_QMARK_.call(null,map__49773))?cljs.core.apply.call(null,cljs.core.hash_map,map__49773):map__49773);var opts = map__49773__$1;var path_fn = cljs.core.get.call(null,map__49773__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__49773__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),company);if(typeof clustermap.components.full_report.company_list.t49774 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t49774 = (function (company_path,link_fn,path_fn,opts,map__49773,p__49760,owner,company,portfolio_company,meta49775){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__49773 = map__49773;
this.p__49760 = p__49760;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta49775 = meta49775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t49774.cljs$lang$type = true;
clustermap.components.full_report.company_list.t49774.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t49774";
clustermap.components.full_report.company_list.t49774.cljs$lang$ctorPrWriter = ((function (company_path,map__49773,map__49773__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.company-list/t49774");
});})(company_path,map__49773,map__49773__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t49774.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t49774.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__49773,map__49773__$1,opts,path_fn,link_fn){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs49777 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),self__.company);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs49777))?sablono.interpreter.attributes.call(null,attrs49777):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49777))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49777)], null))));
})(),(function (){var attrs49778 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs49778))?sablono.interpreter.attributes.call(null,attrs49778):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49778))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49778)], null))));
})(),(function (){var attrs49779 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",1803637324),(function (){var G__49784 = self__.company;var G__49784__$1 = (((G__49784 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708).cljs$core$IFn$_invoke$arity$1(G__49784));var G__49784__$2 = (((G__49784__$1 == null))?null:cljs.core.filter.call(null,((function (G__49784,G__49784__$1,this__9490__auto____$1,company_path,map__49773,map__49773__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__49784,G__49784__$1,this__9490__auto____$1,company_path,map__49773,map__49773__$1,opts,path_fn,link_fn))
,G__49784__$1));return G__49784__$2;
})());return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs49779))?sablono.interpreter.attributes.call(null,attrs49779):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49779))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49779)], null))));
})(),(function (){var attrs49780 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs49780))?sablono.interpreter.attributes.call(null,attrs49780):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49780))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49780),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs49781 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs49781))?sablono.interpreter.attributes.call(null,attrs49781):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49781))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49781)], null))));
})(),(function (){var attrs49782 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs49782))?sablono.interpreter.attributes.call(null,attrs49782):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49782))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49782)], null))));
})(),(function (){var attrs49783 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs49783))?sablono.interpreter.attributes.call(null,attrs49783):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49783))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49783),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__49773,map__49773__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t49774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__49773,map__49773__$1,opts,path_fn,link_fn){
return (function (_49776){var self__ = this;
var _49776__$1 = this;return self__.meta49775;
});})(company_path,map__49773,map__49773__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t49774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__49773,map__49773__$1,opts,path_fn,link_fn){
return (function (_49776,meta49775__$1){var self__ = this;
var _49776__$1 = this;return (new clustermap.components.full_report.company_list.t49774(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__49773,self__.p__49760,self__.owner,self__.company,self__.portfolio_company,meta49775__$1));
});})(company_path,map__49773,map__49773__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t49774 = ((function (company_path,map__49773,map__49773__$1,opts,path_fn,link_fn){
return (function __GT_t49774(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__49773__$2,p__49760__$1,owner__$1,company__$1,portfolio_company__$1,meta49775){return (new clustermap.components.full_report.company_list.t49774(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__49773__$2,p__49760__$1,owner__$1,company__$1,portfolio_company__$1,meta49775));
});})(company_path,map__49773,map__49773__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t49774(company_path,link_fn,path_fn,opts,map__49773__$1,p__49760,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_list.t49805 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t49805 = (function (comm,opts,owner,companies,company_list,meta49806){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta49806 = meta49806;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t49805.cljs$lang$type = true;
clustermap.components.full_report.company_list.t49805.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t49805";
clustermap.components.full_report.company_list.t49805.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.company-list/t49805");
});})(comm))
;
clustermap.components.full_report.company_list.t49805.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t49805.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;var attrs49808 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs49808))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs49808)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49808))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs49809 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs49809))?sablono.interpreter.attributes.call(null,attrs49809):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49809))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49809)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs49814 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs49814))?sablono.interpreter.attributes.call(null,attrs49814):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49814))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49814)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs49815 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs49815))?sablono.interpreter.attributes.call(null,attrs49815):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49815))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49815)], null))));
})())),(function (){var attrs49816 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs49816))?sablono.interpreter.attributes.call(null,attrs49816):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49816))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49816)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49808),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs49817 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs49817))?sablono.interpreter.attributes.call(null,attrs49817):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49817))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49817)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs49822 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs49822))?sablono.interpreter.attributes.call(null,attrs49822):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49822))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49822)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs49823 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs49823))?sablono.interpreter.attributes.call(null,attrs49823):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49823))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49823)], null))));
})())),(function (){var attrs49824 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs49824))?sablono.interpreter.attributes.call(null,attrs49824):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49824))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49824)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t49805.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_49807){var self__ = this;
var _49807__$1 = this;return self__.meta49806;
});})(comm))
;
clustermap.components.full_report.company_list.t49805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_49807,meta49806__$1){var self__ = this;
var _49807__$1 = this;return (new clustermap.components.full_report.company_list.t49805(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta49806__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t49805 = ((function (comm){
return (function __GT_t49805(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta49806){return (new clustermap.components.full_report.company_list.t49805(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta49806));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t49805(comm,opts,owner,companies,company_list,null));
});

//# sourceMappingURL=company_list.js.map