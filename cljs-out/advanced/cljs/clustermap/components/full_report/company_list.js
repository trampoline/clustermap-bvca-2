// Compiled by ClojureScript 0.0-2261
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs36707 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36707))?sablono.interpreter.attributes(attrs36707):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36707))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36707),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__36716){var map__36729 = p__36716;var map__36729__$1 = ((cljs.core.seq_QMARK_(map__36729))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36729):map__36729);var opts = map__36729__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36729__$1,cljs.core.constant$keyword$880);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36729__$1,cljs.core.constant$keyword$881);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$882,company) : path_fn.call(null,cljs.core.constant$keyword$882,company));if(typeof clustermap.components.full_report.company_list.t36730 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t36730 = (function (company_path,link_fn,path_fn,opts,map__36729,p__36716,owner,company,portfolio_company,meta36731){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__36729 = map__36729;
this.p__36716 = p__36716;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta36731 = meta36731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t36730.cljs$lang$type = true;
clustermap.components.full_report.company_list.t36730.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t36730";
clustermap.components.full_report.company_list.t36730.cljs$lang$ctorPrWriter = ((function (company_path,map__36729,map__36729__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t36730");
});})(company_path,map__36729,map__36729__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36730.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t36730.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__36729,map__36729__$1,opts,path_fn,link_fn){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs36733 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$882,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$882,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36733))?sablono.interpreter.attributes(attrs36733):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36733))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36733)], null))));
})(),(function (){var attrs36734 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$883,cljs.core.constant$keyword$884.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36734))?sablono.interpreter.attributes(attrs36734):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36734))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36734)], null))));
})(),(function (){var attrs36735 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$885,(function (){var G__36740 = self__.company;var G__36740__$1 = (((G__36740 == null))?null:cljs.core.constant$keyword$795.cljs$core$IFn$_invoke$arity$1(G__36740));var G__36740__$2 = (((G__36740__$1 == null))?null:cljs.core.filter(((function (G__36740,G__36740__$1,this__9454__auto____$1,company_path,map__36729,map__36729__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$886.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__36740,G__36740__$1,this__9454__auto____$1,company_path,map__36729,map__36729__$1,opts,path_fn,link_fn))
,G__36740__$1));return G__36740__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36735))?sablono.interpreter.attributes(attrs36735):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36735))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36735)], null))));
})(),(function (){var attrs36736 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36736))?sablono.interpreter.attributes(attrs36736):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36736))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$887.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36736),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$887.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs36737 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$888.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36737))?sablono.interpreter.attributes(attrs36737):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36737))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36737)], null))));
})(),(function (){var attrs36738 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$888.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$888.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$807,(2),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36738))?sablono.interpreter.attributes(attrs36738):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36738))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36738)], null))));
})(),(function (){var attrs36739 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$889.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$889.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$809,(0),cljs.core.constant$keyword$759,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36739))?sablono.interpreter.attributes(attrs36739):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36739))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$887.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36739),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$887.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__36729,map__36729__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__36729,map__36729__$1,opts,path_fn,link_fn){
return (function (_36732){var self__ = this;
var _36732__$1 = this;return self__.meta36731;
});})(company_path,map__36729,map__36729__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__36729,map__36729__$1,opts,path_fn,link_fn){
return (function (_36732,meta36731__$1){var self__ = this;
var _36732__$1 = this;return (new clustermap.components.full_report.company_list.t36730(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__36729,self__.p__36716,self__.owner,self__.company,self__.portfolio_company,meta36731__$1));
});})(company_path,map__36729,map__36729__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t36730 = ((function (company_path,map__36729,map__36729__$1,opts,path_fn,link_fn){
return (function __GT_t36730(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36729__$2,p__36716__$1,owner__$1,company__$1,portfolio_company__$1,meta36731){return (new clustermap.components.full_report.company_list.t36730(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36729__$2,p__36716__$1,owner__$1,company__$1,portfolio_company__$1,meta36731));
});})(company_path,map__36729,map__36729__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t36730(company_path,link_fn,path_fn,opts,map__36729__$1,p__36716,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$890);if(typeof clustermap.components.full_report.company_list.t36761 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t36761 = (function (comm,opts,owner,companies,company_list,meta36762){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta36762 = meta36762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t36761.cljs$lang$type = true;
clustermap.components.full_report.company_list.t36761.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t36761";
clustermap.components.full_report.company_list.t36761.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t36761");
});})(comm))
;
clustermap.components.full_report.company_list.t36761.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t36761.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;var attrs36764 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$891);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36764))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs36764], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36764))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36765 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Investor-backed company",cljs.core.constant$keyword$827);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36765))?sablono.interpreter.attributes(attrs36765):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36765))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36765)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs36770 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Revenue",cljs.core.constant$keyword$789);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36770))?sablono.interpreter.attributes(attrs36770):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36770))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36770)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Rev. change",cljs.core.constant$keyword$888))),(function (){var attrs36771 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Employees",cljs.core.constant$keyword$889);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36771))?sablono.interpreter.attributes(attrs36771):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36771))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36771)], null))));
})())),(function (){var attrs36772 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$870,cljs.core.constant$keyword$893,cljs.core.constant$keyword$873,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36772))?sablono.interpreter.attributes(attrs36772):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36772))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36772)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$891))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36764),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36773 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Investor-backed company",cljs.core.constant$keyword$827);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36773))?sablono.interpreter.attributes(attrs36773):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36773))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36773)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs36778 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Revenue",cljs.core.constant$keyword$789);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36778))?sablono.interpreter.attributes(attrs36778):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36778))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36778)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Rev. change",cljs.core.constant$keyword$888))),(function (){var attrs36779 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$891,"Employees",cljs.core.constant$keyword$889);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36779))?sablono.interpreter.attributes(attrs36779):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36779))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36779)], null))));
})())),(function (){var attrs36780 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$870,cljs.core.constant$keyword$893,cljs.core.constant$keyword$873,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36780))?sablono.interpreter.attributes(attrs36780):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36780))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36780)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$891))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t36761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_36763){var self__ = this;
var _36763__$1 = this;return self__.meta36762;
});})(comm))
;
clustermap.components.full_report.company_list.t36761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_36763,meta36762__$1){var self__ = this;
var _36763__$1 = this;return (new clustermap.components.full_report.company_list.t36761(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta36762__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t36761 = ((function (comm){
return (function __GT_t36761(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta36762){return (new clustermap.components.full_report.company_list.t36761(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta36762));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t36761(comm,opts,owner,companies,company_list,null));
});
