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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs38753 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38753))?sablono.interpreter.attributes(attrs38753):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38753))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38753),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__38762){var map__38775 = p__38762;var map__38775__$1 = ((cljs.core.seq_QMARK_(map__38775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38775):map__38775);var opts = map__38775__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,cljs.core.constant$keyword$889);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38775__$1,cljs.core.constant$keyword$890);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,company) : path_fn.call(null,cljs.core.constant$keyword$891,company));if(typeof clustermap.components.full_report.company_list.t38776 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38776 = (function (company_path,link_fn,path_fn,opts,map__38775,p__38762,owner,company,portfolio_company,meta38777){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__38775 = map__38775;
this.p__38762 = p__38762;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta38777 = meta38777;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38776.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38776.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38776";
clustermap.components.full_report.company_list.t38776.cljs$lang$ctorPrWriter = ((function (company_path,map__38775,map__38775__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t38776");
});})(company_path,map__38775,map__38775__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38776.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38776.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__38775,map__38775__$1,opts,path_fn,link_fn){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs38779 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$891,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38779))?sablono.interpreter.attributes(attrs38779):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38779))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38779)], null))));
})(),(function (){var attrs38780 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$892,cljs.core.constant$keyword$893.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38780))?sablono.interpreter.attributes(attrs38780):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38780))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38780)], null))));
})(),(function (){var attrs38781 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$894,(function (){var G__38786 = self__.company;var G__38786__$1 = (((G__38786 == null))?null:cljs.core.constant$keyword$804.cljs$core$IFn$_invoke$arity$1(G__38786));var G__38786__$2 = (((G__38786__$1 == null))?null:cljs.core.filter(((function (G__38786,G__38786__$1,this__9487__auto____$1,company_path,map__38775,map__38775__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$895.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__38786,G__38786__$1,this__9487__auto____$1,company_path,map__38775,map__38775__$1,opts,path_fn,link_fn))
,G__38786__$1));return G__38786__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38781))?sablono.interpreter.attributes(attrs38781):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38781))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38781)], null))));
})(),(function (){var attrs38782 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38782))?sablono.interpreter.attributes(attrs38782):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38782))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38782),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs38783 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$897.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38783))?sablono.interpreter.attributes(attrs38783):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38783))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38783)], null))));
})(),(function (){var attrs38784 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$897.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$897.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$816,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38784))?sablono.interpreter.attributes(attrs38784):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38784))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38784)], null))));
})(),(function (){var attrs38785 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$898.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$818,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38785))?sablono.interpreter.attributes(attrs38785):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38785))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38785),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__38775,map__38775__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38776.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__38775,map__38775__$1,opts,path_fn,link_fn){
return (function (_38778){var self__ = this;
var _38778__$1 = this;return self__.meta38777;
});})(company_path,map__38775,map__38775__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__38775,map__38775__$1,opts,path_fn,link_fn){
return (function (_38778,meta38777__$1){var self__ = this;
var _38778__$1 = this;return (new clustermap.components.full_report.company_list.t38776(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__38775,self__.p__38762,self__.owner,self__.company,self__.portfolio_company,meta38777__$1));
});})(company_path,map__38775,map__38775__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t38776 = ((function (company_path,map__38775,map__38775__$1,opts,path_fn,link_fn){
return (function __GT_t38776(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38775__$2,p__38762__$1,owner__$1,company__$1,portfolio_company__$1,meta38777){return (new clustermap.components.full_report.company_list.t38776(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38775__$2,p__38762__$1,owner__$1,company__$1,portfolio_company__$1,meta38777));
});})(company_path,map__38775,map__38775__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t38776(company_path,link_fn,path_fn,opts,map__38775__$1,p__38762,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$899);if(typeof clustermap.components.full_report.company_list.t38807 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38807 = (function (comm,opts,owner,companies,company_list,meta38808){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta38808 = meta38808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38807.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38807.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38807";
clustermap.components.full_report.company_list.t38807.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t38807");
});})(comm))
;
clustermap.components.full_report.company_list.t38807.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38807.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;var attrs38810 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$900);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38810))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$819,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs38810], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38810))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38811 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Investor-backed company",cljs.core.constant$keyword$836);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38811))?sablono.interpreter.attributes(attrs38811):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38811))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38811)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38816 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Revenue",cljs.core.constant$keyword$798);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38816))?sablono.interpreter.attributes(attrs38816):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38816))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38816)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Rev. change",cljs.core.constant$keyword$897))),(function (){var attrs38817 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Employees",cljs.core.constant$keyword$898);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38817))?sablono.interpreter.attributes(attrs38817):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38817))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38817)], null))));
})())),(function (){var attrs38818 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,cljs.core.constant$keyword$902,cljs.core.constant$keyword$882,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38818))?sablono.interpreter.attributes(attrs38818):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38818))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38818)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$900))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38810),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38819 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Investor-backed company",cljs.core.constant$keyword$836);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38819))?sablono.interpreter.attributes(attrs38819):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38819))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38819)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38824 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Revenue",cljs.core.constant$keyword$798);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38824))?sablono.interpreter.attributes(attrs38824):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38824))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38824)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Rev. change",cljs.core.constant$keyword$897))),(function (){var attrs38825 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$900,"Employees",cljs.core.constant$keyword$898);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38825))?sablono.interpreter.attributes(attrs38825):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38825))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38825)], null))));
})())),(function (){var attrs38826 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,cljs.core.constant$keyword$902,cljs.core.constant$keyword$882,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38826))?sablono.interpreter.attributes(attrs38826):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38826))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38826)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$900))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t38807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_38809){var self__ = this;
var _38809__$1 = this;return self__.meta38808;
});})(comm))
;
clustermap.components.full_report.company_list.t38807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_38809,meta38808__$1){var self__ = this;
var _38809__$1 = this;return (new clustermap.components.full_report.company_list.t38807(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta38808__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t38807 = ((function (comm){
return (function __GT_t38807(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38808){return (new clustermap.components.full_report.company_list.t38807(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38808));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t38807(comm,opts,owner,companies,company_list,null));
});
