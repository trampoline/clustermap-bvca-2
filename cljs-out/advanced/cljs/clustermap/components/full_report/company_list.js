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
{var attrs38740 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38740))?sablono.interpreter.attributes(attrs38740):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38740))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38740),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__38749){var map__38762 = p__38749;var map__38762__$1 = ((cljs.core.seq_QMARK_(map__38762))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38762):map__38762);var opts = map__38762__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38762__$1,cljs.core.constant$keyword$888);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38762__$1,cljs.core.constant$keyword$889);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$890,company) : path_fn.call(null,cljs.core.constant$keyword$890,company));if(typeof clustermap.components.full_report.company_list.t38763 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38763 = (function (company_path,link_fn,path_fn,opts,map__38762,p__38749,owner,company,portfolio_company,meta38764){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__38762 = map__38762;
this.p__38749 = p__38749;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta38764 = meta38764;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38763.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38763.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38763";
clustermap.components.full_report.company_list.t38763.cljs$lang$ctorPrWriter = ((function (company_path,map__38762,map__38762__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t38763");
});})(company_path,map__38762,map__38762__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38763.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38763.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__38762,map__38762__$1,opts,path_fn,link_fn){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs38766 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$890,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$890,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38766))?sablono.interpreter.attributes(attrs38766):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38766))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38766)], null))));
})(),(function (){var attrs38767 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$891,cljs.core.constant$keyword$892.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38767))?sablono.interpreter.attributes(attrs38767):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38767))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38767)], null))));
})(),(function (){var attrs38768 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$893,(function (){var G__38773 = self__.company;var G__38773__$1 = (((G__38773 == null))?null:cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(G__38773));var G__38773__$2 = (((G__38773__$1 == null))?null:cljs.core.filter(((function (G__38773,G__38773__$1,this__9486__auto____$1,company_path,map__38762,map__38762__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$894.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__38773,G__38773__$1,this__9486__auto____$1,company_path,map__38762,map__38762__$1,opts,path_fn,link_fn))
,G__38773__$1));return G__38773__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38768))?sablono.interpreter.attributes(attrs38768):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38768))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38768)], null))));
})(),(function (){var attrs38769 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38769))?sablono.interpreter.attributes(attrs38769):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38769))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$895.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38769),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$895.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs38770 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38770))?sablono.interpreter.attributes(attrs38770):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38770))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38770)], null))));
})(),(function (){var attrs38771 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$896.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$815,(2),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38771))?sablono.interpreter.attributes(attrs38771):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38771))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38771)], null))));
})(),(function (){var attrs38772 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$897.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$897.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$817,(0),cljs.core.constant$keyword$765,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38772))?sablono.interpreter.attributes(attrs38772):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38772))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$895.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38772),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$895.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__38762,map__38762__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38763.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__38762,map__38762__$1,opts,path_fn,link_fn){
return (function (_38765){var self__ = this;
var _38765__$1 = this;return self__.meta38764;
});})(company_path,map__38762,map__38762__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t38763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__38762,map__38762__$1,opts,path_fn,link_fn){
return (function (_38765,meta38764__$1){var self__ = this;
var _38765__$1 = this;return (new clustermap.components.full_report.company_list.t38763(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__38762,self__.p__38749,self__.owner,self__.company,self__.portfolio_company,meta38764__$1));
});})(company_path,map__38762,map__38762__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t38763 = ((function (company_path,map__38762,map__38762__$1,opts,path_fn,link_fn){
return (function __GT_t38763(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38762__$2,p__38749__$1,owner__$1,company__$1,portfolio_company__$1,meta38764){return (new clustermap.components.full_report.company_list.t38763(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38762__$2,p__38749__$1,owner__$1,company__$1,portfolio_company__$1,meta38764));
});})(company_path,map__38762,map__38762__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t38763(company_path,link_fn,path_fn,opts,map__38762__$1,p__38749,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$898);if(typeof clustermap.components.full_report.company_list.t38794 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t38794 = (function (comm,opts,owner,companies,company_list,meta38795){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta38795 = meta38795;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t38794.cljs$lang$type = true;
clustermap.components.full_report.company_list.t38794.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t38794";
clustermap.components.full_report.company_list.t38794.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t38794");
});})(comm))
;
clustermap.components.full_report.company_list.t38794.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t38794.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;var attrs38797 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$899);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38797))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs38797], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38797))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38798 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Investor-backed company",cljs.core.constant$keyword$835);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38798))?sablono.interpreter.attributes(attrs38798):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38798))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38798)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38803 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Revenue",cljs.core.constant$keyword$797);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38803))?sablono.interpreter.attributes(attrs38803):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38803))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38803)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Rev. change",cljs.core.constant$keyword$896))),(function (){var attrs38804 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Employees",cljs.core.constant$keyword$897);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38804))?sablono.interpreter.attributes(attrs38804):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38804))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38804)], null))));
})())),(function (){var attrs38805 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$878,cljs.core.constant$keyword$901,cljs.core.constant$keyword$881,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38805))?sablono.interpreter.attributes(attrs38805):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38805))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38805)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$899))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38797),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38806 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Investor-backed company",cljs.core.constant$keyword$835);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38806))?sablono.interpreter.attributes(attrs38806):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38806))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38806)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs38811 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Revenue",cljs.core.constant$keyword$797);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38811))?sablono.interpreter.attributes(attrs38811):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38811))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38811)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Rev. change",cljs.core.constant$keyword$896))),(function (){var attrs38812 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$899,"Employees",cljs.core.constant$keyword$897);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38812))?sablono.interpreter.attributes(attrs38812):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38812))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38812)], null))));
})())),(function (){var attrs38813 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$878,cljs.core.constant$keyword$901,cljs.core.constant$keyword$881,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38813))?sablono.interpreter.attributes(attrs38813):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38813))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38813)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$899))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t38794.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_38796){var self__ = this;
var _38796__$1 = this;return self__.meta38795;
});})(comm))
;
clustermap.components.full_report.company_list.t38794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_38796,meta38795__$1){var self__ = this;
var _38796__$1 = this;return (new clustermap.components.full_report.company_list.t38794(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta38795__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t38794 = ((function (comm){
return (function __GT_t38794(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38795){return (new clustermap.components.full_report.company_list.t38794(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta38795));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t38794(comm,opts,owner,companies,company_list,null));
});
