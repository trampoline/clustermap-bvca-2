// Compiled by ClojureScript 0.0-2227
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
{var attrs45662 = link_fn.call(null,type,first_obj);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs45662))?sablono.interpreter.attributes.call(null,attrs45662):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45662))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45662),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__45671){var map__45684 = p__45671;var map__45684__$1 = ((cljs.core.seq_QMARK_.call(null,map__45684))?cljs.core.apply.call(null,cljs.core.hash_map,map__45684):map__45684);var opts = map__45684__$1;var path_fn = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__45684__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t45685 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t45685 = (function (company_path,link_fn,path_fn,opts,map__45684,p__45671,owner,company,portfolio_company,meta45686){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__45684 = map__45684;
this.p__45671 = p__45671;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta45686 = meta45686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t45685.cljs$lang$type = true;
clustermap.components.full_report.company_list.t45685.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t45685";
clustermap.components.full_report.company_list.t45685.cljs$lang$ctorPrWriter = ((function (company_path,map__45684,map__45684__$1,opts,path_fn,link_fn){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.full-report.company-list/t45685");
});})(company_path,map__45684,map__45684__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t45685.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t45685.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__45684,map__45684__$1,opts,path_fn,link_fn){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs45688 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs45688))?sablono.interpreter.attributes.call(null,attrs45688):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45688))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45688)], null))));
})(),(function (){var attrs45689 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs45689))?sablono.interpreter.attributes.call(null,attrs45689):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45689))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45689)], null))));
})(),(function (){var attrs45690 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__45695 = self__.company;var G__45695__$1 = (((G__45695 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__45695));var G__45695__$2 = (((G__45695__$1 == null))?null:cljs.core.filter.call(null,((function (G__45695,G__45695__$1,this__9410__auto____$1,company_path,map__45684,map__45684__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__45695,G__45695__$1,this__9410__auto____$1,company_path,map__45684,map__45684__$1,opts,path_fn,link_fn))
,G__45695__$1));return G__45695__$2;
})());return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs45690))?sablono.interpreter.attributes.call(null,attrs45690):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45690))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45690)], null))));
})(),(function (){var attrs45691 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs45691))?sablono.interpreter.attributes.call(null,attrs45691):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45691))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3539__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45691),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3539__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs45692 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs45692))?sablono.interpreter.attributes.call(null,attrs45692):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45692))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45692)], null))));
})(),(function (){var attrs45693 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs45693))?sablono.interpreter.attributes.call(null,attrs45693):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45693))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45693)], null))));
})(),(function (){var attrs45694 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs45694))?sablono.interpreter.attributes.call(null,attrs45694):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45694))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3539__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45694),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3539__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__45684,map__45684__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t45685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__45684,map__45684__$1,opts,path_fn,link_fn){
return (function (_45687){var self__ = this;
var _45687__$1 = this;return self__.meta45686;
});})(company_path,map__45684,map__45684__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t45685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__45684,map__45684__$1,opts,path_fn,link_fn){
return (function (_45687,meta45686__$1){var self__ = this;
var _45687__$1 = this;return (new clustermap.components.full_report.company_list.t45685(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__45684,self__.p__45671,self__.owner,self__.company,self__.portfolio_company,meta45686__$1));
});})(company_path,map__45684,map__45684__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t45685 = ((function (company_path,map__45684,map__45684__$1,opts,path_fn,link_fn){
return (function __GT_t45685(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__45684__$2,p__45671__$1,owner__$1,company__$1,portfolio_company__$1,meta45686){return (new clustermap.components.full_report.company_list.t45685(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__45684__$2,p__45671__$1,owner__$1,company__$1,portfolio_company__$1,meta45686));
});})(company_path,map__45684,map__45684__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t45685(company_path,link_fn,path_fn,opts,map__45684__$1,p__45671,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t45716 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t45716 = (function (comm,opts,owner,companies,company_list,meta45717){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta45717 = meta45717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t45716.cljs$lang$type = true;
clustermap.components.full_report.company_list.t45716.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t45716";
clustermap.components.full_report.company_list.t45716.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.full-report.company-list/t45716");
});})(comm))
;
clustermap.components.full_report.company_list.t45716.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t45716.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;var attrs45719 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs45719))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs45719)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45719))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs45720 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs45720))?sablono.interpreter.attributes.call(null,attrs45720):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45720))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45720)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs45725 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs45725))?sablono.interpreter.attributes.call(null,attrs45725):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45725))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45725)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs45726 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs45726))?sablono.interpreter.attributes.call(null,attrs45726):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45726))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45726)], null))));
})())),(function (){var attrs45727 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs45727))?sablono.interpreter.attributes.call(null,attrs45727):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45727))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45727)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45719),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs45728 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs45728))?sablono.interpreter.attributes.call(null,attrs45728):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45728))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45728)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs45733 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs45733))?sablono.interpreter.attributes.call(null,attrs45733):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45733))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45733)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs45734 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs45734))?sablono.interpreter.attributes.call(null,attrs45734):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45734))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45734)], null))));
})())),(function (){var attrs45735 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs45735))?sablono.interpreter.attributes.call(null,attrs45735):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs45735))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs45735)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308)))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t45716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_45718){var self__ = this;
var _45718__$1 = this;return self__.meta45717;
});})(comm))
;
clustermap.components.full_report.company_list.t45716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_45718,meta45717__$1){var self__ = this;
var _45718__$1 = this;return (new clustermap.components.full_report.company_list.t45716(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta45717__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t45716 = ((function (comm){
return (function __GT_t45716(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta45717){return (new clustermap.components.full_report.company_list.t45716(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta45717));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t45716(comm,opts,owner,companies,company_list,null));
});
