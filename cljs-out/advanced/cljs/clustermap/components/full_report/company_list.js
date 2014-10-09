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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs46534 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs46534))?sablono.interpreter.attributes(attrs46534):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46534))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46534),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__46543){var map__46556 = p__46543;var map__46556__$1 = ((cljs.core.seq_QMARK_(map__46556))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46556):map__46556);var opts = map__46556__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46556__$1,cljs.core.constant$keyword$1374);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46556__$1,cljs.core.constant$keyword$1375);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1376,company) : path_fn.call(null,cljs.core.constant$keyword$1376,company));if(typeof clustermap.components.full_report.company_list.t46557 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t46557 = (function (company_path,link_fn,path_fn,opts,map__46556,p__46543,owner,company,portfolio_company,meta46558){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__46556 = map__46556;
this.p__46543 = p__46543;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta46558 = meta46558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t46557.cljs$lang$type = true;
clustermap.components.full_report.company_list.t46557.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t46557";
clustermap.components.full_report.company_list.t46557.cljs$lang$ctorPrWriter = ((function (company_path,map__46556,map__46556__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t46557");
});})(company_path,map__46556,map__46556__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t46557.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t46557.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__46556,map__46556__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs46560 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1376,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$1376,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46560))?sablono.interpreter.attributes(attrs46560):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46560))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46560)], null))));
})(),(function (){var attrs46561 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1377,cljs.core.constant$keyword$1378.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46561))?sablono.interpreter.attributes(attrs46561):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46561))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46561)], null))));
})(),(function (){var attrs46562 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1379,(function (){var G__46567 = self__.company;var G__46567__$1 = (((G__46567 == null))?null:cljs.core.constant$keyword$1132.cljs$core$IFn$_invoke$arity$1(G__46567));var G__46567__$2 = (((G__46567__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__46567,G__46567__$1,this__9504__auto____$1,company_path,map__46556,map__46556__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$1380.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__46567,G__46567__$1,this__9504__auto____$1,company_path,map__46556,map__46556__$1,opts,path_fn,link_fn))
,G__46567__$1));return G__46567__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46562))?sablono.interpreter.attributes(attrs46562):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46562))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46562)], null))));
})(),(function (){var attrs46563 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1381.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1381.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46563))?sablono.interpreter.attributes(attrs46563):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46563))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1382.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46563),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1382.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs46564 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$1383.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46564))?sablono.interpreter.attributes(attrs46564):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46564))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46564)], null))));
})(),(function (){var attrs46565 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1383.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1383.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46565))?sablono.interpreter.attributes(attrs46565):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46565))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46565)], null))));
})(),(function (){var attrs46566 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1384.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1130,(0),cljs.core.constant$keyword$1085,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$1384.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1130,(0),cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46566))?sablono.interpreter.attributes(attrs46566):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46566))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1382.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46566),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1382.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__46556,map__46556__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t46557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__46556,map__46556__$1,opts,path_fn,link_fn){
return (function (_46559){var self__ = this;
var _46559__$1 = this;return self__.meta46558;
});})(company_path,map__46556,map__46556__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t46557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__46556,map__46556__$1,opts,path_fn,link_fn){
return (function (_46559,meta46558__$1){var self__ = this;
var _46559__$1 = this;return (new clustermap.components.full_report.company_list.t46557(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__46556,self__.p__46543,self__.owner,self__.company,self__.portfolio_company,meta46558__$1));
});})(company_path,map__46556,map__46556__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t46557 = ((function (company_path,map__46556,map__46556__$1,opts,path_fn,link_fn){
return (function __GT_t46557(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__46556__$2,p__46543__$1,owner__$1,company__$1,portfolio_company__$1,meta46558){return (new clustermap.components.full_report.company_list.t46557(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__46556__$2,p__46543__$1,owner__$1,company__$1,portfolio_company__$1,meta46558));
});})(company_path,map__46556,map__46556__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t46557(company_path,link_fn,path_fn,opts,map__46556__$1,p__46543,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1385);if(typeof clustermap.components.full_report.company_list.t46588 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t46588 = (function (comm,opts,owner,companies,company_list,meta46589){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta46589 = meta46589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t46588.cljs$lang$type = true;
clustermap.components.full_report.company_list.t46588.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t46588";
clustermap.components.full_report.company_list.t46588.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t46588");
});})(comm))
;
clustermap.components.full_report.company_list.t46588.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t46588.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs46591 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1386);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs46591))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs46591], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46591))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs46592 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Investor-backed company",cljs.core.constant$keyword$1156);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46592))?sablono.interpreter.attributes(attrs46592):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46592))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46592)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs46597 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Revenue",cljs.core.constant$keyword$1381);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46597))?sablono.interpreter.attributes(attrs46597):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46597))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46597)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Rev. change",cljs.core.constant$keyword$1383))),(function (){var attrs46598 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Employees",cljs.core.constant$keyword$1384);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46598))?sablono.interpreter.attributes(attrs46598):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46598))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46598)], null))));
})())),(function (){var attrs46599 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1387.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1388,cljs.core.constant$keyword$1200,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs46599))?sablono.interpreter.attributes(attrs46599):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46599))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46599)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1386))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46591),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs46600 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Investor-backed company",cljs.core.constant$keyword$1156);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46600))?sablono.interpreter.attributes(attrs46600):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46600))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46600)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs46605 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Revenue",cljs.core.constant$keyword$1381);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46605))?sablono.interpreter.attributes(attrs46605):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46605))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46605)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Rev. change",cljs.core.constant$keyword$1383))),(function (){var attrs46606 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1386,"Employees",cljs.core.constant$keyword$1384);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46606))?sablono.interpreter.attributes(attrs46606):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46606))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46606)], null))));
})())),(function (){var attrs46607 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1387.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1388,cljs.core.constant$keyword$1200,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs46607))?sablono.interpreter.attributes(attrs46607):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46607)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1386))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t46588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_46590){var self__ = this;
var _46590__$1 = this;return self__.meta46589;
});})(comm))
;
clustermap.components.full_report.company_list.t46588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_46590,meta46589__$1){var self__ = this;
var _46590__$1 = this;return (new clustermap.components.full_report.company_list.t46588(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta46589__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t46588 = ((function (comm){
return (function __GT_t46588(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta46589){return (new clustermap.components.full_report.company_list.t46588(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta46589));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t46588(comm,opts,owner,companies,company_list,null));
});
